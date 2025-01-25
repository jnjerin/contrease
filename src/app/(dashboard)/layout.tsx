'use client'

import { useAuth } from '@/contexts/auth-context'
import { Sidebar } from '@/components/dashboard/sidebar'
import { TopNav } from '@/components/dashboard/top-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <TopNav user={user} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
