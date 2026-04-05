const CACHE = "examdee-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./examdee.ai-vietnam.vn/assets/index-BUoCWu2I.js",
        "./examdee.ai-vietnam.vn/assets/index-Bcm3ID3h.css",
        "./examdee.ai-vietnam.vn/offline-api/user.json",
        "./examdee.ai-vietnam.vn/offline-api/lessons.json",
        "./examdee.ai-vietnam.vn/offline-api/pronunciation.json",
        "./examdee.ai-vietnam.vn/offline-api/progress.json",
        "./examdee.ai-vietnam.vn/offline-api/live.json",
        "./examdee.ai-vietnam.vn/offline-api/exam.json",
        "./examdee.ai-vietnam.vn/offline-api/common.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
