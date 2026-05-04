import { ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { images } from '../content.js';
import FeatureBadge from './FeatureBadge.jsx';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-night text-white">
      <img src={images.hero.src} alt={images.hero.alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/84 via-night/42 to-night/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/72 via-transparent to-night/20" />

      <div className="section-shell relative z-10 flex min-h-screen items-end pb-12 pt-32 sm:pb-16 lg:items-center lg:pb-0">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-white/78">
              Casa Cantábrica Mariña · Mariña Lucense
            </p>
            <h1 className="font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Tu refugio frente al Cantábrico
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Una casa junto al mar en la Mariña Lucense, a pocos pasos de la Playa de las Catedrales.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-ivory px-7 py-4 text-sm font-bold text-night shadow-lift transition hover:-translate-y-0.5 hover:bg-sand"
              >
                Consultar disponibilidad
              </a>
              <a
                href="#casa"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/12"
              >
                Ver la casa
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Frente al mar', 'Urbanización privada', '2 habitaciones', 'Piscina y zona recreativa'].map((item) => (
                <FeatureBadge key={item}>{item}</FeatureBadge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto hidden w-full max-w-sm rounded-[2rem] border border-white/20 bg-white/12 p-5 backdrop-blur-xl lg:block"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <img src={images.seaView.src} alt={images.seaView.alt} className="image-cover" />
            </div>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sand">Enclave privilegiado</p>
                <p className="mt-2 font-serif text-3xl font-semibold leading-none">A pocos pasos de la Playa de las Catedrales</p>
              </div>
              <ArrowDownRight className="mb-1 shrink-0 text-sand" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
