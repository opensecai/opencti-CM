import React, { useState } from 'react';
import { FileText, Download, Terminal, Check } from 'lucide-react';
import { Button } from '../ui/Button';

interface DockerStatsProps {
  config: string;
}

export function DockerStats({ config }: DockerStatsProps) {
  const [copiedWget, setCopiedWget] = useState(false);
  const lineCount = config ? config.split('\n').length : 0;
  
  const downloadConfig = () => {
    const blob = new Blob([config], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'docker-compose.yml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyWget = async () => {
    const generatedUrl = `https://codesec.io/opencti-connectors/${Date.now()}.yml`;
    const wgetCommand = `wget -O docker-compose.yml ${generatedUrl}`;
    await navigator.clipboard.writeText(wgetCommand);
    setCopiedWget(true);
    setTimeout(() => setCopiedWget(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-between p-4 backdrop-blur-md bg-white/5 rounded-lg border border-white/10">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-200">{lineCount} lines</span>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button
          variant="secondary"
          className={`flex items-center gap-2 transition-colors duration-200 ${
            copiedWget ? 'bg-green-500/20 text-green-400' : ''
          }`}
          onClick={handleCopyWget}
        >
          {copiedWget ? (
            <Check className="w-4 h-4" />
          ) : (
            <Terminal className="w-4 h-4" />
          )}
          <span className="hidden sm:inline">
            {copiedWget ? 'Copied!' : 'Copy wget'}
          </span>
        </Button>
        
        <Button
          variant="secondary"
          className="flex items-center gap-2 hover:bg-blue-500/20"
          onClick={downloadConfig}
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download</span>
        </Button>
      </div>
    </div>
  );
}