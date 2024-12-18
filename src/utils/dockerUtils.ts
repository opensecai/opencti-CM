export function mergeDockerCompose(
  mainConfig: string,
  selectedConnectors: string[],
  connectors: Record<string, string>
): string {
  if (selectedConnectors.length === 0) return mainConfig;

  // Extract services section (everything before volumes:)
  const servicesSection = mainConfig.split('volumes:')[0];
  
  // Extract volumes section
  const volumesMatch = mainConfig.match(/volumes:[\s\S]+$/);
  const volumesSection = volumesMatch ? volumesMatch[0] : 'volumes:\n  esdata:\n  s3data:\n  redisdata:\n  amqpdata:';
  
  // Combine selected connector configurations
  const selectedConfigs = selectedConnectors
    .map(name => connectors[name])
    .join('\n');

  // Merge everything together
  return `${servicesSection}${selectedConfigs}\n\n${volumesSection}`;
}