import Image from 'next/image';

export function AllInOne() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              All-in-one accounting software
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">OUR OTHER SMALL BUSINESS SERVICES</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">Compliance</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Bookkeeping: Management of the general ledger</li>
                    <li>Knowledgeable Local Sales Tax, VAT</li>
                    <li>Legally Required Corporate Documentation</li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Management</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Bookkeeping: manage daily transactions</li>
                  <li>Payroll: Management of payroll and taxes</li>
                  <li>Planning: Reporting and advice to support growth</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Advisory</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Reporting: Help directors make informed decisions</li>
                  <li>Capital Fundraising: Advice on seeking equity to help grow your business</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/software.webp"
              alt="All-in-one accounting software"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
