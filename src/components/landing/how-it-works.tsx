'use client'

import { motion } from 'framer-motion'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload Your Contract',
      description: 'Simply upload your contract or choose from our smart templates'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our AI engine analyzes your contract for risks and opportunities'
    },
    {
      number: '03',
      title: 'Get Insights',
      description: 'Receive detailed insights and recommendations instantly'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            How Contrease Works
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Three simple steps to transform your contract management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-4xl font-bold w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
