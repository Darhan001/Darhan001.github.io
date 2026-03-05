'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0d8713af0ca54504b4bc556a3166b229",
".git/config": "8bd17b16ca9366e8ee18fd18381783b8",
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
".git/index": "27238721fd116e448dab4537667404ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd27c8f6ebbe9435210afac82e0bb2d1",
".git/logs/refs/heads/main": "371ec0ea706693615fa586477d2c8630",
".git/logs/refs/remotes/origin/main": "952afb8c80644bd187b990a9b47c8c89",
".git/objects/01/9076e11bb5037d5b995ca4b518ef6becd9b130": "3264f0dcc0fc63c5372249d65347b3dd",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/4ef114dfe763dc5e4cb0ef31cada5d25781b74": "08dc9a27218d17b153934a50d2f30701",
".git/objects/09/b5bb3494bab34945914ed1600a91f5b1f39d38": "cce2711530406d8796a6bd12c74818b5",
".git/objects/0a/4eed9c99db591e8c0aa730bcf59e7f7e9f8590": "cf7c0fa56a9232b6ffe552dba6194202",
".git/objects/0c/4af5b13e3bd78ca9677afefc745dc18bb6acb9": "ec9f89f1d8863e75604d46b6301f0a3f",
".git/objects/0c/f5302cb06da8909eebaef7e914c61f94899084": "f3be728850f77129c00aae479812ab26",
".git/objects/12/dbd1431a9ed89c64c530fe25255e3bed65d97b": "139a4890959bd58cce811a65dced40d8",
".git/objects/14/2eb7012d98f9f9b318d6240e68c9710cd72a5c": "accb2ab35291e510fe3dc13a2b2ac435",
".git/objects/16/1f539490932948917145b764eaf278fcfc8511": "63bc14c5e37a8e89cba52568824982ee",
".git/objects/17/db5dfce42887af2c38fcc066b97d439b6e2aea": "f8d12b7e32a9f2c837185677c8965cff",
".git/objects/19/7f9e3874c99c73a784fe091bcfe79f219b7122": "2000d9990a3f65c4e5b49a8c38e4e8d4",
".git/objects/1b/b348ca94829ce573c84cd1f2e4f82389db8086": "93af1f91c8a9ee6f5c0bd62b321cc02d",
".git/objects/1c/55e70905a67acc09f1829e0baa645ea6d7caeb": "33d7cbf412210f9a6052dc28bffaf7c4",
".git/objects/1e/edba53b66b2c17a2f9a958a602d4f742904551": "97ac13f286a1d6da748897cc09c6c88c",
".git/objects/1f/4dc4d5c2593481988fa806d3c0c725d0132a83": "7541adca70db92c39784ff9ce56c88ee",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/26/5c04c2f61f7225f45dfda83bd4ba004c70dc9d": "3dbdfd62ab94b68b1ce7acf170bc8f64",
".git/objects/26/ddd349259c20fa6386fde87c15545223579ec3": "3fcf5aec7af0b498875f5319a9a5c129",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/b0941286d0bbbf085f9da45e82bc6999fb6edf": "44423a457b2b16749dd4bcd523c88de1",
".git/objects/2a/cbfb09430275985449296aec5b2e08dc06958c": "f79019e0a0a8c4004e7351679f8b5433",
".git/objects/2a/febc30bfa1f468dcef3690696214b9c4730de7": "0342cf8175649d21b9f23892d805daf6",
".git/objects/2c/886b53d6ec62369f7f0bdc1807745b5c870892": "34f568f2e838b0fe05ecf3cd84aebbf0",
".git/objects/32/8c05c16117eb51e24e762bd1e383928acb8b88": "5169501a8140237ce20cf77ba6004c0a",
".git/objects/32/d4ca0e1b9ef127213caa265b38bf81a0bf915e": "152774ac5e9cd33aed914c30f7393533",
".git/objects/3a/3619af3180aa08fd0be2756447e27a08b964d8": "7ac78fd24c0a9eff9833921b6aa6d59b",
".git/objects/3a/c5cfd31a0649db84c46891696d33b2baa02efa": "9c5a3ff707a420aba16dc0da1327d70a",
".git/objects/3d/9acdbce4159748f192f5265cea5cc436dca06a": "68a998d7f8a4b97de5a2571494f73c86",
".git/objects/3e/2bf59908481f95e40fc85ce97c97637659a643": "fa39441833c05b7ee6222ee069534c4a",
".git/objects/3f/12665b3090b11e52cd06f1a9bc283a64330b65": "03ac7a2e8fb39139b82e960949fa511a",
".git/objects/42/01cbd6a3c1eb8ab9d062af4e5ef7fdb9fbbe8b": "bef5acb588abf7a50eea84708f37d986",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/17a6027904b2f75219bd7ddad5d4ad1e790ae7": "1152015871e5dee09c57d264d7a8318e",
".git/objects/47/4169c270adc0bdac353bc896aa4c08255b8b18": "decc3682d4a50e457dfc829a8cec4009",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/6b2280237adc0170b81705b03b28422b40167f": "e71f821b81c27c51ec38abdeba8877bb",
".git/objects/54/0c11dc3c5403ac204c7fc0f73717b32f2a279a": "37bde085687971a6e48060d3d5b8cb88",
".git/objects/58/8b88c781610647cf06d03c0bd8c2ee5f85beeb": "08fb697940f8fc59f8cf33a0e871d7a5",
".git/objects/5e/42e342fb14beba2ffc80582e25522f5e4c766e": "1155014393a1843a6e9295554965a811",
".git/objects/5e/e26e50dbf092fed896b8d68012d5200de0d113": "e390ae87f468baabaa0f455d44b90941",
".git/objects/60/69a440d7e9af7a5982fa3bcc20402ff18c5503": "c96f155e5ef384700dea5db6f57d0644",
".git/objects/63/9b02ec937db0f655f336433bff39b49d880291": "2d48f46a66f5026eed437443d4909786",
".git/objects/64/f8153afdb5f1328dae293b5acfe6f5e90f28dd": "c6b6a7775e405c8adff0bc00725129d7",
".git/objects/68/a0edf1c1e1a189d6a2163a5a91f3fae4110e8f": "e0599e01065b0ed6ef9f1322ae79bf96",
".git/objects/69/d8155fbe94ecded57ae24914d32fa26ec9a45c": "183d7dadc13e0be5209fc52828a679e4",
".git/objects/6a/7134500db8f189381da51b7942dacce09b2788": "b35a01d61c2e33bf4954378e52663d15",
".git/objects/6a/71b6fce8ced29d5f7a43f95654bec35cc4abc0": "04f14ec7716626b6df6e9da117c12aeb",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/23ab9cc74d01f228eb86f62bd8fbce8fc0392b": "b4fa33aeca3e112d57ec73971c7f3b8b",
".git/objects/74/ace6cae3dfd3983ce32e3cd706777ba67d980e": "203bff3dd78bd4a2b3b7641da8247dd7",
".git/objects/75/a709088ff32fee33079b9a79f7bbf6ea63a149": "cf77956f1c3a52c86338c30471de5b96",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/b04ec87d9214d47d1152606a3aa59eed299465": "cdc2adce51345d65043e713ce4379f99",
".git/objects/80/4673b3d11a241634b88f259e24bf9f3447acc1": "1cd5dd8163243a0fe26219e1a5796327",
".git/objects/81/df63a599c7f3172e16e9d7302afcfc407e6ebd": "2a6e587808a12c9e2f705c24ba65f146",
".git/objects/83/a11d31c9460e906b8179b0b86272b9b52b614f": "9164b6b5ff49eba9b38fb0c43bab689f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f6edc69e95daede41888b2441fdaf5a9cb37d2": "7632449c61820ece8a4d81b2392bcc6d",
".git/objects/8e/6d97498dec5991f240b4f6061cfafdef7a978d": "6a0b6884baaf2ca15b3709b2e868ae85",
".git/objects/94/f9d4c295cb2402d828a7e9ecbed53e361714d5": "b7a7220a9dbc0a19ff32c7f8ccba528d",
".git/objects/95/f1ca21e280af6475d7cfc7234bb3e2e94cef79": "a66c02c7638a0bd28b4943f1fc445875",
".git/objects/97/3921132c46165391b42cab96bd02ed9cf93e14": "73dce13c80cfd038c925ba2e4aebd9ec",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/45168c9f4096afbcb55dde161348eaf8fdc151": "4bc9cc3b8124dd85225d3a0776d39437",
".git/objects/9a/01a4223bfa23e8614b78557cab851ef66f7419": "34b1c3ba4604c3be6c6898e3ceccf828",
".git/objects/9a/f6c6f61fdac4533e3ebee93d2a3a7b5ea2a9cb": "ac8eb577117a26f91c61393983450de9",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a4/43e476d27753ab819e691a3e2b2410eeb751dc": "e83e9f871da5d607f7c43bcfca293df5",
".git/objects/a6/16bd5a710110ed9029c208690ccf3a58196dec": "2447988562442e3b768801b2a75adb6f",
".git/objects/aa/c497441b1b8e173655c1770758a549b0318635": "9a64b9d523515360f44e48c0c6c88739",
".git/objects/aa/d9c01411c14d727132aa3af6760bbfeff87248": "ea796645d3e26eadbaf74b50251afd88",
".git/objects/ad/a42a2e0a91f46ee350f8bd6a13f2889f3f0417": "656554caf26d5f0ca2287fd0dbb8493b",
".git/objects/b0/22ae4340d9e196850b3b5f12652a809d3e648d": "9d9a8778cef383c3059b506a52230c7f",
".git/objects/b4/dd1508c667fd9f5678298dac88193b69a50fb4": "b7dae19931dbc0c035e2e8cc833fe6a9",
".git/objects/b5/0a5c432f2d6b5226c6f871dad37afe7ad22624": "f4a336e36ee58004700de79b9ab9922e",
".git/objects/b5/62246f789eed5737d3e200b4005561afaf3980": "b0a749cfef0a5598afb9713cb3395a31",
".git/objects/b5/62f9d1018d34366318846d8da5f9b22b975efb": "e672c696948d674ea1b112b6ec5289a5",
".git/objects/b5/91a41bebbce7c594273bdcb05b0ac5ff762a97": "5c723533e70f3ad84db84374229b9842",
".git/objects/b5/b59ef4c226169f728efcab9104f32b440dec3c": "dd8bc9f410d3055bc5a9b8c913628f73",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/df458226fe302194b177dfef5888f736ffe1c0": "4ac9864250430a11bccafde71cb15582",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f2b1b56c439f95c2124f9fd371d394bcd3de9d": "eb19fc53f6ffed002d6f322e883efaa0",
".git/objects/b8/80fa102507b28e8556d920bb7d5db35b9224db": "e5b59fee442419e4ff848252899699df",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e77280dc2909dc9b532d2fe2394242c16a9363": "510bda8d92aa24373f2967a34b7cbed7",
".git/objects/ba/c3fb86b0e9538eef0e12bd8098d52faad330fb": "6fe212051105ff160ae571ecc6c4807e",
".git/objects/bb/876a4227ee16d1a9ff6388fd85dff1aa29ba2b": "427269ac64c9b806248e79916bae221c",
".git/objects/bb/87714e8020538a79fd5588db04243757945608": "0b32f7d137e2c3bc7a9a8029353b4f3d",
".git/objects/be/aa2a855fb4f0c845a2948bfed41c756fa54f60": "43088f2b1923f68e45682eb9669b9a5d",
".git/objects/bf/aed0718e46539a08a8e847f05b894c2cecb587": "def483fa77ab54e6b41e1569fa8c33b6",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/b18a4ebdbf05fc45558aa6cc865b8fb2214a54": "4c74db36bf8cfcb8faa26333a3d64909",
".git/objects/c8/898accc16b69e96763187e4dd6cfe315d02d65": "03931736d90959489c22171943dd3ede",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ce/939147e291371869f6b4b289b6672634d81b9e": "76265645b445ed4caf89fc2cdb50443a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/756895818cd3081a72bcfda76f32905d98276a": "e585227dd887766f4d8687f0e10d8ac3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/03952fca59745af0fc68fd24a809a24160afad": "b1581241bc4bce31d954c4a187d78eb6",
".git/objects/db/87fa87e4752b59780b96bf61296088b5b62e2a": "8c8090d9ae0585327a12beb72c680b04",
".git/objects/dc/0d35e76e43c304f73fa03a10026a872d951ba7": "c8c3323a26e6fedca7881d5d0661bb10",
".git/objects/dc/953203f6d23845a202465033c87e32f4c7dd67": "742a134ffbfb8b4719809ef79492bbc9",
".git/objects/dd/f81a0066211f24a9d677b322beb2a41d35a658": "a6faadb72cc1fda9bdc15d1304af3485",
".git/objects/de/a06f676afd824fd87d38b4b95aafc6b1e64293": "f63f4a21ce41df51b194093e392d6885",
".git/objects/df/e7bbb9776d7b59d026b3ff67a61dee40658588": "b812181475ef50ee3a0b3d371c00043e",
".git/objects/e0/c4600b3033cf1fa2414a6869d10db00220ae1e": "814cbff954ea688f1dfc8b62c50c9809",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/3c6024dca92ec78e1a7259127916fc32759021": "0ebd2f612901935a805f673657654f35",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/0a11fe1d7d65a024387f7e8285ee873281e2f3": "eab0ea6bbd709ea5f233f596c39e1787",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/44925839bc21de6bbdb67d043a2783495318de": "6db82029cf528230b704714bb4026f9f",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/f30a7394ae79d241d7e9d4ab3d13c5f13edab3": "572c8370e6f2ebf858ee30bedef0c825",
".git/objects/f0/4e4f76545c01f94ecb60ce1ace3cb553124349": "3153fb489d331625bb41f318ad5700fd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/cdd49b687b88c29603436c13733fbc23eb5db2": "c150539f21e61d4950950c541ef2067d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/07284e4afe0654858b71bc6cf203f46b37fdbf": "89637e1dc49909570325c852f663a64c",
".git/objects/fb/cb3cdcc8293468c2a9ac5799e6b3631f3bda89": "975533e2413cd99f009b35265a4d55ba",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/ca3e35757c2fd49f2d49cafed1d93fdb14424e": "e93f2446b035fdeca24f3d0072de9654",
".git/refs/heads/main": "50e2e7a9d9c946ae6c63f2bf8ddaa0ac",
".git/refs/remotes/origin/main": "50e2e7a9d9c946ae6c63f2bf8ddaa0ac",
"assets/AssetManifest.bin": "d6e8df7eec6b2ad4c49d82d8eb92db86",
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
"assets/fonts/MaterialIcons-Regular.otf": "dd91b3a39493edcbb2f768d07ffa4d04",
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
"flutter_bootstrap.js": "e03c56b2e19b8fc6e85023ade2917a77",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6e57b75e5a79c70591ebb9bc1e4c9068",
"/": "6e57b75e5a79c70591ebb9bc1e4c9068",
"main.dart.js": "2937208f84c1540ec2c16df2f4b08111",
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
