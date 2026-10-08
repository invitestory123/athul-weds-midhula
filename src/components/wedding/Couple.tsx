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

                  {/* Contact */}
                  <a
                    href={`tel:${wedding.groom.phone}`}
                    className="text-primary hover:text-gold mt-3 inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                  >
                    <Phone className="text-gold h-3.5 w-3.5" />
                    <span>Ph: {wedding.groom.phoneDisplay}</span>
                  </a>

                  {/* Residence */}
                  <div className="mt-3 flex flex-col items-center gap-1.5 text-xs text-muted-foreground">
                    <p className="flex items-center gap-1.5 text-center">
                      <MapPin className="text-gold h-3.5 w-3.5 shrink-0" />
                      <span>{wedding.groom.address}</span>
                    </p>
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

                  {/* Residence */}
                  <div className="mt-3 flex flex-col items-center gap-1.5 text-xs text-muted-foreground">
                    <p className="flex items-center gap-1.5 text-center">
                      <MapPin className="text-gold h-3.5 w-3.5 shrink-0" />
                      <span>{wedding.bride.address}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
