import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl ${className}`}>
      {children}
    </div>
  );
}