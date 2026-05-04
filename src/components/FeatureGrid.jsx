import { Bath, BedDouble, ChefHat, Home, LandPlot, Sofa, Sparkles, Waves } from 'lucide-react';
import { homeFeatures, images } from '../content.js';
import ImageCard from './ImageCard.jsx';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

const icons = [BedDouble, Bath, Sofa, ChefHat, Waves, Sparkles, LandPlot, Home];

export default function FeatureGrid() {
  return (
    <section id="casa" className="bg-white/42 py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle eyebrow="La casa" title="Una casa cómoda, luminosa y pensada para disfrutar sin prisas">
              <p>
                Sus espacios combinan funcionalidad, vistas al mar y una atmósfera relajada perfecta para vacaciones,
                escapadas largas o estancias de desconexión.
              </p>
            </SectionTitle>
            <Reveal className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {homeFeatures.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={feature}
                    className="rounded-[1.35rem] border border-night/8 bg-ivory/82 p-5 shadow-[0_14px_38px_rgba(29,43,52,0.06)] transition hover:-translate-y-1 hover:bg-white"
                  >
                    <Icon className="mb-5 h-5 w-5 text-terracotta" strokeWidth={1.7} />
                    <p className="font-semibold text-night">{feature}</p>
                  </div>
                );
              })}
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ImageCard
              image={images.livingKitchen}
              caption="Salón amplio y cocina integrada"
              className="sm:col-span-2"
              imgClassName="aspect-[16/10]"
            />
            <ImageCard image={images.mainBedroom} caption="Dormitorio principal" imgClassName="aspect-[4/3]" />
            <ImageCard image={images.secondBedroom} caption="Segunda habitación" imgClassName="aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
