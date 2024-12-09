'use client';
import { useState } from 'react';
import Navigation from './Layout/Navigation';
import Dashboard from './components/Dashboard';
import CampaignList from './components/CampaignList';
import CreateTemplate from './components/CreateTemplate';
import TemplateList from './components/TemplateList';
import SegmentList from './components/SegmentList';
import CreateSegment from './components/CreateSegment';

export default function Home() {
  const [currentView, setCurrentView] = useState('campaigns');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'campaigns':
        return <CampaignList />;
      case 'segments':
        return <SegmentList />;
      case 'createSegment':
        return <CreateSegment />;
      case 'templates':
        return <TemplateList />;
      case 'createTemplate':
        return <CreateTemplate />;
      default:
        return <CampaignList />;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex">
        <Navigation onNavigate={setCurrentView} />
        <div className="flex-1 p-8">{renderContent()}</div>
      </div>
    </main>
  );
}
