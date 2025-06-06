const CACHE_NAME = 'express-delivery-v1';
const urlsToCache = [
  '/express-delivery-system/',
  '/express-delivery-system/index.html',
  '/express-delivery-system/admin.html',
  '/express-delivery-system/manifest.json',
  '/express-delivery-system/icon-192.png',
  '/express-delivery-system/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});