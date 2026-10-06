import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Expert Technicians",
    description:
      "Our ASE-certified mechanics bring years of hands-on experience to every repair.",
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
    title: "Quality Parts",
    description:
      "We use only genuine, manufacturer-approved parts backed by a solid warranty.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    ),
  },
  {
    title: "Fast Service",
    description:
      "Most repairs are completed same-day so you can get back on the road quickly.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Affordable Pricing",
    description:
      "Transparent, upfront quotes with no hidden fees or surprise charges.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-[#1e1e1e] py-20 sm:py-28 text-white">
      <Container className="flex flex-col items-center gap-14">
        <div data-aos="fade-up" data-aos-duration="700" className="w-full flex justify-center">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose AutoWorks"
            description="We combine skilled technicians, quality parts, and honest service to keep your vehicle in top condition."
            light
          />
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              data-aos-duration="700"
              className="flex flex-col items-start gap-4 rounded-2xl border border-white/5 bg-[#292929] p-8 shadow-lg transition-transform hover:-translate-y-1 hover:border-brand-accent/40"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
                <svg
                  aria-hidden="true"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {feature.icon}
                </svg>
              </span>
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
