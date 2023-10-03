import './globals.scss'
import { momentum, inter } from './../lib/fonts'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${momentum.variable} ${inter.variable}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
