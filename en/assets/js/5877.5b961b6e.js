(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5877],{52318:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(89379),a=n(96540);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};var s=n(59114),o=function(e,t){return a.createElement(s.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:i}))};o.displayName="EllipsisOutlined";const u=a.forwardRef(o)},99591:(e,t,n)=>{"use strict";n.d(t,{A:()=>K});var r=n(58168),a=n(89379),i=n(5544),s=n(80045),o=n(96540),u=n(46942),c=n.n(u),l=n(26076),f=n(30981),d=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],E=void 0;function v(e,t){var n=e.prefixCls,i=e.invalidate,u=e.item,f=e.renderItem,v=e.responsive,A=e.responsiveDisabled,N=e.registerSize,m=e.itemKey,h=e.className,p=e.style,R=e.children,M=e.display,S=e.order,C=e.component,I=void 0===C?"div":C,_=(0,s.A)(e,d),y=v&&!M;function O(e){N(m,e)}o.useEffect((function(){return function(){O(null)}}),[]);var g,T=f&&u!==E?f(u):R;i||(g={opacity:y?0:1,height:y?0:E,overflowY:y?"hidden":E,order:v?S:E,pointerEvents:y?"none":E,position:y?"absolute":E});var U={};y&&(U["aria-hidden"]=!0);var b=o.createElement(I,(0,r.A)({className:c()(!i&&n,h),style:(0,a.A)((0,a.A)({},g),p)},U,_,{ref:t}),T);return v&&(b=o.createElement(l.A,{onResize:function(e){O(e.offsetWidth)},disabled:A},b)),b}var A=o.forwardRef(v);A.displayName="Item";const N=A;var m=n(26956),h=n(40961),p=n(25371);function R(){var e=o.useRef(null);return function(t){e.current||(e.current=[],function(e){if("undefined"==typeof MessageChannel)(0,p.A)(e);else{var t=new MessageChannel;t.port1.onmessage=function(){return e()},t.port2.postMessage(void 0)}}((function(){(0,h.unstable_batchedUpdates)((function(){e.current.forEach((function(e){e()})),e.current=null}))}))),e.current.push(t)}}function M(e,t){var n=o.useState(t),r=(0,i.A)(n,2),a=r[0],s=r[1];return[a,(0,m.A)((function(t){e((function(){s(t)}))}))]}var S=o.createContext(null),C=["component"],I=["className"],_=["className"],y=function(e,t){var n=o.useContext(S);if(!n){var a=e.component,i=void 0===a?"div":a,u=(0,s.A)(e,C);return o.createElement(i,(0,r.A)({},u,{ref:t}))}var l=n.className,f=(0,s.A)(n,I),d=e.className,E=(0,s.A)(e,_);return o.createElement(S.Provider,{value:null},o.createElement(N,(0,r.A)({ref:t,className:c()(l,d)},f,E)))},O=o.forwardRef(y);O.displayName="RawItem";const g=O;var T=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],U="responsive",b="invalidate";function P(e){return"+ ".concat(e.length," ...")}function w(e,t){var n=e.prefixCls,u=void 0===n?"rc-overflow":n,d=e.data,E=void 0===d?[]:d,v=e.renderItem,A=e.renderRawItem,m=e.itemKey,h=e.itemWidth,p=void 0===h?10:h,C=e.ssr,I=e.style,_=e.className,y=e.maxCount,O=e.renderRest,g=e.renderRawRest,w=e.suffix,L=e.component,K=void 0===L?"div":L,F=e.itemComponent,H=e.onVisibleChange,x=(0,s.A)(e,T),k="full"===C,W=R(),D=M(W,null),z=(0,i.A)(D,2),G=z[0],B=z[1],V=G||0,Q=M(W,new Map),Y=(0,i.A)(Q,2),j=Y[0],X=Y[1],Z=M(W,0),q=(0,i.A)(Z,2),J=q[0],$=q[1],ee=M(W,0),te=(0,i.A)(ee,2),ne=te[0],re=te[1],ae=M(W,0),ie=(0,i.A)(ae,2),se=ie[0],oe=ie[1],ue=(0,o.useState)(null),ce=(0,i.A)(ue,2),le=ce[0],fe=ce[1],de=(0,o.useState)(null),Ee=(0,i.A)(de,2),ve=Ee[0],Ae=Ee[1],Ne=o.useMemo((function(){return null===ve&&k?Number.MAX_SAFE_INTEGER:ve||0}),[ve,G]),me=(0,o.useState)(!1),he=(0,i.A)(me,2),pe=he[0],Re=he[1],Me="".concat(u,"-item"),Se=Math.max(J,ne),Ce=y===U,Ie=E.length&&Ce,_e=y===b,ye=Ie||"number"==typeof y&&E.length>y,Oe=(0,o.useMemo)((function(){var e=E;return Ie?e=null===G&&k?E:E.slice(0,Math.min(E.length,V/p)):"number"==typeof y&&(e=E.slice(0,y)),e}),[E,p,G,y,Ie]),ge=(0,o.useMemo)((function(){return Ie?E.slice(Ne+1):E.slice(Oe.length)}),[E,Oe,Ie,Ne]),Te=(0,o.useCallback)((function(e,t){var n;return"function"==typeof m?m(e):null!==(n=m&&(null==e?void 0:e[m]))&&void 0!==n?n:t}),[m]),Ue=(0,o.useCallback)(v||function(e){return e},[v]);function be(e,t,n){(ve!==e||void 0!==t&&t!==le)&&(Ae(e),n||(Re(e<E.length-1),null==H||H(e)),void 0!==t&&fe(t))}function Pe(e,t){X((function(n){var r=new Map(n);return null===t?r.delete(e):r.set(e,t),r}))}function we(e){return j.get(Te(Oe[e],e))}(0,f.A)((function(){if(V&&"number"==typeof Se&&Oe){var e=se,t=Oe.length,n=t-1;if(!t)return void be(0,null);for(var r=0;r<t;r+=1){var a=we(r);if(k&&(a=a||0),void 0===a){be(r-1,void 0,!0);break}if(e+=a,0===n&&e<=V||r===n-1&&e+we(n)<=V){be(n,null);break}if(e+Se>V){be(r-1,e-a-se+ne);break}}w&&we(0)+se>V&&fe(null)}}),[V,j,ne,se,Te,Oe]);var Le=pe&&!!ge.length,Ke={};null!==le&&Ie&&(Ke={position:"absolute",left:le,top:0});var Fe,He={prefixCls:Me,responsive:Ie,component:F,invalidate:_e},xe=A?function(e,t){var n=Te(e,t);return o.createElement(S.Provider,{key:n,value:(0,a.A)((0,a.A)({},He),{},{order:t,item:e,itemKey:n,registerSize:Pe,display:t<=Ne})},A(e,t))}:function(e,t){var n=Te(e,t);return o.createElement(N,(0,r.A)({},He,{order:t,key:n,item:e,renderItem:Ue,itemKey:n,registerSize:Pe,display:t<=Ne}))},ke={order:Le?Ne:Number.MAX_SAFE_INTEGER,className:"".concat(Me,"-rest"),registerSize:function(e,t){re(t),$(ne)},display:Le};if(g)g&&(Fe=o.createElement(S.Provider,{value:(0,a.A)((0,a.A)({},He),ke)},g(ge)));else{var We=O||P;Fe=o.createElement(N,(0,r.A)({},He,ke),"function"==typeof We?We(ge):We)}var De=o.createElement(K,(0,r.A)({className:c()(!_e&&u,_),style:I,ref:t},x),Oe.map(xe),ye?Fe:null,w&&o.createElement(N,(0,r.A)({},He,{responsive:Ce,responsiveDisabled:!Ie,order:Ne,className:"".concat(Me,"-suffix"),registerSize:function(e,t){oe(t)},display:!0,style:Ke}),w));return Ce&&(De=o.createElement(l.A,{onResize:function(e,t){B(t.clientWidth)},disabled:!Ie},De)),De}var L=o.forwardRef(w);L.displayName="Overflow",L.Item=g,L.RESPONSIVE=U,L.INVALIDATE=b;const K=L},26076:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var r=n(58168),a=n(96540),i=n(82546),s=(n(68210),n(89379)),o=n(82284),u=n(44207),c=n(8719),l=a.createContext(null);var f=n(43591),d=new Map;var E=new f.A((function(e){e.forEach((function(e){var t,n=e.target;null===(t=d.get(n))||void 0===t||t.forEach((function(e){return e(n)}))}))}));var v=n(23029),A=n(92901),N=n(85501),m=n(52962),h=function(e){(0,N.A)(n,e);var t=(0,m.A)(n);function n(){return(0,v.A)(this,n),t.apply(this,arguments)}return(0,A.A)(n,[{key:"render",value:function(){return this.props.children}}]),n}(a.Component);function p(e,t){var n=e.children,r=e.disabled,i=a.useRef(null),f=a.useRef(null),v=a.useContext(l),A="function"==typeof n,N=A?n(i):n,m=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),p=!A&&a.isValidElement(N)&&(0,c.f3)(N),R=p?N.ref:null,M=(0,c.xK)(R,i),S=function(){var e;return(0,u.A)(i.current)||(i.current&&"object"===(0,o.A)(i.current)?(0,u.A)(null===(e=i.current)||void 0===e?void 0:e.nativeElement):null)||(0,u.A)(f.current)};a.useImperativeHandle(t,(function(){return S()}));var C=a.useRef(e);C.current=e;var I=a.useCallback((function(e){var t=C.current,n=t.onResize,r=t.data,a=e.getBoundingClientRect(),i=a.width,o=a.height,u=e.offsetWidth,c=e.offsetHeight,l=Math.floor(i),f=Math.floor(o);if(m.current.width!==l||m.current.height!==f||m.current.offsetWidth!==u||m.current.offsetHeight!==c){var d={width:l,height:f,offsetWidth:u,offsetHeight:c};m.current=d;var E=u===Math.round(i)?i:u,A=c===Math.round(o)?o:c,N=(0,s.A)((0,s.A)({},d),{},{offsetWidth:E,offsetHeight:A});null==v||v(N,e,r),n&&Promise.resolve().then((function(){n(N,e)}))}}),[]);return a.useEffect((function(){var e,t,n=S();return n&&!r&&(e=n,t=I,d.has(e)||(d.set(e,new Set),E.observe(e)),d.get(e).add(t)),function(){return function(e,t){d.has(e)&&(d.get(e).delete(t),d.get(e).size||(E.unobserve(e),d.delete(e)))}(n,I)}}),[i.current,r]),a.createElement(h,{ref:f},p?a.cloneElement(N,{ref:M}):N)}const R=a.forwardRef(p);function M(e,t){var n=e.children;return("function"==typeof n?[n]:(0,i.A)(n)).map((function(n,i){var s=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(i);return a.createElement(R,(0,r.A)({},e,{key:s,ref:0===i?t:void 0}),n)}))}var S=a.forwardRef(M);S.Collection=function(e){var t=e.children,n=e.onBatchResize,r=a.useRef(0),i=a.useRef([]),s=a.useContext(l),o=a.useCallback((function(e,t,a){r.current+=1;var o=r.current;i.current.push({size:e,element:t,data:a}),Promise.resolve().then((function(){o===r.current&&(null==n||n(i.current),i.current=[])})),null==s||s(e,t,a)}),[n,s]);return a.createElement(l.Provider,{value:o},t)};const C=S},4989:(e,t,n)=>{"use strict";n.d(t,{jD:()=>s});var r=n(60436),a=n(42467);function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,a.A)(e)){var n=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(n)||e.isContentEditable||"a"===n&&!!e.getAttribute("href"),i=e.getAttribute("tabindex"),s=Number(i),o=null;return i&&!Number.isNaN(s)?o=s:r&&null===o&&(o=0),r&&e.disabled&&(o=null),null!==o&&(o>=0||t&&o<0)}return!1}function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,r.A)(e.querySelectorAll("*")).filter((function(e){return i(e,t)}));return i(e,t)&&n.unshift(e),n}},16928:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const a=r},19853:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(89379);function a(e,t){var n=(0,r.A)({},e);return Array.isArray(t)&&t.forEach((function(e){delete n[e]})),n}},2833:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!o(c))return!1;var l=e[c],f=t[c];if(!1===(a=n?n.call(r,l,f,c):void 0)||void 0===a&&l!==f)return!1}return!0}}}]);