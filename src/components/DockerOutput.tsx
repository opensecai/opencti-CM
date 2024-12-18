import React from 'react';
import { OutputHeader } from './OutputHeader';
import { OutputContent } from './OutputContent';
import { DockerOutputProps } from '../types/docker';

export function DockerOutput({ config }: DockerOutputProps) {
  return (
    <div className="h-full flex flex-col">
      <OutputHeader config={config} />
      <OutputContent config={config} />
    </div>
  );
}