'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function KeyFeatures() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    {
      title: 'QuickBooks Multi-User Hosting',
      content: `With QuickBooks Multi-User Hosting, your team can collaborate in real time without worrying about version conflicts or data loss. Multiple users can simultaneously work on the same QuickBooks company file from any location, whether at home, in the office, or on the go. This ensures smoother workflows, faster decision-making, and improved productivity. Perfect for accounting teams, bookkeepers, and small business owners who need real-time access to financial data across devices.`
    },
    {
      title: 'QuickBooks Data Security',
      content: `Security is our top priority. Your financial data is protected using advanced encryption protocols and industry-standard security measures, ensuring bank-level security for all your sensitive information. Regular backups, secure cloud storage, and strict access controls prevent unauthorized access, accidental deletions, or cyber threats. Enjoy peace of mind knowing your accounting data is safe, compliant, and accessible only to authorized personnel.`
    },
    {
      title: 'Reduced IT Costs',
      content: `Eliminate the need for expensive on-premises servers, hardware upgrades, and complex IT infrastructure. With cloud-hosted QuickBooks, you can significantly reduce setup and maintenance costs while still enjoying high performance and reliability. Our solution allows you to focus on your business growth rather than managing IT headaches. Updates and backups are automatically handled, saving you time, effort, and money while ensuring your team always works with the latest version.`
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="key-features-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="key-features-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Key Features
        </h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-100 transition-colors text-left"
                aria-expanded={openIndex === index}
                aria-controls={`feature-content-${index}`}
              >
                <span className="font-semibold text-lg text-gray-800">{feature.title}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div id={`feature-content-${index}`} className="p-5 bg-gray-50">
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
