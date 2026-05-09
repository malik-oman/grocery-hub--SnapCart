import { ArrowLeft, EyeIcon, EyeOff, Leaf, Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import {motion} from 'motion/react'


type propType={
  previousStep:(s:number)=>void
}

const RegisterForm = ({previousStep}:propType) => {

 const [name,setName] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")




  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>

        <div className='absolute top-6 left-6 flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors cursor-pointer'
        onClick={()=>previousStep(1)}
        >
          <ArrowLeft className='w-5 h-5'/>
          <span className='font-medium'>Back</span>
        </div>

        <motion.h1
        initial={{
          y:-10,
          opacity:0
        }}
        animate={{
          y:0,
          opacity:1
        }}
        transition={{
          duration:0.5
        }}
        className='text-4xl font-extrabold text-green-700 mb-2' >Create Account</motion.h1>
          <p className='text-gray-600 mb-8 flex items-center gap-2 font-semibold'>Join SnapCart today <Leaf className='w-5 h-5 text-green-600' /></p>

          {/* LOGIN FORM======================================= */}

          <motion.form
           initial={{
         
          opacity:0
        }}
        animate={{
        
          opacity:1
        }}
        transition={{
          duration:0.5
        }}
          className='flex flex-col gap-5 w-full max-w-sm'>

            <div className='relative'>
              <User className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
              <input type="text" placeholder=' Your Name...' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none' 
              onChange={(e)=>setName(e.target.value)}
              value={name}
              />
            </div>

            
            <div className='relative'>
              <Mail className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
              <input type="text" placeholder=' your email...' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none' 
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              />
            </div>

            
            <div className='relative'>
              <Lock className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
              <input type='password' placeholder=' your password...' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none' 
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              />
             </div>

              {/* BUTTON==========================REGISTER======================= */}
           {
            (()=>{
                const formValidation = name!=="" && email!=="" && password!==""
              return <button className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 ${formValidation ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"} `}>
                Register
              </button>
            })()
           }

          </motion.form>
    </div>
  )
}

export default RegisterForm