'use client'

import { motion } from 'framer-motion'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export function AccountDeletion() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-medium text-gray-900">Delete Account</h3>
        <p className="mt-1 text-sm text-gray-500">
          Permanently delete your account and all associated data.
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mt-0.5" />
          <div className="ml-3">
            <h4 className="text-sm font-medium text-red-800">Warning</h4>
            <p className="mt-2 text-sm text-red-700">
              This action cannot be undone. This will permanently delete your account and remove all
              associated data from our servers.
            </p>
          </div>
        </div>
      </div>

      {!showConfirmation ? (
        <button
          onClick={() => setShowConfirmation(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Delete Account
        </button>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Please type "DELETE" to confirm account deletion:
          </p>
          <input
            type="text"
            className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Type DELETE to confirm"
          />
          <div className="flex space-x-3">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Confirm Deletion
            </button>
            <button
              onClick={() => setShowConfirmation(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
