"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import ScheduleCTA from "@/components/ui/ScheduleCTA";

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  date: string;
  author: string;
  commentsCount: number;
  badge?: string;
  category: string;
}

export const allBlogPosts: BlogPost[] = [
  {
    slug: "5-common-car-maintenance-mistakes-and-how-to-avoid-them",
    title: "5 Common Car Maintenance Mistakes and How to Avoid Them",
    image: "/images/premium/blog-post-1.jpg",
    date: "May 1, 2023",
    author: "John Smith",
    commentsCount: 11,
    badge: "Latest Blog",
    category: "Auto Tips",
  },
  {
    slug: "the-importance-of-regular-oil-changes-for-your-car",
    title: "The Importance of Regular Oil Changes for Your Car",
    image: "/images/premium/blog-post-2.jpg",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    commentsCount: 21,
    badge: "Latest Blog",
    category: "Auto Tips",
  },
  {
    slug: "how-to-prepare-your-car-for-a-long-road-trip",
    title: "How to Prepare Your Car for a Long Road Trip",
    image: "/images/premium/blog-post-3.jpg",
    date: "July 12, 2023",
    author: "David Lee",
    commentsCount: 16,
    category: "Lifestyle",
  },
  {
    slug: "signs-your-car-needs-new-tires-and-how-to-choose-the-right-ones",
    title: "Signs Your Car Needs New Tires and How to Choose the Right Ones",
    image: "/images/premium/blog-post-4.jpg",
    date: "August 5, 2023",
    author: "Emily Davis",
    commentsCount: 28,
    category: "Auto World",
  },
  {
    slug: "the-benefits-of-regular-engine-tune-ups-for-your-car",
    title: "The Benefits of Regular Engine Tune-ups for Your Car",
    image: "/images/premium/blog-post-5.jpg",
    date: "September 1, 2023",
    author: "Michael Wilson",
    commentsCount: 4,
    badge: "Latest Blog",
    category: "Auto Trend",
  },
  {
    slug: "how-to-extend-the-life-of-your-cars-battery",
    title: "How to Extend the Life of Your Car's Battery",
    image: "/images/premium/blog-post-6.jpg",
    date: "October 3, 2023",
    author: "Karen Chen",
    commentsCount: 4,
    category: "Auto Tips",
  },
  {
    slug: "tips-for-winterizing-your-car-and-keeping-it-safe-on-the-road",
    title: "Tips for Winterizing Your Car and Keeping It Safe on the Road",
    image: "/images/premium/blog-post-7.jpg",
    date: "November 8, 2023",
    author: "Adam Jones",
    commentsCount: 56,
    category: "Auto Tips",
  },
  {
    slug: "the-truth-about-synthetic-vs-conventional-motor-oil",
    title: "The Truth About Synthetic vs. Conventional Motor Oil",
    image: "/images/premium/blog-post-8.jpg",
    date: "December 6, 2023",
    author: "Amanda Lee",
    commentsCount: 21,
    category: "Business",
  },
];

const categories = [
  "Auto World",
  "Auto Trend",
  "Auto Tips",
  "Business",
  "Lifestyle",
];

const popularTags = [
  "vehicles",
  "car",
  "auto parts",
  "motor",
  "machine",
  "tire",
  "vehicle maintenance",
  "oil",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            Welcome to <span className="text-brand-accent">Our Blog</span>
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        backgroundImage="/images/premium/banner-blog.jpg"
      />

      {/* 2. Blog Main Content */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 8 Columns: Posts Grid */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Controls bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <span>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border border-white/10 bg-[#292929] px-3 py-1.5 text-xs font-semibold text-white focus:outline-none focus:border-brand-accent"
                  >
                    <option value="latest">Latest</option>
                    <option value="popular">Most Comments</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs">
                    Showing {filteredPosts.length} items
                  </span>
                  {selectedCategory && (
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="text-xs text-brand-accent underline hover:text-white"
                    >
                      Clear Filter ({selectedCategory})
                    </button>
                  )}
                </div>
              </div>

              {/* 2 Columns Blog Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.slug}
                    data-aos="fade-up"
                    data-aos-delay={(index % 2) * 120}
                    data-aos-duration="600"
                    className="group flex flex-col overflow-hidden rounded-2xl bg-[#F9F9F8] text-[#1E1E1E] shadow-xl transition-transform hover:-translate-y-1.5 hover:shadow-2xl"
                  >
                    {/* Featured Image */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#e0e0e0]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {post.badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white shadow-md">
                          {post.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            📅 {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            👤 {post.author}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold leading-snug text-[#1A1A1A] transition-colors group-hover:text-brand-accent">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                      </div>

                      {/* Comment link footer */}
                      <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                        <span>Comments ({post.commentsCount})</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="font-bold text-brand-accent transition hover:text-brand-accent-dark flex items-center gap-1"
                        >
                          Read ↗
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right 4 Columns: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Search */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand-accent focus:outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40">
                    🔍
                  </span>
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <h4 className="text-lg font-bold text-white mb-6">Categories</h4>
                <ul className="flex flex-col gap-2.5">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedCategory(selectedCategory === cat ? null : cat)
                        }
                        className={`w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition ${
                          selectedCategory === cat
                            ? "bg-brand-accent text-white font-bold"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Posts */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <h4 className="text-lg font-bold text-white mb-6">Latest posts</h4>
                <div className="flex flex-col gap-5">
                  <Link
                    href={`/blog/tips-for-winterizing-your-car-and-keeping-it-safe-on-the-road`}
                    className="group flex flex-col gap-1"
                  >
                    <h5 className="text-sm font-semibold text-white/90 group-hover:text-brand-accent transition">
                      Tips for Winterizing Your Car and Keeping It Safe on the Road
                    </h5>
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span>👤 Adam Jones</span>
                      <span>📅 Nov 8, 2023</span>
                    </div>
                  </Link>

                  <div className="h-[1px] bg-white/5" />

                  <Link
                    href={`/blog/the-truth-about-synthetic-vs-conventional-motor-oil`}
                    className="group flex flex-col gap-1"
                  >
                    <h5 className="text-sm font-semibold text-white/90 group-hover:text-brand-accent transition">
                      The Truth About Synthetic vs. Conventional Motor Oil for Your Car
                    </h5>
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span>👤 Amanda Lee</span>
                      <span>📅 Dec 6, 2023</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <h4 className="text-lg font-bold text-white mb-6">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSearchQuery(tag)}
                      className="rounded-lg border border-white/10 bg-[#222222] px-3 py-1.5 text-xs text-white/70 hover:border-brand-accent hover:text-brand-accent transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Schedule CTA */}
      <ScheduleCTA imageVariant="card" />
    </div>
  );
}
