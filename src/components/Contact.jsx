import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adresa',
    value: 'Bajkalská 28, 821 09 Bratislava',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telefón',
    value: '+421 907 123 456',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'E-mail',
    value: 'peter@elektrikar-ba.sk',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Pracovná doba',
    value: 'Po – Pi: 7:00 – 17:00',
  },
]

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="bg-gray-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kontaktujte nás
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Máte otázku alebo potrebujete cenovú ponuku? Neváhajte ma kontaktovať.
            Odpoviem Vám do 24 hodín.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Správa odoslaná</h3>
                <p className="text-gray-400">
                  Ďakujem za Vašu správu. Ozvem sa Vám čo najskôr.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Meno a priezvisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                    placeholder="Ján Novák"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                    placeholder="jan.novak@email.sk"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Predmet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                    placeholder="Cenová ponuka na elektroinštaláciu"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Správa *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 resize-none"
                    placeholder="Popíšte, čo potrebujete..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Odoslať správu
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    {item.label}
                  </h4>
                  <p className="text-lg text-white">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-4 bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Pohotovostná služba</h4>
              <p className="text-gray-400 leading-relaxed">
                V prípade havárie som Vám k dispozícii aj mimo pracovnej doby.
                Zavolajte na číslo{' '}
                <span className="text-blue-400 font-semibold">+421 907 123 456</span>{' '}
                a prídem do 60 minút v rámci Bratislavy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
