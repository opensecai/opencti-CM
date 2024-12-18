import React from 'react';
import { Shield, Code } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Shield className="w-10 h-10 text-blue-400" />
        <Code className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          CodeSec
        </span>
        <span className="text-xs text-blue-300">Docker Compose Manager</span>
      </div>
    </div>
  );
}