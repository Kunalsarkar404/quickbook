'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white absolute top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Logo.jpg"
            alt="Quick Books"
            width={60}
            height={30}
            className="object-contain"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
