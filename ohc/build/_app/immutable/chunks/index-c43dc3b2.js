function M(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function xt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(et(e,n))}function wt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function $t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function vt(t,e,n,i,r,o){if(r){const c=Q(e,n,i,o);t.p(c,r)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Nt(t){return t==null?"":t}let j=!1;function nt(){j=!0}function it(){j=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const s=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:rt(1,r,_=>e[n[_]].claim_order,s))-1;i[l]=n[f]+1;const d=f+1;n[d]=l,r=Math.max(d,r)}const o=[],c=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<o.length&&c[l].claim_order>=o[s].claim_order;)s++;const f=s<o.length?o[s]:null;t.insertBefore(c[l],f)}}function lt(t,e){if(j){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function St(t,e,n){j&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function At(){return z(" ")}function Mt(){return z("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,r=!1){at(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const l=n(u);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const l=n(u);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ft(t,e,n,i){return W(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function qt(t,e,n){return ft(t,e,n,ut)}function _t(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Bt(t){return _t(t," ")}function Lt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ot(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Pt(t,e){return new t(e)}let w;function b(t){w=t}function R(){if(!w)throw new Error("Function called outside component initialization");return w}function Tt(t){R().$$.on_mount.push(t)}function zt(t){R().$$.after_update.push(t)}const x=[],I=[],k=[],G=[],U=Promise.resolve();let P=!1;function V(){P||(P=!0,U.then(X))}function Dt(){return V(),U}function T(t){k.push(t)}const O=new Set;let S=0;function X(){const t=w;do{for(;S<x.length;){const e=x[S];S++,b(e),dt(e.$$)}for(b(null),x.length=0,S=0;I.length;)I.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];O.has(n)||(O.add(n),n())}k.length=0}while(x.length);for(;G.length;)G.pop()();P=!1,O.clear(),b(t)}function dt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const A=new Set;let g;function Ft(){g={r:0,c:[],p:g}}function Ht(){g.r||$(g.c),g=g.p}function Y(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ht(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function It(t,e){ht(t,1,1,()=>{e.delete(t.key)})}function Gt(t,e,n,i,r,o,c,u,l,s,f,d){let _=t.length,m=o.length,h=_;const C={};for(;h--;)C[t[h].key]=h;const v=[],q=new Map,B=new Map;for(h=m;h--;){const a=d(r,o,h),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=s(p,a),y.c()),q.set(p,v[h]=y),p in C&&B.set(p,Math.abs(h-C[p]))}const D=new Set,F=new Set;function L(a){Y(a,1),a.m(u,f),c.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=v[m-1],p=t[_-1],y=a.key,E=p.key;a===p?(f=a.first,_--,m--):q.has(E)?!c.has(y)||D.has(y)?L(a):F.has(E)?_--:B.get(y)>B.get(E)?(F.add(y),L(a)):(D.add(E),_--):(l(p,c),_--)}for(;_--;){const a=t[_];q.has(a.key)||l(a,c)}for(;m;)L(v[m-1]);return v}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||T(()=>{const c=t.$$.on_mount.map(J).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),o.forEach(T)}function pt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(x.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,i,r,o,c,u=[-1]){const l=w;b(t);const s=t.$$={fragment:null,ctx:[],props:o,update:M,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return s.ctx&&r(s.ctx[d],s.ctx[d]=h)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](h),f&&yt(t,d)),_}):[],s.update(),f=!0,$(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){nt();const d=ot(e.target);s.fragment&&s.fragment.l(d),d.forEach(st)}else s.fragment&&s.fragment.c();e.intro&&Y(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),it(),X()}b(l)}class Wt{$destroy(){pt(this,1),this.$destroy=M}$on(e,n){if(!K(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Dt as A,M as B,et as C,$ as D,K as E,wt as F,vt as G,Et as H,$t as I,lt as J,xt as K,jt as L,kt as M,bt as N,Nt as O,Gt as P,It as Q,Wt as S,At as a,St as b,Bt as c,Ht as d,Mt as e,Y as f,Ft as g,st as h,Qt as i,zt as j,ut as k,qt as l,ot as m,Ct as n,Tt as o,Ot as p,z as q,_t as r,gt as s,ht as t,Lt as u,Pt as v,Jt as w,Kt as x,mt as y,pt as z};
