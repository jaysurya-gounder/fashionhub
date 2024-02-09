import { Link, useNavigate } from "react-router-dom"
import { VscAccount } from "react-icons/vsc";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isSignIn } from "../Reducers/ControlReducer";
import { isUserFound } from "../Reducers/UsersReducers";


const SignIn = () => {
  const users = useSelector(state => state.users.data)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate()
  const div = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    if (email !== '') {
      document.querySelectorAll('.input')[0].style.borderColor = ''
      const userEmail = users.filter((item) => { return item.email === email })
      if (userEmail.length !== 0) {
        if (password !== '') {
          const userfound = userEmail.filter((item) => { return item.password === password })
          if (userfound.length !== 0) {
            dispatch(isUserFound(userfound))
            dispatch(isSignIn(true))
            nav('/')
          } else {
            div.current.innerHTML = 'Password incorrect'
            setTimeout(() => {
              div.current.innerHTML = ' '
            }, 2000)
          }
        } else {
          document.querySelectorAll('input')[1].style.borderColor = 'red'
        }

      } else {
        div.current.innerHTML = 'Account not found, Please create your account'
        setTimeout(() => {
          div.current.innerHTML = ''
        }, 2000)
      }
    } else {
      document.querySelectorAll('input')[0].style.borderColor = 'red'
    }
  }

  return (
    <section className="container h-screen flex items-center justify-center">
      <form className="w-full h-fit flex flex-col items-center md:w-1/4" onSubmit={submitHandler}>
        <h3 className="mb-10 text-4xl font-medium">Sign In</h3>
        <VscAccount className='w-28 h-28 mb-6' />
        <div ref={div} className="text-red-500 text-sm text-center w-full h-5 mb-5"></div>
        <input className="w-11/12 h-10 mb-5 ps-5 border border-gray-400 rounded-md input" type="email" onChange={(e) => { return setEmail(e.target.value), e.target.style.borderColor = '' }} placeholder="Email" />
        <input className="w-11/12 h-10 mb-5 ps-5 border border-gray-400 rounded-md input" type="password" onChange={(e) => { return setPassword(e.target.value), e.target.style.borderColor = '' }} placeholder="Password" />
        <button type="submit" className="w-11/12 h-10 mb-4 rounded-full font-medium bg-black text-white">Sign In</button>
        <Link to='/signup' className=" underline" >New Customer? Create an account</Link>
      </form>
    </section>
  )
}

export default SignIn