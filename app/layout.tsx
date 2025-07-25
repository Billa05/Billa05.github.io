import type { Metadata } from 'next'
import './globals.css'
import InvertedCursor from '@/components/cursor'
import { Component } from "@/components/ui/etheral-shadow"

export const metadata: Metadata = {
  title: "Billa's portfolio",
  description: 'portfolio of biresh biswas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 -z-10 w-full" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
          <Component
            color="rgb(0, 0, 0)"
            animation={{ scale: 100, speed: 95 }}
            noise={{ opacity: 1, scale: 0.5 }}
            sizing="fill"
          />
        </div>
        <InvertedCursor />
        {children}
      </body>
    </html>
  )
}
