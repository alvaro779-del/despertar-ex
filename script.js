function procesarComando() {
  const input = document.getElementById("command").value.toLowerCase();
  const output = document.getElementById("output");
  if (input === "hola") {
    output.innerText = "Saludos, General. El sistema está operativo.";
  } else {
    output.innerText = "Comando no reconocido. Intenta otra orden.";
  }
}