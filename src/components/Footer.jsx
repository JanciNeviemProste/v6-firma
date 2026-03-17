export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="text-2xl">⚡</span>
              <span>Peter Kováč</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Profesionálne elektroinštalačné služby v Bratislave a okolí.
              Kvalita, spoľahlivosť a bezpečnosť na prvom mieste.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rýchle odkazy</h4>
            <nav className="flex flex-col gap-2">
              <a href="#domov" className="text-gray-400 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                Domov
              </a>
              <a href="#sluzby" className="text-gray-400 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                Služby
              </a>
              <a href="#kontakt" className="text-gray-400 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                Kontakt
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontaktné údaje</h4>
            <div className="flex flex-col gap-2 text-gray-400">
              <p>Bajkalská 28, 821 09 Bratislava</p>
              <p>+421 907 123 456</p>
              <p>peter@elektrikar-ba.sk</p>
              <p>IČO: 12 345 678</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Peter Kováč — Elektrikár. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}
