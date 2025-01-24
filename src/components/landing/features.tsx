export function Features() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Get instant insights and risk assessment for your contracts',
      icon: '🤖'
    },
    {
      title: 'Smart Templates',
      description: 'Create contracts quickly with intelligent templates',
      icon: '📄'
    },
    {
      title: 'DocuSign Integration',
      description: 'Seamless electronic signatures and document management',
      icon: '✍️'
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor contract status and deadlines effortlessly',
      icon: '📊'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features that Empower Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
