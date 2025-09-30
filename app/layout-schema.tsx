export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'QBO Solution INC',
    url: 'https://qbosolution.ca',
    logo: 'https://qbosolution.ca/logo.png',
    description: 'Professional QuickBooks support, cloud hosting, and CPA services',
    telephone: '+1-800-361-0550',
    email: 'info@qbosolution.ca',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    sameAs: [
      'https://www.facebook.com/qbosolution',
      'https://www.linkedin.com/company/qbosolution'
    ]
  };
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'QuickBooks Support and Cloud Hosting',
    provider: {
      '@type': 'Organization',
      name: 'QBO Solution INC'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    description: 'Professional QuickBooks support, cloud hosting, data migration, and technical assistance'
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'QBO Solution INC',
    image: 'https://qbosolution.ca/logo.png',
    '@id': 'https://qbosolution.ca',
    url: 'https://qbosolution.ca',
    telephone: '+1-800-361-0550',
    priceRange: '$50-$165',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    }
  };
}
