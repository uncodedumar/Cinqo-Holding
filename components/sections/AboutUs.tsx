/**
 * About Us — intro copy + Vision/Mission panel, kept as a static
 * (non-animated) block per design spec ("as it is").
 */
export default function AboutUs() {
  return (
    <section className="section bg-cream-100 text-center" id="about">
      <div className="container max-w-[900px] flex flex-col items-center gap-8">
        <span className="eyebrow">About Us</span>
        <p className="text-h3 leading-[1.7] text-ink">
          With a team of over <strong>600 employees</strong> and a portfolio
          of specialized industries, Cinqo is recognized for delivering
          industry leading solutions, exceptional service and sustained
          value across public and private sectors.
        </p>

        <div className="w-full grid gap-8 text-left bg-coral-100 rounded-[20px] p-12 md:grid-cols-2">
          <div>
            <h4 className="text-coral-600 mb-2">Vision</h4>
            <p>
              To build a group of enduring businesses recognized for
              performance, trust and sustainable growth.
            </p>
          </div>
          <div>
            <h4 className="text-coral-600 mb-2">Mission</h4>
            <p>
              To build and operate each business within the Group to a
              standard that retains clients, protects capital and delivers
              consistent results across market conditions — while fostering
              an environment where our teams are developed, empowered and
              held to the same standard of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
