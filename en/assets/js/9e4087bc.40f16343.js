"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3608,8610,7937,3089,6103],{63012:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),l=a(84274),r=a(36742),s=a(24973);function o(e){let{year:t,posts:a}=e;return n.createElement(n.Fragment,null,n.createElement("h3",null,t),n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e.metadata.date},n.createElement(r.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function c(e){let{years:t}=e;return n.createElement("section",{className:"margin-vert--lg"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t.map(((e,t)=>n.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},n.createElement(o,e)))))))}function i(e){let{archive:t}=e;const a=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),o=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0],n=e.get(a)||[];return e.set(a,[t,...n])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return n.createElement(l.Z,{title:a,description:r},n.createElement("header",{className:"hero hero--primary"},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},a),n.createElement("p",{className:"hero__subtitle"},r))),n.createElement("main",null,o.length>0&&n.createElement(c,{years:o})))}},46463:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),l=a(67294),r=a(86010),s=a(36742),o=a(941),c=a(44996),i=a(13919),m=a(98465),d=a(18617),u=a(19181),b=a(78874),v=a(14294);function g(e){let{to:t,href:a,label:r,prependBaseUrlToHref:o,isBlank:m,...u}=e;const b=(0,c.Z)(t),v=(0,c.Z)(a,{forcePrependBaseUrl:!0});return m?l.createElement("a",(0,n.Z)({className:"footer__link-item"},a?{href:o?v:a}:{to:b},u,{target:"_blank"}),a&&!(0,i.Z)(a)?l.createElement("span",null,r,l.createElement(d.Z,null)):r):l.createElement(s.Z,(0,n.Z)({className:"footer__link-item"},a?{href:o?v:a}:{to:b},u),a&&!(0,i.Z)(a)?l.createElement("span",null,r,l.createElement(d.Z,null)):r)}const f=e=>{let{sources:t,alt:a}=e;return l.createElement(m.Z,{className:"footer__logo",alt:a,sources:t})};const h=function(){const{footer:e}=(0,o.LU)(),{copyright:t,links:a=[],logo:i={}}=e||{},m={light:(0,c.Z)(i.src),dark:(0,c.Z)(i.srcDark||i.src)};return e?((0,l.useEffect)((()=>{document.onscroll=e=>{if(e.target&&e.target.scrollingElement&&e.target.scrollingElement.scrollTop){const t=document.getElementsByClassName("navbar")[0],a=e.target.scrollingElement.scrollTop>t.offsetHeight;t.style.backgroundColor=a?"#ffffff":"rgba(0,0,0,0)"}}}),[]),l.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},l.createElement("div",{className:"div--flex footer__bottom text--center "},l.createElement("div",{className:"footer-logo-copyright-navigation"},i&&(i.src||i.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},i.href?l.createElement(s.Z,{href:i.href,className:"footer-link"},l.createElement(f,{alt:i.alt,sources:m})):l.createElement("div",{className:"footer-link"},l.createElement(f,{alt:i.alt,sources:m}),l.createElement("div",{className:"footer__logo__title"},"Yak"))),t?l.createElement("div",{className:"footer__copyright copyright-style",dangerouslySetInnerHTML:{__html:t}}):null,a&&a.length>0&&l.createElement("div",{className:"link-body"},a.map(((e,t)=>l.createElement(g,(0,n.Z)({key:t,isBlank:0===t},e.items[0])))))),l.createElement("div",{className:"footer-contact-me"},l.createElement("a",{href:"https://github.com/yaklang/yakit",target:"_blank",className:"contact-icon-body"},l.createElement(b.Z,{className:"icon-style github-icon"})),l.createElement("div",{className:"contact-icon-body"},l.createElement(u.Z,{overlayClassName:"wechat-code-popover",content:l.createElement("div",null,l.createElement("img",{src:"/img/wechat.jpg",className:"wechat-code-img"}),l.createElement("div",{className:"wechat-code-title"},"\u5fae\u4fe1\u626b\u7801\u5173\u6ce8\u516c\u4f17\u53f7"))},l.createElement(v.Z,{className:"icon-style wechat-icon"})))))))):null}},41029:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),l=a(67294),r=a(86010),s=a(24973),o=a(81036),c=a(29189),i=a(85350),m=a(941),d=a(55662),u=a(31839),b=a(93783),v=a(96730),g=a(67892),f=a(55537),h=a(84478),p=a(62670);const E={toggle:"toggle_iQ2x",navbarHideable:"navbarHideable_Daeo",navbarHidden:"navbarHidden_De9J",navbarSidebarToggle:"navbarSidebarToggle_MTpz",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_pz7p"},_="right";function N(){return(0,m.LU)().navbar.items}function Z(){const{colorMode:{disableSwitch:e}}=(0,m.LU)(),{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=(0,i.Z)();return{isDarkTheme:t,toggle:(0,l.useCallback)((e=>e.target.checked?n():a()),[a,n]),disabled:e}}function k(e){let{sidebarShown:t,toggleSidebar:a}=e;(0,u.Z)(t);const o=N(),i=Z(),d=function(e){let{sidebarShown:t,toggleSidebar:a}=e;const n=(0,m.g8)()?.({toggleSidebar:a}),r=(0,m.D9)(n),[s,o]=(0,l.useState)((()=>!1));(0,l.useEffect)((()=>{n&&!r&&o(!0)}),[n,r]);const c=!!n;return(0,l.useEffect)((()=>{c?t||o(!0):o(!1)}),[t,c]),{shown:s,hide:(0,l.useCallback)((()=>{o(!1)}),[]),content:n}}({sidebarShown:t,toggleSidebar:a});return l.createElement("div",{className:"navbar-sidebar"},l.createElement("div",{className:"navbar-sidebar__brand"},l.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&l.createElement(c.Z,{className:E.navbarSidebarToggle,checked:i.isDarkTheme,onChange:i.toggle}),l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},l.createElement(p.Z,{width:20,height:20,className:E.navbarSidebarCloseSvg}))),l.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":d.shown})},l.createElement("div",{className:"navbar-sidebar__item menu"},l.createElement("ul",{className:"menu__list"},o.map(((e,t)=>l.createElement(g.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t})))))),l.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&l.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:d.hide},l.createElement(s.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),d.content)))}const w=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,m.LU)(),a=function(){const e=(0,b.Z)(),t="mobile"===e,[a,n]=(0,l.useState)(!1);(0,m.Rb)((()=>{a&&n(!1)}));const r=(0,l.useCallback)((()=>{n((e=>!e))}),[]);return(0,l.useEffect)((()=>{"desktop"===e&&n(!1)}),[e]),{shouldRender:t,toggle:r,shown:a}}(),s=Z(),i=(0,v.useActivePlugin)(),{navbarRef:u,isNavbarVisible:p}=(0,d.Z)(e),w=N(),y=w.some((e=>"search"===e.type)),{leftItems:C,rightItems:D}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??_))),rightItems:e.filter((e=>"right"===(e.position??_)))}}(w);return(0,l.useEffect)((()=>{window.addEventListener("beforeunload",(e=>{document.body.scrollIntoView()}))}),[]),l.createElement("nav",{ref:u,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":a.shown,[E.navbarHideable]:e,[E.navbarHidden]:e&&!p})},l.createElement("div",{className:"navbar__inner"},l.createElement("div",{className:"navbar__items"},(w?.length>0||i)&&l.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:a.toggle,onKeyDown:a.toggle},l.createElement(h.Z,null)),l.createElement(f.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),C.map(((e,t)=>l.createElement(g.Z,(0,n.Z)({},e,{key:t}))))),l.createElement("div",{className:"navbar__items navbar__items--right"},D.map(((e,t)=>l.createElement(g.Z,(0,n.Z)({},e,{key:t})))),!s.disabled&&l.createElement(c.Z,{className:E.toggle,checked:s.isDarkTheme,onChange:s.toggle}),!y&&l.createElement(o.Z,null))),l.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:a.toggle}),a.shouldRender&&l.createElement(k,{sidebarShown:a.shown,toggleSidebar:a.toggle}))}},48219:(e,t,a)=>{a.d(t,{O:()=>u,Z:()=>g});var n=a(87462),l=a(67294),r=a(86010),s=a(36742),o=a(44996),c=a(18617),i=a(13919),m=a(67892);const d="dropdown__link--active";function u(e){let{activeBasePath:t,activeBaseRegex:a,to:r,href:m,label:u,activeClassName:b="",prependBaseUrlToHref:v,isDropdownItem:g,...f}=e;const h=(0,o.Z)(r),p=(0,o.Z)(t),E=(0,o.Z)(m,{forcePrependBaseUrl:!0}),_=u&&m&&!(0,i.Z)(m),N=b===d,[Z,k]=(0,l.useState)("");return(0,l.useEffect)((()=>{k(window.location.origin)}),[]),g?l.createElement("a",(0,n.Z)({},m?{href:v?E:`${Z}${m}`}:{isNavLink:!0,activeClassName:f.className?.includes(b)?"":b,href:`${Z}${h}`,to:h,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}:null},f,{target:"_blank",className:`${f.className} diy-link-item`}),_?l.createElement("span",null,u,l.createElement(c.Z,N&&{width:12,height:12})):u):l.createElement(s.Z,(0,n.Z)({},m?{href:v?E:m}:{isNavLink:!0,activeClassName:f.className?.includes(b)?"":b,to:h,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}:null},f,{className:`${f.className} diy-link-item`}),_?l.createElement("span",null,u):u)}function b(e){let{className:t,isDropdownItem:a=!1,...s}=e;const o=l.createElement(u,(0,n.Z)({className:(0,r.Z)(a?"dropdown__link":"navbar__item navbar__link",t),isDropdownItem:a},s));return a?l.createElement("li",null,o):o}function v(e){let{className:t,isDropdownItem:a,...s}=e;return l.createElement("li",{className:"menu__list-item"},l.createElement(u,(0,n.Z)({className:(0,r.Z)("menu__link",t)},s)))}const g=function(e){let{mobile:t=!1,position:a,...r}=e;const s=t?v:b;return l.createElement(s,(0,n.Z)({},r,{activeClassName:r.activeClassName??(0,m.E)(t)}))}},48729:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),l=a(67294),r=a(48219),s=a(96730),o=a(86010),c=a(67892),i=a(941),m=a(18780);function d(e){let{docId:t,label:a,docsPluginId:d,...u}=e;const{activeVersion:b,activeDoc:v}=(0,s.useActiveDocContext)(d),{preferredVersion:g}=(0,i.J)(d),f=(0,s.useLatestVersion)(d),h=function(e,t){const a=e.flatMap((e=>e.docs)),n=a.find((e=>e.id===t));if(!n){const n=a.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${n}`)}return n}((0,m.uniq)([b,g,f].filter(Boolean)),t),p=(0,c.E)(u.mobile);return l.createElement(r.Z,(0,n.Z)({exact:!0},u,{className:(0,o.Z)(u.className,{[p]:v?.sidebar&&v.sidebar===h.sidebar}),activeClassName:p,label:a??h.id,to:h.path}))}},15391:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),l=a(67294),r=a(48219),s=a(70609),o=a(96730),c=a(941),i=a(24973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:d,dropdownItemsBefore:u,dropdownItemsAfter:b,...v}=e;const g=(0,o.useActiveDocContext)(a),f=(0,o.useVersions)(a),h=(0,o.useLatestVersion)(a),{preferredVersion:p,savePreferredVersionName:E}=(0,c.J)(a);const _=function(){const e=f.map((e=>{const t=g?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===g?.activeVersion,onClick:()=>{E(e.name)}}}));return[...u,...e,...b]}(),N=g.activeVersion??p??h,Z=t&&_?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):N.label,k=t&&_?void 0:m(N).path;return _.length<=1?l.createElement(r.Z,(0,n.Z)({},v,{mobile:t,label:Z,to:k,isActive:d?()=>!1:void 0})):l.createElement(s.Z,(0,n.Z)({},v,{mobile:t,label:Z,to:k,items:_,isActive:d?()=>!1:void 0}))}},81555:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(67294),r=a(48219),s=a(96730),o=a(941);const c=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:a,docsPluginId:i,...m}=e;const d=(0,s.useActiveVersion)(i),{preferredVersion:u}=(0,o.J)(i),b=(0,s.useLatestVersion)(i),v=d??u??b,g=t??v.label,f=a??c(v).path;return l.createElement(r.Z,(0,n.Z)({},m,{label:g,to:f}))}},70609:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),l=a(67294),r=a(86010),s=a(941),o=a(48219),c=a(67892);const i="dropdown__link--active";function m(e,t){return e.some((e=>function(e,t){return!!(0,s.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function d(e){let{items:t,position:a,className:s,...m}=e;const d=(0,l.useRef)(null),u=(0,l.useRef)(null),[b,v]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),l.createElement("div",{ref:d,className:(0,r.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===a,"dropdown--show":b})},l.createElement(o.O,(0,n.Z)({className:(0,r.Z)("navbar__link",s)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),v(!b))}}),m.children??m.label),l.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,a)=>l.createElement(c.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);const t=d.current.nextElementSibling;t&&t.focus()}},activeClassName:i},e,{key:a}))))))}function u(e){let{items:t,className:a,position:i,...d}=e;const u=(0,s.be)(),b=m(t,u),{collapsed:v,toggleCollapsed:g,setCollapsed:f}=(0,s.uR)({initialState:()=>!b});return(0,l.useEffect)((()=>{b&&f(!b)}),[u,b]),l.createElement("li",{className:(0,r.Z)("menu__list-item",{"menu__list-item--collapsed":v})},l.createElement(o.O,(0,n.Z)({role:"button",className:(0,r.Z)("menu__link menu__link--sublist",a)},d,{onClick:e=>{e.preventDefault(),g()}}),d.children??d.label),l.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},t.map(((e,t)=>l.createElement(c.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const b=function(e){let{mobile:t=!1,...a}=e;const n=t?u:d;return l.createElement(n,a)}},67892:(e,t,a)=>{a.d(t,{Z:()=>h,E:()=>f});var n=a(67294),l=a(48219),r=a(70609),s=a(87462),o=a(23264),c=a(52263),i=a(941);const m="iconLanguage_zID8";function d(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:l,...d}=e;const{i18n:{currentLocale:u,locales:b,localeConfigs:v}}=(0,c.Z)(),g=(0,i.l5)();function f(e){return v[e].label}const h=[...a,...b.map((e=>{const t=`pathname://${g.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:f(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...l],p=t?"Languages":f(u);return n.createElement(r.Z,(0,s.Z)({},d,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(o.Z,{className:m}),n.createElement("span",null,p)),items:h}))}var u=a(81036);function b(e){let{mobile:t}=e;return t?null:n.createElement(u.Z,null)}const v={default:()=>l.Z,localeDropdown:()=>d,search:()=>b,dropdown:()=>r.Z,docsVersion:()=>a(81555).Z,docsVersionDropdown:()=>a(15391).Z,doc:()=>a(48729).Z},g=e=>{const t=v[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};const f=e=>e?"menu__link--active":"navbar__link--active";function h(e){let{type:t,...a}=e;const l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),r=g(l);return n.createElement(r,a)}}}]);