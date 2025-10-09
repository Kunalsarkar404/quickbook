'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Which QuickBooks Desktop version is right for me?',
    answer:
      'Choosing the right QuickBooks Desktop version depends on the features you need and your budget. Pro, Premier, and Enterprise each offer powerful tools for managing your business. The key is to identify which features are essential for your operations and select the version that best fits your requirements.'
  },
  {
    question: 'How much does QuickBooks Bookkeeping Service cost?',
    answer:
      'The first month, which includes cleanup and onboarding, is $399. After that, ongoing bookkeeping is offered through three different service plans, based on your company’s average monthly expenses.\n\nBenefits include:\n- Improved operational efficiency\n- Access to the latest technology and infrastructure\n- A skilled, tech-driven talent pool that ensures fast, accurate results'
  },
  {
    question: 'How do I find and hire a QuickBooks expert?',
    answer:
      'You can visit the official QuickBooks ProAdvisor directory to connect with certified accountants or bookkeepers in your area who specialize in QuickBooks.'
  },
  {
    question: 'Is QuickBooks best for small and medium-sized businesses?',
    answer:
      'Yes. QuickBooks is the #1 rated accounting software for small and mid-sized businesses. It helps track financial transactions, generate reports, and simplify bookkeeping. For tailored QuickBooks setup and accounting services, reach out to us and let’s create a plan to scale your business growth.'
  },
  {
    question: 'Is QuickBooks Cloud Hosting a good choice for my business?',
    answer:
      'Absolutely. QuickBooks Cloud Hosting allows you to securely access your QuickBooks software anytime, anywhere, from any device. It provides flexibility, top-notch performance, and reliability. Working with professionals experienced in QuickBooks cloud services ensures smoother operations and a hassle-free experience.'
  },
  {
    question: 'When will QuickBooks 2024 be released?',
    answer:
      'QuickBooks Desktop 2024, available on a subscription basis, is scheduled for release soon. It offers the same rich, locally-installed interface along with new features and functionality designed to deliver maximum value and an enhanced product experience.'
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
          Frequently Asked Questions About Outsourced Bookkeeping
        </h3>
        <p className="text-center text-gray-600 mb-12">
          Here are some of the most common questions about virtual bookkeeping and QuickBooks services. If you don’t see your question here, feel free to reach out to us.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 flex justify-between items-center hover:text-green-600 transition"
              >
                <span
                  className={`font-semibold ${openIndex === index ? 'text-green-600' : 'text-gray-900'
                    }`}
                >
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
