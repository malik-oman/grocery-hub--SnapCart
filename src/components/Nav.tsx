"use client"

import { LogOut, Package, Search, ShoppingCart, User, X } from 'lucide-react'
import mongoose from 'mongoose'
import { AnimatePresence,motion } from 'motion/react'
import { signOut } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'


interface IUser{
  _id?:mongoose.Types.ObjectId
  name:string
  email:string
  password?:string
  mobile?:string
  role:"user" | "deliveryBoy" | "admin"
  image?:string
}

const Nav = ({user}:{user:IUser}) => {

  const [open,setOpen] = useState(false)
  const [searchBarOpen,setSearchBarOpen] = useState(false)

  const profileDropDown = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const handleClickOutside = (e:MouseEvent) => {
        if (profileDropDown.current && !profileDropDown.current.contains(e.target as Node)) {
          setOpen(false)
        }
    }
      document.addEventListener("mousedown", handleClickOutside)
      return ()=>document.removeEventListener("mousedown", handleClickOutside)
  },[])

  return (
    <div className='w-[95%] fixed top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl shadow-2xl shadow-green-900/40 flex justify-between items-center h-20 px-4 md:px-8 z-50 backdrop-blur-md bg-opacity-95 border border-white/20'>

        <Link href={"/"} className='text-white font-extrabold text-2xl sm:text-3xl tracking-wide hover:scale-110 active:scale-95 transition-all duration-300 ease-out drop-shadow-lg'>
        SnapCart
        </Link>

        <form className='hidden md:flex items-center bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 w-1/2 max-w-lg shadow-lg hover:shadow-xl focus-within:shadow-xl focus-within:ring-2 focus-within:ring-green-300/50 transition-all duration-300 ease-out'>
        <Search className='text-gray-400 w-5 h-5 mr-3' />
        <input type="text" placeholder='Search groceries....' className='w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent' />
        </form>

        <div className='flex items-center gap-3 md:gap-5 relative'>

          <div className='bg-white/95 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-300 ease-out cursor-pointer md:hidden' onClick={()=>setSearchBarOpen((prev)=>!prev)} >
            <Search className='text-green-600 w-5 h-5'/>
          </div>


          <Link href={''} className='relative bg-white/95 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-300 ease-out group'>
          <ShoppingCart className='text-green-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300'/>
          <span className='absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md animate-pulse'>0</span>
          </Link>

          <div className='relative' ref={profileDropDown} >
          <div className='bg-white/95 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-300 ease-out cursor-pointer border-2 border-transparent hover:border-green-400'
          onClick={()=>setOpen(prev=>!prev)}
          >
            {user.image?<Image src={user.image} alt='user' fill className='object-cover rounded-full' />:<User className='text-green-600 w-5 h-5'/>}
          </div>
          <AnimatePresence>

            {open && 
            <motion.div
            initial={{opacity:0, y:-12, scale:0.9}}
            animate={{opacity:1, y:0, scale:1}}
            transition={{duration:0.25, ease:[0.25,0.46,0.45,0.94]}}
            exit={{opacity:0, y:-12, scale:0.9}}
            className='absolute right-0 mt-3 w-60 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-gray-100/80 p-2 z-50 overflow-hidden'
            >

              <div className='flex items-center gap-3 px-4 py-3 border-b border-gray-100'>
                <div className='w-10 h-10 relative rounded-full bg-green-50 flex items-center justify-center overflow-hidden border-2 border-green-200'>{user.image?<Image src={user.image} alt='user' fill className='object-cover rounded-full' />:<User className='text-green-600 w-5 h-5'/>}
                </div>
                <div>
                  <div className='text-gray-800 font-semibold text-sm'>{user.name}</div>
                  <div className='text-xs text-gray-400 capitalize'>{user.role}</div>
                </div>
              </div>

              <Link onClick={()=>setOpen(false)} href={""} className="flex items-center gap-3 px-3 py-2.5 hover:bg-green-50 rounded-xl text-gray-700 font-medium text-sm transition-colors duration-200 group">
              <Package className='w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-200'/>
              My Orders
              </Link>

                    <button
          className='flex items-center gap-3 w-full text-left px-3 py-2.5 hover:bg-red-50 rounded-xl text-gray-700 font-medium text-sm transition-colors duration-200 group'
          onClick={() => {
            setOpen(false)
            signOut({ callbackUrl: "/login" })
          }}
        >
          <LogOut className='w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-200' />
          Log Out
        </button>
              
            </motion.div> }
          </AnimatePresence>


            <AnimatePresence>
              {searchBarOpen
               && 
                <motion.div
                    initial={{opacity:0, y:-16, scale:0.95}}
            animate={{opacity:1, y:0, scale:1}}
            transition={{duration:0.25, ease:[0.25,0.46,0.45,0.94]}}
            exit={{opacity:0, y:-16, scale:0.95}}
            className='fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white/98 backdrop-blur-xl rounded-full shadow-2xl shadow-black/10 z-40 flex items-center px-5 py-3 border border-gray-100'
                >
                    <Search className='text-gray-400 w-5 h-5 mr-3'/>
                    <form className='grow'>
                      <input type="text" className='w-full outline-none text-gray-700 bg-transparent'
                      placeholder='Search Groceries....'
                      />
                    </form>
                    <button onClick={()=>setSearchBarOpen(false)} className='p-1 hover:bg-gray-100 rounded-full transition-colors duration-200'>
                      <X className='text-gray-400 w-5 h-5'/>
                    </button>
                </motion.div>
              }
              </AnimatePresence>  

          </div>
        </div>
    </div>
  )
}

export default Nav