'use client';
import { useState } from 'react';
import mockData from '../../data/mockData.json';

export default function SegmentList() {
  const { segments } = mockData;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSegments = segments.filter(segment => {
    const searchString = searchTerm.toLowerCase();
    const criteriaString = segment.criteria
      .map(c => `${c.type} ${c.value}`)
      .join(' ')
      .toLowerCase();

    return (
      segment.name.toLowerCase().includes(searchString) ||
      segment.description.toLowerCase().includes(searchString) ||
      criteriaString.includes(searchString)
    );
  });

  return (
    <div className="p-6 bg-gray-50 min-h-[calc(100vh-3.5rem)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Segments</h1>
          <div className="w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="Search segments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredSegments.map((segment) => (
            <div
              key={segment.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {segment.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{segment.description}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {segment.count.toLocaleString()} users
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Criteria:</h4>
                <div className="flex flex-wrap gap-2">
                  {segment.criteria.map((criterion, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                    >
                      <span className="font-medium mr-1">{criterion.type}:</span>
                      {criterion.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredSegments.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500">No segments found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 