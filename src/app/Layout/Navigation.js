'use client';
import { useState } from 'react';

export default function Navigation({ onNavigate }) {
  const [activeItem, setActiveItem] = useState('campaigns');

  const handleNavigation = (item) => {
    setActiveItem(item);
    onNavigate(item);
  };

  return (
    <nav className="w-64 border-r border-gray-200 h-[calc(100vh-3.5rem)] bg-white">
      <div className="p-4">
        <div className="space-y-2">
          {/* Campaigns Link */}
          <button 
            onClick={() => handleNavigation('campaigns')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 ${
              activeItem === 'campaigns' ? 'bg-gray-100' : ''
            }`}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-gray-700">Campaigns</span>
          </button>

          {/* Create Campaign Link */}
          <button 
            onClick={() => handleNavigation('create')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 ${
              activeItem === 'create' ? 'bg-gray-100' : ''
            }`}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-gray-700">Create Campaign</span>
          </button>
        </div>
      </div>
    </nav>
  );
} 