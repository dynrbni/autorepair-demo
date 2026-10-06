"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  const isSolid = isScrolled || isMenuOpen || isSearchOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isSolid
          ? "border-b border-white/10 bg-[#161616]/90 backdrop-blur-md shadow-xl shadow-black/25"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
        }`}
      >
        <Logo size="md" />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-brand-accent font-bold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {/* Search button matching Figma header search icon */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Search"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <Link
            href="/appointment"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-brand-accent-dark"
          >
            Appointment
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/appointment"
            className="rounded-full bg-brand-accent px-3 py-1.5 text-xs font-semibold text-white"
          >
            Book
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Search dropdown input */}
      {isSearchOpen && (
        <div className="border-t border-white/10 bg-[#161616]/95 backdrop-blur-md py-4 shadow-2xl">
          <Container>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSearchOpen(false);
              }}
              className="flex items-center gap-3"
            >
              <input
                type="search"
                placeholder="Search services, articles, pricing..."
                className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-brand-accent focus:outline-none"
                autoFocus
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-accent-dark transition-colors"
              >
                Search
              </button>
            </form>
          </Container>
        </div>
      )}

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#161616]/98 backdrop-blur-xl lg:hidden shadow-2xl">
          <Container className="flex flex-col gap-3 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-base font-semibold text-white/90 hover:bg-white/10 hover:text-brand-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointment"
              className="mt-2 block w-full rounded-full bg-brand-accent py-3 text-center text-sm font-bold text-white hover:bg-brand-accent-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Book an Appointment
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
