'use client'

import { motion } from "framer-motion";


export function Hero() {
    return (
      <div className="relative min-h-screen">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Contract Management
              </span>
              {' '}with AI
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Automate, analyze, and manage your contracts with AI-powered insights.
              Join thousands of professionals using Contrease to streamline their agreements.
            </p>
  
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-cyan-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get Started Free →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
  
            {/* Stats */}
            {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                ['1M+', 'Contracts Analyzed'],
                ['10k+', 'Active Users'],
                ['99%', 'Satisfaction Rate']
              ].map(([stat, label]) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat}</div>
                  <div className="text-gray-400">{label}</div>
                </div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    )
  }
  