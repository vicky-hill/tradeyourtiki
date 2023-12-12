import '@/sass/main.scss'
import localFont from 'next/font/local'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import { UserContextProvider } from '@/context/UserContext'
import { CartContextProvider } from '@/context/CartContext'

export const metadata = {
  title: 'Trade Your Tiki'
}

export const dabrush = localFont({
  src: '../assets/fonts/dabrush.ttf',
  display: 'swap'
})

const dosis = localFont({
  src: '../assets/fonts/dosis.ttf',
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <CartContextProvider>

            <div className='h-7 w-full'></div>

            <div className='navbar h-12 w-full flex items-center justify-center'>
              <div className={`space-x-6 ${dosis.className}`} style={{ letterSpacing: 1, textTransform: 'uppercase' }}>
                <span>Mugs</span>
                <span>Bowls</span>
                <span>Syrups</span>
                <span>Swizzle Sticks</span>
                <span>Bar Decor</span>
              </div>
            </div>
            <Container className={`mt-10 mb-2`}>
              {children}
            </Container>
          </CartContextProvider>
        </UserContextProvider>
      </body>
    </html>
  )
}
