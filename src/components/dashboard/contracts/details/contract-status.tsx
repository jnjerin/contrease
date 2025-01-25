'use client'

import { CheckCircleIcon } from '@heroicons/react/24/outline'

export function ContractStatus() {
  const steps = [
    { name: 'Draft', completed: true },
    { name: 'Review', completed: true },
    { name: 'Approval', completed: false },
    { name: 'Signed', completed: false }
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Status</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-center">
            <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center
              ${step.completed ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
              {step.completed && <CheckCircleIcon className="w-6 h-6 text-green-500" />}
            </div>
            <div className="ml-4">
              <p className={`font-medium ${step.completed ? 'text-green-600' : 'text-gray-900'}`}>
                {step.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
