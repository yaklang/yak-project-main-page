(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3089,5992,8610,6103],{46463:function(e,t,n){"use strict";var a=n(74034),r=n(79973),o=n(67294),l=n(86010),i=n(36742),s=n(941),c=n(44996),u=n(13919),m=n(98465),d=n(18617),f=n(19181),v=n(78874),b=n(14294);function g(e){var t=e.to,n=e.href,l=e.label,s=e.prependBaseUrlToHref,m=e.isBlank,f=(0,r.Z)(e,["to","href","label","prependBaseUrlToHref","isBlank"]),v=(0,c.Z)(t),b=(0,c.Z)(n,{forcePrependBaseUrl:!0});return m?o.createElement("a",(0,a.Z)({className:"footer__link-item"},n?{href:s?b:n}:{to:v},f,{target:"_blank"}),n&&!(0,u.Z)(n)?o.createElement("span",null,l,o.createElement(d.Z,null)):l):o.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{href:s?b:n}:{to:v},f),n&&!(0,u.Z)(n)?o.createElement("span",null,l,o.createElement(d.Z,null)):l)}var p=function(e){var t=e.sources,n=e.alt;return o.createElement(m.Z,{className:"footer__logo",alt:n,sources:t})};t.Z=function(){var e=(0,s.LU)().footer,t=e||{},n=t.copyright,r=t.links,u=void 0===r?[]:r,m=t.logo,d=void 0===m?{}:m,h={light:(0,c.Z)(d.src),dark:(0,c.Z)(d.srcDark||d.src)};return e?((0,o.useEffect)((function(){var e=1920,t=1920===document.body.offsetWidth?15.875:16;document.getElementsByTagName("html")[0].style.fontSize=document.body.offsetWidth/e*t+"px",document.getElementsByTagName("body")[0].style.fontSize=document.body.offsetWidth/e*t+"px",window.addEventListener("onorientationchange"in window?"orientationchange":"resize",(function(){document.getElementsByTagName("html")[0].style.fontSize=document.body.offsetWidth/e*t+"px",document.getElementsByTagName("body")[0].style.fontSize=document.body.offsetWidth/e*t+"px"})),document.onscroll=function(e){if(e.target&&e.target.scrollingElement&&e.target.scrollingElement.scrollTop){var t=document.getElementsByClassName("navbar")[0],n=e.target.scrollingElement.scrollTop>t.offsetHeight;t.style.backgroundColor=n?"#ffffff":"rgba(0,0,0,0)"}}}),[]),o.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},o.createElement("div",{className:"div--flex footer__bottom text--center "},o.createElement("div",{className:"footer-logo-copyright-navigation"},d&&(d.src||d.srcDark)&&o.createElement("div",{className:"margin-bottom--sm"},d.href?o.createElement(i.Z,{href:d.href,className:"footer-link"},o.createElement(p,{alt:d.alt,sources:h})):o.createElement("div",{className:"footer-link"},o.createElement(p,{alt:d.alt,sources:h}),o.createElement("div",{className:"footer__logo__title"},"Yak"))),n?o.createElement("div",{className:"footer__copyright copyright-style",dangerouslySetInnerHTML:{__html:n}}):null,u&&u.length>0&&o.createElement("div",{className:"link-body"},u.map((function(e,t){return o.createElement(g,(0,a.Z)({key:t,isBlank:0===t},e.items[0]))})))),o.createElement("div",{className:"footer-contact-me"},o.createElement("a",{href:"https://github.com/yaklang/yakit",target:"_blank",className:"contact-icon-body"},o.createElement(v.Z,{className:"icon-style github-icon"})),o.createElement("div",{className:"contact-icon-body"},o.createElement(f.Z,{overlayClassName:"wechat-code-popover",content:o.createElement("div",null,o.createElement("img",{src:"/img/wechat.jpg",className:"wechat-code-img"}),o.createElement("div",{className:"wechat-code-title"},"\u5fae\u4fe1\u626b\u7801\u5173\u6ce8\u516c\u4f17\u53f7"))},o.createElement(b.Z,{className:"icon-style wechat-icon"})))))))):null}},41029:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var a=n(74034),r=n(67294),o=n(86010),l=n(24973),i=n(81036),s=n(29189),c=n(85350),u=n(941),m=n(55662),d=n(31839),f=n(93783),v=n(96730),b=n(67892),g=n(55537),p=n(84478),h=n(62670),E="toggle_2xs0",_="navbarHideable_1VR7",Z="navbarHidden_1FmO",N="navbarSidebarToggle_nWi-",k="navbarSidebarCloseSvg_fJdH",w="right";function y(){return(0,u.LU)().navbar.items}function C(){var e=(0,u.LU)().colorMode.disableSwitch,t=(0,c.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function D(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,d.Z)(t);var i=y(),c=C(),m=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,u.g8)())?void 0:t({toggleSidebar:a}),l=(0,u.D9)(o),i=(0,r.useState)((function(){return!1})),s=i[0],c=i[1];(0,r.useEffect)((function(){o&&!l&&c(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||c(!0):c(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(g.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(s.Z,{className:N,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(h.Z,{width:20,height:20,className:k}))),r.createElement("div",{className:(0,o.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},i.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var I=function(){var e,t=(0,u.LU)().navbar,n=t.hideOnScroll,l=t.style,c=function(){var e=(0,f.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,u.Rb)((function(){a&&o(!1)}));var l=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),d=C(),h=(0,v.useActivePlugin)(),N=(0,m.Z)(n),k=N.navbarRef,I=N.isNavbarVisible,B=y(),S=B.some((function(e){return"search"===e.type})),L=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:w)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:w)}))}}(B),T=L.leftItems,x=L.rightItems;return r.createElement("nav",{ref:k,className:(0,o.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":c.shown},e[_]=n,e[Z]=n&&!I,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==B?void 0:B.length)>0||h)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:c.toggle,onKeyDown:c.toggle},r.createElement(p.Z,null)),r.createElement(g.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),T.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},x.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({},e,{key:t}))})),!d.disabled&&r.createElement(s.Z,{className:E,checked:d.isDarkTheme,onChange:d.toggle}),!S&&r.createElement(i.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:c.toggle}),c.shouldRender&&r.createElement(D,{sidebarShown:c.shown,toggleSidebar:c.toggle}))}},48219:function(e,t,n){"use strict";n.d(t,{O:function(){return d}});var a=n(74034),r=n(79973),o=n(67294),l=n(86010),i=n(36742),s=n(44996),c=n(18617),u=n(13919),m=n(67892);function d(e){var t,n,l=e.activeBasePath,m=e.activeBaseRegex,d=e.to,f=e.href,v=e.label,b=e.activeClassName,g=void 0===b?"":b,p=e.prependBaseUrlToHref,h=e.isDropdownItem,E=(0,r.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","isDropdownItem"]),_=(0,s.Z)(d),Z=(0,s.Z)(l),N=(0,s.Z)(f,{forcePrependBaseUrl:!0}),k=v&&f&&!(0,u.Z)(f),w="dropdown__link--active"===g,y=(0,o.useState)(""),C=y[0],D=y[1];return(0,o.useEffect)((function(){D(window.location.origin)}),[]),h?o.createElement("a",(0,a.Z)({},f?{href:p?N:""+C+f}:Object.assign({isNavLink:!0,activeClassName:null!=(n=E.className)&&n.includes(g)?"":g,href:""+C+_,to:_},l||m?{isActive:function(e,t){return m?new RegExp(m).test(t.pathname):t.pathname.startsWith(Z)}}:null),E,{target:"_blank",className:E.className+" diy-link-item"}),k?o.createElement("span",null,v,o.createElement(c.Z,w&&{width:12,height:12})):v):o.createElement(i.Z,(0,a.Z)({},f?{href:p?N:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=E.className)&&t.includes(g)?"":g,to:_},l||m?{isActive:function(e,t){return m?new RegExp(m).test(t.pathname):t.pathname.startsWith(Z)}}:null),E,{className:E.className+" diy-link-item"}),k?o.createElement("span",null,v):v)}function f(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,s=(0,r.Z)(e,["className","isDropdownItem"]),c=o.createElement(d,(0,a.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t),isDropdownItem:i},s));return i?o.createElement("li",null,c):c}function v(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,["className","isDropdownItem"]));return o.createElement("li",{className:"menu__list-item"},o.createElement(d,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,l=void 0!==n&&n,i=(e.position,(0,r.Z)(e,["mobile","position"])),s=l?v:f;return o.createElement(s,(0,a.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,m.E)(l)}))}},48729:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(74034),r=n(79973),o=n(67294),l=n(48219),i=n(96730),s=n(86010),c=n(67892),u=n(941),m=n(18780);function d(e){var t,n=e.docId,d=e.label,f=e.docsPluginId,v=(0,r.Z)(e,["docId","label","docsPluginId"]),b=(0,i.useActiveDocContext)(f),g=b.activeVersion,p=b.activeDoc,h=(0,u.J)(f).preferredVersion,E=(0,i.useLatestVersion)(f),_=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([g,h,E].filter(Boolean)),n),Z=(0,c.E)(v.mobile);return o.createElement(l.Z,(0,a.Z)({exact:!0},v,{className:(0,s.Z)(v.className,(t={},t[Z]=(null==p?void 0:p.sidebar)&&p.sidebar===_.sidebar,t)),activeClassName:Z,label:null!=d?d:_.id,to:_.path}))}},15391:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(74034),r=n(79973),o=n(67294),l=n(48219),i=n(70609),s=n(96730),c=n(941),u=n(24973),m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,p=(0,r.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),h=(0,s.useActiveDocContext)(f),E=(0,s.useVersions)(f),_=(0,s.useLatestVersion)(f),Z=(0,c.J)(f),N=Z.preferredVersion,k=Z.savePreferredVersionName;var w,y=(w=E.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){k(e.name)}}})),[].concat(b,w,g)),C=null!=(t=null!=(n=h.activeVersion)?n:N)?t:_,D=d&&y?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):C.label,I=d&&y?void 0:m(C).path;return y.length<=1?o.createElement(l.Z,(0,a.Z)({},p,{mobile:d,label:D,to:I,isActive:v?function(){return!1}:void 0})):o.createElement(i.Z,(0,a.Z)({},p,{mobile:d,label:D,to:I,items:y,isActive:v?function(){return!1}:void 0}))}},81555:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(74034),r=n(79973),o=n(67294),l=n(48219),i=n(96730),s=n(941);function c(e){var t,n=e.label,c=e.to,u=e.docsPluginId,m=(0,r.Z)(e,["label","to","docsPluginId"]),d=(0,i.useActiveVersion)(u),f=(0,s.J)(u).preferredVersion,v=(0,i.useLatestVersion)(u),b=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:b.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.createElement(l.Z,(0,a.Z)({},m,{label:g,to:p}))}},70609:function(e,t,n){"use strict";var a=n(74034),r=n(79973),o=n(67294),l=n(86010),i=n(941),s=n(48219),c=n(67892);function u(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function m(e){var t,n=e.items,i=e.position,u=e.className,m=(0,r.Z)(e,["items","position","className"]),d=(0,o.useRef)(null),f=(0,o.useRef)(null),v=(0,o.useState)(!1),b=v[0],g=v[1];return(0,o.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),o.createElement("div",{ref:d,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":b})},o.createElement(s.O,(0,a.Z)({className:(0,l.Z)("navbar__link",u)},m,{onClick:m.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=m.children)?t:m.label),o.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(c.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var a=d.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function d(e){var t,n=e.items,m=e.className,d=(e.position,(0,r.Z)(e,["items","className","position"])),f=(0,i.be)(),v=u(n,f),b=(0,i.uR)({initialState:function(){return!v}}),g=b.collapsed,p=b.toggleCollapsed,h=b.setCollapsed;return(0,o.useEffect)((function(){v&&h(!v)}),[f,v]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(s.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(c.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,["mobile"]),l=n?d:m;return o.createElement(l,a)}},67892:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},E:function(){return g}});var a=n(79973),r=n(67294),o=n(48219),l=n(70609),i=n(74034),s=n(23264),c=n(52263),u=n(941),m="iconLanguage_17ys";function d(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,d=(0,a.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),f=(0,c.Z)().i18n,v=f.currentLocale,b=f.locales,g=f.localeConfigs,p=(0,u.l5)();function h(e){return g[e].label}var E=b.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:h(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),_=[].concat(n,E,o),Z=t?"Languages":h(v);return r.createElement(l.Z,(0,i.Z)({},d,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s.Z,{className:m}),r.createElement("span",null,Z)),items:_}))}var f=n(81036);function v(e){return e.mobile?null:r.createElement(f.Z,null)}var b={default:function(){return o.Z},localeDropdown:function(){return d},search:function(){return v},dropdown:function(){return l.Z},docsVersion:function(){return n(81555).Z},docsVersionDropdown:function(){return n(15391).Z},doc:function(){return n(48729).Z}};var g=function(e){return e?"menu__link--active":"navbar__link--active"};function p(e){var t=e.type,n=(0,a.Z)(e,["type"]),o=function(e){var t=b[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(o,n)}}}]);