# Vanguard AutoPartes - Landing Page

Landing page estática para Vanguard AutoPartes. Este sitio presenta la compañía, productos y servicios de autopartes de manera profesional y moderna.

## 🚀 Deploy Rápido

Este proyecto es una landing page **100% estática** (HTML, CSS, JavaScript) lista para desplegar en plataformas modernas de hosting gratuito.

### Opción 1: Cloudflare Pages (Recomendado)

1. **Sube tu código a GitHub/GitLab**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <tu-repositorio>
   git push -u origin main
   ```

2. **Conecta con Cloudflare Pages**:
   - Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Selecciona "Pages" → "Create a project"
   - Conecta tu repositorio de GitHub/GitLab
   - Configura el proyecto:
     - **Build command**: (dejar vacío)
     - **Build output directory**: `/`
     - **Root directory**: `/`
   - Click "Save and Deploy"

3. **¡Listo!** Tu sitio estará disponible en `https://tu-proyecto.pages.dev`

### Opción 2: Vercel

1. **Sube tu código a GitHub/GitLab** (igual que arriba)

2. **Conecta con Vercel**:
   - Ve a [Vercel](https://vercel.com/)
   - Click "New Project"
   - Importa tu repositorio
   - Configura el proyecto:
     - **Framework Preset**: Other
     - **Build Command**: (dejar vacío)
     - **Output Directory**: `./`
   - Click "Deploy"

3. **¡Listo!** Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

### Opción 3: Deploy Manual (Netlify Drop)

1. **Arrastra y suelta** toda la carpeta del proyecto en [Netlify Drop](https://app.netlify.com/drop)
2. **¡Listo!** Tu sitio estará disponible instantáneamente

## 💻 Desarrollo Local

Para probar el sitio localmente, necesitas un servidor HTTP simple:

### Opción 1: Python (si está instalado)
```bash
cd c:\xampp\htdocs\VanguardAutoPartes
python -m http.server 8000
```
Luego abre: `http://localhost:8000`

### Opción 2: PHP (usando XAMPP)
```bash
cd c:\xampp\htdocs\VanguardAutoPartes
php -S localhost:8000
```
Luego abre: `http://localhost:8000`

### Opción 3: Node.js (si está instalado)
```bash
npx -y http-server -p 8000
```
Luego abre: `http://localhost:8000`

### Opción 4: Live Server (VS Code Extension)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

## 📁 Estructura del Proyecto

```
VanguardAutoPartes/
├── index.html          # Landing page principal
├── css/
│   └── landing.css     # Estilos del sitio
├── js/
│   └── landing.js      # Interactividad y navegación
├── img/
│   ├── logos/          # Logos de la marca
│   ├── banners/        # Imágenes de hero y banners
│   ├── categorias/     # Iconos de categorías de productos
│   └── ui/             # Elementos de interfaz
└── README.md           # Este archivo
```

## ✨ Características

- ✅ **100% Estático** - Sin dependencias de servidor o base de datos
- ✅ **Responsive Design** - Optimizado para móviles y tablets
- ✅ **SEO Optimizado** - Meta tags y estructura semántica
- ✅ **Navegación Suave** - Scroll suave entre secciones
- ✅ **WhatsApp Integration** - Botón flotante para contacto directo
- ✅ **Font Awesome Icons** - Iconos profesionales
- ✅ **Rápido** - Carga instantánea, sin procesamiento del servidor

## 📱 Secciones

1. **Header** - Logo y botón de contacto
2. **Navegación** - Links a todas las secciones
3. **Hero** - Banner principal con CTA
4. **Categorías** - 6 categorías de productos
5. **Servicios** - Destacados de la empresa
6. **Compañía** - Visión y valores
7. **Footer** - Links útiles y redes sociales
8. **WhatsApp Float** - Botón de contacto permanente

## 🔧 Personalización

### Cambiar número de WhatsApp

Busca y reemplaza `+5491112345678` en `index.html` con tu número real (incluye código de país).

### Actualizar contenido

Edita directamente `index.html` - todos los textos están en español y claramente comentados.

### Modificar estilos

Edita `css/landing.css` para cambiar colores, fuentes, espaciados, etc.

### Cambiar imágenes

Reemplaza las imágenes en la carpeta `img/` manteniendo los mismos nombres de archivo.

## 📊 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript (Vanilla)** - Sin frameworks, código limpio
- **Font Awesome 6.5.1** - Iconos vectoriales

## 📝 Notas

- No requiere PHP, MySQL, ni ningún backend
- No requiere Node modules ni build process
- Funciona directamente abriendo `index.html` en cualquier navegador
- Compatible con todos los servicios de hosting estático

## 📞 Contacto

Para más información sobre Vanguard AutoPartes, visita el sitio web o contáctanos vía WhatsApp.

---

**© VANGUARD S.R.L - TODOS LOS DERECHOS RESERVADOS**
