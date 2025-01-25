'use client'

import { motion } from "framer-motion";


export function Hero() {
    return (
      <div className="relative min-h-60 ">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80"></div>
        </div>
  
        {/* Content */}
        <div className="relative pt-32 pb-20 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Contract Management
              </span>
              {' '}with AI
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Automate, analyze, and manage your contracts with AI-powered insights.
              Join thousands of professionals using Contrease to streamline their agreements.
            </p>
  
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-cyan-500 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get Started Free →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }
  