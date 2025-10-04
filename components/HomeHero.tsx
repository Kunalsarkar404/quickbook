'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HomeHero() {
  return (
    <section className="relative bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/image1/20943767.jpg"
              alt="Accounting Software Demo"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block bg-gray-100 px-4 py-2 rounded">
              <p className="text-sm font-semibold text-gray-700">BUY QUICKBOOKS</p>
              <p className="text-xs text-gray-600">#1 ACCOUNTING SOFTWARE</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Buy Accounting & Bookkeeping Software. Get started with a free Demo or Consultation!
            </h2>
            <p className="text-lg text-gray-700">
              Have a question ? Speak to our specialist
            </p>
            <Link href="/products">
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
