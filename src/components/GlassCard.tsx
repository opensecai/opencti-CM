import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl ${className}`}>
      {children}
    </div>
  );
}