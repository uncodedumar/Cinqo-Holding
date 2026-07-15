import { BusinessData } from "@/data/businesses.data";

export default function DefineUs({ definesUs }: { definesUs: BusinessData["definesUs"] }) {
  return (
    <section className="w-full py-20 bg-cream-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-center uppercase mb-16 text-navy-900">
          What Defines Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {definesUs.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-base font-bold text-navy-900 uppercase mb-4 tracking-wider">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
