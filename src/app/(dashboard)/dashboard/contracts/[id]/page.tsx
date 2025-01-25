'use client'

import { motion } from 'framer-motion'
import { 
  DocumentIcon, 
  PencilIcon, 
  TrashIcon, 
  ShareIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline'
import { ContractDetails } from '@/components/dashboard/contracts/details/contract-details'
import { ContractContent } from '@/components/dashboard/contracts/details/contract-content'
import { ContractStatus } from '@/components/dashboard/contracts/details/contract-status'
import { ContractActivity } from '@/components/dashboard/contracts/details/contract-activity'

export default function ContractDetailsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <DocumentIcon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Website Development Agreement</h1>
            <p className="text-gray-500">Created on Jan 15, 2024</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <ShareIcon className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <DocumentDuplicateIcon className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <PencilIcon className="w-5 h-5" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ContractDetails />
          <ContractContent />
        </div>
        <div className="space-y-6">
          <ContractStatus />
          <ContractActivity />
        </div>
      </div>
    </div>
  )
}
