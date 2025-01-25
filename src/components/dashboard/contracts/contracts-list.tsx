'use client'

import { motion } from 'framer-motion'
import { DocumentIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export function ContractsList() {
  const contracts = [
    {
      id: 1,
      title: 'Website Development Agreement',
      client: 'TechCorp Inc.',
      status: 'In Review',
      date: '2024-01-15',
      value: '$5,000'
    },
    {
      id: 2,
      title: 'Consulting Services Contract',
      client: 'Innovation Labs',
      status: 'Signed',
      date: '2024-01-14',
      value: '$10,000'
    },
    {
      id: 3,
      title: 'Software License Agreement',
      client: 'Digital Solutions',
      status: 'Draft',
      date: '2024-01-13',
      value: '$15,000'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contract</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
            <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contracts.map((contract, index) => (
            <motion.tr
              key={contract.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <DocumentIcon className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="font-medium text-gray-900">{contract.title}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{contract.client}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  contract.status === 'Signed' ? 'bg-green-100 text-green-800' :
                  contract.status === 'In Review' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {contract.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{contract.date}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{contract.value}</td>
              <td className="px-6 py-4 text-right">
                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
