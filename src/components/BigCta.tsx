import Reveal from "./Reveal";
import bigCtaImg from "../assets/images/footer-tall.jpg";
import { IconWave, IconLayout, IconTag } from "./icons";

const CARDS = [
  {
    icon: IconWave,
    title: "Conception d'espaces aquatiques élégants et lumineux",
    action: "FAIRE UNE ESTIMATION",
  },
  {
    icon: IconLayout,
    title: "Installation d'équipements premium pour piscines modernes",
    action: null,
  },
  {
    icon: IconTag,
    title: "Aménagement de piscines élégants et haut de gamme",
    action: null,
  },
];

export default function BigCta() {
  return (
    <section className="container-px py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-[2.5rem]">
        <div className="relative h-[420px] sm:h-[460px] lg:h-[480px]">
          <img
            src={bigCtaImg}
            alt="Villa illuminée le soir avec piscine et espace détente en bois"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

          <div className="relative z-10 flex h-full flex-col justify-start p-8 sm:p-12 lg:p-14">
            <h2 className="max-w-md font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Eau azurée contrastant avec le ciel ivoirien
            </h2>
          </div>
        </div>

        <div className="relative z-20 -mt-24 grid gap-5 px-6 sm:-mt-20 sm:grid-cols-3 sm:px-10 lg:px-14">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl shadow-black/10 sm:min-h-[220px]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orange-light text-brand-orange">
                <card.icon width={19} height={19} />
              </span>
              <h3 className="mt-6 text-[15px] font-semibold leading-snug text-ink">
                {card.title}
              </h3>
              {card.action && (
                <a
                  href="#contact"
                  className="mt-6 inline-block w-fit rounded-full bg-brand-blue px-6 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-brand-blue-dark"
                >
                  {card.action}
                </a>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
