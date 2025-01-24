'use client'

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Freelance Agreements into Smart Contracts
          </h1>
          <p className="text-xl mb-8">
            Automate, analyze, and manage your contracts with AI-powered insights. 
            Save time and reduce risks with intelligent contract management.
          </p>
          <div className="flex gap-4">
            <button className="bg-secondary-500 hover:bg-secondary-600 px-6 py-3 rounded-lg font-semibold">
              Get Started Free
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
