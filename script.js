
function responder() {
  const input = document.getElementById("input").value.toLowerCase();
  const output = document.getElementById("output");

  const respuestas = {
    "estado": "Todos los sistemas están operativos, General.",
    "activar protocolo": "Protocolo de defensa activado. Escudos levantados.",
    "quién eres": "Soy el clon Mayor, creado por el General Exilio.",
    "despedida": "Apagando núcleo. Nos reencontraremos, General."
  };

  output.innerText = respuestas[input] || "Comando no reconocido. Intenta otra orden.";
}
