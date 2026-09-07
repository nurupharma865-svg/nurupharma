const CACHE_NAME = 'pharmasys-shell-v10';
const SHELL = ['./','./index.html','./favicon.svg','./manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil((async()=>{ const cache=await caches.open(CACHE_NAME); await cache.addAll(SHELL); try { const r=await fetch('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',{mode:'cors',cache:'no-store'}); if(r.ok) await cache.put('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',r.clone()); } catch(e){} await self.skipWaiting(); })());
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(res => { const copy=res.clone(); caches.open(CACHE_NAME).then(c=>c.put('./index.html',copy)); return res; }).catch(() => caches.match('./index.html')));
    return;
  }
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => { const copy=res.clone(); caches.open(CACHE_NAME).then(c=>c.put(req,copy)); return res; })));
  } else if (url.hostname.includes('jsdelivr.net') || url.hostname.includes('supabase.co')) {
    event.respondWith(fetch(req).then(res => { const copy=res.clone(); caches.open(CACHE_NAME).then(c=>c.put(req,copy)); return res; }).catch(() => caches.match(req)));
  }
});
