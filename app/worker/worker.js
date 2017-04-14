const LIBRARY_CACHE = 'my.librarian.1.0';

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

// Run network first on dynamic content to cache
//
// const networkFirst = request => fetchAndCache(request)
//   .catch(() => caches.match(request));

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

self.addEventListener('fetch', event => {

  const {request} = event;
  const url = new URL(request.url);
  const path = url.pathname;
  const file = path.substring(path.lastIndexOf('/') + 1);

  if (/\/api\//.test(path) || file === 'worker.js') {

    event.respondWith(fetch(request));

  } else {

    event.respondWith(cacheFirst(request));

  }

});
