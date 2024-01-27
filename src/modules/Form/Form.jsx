import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function Form({ isSignInPage = true}) {

  const [data,setData] = useState({
    ...(!isSignInPage && {
      name:"",
      avatar:"",
    }),
    email:"",
    password:""
  })

  const navigate=useNavigate()

  const handleSubmit = async(e)=>{
    console.log("Data:",data)
    e.preventDefault()
    const res = await fetch(`https://bug-tracker-1s6c.onrender.com/users/${isSignInPage ? "login":"register"}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })

    if(res.status === 202 ){
      alert("Please Register first you are not a authenticated")
    }

    else if(res.status === 400 ){
      alert("Invalid Cradiantials")
    }
    else {
      const resData = await res.json()
      console.log("resData:",resData)
      if(resData.token){
        localStorage.setItem("user:token",resData.token)
        localStorage.setItem("user:details",JSON.stringify(resData.user))
        navigate("/")
      }
    }
  }

  return (
    <div className='bg-light h-screen flex items-center justify-center'>
      <div className='bg-white w-[600px] h-[550px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <div className='text-4xl font-extrabold'>Welcome {isSignInPage && "Back"}</div>
        <div className='text-xl font-light mb-2'>{isSignInPage ? "Sign in to get explored":"Sign up now to get started"}</div>
        <form className='flex flex-col items-center w-full' onSubmit={(e)=> handleSubmit(e)}>
          { !isSignInPage &&  <Input lable='Avatar' name='avatar' placeholder='Url...' className='mb-6 w-[75%]' value={data.avatar} onChange={(e) => setData({ ...data, avatar: e.target.value })}/>}
          { !isSignInPage &&  <Input lable='Full Name' name='name' placeholder='Enter your full name' className='mb-6 w-[75%]' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}/>}
          <Input lable='Email address' type='email' name='email' placeholder='Enter your full email' className='mb-6 w-[75%]' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}/>
          <Input lable='Password' type='password' name='password' placeholder='Enter your password' className='mb-10 w-[75%]' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>
          <Button label={isSignInPage ?"Sign in":"Sign up"} type='submit' className='w-[75%] mb-2' />
        </form>
      
        <div>
         {isSignInPage ? "Did'nt have an account ":"Already have an account?"} <span onClick={()=>navigate(`/${isSignInPage ?"signup":"signin"}`)} className='text-primary cursor-pointer underline'>{isSignInPage?"Sign up":"Sign in"}</span>
        </div>
      </div>
    </div>
  )
}
