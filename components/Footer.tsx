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
            <h3 className="text-white font-bold text-lg mb-4">QBooks</h3>
            <p className="text-sm mb-4">
              Disclaimer: QBooks is an independent QuickBooks ProAdvisor. QuickBooks, Intuit, and the QuickBooks logo are registered trademarks of Intuit Inc. All rights belong to their respective owners.
              <Image
                src="/card.jpg"
                alt="QuickBooks Verified ProAdvisor"
                width={180}
                height={180}
                className="h-10 object-contain mt-4"
              />
            </p>
          </div>

          <nav aria-labelledby="useful-links">
            <h3 id="useful-links" className="text-white font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2" role="list">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-green-600 transition-colors">
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
                  <a href={link.href} className="text-sm hover:text-green-600 transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Image
              src="/Logo.jpg"
              alt="QBooks Logo"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <div className="space-y-2 mt-4">
              <h4 className="text-gray-700 font-semibold">Contact Us</h4>
              <a href="mailto:info@qbooks.com" className="flex items-center space-x-2 text-sm hover:text-green-600 break-all">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>info@qbooks.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>© All rights reserved. Powered by QBooks</p>
        </div>
      </div>
    </footer>
  );
}
