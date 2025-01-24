export function CTASection() {
  return (
    <section className="bg-primary-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Contract Management?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Contrease to streamline their agreement processes.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-secondary-500 hover:bg-secondary-600 px-8 py-4 rounded-lg font-semibold text-lg">
            Start Free Trial
          </button>
          <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900">
            Schedule Demo
          </button>
        </div>
        <p className="mt-6 text-sm opacity-80">
          No credit card required • 14-day free trial • Full access
        </p>
      </div>
    </section>
  )
}
