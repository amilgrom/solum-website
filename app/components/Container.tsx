/**
 * Container Component
 *
 * Responsive max-width container with consistent padding
 *
 * Props:
 *   - children: React.ReactNode - Content to wrap
 *   - className?: string - Additional CSS classes
 *
 * Usage:
 *   <Container>
 *     <YourContent />
 *   </Container>
 */

import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container-responsive ${className}`}>
      {children}
    </div>
  );
}
