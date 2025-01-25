'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8"
        >
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Reset Password</h2>
              <p className="text-gray-400 text-center mb-8">
                Enter your email address and we'll send you instructions to reset your password.
              </p>

              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault()
                setIsSubmitted(true)
              }}>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Check Your Email</h3>
              <p className="text-gray-400 mb-6">
                We've sent password reset instructions to {email}
              </p>
            </motion.div>
          )}

          <div className="mt-6 text-center">
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
