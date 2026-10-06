import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import StatsBand from "@/components/sections/StatsBand";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import ScheduleCTA from "@/components/ui/ScheduleCTA";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <StatsBand />
      <Services />
      <About />
      <Testimonials />
      <Pricing />
      <ScheduleCTA imageVariant="card" />
    </>
  );
}
