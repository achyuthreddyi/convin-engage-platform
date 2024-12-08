'use client';
import { useState } from 'react';
import Navigation from './Layout/Navigation';
import Building from './components/Building';
import CampaignList from './components/CampaignList';

export default function Home() {
  const [currentView, setCurrentView] = useState('campaigns');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  return (
    <main className="flex">
      <Navigation onNavigate={handleNavigation} />
      <div className="flex-1">
        {currentView === 'campaigns' ? <CampaignList /> : <Building />}
      </div>
    </main>
  );
}
