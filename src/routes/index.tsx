import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Hero } from "@/components/wedding/Hero";
import { Couple } from "@/components/wedding/Couple";
import { Countdown } from "@/components/wedding/Countdown";
import { EventDetails } from "@/components/wedding/EventDetails";
import { Footer } from "@/components/wedding/Footer";
import { Opener } from "@/components/wedding/Opener";
import { ScrollProgress } from "@/components/wedding/ScrollProgress";

const title = "Athul & Midhula · Wedding & Reception Invitation";
const description =
  "Late. Shri. Radhakrishnan T & Smt. Mini K M cordially invite you to the wedding and reception of Athul Krishna with Midhula Balan on 5 & 6 December 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Athul Krishna & Midhula Balan Wedding Invitation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <>
      <AnimatePresence>
        {!opened && <Opener key="opener" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && <ScrollProgress />}

      <motion.main
        initial={{ opacity: 0, scale: 1.03 }}
        animate={opened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="bg-background mx-auto w-full max-w-[520px] overflow-hidden"
      >
        <Hero />
        <Couple />
        <Countdown />
        <EventDetails />
        <Footer />
      </motion.main>
    </>
  );
}
