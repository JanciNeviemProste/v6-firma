import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SERVICES = [
  {
    icon: '🏠',
    title: 'Elektroinštalácie v domácnostiach',
    description:
      'Kompletné elektroinštalácie pre novostavby, rekonštrukcie bytov a rodinných domov. Zabezpečíme návrh, realizáciu aj revíziu elektrickej inštalácie podľa aktuálnych noriem STN. Používame výhradne certifikované materiály od overených dodávateľov.',
  },
  {
    icon: '🏢',
    title: 'Komerčné priestory a kancelárie',
    description:
      'Elektroinštalačné práce pre obchodné priestory, kancelárie a priemyselné objekty. Navrhneme a realizujeme riešenia, ktoré spĺňajú všetky bezpečnostné predpisy a zároveň optimalizujú spotrebu energie. Ponúkame aj pravidelnú údržbu a servis.',
  },
  {
    icon: '🔍',
    title: 'Revízie a odborné prehliadky',
    description:
      'Vykonávame pravidelné revízie elektrických zariadení v súlade s platnými normami. Revízna správa je povinný dokument pre každú nehnuteľnosť. Zabezpečíme kompletné odborné prehliadky a skúšky vašich elektrických rozvodov a zariadení.',
  },
  {
    icon: '💡',
    title: 'LED osvetlenie a návrh svetelných riešení',
    description:
      'Navrhneme a nainštalujeme moderné LED osvetlenie, ktoré znižuje náklady na energie až o 80 %. Ponúkame riešenia pre interiéry aj exteriéry vrátane záhradného osvetlenia, fasádneho nasvietenia a dekoratívnych svetelných prvkov.',
  },
  {
    icon: '🏡',
    title: 'Inteligentná domácnosť',
    description:
      'Inštalácia systémov inteligentnej domácnosti, ktoré Vám umožnia ovládať osvetlenie, kúrenie, žalúzie a spotrebiče na diaľku prostredníctvom smartfónu. Spolupracujeme s poprednými značkami ako Loxone, ABB a Siemens.',
  },
  {
    icon: '⚡',
    title: 'Havarijná služba a opravy',
    description:
      'Rýchla pomoc pri výpadkoch elektriny, skratoch a iných poruchách elektroinštalácie. Pohotovostná služba je dostupná 24 hodín denne, 7 dní v týždni. Prídem k Vám do 60 minút v rámci Bratislavy a blízkeho okolia.',
  },
]

function ServiceCard({ icon, title, description, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`bg-gray-800/50 border border-gray-700/50 hover:border-blue-500 rounded-xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-base text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

export default function Features() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="sluzby" className="bg-gray-900 py-16 lg:py-24 relative">
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
            Služby, ktoré ponúkam
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Poskytnem Vám komplexné elektroinštalačné služby od návrhu po realizáciu.
            Každú zákazku beriem osobne a garantujem kvalitu odvedenej práce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" className="w-full block text-gray-950">
          <path fill="currentColor" d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  )
}
