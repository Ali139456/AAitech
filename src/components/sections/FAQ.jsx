import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What services does Aaitek provide?',
      answer: 'Aaitek delivers enterprise-grade solutions across DXP (Sitecore, Kentico, Umbraco, Optimizely), SAP, Salesforce, ServiceNow, AWS, AI, and Automation. We offer full-stack development, cloud solutions, data engineering, and managed services.',
    },
    {
      question: 'How does the AaitekTOD (Talent on Demand) model work?',
      answer: 'Our AaitekTOD model provides scalable, on-demand expertise that integrates seamlessly into your teams. You can hire developers, designers, or entire teams on a flexible basis - whether for staff augmentation, dedicated teams, or time-based support.',
    },
    {
      question: 'What technologies and frameworks do you specialize in?',
      answer: 'We specialize in MEAN and MERN stacks, along with modern languages like JavaScript, TypeScript, Python, Java, and frameworks including React, Angular, Vue.js, Next.js, Node.js, Django, and Spring Boot. We also work with enterprise platforms like Sitecore, Salesforce, and ServiceNow.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. We follow agile development methodologies to deliver value quickly. Small projects may take 2-4 weeks, while enterprise solutions typically range from 3-6 months. We provide detailed timelines during the discovery phase.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive managed services including application support, platform optimization, development support, and 24/7 IT support services. Our support team ensures your systems run smoothly and evolve with your business needs.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team models. Pricing depends on project scope, team size, and engagement duration. Contact us for a customized quote based on your specific requirements.',
    },
    {
      question: 'Are your developers certified?',
      answer: 'Yes, we have 500+ certified tech professionals with certifications in various technologies including AWS, Azure, Salesforce, ServiceNow, SAP, and more. Our team continuously updates their skills to stay current with the latest technologies.',
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer: 'We implement enterprise-grade security protocols and maintain compliance with industry standards including HIPAA, GDPR, and SOC 2. All our solutions include security best practices, regular audits, and data protection measures.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={ref} className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 mb-6"
          >
            <span className="text-xs font-bold text-white uppercase tracking-wider">FAQ</span>
          </motion.div>
          <h2 className="heading-2 mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </motion.div>

        {/* Enhanced FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative bg-white rounded-2xl border-2 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary-400 shadow-xl shadow-primary-500/20' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              {/* Gradient Accent Bar */}
              {openIndex === index && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                />
              )}
              
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-r from-blue-50/50 to-cyan-50/50'
                    : 'hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-cyan-50/30'
                }`}
              >
                <div className="flex items-start gap-4 flex-1">
                  {/* Question Number Badge */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 group-hover:from-blue-100 group-hover:to-cyan-100 group-hover:text-blue-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`text-base sm:text-lg font-bold pr-4 transition-colors duration-300 ${
                    openIndex === index ? 'text-gray-900' : 'text-gray-800 group-hover:text-blue-600'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 py-6 text-base sm:text-lg text-gray-700 leading-relaxed bg-gradient-to-br from-gray-50/50 to-white border-t-2 border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mt-1"></div>
                        <p className="flex-1">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

