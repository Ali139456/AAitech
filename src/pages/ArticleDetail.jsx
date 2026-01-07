import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'

const ArticleDetail = () => {
  const { slug } = useParams()
  
  // This would typically come from an API or data file
  const article = {
    title: 'Designing Enterprise-Ready AI Solutions',
    slug: 'designing-enterprise-ready-ai-solutions',
    author: 'Aaitek Team',
    date: '2024-01-15',
    industry: 'Finance',
    serviceArea: 'AI',
    technology: 'AI',
    audience: 'CTO',
    description: 'Practical insights on building AI solutions that meet enterprise requirements for security, scalability, and governance.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    video: null, // Optional: YouTube/Vimeo URL or embed code
    fullContent: `
      <p class="text-lg text-gray-700 mb-6">
        Building AI solutions for enterprise environments requires careful consideration of security, scalability, and governance. This article explores practical approaches to designing AI systems that meet these critical requirements.
      </p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Security First</h3>
      <p class="text-lg text-gray-700 mb-6">
        Enterprise AI solutions must prioritize security from the ground up. This includes data encryption, access controls, and compliance with industry regulations.
      </p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Scalability Considerations</h3>
      <p class="text-lg text-gray-700 mb-6">
        As AI workloads grow, systems must be designed to scale efficiently. This involves choosing the right infrastructure and architecture patterns.
      </p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Governance and Compliance</h3>
      <p class="text-lg text-gray-700 mb-6">
        Effective governance ensures AI systems operate within defined boundaries and maintain accountability throughout their lifecycle.
      </p>
    `,
    tags: ['AI', 'Enterprise', 'Security', 'Governance'],
  } || {
    title: 'Article Not Found',
    description: 'The requested article could not be found',
    author: 'Unknown',
    date: new Date().toISOString(),
    image: null,
    video: null,
    fullContent: '<p>Article not found.</p>',
    tags: [],
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || "https://aaitek.com.au/logo.png",
    "author": {
      "@type": "Organization",
      "name": article.author || "Aaitek Technology Specialists"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aaitek Technology Specialists",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aaitek.com.au/logo.png"
      }
    },
    "datePublished": article.date,
    "url": `https://aaitek.com.au/article/${slug}`,
  }

  return (
    <>
      <SEO
        seoTitle={`${article.title} - Article | Aaitek`}
        seoDescription={article.description}
        canonicalUrl={`https://aaitek.com.au/article/${slug}`}
        robots="index,follow"
        ogTitle={article.title}
        ogDescription={article.description}
        ogImage={article.image || "https://aaitek.com.au/og/article.png"}
        ogType="article"
        twitterCard="summary_large_image"
        schemaType="Article"
        structuredData={structuredData}
        indexable={true}
      />
      <div className="pt-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {article.image ? (
              <>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-cyan-800/80 to-blue-900/90"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700"></div>
            )}
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <span className="text-2xl">📝</span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Article</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm mb-6">
                <span>By {article.author}</span>
                <span>•</span>
                <span>{formatDate(article.date)}</span>
              </div>
              <p className="text-lg text-white/90 max-w-3xl">
                {article.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-custom max-w-4xl mx-auto">
            {/* Video Section (if available) */}
            {article.video && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
              >
                <div className="aspect-video bg-gray-900">
                  {article.video.includes('youtube.com') || article.video.includes('youtu.be') ? (
                    <iframe
                      src={article.video.includes('youtu.be') 
                        ? `https://www.youtube.com/embed/${article.video.split('/').pop()}`
                        : `https://www.youtube.com/embed/${article.video.split('v=')[1]?.split('&')[0]}`
                      }
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={article.title}
                    />
                  ) : article.video.includes('vimeo.com') ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${article.video.split('/').pop()}`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={article.title}
                    />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: article.video }} />
                  )}
                </div>
              </motion.div>
            )}

            {/* Full Content */}
            {article.fullContent && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl mb-8"
              >
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: article.fullContent }}
                />
              </motion.div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Back to Articles */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/articles"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Articles
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ArticleDetail

