import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const FeatureList = [
  {
    title: '📘 Material Organizado',
    description: (
      <>
        Todo el material de la cátedra en un solo lugar: guías, tutoriales,
        ejemplos y presentaciones organizadas por temas.
      </>
    ),
  },
  {
    title: '🚀 Fácil de Actualizar',
    description: (
      <>
        Sistema basado en Markdown que permite agregar y modificar contenido
        de forma simple, sin conocimientos técnicos avanzados.
      </>
    ),
  },
  {
    title: '🎯 Orientado a Objetos',
    description: (
      <>
        Contenido especializado en Programación Orientada a Objetos con Python,
        enfocado en los conceptos fundamentales del paradigma.
      </>
    ),
  },
];

// Contenido reciente - Actualizar manualmente cuando se suba contenido nuevo
// O en el futuro se puede automatizar con un plugin
const RecentContent = [
  {
    title: 'Guía de Cátedra',
    type: 'documento',
    typeLabel: '📄 Documento',
    description: 'Programa completo de la materia, contenidos y evaluación',
    link: '/docs/documentos/guia-catedra',
    date: '2024-11-19',
  },
  {
    title: 'Clase 1 - Introducción a POO',
    type: 'presentacion',
    typeLabel: '🎓 Presentación',
    description: 'Conceptos fundamentales de la Programación Orientada a Objetos',
    link: '/docs/presentaciones/clase-1',
    date: '2024-11-19',
  },
  {
    title: 'Ejemplo Avanzado POO',
    type: 'ejemplo',
    typeLabel: '💻 Ejemplo',
    description: 'Implementación completa de los 4 pilares de POO en Python',
    link: '/docs/ejemplos/ejemplo-basico',
    date: '2024-11-19',
  },
  {
    title: 'Material de Lectura 1',
    type: 'lectura',
    typeLabel: '📚 Lectura',
    description: 'Conceptos fundamentales de POO - Teoría',
    link: '/docs/lectura/material-1',
    date: '2024-11-19',
  },
  {
    title: 'Guía de Instalación',
    type: 'tutorial',
    typeLabel: '🛠️ Tutorial',
    description: 'Configurar el entorno de desarrollo para Python',
    link: '/docs/tutoriales/guia-instalacion',
    date: '2024-11-19',
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function RecentContentCard({title, type, typeLabel, description, link, date}) {
  return (
    <Link to={link} className={styles.recentContentLink}>
      <div className={clsx(styles.recentContentCard, 'recent-content-card')}>
        <div className={styles.recentContentHeader}>
          <span className={clsx('badge', `badge--${type}`)}>{typeLabel}</span>
          <span className={styles.recentContentDate}>{date}</span>
        </div>
        <h4 className={styles.recentContentTitle}>{title}</h4>
        <p className={styles.recentContentDesc}>{description}</p>
      </div>
    </Link>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduccion">
            Comenzar 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio`}
      description="Portal oficial de la cátedra de Programación II">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        {/* Sección de contenido reciente */}
        <section className={styles.recentSection}>
          <div className="container">
            <Heading as="h2" className="text--center margin-bottom--lg">
              📌 Contenido Reciente
            </Heading>
            <div className="row">
              {RecentContent.map((item, idx) => (
                <div key={idx} className="col col--12 margin-bottom--md">
                  <RecentContentCard {...item} />
                </div>
              ))}
            </div>
            <div className="text--center margin-top--lg">
              <Link
                className="button button--primary button--outline"
                to="/docs/introduccion">
                Ver Todo el Contenido →
              </Link>
            </div>
          </div>
        </section>
        
        {/* Acceso rápido por categoría */}
        <section className={styles.quickAccess}>
          <div className="container">
            <Heading as="h2" className="text--center margin-bottom--lg">
              🗂️ Explorar por Categoría
            </Heading>
            <div className="row">
              <div className="col col--4 col--12-mobile margin-bottom--md">
                <Link to="/docs/documentos/guia-catedra" className={styles.quickLink}>
                  <div className={styles.quickLinkCard}>
                    <h3>📄 Documentos</h3>
                    <p>Programas y guías oficiales</p>
                  </div>
                </Link>
              </div>
              <div className="col col--4 col--12-mobile margin-bottom--md">
                <Link to="/docs/tutoriales/guia-instalacion" className={styles.quickLink}>
                  <div className={styles.quickLinkCard}>
                    <h3>🛠️ Tutoriales</h3>
                    <p>Guías paso a paso</p>
                  </div>
                </Link>
              </div>
              <div className="col col--4 col--12-mobile margin-bottom--md">
                <Link to="/docs/ejemplos/ejemplo-basico" className={styles.quickLink}>
                  <div className={styles.quickLinkCard}>
                    <h3>💻 Ejemplos</h3>
                    <p>Código comentado</p>
                  </div>
                </Link>
              </div>
              <div className="col col--6 col--12-mobile margin-bottom--md">
                <Link to="/docs/lectura/material-1" className={styles.quickLink}>
                  <div className={styles.quickLinkCard}>
                    <h3>📚 Material de Lectura</h3>
                    <p>Teoría y conceptos</p>
                  </div>
                </Link>
              </div>
              <div className="col col--6 col--12-mobile margin-bottom--md">
                <Link to="/docs/presentaciones/clase-1" className={styles.quickLink}>
                  <div className={styles.quickLinkCard}>
                    <h3>🎓 Presentaciones</h3>
                    <p>Slides de clase</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA para docentes */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <Heading as="h3">👨‍🏫 ¿Sos docente?</Heading>
              <p>Revisá el manual para aprender a subir y gestionar contenido</p>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/martinprlt/Portal-programacion-II/blob/main/MANUAL_CATEDRA.md">
                Ver Manual 📖
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}