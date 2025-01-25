'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ContractTypeSelection } from '@/components/dashboard/contracts/create/contract-type-selection'
import { ContractDetails } from '@/components/dashboard/contracts/create/contract-details-form'
import { ContractTerms } from '@/components/dashboard/contracts/create/contract-terms'
import { ContractPreview } from '@/components/dashboard/contracts/create/contract-preview'

const steps = [
  { id: 1, name: 'Type' },
  { id: 2, name: 'Details' },
  { id: 3, name: 'Terms' },
  { id: 4, name: 'Preview' }
]

export default function CreateContractPage() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Create New Contract</h1>
        <p className="mt-2 text-gray-600">Fill in the details to generate your contract</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step.id === currentStep ? 'bg-blue-600 text-white' :
              step.id < currentStep ? 'bg-green-500 text-white' :
              'bg-gray-200 text-gray-600'
            }`}>
              {step.id}
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900">{step.name}</p>
            </div>
            {step.id !== steps.length && (
              <div className="w-24 h-0.5 mx-4 bg-gray-200" />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow p-6">
        {currentStep === 1 && <ContractTypeSelection onNext={() => setCurrentStep(2)} />}
        {currentStep === 2 && (
          <ContractDetails 
            onBack={() => setCurrentStep(1)} 
            onNext={() => setCurrentStep(3)} 
          />
        )}
        {currentStep === 3 && (
          <ContractTerms 
            onBack={() => setCurrentStep(2)} 
            onNext={() => setCurrentStep(4)} 
          />
        )}
        {currentStep === 4 && (
          <ContractPreview 
            onBack={() => setCurrentStep(3)} 
            onSubmit={() => console.log('Contract submitted')} 
          />
        )}
      </div>
    </div>
  )
}
