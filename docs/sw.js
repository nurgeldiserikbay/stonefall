if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const f=e=>s(e,c),l={module:{uri:c},exports:o,require:f};i[c]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BkXdLEzX.js",revision:null},{url:"assets/index-DyT59ulb.css",revision:null},{url:"assets/music-brake-nxq9OTBT.png",revision:null},{url:"assets/music-C1YxTj79.png",revision:null},{url:"assets/sound-BNBpSPsc.png",revision:null},{url:"assets/sound-brake-CXxeFYIT.png",revision:null},{url:"icons/android-chrome-192x192.png",revision:"2b0431830385a1d21f89b233a89ed3c8"},{url:"icons/android-chrome-512x512.png",revision:"72eba9adc924f0b4aaa081e4ab07e956"},{url:"icons/apple-touch-icon.png",revision:"74b2268404a2f88293c143a429d4b7c7"},{url:"icons/favicon-16x16.png",revision:"1d255b57ffc06fb1a158a3826c099c4c"},{url:"icons/favicon-32x32.png",revision:"2254c8203e8363c4c302d1fbdf299810"},{url:"icons/favicon.ico",revision:"9383fae78ac9186cf8b7458a4b8fd93e"},{url:"icons/mstile-144x144.png",revision:"bdc78d317126539e447963fcd89bc03c"},{url:"icons/mstile-150x150.png",revision:"d7ba94472ca0a572463bbd33483e15f2"},{url:"icons/mstile-310x150.png",revision:"4cfc4fc36ec1f355a078f30209c7c40b"},{url:"icons/mstile-310x310.png",revision:"967785ca81f2a278e82a443c38742e12"},{url:"icons/mstile-70x70.png",revision:"21d9dcd3d1c2ef69823babf7238512d5"},{url:"icons/safari-pinned-tab.svg",revision:"74c2cefbf7590bce31e5953ab3398cb1"},{url:"img/logo-item.png",revision:"f495b1e268e9a9d2a8a0e38f41bad6fe"},{url:"img/logo.png",revision:"344add39d905a3695f223915dd3f5573"},{url:"img/logo.svg",revision:"d1f01ce3d3db90f8d4bcf41ab161e35b"},{url:"img/logotype.png",revision:"08a2f059c61599f97829f84069f9204b"},{url:"img/round-ball.png",revision:"e405b61d75c98b51b897e883bbe52380"},{url:"img/tiles/p-0.png",revision:"03196d631a65fa119864d82bb99bd118"},{url:"img/tiles/p-1.png",revision:"b2ff118c0826c6720ce794bf68286d9d"},{url:"img/tiles/p-10.png",revision:"afa2c7bec61144771683a3ca6be705fd"},{url:"img/tiles/p-11.png",revision:"ee9368b80f1f798c07336a6f4a4d380c"},{url:"img/tiles/p-12.png",revision:"1ffc5dc798639b987a3cef36654a6dc4"},{url:"img/tiles/p-13.png",revision:"8c92d9ac4f8511f146e551ca5b60f4f0"},{url:"img/tiles/p-14.png",revision:"46476b8a9cbbc43b8568105237087325"},{url:"img/tiles/p-15.png",revision:"2b975bef7f9274a35f7c81224f4c3de2"},{url:"img/tiles/p-16.png",revision:"1c45193e4bd29adb5c3c1a69a9b6ab08"},{url:"img/tiles/p-2.png",revision:"d6638b0ee68a44691d8b3ba4a31eef55"},{url:"img/tiles/p-3.png",revision:"76d612392619ce5afd76db7833417fb7"},{url:"img/tiles/p-4.png",revision:"f602b6504b9e8c5814579344d7abedcc"},{url:"img/tiles/p-5.png",revision:"f602b6504b9e8c5814579344d7abedcc"},{url:"img/tiles/p-6.png",revision:"3543c9f7d99e6875e4876185fe26928f"},{url:"img/tiles/p-7.png",revision:"3543c9f7d99e6875e4876185fe26928f"},{url:"img/tiles/p-8.png",revision:"9d6ca048501fd2becd9e101a0feb84a5"},{url:"img/tiles/p-9.png",revision:"de38af02eb696224b52e83c6c832d13e"},{url:"img/tiles/p.png",revision:"93a880c128cbceb7c86a734c51fc5ab7"},{url:"index.html",revision:"42daffa5f5aa7174a45a9a377f6d6a41"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/screenshot1-0ff68546.png",revision:"d5f2e3557fb192964656e89f5a883823"},{url:"screenshots/screenshot2-1f78c4db.png",revision:"97dceff34a8c40fd31980a7c316ad733"},{url:"screenshots/screenshot5-ea50826f.png",revision:"5d9812b68b9d17a0f861b973ff05b38f"},{url:"screenshots/screenshot6-0168d284.png",revision:"6bf7fdd04e6d17ac0874b43c1bf87063"},{url:"manifest.webmanifest",revision:"99aa491df8fae62b40a7225ec57387a3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
