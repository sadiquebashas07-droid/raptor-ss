// Minimal service worker: needed so the browser offers "Install app".
// It caches nothing, so the app is always the latest version from the server.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* pass-through: network handles everything */ });
