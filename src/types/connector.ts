export interface ConnectorSelectorProps {
  connectors: Record<string, string>;
  selectedConnectors: string[];
  setSelectedConnectors: (connectors: string[]) => void;
}

export interface ConnectorButtonProps {
  name: string;
  isSelected: boolean;
  onToggle: () => void;
}

export interface ConnectorGridProps {
  children: React.ReactNode;
}