import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart, toggleWishlist } from "../Reducers/CartReducer";
import { popup } from "../Reducers/QuickReducer";

const Card = ({ products }) => {
    const wishItems = useSelector(state => state.cart.wishlist)
    const existingItem = wishItems.find(item => item.id === products.id);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const addCartHandler = (e) => {
        e.stopPropagation();
        dispatch(addCart({
            id: products.id,
            src: products.src,
            name: products.name,
            rate: products.rate,
            quantity: 1,
        }))
    }
    const quickViewHandler = (e) => {
        e.stopPropagation();
        dispatch(popup({
            type: 'OPEN_QUICK_VIEW',
            product: {
                id: products.id,
                src: products.src,
                name: products.name,
                rate: products.rate,
                quantity: 1,
            },
        }))
    }
    const handleToggleWishlist = (e) => {
        e.stopPropagation();
        dispatch(toggleWishlist({
            id: products.id,
            src: products.src,
            name: products.name,
            rate: products.rate,
        }))
    };
    return (
        <div className='w-fit h-fit card-div' onClick={() => { navigate('/product/' + products.id) }}>
            <div className='relative max-w-[290px] h-fit cursor-pointer'>
                <img className='w-full' src={products.src}></img>
                <div className="absolute top-0 end-0 w-fit h-fit mt-4 me-4 max-md:me-2 max-md:mt-2">
                    {1 === 1 ?
                        <>
                            <div className="w-14 h-14 mb-2 flex justify-center items-center rounded-full bg-lime-400 text-white max-md:w-10 max-md:h-10 max-md:text-xs"><div>New</div></div>
                            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-orange-600 text-white max-md:w-10 max-md:h-10 max-md:text-xs"><div>-25%</div></div>
                        </> :
                        <div className="w-16 h-16 text-sm flex justify-center items-center rounded-full bg-gray-400 text-white max-md:w-10 max-md:h-10 max-md:text-xs"><div>Sold out</div></div>
                    }
                </div>
                <div className="absolute w-full h-full top-0 left-0 md:hidden">
                    <div className="absolute w-fit h-fit top-2 left-2 text-white " onClick={handleToggleWishlist}>
                        {existingItem ?
                            <IoMdHeart className=' w-6 h-6 text-red-600' /> :
                            <IoIosHeartEmpty className='w-6 h-6' />
                        }
                    </div>
                    <div className="absolute w-fit h-fit bottom-2 end-2 text-white">
                        <div className="w-8 h-8 mb-2 flex justify-center items-center bg-white rounded-full" onClick={addCartHandler}><BsCart3 className=' w-5 h-5 text-black ' /></div>
                        <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full" onClick={quickViewHandler}><FaRegEye className=' w-5 h-5 text-black ' /></div>
                    </div>
                </div>
                <div className='absolute w-full h-full top-0 left-0 bg-[rgba(0_,0_,0_,0.3)] opacity-0 transition-all duration-500 overlay max-md:hidden'>
                    <div className="absolute w-fit h-fit top-3 left-0 text-white opacity-0 transition-all duration-700 translate-x-0 heart hover:text-sky-400 hover:border-sky-400 max-md:opacity-100 cursor-pointer" onClick={handleToggleWishlist}>
                        {existingItem ?
                            <IoMdHeart className=' w-6 h-6 text-red-600' /> :
                            <IoIosHeartEmpty className='w-6 h-6' />
                        }
                    </div>
                    <div className='absolute w-full h-fit gap-2 top-[45%] flex flex-col justify-center items-center opacity-0 transition-all duration-700 translate-y-0 btn'>
                        <button className='w-3/5 h-10 rounded-full text-gray-800 bg-white' onClick={quickViewHandler}>Quick view</button>
                        <button className='w-3/5 h-10 rounded-full text-gray-800 bg-white' onClick={addCartHandler}>Add cart</button>
                    </div>
                    <div className="absolute w-full h-fit bottom-0 font-medium text-white text-center opacity-0 transition-all duration-700 -translate-y-0 avail">S, M, L, XL</div>
                </div>
            </div>
            <div className='font-medium my-1'>{products.name}</div>
            <div className='text-gray-500'>₹{products.rate}.00</div>
            <div className='w-fit h-fit my-1'>
                <div className='w-6 h-6 rounded-full border-2 border-gray-400 bg-red-600'></div>
            </div>
        </div>
    )
}

export default Card