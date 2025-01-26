import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Providers> */}
          {children}
        {/* </Providers> */}
      </body>
    </html>
  )
}
