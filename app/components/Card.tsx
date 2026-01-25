/**
 * Card Component
 *
 * Reusable card component with shadow, rounded corners, and hover effect
 *
 * Props:
 *   - children: React.ReactNode - Card content
 *   - className?: string - Additional CSS classes
 *   - hover?: boolean - Enable hover effect (default: false)
 *
 * Usage:
 *   <Card hover>
 *     <h3>Card Title</h3>
 *     <p>Card content...</p>
 *   </Card>
 */

import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-white rounded-lg shadow-md p-6';
  const hoverStyles = hover
    ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1'
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
