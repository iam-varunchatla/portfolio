import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact']
      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg border-b border-accent/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-accent font-mono text-xl font-bold hover:text-accent/80 transition-colors">
              &lt;VC /&gt;
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors font-mono text-sm ${
                    activeSection === item.href.slice(1)
                      ? 'text-accent border-b-2 border-accent pb-1'
                      : 'text-text hover:text-accent'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="ml-4 px-4 py-2 rounded border-2 border-accent text-accent font-mono text-sm hover:bg-accent/10 transition-all"
                aria-label="Download Resume"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-accent hover:text-accent/80 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 font-mono text-sm transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-accent bg-accent/10'
                    : 'text-text hover:text-accent'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block px-3 py-2 mt-2 text-text hover:text-accent transition-colors font-mono text-sm border-t border-accent/20"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
