import { CalendarDays } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

const options = [
  {
    title: 'Semana',
    text: 'Una escapada junto al Atlántico para desconectar, descansar y disfrutar de la costa lucense.',
  },
  {
    title: 'Quincena',
    text: 'La opción ideal para vivir el ritmo de Galicia con calma, entre playa, rutas, mar y sobremesas sin prisa.',
    featured: true,
  },
  {
    title: 'Mes completo',
    text: 'Para quienes buscan una estancia larga frente al mar, con la comodidad de una casa y el paisaje como compañía.',
  },
];

export default function StayOptions() {
  return (
    <section id="estancias" className="bg-white/45 py-24 sm:py-32">
      <div className="section-shell">
        <SectionTitle eyebrow="Estancias" title="Estancias por semanas, quincenas o meses completos" align="center">
          <p>
            Disfruta de la casa el tiempo que necesites: una semana de desconexión, una quincena frente al mar o una
            estancia más larga para vivir Galicia con calma.
          </p>
        </SectionTitle>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {options.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.08}>
              <article
                className={`h-full rounded-[2rem] border p-7 shadow-soft transition hover:-translate-y-1 ${
                  option.featured
                    ? 'border-terracotta/20 bg-night text-white'
                    : 'border-night/8 bg-ivory text-night'
                }`}
              >
                <CalendarDays className={option.featured ? 'text-sand' : 'text-terracotta'} strokeWidth={1.6} />
                <h3 className="mt-7 font-serif text-4xl font-semibold leading-none">{option.title}</h3>
                <p className={`mt-5 leading-7 ${option.featured ? 'text-white/72' : 'text-night/68'}`}>{option.text}</p>
                <div className={`mt-8 rounded-[1.25rem] p-5 ${option.featured ? 'bg-white/10' : 'bg-white/74'}`}>
                  <p className="text-sm font-bold">Precio: consultar</p>
                  <p className={`mt-2 text-sm ${option.featured ? 'text-white/64' : 'text-night/58'}`}>
                    Disponibilidad bajo petición
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#contacto"
            className="inline-flex rounded-full bg-terracotta px-7 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-night"
          >
            Consultar precio y disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
