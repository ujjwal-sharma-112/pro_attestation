'use client';

export default function CallButton() {
  return (
    <a
      href="tel:+918700770603" // Using the first phone number from structured data
      className="fixed bottom-6 left-12 z-50 flex flex-col items-center group"
      aria-label="Call us"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-orange-400 opacity-25"></span>
        
        {/* Button background */}
        <div className="relative bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-3">
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </div>
      </div>
      
      <span className="scale-0 group-hover:scale-100 mt-2 px-3 py-1 bg-white text-orange-600 text-sm font-medium rounded-full shadow-md transition-transform duration-200 origin-bottom">
        Call Us
      </span>
    </a>
  );
} 