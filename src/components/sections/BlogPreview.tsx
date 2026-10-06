import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const posts = [
  {
    title: "5 Common Car Maintenance Mistakes and How to Avoid Them",
    excerpt:
      "Avoid costly repairs by steering clear of the most common oversights car owners make.",
    date: "May 1, 2023",
    category: "Maintenance",
    image: "/images/premium/blog-post-1.jpg",
    slug: "5-common-car-maintenance-mistakes-and-how-to-avoid-them",
  },
  {
    title: "The Importance of Regular Oil Changes for Your Car",
    excerpt:
      "Regular oil changes are essential to keep your engine running smoothly and efficiently.",
    date: "June 15, 2023",
    category: "Oil Care",
    image: "/images/premium/blog-post-2.jpg",
    slug: "the-importance-of-regular-oil-changes-for-your-car",
  },
  {
    title: "How to Prepare Your Car for a Long Road Trip",
    excerpt:
      "Ensure safety and reliability before hitting the highway with our ultimate trip checklist.",
    date: "July 12, 2023",
    category: "Tips",
    image: "/images/premium/blog-post-3.jpg",
    slug: "how-to-prepare-your-car-for-a-long-road-trip",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-[#1e1e1e] py-20 sm:py-28 text-white">
      <Container className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            OUR BLOG
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            What&apos;s New?
          </h2>
          <p className="max-w-xl text-base text-white/60">
            Tips, insights, and updates from our team of auto repair experts.
          </p>
        </div>

        <div className="grid w-full gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#F9F9F8] text-[#1E1E1E] shadow-xl transition-transform hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white shadow-md">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="text-xs font-medium text-gray-500 block mb-2">
                    📅 {post.date}
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-[#1A1A1A] transition-colors group-hover:text-brand-accent">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accent-dark"
                  >
                    <span>Read Article</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/15"
          >
            <span>View All Articles</span>
            <span>↗</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
