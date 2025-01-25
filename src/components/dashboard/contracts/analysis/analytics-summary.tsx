'use client'

import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  ExclamationTriangleIcon,
  DocumentCheckIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

export function AnalyticsSummary() {
  const metrics = [
    { 
      label: 'Risk Score', 
      value: '85/100', 
      icon: ShieldCheckIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50' 
    },
    { 
      label: 'Potential Issues', 
      value: '3', 
      icon: ExclamationTriangleIcon,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    { 
      label: 'Clauses Analyzed', 
      value: '24', 
      icon: DocumentCheckIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      label: 'Review Time', 
      value: '2.5 mins', 
      icon: ClockIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg p-6 shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-600">{metric.label}</p>
              <p className="text-2xl font-bold">{metric.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
