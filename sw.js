var staticCacheName = 'restaurant-review-app-v2';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/css/responsive.css',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        'data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg'
      ]);
    })
  );
});




// const appName = "restaurant-review-app";
// const staticCacheName = appName + "-v1.0";
// const contentImgsCache = appName + "-img";
// var allCaches = [
//   staticCacheName,
//   contentImgsCache
// ];
//
// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open(staticCacheName).then(function(cache) {
//       return cache.addAll([
//         '/', // this caches index.html
//         '/restaurant.html',
//
//         '/css/styles.css',
//
//         '/css/responsive.css',
//         // add other css files here if you followed the mobile first approach
//         '/js/dbhelper.js',
//         '/js/main.js',
//         '/js/restaurant_info.js',
//         'js/register-sw.js', // In the video I forgot to add this newly created file
//         'data/restaurants.json'
//         // add other static assets here like logos, svg icons or any
//         // other asset needed for your app UI
//         // (Don't add restaurant images, as they are not part of your
//         // application's UI)
//       ]);
//     })
//   );
// });
