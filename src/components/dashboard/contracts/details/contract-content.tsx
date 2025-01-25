'use client'

export function ContractContent() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Contract Content</h2>
      <div className="prose max-w-none">
        <h3>1. Scope of Work</h3>
        <p>Development of a responsive website including:</p>
        <ul>
          <li>Homepage design and implementation</li>
          <li>About page</li>
          <li>Services section</li>
          <li>Contact form</li>
        </ul>

        <h3>2. Timeline</h3>
        <p>The project will be completed within 8 weeks from the start date.</p>

        <h3>3. Payment Terms</h3>
        <p>50% upfront payment and 50% upon completion.</p>
      </div>
    </div>
  )
}
