"use client"

import { Apple, Carrot, Leaf, ShoppingBasketIcon, Smartphone, Truck } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "motion/react"
import Image from 'next/image'


const HeroSection = () => {

const slides = [
  {
    id: 1,
    icon: <Leaf className='w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg' />,
    title: "Fresh Organic Groceries",
    subtitle: "Farm-fresh fruits, vegetables, and daily essentials delivered straight to your doorstep",
    btnText: "Shop Now",
    bg:"https://media.istockphoto.com/id/1155240408/photo/table-filled-with-large-variety-of-food.jpg?s=612x612&w=0&k=20&c=uJEbKmR3wOxwdhQR_36as5WeP6_HDqfU-QmAq63OVEE="
  },
  {
    id: 2,
    icon: <Truck className='w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg' />,
    title: "Lightning Fast Delivery",
    subtitle: "Same-day delivery with real-time tracking — your order arrives fresh within 60 minutes",
    btnText: "Track Order",
    bg:"https://plus.unsplash.com/premium_photo-1664476929990-cd773d497717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZyZXNoJTIwZ3JvY2VyaWVzJTIwZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    icon: <Smartphone className='w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg' />,
    title: "Shop on the Go",
    subtitle: "Seamless mobile experience — browse, order, and track everything from your smartphone",
    btnText: "Get Started",
    bg:"https://media.istockphoto.com/id/1272443174/photo/beautiful-smiling-young-asian-woman-grocery-shopping-online-with-mobile-app-device-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=uMuwZ38_vccFJAk5cwcXh7wZVtOKE56T2rJwHLfrzCI="
  }
];

const [current,setCurrent] = useState(0)

useEffect(()=>{
  const timer = setInterval(()=>{
    setCurrent(prev => (prev + 1) % slides.length)
  },4000)
  return ()=>clearInterval(timer)
},[])

  return (
    <div className='relative w-[98%] mx-auto mt-32 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/40 border border-white/20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700'>
      
      {/* Animated Background Orbs */}
      <div className='absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-[100px] animate-pulse' />
      <div className='absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-300/20 rounded-full blur-[100px] animate-pulse' style={{animationDelay:'2s'}} />

      <div className='relative h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16'>
        
        {/* Left Content */}
        <motion.div
        initial={{opacity:0, x:-60}}
        animate={{opacity:1, x:0}}
        transition={{duration:1, ease:[0.25,0.46,0.45,0.94]}}
        className='flex flex-col items-start justify-center gap-5 sm:gap-6 max-w-xl lg:max-w-2xl z-10'
        >
           <motion.div 
             initial={{scale:0, opacity:0}}
             animate={{scale:1, opacity:1}}
             transition={{duration:0.6, ease:[0.25,0.46,0.45,0.94], delay:0.2}}
             className='bg-white/15 backdrop-blur-xl border border-white/25 p-3 sm:p-4 rounded-2xl shadow-2xl shadow-black/10'
           >
             {slides[current].icon}
           </motion.div> 
           
           <motion.div
             initial={{y:40, opacity:0}}
             animate={{y:0, opacity:1}}
             transition={{duration:0.8, ease:[0.25,0.46,0.45,0.94], delay:0.3}}
           >
             <span className='text-white/80 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3 block'>Premium Quality</span>
             <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] drop-shadow-lg'>
               {slides[current].title}
             </h1>
           </motion.div>
           
           <motion.p 
             initial={{y:30, opacity:0}}
             animate={{y:0, opacity:1}}
             transition={{duration:0.8, ease:[0.25,0.46,0.45,0.94], delay:0.4}}
             className='text-sm sm:text-base md:text-lg text-white/80 max-w-md sm:max-w-lg leading-relaxed'
           >
             {slides[current].subtitle}
           </motion.p>
           
           <motion.button
           initial={{y:20, opacity:0}}
           animate={{y:0, opacity:1}}
           transition={{duration:0.6, ease:[0.25,0.46,0.45,0.94], delay:0.5}}
           whileHover={{scale:1.05, y:-2}}
           whileTap={{scale:0.98}}
           className='mt-2 bg-white text-green-700 hover:bg-green-50 font-bold px-7 sm:px-9 py-3 sm:py-4 rounded-full shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300 ease-out flex items-center gap-2.5 text-sm sm:text-base group'
           >
            <ShoppingBasketIcon className='w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300' />
            {slides[current].btnText}
           </motion.button>

           {/* Stats */}
           <motion.div
             initial={{y:20, opacity:0}}
             animate={{y:0, opacity:1}}
             transition={{duration:0.6, delay:0.6}}
             className='flex gap-6 sm:gap-8 mt-4 sm:mt-6'
           >
             <div>
               <div className='text-xl sm:text-2xl font-bold text-white drop-shadow-md'>10K+</div>
               <div className='text-xs text-white/60'>Products</div>
             </div>
             <div className='w-px bg-white/20' />
             <div>
               <div className='text-xl sm:text-2xl font-bold text-white drop-shadow-md'>50K+</div>
               <div className='text-xs text-white/60'>Customers</div>
             </div>
             <div className='w-px bg-white/20' />
             <div>
               <div className='text-xl sm:text-2xl font-bold text-white drop-shadow-md'>4.9</div>
               <div className='text-xs text-white/60'>Rating</div>
             </div>
           </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{opacity:0, x:60, rotate:5}}
          animate={{opacity:1, x:0, rotate:0}}
          transition={{duration:1, ease:[0.25,0.46,0.45,0.94], delay:0.3}}
          className='relative w-full lg:w-[42%] h-[280px] sm:h-[380px] md:h-[420px] lg:h-[480px]'
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{opacity:0, scale:0.9, y:20}}
              animate={{opacity:1, scale:1, y:0}}
              exit={{opacity:0, scale:0.95, y:-20}}
              transition={{duration:0.8, ease:[0.25,0.46,0.45,0.94]}}
              className='absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border-2 border-white/30'
            >
              <Image 
                src={slides[current]?.bg} 
                fill 
                alt='slide' 
                priority 
                unoptimized
                className='object-cover hover:scale-105 transition-transform duration-700 ease-out' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
            </motion.div>
          </AnimatePresence>

          {/* Floating Badge */}
          <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.8}}
            className='absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/20 backdrop-blur-xl border border-white/30 p-3 sm:p-4 rounded-2xl shadow-xl'
          >
            <div className='flex items-center gap-2 sm:gap-3'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg'>
                <Carrot className='w-4 h-4 sm:w-5 sm:h-5 text-green-600' />
              </div>
              <div>
                <div className='text-white text-xs sm:text-sm font-bold'>Fresh Daily</div>
                <div className='text-white/70 text-[10px] sm:text-xs'>100% Organic</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Dots */}
      <div className='absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10'>
        {slides.map((_,index)=>(
          <button 
            key={index} 
            onClick={()=>setCurrent(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
            index === current ? "bg-white w-6 sm:w-8 shadow-lg shadow-white/50" : "bg-white/30 w-2 sm:w-2.5 hover:bg-white/50"}`} 
          />
        ))}
      </div>

    </div>
  )
}

export default HeroSection