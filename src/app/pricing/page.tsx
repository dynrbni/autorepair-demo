import Link from "next/link";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import ScheduleCTA from "@/components/ui/ScheduleCTA";

export const metadata = {
  title: "Pricing Plans | AutoWorks Auto Repair",
  description:
    "Transparent pricing for oil changes, tune-ups, brake service, suspension, detailing, and complete auto inspections.",
};

const pricingPlans = [
  {
    title: "Basic Oil Change",
    price: "29.99",
    features: [
      "Includes up to 5 quarts of conventional oil",
      "Includes standard oil filter replacement",
      "Tire pressure check and adjustment",
      "Includes basic vehicle inspection",
      "Additional fees may apply for high-mileage or synthetic oil",
    ],
  },
  {
    title: "Standard Tune-Up",
    price: "149.99",
    features: [
      "Includes spark plug replacement",
      "Includes an air filter replacement",
      "Includes a fuel filter replacement",
      "Includes PCV valve replacement",
      "Additional fees may apply for distributor cap and rotor replacement",
    ],
  },
  {
    title: "Brake Service",
    price: "169.99",
    features: [
      "Includes brake pad replacement",
      "Includes brake rotor resurfacing",
      "Includes brake caliper cleaning",
      "Includes brake fluid flush",
      "Additional fees may apply for brake line or master cylinder replacement",
    ],
  },
  {
    title: "Suspension System Service",
    price: "490.99",
    features: [
      "Includes shock absorber replacement",
      "Includes strut replacement",
      "Includes ball joint and tie rod",
      "Includes wheel alignment",
      "Additional fees may apply for additional suspension component replacement",
    ],
  },
  {
    title: "Deluxe Detailing Package",
    price: "29.99",
    features: [
      "Includes exterior wash and wax",
      "Includes interior vacuuming and dusting",
      "Includes window cleaning",
      "Includes tire dressing and wheel wipe-down",
      "Additional fees may apply for excessive interior detailing",
    ],
  },
  {
    title: "Comprehensive Complete Care",
    price: "199.99",
    features: [
      "Includes exterior wash and wax",
      "Includes interior vacuuming and dusting",
      "Includes window cleaning",
      "Includes carpet and upholstery deep clean",
      "Additional fees may apply for leather cleaning and conditioning",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            AutoWorks <span className="text-brand-accent">Pricing Plans</span>
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing Plans" },
        ]}
        backgroundImage="/images/premium/banner-pricing.jpg"
      />

      {/* 2. 6 Pricing Cards Grid */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 120}
                data-aos-duration="600"
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#292929] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-brand-accent hover:shadow-2xl"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-white/50 block">
                    Starting at
                  </span>

                  {/* Price */}
                  <div className="mt-2 flex items-baseline gap-1 text-white">
                    <span className="text-2xl font-bold text-brand-accent">$</span>
                    <span className="text-5xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                  </div>

                  {/* Red CTA Button matching Figma */}
                  <div className="mt-8">
                    <Link
                      href={`/appointment?service=${encodeURIComponent(plan.title)}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-brand-accent-dark group-hover:shadow-brand-accent/25"
                    >
                      <span>Get Started</span>
                      <span>↗</span>
                    </Link>
                  </div>

                  {/* Features List */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50 block mb-4">
                      Features
                    </span>
                    <ul className="flex flex-col gap-3.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-sm text-white/70">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Schedule CTA */}
      <ScheduleCTA imageVariant="pricing" />
    </div>
  );
}
