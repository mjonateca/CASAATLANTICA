import Reveal from './Reveal.jsx';

export default function SectionTitle({ eyebrow, title, children, align = 'left', inverse = false }) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={`font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl ${
          inverse ? 'text-white' : 'text-night'
        }`}
      >
        {title}
      </h2>
      {children && (
        <div className={`mt-6 text-base leading-8 sm:text-lg ${inverse ? 'text-white/72' : 'text-night/70'}`}>
          {children}
        </div>
      )}
    </Reveal>
  );
}
