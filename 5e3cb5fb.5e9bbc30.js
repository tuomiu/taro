(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1790:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1791:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},1792:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,d=l["".concat(c,".").concat(f)]||l[f]||b[f]||a;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},709:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1790),o=r(1791),a=(r(0),r(1792)),c={title:"\u5e38\u89c1\u95ee\u9898"},i={unversionedId:"specials",id:"version-2.x/specials",isDocsHomePage:!1,title:"\u5e38\u89c1\u95ee\u9898",description:"- Issue #46\uff0credux-saga \u7684\u5f15\u5165\u95ee\u9898\u5904\u7406",source:"@site/versioned_docs/version-2.x/specials.md",slug:"/specials",permalink:"/taro/docs/2.x/specials",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/specials.md",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"\u5404\u7aef\u5f00\u53d1\u524d\u6ce8\u610f",permalink:"/taro/docs/2.x/before-dev-remind"},next:{title:"Taro \u89c4\u8303",permalink:"/taro/docs/2.x/spec-for-taro"}},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/46"}),"Issue #46"),"\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"redux-saga")," \u7684\u5f15\u5165\u95ee\u9898\u5904\u7406")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u5728 H5 \u6a21\u5f0f\u4e0b\uff0ctabBar \u53ef\u80fd\u4f1a\u6321\u4f4f\u9875\u9762 fixed \u5143\u7d20\u95ee\u9898\uff1a\u8fd9\u662f\u56e0\u4e3a\u4e0e\u5c0f\u7a0b\u5e8f\u7684 tabBar \u4e0d\u540c\uff0c\u5728 H5 \u4e0b tabBar \u662f\u4e00\u4e2a\u666e\u901a\u7684\u7ec4\u4ef6\uff0c\u5f53\u9875\u9762\u4e2d\u5b58\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"fixed(bottom)")," \u5b9a\u4f4d\u7684\u5143\u7d20\u65f6\uff0c\u5176\u8868\u73b0\u4f1a\u4e0e\u5c0f\u7a0b\u5e8f\u4e2d\u4e0d\u4e00\u81f4\u3002Taro \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9002\u914d\u7684\u65b9\u6cd5\uff1a"))),Object(a.b)("p",null,"\u4f8b\u5982\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),".fixed {\n  bottom: 0;\n  /* \u5728 H5 \u6a21\u5f0f\u4e0b\u5c06\u4f1a\u7f16\u8bd1\u6210 margin-bottom: 50px\uff0c\u5728\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\u4e0b\u5219\u4f1a\u5ffd\u7565 */\n  margin-bottom: taro-tabbar-height;\n}\n")))}p.isMDXComponent=!0}}]);