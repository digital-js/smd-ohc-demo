import{S as L,i as N,s as S,k as v,a as w,q as M,l as _,m as d,h as u,c as D,r as O,n as h,b as E,J as f,u as R,B as k,K as U,e as A,g as j,N as F,d as G,f as g,t as y,L as Q,w as b,x,y as V,z as I,P as W}from"../../../chunks/index-1f20ec09.js";import{L as X}from"../../../chunks/layout-fce211d2.js";import{r as Y,g as Z,v as ee,V as te}from"../../../chunks/vehicle-menu-f4dddeea.js";function se(c){let e,l,s,t,n,o,r;return{c(){e=v("div"),l=v("div"),s=w(),t=v("h1"),n=M(c[0]),o=w(),r=v("div"),this.h()},l(a){e=_(a,"DIV",{class:!0});var i=d(e);l=_(i,"DIV",{class:!0}),d(l).forEach(u),s=D(i),t=_(i,"H1",{class:!0});var p=d(t);n=O(p,c[0]),p.forEach(u),o=D(i),r=_(i,"DIV",{class:!0}),d(r).forEach(u),i.forEach(u),this.h()},h(){h(l,"class","pre svelte-1nv1mv2"),h(t,"class","text svelte-1nv1mv2"),h(r,"class","post svelte-1nv1mv2"),h(e,"class","container svelte-1nv1mv2")},m(a,i){E(a,e,i),f(e,l),f(e,s),f(e,t),f(t,n),f(e,o),f(e,r)},p(a,[i]){i&1&&R(n,a[0])},i:k,o:k,d(a){a&&u(e)}}}function le(c,e,l){let{text:s="unknown"}=e;return c.$$set=t=>{"text"in t&&l(0,s=t.text)},[s]}class z extends L{constructor(e){super(),N(this,e,le,se,S,{text:0})}}function ae(c){let e,l,s,t,n=c[0].name+"",o,r,a,i,p,q,C,H;return{c(){e=v("button"),l=v("div"),s=w(),t=v("h1"),o=M(n),r=w(),a=v("div"),i=v("div"),p=v("i"),this.h()},l($){e=_($,"BUTTON",{class:!0});var m=d(e);l=_(m,"DIV",{class:!0}),d(l).forEach(u),s=D(m),t=_(m,"H1",{class:!0});var P=d(t);o=O(P,n),P.forEach(u),r=D(m),a=_(m,"DIV",{class:!0});var B=d(a);i=_(B,"DIV",{class:!0});var T=d(i);p=_(T,"I",{class:!0}),d(p).forEach(u),T.forEach(u),B.forEach(u),m.forEach(u),this.h()},h(){h(l,"class","pre svelte-p0u148"),h(t,"class","text svelte-p0u148"),h(p,"class","fa-solid fa-key svelte-p0u148"),h(i,"class","icon svelte-p0u148"),h(a,"class","post svelte-p0u148"),h(e,"class",q="container "+c[1]+" svelte-p0u148")},m($,m){E($,e,m),f(e,l),f(e,s),f(e,t),f(t,o),f(e,r),f(e,a),f(a,i),f(i,p),C||(H=U(e,"click",c[2]),C=!0)},p($,[m]){m&1&&n!==(n=$[0].name+"")&&R(o,n),m&2&&q!==(q="container "+$[1]+" svelte-p0u148")&&h(e,"class",q)},i:k,o:k,d($){$&&u(e),C=!1,H()}}}function ne(c,e,l){let s,{vehicle:t}=e;const n=()=>{t.access?Y(t.id):Z(t.id)};return c.$$set=o=>{"vehicle"in o&&l(0,t=o.vehicle)},c.$$.update=()=>{c.$$.dirty&1&&l(1,s=t.access?"selected":"")},[t,s,n]}class re extends L{constructor(e){super(),N(this,e,ne,ae,S,{vehicle:0})}}function J(c,e,l){const s=c.slice();return s[1]=e[l],s}function K(c,e){let l,s,t;return s=new re({props:{vehicle:e[1]}}),{key:c,first:null,c(){l=A(),b(s.$$.fragment),this.h()},l(n){l=A(),x(s.$$.fragment,n),this.h()},h(){this.first=l},m(n,o){E(n,l,o),V(s,n,o),t=!0},p(n,o){e=n;const r={};o&1&&(r.vehicle=e[1]),s.$set(r)},i(n){t||(g(s.$$.fragment,n),t=!0)},o(n){y(s.$$.fragment,n),t=!1},d(n){n&&u(l),I(s,n)}}}function ie(c){let e=[],l=new Map,s,t,n=c[0];const o=r=>r[1].id;for(let r=0;r<n.length;r+=1){let a=J(c,n,r),i=o(a);l.set(i,e[r]=K(i,a))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();s=A()},l(r){for(let a=0;a<e.length;a+=1)e[a].l(r);s=A()},m(r,a){for(let i=0;i<e.length;i+=1)e[i].m(r,a);E(r,s,a),t=!0},p(r,[a]){a&1&&(n=r[0],j(),e=F(e,a,o,1,r,n,l,s.parentNode,W,K,s,J),G())},i(r){if(!t){for(let a=0;a<n.length;a+=1)g(e[a]);t=!0}},o(r){for(let a=0;a<e.length;a+=1)y(e[a]);t=!1},d(r){for(let a=0;a<e.length;a+=1)e[a].d(r);r&&u(s)}}}function ce(c,e,l){let s;return Q(c,ee,t=>l(0,s=t)),[s]}class oe extends L{constructor(e){super(),N(this,e,ce,ie,S,{})}}function ue(c){let e,l,s;return l=new te({props:{disabled:!0}}),{c(){e=v("div"),b(l.$$.fragment),this.h()},l(t){e=_(t,"DIV",{slot:!0});var n=d(e);x(l.$$.fragment,n),n.forEach(u),this.h()},h(){h(e,"slot","sidebar")},m(t,n){E(t,e,n),V(l,e,null),s=!0},p:k,i(t){s||(g(l.$$.fragment,t),s=!0)},o(t){y(l.$$.fragment,t),s=!1},d(t){t&&u(e),I(l)}}}function fe(c){let e,l,s,t,n,o,r;return l=new z({props:{text:"Request vehicle access"}}),t=new z({props:{text:"Search vehicles..."}}),o=new oe({}),{c(){e=v("div"),b(l.$$.fragment),s=w(),b(t.$$.fragment),n=w(),b(o.$$.fragment),this.h()},l(a){e=_(a,"DIV",{slot:!0,class:!0});var i=d(e);x(l.$$.fragment,i),s=D(i),x(t.$$.fragment,i),n=D(i),x(o.$$.fragment,i),i.forEach(u),this.h()},h(){h(e,"slot","main"),h(e,"class","main svelte-103vqhl")},m(a,i){E(a,e,i),V(l,e,null),f(e,s),V(t,e,null),f(e,n),V(o,e,null),r=!0},p:k,i(a){r||(g(l.$$.fragment,a),g(t.$$.fragment,a),g(o.$$.fragment,a),r=!0)},o(a){y(l.$$.fragment,a),y(t.$$.fragment,a),y(o.$$.fragment,a),r=!1},d(a){a&&u(e),I(l),I(t),I(o)}}}function he(c){let e,l,s;return{c(){e=v("span"),l=v("a"),s=v("i"),this.h()},l(t){e=_(t,"SPAN",{slot:!0,class:!0});var n=d(e);l=_(n,"A",{href:!0});var o=d(l);s=_(o,"I",{class:!0}),d(s).forEach(u),o.forEach(u),n.forEach(u),this.h()},h(){h(s,"class","fa-solid fa-chevron-left svelte-103vqhl"),h(l,"href","/"),h(e,"slot","footer"),h(e,"class","footer svelte-103vqhl")},m(t,n){E(t,e,n),f(e,l),f(l,s)},p:k,d(t){t&&u(e)}}}function ve(c){let e,l;return e=new X({props:{$$slots:{footer:[he],main:[fe],sidebar:[ue]},$$scope:{ctx:c}}}),{c(){b(e.$$.fragment)},l(s){x(e.$$.fragment,s)},m(s,t){V(e,s,t),l=!0},p(s,[t]){const n={};t&1&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){I(e,s)}}}class pe extends L{constructor(e){super(),N(this,e,null,ve,S,{})}}export{pe as default};