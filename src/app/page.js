'use client';
import { useState } from 'react';
import Navigation from './Layout/Navigation';
import Building from './components/Building';
import CampaignList from './components/CampaignList';
import Dashboard from './components/Dashboard';

export default function Home() {
  const [currentView, setCurrentView] = useState('dashboard');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'campaigns':
        return <CampaignList />;
      default:
        return <Building />;
    }
  };

  return (
    <main className="flex">
      <Navigation onNavigate={handleNavigation} />
      <div className="flex-1">
        {renderContent()}
      </div>
    </main>
  );
}
