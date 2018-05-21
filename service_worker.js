// self.addEventListener('install', function(event){
//     console.log("INSTALLING", event);
//     event.waitUntil(
//         caches.open('static')
//           .then(function(cache){
//               console.log("PRECACHE");
//               cache.addAll([
//                   "/",
//                   "/index.html",
//                   "/src/pages/about.html",
//                   "/src/pages/others.html",
//                   "/src/pages/planets.html",
//                   "/src/pages/rovers.html",
//                   "/src/css/styles.css",
//                   "/src/js/main/bundle.min.js",
//                   "/src/images/icons/favicon.ico",
//                   "/src/images/icons/icons8-conjunto-vazio-50.png",
//                   "/src/images/icons/icons8-conjunto-vazio-144.png",
//                   "/src/images/icons/icons8-conjunto-vazio-192.png",
//                   "/src/images/planets/mercury.jpg",
//                   "/src/images/planets/venus.jpg",
//                   "/src/images/planets/earth.jpg",
//                   "/src/images/planets/mars.jpg",
//                   "/src/images/planets/jupiter.jpg",
//                   "/src/images/planets/saturn.jpg",
//                   "/src/images/planets/uranus.jpg",
//                   "/src/images/planets/neptune.jpg",
//               ])
//           })
//     );
// });

// self.addEventListener('activate', function(event){
//     console.log("ACTIVATE ", event);
//     return self.clients.claim();
// });

// self.addEventListener('fetch', function(event){
//     event.respondWith(
//         caches.match(event.request)
//           .then(function(response){
//               if(response){
//                   return response;
//               }else{
//                   return fetch(event.request);
//               }
//           })
//     )
// });