(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{2167:function(e,n,r){"use strict";var t=r(3038),a=r(862);n.default=void 0;var s=a(r(7294)),l=r(9414),i=r(4651),o=r(7426),c={};function f(e,n,r,t){if(e&&(0,l.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[n+"%"+r+(a?"%"+a:"")]=!0}}var u=function(e){var n,r=!1!==e.prefetch,a=(0,i.useRouter)(),u=s.default.useMemo((function(){var n=(0,l.resolveHref)(a,e.href,!0),r=t(n,2),s=r[0],i=r[1];return{href:s,as:e.as?(0,l.resolveHref)(a,e.as):i||s}}),[a,e.href,e.as]),d=u.href,h=u.as,p=e.children,m=e.replace,v=e.shallow,x=e.scroll,g=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var j=(n=s.Children.only(p))&&"object"===typeof n&&n.ref,b=(0,o.useIntersection)({rootMargin:"200px"}),w=t(b,2),k=w[0],N=w[1],y=s.default.useCallback((function(e){k(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,k]);(0,s.useEffect)((function(){var e=N&&r&&(0,l.isLocalURL)(d),n="undefined"!==typeof g?g:a&&a.locale,t=c[d+"%"+h+(n?"%"+n:"")];e&&!t&&f(a,d,h,{locale:n})}),[h,d,N,g,r,a]);var _={ref:y,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,s,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](r,t,{shallow:s,locale:o,scroll:i}))}(e,a,d,h,m,v,x,g)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof g?g:a&&a.locale,L=a&&a.isLocaleDomain&&(0,l.getDomainLocale)(h,E,a&&a.locales,a&&a.domainLocales);_.href=L||(0,l.addBasePath)((0,l.addLocale)(h,E,a&&a.defaultLocale))}return s.default.cloneElement(n,_)};n.default=u},7426:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!l,o=(0,a.useRef)(),c=(0,a.useState)(!1),f=t(c,2),u=f[0],d=f[1],h=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||u||e&&e.tagName&&(o.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,s=t.observer,l=t.elements;return l.set(e,n),s.observe(e),function(){l.delete(e),s.unobserve(e),0===l.size&&(s.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,u]);return(0,a.useEffect)((function(){if(!l&&!u){var e=(0,s.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[u]),[h,u]};var a=r(7294),s=r(3447),l="undefined"!==typeof IntersectionObserver;var i=new Map},8562:function(e,n,r){"use strict";r.r(n);var t=r(5893),a=(r(7294),r(1664));n.default=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"profile-authentication-area",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{className:"d-inline-block",children:(0,t.jsx)("img",{src:"/images/black-logo.png",alt:"logo"})})})}),(0,t.jsx)("div",{className:"d-table",children:(0,t.jsx)("div",{className:"d-table-cell",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"forget-password-form",children:[(0,t.jsx)("h2",{children:"Forget Password"}),(0,t.jsxs)("form",{children:[(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Username or email"})}),(0,t.jsx)("button",{type:"submit",children:"Send Reset Link"})]})]})})})}),(0,t.jsxs)("ul",{className:"social-links d-flex align-items-center justify-content-center",children:[(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:"Follow Us On:"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.facebook.com/",className:"facebook",target:"_blank",children:(0,t.jsx)("i",{className:"ri-facebook-fill"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://twitter.com/",className:"twitter",target:"_blank",children:(0,t.jsx)("i",{className:"ri-twitter-fill"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.linkedin.com/",className:"linkedin",target:"_blank",children:(0,t.jsx)("i",{className:"ri-linkedin-fill"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.instagram.com/",className:"instagram",target:"_blank",children:(0,t.jsx)("i",{className:"ri-instagram-line"})})})]})]})})}},1067:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forget-password",function(){return r(8562)}])},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=1067,e(e.s=n);var n}));var n=e.O();_N_E=n}]);