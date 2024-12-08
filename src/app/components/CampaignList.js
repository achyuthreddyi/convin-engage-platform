'use client';
import { useState } from 'react';
import mockData from '../../data/mockData.json';

export default function CampaignList() {
  const { campaigns } = mockData;
  const [filters, setFilters] = useState({
    segment: '',
    channel: ''
  });
  const [sortConfig, setSortConfig] = useState({
    key: '',
    direction: 'asc'
  });

  // Get unique values for filters
  const segments = [...new Set(campaigns.map(c => c.segment))];
  const channels = [...new Set(campaigns.map(c => c.channel.split(', ').flat()).flat())];

  const getStatusColor = (status) => {
    const colors = {
      Active: 'bg-green-100 text-green-800',
      Draft: 'bg-gray-100 text-gray-800',
      Scheduled: 'bg-yellow-100 text-yellow-800',
      Completed: 'bg-blue-100 text-blue-800',
      Paused: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const filteredAndSortedCampaigns = campaigns
    .filter(campaign => {
      const segmentMatch = !filters.segment || campaign.segment === filters.segment;
      const channelMatch = !filters.channel || campaign.channel.includes(filters.channel);
      return segmentMatch && channelMatch;
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];
      
      if (sortConfig.key === 'created') {
        aValue = new Date(a.created);
        bValue = new Date(b.created);
      } else if (sortConfig.key === 'reachCount') {
        aValue = Number(a.reachCount);
        bValue = Number(b.reachCount);
      }
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const SortIcon = ({ column }) => {
    if (sortConfig.key !== column) {
      return (
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }

    return sortConfig.direction === 'asc' ? (
      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-[calc(100vh-3.5rem)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Campaigns</h1>
          <div className="flex gap-4">
            <select
              value={filters.segment}
              onChange={(e) => setFilters(prev => ({ ...prev, segment: e.target.value }))}
              className="px-3 py-2 border rounded-lg text-sm text-gray-600"
            >
              <option value="">All Segments</option>
              {segments.map(segment => (
                <option key={segment} value={segment}>{segment}</option>
              ))}
            </select>
            <select
              value={filters.channel}
              onChange={(e) => setFilters(prev => ({ ...prev, channel: e.target.value }))}
              className="px-3 py-2 border rounded-lg text-sm text-gray-600"
            >
              <option value="">All Channels</option>
              {channels.map(channel => (
                <option key={channel} value={channel}>{channel}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <div className="grid grid-cols-[1fr_150px_150px_150px_120px_150px] gap-4 p-4 border-b border-gray-200 font-medium text-gray-700">
            <div>Name</div>
            <div>Segment</div>
            <div>Channel</div>
            <div>Status</div>
            <div 
              onClick={() => handleSort('reachCount')}
              className="cursor-pointer flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              Reach Count
              <SortIcon column="reachCount" />
            </div>
            <div 
              onClick={() => handleSort('created')}
              className="cursor-pointer flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              Created At
              <SortIcon column="created" />
            </div>
          </div>
          
          {filteredAndSortedCampaigns.map((campaign) => (
            <div 
              key={campaign.id}
              className="grid grid-cols-[1fr_150px_150px_150px_120px_150px] gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-800 font-medium">{campaign.name}</div>
              <div className="text-gray-600">{campaign.segment}</div>
              <div className="text-gray-600">{campaign.channel}</div>
              <div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
              </div>
              <div className="text-gray-600 tabular-nums">
                {campaign.reachCount.toLocaleString()}
              </div>
              <div className="text-gray-600">
                {new Date(campaign.created).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 