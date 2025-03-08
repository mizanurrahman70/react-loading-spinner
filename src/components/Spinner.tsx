import React from 'react';

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
  return (
    <div
      className={`spinner ${className}`}
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: 'transparent',
        animationDuration: `${speed}s`,
      }}
    />
  );
};