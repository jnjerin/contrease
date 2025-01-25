'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { ContractsList } from '@/components/dashboard/contracts/contracts-list'
import { ContractsFilter } from '@/components/dashboard/contracts/contracts-filter'

export default function ContractsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Contracts</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <PlusIcon className="w-5 h-5" />
          <span>New Contract</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search contracts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="px-4 py-2 border border-gray-200 rounded-lg flex items-center space-x-2 hover:bg-gray-50"
        >
          <FunnelIcon className="w-5 h-5 text-gray-600" />
          <span>Filter</span>
        </button>
      </div>

      {isFilterOpen && <ContractsFilter />}
      <ContractsList />
    </div>
  )
}
