import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#151515] text-white">
      {/* Background with premium supercar */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/premium/hero-supercar.jpg"
          alt="AutoWorks Sports Car Service"
          fill
          priority
          className="object-cover object-right lg:object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[#181818]/70 to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-col gap-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-52 lg:pb-44">
        {/* Welcome badge */}
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          className="inline-flex self-start rounded-full bg-brand-accent px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg"
        >
          Welcome to Auto Works
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight"
        >
          Your <span className="text-brand-accent">Trusted</span> Auto <br />
          Repair Service <br />
          Provider
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          We offer reliable and efficient services to ensure your vehicle is
          always in top condition. Let us take care of your car, so you can
          focus on what matters most.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-duration="800"
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition hover:bg-brand-accent-dark hover:scale-105 active:scale-95"
          >
            Book Appointment ↗
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/20"
          >
            Our Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
