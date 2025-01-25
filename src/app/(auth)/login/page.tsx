'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>
          
          <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg mb-6 flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400 bg-transparent">Or continue with</span>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-400">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="/reset-password" className="text-blue-400 hover:text-blue-300">
                Forgot password?
              </Link>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
