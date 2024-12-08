'use client';
import mockData from '../../data/mockData.json';

export default function CampaignList() {
  const { campaigns } = mockData;

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

  return (
    <div className="p-6 bg-gray-50 min-h-[calc(100vh-3.5rem)]">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Campaigns</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="grid grid-cols-[1fr_150px_150px_150px_120px] gap-4 p-4 border-b border-gray-200 font-medium text-gray-700">
            <div>Name</div>
            <div>Segment</div>
            <div>Channel</div>
            <div>Status</div>
            <div>Reach Count</div>
          </div>
          
          {campaigns.map((campaign) => (
            <div 
              key={campaign.id}
              className="grid grid-cols-[1fr_150px_150px_150px_120px] gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-800 font-medium">{campaign.name}</div>
              <div className="text-gray-600">{campaign.segment}</div>
              <div className="text-gray-600">{campaign.channel}</div>
              <div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
              </div>
              <div className="text-gray-600">{campaign.reachCount.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 