import { images } from '../content.js';
import ImageCard from './ImageCard.jsx';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function StorySection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative order-2 lg:order-1">
          <ImageCard image={images.urbanizationView} imgClassName="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" />
          <Reveal
            delay={0.18}
            className="glass absolute -bottom-8 left-5 max-w-xs rounded-[1.5rem] p-5 shadow-lift sm:left-auto sm:right-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">Dato destacado</p>
            <p className="mt-2 font-serif text-3xl font-semibold leading-none text-night">
              A pocos pasos de la Playa de las Catedrales
            </p>
          </Reveal>
        </div>
        <div className="order-1 lg:order-2">
          <SectionTitle eyebrow="La historia" title="Despertar con el sonido del mar">
            <p>
              En plena costa lucense, donde Galicia se encuentra con el Cantábrico, Casa Cantábrica Mariña ofrece
              una estancia tranquila, luminosa y profundamente conectada con el paisaje.
            </p>
            <p className="mt-4">
              Un lugar para bajar el ritmo, caminar junto a los acantilados, disfrutar de la brisa marina y vivir unos
              días con el océano como protagonista.
            </p>
          </SectionTitle>
        </div>
      </div>
    </section>
  );
}
