import Link from "next/link";
import Container from "@/components/ui/Container";

const plans = [
  {
    name: "Basic Oil Change",
    price: "$29.99",
    cadence: "/service",
    description: "Essential maintenance to keep your car running smoothly.",
    features: [
      "Includes up to 5 quarts of oil",
      "Standard oil filter replacement",
      "Tire pressure check and adjustment",
      "Basic vehicle visual inspection",
    ],
    highlighted: false,
  },
  {
    name: "Standard Tune-Up",
    price: "$149.99",
    cadence: "/service",
    description: "Comprehensive care for everyday vehicle reliability.",
    features: [
      "Includes spark plug replacement",
      "Air filter replacement",
      "Fuel filter replacement",
      "PCV valve replacement",
      "Priority service scheduling",
    ],
    highlighted: true,
  },
  {
    name: "Brake Service",
    price: "$169.99",
    cadence: "/service",
    description: "Full-service brake inspection and pad replacement.",
    features: [
      "Includes brake pad replacement",
      "Brake rotor resurfacing",
      "Brake caliper cleaning",
      "Brake fluid flush",
      "12-Month / 12k Mile Warranty",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#222222] py-20 sm:py-28 text-white">
      <Container className="flex flex-col items-center gap-14">
        <div data-aos="fade-up" data-aos-duration="700" className="flex flex-col items-center text-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our Pricing Plans
          </h2>
          <p className="max-w-xl text-base text-white/60">
            Simple, transparent pricing with no hidden fees. Choose the plan that fits your vehicle.
          </p>
        </div>

        <div className="grid w-full gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="700"
              className={`flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-brand-accent bg-[#292929] shadow-2xl lg:-translate-y-4"
                  : "border border-white/10 bg-[#292929] shadow-lg hover:border-brand-accent/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white uppercase">
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-white/50">
                    {plan.cadence}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-white/70 mb-8">
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/appointment"
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold uppercase tracking-wider transition ${
                  plan.highlighted
                    ? "bg-brand-accent text-white hover:bg-brand-accent-dark shadow-md"
                    : "border border-white/20 bg-white/5 text-white hover:bg-white/15"
                }`}
              >
                <span>Choose Plan</span>
                <span>↗</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
