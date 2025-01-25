'use client'

import { motion } from 'framer-motion'
import { RiskAssessment } from '@/components/dashboard/contracts/analysis/risk-assessment'
import { MissingClauses } from '@/components/dashboard/contracts/analysis/missing-clauses'
import { Recommendations } from '@/components/dashboard/contracts/analysis/recommendations'
import { AnalyticsSummary } from '@/components/dashboard/contracts/analysis/analytics-summary'
import { ExportOptions } from '@/components/dashboard/contracts/analysis/export-options'

export default function ContractAnalysisPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contract Analysis</h1>
          <p className="text-gray-600">AI-powered insights and recommendations</p>
        </div>
        <ExportOptions />
      </div>

      <AnalyticsSummary />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RiskAssessment />
        <MissingClauses />
      </div>

      <Recommendations />
    </div>
  )
}
