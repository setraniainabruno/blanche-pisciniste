import heroImg from "../assets/images/image1.png";
import { IconDroplet, IconSparkle } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative h-[640px] sm:h-[720px] lg:h-[800px] xl:h-[860px]">
        <img
          src={heroImg}
          alt="Villa moderne avec piscine à débordement illuminée au crépuscule"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="container-px relative z-10 flex h-full flex-col justify-end pb-28 pt-32 sm:pb-32 lg:pb-36">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-2xl font-display text-[2.75rem] leading-[1.05] font-normal text-white sm:text-6xl lg:text-7xl">
              Votre piscine
              <br />
              sur mesure
            </h1>

            <div className="flex max-w-sm flex-col items-start gap-5 lg:pb-2">
              <p className="text-[15px] leading-relaxed text-white/85">
                Entre Piscinelle et Compass Pools haut de gamme africain,
                tropical luxe, unique sur le marché ivoirien. Pas une piscine
                française générique. Une ambiance villa luxe Abidjan.
              </p>
              <a
                href="#contact"
                className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-blue-dark"
              >
                Estimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="container-px relative z-20 -mt-20 sm:-mt-24">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-5">
          <div className="animate-float flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl shadow-black/10 sm:w-56">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
              <IconDroplet />
            </span>
            <div className="mt-6">
              <p className="font-display text-4xl font-semibold text-ink">+435</p>
              <p className="mt-1 text-sm text-ink-soft">Piscines livrées</p>
            </div>
          </div>

          <div
            className="animate-float flex flex-col justify-between rounded-3xl bg-dark p-6 shadow-xl shadow-black/20 sm:w-56"
            style={{ animationDelay: "1.4s" }}
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium leading-tight text-white/70">
                Sit amet Dolor Sit
                <br />
                Elit Vulputate
              </p>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                <IconSparkle width={16} height={16} />
              </span>
            </div>
            <p className="mt-6 font-display text-4xl font-semibold text-white">+752</p>
          </div>

          <div
            className="animate-float col-span-2 flex items-center justify-between rounded-3xl bg-brand-orange px-7 py-6 shadow-xl shadow-brand-orange/25 sm:col-span-1 sm:w-56 sm:flex-col sm:items-start sm:justify-between"
            style={{ animationDelay: "2.8s" }}
          >
            <p className="font-display text-4xl font-semibold text-white">+1000</p>
            <p className="text-sm text-white/90 sm:mt-1">Clients satisfaits</p>
          </div>
        </div>
      </div>
    </section>
  );
}
