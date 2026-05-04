import { images } from '../content.js';
import ImageCard from './ImageCard.jsx';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

const experiences = [
  {
    title: 'Mañanas lentas frente al océano',
    text: 'Empieza el día con la luz atlántica, el sonido del mar y la calma de una casa pensada para desconectar.',
    image: images.seaView,
  },
  {
    title: 'Tardes de playa y paseos por la costa',
    text: 'A pocos pasos, la costa lucense despliega playas, acantilados, senderos y paisajes que cambian con la marea.',
    image: images.cliffs,
  },
  {
    title: 'Atardeceres desde la terraza',
    text: 'Cuando cae el sol, la terraza se convierte en el lugar perfecto para mirar al horizonte y dejar que el día termine sin prisa.',
    image: images.hero,
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-shell py-24 sm:py-32">
      <SectionTitle eyebrow="Experiencia" title="Una estancia para vivir Galicia desde el mar" align="center" />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {experiences.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <ImageCard image={item.image} imgClassName="aspect-[4/5]">
              {null}
            </ImageCard>
            <div className="-mt-16 ml-5 mr-5 relative rounded-[1.5rem] bg-ivory/92 p-6 shadow-soft backdrop-blur">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-serif text-3xl font-semibold leading-none text-night">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-night/68">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
