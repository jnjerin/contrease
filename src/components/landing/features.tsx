// 'use client'

// import { motion } from 'framer-motion'

// export function Features() {
//   const features = [
//     {
//       title: 'AI-Powered Analysis',
//       description: 'Get instant insights and risk assessment with our advanced AI engine',
//       icon: '🤖',
//       gradient: 'from-blue-500 to-teal-400'
//     },
//     {
//       title: 'Smart Templates',
//       description: 'Create contracts quickly with intelligent, customizable templates',
//       icon: '📄',
//       gradient: 'from-teal-500 to-emerald-400'
//     },
//     {
//       title: 'DocuSign Integration',
//       description: 'Seamless electronic signatures and document management',
//       icon: '✍️',
//       gradient: 'from-emerald-500 to-blue-400'
//     },
//     {
//       title: 'Real-time Tracking',
//       description: 'Monitor contract status and deadlines effortlessly',
//       icon: '📊',
//       gradient: 'from-blue-400 to-teal-500'
//     }
//   ]

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-blue-50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//             Features that Empower Your Business
//           </h2>
//           <p className="text-gray-600 text-xl max-w-2xl mx-auto">
//             Transform your contract management with powerful tools designed for modern businesses
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
//             >
//               <div className={`text-5xl mb-6 bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center`}>
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'

export function Features() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Get instant insights and risk assessment with our advanced AI engine',
      icon: '🤖',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Smart Templates',
      description: 'Create contracts quickly with intelligent, customizable templates',
      icon: '📄',
      gradient: 'from-cyan-500 to-blue-400'
    },
    {
      title: 'DocuSign Integration',
      description: 'Seamless electronic signatures and document management',
      icon: '✍️',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor contract status and deadlines effortlessly',
      icon: '📊',
      gradient: 'from-cyan-400 to-blue-500'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Features that Empower Your Business
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Transform your contract management with powerful tools designed for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`text-3xl mb-6 bg-gradient-to-r ${feature.gradient} w-12 h-12 rounded-xl flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

