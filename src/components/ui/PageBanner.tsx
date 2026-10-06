import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
}

export default function PageBanner({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#181818] pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 text-white">
      {/* Background with moody dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818]/80 via-[#181818]/60 to-[#222222]" />
      </div>

      <Container
        data-aos="fade-down"
        data-aos-duration="700"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Title */}
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl">
          {title}
        </h1>

        {/* Subtitle if present */}
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white/60"
        >
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <div key={item.label} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-brand-accent font-semibold" : ""}>
                    {item.label}
                  </span>
                )}
                {!isLast && <span className="text-white/40">/</span>}
              </div>
            );
          })}
        </nav>
      </Container>
    </section>
  );
}
