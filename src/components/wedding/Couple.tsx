import { MapPin, Phone } from "lucide-react";
import { wedding } from "./data";
import { Parallax } from "./Parallax";
import { Reveal, Ornament } from "./Reveal";

export function Couple() {
  return (
    <section className="relative overflow-hidden px-5 py-20">
      <img
        src="https://media.invitestory.in/kerala-sands/images/floral-corner.png"
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -top-6 -left-10 w-44 opacity-40"
      />
      <img
        src="https://media.invitestory.in/kerala-sands/images/floral-corner.png"
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -right-10 -bottom-6 w-44 rotate-180 opacity-40"
      />

      <div className="relative mx-auto max-w-md">
        <Reveal className="text-center">
          <Ornament label="The Union" />
          <h2 className="text-primary mt-5 text-4xl font-light">Two Hearts, One Journey</h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xs text-sm leading-relaxed">
            With the blessings of our elders and the grace of the Almighty, we step forward together.
          </p>
        </Reveal>

        {/* Full Couple Portrait Frame */}
        <Reveal delay={0.05} className="mt-8 mb-6">
          <div className="relative mx-auto max-w-xs overflow-hidden rounded-[2.5rem] border-2 border-gold/40 bg-card p-2.5 shadow-luxe">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
              <img
                src="/images/couple.jpg"
                alt="Athul Krishna & Midhula Balan"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-4 text-center px-4">
                <p className="font-script text-gold-foil text-3xl font-normal drop-shadow-md">
                  Athul &amp; Midhula
                </p>
                <p className="text-ivory/80 text-[0.62rem] tracking-[0.3em] uppercase mt-0.5 font-light">
                  Together Forever
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 space-y-8">
          {/* Groom Card */}
          <Parallax speed={24}>
            <Reveal className="relative">
              <div className="bg-card/75 border-gold/30 shadow-luxe relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-sm">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "url('https://media.invitestory.in/kerala-sands/images/mandala-texture.jpg')",
                    backgroundSize: "cover",
                  }}
                />
                <div className="relative flex flex-col items-center text-center">
                  <div className="from-gold/25 relative h-36 w-36 overflow-hidden rounded-full bg-gradient-to-b to-transparent p-1 shadow-inner">
                    <img
                      src={wedding.groom.image}
                      alt={wedding.groom.fullName}
                      loading="lazy"
                      width={500}
                      height={500}
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>

                  <span className="text-gold mt-5 text-[0.6rem] tracking-[0.45em] uppercase font-medium">
                    The Groom
                  </span>
                  <h3 className="text-primary mt-2 text-3xl font-light tracking-tight">
                    {wedding.groom.fullName}
                  </h3>

                  <div className="mt-3 inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-[0.7rem] text-primary/85">
                    Son of {wedding.groom.parents}
                  </div>

                  <span className="rule-gold my-4 w-24" />

                  {/* Lineage & Grandparents from card */}
                  <div className="w-full rounded-xl bg-secondary/50 p-3.5 text-center text-xs space-y-1.5 text-foreground/80">
                    <p className="text-[0.62rem] uppercase tracking-wider text-muted-foreground font-medium">
                      Grandson of
                    </p>
                    <p className="leading-snug">
                      Late. Shri. Unnimadhavan Kidavu &amp; Smt. Sathyavathi Amma
                    </p>
                    <p className="leading-snug">
                      Late Shri. Padmanabha Kurup &amp; Smt. Janaki Amma
                    </p>
                  </div>

                  {/* Residence & Contact */}
                  <div className="mt-4 flex flex-col items-center gap-1.5 text-xs text-muted-foreground">
                    <p className="flex items-center gap-1.5 text-center">
                      <MapPin className="text-gold h-3.5 w-3.5 shrink-0" />
                      <span>{wedding.groom.address}</span>
                    </p>
                    <a
                      href={`tel:${wedding.groom.phone}`}
                      className="text-primary hover:text-gold mt-1 inline-flex items-center gap-1.5 font-medium transition-colors"
                    >
                      <Phone className="h-3 w-3" />
                      <span>Ph: {wedding.groom.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </Parallax>

          {/* Knot Ampersand */}
          <div className="flex justify-center">
            <span className="font-script text-gold animate-float-soft text-5xl">&amp;</span>
          </div>

          {/* Bride Card */}
          <Parallax speed={-24}>
            <Reveal className="relative">
              <div className="bg-card/75 border-gold/30 shadow-luxe relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-sm">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "url('https://media.invitestory.in/kerala-sands/images/mandala-texture.jpg')",
                    backgroundSize: "cover",
                  }}
                />
                <div className="relative flex flex-col items-center text-center">
                  <div className="from-gold/25 relative h-36 w-36 overflow-hidden rounded-full bg-gradient-to-b to-transparent p-1 shadow-inner">
                    <img
                      src={wedding.bride.image}
                      alt={wedding.bride.fullName}
                      loading="lazy"
                      width={500}
                      height={500}
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>

                  <span className="text-gold mt-5 text-[0.6rem] tracking-[0.45em] uppercase font-medium">
                    The Bride
                  </span>
                  <h3 className="text-primary mt-2 text-3xl font-light tracking-tight">
                    {wedding.bride.fullName}
                  </h3>

                  <div className="mt-3 inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-[0.7rem] text-primary/85">
                    Daughter of {wedding.bride.parents}
                  </div>

                  <span className="rule-gold my-4 w-24" />

                  <p className="text-foreground/75 text-sm leading-relaxed px-2">
                    Stepping into a lifetime of love, warmth, and shared happiness alongside Athul.
                  </p>
                </div>
              </div>
            </Reveal>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
