'use client'

import { motion } from 'framer-motion'
import { KeyIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'

export function ApiIntegration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-medium text-gray-900">API & Integrations</h3>
        <p className="mt-1 text-sm text-gray-500">Manage your API keys and third-party integrations.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <KeyIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-900">API Key</p>
              <p className="text-sm text-gray-500">sk_live_xxxxxxxxxxxxx</p>
            </div>
          </div>
          <button className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700">
            <DocumentDuplicateIcon className="h-4 w-4" />
            <span>Copy</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-900">Connected Services</h4>
        
        {['Google Drive', 'Dropbox', 'Slack'].map((service) => (
          <div key={service} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-900">{service}</p>
                <p className="text-sm text-gray-500">Not connected</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
              Connect
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
