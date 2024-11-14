import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function TrollTelephoneNumberSelector({wantedDigits, hasPlus}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const dropdownRef = useRef(null);
 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formatNumber = (num) => {
        const formattedNum = num.toString().padStart(wantedDigits, '0');
        return hasPlus ? `+${formattedNum}` : formattedNum;
    };
 
    const handleScroll = (e) => {
        setScrollPosition(e.target.scrollTop);
    };

    const findWantedMaxNumber = (maxNumber) => {
        let wantedNumber = "";
        for (let index = 0; index < maxNumber; index++) {
            wantedNumber = wantedNumber + "9";
        }
        return parseInt(wantedNumber);
    };
     
    const visibleNumbers = useMemo(() => {
        const start = Math.max(0, Math.floor(scrollPosition / 30) - 10);
        const end = Math.min(findWantedMaxNumber(wantedDigits), start + 30);
        return Array.from({ length: (end + 1) - start }, (_, i) => start + i + 0);
    }, [scrollPosition]);
 
    return (
        <div className="relative w-36" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
            >
                <span className="font-mono">
                    {selectedValue ? formatNumber(selectedValue) : formatNumber(findWantedMaxNumber(wantedDigits))}
                </span>
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
 
            {isOpen && (
                <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
                    <div
                        className="overflow-y-auto max-h-60"
                        onScroll={handleScroll}
                    >
                        <div className="relative" style={{ height: '300px' }}>
                            <div style={{ height: `${findWantedMaxNumber(wantedDigits) * 30}px` }} className="absolute w-full">
                                {visibleNumbers.map((number) => (
                                    <div
                                        key={number}
                                        className={`px-3 py-2 cursor-pointer hover:bg-gray-100 font-mono ${
                                            selectedValue === number ? 'bg-blue-50 text-blue-600' : ''
                                        }`}
                                        onClick={() => {
                                            setSelectedValue(number);
                                            setIsOpen(false);
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: `${(number - 0) * 30}px`,
                                            width: '100%'
                                        }}
                                    >
                                        {formatNumber(number)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}