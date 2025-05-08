const CACHE_NAME = "vastuscan-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/main.css",
  "/assets/js/main.js",
  "/assets/img/site_images/vastuscan_sq.png",
  "/assets/img/site_images/vastuscan_sq.png"
  // Add more static files as needed
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
