self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("mayor-cache").then((cache) => {
      return cache.addAll([
        "/",
        "index.html",
        "estilo.css",
        "script.js",
        "manifesto.json",
        "icono.png",
        "avatar-mayor.png",
        "sello-imperial.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
