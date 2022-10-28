import{S as et,i as tt,s as nt,a as rt,e as q,c as at,b as z,g as pe,t as F,d as de,f as J,h as G,j as st,o as Re,k as ot,l as it,m as lt,n as ve,p as B,q as ct,r as ft,u as ut,v as H,w as W,x as Le,y as X,z as x,A as Je}from"./chunks/index-c43dc3b2.js";import{w as Ae}from"./chunks/index-5fa615a4.js";function pt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function dt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ht=["href","pathname","search","searchParams","toString","toJSON"];function mt(r,e){const t=new URL(r);for(const s of ht){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return gt(t),t}function gt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}let Ge="",Ze="";function _t(r){Ge=r.base,Ze=r.assets||Ge}function Ke(r){let e=r.baseURI;if(!e){const t=r.getElementsByTagName("base");e=t.length?t[0].href:r.URL}return e}function Se(){return{x:pageXOffset,y:pageYOffset}}function ze(r){let e,t=null,s=null,o=null;for(const n of r.composedPath())n instanceof Element&&(!e&&n.nodeName.toUpperCase()==="A"&&(e=n),t===null&&(t=ke(n,"data-sveltekit-noscroll")),s===null&&(s=ke(n,"data-sveltekit-prefetch")),o===null&&(o=ke(n,"data-sveltekit-reload")));const i=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:i,options:{noscroll:t,prefetch:s,reload:o}}}function ke(r,e){const t=r.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function Me(r){const e=Ae(r);let t=!0;function s(){t=!0,e.update(n=>n)}function o(n){t=!1,e.set(n)}function i(n){let c;return e.subscribe(h=>{(c===void 0||t&&h!==c)&&n(c=h)})}return{notify:s,set:o,subscribe:i}}function yt(){const{set:r,subscribe:e}=Ae(!1);let t;async function s(){clearTimeout(t);const o=await fetch(`${Ze}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const{version:i}=await o.json(),n=i!=="1666942212397";return n&&(r(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:e,check:s}}function wt(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ue.delete(s)}return he(r,e)};const ue=new Map;function bt(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(o+=`[data-hash="${wt(t.body)}"]`);const i=document.querySelector(o);if(i!=null&&i.textContent){const{body:n,...c}=JSON.parse(i.textContent),h=i.getAttribute("data-ttl");return h&&ue.set(e,{body:n,init:c,ttl:1e3*Number(h)}),Promise.resolve(new Response(n,c))}return he(r,t)}function vt(r,e){const t=ue.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ue.delete(r)}return he(r,e)}const kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Et(r){const e=[],t=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${St(r).map((i,n,c)=>{const h=decodeURIComponent(i),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(h);if(d)return e.push(d[1]),t.push(d[2]),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(h);if(m)return e.push(m[1]),t.push(m[2]),"(?:/([^/]+))?";const y=n===c.length-1;return h?"/"+h.split(/\[(.+?)\](?!\])/).map((T,V)=>{if(V%2){const D=kt.exec(T);if(!D)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,re,M,ae,Z]=D;return e.push(ae),t.push(Z),M?"(.*?)":re?"([^/]*)?":"([^/]+?)"}return y&&T.includes(".")&&(s=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${s?"/?":""}$`),names:e,types:t}}function Rt(r){return!/^\([^)]+\)$/.test(r)}function St(r){return r.slice(1).split("/").filter(Rt)}function Ot(r,e,t,s,o){const i={};let n=-1;for(let c=0;c<t.length;c+=1){const h=t[c],d=s[c];let m=r[c+1]||"";if(d){const y=o[d];if(!y)throw new Error(`Missing "${d}" param matcher`);if(n=e.indexOf(`=${d}`,n+1),!(!m&&e.lastIndexOf("[[",n)>e.lastIndexOf("[...",n))&&!y(m))return}i[h]=m}return i}function $t(r,e,t,s){const o=new Set(e);return Object.entries(t).map(([c,[h,d,m]])=>{const{pattern:y,names:S,types:P}=Et(c),T={id:c,exec:V=>{const D=y.exec(V);if(D)return Ot(D,c,S,P,s)},errors:[1,...m||[]].map(V=>r[V]),layouts:[0,...d||[]].map(n),leaf:i(h)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function i(c){const h=c<0;return h&&(c=~c),[h,r[c]]}function n(c){return c===void 0?c:[o.has(c),r[c]]}}function It(r){let e,t,s;var o=r[0][0];function i(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=H(o,i(r))),{c(){e&&W(e.$$.fragment),t=q()},l(n){e&&Le(e.$$.fragment,n),t=q()},m(n,c){e&&X(e,n,c),z(n,t,c),s=!0},p(n,c){const h={};if(c&4&&(h.data=n[2]),c&2&&(h.form=n[1]),o!==(o=n[0][0])){if(e){pe();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),de()}o?(e=H(o,i(n)),W(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(h)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&x(e,n)}}}function Lt(r){let e,t,s;var o=r[0][0];function i(n){return{props:{data:n[2],$$slots:{default:[At]},$$scope:{ctx:n}}}}return o&&(e=H(o,i(r))),{c(){e&&W(e.$$.fragment),t=q()},l(n){e&&Le(e.$$.fragment,n),t=q()},m(n,c){e&&X(e,n,c),z(n,t,c),s=!0},p(n,c){const h={};if(c&4&&(h.data=n[2]),c&523&&(h.$$scope={dirty:c,ctx:n}),o!==(o=n[0][0])){if(e){pe();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),de()}o?(e=H(o,i(n)),W(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(h)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&x(e,n)}}}function At(r){let e,t,s;var o=r[0][1];function i(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=H(o,i(r))),{c(){e&&W(e.$$.fragment),t=q()},l(n){e&&Le(e.$$.fragment,n),t=q()},m(n,c){e&&X(e,n,c),z(n,t,c),s=!0},p(n,c){const h={};if(c&8&&(h.data=n[3]),c&2&&(h.form=n[1]),o!==(o=n[0][1])){if(e){pe();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),de()}o?(e=H(o,i(n)),W(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(h)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&x(e,n)}}}function Ye(r){let e,t=r[5]&&He(r);return{c(){e=ot("div"),t&&t.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=lt(e);t&&t.l(o),o.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,o){z(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=He(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&G(e),t&&t.d()}}}function He(r){let e;return{c(){e=ct(r[6])},l(t){e=ft(t,r[6])},m(t,s){z(t,e,s)},p(t,s){s&64&&ut(e,t[6])},d(t){t&&G(e)}}}function jt(r){let e,t,s,o,i;const n=[Lt,It],c=[];function h(m,y){return m[0][1]?0:1}e=h(r),t=c[e]=n[e](r);let d=r[4]&&Ye(r);return{c(){t.c(),s=rt(),d&&d.c(),o=q()},l(m){t.l(m),s=at(m),d&&d.l(m),o=q()},m(m,y){c[e].m(m,y),z(m,s,y),d&&d.m(m,y),z(m,o,y),i=!0},p(m,[y]){let S=e;e=h(m),e===S?c[e].p(m,y):(pe(),F(c[S],1,1,()=>{c[S]=null}),de(),t=c[e],t?t.p(m,y):(t=c[e]=n[e](m),t.c()),J(t,1),t.m(s.parentNode,s)),m[4]?d?d.p(m,y):(d=Ye(m),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(m){i||(J(t),i=!0)},o(m){F(t),i=!1},d(m){c[e].d(m),m&&G(s),d&&d.d(m),m&&G(o)}}}function Nt(r,e,t){let{stores:s}=e,{page:o}=e,{components:i}=e,{form:n}=e,{data_0:c=null}=e,{data_1:h=null}=e;st(s.page.notify);let d=!1,m=!1,y=null;return Re(()=>{const S=s.page.subscribe(()=>{d&&(t(5,m=!0),t(6,y=document.title||"untitled page"))});return t(4,d=!0),S}),r.$$set=S=>{"stores"in S&&t(7,s=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,i=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,c=S.data_0),"data_1"in S&&t(3,h=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[i,n,c,h,d,m,y,s,o]}class Ut extends et{constructor(e){super(),tt(this,e,Nt,jt,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Pt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Tt=function(r,e){return new URL(r,e).href},We={},ie=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Tt(i,s),i in We)return;We[i]=!0;const n=i.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(!!s)for(let m=o.length-1;m>=0;m--){const y=o[m];if(y.href===i&&(!n||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":Pt,n||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),n)return new Promise((m,y)=>{d.addEventListener("load",m),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Dt={},me=[()=>ie(()=>import("./chunks/0-de9f0759.js"),["./chunks/0-de9f0759.js","./chunks/_layout-8a5c646c.js","./components/layout.svelte-297e2d07.js","./chunks/index-c43dc3b2.js"],import.meta.url),()=>ie(()=>import("./chunks/1-e2e7b385.js"),["./chunks/1-e2e7b385.js","./components/pages/_error.svelte-8e1218f8.js","./chunks/index-c43dc3b2.js","./chunks/layout-4acf46af.js","./assets/layout-e8327daa.css","./assets/_error-93668922.css"],import.meta.url),()=>ie(()=>import("./chunks/2-d98fd856.js"),["./chunks/2-d98fd856.js","./components/pages/_page.svelte-68a98acd.js","./chunks/index-c43dc3b2.js","./chunks/layout-4acf46af.js","./assets/layout-e8327daa.css","./chunks/vehicle-menu-08a3ac01.js","./chunks/index-5fa615a4.js","./assets/vehicle-menu-217f1f50.css"],import.meta.url),()=>ie(()=>import("./chunks/3-6506ad8b.js"),["./chunks/3-6506ad8b.js","./components/pages/vehicles/_page.svelte-a8f4027a.js","./chunks/index-c43dc3b2.js","./chunks/layout-4acf46af.js","./assets/layout-e8327daa.css","./chunks/vehicle-menu-08a3ac01.js","./chunks/index-5fa615a4.js","./assets/vehicle-menu-217f1f50.css","./assets/_page-dd0357af.css"],import.meta.url)],Vt=[],Bt={"/":[2],"/vehicles":[3]},Ct={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,t){this.status=e,this.location=t}}function qt(r){r.client}const K={url:Me({}),page:Me({}),navigating:Ae(null),updated:yt()},Ft="/__data.json";async function Jt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Gt=-1,Kt=-2,zt=-3,Mt=-4,Yt=-5,Ht=-6;function Wt(r){const e=JSON.parse(r);if(typeof e=="number")return o(e);const t=e,s=Array(t.length);function o(i){if(i===Gt)return;if(i===zt)return NaN;if(i===Mt)return 1/0;if(i===Yt)return-1/0;if(i===Ht)return-0;if(i in s)return s[i];const n=t[i];if(!n||typeof n!="object")s[i]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":s[i]=new Date(n[1]);break;case"Set":const h=new Set;s[i]=h;for(let y=1;y<n.length;y+=1)h.add(o(n[y]));break;case"Map":const d=new Map;s[i]=d;for(let y=1;y<n.length;y+=2)d.set(o(n[y]),o(n[y+1]));break;case"RegExp":s[i]=new RegExp(n[1],n[2]);break;case"Object":s[i]=Object(n[1]);break;case"BigInt":s[i]=BigInt(n[1]);break;case"null":const m=Object.create(null);s[i]=m;for(let y=1;y<n.length;y+=2)m[n[y]]=o(n[y+1]);break}else{const c=new Array(n.length);s[i]=c;for(let h=0;h<n.length;h+=1){const d=n[h];d!==Kt&&(c[h]=o(d))}}else{const c={};s[i]=c;for(const h in n){const d=n[h];c[h]=o(d)}}return s[i]}return o(0)}const Qe="sveltekit:scroll",C="sveltekit:index",le=$t(me,Vt,Bt,Dt),$e=me[0],Ie=me[1];$e();Ie();let ne={};try{ne=JSON.parse(sessionStorage[Qe])}catch{}function Ee(r){ne[r]=Se()}function Xt({target:r,base:e,trailing_slash:t}){var Ce;const s=[];let o=null;const i={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},c=!1,h=!1,d=!0,m=!1,y=!1,S,P=(Ce=history.state)==null?void 0:Ce[C];P||(P=Date.now(),history.replaceState({...history.state,[C]:P},"",location.href));const T=ne[P];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let V=!1,D,re,M;async function ae(){M=M||Promise.resolve(),await M,M=null;const a=new URL(location.href),u=ye(a,!0);o=null,await Ne(u,a,[])}async function Z(a,{noscroll:u=!1,replaceState:p=!1,keepfocus:l=!1,state:f={}},g,_){return typeof a=="string"&&(a=new URL(a,Ke(document))),we({url:a,scroll:u?Se():null,keepfocus:l,redirect_chain:g,details:{state:f,replaceState:p},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function je(a){const u=ye(a,!1);if(!u)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:u.id,promise:Te(u)},o.promise}async function Ne(a,u,p,l,f={},g){var E,k;re=f;let _=a&&await Te(a);if(_||(_=await Be(u,null,te(new Error(`Not found: ${u.pathname}`),{url:u,params:{},routeId:null}),404)),u=(a==null?void 0:a.url)||u,re!==f)return!1;if(_.type==="redirect")if(p.length>10||p.includes(u.pathname))_=await se({status:500,error:te(new Error("Redirect loop"),{url:u,params:{},routeId:null}),url:u,routeId:null});else return Z(new URL(_.location,u).href,{},[...p,u.pathname],f),!1;else((k=(E=_.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await K.updated.check()&&await oe(u);if(s.length=0,y=!1,m=!0,l&&l.details){const{details:b}=l,v=b.replaceState?0:1;b.state[C]=P+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",u)}if(o=null,h){n=_.state,_.props.page&&(_.props.page.url=u);const b=fe();S.$set(_.props),b()}else Ue(_);if(l){const{scroll:b,keepfocus:v}=l;if(!v){const O=document.body,I=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),I!==null?O.setAttribute("tabindex",I):O.removeAttribute("tabindex")}if(await Je(),d){const O=u.hash&&document.getElementById(u.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Je();d=!0,_.props.page&&(D=_.props.page),g&&g(),m=!1}function Ue(a){var f,g;n=a.state;const u=document.querySelector("style[data-sveltekit]");u&&u.remove(),D=a.props.page;const p=fe();S=new Ut({target:r,props:{...a.props,stores:K},hydrate:!0}),p();const l={from:null,to:ce("to",{params:n.params,routeId:(g=(f=n.route)==null?void 0:f.id)!=null?g:null,url:new URL(location.href)}),type:"load"};i.after_navigate.forEach(_=>_(l)),h=!0}async function Q({url:a,params:u,branch:p,status:l,error:f,route:g,form:_}){var I;const E=p.filter(Boolean),k={type:"loaded",state:{url:a,params:u,branch:p,error:f,route:g},props:{components:E.map(L=>L.node.component)}};_!==void 0&&(k.props.form=_);let b={},v=!D;for(let L=0;L<E.length;L+=1){const N=E[L];b={...b,...N.data},(v||!n.branch.some(U=>U===N))&&(k.props[`data_${L}`]=b,v=v||Object.keys((I=N.data)!=null?I:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==f||_!==void 0||v){k.props.page={error:f,params:u,routeId:g&&g.id,status:l,url:a,form:_,data:v?b:D.data};const L=(N,U)=>{Object.defineProperty(k.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function ge({loader:a,parent:u,url:p,params:l,routeId:f,server_data_node:g}){var b,v,O,I,L;let _=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let N=function(...$){for(const w of $){const{href:R}=new URL(w,p);E.dependencies.add(R)}};const U={routeId:f,params:new Proxy(l,{get:($,w)=>(E.params.add(w),$[w])}),data:(v=g==null?void 0:g.data)!=null?v:null,url:mt(p,()=>{E.url=!0}),async fetch($,w){let R;$ instanceof Request?(R=$.url,w={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...w}):R=$;const j=new URL(R,p).href;return N(j),h?vt(j,w):bt(R,j,w)},setHeaders:()=>{},depends:N,parent(){return E.parent=!0,u()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(O=await k.shared.load.call(null,U))!=null?O:null,_=_?await Jt(_):null}return{node:k,loader:a,server:g,shared:(I=k.shared)!=null&&I.load?{type:"data",data:_,uses:E}:null,data:(L=_!=null?_:g==null?void 0:g.data)!=null?L:null}}function Pe(a,u,p,l){if(y)return!0;if(!p)return!1;if(p.parent&&u||p.url&&a)return!0;for(const f of p.params)if(l[f]!==n.params[f])return!0;for(const f of p.dependencies)if(s.some(g=>g(new URL(f))))return!0;return!1}function _e(a,u){var p,l;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((l=a.uses.params)!=null?l:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&u!=null?u:null}async function Te({id:a,invalidating:u,url:p,params:l,route:f}){var $;if((o==null?void 0:o.id)===a)return o.promise;const{errors:g,layouts:_,leaf:E}=f,k=[..._,E];g.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,O=k.reduce((w,R,j)=>{var ee;const A=n.branch[j],Y=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||Pe(v,w.some(Boolean),(ee=A.server)==null?void 0:ee.uses,l));return w.push(Y),w},[]);if(O.some(Boolean)){try{b=await xe(p,O)}catch(w){return se({status:500,error:te(w,{url:p,params:l,routeId:f.id}),url:p,routeId:f.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let L=!1;const N=k.map(async(w,R)=>{var ee;if(!w)return;const j=n.branch[R],A=I==null?void 0:I[R];if((!A||A.type==="skip")&&w[1]===(j==null?void 0:j.loader)&&!Pe(v,L,(ee=j.shared)==null?void 0:ee.uses,l))return j;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return ge({loader:w[1],url:p,params:l,routeId:f.id,parent:async()=>{var Fe;const qe={};for(let be=0;be<R;be+=1)Object.assign(qe,(Fe=await N[be])==null?void 0:Fe.data);return qe},server_data_node:_e(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,j==null?void 0:j.server)})});for(const w of N)w.catch(()=>{});const U=[];for(let w=0;w<k.length;w+=1)if(k[w])try{U.push(await N[w])}catch(R){if(R instanceof Xe)return{type:"redirect",location:R.location};let j=500,A;I!=null&&I.includes(R)?(j=($=R.status)!=null?$:j,A=R.error):R instanceof Oe?(j=R.status,A=R.body):A=te(R,{params:l,url:p,routeId:f.id});const Y=await De(w,U,g);return Y?await Q({url:p,params:l,branch:U.slice(0,Y.idx).concat(Y.node),status:j,error:A,route:f}):await Be(p,f.id,A,j)}else U.push(void 0);return await Q({url:p,params:l,branch:U,status:200,error:null,route:f,form:u?void 0:null})}async function De(a,u,p){for(;a--;)if(p[a]){let l=a;for(;!u[l];)l-=1;try{return{idx:l+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:u,url:p,routeId:l}){var b;const f={},g=await $e();let _=null;if(g.server)try{const v=await xe(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;_=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||c)&&await oe(p)}const E=await ge({loader:$e,url:p,params:f,routeId:l,parent:()=>Promise.resolve({}),server_data_node:_e(_)}),k={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await Q({url:p,params:f,branch:[E,k],status:a,error:u,route:null})}function ye(a,u){if(Ve(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const l of le){const f=l.exec(p);if(f){const g=new URL(a.origin+pt(a.pathname,t)+a.search+a.hash);return{id:g.pathname+g.search,invalidating:u,route:l,params:dt(f),url:g}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function we({url:a,scroll:u,keepfocus:p,redirect_chain:l,details:f,type:g,delta:_,nav_token:E,accepted:k,blocked:b}){var N,U,$,w;let v=!1;const O=ye(a,!1),I={from:ce("from",{params:n.params,routeId:(U=(N=n.route)==null?void 0:N.id)!=null?U:null,url:n.url}),to:ce("to",{params:($=O==null?void 0:O.params)!=null?$:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:a}),type:g};_!==void 0&&(I.delta=_);const L={...I,cancel:()=>{v=!0}};if(i.before_navigate.forEach(R=>R(L)),v){b();return}Ee(P),k(),h&&K.navigating.set(I),await Ne(O,a,l,{scroll:u,keepfocus:p,details:f},E,()=>{i.after_navigate.forEach(R=>R(I)),K.navigating.set(null)})}async function Be(a,u,p,l){return a.origin===location.origin&&a.pathname===location.pathname&&!c?await se({status:l,error:p,url:a,routeId:u}):await oe(a)}function oe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(i.after_navigate.push(a),()=>{const u=i.after_navigate.indexOf(a);i.after_navigate.splice(u,1)}))},before_navigate:a=>{Re(()=>(i.before_navigate.push(a),()=>{const u=i.before_navigate.indexOf(a);i.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(m||!h)&&(d=!1)},goto:(a,u={})=>Z(a,u,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:u}=new URL(a,location.href);s.push(p=>p.href===u)}return ae()},invalidateAll:()=>(y=!0,ae()),prefetch:async a=>{const u=new URL(a,Ke(document));await je(u)},prefetch_routes:async a=>{const p=(a?le.filter(l=>a.some(f=>l.exec(f))):le).map(l=>Promise.all([...l.layouts,l.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const u=new URL(location.href),{branch:p,route:l}=n;if(!l)return;const f=await De(n.branch.length,p,l.errors);if(f){const g=await Q({url:u,params:n.params,branch:p.slice(0,f.idx).concat(f.node),status:500,error:a.error,route:l});n=g.state;const _=fe();S.$set(g.props),_()}}else if(a.type==="redirect")Z(a.location,{},[]);else{const u={form:a.data,page:{...D,form:a.data,status:a.status}},p=fe();S.$set(u),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var _,E;let f=!1;const g={from:ce("from",{params:n.params,routeId:(E=(_=n.route)==null?void 0:_.id)!=null?E:null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};i.before_navigate.forEach(k=>k(g)),f?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(P);try{sessionStorage[Qe]=JSON.stringify(ne)}catch{}}});const a=l=>{const{url:f,options:g}=ze(l);if(f&&g.prefetch){if(Ve(f))return;je(f)}};let u;const p=l=>{clearTimeout(u),u=setTimeout(()=>{var f;(f=l.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:f,url:g,options:_}=ze(l);if(!f||!g)return;const E=f instanceof SVGAElement;if(!E&&g.protocol!==location.protocol&&!(g.protocol==="https:"||g.protocol==="http:"))return;const k=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||k.includes("external")||_.reload||(E?f.target.baseVal:f.target))return;const[b,v]=g.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){V=!0,Ee(P),n.url=g,K.page.set({...D,url:g}),K.page.notify();return}we({url:g,scroll:_.noscroll?Se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:g.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[C]===P)return;const f=l.state[C]-P;we({url:new URL(location.href),scroll:ne[l.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=l.state[C]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[C]:++P},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:u,node_ids:p,params:l,routeId:f,data:g,form:_})=>{var b;c=!0;const E=new URL(location.href);let k;try{const v=p.map(async(O,I)=>{const L=g[I];return ge({loader:me[O],url:E,params:l,routeId:f,parent:async()=>{const N={};for(let U=0;U<I;U+=1)Object.assign(N,(await v[U]).data);return N},server_data_node:_e(L)})});k=await Q({url:E,params:l,branch:await Promise.all(v),status:a,error:u,form:_,route:(b=le.find(O=>O.id===f))!=null?b:null})}catch(v){if(v instanceof Xe){await oe(new URL(v.location,location.href));return}k=await se({status:v instanceof Oe?v.status:500,error:te(v,{url:E,params:l,routeId:f}),url:E,routeId:f})}Ue(k)}}}async function xe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Ft;const s=await he(t.href,{headers:{"x-sveltekit-invalidated":e.map(i=>i?"1":"").join(",")}}),o=await s.text();if(!s.ok)throw new Error(JSON.parse(o));return Wt(o)}function te(r,e){var t;return r instanceof Oe?r.body:(t=Ct.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const t of xt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function fe(){return()=>{}}async function en({env:r,hydrate:e,paths:t,target:s,trailing_slash:o}){_t(t);const i=Xt({target:s,base:t.base,trailing_slash:o});qt({client:i}),e?await i._hydrate(e):i.goto(location.href,{replaceState:!0}),i._start_router()}export{en as start};
