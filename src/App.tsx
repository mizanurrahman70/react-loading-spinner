import React from 'react';
import { Spinner } from './components/Spinner';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-gray-800">React Easy Loading Spinner Demo</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center gap-2">
          <Spinner size={24} />
          <span className="text-sm text-gray-600">Default</span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <Spinner size={32} color="#3B82F6" />
          <span className="text-sm text-gray-600">Blue</span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <Spinner size={40} color="#10B981" speed={1.5} />
          <span className="text-sm text-gray-600">Large Green</span>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <Spinner size={48} color="#EC4899" speed={0.75} />
          <span className="text-sm text-gray-600">Extra Large Pink</span>
        </div>
      </div>
      
      <div className="text-center max-w-md px-4">
        <h2 className="text-xl font-semibold mb-2">Usage</h2>
        <code className="block bg-gray-800 text-white p-4 rounded-md text-sm">
          {`import { Spinner } from '@react-easy-loading-spinner';\n\n<Spinner size={24} color="#3B82F6" speed={1} />`}
        </code>
      </div>
    </div>
  );
}

export default App;