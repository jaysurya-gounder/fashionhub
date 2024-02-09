import React from 'react'
import Header from '../Sections/Header'
import Footers from '../Sections/Footers';
import Card from '../Components/Card';
import { TbHeartX } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const AddWishlist = () => {
    const wishItems = useSelector(state => state.cart.wishlist)
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <section className='relative w-full h-32'>
                <img src='./Images/Cover/cover1.jpg' className='w-full h-full object-cover' />
                <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
                <div className='absolute w-full h-full flex flex-col justify-center items-center text-2xl top-0 left-0'>
                    <div className='w-fit h-fit font-medium text-white mb-1'>Wishlist</div>
                    <div className='w-fit h-fit text-base text-white'>View your wishlist products</div>
                </div>
            </section>
            <section className='container h-fit mt-16 max-md:w-[90%]'>
                {(wishItems.length === 0) ?
                    <div className='w-full h-screen flex flex-col justify-center items-center'>
                        <TbHeartX className="w-28 h-28 mb-10 text-gray-400" />
                        <div className='text-3xl mb-5 font-medium'>WISHLIST IS EMPTY.</div>
                        <div className='w-1/2 mb-8 text-center text-gray-400 max-md:w-3/4'>You don't have any products in the wishlist yet.
                            You will find a lot of interesting products on our "Shop" page.</div>
                        <button className='w-1/6 h-10 bg-sky-400 font-bold text-white border rounded-full max-md:w-1/2' onClick={() => { navigate('/') }} >RETURN TO SHOP</button>
                    </div> :
                    <div className='w-full h-fit grid grid-cols-4 my-16 max-md:grid-cols-2 max-md:gap-x-3 max-md:gap-y-5'>
                        {wishItems.map((items) => (
                            <Card key={items.id} products={items} />
                        ))}
                    </div>
                }
            </section>
            <Footers />
        </div>
    )
}

export default AddWishlist