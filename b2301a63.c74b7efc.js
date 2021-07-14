(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{1288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return i}));var r=n(1790),o=n(1791),l=(n(0),n(1792)),c={title:"Taro.openBluetoothAdapter(option)",sidebar_label:"openBluetoothAdapter"},b={unversionedId:"apis/device/bluetooth/openBluetoothAdapter",id:"apis/device/bluetooth/openBluetoothAdapter",isDocsHomePage:!1,title:"Taro.openBluetoothAdapter(option)",description:"\u521d\u59cb\u5316\u84dd\u7259\u6a21\u5757",source:"@site/docs/apis/device/bluetooth/openBluetoothAdapter.md",slug:"/apis/device/bluetooth/openBluetoothAdapter",permalink:"/taro/docs/next/apis/device/bluetooth/openBluetoothAdapter",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/bluetooth/openBluetoothAdapter.md",version:"current",sidebar_label:"openBluetoothAdapter",sidebar:"API",previous:{title:"Taro.startBluetoothDevicesDiscovery(option)",permalink:"/taro/docs/next/apis/device/bluetooth/startBluetoothDevicesDiscovery"},next:{title:"Taro.onBluetoothDeviceFound(callback)",permalink:"/taro/docs/next/apis/device/bluetooth/onBluetoothDeviceFound"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"state",id:"state",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:a};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u521d\u59cb\u5316\u84dd\u7259\u6a21\u5757"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5176\u4ed6\u84dd\u7259\u76f8\u5173 API \u5fc5\u987b\u5728 Taro.openBluetoothAdapter \u8c03\u7528\u4e4b\u540e\u4f7f\u7528\u3002\u5426\u5219 API \u4f1a\u8fd4\u56de\u9519\u8bef\uff08errCode=10000\uff09\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5728\u7528\u6237\u84dd\u7259\u5f00\u5173\u672a\u5f00\u542f\u6216\u8005\u624b\u673a\u4e0d\u652f\u6301\u84dd\u7259\u529f\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u8c03\u7528 Taro.openBluetoothAdapter \u76d1\u542c\u624b\u673a\u84dd\u7259\u72b6\u6001\u7684\u6539\u53d8\uff0c\u4e5f\u53ef\u4ee5\u8c03\u7528\u84dd\u7259\u6a21\u5757\u7684\u6240\u6709API\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"state"},"state"),Object(l.b)("p",null,"object.fail \u56de\u8c03\u51fd\u6570\u8fd4\u56de\u7684 state \u53c2\u6570\uff08\u4ec5 iOS\uff09"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"0"),Object(l.b)("td",null,"\u672a\u77e5")),Object(l.b)("tr",null,Object(l.b)("td",null,"1"),Object(l.b)("td",null,"\u91cd\u7f6e\u4e2d")),Object(l.b)("tr",null,Object(l.b)("td",null,"2"),Object(l.b)("td",null,"\u4e0d\u652f\u6301")),Object(l.b)("tr",null,Object(l.b)("td",null,"3"),Object(l.b)("td",null,"\u672a\u6388\u6743")),Object(l.b)("tr",null,Object(l.b)("td",null,"4"),Object(l.b)("td",null,"\u672a\u5f00\u542f")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.openBluetoothAdapter({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.openBluetoothAdapter"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0},1790:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1791:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},1792:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),i=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=i(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=i(n),O=r,j=p["".concat(c,".").concat(O)]||p[O]||d[O]||l;return n?o.a.createElement(j,b(b({ref:t},u),{},{components:n})):o.a.createElement(j,b({ref:t},u))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=O;var b={};for(var a in t)hasOwnProperty.call(t,a)&&(b[a]=t[a]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var u=2;u<l;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);