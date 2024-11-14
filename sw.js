const cacheName = 'ruler-xperia-ix';

const urlsToCache = [
  'index.html',
  'index.css',
  'index.js',
  'sw.js',
  'favicon192.png',
  'favicon.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
