import logo from '../../../public/logo.png'
import Image from '@/next/Image';

const Header = ({ }) => {

    return (
        <div className='w-full shadow-md bg-white text-center text-lime-600 font-bold tracking-widest py-2 px-10 flex items-center'>
            <div id="logo" className='h-7 w-7 relative mr-1'>
                <Image
                    alt="logo"
                    src={logo}
                    sizes="1.75rem"
                />
            </div>
            <span className='logo text-xl'>Trade your Tiki</span>
        </div>
    )
}

export default Header;
