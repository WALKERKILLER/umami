'use client';
import { useTheme } from '@umami/react-zen';

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="relative z-10 flex flex-col items-center text-center pt-4 md:pt-12 animate-fade-in-up">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
        className="fixed top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 group p-3 rounded-full bg-white dark:bg-wabi-dark-subtle border-2 border-stone-200 dark:border-wabi-dark-stone hover:border-goose-blue-400 dark:hover:border-goose-blue-500 transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95 shadow-sm hover:shadow-md z-50"
      >
        <div className="relative w-6 h-6">
          {theme === 'light' ? (
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-wabi-text"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-wabi-dark-text"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        {/* Hand-drawn circle decoration */}
        <svg
          className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] text-goose-blue-300 dark:text-goose-blue-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Logo Area */}
      <div
        className="relative group cursor-pointer scale-90 md:scale-100 animate-scale-in"
        role="img"
        aria-label="YourTJ Logo"
      >
        {/* Outer large dashed ring */}
        <div className="absolute -inset-6 md:-inset-10 text-stone-200/70 dark:text-wabi-dark-stone/50">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" aria-hidden="true">
            <path
              d="M 50, 50 m -48, 0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="8 6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Inner dashed ring */}
        <div className="absolute -inset-1 md:-inset-2 text-stone-300 dark:text-wabi-dark-stone">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-spin-reverse-slow"
            aria-hidden="true"
          >
            <path
              d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Logo Container */}
        <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white dark:bg-wabi-dark-subtle rounded-full shadow-sm border-2 border-stone-50 dark:border-wabi-dark-stone group-hover:scale-105 group-hover:shadow-md transition-all duration-500">
          <img
            src="/yourtj-logo.png"
            alt="YourTJ Logo"
            width={160}
            height={160}
            className="w-14 h-14 md:w-20 md:h-20 object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-full bg-goose-blue-200/0 dark:bg-goose-blue-400/0 group-hover:bg-goose-blue-200/20 dark:group-hover:bg-goose-blue-400/20 blur-xl transition-all duration-500 -z-10" />
      </div>

      <div className="relative z-10 w-full px-1 mt-6">
        {/* Title Lockup */}
        <h1 className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-x-3 gap-y-1 sm:gap-5 md:gap-6 pt-2">
          {/* Part 1: YourTJ */}
          <div className="relative transform -rotate-2 group animate-slide-in-left">
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-wabi-text dark:text-wabi-dark-text font-sans relative z-10 transition-colors duration-300">
              YourTJ
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-[105%] h-4 md:h-5 text-stone-300 dark:text-wabi-dark-stone pointer-events-none"
              viewBox="0 0 100 15"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 5 Q 50 12 100 5 M 5 10 Q 50 15 95 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Part 2: 社区导航 */}
          <div className="relative group transform rotate-3 origin-left animate-slide-in-right">
            <span
              className="font-hand text-4xl sm:text-5xl md:text-6xl text-goose-blue-600 dark:text-goose-blue-400 relative z-10 transition-all duration-300"
              style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.8)' }}
            >
              统计概览
            </span>
          </div>
        </h1>

        {/* Decorative dots */}
        <div className="mt-8 flex justify-center gap-3 opacity-40" aria-hidden="true">
          <div
            className="w-2 h-2 rounded-full bg-goose-blue-300 dark:bg-goose-blue-400 animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          />
          <div
            className="w-2 h-2 rounded-full bg-stone-300 dark:bg-wabi-dark-stone animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '3s' }}
          />
          <div
            className="w-2 h-2 rounded-full bg-goose-blue-300 dark:bg-goose-blue-400 animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '3s' }}
          />
        </div>
      </div>
    </header>
  );
}
