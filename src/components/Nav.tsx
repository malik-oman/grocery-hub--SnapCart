"use client"

import { BoxesIcon, ClipboardCheck, LogOut, LogOutIcon, Menu, Package, PlusCircle, Search, ShoppingCart, User, X } from 'lucide-react'
import mongoose from 'mongoose'
import { AnimatePresence,motion } from 'motion/react'
import { signOut } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'


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
  const [menuOpen,setMenuOpen] = useState(false)

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

  const sideBar = menuOpen?createPortal(
      <AnimatePresence>
        <motion.div 
        initial={{x:100,opacity:0}}
        animate={{x:0,opacity:1}}
        exit={{x:-100,opacity:0}}
        transition={{duration:0.4}}
        className='fixed top-0 right-0 h-full w-[75%] sm:w-[60%] z-[9999] bg-gradient-to-b from-green-900 via-slate-800 to-green-950 shadow-[0_0_60px_-10px_rgba(0,0,0,0.5)] flex flex-col p-6 text-white'
        >
          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25'>
                <ClipboardCheck className='w-5 h-5 text-white' />
              </div>
              <h1 className='font-bold text-xl tracking-wide text-white/95'>Admin Panel</h1>
            </div>
            <button onClick={()=>setMenuOpen(false)} className='w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-red-400 transition-all duration-300 cursor-pointer'>
              <X className='w-5 h-5' />
            </button>
          </div>
          
          <div className='flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm'>
            <div className='relative w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-400/40 shadow-lg shadow-indigo-500/10'>
              {user.image ? (
                <Image src={user.image} alt='user' fill className='object-cover rounded-full' />
              ) : (
                <div className='w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center'>
                  <User className='text-white w-6 h-6' />
                </div>
              )}
            </div>
            <div>
              <h2 className='text-lg font-semibold text-white tracking-tight'>{user.name}</h2>
              <p className='text-xs text-indigo-300/80 capitalize tracking-wider font-medium'>{user.role}</p>
            </div>
          </div>

          <div className='flex flex-col gap-2 font-medium mt-8'>
            <Link className='flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.04] hover:border-white/[0.1] hover:translate-x-1 transition-all duration-300 group' href={"/admin/add-grocery"}>
              <div className='w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300'>
                <PlusCircle className='w-5 h-5 text-emerald-400' />
              </div>
              <span className='text-white/90 group-hover:text-white transition-colors'>Add Grocery</span>
            </Link>
            
            <Link className='flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.04] hover:border-white/[0.1] hover:translate-x-1 transition-all duration-300 group' href={""}>
              <div className='w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300'>
                <BoxesIcon className='w-5 h-5 text-blue-400' />
              </div>
              <span className='text-white/90 group-hover:text-white transition-colors'>View Grocery</span>
            </Link>
            
            <Link className='flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.04] hover:border-white/[0.1] hover:translate-x-1 transition-all duration-300 group' href={""}>
              <div className='w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300'>
                <ClipboardCheck className='w-5 h-5 text-amber-400' />
              </div>
              <span className='text-white/90 group-hover:text-white transition-colors'>Manage Orders</span>
            </Link>
          </div>
          
          <div className='my-6 border-t border-white/[0.08]'></div>
          
          <div className='flex items-center gap-4 text-red-400/90 font-medium mt-auto p-4 rounded-xl bg-red-500/[0.05] hover:bg-red-500/10 border border-red-500/[0.08] hover:border-red-500/20 transition-all duration-300 cursor-pointer group' onClick={async () => await signOut({callbackUrl:"/"})}>
            <div className='w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300'>
              <LogOutIcon className='w-5 h-5 text-red-400' />
            </div>
            <span className='group-hover:text-red-300 transition-colors'>Log out</span>
          </div>

        </motion.div>
      </AnimatePresence>,document.body
  ):null


  return (
    <div className='w-[95%] fixed top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl shadow-2xl shadow-green-900/40 flex justify-between items-center h-20 px-4 md:px-8 z-50 backdrop-blur-md bg-opacity-95 border border-white/20'>

        <Link href={"/"} className='text-white font-extrabold text-2xl sm:text-3xl tracking-wide hover:scale-110 active:scale-95 transition-all duration-300 ease-out drop-shadow-lg'>
        SnapCart
        </Link>

        {user.role=="user" && 
         <form className='hidden md:flex items-center bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 w-1/2 max-w-lg shadow-lg hover:shadow-xl focus-within:shadow-xl focus-within:ring-2 focus-within:ring-green-300/50 transition-all duration-300 ease-out'>
        <Search className='text-gray-400 w-5 h-5 mr-3' />
        <input type="text" placeholder='Search groceries....' className='w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent' />
        </form>
        }

       

        <div className='flex items-center gap-3 md:gap-5 relative'>

          {user.role=="user" && <>
          <div className='bg-white/95 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-300 ease-out cursor-pointer md:hidden' onClick={()=>setSearchBarOpen((prev)=>!prev)} >
            <Search className='text-green-600 w-5 h-5'/>
          </div>


          <Link href={''} className='relative bg-white/95 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-300 ease-out group'>
          <ShoppingCart className='text-green-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300'/>
          <span className='absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md animate-pulse'>0</span>
          </Link>
          </>}

          {user.role=="admin" && <>
            <div className='hidden md:flex items-center gap-3'>
              <Link className='flex items-center gap-2.5 bg-white/95 backdrop-blur-sm text-slate-700 font-semibold px-5 py-2.5 rounded-full hover:bg-white hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group' href={"/admin/add-grocery"}>
                <div className='w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors'>
                  <PlusCircle className='w-4 h-4 text-emerald-600' />
                </div>
                Add Grocery
              </Link>
              
              <Link className='flex items-center gap-2.5 bg-white/95 backdrop-blur-sm text-slate-700 font-semibold px-5 py-2.5 rounded-full hover:bg-white hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group' href={""}>
                <div className='w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors'>
                  <BoxesIcon className='w-4 h-4 text-blue-600' />
                </div>
                View Grocery
              </Link>
              
              <Link className='flex items-center gap-2.5 bg-white/95 backdrop-blur-sm text-slate-700 font-semibold px-5 py-2.5 rounded-full hover:bg-white hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group' href={""}>
                <div className='w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors'>
                  <ClipboardCheck className='w-4 h-4 text-amber-600' />
                </div>
                Manage Orders
              </Link>
            </div>
            
            <div className='md:hidden w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer border border-white/20' onClick={()=>setMenuOpen(prev=>!prev)}>
              <Menu className='text-white w-5 h-5' />
            </div>
          </>
          }

          

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

              {user.role=="user" &&    <Link onClick={()=>setOpen(false)} href={""} className="flex items-center gap-3 px-3 py-2.5 hover:bg-green-50 rounded-xl text-gray-700 font-medium text-sm transition-colors duration-200 group">
              <Package className='w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-200'/>
              My Orders
              </Link>}

           

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
          {sideBar}
    </div>
  )
}

export default Nav