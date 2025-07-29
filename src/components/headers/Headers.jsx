import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/images.png"

const Headers = () => {
  return (
      <header className='font-bold text-[20px] bg-blue-400'>
      <div className="container h-[80px] flex items-center  gap-8">
        <Link to={"/"}>
            <div className='w-[150px]'>
                <img className='rounded-2xl' src={Logo} alt="" />
            </div>
        </Link>
        <div className='flex flex-1 gap-[35px]'>
        <NavLink className={({isActive}) => `text-base text-[20px] ${isActive ? "text-white/60 underline": ""}`} to={"/"}>Home</NavLink>
        <NavLink className={({isActive}) => `text-base text-[20px] ${isActive ? "text-white/60 underline": ""}`} to={"/recipes"}>Food</NavLink>
        <NavLink className={({isActive}) => `text-base text-[20px] ${isActive ? "text-white/60 underline": ""}`} to={"/users"}>User</NavLink>
        </div>
        <NavLink to={"/sign-in"}>
        <div className=' px-[15px] py-[3px] rounded-[6px] bg-emerald-500'>
            <button className='text-white'>Login</button>
        </div>
        </NavLink>
      </div>
    </header>
  )
}

export default Headers
