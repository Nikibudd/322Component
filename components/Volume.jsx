import React, { useState, useRef } from 'react';

export default function Volume() {
  const [volume, setVolume] = useState(50);
  const sliderRef = useRef(null);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DO</h1>
      <div 
        ref={sliderRef}
        className="relative flex items-center space-x-4 bg-gray-900 p-4 rounded-lg"
        style={{
          width: '300px'
        }}
      >
    
        <div className="flex-grow select-none">
          <input
            type="range"
            value={volume}
            onChange={(e) => {setVolume(e.target.value)}}
            min="0"
            max="100"
            className="w-full h-2 rounded-lg appearance-none cursor-pointer 
                       bg-gray-700 accent-purple-500
                       [&::-webkit-slider-thumb]:appearance-none
                       [&::-webkit-slider-thumb]:w-4
                       [&::-webkit-slider-thumb]:h-4
                       [&::-webkit-slider-thumb]:bg-purple-500
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:hover:bg-purple-400
                       [&::-webkit-slider-thumb]:transition-colors
                       [&::-moz-range-thumb]:w-4
                       [&::-moz-range-thumb]:h-4
                       [&::-moz-range-thumb]:bg-purple-500
                       [&::-moz-range-thumb]:border-none
                       [&::-moz-range-thumb]:rounded-full
                       [&::-moz-range-thumb]:hover:bg-purple-400
                       [&::-moz-range-thumb]:transition-colors"
          />
        </div>
        <span className="text-gray-300 min-w-[2rem] mr-8 select-none">{Math.round(volume)}</span>
      </div>
    </div>
  );
}