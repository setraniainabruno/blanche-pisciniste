import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import {
  IconInstagram,
  IconFacebook,
  IconMenu,
  IconClose,
} from "./icons";

const NAV_LINKS = [
  { label: "A propos", href: "#a-propos" },
  { label: "Nos services", href: "#services" },
  { label: "Nos réalisations", href: "#realisations" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-px flex items-center justify-between gap-4 pt-6 sm:pt-8">
        {/* Social icons - desktop only */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20"
          >
            <IconInstagram width={17} height={17} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20"
          >
            <IconFacebook width={17} height={17} />
          </a>
        </div>

        {/* Center pill nav */}
        <nav
          className={`mx-auto hidden items-center gap-8 rounded-full px-3 py-2.5 transition lg:flex ${
            scrolled
              ? "bg-white shadow-lg shadow-black/10"
              : "bg-white/12 ring-1 ring-white/25 backdrop-blur-md"
          }`}
        >
          <a
            href={NAV_LINKS[0].href}
            className={`px-2 text-sm font-medium transition ${scrolled ? "text-ink hover:text-brand-blue" : "text-white/90 hover:text-white"}`}
          >
            {NAV_LINKS[0].label}
          </a>
          <a
            href={NAV_LINKS[1].href}
            className={`px-2 text-sm font-medium transition ${scrolled ? "text-ink hover:text-brand-blue" : "text-white/90 hover:text-white"}`}
          >
            {NAV_LINKS[1].label}
          </a>

          <a href="#top" className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <img src={logo} alt="Ivoire Pool" className="h-6 w-6 object-contain" />
            <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
              IVOIRE POOL
            </span>
          </a>

          <a
            href={NAV_LINKS[2].href}
            className={`px-2 text-sm font-medium transition ${scrolled ? "text-ink hover:text-brand-blue" : "text-white/90 hover:text-white"}`}
          >
            {NAV_LINKS[2].label}
          </a>
          <a
            href={NAV_LINKS[3].href}
            className={`px-2 text-sm font-medium transition ${scrolled ? "text-ink hover:text-brand-blue" : "text-white/90 hover:text-white"}`}
          >
            {NAV_LINKS[3].label}
          </a>
        </nav>

        {/* Mobile logo */}
        <a href="#top" className="flex items-center gap-2 lg:hidden">
          <img src={logo} alt="Ivoire Pool" className="h-8 w-8 object-contain" />
          <span
            className={`font-display text-sm font-semibold tracking-tight ${scrolled ? "text-ink" : "text-white"}`}
          >
            IVOIRE POOL
          </span>
        </a>

        {/* Contact button - desktop */}
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm ring-1 ring-black/5 transition hover:bg-brand-blue hover:text-white lg:inline-block"
        >
          CONTACT
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className={`flex h-11 w-11 items-center justify-center rounded-full ring-1 transition lg:hidden ${
            scrolled
              ? "bg-white text-ink ring-black/10"
              : "bg-white/10 text-white ring-white/30 backdrop-blur"
          }`}
        >
          <IconMenu />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-8 bg-white px-7 py-7 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Ivoire Pool" className="h-8 w-8 object-contain" />
              <span className="font-display text-sm font-semibold text-ink">IVOIRE POOL</span>
            </div>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink"
            >
              <IconClose width={18} height={18} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3.5 text-base font-medium text-ink transition hover:bg-surface hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-auto rounded-full bg-brand-blue px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm shadow-brand-blue/30"
          >
            CONTACT
          </a>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink"
            >
              <IconInstagram width={17} height={17} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink"
            >
              <IconFacebook width={17} height={17} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
