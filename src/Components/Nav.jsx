import { NavLink, Link } from "react-router-dom"
import { navLinks } from "../Data/Index"
import { GoSearch } from "react-icons/go";
import { RiMenu2Line } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import SideNav from "./SideNav";
import { useSelector } from "react-redux";


const Nav = ({ toggle }) => {
    const { isToggle, setIsToggle } = toggle
    const cartQ = useSelector(state => state.cart.cart)
    const wishlistQ = useSelector(state => state.cart.wishlist)
    const { signIn } = useSelector(state => state.controls)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="relative w-full h-16 px-10 bg-white flex items-center z-20 max-md:px-3">
            <div className="w-[20%] md:hidden"><RiMenu2Line className='w-6 h-6 cursor-pointer' onClick={() => { setIsOpen(true) }} /></div>
            <SideNav toggle={{ isOpen, setIsOpen }} />
            <h1 className="w-1/4 text-2xl font-medium max-md:w-[60%] max-md:text-center" ><Link to='/'>Fashion Hub</Link></h1>
            <ul className="w-1/2 h-full pt-5 flex justify-around max-md:hidden">
                {navLinks.map((link) => (
                    <NavLink key={link.label} to={link.to}><li className="hover:text-blue-400 active:">{link.label}</li></NavLink>
                ))}
            </ul>
            <div className="w-1/4 flex justify-end gap-5 max-md:hidden">
                <GoSearch className='w-6 h-6 cursor-pointer' onClick={() => { (isToggle === false) ? setIsToggle(true) : setIsToggle(false) }} />
                {signIn ? <Link to='/signout'><VscAccount className='w-6 h-6' /></Link> : <Link to='/signin'><VscAccount className='w-6 h-6' /></Link>}
                <Link to='/addwishlist'>
                    <div className="relative w-6 h-6">
                        <IoIosHeartEmpty className='w-6 h-6' />
                        {(wishlistQ.length === 0) ? '' : <div className="inc">{wishlistQ.length}</div>}
                    </div>
                </Link>
                <Link to='/addcart'>
                    <div className="relative w-6 h-6">
                        <BsCart3 className='w-6 h-6' />
                        {(cartQ.length === 0) ? '' : <div className="inc">{cartQ.length}</div>}
                    </div>
                </Link>
            </div>
            <div className="w-[20%] flex justify-end gap-3 md:hidden">
                <GoSearch className='w-6 h-6 cursor-pointer' onClick={() => { (isToggle === false) ? setIsToggle(true) : setIsToggle(false) }} />
                <Link to='/addcart'>
                    <div className="relative w-6 h-6">
                        <BsCart3 className='w-6 h-6' />
                        {(cartQ.length === 0) ? '' : <div className="inc">{cartQ.length}</div>}
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
