import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bill Leydon | Poems & Memories',
  description: 'A collection of poems by Bill Leydon (1945-2024), loving husband, father, grandfather, brother, librarian, and poet.',
  keywords: ['Bill Leydon', 'poems', 'poetry', 'memorial', 'Dorchester', 'Boston'],
  authors: [{ name: 'Michael Leydon' }],
  openGraph: {
    title: 'Bill Leydon | Poems & Memories',
    description: 'A collection of poems by Bill Leydon (1945-2024), loving husband, father, grandfather, brother, librarian, and poet.',
    url: 'https://wgleydon.com',
    siteName: 'Bill Leydon Memorial',
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 800,
        alt: 'Bill Leydon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bill Leydon | Poems & Memories',
    description: 'A collection of poems by Bill Leydon (1945-2024), loving husband, father, grandfather, brother, librarian, and poet.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/bill-leydon.jpg',
    shortcut: '/bill-leydon.jpg',
    apple: '/bill-leydon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-paper-100 text-ink-dark font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
