import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsRef = useRef(null)

  useEffect(() => {
    if (!skillsRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const tags = skillsRef.current.querySelectorAll('.skill-tag')
    tags.forEach((tag, index) => {
      tag.style.transitionDelay = `${index * 50}ms`
      observer.observe(tag)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const skillCategories = [
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js', 'TypeScript', 'Next.js']
    },
    {
      title: 'Mobile Development',
      skills: ['React Native', 'Core Java', 'Android', 'Kotlin']
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'JSON', 'XML', 'Oracle SQL Developer']
    },
    {
      title: 'Tools & IDEs',
      skills: ['VS Code', 'Android Studio', 'Xcode', 'GitLab', 'GitHub', 'Postman']
    },
    {
      title: 'Deployment & Cloud',
      skills: ['AWS', 'App Store', 'Play Store', 'TestFlight']
    },
    {
      title: 'Project Management',
      skills: ['Jira', 'Trello']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills</h2>
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag bg-primary text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 scale-75 transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
