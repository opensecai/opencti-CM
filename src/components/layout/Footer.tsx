import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              CodeSec
            </span>
          </div>
          <p className="text-sm text-blue-200 text-center">
            OpenCTI Connectors Merger - Streamline your security infrastructure
          </p>
          <p className="text-sm text-blue-200/60">
            © {new Date().getFullYear()} CodeSec. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}