import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'CLOUD SILVER',
      price: '$50',
      period: 'per user/month',
      description: 'Free data migration & multi-user plan',
      features: [
        'Maintenance or upgrades activities',
        'Round the Clock Support',
        'Dual Monitor Support',
        'Mobile Access',
        '99.999% Uptime Guarantee',
        'Daily Data Backup'
      ],
      highlighted: false
    },
    {
      name: 'CLOUD PREMIER',
      price: '$110',
      period: 'per user/month',
      description: 'Includes everything in Cloud Migration & Premier plan',
      features: [
        'Free upgrades',
        'Firewalls Protection',
        'Active Reader',
        'Mac Compatibility',
        'Open Office',
        'Remote Scan',
        'Data Hub'
      ],
      highlighted: true
    },
    {
      name: 'CLOUD GOLD',
      price: '$165',
      period: 'per user/month',
      description: 'Includes everything in Cloud, Premier & Gold plan',
      features: [
        'Free Software & Payroll Services',
        'Unlimited Space',
        'Updated Windows Server',
        'Microsoft Office Services',
        '24/7 Dedicated Technical Support'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          QuickBooks Cloud Hosting Plans for Pro, Premier, Enterprise Softwares
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.highlighted ? 'ring-4 ring-green-500 transform scale-105' : ''
                }`}
            >
              <div className={`p-6 ${plan.highlighted ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>{plan.price}</span>
                  <span className="text-sm ml-2">{plan.period}</span>
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-green-50' : 'text-gray-700'}`}>
                  {plan.description}
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6" role="list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.highlighted
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-800 hover:bg-gray-900 text-white'
                  }`}>
                  Contact Us
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
