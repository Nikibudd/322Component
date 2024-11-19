import React, { useState, useEffect, useRef } from 'react';
import { GripVertical } from 'lucide-react';

export default function TrollVolume() {
  const [rotation, setRotation] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const sliderRef = useRef(null);
  const startRotationPos = useRef(0);
  const startRotationAngle = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isRotating && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(
          e.clientY - centerY,
          e.clientX - centerX
        ) * (180 / Math.PI);
        
        let newRotation = angle - startRotationPos.current + startRotationAngle.current;
        newRotation = ((newRotation + 180) % 360) - 180;
        
        setRotation(newRotation);
      }
    };

    const handleMouseUp = () => {
      setIsRotating(false);
      const startRotation = rotation;
      const startTime = performance.now();
      const duration = 600;

      const animateReset = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutElastic = (x) => {
          const c4 = (2 * Math.PI) / 3;
          return x === 0 ? 0 : x === 1 ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
        };

        const currentRotation = startRotation * (1 - easeOutElastic(progress));
        setRotation(currentRotation);

        if (progress < 1) {
          requestAnimationFrame(animateReset);
        }
      };

      requestAnimationFrame(animateReset);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isRotating, rotation]);

  useEffect(() => {
    let animationFrame;
    
    const simulateGravity = () => {
      if (!isDragging) {
        const normalizedRotation = ((rotation + 180) % 360) - 180;
        const gravityForce = Math.sin((normalizedRotation * Math.PI) / 180) * -5;
        
        setVolume(prev => {
          const newVolume = prev - gravityForce;
          if (newVolume <= 0) return 0;
          if (newVolume >= 100) return 100;
          return newVolume;
        });
      }
      animationFrame = requestAnimationFrame(simulateGravity);
    };

    animationFrame = requestAnimationFrame(simulateGravity);
    return () => cancelAnimationFrame(animationFrame);
  }, [rotation, isDragging]);

  const handleRotationStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      startRotationPos.current = Math.atan2(
        clientY - centerY,
        clientX - centerX
      ) * (180 / Math.PI);
      
      startRotationAngle.current = rotation;
      setIsRotating(true);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DON'T</h1>
      <div 
        ref={sliderRef}
        className="relative flex items-center space-x-4 bg-gray-900 p-4 rounded-lg"
        style={{
          transform: `rotate(${rotation}deg)`,
          width: '300px',
          cursor: isRotating ? 'grabbing' : 'grab',
          transition: isRotating ? 'none' : 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <div 
          className={`absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center 
                     hover:bg-gray-800 rounded-l-lg transition-colors group ${isRotating ? 'bg-gray-800' : ''}`}
          onMouseDown={handleRotationStart}
          onTouchStart={handleRotationStart}
        >
          <GripVertical 
            className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors"
          />
        </div>

        <div 
          className={`absolute right-0 top-0 bottom-0 w-8 flex items-center justify-center 
                     hover:bg-gray-800 rounded-r-lg transition-colors group ${isRotating ? 'bg-gray-800' : ''}`}
          onMouseDown={handleRotationStart}
          onTouchStart={handleRotationStart}
        >
          <GripVertical 
            className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors"
          />
        </div>
    
        <div className="flex-grow select-none">
          <input
            type="range"
            value={volume}
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