import '@/sass/main.scss'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'
import Container from '@/components/layout/Container'
import { UserContextProvider } from '@/context/UserContext'
import { CartContextProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'

export const metadata = {
  title: 'Trade Your Tiki'
}

export const dabrush = localFont({
  src: '../assets/fonts/dabrush.ttf',
  display: 'swap'
})

export const dosis = localFont({
  src: '../assets/fonts/dosis.ttf',
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body style={{ minHeight: '100vh', position: 'relative' }}>
         <NextTopLoader color="#929F79" height={2} />
        {/*<UserContextProvider>
          <CartContextProvider>
            <div className='h-7 w-full'></div>
            <Navbar font={dosis} />
            <Container className={`mt-10 mb-2`}>
              {children}
            </Container>
          </CartContextProvider>
        </UserContextProvider> */}
      </body>
    </html>
  )
}
