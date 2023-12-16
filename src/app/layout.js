import '@/sass/main.scss'
import localFont from 'next/font/local'
import Header from '@/components/layout/Header'
import Image from 'next/image'
import tropics from '../../public/tropics.png'
import Container from '@/components/layout/Container'
import { UserContextProvider } from '@/context/UserContext'
import { CartContextProvider } from '@/context/CartContext'
import HeaderCartIcon from '@/components/cart/HeaderCartIcon'

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
      <body style={{ minHeight: '100vh', position: 'relative' }}>
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
              <HeaderCartIcon />
            </div>
            <Container className={`mt-10 mb-2`}>
              {children}
            </Container>
          </CartContextProvider>
        </UserContextProvider>
        {/* <div style={{ position: 'absolute', bottom: 0 }}>
          <Image src={tropics} />
        </div> */}

        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
          integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"></script>
      </body>
    </html>
  )
}
