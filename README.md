# React: de cero a experto — apuntes y práctica

Repositorio personal de ejercicios, apuntes y proyectos que voy completando mientras estudio el curso [React: De cero a experto](https://www.udemy.com/course/react-cero-experto/).

El contenido refleja mi avance real y seguirá creciendo módulo a módulo. El curso es el material de estudio; este repositorio contiene mis propias prácticas y notas.

## Avance

### 01 · Reforzamiento de fundamentos

Proyecto de práctica con TypeScript y Vite, previo a los módulos de React.

- [x] Variables, constantes y tipos básicos
- [x] Template strings
- [x] Objetos, interfaces y propiedades opcionales
- [x] Arreglos y copia con spread
- [x] Funciones, funciones flecha y tipos de retorno
- [x] Desestructuración de objetos y arreglos
- [x] Importaciones, exportaciones, interfaces y enum
- [x] Promesas
- [x] Consumo de una API con `fetch` (Giphy)
- [ ] Continuar con los siguientes temas del curso

Los ejercicios están en [`01-reforzamiento/src/bases`](01-reforzamiento/src/bases). El ejemplo de datos está en `01-reforzamiento/src/bases/data/heroes.data.ts`.

## Estructura

```text
React/
├── README.md
├── react-cheatsheet.pdf
└── 01-reforzamiento/
    ├── src/
    │   ├── bases/
    │   └── main.ts
    ├── package.json
    └── ...
```

Cada carpeta numerada corresponde a una etapa o proyecto independiente. Así se conserva todo el avance en un solo repositorio, con una instalación y configuración por proyecto.

## Requisitos

- Node.js compatible con la versión de Vite instalada
- npm
- Una clave de API de Giphy para ejecutar el ejercicio de `fetch`

## Ejecutar el proyecto actual

```bash
cd 01-reforzamiento
npm install
```

Crea `01-reforzamiento/.env.local` a partir del ejemplo y añade tu propia clave:

```bash
cp .env.example .env.local
```

En Windows PowerShell puedes copiarlo con:

```powershell
Copy-Item .env.example .env.local
```

Completa `VITE_GIPHY_API_KEY` en `.env.local` y luego inicia el servidor:

```bash
npm run dev
```

Vite mostrará la dirección local en la terminal. Para generar la versión de producción:

```bash
npm run build
```

## Subir a GitHub

Desde la carpeta raíz `React`, crea un repositorio vacío en GitHub y conecta su URL:

```bash
git init
git add README.md .gitignore react-cheatsheet.pdf 01-reforzamiento
git commit -m "docs: documenta avance inicial del curso de React"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

Reemplaza `USUARIO/REPOSITORIO` por los datos de tu repositorio. `node_modules`, compilaciones y archivos `.env` locales están excluidos por `.gitignore`.

## Material del curso

El curso original está disponible en [Udemy](https://www.udemy.com/course/react-cero-experto/). El archivo `react-cheatsheet.pdf` es material de referencia local; antes de publicar el repositorio, confirma que tienes permiso para redistribuir ese archivo. Si no, quítalo del repositorio y conserva solo un enlace o referencia personal.

## Licencia

El código de práctica es personal y educativo. Aún no se ha definido una licencia para reutilización.
