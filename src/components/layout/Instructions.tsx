import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';

export function Instructions() {
  const steps = [
    'Select connectors from the available categories',
    'Configure any required settings',
    'Generate your custom docker-compose.yml',
    'Copy and use in your project'
  ];

  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Quick Guide</h3>
      </div>
      <ul className="space-y-3 text-blue-200">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="font-semibold text-blue-400">{index + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}