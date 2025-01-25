'use client'

export function ContractDetails({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Contract Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contract Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="e.g., Website Development Agreement"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Client name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contract Value
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}
