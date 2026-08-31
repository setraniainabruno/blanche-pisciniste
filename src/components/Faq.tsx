import { useState } from "react";
import Reveal from "./Reveal";
import { IconChevronDown } from "./icons";

const QUESTIONS = [
  {
    q: "Combien de temps dure la construction d'une piscine ?",
    a: "Selon la taille et la complexité du projet, la construction dure généralement entre 6 et 12 semaines, de la conception à la mise en eau.",
  },
  {
    q: "Proposez-vous des piscines sur mesure ?",
    a: "Oui, chaque piscine est conçue selon votre terrain, vos envies et votre budget, avec des finitions et équipements personnalisés.",
  },
  {
    q: "Quel type de piscine est le plus adapté à mon terrain ?",
    a: "Nos experts étudient la topographie, le sol et l'exposition de votre terrain pour vous recommander la structure la plus adaptée.",
  },
  {
    q: "Proposez-vous des éclairages LED pour piscine ?",
    a: "Oui, nous installons des systèmes d'éclairage LED personnalisables pour sublimer votre piscine à la tombée de la nuit.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="container-px py-4 sm:py-8">
      <div className="grid overflow-hidden rounded-[2.5rem] lg:grid-cols-2">
        <Reveal className="bg-brand-orange p-8 sm:p-12 lg:p-14">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Vous avez des questions ? Nous sommes là pour vous aider.
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/90">
            Consultez les questions les plus fréquemment posées par nos
            clients. Vous avez encore des questions ? Contactez-nous
            directement.
          </p>

          <div className="mt-8 flex -space-x-3">
            {["#93c5fd", "#86efac", "#fca5a5"].map((color, i) => (
              <span
                key={i}
                className="h-11 w-11 rounded-full ring-4 ring-brand-orange"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/85">
            Notre service client est disponible du lundi au vendredi de 8h à
            20h30.
            <br />
            <br />
            Délai de réponse moyen : 24 h
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-orange shadow-md transition hover:bg-white/90"
          >
            Nous contacter
          </a>
        </Reveal>

        <Reveal delay={1} className="bg-dark p-8 sm:p-12 lg:p-14">
          <div className="flex flex-col">
            {QUESTIONS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className="border-b border-white/12 py-5 first:pt-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[15px] font-medium leading-snug text-white sm:text-base">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <IconChevronDown width={16} height={16} />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 pr-10 text-sm leading-relaxed text-white/65">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
