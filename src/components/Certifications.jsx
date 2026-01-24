const Certifications = () => {
  const certifications = [
    {
      title: 'Artificial Intelligence Foundations: Machine Learning',
      category: 'Machine Learning, Artificial Intelligence'
    },
    {
      title: 'AWS Essential Training for Developers',
      category: 'Amazon Web Services (AWS)'
    },
    {
      title: 'CSS Essential Training',
      category: 'Cascading Style Sheets (CSS)'
    },
    {
      title: 'HTML, CSS, and Generative AI: Speed Up Your Process',
      category: 'Front-End Development'
    },
    {
      title: 'Node.js Essential Training',
      category: 'Node.js'
    },
    {
      title: 'React: Building Progressive Web Apps (PWAs)',
      category: 'Progressive Web Applications (PWAs)'
    },
    {
      title: 'Learning Next.js',
      category: 'Next.js, React.js'
    },
    {
      title: 'Learning JavaScript Debugging',
      category: 'Debugging Code'
    },
    {
      title: 'Information Security Awareness',
      category: 'Information Security Management'
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cert.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

