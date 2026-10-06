import { Heart, MessageCircle, Phone } from "lucide-react";
import { Aurora } from "@/components/Aurora";
import { wedding } from "./data";
import { Reveal, Ornament } from "./Reveal";
import { GaneshaIcon } from "./Ganesha";

export function Footer() {
  return (
    <footer className="bg-emerald-ink relative overflow-hidden px-5 pt-20 pb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://media.invitestory.in/kerala-sands/images/mandala-texture.jpg')",
          backgroundSize: "120%",
          backgroundPosition: "top center",
        }}
      />
      <Aurora intensity={0.5} />
      <div className="from-emerald-ink/70 via-emerald-ink/85 to-emerald-ink absolute inset-0 bg-gradient-to-b" />

      <img
        src="https://media.invitestory.in/kerala-sands/images/floral-corner.png"
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -top-4 -left-8 w-36 opacity-30"
      />
      <img
        src="https://media.invitestory.in/kerala-sands/images/floral-corner.png"
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -top-4 -right-8 w-36 -scale-x-100 opacity-30"
      />

      <div className="relative mx-auto max-w-md text-center">
        {/* Invocation & Warm Invitation */}
        <Reveal>
          <GaneshaIcon className="text-gold mx-auto mb-2 h-7 w-7 opacity-85" />
          <Ornament label="With Blessings" />
          <p className="font-script text-gold-foil mt-5 text-4xl leading-snug">
            Come bless our beginning
          </p>
          <p className="text-ivory/75 mx-auto mt-4 max-w-sm text-sm leading-relaxed font-light">
            Your affectionate presence and heartfelt blessings are the greatest gifts of all.
          </p>
        </Reveal>

        {/* Gift Policy & Sharing Happiness */}
        <Reveal delay={0.08}>
          <div className="border-gold/25 bg-emerald-deep/40 shadow-gold/10 mt-8 rounded-2xl border p-5 backdrop-blur-md">
            <span className="inline-block rounded-full border border-gold/40 px-4 py-1 text-[0.68rem] tracking-[0.25em] uppercase text-gold font-medium">
              {wedding.giftPolicy}
            </span>

            <div className="mt-5">
              <p className="text-gold-soft/80 text-[0.6rem] tracking-[0.35em] uppercase">
                Sharing Happiness
              </p>
              <p className="text-ivory font-display mt-1 text-xl font-light">
                {wedding.sharingHappiness}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Host Family Card & Contact */}
        <Reveal delay={0.14}>
          <div className="border-gold/20 bg-emerald-deep/30 mt-6 rounded-2xl border p-5 text-center">
            <p className="text-gold-soft/80 text-[0.6rem] tracking-[0.35em] uppercase">
              Warmly Invited by
            </p>
            <p className="text-ivory font-display mt-1.5 text-lg font-light">
              {wedding.hosts.names}
            </p>
            <p className="text-ivory/65 mt-1 text-xs">
              {wedding.hosts.address}
            </p>

            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href={`tel:${wedding.hosts.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs text-gold-soft hover:bg-gold/20 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call: {wedding.hosts.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/91${wedding.hosts.phone}?text=Heartiest%20congratulations%20on%20Athul%20and%20Midhula's%20wedding!`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-600/20 px-4 py-2 text-xs text-emerald-200 hover:bg-emerald-600/30 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Names & Signature */}
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col items-center">
            <span className="rule-gold w-28" />
            <p className="text-ivory font-display mt-6 text-3xl font-light">
              {wedding.groom.fullName} <span className="font-script text-gold">&amp;</span>{" "}
              {wedding.bride.fullName}
            </p>
            <p className="text-ivory/55 mt-2 text-[0.6rem] tracking-[0.4em] uppercase">
              05 &amp; 06 December 2026 · Kerala
            </p>
          </div>
        </Reveal>

        <p className="text-ivory/35 mt-12 flex items-center justify-center gap-1.5 text-[0.6rem] tracking-[0.3em] uppercase">
          Made with <Heart className="text-gold h-3 w-3 fill-current" /> for our cherished family &amp; friends
        </p>

        <a
          href="https://www.instagram.com/invitestory.in/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-[10px] uppercase tracking-[0.35em] text-ivory/50 transition-opacity hover:opacity-100"
        >
          Follow @invitestory.in on Instagram
        </a>
      </div>
    </footer>
  );
}
