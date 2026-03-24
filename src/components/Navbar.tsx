import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Doctor", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Facilities", href: "#facilities" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">
                Mitra Eye Hospital
              </h1>
              <p className="text-xs text-primary font-medium tracking-wide">
                SPECIALIZED EYE CARE
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918247533346"
              className="flex items-center gap-2 text-primary font-medium text-sm hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>

            {/* ✅ Staff Login */}
            <Link
              to="/admin"
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              Staff Login
            </Link>

            {/* Book Appointment */}
            <Link
              to="/appointment"
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-700 py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="flex flex-col gap-3 mt-2">

            {/* ✅ Staff Login */}
            <Link
              to="/admin"
              className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-4 py-3 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Staff Login
            </Link>

            <a
              href="tel:+918247533346"
              className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-3 rounded-lg font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>Call Hospital</span>
            </a>

            <Link
              to="/appointment"
              className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}