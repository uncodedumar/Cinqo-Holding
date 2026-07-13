export default function Compliance() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-12">Governance, Compliance & Awards</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-8 bg-white shadow-sm border border-gray-100 flex flex-col justify-between min-h-[250px]">
              <h3 className="font-bold text-sm uppercase tracking-wider">Code of Conduct & Compliance</h3>
            </div>
            <div className="p-8 bg-white shadow-sm border border-gray-100 flex flex-col justify-between min-h-[250px]">
              <h3 className="font-bold text-sm uppercase tracking-wider">ISO Certifications</h3>
            </div>
            <div className="p-8 bg-white shadow-sm border border-gray-100 flex flex-col justify-between min-h-[250px]">
              <h3 className="font-bold text-sm uppercase tracking-wider">Quality Philosophy</h3>
            </div>
            <div className="p-8 bg-white shadow-sm border border-gray-100 flex flex-col justify-between min-h-[250px]">
              <h3 className="font-bold text-sm uppercase tracking-wider">Health, Safety & Environmental</h3>
            </div>
          </div>
          <div className="bg-gray-200 min-h-[500px] w-full rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
