const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (Electrical and Electronics)',
      university: 'Shivani Engineering College',
      period: 'Graduated',
      description: 'Percentage: 81.6%'
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      university: 'Bishop Heber Higher Sec. School',
      period: 'Completed',
      description: 'Percentage: 72.5%'
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      university: 'Bishop Heber Higher Sec. School',
      period: 'Completed',
      description: 'Percentage: 89.6%'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{edu.degree}</h3>
              <p className="text-lg font-medium text-gray-800 mb-1">{edu.university}</p>
              <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
              <p className="text-gray-600 leading-relaxed font-medium">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
