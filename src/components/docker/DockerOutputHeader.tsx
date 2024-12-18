import React from 'react';
import { Copy, FileJson } from 'lucide-react';
import { Button } from '../ui/Button';
import { copyToClipboard } from '../../utils/clipboard';

interface DockerOutputHeaderProps {
  config: string;
}

export function DockerOutputHeader({ config }: DockerOutputHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <FileJson className="w-5 h-5 text-blue-300" />
        <h2 className="text-xl font-semibold">Configuration</h2>
      </div>
      {config && (
        <Button
          variant="secondary"
          onClick={() => copyToClipboard(config)}
          className="flex items-center gap-2 text-sm"
        >
          <Copy className="w-4 h-4" />
          <span>Copy</span>
        </Button>
      )}
    </div>
  );
}