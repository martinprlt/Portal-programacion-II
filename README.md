# Portal de Programación II

Este proyecto es un portal web para centralizar todo el material de la cátedra de Programación II. Está construido con Docusaurus y busca resolver el problema de tener contenido disperso en múltiples lugares.

---

## ¿Qué problema resuelve?

Actualmente el material de la cátedra está repartido en carpetas de Google Drive, lo que hace difícil encontrar cosas específicas y mantener todo actualizado. Este portal unifica todo en un solo lugar accesible para estudiantes y docentes.

**Situación anterior:**
- Material en distintas carpetas de Drive
- Los estudiantes no saben dónde buscar
- Subir contenido nuevo es lento
- No hay forma de avisar sobre actualizaciones

**Con el portal:**
- Todo centralizado en una URL
- Búsqueda integrada
- Subir contenido es simple (ver manual)
- Sección de "Novedades" visible
- Acceso desde cualquier dispositivo

---

## Docusaurus

Docusaurus es un generador de sitios web creado por Meta (Facebook) específicamente para documentación. Lo elegimos por varias razones:

### Fácil de usar
El contenido se escribe en Markdown, que es básicamente texto plano con algunos símbolos para dar formato. Cualquier docente puede agregar material sin saber programar.

### Trae todo incluido
- Búsqueda automática
- Navegación entre páginas
- Modo claro/oscuro
- Diseño responsive (funciona en móvil)
- Muy rápido

### Es confiable
Lo usa Meta y miles de proyectos grandes. Tiene buena documentación y comunidad activa.

### Es gratis
Se puede hostear gratis en GitHub Pages. No necesitamos servidor propio ni pagar licencias.

---

## Beneficios concretos

### Para los estudiantes:
- Ya no tienen que buscar en 10 carpetas distintas
- Todo está organizado por temas
- Pueden buscar palabras clave y encuentra rapidamente
- Ven qué material es nuevo

### Para los docentes:
- Subir material es más rápido (hay un manual paso a paso)
- El sitio se actualiza solo cuando hacen cambios
- Menos consultas de "dónde está X cosa"
- Interfaz profesional
- Git guarda historial de cambios por si hay que volver atrás

### Para la cátedra:
- Imagen más moderna
- Cero costo de hosting
- Se puede replicar para otras materias
- Fácil de escalar

---

## Qué tiene el portal

### Secciones principales:

**Documentos** - Guía de cátedra, programa, cronogramas

**Tutoriales** - Instalación de Python, configuración del entorno, etc.

**Ejemplos** - Código comentado mostrando los conceptos

**Material de Lectura** - Teoría de POO, papers, artículos

**Presentaciones** - Slides de las clases


### Funcionalidades:

- Búsqueda en todo el contenido
- Links directos compartibles
- Categorías y etiquetas
- Lista de "Contenido reciente" en la home
- Perfiles de los docentes
- Funciona en desktop, tablet y celular

---

## Tecnología usada

- **Docusaurus 3.9.2** - El framework base
- **React 19** - Para los componentes interactivos
- **Node.js 20+** - Runtime necesario
- **Markdown/MDX** - Para escribir el contenido
- **Git/GitHub** - Control de versiones y hosting

Colores personalizados con los de la universidad (azul + celeste tipo VS Code).

---

## Instalación

### Requisitos:
- Node.js 20 o superior
- npm (viene con Node.js)
- Git

### Pasos:

1. **Clonar el repo:**
   ```bash
   git clone https://github.com/martinprlt/Portal-programacion-II.git
   cd Portal-programacion-II
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Correr en local:**
   ```bash
   npm start
   ```
   
   Se abre automáticamente en `http://localhost:3000`

---

## Comandos útiles

```bash
# Desarrollo local
npm start

# Compilar para producción
npm run build

# Servir build localmente
npm run serve

# Limpiar caché
npm run clear
```

---

## Estructura del proyecto

```
portal-programacion-II/
├── blog/                    # Posts del blog (novedades)
│   ├── 2025-11-19-bienvenida.md
│   ├── authors.yml          # Info de los profes
│   └── tags.yml
│
├── docs/                    # Contenido principal
│   ├── documentos/          # Guía, programa, etc.
│   ├── tutoriales/          # Guías paso a paso
│   ├── ejemplos/            # Código
│   ├── lectura/             # Teoría
│   ├── presentaciones/      # Slides
│   └── introduccion.md
│
├── src/
│   ├── css/custom.css       # Estilos personalizados
│   └── pages/index.js       # Home page
│
├── static/img/              # Imágenes y favicon
├── docusaurus.config.js     # Configuración
├── sidebars.js              # Navegación lateral
└── MANUAL_CATEDRA.md        # Manual para docentes
```

---

## Cómo agregar contenido

Hay un [manual completo](./MANUAL_CATEDRA.md) pero acá va lo básico:

### Opción 1: Directo en GitHub (más fácil)

1. Ir a la carpeta que corresponda (ej: `docs/tutoriales/`)
2. Click en "Add file" → "Create new file"
3. Nombrar el archivo: `mi-tutorial.md`
4. Escribir en Markdown
5. Commit changes

### Opción 2: Local

1. Crear archivo `.md` en la carpeta correcta
2. Escribir contenido
3. `git add .`
4. `git commit -m "Agrego tutorial X"`
5. `git push`

### Formato básico de un archivo:

```markdown
---
title: Mi Tutorial
---

# Mi Tutorial

Texto normal...

## Subtítulo

Más texto...

```python
# Código Python
def ejemplo():
    return "Hola"
```

:::tip Consejo
Esto es una nota destacada
:::
```

---

## Deploy

El sitio está configurado para GitHub Pages. Cuando se hace push a `main`, se actualiza automáticamente.

Si querés deployar manualmente:

```bash
npm run build
GIT_USER=tu-usuario npm run deploy
```

También funciona con Netlify o Vercel como plataformas alternativas para el despliegue. 

---

## Manual para docentes

Incluye un manual detallado para que cualquier docente pueda gestionar contenido sin saber programar:

📖 **[MANUAL_CATEDRA.md](./MANUAL_CATEDRA.md)**

Cubre:
- Cómo subir material nuevo
- Editar contenido existente
- Formato Markdown
- Solución de problemas
- Buenas prácticas

---

## Mejoras futuras

Ideas para implementar más adelante:

- Sistema de comentarios en las páginas
- Analytics para ver qué contenido se usa más
- Notificaciones cuando hay material nuevo
- Integración con Google Classroom
- Modo offline completo (PWA)

---

## Recursos útiles

**Docusaurus:**
- [Documentación oficial](https://docusaurus.io/docs)
- [Tutorial básico](https://docusaurus.io/docs/category/tutorial---basics)

**Markdown:**
- [Guía de Markdown](https://www.markdownguide.org/)
- [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

---
