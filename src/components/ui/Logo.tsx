import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center tracking-tight font-extrabold text-white transition-opacity hover:opacity-90 ${textSizes[size]} ${className}`}
      aria-label="AutoWorks Home"
    >
      <span>Aut</span>
      {/* Red Wheel Icon */}
      <span className={`inline-flex items-center justify-center mx-[1px] relative text-brand-accent ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Speed motion lines on left */}
          <path
            d="M2 13H8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M4 17H7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M2 21H9"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Outer Tire */}
          <circle cx="19" cy="16" r="11" fill="currentColor" />

          {/* Wheel Rim / Inner Wheel */}
          <circle cx="19" cy="16" r="7" fill="#222222" />

          {/* Center Hub */}
          <circle cx="19" cy="16" r="2.5" fill="currentColor" />

          {/* Rim spokes / bolts */}
          <circle cx="19" cy="11.5" r="1" fill="#FFFFFF" />
          <circle cx="22.5" cy="14" r="1" fill="#FFFFFF" />
          <circle cx="21" cy="18.5" r="1" fill="#FFFFFF" />
          <circle cx="17" cy="18.5" r="1" fill="#FFFFFF" />
          <circle cx="15.5" cy="14" r="1" fill="#FFFFFF" />
        </svg>
      </span>
      <span>Works</span>
    </Link>
  );
}
