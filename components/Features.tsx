'use client';

import Image from 'next/image';

export function Features() {
  const features = [
    {
      image: '/image1/20943767.jpg',
      title: 'Anywhere & Anytime Access',
      description:
        'Enjoy the flexibility to work from home or anywhere on anytime on any device. QB cloud hosting gives you the freedom to access your QuickBooks software from anywhere at any time.'
    },
    {
      image: '/image2/Tiny business persons working on jigsaw puzzle together.jpg',
      title: 'Multi-User Collaboration',
      description:
        'Save your time from the tedious task of versioning and sharing files. We will help you and your clients to work on the same QuickBooks file at the same time from wherever you are.'
    }
  ];

  return (
    <section className="py-10 bg-white" aria-label="Key features">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-12">
          {features.map((feature, index) => (
            <article
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 relative w-60 h-60">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left md:pl-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
