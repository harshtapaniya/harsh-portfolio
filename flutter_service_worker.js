'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f20102c65010d0236d95f1f5f94caecc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "48ca54b44c492075ab130f804b8d1f5e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ffa6192d6560e50e599218457d8ca5b2",
".git/logs/refs/heads/main": "2fcca0c25aa67ca25ff5ed86b6e044e5",
".git/logs/refs/remotes/origin/main": "b1fd9020cce8e98fcfeb11ea2ba9adb4",
".git/objects/00/b9e0c14eb366200f5c5417ceb915209a203e96": "19c68af6a1b2c31f25122d57a23a3c98",
".git/objects/01/f02872553f9e822875fac4a1d5bf2bfea78f35": "f8493666ae1fc4d9137ff6e6be8fc1dc",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/f54520c99843259a9365d6e60d05ceabda3531": "d49c891362653071e79caa629a023429",
".git/objects/09/2218c35c707f8acb517feaa348fa5d2dc419f0": "9228eaf4e6a7c9e975d3442e1db12db0",
".git/objects/0e/b4d1bb22e963a74b975fffc655c532a562f582": "394d18db027eac63f92cd0b7235fdd31",
".git/objects/10/6bb4e1ee70534a7a4d591942323786b1b1d5be": "99ffd47ed663896ed681c9c1e68feed6",
".git/objects/11/a29bba738b7d76877ed0905b2775c471c08e3a": "2fd6cb38aaaddd2892d6bc74500a7006",
".git/objects/12/d6b82405257aa80e9fc0dcbf2d904abd49df71": "ed5a52b70614c5501b551838f1083a78",
".git/objects/14/35f83b1d11bfe1886d7c6a4095f90d0bc4395a": "5358c7e2dff3a4c47dcc440be3f7a988",
".git/objects/16/f0c5c9f909b9892e23a473339cd5b32be9e6f6": "f371aaff7bb7349ebaf58d23f69bdfe0",
".git/objects/17/8c3f1d90d96a494c0854acf9bfe734626c74d1": "3573d0abf65719021bb8af8c717e3c62",
".git/objects/1d/f5914c8f7b6d8291f0450a478712958542c9f3": "81b9c4b22ff7e60b9dd50ffe400daf10",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/4420a2fc7b10da3f1c7b4f8a43b2ef6bf52818": "6605b4cb167626567893ff6e74e9d9e3",
".git/objects/25/2792aa64067995ebc542fad77c2f97b5129cad": "0dc7ad80617a2dfc48fab607473ffe91",
".git/objects/26/2f59e8c4abbdc716d00af1566092fd709937db": "f3615c17b0a7279697ce96fbf927e31d",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2f/85fc9f0f81277bb403f36b43efd7c19d948388": "cbf0fdd4be1b813bf5a537edb0f3244b",
".git/objects/33/d84dba39789e42a92c96369c1df30eb5188cca": "e4622e64ca4e78a76b1374e7a31d8528",
".git/objects/38/130dae6bc6e4502432ffe6888c08d18574c385": "06c81e1e941a3fe74495944af07a9527",
".git/objects/39/ed42e0b5923574420bc1f1605b5c1a4bce62c3": "dce5a850e4a208edd89266e88e52766a",
".git/objects/3b/486dac03af99a3ceaadd22a843a2b9b31f45e8": "308f85a7b2927f65754b3e93e67a57cd",
".git/objects/4a/7a4f183f373908060ae105a58135a5f6f8112f": "491bbf65cabd77aefe58b2ce4ef57ea3",
".git/objects/52/90e8e4f0aaefb4c92fb38e40cab957f0fd4588": "3f5f0d611d92e21e445e63e22e6df83c",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "6e0d46fe72b15d4f4b054046c8a490b0",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "26f7c80b850d5545ba68df7ca0c6e8b6",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/6d0e6be54d16a8c16d30d0b5017719216a1811": "ac0360034302edd04393f96de7a7d20f",
".git/objects/5f/979419df815fd3ab1fed6c76b216bcc1f094ef": "b1a07aeb711be59ea1838ce437e39d34",
".git/objects/62/f01c9b7a58b50415fcf593aa9dfa4376966dfd": "895761fa8bf8344080f8d37e042a80a5",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/30bfbde853f3fb91b8a6d58bc7f75b190443bf": "1dd1d5da9f48b95c4c260a37b1871910",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/d3e804f4fe433c69858de3b026c394bc6464af": "6580943c1400dfdaca777da059ef0aac",
".git/objects/79/8f608ba4574e74d65070d314e4e9fdee70f30a": "14e36736d51eedf062b02f5216bd85bd",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "1791f1835b43b32100c49d09db6dbb03",
".git/objects/81/374692f900a94b3ba83ad0bb3837f72b34c5f4": "efc7feffe18849046864ecb98f1a7499",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/4a07642f17fcdd6e4ce3926c1c8737843e3cf9": "428a59c0a5fd316e1d2a54d8b5607828",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/11847373aa1c0995e5d31806dcf620be6ad55a": "148adf72d59517d91aa42e1e7671ea09",
".git/objects/8b/30e53606c395cc055a75f2c72644fed1c95e7e": "79b7af0fd15c2b2aaea0ecffbb84e656",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/61f909b7dd16f64414a08ab37b1c759734e09a": "084a34314067782f2936d161c274bfdd",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a4/de9e9dcb63c2b227d8054aeeb113b7550c3632": "a5cc5a233c17580e0fb6802e1bc855ba",
".git/objects/a6/bd882c7ab47ae7a55dddcb13174757d9ce1b1f": "3d0ced0ced58d5282ef7d5a7e6b30823",
".git/objects/a7/6d9d444ddd99670cb1f4489c77a4d9f8c167d5": "28e68656dd9ce4dcc1a858438ba23f78",
".git/objects/a8/29539912a1ae8291ff51a1d8c6ab5c5b5bb10a": "ed1c4b63204a1adf3453b14c5ed8b06e",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/af2e7c720ba7cb25087d5aa5f9dee7b20ba72d": "264200250ee2c2c5f81765d5e61f6970",
".git/objects/b4/59b2cb0ce3f148a9faf10a4df2e228005f8db7": "5cbbb7290ab662cd4c663b4b63246660",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/22e113e3ced772d86b29bc4914dc27a8095b25": "11521e4bd781fc22f44d37f3b4aacc70",
".git/objects/be/37245619bb07f0f3fa9be9e7e5f3bab4e0e2eb": "26f3a83a921487c3ef43e292db4d0903",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/418d36a1b90ea8d81df281ff73ceba0e145342": "6f7f826db46c9882ef84f37d983ec290",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "fac21279daaed95e8c9ffe4661e725e2",
".git/objects/ca/08f84863051328859e9b268cc7a767b9cb993d": "124acb340d740bae5cc6abc87c85529e",
".git/objects/ca/6af87c1dd9a535ae1217366926141c383108a2": "35c03c9fa05d94e14606608d9e6a3d02",
".git/objects/cb/04778f9545f06c754e8e77a159b6956fffb338": "343049594a6574b1293aca76c48ca1cb",
".git/objects/cc/850485bd263cafb50bcbd23dd9c496806f5edd": "6d5bcc3b7220d9a674dd12eb3366d624",
".git/objects/d0/f733de32ec113a26287fbcf25a450f77e530ab": "84cfc914ec588a225bf70d66dd475bdb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/da6f897a654bff0562830ba87434f1f8d225e1": "e73c333e2d905c027e51de060e9fb56f",
".git/objects/d5/0ee17ba1096c047b9595802afbb2443d3969c9": "5b252a4c742f9e8f7dafe22c9bd9427d",
".git/objects/d5/d406087f3386241f86f11730f7c71716cc3bbc": "c98e6c48f952d1de66c8d243ccb2bfd7",
".git/objects/d7/9bad4393ad9730497621f3e32f95ace171199b": "533fb6935484d8ef44357103b970226e",
".git/objects/da/79582c848baf819b8ea5a0ff3a93cc9773f199": "b262683d063c1281991c42a455ae0898",
".git/objects/da/a6023543bacdc0d4dbf6076a5ca602189205b0": "2ac056248a565232f583a7583f2e02d8",
".git/objects/db/3aeb876e429fabd4309a1e4837a90f4b3daafa": "82848048794470eb4465e02ffb8eea14",
".git/objects/dc/f769c119c6f02fbc006d8feebcdf1d16f19769": "14592c16b5129c0bb1bf269091179d9f",
".git/objects/e2/b9a689f481df430431228ab45823b892f97bb9": "018116d4a4197fc807f99509fbeee1ec",
".git/objects/e3/3156c788e8af12e0652b2a35e72db7002ac979": "921411a808739b269d1e628a6c3d747f",
".git/objects/e5/d207d4987e80770c9a436dbec002a068178472": "86d369bb4c24f2f01ae6c187688cd412",
".git/objects/e6/f0c510c408e3cf0b7043963bb3a2844633e295": "09da79ad93777da939edb9e70527d431",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/740beee33396cafc9ad1cf04e83ad44d6fd083": "9f58c13d338d92f27cd204cf26392ecf",
".git/objects/f4/6479d87f4d09fba6354773736b58d710b4ad98": "6619b4d0fbecd128c6370985f1133862",
".git/objects/fc/7087096141e3809566285d29795403e87d15d7": "21a0a71b1ce1b4c9ea694d3c2419a1be",
".git/objects/fe/b006d66234e1b55600b00916023982706abf2d": "c05ea7c31475ad5922bc102ea1c204db",
".git/refs/heads/main": "0daea4174957c86fdd7cc1331c2061bc",
".git/refs/remotes/origin/main": "0daea4174957c86fdd7cc1331c2061bc",
"assets/AssetManifest.bin": "75902a9263d11b4fd1665f6ed0037df5",
"assets/AssetManifest.bin.json": "5102f2d91b868a470995b0e12f10d20c",
"assets/AssetManifest.json": "e1af7d3bc649f7bc90558ac4d36c0c3c",
"assets/assets/documents/c++.png": "6ed8beacd69dfa65fd1a75ae3bde3d5b",
"assets/assets/documents/c.png": "664895ef0e61b8c801e0bcba7477a3bd",
"assets/assets/documents/degree.png": "b7bd5e8531b31790b45e81eb66c4c4d8",
"assets/assets/documents/java.png": "3efe584c1fb9de3a1c782feba850b586",
"assets/assets/documents/ncc.png": "d73489af37f710b8c16df419573c7ee9",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/about-harsh.png": "da6c3a2547a024344430a202ca1f65ee",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/logo.png": "fd78238c2f36d897490c6bf2badb7e40",
"assets/assets/images/profile.png": "cadedbd37b4e85cdb12f122cc3bec573",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/skills.png": "d4302739a34cb5e0890051af8551b828",
"assets/assets/images/small-down-arrow.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/projects/booking.png": "9504242364c8053053ff08ceaa1a64e9",
"assets/assets/projects/chat.png": "24a74a1ca330a86bd184d8a57d4fb6aa",
"assets/assets/projects/favorite.png": "d397d07bb967e0097c9b4045e55e5f65",
"assets/assets/projects/home.png": "a3486ffcb42462877633741849c3ad34",
"assets/assets/projects/label.png": "5acef9941a64e0c816905d8178bfe9af",
"assets/assets/projects/login.png": "c960e8be7cd1203eb24076700969623f",
"assets/assets/projects/offer.png": "0e70cd1ec5552b68cf9594a2a8a7b9a8",
"assets/assets/projects/register.png": "a3d16f46accf31f17384b7b32b1834ee",
"assets/assets/projects/search.png": "d67ae7d686570479c5612a1b3b1c0b8b",
"assets/assets/projects/setting.png": "02f9b68b8583280401d751edf19b2e8e",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "b1654b0dbb0ad1d5e3569acb985ef4aa",
"assets/NOTICES": "db8cd06628f2067cf5e5ef4968a34588",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eb3f8ecc9f5ab11fc9c88a7ed67773c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f9e67278086a4962bab5b5958c7f25a0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "8877d4409ccc80f4d54cd17d3813f153",
"icons/logo.png": "fd78238c2f36d897490c6bf2badb7e40",
"index.html": "f07ff0b5948afe751fa32c4cf47a38e3",
"/": "f07ff0b5948afe751fa32c4cf47a38e3",
"main.dart.js": "421a2fd8381309773fa2f40f28e13e73",
"manifest.json": "bc60fd857891ce26bb3a7b2a4890094b",
"version.json": "88231b857fefba57b41a166ed4d250b3"};
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
