import React, { useState } from 'react'
import Header from '../Sections/Header'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";
import Footers from '../Sections/Footers';
import { useDispatch, useSelector } from 'react-redux';
import { addCartQuantity, removeCart } from '../Reducers/CartReducer';
import { useNavigate } from 'react-router-dom';


const AddCart = () => {
  const cartItems = useSelector(state => state.cart.cart)
  const { signIn } = useSelector(state => state.controls)
  const dispatch = useDispatch()
  const calculateTotal = cartItems.reduce((total, item) => total + item.rate * item.quantity, 0);
  const navigate = useNavigate()
  const checkoutHandler = () => {
    if (signIn) {
      alert('Your Order is placed')
    } else {
      navigate('/signin')
    }
  }
  return (
    <div>
      <Header />
      <section className='relative w-full h-32'>
        <img src='./Images/Cover/cover1.jpg' className='w-full h-full object-cover' />
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
        <div className='absolute w-full h-full flex justify-center items-center text-2xl top-0 left-0'><div className='w-fit h-fit font-medium text-white'>Shopping carts</div></div>
      </section>
      <section className='container h-fit mt-16 max-md:w-[90%]'>
        {(cartItems.length === 0) ?
          <div className='w-full h-screen flex flex-col justify-center items-center'>
            <BsCartX className="w-28 h-28 mb-10 text-gray-400" />
            <div className='text-3xl mb-5 font-medium'>YOUR CART IS EMPTY.</div>
            <div className='w-1/2 mb-8 text-center text-gray-400 max-md:w-3/4'>Before proceed to checkout you must add some products to your shopping cart.
              You will find a lot of interesting products on our "Shop" page.</div>
            <button className='w-1/6 h-10 bg-sky-400 font-bold text-white border rounded-full max-md:w-1/2' onClick={() => { navigate('/') }}>RETURN TO SHOP</button>
          </div> :
          <div className='w-full h-fit'>
            <table className='w-full h-fit max-md:hidden'>
              <thead>
                <tr className='h-14 border-b text-sm border-gray-400'>
                  <th className='w-[45%] text-start'>PRODUCT</th>
                  <th className='w-[15%] text-center'>PRICE</th>
                  <th className='w-[25%] text-center'>QUANTITY</th>
                  <th className='w-[15%] text-end'>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((items, index) => (
                  <tr key={index} className=' border-b border-gray-400'>
                    <td>
                      <div className='flex items-center m-5'>
                        <img className='w-28 h-fit p-1 cursor-pointer' src={items.src} />
                        <div className='ms-2'>
                          <div className='mb-2 font-medium cursor-pointer hover:text-sky-400'>{items.name}</div>
                          <RiDeleteBinLine className='w-6 h-6 cursor-pointer' onClick={() => { dispatch(removeCart(items.id)) }} />
                        </div>
                      </div>
                    </td>
                    <td className='text-gray-400 text-center'>₹{items.rate}.00</td>
                    <td>
                      <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-32 h-10 font-medium text-lg flex justify-around items-center border border-black rounded-full max-md:w-1/3 '>
                          <RiDeleteBinLine className='hover:text-sky-400 cursor-pointer' onClick={() => { dispatch(addCartQuantity({ type: "remove", id: items.id })) }} />
                          <span>{items.quantity}</span>
                          <IoAdd className='hover:text-sky-400 cursor-pointer' onClick={() => { dispatch(addCartQuantity({ type: "add", id: items.id })) }} />
                        </div>
                      </div>
                    </td>
                    <td className='w-[15%] text-end'>₹{items.quantity * items.rate}.00</td>
                  </tr>
                ))
                }
              </tbody>
            </table>
            <div className='w-full h-fit flex flex-col gap-3 md:hidden'>
            {cartItems.map((items, index) => (
              <div key={index} className='w-full h-44 flex'>
                <div className='w-[40%] h-full'>
                  <img className='w-28 h-fit p-1' src={items.src} />
                </div>
                <div className='w-[60%] h-full'>
                  <div className='font-medium mb-1'>{items.name}</div>
                  <RiDeleteBinLine className='w-4 h-4 mb-2' onClick={() => { dispatch(removeCart(items.id)) }} />
                  <div className='font-medium text-gray-400 mb-3'>₹{items.rate}.00</div>
                  <div className='w-1/2 h-9 font-medium text-lg flex justify-around items-center border border-black rounded-full mb-3'>
                    <RiDeleteBinLine className='w-4 h-4' onClick={() => { dispatch(addCartQuantity({ type: "remove", id: items.id })) }} />
                    <span>{items.quantity}</span>
                    <IoAdd className='w-4 h-4' onClick={() => { dispatch(addCartQuantity({ type: "add", id: items.id })) }} />
                  </div>
                  <div className='font-medium'>₹{items.quantity * items.rate}.00</div>
                </div>
              </div>
              ))
            }
            </div>
            <div className='w-full h-fit flex my-10 max-md:flex-col'>
              <div className='w-1/2 max-md:w-full max-md:text-center max-md:mb-10'>
                <div className='mb-3'>Coupon: </div>
                <div className='mb-5 text-gray-400'>Coupon code will work on checkout page</div>
                <input className='w-11/12 h-10 ps-2 border' placeholder='Coupon code' />
              </div>
              <div className='w-1/2 text-end max-md:w-full max-md:text-center'>
                <div className='text-xl font-medium mb-3'><span>SUBTOTAL: </span><span className='ms-10'>₹{calculateTotal}.00</span></div>
                <div className='text-gray-400 mb-5'>Taxes and shipping calculated at checkout</div>
                <button className='w-[25%] h-12 rounded-full bg-sky-300 text-white font-medium max-md:w-4/5' onClick={checkoutHandler}>Check out</button>
              </div>
            </div>
          </div>
        }
      </section>
      <Footers />
    </div>
  )
}

export default AddCart