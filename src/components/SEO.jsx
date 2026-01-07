import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  structuredData
}) => {
  const location = useLocation()
  const siteUrl = 'https://aaitek.com.au'
  const fullUrl = url || `${siteUrl}${location.pathname}`
  const defaultImage = `${siteUrl}/logo.png`
  const ogImage = image || defaultImage

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description)
      updateMetaTag('og:description', description, true)
    }

    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Open Graph tags
    updateMetaTag('og:title', title || 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud', true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', fullUrl, true)
    updateMetaTag('og:image', ogImage, true)
    updateMetaTag('og:site_name', 'Aaitek Technology Specialists', true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title || 'Aaitek - Empowering Businesses With AI, Data Analytics & Cloud')
    if (description) {
      updateMetaTag('twitter:description', description)
    }
    updateMetaTag('twitter:image', ogImage)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]')
      if (!script) {
        script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(structuredData)
    }
  }, [title, description, keywords, ogImage, fullUrl, type, structuredData])

  return null
}

export default SEO

