const cacheName = 'cacheAssets9'

self.addEventListener('install',(event) => {
    console.log('Install!', event);
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName)
    .then((cache) => {
       console.log('Cache:', cache)
       cache.addAll([
        '/',
        '/index.html',
        'https://pritul-playlist-app.netlify.app/styles.css',
        'https://pritul-playlist-app.netlify.app/script.js',
        'https://pritul-playlist-app.netlify.app/Assets/icon.png'
       ]);
    })
    .catch((error) => {
        console.log('Cache failed:',error)
    })
    );
}); 

self.addEventListener('activate', (event) => {
    //console.log('Activate:', event);
    event.waitUntil(clients.claim());
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                console.log('Cache Names', cacheNames);
                cacheNames.forEach((item) => {
                    console.log(item);
                    if(item !== cacheName){
                        caches.delete(item);
                    }
                })
            })
    )
})

self.addEventListener('fetch',(event) => {
    event.respondWith(
        caches.open(cacheName)
            .then((cache) => {
                return cache.match(event.request)
                    .then((response) => {
                        if(response) {
                            return response;
                        } else{
                            return fetch(event.request);
                        }
                    })
            })
    )
})
