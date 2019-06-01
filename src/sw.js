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