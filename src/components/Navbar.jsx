import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../content.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = scrolled ? 'text-night/75 hover:text-night' : 'text-white/82 hover:text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-night/10 bg-ivory/88 py-3 shadow-soft backdrop-blur-xl' : 'py-5'
      }`}
    >
      <nav className="section-shell flex items-center justify-between">
        <a
          href="#inicio"
          className={`font-serif text-2xl font-semibold tracking-[-0.03em] transition ${
            scrolled ? 'text-night' : 'text-white'
          }`}
          onClick={() => setOpen(false)}
        >
          Casa Atlántica Mariña
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`text-sm font-semibold transition ${linkClass}`}>
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className={`hidden rounded-full px-5 py-3 text-sm font-bold transition lg:inline-flex ${
            scrolled
              ? 'bg-night text-white hover:bg-terracotta'
              : 'bg-white text-night hover:bg-sand'
          }`}
        >
          Consultar disponibilidad
        </a>
        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((value) => !value)}
          className={`rounded-full p-3 transition lg:hidden ${scrolled ? 'bg-night/10 text-night' : 'bg-white/15 text-white'}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="section-shell pt-4 lg:hidden">
          <div className="glass grid gap-2 rounded-[1.5rem] p-4 shadow-soft">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-night transition hover:bg-white/70"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-night px-4 py-3 text-center text-sm font-bold text-white"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
