'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

export function SubscriptionManagement() {
  const plans = [
    {
      name: 'Basic',
      price: '$10',
      features: ['10 contracts/month', 'Basic analytics', 'Email support'],
      current: false
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['Unlimited contracts', 'Advanced analytics', 'Priority support'],
      current: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom features', 'Dedicated support', 'Custom integrations'],
      current: false
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-medium text-gray-900">Subscription Management</h3>
        <p className="mt-1 text-sm text-gray-500">Manage your subscription and billing.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg p-6 ${
              plan.current
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-200'
            }`}
          >
            <h4 className="text-lg font-medium text-gray-900">{plan.name}</h4>
            <p className="mt-2 text-2xl font-bold text-gray-900">{plan.price}</p>
            <p className="mt-1 text-sm text-gray-500">{plan.current ? 'Current plan' : 'per month'}</p>
            
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full px-4 py-2 rounded-md ${
                plan.current
                  ? 'bg-gray-100 text-gray-600 cursor-default'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              disabled={plan.current}
            >
              {plan.current ? 'Current Plan' : 'Upgrade'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <h4 className="text-sm font-medium text-gray-900">Billing Information</h4>
        <p className="mt-1 text-sm text-gray-500">Update your billing details and payment method.</p>
        
        <button className="mt-4 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
          Update Billing Info
        </button>
      </div>
    </motion.div>
  )
}
