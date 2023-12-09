import logo from '../../../public/logo.png'
import Image from 'next/image'

const Header = ({ }) => {

    return (
        <div className='w-full shadow-md bg-white text-center text-lime-600 font-bold tracking-widest py-2 px-10 flex items-center'>
            <div id="logo" className='h-7 w-7 relative mr-1'>
                <Image
                    alt="logo"
                    src={logo}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <span className='logo text-xl'>Trade your Tiki</span>
        </div>
    )
}

export default Header;
