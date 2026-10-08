import { CalendarPlus, Clock, Heart, MapPin, Navigation, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { wedding } from "./data";
import { Reveal, Ornament } from "./Reveal";

function icsStamp(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function addToCalendar(event: {
  title: string;
  dateISO: string;
  endISO: string;
  venue: { name: string; address: string };
}) {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invite//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@wedding`,
    `DTSTAMP:${icsStamp(new Date().toISOString())}`,
    `DTSTART:${icsStamp(event.dateISO)}`,
    `DTEND:${icsStamp(event.endISO)}`,
    `SUMMARY:Athul Krishna & Midhula Balan — ${event.title}`,
    `LOCATION:${event.venue.name}, ${event.venue.address}`,
    `DESCRIPTION:We cordially invite you to join us for our ${event.title}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.title.toLowerCase().replace(/\s+/g, "-")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

export function EventDetails() {
  const [activeTab, setActiveTab] = useState<"reception" | "marriage">("reception");

  const marriage = wedding.events.marriage;
  const reception = wedding.events.reception;

  return (
    <section className="relative px-5 py-20">
      <div className="mx-auto max-w-md">
        <Reveal className="text-center">
          <Ornament label="Celebrations" />
          <h2 className="text-primary mt-5 text-4xl font-light">Events &amp; Venues</h2>
          <p className="text-muted-foreground mx-auto mt-2 text-xs tracking-wider uppercase">
            Two days of sacred traditions and joy
          </p>
        </Reveal>

        {/* Invitation Quote Card */}
        <Reveal delay={0.08} className="mt-7">
          <div className="bg-card/85 border-gold/30 shadow-luxe relative overflow-hidden rounded-[1.75rem] border p-6 text-center backdrop-blur-sm">
            <Heart className="mx-auto h-4 w-4 fill-gold text-gold" />
            <p className="text-foreground/85 font-serif-luxe italic mt-3 text-sm sm:text-base leading-relaxed px-1 font-normal">
              As the couple begins their journey of love and togetherness, we would be deeply honoured by your presence to bless them, share in our happiness, and make this evening truly unforgettable.
            </p>
          </div>
        </Reveal>

        {/* Tab Switcher */}
        <div className="mt-8 flex rounded-full bg-secondary/80 p-1.5 shadow-inner border border-gold/20">
          <button
            type="button"
            onClick={() => setActiveTab("reception")}
            className={`flex-1 rounded-full py-2.5 text-xs tracking-wider uppercase transition-all duration-300 ${
              activeTab === "reception"
                ? "bg-primary text-ivory shadow-md font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Reception (06 Dec)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("marriage")}
            className={`flex-1 rounded-full py-2.5 text-xs tracking-wider uppercase transition-all duration-300 ${
              activeTab === "marriage"
                ? "bg-primary text-ivory shadow-md font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Marriage (05 Dec)
          </button>
        </div>

        {/* Reception Card */}
        {activeTab === "reception" && (
          <Reveal key="reception" delay={0.1}>
            <div className="border-gold/30 bg-card shadow-luxe mt-6 overflow-hidden rounded-[2rem] border animate-in fade-in duration-300">
              <div className="from-primary to-emerald-ink bg-gradient-to-br px-6 py-7 text-center">
                <span className="inline-block rounded-full bg-gold/20 px-3 py-0.5 text-gold-soft text-[0.62rem] tracking-[0.35em] uppercase font-medium">
                  {reception.subtitle}
                </span>
                <h3 className="text-ivory font-display mt-3 text-3xl font-light">
                  {reception.title}
                </h3>
                <p className="text-gold-soft mt-1 text-xs tracking-widest uppercase">
                  {reception.day}, 6th December 2026
                </p>
              </div>

              <div className="divide-gold/15 divide-y">
                <div className="flex items-center gap-4 px-6 py-4">
                  <span className="bg-secondary text-primary grid h-10 w-10 shrink-0 place-items-center rounded-full">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-[0.6rem] tracking-[0.3em] uppercase">
                      Time
                    </p>
                    <p className="text-foreground font-medium text-sm">{reception.timeLabel}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-6 py-4">
                  <span className="bg-secondary text-primary grid h-10 w-10 shrink-0 place-items-center rounded-full">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-[0.6rem] tracking-[0.3em] uppercase">
                      Venue
                    </p>
                    <p className="text-foreground font-medium text-sm">{reception.venue.name}</p>
                    <p className="text-muted-foreground text-xs">{reception.venue.address}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 px-6 pt-3 pb-6">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addToCalendar(reception)}
                  className="from-primary to-emerald-ink text-ivory shadow-gold flex items-center justify-center gap-2 rounded-full bg-gradient-to-r py-3.5 text-[0.7rem] tracking-[0.2em] uppercase font-medium"
                >
                  <CalendarPlus className="h-3.5 w-3.5" />
                  Calendar
                </motion.button>
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href={reception.venue.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-gold/50 text-primary hover:bg-secondary flex items-center justify-center gap-2 rounded-full border py-3.5 text-[0.7rem] tracking-[0.2em] uppercase font-medium transition-colors"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Directions
                </motion.a>
              </div>
            </div>
          </Reveal>
        )}

        {/* Marriage Card */}
        {activeTab === "marriage" && (
          <Reveal key="marriage" delay={0.1}>
            <div className="border-gold/30 bg-card shadow-luxe mt-6 overflow-hidden rounded-[2rem] border animate-in fade-in duration-300">
              <div className="from-primary to-emerald-ink bg-gradient-to-br px-6 py-7 text-center">
                <span className="inline-block rounded-full bg-gold/20 px-3 py-0.5 text-gold-soft text-[0.62rem] tracking-[0.35em] uppercase font-medium">
                  {marriage.subtitle}
                </span>
                <h3 className="text-ivory font-display mt-3 text-3xl font-light">
                  {marriage.title}
                </h3>
                <p className="text-gold-soft mt-1 text-xs tracking-widest uppercase">
                  {marriage.day}, 5th December 2026
                </p>
                <p className="text-ivory/70 text-[0.7rem] tracking-wider mt-0.5">
                  ({marriage.malayalamDate})
                </p>
              </div>

              <div className="divide-gold/15 divide-y">
                <div className="flex items-center gap-4 px-6 py-4">
                  <span className="bg-secondary text-primary grid h-10 w-10 shrink-0 place-items-center rounded-full">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-[0.6rem] tracking-[0.3em] uppercase">
                      Auspicious Muhurtham
                    </p>
                    <p className="text-foreground font-medium text-sm">
                      {marriage.muhurthamLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-6 py-4">
                  <span className="bg-secondary text-primary grid h-10 w-10 shrink-0 place-items-center rounded-full">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-[0.6rem] tracking-[0.3em] uppercase">
                      Venue
                    </p>
                    <p className="text-foreground font-medium text-sm">{marriage.venue.name}</p>
                    <p className="text-muted-foreground text-xs">{marriage.venue.address}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 px-6 pt-3 pb-6">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addToCalendar(marriage)}
                  className="from-primary to-emerald-ink text-ivory shadow-gold flex items-center justify-center gap-2 rounded-full bg-gradient-to-r py-3.5 text-[0.7rem] tracking-[0.2em] uppercase font-medium"
                >
                  <CalendarPlus className="h-3.5 w-3.5" />
                  Calendar
                </motion.button>
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href={marriage.venue.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-gold/50 text-primary hover:bg-secondary flex items-center justify-center gap-2 rounded-full border py-3.5 text-[0.7rem] tracking-[0.2em] uppercase font-medium transition-colors"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Directions
                </motion.a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
