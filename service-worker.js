console.log('service worker setup');

self.addEventListener('install', function(event){
    console.log("service worker installed")
})

self.addEventListener('acitvate', function(event){
    console.log('Serivce worker activated.')
});

self.addEventListener('fetch', function(event){
    console.log('caught a fetch');
    event.respondWith(new Response('You rock dude'))
})