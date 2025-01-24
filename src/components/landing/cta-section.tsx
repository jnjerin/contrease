// export function CTASection() {
//   return (
//     <section className="bg-primary-900 text-white py-20">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold mb-6">
//           Ready to Transform Your Contract Management?
//         </h2>
//         <p className="text-xl mb-8 max-w-2xl mx-auto">
//           Join thousands of professionals who are already using Contrease to streamline their agreement processes.
//         </p>
//         <div className="flex justify-center gap-6">
//           <button className="bg-secondary-500 hover:bg-secondary-600 px-8 py-4 rounded-lg font-semibold text-lg">
//             Start Free Trial
//           </button>
//           <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900">
//             Schedule Demo
//           </button>
//         </div>
//         <p className="mt-6 text-sm opacity-80">
//           No credit card required • 14-day free trial • Full access
//         </p>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import { motion } from 'framer-motion'

// export function CTASection() {
//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background with gradient and pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80"></div>
//       </div>

//       <div className="container mx-auto px-6 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <span className="text-cyan-400 font-semibold text-lg mb-4 block">
//             Ready to Get Started?
//           </span>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Transform Your Contract Management Today
//           </h2>
          
//           <p className="text-xl text-gray-300 mb-10">
//             Join thousands of professionals using Contrease to streamline their agreements and unlock valuable insights.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group">
//               Start Free Trial
//               <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
//             </button>
//             <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
//               Schedule Demo
//             </button>
//           </div>

//           {/* Trust Indicators */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
//             {[
//               ['5,000+', 'Active Users'],
//               ['1M+', 'Contracts Analyzed'],
//               ['99.9%', 'Uptime'],
//               ['24/7', 'Support']
//             ].map(([stat, label]) => (
//               <div key={label}>
//                 <div className="text-3xl font-bold text-white mb-1">{stat}</div>
//                 <div className="text-gray-400">{label}</div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Using the same gradient as hero.tsx */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Contract Management?
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-10">
            Join forward-thinking professionals who trust Contrease for their agreement workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Free →
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {[
              {
                icon: '🚀',
                title: 'Quick Setup',
                description: 'Get started in minutes with DocuSign integration, seamless contract generation and signing workflow'
              },
              {
                icon: '🤖',
                title: 'AI-Powered',
                description: 'Advanced analysis using cutting-edge AI technology'
              },
              {
                icon: '🔒',
                title: 'Secure',
                description: 'Enterprise-grade security for your agreements'
              }
            ].map(({ icon, title, description }) => (
              <div key={title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="text-white font-medium mb-1">{title}</div>
                <div className="text-gray-400">{description}</div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
