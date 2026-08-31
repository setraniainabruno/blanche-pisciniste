import { useRef, useState } from "react";
import Reveal from "./Reveal";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import { IconChevronLeft, IconChevronRight } from "./icons";

const PROJECTS = [
  { image: gallery1, title: "Villa Cocody", alt: "Piscine avec terrasse en bois et éclairage sous l'eau" },
  { image: gallery2, title: "Résidence Riviera", alt: "Piscine tropicale entourée de palmiers" },
  { image: gallery3, title: "Villa Blanche", alt: "Piscine méditerranéenne devant une villa aux lignes épurées" },
  { image: gallery4, title: "Domaine du Soir", alt: "Piscine illuminée devant une villa moderne au crépuscule" },
  { image: gallery5, title: "Terrasse Bassam", alt: "Piscine sur terrasse en bois avec espace détente" },
  { image: gallery6, title: "Jardin Suspendu", alt: "Piscine entourée d'un jardin luxuriant" },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (next: number) => {
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, next));
    setIndex(clamped);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 4, behavior: "smooth" });
    }
  };

  return (
    <section id="realisations" className="py-20 sm:py-28">
      <div className="container-px flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <Reveal className="max-w-md">
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Découvrez nos différents projets réalisés afin de satisfaire nos
            clients.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </Reveal>

        <Reveal delay={1} className="flex items-center gap-3 sm:pb-1">
          <button
            type="button"
            aria-label="Projet précédent"
            onClick={() => scrollToIndex(index - 1)}
            disabled={index === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-dark text-ink transition hover:bg-black/10 disabled:opacity-40"
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Projet suivant"
            onClick={() => scrollToIndex(index + 1)}
            disabled={index === PROJECTS.length - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-dark text-white transition hover:bg-black disabled:opacity-40"
          >
            <IconChevronRight />
          </button>
        </Reveal>
      </div>

      <Reveal delay={2}>
        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-8 lg:px-12 xl:px-20 [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((project) => (
            <figure
              key={project.title}
              className="relative w-[78%] shrink-0 snap-start overflow-hidden rounded-[1.75rem] sm:w-[46%] lg:w-[32%]"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="h-72 w-full object-cover transition duration-700 hover:scale-105 sm:h-80"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-black/40 px-4 py-2.5 text-sm font-medium text-white backdrop-blur">
                {project.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
