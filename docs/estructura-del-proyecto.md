# Estructura del proyecto

Este documento registra la organización real del repositorio Capacitaciones CREBE Ucayali.

La estructura actual organiza los recursos por capacitación. Cada jornada puede tener una carpeta propia para conservar juntos sus archivos visuales, documentos y materiales asociados.

## Estructura real del sitio

```text
capacitaciones-crebe-ucayali/
│
├── index.html
├── estilos.css
├── app.js
├── README.md
├── LICENSE
│
├── imagenes/
│   └── capacitacion-01/
│       ├── flyer.jpg
│       └── infografia.jpg
│
├── documentos/
│   └── capacitacion-01/
│       └── diapositivas.pdf
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

`index.html` contiene la estructura principal del sitio, la cabecera, la presentación, la línea de tiempo y el pie de página.

`estilos.css` define el diseño visual, la adaptación responsiva y la presentación de los recursos.

`app.js` contiene el registro de capacitaciones y la generación de las tarjetas de recursos. En la versión actual no se utiliza buscador visible, por eso se retiró la lógica de búsqueda y filtrado que no tenía elementos correspondientes en el HTML.

`README.md` presenta el proyecto, su finalidad, autoría, uso permitido, estructura real y estado general.

`LICENSE` establece las condiciones aplicables al código del repositorio.

## Recursos por capacitación

La carpeta `imagenes/capacitacion-01/` contiene los recursos visuales de la primera capacitación, como el flyer y la infografía.

La carpeta `documentos/capacitacion-01/` queda reservada para documentos de la primera capacitación. El archivo de diapositivas debe mantenerse como pendiente hasta que se verifique que el PDF sea funcional o se reemplace por una versión correcta.

Para nuevas jornadas, se recomienda continuar el mismo patrón:

```text
imagenes/capacitacion-02/
documentos/capacitacion-02/
imagenes/capacitacion-03/
documentos/capacitacion-03/
```

## Videos

Los videos no se almacenan directamente en una carpeta del repositorio. En la versión actual se enlazan desde Google Drive mediante las rutas registradas en `app.js`.

## Carpeta docs

La carpeta `docs` reúne documentos de respaldo autoral, formativo, técnico y organizativo.

Estos documentos ayudan a explicar el alcance del proyecto, las condiciones de uso, los criterios de publicación, la organización del repositorio y el historial de cambios.

## Organización progresiva

La estructura puede modificarse según el crecimiento real del proyecto. Si se agregan nuevos tipos de materiales, se recomienda crear carpetas específicas y registrar los cambios en la bitácora.
