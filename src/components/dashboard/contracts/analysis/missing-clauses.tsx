'use client'

import { motion } from 'framer-motion'
import { ExclamationCircleIcon, PlusIcon } from '@heroicons/react/24/outline'

export function MissingClauses() {
  const missingClauses = [
    {
      clause: 'Intellectual Property Rights',
      importance: 'Critical',
      suggestion: 'Add standard IP protection clause'
    },
    {
      clause: 'Confidentiality Agreement',
      importance: 'High',
      suggestion: 'Include NDA terms'
    },
    {
      clause: 'Force Majeure',
      importance: 'Medium',
      suggestion: 'Add standard force majeure clause'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Missing Clauses</h2>
      <div className="space-y-4">
        {missingClauses.map((item, index) => (
          <motion.div
            key={item.clause}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
          >
            <ExclamationCircleIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.clause}</h3>
                <span className={`text-sm ${
                  item.importance === 'Critical' ? 'text-red-600' :
                  item.importance === 'High' ? 'text-orange-600' :
                  'text-yellow-600'
                }`}>
                  {item.importance}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{item.suggestion}</p>
              <button className="mt-2 text-sm text-blue-600 flex items-center">
                <PlusIcon className="w-4 h-4 mr-1" />
                Add Clause
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
