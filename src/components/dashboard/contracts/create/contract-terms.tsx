'use client'

export function ContractTerms({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Contract Terms</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Scope of Work
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-32"
            placeholder="Describe the work to be performed..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment Terms
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-32"
            placeholder="Specify payment schedule and terms..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Terms
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-32"
            placeholder="Add any additional terms and conditions..."
          />
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
