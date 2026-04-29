import{$ as A,$a as vs,A as kt,Aa as ds,Ab as _s,B as lt,Ba as us,Bb as uo,C as oo,Ca as ms,Cb as mo,D as Ya,Da as fs,Db as N,E as Ka,Ea as De,Eb as Or,F as Xa,Fa as wn,Fb as v,G as Ja,Ga as xr,Gb as z,H as br,Ha as b,Hb as Pr,I as Ae,Ia as zt,Ib as Ue,J as Ge,Ja as hs,Jb as Ds,K as ce,Ka as Mr,Kb as Cs,L as E,La as Sr,Lb as oe,M as yt,Ma as qe,Mb as Te,N as Dn,Na as Re,Nb as fo,O as g,Oa as q,Ob as ws,P as k,Pa as ps,Pb as Mn,Q as Qa,Qa as Ar,Qb as Es,R as y,Ra as gs,Rb as wt,S as D,Sa as ao,Sb as xs,T as c,Ta as x,Tb as fe,U as Lt,Ua as L,Ub as ho,V as es,Va as I,Vb as Ms,W as Ie,Wa as Ce,Wb as Ss,X as ye,Xa as Ir,Y as yr,Ya as so,Z as _r,Za as lo,_ as de,_a as En,a as m,aa as jt,ab as Ht,b as O,ba as ts,bb as we,ca as X,cb as j,d as Pt,da as P,db as B,e as Ha,ea as _t,eb as Rr,f as Nt,fa as Dr,fb as je,g as $,ga as ns,gb as Be,h as ge,ha as V,hb as J,i as ve,ia as rs,ib as h,j as be,ja as is,jb as f,k as _,ka as Cr,kb as Q,l as pr,la as Qe,lb as ie,m as io,ma as Dt,mb as ae,n as $a,na as G,nb as Ee,o as F,oa as os,ob as Tr,p as Ga,pa as Cn,pb as xn,q as at,qa as as,qb as W,r as qa,ra as Bt,rb as Fr,s as gr,sa as wr,sb as se,t as vr,ta as Vt,tb as Ve,u as Wa,ua as Er,ub as U,v as Se,va as Ct,vb as bs,w as yn,wa as Ut,wb as co,x as _n,xa as ss,xb as ue,y as st,ya as ls,yb as me,z as Za,za as cs,zb as ys}from"./chunk-L6DLVOIA.js";var As=null;function Fe(){return As}function po(t){As??=t}var Sn=class{},Nr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(Is),providedIn:"platform"})}return t})();var Is=(()=>{class t extends Nr{_location;_history;_doc=c(A);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Fe().getBaseHref(this._doc)}onPopState(e){let n=Fe().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Fe().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Fs(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function Rs(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function ct(t){return t&&t[0]!=="?"?`?${t}`:t}var kr=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(Wd),providedIn:"root"})}return t})(),qd=new y(""),Wd=(()=>{class t extends kr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(A).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Fs(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+ct(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+ct(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+ct(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(D(Nr),D(qd,8))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $t=(()=>{class t{_subject=new $;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Kd(Rs(Ts(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+ct(n))}normalize(e){return t.stripTrailingSlash(Yd(this._basePath,Ts(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ct(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ct(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=ct;static joinWithSlash=Fs;static stripTrailingSlash=Rs;static \u0275fac=function(n){return new(n||t)(D(kr))};static \u0275prov=g({token:t,factory:()=>Zd(),providedIn:"root"})}return t})();function Zd(){return new $t(D(kr))}function Yd(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Ts(t){return t.replace(/\/index.html$/,"")}function Kd(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var go=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(de);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(q(Ar))};static \u0275dir=I({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Qe]})}return t})();var te=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({})}return t})();function Lr(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var Et=class{};var bo="browser";function Ps(t){return t===bo}var Ns=(()=>{class t{static \u0275prov=g({token:t,providedIn:"root",factory:()=>new vo(c(A),window)})}return t})(),vo=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r,e){this.window.scrollTo(O(m({},e),{left:r[0],top:r[1]}))}scrollToAnchor(r,e){let n=Qd(this.document,r);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(r){try{this.window.history.scrollRestoration=r}catch{console.warn(yt(2400,!1))}}scrollToElement(r,e){let n=r.getBoundingClientRect(),i=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(O(m({},e),{left:i-a[0],top:o-a[1]}))}};function Qd(t,r){let e=t.getElementById(r)||t.getElementsByName(r)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let o=i.shadowRoot;if(o){let a=o.getElementById(r)||o.querySelector(`[name="${r}"]`);if(a)return a}i=n.nextNode()}}return null}var An=class{_doc;constructor(r){this._doc=r}manager},jr=(()=>{class t extends An{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static \u0275fac=function(n){return new(n||t)(D(A))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Ur=new y(""),Co=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof jr));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof jr);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new E(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(D(Ur),D(P))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),yo="ng-app-id";function ks(t){for(let r of t)r.remove()}function Ls(t,r){let e=r.createElement("style");return e.textContent=t,e}function eu(t,r,e,n){let i=t.head?.querySelectorAll(`style[${yo}="${r}"],link[${yo}="${r}"]`);if(i)for(let o of i)o.removeAttribute(yo),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Do(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var wo=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,eu(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,Ls);n?.forEach(i=>this.addUsage(i,this.external,Do))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(ks(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ks(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,Ls(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,Do(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(D(A),D(Cn),D(Vt,8),D(Bt))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),_o={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Eo=/%COMP%/g;var Bs="%COMP%",tu=`_nghost-${Bs}`,nu=`_ngcontent-${Bs}`,ru=!0,iu=new y("",{factory:()=>ru});function ou(t){return nu.replace(Eo,t)}function au(t){return tu.replace(Eo,t)}function Vs(t,r){return r.map(e=>e.replace(Eo,t))}var Tn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,i,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new In(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof Vr?i.applyToHost(e):i instanceof Rn&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,p=this.tracingService;switch(n.encapsulation){case Er.Emulated:o=new Vr(l,d,n,this.appId,u,a,s,p);break;case Er.ShadowDom:return new Br(l,e,n,a,s,this.nonce,p,d);case Er.ExperimentalIsolatedShadowDom:return new Br(l,e,n,a,s,this.nonce,p);default:o=new Rn(l,d,n,u,a,s,p);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(D(Co),D(wo),D(Cn),D(iu),D(A),D(P),D(Vt),D(Mr,8))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),In=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(_o[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(js(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(js(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new E(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+":"+e;let o=_o[i];o?r.setAttributeNS(o,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=_o[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){i&(zt.DashCase|zt.Important)?r.style.setProperty(e,n,i&zt.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&zt.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r=="string"&&(r=Fe().getGlobalEventTarget(this.doc,r),!r))throw new E(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function js(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Br=class extends In{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,o,a,s,l){super(r,i,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=Vs(n.id,d);for(let p of d){let M=document.createElement("style");a&&M.setAttribute("nonce",a),M.textContent=p,this.shadowRoot.appendChild(M)}let u=n.getExternalStyles?.();if(u)for(let p of u){let M=Do(p,i);a&&M.setAttribute("nonce",a),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Rn=class extends In{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,o,a,s,l){super(r,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let d=n.styles;this.styles=l?Vs(l,d):d,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&hs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Vr=class extends Rn{contentAttr;hostAttr;constructor(r,e,n,i,o,a,s,l){let d=i+"-"+n.id;super(r,e,n,o,a,s,l,d),this.contentAttr=ou(d),this.hostAttr=au(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var zr=class t extends Sn{supportsDOMEvents=!0;static makeCurrent(){po(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=lu();return e==null?null:cu(e)}resetBaseElement(){Fn=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Lr(document.cookie,r)}},Fn=null;function lu(){return Fn=Fn||document.head.querySelector("base"),Fn?Fn.getAttribute("href"):null}function cu(t){return new URL(t,document.baseURI).pathname}var du=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Us=["alt","control","meta","shift"],uu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},mu={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},zs=(()=>{class t extends An{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Fe().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),Us.forEach(d=>{let u=n.indexOf(d);u>-1&&(n.splice(u,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let i=uu[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Us.forEach(a=>{if(a!==i){let s=mu[a];s(e)&&(o+=a+".")}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(D(A))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();async function xo(t,r,e){let n=m({rootComponent:t},fu(r,e));return xs(n)}function fu(t,r){return{platformRef:r?.platformRef,appProviders:[...bu,...t?.providers??[]],platformProviders:vu}}function hu(){zr.makeCurrent()}function pu(){return new _t}function gu(){return os(document),document}var vu=[{provide:Bt,useValue:bo},{provide:as,useValue:hu,multi:!0},{provide:A,useFactory:gu}];var bu=[{provide:es,useValue:"root"},{provide:_t,useFactory:pu},{provide:Ur,useClass:jr,multi:!0},{provide:Ur,useClass:zs,multi:!0},Tn,wo,Co,{provide:qe,useExisting:Tn},{provide:Et,useClass:du},[]];var dt=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var So=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},Ao=class{encodeKey(r){return Hs(r)}encodeValue(r){return Hs(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function yu(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var _u=/%(\d[a-f0-9])/gi,Du={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Hs(t){return encodeURIComponent(t).replace(_u,(r,e)=>Du[e]??r)}function Hr(t){return`${t}`}var et=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Ao,r.fromString){if(r.fromObject)throw new E(2805,!1);this.map=yu(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(Hr):[Hr(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(Hr(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(Hr(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Cu(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function $s(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Gs(t){return typeof Blob<"u"&&t instanceof Blob}function qs(t){return typeof FormData<"u"&&t instanceof FormData}function wu(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Ws="Content-Type",Zs="Accept",Ys="text/plain",Ks="application/json",Eu=`${Ks}, ${Ys}, */*`,Gt=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(Cu(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new E(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new dt,this.context??=new So,!this.params)this.params=new et,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||$s(this.body)||Gs(this.body)||qs(this.body)||wu(this.body)?this.body:this.body instanceof et?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||qs(this.body)?null:Gs(this.body)?this.body.type||null:$s(this.body)?null:typeof this.body=="string"?Ys:this.body instanceof et?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ks:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,l=r.mode||this.mode,d=r.redirect||this.redirect,u=r.credentials||this.credentials,p=r.referrer||this.referrer,M=r.integrity||this.integrity,re=r.referrerPolicy||this.referrerPolicy,Y=r.transferCache??this.transferCache,H=r.timeout??this.timeout,S=r.body!==void 0?r.body:this.body,R=r.withCredentials??this.withCredentials,K=r.reportProgress??this.reportProgress,pe=r.headers||this.headers,ee=r.params||this.params,vn=r.context??this.context;return r.setHeaders!==void 0&&(pe=Object.keys(r.setHeaders).reduce((bn,bt)=>bn.set(bt,r.setHeaders[bt]),pe)),r.setParams&&(ee=Object.keys(r.setParams).reduce((bn,bt)=>bn.set(bt,r.setParams[bt]),ee)),new t(e,n,S,{params:ee,headers:pe,context:vn,reportProgress:K,responseType:i,withCredentials:R,transferCache:Y,keepalive:o,cache:s,priority:a,timeout:H,mode:l,redirect:d,credentials:u,referrer:p,integrity:M,referrerPolicy:re})}},xt=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(xt||{}),On=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new dt,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},Io=class t extends On{constructor(r={}){super(r)}type=xt.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Pn=class t extends On{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=xt.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},qt=class extends On{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},xu=200,Mu=204;var Su=/^\)\]\}',?\n/;var Au=(()=>{class t{xhrFactory;tracingService=c(Mr,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new E(-2800,!1);let n=this.xhrFactory;return _(null).pipe(Ae(()=>new Nt(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((S,R)=>a.setRequestHeader(S,R.join(","))),e.headers.has(Zs)||a.setRequestHeader(Zs,Eu),!e.headers.has(Ws)){let S=e.detectContentTypeHeader();S!==null&&a.setRequestHeader(Ws,S)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let S=e.responseType.toLowerCase();a.responseType=S!=="json"?S:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let S=a.statusText||"OK",R=new dt(a.getAllResponseHeaders()),K=a.responseURL||e.url;return l=new Io({headers:R,status:a.status,statusText:S,url:K}),l},u=this.maybePropagateTrace(()=>{let{headers:S,status:R,statusText:K,url:pe}=d(),ee=null;R!==Mu&&(ee=typeof a.response>"u"?a.responseText:a.response),R===0&&(R=ee?xu:0);let vn=R>=200&&R<300;if(e.responseType==="json"&&typeof ee=="string"){let bn=ee;ee=ee.replace(Su,"");try{ee=ee!==""?JSON.parse(ee):null}catch(bt){ee=bn,vn&&(vn=!1,ee={error:bt,text:ee})}}vn?(o.next(new Pn({body:ee,headers:S,status:R,statusText:K,url:pe||void 0})),o.complete()):o.error(new qt({error:ee,headers:S,status:R,statusText:K,url:pe||void 0}))}),p=this.maybePropagateTrace(S=>{let{url:R}=d(),K=new qt({error:S,status:a.status||0,statusText:a.statusText||"Unknown Error",url:R||void 0});o.error(K)}),M=p;e.timeout&&(M=this.maybePropagateTrace(S=>{let{url:R}=d(),K=new qt({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:R||void 0});o.error(K)}));let re=!1,Y=this.maybePropagateTrace(S=>{re||(o.next(d()),re=!0);let R={type:xt.DownloadProgress,loaded:S.loaded};S.lengthComputable&&(R.total=S.total),e.responseType==="text"&&a.responseText&&(R.partialText=a.responseText),o.next(R)}),H=this.maybePropagateTrace(S=>{let R={type:xt.UploadProgress,loaded:S.loaded};S.lengthComputable&&(R.total=S.total),o.next(R)});return a.addEventListener("load",u),a.addEventListener("error",p),a.addEventListener("timeout",M),a.addEventListener("abort",p),e.reportProgress&&(a.addEventListener("progress",Y),s!==null&&a.upload&&a.upload.addEventListener("progress",H)),a.send(s),o.next({type:xt.Sent}),()=>{a.removeEventListener("error",p),a.removeEventListener("abort",p),a.removeEventListener("load",u),a.removeEventListener("timeout",M),e.reportProgress&&(a.removeEventListener("progress",Y),s!==null&&a.upload&&a.upload.removeEventListener("progress",H)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(D(Et))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Iu(t,r){return r(t)}function Ru(t,r,e){return(n,i)=>ye(e,()=>r(n,o=>t(o,i)))}var Tu=new y("",{factory:()=>[]}),Xs=new y(""),Fu=new y("",{factory:()=>!0});var Ou=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=D(Au),i},providedIn:"root"})}return t})();var Pu=(()=>{class t{backend;injector;chain=null;pendingTasks=c(is);contributeToStability=c(Fu);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Tu),...this.injector.get(Xs,[])]));this.chain=n.reduceRight((i,o)=>Ru(i,o,this.injector),Iu)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(kt(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(D(Ou),D(Ie))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Nu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=D(Pu),i},providedIn:"root"})}return t})();function Mo(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Ro=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof Gt)o=e;else{let l;i.headers instanceof dt?l=i.headers:l=new dt(i.headers);let d;i.params&&(i.params instanceof et?d=i.params:d=new et({fromObject:i.params})),o=new Gt(e,n,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:d,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=_(o).pipe(_n(l=>this.handler.handle(l)));if(e instanceof Gt||i.observe==="events")return a;let s=a.pipe(Se(l=>l instanceof Pn));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(F(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new E(2806,!1);return l.body}));case"blob":return s.pipe(F(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new E(2807,!1);return l.body}));case"text":return s.pipe(F(l=>{if(l.body!==null&&typeof l.body!="string")throw new E(2808,!1);return l.body}));default:return s.pipe(F(l=>l.body))}case"response":return s;default:throw new E(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new et().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,Mo(i,n))}post(e,n,i={}){return this.request("POST",e,Mo(i,n))}put(e,n,i={}){return this.request("PUT",e,Mo(i,n))}static \u0275fac=function(n){return new(n||t)(D(Nu))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Js=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(D(A))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var To=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=D(Bu),i},providedIn:"root"})}return t})(),Bu=(()=>{class t extends To{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case De.NONE:return n;case De.HTML:return Ut(n,"HTML")?Ct(n):fs(this._doc,String(n)).toString();case De.STYLE:return Ut(n,"Style")?Ct(n):n;case De.SCRIPT:if(Ut(n,"Script"))return Ct(n);throw new E(5200,!1);case De.URL:return Ut(n,"URL")?Ct(n):ms(String(n));case De.RESOURCE_URL:if(Ut(n,"ResourceURL"))return Ct(n);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(e){return ss(e)}bypassSecurityTrustStyle(e){return ls(e)}bypassSecurityTrustScript(e){return cs(e)}bypassSecurityTrustUrl(e){return ds(e)}bypassSecurityTrustResourceUrl(e){return us(e)}static \u0275fac=function(n){return new(n||t)(D(A))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vu="@",Uu=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(de);loadingSchedulerFn=c(zu,{optional:!0});_engine;constructor(e,n,i,o,a){this.doc=e,this.delegate=n,this.zone=i,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-H3OO5CBN.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(i=>{throw new E(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let i=this.delegate.createRenderer(e,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let o=new Fo(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,n);o.use(s),this.scheduler??=this.injector.get(rs,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(i)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){ps()};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),Fo=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,n,i){this.delegate.insertBefore(r,e,n,i)}removeChild(r,e,n,i){this.delegate.removeChild(r,e,n,i)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,n,i){this.delegate.setAttribute(r,e,n,i)}removeAttribute(r,e,n){this.delegate.removeAttribute(r,e,n)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,n,i){this.delegate.setStyle(r,e,n,i)}removeStyle(r,e,n){this.delegate.removeStyle(r,e,n)}setProperty(r,e,n){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(r,e,n)),this.delegate.setProperty(r,e,n)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,n,i){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(r,e,n,i)),this.delegate.listen(r,e,n,i)}shouldReplay(r){return this.replay!==null&&r.startsWith(Vu)}},zu=new y("");function el(t="animations"){return Sr("NgAsyncAnimations"),Lt([{provide:qe,useFactory:()=>new Uu(c(A),c(Tn),c(P),t)},{provide:wr,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var C="primary",Zn=Symbol("RouteTitle"),Lo=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function St(t){return new Lo(t)}function Oo(t,r,e){for(let n=0;n<t.length;n++){let i=t[n],o=r[n];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function cl(t,r,e){let n=e.path.split("/"),i=n.indexOf("**");if(i===-1){if(n.length>t.length||e.pathMatch==="full"&&(r.hasChildren()||n.length<t.length))return null;let l={},d=t.slice(0,n.length);return Oo(n,d,l)?{consumed:d,posParams:l}:null}if(i!==n.lastIndexOf("**"))return null;let o=n.slice(0,i),a=n.slice(i+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&r.hasChildren()&&e.path!=="**")return null;let s={};return!Oo(o,t.slice(0,o.length),s)||!Oo(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Yr(t){return new Promise((r,e)=>{t.pipe(lt()).subscribe({next:n=>r(n),error:n=>e(n)})})}function Hu(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!We(t[e],r[e]))return!1;return!0}function We(t,r){let e=t?jo(t):void 0,n=r?jo(r):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!dl(t[i],r[i]))return!1;return!0}function jo(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function dl(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),n=[...r].sort();return e.every((i,o)=>n[o]===i)}else return t===r}function $u(t){return t.length>0?t[t.length-1]:null}function Rt(t){return io(t)?t:En(t)?be(Promise.resolve(t)):_(t)}function ul(t){return io(t)?Yr(t):Promise.resolve(t)}var Gu={exact:hl,subset:pl},ml={exact:qu,subset:Wu,ignored:()=>!0},fl={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Bo={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function tl(t,r,e){return Gu[e.paths](t.root,r.root,e.matrixParams)&&ml[e.queryParams](t.queryParams,r.queryParams)&&!(e.fragment==="exact"&&t.fragment!==r.fragment)}function qu(t,r){return We(t,r)}function hl(t,r,e){if(!Mt(t.segments,r.segments)||!qr(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!t.children[n]||!hl(t.children[n],r.children[n],e))return!1;return!0}function Wu(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>dl(t[e],r[e]))}function pl(t,r,e){return gl(t,r,r.segments,e)}function gl(t,r,e,n){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!Mt(i,e)||r.hasChildren()||!qr(i,e,n))}else if(t.segments.length===e.length){if(!Mt(t.segments,e)||!qr(t.segments,e,n))return!1;for(let i in r.children)if(!t.children[i]||!pl(t.children[i],r.children[i],n))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Mt(t.segments,i)||!qr(t.segments,i,n)||!t.children[C]?!1:gl(t.children[C],r,o,n)}}function qr(t,r,e){return r.every((n,i)=>ml[e](t[i].parameters,n.parameters))}var Pe=class{root;queryParams;fragment;_queryParamMap;constructor(r=new T([],{}),e={},n=null){this.root=r,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=St(this.queryParams),this._queryParamMap}toString(){return Ku.serialize(this)}},T=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Wr(this)}},ut=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=St(this.parameters),this._parameterMap}toString(){return bl(this)}};function Zu(t,r){return Mt(t,r)&&t.every((e,n)=>We(e.parameters,r[n].parameters))}function Mt(t,r){return t.length!==r.length?!1:t.every((e,n)=>e.path===r[n].path)}function Yu(t,r){let e=[];return Object.entries(t.children).forEach(([n,i])=>{n===C&&(e=e.concat(r(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==C&&(e=e.concat(r(i,n)))}),e}var Yn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>new mt,providedIn:"root"})}return t})(),mt=class{parse(r){let e=new Uo(r);return new Pe(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${Nn(r.root,!0)}`,n=Qu(r.queryParams),i=typeof r.fragment=="string"?`#${Xu(r.fragment)}`:"";return`${e}${n}${i}`}},Ku=new mt;function Wr(t){return t.segments.map(r=>bl(r)).join("/")}function Nn(t,r){if(!t.hasChildren())return Wr(t);if(r){let e=t.children[C]?Nn(t.children[C],!1):"",n=[];return Object.entries(t.children).forEach(([i,o])=>{i!==C&&n.push(`${i}:${Nn(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Yu(t,(n,i)=>i===C?[Nn(t.children[C],!1)]:[`${i}:${Nn(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[C]!=null?`${Wr(t)}/${e[0]}`:`${Wr(t)}/(${e.join("//")})`}}function vl(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function $r(t){return vl(t).replace(/%3B/gi,";")}function Xu(t){return encodeURI(t)}function Vo(t){return vl(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Zr(t){return decodeURIComponent(t)}function nl(t){return Zr(t.replace(/\+/g,"%20"))}function bl(t){return`${Vo(t.path)}${Ju(t.parameters)}`}function Ju(t){return Object.entries(t).map(([r,e])=>`;${Vo(r)}=${Vo(e)}`).join("")}function Qu(t){let r=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(i=>`${$r(e)}=${$r(i)}`).join("&"):`${$r(e)}=${$r(n)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var em=/^[^\/()?;#]+/;function Po(t){let r=t.match(em);return r?r[0]:""}var tm=/^[^\/()?;=#]+/;function nm(t){let r=t.match(tm);return r?r[0]:""}var rm=/^[^=?&#]+/;function im(t){let r=t.match(rm);return r?r[0]:""}var om=/^[^&#]+/;function am(t){let r=t.match(om);return r?r[0]:""}var Uo=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new T([],{}):new T([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new E(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,r));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,r)),(e.length>0||Object.keys(n).length>0)&&(i[C]=new T(e,n)),i}parseSegment(){let r=Po(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(r),new ut(Zr(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=nm(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let i=Po(this.remaining);i&&(n=i,this.capture(n))}r[Zr(e)]=Zr(n)}parseQueryParam(r){let e=im(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=am(this.remaining);a&&(n=a,this.capture(n))}let i=nl(e),o=nl(n);if(r.hasOwnProperty(i)){let a=r[i];Array.isArray(a)||(a=[a],r[i]=a),a.push(o)}else r[i]=o}parseParens(r,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Po(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new E(4010,!1);let a;i.indexOf(":")>-1?(a=i.slice(0,i.indexOf(":")),this.capture(a),this.capture(":")):r&&(a=C);let s=this.parseChildren(e+1);n[a??C]=Object.keys(s).length===1&&s[C]?s[C]:new T([],s),this.consumeOptional("//")}return n}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new E(4011,!1)}};function yl(t){return t.segments.length>0?new T([],{[C]:t}):t}function _l(t){let r={};for(let[n,i]of Object.entries(t.children)){let o=_l(i);if(n===C&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))r[a]=s;else(o.segments.length>0||o.hasChildren())&&(r[n]=o)}let e=new T(t.segments,r);return sm(e)}function sm(t){if(t.numberOfChildren===1&&t.children[C]){let r=t.children[C];return new T(t.segments.concat(r.segments),r.children)}return t}function Kt(t){return t instanceof Pe}function Dl(t,r,e=null,n=null,i=new mt){let o=Cl(t);return wl(o,r,e,n,i)}function Cl(t){let r;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new T(o.url,a);return o===t&&(r=s),s}let n=e(t.root),i=yl(n);return r??i}function wl(t,r,e,n,i){let o=t;for(;o.parent;)o=o.parent;if(r.length===0)return No(o,o,o,e,n,i);let a=lm(r);if(a.toRoot())return No(o,o,new T([],{}),e,n,i);let s=cm(a,o,t),l=s.processChildren?Ln(s.segmentGroup,s.index,a.commands):xl(s.segmentGroup,s.index,a.commands);return No(o,s.segmentGroup,l,e,n,i)}function Kr(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Vn(t){return typeof t=="object"&&t!=null&&t.outlets}function rl(t,r,e){t||="\u0275";let n=new Pe;return n.queryParams={[t]:r},e.parse(e.serialize(n)).queryParams[t]}function No(t,r,e,n,i,o){let a={};for(let[d,u]of Object.entries(n??{}))a[d]=Array.isArray(u)?u.map(p=>rl(d,p,o)):rl(d,u,o);let s;t===r?s=e:s=El(t,r,e);let l=yl(_l(s));return new Pe(l,a,i)}function El(t,r,e){let n={};return Object.entries(t.children).forEach(([i,o])=>{o===r?n[i]=e:n[i]=El(o,r,e)}),new T(t.segments,n)}var Xr=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,n){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=n,r&&n.length>0&&Kr(n[0]))throw new E(4003,!1);let i=n.find(Vn);if(i&&i!==$u(n))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function lm(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Xr(!0,0,t);let r=0,e=!1,n=t.reduce((i,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...i,{outlets:s}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?r++:s!=""&&i.push(s))}),i):[...i,o]},[]);return new Xr(e,r,n)}var Zt=class{segmentGroup;processChildren;index;constructor(r,e,n){this.segmentGroup=r,this.processChildren=e,this.index=n}};function cm(t,r,e){if(t.isAbsolute)return new Zt(r,!0,0);if(!e)return new Zt(r,!1,NaN);if(e.parent===null)return new Zt(e,!0,0);let n=Kr(t.commands[0])?0:1,i=e.segments.length-1+n;return dm(e,i,t.numberOfDoubleDots)}function dm(t,r,e){let n=t,i=r,o=e;for(;o>i;){if(o-=i,n=n.parent,!n)throw new E(4005,!1);i=n.segments.length}return new Zt(n,!1,i-o)}function um(t){return Vn(t[0])?t[0].outlets:{[C]:t}}function xl(t,r,e){if(t??=new T([],{}),t.segments.length===0&&t.hasChildren())return Ln(t,r,e);let n=mm(t,r,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new T(t.segments.slice(0,n.pathIndex),{});return o.children[C]=new T(t.segments.slice(n.pathIndex),t.children),Ln(o,0,i)}else return n.match&&i.length===0?new T(t.segments,{}):n.match&&!t.hasChildren()?zo(t,r,e):n.match?Ln(t,0,i):zo(t,r,e)}function Ln(t,r,e){if(e.length===0)return new T(t.segments,{});{let n=um(e),i={};if(Object.keys(n).some(o=>o!==C)&&t.children[C]&&t.numberOfChildren===1&&t.children[C].segments.length===0){let o=Ln(t.children[C],r,e);return new T(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(i[o]=xl(t.children[o],r,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(i[o]=a)}),new T(t.segments,i)}}function mm(t,r,e){let n=0,i=r,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=e.length)return o;let a=t.segments[i],s=e[n];if(Vn(s))break;let l=`${s}`,d=n<e.length-1?e[n+1]:null;if(i>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!ol(l,d,a))return o;n+=2}else{if(!ol(l,{},a))return o;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function zo(t,r,e){let n=t.segments.slice(0,r),i=0;for(;i<e.length;){let o=e[i];if(Vn(o)){let l=fm(o.outlets);return new T(n,l)}if(i===0&&Kr(e[0])){let l=t.segments[r];n.push(new ut(l.path,il(e[0]))),i++;continue}let a=Vn(o)?o.outlets[C]:`${o}`,s=i<e.length-1?e[i+1]:null;a&&s&&Kr(s)?(n.push(new ut(a,il(s))),i+=2):(n.push(new ut(a,{})),i++)}return new T(n,{})}function fm(t){let r={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(r[e]=zo(new T([],{}),0,n))}),r}function il(t){let r={};return Object.entries(t).forEach(([e,n])=>r[e]=`${n}`),r}function ol(t,r,e){return t==e.path&&We(r,e.parameters)}var jn="imperative",ne=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(ne||{}),Me=class{id;url;constructor(r,e){this.id=r,this.url=e}},At=class extends Me{type=ne.NavigationStart;navigationTrigger;restoredState;constructor(r,e,n="imperative",i=null){super(r,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},nt=class extends Me{urlAfterRedirects;type=ne.NavigationEnd;constructor(r,e,n){super(r,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},le=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(le||{}),Un=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Un||{}),Oe=class extends Me{reason;code;type=ne.NavigationCancel;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ml(t){return t instanceof Oe&&(t.code===le.Redirect||t.code===le.SupersededByNewNavigation)}var rt=class extends Me{reason;code;type=ne.NavigationSkipped;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}},It=class extends Me{error;target;type=ne.NavigationError;constructor(r,e,n,i){super(r,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},zn=class extends Me{urlAfterRedirects;state;type=ne.RoutesRecognized;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jr=class extends Me{urlAfterRedirects;state;type=ne.GuardsCheckStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qr=class extends Me{urlAfterRedirects;state;shouldActivate;type=ne.GuardsCheckEnd;constructor(r,e,n,i,o){super(r,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ei=class extends Me{urlAfterRedirects;state;type=ne.ResolveStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ti=class extends Me{urlAfterRedirects;state;type=ne.ResolveEnd;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ni=class{route;type=ne.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ri=class{route;type=ne.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ii=class{snapshot;type=ne.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oi=class{snapshot;type=ne.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ai=class{snapshot;type=ne.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},si=class{snapshot;type=ne.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Xt=class{},Hn=class{},Jt=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function hm(t){return!(t instanceof Xt)&&!(t instanceof Jt)&&!(t instanceof Hn)}var li=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new nn(this.rootInjector)}},nn=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new li(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(D(Ie))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ci=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=Ho(r,this._root);return e?e.children.map(n=>n.value):[]}firstChild(r){let e=Ho(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=$o(r,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return $o(r,this._root).map(e=>e.value)}};function Ho(t,r){if(t===r.value)return r;for(let e of r.children){let n=Ho(t,e);if(n)return n}return null}function $o(t,r){if(t===r.value)return[r];for(let e of r.children){let n=$o(t,e);if(n.length)return n.unshift(r),n}return[]}var xe=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function Wt(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var $n=class extends ci{snapshot;constructor(r,e){super(r),this.snapshot=e,Qo(this,r)}toString(){return this.snapshot.toString()}};function Sl(t,r){let e=pm(t,r),n=new ge([new ut("",{})]),i=new ge({}),o=new ge({}),a=new ge({}),s=new ge(""),l=new ft(n,i,a,s,o,C,t,e.root);return l.snapshot=e.root,new $n(new xe(l,[]),e)}function pm(t,r){let e={},n={},i={},a=new Qt([],e,i,"",n,C,t,null,{},r);return new Gn("",new xe(a,[]))}var ft=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,e,n,i,o,a,s,l){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(F(d=>d[Zn]))??_(void 0),this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(F(r=>St(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(F(r=>St(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Jo(t,r,e="emptyOnly"){let n,{routeConfig:i}=t;return r!==null&&(e==="always"||i?.path===""||!r.component&&!r.routeConfig?.loadComponent)?n={params:m(m({},r.params),t.params),data:m(m({},r.data),t.data),resolve:m(m(m(m({},t.data),r.data),i?.data),t._resolvedData)}:n={params:m({},t.params),data:m({},t.data),resolve:m(m({},t.data),t._resolvedData??{})},i&&Il(i)&&(n.resolve[Zn]=i.title),n}var Qt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Zn]}constructor(r,e,n,i,o,a,s,l,d,u){this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=St(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=St(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},Gn=class extends ci{url;constructor(r,e){super(e),this.url=r,Qo(this,e)}toString(){return Al(this._root)}};function Qo(t,r){r.value._routerState=t,r.children.forEach(e=>Qo(t,e))}function Al(t){let r=t.children.length>0?` { ${t.children.map(Al).join(", ")} } `:"";return`${t.value}${r}`}function ko(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,We(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),We(r.params,e.params)||t.paramsSubject.next(e.params),Hu(r.url,e.url)||t.urlSubject.next(e.url),We(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Go(t,r){let e=We(t.params,r.params)&&Zu(t.url,r.url),n=!t.parent!=!r.parent;return e&&!n&&(!t.parent||Go(t.parent,r.parent))}function Il(t){return typeof t.title=="string"||t.title===null}var Rl=new y(""),Kn=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=C;activateEvents=new X;deactivateEvents=new X;attachEvents=new X;detachEvents=new X;routerOutletData=ws();parentContexts=c(nn);location=c(Ar);changeDetector=c(wt);inputBinder=c(fi,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new qo(e,s,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Qe]})}return t})(),qo=class{route;childContexts;parent;outletData;constructor(r,e,n,i){this.route=r,this.childContexts=e,this.parent=n,this.outletData=i}get(r,e){return r===ft?this.route:r===nn?this.childContexts:r===Rl?this.outletData:this.parent.get(r,e)}},fi=new y("");var ea=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&Q(0,"router-outlet")},dependencies:[Kn],encapsulation:2})}return t})();function ta(t){let r=t.children&&t.children.map(ta),e=r?O(m({},t),{children:r}):m({},t);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==C&&(e.component=ea),e}function gm(t,r,e){let n=qn(t,r._root,e?e._root:void 0);return new $n(n,r)}function qn(t,r,e){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=r.value;let i=vm(t,r,e);return new xe(n,i)}else{if(t.shouldAttach(r.value)){let o=t.retrieve(r.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=r.value,a.children=r.children.map(s=>qn(t,s)),a}}let n=bm(r.value),i=r.children.map(o=>qn(t,o));return new xe(n,i)}}function vm(t,r,e){return r.children.map(n=>{for(let i of e.children)if(t.shouldReuseRoute(n.value,i.value.snapshot))return qn(t,n,i);return qn(t,n)})}function bm(t){return new ft(new ge(t.url),new ge(t.params),new ge(t.queryParams),new ge(t.fragment),new ge(t.data),t.outlet,t.component,t)}var en=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},Tl="ngNavigationCancelingError";function di(t,r){let{redirectTo:e,navigationBehaviorOptions:n}=Kt(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=Fl(!1,le.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function Fl(t,r){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Tl]=!0,e.cancellationCode=r,e}function ym(t){return Ol(t)&&Kt(t.url)}function Ol(t){return!!t&&t[Tl]}var Wo=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,n,i,o){this.routeReuseStrategy=r,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=o}activate(r){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,r),ko(this.futureState.root),this.activateChildRoutes(e,n,r)}deactivateChildRoutes(r,e,n){let i=Wt(e);r.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],n),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(i===o)if(i.component){let a=n.getContext(i.outlet);a&&this.deactivateChildRoutes(r,e,a.children)}else this.deactivateChildRoutes(r,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=Wt(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:s})}}deactivateRouteAndOutlet(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=Wt(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(r,e,n){let i=Wt(e);r.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],n),this.forwardEvent(new si(o.value.snapshot))}),r.children.length&&this.forwardEvent(new oi(r.value.snapshot))}activateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(ko(i),i===o)if(i.component){let a=n.getOrCreateContext(i.outlet);this.activateChildRoutes(r,e,a.children)}else this.activateChildRoutes(r,e,n);else if(i.component){let a=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),ko(s.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,n)}},ui=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},Yt=class{component;route;constructor(r,e){this.component=r,this.route=e}};function _m(t,r,e){let n=t._root,i=r?r._root:null;return kn(n,i,e,[n.value])}function Dm(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function rn(t,r){let e=Symbol(),n=r.get(t,e);return n===e?typeof t=="function"&&!Qa(t)?t:r.get(t):n}function kn(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=Wt(r);return t.children.forEach(a=>{Cm(a,o[a.value.outlet],e,n.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Bn(s,e.getContext(a),i)),i}function Cm(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=r?r.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=wm(a,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new ui(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?kn(t,r,s?s.children:null,n,i):kn(t,r,e,n,i),l&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new Yt(s.outlet.component,a))}else a&&Bn(r,s,i),i.canActivateChecks.push(new ui(n)),o.component?kn(t,null,s?s.children:null,n,i):kn(t,null,e,n,i);return i}function wm(t,r,e){if(typeof e=="function")return ye(r._environmentInjector,()=>e(t,r));switch(e){case"pathParamsChange":return!Mt(t.url,r.url);case"pathParamsOrQueryParamsChange":return!Mt(t.url,r.url)||!We(t.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Go(t,r)||!We(t.queryParams,r.queryParams);default:return!Go(t,r)}}function Bn(t,r,e){let n=Wt(t),i=t.value;Object.entries(n).forEach(([o,a])=>{i.component?r?Bn(a,r.children.getContext(o),e):Bn(a,null,e):Bn(a,r,e)}),i.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new Yt(r.outlet.component,i)):e.canDeactivateChecks.push(new Yt(null,i)):e.canDeactivateChecks.push(new Yt(null,i))}function Xn(t){return typeof t=="function"}function Em(t){return typeof t=="boolean"}function xm(t){return t&&Xn(t.canLoad)}function Mm(t){return t&&Xn(t.canActivate)}function Sm(t){return t&&Xn(t.canActivateChild)}function Am(t){return t&&Xn(t.canDeactivate)}function Im(t){return t&&Xn(t.canMatch)}function Pl(t){return t instanceof $a||t?.name==="EmptyError"}var Gr=Symbol("INITIAL_VALUE");function tn(){return Ae(t=>Ga(t.map(r=>r.pipe(st(1),br(Gr)))).pipe(F(r=>{for(let e of r)if(e!==!0){if(e===Gr)return Gr;if(e===!1||Rm(e))return e}return!0}),Se(r=>r!==Gr),st(1)))}function Rm(t){return Kt(t)||t instanceof en}function Nl(t){return t.aborted?_(void 0).pipe(st(1)):new Nt(r=>{let e=()=>{r.next(),r.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function kl(t){return Ge(Nl(t))}function Tm(t){return at(r=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:o}}=r;return o.length===0&&i.length===0?_(O(m({},r),{guardsResult:!0})):Fm(o,e,n).pipe(at(a=>a&&Em(a)?Om(e,i,t):_(a)),F(a=>O(m({},r),{guardsResult:a})))})}function Fm(t,r,e){return be(t).pipe(at(n=>jm(n.component,n.route,e,r)),lt(n=>n!==!0,!0))}function Om(t,r,e){return be(r).pipe(_n(n=>qa(Nm(n.route.parent,e),Pm(n.route,e),Lm(t,n.path),km(t,n.route))),lt(n=>n!==!0,!0))}function Pm(t,r){return t!==null&&r&&r(new ai(t)),_(!0)}function Nm(t,r){return t!==null&&r&&r(new ii(t)),_(!0)}function km(t,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return _(!0);let n=e.map(i=>gr(()=>{let o=r._environmentInjector,a=rn(i,o),s=Mm(a)?a.canActivate(r,t):ye(o,()=>a(r,t));return Rt(s).pipe(lt())}));return _(n).pipe(tn())}function Lm(t,r){let e=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(o=>Dm(o)).filter(o=>o!==null).map(o=>gr(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=rn(s,l),u=Sm(d)?d.canActivateChild(e,t):ye(l,()=>d(e,t));return Rt(u).pipe(lt())});return _(a).pipe(tn())}));return _(i).pipe(tn())}function jm(t,r,e,n){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return _(!0);let o=i.map(a=>{let s=r._environmentInjector,l=rn(a,s),d=Am(l)?l.canDeactivate(t,r,e,n):ye(s,()=>l(t,r,e,n));return Rt(d).pipe(lt())});return _(o).pipe(tn())}function Bm(t,r,e,n,i){let o=r.canLoad;if(o===void 0||o.length===0)return _(!0);let a=o.map(s=>{let l=rn(s,t),d=xm(l)?l.canLoad(r,e):ye(t,()=>l(r,e)),u=Rt(d);return i?u.pipe(kl(i)):u});return _(a).pipe(tn(),Ll(n))}function Ll(t){return Ha(ce(r=>{if(typeof r!="boolean")throw di(t,r)}),F(r=>r===!0))}function Vm(t,r,e,n,i,o){let a=r.canMatch;if(!a||a.length===0)return _(!0);let s=a.map(l=>{let d=rn(l,t),u=Im(d)?d.canMatch(r,e,i):ye(t,()=>d(r,e,i));return Rt(u).pipe(kl(o))});return _(s).pipe(tn(),Ll(n))}var tt=class t extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,t.prototype)}},Wn=class t extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,t.prototype)}};function Um(t){throw new E(4e3,!1)}function zm(t){throw Fl(!1,le.GuardRejected)}var Zo=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[C])throw Um(`${r.redirectTo}`);i=i.children[C]}}async applyRedirectCommands(r,e,n,i,o){let a=await Hm(e,i,o);if(a instanceof Pe)throw new Wn(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,n);if(a[0]==="/")throw new Wn(s);return s}applyRedirectCreateUrlTree(r,e,n,i){let o=this.createSegmentGroup(r,e.root,n,i);return new Pe(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let n={};return Object.entries(r).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[i]=e[s]}else n[i]=o}),n}createSegmentGroup(r,e,n,i){let o=this.createSegments(r,e.segments,n,i),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(r,l,n,i)}),new T(o,a)}createSegments(r,e,n,i){return e.map(o=>o.path[0]===":"?this.findPosParam(r,o,i):this.findOrReturn(o,n))}findPosParam(r,e,n){let i=n[e.path.substring(1)];if(!i)throw new E(4001,!1);return i}findOrReturn(r,e){let n=0;for(let i of e){if(i.path===r.path)return e.splice(n),i;n++}return r}};function Hm(t,r,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Yr(Rt(ye(e,()=>n(r))))}function $m(t,r){return t.providers&&!t._injector&&(t._injector=ao(t.providers,r,`Route: ${t.path}`)),t._injector??r}function ze(t){return t.outlet||C}function Gm(t,r){let e=t.filter(n=>ze(n)===r);return e.push(...t.filter(n=>ze(n)!==r)),e}var Yo={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jl(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function qm(t,r,e,n,i,o,a){let s=Bl(t,r,e);if(!s.matched)return _(s);let l=jl(o(s));return n=$m(r,n),Vm(n,r,e,i,l,a).pipe(F(d=>d===!0?s:m({},Yo)))}function Bl(t,r,e){if(r.path==="")return r.pathMatch==="full"&&(t.hasChildren()||e.length>0)?m({},Yo):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(r.matcher||cl)(e,t,r);if(!i)return m({},Yo);let o={};Object.entries(i.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=i.consumed.length>0?m(m({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function al(t,r,e,n,i){return e.length>0&&Ym(t,e,n,i)?{segmentGroup:new T(r,Zm(n,new T(e,t.children))),slicedSegments:[]}:e.length===0&&Km(t,e,n)?{segmentGroup:new T(t.segments,Wm(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new T(t.segments,t.children),slicedSegments:e}}function Wm(t,r,e,n){let i={};for(let o of e)if(hi(t,r,o)&&!n[ze(o)]){let a=new T([],{});i[ze(o)]=a}return m(m({},n),i)}function Zm(t,r){let e={};e[C]=r;for(let n of t)if(n.path===""&&ze(n)!==C){let i=new T([],{});e[ze(n)]=i}return e}function Ym(t,r,e,n){return e.some(i=>!hi(t,r,i)||!(ze(i)!==C)?!1:!(n!==void 0&&ze(i)===n))}function Km(t,r,e){return e.some(n=>hi(t,r,n))}function hi(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Xm(t,r,e){return r.length===0&&!t.children[e]}var Ko=class{};async function Jm(t,r,e,n,i,o,a="emptyOnly",s){return new Xo(t,r,e,n,i,a,o,s).recognize()}var Qm=31,Xo=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,n,i,o,a,s,l){this.injector=r,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Zo(this.urlSerializer,this.urlTree)}noMatchError(r){return new E(4002,`'${r.segmentGroup}'`)}async recognize(){let r=al(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(r),i=new xe(n,e),o=new Gn("",i),a=Dl(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(r){let e=new Qt([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),C,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,C,e),rootSnapshot:e}}catch(n){if(n instanceof Wn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof tt?this.noMatchError(n):n}}async processSegmentGroup(r,e,n,i,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,e,n,o);let a=await this.processSegment(r,e,n,n.segments,i,!0,o);return a instanceof xe?[a]:[]}async processChildren(r,e,n,i){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=n.children[l],u=Gm(e,l),p=await this.processSegmentGroup(r,u,d,l,i);a.push(...p)}let s=Vl(a);return ef(s),s}async processSegment(r,e,n,i,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??r,e,l,n,i,o,a,s)}catch(d){if(d instanceof tt||Pl(d))continue;throw d}if(Xm(n,i,o))return new Ko;throw new tt(n)}async processSegmentAgainstRoute(r,e,n,i,o,a,s,l){if(ze(n)!==a&&(a===C||!hi(i,o,n)))throw new tt(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(r,i,e,n,o,a,l);throw new tt(i)}async expandSegmentAgainstRouteUsingRedirect(r,e,n,i,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:p,remainingSegments:M}=Bl(e,i,o);if(!l)throw new tt(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Qm&&(this.allowRedirects=!1));let re=this.createSnapshot(r,i,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Y=await this.applyRedirects.applyRedirectCommands(u,i.redirectTo,p,jl(re),r),H=await this.applyRedirects.lineralizeSegments(i,Y);return this.processSegment(r,n,e,H.concat(M),a,!1,s)}createSnapshot(r,e,n,i,o){let a=new Qt(n,i,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,nf(e),ze(e),e.component??e._loadedComponent??null,e,rf(e),r),s=Jo(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(r,e,n,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=pe=>this.createSnapshot(r,n,pe.consumedSegments,pe.parameters,a),l=await Yr(qm(e,n,i,r,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new tt(e);r=n._injector??r;let{routes:d}=await this.getChildConfig(r,n,i),u=n._loadedInjector??r,{parameters:p,consumedSegments:M,remainingSegments:re}=l,Y=this.createSnapshot(r,n,M,p,a),{segmentGroup:H,slicedSegments:S}=al(e,M,re,d,o);if(S.length===0&&H.hasChildren()){let pe=await this.processChildren(u,d,H,Y);return new xe(Y,pe)}if(d.length===0&&S.length===0)return new xe(Y,[]);let R=ze(n)===o,K=await this.processSegment(u,d,H,S,R?C:o,!0,Y);return new xe(Y,K instanceof xe?[K]:[])}async getChildConfig(r,e,n){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Yr(Bm(r,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw zm(e)}return{routes:[],injector:r}}};function ef(t){t.sort((r,e)=>r.value.outlet===C?-1:e.value.outlet===C?1:r.value.outlet.localeCompare(e.value.outlet))}function tf(t){let r=t.value.routeConfig;return r&&r.path===""}function Vl(t){let r=[],e=new Set;for(let n of t){if(!tf(n)){r.push(n);continue}let i=r.find(o=>n.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...n.children),e.add(i)):r.push(n)}for(let n of e){let i=Vl(n.children);r.push(new xe(n.value,i))}return r.filter(n=>!e.has(n))}function nf(t){return t.data||{}}function rf(t){return t.resolve||{}}function of(t,r,e,n,i,o,a){return at(async s=>{let{state:l,tree:d}=await Jm(t,r,e,n,s.extractedUrl,i,o,a);return O(m({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function af(t){return at(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return _(r);let i=new Set(n.map(s=>s.route)),o=new Set;for(let s of i)if(!o.has(s))for(let l of Ul(s))o.add(l);let a=0;return be(o).pipe(_n(s=>i.has(s)?sf(s,e,t):(s.data=Jo(s,s.parent,t).resolve,_(void 0))),ce(()=>a++),oo(1),at(s=>a===o.size?_(r):ve))})}function Ul(t){let r=t.children.map(e=>Ul(e)).flat();return[t,...r]}function sf(t,r,e){let n=t.routeConfig,i=t._resolve;return n?.title!==void 0&&!Il(n)&&(i[Zn]=n.title),gr(()=>(t.data=Jo(t,t.parent,e).resolve,lf(i,t,r).pipe(F(o=>(t._resolvedData=o,t.data=m(m({},t.data),o),null)))))}function lf(t,r,e){let n=jo(t);if(n.length===0)return _({});let i={};return be(n).pipe(at(o=>cf(t[o],r,e).pipe(lt(),ce(a=>{if(a instanceof en)throw di(new mt,a);i[o]=a}))),oo(1),F(()=>i),yn(o=>Pl(o)?ve:pr(o)))}function cf(t,r,e){let n=r._environmentInjector,i=rn(t,n),o=i.resolve?i.resolve(r,e):ye(n,()=>i(r,e));return Rt(o)}function sl(t){return Ae(r=>{let e=t(r);return e?be(e).pipe(F(()=>r)):_(r)})}var na=(()=>{class t{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(o=>o.outlet===C);return n}getResolvedTitleForRoute(e){return e.data[Zn]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(zl),providedIn:"root"})}return t})(),zl=(()=>{class t extends na{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(D(Js))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jn=new y("",{factory:()=>({})}),Qn=new y(""),Hl=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(Cs);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await ul(ye(e,()=>n.loadComponent())),a=await ql(Gl(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,i),i}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await $l(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,i),i}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function $l(t,r,e,n){let i=await ul(ye(e,()=>t.loadChildren())),o=await ql(Gl(i)),a;o instanceof gs||Array.isArray(o)?a=o:a=await r.compileModuleAsync(o),n&&n(t);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get(Qn,[],{optional:!0,self:!0}).flat()),{routes:l.map(ta),injector:s,factory:u}}function df(t){return t&&typeof t=="object"&&"default"in t}function Gl(t){return df(t)?t.default:t}async function ql(t){return t}var pi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(uf),providedIn:"root"})}return t})(),uf=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wl=new y("");var mf=()=>{},Zl=new y(""),Yl=(()=>{class t{currentNavigation=V(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=V(null);events=new $;transitionAbortWithErrorSubject=new $;configLoader=c(Hl);environmentInjector=c(Ie);destroyRef=c(jt);urlSerializer=c(Yn);rootContexts=c(nn);location=c($t);inputBindingEnabled=c(fi,{optional:!0})!==null;titleStrategy=c(na);options=c(Jn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(pi);createViewTransition=c(Wl,{optional:!0});navigationErrorHandler=c(Zl,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>_(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new ni(i)),n=i=>this.events.next(new ri(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;oe(()=>{this.transitions?.next(O(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ge(null),this.transitions.pipe(Se(n=>n!==null),Ae(n=>{let i=!1,o=new AbortController,a=()=>!i&&this.currentTransition?.id===n.id;return _(n).pipe(Ae(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",le.SupersededByNewNavigation),ve;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?O(m({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new rt(s.id,this.urlSerializer.serialize(s.rawUrl),"",Un.IgnoredSameUrlNavigation)),s.resolve(!1),ve;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return _(s).pipe(Ae(p=>(this.events.next(new At(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?ve:Promise.resolve(p))),of(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ce(p=>{n.targetSnapshot=p.targetSnapshot,n.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(M=>(M.finalUrl=p.urlAfterRedirects,M)),this.events.next(new Hn)}),Ae(p=>be(n.routesRecognizeHandler.deferredHandle??_(void 0)).pipe(F(()=>p))),ce(()=>{let p=new zn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:M,source:re,restoredState:Y,extras:H}=s,S=new At(p,this.urlSerializer.serialize(M),re,Y);this.events.next(S);let R=Sl(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=O(m({},s),{targetSnapshot:R,urlAfterRedirects:M,extras:O(m({},H),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(K=>(K.finalUrl=M,K)),_(n)}else return this.events.next(new rt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Un.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ve}),F(s=>{let l=new Jr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=n=O(m({},s),{guards:_m(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),Tm(s=>this.events.next(s)),Ae(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw di(this.urlSerializer,s.guardsResult);let l=new Qr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return ve;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",le.GuardRejected),ve;if(s.guards.canActivateChecks.length===0)return _(s);let d=new ei(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return ve;let u=!1;return _(s).pipe(af(this.paramsInheritanceStrategy),ce({next:()=>{u=!0;let p=new ti(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{u||this.cancelNavigationTransition(s,"",le.NoDataFromResolver)}}))}),sl(s=>{let l=u=>{let p=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let M=u._environmentInjector;p.push(this.configLoader.loadComponent(M,u.routeConfig).then(re=>{u.component=re}))}for(let M of u.children)p.push(...l(M));return p},d=l(s.targetSnapshot.root);return d.length===0?_(s):be(Promise.all(d).then(()=>s))}),sl(()=>this.afterPreactivation()),Ae(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?be(d).pipe(F(()=>n)):_(n)}),st(1),Ae(s=>{let l=gm(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=O(m({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new Xt);let d=n.beforeActivateHandler.deferredHandle;return d?be(d.then(()=>s)):_(s)}),ce(s=>{new Wo(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(i=!0,this.currentNavigation.update(l=>(l.abort=mf,l)),this.lastSuccessfulNavigation.set(oe(this.currentNavigation)),this.events.next(new nt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Ge(Nl(o.signal).pipe(Se(()=>!i&&!n.targetRouterState),ce(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",le.Aborted)}))),ce({complete:()=>{i=!0}}),Ge(this.transitionAbortWithErrorSubject.pipe(ce(s=>{throw s}))),kt(()=>{o.abort(),i||this.cancelNavigationTransition(n,"",le.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),yn(s=>{if(i=!0,this.destroyed)return n.resolve(!1),ve;if(Ol(s))this.events.next(new Oe(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),ym(s)?this.events.next(new Jt(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new It(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=ye(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof en){let{message:u,cancellationCode:p}=di(this.urlSerializer,d);this.events.next(new Oe(n.id,this.urlSerializer.serialize(n.extractedUrl),u,p)),this.events.next(new Jt(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return ve}))}))}cancelNavigationTransition(e,n,i){let o=new Oe(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=oe(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ff(t){return t!==jn}var Kl=new y("");var Xl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(hf),providedIn:"root"})}return t})(),mi=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}},hf=(()=>{class t extends mi{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Dt(t)))(i||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ra=(()=>{class t{urlSerializer=c(Yn);options=c(Jn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c($t);urlHandlingStrategy=c(pi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Pe;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=i??o;return a instanceof Pe?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=Sl(null,c(Ie));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(pf),providedIn:"root"})}return t})(),pf=(()=>{class t extends ra{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof At?this.updateStateMemento():e instanceof rt?this.commitTransition(n):e instanceof zn?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Xt?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Oe&&!Ml(e)?this.restoreHistory(n):e instanceof It?this.restoreHistory(n,!0):e instanceof nt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:i,id:o}=n,{replaceUrl:a,state:s}=i;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,d=m(m({},s),this.generateNgRouterState(o,l,n));this.location.replaceState(e,"",d)}else{let l=m(m({},s),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,"",l)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,i){return this.canceledNavigationResolution==="computed"?m({navigationId:e,\u0275routerPageId:n},this.routerUrlState(i)):m({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Dt(t)))(i||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ia(t,r){t.events.pipe(Se(e=>e instanceof nt||e instanceof Oe||e instanceof It||e instanceof rt),F(e=>e instanceof nt||e instanceof rt?0:(e instanceof Oe?e.code===le.Redirect||e.code===le.SupersededByNewNavigation:!1)?2:1),Se(e=>e!==2),st(1)).subscribe(()=>{r()})}var gi=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(so);stateManager=c(ra);options=c(Jn,{optional:!0})||{};pendingTasks=c(ts);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Yl);urlSerializer=c(Yn);location=c($t);urlHandlingStrategy=c(pi);injector=c(Ie);_events=new $;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(Xl);injectorCleanup=c(Kl,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(Qn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(fi,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Pt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,o=oe(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Oe&&n.code!==le.Redirect&&n.code!==le.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof nt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Jt){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),l=m({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ff(i.source)},a);this.scheduleNavigation(s,jn,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}hm(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),jn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,o)=>{this.navigateToSyncWithBrowser(e,i,n,o)})}navigateToSyncWithBrowser(e,n,i,o){let a=i?.navigationId?i:null,s=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(o=O(m({},o),{browserUrl:e})),i){let d=m({},i);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let l=this.parseUrl(s);this.scheduleNavigation(l,n,a,o).catch(d=>{this.disposed||this.injector.get(Dr)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return oe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ta),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let p;try{let M=i?i.snapshot:this.routerState.snapshot.root;p=Cl(M)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),p=this.currentUrlTree.root}return wl(p,e,u,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=Kt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,jn,null,n)}navigate(e,n={skipLocationChange:!1}){return gf(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(yt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let i;if(n===!0?i=m({},fl):n===!1?i=m({},Bo):i=m(m({},Bo),n),Kt(e))return tl(this.currentUrlTree,e,i);let o=this.parseUrl(e);return tl(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((n,[i,o])=>(o!=null&&(n[i]=o),n),{})}scheduleNavigation(e,n,i,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((p,M)=>{s=p,l=M});let u=this.pendingTasks.add();return ia(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function gf(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new E(4008,!1)}var yf=new y("");function oa(t,...r){return Lt([{provide:Qn,multi:!0,useValue:t},[],{provide:ft,useFactory:_f},{provide:vs,multi:!0,useFactory:Df},r.map(e=>e.\u0275providers)])}function _f(){return c(gi).routerState.root}function Df(){let t=c(de);return r=>{let e=t.get(Ht);if(r!==e.components[0])return;let n=t.get(gi),i=t.get(Cf);t.get(wf)===1&&n.initialNavigation(),t.get(Ef,null,{optional:!0})?.setUpPreloading(),t.get(yf,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Cf=new y("",{factory:()=>new $}),wf=new y("",{factory:()=>1});var Ef=new y("");function er(t){return t.buttons===0||t.detail===0}function tr(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var aa;function Jl(){if(aa==null){let t=typeof document<"u"?document.head:null;aa=!!(t&&(t.createShadowRoot||t.attachShadow))}return aa}function sa(t){if(Jl()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function He(t){return t.composedPath?t.composedPath()[0]:t.target}var la;try{la=typeof Intl<"u"&&Intl.v8BreakIterator}catch{la=!1}var he=(()=>{class t{_platformId=c(Bt);isBrowser=this._platformId?Ps(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||la)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nr;function Ql(){if(nr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>nr=!0}))}finally{nr=nr||!1}return nr}function on(t){return Ql()?t:!!t.capture}function $e(t){return t instanceof G?t.nativeElement:t}var ec=new y("cdk-input-modality-detector-options"),tc={ignoreKeys:[18,17,224,91,16]},nc=650,ca={passive:!0,capture:!0},rc=(()=>{class t{_platform=c(he);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ge(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=He(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<nc||(this._modality.next(er(e)?"keyboard":"mouse"),this._mostRecentTarget=He(e))};_onTouchstart=e=>{if(tr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=He(e)};constructor(){let e=c(P),n=c(A),i=c(ec,{optional:!0});if(this._options=m(m({},tc),i),this.modalityDetected=this._modality.pipe(Ja(1)),this.modalityChanged=this.modalityDetected.pipe(Za()),this._platform.isBrowser){let o=c(qe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,ca),o.listen(n,"mousedown",this._onMousedown,ca),o.listen(n,"touchstart",this._onTouchstart,ca)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rr=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(rr||{}),ic=new y("cdk-focus-monitor-default-options"),vi=on({passive:!0,capture:!0}),da=(()=>{class t{_ngZone=c(P);_platform=c(he);_inputModalityDetector=c(rc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(A);_stopInputModalityDetector=new $;constructor(){let e=c(ic,{optional:!0});this._detectionMode=e?.detectionMode||rr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=He(e);for(let i=n;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=$e(e);if(!this._platform.isBrowser||i.nodeType!==1)return _();let o=sa(i)||this._document,a=this._elementInfo.get(i);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new $,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=$e(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=$e(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===rr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===rr.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?nc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=He(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,vi),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,vi)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ge(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vi),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vi),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bi=new WeakMap,Tt=(()=>{class t{_appRef;_injector=c(de);_environmentInjector=c(Ie);load(e){let n=this._appRef=this._appRef||this._injector.get(Ht),i=bi.get(n);i||(i={loaders:new Set,refs:[]},bi.set(n,i),n.onDestroy(()=>{bi.get(n)?.refs.forEach(o=>o.destroy()),bi.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Ss(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yi;function Mf(){if(yi===void 0&&(yi=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(yi=t.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return yi}function an(t){return Mf()?.createHTML(t)||t}var oc=new Set,Ft,ua=(()=>{class t{_platform=c(he);_nonce=c(Vt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Af}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Sf(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Sf(t,r){if(!oc.has(t))try{Ft||(Ft=document.createElement("style"),r&&Ft.setAttribute("nonce",r),Ft.setAttribute("type","text/css"),document.head.appendChild(Ft)),Ft.sheet&&(Ft.sheet.insertRule(`@media ${t} {body{ }}`,0),oc.add(t))}catch(e){console.error(e)}}function Af(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var If=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ac=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({providers:[If]})}return t})();var ma={},it=class t{_appId=c(Cn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),ma.hasOwnProperty(r)||(ma[r]=0),`${r}${e?t._infix+"-":""}${ma[r]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})};var sn,sc=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function fa(){if(sn)return sn;if(typeof document!="object"||!document)return sn=new Set(sc),sn;let t=document.createElement("input");return sn=new Set(sc.filter(r=>(t.setAttribute("type",r),t.type===r))),sn}var Rf=new y("MATERIAL_ANIMATIONS"),lc=null;function Tf(){return c(Rf,{optional:!0})?.animationsDisabled||c(wr,{optional:!0})==="NoopAnimations"?"di-disabled":(lc??=c(ua).matchMedia("(prefers-reduced-motion)").matches,lc?"reduced-motion":"enabled")}function ln(){return Tf()!=="enabled"}function cn(t){return t!=null&&`${t}`!="false"}var Ne=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Ne||{}),ha=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ne.HIDDEN;constructor(r,e,n,i=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},cc=on({passive:!0,capture:!0}),pa=class{_events=new Map;addHandler(r,e,n,i){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,cc)})}removeHandler(r,e,n){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,cc)))}_delegateEventHandler=r=>{let e=He(r);e&&this._events.get(r.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(r))})}},ir={enterDuration:225,exitDuration:150},Of=800,dc=on({passive:!0,capture:!0}),uc=["mousedown","touchstart"],mc=["mouseup","mouseleave","touchend","touchcancel"],Pf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),_i=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new pa;constructor(r,e,n,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=$e(n)),o&&o.get(Tt).load(Pf)}fadeInRipple(r,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},ir),n.animation);n.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=n.radius||Nf(r,e,i),s=r-i.left,l=e-i.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let p=window.getComputedStyle(u),M=p.transitionProperty,re=p.transitionDuration,Y=M==="none"||re==="0s"||re==="0s, 0s"||i.width===0&&i.height===0,H=new ha(this,u,n,Y);u.style.transform="scale3d(1, 1, 1)",H.state=Ne.FADING_IN,n.persistent||(this._mostRecentTransientRipple=H);let S=null;return!Y&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let R=()=>{S&&(S.fallbackTimer=null),clearTimeout(pe),this._finishRippleTransition(H)},K=()=>this._destroyRipple(H),pe=setTimeout(K,d+100);u.addEventListener("transitionend",R),u.addEventListener("transitioncancel",K),S={onTransitionEnd:R,onTransitionCancel:K,fallbackTimer:pe}}),this._activeRipples.set(H,S),(Y||!d)&&this._finishRippleTransition(H),H}fadeOutRipple(r){if(r.state===Ne.FADING_OUT||r.state===Ne.HIDDEN)return;let e=r.element,n=m(m({},ir),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",r.state=Ne.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=$e(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,uc.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{mc.forEach(e=>{this._triggerElement.addEventListener(e,this,dc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===Ne.FADING_IN?this._startFadeOutTransition(r):r.state===Ne.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=Ne.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=Ne.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=er(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Of;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!tr(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===Ne.VISIBLE||r.config.terminateOnPointerUp&&r.state===Ne.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(uc.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(mc.forEach(e=>r.removeEventListener(e,this,dc)),this._pointerUpEventsRegistered=!1))}};function Nf(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+i*i)}var fc=new y("mat-ripple-global-options");var kf={capture:!0},Lf=["focus","mousedown","mouseenter","touchstart"],ga="mat-ripple-loader-uninitialized",va="mat-ripple-loader-class-name",hc="mat-ripple-loader-centered",Di="mat-ripple-loader-disabled",pc=(()=>{class t{_document=c(A);_animationsDisabled=ln();_globalRippleOptions=c(fc,{optional:!0});_platform=c(he);_ngZone=c(P);_injector=c(de);_eventCleanups;_hosts=new Map;constructor(){let e=c(qe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Lf.map(n=>e.listen(this._document,n,this._onInteraction,kf)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(ga,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(va))&&e.setAttribute(va,n.className||""),n.centered&&e.setAttribute(hc,""),n.disabled&&e.setAttribute(Di,"")}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(Di,""):e.removeAttribute(Di)}_onInteraction=e=>{let n=He(e);if(n instanceof HTMLElement){let i=n.closest(`[${ga}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(va)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??ir.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??ir.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Di),rippleConfig:{centered:e.hasAttribute(hc),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new _i(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(ga)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var jf=new y("MAT_BUTTON_CONFIG");function vc(t){return t==null?void 0:ho(t)}var ba=(()=>{class t{_elementRef=c(G);_ngZone=c(P);_animationsDisabled=ln();_config=c(jf,{optional:!0});_focusMonitor=c(da);_cleanupClick;_renderer=c(Re);_rippleLoader=c(pc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Tt).load(gc);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(we("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Or(i.color?"mat-"+i.color:""),N("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",fe],disabled:[2,"disabled","disabled",fe],ariaDisabled:[2,"aria-disabled","ariaDisabled",fe],disabledInteractive:[2,"disabledInteractive","disabledInteractive",fe],tabIndex:[2,"tabIndex","tabIndex",vc],_tabindex:[2,"tabindex","_tabindex",vc]}})}return t})();var Bf=new y("cdk-dir-doc",{providedIn:"root",factory:()=>c(A)}),Vf=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function bc(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Vf.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var ya=(()=>{class t{get value(){return this.valueSignal()}valueSignal=V("ltr");change=new X;constructor(){let e=c(Bf,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(bc(n||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ke=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({})}return t})();var yc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[ke]})}return t})();var Uf=["matButton",""],Dc=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Cc=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],zf=["mat-fab",""];var _c=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),dn=(()=>{class t extends ba{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Hf(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?_c.get(this._appearance):null,o=_c.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ce],attrs:Uf,ngContentSelectors:Cc,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Ve(Dc),Ee(0,"span",0),U(1),ie(2,"span",1),U(3,1),ae(),U(4,2),Ee(5,"span",2)(6,"span",3)),n&2&&N("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Hf(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var $f=new y("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>_a}),_a={color:"accent"},wc=(()=>{class t extends ba{_options=c($f,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||_a,this.color=this._options.color||_a.color}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(n,i){n&2&&N("mdc-fab--extended",i.extended)("mat-mdc-extended-fab",i.extended)},inputs:{extended:[2,"extended","extended",fe]},exportAs:["matButton","matAnchor"],features:[Ce],attrs:zf,ngContentSelectors:Cc,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Ve(Dc),Ee(0,"span",0),U(1),ie(2,"span",1),U(3,1),ae(),U(4,2),Ee(5,"span",2)(6,"span",3)),n&2&&N("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ze=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[yc,ke]})}return t})();var wi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-about"]],decls:10,vars:0,consts:[[1,"section"],[1,"container"],[1,"section-header","fade-up"],[1,"section-title"],[1,"section-copy","about-copy"]],template:function(e,n){e&1&&(ie(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),v(4,"About Me"),ae(),ie(5,"p",4),v(6," I am a detail-oriented and enthusiastic B.Sc. Computer Science graduate with a strong interest in web development. I specialize in creating responsive and user-friendly web applications using HTML, CSS, and Angular. "),Ee(7,"br")(8,"br"),v(9," I enjoy turning ideas into clean, functional designs and continuously improving my skills to stay updated with modern technologies. I am currently seeking an opportunity as a Software Developer or Frontend Developer where I can contribute, learn, and grow in a professional environment. "),ae()()()())},styles:[".about-copy[_ngcontent-%COMP%]{max-width:46rem;margin-inline:auto}"]})};var Tc=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(q(Re),q(G))};static \u0275dir=I({type:t})}return t})(),Gf=(()=>{class t extends Tc{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Dt(t)))(i||t)}})();static \u0275dir=I({type:t,features:[Ce]})}return t})(),Fc=new y("");var qf={provide:Fc,useExisting:Dn(()=>Oi),multi:!0};function Wf(){let t=Fe()?Fe().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Zf=new y(""),Oi=(()=>{class t extends Tc{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Wf())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(q(Re),q(G),q(Zf,8))};static \u0275dir=I({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&W("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[Ue([qf]),Ce]})}return t})();function xa(t){return t==null||Ma(t)===0}function Ma(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Sa=new y(""),Aa=new y(""),Yf=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ht=class{static min(r){return Kf(r)}static max(r){return Xf(r)}static required(r){return Jf(r)}static requiredTrue(r){return Qf(r)}static email(r){return eh(r)}static minLength(r){return th(r)}static maxLength(r){return nh(r)}static pattern(r){return rh(r)}static nullValidator(r){return Oc()}static compose(r){return Bc(r)}static composeAsync(r){return Vc(r)}};function Kf(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e<t?{min:{min:t,actual:r.value}}:null}}function Xf(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e>t?{max:{max:t,actual:r.value}}:null}}function Jf(t){return xa(t.value)?{required:!0}:null}function Qf(t){return t.value===!0?null:{required:!0}}function eh(t){return xa(t.value)||Yf.test(t.value)?null:{email:!0}}function th(t){return r=>{let e=r.value?.length??Ma(r.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function nh(t){return r=>{let e=r.value?.length??Ma(r.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function rh(t){if(!t)return Oc;let r,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),r=new RegExp(e)):(e=t.toString(),r=t),n=>{if(xa(n.value))return null;let i=n.value;return r.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Oc(t){return null}function Pc(t){return t!=null}function Nc(t){return En(t)?be(t):t}function kc(t){let r={};return t.forEach(e=>{r=e!=null?m(m({},r),e):r}),Object.keys(r).length===0?null:r}function Lc(t,r){return r.map(e=>e(t))}function ih(t){return!t.validate}function jc(t){return t.map(r=>ih(r)?r:e=>r.validate(e))}function Bc(t){if(!t)return null;let r=t.filter(Pc);return r.length==0?null:function(e){return kc(Lc(e,r))}}function Ia(t){return t!=null?Bc(jc(t)):null}function Vc(t){if(!t)return null;let r=t.filter(Pc);return r.length==0?null:function(e){let n=Lc(e,r).map(Nc);return vr(n).pipe(F(kc))}}function Ra(t){return t!=null?Vc(jc(t)):null}function Ec(t,r){return t===null?[r]:Array.isArray(t)?[...t,r]:[t,r]}function Uc(t){return t._rawValidators}function zc(t){return t._rawAsyncValidators}function Da(t){return t?Array.isArray(t)?t:[t]:[]}function Mi(t,r){return Array.isArray(t)?t.includes(r):t===r}function xc(t,r){let e=Da(r);return Da(t).forEach(i=>{Mi(e,i)||e.push(i)}),e}function Mc(t,r){return Da(r).filter(e=>!Mi(t,e))}var Si=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=Ia(this._rawValidators)}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=Ra(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[]}reset(r=void 0){this.control?.reset(r)}hasError(r,e){return this.control?this.control.hasError(r,e):!1}getError(r,e){return this.control?this.control.getError(r,e):null}},pt=class extends Si{name;get formDirective(){return null}get path(){return null}},Ot=class extends Si{_parent=null;name=null;valueAccessor=null},Ai=class{_cd;constructor(r){this._cd=r}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Hc=(()=>{class t extends Ai{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(q(Ot,2))};static \u0275dir=I({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&N("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[Ce]})}return t})(),$c=(()=>{class t extends Ai{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(q(pt,10))};static \u0275dir=I({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&N("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[Ce]})}return t})();var or="VALID",Ei="INVALID",un="PENDING",ar="DISABLED",gt=class{},Ii=class extends gt{value;source;constructor(r,e){super(),this.value=r,this.source=e}},lr=class extends gt{pristine;source;constructor(r,e){super(),this.pristine=r,this.source=e}},cr=class extends gt{touched;source;constructor(r,e){super(),this.touched=r,this.source=e}},mn=class extends gt{status;source;constructor(r,e){super(),this.status=r,this.source=e}},Ri=class extends gt{source;constructor(r){super(),this.source=r}},dr=class extends gt{source;constructor(r){super(),this.source=r}};function Ta(t){return(Pi(t)?t.validators:t)||null}function oh(t){return Array.isArray(t)?Ia(t):t||null}function Fa(t,r){return(Pi(r)?r.asyncValidators:t)||null}function ah(t){return Array.isArray(t)?Ra(t):t||null}function Pi(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Gc(t,r,e){let n=t.controls;if(!(r?Object.keys(n):n).length)throw new E(1e3,"");if(!n[e])throw new E(1001,"")}function qc(t,r,e){t._forEachChild((n,i)=>{if(e[i]===void 0)throw new E(-1002,"")})}var fn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(r,e){this._assignValidators(r),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(r){this._rawValidators=this._composedValidatorFn=r}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(r){this._rawAsyncValidators=this._composedAsyncValidatorFn=r}get parent(){return this._parent}get status(){return oe(this.statusReactive)}set status(r){oe(()=>this.statusReactive.set(r))}_status=Te(()=>this.statusReactive());statusReactive=V(void 0);get valid(){return this.status===or}get invalid(){return this.status===Ei}get pending(){return this.status===un}get disabled(){return this.status===ar}get enabled(){return this.status!==ar}errors;get pristine(){return oe(this.pristineReactive)}set pristine(r){oe(()=>this.pristineReactive.set(r))}_pristine=Te(()=>this.pristineReactive());pristineReactive=V(!0);get dirty(){return!this.pristine}get touched(){return oe(this.touchedReactive)}set touched(r){oe(()=>this.touchedReactive.set(r))}_touched=Te(()=>this.touchedReactive());touchedReactive=V(!1);get untouched(){return!this.touched}_events=new $;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(r){this._assignValidators(r)}setAsyncValidators(r){this._assignAsyncValidators(r)}addValidators(r){this.setValidators(xc(r,this._rawValidators))}addAsyncValidators(r){this.setAsyncValidators(xc(r,this._rawAsyncValidators))}removeValidators(r){this.setValidators(Mc(r,this._rawValidators))}removeAsyncValidators(r){this.setAsyncValidators(Mc(r,this._rawAsyncValidators))}hasValidator(r){return Mi(this._rawValidators,r)}hasAsyncValidator(r){return Mi(this._rawAsyncValidators,r)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(r={}){let e=this.touched===!1;this.touched=!0;let n=r.sourceControl??this;r.onlySelf||this._parent?.markAsTouched(O(m({},r),{sourceControl:n})),e&&r.emitEvent!==!1&&this._events.next(new cr(!0,n))}markAllAsDirty(r={}){this.markAsDirty({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(r))}markAllAsTouched(r={}){this.markAsTouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(r))}markAsUntouched(r={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=r.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:n})}),r.onlySelf||this._parent?._updateTouched(r,n),e&&r.emitEvent!==!1&&this._events.next(new cr(!1,n))}markAsDirty(r={}){let e=this.pristine===!0;this.pristine=!1;let n=r.sourceControl??this;r.onlySelf||this._parent?.markAsDirty(O(m({},r),{sourceControl:n})),e&&r.emitEvent!==!1&&this._events.next(new lr(!1,n))}markAsPristine(r={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=r.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:r.emitEvent})}),r.onlySelf||this._parent?._updatePristine(r,n),e&&r.emitEvent!==!1&&this._events.next(new lr(!0,n))}markAsPending(r={}){this.status=un;let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new mn(this.status,e)),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.markAsPending(O(m({},r),{sourceControl:e}))}disable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=ar,this.errors=null,this._forEachChild(i=>{i.disable(O(m({},r),{onlySelf:!0}))}),this._updateValue();let n=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ii(this.value,n)),this._events.next(new mn(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(O(m({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=or,this._forEachChild(n=>{n.enable(O(m({},r),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent}),this._updateAncestors(O(m({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(r,e){r.onlySelf||(this._parent?.updateValueAndValidity(r),r.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(r){this._parent=r}getRawValue(){return this.value}updateValueAndValidity(r={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===or||this.status===un)&&this._runAsyncValidator(n,r.emitEvent)}let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ii(this.value,e)),this._events.next(new mn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.updateValueAndValidity(O(m({},r),{sourceControl:e}))}_updateTreeValidity(r={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(r)),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ar:or}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(r,e){if(this.asyncValidator){this.status=un,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:r!==!1};let n=Nc(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:r})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(r,e={}){this.errors=r,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(r){let e=r;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(r,e){let n=e?this.get(e):this;return n?.errors?n.errors[r]:null}hasError(r,e){return!!this.getError(r,e)}get root(){let r=this;for(;r._parent;)r=r._parent;return r}_updateControlsErrors(r,e,n){this.status=this._calculateStatus(),r&&this.statusChanges.emit(this.status),(r||n)&&this._events.next(new mn(this.status,e)),this._parent&&this._parent._updateControlsErrors(r,e,n)}_initObservables(){this.valueChanges=new X,this.statusChanges=new X}_calculateStatus(){return this._allControlsDisabled()?ar:this.errors?Ei:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(un)?un:this._anyControlsHaveStatus(Ei)?Ei:or}_anyControlsHaveStatus(r){return this._anyControls(e=>e.status===r)}_anyControlsDirty(){return this._anyControls(r=>r.dirty)}_anyControlsTouched(){return this._anyControls(r=>r.touched)}_updatePristine(r,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,r.onlySelf||this._parent?._updatePristine(r,e),i&&this._events.next(new lr(this.pristine,e))}_updateTouched(r={},e){this.touched=this._anyControlsTouched(),this._events.next(new cr(this.touched,e)),r.onlySelf||this._parent?._updateTouched(r,e)}_onDisabledChange=[];_registerOnCollectionChange(r){this._onCollectionChange=r}_setUpdateStrategy(r){Pi(r)&&r.updateOn!=null&&(this._updateOn=r.updateOn)}_parentMarkedDirty(r){return!r&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(r){return null}_assignValidators(r){this._rawValidators=Array.isArray(r)?r.slice():r,this._composedValidatorFn=oh(this._rawValidators)}_assignAsyncValidators(r){this._rawAsyncValidators=Array.isArray(r)?r.slice():r,this._composedAsyncValidatorFn=ah(this._rawAsyncValidators)}},hn=class extends fn{constructor(r,e,n){super(Ta(e),Fa(n,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(r,e){return this.controls[r]?this.controls[r]:(this.controls[r]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(r,e,n={}){this.registerControl(r,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(r,e={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(r,e,n={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],e&&this.registerControl(r,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(r){return this.controls.hasOwnProperty(r)&&this.controls[r].enabled}setValue(r,e={}){qc(this,!0,r),Object.keys(r).forEach(n=>{Gc(this,!0,n),this.controls[n].setValue(r[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(r,e={}){r!=null&&(Object.keys(r).forEach(n=>{let i=this.controls[n];i&&i.patchValue(r[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r={},e={}){this._forEachChild((n,i)=>{n.reset(r?r[i]:null,O(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new dr(this))}getRawValue(){return this._reduceChildren({},(r,e,n)=>(r[n]=e.getRawValue(),r))}_syncPendingControls(){let r=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&r(n,e)})}_setUpControls(){this._forEachChild(r=>{r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(r){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&r(n))return!0;return!1}_reduceValue(){let r={};return this._reduceChildren(r,(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(r,e){let n=r;return this._forEachChild((i,o)=>{n=e(n,i,o)}),n}_allControlsDisabled(){for(let r of Object.keys(this.controls))if(this.controls[r].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(r){return this.controls.hasOwnProperty(r)?this.controls[r]:null}};var Ca=class extends hn{};var Oa=new y("",{factory:()=>Pa}),Pa="always";function sh(t,r){return[...r.path,t]}function wa(t,r,e=Pa){Na(t,r),r.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&r.valueAccessor.setDisabledState?.(t.disabled),ch(t,r),uh(t,r),dh(t,r),lh(t,r)}function Sc(t,r,e=!0){let n=()=>{};r?.valueAccessor?.registerOnChange(n),r?.valueAccessor?.registerOnTouched(n),Fi(t,r),t&&(r._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Ti(t,r){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(r)})}function lh(t,r){if(r.valueAccessor.setDisabledState){let e=n=>{r.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),r._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Na(t,r){let e=Uc(t);r.validator!==null?t.setValidators(Ec(e,r.validator)):typeof e=="function"&&t.setValidators([e]);let n=zc(t);r.asyncValidator!==null?t.setAsyncValidators(Ec(n,r.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Ti(r._rawValidators,i),Ti(r._rawAsyncValidators,i)}function Fi(t,r){let e=!1;if(t!==null){if(r.validator!==null){let i=Uc(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==r.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(r.asyncValidator!==null){let i=zc(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==r.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Ti(r._rawValidators,n),Ti(r._rawAsyncValidators,n),e}function ch(t,r){r.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Wc(t,r)})}function dh(t,r){r.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Wc(t,r),t.updateOn!=="submit"&&t.markAsTouched()})}function Wc(t,r){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function uh(t,r){let e=(n,i)=>{r.valueAccessor.writeValue(n),i&&r.viewToModelUpdate(n)};t.registerOnChange(e),r._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Zc(t,r){t==null,Na(t,r)}function mh(t,r){return Fi(t,r)}function fh(t,r){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(r,e.currentValue)}function hh(t){return Object.getPrototypeOf(t.constructor)===Gf}function Yc(t,r){t._syncPendingControls(),r.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ph(t,r){if(!r)return null;Array.isArray(r);let e,n,i;return r.forEach(o=>{o.constructor===Oi?e=o:hh(o)?n=o:i=o}),i||n||e||null}function gh(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}var vh={provide:pt,useExisting:Dn(()=>ka)},sr=Promise.resolve(),ka=(()=>{class t extends pt{callSetDisabledState;get submitted(){return oe(this.submittedReactive)}_submitted=Te(()=>this.submittedReactive());submittedReactive=V(!1);_directives=new Set;form;ngSubmit=new X;options;constructor(e,n,i){super(),this.callSetDisabledState=i,this.form=new hn({},Ia(e),Ra(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){sr.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),wa(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){sr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){sr.then(()=>{let n=this._findContainer(e.path),i=new hn({});Zc(i,e),n.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){sr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){sr.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Yc(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ri(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(q(Sa,10),q(Aa,10),q(Oa,8))};static \u0275dir=I({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,i){n&1&&W("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ue([vh]),Ce]})}return t})();function Ac(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}function Ic(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var xi=class extends fn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(r=null,e,n){super(Ta(e),Fa(n,e)),this._applyFormState(r),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Pi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ic(r)?this.defaultValue=r.value:this.defaultValue=r)}setValue(r,e={}){this.value=this._pendingValue=r,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(r,e={}){this.setValue(r,e)}reset(r=this.defaultValue,e={}){this._applyFormState(r),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new dr(this))}_updateValue(){}_anyControls(r){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(r){this._onChange.push(r)}_unregisterOnChange(r){Ac(this._onChange,r)}registerOnDisabledChange(r){this._onDisabledChange.push(r)}_unregisterOnDisabledChange(r){Ac(this._onDisabledChange,r)}_forEachChild(r){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(r){Ic(r)?(this.value=this._pendingValue=r.value,r.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=r}};var bh=t=>t instanceof xi;var Kc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Ea=class extends fn{constructor(r,e,n){super(Ta(e),Fa(n,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(r){return this.controls[this._adjustIndex(r)]}push(r,e={}){Array.isArray(r)?r.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(r),this._registerControl(r)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(r,e,n={}){this.controls.splice(r,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(r,e={}){let n=this._adjustIndex(r);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(r,e,n={}){let i=this._adjustIndex(r);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(r,e={}){qc(this,!1,r),r.forEach((n,i)=>{Gc(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(r,e={}){r!=null&&(r.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r=[],e={}){this._forEachChild((n,i)=>{n.reset(r[i],O(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new dr(this))}getRawValue(){return this.controls.map(r=>r.getRawValue())}clear(r={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:r.emitEvent}))}_adjustIndex(r){return r<0?r+this.length:r}_syncPendingControls(){let r=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){this.controls.forEach((e,n)=>{r(e,n)})}_updateValue(){this.value=this.controls.filter(r=>r.enabled||this.disabled).map(r=>r.value)}_anyControls(r){return this.controls.some(e=>e.enabled&&r(e))}_setUpControls(){this._forEachChild(r=>this._registerControl(r))}_allControlsDisabled(){for(let r of this.controls)if(r.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(r){r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)}_find(r){return this.at(r)??null}};var yh=(()=>{class t extends pt{callSetDisabledState;get submitted(){return oe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Te(()=>this._submittedReactive());_submittedReactive=V(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Fi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return wa(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Sc(e.control||null,e,!1),gh(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Yc(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ri(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,i=this.form.get(e.path);n!==i&&(Sc(n||null,e),bh(i)&&(wa(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Zc(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&mh(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Na(this.form,this),this._oldForm&&Fi(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(q(Sa,10),q(Aa,10),q(Oa,8))};static \u0275dir=I({type:t,features:[Ce,Qe]})}return t})();var Xc=new y("");var _h={provide:Ot,useExisting:Dn(()=>La)},La=(()=>{class t extends Ot{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new X;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,i,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=ph(this,o)}ngOnChanges(e){this._added||this._setUpControl(),fh(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return sh(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(q(pt,13),q(Sa,10),q(Aa,10),q(Fc,10),q(Xc,8))};static \u0275dir=I({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Ue([_h]),Ce,Qe]})}return t})();var Dh={provide:pt,useExisting:Dn(()=>ur)},ur=(()=>{class t extends yh{form=null;ngSubmit=new X;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Dt(t)))(i||t)}})();static \u0275dir=I({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&W("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ue([Dh]),Ce]})}return t})();var Ch=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({})}return t})();function Rc(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Jc=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let i=this._reduceControls(e),o={};return Rc(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new hn(i,o)}record(e,n=null){let i=this._reduceControls(e);return new Ca(i,n)}control(e,n,i){let o={};return this.useNonNullable?(Rc(n)?o=n:(o.validators=n,o.asyncValidators=i),new xi(e,O(m({},o),{nonNullable:!0}))):new xi(e,n,i)}array(e,n,i){let o=e.map(a=>this._createControl(a));return new Ea(o,n,i)}_reduceControls(e){let n={};return Object.keys(e).forEach(i=>{n[i]=this._createControl(e[i])}),n}_createControl(e){if(e instanceof xi)return e;if(e instanceof fn)return e;if(Array.isArray(e)){let n=e[0],i=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,i,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Qc=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Xc,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Oa,useValue:e.callSetDisabledState??Pa}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[Ch]})}return t})();var Eh=["*"];var xh=new y("MAT_CARD_CONFIG"),Ke=(()=>{class t{appearance;constructor(){let e=c(xh,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,i){n&2&&N("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Eh,decls:1,vars:0,template:function(n,i){n&1&&(Ve(),U(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var Xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var ed=(()=>{class t{align="start";static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,i){n&2&&N("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})();var td=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return t})();var Je=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[ke]})}return t})();var ja=class{_box;_destroyed=new $;_resizeSubject=new $;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new Nt(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),n.unsubscribe(),this._elementObservables.delete(r)}}).pipe(Se(e=>e.some(n=>n.target===r)),Xa({bufferSize:1,refCount:!0}),Ge(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},nd=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(P);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let i=n?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new ja(i)),this._observers.get(i).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mh=["notch"],Sh=["matFormFieldNotchedOutline",""],Ah=["*"],rd=["iconPrefixContainer"],id=["textPrefixContainer"],od=["iconSuffixContainer"],ad=["textSuffixContainer"],Ih=["textField"],Rh=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Th=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Fh(t,r){t&1&&Q(0,"span",21)}function Oh(t,r){if(t&1&&(h(0,"label",20),U(1,1),j(2,Fh,1,0,"span",21),f()),t&2){let e=se(2);J("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),we("for",e._control.disableAutomaticLabeling?null:e._control.id),b(2),B(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ph(t,r){if(t&1&&j(0,Oh,3,5,"label",20),t&2){let e=se();B(e._hasFloatingLabel()?0:-1)}}function Nh(t,r){t&1&&Q(0,"div",7)}function kh(t,r){}function Lh(t,r){if(t&1&&Ir(0,kh,0,0,"ng-template",13),t&2){se(2);let e=mo(1);J("ngTemplateOutlet",e)}}function jh(t,r){if(t&1&&(h(0,"div",9),j(1,Lh,1,1,null,13),f()),t&2){let e=se();J("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),b(),B(e._forceDisplayInfixLabel()?-1:1)}}function Bh(t,r){t&1&&(h(0,"div",10,2),U(2,2),f())}function Vh(t,r){t&1&&(h(0,"div",11,3),U(2,3),f())}function Uh(t,r){}function zh(t,r){if(t&1&&Ir(0,Uh,0,0,"ng-template",13),t&2){se();let e=mo(1);J("ngTemplateOutlet",e)}}function Hh(t,r){t&1&&(h(0,"div",14,4),U(2,4),f())}function $h(t,r){t&1&&(h(0,"div",15,5),U(2,5),f())}function Gh(t,r){t&1&&Q(0,"div",16)}function qh(t,r){t&1&&(h(0,"div",18),U(1,6),f())}function Wh(t,r){if(t&1&&(h(0,"mat-hint",22),v(1),f()),t&2){let e=se(2);J("id",e._hintLabelId),b(),z(e.hintLabel)}}function Zh(t,r){if(t&1&&(h(0,"div",19),j(1,Wh,2,2,"mat-hint",22),U(2,7),Q(3,"div",23),U(4,8),f()),t&2){let e=se();b(),B(e.hintLabel?1:-1)}}var fr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-label"]]})}return t})(),fd=new y("MatError"),Va=(()=>{class t{id=c(it).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,i){n&2&&xn("id",i.id)},inputs:{id:"id"},features:[Ue([{provide:fd,useExisting:t}])]})}return t})(),Ba=(()=>{class t{align="start";id=c(it).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,i){n&2&&(xn("id",i.id),we("align",null),N("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Yh=new y("MatPrefix");var Kh=new y("MatSuffix");var hd=new y("FloatingLabelParent"),sd=(()=>{class t{_elementRef=c(G);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(nd);_ngZone=c(P);_parent=c(hd);_resizeSubscription=new Pt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Xh(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,i){n&2&&N("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Xh(t){let r=t;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var ld="mdc-line-ripple--active",Ni="mdc-line-ripple--deactivating",cd=(()=>{class t{_elementRef=c(G);_cleanupTransitionEnd;constructor(){let e=c(P),n=c(Re);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ni),e.add(ld)}deactivate(){this._elementRef.nativeElement.classList.add(Ni)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,i=n.contains(Ni);e.propertyName==="opacity"&&i&&n.remove(ld,Ni)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),dd=(()=>{class t{_elementRef=c(G);_ngZone=c(P);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,i){if(n&1&&co(Mh,5),n&2){let o;ue(o=me())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,i){n&2&&N("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Sh,ngContentSelectors:Ah,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,i){n&1&&(Ve(),Ee(0,"div",1),ie(1,"div",2,0),U(3),ae(),Ee(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Ua=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t})}return t})();var za=new y("MatFormField"),Jh=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ud="fill",Qh="auto",md="fixed",ep="translateY(-50%)",ki=(()=>{class t{_elementRef=c(G);_changeDetectorRef=c(wt);_platform=c(he);_idGenerator=c(it);_ngZone=c(P);_defaults=c(Jh,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Mn("iconPrefixContainer");_textPrefixContainerSignal=Mn("textPrefixContainer");_iconSuffixContainerSignal=Mn("iconSuffixContainer");_textSuffixContainerSignal=Mn("textSuffixContainer");_prefixSuffixContainers=Te(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Es(fr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=cn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Qh}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||ud;this._appearanceSignal.set(n)}_appearanceSignal=V(ud);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||md}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||md}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new $;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ln();constructor(){let e=this._defaults,n=c(ya);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Cr(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Te(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(i+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(br([void 0,void 0]),F(()=>[n.errorState,n.userAriaDescribedBy]),Ya(),Se(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Ge(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Wa(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ms({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Te(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,i;if(n){let o=this._describedByIds||e;i=e.concat(n.filter(a=>a&&!o.includes(a)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",p=`${a+s}px`,re=`calc(${u} * (${p} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Y=`var(--mat-mdc-form-field-label-transform, ${ep} translateX(${re}))`,H=a+s+l+d;return[Y,H]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,i,o){if(n&1&&(ys(o,i._labelChild,fr,5),bs(o,Ua,5)(o,Yh,5)(o,Kh,5)(o,fd,5)(o,Ba,5)),n&2){uo();let a;ue(a=me())&&(i._formFieldControl=a.first),ue(a=me())&&(i._prefixChildren=a),ue(a=me())&&(i._suffixChildren=a),ue(a=me())&&(i._errorChildren=a),ue(a=me())&&(i._hintChildren=a)}},viewQuery:function(n,i){if(n&1&&(_s(i._iconPrefixContainerSignal,rd,5)(i._textPrefixContainerSignal,id,5)(i._iconSuffixContainerSignal,od,5)(i._textSuffixContainerSignal,ad,5),co(Ih,5)(rd,5)(id,5)(od,5)(ad,5)(sd,5)(dd,5)(cd,5)),n&2){uo(4);let o;ue(o=me())&&(i._textField=o.first),ue(o=me())&&(i._iconPrefixContainer=o.first),ue(o=me())&&(i._textPrefixContainer=o.first),ue(o=me())&&(i._iconSuffixContainer=o.first),ue(o=me())&&(i._textSuffixContainer=o.first),ue(o=me())&&(i._floatingLabel=o.first),ue(o=me())&&(i._notchedOutline=o.first),ue(o=me())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,i){n&2&&N("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ue([{provide:za,useExisting:t},{provide:hd,useExisting:t}])],ngContentSelectors:Th,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,i){if(n&1&&(Ve(Rh),Ir(0,Ph,1,1,"ng-template",null,0,Ds),h(2,"div",6,1),W("click",function(a){return i._control.onContainerClick(a)}),j(4,Nh,1,0,"div",7),h(5,"div",8),j(6,jh,2,2,"div",9),j(7,Bh,3,0,"div",10),j(8,Vh,3,0,"div",11),h(9,"div",12),j(10,zh,1,1,null,13),U(11),f(),j(12,Hh,3,0,"div",14),j(13,$h,3,0,"div",15),f(),j(14,Gh,1,0,"div",16),f(),h(15,"div",17),j(16,qh,2,0,"div",18)(17,Zh,5,1,"div",19),f()),n&2){let o;b(2),N("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),b(2),B(!i._hasOutline()&&!i._control.disabled?4:-1),b(2),B(i._hasOutline()?6:-1),b(),B(i._hasIconPrefix?7:-1),b(),B(i._hasTextPrefix?8:-1),b(2),B(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),b(2),B(i._hasTextSuffix?12:-1),b(),B(i._hasIconSuffix?13:-1),b(),B(i._hasOutline()?-1:14),b(),N("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let a=i._getSubscriptMessageType();b(),B((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[sd,dd,go,cd,Ba],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var hr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[ac,ki,ke]})}return t})();function pd(t){return Error(`Unable to find icon with the name "${t}"`)}function np(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function gd(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function vd(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var ot=class{url;svgText;options;svgElement=null;constructor(r,e,n){this.url=r,this.svgText=e,this.options=n}},yd=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,i,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=i}addSvgIcon(e,n,i){return this.addSvgIconInNamespace("",e,n,i)}addSvgIconLiteral(e,n,i){return this.addSvgIconLiteralInNamespace("",e,n,i)}addSvgIconInNamespace(e,n,i,o){return this._addSvgIconConfig(e,n,new ot(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,i,o){let a=this._sanitizer.sanitize(De.HTML,i);if(!a)throw vd(i);let s=an(a);return this._addSvgIconConfig(e,n,new ot("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,i){return this._addSvgIconSetConfig(e,new ot(n,null,i))}addSvgIconSetLiteralInNamespace(e,n,i){let o=this._sanitizer.sanitize(De.HTML,n);if(!o)throw vd(n);let a=an(o);return this._addSvgIconSetConfig(e,new ot("",a,i))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(De.RESOURCE_URL,e);if(!n)throw gd(e);let i=this._cachedIconsByUrl.get(n);return i?_(Li(i)):this._loadSvgIconFromConfig(new ot(e,null)).pipe(ce(o=>this._cachedIconsByUrl.set(n,o)),F(o=>Li(o)))}getNamedSvgIcon(e,n=""){let i=bd(n,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):pr(pd(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?_(Li(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(F(n=>Li(n)))}_getSvgFromIconSetConfigs(e,n){let i=this._extractIconWithNameFromAnySet(e,n);if(i)return _(i);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(yn(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(De.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),_(null)})));return vr(o).pipe(F(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw pd(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let i=n.length-1;i>=0;i--){let o=n[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ce(n=>e.svgText=n),F(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?_(null):this._fetchIcon(e).pipe(ce(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,i){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(an("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let i=n.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let n=this._svgElementFromString(an("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw np();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(De.RESOURCE_URL,n);if(!a)throw gd(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(F(d=>an(d)),kt(()=>this._inProgressUrlFetches.delete(a)),Ka());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,i){return this._svgIconConfigs.set(bd(e,n),i),this}_addSvgIconSetConfig(e,n){let i=this._iconSetConfigs.get(e);return i?i.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](n,e);if(o)return rp(o)?new ot(o.url,null,o.options):new ot(o,null)}}static \u0275fac=function(n){return new(n||t)(D(Ro,8),D(To),D(A,8),D(_t))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Li(t){return t.cloneNode(!0)}function bd(t,r){return t+":"+r}function rp(t){return!!(t.url&&t.options)}var ip=["*"],op=new y("MAT_ICON_DEFAULT_OPTIONS"),ap=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(A),r=t?t.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),_d=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],sp=_d.map(t=>`[${t}]`).join(", "),lp=/^url\(['"]?#(.*?)['"]?\)$/,vt=(()=>{class t{_elementRef=c(G);_iconRegistry=c(yd);_location=c(ap);_errorHandler=c(_t);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Pt.EMPTY;constructor(){let e=c(new fo("aria-hidden"),{optional:!0}),n=c(op,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let i=e.childNodes[n];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),n.forEach(i=>e.classList.add(i)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(sp),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)_d.forEach(a=>{let s=n[o],l=s.getAttribute(a),d=l?l.match(lp):null;if(d){let u=i.get(s);u||(u=[],i.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,i]=this._splitIconName(e);n&&(this._svgNamespace=n),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,n).pipe(st(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,i){n&2&&(we("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Or(i.color?"mat-"+i.color:""),N("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",fe],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ip,decls:1,vars:0,template:function(n,i){n&1&&(Ve(),U(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Le=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[ke]})}return t})();var cp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),dp={passive:!0},Dd=(()=>{class t{_platform=c(he);_ngZone=c(P);_renderer=c(qe).createRenderer(null,null);_styleLoader=c(Tt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ve;this._styleLoader.load(cp);let n=$e(e),i=this._monitoredElements.get(n);if(i)return i.subject;let o=new $,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,dp)));return this._monitoredElements.set(n,{subject:o,unlisten:l}),o}stopMonitoring(e){let n=$e(e),i=this._monitoredElements.get(n);i&&(i.unlisten(),i.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({})}return t})();var wd=new y("MAT_INPUT_VALUE_ACCESSOR");var Ed=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(r,e,n,i,o){this._defaultMatcher=r,this.ngControl=e,this._parentFormGroup=n,this._parentForm=i,this._stateChanges=o}updateErrorState(){let r=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(i,e)??!1;o!==r&&(this.errorState=o,this._stateChanges.next())}};var up=["button","checkbox","file","hidden","image","radio","range","reset","submit"],mp=new y("MAT_INPUT_CONFIG"),xd=(()=>{class t{_elementRef=c(G);_platform=c(he);ngControl=c(Ot,{optional:!0,self:!0});_autofillMonitor=c(Dd);_ngZone=c(P);_formField=c(za,{optional:!0});_renderer=c(Re);_uid=c(it).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(mp,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new $;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=cn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ht.required)??!1}set required(e){this._required=cn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&fa().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=cn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>fa().has(e));constructor(){let e=c(ka,{optional:!0}),n=c(ur,{optional:!0}),i=c(Ed),o=c(wd,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?lo(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Bi(i,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Cr(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){up.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,i){n&1&&W("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),n&2&&(xn("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),we("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),N("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",fe]},exportAs:["matInput"],features:[Ue([{provide:Ua,useExisting:t}]),Qe]})}return t})(),Md=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=k({imports:[hr,hr,Cd,ke]})}return t})();var _e=class{constructor(r=0,e="Network Error"){this.status=r,this.text=e}};var Sd=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,r)=>Promise.resolve(localStorage.setItem(t,r)),remove:t=>Promise.resolve(localStorage.removeItem(t))}};var Z={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Sd()};var pn=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{};var Ad=(t,r="https://api.emailjs.com")=>{if(!t)return;let e=pn(t);Z.publicKey=e.publicKey,Z.blockHeadless=e.blockHeadless,Z.storageProvider=e.storageProvider,Z.blockList=e.blockList,Z.limitRate=e.limitRate,Z.origin=e.origin||r};var Vi=async(t,r,e={})=>{let n=await fetch(Z.origin+t,{method:"POST",headers:e,body:r}),i=await n.text(),o=new _e(n.status,i);if(n.ok)return o;throw o};var Ui=(t,r,e)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!e||typeof e!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"};var Id=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"};var zi=t=>t.webdriver||!t.languages||t.languages.length===0;var Hi=()=>new _e(451,"Unavailable For Headless Browser");var Rd=(t,r)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"};var hp=t=>!t.list?.length||!t.watchVariable,pp=(t,r)=>t instanceof FormData?t.get(r):t[r],$i=(t,r)=>{if(hp(t))return!1;Rd(t.list,t.watchVariable);let e=pp(r,t.watchVariable);return typeof e!="string"?!1:t.list.includes(e)};var Gi=()=>new _e(403,"Forbidden");var Td=(t,r)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"};var gp=async(t,r,e)=>{let n=Number(await e.get(t)||0);return r-Date.now()+n},qi=async(t,r,e)=>{if(!r.throttle||!e)return!1;Td(r.throttle,r.id);let n=r.id||t;return await gp(n,r.throttle,e)>0?!0:(await e.set(n,Date.now().toString()),!1)};var Wi=()=>new _e(429,"Too Many Requests");var Fd=async(t,r,e,n)=>{let i=pn(n),o=i.publicKey||Z.publicKey,a=i.blockHeadless||Z.blockHeadless,s=i.storageProvider||Z.storageProvider,l=m(m({},Z.blockList),i.blockList),d=m(m({},Z.limitRate),i.limitRate);return a&&zi(navigator)?Promise.reject(Hi()):(Ui(o,t,r),Id(e),e&&$i(l,e)?Promise.reject(Gi()):await qi(location.pathname,d,s)?Promise.reject(Wi()):Vi("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:t,template_id:r,template_params:e}),{"Content-type":"application/json"}))};var Od=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"};var vp=t=>typeof t=="string"?document.querySelector(t):t,Pd=async(t,r,e,n)=>{let i=pn(n),o=i.publicKey||Z.publicKey,a=i.blockHeadless||Z.blockHeadless,s=Z.storageProvider||i.storageProvider,l=m(m({},Z.blockList),i.blockList),d=m(m({},Z.limitRate),i.limitRate);if(a&&zi(navigator))return Promise.reject(Hi());let u=vp(e);Ui(o,t,r),Od(u);let p=new FormData(u);return $i(l,p)?Promise.reject(Gi()):await qi(location.pathname,d,s)?Promise.reject(Wi()):(p.append("lib_version","4.4.1"),p.append("service_id",t),p.append("template_id",r),p.append("user_id",o),Vi("/api/v1.0/email/send-form",p))};var Nd={init:Ad,send:Fd,sendForm:Pd,EmailJSResponseStatus:_e};var gn={publicKey:"hwA-lemFdGWGXHyZp",serviceId:"service_1wfpamr",templateId:"template_x54df7s",recipientEmail:"shubhamvitukade96@gmail.com"};function kd(){return!Object.values(gn).some(t=>t.startsWith("YOUR_EMAILJS_"))}var bp=(t,r)=>r.label;function yp(t,r){if(t&1&&(h(0,"a",12),v(1),f()),t&2){let e=r.$implicit;J("href",e.href,wn),b(),z(e.label)}}function _p(t,r){t&1&&(h(0,"mat-error"),v(1,"Name is required."),f())}function Dp(t,r){t&1&&(h(0,"mat-error"),v(1,"Email or mobile number is required."),f())}function Cp(t,r){t&1&&(h(0,"mat-error"),v(1,"Enter a valid email address or mobile number."),f())}function wp(t,r){t&1&&(h(0,"mat-error"),v(1,"Message is required."),f())}function Ep(t,r){t&1&&(h(0,"mat-error"),v(1,"Message should be at least 10 characters."),f())}function xp(t,r){t&1&&(h(0,"p",24),v(1,"Message sent successfully."),f())}function Mp(t,r){if(t&1&&(h(0,"p",25),v(1),f()),t&2){let e=se();b(),z(e.errorMessage())}}function Ld(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function Sp(t){let r=t.replace(/[\s()+-]/g,"");return/^\d{10,15}$/.test(r)}function Ap(t){let r=String(t.value??"").trim();return r?Ld(r)||Sp(r)?null:{emailOrPhone:!0}:{required:!0}}var Zi=class t{socialLinks=[];submitted=V(!1);isSending=V(!1);errorMessage=V("");isEmailJsReady=kd();fb=new Jc;contactForm=this.fb.group({name:["",ht.required],contactInfo:["",[Ap]],message:["",[ht.required,ht.minLength(10)]]});nameControl=this.contactForm.controls.name;contactInfoControl=this.contactForm.controls.contactInfo;messageControl=this.contactForm.controls.message;async submitForm(){if(this.contactForm.invalid){this.contactForm.markAllAsTouched(),this.submitted.set(!1),this.errorMessage.set("Please fill in your name, a valid email or mobile number, and a message of at least 10 characters.");return}if(!this.isEmailJsReady){this.errorMessage.set("EmailJS is not configured yet. Add your public key, service ID, and template ID in emailjs.config.ts."),this.submitted.set(!1);return}this.isSending.set(!0),this.errorMessage.set(""),this.submitted.set(!1);try{let{name:r,contactInfo:e,message:n}=this.contactForm.getRawValue(),i=String(e??"").trim(),o=Ld(i);await Nd.send(gn.serviceId,gn.templateId,{from_name:r??"",from_email:o?i:"",reply_to:o?i:"",contact_info:i,contact_type:o?"Email":"Mobile",message:n??"",to_email:gn.recipientEmail},{publicKey:gn.publicKey}),this.submitted.set(!0),this.contactForm.reset(),this.contactForm.markAsPristine(),this.contactForm.markAsUntouched()}catch(r){console.error("EmailJS send failed:",r),r instanceof _e?this.errorMessage.set(`EmailJS error ${r.status}: ${r.text}. Check your EmailJS service, template, and connected Gmail account.`):r instanceof Error?this.errorMessage.set(`EmailJS setup error: ${r.message}`):this.errorMessage.set("Message could not be sent. Check your EmailJS service, template, and connected Gmail account.")}finally{this.isSending.set(!1)}}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-contact"]],inputs:{socialLinks:"socialLinks"},decls:60,vars:10,consts:[[1,"section"],[1,"container"],[1,"section-header","fade-up"],[1,"section-title"],[1,"section-copy"],[1,"row","g-4","align-items-stretch"],[1,"col-lg-5"],[1,"contact-card","h-100"],[1,"contact-list"],["href","mailto:shubhamvitukade96@gmail.com"],["href","tel:8530616494"],[1,"social-links"],["target","_blank","rel","noreferrer",3,"href"],[1,"col-lg-7"],[3,"ngSubmit","formGroup"],[1,"row","g-3"],[1,"col-md-6"],["appearance","outline",1,"w-100"],["matInput","","formControlName","name"],["matInput","","type","text","formControlName","contactInfo"],[1,"col-12"],["matInput","","rows","5","formControlName","message"],[1,"col-12","d-flex","flex-column","align-items-start","gap-2"],["mat-flat-button","","color","primary","type","submit",1,"pill-button",3,"disabled"],[1,"success-note"],[1,"error-note"]],template:function(e,n){e&1&&(h(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),v(4,"Contact"),f(),h(5,"p",4),v(6,"Let's connect about frontend roles, internships, or collaboration."),f()(),h(7,"div",5)(8,"div",6)(9,"mat-card",7)(10,"mat-card-content")(11,"div",8)(12,"a",9)(13,"mat-icon"),v(14,"mail"),f(),h(15,"span"),v(16,"shubhamvitukade96@gmail.com"),f()(),h(17,"a",10)(18,"mat-icon"),v(19,"call"),f(),h(20,"span"),v(21,"8530616494"),f()(),h(22,"p")(23,"mat-icon"),v(24,"location_on"),f(),h(25,"span"),v(26,"Pune, Maharashtra, India"),f()()(),h(27,"div",11),je(28,yp,2,2,"a",12,bp),f()()()(),h(30,"div",13)(31,"mat-card",7)(32,"mat-card-content")(33,"form",14),W("ngSubmit",function(){return n.submitForm()}),h(34,"div",15)(35,"div",16)(36,"mat-form-field",17)(37,"mat-label"),v(38,"Name"),f(),Q(39,"input",18),j(40,_p,2,0,"mat-error"),f()(),h(41,"div",16)(42,"mat-form-field",17)(43,"mat-label"),v(44,"Email / Mobile"),f(),Q(45,"input",19),j(46,Dp,2,0,"mat-error"),j(47,Cp,2,0,"mat-error"),f()(),h(48,"div",20)(49,"mat-form-field",17)(50,"mat-label"),v(51,"Message"),f(),Q(52,"textarea",21),j(53,wp,2,0,"mat-error"),j(54,Ep,2,0,"mat-error"),f()(),h(55,"div",22)(56,"button",23),v(57),f(),j(58,xp,2,0,"p",24),j(59,Mp,2,1,"p",25),f()()()()()()()()()),e&2&&(b(28),Be(n.socialLinks),b(5),J("formGroup",n.contactForm),b(7),B(n.nameControl.touched&&n.nameControl.hasError("required")?40:-1),b(6),B(n.contactInfoControl.touched&&n.contactInfoControl.hasError("required")?46:-1),b(),B(n.contactInfoControl.touched&&n.contactInfoControl.hasError("emailOrPhone")?47:-1),b(6),B(n.messageControl.touched&&n.messageControl.hasError("required")?53:-1),b(),B(n.messageControl.touched&&n.messageControl.hasError("minlength")?54:-1),b(2),J("disabled",n.isSending()),b(),Pr(" ",n.isSending()?"Sending...":"Send Message"," "),b(),B(n.submitted()?58:-1),b(),B(n.errorMessage()?59:-1))},dependencies:[te,Qc,Kc,Oi,Hc,$c,ur,La,Ze,dn,Je,Ke,Xe,hr,ki,fr,Va,Le,vt,Md,xd],styles:[".contact-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1.8rem!important}.contact-list[_ngcontent-%COMP%]{display:grid;gap:1rem}.contact-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .contact-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;gap:.85rem;align-items:center;margin:0;color:var(--muted)}.contact-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary)}.social-links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.85rem;margin-top:2rem}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.7rem 1rem;border-radius:999px;background:#2563eb14;color:var(--primary-deep);font-weight:700}.success-note[_ngcontent-%COMP%]{margin:0;color:#1f7a3b;font-weight:600}.error-note[_ngcontent-%COMP%]{margin:0;color:#b42318;font-weight:600}.setup-note[_ngcontent-%COMP%]{margin:1rem 0 0;color:var(--muted);font-size:.92rem;line-height:1.6}"]})};var Yi=class t{education;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-education"]],inputs:{education:"education"},decls:20,vars:5,consts:[[1,"section"],[1,"container"],[1,"section-header","fade-up"],[1,"section-title"],[1,"section-copy"],[1,"education-card","mx-auto"],[1,"education-meta"]],template:function(e,n){e&1&&(h(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),v(4,"Education"),f(),h(5,"p",4),v(6,"Academic foundation that supports my frontend learning journey."),f()(),h(7,"mat-card",5)(8,"mat-card-content")(9,"h3"),v(10),f(),h(11,"p"),v(12),f(),h(13,"p"),v(14),f(),h(15,"div",6)(16,"span"),v(17),f(),h(18,"span"),v(19),f()()()()()()),e&2&&(b(10),z(n.education.degree),b(2),z(n.education.college),b(2),z(n.education.university),b(3),z(n.education.year),b(2),z(n.education.score))},dependencies:[Je,Ke,Xe],styles:[".education-card[_ngcontent-%COMP%]{max-width:42rem}.education-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:2rem!important;text-align:center}h3[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:1.45rem}p[_ngcontent-%COMP%]{margin:.3rem 0;color:var(--muted)}.education-meta[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:.85rem;margin-top:1.25rem;font-weight:700;color:var(--primary-deep)}"]})};function Ip(t,r){if(t&1&&(h(0,"li")(1,"mat-icon"),v(2,"check_circle"),f(),h(3,"span"),v(4),f()()),t&2){let e=r.$implicit;b(4),z(e)}}var Ki=class t{experience;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-experience"]],inputs:{experience:"experience"},decls:20,vars:3,consts:[[1,"section"],[1,"container"],[1,"section-header","fade-up"],[1,"section-title"],[1,"section-copy"],[1,"experience-card","mx-auto"],[1,"experience-heading"],[1,"duration"]],template:function(e,n){e&1&&(h(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),v(4,"Experience"),f(),h(5,"p",4),v(6,"Hands-on frontend experience from internship work and delivery."),f()(),h(7,"mat-card",5)(8,"mat-card-content")(9,"div",6)(10,"div")(11,"h3"),v(12),f(),h(13,"p"),v(14),f()(),h(15,"span",7),v(16),f()(),h(17,"ul"),je(18,Ip,5,1,"li",null,Rr),f()()()()()),e&2&&(b(12),z(n.experience.title),b(2),z(n.experience.company),b(2),z(n.experience.duration),b(2),Be(n.experience.highlights))},dependencies:[te,Je,Ke,Xe,Le,vt],styles:[".experience-card[_ngcontent-%COMP%]{max-width:52rem}.experience-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:2rem!important}.experience-heading[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;margin-bottom:1.5rem}.experience-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .experience-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.experience-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--muted)}.duration[_ngcontent-%COMP%]{align-self:flex-start;padding:.5rem .85rem;border-radius:999px;background:#2563eb14;color:var(--primary-deep);font-weight:700}ul[_ngcontent-%COMP%]{display:grid;gap:1rem;margin:0;padding:0;list-style:none}li[_ngcontent-%COMP%]{display:flex;gap:.8rem;align-items:flex-start}mat-icon[_ngcontent-%COMP%]{flex:0 0 24px;width:24px;min-width:24px;margin-top:.1rem;color:var(--primary)}li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0}@media(max-width:575.98px){.experience-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1.35rem!important}li[_ngcontent-%COMP%]{gap:.65rem}}"]})};var Xi=class t{viewProjects=new X;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-hero"]],outputs:{viewProjects:"viewProjects"},decls:21,vars:0,consts:[[1,"section","hero-section"],[1,"container"],[1,"row","align-items-center","g-5"],[1,"col-lg-7"],[1,"hero-copy","fade-up"],[1,"eyebrow"],[1,"lead"],[1,"hero-actions","fade-up-delay"],["mat-flat-button","","color","primary","type","button",1,"pill-button",3,"click"],["mat-stroked-button","","href","assets/resume.pdf","download","Shubham-Ashok-Vitukade-Resume.pdf",1,"pill-button"],[1,"col-lg-5"],[1,"hero-visual","glass-card","fade-up-delay"],["src","assets/images/profile-photo.webp","alt","Profile photo of Shubham Ashok Vitukade",1,"profile-image"]],template:function(e,n){e&1&&(h(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"p",5),v(6,"Available for frontend opportunities"),f(),h(7,"h1"),v(8,"Shubham Ashok Vitukade"),f(),h(9,"h2"),v(10,"Frontend Developer"),f(),h(11,"p",6),v(12," Enthusiastic B.Sc. Computer Science graduate building responsive, user-friendly web applications using HTML, CSS, AngularJS, and modern frontend tools. "),f(),h(13,"div",7)(14,"button",8),W("click",function(){return n.viewProjects.emit()}),v(15," View Projects "),f(),h(16,"a",9),v(17," Download Resume "),f()()()(),h(18,"div",10)(19,"div",11),Q(20,"img",12),f()()()()())},dependencies:[te,Ze,dn,Le],styles:[".hero-section[_ngcontent-%COMP%]{padding-top:var(--nav-offset);min-height:100vh;display:flex;align-items:center}.eyebrow[_ngcontent-%COMP%]{margin:0 0 1rem;color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-size:.82rem}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:clamp(2.8rem,7vw,5rem);line-height:.98;letter-spacing:-.05em}.hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:1rem 0;color:var(--muted);font-size:clamp(1.2rem,3vw,1.7rem);font-weight:600}.lead[_ngcontent-%COMP%]{max-width:38rem;margin:0;color:var(--muted);font-size:1.1rem}.hero-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem}.hero-visual[_ngcontent-%COMP%]{padding:1.5rem}.profile-image[_ngcontent-%COMP%]{width:min(100%,24rem);aspect-ratio:1;margin:0 auto;border-radius:50%;object-fit:cover;object-position:center 18%}@media(max-width:991.98px){.hero-section[_ngcontent-%COMP%]{min-height:auto}}"]})};var Rp=(t,r)=>r.id;function Tp(t,r){if(t&1){let e=Tr();ie(0,"li",9)(1,"button",10),Fr("click",function(){let i=yr(e).$implicit,o=se();return _r(o.goToSection(i.id))}),v(2),ae()()}if(t&2){let e=r.$implicit;b(2),Pr(" ",e.label," ")}}var Ji=class t{links=[];navigateTo=new X;isMenuOpen=V(!1);isScrolled=V(!1);onWindowScroll(){this.isScrolled.set(window.scrollY>12)}toggleMenu(){this.isMenuOpen.update(r=>!r)}goToSection(r){this.isMenuOpen.set(!1),requestAnimationFrame(()=>{this.navigateTo.emit(r)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-navbar"]],hostBindings:function(e,n){e&1&&W("scroll",function(){return n.onWindowScroll()},xr)},inputs:{links:"links"},outputs:{navigateTo:"navigateTo"},decls:16,vars:5,consts:[[1,"navbar","navbar-expand-lg","sticky-top","portfolio-navbar"],[1,"container","py-2"],["type","button",1,"brand-button",3,"click"],[1,"brand-mark"],[1,"brand-copy"],["type","button","aria-label","Toggle navigation",1,"navbar-toggler","border-0","shadow-none",3,"click"],[1,"navbar-toggler-icon"],[1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","align-items-lg-center","gap-lg-2"],[1,"nav-item"],["type","button",1,"nav-link",3,"click"]],template:function(e,n){e&1&&(ie(0,"nav",0)(1,"div",1)(2,"button",2),Fr("click",function(){return n.goToSection("home")}),ie(3,"span",3),v(4,"S"),ae(),ie(5,"span",4)(6,"strong"),v(7,"Shubham Ashok Vitukade"),ae(),ie(8,"small"),v(9,"Frontend Developer"),ae()()(),ie(10,"button",5),Fr("click",function(){return n.toggleMenu()}),Ee(11,"span",6),ae(),ie(12,"div",7)(13,"ul",8),je(14,Tp,3,1,"li",9,Rp),ae()()()()),e&2&&(N("scrolled",n.isScrolled()),b(10),we("aria-expanded",n.isMenuOpen()),b(2),N("show",n.isMenuOpen()),b(2),Be(n.links))},dependencies:[te],styles:[".portfolio-navbar[_ngcontent-%COMP%]{background:#f8fbffd1;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-bottom:1px solid transparent;transition:background .25s ease,border-color .25s ease,box-shadow .25s ease}.portfolio-navbar.scrolled[_ngcontent-%COMP%]{border-color:var(--line);box-shadow:0 18px 40px #1720330f}.brand-button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.9rem;min-width:0;padding:0;border:0;background:transparent;color:var(--text)}.brand-mark[_ngcontent-%COMP%]{display:grid;width:2.8rem;height:2.8rem;place-items:center;border-radius:50%;background:linear-gradient(135deg,var(--primary),#60a5fa);color:#fff;font-weight:800}.brand-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;min-width:0;line-height:1.1}.brand-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{white-space:nowrap}.brand-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--muted)}.nav-link[_ngcontent-%COMP%]{border:0;background:transparent;color:var(--muted);font-weight:600}.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus-visible{color:var(--primary)}@media(max-width:991.98px){.portfolio-navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.75rem}.brand-button[_ngcontent-%COMP%]{flex:1 1 auto;max-width:calc(100% - 4.5rem)}.brand-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1rem}.brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.95rem}.navbar-toggler[_ngcontent-%COMP%]{flex:0 0 auto;margin-left:auto;padding:.35rem .5rem}.navbar-collapse[_ngcontent-%COMP%]{flex-basis:100%;margin-top:1rem;padding:1rem;border:1px solid var(--line);border-radius:1.25rem;background:#fffffff5}}@media(max-width:575.98px){.brand-button[_ngcontent-%COMP%]{align-items:flex-start;max-width:calc(100% - 3.75rem)}.brand-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{white-space:normal}.brand-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.15}.brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.88rem}}"]})};var Fp=(t,r)=>r.title;function Op(t,r){if(t&1&&(h(0,"span",10),v(1),f()),t&2){let e=r.$implicit;b(),z(e)}}function Pp(t,r){if(t&1&&(h(0,"mat-card-actions")(1,"a",11),v(2," Live Demo "),f()()),t&2){let e=se().$implicit;b(),J("href",e.liveUrl,wn)}}function Np(t,r){if(t&1&&(h(0,"div",6)(1,"mat-card",7),Q(2,"img",8),h(3,"mat-card-content")(4,"h3"),v(5),f(),h(6,"p"),v(7),f(),h(8,"div",9),je(9,Op,2,1,"span",10,Rr),f()(),j(11,Pp,3,1,"mat-card-actions"),f()()),t&2){let e=r.$implicit;b(2),J("src",e.image,wn)("alt",e.title),b(3),z(e.title),b(2),z(e.description),b(2),Be(e.features),b(2),B(e.liveUrl?11:-1)}}var Qi=class t{projects=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-projects"]],inputs:{projects:"projects"},decls:10,vars:0,consts:[[1,"section"],[1,"container"],[1,"section-header","fade-up"],[1,"section-title"],[1,"section-copy"],[1,"row","g-4"],[1,"col-lg-6"],[1,"project-card","h-100"],["mat-card-image","",3,"src","alt"],[1,"chip-list"],[1,"chip"],["mat-flat-button","","color","primary","target","_blank","rel","noreferrer",3,"href"]],template:function(e,n){e&1&&(h(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),v(4,"Projects"),f(),h(5,"p",4),v(6," A featured project that reflects my focus on clean design and responsive development. "),f()(),h(7,"div",5),je(8,Np,12,5,"div",6,Fp),f()()()),e&2&&(b(8),Be(n.projects))},dependencies:[te,Ze,dn,Je,Ke,ed,Xe,td,Le],styles:[".project-card[_ngcontent-%COMP%]{overflow:hidden;transition:transform .25s ease,box-shadow .25s ease}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-6px)}img[mat-card-image][_ngcontent-%COMP%]{aspect-ratio:16/10;object-fit:cover}mat-card-content[_ngcontent-%COMP%]{padding:1.75rem!important}mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .75rem;font-size:1.3rem;font-weight:700}mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 1.25rem;color:var(--muted)}mat-card-actions[_ngcontent-%COMP%]{display:flex;gap:.75rem;padding:0 1.75rem 1.75rem!important}"]})};var kp=(t,r)=>r.name;function Lp(t,r){if(t&1&&(h(0,"div",6)(1,"mat-card",7)(2,"mat-card-content")(3,"mat-icon"),v(4),f(),h(5,"h3"),v(6),f()()()()),t&2){let e=r.$implicit;b(4),z(e.icon),b(2),z(e.name)}}var eo=class t{skills=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-skills"]],inputs:{skills:"skills"},decls:10,vars:0,consts:[[1,"section"],[1,"container"],[1,"section-header","fade-up"],[1,"section-title"],[1,"section-copy"],[1,"row","g-4"],[1,"col-sm-6","col-lg-4"],[1,"skill-card","h-100"]],template:function(e,n){e&1&&(h(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),v(4,"Skills"),f(),h(5,"p",4),v(6,"Tools and technologies I use to build clean user interfaces."),f()(),h(7,"div",5),je(8,Lp,7,2,"div",6,kp),f()()()),e&2&&(b(8),Be(n.skills))},dependencies:[te,Je,Ke,Xe,Le,vt],styles:[".skill-card[_ngcontent-%COMP%]{height:100%;transition:transform .25s ease,box-shadow .25s ease}.skill-card[_ngcontent-%COMP%]:hover{transform:translateY(-6px) scale(1.01)}.skill-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;padding:1.6rem!important}.skill-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:2.8rem;height:2.8rem;font-size:2.8rem;color:var(--primary)}.skill-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.05rem;font-weight:700}"]})};function jp(t,r){if(t&1){let e=Tr();h(0,"button",1),W("click",function(){yr(e);let i=se();return _r(i.scrollToTop())}),h(1,"mat-icon"),v(2,"arrow_upward"),f()()}}var to=class t{isVisible=V(!1);onWindowScroll(){this.isVisible.set(window.scrollY>500)}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-scroll-top"]],hostBindings:function(e,n){e&1&&W("scroll",function(){return n.onWindowScroll()},xr)},decls:1,vars:1,consts:[["mat-fab","","color","primary","type","button","aria-label","Scroll to top",1,"scroll-top-button"],["mat-fab","","color","primary","type","button","aria-label","Scroll to top",1,"scroll-top-button",3,"click"]],template:function(e,n){e&1&&j(0,jp,3,0,"button",0),e&2&&B(n.isVisible()?0:-1)},dependencies:[te,Ze,wc,Le,vt],styles:[".scroll-top-button[_ngcontent-%COMP%]{position:fixed;right:1.5rem;bottom:1.5rem;z-index:1050}"]})};var jd=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],Bd=[{name:"AngularJS",icon:"code"},{name:"HTML",icon:"language"},{name:"CSS",icon:"palette"},{name:"JavaScript",icon:"integration_instructions"},{name:"Responsive UI Design",icon:"devices"},{name:"Single Page Applications",icon:"web"}],Vd={title:"Software Developer Intern",company:"Chordz Technologies Pvt. Ltd.",duration:"10 Nov 2025 - Current",highlights:["Developed and maintained frontend components using HTML, CSS, and AngularJS.","Designed responsive web pages for cross-device compatibility.","Collaborated with senior developers to fix UI issues and improve performance.","Gained hands-on experience with real-world development workflows."]},Ud=[{title:"Taste Master Cafe - Restaurant Website",description:"Designed and developed a responsive restaurant website showcasing menu and services with a clean UI and smooth navigation.",features:["HTML, CSS, AngularJS","Clean UI layouts","Mobile-friendly cross-browser compatibility"],image:"/assets/images/project-restaurant.PNG",liveUrl:"https://taste-master-cafe.netlify.app/"},{title:"TaskMinder - Task Management App",description:"A personal task management web application for adding tasks, tracking deadlines, updating status, and managing daily priorities in one workspace.",features:["Python Django","SQLite3 database","Task status and deadline tracking"],image:"/assets/images/project-taskminder.PNG"}],zd={degree:"B.Sc. Computer Science",college:"S.M. Joshi College, Hadapsar",university:"Savitribai Phule Pune University",year:"2024",score:"CGPA: 7.51 (Grade A)"},Hd=[{label:"LinkedIn",href:"https://www.linkedin.com/in/shubham-vitukade"}];var no=class t{navLinks=jd;skills=Bd;experience=Vd;projects=Ud;education=zd;socialLinks=Hd;document=c(A);viewportScroller=c(Ns);constructor(){this.viewportScroller.setOffset(()=>{let e=this.document.querySelector(".portfolio-navbar")?.offsetHeight??80,n=window.innerWidth<=768?0:-20;return[0,e+n]})}scrollToSection(r){this.viewportScroller.scrollToAnchor(r)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-home-page"]],decls:11,vars:6,consts:[[1,"page-shell"],[3,"navigateTo","links"],["id","home",3,"viewProjects"],["id","about"],["id","skills",3,"skills"],["id","experience",3,"experience"],["id","projects",3,"projects"],["id","education",3,"education"],["id","contact",3,"socialLinks"]],template:function(e,n){e&1&&(h(0,"div",0)(1,"app-navbar",1),W("navigateTo",function(o){return n.scrollToSection(o)}),f(),h(2,"main")(3,"app-hero",2),W("viewProjects",function(){return n.scrollToSection("projects")}),f(),Q(4,"app-about",3)(5,"app-skills",4)(6,"app-experience",5)(7,"app-projects",6)(8,"app-education",7)(9,"app-contact",8),f(),Q(10,"app-scroll-top"),f()),e&2&&(b(),J("links",n.navLinks),b(4),J("skills",n.skills),b(),J("experience",n.experience),b(),J("projects",n.projects),b(),J("education",n.education),b(),J("socialLinks",n.socialLinks))},dependencies:[te,Ze,Ji,Xi,wi,eo,Ki,Qi,Yi,Zi,to],styles:["[_nghost-%COMP%]{display:block}"]})};var $d=[{path:"",component:no}];var Gd={providers:[ns(),el(),oa($d)]};var ro=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&Q(0,"router-outlet")},dependencies:[Kn],encapsulation:2})};xo(ro,Gd).catch(t=>console.error(t));
