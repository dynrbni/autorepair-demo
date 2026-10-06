"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            Let&apos;s Get <span className="text-brand-accent">Connected</span>
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        backgroundImage="/images/premium/banner-contact.jpg"
      />

      {/* 2. Feedback & Contact Info Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 7 Columns: Feedback Form */}
            <div data-aos="fade-right" data-aos-duration="800" className="lg:col-span-7 flex flex-col gap-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Contact us!
              </h2>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-white space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-2xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-white/70 text-sm">
                    Thank you, {formData.name}! We have received your message and will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", message: "" });
                    }}
                    className="mt-3 rounded-full bg-brand-accent px-5 py-2 text-xs font-bold uppercase tracking-wider text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-white/70 block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-white/10 bg-[#292929] px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-white/70 block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-2xl border border-white/10 bg-[#292929] px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your feedback or inquiry here..."
                      className="w-full rounded-2xl border border-white/10 bg-[#292929] px-5 py-3.5 text-sm text-white placeholder-white/30 focus:border-brand-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="rounded-xl bg-brand-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-brand-accent-dark hover:scale-105 active:scale-95"
                    >
                      Send Message ↗
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 Columns: Contact Info */}
            <div data-aos="fade-left" data-aos-duration="800" className="lg:col-span-5 flex flex-col gap-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Contact Info
              </h2>

              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white shadow-md">
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white shadow-md">
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white shadow-md">
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white shadow-md">
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

      {/* 3. Hi! We're here! Map Section */}
      <section className="pb-24 lg:pb-32">
        <Container>
          <div data-aos="fade-up" data-aos-duration="700" className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Hi! We&apos;re here!
            </h2>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <Image
              src="/images/premium/contact-map.jpg"
              alt="AutoWorks Location Map"
              fill
              className="object-cover"
            />

            {/* Map Action Button */}
            <div className="absolute bottom-6 right-6 z-10">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl transition hover:bg-brand-accent-dark"
              >
                <span>View in Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
