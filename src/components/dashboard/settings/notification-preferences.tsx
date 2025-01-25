'use client'

import { motion } from 'framer-motion'
import { Switch } from '@headlessui/react'
import { useState } from 'react'

export function NotificationPreferences() {
  const [preferences, setPreferences] = useState({
    contractUpdates: true,
    newComments: true,
    dueReminders: true,
    marketingEmails: false,
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
        <p className="mt-1 text-sm text-gray-500">Manage how you receive notifications.</p>
      </div>

      <div className="space-y-4">
        {Object.entries(preferences).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </h4>
              <p className="text-sm text-gray-500">
                Receive notifications about {key.toLowerCase().replace(/([A-Z])/g, ' $1')}
              </p>
            </div>
            <Switch
              checked={value}
              onChange={(newValue: any) => setPreferences(prev => ({ ...prev, [key]: newValue }))}
              className={`${
                value ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span className={`${
                value ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
            </Switch>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Save Preferences
        </button>
      </div>
    </motion.div>
  )
}
