import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'



export const metadata: Metadata = {
  title: 'Decentralised Protocol',
  description: 'All your defi app in one',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="en">
      <body>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
