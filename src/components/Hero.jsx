import { useEffect, useState, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [started, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const STATS = [
  { value: 500, suffix: '+', label: 'dokončených projektov' },
  { value: 15, suffix: '', label: 'rokov skúseností' },
  { value: 98, suffix: '%', label: 'spokojných zákazníkov' },
  { value: 24, suffix: 'h', label: 'pohotovostná služba' },
]

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="domov" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/id/274/1920/1080"
          alt="Moderná elektroinštalácia v budove"
          className="object-cover w-full h-full"
          loading="eager"
          onError={(e) => {
            e.target.onerror = null
            e.target.style.display = 'none'
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-gray-950')
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-blue-400 font-semibold text-lg mb-4 tracking-wide uppercase">
          Elektrikár Bratislava
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Profesionálne{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            elektroinštalácie
          </span>
          <br />
          na ktoré sa môžete spoľahnúť
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-8">
          Som elektrikár s viac ako 15-ročnými skúsenosťami v oblasti elektroinštalácií
          pre domácnosti, byty aj komerčné priestory v Bratislave a okolí.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#kontakt"
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Požiadať o cenovú ponuku
          </a>
          <a
            href="#sluzby"
            className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Zistiť viac o službách
          </a>
        </div>

        {/* Social proof stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" className="w-full block text-gray-900">
          <path fill="currentColor" d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  )
}
