export default function Leadership() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Leadership</h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-24 mt-8">
        <div className="bg-gray-200 min-h-[600px] rounded-lg"></div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6 uppercase">Chairman&apos;s Message</h3>
          <div className="space-y-4 text-gray-700">
            <p>Welcome to Cinqo Holding...</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Directors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 aspect-[3/4] rounded-lg"></div>
          <div className="bg-gray-100 aspect-[3/4] rounded-lg"></div>
          <div className="bg-gray-100 aspect-[3/4] rounded-lg"></div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-8">Executive Management</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 aspect-square rounded-lg"></div>
          <div className="bg-gray-100 aspect-square rounded-lg"></div>
          <div className="bg-gray-100 aspect-square rounded-lg"></div>
          <div className="bg-gray-100 aspect-square rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
