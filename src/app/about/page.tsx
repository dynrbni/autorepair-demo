import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import ScheduleCTA from "@/components/ui/ScheduleCTA";

export const metadata = {
  title: "About Us | AutoWorks Auto Repair",
  description:
    "Learn about AutoWorks - over 20 years of expert automotive repair, certified mechanics, and customer-first service.",
};

const whyChooseUs = [
  {
    title: "Competitive pricing",
    description:
      "We understand that auto repair can be expensive, which is why we offer competitive pricing for all of our services. We strive to provide affordable solutions without sacrificing quality.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Experienced and certified technicians",
    description:
      "Our team of technicians is highly trained and experienced in all aspects of auto repair. We only hire certified professionals who have a proven track record of delivering high-quality work.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Fast and efficient service",
    description:
      "We know that your time is valuable, which is why we work quickly and efficiently to get your car back on the road as soon as possible. Our team is dedicated to completing your repairs in a timely manner.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Use of high-quality parts and equipment",
    description:
      "We only use the highest quality parts and equipment for all of our repairs. We believe that using top-of-the-line components helps to ensure the longevity and reliability of your vehicle.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
    ),
  },
];

const successStats = [
  { label: "Years of Experience", value: "20+", highlight: true },
  { label: "Vehicle Repaired", value: "3.8k", highlight: false },
  { label: "Hour Cars Get Done", value: "1", highlight: false },
  { label: "Inventory Numbers", value: "2k", highlight: true },
  { label: "Technicians and Workers", value: "30", highlight: true },
  { label: "Satisfied Customers", value: "100%", highlight: false },
];

const offeredServices = [
  {
    title: "Brake Repair",
    desc: "Our brake repair services include inspection, diagnosis, and repair of brake components to ensure safe and reliable braking performance.",
    icon: "/images/premium/gallery-1.jpg",
  },
  {
    title: "Transmission Repair",
    desc: "Our transmission services include fluid and filter replacement, an inspection of transmission components, and repair or replacement as needed.",
    icon: "/images/premium/gallery-2.jpg",
  },
  {
    title: "Suspension Repair",
    desc: "Our suspension repair services include inspection and repair of worn components, such as shocks and struts, to improve handling and ride comfort.",
    icon: "/images/premium/gallery-3.jpg",
  },
  {
    title: "Oil Change",
    desc: "Regular oil changes are essential to keep your engine running smoothly. Our oil change services include the replacement of old oil and oil filters with new, high-quality products.",
    icon: "/images/premium/gallery-4.jpg",
  },
  {
    title: "Electrical Services",
    desc: "Our electrical system repair services include diagnosis and repair of electrical issues, such as battery replacement, alternator replacement, and wiring repairs.",
    icon: "/images/premium/gallery-5.jpg",
  },
  {
    title: "Tire Services",
    desc: "Our tire services include tire rotation, balancing, and replacement, as well as alignment services to improve handling and prolong tire life.",
    icon: "/images/premium/gallery-6.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            Welcome to <span className="text-brand-accent">AutoWorks</span>
          </>
        }
        subtitle="Your One-Stop Auto Shop"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        backgroundImage="/images/premium/banner-about.jpg"
      />

      {/* 2. Reputation Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" data-aos-duration="800" className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-accent">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Our Reputation <br /> Speaks for Itself
              </h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>
                  AutoWorks is a family-owned and operated business that has
                  been providing auto repair services to the community for over
                  20 years. We pride ourselves on our commitment to quality and
                  customer satisfaction.
                </p>
                <p>
                  We understand that your car is an essential part of your daily
                  life, and that's why we strive to provide reliable and
                  efficient service to meet all of your auto repair needs.
                  Whether you need routine maintenance, such as oil changes and
                  tire rotations, or more complex repairs, such as engine
                  overhauls and transmission replacements, we have the skills
                  and expertise to get the job done right.
                </p>
                <p>
                  From routine oil changes to complex engine repairs, we offer a
                  wide range of auto repair and maintenance services to meet all
                  of your needs in one convenient location.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-brand-accent-dark"
                >
                  Our Services ↗
                </Link>
              </div>
            </div>

            {/* Right Photo Collage with 20+ Years */}
            <div data-aos="fade-left" data-aos-duration="800" className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/premium/about-reputation.jpg"
                  alt="AutoWorks Team and Workshop"
                  width={1280}
                  height={980}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Stat callout badge */}
              <div className="absolute -top-6 -left-6 rounded-2xl border border-white/10 bg-[#1A1A1A]/95 p-5 shadow-2xl backdrop-blur">
                <div className="text-4xl sm:text-5xl font-extrabold text-brand-accent">
                  20+
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Why Choose Us */}
      <section id="why-us" className="py-20 bg-[#1e1e1e]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Why Choose Us?
            </h2>
            <p className="mt-3 text-base text-brand-accent font-medium">
              We&apos;re here for whatever you need
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#292929] p-8 transition hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-white shadow-md">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Success Story / Stats */}
      <section className="py-20 lg:py-24 border-y border-white/10 bg-[#1A1A1A]">
        <Container>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              SUCCESS STORY
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              AutoWorks is Well
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {successStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#222222] border border-white/5 text-center"
              >
                <span
                  className={`text-4xl sm:text-6xl font-black tracking-tight ${
                    stat.highlight ? "text-brand-accent" : "text-white"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="mt-2 text-sm sm:text-base font-medium text-white/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. What We Offer: Services grid preview */}
      <section className="py-20 lg:py-28">
        <Container>
          <div data-aos="fade-up" data-aos-duration="700" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              WHAT WE OFFER
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Our Services
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offeredServices.map((service, index) => (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 120}
                data-aos-duration="600"
                className="flex flex-col rounded-2xl border border-white/10 bg-[#292929] p-8 transition hover:border-brand-accent/50 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" strokeWidth="2" />
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 mb-6">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-white transition-colors"
                >
                  Learn More ↗
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Video Feature Banner */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/premium/about-video-banner.jpg"
            alt="AutoWorks Workshop Experience"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <Container data-aos="zoom-in" data-aos-duration="800" className="relative z-10 flex flex-col items-center text-center">
          {/* Play button */}
          <div className="group flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border-4 border-white/30 bg-brand-accent text-white shadow-2xl transition hover:scale-110 hover:bg-brand-accent-dark">
            <svg
              className="ml-1.5 h-10 w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <div className="mt-10 rounded-2xl bg-brand-accent px-8 py-4 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide">
              Get to Know Us Even Closer
            </h3>
          </div>
        </Container>
      </section>

      {/* 7. Ready to Schedule CTA */}
      <ScheduleCTA imageVariant="card" />
    </div>
  );
}
