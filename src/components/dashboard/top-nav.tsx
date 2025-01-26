'use client'

import { BellIcon } from '@heroicons/react/24/outline'
// import { useSession, signOut } from 'next-auth/react'
import { 
  Menu, 
  // Transition 
} from '@headlessui/react'
// import { Fragment } from 'react'

export function TopNav({ user }: { user: { name?: string } }) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="text-lg font-semibold text-gray-900">Dashboard</div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-600">
          <BellIcon className="w-6 h-6" />
        </button>
        
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              {user?.name?.[0]}
            </div>
            <span className="text-sm font-medium text-gray-700">{user?.name}</span>
          </Menu.Button>

          {/* <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition> */}
        </Menu>
      </div>
    </div>
  )
}