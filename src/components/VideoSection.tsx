import { useState } from "react";
import Reveal from "./Reveal";
import faqThumb from "../assets/images/faq-thumb.jpg";
import { IconPlay } from "./icons";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="container-px pb-20 sm:pb-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold leading-snug text-ink sm:text-4xl">
          Sit amet, consectetur adipiscing libero et velit interdum.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
          Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Curabitur tempus urna at turpis
          condimentum lobortis.
        </p>
      </Reveal>

      <Reveal delay={1} className="mx-auto mt-12 max-w-3xl">
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Lire la vidéo de présentation"
          className="group relative block w-full overflow-hidden rounded-[2rem]"
        >
          <img
            src={faqThumb}
            alt="Piscine carrelée bleu turquoise devant un bâtiment résidentiel"
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-96"
          />
          <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />
          {!playing && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-ink shadow-xl transition group-hover:scale-110">
                <IconPlay width={22} height={22} />
              </span>
            </span>
          )}
          {playing && (
            <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-sm font-medium text-white">
              Lecture non disponible dans cet aperçu
            </span>
          )}
        </button>
      </Reveal>
    </section>
  );
}
