"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";

const availableServices = [
  "Air Conditioner",
  "Brakes Repair",
  "Engine Diagnostics",
  "Heating & Cooling",
  "Oil, Lube & Filters",
  "Wheel Alignment",
  "Steering & Suspension",
  "Transmission Repair",
  "Others",
];

export default function AppointmentPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Engine Diagnostics",
    "Wheel Alignment",
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    make: "",
    model: "",
    year: "",
    date: "",
    time: "",
    location: "1271 Gladstone Rd, Nassau",
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            Make an <span className="text-brand-accent">Appointment</span>
          </>
        }
        subtitle="Schedule your next appointment with us using our easy-to-use online appointment form."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Appointment" },
        ]}
        backgroundImage="/images/premium/banner-appointment.jpg"
      />

      {/* 2. Appointment Form Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#292929] p-8 sm:p-14 shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">
              Appointment
            </h2>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center text-white space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">Appointment Booked!</h3>
                <p className="text-white/70 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name || "Customer"}</span>! We have received your booking for{" "}
                  <span className="text-brand-accent font-semibold">
                    {selectedServices.join(", ")}
                  </span>
                  . Our team will contact you shortly to confirm.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-full bg-brand-accent px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  Book Another Service
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Contact Info */}
                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Car Detail */}
                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-2">
                      Make
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Toyota"
                      value={formData.make}
                      onChange={(e) =>
                        setFormData({ ...formData, make: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-2">
                      Model
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Camry"
                      value={formData.model}
                      onChange={(e) =>
                        setFormData({ ...formData, model: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-2">
                      Year
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2021"
                      value={formData.year}
                      onChange={(e) =>
                        setFormData({ ...formData, year: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                    />
                  </div>
                </div>

                {/* Section: Appointment Details */}
                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-base font-bold text-white mb-4">
                    Appointment Details
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-white/70 block mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white focus:border-brand-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white/70 block mb-2">
                        Time
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white focus:border-brand-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white/70 block mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white focus:border-brand-accent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Select Services Needed */}
                <div className="pt-4 border-t border-white/10">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-4">
                    Select Services Needed
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {availableServices.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                            isSelected
                              ? "bg-brand-accent text-white shadow-md shadow-brand-accent/25"
                              : "border border-white/10 bg-[#222222] text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-brand-accent-dark hover:scale-105 active:scale-95"
                  >
                    <span>Make an Appointment</span>
                    <span>↗</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* 3. Contact Us Section with Mechanic Card */}
      <section className="py-20 lg:py-24 border-t border-white/10 bg-[#1e1e1e]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Mechanic Image */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/premium/appointment-mechanic.jpg"
                alt="AutoWorks Certified Mechanic"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Contact Info */}
            <div data-aos="fade-left" data-aos-duration="800" className="lg:col-span-6 flex flex-col gap-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Contact Us
              </h2>

              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent text-white shadow-md">
                    📍
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/50 block">
                      Location
                    </span>
                    <span className="text-base font-semibold text-white">
                      1271 Gladstone Rd, Nassau, Bahamas
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent text-white shadow-md">
                    📞
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/50 block">
                      Phone
                    </span>
                    <a
                      href="tel:+12347890876"
                      className="text-base font-semibold text-white hover:text-brand-accent transition"
                    >
                      +1 234-789-0876
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent text-white shadow-md">
                    ✉️
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/50 block">
                      Email
                    </span>
                    <a
                      href="mailto:hello@autoworks.com"
                      className="text-base font-semibold text-white hover:text-brand-accent transition"
                    >
                      hello@autoworks.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent text-white shadow-md">
                    🌐
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/50 block">
                      Website
                    </span>
                    <a
                      href="https://www.autoworks.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-semibold text-white hover:text-brand-accent transition"
                    >
                      www.autoworks.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
