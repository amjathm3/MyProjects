import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for your message, ${formData.name}! I'll get back to you at ${formData.email} soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation.
            </p>
            <div className="space-y-4">
              <div className="text-gray-800">
                <strong className="text-primary">📍 Location:</strong> Chennai, India 600041
              </div>
              <div className="text-gray-800">
                <strong className="text-primary">📞 Phone:</strong> <a href="tel:+918012605207" className="text-primary hover:underline">+91 8012605207</a>
              </div>
              <div className="text-gray-800">
                <strong className="text-primary">✉️ Email:</strong> <a href="mailto:amjathn25@gmail.com" className="text-primary hover:underline">amjathn25@gmail.com</a>
              </div>
              <div className="text-gray-800">
                <strong className="text-primary">🔗 LinkedIn:</strong> <a href="https://linkedin.com/in/amjath-ali-m-69766852" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/amjath-ali-m-69766852</a>
              </div>
              <div className="text-gray-800 mt-6 pt-6 border-t border-gray-200">
                <strong className="text-primary">🗣️ Languages:</strong> English, Tamil, Hindi
              </div>
              <div className="text-gray-800">
                <strong className="text-primary">🏠 Address:</strong><br />
                <span className="text-sm">3/76A, Vanjinathen St, PKS Garden,<br />Periyar Salai, Palavakam,<br />Chennai - 600041</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

