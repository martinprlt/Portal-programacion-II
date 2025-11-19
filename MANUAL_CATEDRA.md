# 📖 Manual para Gestión de Contenidos

Este manual explica cómo agregar, editar y gestionar el contenido del portal de la cátedra.

## 🎯 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Estructura de Carpetas](#estructura-de-carpetas)
3. [Agregar Nuevo Contenido](#agregar-nuevo-contenido)
4. [Editar Contenido Existente](#editar-contenido-existente)
5. [Publicar Cambios](#publicar-cambios)
6. [Consejos y Trucos](#consejos-y-trucos)

---

## 📋 Requisitos Previos

No se necesitan conocimientos técnicos avanzados. Solo:
- Acceso al repositorio de GitHub
- Editor de texto (puede ser el mismo GitHub)
- Conocimientos básicos de Markdown (se explica más adelante)

---

## 📁 Estructura de Carpetas

```
docs/
├── documentos/         # Guías de cátedra, programas
├── tutoriales/         # Guías paso a paso
├── ejemplos/           # Código de ejemplo
├── lectura/            # Material teórico
└── presentaciones/     # Slides de clase

blog/                   # Novedades y anuncios
```

---

## ➕ Agregar Nuevo Contenido

### Método 1: Usando ChatGPT + GitHub (Recomendado)

1. **Preparar el contenido con ChatGPT:**
   ```
   Prompt sugerido:
   "Generame un documento en formato Markdown sobre [TEMA]. 
   Incluí título, subtítulos, ejemplos de código en Python si aplica,
   y estructuralo para estudiantes de programación."
   ```

2. **Copiar el Markdown generado**

3. **Ir a GitHub:**
   - Navegar a la carpeta correspondiente (`docs/tutoriales/`, etc.)
   - Hacer click en "Add file" → "Create new file"
   - Nombrar el archivo: `mi-tutorial.md`
   - Pegar el contenido
   - Hacer click en "Commit changes"

### Método 2: Edición Local

Si tienen el repositorio clonado:

```bash
# 1. Crear nuevo archivo
cd docs/tutoriales/
touch nuevo-tutorial.md

# 2. Editar con cualquier editor
nano nuevo-tutorial.md

# 3. Guardar y commitear
git add .
git commit -m "Agregar nuevo tutorial"
git push
```

---

## ✏️ Formato Markdown Básico

### Encabezados
```markdown
# Título Principal
## Subtítulo
### Sub-subtítulo
```

### Texto
```markdown
**Negrita**
*Cursiva*
`código inline`
```

### Listas
```markdown
- Item 1
- Item 2
  - Sub-item

1. Primer paso
2. Segundo paso
```

### Código
````markdown
```python
def saludar():
    print("Hola mundo")
```
````

### Links e Imágenes
```markdown
[Texto del link](https://url.com)
![Texto alternativo](ruta/imagen.png)
```

### Alertas/Notas
```markdown
:::tip Consejo
Esto es un consejo útil
:::

:::warning Advertencia
Esto es una advertencia
:::

:::info Información
Esto es información adicional
:::
```

---

## 🔄 Editar Contenido Existente

1. Ir al archivo en GitHub
2. Hacer click en el ícono del lápiz (Edit)
3. Realizar cambios
4. Scroll abajo → "Commit changes"
5. Agregar mensaje descriptivo
6. Confirmar

---

## 🚀 Publicar Cambios

Los cambios se publican automáticamente cuando se hace commit a la rama `main`:

1. **Hacer commit** (ya sea por GitHub web o git local)
2. **Esperar 2-3 minutos** para que GitHub Actions haga el deploy
3. **Verificar** en la URL del sitio

### Verificar estado del deploy

1. Ir a la pestaña "Actions" en GitHub
2. Ver el último workflow
3. Si está ✅ verde → deploy exitoso
4. Si está ❌ rojo → revisar errores

---

## 💡 Consejos y Trucos

### ✅ Buenas Prácticas

- **Nombres de archivo:** usar minúsculas y guiones: `clase-1.md`
- **Estructura clara:** usar encabezados para organizar
- **Código legible:** siempre especificar el lenguaje en bloques de código
- **Links relativos:** usar rutas relativas dentro del sitio

### ⚠️ Errores Comunes

1. **Olvidar el frontmatter:**
   ```markdown
   ---
   title: Mi Título
   ---
   ```

2. **Bloques de código mal cerrados:**
   ````markdown
   ```python
   # código
   ```  ← Asegurarse de cerrar con 3 backticks
   ````

3. **Links rotos:** verificar que las rutas existan

### 🎨 Personalizar Apariencia

Para cambiar colores, editar `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #TU_COLOR;
}
```

---

## 🆘 Solución de Problemas

### El sitio no actualiza

1. Verificar que el commit se hizo a la rama `main`
2. Revisar la pestaña "Actions" por errores
3. Esperar 5 minutos y refrescar con Ctrl+F5

### Error en el build

1. Revisar sintaxis Markdown
2. Verificar que todos los links existan
3. Asegurarse de cerrar todos los bloques de código

### ¿Necesitas ayuda?

- Revisar la [documentación de Docusaurus](https://docusaurus.io/docs)
- Contactar al administrador del repositorio

---

## 📞 Contacto

Para consultas técnicas o problemas con el portal:
- **Repositorio:** https://github.com/martinprlt/Portal-programacion-II
- **Issues:** https://github.com/martinprlt/Portal-programacion-II/issues

---

*Última actualización: Noviembre 2024*