import React from 'react';
import { Terminal, ArrowRight, Box } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-50" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 20.93 9.9l8.485-8.485h-1.414zM32.658 0l-8.485 8.485L25.587 9.9l8.485-8.485h-1.414zm5.656 0l-8.485 8.485L31.243 9.9l8.485-8.485h-1.414zm5.656 0l-8.485 8.485L36.9 9.9l8.485-8.485h-1.414zm5.656 0l-8.485 8.485L42.556 9.9l8.485-8.485h-1.414zm5.656 0l-8.485 8.485L48.212 9.9l8.485-8.485h-1.414zM1.414 0L0 1.414l8.485 8.485h1.414L1.414 0zm5.656 0L5.657 1.414 14.142 9.9h1.414L7.07 0zm5.656 0l-1.414 1.414L20.799 9.9h1.414L12.728 0zm5.656 0l-1.414 1.414L26.455 9.9h1.414L18.384 0zm5.656 0l-1.414 1.414L32.111 9.9h1.414L24.04 0zm5.656 0l-1.414 1.414L37.768 9.9h1.414L29.697 0zm5.656 0l-1.414 1.414L43.424 9.9h1.414L35.353 0zm5.656 0l-1.414 1.414L49.08 9.9h1.414L41.01 0zm5.656 0l-1.414 1.414L54.737 9.9h1.414L46.666 0zm5.656 0l-1.414 1.414L60.393 9.9h1.414L52.322 0zM60.4 0h-2.83l1.415 1.415L60.4 0zm5.656 0h-2.83l1.415 1.415L66.056 0zM71.713 0h-2.83l1.415 1.415L71.713 0zM77.37 0h-2.83l1.415 1.415L77.37 0zm5.656 0h-2.83l1.415 1.415L83.026 0zm5.656 0h-2.83l1.415 1.415L88.682 0zm5.656 0h-2.83l1.415 1.415L94.338 0zm5.656 0h-2.83l1.415 1.415L99.994 0zm5.656 0h-2.83l1.415 1.415L105.65 0z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            <span className="block text-white">Docker Compose</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Configuration Generator
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-200">
            Generate production-ready Docker Compose configurations with ease.
            Choose from over 90 pre-configured services and connectors.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="group">
              <Terminal className="mr-2 w-4 h-4" />
              View Examples
            </Button>
          </div>

          {/* Feature boxes */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '90+ Connectors',
                description: 'Choose from a wide range of pre-configured services',
                icon: Box
              },
              {
                title: 'One-Click Deploy',
                description: 'Generate and download your configuration instantly',
                icon: Terminal
              },
              {
                title: 'Version Control',
                description: 'Track changes and manage configurations easily',
                icon: ArrowRight
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-6 bg-black/30 backdrop-blur-lg rounded-lg border border-white/10">
                  <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-blue-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}