export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Contract',
      description: 'Choose from smart templates or create custom agreements'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Get instant feedback and risk assessment'
    },
    {
      number: '03',
      title: 'Sign & Track',
      description: 'Secure signatures and monitor contract lifecycle'
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          How Contrease Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
