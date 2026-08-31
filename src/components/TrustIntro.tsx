import Reveal from "./Reveal";
import intro1 from "../assets/images/image2.jpg";
import intro2 from "../assets/images/image3.jpg";
import { IconWave } from "./icons";

export default function TrustIntro() {
  return (
    <section id="a-propos" className="container-px py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <Reveal className="grid grid-cols-2 gap-4 sm:gap-5">
          <img
            src={intro1}
            alt="Terrasse en bois avec transats et parasols bordant la piscine"
            className="h-56 w-full rounded-[1.75rem] object-cover sm:h-72 lg:h-80"
          />
          <img
            src={intro2}
            alt="Piscine nocturne entourée d'arbres et d'un espace détente en bois"
            className="mt-8 h-56 w-full rounded-[1.75rem] object-cover sm:h-72 lg:mt-14 lg:h-80"
          />
        </Reveal>

        <Reveal delay={1} className="lg:pl-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
            <IconWave width={20} height={20} />
          </span>
          <p className="mt-5 text-sm font-medium text-ink-soft">
            Nunc vulputate libero
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl">
            Des piscines sur mesure pour chaque projet
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
            condimentum lobortis.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/25 transition hover:bg-brand-blue-dark"
          >
            Estimer mon projet
          </a>
        </Reveal>
      </div>
    </section>
  );
}
