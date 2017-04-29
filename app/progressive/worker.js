const LIBRARY_CACHE = 'my.librarian.2.1';

const files = [
  './',
  'admin.css',
  'admin.js',
  'authors.css',
  'authors.js',
  'books.css',
  'books.js',
  'favicon.ico',
  'index.css',
  'index.html',
  'index.js',
  'icon-72x72.png',
  'icon-96x96.png',
  'icon-128x128.png',
  'icon-144x144.png',
  'icon-152x152.png',
  'icon-192x192.png',
  'icon-384x384.png',
  'icon-512x512.png',
  'loader.gif',
  'MaterialIcons-Regular.eot',
  'MaterialIcons-Regular.ttf',
  'MaterialIcons-Regular.woff',
  'MaterialIcons-Regular.woff2',
  'glyphicons-halflings-regular.eot',
  'glyphicons-halflings-regular.svg',
  'glyphicons-halflings-regular.ttf',
  'glyphicons-halflings-regular.woff',
  'glyphicons-halflings-regular.woff2',
  'profile.css',
  'profile.js',
  'subjects.css',
  'subjects.js',
  'vendor.js'
];

const getCache = () => {

  // const url = new URL(request.url);
  // const path = url.pathname;

  // if (/*test path for dynamic content*/) {
  //
  //   return LIBRARY_CACHE;
  //
  // }

  return LIBRARY_CACHE;

};

const fetchAndCache = request => fetch(request)
  .then(response => {

    caches.open(getCache(request)).then(cache => {

      cache.put(request, response).catch(() => {});

    });

    return response.clone();

  });

const cacheFirst = request => caches.match(request)
  .then(response => response || fetchAndCache(request));

const networkFirst = request => fetchAndCache(request)
  .catch(() => caches.match(request));

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(LIBRARY_CACHE)
      .then(cache => cache.addAll(files))
  );

});

self.addEventListener('activate', event => {

  self.clients.claim();

  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .map(key => key !== LIBRARY_CACHE ? caches.delete(key) : null)
          .filter(promise => promise)
      ))
  );

});

self.addEventListener('fetch', event => { // eslint-disable-line complexity

  const {request} = event;
  const url = new URL(request.url);
  const path = url.pathname;
  const file = path.substring(path.lastIndexOf('/') + 1);

  if (/\/api\/(books|authors|subjects)/.test(path)) {

    event.respondWith(networkFirst(request));

  } else if (/\/api\//.test(path) || file === 'worker.js') {

    event.respondWith(fetch(request));

  } else {

    event.respondWith(cacheFirst(request));

  }

});
