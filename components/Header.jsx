import React from 'react';
import { Search } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-gray-900 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0 flex items-center">
                        <div className="h-8 w-8 bg-purple-600 rounded-full" />
                        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Do's and dont's
                        </span>
                    </div>

                    <div className="flex items-center">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 
                                 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                 transition duration-150 w-64"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}