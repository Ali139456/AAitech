import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      title: 'AI-First Engineering',
      description: 'AI is integrated into every stage of delivery from design and development to automation and insights helping organizations operate smarter and innovate with confidence.',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Enterprise Security & Governance',
      description: 'Security, compliance, and governance built into every layer ensuring data protection, regulatory alignment, and enterprise-grade resilience.',
      icon: '🔒',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Scalable, Cloud-Native Architecture',
      description: 'Modern cloud architectures designed to scale reliably from pilot initiatives to global enterprise platforms across AWS, Azure, and hybrid environments.',
      icon: '☁️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Agile, Outcome-Driven Delivery',
      description: 'Iterative delivery models focused on speed, quality, and measurable business outcomes without compromising stability or security.',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Continuous Support & Optimisation',
      description: 'Proactive monitoring, platform support, and continuous optimisation to ensure long-term reliability, performance, and business continuity.',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Built for Growth',
      description: 'Solutions architected to evolve with your business supporting expansion, new markets, and changing customer expectations.',
      icon: '📈',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="features" ref={ref} className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Why Aaitek</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Why Enterprises Choose Aaitek
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Capabilities and principles that power secure, scalable, and future-ready digital transformation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-0 group overflow-hidden"
            >
              {/* Left Border on Hover */}
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-0`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-0`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect - Subtle */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-0 rounded-2xl pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

