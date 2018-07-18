//Register service worker

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service_worker.js').then(function(registration) {
      // Registration was successful
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
