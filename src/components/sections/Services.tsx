import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Engine Repair",
    description: "Full diagnostics and repair to keep your engine running at its best.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17L5.877 21.5A2.652 2.652 0 012 17.75l5.877-5.877m5.303 1.5l-5.303-1.5m0 0L5.877 11.5"
      />
    ),
  },
  {
    title: "Oil Change",
    description: "Quick, mess-free oil changes using manufacturer-recommended oil.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    ),
  },
  {
    title: "Brake Repair",
    description: "Inspection, pad replacement, and rotor service for safe stopping power.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    ),
  },
  {
    title: "Transmission Repair",
    description: "Expert diagnosis and repair for smooth, reliable gear shifting.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      />
    ),
  },
  {
    title: "AC Service",
    description: "Full AC inspection, recharge, and repair to keep you cool on the road.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    ),
  },
  {
    title: "Tire & Wheel",
    description: "Rotation, balancing, and replacement to maximize tire life and safety.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-[#222222] py-20 sm:py-28 text-white">
      <Container className="flex flex-col items-center gap-14">
        <div data-aos="fade-up" data-aos-duration="700" className="flex flex-col items-center text-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our Services
          </h2>
          <p className="max-w-xl text-base text-white/60">
            From routine checkups to major repairs, we&apos;ve got every part of your vehicle covered.
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 120}
              data-aos-duration="700"
              className="group flex flex-col items-start gap-4 rounded-2xl border border-white/5 bg-[#292929] p-8 shadow-md transition-all hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-xl"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent transition-transform group-hover:scale-110">
                <svg
                  aria-hidden="true"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {service.icon}
                </svg>
              </span>
              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-brand-accent">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
              <Link
                href="/services"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-white"
              >
                Learn More ↗
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
