import React, { useState } from 'react'
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { navLinks } from '../Data/Index';
import { NavLink, Link } from 'react-router-dom';




const Footers = () => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    return (
        <footer>
            <div className='w-full h-96 bg-gray-200 max-md:h-fit'>
                <div className='container h-full flex pt-10 max-md:w-full max-md:px-3 max-md:flex-col max-md:pb-5'>
                    <div className='w-full h-14 flex items-center justify-between md:hidden' onClick={() => { toggle1 ? setToggle1(false) : setToggle1(true) }}><div className='text-xl font-medium'>Get in touch</div><div className='w-fit h-fit'>{toggle1 ? <FaMinus className='w-5 h-5 text-gray-400' /> : <FaPlus className='w-5 h-5 text-gray-400' />}</div></div>
                    <div className={`w-1/4 h-56 me-10 max-md:w-full max-md:mb-5 max-md:h-fit max-md:pt-2 max-md:${toggle1 ? '' : 'hidden'}`}>
                        <h1 className='text-3xl font-bold mb-8 max-md:mb-4'>Fashion Hub</h1>
                        <div className='w-full h-fit flex mb-3 items-center text-gray-500'><IoLocationOutline className='w-12 h-12 me-2' /><span>184 Main Rd Cg-Road, Ahmedabad, 380821, Gujarat, India</span></div>
                        <div className='w-full h-fit flex mb-3 items-center text-gray-500'><MdOutlineEmail className='w-8 h-8 me-2' /><span>fahionhub@company.com</span></div>
                        <div className='w-full h-fit flex mb-5 items-center text-gray-500'><IoCallOutline className='w-8 h-8 me-2' /><span>+91 9764534667</span></div>
                        <div className='w-3/4 h-fit flex items-center justify-between text-gray-500 max-md:w-1/2'>
                            <FaFacebookF className='w-5 h-5 cursor-pointer' />
                            <FaInstagram className='w-5 h-5 cursor-pointer' />
                            <FaLinkedinIn className='w-5 h-5 cursor-pointer' />
                            <FaPinterestP className='w-5 h-5 cursor-pointer' />
                        </div>
                    </div>
                    <div className='w-full h-14 flex items-center justify-between md:hidden' onClick={() => { toggle2 ? setToggle2(false) : setToggle2(true) }}><div className='text-xl font-medium'>Categories</div><div className='w-fit h-fit'>{toggle2 ? <FaMinus className='w-5 h-5 text-gray-400' /> : <FaPlus className='w-5 h-5 text-gray-400' />}</div></div>
                    <div className='w-1/5 h-56 max-md:w-full max-md:h-fit'>
                        <div className='text-lg font-medium mb-8 max-md:hidden'>Categories</div>
                        <ul className={`w-1/2 h-full text-gray-500 max-md:text-xl max-md:w-full max-md:pt-2 max-md:${toggle2 ? '' : 'hidden'}`}>
                            {navLinks.map((link) => (
                                <NavLink key={link.label} to={link.to}><li className="hover:text-blue-400 mb-3 active:">{link.label}</li></NavLink>
                            ))}
                        </ul>
                    </div>
                    <div className='w-1/4 h-56 max-md:w-full max-md:h-fit'>
                        <div className='w-full h-14 flex items-center justify-between md:hidden' onClick={() => { toggle3 ? setToggle3(false) : setToggle3(true) }}><div className='text-xl font-medium'>Infomation</div><div className='w-fit h-fit'>{toggle3 ? <FaMinus className='w-5 h-5 text-gray-400' /> : <FaPlus className='w-5 h-5 text-gray-400' />}</div></div>
                        <div className='text-lg font-medium mb-8 max-md:hidden'>Infomation</div>
                        <ul className={`w-1/2 h-full text-gray-500 max-md:text-xl max-md:w-full max-md:pt-2 max-md:${toggle3 ? '' : 'hidden'}`}>
                            <Link><li className="hover:text-blue-400 mb-3">About us</li></Link>
                            <Link><li className="hover:text-blue-400 mb-3">Contact us</li></Link>
                            <Link><li className="hover:text-blue-400 mb-3">Terms & Conditions</li></Link>
                            <Link><li className="hover:text-blue-400 mb-3">Returns & Exchanges</li></Link>
                            <Link><li className="hover:text-blue-400 mb-3">Shipping & Delivery</li></Link>
                            <Link><li className="hover:text-blue-400 mb-3">Privacy Policy</li></Link>
                        </ul>
                    </div>
                    <div className='w-full h-14 flex items-center justify-between md:hidden' onClick={() => { toggle4 ? setToggle4(false) : setToggle4(true) }}><div className='text-xl font-medium'>Newsletter Signup</div><div className='w-fit h-fit'>{toggle4 ? <FaMinus className='w-5 h-5 text-gray-400' /> : <FaPlus className='w-5 h-5 text-gray-400' />}</div></div>
                    <div className={`w-1/4 h-56 max-md:w-full max-md:mb-5 max-md:h-fit max-md:pt-2 max-md:${toggle4 ? '' : 'hidden'} max-md:pb-5`}>
                        <div className='text-lg font-medium mb-8 max-md:hidden'>Newsletter Signup</div>
                        <div className='text-gray-500 mb-5'>Subscribe to our newsletter and get 10% off your first purchase</div>
                        <div className='w-full h-fit flex'>
                            <input className='w-44 h-10 ps-4 bg-transparent border border-black rounded-s-full max-md:w-3/4' placeholder='Your email address' />
                            <button className='w-24 h-10 text-white bg-black rounded-e-full max-md:w-[35%]'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-16 flex items-center text-gray-500 bg-white max-md:text-center'>
                    <div className='container'>All Rights Reserved © 2024 - Developed by <span className='text-black'>Surya</span></div>
                </div>
            </div>
        </footer>
    )
}

export default Footers