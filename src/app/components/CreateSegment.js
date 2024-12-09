'use client';
import { useState } from 'react';

export default function CreateSegment() {
  const [segmentName, setSegmentName] = useState('');
  const [description, setDescription] = useState('');
  const [conditions, setConditions] = useState([
    { field: 'Sentiment', operator: 'equals', value: '' }
  ]);

  const fields = [
    { id: 'Sentiment', name: 'Sentiment' },
    { id: 'LastActivity', name: 'Last Activity' },
    { id: 'Location', name: 'Location' },
    { id: 'MessageCount', name: 'Message Count' }
  ];

  const operators = [
    { id: 'equals', name: 'equals' },
    { id: 'contains', name: 'contains' },
    { id: 'greater_than', name: 'greater than' },
    { id: 'less_than', name: 'less than' }
  ];

  const addCondition = () => {
    setConditions([...conditions, { field: 'Sentiment', operator: 'equals', value: '' }]);
  };

  const removeCondition = (index) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  const updateCondition = (index, field, value) => {
    const newConditions = [...conditions];
    newConditions[index] = { ...newConditions[index], [field]: value };
    setConditions(newConditions);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create Segment</h1>
        <div className="space-x-3">
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Save Segment
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Segment Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Segment Name
              </label>
              <input
                type="text"
                value={segmentName}
                onChange={(e) => setSegmentName(e.target.value)}
                placeholder="Enter segment name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe this segment..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Conditions</h2>
          
          <div className="space-y-4">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-3">
                  <select
                    value={condition.field}
                    onChange={(e) => updateCondition(index, 'field', e.target.value)}
                    className="block w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {fields.map(field => (
                      <option key={field.id} value={field.id}>{field.name}</option>
                    ))}
                  </select>

                  <select
                    value={condition.operator}
                    onChange={(e) => updateCondition(index, 'operator', e.target.value)}
                    className="block w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {operators.map(operator => (
                      <option key={operator.id} value={operator.id}>{operator.name}</option>
                    ))}
                  </select>

                  <input
                    type="text"
                    value={condition.value}
                    onChange={(e) => updateCondition(index, 'value', e.target.value)}
                    placeholder="Enter value..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  onClick={() => removeCondition(index)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}

            <button
              onClick={addCondition}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Condition
            </button>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Preview</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              2 matching users
            </div>

            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded-md">
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-gray-500">Last conversation: 2024-12-07</div>
                <div className="text-sm text-gray-500">Sentiment: positive</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-md">
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-gray-500">Last conversation: 2024-12-05</div>
                <div className="text-sm text-gray-500">Sentiment: positive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 