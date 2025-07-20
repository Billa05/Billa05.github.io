import { Sun, Moon } from "lucide-react";

export function ThemeToggleButton({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <button
      onClick={toggleTheme}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 transition-all duration-300 z-10 flex items-center justify-center ${
        isDark
          ? "bg-white border-black text-black hover:scale-110"
          : "bg-black border-white text-white hover:scale-110"
      }`}
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
} 