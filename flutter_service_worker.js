'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d6e8df7eec6b2ad4c49d82d8eb92db86",
"assets/AssetManifest.bin.json": "27bc5dd17164fb9003fa2b417de08d9d",
"assets/AssetManifest.json": "50da28a4e65c92c4d2287b12ed2f8277",
"assets/assets/apple.png": "c81f39ef3fb0fdc13f8ed75a3d1f8941",
"assets/assets/bilet.png": "aaaeb931ac03117308eff64353bb4664",
"assets/assets/cart.zip": "7c94755ebaaa7c7ea2cb09660cfcaa3e",
"assets/assets/Coca%2520cola.png": "5852e3ff3c5315de97e46475bfbda1a6",
"assets/assets/coke.png": "0439f1909ef4519936821503bd30a579",
"assets/assets/cola.png": "0c39a6c5cf8609d27b57f461fd45b40d",
"assets/assets/cr.png": "14d55a0f60de996bb44212cc054d7c20",
"assets/assets/dd.png": "e3178427da26d961a06e45d74c64fbd1",
"assets/assets/delivery/1v.png": "a6ba8850178e8d9a3b29dd3ad1a4950b",
"assets/assets/delivery/ananas.png": "679e6fb0f985c7bb6234cca248612c11",
"assets/assets/delivery/auth_female.png": "5c9e5e1e936e5e00b5e84a2ef034fbf5",
"assets/assets/delivery/brocli.png": "05dcc35cf92191bfa4dec934e9f6dcb6",
"assets/assets/delivery/grapes-31.png": "aeeb953c61ae2ee737822c6a87a34a0c",
"assets/assets/delivery/Group%252032.png": "75874e2f1661466606356906fd740b4a",
"assets/assets/delivery/Mask%2520Group%2520(1).png": "f41f9fc9dc304e3728842be0af2ff715",
"assets/assets/delivery/Mask%2520Group.png": "a2ee337c64c2dc1ff0f1680e1e8bd222",
"assets/assets/delivery/peach-24%25201.png": "28434951b210e2f39835985481bdfeb4",
"assets/assets/delivery/person.png": "46553fcad503ed787d05541e3a5aaa53",
"assets/assets/delivery/pomegranate-11.png": "5a84e2752c606d5e075e06f9b4367552",
"assets/assets/delivery/wumen%25202.png": "a6ba8850178e8d9a3b29dd3ad1a4950b",
"assets/assets/delivery/wumen.png": "568c172501f7f735fa09aa5cf9f99ae6",
"assets/assets/do.png": "3058c118c215e538eb8550c524aae5f6",
"assets/assets/edit.png": "6515b64ab56229a5029efd29a674253d",
"assets/assets/Ellipse%25201.png": "ffb48d1d5c06f19ce054c9812d1cf934",
"assets/assets/Facebook.png": "9af03250a0ac6f069635f823811bb5b2",
"assets/assets/Feizbuc.png": "a7ac9dd40340adf813b6a96b29a497b0",
"assets/assets/female.png": "cdae26a126900fda7fca5cd3fc665680",
"assets/assets/Fih.png": "26097618b5e8b34075f10983765952ef",
"assets/assets/flag.png": "7218ee484eea85ef0b14771fef632ea9",
"assets/assets/fuel.png": "0606ab6462e6c893c1369219c591345f",
"assets/assets/Gmail.png": "6b9c44208c018848b94ffa1f27bb93e0",
"assets/assets/google.png": "3b9edf871982c19be8d6f12e1b174113",
"assets/assets/Group%2520(1).png": "0c0cee64f6637ff3ad963a37a86babc5",
"assets/assets/Group%2520(2).png": "d141689cc04c7fd128ec9c6bf6ba82ec",
"assets/assets/Group%2520130.png": "20d443b0d37792d76aad24d7cbc7f4c0",
"assets/assets/Group%2520142%2520(1).png": "beb6272537ab4a3368af7fd551dba8bb",
"assets/assets/Group%2520142%2520(2).png": "a047a58049a300cbc1aa154a7c760439",
"assets/assets/Group%2520142.png": "2ec85c6ca6d2c01ac575ea14822a771e",
"assets/assets/Group%2520202.png": "efa341f487a57d98b696099224790d68",
"assets/assets/Group%2520204.png": "1b9c45e890f0a4e9c7510e0ec9c19d18",
"assets/assets/Group%2520205.png": "1c48fa014cf27368c2041dc6f92ffce7",
"assets/assets/Group%2520206.png": "7e4071bd1613f1fae1df766a3df63d7d",
"assets/assets/Group%2520229.png": "810a141c00cf0515a8e4895ed14a3fd4",
"assets/assets/Group%2520230.png": "beb6746f38ac7f80f995fed153813b67",
"assets/assets/Group%2520232.png": "489c11d58af2581b322f1ad9c89c5dd5",
"assets/assets/Group%2520234.png": "7ac85e7116c91381a813bfc205129613",
"assets/assets/Group%2520236.png": "5e6ec18ce6726c50607f340a927323b1",
"assets/assets/Group%2520240.png": "7241e0e3b6d54f2e0310c799067e935c",
"assets/assets/Group%252066.png": "1410a2b6ecdaeceebe21f72cd6678f73",
"assets/assets/Group%252067.png": "ce408bf851e07bbb52c5161d1374fe5c",
"assets/assets/hl.png": "da98cc7b954de1971fef13f995c7608e",
"assets/assets/Kapusta.png": "00389ccac387a720e50825c648b4c0a1",
"assets/assets/kl.png": "b72e79f299614b6564e8ffaaf620927a",
"assets/assets/Logo%2520(1).png": "facd88433d25ed7e8dbc95722d0c5590",
"assets/assets/Logo.png": "304dac15204a3f3609c39361285ae60a",
"assets/assets/mani.png": "f80d11d5366da8d7c51213a78efeeaad",
"assets/assets/mass.png": "4f8f14de9556180d5b347d033596bde8",
"assets/assets/My%2520Address.png": "b069e9de0a7f7aa08f3092afba2b46e8",
"assets/assets/pd.png": "ee8324917d67fd8f42bf0db1408a5d27",
"assets/assets/Pepsi.png": "039339397a05eadcee32f76a59e7df52",
"assets/assets/person.zip": "d0afb53b913e14a85fc7e303417c5d76",
"assets/assets/pk.png": "847ec72b50865e77b6b6b9bf4a8412d1",
"assets/assets/pls.png": "92324d618c5d681d77d9fcdca62a8f17",
"assets/assets/rc.png": "903b4818c459eceea5ed1a54e3afbcd5",
"assets/assets/soc.png": "52aa0a1a336b67ae48ff327ae59772aa",
"assets/assets/sp.png": "0439f1909ef4519936821503bd30a579",
"assets/assets/sp1.png": "036c95999d7b7318ae7aa4190d11897c",
"assets/assets/sprait.png": "0439f1909ef4519936821503bd30a579",
"assets/assets/SS.png": "4939a69cc1f358e5a0edfeb22abad5c8",
"assets/assets/st.png": "15b8364725e7cf09c388a3616d501159",
"assets/assets/tb.png": "820fba873b135e98de6b4780f3961935",
"assets/assets/tr.png": "57db0a6dbdea08d455cb8f87688ed727",
"assets/assets/Vector%2520(10).png": "2184eb95ace9d32e47d40c01941ca42d",
"assets/assets/Vector%2520(11).png": "cb22e403c26ea71fa882c00cdb372d14",
"assets/assets/Vector%2520(12).png": "ff68d24a516aef0b2dc98183422a6e87",
"assets/assets/Vector%2520(7).png": "46cacf5744c89ec545cff4cff2276bfd",
"assets/assets/Vector%2520(8).png": "55e7aba0c2886cb9ab05cf34b28d1797",
"assets/assets/Vector%2520(9).png": "d49f4fc4525a2ee86b3fd09c1375f780",
"assets/assets/Vilca.png": "bd4fe2ea198f44fa55aa068f4e0dbe4f",
"assets/assets/wumen%25201.png": "a6ba8850178e8d9a3b29dd3ad1a4950b",
"assets/assets/XMLID%2520373.png": "fcebd2869bc4f032ddf372e9c599deaa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bf30f9e4f35e10fc2cdd07350ea76412",
"assets/NOTICES": "0053c8c67a43e4407ee83c4c0238cad7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f1d9c54c0069a6defc2b535472e817db",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6e57b75e5a79c70591ebb9bc1e4c9068",
"/": "6e57b75e5a79c70591ebb9bc1e4c9068",
"main.dart.js": "cd78f0c6f383322eb7a4d7f0d5bec9ac",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"version.json": "a3322b2f035e5345663b567001345585"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
