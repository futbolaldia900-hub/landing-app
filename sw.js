// sw.js - Service Worker Básico para activar PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pasamos las peticiones directo a la red (sin caché complejo)
  e.respondWith(fetch(e.request));
});
