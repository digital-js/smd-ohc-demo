import{S as N,i as T,s as L,k as $,a as w,q as C,l as d,m as p,h as u,c as q,r as H,n as _,b as v,J as h,u as R,B as I,e as A,g as J,P as M,d as O,f as g,t as k,N as Q,w as y,x as b,y as x,L as U,z as E,Q as j}from"../../../chunks/index-c43dc3b2.js";import{L as F}from"../../../chunks/layout-4acf46af.js";import{v as K,r as W,g as X,V as Y}from"../../../chunks/vehicle-menu-08a3ac01.js";function Z(o){let e,r,s,n,l,i,a;return{c(){e=$("div"),r=$("div"),s=w(),n=$("h1"),l=C(o[0]),i=w(),a=$("div"),this.h()},l(t){e=d(t,"DIV",{class:!0});var c=p(e);r=d(c,"DIV",{class:!0}),p(r).forEach(u),s=q(c),n=d(c,"H1",{class:!0});var V=p(n);l=H(V,o[0]),V.forEach(u),i=q(c),a=d(c,"DIV",{class:!0}),p(a).forEach(u),c.forEach(u),this.h()},h(){_(r,"class","pre svelte-1nv1mv2"),_(n,"class","text svelte-1nv1mv2"),_(a,"class","post svelte-1nv1mv2"),_(e,"class","container svelte-1nv1mv2")},m(t,c){v(t,e,c),h(e,r),h(e,s),h(e,n),h(n,l),h(e,i),h(e,a)},p(t,[c]){c&1&&R(l,t[0])},i:I,o:I,d(t){t&&u(e)}}}function ee(o,e,r){let{text:s="unknown"}=e;return o.$$set=n=>{"text"in n&&r(0,s=n.text)},[s]}class D extends N{constructor(e){super(),T(this,e,ee,Z,L,{text:0})}}function S(o,e,r){const s=o.slice();return s[5]=e[r],s[7]=r,s}function B(o,e){let r,s,n,l,i=e[2](e[5])+"",a,t,c,V;function z(){return e[3](e[5])}s=new D({props:{text:e[5].name}}),s.$on("click",z);function G(){return e[4](e[5])}return{key:o,first:null,c(){r=A(),y(s.$$.fragment),n=w(),l=$("button"),a=C(i),this.h()},l(f){r=A(),b(s.$$.fragment,f),n=q(f),l=d(f,"BUTTON",{});var m=p(l);a=H(m,i),m.forEach(u),this.h()},h(){this.first=r},m(f,m){v(f,r,m),x(s,f,m),v(f,n,m),v(f,l,m),h(l,a),t=!0,c||(V=U(l,"click",G),c=!0)},p(f,m){e=f;const P={};m&1&&(P.text=e[5].name),s.$set(P),(!t||m&1)&&i!==(i=e[2](e[5])+"")&&R(a,i)},i(f){t||(g(s.$$.fragment,f),t=!0)},o(f){k(s.$$.fragment,f),t=!1},d(f){f&&u(r),E(s,f),f&&u(n),f&&u(l),c=!1,V()}}}function te(o){let e=[],r=new Map,s,n,l=o[0];const i=a=>a[5].id;for(let a=0;a<l.length;a+=1){let t=S(o,l,a),c=i(t);r.set(c,e[a]=B(c,t))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();s=A()},l(a){for(let t=0;t<e.length;t+=1)e[t].l(a);s=A()},m(a,t){for(let c=0;c<e.length;c+=1)e[c].m(a,t);v(a,s,t),n=!0},p(a,[t]){t&7&&(l=a[0],J(),e=M(e,t,i,1,a,l,r,s.parentNode,j,B,s,S),O())},i(a){if(!n){for(let t=0;t<l.length;t+=1)g(e[t]);n=!0}},o(a){for(let t=0;t<e.length;t+=1)k(e[t]);n=!1},d(a){for(let t=0;t<e.length;t+=1)e[t].d(a);a&&u(s)}}}function se(o,e,r){let s;Q(o,K,t=>r(0,s=t));const n=t=>{t.access?W(t.id):X(t.id)};return[s,n,t=>t.access?"Revoke access":"Grant access",t=>n(t),t=>n(t)]}class ne extends N{constructor(e){super(),T(this,e,se,te,L,{})}}function re(o){let e,r,s;return r=new Y({props:{disabled:!0}}),{c(){e=$("div"),y(r.$$.fragment),this.h()},l(n){e=d(n,"DIV",{slot:!0});var l=p(e);b(r.$$.fragment,l),l.forEach(u),this.h()},h(){_(e,"slot","sidebar")},m(n,l){v(n,e,l),x(r,e,null),s=!0},p:I,i(n){s||(g(r.$$.fragment,n),s=!0)},o(n){k(r.$$.fragment,n),s=!1},d(n){n&&u(e),E(r)}}}function ae(o){let e,r,s,n,l,i,a;return r=new D({props:{text:"Request vehicle access"}}),n=new D({props:{text:"Another"}}),i=new ne({}),{c(){e=$("div"),y(r.$$.fragment),s=w(),y(n.$$.fragment),l=w(),y(i.$$.fragment),this.h()},l(t){e=d(t,"DIV",{slot:!0,class:!0});var c=p(e);b(r.$$.fragment,c),s=q(c),b(n.$$.fragment,c),l=q(c),b(i.$$.fragment,c),c.forEach(u),this.h()},h(){_(e,"slot","main"),_(e,"class","main svelte-103vqhl")},m(t,c){v(t,e,c),x(r,e,null),h(e,s),x(n,e,null),h(e,l),x(i,e,null),a=!0},p:I,i(t){a||(g(r.$$.fragment,t),g(n.$$.fragment,t),g(i.$$.fragment,t),a=!0)},o(t){k(r.$$.fragment,t),k(n.$$.fragment,t),k(i.$$.fragment,t),a=!1},d(t){t&&u(e),E(r),E(n),E(i)}}}function le(o){let e,r,s;return{c(){e=$("span"),r=$("a"),s=$("i"),this.h()},l(n){e=d(n,"SPAN",{slot:!0,class:!0});var l=p(e);r=d(l,"A",{href:!0});var i=p(r);s=d(i,"I",{class:!0}),p(s).forEach(u),i.forEach(u),l.forEach(u),this.h()},h(){_(s,"class","fa-solid fa-chevron-left svelte-103vqhl"),_(r,"href","/"),_(e,"slot","footer"),_(e,"class","footer svelte-103vqhl")},m(n,l){v(n,e,l),h(e,r),h(r,s)},p:I,d(n){n&&u(e)}}}function ce(o){let e,r;return e=new F({props:{$$slots:{footer:[le],main:[ae],sidebar:[re]},$$scope:{ctx:o}}}),{c(){y(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,n){x(e,s,n),r=!0},p(s,[n]){const l={};n&1&&(l.$$scope={dirty:n,ctx:s}),e.$set(l)},i(s){r||(g(e.$$.fragment,s),r=!0)},o(s){k(e.$$.fragment,s),r=!1},d(s){E(e,s)}}}class ue extends N{constructor(e){super(),T(this,e,null,ce,L,{})}}export{ue as default};