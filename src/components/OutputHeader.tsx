import React from 'react';
import { Copy, FileJson } from 'lucide-react';
import { OutputHeaderProps } from '../types/docker';
import { copyToClipboard } from '../utils/clipboard';

export function OutputHeader({ config }: OutputHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <FileJson className="w-5 h-5 text-blue-300" />
        <h2 className="text-xl font-semibold">Generated Configuration</h2>
      </div>
      {config && (
        <button
          onClick={() => copyToClipboard(config)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Copy className="w-4 h-4" />
          <span className="text-sm">Copy</span>
        </button>
      )}
    </div>
  );
}