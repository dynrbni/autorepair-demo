import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface ScheduleCTAProps {
  imageVariant?: "card" | "services" | "pricing";
}

export default function ScheduleCTA({
  imageVariant = "card",
}: ScheduleCTAProps) {
  const images = {
    card: "/images/premium/cta-schedule-card.jpg",
    services: "/images/premium/cta-schedule-services.jpg",
    pricing: "/images/premium/cta-schedule-pricing.jpg",
  };

  return (
    <section className="py-14 sm:py-20 bg-[#222222]">
      <Container>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="800"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1A1A1A] shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/15 blur-3xl rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 items-center">
            {/* Visual banner / car side */}
            <div className="relative h-64 sm:h-80 lg:h-96 lg:col-span-6 w-full overflow-hidden">
              <Image
                src={images[imageVariant]}
                alt="Ready to schedule an appointment"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1A1A1A] hidden lg:block" />
            </div>

            {/* CTA copy and button */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-8 sm:p-12 lg:col-span-6 z-10">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Ready to schedule <br className="hidden sm:inline" />
                an <span className="text-brand-accent">appointment?</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/70 max-w-md">
                Contact us today to book your next service and experience certified car care.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-brand-accent-dark hover:scale-105 active:scale-95"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/15"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
