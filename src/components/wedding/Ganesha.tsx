export function GaneshaIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lord Ganesha Emblem"
    >
      {/* Auspicious Stylized Ganesha Motif */}
      {/* Crown / Kireetam */}
      <path
        d="M49 10 C50 8 51 8 52 10 L56 18 C57 20 55 22 53 22 L47 22 C45 22 43 20 44 18 Z"
        opacity="0.95"
      />
      <circle cx="50.5" cy="8" r="2.5" />
      {/* Forehead Tilak / Trishul */}
      <path
        d="M50.5 24 C51.5 27 52.5 30 52.5 34 C50.5 34 50.5 34 48.5 34 C48.5 30 49.5 27 50.5 24 Z"
        fill="currentColor"
      />
      <circle cx="50.5" cy="37" r="1.8" />
      {/* Left Ear */}
      <path
        d="M38 29 C28 27 20 33 22 44 C23 51 31 52 38 48 C36 42 36 35 38 29 Z"
        opacity="0.85"
      />
      {/* Right Ear */}
      <path
        d="M63 29 C73 27 81 33 79 44 C78 51 70 52 63 48 C65 42 65 35 63 29 Z"
        opacity="0.85"
      />
      {/* Head curve & Trunk (Modak on trunk tip) */}
      <path
        d="M44 26 C47 25 54 25 57 26 C63 29 65 37 63 45 C60 55 56 63 57 70 C58 75 62 76 65 74 C67 72 67 69 65 67 C63 65 60 67 60 70 C60 77 68 81 72 75 C75 70 71 63 67 61 C63 59 60 53 62 46 C63 42 63 36 60 32 C57 28 53 27 48 27 C44 27 41 29 40 33 C39 37 40 43 43 50 C46 56 50 64 49 73 C48 81 40 86 33 83 C26 79 26 71 31 66 C35 62 40 65 38 70 C36 74 31 73 32 77 C33 79 38 80 41 76 C43 72 41 64 38 58 C34 50 33 40 36 34 C38 29 41 27 44 26 Z"
      />
      {/* Single Tusk (Ekadanta) */}
      <path d="M40 47 L35 52 L39 52 Z" opacity="0.9" />
      {/* Sacred Modak / Laddu */}
      <circle cx="68" cy="72" r="3" opacity="0.95" />
    </svg>
  );
}
