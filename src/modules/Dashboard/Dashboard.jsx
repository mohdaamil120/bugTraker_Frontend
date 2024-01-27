import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import {io} from "socket.io-client"

export default function Dashboard() {
    const [socket, setSocket] = useState(null)

    useEffect(()=>{
        // setSocket(io('http://localhost:8080'))
    },[])

    const contacts = [
        {
            name:"John",
            status:"Available",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
        {
            name:"Mary",
            status:"Available",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
        {
            name:"Alexander",
            status:"Available",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
        {
            name:"Adam",
            status:"Available",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
        {
            name:"Alex",
            status:"Available",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
       
    ]

    const people = [
        {
            name:"John",
            email:"john@gmail.com",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
        {
            name:"Mary",
            email:"mary@gmail.com",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
        {
            name:"Alexander",
            email:"alexander@gmail.com",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
        {
            name:"Adam",
            email:"adam@gmail.com",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
        {
            name:"Alex",
            email:"alex@gmail.com",
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"
        },
       
    ]

  return (
    <div className='w-screen  flex'>
        <div className='overflow-scroll w-[25%] h-screen bg-secondary'>
            <div className='flex items-center my-6 mx-14'>
                <div className='border border-primary p-[2px] rounded-full'><img width={50} height={50} src="https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png" /></div>
                <div className='ml-2'>
                   <h3 className='text-2xl'>Alan</h3>
                   <p className='text-lg font-light'>My Account</p>
                </div>
            </div>
            <hr />
            <div className='mx-14 mt-10'>
                <div className='text-primary text-lg'>Message</div>
                <div>
                    {
                        contacts.map((item,indx) => {
                            return(
                                <div key={indx+1} className='flex items-center py-6 border-b border-b-gray-300'>
                                    <div className='cursor-pointer flex items-center'>
                                        <div className='border p-[2px] rounded-full'><img width={40} height={40} src={item.img} /></div>
                                        <div className='ml-8'>
                                        <h3 className='text-lg'>{item.name}</h3>
                                        <p className='text-sm font-light text-gray-600'>{item.status}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className='w-[50%]  h-screen bg-white'>
            <div className='w-[75%] bg-secondary h-[60px] my-1 shadow-md mx-auto rounded-full flex items-center px-14'>
                <div className='cursor-pointer border border-primary p-[2px] rounded-full'><img src="https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small/cute-boy-avatar-png.png"  width={45} height={45} /></div>
                <div className='ml-6'>
                   <h3 className='text-lg'>Alexander</h3>
                   <p className='text-sm font-light text-gray-600'>Online</p>
                </div>
                <div className='cursor-pointer ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 9l5 -5" />
                        <path d="M16 4l4 0l0 4" />
                        {/* <line xl="15" yl="9" x2="20" y2="4"/> */}
                        <polyline points='16 4 20 4 20 8'/>
                    </svg>
                </div>
            </div>
            <div className='h-[75%] w-full overflow-scroll border-b'>
                <div className=' p-14'>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4'>
                        Lorem tempore.
                    </div>
                    <div className='  max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.quia suscipit d Deleniti quam vel nisi quaerat aperiam?
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4'>
                        Lorem tempore.
                    </div>
                    <div className='  max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.quia suscipit d Deleniti quam vel nisi quaerat aperiam?
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4'>
                        Lorem tempore.
                    </div>
                    <div className='  max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.quia suscipit d Deleniti quam vel nisi quaerat aperiam?
                    </div>
                </div>
            </div>
            <div className='mt-[-50px] p-14 w-full flex items-center'>
                <Input placeholder='Type a message...' className='w-[430px] p-4 border-0 shadow-md bg-light rounded-full outline-none focus:ring-0 focus:border-0'/>
                <div className='ml-20 mr-12 p-2 cursor-pointer bg-light rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 14l11 -11" />
                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                    </svg>
                </div>
                <div className=' p-2 cursor-pointer bg-light rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                    </svg>
                </div>
            </div>
        </div>
        <div className=' overflow-scroll w-[25%]  h-screen bg-light px-8 py-16'>
            <div className='text-primary text-lg'>People</div>
            <div>
                {
                    people.length>0 ? 
                        people.map((item,indx) => {
                            return (
                                <div key={indx+1} className='flex items-center py-8 border-b border-b-gray-300 '>
                                    <div className='cursor-pointer flex items-center'>
                                        <div><img src={item.img} className='w-[40px] h-[40px] rounded-full p-[2px] border border-primary' alt="" /></div>
                                        <div className='ml-6'>
                                            <h3 className='text-lg font-semibold'>{item?.name}</h3>
                                            <p className='text-sm font-light text-gray-600'>{item?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div className='text-center text-lg font-semibold mt-24'>No Conversation</div>
                }
            </div>                   
        </div>
    </div>
  )
}
