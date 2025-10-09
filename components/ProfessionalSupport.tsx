import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function ProfessionalSupport() {
  const services = [
    'Account Setup and Configuration',
    'Software Navigation and Training',
    'Get Resolution and Assistants',
    'General Enquiries and Guidance',
    'Bookkeeping Solution'
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="professional-support-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-700">
              Get <span className="text-green-600">Professionals</span> CPA assistants
            </h2>
            <ul className="space-y-4 mb-8">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/image3.jpg"
              alt="Professional customer support representative with headset assisting clients"
              width={800}
              height={450}
              className="rounded-lg w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
