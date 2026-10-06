"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import ScheduleCTA from "@/components/ui/ScheduleCTA";

const categories = [
  { label: "Brake Repair", slug: "brake-repair" },
  { label: "Transmission Repair", slug: "transmission-repair" },
  { label: "Suspension Repair", slug: "suspension-repair" },
  { label: "Oil Change", slug: "oil-change" },
  { label: "Tune-Ups", slug: "tune-ups" },
  { label: "Electrical Services", slug: "electrical-services" },
  { label: "Tire Services", slug: "tire-service" },
  { label: "Check Engine", slug: "check-engine" },
  { label: "Pre-Purchase Inspections", slug: "pre-purchase-inspections" },
];

const features = [
  {
    num: "01",
    title: "Tire Rotation",
    desc: "Evenly distributes wear and tear on your tires to prolong their lifespan and improve handling.",
  },
  {
    num: "02",
    title: "Tire Balancing",
    desc: "Ensures that your tires are balanced for optimal performance and reduces vibrations while driving.",
  },
  {
    num: "03",
    title: "Tire Replacement",
    desc: "Evenly distributes wear and tear on your tires to prolong their lifespan and improve handling.",
  },
  {
    num: "04",
    title: "Alignment Services",
    desc: "Our alignment services ensure that your tires are properly aligned for optimal handling and performance.",
  },
];

const tirePrices = [
  { name: "Michelin Defender T+H", price: "$120" },
  { name: "Goodyear Assurance WeatherReady", price: "$110" },
  { name: "Bridgestone Ecopia EP422 Plus", price: "$80" },
  { name: "Continental TrueContact Tour", price: "$100" },
  { name: "Pirelli Cinturato P7", price: "$130" },
  { name: "Yokohama Avid Ascend GT", price: "$90" },
];

const faqs = [
  {
    q: "What types of vehicles do you service?",
    a: "We service all types of vehicles, including cars, trucks, and SUVs across domestic, European, and Japanese makes.",
  },
  {
    q: "Do I need an appointment for auto repairs?",
    a: "While walk-ins are welcome for minor checks, we strongly recommend booking an appointment online to ensure prompt service without waiting.",
  },
  {
    q: "How long does it typically take to complete an auto repair?",
    a: "Routine services like tire rotations and oil changes usually take under 60 minutes. Complex repairs depend on parts availability and diagnostic depth.",
  },
  {
    q: "Do you offer any warranties on your repairs?",
    a: "Yes! All repairs come backed by our 12-month / 12,000-mile parts and labor warranty for complete peace of mind.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept Visa, MasterCard, American Express, debit cards, contactless Apple/Google Pay, and verified auto repair financing plans.",
  },
];

export default function ServiceDetailsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            Comprehensive <span className="text-brand-accent">Tire Service</span>
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Details" },
        ]}
        backgroundImage="/images/premium/banner-services.jpg"
      />

      {/* 2. Main Details Content */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 8 Columns: Details */}
            <div className="lg:col-span-8 flex flex-col gap-14">
              {/* Service Hero Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/premium/service-details-hero.jpg"
                  alt="Comprehensive Tire Service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Service Summary Paragraph */}
              <p className="text-base sm:text-lg leading-relaxed text-white/80">
                This service is designed to keep your vehicle&apos;s tires in
                top condition for optimal performance, safety, and longevity.
                Our experienced technicians will inspect your tires and
                recommend the best course of action to meet your needs and
                budget.
              </p>

              {/* Features Grid */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                  Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex gap-4">
                      <span className="text-xl font-black text-brand-accent">
                        {feature.num}
                      </span>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-bold text-white">
                          {feature.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-white/60">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Tier Grid */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                  Price
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {tirePrices.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#292929] p-7 transition hover:border-brand-accent/50 hover:shadow-xl"
                    >
                      <h4 className="text-lg font-bold text-white mb-4">
                        {item.name}
                      </h4>
                      <div>
                        <span className="text-xs text-white/50 block">
                          Start from
                        </span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-3xl font-black text-brand-accent">
                            {item.price}
                          </span>
                          <span className="text-sm text-white/60">/Tier</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion */}
              <div id="faq">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                  Frequently Asked Questions
                </h3>
                <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={faq.q} className="py-5">
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="flex w-full items-center justify-between text-left text-base sm:text-lg font-semibold text-white transition hover:text-brand-accent"
                        >
                          <span>{faq.q}</span>
                          <span className="ml-4 text-2xl font-bold text-brand-accent">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <p className="mt-3 text-sm leading-relaxed text-white/70">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Search Widget */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand-accent focus:outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Service Categories */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <h4 className="text-lg font-bold text-white mb-6">
                  Service Categories
                </h4>
                <ul className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/services/${cat.slug}`}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition ${
                          cat.slug === "tire-service"
                            ? "bg-brand-accent text-white font-bold"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span>›</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info Card */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <h4 className="text-lg font-bold text-white mb-6">
                  Contact Info
                </h4>
                <ul className="flex flex-col gap-4 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-0.5">📍</span>
                    <span>1271 Gladstone Rd, Nassau, Bahamas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-accent">📞</span>
                    <a href="tel:+12347890876" className="hover:text-white">
                      +1 234-789-0876
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-accent">✉️</span>
                    <a href="mailto:hello@autoworks.com" className="hover:text-white">
                      hello@autoworks.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-accent">🌐</span>
                    <a href="https://www.autoworks.com" target="_blank" rel="noreferrer" className="hover:text-white">
                      www.autoworks.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Schedule CTA */}
      <ScheduleCTA imageVariant="pricing" />
    </div>
  );
}
