'use client'

import { motion } from 'framer-motion'
import { LightBulbIcon } from '@heroicons/react/24/outline'

export function Recommendations() {
  const recommendations = [
    {
      title: 'Strengthen Payment Terms',
      description: 'Add specific payment milestones and late payment penalties',
      impact: 'High',
      effort: 'Low'
    },
    {
      title: 'Clarify Deliverables',
      description: 'Add detailed specifications for each deliverable',
      impact: 'Medium',
      effort: 'Medium'
    },
    {
      title: 'Update Liability Clause',
      description: 'Specify liability limits and exclusions',
      impact: 'High',
      effort: 'Medium'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recommendations</h2>
      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex space-x-4 p-4 bg-blue-50 rounded-lg"
          >
            <LightBulbIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-900">{item.title}</h3>
              <p className="text-sm text-blue-800 mt-1">{item.description}</p>
              <div className="flex space-x-4 mt-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Impact: {item.impact}
                </span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Effort: {item.effort}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
