import { MapPin, Navigation, Utensils, Waves } from 'lucide-react';
import { images } from '../content.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

const points = [
  'Playa de las Catedrales a pocos pasos',
  'Costa, acantilados y rutas naturales',
  'Entorno tranquilo y familiar',
  'Ideal para semanas, quincenas o meses completos',
  'Buena base para descubrir la Mariña Lucense',
  'Mar, naturaleza y gastronomía gallega',
];

export default function LocationSection() {
  return (
    <section id="ubicacion" className="overflow-hidden bg-night py-24 text-white sm:py-32">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionTitle eyebrow="Ubicación" title="En la Mariña Lucense, junto a la Playa de las Catedrales" inverse>
              <p>
                La casa se encuentra en un enclave privilegiado de la costa de Lugo, en una zona tranquila y natural,
                muy cerca de uno de los paisajes más icónicos de Galicia: la Playa de las Catedrales.
              </p>
            </SectionTitle>
            <Reveal className="mt-10 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-white/82">
                  {point}
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-atlantic/25 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-lift backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img src={images.cliffs.src} alt={images.cliffs.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <div className="grid gap-3 p-3 sm:grid-cols-3">
                {[
                  { icon: MapPin, label: 'Mariña Lucense' },
                  { icon: Waves, label: 'Frente al mar' },
                  { icon: Utensils, label: 'Costa y gastronomía' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-2xl bg-ivory p-4 text-night">
                    <Icon className="mb-3 h-5 w-5 text-terracotta" strokeWidth={1.7} />
                    <p className="text-sm font-bold">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mx-3 mb-3 rounded-[1.25rem] bg-sand/15 p-5">
                <Navigation className="mb-3 h-5 w-5 text-sand" strokeWidth={1.7} />
                <p className="font-serif text-3xl font-semibold leading-none">Costa de Lugo, Galicia</p>
                <p className="mt-3 text-sm leading-6 text-white/68">Referencia visual de ubicación. No se muestra dirección exacta.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
