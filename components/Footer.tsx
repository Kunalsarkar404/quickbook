import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const usefulLinks = [
    { text: 'Home', href: '#' },
    { text: 'About Us', href: '#' },
    { text: 'Products', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'Refund Policy', href: '#' },
    { text: 'Terms & Conditions', href: '#' }
  ];

  const authenticityLinks = [
    { text: "FAQ's", href: '#' },
    { text: 'Downloads', href: '#' },
    { text: 'QBO Services', href: '#' },
    { text: 'Data Privacy Practices', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Legal', href: '#' }
  ];

  return (
    <footer className="bg-white text-gray-700" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">QBO Solution INC</h3>
            <p className="text-sm mb-4">
              Disclaimer: QBO Solutions INC is an independent QuickBooks Pro-Advisor for QuickBooks Products. QBO and its brands like QuickBooks, Intuit, and the QuickBooks logo are registered trademarks of Intuit Inc.
              <Image
                src="/card.jpg"
                alt="QuickBooks Verified ProAdvisor"
                width={180}
                height={180}
                className="h-10 object-contain"
              />
            </p>
          </div>

          <nav aria-labelledby="useful-links">
            <h3 id="useful-links" className="text-white font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2" role="list">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-green-500 transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="authenticity-links">
            <h3 id="authenticity-links" className="text-white font-bold text-lg mb-4">Authenticity</h3>
            <ul className="space-y-2" role="list">
              {authenticityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-green-500 transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Image
              src="/Logo.jpg"
              alt="QuickBooks Verified ProAdvisor"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <div className="space-y-2">
              <h4 className="text-white font-semibold">Contact Us:</h4>
              <a href="tel:+13364951970" className="flex items-center space-x-2 text-sm hover:text-green-500">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+1-336-495-1970</span>
              </a>
              <a href="mailto:info@qbosolution.ca" className="flex items-center space-x-2 text-sm hover:text-green-500 break-all">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>info@qbosolution.ca</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>All rights reserved. Powered By QBO Solution INC</p>
        </div>
      </div>
    </footer>
  );
}
