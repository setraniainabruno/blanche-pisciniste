import Reveal from "./Reveal";
import quoteImg from "../assets/images/quote-block.jpg";
import orangeSide from "../assets/images/orange-side.jpg";

const PARTNERS = ["Piscinelle", "Compass Pools", "Aqualux", "Bluewater"];

export default function CtaBanner() {
  return (
    <section className="container-px pb-20 sm:pb-28">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-brand-blue px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="max-w-md font-display text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
              Torquent per conubia nostra, per inceptos himenaeos. Curabitur
              tempus urna
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/85">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-brand-orange-dark"
            >
              Demander une estimation
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <img
              src={quoteImg}
              alt="Piscine bordée de bois avec éclairage doux au coucher du soleil"
              className="h-64 w-full rounded-3xl object-cover shadow-2xl sm:h-72"
            />
            <img
              src={orangeSide}
              alt="Détail d'une piscine turquoise carrelée"
              className="absolute -bottom-8 -right-4 h-32 w-40 rounded-2xl object-cover shadow-xl ring-4 ring-brand-blue sm:h-40 sm:w-48"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4 sm:gap-5">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="flex h-20 items-center justify-center rounded-2xl bg-white/20 px-4 text-center text-sm font-semibold italic text-white/90"
            >
              {name}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
