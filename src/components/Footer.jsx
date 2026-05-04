import { navItems } from '../content.js';

export default function Footer() {
  return (
    <footer className="bg-night py-12 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <a href="#inicio" className="font-serif text-3xl font-semibold tracking-[-0.03em]">
            Casa Atlántica Mariña
          </a>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/64">
            Alojamiento turístico frente al mar en plena costa lucense, a pocos pasos de la Playa de las Catedrales.
          </p>
          <p className="mt-5 text-sm font-bold text-sand">Mariña Lucense, Galicia</p>
        </div>
        <div className="flex flex-col gap-8 sm:items-end">
          <div className="flex flex-wrap gap-4 sm:justify-end">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-white/68 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-white/44">© Casa Atlántica Mariña. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
