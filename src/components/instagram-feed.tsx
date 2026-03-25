import { useEffect } from 'react'

export function InstagramFeed() {
  useEffect(() => {
    if (!document.getElementById('elfsight-platform-script')) {
      const script = document.createElement('script')
      script.id = 'elfsight-platform-script'
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      document.body.appendChild(script)
    }

     const hideElfsightPopup = () => {
      const selectors = [
        '.elfsight-app-widget--footer',
        '.elfsight-widget__badge',
        '.elfsight-banner',
        '.elfsight-app-embed',
        '.elfsight-popup',
        '.elfsight-fixed-cta',
        '.elfsight-action',
        'a[href*="elfsight.com/apps/instagram-feed/pricing"]',
        'a[href*="elfsight.com/instagram-feed"]'
      ]
    
    selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          const element = el as HTMLElement
          element.style.display = 'none'
          element.style.opacity = '0'
          element.style.visibility = 'hidden'
          element.style.pointerEvents = 'none'
        })
      })
    }
      
      

        const intervalId = window.setInterval(hideElfsightPopup, 250)
    setTimeout(() => window.clearInterval(intervalId), 10000)

    const observer = new MutationObserver((mutations) => {
      hideElfsightPopup()
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.closest('.elfsight-app-widget--footer, .elfsight-widget__badge, .elfsight-banner, .elfsight-badge, .elfsight-fixed-cta, .elfsight-popup, .elfsight-action')) {
            hideElfsightPopup()
          }
        })
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    })

    return () => {
      window.clearInterval(intervalId)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="py-16 bg-black">
      <style>{`
        .elfsight-app-widget--footer,
        .elfsight-widget__badge,
        .elfsight-banner,
        .eapps-widget-toolbar,
        .eapps-widget-toolbar-panel,
        a[href*="elfsight.com/apps/instagram-feed/pricing"],
        a[href*="dash.elfsight.com"],
        [data-remove-url*="elfsight"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          height: 0 !important;
          width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white">Instagram</h2>
          <p className="text-gray-400">Síguenos en Instagram para ver nuestras últimas actualizaciones.</p>
        </div>
        <div className="elfsight-app-bd1b2412-4726-4a2e-85d0-90c2f7089d84" data-elfsight-app-lazy></div>
      </div>
    </section>
  )
}

