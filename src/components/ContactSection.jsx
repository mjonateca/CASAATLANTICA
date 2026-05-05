import { contactEmail } from '../content.js';
import Reveal from './Reveal.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function ContactSection() {
  return (
    <section id="contacto" className="section-shell pb-24 sm:pb-32">
      <div className="grid gap-10 rounded-[2.5rem] bg-white/66 p-5 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
        <div className="rounded-[2rem] bg-bg-grain bg-grain p-8">
          <SectionTitle eyebrow="Contacto" title="Consultar disponibilidad y precio">
            <p>
              Cuéntanos tus fechas aproximadas y el tipo de estancia. Las respuestas del formulario se enviarán a
              Javier para gestionar disponibilidad y condiciones.
            </p>
          </SectionTitle>
          <Reveal className="mt-8 rounded-[1.5rem] bg-night p-6 text-white">
            <p className="text-sm font-bold">Precio a consultar</p>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Disponibilidad bajo petición para semanas, quincenas y meses completos.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <form className="grid gap-4" action={`https://formsubmit.co/${contactEmail}`} method="POST">
            <input type="hidden" name="_subject" value="Nueva solicitud - Casa Cantábrica Mariña" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
            {[
              { label: 'Nombre', name: 'nombre', type: 'text', placeholder: 'Tu nombre' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'tu@email.com' },
              { label: 'Fechas aproximadas', name: 'fechas_aproximadas', type: 'text', placeholder: 'Ej. segunda quincena de julio' },
            ].map((field) => (
              <label key={field.label} className="grid gap-2 text-sm font-bold text-night">
                {field.label}
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="rounded-2xl border border-night/10 bg-ivory px-5 py-4 font-medium outline-none transition placeholder:text-night/35 focus:border-terracotta"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-bold text-night">
              Tipo de estancia
              <select
                name="tipo_de_estancia"
                className="rounded-2xl border border-night/10 bg-ivory px-5 py-4 font-medium outline-none transition focus:border-terracotta"
              >
                <option>Semana</option>
                <option>Quincena</option>
                <option>Mes completo</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-night">
              Mensaje
              <textarea
                name="mensaje"
                rows="5"
                placeholder="Número de personas, fechas flexibles o cualquier detalle útil."
                required
                className="resize-none rounded-2xl border border-night/10 bg-ivory px-5 py-4 font-medium outline-none transition placeholder:text-night/35 focus:border-terracotta"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-night px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-terracotta"
            >
              Solicitar disponibilidad
            </button>
            <p className="text-center text-xs leading-5 text-night/50">
              Te responderemos lo antes posible con disponibilidad y precios.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
