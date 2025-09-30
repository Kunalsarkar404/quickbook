'use client';

import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/Logo.jpg" // Path to your local image
            alt="QuickBooks Verified ProAdvisor"
            className="w-15 h-15 object-contain"
          />
          <span className="font-semibold text-gray-800">QuickBooks Support</span>
        </div>
        <a href="tel:+1-800-361-0550" className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition">
          <Phone className="w-4 h-4" />
          +1-800-361-0550
        </a>
      </div>
    </header>
  );
}
