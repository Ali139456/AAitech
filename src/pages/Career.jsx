import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Career = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 mb-8 shadow-xl"
            >
              <span className="text-2xl">💼</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Careers</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Join the Aaitek Team
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Build the future of digital transformation with us
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-sky-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 md:p-16 border-2 border-gray-200 shadow-xl">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg">
                  🚀
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                  Career Opportunities Coming Soon
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  We're building something exciting! Our career page is currently under development.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  At Aaitek, we're always looking for talented individuals who are passionate about technology, innovation, and delivering exceptional digital solutions. If you're interested in joining our team, we'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">What We're Looking For</h3>
                  <p className="text-gray-700">
                    Passionate engineers, designers, and consultants who thrive in collaborative environments
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Why Join Aaitek</h3>
                  <p className="text-gray-700">
                    Work on cutting-edge projects, grow your skills, and be part of a forward-thinking team
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t-2 border-gray-200">
                <p className="text-base text-gray-600 mb-6">
                  In the meantime, feel free to reach out to us directly:
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Career

