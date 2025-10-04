import { Upload, Cloud, RefreshCw, Shield, Headphones, Database } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Upload,
      title: 'FREE UPGRADES',
      description: 'Enjoy free QuickBooks multi-user licenses included with your subscription no extra cost.'
    },
    {
      icon: Cloud,
      title: 'COMPLIMENTARY DATA MIGRATION',
      description: 'Seamlessly move your QuickBooks data from local systems to the cloud with our secure, latest migration tools.'
    },
    {
      icon: RefreshCw,
      title: 'HASSLE-FREE DATA CONVERSION',
      description: 'Rely on our experts for smooth QuickBooks data conversion, so you can focus on your business stress-free.'
    },
    {
      icon: Database,
      title: 'AUTOMATED DAILY BACKUPS',
      description: 'Your QuickBooks data is backed up online every day, giving you one-click restore whenever needed.'
    },
    {
      icon: Shield,
      title: 'FREE PREMIUM ADD-ONS',
      description: 'Access premium QuickBooks cloud features and add-ons at no extra charge with our hosting plan.'
    },
    {
      icon: Headphones,
      title: '24/7 EXPERT SUPPORT',
      description: 'Get round-the-clock assistance from our dedicated cloud specialists to resolve issues anytime.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Supercharge Your Business With QuickBooks Cloud Hosting
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Enhance your productivity and simplify workflows with QuickBooks on the cloud.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex justify-center mb-4" aria-hidden="true">
                <div className="bg-green-100 p-4 rounded-full">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-center font-bold text-lg mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-center text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
