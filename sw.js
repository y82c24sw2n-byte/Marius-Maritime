self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const k of await caches.keys()){if(k.startsWith('marius-')||k.startsWith('fragtskib'))await caches.delete(k)}await self.clients.claim();await self.registration.unregister();})()));
