import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Mens from "./Pages/Mens"
import Womens from "./Pages/Womens"
import Watches from "./Pages/Watches"
import Accessories from "./Pages/Accessories"
import Footwear from "./Pages/Footwear"
import SignOut from "./Pages/SignOut"
import Detail from "./Pages/Detail"
import AddCart from "./Pages/AddCart"
import AddWishlist from "./Pages/AddWishlist"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userData } from "./Reducers/UsersReducers"
import { footwears, mens, trending, watches, womens } from "./Reducers/ProductsReducer"
import ScrollToTop from "./Data/ScrollToTop"

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(mens())
        dispatch(trending())
        dispatch(userData());
        dispatch(womens());
        dispatch(watches());
        dispatch(footwears());

    }, [dispatch])
    return (
        <div>
            <BrowserRouter>
            <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mens" element={<Mens />} />
                    <Route path="/womens" element={<Womens />} />
                    <Route path="/watches" element={<Watches />} />
                    <Route path="/accessories" element={<Accessories />} />
                    <Route path="/footwears" element={<Footwear />} />
                    <Route path="/product/:pdtId" element={<Detail />} />
                    <Route path="/addcart" element={<AddCart />} />
                    <Route path="/addwishlist" element={<AddWishlist />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signout" element={<SignOut />} />
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default App
