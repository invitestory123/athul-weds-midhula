import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export function AudioPlayer({ autoPlayTrigger }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay was blocked by browser until user gesture
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/bgm.mp3" loop preload="auto" />

      <motion.button
        type="button"
        onClick={togglePlay}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-gold/40 bg-emerald-ink/80 px-3.5 py-2 text-gold backdrop-blur-md shadow-luxe shadow-gold/20 transition-colors hover:border-gold hover:bg-emerald-ink"
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-3.5 w-3.5 justify-center">
              <span className="w-0.5 rounded-full bg-gold animate-pulse h-2.5" />
              <span className="w-0.5 rounded-full bg-gold animate-pulse h-3.5 delay-100" />
              <span className="w-0.5 rounded-full bg-gold animate-pulse h-2 delay-200" />
            </div>
            <Volume2 className="h-4 w-4" />
          </>
        ) : (
          <>
            <VolumeX className="h-4 w-4 text-ivory/60" />
            <span className="text-[0.65rem] tracking-wider uppercase text-ivory/80 font-medium">
              Music
            </span>
          </>
        )}
      </motion.button>
    </>
  );
}
