import type { Metadata } from 'next'
import './globals.css'
import { Pointer } from '@/components/cursor'
import { Component } from "@/components/ui/etheral-shadow"


export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 -z-10 w-full h-full">
        <Component
      color="rgb(0, 0, 0)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 0.5 }}
        sizing="fill"
         />
        </div>
        <Pointer>
          {children}
        </Pointer>
      </body>
    </html>
  )
}
