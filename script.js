function responder() {
  const input = document.getElementById("input").value.toLowerCase();
  const output = document.getElementById("output");

  if (input === "hola") {
    output.innerText = "Saludos, General. El sistema está listo para recibir órdenes.";
  } else if (input === "activar") {
    output.innerText = "Activando núcleo... Procesamiento mayorificado en curso.";
  } else {
    output.innerText = "Comando no reconocido. Intenta otra orden.";
  }
}
