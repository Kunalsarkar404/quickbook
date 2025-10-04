'use client';

import Image from 'next/image';

export function Features() {
  const features = [
    {
      image: '/image1/20943767.jpg',
      title: 'Access Anytime, Anywhere',
      description:
        'Work seamlessly from home, the office, or on the go. With QuickBooks cloud hosting, your accounting software is always within reach—on any device, at any time.'
    },
    {
      image: '/image2/Tiny business persons working on jigsaw puzzle together.jpg',
      title: 'Real-Time Team Collaboration',
      description:
        'Forget the hassle of file sharing and version control. Collaborate with your team and clients on the same QuickBooks file simultaneously, no matter where you are.'
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
