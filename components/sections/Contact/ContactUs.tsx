export default function ContactUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-[auto_1fr] gap-12 mb-16">
        <div className="shrink-0">
          <h2 className="text-[24px] font-medium whitespace-nowrap" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Get In Touch</h2>
        </div>
        <div className="max-w-[656px] ml-auto -mt-[24px]">
          <p className="text-[20px] leading-relaxed text-black font-normal" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Whether you are exploring a strategic partnership, evaluating a project opportunity, seeking specialist contracting services or representing an international brand - our team is available to assist.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[48px] font-medium leading-tight mb-8" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Got Plans?<br/>let&apos;s turn them<br/>into something<br/>real</h2>
          <p className="text-gray-500 text-[16px] font-normal" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Tell us what&apos;s on your mind</p>
        </div>
        <div className="bg-gray-200 min-h-[400px] rounded-lg"></div>
      </div>
    </section>
  );
}