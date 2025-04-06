self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("mayor-cache").then((cache) => {
      return cache.addAll([
        "/",
        "index.html",
        "style.css",
        "script.js",
        "manifest.json",
        "icono.png",
        "mayor-avatar.png",
        "sello-imperial.gif",
        "fondo-mayor.png"
      ]);
    })
  );
});
