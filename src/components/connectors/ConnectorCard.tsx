import React from 'react';
import { Check } from 'lucide-react';

interface ConnectorCardProps {
  name: string;
  isSelected: boolean;
  onToggle: () => void;
}

export function ConnectorCard({ name, isSelected, onToggle }: ConnectorCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 w-full
        ${
          isSelected
            ? 'border-blue-400 bg-blue-500/10 text-blue-300'
            : 'border-white/10 hover:border-blue-400/30 bg-white/5 text-white/80 hover:text-white'
        }`}
    >
      <span className="text-sm font-medium truncate mr-2">{name}</span>
      <div className={`w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all duration-200 flex items-center justify-center
        ${isSelected ? 'border-blue-400 bg-blue-400' : 'border-white/30'}`}>
        {isSelected && <Check className="w-3 h-3 text-white" />}
      </div>
    </button>
  );
}