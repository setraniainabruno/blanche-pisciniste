import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="container-px py-4 sm:py-8">
      <div className="border-t border-black/10 pt-16 sm:pt-20" />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold uppercase leading-snug text-ink sm:text-3xl lg:text-4xl">
            Torem ipsum dolor sit amet, consectetur adipiscing libero et velit
            interdum.
          </h2>
        </Reveal>

        <Reveal delay={1} className="flex justify-start lg:justify-end">
          <div className="w-full max-w-sm rounded-[2rem] bg-brand-blue p-7 text-white shadow-xl shadow-brand-blue/20">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 shrink-0 rounded-full bg-white/90" />
              <p className="font-display font-semibold">Lorem ipsum Dolor Sit Amet</p>
            </div>
            <div className="my-5 h-px w-full bg-white/25" />
            <p className="text-[15px] leading-relaxed text-white/90">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
              condimentum lobortis.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
