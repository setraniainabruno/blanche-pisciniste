import Reveal from "./Reveal";
import cta1 from "../assets/images/cta-1.jpg";
import cta2 from "../assets/images/cta-2.jpg";

export default function MiniGallery() {
  return (
    <section className="container-px py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <Reveal className="grid grid-cols-2 gap-4 sm:gap-5">
          <img
            src={cta1}
            alt="Terrasse en bois avec piscine illuminée en soirée"
            className="h-52 w-full rounded-[1.5rem] object-cover sm:h-64"
          />
          <img
            src={cta2}
            alt="Petite piscine élégante dans une cour privée"
            className="h-52 w-full rounded-[1.5rem] object-cover sm:h-64"
          />
        </Reveal>

        <Reveal delay={1}>
          <p className="text-sm font-semibold text-ink">Nunc vulputate libero</p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
