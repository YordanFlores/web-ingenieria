import { useMemo, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [formStatus, setFormStatus] = useState('idle') // idle | sending | sent
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })

  const year = useMemo(() => new Date().getFullYear(), [])

  function onChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setFormStatus('sending')
    await new Promise((r) => setTimeout(r, 550))
    setFormStatus('sent')
    setValues({ nombre: '', email: '', asunto: '', mensaje: '' })
    setTimeout(() => setFormStatus('idle'), 2500)
  }

  return (
    <div className="page">
      <a className="skipLink" href="#contenido">
        Saltar al contenido
      </a>

      <header className="header">
        <div className="container headerInner">
          <div className="brand" aria-label="Marca">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandText">web-ingenieria</span>
          </div>

          <nav className="nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="kicker">Hola, soy Yordan</p>
              <h1>Ingeniería web aplicada a proyectos reales.</h1>
              <p className="lead">
                Construyo experiencias digitales rápidas, seguras y mantenibles.
                Este es el punto de partida de mi proyecto <strong>web-ingenieria</strong>.
              </p>

              <div className="ctaRow">
                <a className="btn primary" href="#contacto">
                  Contáctame
                </a>
                <a className="btn ghost" href="#servicios">
                  Ver servicios
                </a>
              </div>

              <ul className="stats" aria-label="Puntos clave">
                <li>
                  <span className="statNum">UX</span>
                  <span className="statLabel">Diseño moderno</span>
                </li>
                <li>
                  <span className="statNum">SEO</span>
                  <span className="statLabel">Base técnica sólida</span>
                </li>
                <li>
                  <span className="statNum">DX</span>
                  <span className="statLabel">Código mantenible</span>
                </li>
              </ul>
            </div>

            <div className="heroCard" aria-label="Vista previa del proyecto">
              <div className="heroCardTop">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="heroCardTitle">Proyecto / Dashboard</span>
              </div>
              <img
                className="heroImg"
                src={heroImg}
                alt="Ilustración del proyecto web-ingenieria"
                loading="eager"
              />
              <div className="heroCardBottom">
                <span className="badge">Azul oscuro</span>
                <span className="badge">Gris industrial</span>
                <span className="badge">Responsive</span>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Servicios</h2>
              <p>
                Soluciones enfocadas en rendimiento, claridad y resultados medibles.
              </p>
            </div>

            <div className="cards">
              <article className="card">
                <h3>Landing pages</h3>
                <p>
                  Páginas rápidas y profesionales, listas para convertir y escalar tu
                  proyecto.
                </p>
                <ul className="cardList">
                  <li>Diseño moderno</li>
                  <li>Accesibilidad</li>
                  <li>Optimización web</li>
                </ul>
              </article>

              <article className="card">
                <h3>Front-end React</h3>
                <p>
                  Componentes reutilizables, UI consistente y buenas prácticas para
                  equipos.
                </p>
                <ul className="cardList">
                  <li>Arquitectura</li>
                  <li>Performance</li>
                  <li>Escalabilidad</li>
                </ul>
              </article>

              <article className="card">
                <h3>Auditoría técnica</h3>
                <p>
                  Revisión de calidad: tiempos de carga, DX, SEO técnico y puntos de
                  riesgo.
                </p>
                <ul className="cardList">
                  <li>Checklist accionable</li>
                  <li>Prioridades claras</li>
                  <li>Mejoras rápidas</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="contacto" className="section sectionAlt">
          <div className="container contactGrid">
            <div className="contactCopy">
              <h2>Contacto</h2>
              <p>
                ¿Tienes una idea o necesitas apoyo con tu proyecto? Escríbeme y te
                respondo pronto.
              </p>
              <div className="contactPanel">
                <div>
                  <div className="label">Enfoque</div>
                  <div className="value">Web moderna • UI • Rendimiento</div>
                </div>
                <div>
                  <div className="label">Proyecto</div>
                  <div className="value">web-ingenieria</div>
                </div>
              </div>
            </div>

            <form className="form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  value={values.nombre}
                  onChange={onChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="asunto">Asunto</label>
                <input
                  id="asunto"
                  name="asunto"
                  value={values.asunto}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={values.mensaje}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="formRow">
                <button
                  className="btn primary"
                  type="submit"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending'
                    ? 'Enviando…'
                    : formStatus === 'sent'
                      ? 'Enviado'
                      : 'Enviar mensaje'}
                </button>
                <p className="formHint" role="status" aria-live="polite">
                  {formStatus === 'sent'
                    ? 'Mensaje enviado (demo). Conecta un backend cuando quieras.'
                    : 'Este formulario es una demo local.'}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <p>© {year} Yordan — web-ingenieria</p>
          <div className="footerLinks" aria-label="Enlaces del pie">
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
