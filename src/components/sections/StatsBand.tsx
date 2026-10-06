import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5000+", label: "Happy Clients" },
  { value: "50+", label: "Expert Mechanics" },
  { value: "24/7", label: "Support" },
];

export default function StatsBand() {
  return (
    <section className="bg-brand-dark py-16">
      <Container className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4 lg:w-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-3xl font-extrabold text-brand-accent sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>

        <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="600" className="w-full sm:w-auto">
          <Button href="/appointment" className="w-full sm:w-auto">
            Book Appointment
          </Button>
        </div>
      </Container>
    </section>
  );
}
