'use client';

interface YourTJCardProps {
  children: React.ReactNode;
  index?: number;
}

const tapeColors = [
  'bg-yellow-100/90 dark:bg-yellow-200/80',
  'bg-green-100/90 dark:bg-green-200/80',
  'bg-blue-100/90 dark:bg-blue-200/80',
];

export function YourTJCard({ children, index = 0 }: YourTJCardProps) {
  const rotation = (index % 2 === 0 ? 0.5 : -0.5) * ((index % 3) + 1);
  const tapeRotation = index % 2 === 0 ? -2 : 3;
  const tapeColor = tapeColors[index % tapeColors.length];

  return (
    <div
      className="group relative block h-full focus:outline-none transition-all duration-300 ease-out"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Washi Tape */}
      <div
        className={`absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-20 md:w-24 h-6 md:h-8 ${tapeColor} backdrop-blur-[1px] shadow-sm z-20 pointer-events-none transition-all duration-300`}
        style={{
          transform: `translateX(-50%) rotate(${tapeRotation}deg)`,
          clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)',
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
      >
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Shadow */}
      <div className="absolute inset-0 bg-stone-300/60 dark:bg-black/40 rounded-sm transition-all duration-300 translate-y-2 translate-x-1 blur-[2px] group-hover:translate-y-4 group-hover:blur-[6px] group-hover:opacity-40" />

      {/* Card Surface */}
      <div className="relative h-full bg-white dark:bg-wabi-dark-subtle rounded-sm border border-stone-100 dark:border-wabi-dark-stone flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-goose-blue-900/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01]">
        {/* Sketchy inner border */}
        <div
          className="absolute inset-1 border-2 border-stone-200/50 dark:border-wabi-dark-darkstone/50 rounded-sm pointer-events-none transition-colors duration-300 group-hover:border-goose-blue-200/60 dark:group-hover:border-goose-blue-600/40"
          style={{
            clipPath: 'polygon(0% 0%, 100% 1%, 99% 100%, 1% 99%)',
          }}
        />

        {/* Organic corner decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-goose-blue-300 dark:text-goose-blue-400"
          >
            <path
              d="M100 0 Q80 20 70 40 Q60 60 50 70 Q40 80 20 90 L100 100 Z"
              fill="currentColor"
              opacity="0.5"
            />
            <path
              d="M100 0 Q85 15 75 30 Q65 45 55 55 Q45 65 30 75 L100 80 Z"
              fill="currentColor"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">{children}</div>

        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
    </div>
  );
}
