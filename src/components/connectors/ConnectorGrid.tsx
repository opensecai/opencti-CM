import React from 'react';
import { ConnectorCard } from './ConnectorCard';

interface ConnectorGridProps {
  connectors: string[];
  selectedConnectors: string[];
  onToggle: (name: string) => void;
}

export function ConnectorGrid({ connectors, selectedConnectors, onToggle }: ConnectorGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      {connectors.map((name) => (
        <ConnectorCard
          key={name}
          name={name}
          isSelected={selectedConnectors.includes(name)}
          onToggle={() => onToggle(name)}
        />
      ))}
    </div>
  );
}