import React from 'react';
import { ConnectorGridProps } from '../types/connector';

export function ConnectorGrid({ children }: ConnectorGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      {children}
    </div>
  );
}