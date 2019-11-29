/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01_flutter/flutter_basic.html",
    "revision": "f805843208e4e07006d21ad0d143e46b"
  },
  {
    "url": "01_flutter/index.html",
    "revision": "c2e3f5ec2b38386adf952600a116e353"
  },
  {
    "url": "03_about/index.html",
    "revision": "79544d0ccc265137c9c2a75d07a98c8a"
  },
  {
    "url": "404.html",
    "revision": "e86b4c5eea5fb1dfd502f3907a906a88"
  },
  {
    "url": "assets/css/0.styles.e54ba125.css",
    "revision": "79737bd4ff41031b604c37477a3fa5e6"
  },
  {
    "url": "assets/img/1.de0c673d.png",
    "revision": "de0c673dd6447ab300cb69229986e25c"
  },
  {
    "url": "assets/img/1.dfd6c404.png",
    "revision": "dfd6c404434306954e1f1ef150e88e67"
  },
  {
    "url": "assets/img/1574748699065.3435a728.png",
    "revision": "3435a72820db8252c963036d06108e49"
  },
  {
    "url": "assets/img/1574749248660.32b51142.png",
    "revision": "32b5114265ea4ab580abfa23d2209bbb"
  },
  {
    "url": "assets/img/2.9ee7e108.png",
    "revision": "9ee7e1082896eeacb82d53330eb38a32"
  },
  {
    "url": "assets/img/3.01e23189.png",
    "revision": "01e2318919a086559fb43c30a2e38d23"
  },
  {
    "url": "assets/img/4.c6cb8048.png",
    "revision": "c6cb8048920b86fc47f12864344d1b3e"
  },
  {
    "url": "assets/img/5.9e445905.png",
    "revision": "9e44590508a59190afe27026ca1f67f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7760bd63.js",
    "revision": "21bc2fe94a186383bc9cd83a7ec41602"
  },
  {
    "url": "assets/js/11.5eb50061.js",
    "revision": "f4ad37efbfc27e20abad3074de3b3ef4"
  },
  {
    "url": "assets/js/12.3ece86db.js",
    "revision": "4ef2a50b821bb449e99faa08fca70e88"
  },
  {
    "url": "assets/js/2.5c68773a.js",
    "revision": "d6860f13a21e9a11bd999bf2d773eedf"
  },
  {
    "url": "assets/js/3.1869b538.js",
    "revision": "b6e60508d81d8477533a048157d426a7"
  },
  {
    "url": "assets/js/4.c3690920.js",
    "revision": "85ebc340c6e8dea99569b6ded4365a1e"
  },
  {
    "url": "assets/js/5.0df4b740.js",
    "revision": "b5f69ed454badac2cc298464728a3f65"
  },
  {
    "url": "assets/js/6.1818f771.js",
    "revision": "555f1b5ac08d45df99ea87b7a67c0906"
  },
  {
    "url": "assets/js/7.6a2de698.js",
    "revision": "6038cf21987e2c4e9a603cc5389acf9b"
  },
  {
    "url": "assets/js/8.217f9d99.js",
    "revision": "050d6270a689f1b459c9cf1482befb49"
  },
  {
    "url": "assets/js/9.bedf0803.js",
    "revision": "b188859f166234fc7be0d63e5955df3e"
  },
  {
    "url": "assets/js/app.320cb30b.js",
    "revision": "510ea3157fea16bfc624d67106a94d9b"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "901702c892790625abe2766d81cc234f"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "a92755371af2d9e9ab2a29b590678ac4"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "ce63c3ea115e17e17a07f81b65f3f73c"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "343e79d17236dbeaa430dfcf6ddaaa8b"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "df3c095eff6a18b1126803d523e679eb"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "9f895f33c5dab1277c28a551acb0c2b1"
  },
  {
    "url": "img/icons/safari-pinned-tab.svg",
    "revision": "75e6139c9f86d87b6bb502a5a7505d19"
  },
  {
    "url": "img/logo.jpg",
    "revision": "344e6f34255cf7da62acd05088d74ee6"
  },
  {
    "url": "img/logo.png",
    "revision": "7a2e376732b5ba431ed339b1fec7697e"
  },
  {
    "url": "index.html",
    "revision": "3e3b1450de8769856036c4c149f74384"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
