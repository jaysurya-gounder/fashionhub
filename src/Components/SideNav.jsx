import { Link } from "react-router-dom"
import { navLinks } from "../Data/Index"
import { VscAccount } from "react-icons/vsc"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";


const SideNav = ({ toggle }) => {
    const { isOpen, setIsOpen } = toggle
    const { signIn } = useSelector(state => state.controls)
    const wishlistQ = useSelector(state => state.cart.wishlist)
    return (
        <section className={`absolute top-0 left-0 ${isOpen ? 'w-4/5' : 'w-0'} h-screen flex bg-transparent transition-all ease-in-out md:hidden`}>
            <ul className="w-[calc(100%-40px)] h-full border-e overflow-y-auto bg-white">
                <li className="w-full h-14 border-b-2 border-blue-500 text-center font-medium pt-4 bg-blue-100">MENU</li>
                {navLinks.map((link) => (
                    <Link key={link.label} to={link.to}><li className="w-full h-16 pt-5 ps-5 hover:bg-slate-100">{link.label}</li></Link>
                ))}
                <Link to='/addwishlist'><li className="w-full h-16 pt-5 ps-5 flex hover:bg-slate-100 cursor-pointer">
                    <div className="relative w-6 h-6 me-2">
                        <IoIosHeartEmpty className='w-6 h-6' />
                        {(wishlistQ.length === 0) ? '' : <div className="inc">{wishlistQ.length}</div>}
                    </div>
                    Wishlist</li></Link>
                <li className="w-full h-16 pt-5 ps-5 mb-5 hover:bg-slate-100">{signIn ? <Link to='/signout' className="flex"><VscAccount className='w-6 h-6 me-2' />signout</Link> : <Link to='/signin' className="flex" ><VscAccount className='w-6 h-6 me-2' />Signin / Signup</Link>}</li>
                <li className="w-full h-32 ps-5 pt-2">
                    <div className="mb-5 font-medium">Need Help?</div>
                    <div className="text-gray-400">
                        <div className="w-fit h-fit flex mb-4 leading-3 hover:text-blue-400 cursor-pointer"><IoCallOutline className="w-3 h-3 me-2" />
                            <span>+91 8654745123</span></div>
                        <div className="w-fit h-fit flex leading-3 hover:text-blue-400 cursor-pointer"><MdOutlineEmail className="w-3 h-3 me-2" />
                            <span>fashionhub@domain.com</span></div>
                    </div>
                </li>
            </ul>
            <IoClose className="w-10 h-10 bg-black text-white cursor-pointer hover:bg-blue-400" onClick={() => { setIsOpen(false) }} />

        </section>
    )
}

export default SideNav
