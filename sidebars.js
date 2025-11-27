// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'introduccion',
    {
      type: 'category',
      label: ' Documentos Oficiales',
      items: [
        'documentos/guia-catedra',
      ],
    },
    {
      type: 'category',
      label: ' Tutoriales',
      items: [
        'tutoriales/guia-instalacion',
      ],
    },
    {
      type: 'category',
      label: ' Ejemplos de Código',
      items: [
        'ejemplos/ejemplo-basico',
      ],
    },
    {
      type: 'category',
      label: ' Material de Lectura',
      items: [
        'lectura/material-1',
      ],
    },
    {
      type: 'category',
      label: ' Presentaciones',
      items: [
        'presentaciones/clase-1',
      ],
    },
  ],
};

export default sidebars;