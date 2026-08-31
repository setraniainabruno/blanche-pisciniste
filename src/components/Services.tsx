import Reveal from "./Reveal";
import construction from "../assets/images/service-construction.jpg";
import maintenance from "../assets/images/service-maintenance.jpg";
import renovation from "../assets/images/service-renovation.jpg";
import { IconArrowUpRight } from "./icons";

const SERVICES = [
  {
    image: construction,
    alt: "Piscine moderne au crépuscule devant une villa à toit incliné",
    title: "Nous construisons des piscines sur mesure modernes et adaptées parfaitement",
  },
  {
    image: maintenance,
    alt: "Kit d'entretien et produits de traitement au bord de la piscine",
    title: "Nous assurons l'entretien et maintenance complète de votre piscine régulièrement",
  },
  {
    image: renovation,
    alt: "Piscine tropicale entourée de palmiers et d'une villa en bois",
    title: "Nous rénovons et modernisons les piscines existantes selon vos besoins",
  },
];

const BODY =
  "Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.";

export default function Services() {
  return (
    <section id="services" className="container-px py-20 sm:py-28">
      <Reveal as="h2" className="mx-auto max-w-3xl text-center font-display text-2xl font-semibold uppercase leading-snug text-ink sm:text-3xl lg:text-4xl">
        Nous concevons, construisons et entretenons des piscines modernes,
        durables et sur mesure
      </Reveal>

      <div className="mt-16 flex flex-col gap-16 sm:gap-20 lg:mt-20 lg:gap-24">
        {SERVICES.map((service, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <div
              key={service.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                className={imageFirst ? "lg:order-1" : "lg:order-2"}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-72 w-full rounded-[1.75rem] object-cover sm:h-96 lg:h-[420px]"
                />
              </Reveal>

              <Reveal
                delay={1}
                className={imageFirst ? "lg:order-2" : "lg:order-1"}
              >
                <h3 className="max-w-md font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  {BODY}
                </p>
                <a
                  href="#contact"
                  className="group mt-7 flex items-center gap-3 border-b border-transparent pb-1 text-[15px] font-semibold text-ink transition hover:border-ink"
                >
                  Demander une estimation
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <IconArrowUpRight width={15} height={15} />
                  </span>
                </a>
                <div className="mt-7 h-px w-full max-w-md bg-black/10" />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
