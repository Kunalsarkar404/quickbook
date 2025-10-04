import Image from 'next/image';

export function AllInOne() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Accounting Solution
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ADDITIONAL SMALL BUSINESS SERVICES
                </h3>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">Compliance</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Bookkeeping: Maintain and manage your general ledger</li>
                    <li>Expert guidance on Sales Tax, VAT, and local regulations</li>
                    <li>Preparation of legally required corporate documents</li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Management</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Day-to-day transaction tracking and bookkeeping</li>
                  <li>Payroll services with accurate tax handling</li>
                  <li>Strategic planning, reports, and insights to drive growth</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Advisory</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Actionable reporting to help leaders make smart decisions</li>
                  <li>Guidance on fundraising and securing capital for expansion</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/software.webp"
              alt="Complete accounting software interface"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
