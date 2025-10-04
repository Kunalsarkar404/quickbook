import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function ProfessionalSupport() {
  const services = [
    'Account Setup and Configuration',
    'Software Navigation and Training',
    'Error Resolution and Fixes',
    'General Enquiries and Guidance',
    'Technical Troubleshooting'
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="professional-support-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-700">
              Get <span className="text-green-600">Professionals</span> CPA Support
            </h2>
            <ul className="space-y-4 mb-8">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
            {/* <button className="bg-green-600 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-md hover:shadow-lg">
              Call Us: +1-866-495-1879
            </button> */}
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
