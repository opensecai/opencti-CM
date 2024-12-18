import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Card } from '../ui/Card';

interface GeneratedLinkProps {
  config: string;
}

export function GeneratedLink({ config }: GeneratedLinkProps) {
  const [copied, setCopied] = useState(false);
  const generatedUrl = `https://codesec.me/opencti-connectors/${Date.now()}.yml`;
  const wgetCommand = `wget -O docker-compose.yml ${generatedUrl}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(wgetCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-4 backdrop-blur-md bg-white/5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-blue-200 mb-1">Generated Configuration Link</h3>
          <p className="text-xs text-blue-200/70 truncate">{generatedUrl}</p>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            copied 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-white/5 hover:bg-white/10 text-blue-300'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              <span className="text-sm">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span className="text-sm">Copy wget</span>
            </>
          )}
        </button>
      </div>
    </Card>
  );
}