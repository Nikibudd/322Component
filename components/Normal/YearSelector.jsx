import React, { useState, useEffect, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function YearSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const currentYear = new Date().getFullYear();
    const years = useMemo(() => {
        const allYears = Array.from({ length: 100 }, (_, i) => currentYear - i);
        if (!searchQuery) return allYears;
        return allYears.filter(year => year.toString().includes(searchQuery));
    }, [searchQuery]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setIsOpen(false);
        setSearchQuery('');
    };

    return (
        <div className="dropdown-container relative w-64">
            <div
                className="bg-gray-900 p-3 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-between text-gray-200">
                    <div className="flex items-center space-x-2 flex-1">
                        <span>{selectedYear || 'Select year'}</span>
                    </div>
                    {isOpen ?
                        <ChevronUp className="w-4 h-4 text-gray-400" /> :
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    }
                </div>
            </div>

            {isOpen && (
                <div className="absolute w-full mt-2 bg-gray-900 rounded-lg shadow-lg overflow-hidden z-10">
                    <div className="p-2 border-b border-gray-800">
                        <div className="flex items-center space-x-2 bg-gray-800 rounded px-2">
                            <Search className="w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search year..."
                                className="w-full bg-transparent text-gray-200 py-1 focus:outline-none text-sm"
                            />
                        </div>
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                        {years.map((year) => (
                            <div
                                key={year}
                                className={`px-3 py-2 cursor-pointer ${selectedYear === year
                                        ? 'bg-gray-800 text-purple-400'
                                        : 'text-gray-200 hover:bg-gray-800'
                                    }`}
                                onClick={() => handleYearSelect(year)}
                            >
                                {year}
                            </div>
                        ))}
                        {years.length === 0 && (
                            <div className="px-3 py-2 text-gray-400 text-center">
                                No years found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
