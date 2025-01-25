'use client'

export function ContractActivity() {
  const activities = [
    {
      id: 1,
      action: 'Contract created',
      user: 'John Doe',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      action: 'Sent for review',
      user: 'John Doe',
      timestamp: '1 hour ago'
    },
    {
      id: 3,
      action: 'Comment added',
      user: 'Jane Smith',
      timestamp: '30 minutes ago'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex space-x-3">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-900">{activity.action}</p>
              <p className="text-xs text-gray-500">by {activity.user}</p>
              <p className="text-xs text-gray-400">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
