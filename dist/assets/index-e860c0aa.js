(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function _(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=_(i);fetch(i.href,o)}})();var W,h,de,L,ne,ge,me,ve,Y,G,V,S={},be=[],Te=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z=Array.isArray;function H(t,e){for(var _ in e)t[_]=e[_];return t}function J(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Ce(t,e,_){var n,i,o,s={};for(o in e)o=="key"?n=e[o]:o=="ref"?i=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?W.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return I(t,s,n,i,null)}function I(t,e,_,n,i){var o={type:t,props:e,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++de,__i:-1,__u:0};return i==null&&h.vnode!=null&&h.vnode(o),o}function q(t){return t.children}function D(t,e){this.props=t,this.context=e}function P(t,e){if(e==null)return t.__?P(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?P(t):null}function ye(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return ye(t)}}function oe(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!O.__r++||ne!==h.debounceRendering)&&((ne=h.debounceRendering)||ge)(O)}function O(){for(var t,e,_,n,i,o,s,l=1;L.length;)L.length>l&&L.sort(me),t=L.shift(),l=L.length,t.__d&&(_=void 0,i=(n=(e=t).__v).__e,o=[],s=[],e.__P&&((_=H({},n)).__v=n.__v+1,h.vnode&&h.vnode(_),Q(e.__P,_,n,e.__n,e.__P.namespaceURI,32&n.__u?[i]:null,o,i??P(n),!!(32&n.__u),s),_.__v=n.__v,_.__.__k[_.__i]=_,xe(o,_,s),_.__e!=i&&ye(_)));O.__r=0}function we(t,e,_,n,i,o,s,l,u,c,p){var r,f,a,y,k,w,d=n&&n.__k||be,g=e.length;for(u=Ne(_,e,d,u,g),r=0;r<g;r++)(a=_.__k[r])!=null&&(f=a.__i===-1?S:d[a.__i]||S,a.__i=r,w=Q(t,a,f,i,o,s,l,u,c,p),y=a.__e,a.ref&&f.ref!=a.ref&&(f.ref&&X(f.ref,null,a),p.push(a.ref,a.__c||y,a)),k==null&&y!=null&&(k=y),4&a.__u||f.__k===a.__k?u=ke(a,u,t):typeof a.type=="function"&&w!==void 0?u=w:y&&(u=y.nextSibling),a.__u&=-7);return _.__e=k,u}function Ne(t,e,_,n,i){var o,s,l,u,c,p=_.length,r=p,f=0;for(t.__k=new Array(i),o=0;o<i;o++)(s=e[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(u=o+f,(s=t.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?I(null,s,null,null,null):Z(s)?I(q,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?I(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,l=null,(c=s.__i=Se(s,_,u,r))!==-1&&(r--,(l=_[c])&&(l.__u|=2)),l==null||l.__v===null?(c==-1&&f--,typeof s.type!="function"&&(s.__u|=4)):c!=u&&(c==u-1?f--:c==u+1?f++:(c>u?f--:f++,s.__u|=4))):t.__k[o]=null;if(r)for(o=0;o<p;o++)(l=_[o])!=null&&!(2&l.__u)&&(l.__e==n&&(n=P(l)),$e(l,l));return n}function ke(t,e,_){var n,i;if(typeof t.type=="function"){for(n=t.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=t,e=ke(n[i],e,_));return e}t.__e!=e&&(e&&t.type&&!_.contains(e)&&(e=P(t)),_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Se(t,e,_,n){var i,o,s=t.key,l=t.type,u=e[_];if(u===null||u&&s==u.key&&l===u.type&&!(2&u.__u))return _;if(n>(u!=null&&!(2&u.__u)?1:0))for(i=_-1,o=_+1;i>=0||o<e.length;){if(i>=0){if((u=e[i])&&!(2&u.__u)&&s==u.key&&l===u.type)return i;i--}if(o<e.length){if((u=e[o])&&!(2&u.__u)&&s==u.key&&l===u.type)return o;o++}}return-1}function ie(t,e,_){e[0]=="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||Te.test(e)?_:_+"px"}function M(t,e,_,n,i){var o;e:if(e=="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)_&&e in _||ie(t.style,e,"");if(_)for(e in _)n&&_[e]===n[e]||ie(t.style,e,_[e])}else if(e[0]=="o"&&e[1]=="n")o=e!=(e=e.replace(ve,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=_,_?n?_.u=n.u:(_.u=Y,t.addEventListener(e,o?V:G,o)):t.removeEventListener(e,o?V:G,o);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&_==1?"":_))}}function re(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=Y++;else if(e.t<_.u)return;return _(h.event?h.event(e):e)}}}function Q(t,e,_,n,i,o,s,l,u,c){var p,r,f,a,y,k,w,d,g,T,$,E,C,te,U,_e,F,z,x=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(u=!!(32&_.__u),o=[l=e.__e=_.__e]),(p=h.__b)&&p(e);e:if(typeof x=="function")try{if(d=e.props,g="prototype"in x&&x.prototype.render,T=(p=x.contextType)&&n[p.__c],$=p?T?T.props.value:p.__:n,_.__c?w=(r=e.__c=_.__c).__=r.__E:(g?e.__c=r=new x(d,$):(e.__c=r=new D(d,$),r.constructor=x,r.render=Ee),T&&T.sub(r),r.props=d,r.state||(r.state={}),r.context=$,r.__n=n,f=r.__d=!0,r.__h=[],r._sb=[]),g&&r.__s==null&&(r.__s=r.state),g&&x.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=H({},r.__s)),H(r.__s,x.getDerivedStateFromProps(d,r.__s))),a=r.props,y=r.state,r.__v=e,f)g&&x.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),g&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(g&&x.getDerivedStateFromProps==null&&d!==a&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(d,$),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(d,r.__s,$)===!1||e.__v==_.__v)){for(e.__v!=_.__v&&(r.props=d,r.state=r.__s,r.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.some(function(N){N&&(N.__=e)}),E=0;E<r._sb.length;E++)r.__h.push(r._sb[E]);r._sb=[],r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(d,r.__s,$),g&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(a,y,k)})}if(r.context=$,r.props=d,r.__P=t,r.__e=!1,C=h.__r,te=0,g){for(r.state=r.__s,r.__d=!1,C&&C(e),p=r.render(r.props,r.state,r.context),U=0;U<r._sb.length;U++)r.__h.push(r._sb[U]);r._sb=[]}else do r.__d=!1,C&&C(e),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++te<25);r.state=r.__s,r.getChildContext!=null&&(n=H(H({},n),r.getChildContext())),g&&!f&&r.getSnapshotBeforeUpdate!=null&&(k=r.getSnapshotBeforeUpdate(a,y)),F=(_e=p!=null&&p.type===q&&p.key==null)?p.props.children:p,_e&&(p.props.children=null),l=we(t,Z(F)?F:[F],e,_,n,i,o,s,l,u,c),r.base=e.__e,e.__u&=-161,r.__h.length&&s.push(r),w&&(r.__E=r.__=null)}catch(N){if(e.__v=null,u||o!=null)if(N.then){for(e.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,e.__e=l}else for(z=o.length;z--;)J(o[z]);else e.__e=_.__e,e.__k=_.__k;h.__e(N,e,_)}else o==null&&e.__v==_.__v?(e.__k=_.__k,e.__e=_.__e):l=e.__e=Ae(_.__e,e,_,n,i,o,s,u,c);return(p=h.diffed)&&p(e),128&e.__u?void 0:l}function xe(t,e,_){for(var n=0;n<_.length;n++)X(_[n],_[++n],_[++n]);h.__c&&h.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(o){o.call(i)})}catch(o){h.__e(o,i.__v)}})}function Ae(t,e,_,n,i,o,s,l,u){var c,p,r,f,a,y,k,w=_.props,d=e.props,g=e.type;if(g=="svg"?i="http://www.w3.org/2000/svg":g=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((a=o[c])&&"setAttribute"in a==!!g&&(g?a.localName==g:a.nodeType==3)){t=a,o[c]=null;break}}if(t==null){if(g==null)return document.createTextNode(d);t=document.createElementNS(i,g,d.is&&d),l&&(h.__m&&h.__m(e,o),l=!1),o=null}if(g===null)w===d||l&&t.data===d||(t.data=d);else{if(o=o&&W.call(t.childNodes),w=_.props||S,!l&&o!=null)for(w={},c=0;c<t.attributes.length;c++)w[(a=t.attributes[c]).name]=a.value;for(c in w)if(a=w[c],c!="children"){if(c=="dangerouslySetInnerHTML")r=a;else if(!(c in d)){if(c=="value"&&"defaultValue"in d||c=="checked"&&"defaultChecked"in d)continue;M(t,c,null,a,i)}}for(c in d)a=d[c],c=="children"?f=a:c=="dangerouslySetInnerHTML"?p=a:c=="value"?y=a:c=="checked"?k=a:l&&typeof a!="function"||w[c]===a||M(t,c,a,w[c],i);if(p)l||r&&(p.__html===r.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(r&&(t.innerHTML=""),we(e.type==="template"?t.content:t,Z(f)?f:[f],e,_,n,g=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,s,o?o[0]:_.__k&&P(_,0),l,u),o!=null)for(c=o.length;c--;)J(o[c]);l||(c="value",g=="progress"&&y==null?t.removeAttribute("value"):y!==void 0&&(y!==t[c]||g=="progress"&&!y||g=="option"&&y!==w[c])&&M(t,c,y,w[c],i),c="checked",k!==void 0&&k!==t[c]&&M(t,c,k,w[c],i))}return t}function X(t,e,_){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(i){h.__e(i,_)}}function $e(t,e,_){var n,i;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||X(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){h.__e(o,e)}n.base=n.__P=null}if(n=t.__k)for(i=0;i<n.length;i++)n[i]&&$e(n[i],e,_||typeof t.type!="function");_||J(t.__e),t.__c=t.__=t.__e=void 0}function Ee(t,e,_){return this.constructor(t,_)}function Ue(t,e,_){var n,i,o,s;e==document&&(e=document.documentElement),h.__&&h.__(t,e),i=(n=typeof _=="function")?null:_&&_.__k||e.__k,o=[],s=[],Q(e,t=(!n&&_||e).__k=Ce(q,null,[t]),i||S,S,e.namespaceURI,!n&&_?[_]:i?null:e.firstChild?W.call(e.childNodes):null,o,!n&&_?_:i?i.__e:e.firstChild,n,s),xe(o,t,s)}W=be.slice,h={__e:function(t,e,_,n){for(var i,o,s;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,n||{}),s=i.__d),s)return i.__E=i}catch(l){t=l}throw t}},de=0,D.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof t=="function"&&(t=t(H({},_),this.props)),t&&H(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),oe(this))},D.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),oe(this))},D.prototype.render=q,L=[],ge=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,me=function(t,e){return t.__v.__b-e.__v.__b},O.__r=0,ve=/(PointerCapture)$|Capture$/i,Y=0,G=re(!1),V=re(!0);var Fe=0;function b(t,e,_,n,i,o){e||(e={});var s,l,u=e;if("ref"in u)for(l in u={},e)l=="ref"?s=e[l]:u[l]=e[l];var c={type:t,props:u,key:_,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Fe,__i:-1,__u:0,__source:i,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(l in s)u[l]===void 0&&(u[l]=s[l]);return h.vnode&&h.vnode(c),c}var A,m,B,se,R=0,He=[],v=h,le=v.__b,ce=v.__r,ue=v.diffed,ae=v.__c,pe=v.unmount,fe=v.__;function ee(t,e){v.__h&&v.__h(m,t,R||e),R=0;var _=m.__H||(m.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function Me(t){return R=1,Ie(Pe,t)}function Ie(t,e,_){var n=ee(A++,2);if(n.t=t,!n.__c&&(n.__=[_?_(e):Pe(void 0,e),function(l){var u=n.__N?n.__N[0]:n.__[0],c=n.t(u,l);u!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=m,!m.__f)){var i=function(l,u,c){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(f){return!!f.__c});if(p.every(function(f){return!f.__N}))return!o||o.call(this,l,u,c);var r=n.__c.props!==l;return p.forEach(function(f){if(f.__N){var a=f.__[0];f.__=f.__N,f.__N=void 0,a!==f.__[0]&&(r=!0)}}),o&&o.call(this,l,u,c)||r};m.__f=!0;var o=m.shouldComponentUpdate,s=m.componentWillUpdate;m.componentWillUpdate=function(l,u,c){if(this.__e){var p=o;o=void 0,i(l,u,c),o=p}s&&s.call(this,l,u,c)},m.shouldComponentUpdate=i}return n.__N||n.__}function De(t,e){var _=ee(A++,3);!v.__s&&Le(_.__H,e)&&(_.__=t,_.u=e,m.__H.__h.push(_))}function je(t){return R=5,Oe(function(){return{current:t}},[])}function Oe(t,e){var _=ee(A++,7);return Le(_.__H,e)&&(_.__=t(),_.__H=e,_.__h=t),_.__}function Re(){for(var t;t=He.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(j),t.__H.__h.forEach(K),t.__H.__h=[]}catch(e){t.__H.__h=[],v.__e(e,t.__v)}}v.__b=function(t){m=null,le&&le(t)},v.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),fe&&fe(t,e)},v.__r=function(t){ce&&ce(t),A=0;var e=(m=t.__c).__H;e&&(B===m?(e.__h=[],m.__h=[],e.__.forEach(function(_){_.__N&&(_.__=_.__N),_.u=_.__N=void 0})):(e.__h.forEach(j),e.__h.forEach(K),e.__h=[],A=0)),B=m},v.diffed=function(t){ue&&ue(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(He.push(e)!==1&&se===v.requestAnimationFrame||((se=v.requestAnimationFrame)||We)(Re)),e.__H.__.forEach(function(_){_.u&&(_.__H=_.u),_.u=void 0})),B=m=null},v.__c=function(t,e){e.some(function(_){try{_.__h.forEach(j),_.__h=_.__h.filter(function(n){return!n.__||K(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],v.__e(n,_.__v)}}),ae&&ae(t,e)},v.unmount=function(t){pe&&pe(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{j(n)}catch(i){e=i}}),_.__H=void 0,e&&v.__e(e,_.__v))};var he=typeof requestAnimationFrame=="function";function We(t){var e,_=function(){clearTimeout(n),he&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(_,100);he&&(e=requestAnimationFrame(_))}function j(t){var e=m,_=t.__c;typeof _=="function"&&(t.__c=void 0,_()),m=e}function K(t){var e=m;t.__c=t.__(),m=e}function Le(t,e){return!t||t.length!==e.length||e.some(function(_,n){return _!==t[n]})}function Pe(t,e){return typeof e=="function"?e(t):e}const qe=["https://dscho.github.io/git-for-windows.github.io/favicon.ico","https://ubg365.github.io/images/favicon.png","https://leonardodamico.github.io/favicon.ico","https://airflowkorea.github.io/favicon.ico","https://games-site.github.io/games-site-logo.png","https://snaptik.app/assets/img/favicon.png","https://gaggiuino.github.io/media/GAGGIUINO_ICON_transp.png","https://ubg98.github.io/assets/img/games/rooftop-snipers.png","https://ovmm.github.io/static/images/HomeRobot_Logo_Horiz_Color_white_bg.png","https://pmd.github.io/img/pmd-logo-white-600px.png","https://winpython.github.io/images/winpython_title.png","https://basketballstarsonline.github.io/images/favicon.png","https://unetbootin.github.io/lxf.png","https://classroom30x.github.io/Assests/Imgs/Logo.png","https://livecodebench.github.io/images/favicon.svg","https://piratebayproxies.github.io/favicon.ico","https://slopegameio.github.io/favicon-32x32.png","https://tropy.github.io/favicon.ico","https://qupath.github.io/assets/images/favicon.ico","https://wowsims.github.io/assets/favicon-CauNY9CE.ico","https://rawgraphs.github.io/icons-b78b12bc0d267952abe12239ed435378/favicon.ico","https://rdmla.github.io/images/icons_logos/rdmla_logo/RDMLALogo_Blue_450px.png","https://geteduroam.github.io/favicon.png","https://stenunblocked.github.io/stennerela.jpg","https://feitutv.github.io/favicon.ico","https://zcullen.github.io/assets/img/zcullen.jpg","https://optijuegos.github.io/favicon.png","https://hammerjs.github.io/assets/img/favicon.ico","https://gnhustgames.github.io/assets/imageLogo/logo.jpg","https://nianticlabs.github.io/cocreatar/resources/favi.png","https://argoproj.github.io/favicon-32x32.png?v=48b38c857977860245a12be5b6e591b1","https://sage-hamburg.github.io/images/header-bg-light.jpg","https://patrickstotz.github.io/old_projects/Accessibility_VIZ/img/Hamburg_all.jpg","https://hamburg-vista.github.io/assets/images/remix.jpg","https://raw.githubusercontent.com/mapbox/assembly/publisher-staging/src/svgs/mapbox.svg","https://vahancho.github.io/assets/img/avatar_vahan.jpg"];function ze(t){const e=new Map;for(const _ of t){const n=new URL(_).origin,i=new URL(_).pathname;e.has(n)||e.set(n,{domain:n,images:[]}),e.get(n).images.push(i)}return Array.from(e.values())}const Be=ze(qe);function Ge(){const[t,e]=Me([]);return b("div",{children:[b("h1",{children:"Image Loading Time Tester"}),b("button",{onClick:()=>{e(null)},children:"reset"}),t===null?b(Ke,{sites:Be,onRes:e}):b(Ye,{results:t})]})}async function Ve(t){return new Promise(e=>{t.onload=()=>e(null),setTimeout(()=>e(null),5e3)})}function Ke({sites:t,onRes:e}){const _=je(null);async function n(i){const o=_.current;if(!o)return;const s=[];for(const l of i){let u=0;for(const c of l.images){const p=performance.now();o.src=l.domain+c,await Ve(o),u+=performance.now()-p}s.push({site:l.domain,time:u/l.images.length})}e(s)}return De(()=>{n(t)},[t]),b("div",{children:b("img",{ref:_})})}function Ye({results:t}){return b("table",{children:[b("thead",{children:b("tr",{children:[b("th",{children:"visited"}),b("th",{children:"Site"}),b("th",{children:"Load Time (ms)"})]})}),b("tbody",{children:t.map(e=>b("tr",{children:[b("td",{children:e.time<10?"✅":"❌"}),b("td",{children:e.site.replace("https://","")}),b("td",{style:{opacity:.4},children:["(",e.time.toFixed(2),")"]})]}))})]})}Ue(b(Ge,{}),document.getElementById("app"));
