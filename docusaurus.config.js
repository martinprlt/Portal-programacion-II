// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Programación II',
  tagline: 'Portal de guías y tutoriales de Programación II',
  favicon: 'img/favicone.ico',

  future: {
    v4: true,
  },

  url: 'https://martinprlt.github.io',
  baseUrl: '/Portal-programacion-II/',

  organizationName: 'martinprlt',
  projectName: 'Portal-programacion-II',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // plugins: [
  //   [
  //     resolve(__dirname, './src/plugins/recent-content-plugin.js'),
  //     {
  //       limit: 5, // Número de items recientes a mostrar
  //     },
  //   ],
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/martinprlt/Portal-programacion-II/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Novedades de la Cátedra',
          blogDescription: 'Últimas noticias y actualizaciones',
          postsPerPage: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Programación II',
        logo: {
          alt: 'Logo Programación II',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Documentación',
          },
          {
            to: '/blog', 
            label: '📰 Novedades', 
            position: 'left'
          },
          {
            href: 'https://github.com/martinprlt/Portal-programacion-II',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contenidos',
            items: [
              {
                label: 'Documentación',
                to: '/docs/introduccion',
              },
              {
                label: 'Tutoriales',
                to: '/docs/tutoriales/guia-instalacion',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Material de Lectura',
                to: '/docs/lectura/material-1',
              },
              {
                label: 'Ejemplos',
                to: '/docs/ejemplos/ejemplo-basico',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/martinprlt/Portal-programacion-II',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Programación II - Construido con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash'],
      },
    }),
};

export default config;