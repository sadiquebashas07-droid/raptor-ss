// Service worker: lets the browser offer "Install app" and receives push notifications (OneSignal).
// It caches nothing, so the app is always the latest version from the server.
try { importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js"); } catch (e) { }
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* pass-through: network handles everything */ });
