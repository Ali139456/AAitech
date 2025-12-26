import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ServiceShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      title: 'Mobile Booking Engine',
      description: 'Seamless booking experience with real-time availability and instant confirmations.',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Itinerary Management',
      description: 'Comprehensive itinerary tracking with automatic updates and synchronization.',
      icon: '📋',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Real-Time Notifications',
      description: 'Instant alerts for bookings, changes, and important travel updates.',
      icon: '🔔',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'GPS-Enabled Services',
      description: 'Location-based services for finding nearby attractions and services.',
      icon: '📍',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level security and encryption.',
      icon: '💳',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'User Reviews',
      description: 'Community-driven reviews and ratings to help make informed decisions.',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Travel Guides',
      description: 'Curated travel guides and recommendations from local experts.',
      icon: '🗺️',
      color: 'from-teal-500 to-cyan-500',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-200 mb-6">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Enterprise Mobile Application
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A comprehensive mobile solution that provides real-time updates on booking and management services, delivering seamless experiences across iOS and Android platforms.
          </p>
        </motion.div>

        {/* Three Column Layout: Features Left | Phones Center | Features Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            className="space-y-4 order-2 lg:order-1"
          >
            {features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1, ease: 'easeIn' }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-0"
              >
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-0 flex-shrink-0`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-0">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Phone Mockups (Smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Phone Mockups Container */}
            <div className="relative flex items-center justify-center gap-3 md:gap-4">
              {/* Phone 1 - Left */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: -8 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: -8 } : { opacity: 0, y: 50, rotate: -8 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                className="relative z-10"
              >
                <div className="w-32 md:w-40 h-[400px] md:h-[480px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2rem] p-2 shadow-2xl border-6 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="p-3 h-full flex flex-col">
                      <div className="h-10 bg-blue-600 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">Flight Search</span>
                      </div>
                      <div className="space-y-2 flex-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-16 bg-gray-100 rounded-lg"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 2 - Center */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                className="relative z-20"
              >
                <div className="w-36 md:w-44 h-[440px] md:h-[520px] bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-[2rem] p-2 shadow-2xl border-6 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="p-3 h-full flex flex-col">
                      <div className="h-12 bg-cyan-500 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">Booking Confirmed</span>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-cyan-50 to-white rounded-lg p-3 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                          <span className="text-white text-2xl">✓</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 3 - Right */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 8 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 8 } : { opacity: 0, y: 50, rotate: 8 }}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                className="relative z-10"
              >
                <div className="w-32 md:w-40 h-[400px] md:h-[480px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[2rem] p-2 shadow-2xl border-6 border-gray-900">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="p-3 h-full flex flex-col">
                      <div className="h-10 bg-gray-800 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">Profile</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="h-20 bg-gray-100 rounded-lg"></div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-10 bg-gray-100 rounded-lg"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            className="space-y-4 order-3"
          >
            {features.slice(4).map((feature, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1, ease: 'easeIn' }}
                whileHover={{ x: -8, scale: 1.02 }}
                className="group flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-0"
              >
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-0 flex-shrink-0`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-0">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase

