'use client'

import { motion } from 'framer-motion'

export function ActivityTimeline() {
  const activities = [
    {
      id: 1,
      action: 'Contract signed',
      subject: 'Website Development Agreement',
      timestamp: '2 hours ago',
      type: 'success'
    },
    {
      id: 2,
      action: 'New comment added',
      subject: 'Consulting Services Contract',
      timestamp: '4 hours ago',
      type: 'info'
    },
    {
      id: 3,
      action: 'Contract created',
      subject: 'Software License Agreement',
      timestamp: '1 day ago',
      type: 'created'
    }
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex space-x-3"
        >
          <div className={`w-2 h-2 mt-2 rounded-full ${
            activity.type === 'success' ? 'bg-green-500' :
            activity.type === 'info' ? 'bg-blue-500' : 'bg-gray-500'
          }`} />
          <div>
            <p className="text-sm text-gray-900">{activity.action}</p>
            <p className="text-sm text-gray-600">{activity.subject}</p>
            <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
