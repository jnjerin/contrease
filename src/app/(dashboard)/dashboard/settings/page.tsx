'use client'

import { useState } from 'react'
import { UserInformation } from '@/components/dashboard/settings/user-information'
import { NotificationPreferences } from '@/components/dashboard/settings/notification-preferences'
import { ApiIntegration } from '@/components/dashboard/settings/api-integration'
import { SubscriptionManagement } from '@/components/dashboard/settings/subscription-management'
import { AccountDeletion } from '@/components/dashboard/settings/account-deletion'

const tabs = [
  { id: 'profile', label: 'Profile' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'integrations', label: 'API & Integrations' },
  { id: 'subscription', label: 'Subscription' },
  { id: 'danger', label: 'Danger Zone' }
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && <UserInformation />}
          {activeTab === 'notifications' && <NotificationPreferences />}
          {activeTab === 'integrations' && <ApiIntegration />}
          {activeTab === 'subscription' && <SubscriptionManagement />}
          {activeTab === 'danger' && <AccountDeletion />}
        </div>
      </div>
    </div>
  )
}
