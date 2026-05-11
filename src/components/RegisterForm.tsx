"use client"

import { ArrowLeft, EyeIcon, EyeOff, Leaf, Loader2, Lock, LogIn, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import google from '@/assets/google.png'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

type propType = {
  previousStep: (s: number) => void
}

const RegisterForm = ({ previousStep }: propType) => {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await axios.post("/api/auth/register", {
        name, email, password
      })
      router.push('/login')
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const formValidation = name !== "" && email !== "" && password !== ""

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 flex items-center gap-2 text-green-700 hover:text-green-800 transition-all duration-300 cursor-pointer group"
        onClick={() => previousStep(1)}
      >
        <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-green-100 flex items-center justify-center group-hover:bg-green-50 transition-all shadow-sm">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span className="font-medium text-sm">Back</span>
      </motion.div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-50 border border-green-200 mb-4 shadow-lg shadow-green-100/50">
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-black text-green-800 tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
            Join SnapCart today
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Leaf className="w-5 h-5 text-green-500" />
            </motion.span>
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-xl shadow-green-100/30 p-8"
        >
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                <User className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500/50 focus:border-green-400 focus:bg-white transition-all duration-300 outline-none"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-300" />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500/50 focus:border-green-400 focus:bg-white transition-all duration-300 outline-none"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-colors duration-300" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your Password"
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3.5 pl-11 pr-11 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500/50 focus:border-green-400 focus:bg-white transition-all duration-300 outline-none"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </motion.div>

            {/* Register Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: formValidation && !loading ? 1.02 : 1 }}
              whileTap={{ scale: formValidation && !loading ? 0.98 : 1 }}
              disabled={!formValidation || loading}
              className={`w-full font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 mt-2 ${
                formValidation
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-green-500/25 cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Create Account</span>
                  <LogIn className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2">
              <span className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">or continue with</span>
              <span className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Google Button */}
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgb(249 250 251)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-gray-300 py-3.5 rounded-xl text-gray-700 font-semibold transition-all duration-300 shadow-sm"
            >
              <Image src={google} width={20} height={20} alt="google" className="w-5 h-5" />
              Continue with Google
            </motion.button>
          </form>
        </motion.div>

        {/* Sign In Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => router.push('/login')}
          className="cursor-pointer text-gray-500 mt-6 text-sm flex items-center justify-center gap-1.5 hover:text-green-600 transition-colors duration-300 group"
        >
          Already have an account?
          <span className="text-green-600 font-semibold group-hover:underline inline-flex items-center gap-1">
            Sign In
            <ArrowLeft className="w-3 h-3 rotate-180" />
          </span>
        </motion.p>
      </div>
    </div>
  )
}

export default RegisterForm