export function DiscountBanner() {
  return (
    <section className="py-16 bg-green-600" aria-label="Special discount offer">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-white rounded-lg p-8 text-center bg-green-600 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get up to 20% Discount on Bulk Orders
          </h2>
          <p className="text-xl text-white mb-4">
            Contact Us For More Info
          </p>
        </div>
      </div>
    </section>
  );
}
