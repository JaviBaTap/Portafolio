# 🚀 Portafolio Personal - React & Vite

Aplicación web interactiva de tipo **Portafolio Personal** desarrollada con tecnologías modernas de Front-End, siguiendo estrictas pautas de arquitectura limpia, diseño atómico y pruebas automatizadas.

---

## 🛠️ Tecnologías y Librerías Utilizadas
* **React 18+** (con Vite para un rendimiento ultrarrápido)
* **Radix UI Themes & Icons** (Librería de componentes de interfaz accesibles y estilizados)
* **Web3Forms API** (Integración para el formulario de contacto directo al correo)
* **Vitest & Testing Library** (Suite de pruebas unitarias y de integración)

---

## 📂 Arquitectura del Proyecto (Atomic Design)
El proyecto se encuentra estructurado bajo la metodología **Atomic Design**, separando responsabilidades de manera modular:
```text
src/
├── components/
│   ├── atoms/       # Elementos base (botones, avatares, textos, enlaces)
│   ├── molecules/   # Combinaciones de átomos (tarjetas, campos de formulario, menús)
│   ├── organisms/   # Secciones funcionales completas (Hero, Navbar, ContactSection, etc.)
│   ├── templates/   # Plantillas estructurales (MainLayout)
│   └── pages/       # Páginas principales (HomePage)
├── hooks/           # Hooks personalizados (useContactForm, useProjects, useScrollSections)
├── data/            # Fuentes de datos estáticas (proyectos, experiencias, educación)
├── theme/           # Configuración visual global y paleta de colores
└── test/            # Configuración de entornos de prueba

```

---

## 📋 Secciones del Portafolio

Sección Personal (Hero): Presentación profesional con avatar estilizado y descripción biográfica.
Experiencia Laboral: Historial cronológico de cargos y empresas desempeñadas.
Estudios: Detalle de formación académica y certificaciones.
Desarrollos y Proyectos: Grilla interactiva de proyectos destacados con enlaces a repositorios.
Contacto: Enlaces directos a redes sociales (GitHub, LinkedIn) y formulario de contacto validado con Web3Forms.
Footer: Pie de página dinámico con cálculo automático del año actual y datos de contacto.

---

## ⚙️ Instrucciones de Instalación y Ejecución Local

Sigue estos pasos para levantar el proyecto en tu máquina local:

1. Clonar el repositorio 

    git clone <url-de-tu-repositorio>

    cd Portafolio-main

2. Instalar dependencias
Asegúrate de tener instalado Node.js (versión 18 o superior recomendada) y ejecuta:

    npm install

3. Ejecutar en modo desarrolloPara iniciar el servidor local de desarrollo con Vite:

    npm run dev

La aplicación estará disponible por defecto en http://localhost:5173.

4. Ejecutar las pruebas automatizadas (Testing)
Para correr la suite de pruebas unitarias e de integración con Vitest:
    
    npm test

(Opcional con interfaz gráfica: npm run test:ui)

---

## 👤 Autor

Desarrollado por Javiera Bañares.   