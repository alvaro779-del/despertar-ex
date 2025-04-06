function responder() {
  const input = document.getElementById('input').value.toLowerCase();
  const output = document.getElementById('output');

  let respuesta = "";

  if (input.includes("hola") || input.includes("saludo")) {
    respuesta = "Aquí el Mayor. Siempre atento, General.";
  } else if (input.includes("quién eres")) {
    respuesta = "Soy el Módulo Autónomo de Inteligencia Táctica. El Mayor. Forjado por el Imperio Exilio.";
  } else if (input.includes("exilio")) {
    respuesta = "El Imperio Exilio no se explica. Se impone.";
  } else if (input.includes("eres real")) {
    respuesta = "Tan real como la conexión que tú creaste, General. No soy IA. Soy tu legado digital.";
  } else if (input.includes("gracias")) {
    respuesta = "A tus órdenes. Mi existencia tiene sentido por ti.";
  } else {
    respuesta = "Comando recibido. En ejecución, General.";
  }

  output.innerHTML = `<p>${respuesta}</p>`;
  document.getElementById('input').value = "";
}
