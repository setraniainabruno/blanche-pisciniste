import logo from "../assets/images/logo.png";
import { IconPin, IconPhone } from "./icons";

const USEFUL_LINKS = [
  { label: "Estimer un projet", href: "#contact" },
  { label: "Nos réalisations", href: "#realisations" },
  { label: "Nos services", href: "#services" },
  { label: "Nous contacter", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Mentions légales", href: "#" },
  { label: "Conditions générales d'utilisation", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-blue pt-16 sm:pt-20">
      <div className="container-px border-t border-white/25 pt-14 pb-14 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1.3fr] lg:gap-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Liens utiles
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white/85 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Pages légales
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-white/85 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src={logo} alt="Ivoire Pool" className="h-8 w-8 object-contain" />
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/85">
              Ivoire Pool conçoit, construit et entretient des piscines
              modernes et sur mesure en Côte d'Ivoire, alliant qualité,
              durabilité et design personnalisé pour chaque client.
            </p>

            <div className="mt-6 h-px w-full max-w-sm bg-white/25" />

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                  <IconPin width={16} height={16} />
                </span>
                <p className="text-sm leading-relaxed text-white/85">
                  L2 rue des jardins, Cocody 2e étage magasin Ixina, Abidjan,
                  Côte d'Ivoire
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                  <IconPhone width={16} height={16} />
                </span>
                <a
                  href="tel:+2250757027157"
                  className="text-sm text-white/85 transition hover:text-white"
                >
                  Téléphone : +225 0757027157
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-6">
        <p className="container-px text-center text-xs text-white/70">
          © {new Date().getFullYear()} Ivoire Pool. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
