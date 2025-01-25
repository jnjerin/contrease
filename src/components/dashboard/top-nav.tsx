'use client'

import { BellIcon } from '@heroicons/react/24/outline'

export function TopNav({ user }) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="text-lg font-semibold text-gray-900">Dashboard</div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-600">
          <BellIcon className="w-6 h-6" />
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
            {user.name[0]}
          </div>
          <span className="text-sm font-medium text-gray-700">{user.name}</span>
        </div>
      </div>
    </div>
  )
}
