import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const target = document.querySelector(targetId)
    if (target) {
      const offsetTop = target.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 transition-shadow duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">Amjath Ali M</div>
          
          <ul className={`hidden md:flex space-x-8`}>
            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 relative group">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 relative group">
              Certifications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-800 hover:text-primary font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
          </ul>

          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="flex flex-col space-y-4 py-4">
            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="block text-gray-800 hover:text-primary font-medium">Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="block text-gray-800 hover:text-primary font-medium">About</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="block text-gray-800 hover:text-primary font-medium">Experience</a></li>
            <li><a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="block text-gray-800 hover:text-primary font-medium">Education</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="block text-gray-800 hover:text-primary font-medium">Skills</a></li>
            <li><a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')} className="block text-gray-800 hover:text-primary font-medium">Certifications</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block text-gray-800 hover:text-primary font-medium">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

