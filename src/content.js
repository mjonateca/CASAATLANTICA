export const images = {
  hero: {
    src: '/images/acantilados-casa-costa.jpg',
    alt: 'La casa del Mar sobre los acantilados de la costa lucense frente a la playa',
  },
  cta: {
    src: '/images/cta-atardecer-atlantico.jpg',
    alt: 'Sol cayendo sobre la costa atlántica frente a La casa del Mar',
  },
  seaView: {
    src: '/images/vistas-mar-playa.jpg',
    alt: 'Vistas directas al Atlántico y a la playa desde La casa del Mar',
  },
  urbanizationView: {
    src: '/images/vistas-playa-urbanizacion.jpg',
    alt: 'Urbanización privada con zona recreativa y vistas al mar',
  },
  terrace: {
    src: '/images/terraza-frente-mar.jpg',
    alt: 'Terraza privada con silla frente al mar y la playa',
  },
  livingKitchen: {
    src: '/images/salon-cocina-vistas.jpg',
    alt: 'Salón amplio con cocina integrada, comedor y salida a la terraza',
  },
  livingDining: {
    src: '/images/salon-comedor-terraza.jpg',
    alt: 'Salón comedor luminoso con vistas al mar desde los ventanales',
  },
  kitchenDining: {
    src: '/images/cocina-comedor.jpg',
    alt: 'Cocina integrada y comedor preparado en La casa del Mar',
  },
  mainBedroom: {
    src: '/images/dormitorio-principal.jpg',
    alt: 'Dormitorio principal con textiles claros y detalles marineros',
  },
  secondBedroom: {
    src: '/images/dormitorio-secundario.jpg',
    alt: 'Dormitorio secundario con cama nido y luz natural',
  },
  cliffs: {
    src: '/images/acantilados-casa-costa.jpg',
    alt: 'Acantilados de la costa lucense junto a la urbanización',
  },
  beachUrbanization: {
    src: '/images/playa-frente-urbanizacion.jpg',
    alt: 'Playa y zona verde privada frente a la costa lucense',
  },
};

export const contactEmail = 'javiergarridonovoa@gmail.com';

export const contactMailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
  'Solicitud de información - La casa del Mar',
)}&body=${encodeURIComponent(`Hola Javier,

Me gustaría solicitar información sobre La casa del Mar.

Fechas aproximadas:
Tipo de estancia: semana / quincena / mes completo
Número de personas:

Gracias.`)}`;

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'La casa', href: '#casa' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Estancias', href: '#estancias' },
  { label: 'Contacto', href: '#contacto' },
];

export const homeFeatures = [
  '2 habitaciones',
  '2 baños',
  'Salón amplio',
  'Cocina integrada',
  'Terraza frente al mar',
  'Piscina comunitaria',
  'Zona recreativa',
  'Urbanización privada',
];

export const galleryItems = [
  { image: images.seaView, caption: 'Vistas directas al Atlántico', className: 'md:col-span-2 md:row-span-2' },
  { image: images.livingDining, caption: 'Salón luminoso con cocina integrada', className: 'md:col-span-1' },
  { image: images.terrace, caption: 'Terraza sobre el mar', className: 'md:col-span-1' },
  { image: images.mainBedroom, caption: 'Dormitorio principal', className: 'md:col-span-1' },
  { image: images.secondBedroom, caption: 'Segunda habitación', className: 'md:col-span-1' },
  { image: images.urbanizationView, caption: 'Urbanización privada y zona recreativa', className: 'md:col-span-2' },
  { image: images.cliffs, caption: 'Costa lucense y acantilados', className: 'md:col-span-1' },
  { image: images.kitchenDining, caption: 'Comedor cuidado para sobremesas sin prisa', className: 'md:col-span-1' },
];
