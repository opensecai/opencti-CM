import React from 'react';

interface DockerOutputContentProps {
  config: string;
}

export function DockerOutputContent({ config }: DockerOutputContentProps) {
  return (
    <div className="flex-1 relative">
      <pre className="absolute inset-0 overflow-auto rounded-lg bg-black/30 p-4 font-mono text-sm text-blue-200 custom-scrollbar whitespace-pre">
        {config || 'Select connectors and click Generate to see the configuration...'}
      </pre>
    </div>
  );
}