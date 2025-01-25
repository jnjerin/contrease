'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  HomeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  // UserCircleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

export function Sidebar() {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Contracts', href: '/dashboard/contracts', icon: DocumentTextIcon },
    { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
    // { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },
    { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
  ]

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-white">C</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Contrease</span>
        </Link>
      </div>

      <nav className="p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 w-1 h-8 bg-blue-600 rounded-r-full"
                />
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
