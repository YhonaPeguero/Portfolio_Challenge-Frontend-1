// -------------------------------------------------------------Obtener referencias del DOM.
const $formulario = document.querySelector(".form");
const $nombre = document.querySelector("#nombre");
const $correo = document.querySelector("#email");
const $asunto = document.querySelector("#asunto");
const $mensaje = document.querySelector("#mensaje");

$formulario.onsubmit = (event) => {
  event.preventDefault();
  const nombre = $nombre.value;
  const correo = $correo.value;
  const asunto = $asunto.value;
  const mensaje = $mensaje.value;
  // -------------------------------------------------------------Validar formulario.
  if (nombre == "" || nombre.length < 5) {
    alert("Ingrese su nombre para poder continuar, por favor.");
    return;
  }
  if (correo == "") {
    alert("Ingrese su correo para poder continuar, por favor.");
    return;
  }

  if (asunto == "") {
    alert("Ingrese un titulo o asunto para poder continuar, por favor.");
    return;
  }

  if (mensaje == "" || mensaje.length < 10) {
    alert("Ingrese un mensaje valido para poder continuar, por favor.");
    return;
  }

  $formulario.submit();
};
