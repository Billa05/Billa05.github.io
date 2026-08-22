import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import InvertedCursor from '@/components/cursor'
import { Component } from "@/components/ui/etheral-shadow"

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Biresh Biswas — Software Engineer',
  description: 'Portfolio of Biresh Biswas, a software engineer building useful systems across web, AI, cloud, and onchain technology.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="fixed inset-0 -z-10 h-full min-h-screen">
          <Component
            color="rgb(0, 0, 0)"
            animation={{ scale: 100, speed: 95 }}
            noise={{ opacity: 0.26, scale: 0.45 }}
            sizing="fill"
          />
        </div>
        <InvertedCursor />
        {children}
      </body>
    </html>
  )
}
