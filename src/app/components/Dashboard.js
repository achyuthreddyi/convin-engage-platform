'use client';
import { useEffect, useState } from 'react';
import mockData from '../../data/mockData.json';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const { campaigns } = mockData;
  const [metrics, setMetrics] = useState({
    totalReach: 0,
    activeCampaigns: 0,
    avgReachPerCampaign: 0,
    completionRate: 0
  });

  // Dummy data for monthly reach
  const monthlyReachData = [
    { month: 'Jan', reach: 12500 },
    { month: 'Feb', reach: 15800 },
    { month: 'Mar', reach: 18200 },
    { month: 'Apr', reach: 22000 },
    { month: 'May', reach: 19500 },
    { month: 'Jun', reach: 25000 },
    { month: 'Jul', reach: 28000 },
    { month: 'Aug', reach: 32000 },
  ];

  // Dummy data for campaign impact
  const campaignImpactData = [
    { week: 'Week 1', engagement: 65, conversion: 45 },
    { week: 'Week 2', engagement: 75, conversion: 52 },
    { week: 'Week 3', engagement: 85, conversion: 58 },
    { week: 'Week 4', engagement: 78, conversion: 62 },
    { week: 'Week 5', engagement: 90, conversion: 68 },
    { week: 'Week 6', engagement: 95, conversion: 72 },
  ];

  useEffect(() => {
    const totalReach = campaigns.reduce((sum, camp) => sum + camp.reachCount, 0);
    const activeCampaigns = campaigns.filter(camp => camp.status === 'Active').length;
    const avgReach = Math.round(totalReach / campaigns.length);
    const completedCampaigns = campaigns.filter(camp => camp.status === 'Completed').length;
    const completionRate = Math.round((completedCampaigns / campaigns.length) * 100);

    setMetrics({
      totalReach,
      activeCampaigns,
      avgReachPerCampaign: avgReach,
      completionRate
    });
  }, [campaigns]);

  const MetricCard = ({ title, value, subtitle }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900 mt-2">{value}</p>
      {subtitle && <p className="text-gray-600 text-sm mt-1">{subtitle}</p>}
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-[calc(100vh-3.5rem)]">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard 
            title="Total Reach" 
            value={metrics.totalReach.toLocaleString()}
            subtitle="Total audience reached"
          />
          <MetricCard 
            title="Active Campaigns" 
            value={metrics.activeCampaigns}
            subtitle="Currently running"
          />
          <MetricCard 
            title="Avg. Reach per Campaign" 
            value={metrics.avgReachPerCampaign.toLocaleString()}
            subtitle="Average performance"
          />
          <MetricCard 
            title="Conversion Rate" 
            value={`${metrics.completionRate}%`}
            subtitle="Campaign success rate"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Reach Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-gray-800 font-medium mb-4">Monthly Reach</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyReachData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reach" fill="#3b82f6" name="Audience Reach" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Campaign Impact Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-gray-800 font-medium mb-4">Campaign Impact</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={campaignImpactData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="#3b82f6" 
                    name="Engagement Rate (%)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="conversion" 
                    stroke="#10b981" 
                    name="Conversion Rate (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 