import { useEffect, useRef } from 'react'

const Experience = () => {
  const timelineRef = useRef(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = timelineRef.current.querySelectorAll('.timeline-item')
    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [])

  const experiences = [
    {
      title: 'Senior Consultant',
      company: 'Bahwan CyberTek | Muscat, Oman',
      period: 'Nov 2018 – Present',
      description: [
        'Lead full-stack development for web and mobile solutions serving housing, logistics, and enterprise sectors.',
        'Architected front-end interfaces with React.js and React Native, improving UI responsiveness by 25 percent.',
        'Delivered complete mobile app lifecycles to Play Store, App Store, and App Center with zero post-launch defects.',
        'Collaborated with business units to define technical requirements, estimate effort, and align releases with priorities.',
        'Improved issue resolution efficiency by 30 percent through proactive debugging and documentation.'
      ],
      projects: [
        {
          name: 'MOH E-Service',
          client: 'Ministry of Housing, Muscat, Oman',
          duration: 'Nov 2019 – Present',
          environment: 'React Js, React Native, Oracle SQL, REST APIs, Java',
          description: [
            'Defined tasks and delivery timelines, ensuring consistent code quality and maintainability.',
            'Developed web and mobile applications to enhance citizen services and internal workflows.',
            'Integrated APIs and Oracle SQL modules for real-time data exchange and secure access.',
            'Supported multiple divisions, including Land Development and Real Estate, improving service turnaround times.'
          ]
        },
        {
          name: 'AL Tasnim Passenger App',
          client: 'AL Tasnim Enterprises, Muscat, Oman',
          duration: '1 Year',
          environment: 'Java, Android, Kotlin, XML',
          description: [
            'Designed and implemented passenger and logistics management modules with GPS tracking.',
            'Enhanced app usability with employee role-based access and real-time trip monitoring.',
            'Improved operational efficiency by 20 percent through workflow automation.',
            'Used Android Studio, SDK, AVD Manager, SVN for end-to-end delivery.'
          ]
        },
        {
          name: 'E-Delivery',
          client: 'OOMCO – Oman Oil Marketing Company, Muscat',
          duration: '6 Months',
          environment: 'Android, XML, Java',
          description: [
            'Developed driver-facing mobile app with secure login and offline tracking support.',
            'Implemented proof-of-delivery (POD) generation with automatic synchronization when online.',
            'Improved delivery accuracy and traceability through real-time data capture.'
          ]
        },
        {
          name: 'Cue Track – FSA',
          client: 'OOMCO – Oman Oil Marketing Company',
          duration: '6 Months',
          environment: 'Android, XML, Java',
          description: [
            'Built and maintained ticket-management mobile app with multi-role switching capability.',
            'Defined project tasks, estimated timelines, and ensured quality code delivery and testing.',
            'Optimized ticket handling process, reducing manual tracking errors by 15 percent.'
          ]
        }
      ]
    },
    {
      title: 'Software Developer',
      company: 'Mobello Technologies | Chennai, India',
      period: 'Mar 2017 – Oct 2018',
      description: [
        'Developed Android applications using Java and XML with Android Studio and GitHub.',
        'Built consumer apps such as TecProtec, Wine Talk, and Shift with high user satisfaction.',
        'Optimized app performance and reduced crash rates by 40%.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Benchmark Business Software | Chennai, India',
      period: 'Jun 2015 – Feb 2017',
      description: [
        'Developed Android and web applications for SME clients using Java, XML, and Oracle SQL.',
        'Participated in all SDLC phases from requirements to deployment.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>
        <div ref={timelineRef} className="relative max-w-4xl mx-auto pl-8 md:pl-16">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item relative mb-12 opacity-0 -translate-x-5 transition-all duration-700"
            >
              <div className="absolute -left-[2.25rem] top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md"></div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1">
                <h3 className="text-2xl font-semibold text-primary mb-2">{exp.title}</h3>
                <p className="text-lg font-medium text-gray-800 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-none space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 pl-6 relative">
                      <span className="absolute left-0 text-primary">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.projects && exp.projects.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Projects:</h4>
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="mb-6 last:mb-0">
                        <h5 className="text-base font-semibold text-primary mb-1">{project.name}</h5>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Client:</span> {project.client}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Duration:</span> {project.duration}
                          {project.environment && (
                            <> | <span className="font-medium">Environment:</span> {project.environment}</>
                          )}
                        </p>
                        <ul className="list-none space-y-1.5 mt-2">
                          {project.description.map((item, dIndex) => (
                            <li key={dIndex} className="text-sm text-gray-600 pl-5 relative">
                              <span className="absolute left-2 text-primary text-xs">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
