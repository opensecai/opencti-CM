import React from 'react';
import { ConnectorButton } from './ConnectorButton';
import { ConnectorGrid } from './ConnectorGrid';
import { ConnectorSelectorProps } from '../types/connector';

export function ConnectorSelector({
  connectors,
  selectedConnectors,
  setSelectedConnectors,
}: ConnectorSelectorProps) {
  const toggleConnector = (connectorName: string) => {
    setSelectedConnectors(
      selectedConnectors.includes(connectorName)
        ? selectedConnectors.filter((name) => name !== connectorName)
        : [...selectedConnectors, connectorName]
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Available Connectors</h2>
      <ConnectorGrid>
        {Object.keys(connectors).map((connectorName) => (
          <ConnectorButton
            key={connectorName}
            name={connectorName}
            isSelected={selectedConnectors.includes(connectorName)}
            onToggle={() => toggleConnector(connectorName)}
          />
        ))}
      </ConnectorGrid>
    </div>
  );
}