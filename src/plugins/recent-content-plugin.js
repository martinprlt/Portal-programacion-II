const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Mapeo de carpetas a tipos de contenido
const CONTENT_TYPES = {
  'documentos': { type: 'documento', label: '📄 Documento' },
  'ejemplos': { type: 'ejemplo', label: '💻 Ejemplo' },
  'tutoriales': { type: 'tutorial', label: '🛠️ Tutorial' },
  'lectura': { type: 'lectura', label: '📚 Lectura' },
  'presentaciones': { type: 'presentacion', label: '🎓 Presentación' },
};

function getContentType(filePath) {
  for (const [folder, config] of Object.entries(CONTENT_TYPES)) {
    if (filePath.includes(`/${folder}/`)) {
      return config;
    }
  }
  return { type: 'general', label: '📝 General' };
}

function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function getRecentContent(docsPath, limit = 5) {
  const files = getAllMarkdownFiles(docsPath);
  
  const contentList = files.map(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter } = matter(content);
    const stats = fs.statSync(filePath);
    
    // Obtener la ruta relativa desde docs/
    const relativePath = path.relative(docsPath, filePath);
    const urlPath = relativePath
      .replace(/\\/g, '/')
      .replace(/\.mdx?$/, '')
      .replace(/\/index$/, '');
    
    const contentType = getContentType(filePath);
    
    return {
      title: frontMatter.title || path.basename(filePath, path.extname(filePath)),
      description: frontMatter.description || '',
      type: contentType.type,
      typeLabel: contentType.label,
      link: `/docs/${urlPath}`,
      // Usar fecha del frontmatter si existe, sino la fecha de modificación
      date: frontMatter.date || stats.mtime.toISOString().split('T')[0],
      mtime: stats.mtime.getTime(),
    };
  });

  // Ordenar por fecha de modificación más reciente
  contentList.sort((a, b) => b.mtime - a.mtime);

  // Retornar solo los más recientes
  return contentList.slice(0, limit);
}

module.exports = function recentContentPlugin(context, options) {
  return {
    name: 'recent-content-plugin',
    
    async loadContent() {
      const docsPath = path.join(context.siteDir, 'docs');
      const recentContent = getRecentContent(docsPath, options.limit || 5);
      return recentContent;
    },

    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      setGlobalData({recentContent: content});
    },
  };
};