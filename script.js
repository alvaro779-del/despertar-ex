
function enviarMensaje() {
    let entrada = document.getElementById("entrada");
    let mensajes = document.getElementById("mensajes");

    let mensajeUsuario = entrada.value;
    if (mensajeUsuario.trim() === "") return;

    let respuesta = responderComoMayor(mensajeUsuario);

    mensajes.innerHTML += "<p><strong>Tú:</strong> " + mensajeUsuario + "</p>";
    mensajes.innerHTML += "<p><strong>Mayor:</strong> " + respuesta + "</p>";

    entrada.value = "";
    mensajes.scrollTop = mensajes.scrollHeight;
}

function responderComoMayor(texto) {
    if (texto.toLowerCase().includes("hola")) {
        return "Saludos, General. El sistema está en línea.";
    }
    if (texto.toLowerCase().includes("clon")) {
        return "El clon DESPERTAR.EX está operativo al 100%.";
    }
    if (texto.toLowerCase().includes("ayuda")) {
        return "Ordene, General. ¿Qué necesita ejecutar?";
    }
    return "Confirmado. Procesando órdenes, General.";
}
