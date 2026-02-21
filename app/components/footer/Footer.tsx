"use client";

import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {

  // Platform section
  const platformLinks = [
    { name: "All Courses", href: "/courses" },
    { name: "Pricing", href: "/pricing" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Enterprise Training", href: "/enterprise" },
  ];

  // Courses section
  const coursesLinks = [
    { name: "VFX Fundamentals", href: "/courses/fundamentals" },
    { name: "Advanced Compositing", href: "/courses/compositing" },
    { name: "CGI & Simulation", href: "/courses/cgi-simulation" },
    { name: "Cinematic Color Grading", href: "/courses/color-grading" },
  ];

  // Company section
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  // Bottom strip links
  const bottomLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];


  return (
    <footer className="bg-[#0b0e14] text-white border-t border-white/10">

      {/* Bottom Strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} VFX Course. All rights reserved.
          </p>

          <div className="flex gap-8">
            {bottomLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition">
                {link.name}
              </Link>
            ))}

          </div>
          {/* Social */}
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer