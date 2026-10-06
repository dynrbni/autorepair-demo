"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";

const relatedPosts = [
  {
    title: "10 Tips for Maintaining Your Car's Engine",
    author: "John Smith",
    date: "May 23, 2023",
    image: "/images/premium/related-1.jpg",
    slug: "10-tips-maintaining-car-engine",
  },
  {
    title: "The Importance of Regular Tire Rotations",
    author: "Emily Davis",
    date: "June 13, 2023",
    image: "/images/premium/related-2.jpg",
    slug: "importance-regular-tire-rotations",
  },
  {
    title: "How to Improve Your Car's Fuel Efficiency",
    author: "Amanda Lee",
    date: "July 12, 2023",
    image: "/images/premium/related-3.jpg",
    slug: "improve-car-fuel-efficiency",
  },
  {
    title: "The Benefits of Regular Car Detailing",
    author: "Adam Jones",
    date: "July 30, 2023",
    image: "/images/premium/related-4.jpg",
    slug: "benefits-regular-car-detailing",
  },
];

const tags = [
  "car maintenance",
  "engine care",
  "oil changes",
  "filter replacements",
  "spark plug replacement",
];

const initialComments = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "June 18, 2023",
    comment:
      "Great article! These tips are so helpful for keeping my car running smoothly. Thanks for sharing!",
    avatar: "/images/premium/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Michael Lee",
    date: "July 2, 2022",
    comment:
      "I never knew about the importance of replacing the air filter regularly. Thanks for the tip!",
    avatar: "/images/premium/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Jessica Davis",
    date: "August 8, 2022",
    comment:
      "I'm so glad I stumbled upon this article. I've been neglecting my car's engine maintenance for far too long, but now I feel much more confident in taking care of it. Thank you!",
    avatar: "/images/premium/avatar-3.jpg",
  },
];

export default function BlogDetailPage() {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !commentText) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        name,
        date: "Just now",
        comment: commentText,
        avatar: "/images/premium/avatar-1.jpg",
      },
    ]);
    setName("");
    setEmail("");
    setCommentText("");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#222222] text-white">
      {/* 1. Page Banner */}
      <PageBanner
        title={
          <>
            <span className="text-brand-accent">5 Common</span> Car Maintenance Mistakes
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Details" },
        ]}
        backgroundImage="/images/premium/banner-blog.jpg"
      />

      {/* 2. Blog Post Details */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 8 Columns: Main Article */}
            <article className="lg:col-span-8 flex flex-col gap-10">
              {/* Featured Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/premium/blog-detail-hero.jpg"
                  alt="5 Common Car Maintenance Mistakes and How to Avoid Them"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  <span className="text-brand-accent">5 Common</span> Car Maintenance Mistakes and How to Avoid Them
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-white/60">
                  <span>👤 John Smith</span>
                  <span>📅 May 1, 2023</span>
                  <span>💬 {comments.length} comments</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-8 text-base sm:text-lg leading-relaxed text-white/80">
                <p>
                  As a car owner, it&apos;s important to stay on top of your vehicle&apos;s maintenance to ensure it runs smoothly and efficiently. However, even the most well-intentioned car owners can make mistakes when it comes to maintaining their vehicle. In this article, we&apos;ll discuss five common car maintenance mistakes and how to avoid them.
                </p>

                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    1. Neglecting Regular Oil Changes
                  </h2>
                  <p className="text-base text-white/70">
                    Oil changes are essential to keep your engine running smoothly and efficiently. Neglecting to change your oil regularly can result in engine damage and decreased performance. Be sure to check your vehicle&apos;s owner&apos;s manual for the recommended oil change interval and stick to a regular schedule.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    2. Ignoring Warning Lights
                  </h2>
                  <p className="text-base text-white/70">
                    Modern vehicles are equipped with a variety of warning lights and indicators to alert you of potential issues. Ignoring these warning lights can lead to more serious problems down the line. Be sure to address any warning lights or indicators as soon as possible to prevent further damage.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    3. Overlooking Tire Maintenance
                  </h2>
                  <p className="text-base text-white/70">
                    Your tires are a critical component of your vehicle&apos;s performance and safety. Neglecting to maintain your tires can result in poor handling, decreased fuel efficiency, and even accidents. Be sure to regularly check your tire pressure, rotate your tires, and replace them when necessary.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    4. Using Low-Quality Parts
                  </h2>
                  <p className="text-base text-white/70">
                    Using low-quality or aftermarket parts can save you money upfront, but it can cost you in the long run. These parts may not be as reliable or long-lasting as genuine manufacturer parts, and they can even cause damage to other components in your vehicle. Always use high-quality, genuine parts to ensure optimal performance and longevity.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    5. Neglecting to Clean Your Vehicle
                  </h2>
                  <p className="text-base text-white/70">
                    Regular cleaning and detailing can help protect your vehicle&apos;s paint and interior, as well as prevent rust and other damage. Neglecting to clean your vehicle can result in a less attractive appearance and decreased resale value. Be sure to regularly wash, wax, and detail your vehicle to keep it looking and performing its best.
                  </p>
                </div>

                {/* Callout Quote */}
                <div className="rounded-2xl border-l-4 border-brand-accent bg-[#292929] p-6 text-lg font-medium italic text-white/95">
                  &ldquo;It&apos;s important to stay on top of your vehicle&apos;s maintenance to ensure it runs smoothly and efficiently.&rdquo;
                </div>
              </div>

              {/* Related Posts Grid (4 items) */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Related Posts</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.title}
                      href={`/blog/${post.slug}`}
                      className="group flex gap-4 rounded-xl border border-white/5 bg-[#292929] p-3 transition hover:border-brand-accent/50 hover:bg-[#303030]"
                    >
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-semibold text-white group-hover:text-brand-accent transition line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="mt-1 text-xs text-white/50">
                          {post.date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Article Tags */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-sm font-bold text-white/70 block mb-3">
                  Article Tags:
                </span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-[#292929] px-3 py-1.5 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="pt-10 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Comments ({comments.length})
                </h3>

                <div className="flex flex-col gap-6">
                  {comments.map((c) => (
                    <div
                      key={c.id}
                      className="rounded-2xl border border-white/5 bg-[#292929] p-6"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-brand-accent/20">
                          <Image
                            src={c.avatar}
                            alt={c.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">
                            {c.name}
                          </h4>
                          <span className="text-xs text-white/50">{c.date}</span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-white/80">
                        {c.comment}
                      </p>
                      <div className="mt-4 flex gap-4 text-xs font-semibold text-brand-accent">
                        <button type="button" className="hover:underline">
                          Like
                        </button>
                        <button type="button" className="hover:underline">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Comment Form */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Your Comment
                </h3>
                <p className="text-xs text-white/50 mb-6">
                  Your email address will not be published. Required fields are marked *
                </p>

                {submitted && (
                  <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400">
                    Thank you! Your comment has been posted.
                  </div>
                )}

                <form onSubmit={handleCommentSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-white/70 block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#292929] px-4 py-3 text-sm text-white focus:border-brand-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-white/70 block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#292929] px-4 py-3 text-sm text-white focus:border-brand-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70 block mb-2">
                      Comment *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#292929] px-4 py-3 text-sm text-white focus:border-brand-accent focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="save-info"
                      className="rounded border-white/20 bg-[#292929] text-brand-accent focus:ring-brand-accent"
                    />
                    <label htmlFor="save-info" className="text-xs text-white/60">
                      Save my name and email in this browser for the next time I comment.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="rounded-xl bg-brand-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-brand-accent-dark"
                    >
                      Post Comment ↗
                    </button>
                  </div>
                </form>

                {/* Social Share Buttons */}
                <div className="mt-12 flex flex-wrap gap-3 pt-6 border-t border-white/10">
                  <button type="button" className="rounded-lg bg-[#1877F2] px-4 py-2 text-xs font-bold text-white hover:opacity-90">
                    Share to Facebook
                  </button>
                  <button type="button" className="rounded-lg bg-[#1DA1F2] px-4 py-2 text-xs font-bold text-white hover:opacity-90">
                    Share to Twitter
                  </button>
                  <button type="button" className="rounded-lg bg-[#0A66C2] px-4 py-2 text-xs font-bold text-white hover:opacity-90">
                    Share to LinkedIn
                  </button>
                  <button type="button" className="rounded-lg bg-[#E60023] px-4 py-2 text-xs font-bold text-white hover:opacity-90">
                    Share to Pinterest
                  </button>
                </div>
              </div>
            </article>

            {/* Right 4 Columns: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Search */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand-accent focus:outline-none"
                />
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <h4 className="text-lg font-bold text-white mb-6">Categories</h4>
                <ul className="flex flex-col gap-3 text-sm text-white/70">
                  {["Auto World", "Auto Trend", "Auto Tips", "Business", "Lifestyle"].map((cat) => (
                    <li key={cat}>
                      <Link href="/blog" className="hover:text-brand-accent transition flex justify-between">
                        <span>{cat}</span>
                        <span>›</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Posts */}
              <div className="rounded-2xl border border-white/10 bg-[#292929] p-6">
                <h4 className="text-lg font-bold text-white mb-6">Latest posts</h4>
                <div className="flex flex-col gap-4 text-sm">
                  <Link href="/blog" className="group text-white/90 hover:text-brand-accent transition">
                    Tips for Winterizing Your Car and Keeping It Safe
                    <span className="block text-xs text-white/50 mt-1">Nov 8, 2023</span>
                  </Link>
                  <div className="h-[1px] bg-white/5" />
                  <Link href="/blog" className="group text-white/90 hover:text-brand-accent transition">
                    The Truth About Synthetic vs Conventional Motor Oil
                    <span className="block text-xs text-white/50 mt-1">Dec 6, 2023</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
