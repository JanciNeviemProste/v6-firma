import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Domov', href: '#domov' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#domov" className="flex items-center gap-2 text-xl font-bold text-white transition-all duration-300 hover:text-blue-400">
            <span className="text-2xl">⚡</span>
            <span>Peter Kováč</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Zavolajte nám
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Prepnúť menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white font-medium px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-4 py-3 rounded-lg shadow-md text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Zavolajte nám
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
