(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3608,5992,8610,3089,6103],{63012:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(67294),l=a(84274),r=a(36742),s=a(24973);function o(e){let{year:t,posts:a}=e;return n.createElement(n.Fragment,null,n.createElement("h3",null,t),n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e.metadata.date},n.createElement(r.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function c(e){let{years:t}=e;return n.createElement("section",{className:"margin-vert--lg"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t.map(((e,t)=>n.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},n.createElement(o,e)))))))}function i(e){let{archive:t}=e;const a=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),o=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0],n=e.get(a)||[];return e.set(a,[t,...n])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return n.createElement(l.Z,{title:a,description:r},n.createElement("header",{className:"hero hero--primary"},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},a),n.createElement("p",{className:"hero__subtitle"},r))),n.createElement("main",null,o.length>0&&n.createElement(c,{years:o})))}},46463:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(22122),l=a(67294),r=a(86010),s=a(36742),o=a(941),c=a(44996),i=a(13919),m=a(98465),d=a(18617),u=a(19181),b=a(78874),v=a(14294);function f(e){let{to:t,href:a,label:r,prependBaseUrlToHref:o,isBlank:m,...u}=e;const b=(0,c.Z)(t),v=(0,c.Z)(a,{forcePrependBaseUrl:!0});return m?l.createElement("a",(0,n.Z)({className:"footer__link-item"},a?{href:o?v:a}:{to:b},u,{target:"_blank"}),a&&!(0,i.Z)(a)?l.createElement("span",null,r,l.createElement(d.Z,null)):r):l.createElement(s.Z,(0,n.Z)({className:"footer__link-item"},a?{href:o?v:a}:{to:b},u),a&&!(0,i.Z)(a)?l.createElement("span",null,r,l.createElement(d.Z,null)):r)}const g=e=>{let{sources:t,alt:a}=e;return l.createElement(m.Z,{className:"footer__logo",alt:a,sources:t})};const h=function(){const{footer:e}=(0,o.LU)(),{copyright:t,links:a=[],logo:i={}}=e||{},m={light:(0,c.Z)(i.src),dark:(0,c.Z)(i.srcDark||i.src)};return e?((0,l.useEffect)((()=>{document.onscroll=e=>{if(e.target&&e.target.scrollingElement&&e.target.scrollingElement.scrollTop){const t=document.getElementsByClassName("navbar")[0],a=e.target.scrollingElement.scrollTop>t.offsetHeight;t.style.backgroundColor=a?"#ffffff":"rgba(0,0,0,0)"}}}),[]),l.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},l.createElement("div",{className:"div--flex footer__bottom text--center "},l.createElement("div",{className:"footer-logo-copyright-navigation"},i&&(i.src||i.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},i.href?l.createElement(s.Z,{href:i.href,className:"footer-link"},l.createElement(g,{alt:i.alt,sources:m})):l.createElement("div",{className:"footer-link"},l.createElement(g,{alt:i.alt,sources:m}),l.createElement("div",{className:"footer__logo__title"},"Yak"))),t?l.createElement("div",{className:"footer__copyright copyright-style",dangerouslySetInnerHTML:{__html:t}}):null,a&&a.length>0&&l.createElement("div",{className:"link-body"},a.map(((e,t)=>l.createElement(f,(0,n.Z)({key:t,isBlank:0===t},e.items[0])))))),l.createElement("div",{className:"footer-contact-me"},l.createElement("a",{href:"https://github.com/yaklang/yakit",target:"_blank",className:"contact-icon-body"},l.createElement(b.Z,{className:"icon-style github-icon"})),l.createElement("div",{className:"contact-icon-body"},l.createElement(u.Z,{overlayClassName:"wechat-code-popover",content:l.createElement("div",null,l.createElement("img",{src:"/img/wechat.jpg",className:"wechat-code-img"}),l.createElement("div",{className:"wechat-code-title"},"\u5fae\u4fe1\u626b\u7801\u5173\u6ce8\u516c\u4f17\u53f7"))},l.createElement(v.Z,{className:"icon-style wechat-icon"})))))))):null}},41029:(e,t,a)=>{"use strict";a.d(t,{Z:()=>I});var n=a(22122),l=a(67294),r=a(86010),s=a(24973),o=a(81036),c=a(29189),i=a(85350),m=a(941),d=a(55662),u=a(31839),b=a(93783),v=a(96730),f=a(67892),g=a(55537),h=a(84478),E=a(62670);const p="toggle_2xs0",_="navbarHideable_1VR7",N="navbarHidden_1FmO",Z="navbarSidebarToggle_nWi-",k="navbarSidebarCloseSvg_fJdH",w="right";function y(){return(0,m.LU)().navbar.items}function C(){const{colorMode:{disableSwitch:e}}=(0,m.LU)(),{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=(0,i.Z)();return{isDarkTheme:t,toggle:(0,l.useCallback)((e=>e.target.checked?n():a()),[a,n]),disabled:e}}function D(e){let{sidebarShown:t,toggleSidebar:a}=e;(0,u.Z)(t);const o=y(),i=C(),d=function(e){let{sidebarShown:t,toggleSidebar:a}=e;const n=(0,m.g8)()?.({toggleSidebar:a}),r=(0,m.D9)(n),[s,o]=(0,l.useState)((()=>!1));(0,l.useEffect)((()=>{n&&!r&&o(!0)}),[n,r]);const c=!!n;return(0,l.useEffect)((()=>{c?t||o(!0):o(!1)}),[t,c]),{shown:s,hide:(0,l.useCallback)((()=>{o(!1)}),[]),content:n}}({sidebarShown:t,toggleSidebar:a});return l.createElement("div",{className:"navbar-sidebar"},l.createElement("div",{className:"navbar-sidebar__brand"},l.createElement(g.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&l.createElement(c.Z,{className:Z,checked:i.isDarkTheme,onChange:i.toggle}),l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},l.createElement(E.Z,{width:20,height:20,className:k}))),l.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":d.shown})},l.createElement("div",{className:"navbar-sidebar__item menu"},l.createElement("ul",{className:"menu__list"},o.map(((e,t)=>l.createElement(f.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t})))))),l.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:d.hide},l.createElement(s.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),d.content)))}const I=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,m.LU)(),a=function(){const e=(0,b.Z)(),t="mobile"===e,[a,n]=(0,l.useState)(!1);(0,m.Rb)((()=>{a&&n(!1)}));const r=(0,l.useCallback)((()=>{n((e=>!e))}),[]);return(0,l.useEffect)((()=>{"desktop"===e&&n(!1)}),[e]),{shouldRender:t,toggle:r,shown:a}}(),s=C(),i=(0,v.useActivePlugin)(),{navbarRef:u,isNavbarVisible:E}=(0,d.Z)(e),Z=y(),k=Z.some((e=>"search"===e.type)),{leftItems:I,rightItems:S}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??w))),rightItems:e.filter((e=>"right"===(e.position??w)))}}(Z);return(0,l.useEffect)((()=>{window.addEventListener("beforeunload",(e=>{document.body.scrollIntoView()}))}),[]),l.createElement("nav",{ref:u,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":a.shown,[_]:e,[N]:e&&!E})},l.createElement("div",{className:"navbar__inner"},l.createElement("div",{className:"navbar__items"},(Z?.length>0||i)&&l.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:a.toggle,onKeyDown:a.toggle},l.createElement(h.Z,null)),l.createElement(g.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),I.map(((e,t)=>l.createElement(f.Z,(0,n.Z)({},e,{key:t}))))),l.createElement("div",{className:"navbar__items navbar__items--right"},S.map(((e,t)=>l.createElement(f.Z,(0,n.Z)({},e,{key:t})))),!s.disabled&&l.createElement(c.Z,{className:p,checked:s.isDarkTheme,onChange:s.toggle}),!k&&l.createElement(o.Z,null))),l.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:a.toggle}),a.shouldRender&&l.createElement(D,{sidebarShown:a.shown,toggleSidebar:a.toggle}))}},48219:(e,t,a)=>{"use strict";a.d(t,{O:()=>d,Z:()=>v});var n=a(22122),l=a(67294),r=a(86010),s=a(36742),o=a(44996),c=a(18617),i=a(13919),m=a(67892);function d(e){let{activeBasePath:t,activeBaseRegex:a,to:r,href:m,label:d,activeClassName:u="",prependBaseUrlToHref:b,isDropdownItem:v,...f}=e;const g=(0,o.Z)(r),h=(0,o.Z)(t),E=(0,o.Z)(m,{forcePrependBaseUrl:!0}),p=d&&m&&!(0,i.Z)(m),_="dropdown__link--active"===u,[N,Z]=(0,l.useState)("");return(0,l.useEffect)((()=>{Z(window.location.origin)}),[]),v?l.createElement("a",(0,n.Z)({},m?{href:b?E:`${N}${m}`}:{isNavLink:!0,activeClassName:f.className?.includes(u)?"":u,href:`${N}${g}`,to:g,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(h)}:null},f,{target:"_blank",className:`${f.className} diy-link-item`}),p?l.createElement("span",null,d,l.createElement(c.Z,_&&{width:12,height:12})):d):l.createElement(s.Z,(0,n.Z)({},m?{href:b?E:m}:{isNavLink:!0,activeClassName:f.className?.includes(u)?"":u,to:g,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(h)}:null},f,{className:`${f.className} diy-link-item`}),p?l.createElement("span",null,d):d)}function u(e){let{className:t,isDropdownItem:a=!1,...s}=e;const o=l.createElement(d,(0,n.Z)({className:(0,r.Z)(a?"dropdown__link":"navbar__item navbar__link",t),isDropdownItem:a},s));return a?l.createElement("li",null,o):o}function b(e){let{className:t,isDropdownItem:a,...s}=e;return l.createElement("li",{className:"menu__list-item"},l.createElement(d,(0,n.Z)({className:(0,r.Z)("menu__link",t)},s)))}const v=function(e){let{mobile:t=!1,position:a,...r}=e;const s=t?b:u;return l.createElement(s,(0,n.Z)({},r,{activeClassName:r.activeClassName??(0,m.E)(t)}))}},48729:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(22122),l=a(67294),r=a(48219),s=a(96730),o=a(86010),c=a(67892),i=a(941),m=a(18780);function d(e){let{docId:t,label:a,docsPluginId:d,...u}=e;const{activeVersion:b,activeDoc:v}=(0,s.useActiveDocContext)(d),{preferredVersion:f}=(0,i.J)(d),g=(0,s.useLatestVersion)(d),h=function(e,t){const a=e.flatMap((e=>e.docs)),n=a.find((e=>e.id===t));if(!n){const n=a.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${n}`)}return n}((0,m.uniq)([b,f,g].filter(Boolean)),t),E=(0,c.E)(u.mobile);return l.createElement(r.Z,(0,n.Z)({exact:!0},u,{className:(0,o.Z)(u.className,{[E]:v?.sidebar&&v.sidebar===h.sidebar}),activeClassName:E,label:a??h.id,to:h.path}))}},15391:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(22122),l=a(67294),r=a(48219),s=a(70609),o=a(96730),c=a(941),i=a(24973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:d,dropdownItemsBefore:u,dropdownItemsAfter:b,...v}=e;const f=(0,o.useActiveDocContext)(a),g=(0,o.useVersions)(a),h=(0,o.useLatestVersion)(a),{preferredVersion:E,savePreferredVersionName:p}=(0,c.J)(a);const _=function(){const e=g.map((e=>{const t=f?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===f?.activeVersion,onClick:()=>{p(e.name)}}}));return[...u,...e,...b]}(),N=f.activeVersion??E??h,Z=t&&_?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):N.label,k=t&&_?void 0:m(N).path;return _.length<=1?l.createElement(r.Z,(0,n.Z)({},v,{mobile:t,label:Z,to:k,isActive:d?()=>!1:void 0})):l.createElement(s.Z,(0,n.Z)({},v,{mobile:t,label:Z,to:k,items:_,isActive:d?()=>!1:void 0}))}},81555:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(22122),l=a(67294),r=a(48219),s=a(96730),o=a(941);function c(e){let{label:t,to:a,docsPluginId:c,...i}=e;const m=(0,s.useActiveVersion)(c),{preferredVersion:d}=(0,o.J)(c),u=(0,s.useLatestVersion)(c),b=m??d??u,v=t??b.label,f=a??(e=>e.docs.find((t=>t.id===e.mainDocId)))(b).path;return l.createElement(r.Z,(0,n.Z)({},i,{label:v,to:f}))}},70609:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(22122),l=a(67294),r=a(86010),s=a(941),o=a(48219),c=a(67892);function i(e,t){return e.some((e=>function(e,t){return!!(0,s.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:a,className:s,...i}=e;const m=(0,l.useRef)(null),d=(0,l.useRef)(null),[u,b]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),l.createElement("div",{ref:m,className:(0,r.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===a,"dropdown--show":u})},l.createElement(o.O,(0,n.Z)({className:(0,r.Z)("navbar__link",s)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),b(!u))}}),i.children??i.label),l.createElement("ul",{ref:d,className:"dropdown__menu"},t.map(((e,a)=>l.createElement(c.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:a}))))))}function d(e){let{items:t,className:a,position:m,...d}=e;const u=(0,s.be)(),b=i(t,u),{collapsed:v,toggleCollapsed:f,setCollapsed:g}=(0,s.uR)({initialState:()=>!b});return(0,l.useEffect)((()=>{b&&g(!b)}),[u,b]),l.createElement("li",{className:(0,r.Z)("menu__list-item",{"menu__list-item--collapsed":v})},l.createElement(o.O,(0,n.Z)({role:"button",className:(0,r.Z)("menu__link menu__link--sublist",a)},d,{onClick:e=>{e.preventDefault(),f()}}),d.children??d.label),l.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},t.map(((e,t)=>l.createElement(c.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const u=function(e){let{mobile:t=!1,...a}=e;const n=t?d:m;return l.createElement(n,a)}},67892:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g,E:()=>f});var n=a(67294),l=a(48219),r=a(70609),s=a(22122),o=a(23264),c=a(52263),i=a(941);const m="iconLanguage_17ys";function d(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:l,...d}=e;const{i18n:{currentLocale:u,locales:b,localeConfigs:v}}=(0,c.Z)(),f=(0,i.l5)();function g(e){return v[e].label}const h=[...a,...b.map((e=>{const t=`pathname://${f.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:g(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...l],E=t?"Languages":g(u);return n.createElement(r.Z,(0,s.Z)({},d,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(o.Z,{className:m}),n.createElement("span",null,E)),items:h}))}var u=a(81036);function b(e){let{mobile:t}=e;return t?null:n.createElement(u.Z,null)}const v={default:()=>l.Z,localeDropdown:()=>d,search:()=>b,dropdown:()=>r.Z,docsVersion:()=>a(81555).Z,docsVersionDropdown:()=>a(15391).Z,doc:()=>a(48729).Z};const f=e=>e?"menu__link--active":"navbar__link--active";function g(e){let{type:t,...a}=e;const l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),r=(e=>{const t=v[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(l);return n.createElement(r,a)}}}]);