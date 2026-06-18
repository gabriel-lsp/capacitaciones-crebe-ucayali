# Estructura del proyecto

Este documento propone una organización básica para el repositorio Capacitaciones CREBE Ucayali.

La estructura busca mantener separados los archivos principales, los datos, los recursos visuales, los documentos, los enlaces a videos y la documentación de respaldo.

## Estructura sugerida

```text
capacitaciones-crebe-ucayali/
│
├── index.html
├── estilos.css
├── app.js
├── README.md
├── LICENSE
│
├── datos/
│   └── capacitaciones.json
│
├── imagenes/
│   ├── flyers/
│   ├── infografias/
│   └── portadas/
│
├── documentos/
│   ├── diapositivas/
│   ├── guias/
│   └── materiales-descargables/
│
├── videos/
│   └── enlaces.md
│
└── docs/
    ├── autoria-y-contexto.md
    ├── fuentes-y-creditos.md
    ├── uso-permitido.md
    ├── alcance-formativo.md
    ├── criterios-de-publicacion.md
    ├── estructura-del-proyecto.md
    ├── bitacora-de-cambios.md
    └── criterios-para-videos-y-flyers.md
```

## Archivos principales

`index.html` contiene la estructura principal del sitio o página inicial del repositorio.

`estilos.css` define el diseño visual, la adaptación responsiva y la presentación de los recursos.

`app.js` puede contener funciones de búsqueda, filtros, carga de datos o interacción con el usuario.

`README.md` presenta el proyecto, su finalidad, autoría, uso permitido y estado general.

`LICENSE` establece las condiciones aplicables al código del repositorio.

## Carpeta docs

La carpeta `docs` reúne documentos de respaldo autoral, formativo, técnico y organizativo.

Estos documentos ayudan a explicar el alcance del proyecto, las condiciones de uso, los criterios de publicación, la organización del repositorio y el historial de cambios.

## Organización progresiva

La estructura puede modificarse según el crecimiento real del proyecto. Si se agregan nuevos tipos de materiales, se recomienda crear carpetas específicas y registrar los cambios en la bitácora.
