export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-7xl font-bold mb-4">20+</h2>
          <p className="text-xl uppercase tracking-widest text-gray-500">Years of History</p>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-gray-700">
            Since its inception, Cinqo Holding has expanded from a construction focused business into a diversified group with a growing presence across the GCC.
          </p>
        </div>
      </div>
      <div className="mt-16 bg-gray-200 w-full h-[400px] rounded-lg"></div>
    </section>
  );
}
