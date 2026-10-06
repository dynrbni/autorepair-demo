"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // Entrance and exit animation on scrolling
      mirror: true, // Animates out while scrolling past them and animates back in on return
      offset: 80,
      delay: 0,
    });
  }, []);

  useEffect(() => {
    // Refresh AOS positions on route navigation
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
