import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '동물 게임',
  description: '동물과 동물을 합쳐서 새로운 동물을 만들자!',
  openGraph: {
    images:[
      {
        type: "image/png",
        width: 500,
        height: 500,
        url: 'Pig.png'
      }
    ]
  }
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <head>
        <link rel="icon" href="/favicon.ico" type={"image/x-icon"} sizes="180x180" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
