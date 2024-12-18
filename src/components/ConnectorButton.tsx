import React from 'react';
import { Check } from 'lucide-react';
import { ConnectorButtonProps } from '../types/connector';

export function ConnectorButton({ name, isSelected, onToggle }: ConnectorButtonProps) {
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
      <span className="text-sm font-medium truncate flex-1 text-left mr-4">{name}</span>
      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center flex-shrink-0
        ${isSelected ? 'border-blue-400 bg-blue-400' : 'border-white/30'}`}>
        {isSelected && <Check className="w-3 h-3 text-white" />}
      </div>
    </button>
  );
}