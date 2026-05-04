import { galleryItems } from '../content.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function GalleryGrid() {
  return (
    <section id="galeria" className="section-shell py-24 sm:py-32">
      <SectionTitle eyebrow="Galería" title="Vistas, interiores y costa en una composición abierta" align="center">
        <p>
          Imágenes reales de la casa, la terraza, la urbanización privada y el entorno natural que acompaña cada
          estancia.
        </p>
      </SectionTitle>
      <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-4">
        {galleryItems.map((item, index) => (
          <Reveal key={`${item.caption}-${item.image.src}`} delay={index * 0.04} className={item.className}>
            <figure className="group relative h-full overflow-hidden rounded-[2rem] bg-night shadow-soft">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/72 via-night/8 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-bold text-white">{item.caption}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
