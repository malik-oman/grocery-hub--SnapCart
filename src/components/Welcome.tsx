"use client"

import React from 'react'
import { motion } from "motion/react"
import { ArrowRight, ShoppingBasket, Bike, Sparkles } from 'lucide-react'

type propType = {
  nextStep: (s: number) => void
}

const Welcome = ({ nextStep }: propType) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-white" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-2"
        >
          <div className="relative">
            <ShoppingBasket className="w-12 h-12 text-green-600" />
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-green-700 tracking-tight">
            Snapcart
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="h-px w-8 bg-green-300" />
          <span className="text-green-600 font-medium text-sm tracking-widest uppercase">
            Fresh & Fast
          </span>
          <div className="h-px w-8 bg-green-300" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-lg md:text-xl max-w-md leading-relaxed mb-10"
        >
          Your one-stop destination for{' '}
          <span className="text-green-700 font-semibold">fresh groceries</span>,{' '}
          <span className="text-green-700 font-semibold">organic produce</span>, and{' '}
          <span className="text-green-700 font-semibold">daily essentials</span>{' '}
          delivered right to your doorstep.
        </motion.p>

        {/* Icons Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-8 md:gap-14 mb-12"
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-lg shadow-green-100/50 border border-green-100">
              <ShoppingBasket className="w-12 h-12 md:w-16 md:h-16 text-green-600" />
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Shop</span>
          </motion.div>

          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-6 h-6 text-gray-300" />
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center shadow-lg shadow-orange-100/50 border border-orange-100">
              <Bike className="w-12 h-12 md:w-16 md:h-16 text-orange-500" />
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Deliver</span>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => nextStep(2)}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-green-500/25 transition-all duration-300"
        >
          <span className="text-lg">Get Started</span>
          <motion.div
            className="bg-white/20 rounded-full p-1"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-6 mt-8"
        >
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Free Delivery</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Fresh Guarantee</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Welcome