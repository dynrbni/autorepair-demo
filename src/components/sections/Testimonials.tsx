import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "I have been taking my car to AutoWorks for years and have always had a great experience. The staff is knowledgeable and friendly, and they always take the time to explain the repairs needed. I highly recommend them for anyone looking for reliable auto repair services.",
    name: "Sarah Tumiwa",
    role: "Regular Customer",
    initials: "ST",
  },
  {
    quote:
      "I had an urgent issue with my car and was able to get an appointment at AutoWorks the same day. The team was able to diagnose the problem quickly and had my car back on the road in no time. I really appreciated their fast and efficient service.",
    name: "John Dolton",
    role: "Fleet Driver",
    initials: "JD",
  },
  {
    quote:
      "The team walked me through exactly what my car needed with zero upselling. Transparent pricing and certified mechanics make this the best repair shop in the area without hesitation.",
    name: "David Kim",
    role: "Car Enthusiast",
    initials: "DK",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-brand-accent">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.363 2.443a1 1 0 00-.364 1.118l1.286 3.953c.3.921-.755 1.688-1.538 1.118l-3.363-2.443a1 1 0 00-1.176 0l-3.363 2.443c-.783.57-1.838-.197-1.538-1.118l1.286-3.953a1 1 0 00-.364-1.118L2.07 9.38c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.953z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#1e1e1e] py-20 sm:py-28 text-white">
      <Container className="flex flex-col items-center gap-14">
        <div data-aos="fade-up" data-aos-duration="700" className="flex flex-col items-center text-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            What Our Clients Say
          </h2>
          <p className="max-w-xl text-base text-white/60">
            Read what our satisfied customers have to say about our services and honest craftsmanship.
          </p>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="700"
              className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-[#292929] p-8 shadow-xl transition hover:border-brand-accent/40"
            >
              <StarRating />
              <p className="text-sm leading-relaxed text-white/70 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-white shadow-md">
                  {testimonial.initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-white/50">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
