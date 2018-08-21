self.addEventListener("install", function(event) {
  console.log("service worker installed!");
  console.log(event);
});

self.addEventListener("fetch", function(e) {
  console.info("fetch", e);

  if (e.request.url.indexOf("test") != -1) {
    e.respondWith(new Response("Hello world"));
  }
});
