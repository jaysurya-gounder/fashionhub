import React, { useState } from 'react'
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline, IoAdd } from "react-icons/io5";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import Header from '../Sections/Header'
import Footers from '../Sections/Footers';
import RecentView from '../Components/RecentView';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, toggleWishlist } from '../Reducers/CartReducer';

const Detail = () => {
    const mens = useSelector(state => state.products.mens)
    const womens = useSelector(state => state.products.womens)
    const watches = useSelector(state => state.products.watches)
    const footwears = useSelector(state => state.products.footwears)
    const allProducts = [...mens, ...womens, ...watches, ...footwears]
    const trending = useSelector(state => state.products.trending)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const { pdtId } = useParams()
    const [ product ]= allProducts.filter((item) => { return item.id === parseInt(pdtId) })
    const wishItems = useSelector(state => state.cart.wishlist)
    const existingItem = wishItems.find(item => item.id === parseInt(pdtId));
    const addCartHandler = () => {
        dispatch(addCart({
            id: product.id,
            src: product.src,
            name: product.name,
            rate: product.rate,
            quantity: quantity
        }))
    }
    const handleToggleWishlist = () => {
        dispatch(toggleWishlist({
            id: product.id,
            src: product.src,
            name: product.name,
            rate: product.rate,
        }))
    };

    return (
        <div className='w-full h-fit'>
            <Header />
            <div className='w-full h-16 bg-gray-100'></div>
            <section className='container flex my-10 max-md:w-11/12 max-md:flex-col'>
                <div className='w-1/2 h-1/2 flex gap-2 max-md:w-full max-md:flex-col'>
                    <div className='w-1/6 flex flex-col gap-2 max-md:hidden'>
                        <img src={product.src1} className='w-24' />
                        <img src={product.src2} className='w-24' />
                        <img src={product.src3} className='w-24' />
                        <img src={product.src4} className='w-24' />
                    </div>
                    <div className='relative w-5/6 h-full max-md:w-full max-md:mb-5'>
                        <img src={product.src} className='w-full' />
                        <div className='absolute top-1/2 left-0  w-full h-fit flex justify-between'>
                            <IoChevronBackCircleOutline className='w-14 h-14 ms-2 cursor-pointer hover:bg-sky-400 hover:text-white hover:rounded-full' />
                            <IoChevronForwardCircleOutline className='w-14 h-14 me-2 cursor-pointer hover:bg-sky-400 hover:text-white hover:rounded-full' />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-fit ms-10 max-md:w-full max-md:ms-0'>
                    <div className='w-fit h-fit mb-1 text-lg font-medium'>{product.name}</div>
                    <div className='w-full w-hit flex justify-between text-gray-500 max-md:flex-col max-md:gap-1'>
                        <div className='text-2xl'>₹{product.rate}.00</div>
                        <div className='w-fit h-fit cursor-pointer hover:text-sky-400'>&#40;6 review&#41;</div>
                    </div>
                    <div className='w-11/12 my-5 text-justify text-gray-400 max-md:w-full '>{product.describe}</div>
                    <div className='w-fit h-fit mb-5'>
                        <div className='font-medium mb-2'>Size: <span className=''>S</span></div>
                        <div className='w-fit h-fit flex gap-2'>
                            <div className='w-8 h-8 flex justify-center items-center text-center border border-black rounded-full'><div>S</div></div>
                            <div className='w-8 h-8 flex justify-center items-center text-center border border-black rounded-full'><div>L</div></div>
                        </div>
                    </div>
                    <div className='w-fit h-fit mb-10'>
                        <div className='font-medium mb-2'>Colour: <span className=''>Red</span></div>
                        <div className='w-fit h-fit flex gap-2'>
                            <div className='w-6 h-6 flex justify-center items-center text-center border border-gray-400 rounded-full'></div>
                            <div className='w-6 h-6 flex justify-center items-center text-center bg-red-500 border border-gray-400 rounded-full'></div>
                        </div>
                    </div>
                    <div className='w-full h-fit flex gap-4 mb-5'>
                        <div className='w-1/4 h-10 font-medium text-lg flex justify-around items-center border border-black rounded-full max-md:w-1/3 '>
                            <FiMinus className='hover:text-sky-400 cursor-pointer' onClick={() => { setQuantity((quantity === 1) ? 1 : quantity - 1) }} />
                            <span>{quantity}</span>
                            <IoAdd className='hover:text-sky-400 cursor-pointer' onClick={() => { setQuantity(quantity + 1) }} />
                        </div>
                        <button className='w-1/4 h-10 bg-sky-400 font-bold text-white border  rounded-full max-md:w-1/3' onClick={addCartHandler}>Add to cart</button>
                        <div className='w-10 h-10 flex justify-center items-center text-center border border-black rounded-full hover:text-sky-400 hover:border-sky-400 cursor-pointer' onClick={handleToggleWishlist}>
                            {existingItem ?
                                <IoMdHeart className='w-5 h-5' /> :
                                <IoIosHeartEmpty className='w-5 h-5' />}
                        </div>
                    </div>
                    <div className='w-5/6 h-fit mb-5 flex gap-5 font-medium cursor-pointer max-md:w-full max-md:justify-between max-md:gap-0'>
                        <div className='hover:text-sky-400'>Size Guide</div>
                        <div className='hover:text-sky-400'>Delivery & Return</div>
                        <div className='hover:text-sky-400'>Ask a Question</div>
                    </div>
                    <div className='text-gray-400'>
                        <div>Availability: <span className='text-black'>In Stock</span></div>
                        <div>Categories: <span className='hover:text-sky-400 text-black cursor-pointer'>Fashion, New Arrival</span></div>
                        <div>Tags: <span className='hover:text-sky-400 text-black cursor-pointer'>Color White Color Black Price $7-$50 Size L Size M Size S Vendor Kalles women</span></div>
                    </div>
                </div>
            </section>
            <section className='w-full h-96 bg-gray-100'>
                <div className='container'>
                    <div className='w-full h-fit flex justify-center py-10'>
                        <div className='w-fit h-10 px-10 py-1.5 rounded-full font-medium border border-black cursor-pointer'>Description</div>
                        <div className='w-fit h-10 px-10 py-1.5 rounded-full font-medium text-gray-500 ms-10 cursor-pointer'>Reviews</div>
                    </div>
                </div>
            </section>
            <section className='w-full h-fit my-20'>
                <div className='container h-fit max-md:w-[90%]'>
                    <RecentView products={trending} />
                </div>
            </section>
            <Footers />
        </div>
    )
}

export default Detail
