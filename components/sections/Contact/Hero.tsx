export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-end pb-12 bg-gray-200 px-6 md:px-12">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="z-20 text-white relative max-w-[1440px] mx-auto w-full">
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">Contact Us</h1>
      </div>
    </section>
  );
}
