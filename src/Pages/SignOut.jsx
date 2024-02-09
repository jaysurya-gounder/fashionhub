import { VscAccount } from "react-icons/vsc"
import { useNavigate } from "react-router-dom"
import { isSignIn } from "../Reducers/ControlReducer"
import { useDispatch, useSelector } from "react-redux"

const SignOut = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [usersFound] = useSelector(state => state.users.userfound)
    const clickHandler = () => {
        dispatch(isSignIn(false))
        nav('/')
    }
    return (
        <section className="container h-screen flex items-center justify-center">
            <div className="w-full h-fit flex flex-col items-center">
                <h3 className="mb-10 text-4xl font-medium">Sign Out</h3>
                <VscAccount className='w-28 h-28 mb-6' />
                <div className="w-11/12 h-10 mb-5 text-center text-3xl font-medium md:w-1/4">Welcome, <span className="text-red-600">{ usersFound.name }</span></div>
                <button className="w-11/12 h-10 mb-4 rounded-full font-medium bg-black text-white md:w-1/4" onClick={clickHandler}>SignOut</button>
            </div>
        </section>
    )
}

export default SignOut
