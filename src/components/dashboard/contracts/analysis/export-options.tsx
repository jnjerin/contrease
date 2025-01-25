'use client'

import { 
  DocumentArrowDownIcon,
  DocumentTextIcon,
  TableCellsIcon 
} from '@heroicons/react/24/outline'

export function ExportOptions() {
  return (
    <div className="flex space-x-3">
      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
        <DocumentArrowDownIcon className="w-5 h-5 text-gray-600" />
        <span>Export PDF</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
        <DocumentTextIcon className="w-5 h-5 text-gray-600" />
        <span>Export Word</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
        <TableCellsIcon className="w-5 h-5 text-gray-600" />
        <span>Export Excel</span>
      </button>
    </div>
  )
}
