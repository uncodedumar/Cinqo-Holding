export default function ContactUs() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-xl font-bold">Get In Touch</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-gray-700 font-semibold">
            Whether you are exploring a strategic partnership, evaluating a project opportunity, seeking specialist contracting services or representing an international brand - our team is available to assist.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">Got Plans?<br/>let&apos;s turn them<br/>into something<br/>real</h2>
          <p className="text-gray-500 italic">Tell us what&apos;s on your mind</p>
        </div>
        <div className="bg-gray-200 min-h-[400px] rounded-lg"></div>
      </div>
    </section>
  );
}