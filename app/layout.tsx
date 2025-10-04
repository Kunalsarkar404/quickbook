import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { generateOrganizationSchema, generateServiceSchema, generateLocalBusinessSchema } from './layout-schema';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qbooks.online/'),
  title: {
    default: 'QuickBooks Support & Cloud Hosting Services | Q Books',
    template: '%s | Q Books',
  },
  icons: {
    icon: '/Logo.jpg',
  },
  description:
    'Expert QuickBooks support, cloud hosting, and CPA services. Get professional help with QuickBooks errors, data migration, multi-user hosting, and technical support. Call +1-800-361-0550 for 24/7 assistance.',
  keywords: [
    'QuickBooks support',
    'QuickBooks cloud hosting',
    'QuickBooks errors',
    'QuickBooks help',
    'CPA support',
    'QuickBooks data migration',
    'QuickBooks multi-user',
    'QuickBooks technical support',
    'QuickBooks Pro Advisor',
    'QuickBooks consulting',
    'cloud accounting',
    'QuickBooks backup',
  ],
  authors: [{ name: 'Q Books' }],
  creator: 'Q Books',
  publisher: 'Q Books',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.qbooks.online/',
    title: 'QuickBooks Support & Cloud Hosting Services | Q Books',
    description:
      'Professional QuickBooks support, cloud hosting, and CPA services. Get expert help with QuickBooks errors, data migration, and technical support.',
    siteName: 'Q Books',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Q Books - QuickBooks Support Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickBooks Support & Cloud Hosting Services',
    description:
      'Expert QuickBooks support and cloud hosting. 24/7 professional assistance.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.qbooks.online/',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const serviceSchema = generateServiceSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0284c7" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
