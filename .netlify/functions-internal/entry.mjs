import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.f61cc8fb.mjs';
import { _ as _page0 } from './chunks/pages/all.e315e219.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'html-escaper';
import 'string-width';
/* empty css                                 */
const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=s=>{let l=document.querySelector(\"header\"),o=document.getElementById(\"home\").clientHeight;window.scrollY>=o?l.style.backgroundColor=\"hsla(0, 0%, 0%, 0.7)\":l.style.backgroundColor=\"hsla(0, 0%, 0%, 0)\"};document.addEventListener(\"scroll\",n);let e=!1;const r=document.querySelector(\".burger\"),t=document.querySelector(\"nav\");r.addEventListener(\"click\",()=>{e?(t.style.display=\"none\",e=!1):(t.style.display=\"flex\",e=!0)});\n"}],"styles":[{"type":"external","src":"/_astro/index.fc2743df.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["E:/Pluto-Design/luminobyte/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/assets/svg/expand_right_double.svg?raw":"chunks/expand_right_double.d9de81f3.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.bf31b6e0.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.fc2743df.css","/favicon.svg","/assets/images/axe-zombies.png","/assets/images/bg.png","/assets/images/BulbLogo.png","/assets/images/h1z1-just-survive.png","/assets/images/shooter-and-zombie.png","/assets/images/teampfp1.png","/assets/images/teampfp2.png","/assets/svg/expand_right_double.svg","/assets/svg/facebook-icon.svg","/assets/svg/instagram-icon.svg","/assets/svg/linkedin-icon.svg","/assets/svg/long_icon.svg","/assets/svg/luminobyte.svg"]}), {
	pageMap: pageMap,
	renderers: renderers,
	
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
