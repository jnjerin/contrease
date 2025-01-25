'use client'

import { motion } from 'framer-motion'

export function RiskAssessment() {
  const risks = [
    {
      category: 'Payment Terms',
      level: 'High',
      description: 'Missing late payment penalties clause',
      impact: 'Financial risk'
    },
    {
      category: 'Liability',
      level: 'Medium',
      description: 'Unclear limitation of liability',
      impact: 'Legal exposure'
    },
    {
      category: 'Termination',
      level: 'Low',
      description: 'Standard termination clause',
      impact: 'Minimal risk'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Risk Assessment</h2>
      <div className="space-y-4">
        {risks.map((risk, index) => (
          <motion.div
            key={risk.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-l-4 p-4 bg-gray-50 rounded-r-lg space-y-2"
            style={{
              borderColor: 
                risk.level === 'High' ? '#ef4444' :
                risk.level === 'Medium' ? '#f59e0b' : '#10b981'
            }}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{risk.category}</h3>
              <span className={`px-2 py-1 rounded text-sm ${
                risk.level === 'High' ? 'bg-red-100 text-red-800' :
                risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {risk.level} Risk
              </span>
            </div>
            <p className="text-sm text-gray-600">{risk.description}</p>
            <p className="text-sm text-gray-500">Impact: {risk.impact}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
