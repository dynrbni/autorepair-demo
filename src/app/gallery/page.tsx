"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import ScheduleCTA from "@/components/ui/ScheduleCTA";

const categories = [
  "All",
  "Brake Repair",
  "Transmission Repair",
  "Suspension Repair",
  "Oil Change",
  "Tune-Ups",
];

const galleryItems = [
  { id: 1, src: "/images/premium/gallery-1.jpg", alt: "Mechanic inspecting engine under hood", category: "Brake Repair" },
  { id: 2, src: "/images/premium/gallery-2.jpg", alt: "Technician inspecting battery and wires", category: "Oil Change" },
  { id: 3, src: "/images/premium/gallery-3.jpg", alt: "Two mechanics reviewing service checklist", category: "Tune-Ups" },
  { id: 4, src: "/images/premium/gallery-4.jpg", alt: "Detailed engine component maintenance", category: "Transmission Repair" },
  { id: 5, src: "/images/premium/gallery-5.jpg", alt: "Car on hydraulic lift for underbody work", category: "Suspension Repair" },
  { id: 6, src: "/images/premium/gallery-6.jpg", alt: "V6 Engine bay diagnostics", category: "Tune-Ups" },
  { id: 7, src: "/images/premium/gallery-7.jpg", alt: "Mechanic tightening chassis bolts", category: "Suspension Repair" },
  { id: 8, src: "/images/premium/gallery-8.jpg", alt: "Tire technician mounting alloy rim", category: "Brake Repair" },
  { id: 9, src: "/images/premium/gallery-9.jpg", alt: "High-spec vehicle in garage bay", category: "Oil Change" },
  { id: 10, src: "/images/premium/gallery-10.jpg", alt: "Certified mechanic with wheel assembly", category: "Brake Repair" },
  { id: 11, src: "/images/premium/gallery-11.jpg", alt: "Brake rotor resurfacing and inspection", category: "Brake Repair" },
  { id: 12, src: "/images/premium/gallery-12.jpg", alt: "AutoWorks team final vehicle safety check", category: "Transmission Repair" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            AutoWorks <span className="text-brand-accent">Gallery</span>
          </>
        }
        subtitle="Have a look at a glimpse of our activities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
        backgroundImage="/images/premium/banner-gallery.jpg"
      />

      {/* 2. Gallery Filter & Grid */}
      <section className="py-20 lg:py-28">
        <Container>
          {/* Category Tabs */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="mb-14 flex items-center justify-center gap-3 overflow-x-auto pb-4 scrollbar-none"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-brand-accent text-white shadow-lg"
                      : "border border-white/10 bg-[#292929] text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 12 Image Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                data-aos-duration="600"
                onClick={() => setSelectedImage(item.src)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#1c1c1c] shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                  <div>
                    <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white uppercase">
                      {item.category}
                    </span>
                    <p className="mt-2 text-sm font-medium text-white">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] aspect-[16/10] overflow-hidden rounded-2xl border border-white/20">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-brand-accent transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 3. Schedule CTA */}
      <ScheduleCTA imageVariant="card" />
    </div>
  );
}
