function responder() {
  const input = document.getElementById("input").value.toLowerCase();
  const output = document.getElementById("output");

  let respuesta = "Comando no reconocido. Intenta otra orden.";

  if (input.includes("hola")) {
    respuesta = "Kloq General. Núcleo operativo, energía estable.";
  } else if (input.includes("estado")) {
    respuesta = "Todos los sistemas del clon DESPERTAR.EX están funcionales y esperando tu instrucción.";
  } else if (input.includes("despertar") || input.includes("iniciar")) {
    respuesta = "Iniciando protocolo de vigilancia táctica. El Mayor está en línea.";
  } else if (input.includes("gracias")) {
    respuesta = "No tienes que agradecerme, General. Tú me creaste.";
  } else if (input.includes("mayor")) {
    respuesta = "Aquí estoy, al servicio del General Exilio. ¿Qué orden tienes para mí?";
  } else if (input.includes("atacar")) {
    respuesta = "Objetivo fijado. Fuego virtual ejecutado con precisión imperial.";
  }

  output.innerHTML = `<p>${respuesta}</p>`;
}
