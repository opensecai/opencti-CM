import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Instructions } from './components/layout/Instructions';
import { ConnectorGrid } from './components/connectors/ConnectorGrid';
import { DockerOutput } from './components/docker/DockerOutput';
import { DockerStats } from './components/docker/DockerStats';
import { GeneratedLink } from './components/docker/GeneratedLink';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { mainDockerCompose } from './data/mainDockerCompose';
import { connectors } from './data/connectors';
import { mergeDockerCompose } from './utils/dockerUtils';

function App() {
  const [selectedConnectors, setSelectedConnectors] = useState<string[]>([]);
  const [mergedConfig, setMergedConfig] = useState('');

  const handleToggleConnector = (name: string) => {
    setSelectedConnectors(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  const handleGenerateConfig = () => {
    const mergedYaml = mergeDockerCompose(
      mainDockerCompose,
      selectedConnectors,
      connectors
    );
    setMergedConfig(mergedYaml);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <Hero />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-semibold mb-4">Available Connectors</h2>
              <ConnectorGrid
                connectors={Object.keys(connectors)}
                selectedConnectors={selectedConnectors}
                onToggle={handleToggleConnector}
              />
              <Button
                onClick={handleGenerateConfig}
                disabled={selectedConnectors.length === 0}
                fullWidth
                className="mt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-200"
              >
                Generate Configuration
              </Button>
            </Card>
            <Instructions />
          </div>

          <div className="space-y-4">
            {mergedConfig && (
              <>
                <DockerStats config={mergedConfig} />
                <GeneratedLink config={mergedConfig} />
                <div className="h-[calc(100vh-20rem)] lg:h-[800px]">
                  <DockerOutput config={mergedConfig} />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;