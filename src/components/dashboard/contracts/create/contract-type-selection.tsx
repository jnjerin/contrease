'use client'

import { motion } from 'framer-motion'
import { DocumentIcon, CodeBracketIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const contractTypes = [
  {
    id: 'freelance',
    title: 'Freelance Agreement',
    description: 'Perfect for independent contractors and freelancers',
    icon: CodeBracketIcon
  },
  {
    id: 'service',
    title: 'Service Agreement',
    description: 'For ongoing service provisions and consultancy',
    icon: PresentationChartLineIcon
  },
  {
    id: 'custom',
    title: 'Custom Contract',
    description: 'Start from scratch with a blank template',
    icon: DocumentIcon
  }
]

export function ContractTypeSelection({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Select Contract Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contractTypes.map((type) => (
          <motion.div
            key={type.id}
            whileHover={{ scale: 1.02 }}
            className="border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:shadow-md"
            onClick={onNext}
          >
            <type.icon className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-medium mb-2">{type.title}</h3>
            <p className="text-sm text-gray-600">{type.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
