'use client'

import { motion } from 'framer-motion'
import { DocumentIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export function RecentContracts() {
  const contracts = [
    {
      id: 1,
      title: 'Website Development Agreement',
      client: 'TechCorp Inc.',
      status: 'In Review',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Consulting Services Contract',
      client: 'Innovation Labs',
      status: 'Signed',
      date: '2024-01-14'
    },
    {
      id: 3,
      title: 'Software License Agreement',
      client: 'Digital Solutions',
      status: 'Draft',
      date: '2024-01-13'
    }
  ]

  return (
    <div className="space-y-4">
      {contracts.map((contract, index) => (
        <motion.div
          key={contract.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <DocumentIcon className="w-6 h-6 text-blue-600" />
            <div>
              <h4 className="font-medium text-gray-900">{contract.title}</h4>
              <p className="text-sm text-gray-500">{contract.client}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{contract.date}</span>
            <ArrowRightIcon className="w-4 h-4 text-gray-400" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
