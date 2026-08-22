"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { ThemeToggleButton } from "@/components/portfolio/ThemeToggleButton"

const PortfolioThemeContext = createContext({ isDark: true })

export function usePortfolioTheme() {
  return useContext(PortfolioThemeContext)
}

export function ThemeShell({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(!isMobile)
  }, [isMobile])

  const toggleTheme = () => {
    const switchTheme = () => setIsDark((previousTheme) => !previousTheme)
    if (!document.startViewTransition) return switchTheme()
    document.startViewTransition(switchTheme)
  }

  const theme = useMemo(() => ({ isDark }), [isDark])

  return (
    <PortfolioThemeContext.Provider value={theme}>
      <div className={isDark ? "dark" : ""}>
        <div className="min-h-screen md:h-screen w-full max-w-full bg-transparent overflow-x-hidden transition-colors duration-500">
          <div className="relative mx-auto h-full w-full max-w-[1800px] box-border p-3 sm:p-4 md:p-5 lg:p-6">
            {children}
            <div className="fixed right-4 top-4 z-50 md:absolute md:right-8 md:top-8">
              <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </div>
    </PortfolioThemeContext.Provider>
  )
}
