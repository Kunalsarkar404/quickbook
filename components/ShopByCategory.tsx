'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'QuickBooks Pro Plus 2025 - Non Subscription',
    image: '/card.jpg',
    originalPrice: '$299.99',
    salePrice: '$259.99',
    badge: 'SALE'
  },
  {
    id: 2,
    name: 'QuickBooks Pro 2025 - Non Subscription 1 User',
    image: '/card.jpg',
    originalPrice: '$299.99',
    salePrice: '$259.99',
    badge: null
  },
  {
    id: 3,
    name: 'QuickBooks Premier Plus 2025 - Yearly Subscription',
    image: '/card.jpg',
    originalPrice: '$649.99',
    salePrice: '$549.99',
    badge: null
  },
  {
    id: 4,
    name: 'QuickBooks Mac 2025 - Non Subscription',
    image: '/card.jpg',
    originalPrice: '$499.99',
    salePrice: '$429.99',
    badge: 'SALE'
  }
];

export function ShopByCategory() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Shop by category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition relative">
              {product.badge && (
                <span className="absolute top-6 right-6 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <div className="mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-blue-600 mb-2 h-12">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                <span className="text-blue-600 font-bold text-lg">{product.salePrice}</span>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-semibold transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition shadow-lg hover:shadow-xl">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
