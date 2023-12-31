'use client' //for usePathname
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProviders } from './themeprovider'
import Link from 'next/link'
import NavContainer from './components/navbar/nav-container'
import { AuthContextProvider } from '../../auth-context-provider'
import NextTopLoader from 'nextjs-toploader'
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,500&family=Merriweather+Sans:wght@300&family=Poppins:wght@200&family=Quicksand:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
      <AuthContextProvider>
        <ThemeProviders>
          <NavContainer/>
          <NextTopLoader color="#003ED6"
            initialPosition={0.8}
            crawlSpeed={300}
            height={3}
            showSpinner={false}
          />
          {children}
        </ThemeProviders>
      </AuthContextProvider>
        
      </body>
    </html>
  )
}