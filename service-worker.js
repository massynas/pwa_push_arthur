importScripts("/pwa_push_arthur/precache-manifest.5af836b81c7dd95b0ceb0ef74b936550.js", "/pwa_push_arthur/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/pwa_push_arthur/workbox-v3.6.3"});
workbox.core.setCacheNameDetails({
    prefix: "pwa_push_arthur"
});
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.routing.registerNavigationRoute('/index.html');

self.addEventListener("message", event => {
    console.log(`[Service Worker] Message recieived: ${event.data}`)
    if (event.data === "skipWaiting") {
        self.skipWaiting();
    }
})
