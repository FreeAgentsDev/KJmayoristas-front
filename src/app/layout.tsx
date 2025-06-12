import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Inter, Playfair_Display, Montserrat, Lato, Open_Sans, Roboto_Condensed } from 'next/font/google'

// Configuración de fuentes
const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap'
})

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light" className={`${playfair.variable} ${montserrat.variable} ${lato.variable} ${openSans.variable} ${robotoCondensed.variable}`}>
      <head>
        <link rel="stylesheet" href="/fonts.css" />
      </head>
      <body className="font-body">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
