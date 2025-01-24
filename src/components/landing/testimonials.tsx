export function Testimonials() {
  const testimonials = [
    {
      quote: "Contrease transformed how we handle freelance agreements. The AI analysis saved us from multiple potential contract issues.",
      author: "Sarah Chen",
      role: "Design Agency Director",
      company: "Creative Solutions Inc.",
      image: "/testimonials/sarah.jpg"
    },
    {
      quote: "The automated contract analysis and DocuSign integration streamlined our entire workflow. It's a game-changer.",
      author: "Marcus Rodriguez",
      role: "Freelance Developer",
      company: "Tech Ventures",
      image: "/testimonials/marcus.jpg"
    },
    {
      quote: "Finally, a solution that makes contract management feel effortless. The insights provided are invaluable.",
      author: "Emma Thompson",
      role: "Operations Manager",
      company: "Digital Nomads Co",
      image: "/testimonials/emma.jpg"
    }
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Trusted by Leading Professionals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
