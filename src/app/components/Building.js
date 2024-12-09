import Image from 'next/image';

export default function Building() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img 
        src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
        alt="Loading..."
        className="w-200 h-200 mb-4" // Adjust size as needed
      />
      <h2 className="text-xl font-semibold text-gray-700">Building your experience...</h2>
    </div>
  );
} 