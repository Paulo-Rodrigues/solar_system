self.addEventListener('install', function(event){
    console.log("INSTALLING", event);
    event.waitUntil(
        caches.open('static')
          .then(function(cache){
              console.log("PRECACHE");
              cache.addAll([
                  "/",
                  "/index.html"
              ])
          })
    );
});

self.addEventListener('activate', function(event){
    console.log("ACTIVATE ", event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
          .then(function(response){
              if(response){
                  return response;
              }else{
                  return fetch(event.request);
              }
          })
    )
});