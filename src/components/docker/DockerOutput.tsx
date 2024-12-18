import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { DockerOutputHeader } from './DockerOutputHeader';
import { Copy, Check } from 'lucide-react';

interface DockerOutputProps {
  config: string;
}

export function DockerOutput({ config }: DockerOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(config);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="h-full flex flex-col relative group">
      <DockerOutputHeader config={config} />
      <div className="flex-1 relative">
        <pre className="absolute inset-0 overflow-auto rounded-lg bg-black/30 p-4 font-mono text-sm text-blue-200 custom-scrollbar whitespace-pre">
          {config || 'Select connectors and click Generate to see the configuration...'}
        </pre>
        
        <button
          onClick={handleCopy}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 ${
            copied 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-white/5 hover:bg-white/10 text-blue-300'
          }`}
        >
          {copied ? (
            <Check className="w-5 h-5" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </button>
      </div>
    </Card>
  );
}