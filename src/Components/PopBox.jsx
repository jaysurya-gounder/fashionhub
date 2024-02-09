import React, { useEffect, useRef, useState } from 'react'
import { GrPrevious, GrNext } from "react-icons/gr";
import { IoClose, IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, toggleWishlist } from '../Reducers/CartReducer';
import { popup } from '../Reducers/QuickReducer';


const PopBox = () => {
  const show = useSelector(state => state.quickView.isOpen)
  const product = useSelector(state => state.quickView.product);
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const wishItems = useSelector(state => state.cart.wishlist)
  const existingItem = wishItems.find(item => item.id === product.id);
  const dialogRef = useRef()
  useEffect(() => {
    if (show) {
      dialogRef.current.showModal()
    } else {
      return;
    }
    window.addEventListener('click', (e) => {
      if (dialogRef.current === e.target) {
        dispatch(popup({
          type: 'CLOSE_QUICK_VIEW',
        }))
      }
    })
    return () => {
      dialogRef.current.close()
    }
  }, [show])

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
  }

  return (
    <dialog ref={dialogRef} className='w-3/5 h-fit max-md:w-4/5 max-md:h-fit'>
      {(product === null) ? <></> : <div className='relative w-full h-[600px] flex shadow-md max-md:flex-col max-md:px-3 max-md:py-5 max-md:overflow-y-scroll'>
        <div className="absolute w-12 h-12 flex justify-center items-center top-0 right-0 bg-black cursor-pointer" onClick={() => {
          dispatch(popup({
            type: 'CLOSE_QUICK_VIEW',
          }))
        }}>
          <IoClose className='w-8 h-8 text-white' />
        </div>
        <div className="absolute w-1/2 h-full flex justify-between items-center top-0 left-0 max-md:w-full max-md:h-16 max-md:top-[30%] max-md:items-start">
          <GrPrevious className=' w-10 h-10 p-2 border-2 rounded-full border-black ms-3 hover:text-white hover:bg-sky-400 hover:border-sky-400 max-md:ms-5' />
          <GrNext className='w-10 h-10 p-2 border-2 rounded-full border-black me-3  hover:text-white hover:bg-sky-400 hover:border-sky-400 max-md:me-5' />
        </div>
        <img className="w-1/2 h-full object-cover max-md:w-full" src={product.src} />
        <div className="w-1/2 h-full px-10 pt-20 max-md:w-full max-md:px-0">
          <div className='w-fit h-fit mb-1 text-lg font-medium'>{product.name}</div>
          <div className='w-full w-hit flex justify-between text-gray-500 max-md:gap-1'>
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
          <div className='w-full h-fit flex gap-4 mb-5 '>
            <div className='w-1/3 h-10 font-medium text-lg flex justify-around items-center border border-black rounded-full max-md:w-1/3 '>
              <FiMinus className='hover:text-sky-400 cursor-pointer' onClick={() => { setQuantity((quantity === 1) ? 1 : quantity - 1) }} />
              <span>{quantity}</span>
              <IoAdd className='hover:text-sky-400 cursor-pointer' onClick={() => { setQuantity(quantity + 1) }} />
            </div>
            <button className='w-2/5 h-10 bg-sky-400 font-bold text-white border  rounded-full max-md:hidden' onClick={addCartHandler} >Add to cart</button>
            <div className='w-10 h-10 flex justify-center items-center text-center border border-black rounded-full hover:text-sky-400 hover:border-sky-400 cursor-pointer' onClick={handleToggleWishlist}>
              {existingItem ?
                <IoMdHeart className='w-5 h-5' /> :
                <IoIosHeartEmpty className='w-5 h-5' />}
            </div>
          </div>
          <button className='w-full h-10 bg-sky-400 font-bold text-white border rounded-full mb-5 md:hidden' onClick={addCartHandler} >Add to cart</button>
          <div className='w-full h-fit mb-5 flex gap-4 font-medium cursor-pointer max-md:w-full max-md:justify-between max-md:gap-0 max-md:text-sm'>
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
      </div>}
    </dialog>
  )
}

export default PopBox