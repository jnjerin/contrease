'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpIcon,
  DocumentIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Contracts',
      value: '156',
      change: '+12%',
      icon: DocumentIcon,
      trend: 'up'
    },
    {
      title: 'Pending Review',
      value: '8',
      change: '-2',
      icon: ClockIcon,
      trend: 'down'
    },
    {
      title: 'Completed',
      value: '142',
      change: '+8%',
      icon: CheckCircleIcon,
      trend: 'up'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowUpIcon className={`w-4 h-4 ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500 transform rotate-180'
              }`} />
              <span className={`ml-1 ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
              <span className="text-gray-600 ml-2">from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Contracts</h3>
          {/* Recent contracts list will go here */}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Timeline</h3>
          {/* Activity timeline will go here */}
        </div>
      </div>
    </div>
  )
}
