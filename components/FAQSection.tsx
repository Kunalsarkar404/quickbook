'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Which QuickBooks Desktop Version is right for me?',
    answer: 'Deciding which QuickBooks Desktop Version is right for you depends on which features you need or want and seeing how much money you want to spend for it. Both QuickBooks Desktop Versions have a lot of great features. QuickBooks Pro, Premier, and Enterprise have great features. If you know you want a QuickBooks Desktop product, deciding which version to buy is simply deciding which features you don&apos;t need and those that you do.'
  },
  {
    question: 'How much does a QuickBooks Bookkeeping Service cost?',
    answer: 'The first month of service for cleanup and onboarding is $399. After the first month, the ongoing Bookkeeping service is available in 3 different service Plans, depending on your company&apos;s average monthly expenses over a one month period.\n\nTo gain operational efficiency\nTo have access to the best technology and infrastructure\nTo gain access to a huge, tech-driven talent pool that could turn around work in a short time span with utmost accuracy'
  },
  {
    question: 'How do I hire a QuickBooks expert?',
    answer: 'You can visit the Find a ProAdvisor website to look for an accountant or bookkeeper near you that offers their expertise in QuickBooks.'
  },
  {
    question: 'What is the best for small and medium size businesses?',
    answer: 'QuickBooks is the Number #1 rated Accounting software for small and medium size businesses. QuickBooks Software helps to manage the SKPs, Mid-size, large size scaled industrial businesses by keeping the tab of financial transactions monthly and yearly. For Business & QuickBooks Accounting Services, Contact us on our website, Let us set up and initiate your accounting plan on which your business growth.'
  },
  {
    question: 'QuickBooks Cloud hosting is the best decision for the business?',
    answer: 'QuickBooks Cloud Hosting gives you flexibility to work form home or anywhere at any time on any device, ds cloud hosting gives you the freedom to access your quickbooks software from anywhere, anytime. You can work with your client based transactions and make the future easier. Cloud hosting offers you the best in class performance and reliability. Having Professionals who expertise on QuickBooks services will make your business hassle free.'
  },
  {
    question: 'When will QuickBooks 2024 be available?',
    answer: 'QuickBooks 2024 desktop software for the subscription based and scheduled to be released to businesses. QuickBooks Desktop 2024 subscriptions provide customers with the same locally-installed rich interface, with added features and functionality that provides the best value and best in-class product experience.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          FAQs
        </h2>
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">
          FAQ About Outsourced Bookkeeping Services
        </h3>
        <p className="text-center text-gray-600 mb-12">
          Here are Frequently Asked Questions about virtual bookkeeping services. If your bookkeeping question isn&apos;t answered below, please contact us.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 flex justify-between items-center hover:text-green-600 transition"
              >
                <span className={`font-semibold ${openIndex === index ? 'text-green-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-700 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
