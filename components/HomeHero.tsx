'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HomeHero() {
  return (
    <section className="relative bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/home-hero-image.jpg"
              alt="Accounting Software Demo"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block">
              <h3 className="text-lg md:text-base font-bold text-gray-700">
                BUY QUICKBOOKS
              </h3>
              <span className="text-lg md:text-lg font-semibold text-gray-600">#1 ACCOUNTING SOFTWARE</span>
            </div>
            <p className="text-xs md:text-xl font-semibold text-gray-900">
              Buy Accounting & Bookkeeping Software. Get started with a free Demo or Consultation!
            </p>
            <p className="text-lg text-gray-700">
              Have a question ? Speak to our specialist
            </p>
            <Link href="/quick-assist">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition shadow-lg hover:shadow-xl">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
