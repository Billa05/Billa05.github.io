import { Sun, Moon } from "lucide-react";

export function ThemeToggleButton({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`group flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isDark
          ? "border-white/20 bg-white/95 text-black shadow-[0_8px_30px_rgba(0,0,0,0.22)] focus-visible:ring-white"
          : "border-black/15 bg-black/95 text-white shadow-[0_8px_30px_rgba(0,0,0,0.16)] focus-visible:ring-black"
      }`}
    >
      {isDark ? <Sun className="h-[18px] w-[18px] transition-transform duration-500 group-hover:rotate-45" /> : <Moon className="h-[18px] w-[18px] transition-transform duration-500 group-hover:-rotate-12" />}
    </button>
  );
}
