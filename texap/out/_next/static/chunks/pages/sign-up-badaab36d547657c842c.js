(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{2167:function(e,n,r){"use strict";var t=r(3038),s=r(862);n.default=void 0;var l=s(r(7294)),a=r(9414),i=r(4651),c=r(7426),o={};function u(e,n,r,t){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;o[n+"%"+r+(s?"%"+s:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,s=(0,i.useRouter)(),f=l.default.useMemo((function(){var n=(0,a.resolveHref)(s,e.href,!0),r=t(n,2),l=r[0],i=r[1];return{href:l,as:e.as?(0,a.resolveHref)(s,e.as):i||l}}),[s,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,v=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var g=(n=l.Children.only(p))&&"object"===typeof n&&n.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),N=t(w,2),b=N[0],y=N[1],k=l.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);(0,l.useEffect)((function(){var e=y&&r&&(0,a.isLocalURL)(d),n="undefined"!==typeof j?j:s&&s.locale,t=o[d+"%"+h+(n?"%"+n:"")];e&&!t&&u(s,d,h,{locale:n})}),[h,d,y,j,r,s]);var _={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,s,l,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[s?"replace":"push"](r,t,{shallow:l,locale:c,scroll:i}))}(e,s,d,h,m,v,x,j)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(s,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof j?j:s&&s.locale,C=s&&s.isLocaleDomain&&(0,a.getDomainLocale)(h,E,s&&s.locales,s&&s.domainLocales);_.href=C||(0,a.addBasePath)((0,a.addLocale)(h,E,s&&s.defaultLocale))}return l.default.cloneElement(n,_)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,c=(0,s.useRef)(),o=(0,s.useState)(!1),u=t(o,2),f=u[0],d=u[1],h=(0,s.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:s,elements:t}),r}(r),s=t.id,l=t.observer,a=t.elements;return a.set(e,n),l.observe(e),function(){a.delete(e),l.unobserve(e),0===a.size&&(l.disconnect(),i.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,s.useEffect)((function(){if(!a&&!f){var e=(0,l.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,l.cancelIdleCallback)(e)}}}),[f]),[h,f]};var s=r(7294),l=r(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},6722:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=(r(7294),r(1664));n.default=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"profile-authentication-area",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)(s.default,{href:"/",children:(0,t.jsx)("a",{className:"d-inline-block",children:(0,t.jsx)("img",{src:"/images/black-logo.png",alt:"logo"})})})}),(0,t.jsx)("div",{className:"d-table",children:(0,t.jsx)("div",{className:"d-table-cell",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"signup-form",children:[(0,t.jsx)("h2",{children:"Sign Up"}),(0,t.jsxs)("form",{children:[(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name"})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"email",className:"form-control",placeholder:"Email Address"})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"password",className:"form-control",placeholder:"Password"})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm Password"})}),(0,t.jsx)("button",{type:"submit",children:"Sign Up"}),(0,t.jsxs)("span",{className:"dont-account",children:["Already have an account? ",(0,t.jsx)(s.default,{href:"/sign-in",children:(0,t.jsx)("a",{children:"Sign In Now!"})})]})]}),(0,t.jsx)("div",{className:"sign-in-with-button",children:(0,t.jsxs)("button",{type:"button",children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[(0,t.jsx)("title",{children:"Google"}),(0,t.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,t.jsx)("path",{fill:"#4285F4",d:"M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"}),(0,t.jsx)("path",{fill:"#34A853",d:"M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"}),(0,t.jsx)("path",{fill:"#FBBC05",d:"M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"}),(0,t.jsx)("path",{fill:"#EA4335",d:"M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"})]})]}),"Sign up with Google"]})})]})})})}),(0,t.jsxs)("ul",{className:"social-links d-flex align-items-center justify-content-center",children:[(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:"Follow Us On:"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.facebook.com/",className:"facebook",target:"_blank",children:(0,t.jsx)("i",{className:"ri-facebook-fill"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://twitter.com/",className:"twitter",target:"_blank",children:(0,t.jsx)("i",{className:"ri-twitter-fill"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.linkedin.com/",className:"linkedin",target:"_blank",children:(0,t.jsx)("i",{className:"ri-linkedin-fill"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.instagram.com/",className:"instagram",target:"_blank",children:(0,t.jsx)("i",{className:"ri-instagram-line"})})})]})]})})}},7590:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return r(6722)}])},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=7590,e(e.s=n);var n}));var n=e.O();_N_E=n}]);