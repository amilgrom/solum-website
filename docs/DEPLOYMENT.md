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

Point your domain to GitHub Pages:

```
A Records:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

CNAME Record (if using www subdomain):
www → [username].github.io
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
npx serve out
```

Visit `http://localhost:3000` to preview the static site.
