const NUMERO_WHATSAPP = "50586210766";
const form = document.getElementById("formMotoRaid");
const tipoServicio = document.getElementById("tipoServicio");
const camposMototaxi = document.getElementById("camposMototaxi");
const camposMotomandado = document.getElementById("camposMotomandado");

tipoServicio.addEventListener("change", () => {
  camposMototaxi.classList.remove("show");
  camposMotomandado.classList.remove("show");
  camposMototaxi.classList.add("hidden");
  camposMotomandado.classList.add("hidden");

  if (tipoServicio.value === "Mototaxi") {
    camposMototaxi.classList.remove("hidden");
    camposMototaxi.classList.add("show");
  } else if (tipoServicio.value === "Motomandado") {
    camposMotomandado.classList.remove("hidden");
    camposMotomandado.classList.add("show");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const servicio = tipoServicio.value;

  if (!servicio || !nombre || !telefono) {
    alert("Por favor completa todos los campos requeridos.");
    return;
  }

  let mensajePlano = "🚖 Solicitud MotoRaid 🚖\n";
  mensajePlano += `🛠 Servicio: ${servicio}\n`;
  mensajePlano += `👤 Nombre: ${nombre}\n`;
  mensajePlano += `📞 Teléfono: ${telefono}\n`;

  if (servicio === "Mototaxi") {
    const sexo = document.getElementById("sexo").value.trim();
    const ubicacion = document.getElementById("ubicacion").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    if (!sexo || !ubicacion || !direccion) {
      alert("Por favor completa todos los campos de Mototaxi.");
      return;
    }

    mensajePlano += `⚧ Sexo: ${sexo}\n`;
    mensajePlano += `📍 Ubicación: ${ubicacion}\n`;
    mensajePlano += `🏠 Dirección: ${direccion}\n`;
  }

  if (servicio === "Motomandado") {
    const direccionMandado = document.getElementById("direccionMandado").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    if (!direccionMandado || !descripcion) {
      alert("Por favor completa todos los campos de Motomandado.");
      return;
    }

    mensajePlano += `🏠 Dirección: ${direccionMandado}\n`;
    mensajePlano += `📦 Descripción: ${descripcion}\n`;
  }

  const mensajeCodificado = encodeURIComponent(mensajePlano);
  const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeCodificado}`;

  window.open(urlWhatsApp, "_blank");
});
