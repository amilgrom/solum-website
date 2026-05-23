# Deployment Guide

## Overview

This site is deployed to GitHub Pages using GitHub Actions for automated build and deployment.

## Prerequisites

- GitHub repository with Pages enabled
- Custom domain `solumreg.com` configured in repository settings
- DNS records pointing to GitHub Pages

## Deployment Process

### Automatic Deployment

Every push to the `main` branch automatically triggers a deployment:

1. GitHub Actions workflow runs (`.github/workflows/deploy.yml`)
2. Dependencies are installed with `npm ci`
3. Site is built with `npm run build` (outputs to `out/` directory)
4. Static files are uploaded to GitHub Pages artifact
5. Artifact is deployed to GitHub Pages

### Manual Deployment

You can also trigger a deployment manually:

1. Go to repository → Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select `main` branch
5. Click "Run workflow"

## GitHub Pages Configuration

### Repository Settings

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. Custom domain: `solumreg.com`
4. Enforce HTTPS: Enabled (recommended)

### DNS Configuration

Domain registrar: **Porkbun** (porkbun.com) — log in there to manage DNS records.

Point your domain to GitHub Pages:

```
A Records (Host: leave blank):
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

CNAME Record:
Host: www → amilgrom.github.io
```

## Workflow Details

### Build Job
- Runs on: `ubuntu-latest`
- Node version: 20
- Uses npm cache for faster builds
- Outputs static files to `out/` directory

### Deploy Job
- Requires build job to complete
- Uses GitHub Pages deployment action
- Deploys to `github-pages` environment
- Provides deployment URL in output

## Troubleshooting

### Build Failures

Check GitHub Actions logs:
1. Go to repository → Actions tab
2. Click on failed workflow run
3. Review build logs for errors

Common issues:
- TypeScript errors: Fix in code and push
- Missing dependencies: Ensure package.json is up to date
- Build timeout: Optimize build process or contact GitHub support

### Deployment Not Live

1. Verify GitHub Pages is enabled in repository settings
2. Check DNS configuration for custom domain
3. Wait for DNS propagation (can take up to 24 hours)
4. Verify CNAME file exists in `public/` directory

### 404 Errors

- Ensure `output: 'export'` is set in `next.config.ts`
- Verify Next.js App Router paths match expected routes
- Check browser console for asset loading errors

## Local Testing

Test the production build locally:

```bash
npm run build
npx serve out -p 3000
```

Visit `http://localhost:3000/solum-website/` to preview the static site.

## Staging and Testing Strategies

### Current Setup (Option 4)

The site is configured with `basePath: '/solum-website'` in `next.config.ts` and a `CNAME` file pointing to `solumreg.com`. This enables dual URL support:

- **Staging URL**: `https://amilgrom.github.io/solum-website/`
- **Production URL**: `https://solumreg.com` (once DNS is configured)

**Current Workflow:**
1. Push changes to `main` branch
2. Test and verify at GitHub Pages URL (`amilgrom.github.io/solum-website/`)
3. When satisfied, configure DNS to point to GitHub Pages
4. Site automatically goes live at `solumreg.com`
5. Both URLs serve the same content

**Advantages:**
- Simple setup, single repository
- Full production-quality testing before DNS configuration
- No code changes needed to go live (just DNS update)

**Limitations:**
- Both URLs show same content once DNS is configured
- No true "staging environment" separate from production

### Future Option: Separate Staging Repository (Option 1)

When true staging/production separation is needed:

**Production Repository**: `solum-website`
- Remove `basePath` from `next.config.ts`
- Keep `CNAME` with `solumreg.com`
- Configure DNS to GitHub Pages
- **URL**: `https://solumreg.com`

**Staging Repository**: `solum-website-staging`
- Add `basePath: '/solum-website-staging'` to `next.config.ts`
- No `CNAME` file
- **URL**: `https://amilgrom.github.io/solum-website-staging/`

**Workflow:**
1. Make changes in staging repository
2. Push and verify at `amilgrom.github.io/solum-website-staging/`
3. When approved, merge/copy changes to production repository
4. Push to production → live at `solumreg.com`

**Advantages:**
- Complete separation of staging and production
- Production remains stable during testing
- Full GitHub Pages deployment testing in staging

**Disadvantages:**
- Maintaining two repositories
- Manual sync process between staging and production

### Alternative Options

#### Option 2: Local Production Testing Only

**Setup:**
- Keep current dual URL configuration
- Test locally before pushing

**Workflow:**
```bash
npm run build
npx serve out -p 3000
# Visit http://localhost:3000/solum-website/
```

**Advantages:**
- Simplest approach
- No extra repository needed

**Disadvantages:**
- Not testing actual GitHub Pages deployment
- Only tests the build, not the hosting environment

#### Option 3: Hybrid with Vercel/Netlify

**Setup:**
- **GitHub Pages** → Production (`solumreg.com`)
- **Vercel** → Automatic preview deployments for every PR/branch

**Workflow:**
1. Create pull request
2. Vercel automatically generates preview URL
3. Review and test preview deployment
4. Merge to main → deploys to GitHub Pages production

**Advantages:**
- Best developer experience
- Automatic preview URLs for every change
- True production-like staging environment

**Disadvantages:**
- Using two different hosting platforms
- Additional service configuration

## Transitioning from Current Setup to Staging Repository

When ready to move from Option 4 to Option 1:

1. **Create staging repository:**
   ```bash
   # Clone current repository
   git clone https://github.com/amilgrom/solum-website.git solum-website-staging
   cd solum-website-staging

   # Create new repository on GitHub: solum-website-staging
   git remote set-url origin https://github.com/amilgrom/solum-website-staging.git

   # Update next.config.ts basePath to '/solum-website-staging'
   # Remove CNAME file

   git add .
   git commit -m "chore: configure for staging environment"
   git push -u origin main
   ```

2. **Update production repository:**
   ```bash
   cd ../solum-website

   # Remove basePath from next.config.ts
   # Keep CNAME file

   git add next.config.ts
   git commit -m "chore: remove basePath for production domain"
   git push
   ```

3. **Configure DNS** (when ready to go live):
   - Point `solumreg.com` A records to GitHub Pages IPs
   - Site goes live at production URL

4. **Development workflow:**
   - Work in `solum-website-staging` repository
   - Test at staging URL
   - When approved, merge changes to `solum-website`
   - Production automatically deploys
