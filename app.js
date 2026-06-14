const capacitaciones = [
  {
    fecha: "Viernes 12 de junio",
    titulo: "Fundamentos de la neurodiversidad",
    tema: "Adaptaciones curriculares pedagógicas en la atención a la diversidad.",
    estado: "disponible",
    recursos: {
      flyer: "imagenes/capacitacion-01/flyer.jpg",
      infografia: "imagenes/capacitacion-01/infografia.jpg",
      diapositivas: "documentos/capacitacion-01/diapositivas.pdf",
      video: "https://drive.google.com/file/d/12sRjL1kb-4y8g3Tz8fpUpemK2Uzptkuz/preview",
      videoDrive: "https://drive.google.com/file/d/12sRjL1kb-4y8g3Tz8fpUpemK2Uzptkuz/view"
    }
  },
  {
    fecha: "Viernes 19 de junio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 26 de junio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 03 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 10 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 17 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 24 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 31 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 07 de agosto",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 14 de agosto",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  }
];

const lineaTiempo = document.getElementById("lineaTiempo");
const campoBusqueda = document.getElementById("busqueda");
const botonLimpiar = document.getElementById("limpiar");
const mensajeSinResultados = document.getElementById("sinResultados");

function limpiarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function protegerHTML(texto) {
  return String(texto)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function crearRecursoImagen(titulo, ruta, textoBoton, alt) {
  if (!ruta) {
    return crearRecursoPendiente(titulo, "Pendiente de subir", "Sin archivo");
  }

  return `
    <article class="recurso">
      <h4>${protegerHTML(titulo)}</h4>
      <a class="vista-recurso" href="${ruta}" target="_blank" rel="noopener">
        <img src="${ruta}" alt="${protegerHTML(alt)}" loading="lazy" decoding="async">
      </a>
      <a class="boton-recurso" href="${ruta}" target="_blank" rel="noopener">
        ${protegerHTML(textoBoton)}
      </a>
    </article>
  `;
}

function crearRecursoPDF(ruta) {
  if (!ruta) {
    return crearRecursoPendiente("Diapositivas PDF", "Pendiente de subir", "Sin archivo");
  }

  return `
    <article class="recurso">
      <h4>Diapositivas PDF</h4>
      <div class="vista-recurso">
        <iframe
          src="${ruta}"
          title="Vista previa de diapositivas en PDF">
        </iframe>
      </div>
      <a class="boton-recurso" href="${ruta}" target="_blank" rel="noopener">
        Abrir diapositivas
      </a>
    </article>
  `;
}

function crearRecursoVideo(video, videoDrive) {
  if (!video) {
    return crearRecursoPendiente("Video", "Pendiente de enlace", "Sin enlace");
  }

  const enlaceExterno = videoDrive || video.replace("/preview", "/view");

  return `
    <article class="recurso">
      <h4>Video</h4>
      <div class="vista-recurso video-recurso">
        <iframe
          src="${video}"
          title="Video de la capacitación"
          allow="autoplay"
          allowfullscreen>
        </iframe>
      </div>
      <a class="boton-recurso" href="${enlaceExterno}" target="_blank" rel="noopener">
        Abrir video en Drive
      </a>
    </article>
  `;
}

function crearRecursoPendiente(titulo, mensaje, boton) {
  return `
    <article class="recurso recurso-pendiente">
      <h4>${protegerHTML(titulo)}</h4>
      <div class="vista-recurso marcador">${protegerHTML(mensaje)}</div>
      <span class="boton-recurso deshabilitado">${protegerHTML(boton)}</span>
    </article>
  `;
}

function crearTarjeta(capacitacion) {
  const textoBusqueda = limpiarTexto(
    `${capacitacion.fecha} ${capacitacion.titulo} ${capacitacion.tema}`
  );

  const recursos = capacitacion.recursos || {};

  return `
    <article
      class="capacitacion ${capacitacion.estado === "disponible" ? "disponible" : "pendiente"}"
      data-texto="${protegerHTML(textoBusqueda)}"
    >
      <div class="punto-linea" aria-hidden="true"></div>

      <div class="tarjeta-capacitacion">
        <header class="cabecera-capacitacion">
          <p class="fecha">${protegerHTML(capacitacion.fecha)}</p>
          <h3>${protegerHTML(capacitacion.titulo)}</h3>
          <p class="tema">${protegerHTML(capacitacion.tema)}</p>
        </header>

        <div class="recursos" id="materiales">
          ${crearRecursoImagen(
            "Flyer",
            recursos.flyer,
            "Abrir flyer",
            `Flyer de la capacitación ${capacitacion.titulo}`
          )}

          ${crearRecursoImagen(
            "Infografía",
            recursos.infografia,
            "Abrir infografía",
            `Infografía de la capacitación ${capacitacion.titulo}`
          )}

          ${crearRecursoPDF(recursos.diapositivas)}

          ${crearRecursoVideo(recursos.video, recursos.videoDrive)}
        </div>
      </div>
    </article>
  `;
}

function renderizarCapacitaciones(lista) {
  lineaTiempo.innerHTML = lista.map(crearTarjeta).join("");

  if (mensajeSinResultados) {
    mensajeSinResultados.hidden = lista.length > 0;
  }
}

function filtrarCapacitaciones() {
  const consulta = limpiarTexto(campoBusqueda.value);

  const resultado = capacitaciones.filter((capacitacion) => {
    const contenido = limpiarTexto(
      `${capacitacion.fecha} ${capacitacion.titulo} ${capacitacion.tema}`
    );

    return contenido.includes(consulta);
  });

  renderizarCapacitaciones(resultado);
}

if (lineaTiempo) {
  renderizarCapacitaciones(capacitaciones);
}

if (campoBusqueda) {
  campoBusqueda.addEventListener("input", filtrarCapacitaciones);
}

if (botonLimpiar) {
  botonLimpiar.addEventListener("click", () => {
    campoBusqueda.value = "";
    campoBusqueda.focus();
    renderizarCapacitaciones(capacitaciones);
  });
}
