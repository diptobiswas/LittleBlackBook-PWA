const cacheName = 'my-web-app-cache-v1';
const pagesToCache = [
  '/',
  '/saved',
  '/search',
  '/emergency',
  '/Featured',
  '/profile',
  '/Resources',
  // Add other pages here as needed
  
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  '/serviceWorker.js',
  '/static/js/main.06fd9c21.js',
  '/static/js/787.994511a4.chunk.js',
  '/static/css/main.d8ea4982.css',
  
  //Images
  'https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1304&q=80',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/EmergencyIcons/Police-Services.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/EmergencyIcons/Fire-Services.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/EmergencyIcons/Homeless-Services.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/EmergencyIcons/Financial-Services.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/EmergencyIcons/Abuse-Services.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/TopicIcons/Housing.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/TopicIcons/Mental-Health.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/TopicIcons/Family.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/TopicIcons/Financial.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/TopicIcons/recreation.png',
  'https://littleblackbook-pwa-storage-danielanddipto202237-staging.s3.ca-central-1.amazonaws.com/public/TopicIcons/Food.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(pagesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});