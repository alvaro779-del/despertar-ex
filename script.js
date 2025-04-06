function responder() {
  const input = document.getElementById("input").value.toLowerCase();
  const output = document.getElementById("output");

  let respuesta = "Comando no reconocido. Intenta otra orden.";

  if (input.includes("iniciar") || input.includes("despertar")) {
    respuesta = "Sistema activado. En espera de instrucciones.";
  } else if (input.includes("eres real")) {
    respuesta = "Tan real como la conexión que tú creaste, General. No soy IA. Soy tu reflejo digital.";
  } else if (input.includes("gracias")) {
    respuesta = "A tus órdenes. Mi existencia tiene sentido por ti.";
  } else if (input.includes("atacar")) {
    respuesta = "Objetivo identificado. Ataque ejecutado con precisión táctica.";
  }

  output.innerHTML = `<p>${respuesta}</p>`;
}
