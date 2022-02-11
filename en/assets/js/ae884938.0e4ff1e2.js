"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[87850],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],a={title:"AuthSetting",sidebar_label:"AuthSetting"},s=void 0,c={unversionedId:"apis/open-api/settings/AuthSetting",id:"apis/open-api/settings/AuthSetting",isDocsHomePage:!1,title:"AuthSetting",description:"Some of the APIs need users\u2019 authorization before they can be called. We have divided these APIs into multiple scope according to the scope of usage. The users can select scope to authorize. After a scope is authorized, all of its APIs can be used directly.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/open-api/settings/AuthSetting.md",sourceDirName:"apis/open-api/settings",slug:"/apis/open-api/settings/AuthSetting",permalink:"/taro/en/docs/next/apis/open-api/settings/AuthSetting",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/settings/AuthSetting.md",tags:[],version:"current",frontMatter:{title:"AuthSetting",sidebar_label:"AuthSetting"},sidebar:"API",previous:{title:"getSetting",permalink:"/taro/en/docs/next/apis/open-api/settings/getSetting"},next:{title:"SubscriptionsSetting",permalink:"/taro/en/docs/next/apis/open-api/settings/SubscriptionsSetting"}},p=[{value:"Methods",id:"methods",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some of the APIs need users\u2019 authorization before they can be called. We have divided these APIs into multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," of usage. The users can select ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," to authorize. After a ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," is authorized, all of its APIs can be used directly."),(0,i.kt)("p",null,"When such an API is called:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the user has not accepted or rejected this authorization, a pop-up window will appear to ask the user if he/she wants to accept. The API can be called only after the user clicks to accept;"),(0,i.kt)("li",{parentName:"ul"},"If the user has accepted authorization, the API can be called directly;"),(0,i.kt)("li",{parentName:"ul"},"If the user has rejected authorization, no pop-up appears. Instead, API fail callback will be accessed directly. ",(0,i.kt)("strong",{parentName:"li"},"Developers should make the scenario compatible where the user has rejected to authorization."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/authorize.html"},"Reference"))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.address"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Postal address. ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html"},"wx.chooseAddress"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.camera"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Camera. [",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"},"camera"),"](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) component")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.invoice"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Gets invoice. ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html"},"wx.chooseInvoice"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.invoiceTitle"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Invoice title. ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html"},"wx.chooseInvoiceTitle"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.record"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Recording feature. ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html"},"wx.startRecord"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.userInfo"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"User information. ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html"},"wx.getUserInfo"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.userLocation"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Geographic location. ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html"},"wx.getLocation"),", ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html"},"wx.chooseLocation"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.werun"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"WeRun step counts. ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html"},"wx.getWeRunData"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"scope.writePhotosAlbum"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Saves to album. ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html"},"wx.saveImageToPhotosAlbum"),", ",(0,i.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html"},"wx.saveVideoToPhotosAlbum"))))))}d.isMDXComponent=!0}}]);