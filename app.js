const campoBusqueda = document.getElementById("buscarCapacitacion");
const capacitaciones = document.querySelectorAll(".capacitacion");
const mensajeSinResultados = document.getElementById("sinResultados");
const anio = document.getElementById("anio");

if (anio) {
  anio.textContent = new Date().getFullYear();
}

if (campoBusqueda) {
  campoBusqueda.addEventListener("input", () => {
    const texto = campoBusqueda.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

    let visibles = 0;

    capacitaciones.forEach((capacitacion) => {
      const contenido = capacitacion.dataset.texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const coincide = contenido.includes(texto);

      capacitacion.hidden = !coincide;

      if (coincide) {
        visibles += 1;
      }
    });

    if (mensajeSinResultados) {
      mensajeSinResultados.hidden = visibles > 0;
    }
  });
}

document.querySelectorAll(".deshabilitado").forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    evento.preventDefault();
  });
});
