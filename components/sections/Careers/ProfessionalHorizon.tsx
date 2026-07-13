export default function ProfessionalHorizon() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">Shape Your Professional Horizon.</h2>
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Cinqo Holding, we are committed to building a diverse and dynamic team...
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are always looking for talented and ambitious individuals...
          </p>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 h-[500px] rounded-lg mb-16"></div>

      <div className="text-center">
        <h3 className="text-2xl font-bold mb-8">The Pillars of Our Culture</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 aspect-square rounded-lg flex items-end p-6">
             <p className="font-bold text-black bg-white/80 p-2 text-sm">Growth & Development</p>
          </div>
          <div className="bg-gray-100 aspect-square rounded-lg flex items-end p-6">
             <p className="font-bold text-black bg-white/80 p-2 text-sm">Collaboration</p>
          </div>
          <div className="bg-gray-100 aspect-square rounded-lg flex items-end p-6">
             <p className="font-bold text-black bg-white/80 p-2 text-sm">Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
