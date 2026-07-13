export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-200">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="z-20 text-center text-white relative">
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">About Cinqo</h1>
      </div>
    </section>
  );
}
