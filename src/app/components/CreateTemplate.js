'use client';
import { useState } from 'react';

export default function CreateTemplate() {
  const [template, setTemplate] = useState({
    name: '',
    channel: '',
    subject: '',
    message: '',
  });

  const channels = [
    { id: 'whatsapp', name: 'WhatsApp' },
    { id: 'email', name: 'Email' },
    { id: 'voicebot', name: 'Voice Bot' },
    { id: 'sms', name: 'SMS' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Template Data:', template);
    // Handle form submission
  };

  return (
    <div className="p-6 bg-gray-50 min-h-[calc(100vh-3.5rem)]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Create Message Template</h1>
          <p className="text-gray-600 mt-1">Design a new message template for your campaigns</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            {/* Template Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Template Name
              </label>
              <input
                type="text"
                value={template.name}
                onChange={(e) => setTemplate({ ...template, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter template name"
              />
            </div>

            {/* Channel Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Channel
              </label>
              <select
                value={template.channel}
                onChange={(e) => setTemplate({ ...template, channel: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a channel</option>
                {channels.map((channel) => (
                  <option key={channel.id} value={channel.id}>
                    {channel.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject (for email) */}
            {template.channel === 'email' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={template.subject}
                  onChange={(e) => setTemplate({ ...template, subject: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter email subject"
                />
              </div>
            )}

            {/* Message Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <div className="mb-2">
                <span className="text-xs text-gray-500">
                  Available variables: {'{{customer_name}}, {{company_name}}'}
                </span>
              </div>
              <textarea
                value={template.message}
                onChange={(e) => setTemplate({ ...template, message: e.target.value })}
                rows={6}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your message content..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Template
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 