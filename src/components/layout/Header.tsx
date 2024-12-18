import React from 'react';
import { Server } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Server className="w-12 h-12 text-blue-400" />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          OpenCTI Connectors Merger
        </h1>
      </div>
      <p className="text-blue-200 max-w-2xl mx-auto">
        Streamline your OpenCTI deployment by easily combining and configuring multiple connectors.
        Choose from over 90 available connectors to enhance your threat intelligence platform.
      </p>
    </header>
  );
}