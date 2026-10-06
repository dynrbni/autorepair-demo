import Link from "next/link";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import ScheduleCTA from "@/components/ui/ScheduleCTA";

export const metadata = {
  title: "Auto Services | AutoWorks Auto Repair",
  description:
    "Comprehensive car repair and maintenance services: brakes, transmission, suspension, oil changes, electrical, tire services, and diagnostics.",
};

const services = [
  {
    slug: "brake-repair",
    title: "Brake Repair",
    description:
      "Our brake repair services include inspection, diagnosis, and repair of brake components to ensure safe and reliable braking performance.",
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "transmission-repair",
    title: "Transmission Repair",
    description:
      "Our transmission services include fluid and filter replacement, an inspection of transmission components, and repair or replacement as needed.",
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M5 4h14M12 4v7M8 11h8M8 11v9M16 11v9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5" cy="4" r="2" fill="currentColor" />
        <circle cx="19" cy="4" r="2" fill="currentColor" />
        <circle cx="12" cy="11" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "suspension-repair",
    title: "Suspension Repair",
    description:
      "Our suspension repair services include inspection and repair of worn components, such as shocks and struts, to improve handling and ride comfort.",
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="10" y="2" width="4" height="4" rx="1" strokeWidth="1.5" />
        <path d="M8 8l8 2-8 2 8 2-8 2 8 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="18" width="4" height="4" rx="1" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "oil-change",
    title: "Oil Change",
    description:
      "Regular oil changes are essential to keep your engine running smoothly. Our oil change services include the replacement of old oil and oil filters with new, high-quality products.",
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 8h10l2 4v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" strokeWidth="1.5" />
        <path d="M12 4v4M9 4h6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="15" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "electrical-services",
    title: "Electrical Services",
    description:
      "Our electrical system repair services include diagnosis and repair of electrical issues, such as battery replacement, alternator replacement, and wiring repairs.",
    featured: true,
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="6" y="6" width="12" height="15" rx="2" strokeWidth="1.5" />
        <path d="M9 3v3M15 3v3M12 11l-2 3h4l-2 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "tire-service",
    title: "Tire Services",
    description:
      "Our tire services include tire rotation, balancing, and replacement, as well as alignment services to improve handling and prolong tire life.",
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
        <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "tune-ups",
    title: "Tune-Ups",
    description:
      "Engine tune-ups can help extend the life of your vehicle and improve its performance. Our tune-up services include the replacement of spark plugs, filters, and other components as needed.",
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "check-engine",
    title: "Check Engine",
    description:
      "Our check engine light diagnostics services include computer analysis of engine codes to determine the cause of any warning lights or indicators.",
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 10h2V7a1 1 0 011-1h6a1 1 0 011 1v3h2m2 3h2v4h-2m-2-5v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7a1 1 0 011-1h12a1 1 0 011 1z" strokeWidth="1.5" />
        <circle cx="12" cy="14" r="2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "pre-purchase-inspections",
    title: "Pre-Purchase Inspections",
    description:
      "Our pre-purchase inspection services provide an unbiased evaluation of a used vehicle's condition to help you make informed purchasing decisions.",
    icon: (
      <svg className="h-10 w-10 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            AutoWorks <span className="text-brand-accent">Service</span>
          </>
        }
        subtitle="A range of service areas that we Provide"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        backgroundImage="/images/premium/banner-services.jpg"
      />

      {/* 2. 9 Services Grid */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.slug}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                data-aos-duration="600"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#292929] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-accent/50 hover:shadow-2xl"
              >
                {/* Red bottom highlight line matching Figma cards */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-accent transition-colors" />

                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-brand-accent">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-accent transition-all group-hover:gap-3 group-hover:text-white"
                  >
                    <span>View Details</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Ready to Schedule CTA matching Services design */}
      <ScheduleCTA imageVariant="services" />
    </div>
  );
}
