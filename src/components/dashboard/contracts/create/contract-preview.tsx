'use client'

export function ContractPreview({ onBack, onSubmit }: { onBack: () => void; onSubmit: () => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Preview Contract</h2>
      
      <div className="border border-gray-200 rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-bold">Website Development Agreement</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Contract Details</h4>
            <p className="text-gray-600">Client: TechCorp Inc.</p>
            <p className="text-gray-600">Value: $5,000</p>
            <p className="text-gray-600">Duration: Jan 15, 2024 - Mar 15, 2024</p>
          </div>

          <div>
            <h4 className="font-medium">Scope of Work</h4>
            <p className="text-gray-600">Development of responsive website...</p>
          </div>

          <div>
            <h4 className="font-medium">Payment Terms</h4>
            <p className="text-gray-600">50% upfront, 50% upon completion...</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Generate Contract
        </button>
      </div>
    </div>
  )
}
