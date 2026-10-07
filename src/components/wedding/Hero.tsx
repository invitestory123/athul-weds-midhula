import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Aurora } from "@/components/Aurora";
import { Petals } from "./Petals";
import { wedding } from "./data";
import { GaneshaIcon } from "./Ganesha";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 24, mass: 0.4 });

  const glowY = useTransform(smooth, [0, 1], ["0%", "22%"]);
  const garlandY = useTransform(smooth, [0, 1], ["0%", "38%"]);
  const textY = useTransform(smooth, [0, 1], ["0%", "80%"]);
  const textOpacity = useTransform(smooth, [0, 0.55], [1, 0]);
  const coupleY = useTransform(smooth, [0, 1], ["0%", "-18%"]);
  const coupleScale = useTransform(smooth, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="bg-emerald-deep relative flex h-[100svh] min-h-[680px] w-full flex-col items-center overflow-hidden"
    >
      <Aurora intensity={1} />
      <div className="from-emerald-ink/50 via-emerald-deep/20 to-emerald-ink/90 absolute inset-0 bg-gradient-to-b" />
      <motion.div
        aria-hidden
        style={{
          y: glowY,
          background:
            "radial-gradient(ellipse at 50% 80%, oklch(0.93 0.05 92 / 0.55), transparent 62%)",
        }}
        className="absolute bottom-0 left-1/2 h-[62%] w-[130%] -translate-x-1/2 rounded-t-full blur-2xl"
      />

      <Petals count={12} />

      <motion.img
        src="https://media.invitestory.in/kerala-sands/images/garland.png"
        alt=""
        aria-hidden
        style={{ y: garlandY }}
        className="pointer-events-none absolute -top-2 left-1/2 w-[135%] max-w-none -translate-x-1/2 opacity-90"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center px-6 pt-24 text-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col items-center"
        >
          {/* Sacred Invocation */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="flex flex-col items-center mb-3"
          >
            <GaneshaIcon className="text-gold h-9 w-9 drop-shadow-[0_2px_8px_rgba(234,179,8,0.4)]" />
            <p className="text-gold-soft/90 font-display mt-1 text-xs tracking-[0.25em] uppercase">
              {wedding.invocation}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-gold-soft/90 text-[0.62rem] tracking-[0.35em] uppercase font-medium"
          >
            Wedding Reception Invitation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.45, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-col items-center leading-[0.9]"
          >
            <span className="text-gold-foil font-serif-luxe text-[3.8rem] sm:text-[4.4rem] font-medium tracking-normal drop-shadow-sm">
              Athul
            </span>
            <span className="font-script text-gold/90 my-1 text-3xl sm:text-4xl font-normal drop-shadow">
              with
            </span>
            <span className="text-gold-foil font-serif-luxe text-[3.8rem] sm:text-[4.4rem] font-medium tracking-normal drop-shadow-sm">
              Midhula
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="rule-gold mt-6 w-44"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="text-ivory/90 mt-4 text-xs tracking-[0.32em] uppercase font-medium"
          >
            06 · December · 2026
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.9 }}
            className="text-ivory/70 mt-1 text-[0.68rem] tracking-[0.25em] uppercase"
          >
            Kozhikode · Kerala
          </motion.p>
        </motion.div>

        <motion.img
          src="/images/couple-transparent.png"
          alt="Athul with Midhula"
          width={699}
          height={1024}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: coupleY, scale: coupleScale }}
          className="mt-auto w-[82%] max-w-[320px] object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.5)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity: textOpacity }}
        className="text-gold/70 absolute bottom-4 z-20 flex flex-col items-center"
      >
        <span className="text-[0.55rem] tracking-[0.4em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
