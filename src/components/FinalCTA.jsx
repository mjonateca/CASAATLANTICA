import { contactMailto, images } from '../content.js';
import Reveal from './Reveal.jsx';

export default function FinalCTA() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-night px-6 py-20 text-center text-white shadow-lift sm:px-12">
          <img src={images.cta.src} alt={images.cta.alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-night/58" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night/86 to-transparent" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sand">Casa Cantábrica Mariña</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-7xl">
              Reserva unos días frente al Cantábrico
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/78">
              Un lugar para respirar, descansar y mirar al mar sin prisa.
            </p>
            <a
              href={contactMailto}
              className="mt-9 inline-flex rounded-full bg-ivory px-8 py-4 text-sm font-bold text-night transition hover:-translate-y-0.5 hover:bg-sand"
            >
              Solicitar información
            </a>
            <p className="mt-5 text-sm text-white/62">Responderemos con disponibilidad, precio y condiciones de estancia.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
