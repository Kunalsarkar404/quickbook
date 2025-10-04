'use client';

import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white absolute top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Q Books"
            width={150}
            height={50}
            className="object-contain"
            priority
          />
        </Link>
        {/* <a href="tel:+1-800-361-0550" className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition">
          <Phone className="w-4 h-4" />
          +1-800-361-0550
        </a> */}
      </div>
    </header>
  );
}
