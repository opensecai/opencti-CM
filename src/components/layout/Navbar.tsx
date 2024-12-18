import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              CodeSec
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" className="text-sm">Documentation</Button>
            <Button variant="secondary" className="text-sm">Templates</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}