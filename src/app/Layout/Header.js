export default function Header() {
  return (
    <header className="px-6 h-14 border-b border-gray-200 bg-white">
      <div className="h-full max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Left side - Logo and Brand */}
        <div className="flex items-center space-x-2">
          <div>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              className="text-gray-800"
              strokeWidth="2"
            >
              <path d="M3 3L21 21M3 21L21 3" />
            </svg>
          </div>
          <span className="text-[15px] font-normal text-gray-800">
            Convin Engage
          </span>
        </div>

        {/* Right side - User Profile */}
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-[13px] text-gray-600">NM</span>
            </div>
            <span className="ml-2 text-[14px] text-gray-600 font-normal">
              Narendra Modi
            </span>
          </div>
          <svg 
            className="w-4 h-4 text-gray-400 ml-1.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
    </header>
  );
} 