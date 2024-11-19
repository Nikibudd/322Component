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
                </div>
            </div>
        </header>
    );
}