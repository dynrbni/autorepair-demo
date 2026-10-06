import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const checklist = [
  "Certified Mechanics",
  "Genuine Parts Guarantee",
  "Transparent Pricing",
  "Fast Turnaround",
];

export default function About() {
  return (
    <section className="bg-[#1e1e1e] py-20 sm:py-28 text-white">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <Image
            src="/images/premium/about-reputation.jpg"
            alt="Mechanic inspecting a car engine"
            fill
            className="object-cover"
          />
        </div>

        <div data-aos="fade-left" data-aos-duration="800" className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Our Reputation Speaks for Itself
          </h2>
          <p className="text-base leading-relaxed text-white/70">
            For over two decades, AutoWorks has delivered dependable car care
            backed by certified expertise and a commitment to honest service.
            Every repair is done right the first time.
          </p>

          <ul className="grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-brand-accent-dark"
            >
              Learn More ↗
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
