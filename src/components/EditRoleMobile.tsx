"use client"

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Bike, User, UserCog, Check, Smartphone } from 'lucide-react'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const EditRoleMobile = () => {
  const [roles, setRoles] = useState([
    { id: "admin", label: "Admin", icon: UserCog, desc: "Manage everything", color: "from-blue-500 to-indigo-600" },
    { id: "user", label: "User", icon: User, desc: "Shop & order", color: "from-green-500 to-emerald-600" },
    { id: "deliveryBoy", label: "Delivery Boy", icon: Bike, desc: "Deliver orders", color: "from-orange-500 to-amber-600" },
  ])

  const [selectedRole, setSelectedRole] = useState("")
  const [mobile, setMobile] = useState("")
  const {update} = useSession()
  const router = useRouter()

  const handleEdit = async () => {
    try {
      const result = await axios.post("/api/user/edit-role-mobile", {
        role: selectedRole,
        mobile
      })
      await update({role:selectedRole})
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const isValid = mobile.length === 13 && selectedRole

  return (
    <div className="flex flex-col items-center min-h-screen p-6 w-full relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white">
      
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-50 border border-green-200 mb-4 shadow-lg shadow-green-100/50">
            <UserCog className="w-7 h-7 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-green-800 tracking-tight mb-2">
            Select Your Role
          </h1>
          <p className="text-gray-500 font-medium">
            Choose how you want to use SnapCart
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
          {roles.map((role, index) => {
            const Icon = role.icon
            const isSelected = selectedRole === role.id

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedRole(role.id)}
                className={`relative flex flex-col items-center justify-center w-full md:w-40 h-44 rounded-2xl border-2 cursor-pointer transition-all duration-300 overflow-hidden ${
                  isSelected 
                    ? "border-green-500 bg-white shadow-xl shadow-green-200/50" 
                    : "border-gray-200 bg-white/80 hover:border-green-300 hover:shadow-lg backdrop-blur-sm"
                }`}
              >
                {/* Selected Indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                )}

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-3 shadow-lg ${isSelected ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <span className={`font-bold text-lg ${isSelected ? 'text-green-800' : 'text-gray-700'}`}>
                  {role.label}
                </span>
                <span className="text-xs text-gray-400 mt-1 font-medium">
                  {role.desc}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full max-w-sm mt-10"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg shadow-green-100/20 p-6">
            <label htmlFor="mobile" className="flex items-center gap-2 text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">
              <Smartphone className="w-4 h-4 text-green-500" />
              Mobile Number
            </label>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <span className="text-gray-400 font-medium">+</span>
              </div>
              <input
                type="tel"
                id="mobile"
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3.5 pl-8 pr-4 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500/50 focus:border-green-400 focus:bg-white transition-all duration-300 outline-none font-medium"
                placeholder="92 300 1234567"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Enter 13 digits including country code
            </p>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={isValid ? { scale: 0.9, y: -2 } : {}}
          whileTap={isValid ? { scale: 0.97 } : {}}
          disabled={!isValid}
          onClick={handleEdit}
          className={`inline-flex items-center justify-center gap-2 font-bold py-4 px-10 rounded-2xl shadow-xl transition-all duration-300 mt-10 w-full max-w-sm ${
            isValid
              ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-green-500/25 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <span className="text-lg">Continue</span>
          <motion.div
            animate={isValid ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  )
}

export default EditRoleMobile