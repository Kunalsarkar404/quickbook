'use client';

import { useState } from 'react';
import { LiveAssistModal } from './LiveAssistModal';
import { Headset } from 'lucide-react'; // import headset icon

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-34 pb-18 md:pt-42 md:pb-22"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Getting QuickBooks® Errors?
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Need Quick Product Support?<br />
            We&#39;re here to help you.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
          >
            <Headset className="w-5 h-5" />
            Live Assist
          </button>
        </div>
      </section>

      <LiveAssistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
