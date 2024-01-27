import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const handleLogout=()=>{
    localStorage.clear()
  }

  return (
    <div>
        <nav>
            <ul className='flex justify-center items-center bg-slate-200 gap-40'>
                <Link to={"/"}><li className=' cursor-pointer mb-3 mt-3 text-2xl'>Chat</li></Link>
                <Link to={"/tracker"}><li className='cursor-pointer mb-3 mt-3 text-2xl'>Tracker</li></Link>
                <Link to={"/signin"}><li className='cursor-pointer mb-3 mt-3 text-2xl'>Login</li></Link>
                <Link to={"/signin"}><li onClick={handleLogout} className='cursor-pointer mb-3 mt-3 text-2xl'>Logout</li></Link>
            </ul>
        </nav>
    </div>
  )
}
