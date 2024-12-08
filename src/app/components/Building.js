import Image from 'next/image';

export default function Building() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-3.5rem)] bg-gray-50">
      <div className="max-w-md text-center">
        <div className="w-[400px] h-[300px] bg-white rounded-lg shadow-lg mb-6 flex items-center justify-center">
          <svg 
            className="w-20 h-20 text-blue-500 animate-spin" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Building Something Amazing! 🚀
        </h2>
        <p className="text-gray-600">
          Our dev team is coding away to bring you something spectacular. Stay tuned!
        </p>
      </div>
    </div>
  );
} 