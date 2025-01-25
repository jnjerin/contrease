'use client'

export function ContractDetails() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Contract Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">TechCorp Inc.</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Value</p>
          <p className="font-medium">$5,000</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Start Date</p>
          <p className="font-medium">Jan 15, 2024</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">End Date</p>
          <p className="font-medium">Mar 15, 2024</p>
        </div>
      </div>
    </div>
  )
}
