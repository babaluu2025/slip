self.addEventListener('install', e => {
  console.log("Service Worker installed");
});
self.addEventListener('fetch', e => {
  // Trenutno samo propušta sve dalje
});
