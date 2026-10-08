import { MessageCircle, Phone } from "lucide-react";
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
            Your affectionate presence and heartfelt blessings are our greatest joy.
          </p>
        </Reveal>

        {/* Host Family Card & Contact */}
        <Reveal delay={0.12}>
          <div className="border-gold/25 bg-emerald-deep/40 shadow-luxe mt-8 rounded-[1.75rem] border p-6 text-center backdrop-blur-md">
            <p className="text-gold-soft/80 text-[0.62rem] tracking-[0.35em] uppercase font-medium">
              Warmly Invited by
            </p>
            <p className="text-ivory font-display mt-2 text-2xl sm:text-3xl font-light">
              {wedding.groom.name} <span className="font-script text-gold">&amp;</span>{" "}
              {wedding.bride.name}
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href={`tel:${wedding.hosts.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2.5 text-xs text-gold-soft hover:bg-gold/20 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call: {wedding.hosts.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/91${wedding.hosts.phone}?text=Heartiest%20congratulations%20on%20Athul%20and%20Midhula's%20wedding%20reception!`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-600/20 px-4 py-2.5 text-xs text-emerald-200 hover:bg-emerald-600/30 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Date & Location Footer */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center">
            <span className="rule-gold w-28" />
            <p className="text-ivory/60 mt-4 text-[0.62rem] tracking-[0.35em] uppercase">
              06 December 2026 · Kozhikode, Kerala
            </p>
          </div>
        </Reveal>

        <div className="mt-12" />

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
