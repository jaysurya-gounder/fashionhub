import { Link, useNavigate } from "react-router-dom"
import { VscAccount } from "react-icons/vsc";
import { useRef, useState } from "react";
import { addUser } from "../Reducers/UsersReducers";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const users = useSelector(state => state.users.data)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const nav = useNavigate()
  const div = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      document.querySelectorAll('input')[0].style.borderColor = 'red'
      document.querySelectorAll('input')[1].style.borderColor = 'red'
      document.querySelectorAll('input')[2].style.borderColor = 'red'
    }
    else {
      const alreadyExist = users.filter((data) => { return data.email === email })
      if (alreadyExist.length === 0) {
        dispatch(addUser({ name: name, email: email.toLowerCase(), password: password }))
        nav('/signin')
      } else {
        div.current.innerHTML = 'User already exist'
        setTimeout(() => {
          div.current.innerHTML = ' '
        }, 2000)
      }
    }
  }
  return (
    <section className="container h-screen flex items-center justify-center">
      <form className="w-full h-fit flex flex-col items-center md:w-1/4" onSubmit={submitHandler}>
        <h3 className="mb-10 text-4xl font-medium">Sign up</h3>
        <VscAccount className='w-28 h-28 mb-10' />
        <div ref={div} className="text-red-500 text-sm text-center w-full h-5 mb-5"></div>
        <input className="w-11/12 h-10 mb-5 ps-5 border border-gray-400 rounded-md"
          onChange={(e) => { return setName(e.target.value), e.target.style.borderColor = '' }}
          placeholder="Name" type="text" />
        <input className="w-11/12 h-10 mb-5 ps-5 border border-gray-400 rounded-md"
          onChange={(e) => { return setEmail(e.target.value), e.target.style.borderColor = '' }}
          placeholder="Email" type="email" />
        <input className="w-11/12 h-10 ps-5 mb-5 border border-gray-400 rounded-md" onChange={(e) => { return setPassword(e.target.value), e.target.style.borderColor = '' }} type="password" placeholder="Password" />
        <button type="submit" className="w-11/12 h-10 mb-4 rounded-full font-medium bg-black text-white">Sign up</button>
        <Link to='/signin' className="underline" >Already have an account?</Link>
      </form>
    </section>
  )
}

export default SignUp
