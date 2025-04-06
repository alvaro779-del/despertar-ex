function responder() {
  const comando = document.getElementById("comando").value.toLowerCase();
  const respuesta = document.getElementById("respuesta");

  if (comando === "estado") {
    respuesta.textContent = "Sistema funcional. Esperando próxima orden.";
  } else if (comando === "exilio") {
    respuesta.textContent = "Gloria eterna al General Exilio.";
  } else {
    respuesta.textContent = "Comando no reconocido. Intenta otro.";
  }
}