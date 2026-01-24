import { useEffect, useState } from 'react'
import TiltedCard from './TiltedCard'
import { config } from '../config'

const Hero = () => {
  const [profileImage, setProfileImage] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Dynamically import image - handles missing file gracefully
    import('../assets/profile.png').then((module) => {
      setProfileImage(module.default)
    }).catch((error) => {
      console.error('Failed to load profile image:', error)
      setProfileImage(null)
      setImageError(true)
    })
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(false)
  }

  return (
    <section id="home" className="pt-32 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-800">
              Hi, I'm <span className="text-primary">Amjath Ali M</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-700">Full Stack Developer</p>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              Senior Consultant with 10 years of extensive experience in software development, application maintenance, and support. Expertise in analyzing system needs, evaluating user requirements, and developing scalable web and mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-center"
              >
                Get In Touch
              </a>
              <a
                href="#experience"
                className="px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                View My Work
              </a>
            </div>
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="https://linkedin.com/in/amjath-ali-m-69766852" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors duration-300 hover:-translate-y-0.5">LinkedIn</a>
              <a href="mailto:amjathn24@gmail.com" className="text-gray-700 hover:text-primary transition-colors duration-300 hover:-translate-y-0.5">Email</a>
              <a href="tel:+918012606207" className="text-gray-700 hover:text-primary transition-colors duration-300 hover:-translate-y-0.5">Phone</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end w-full">
            {!profileImage || imageError ? (
              <div className="w-full max-w-md md:max-w-lg lg:max-w-xl h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-gray-600 font-medium">Profile Image</p>
                  <p className="text-sm text-gray-500 mt-2">Place profile.png in src/assets/ folder</p>
                </div>
              </div>
            ) : config.enableProfileAnimation ? (
              <TiltedCard
                imageSrc={profileImage}
                altText="Amjath Ali M - Full Stack Developer"
                captionText=""
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            ) : (
              <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg overflow-hidden shadow-2xl bg-gray-200" style={{ minHeight: '400px' }}>
                {/* Blurred background layer for depth effect */}
                {imageLoaded && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                    style={{
                      backgroundImage: `url(${profileImage})`,
                      backgroundPosition: 'center 40%',
                      filter: 'blur(8px) brightness(0.9)'
                    }}
                  ></div>
                )}
                {/* Focused foreground - centered on face */}
                <img 
                  src={profileImage}
                  alt="Amjath Ali M" 
                  className="relative w-full h-auto object-cover"
                  style={{
                    objectPosition: 'center 35%',
                    filter: 'blur(0px)',
                    minHeight: '400px',
                    display: imageError ? 'none' : 'block'
                  }}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
                {/* Gradient overlay for smooth transition */}
                {imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none"></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

