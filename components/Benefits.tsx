import { Upload, Cloud, RefreshCw, Shield, Headphones, Database } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Upload,
      title: 'FREE UPGRADES',
      description: 'When you sign up for our services you will get a free QuickBooks Multi-User license.'
    },
    {
      icon: Cloud,
      title: 'FREE DATA MIGRATION',
      description: 'Get free QuickBooks data migration from your local system to Cloud, 100% safe, and using the latest cloud migration tools.'
    },
    {
      icon: RefreshCw,
      title: 'FREE DATA CONVERSION',
      description: 'Complete QuickBooks data conversion services without a hitch. Trust our experts so you can work freely without any hassles.'
    },
    {
      icon: Database,
      title: 'DAILY ONLINE DATA BACKUP',
      description: 'QuickBooks cloud backup services make it easy for you to back up your data in the cloud in just one click.'
    },
    {
      icon: Shield,
      title: 'FREE PREMIUM INDEPENDENT SERVICES',
      description: 'With our QuickBooks cloud services premium plan, you get access to all add-on features for free.'
    },
    {
      icon: Headphones,
      title: 'DEDICATED TECHNICAL SUPPORT TEAM',
      description: 'Work with experienced cloud experts and get 24x7 technical support to solve and manage your QuickBooks issues.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Boost Your Business With Hosted QuickBooks on Cloud
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Upgrade the user experience with Hosted QuickBooks On Cloud
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
