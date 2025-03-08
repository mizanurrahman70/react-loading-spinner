import React from 'react';
import { Loader2 } from 'lucide-react';

export interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
  speed?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  color = 'currentColor',
  className = '',
  speed = 1,
}) => {
  const spinAnimation = `spin ${speed}s linear infinite`;

  return (
    <Loader2
      size={size}
      color={color}
      className={`animate-spin ${className}`}
      style={{ animation: spinAnimation }}
    />
  );
};