export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-34 pb-18 md:pt-42 md:pb-22" style={{
      backgroundImage: "url('/hero.jpg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Getting QuickBooks® Errors?
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Need Quick Product Support?<br />
          We're here to help you.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg hover:shadow-xl">
          Toll Free: +1-866-495-1879
        </button>
      </div>
    </section>
  );
}
