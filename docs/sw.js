(()=>{"use strict";const e=["index.html","index.css","index.js","sw.js","favicon.png","favicon192.png"];self.addEventListener("install",(t=>{t.waitUntil(caches.open("ruler-xperia-ix").then((t=>t.addAll(e))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}))})();