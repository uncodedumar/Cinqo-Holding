import Hero from "@/components/sections/Contact/Hero";
import ContactUs from "@/components/sections/Contact/ContactUs";
import GetInTouch from "@/components/sections/Contact/GetInTouch";
import Location from "@/components/sections/Contact/Location";
import News from "@/components/sections/Contact/News";

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactUs />
      <GetInTouch />
      <Location />
      <News />
    </main>
  );
}
