!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=29)}([function(t,e,n){"use strict";function r(t){return"[object Array]"===A.call(t)}function o(t){return"[object ArrayBuffer]"===A.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function u(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function a(t){return"number"==typeof t}function c(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===A.call(t)}function p(t){return"[object File]"===A.call(t)}function d(t){return"[object Blob]"===A.call(t)}function h(t){return"[object Function]"===A.call(t)}function m(t){return f(t)&&h(t.pipe)}function y(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function v(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=x(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)v(arguments[n],t);return e}function b(t,e,n){return v(e,function(e,r){t[r]=n&&"function"==typeof e?E(e,n):e}),t}var E=n(6),A=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:u,isString:s,isNumber:a,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:w,forEach:v,merge:x,extend:b,trim:g}},function(t,e,n){"use strict";(function(e){function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(2):void 0!==e&&(t=n(2)),t}var i=n(0),u=n(25),s=/^\)\]\}',?\n/,a={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(t,e){return u(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(s,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){c.headers[t]={}}),i.forEach(["post","put","patch"],function(t){c.headers[t]=i.merge(a)}),t.exports=c}).call(e,n(28))},function(t,e,n){"use strict";var r=n(0),o=n(17),i=n(20),u=n(26),s=n(24),a=n(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(19);t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var y=t.auth.username||"",g=t.auth.password||"";p.Authorization="Basic "+c(y+":"+g)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null;o(e,f,{data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d}),d=null}},d.onerror=function(){f(a("Network Error",t)),d=null},d.ontimeout=function(){f(a("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),d=null},r.isStandardBrowserEnv()){var w=n(22),v=(t.withCredentials||s(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;v&&(p[t.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(t){if("json"!==d.responseType)throw t}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var r=n(16);t.exports=function(t,e,n,o){return r(new Error(t),e,n,o)}},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function o(t){u.get("/posts",{params:s({quotes_quantity:1})}).then(function(e){t(null,e.data[0])},function(e){t(e,null)})}function i(t){u.get("/posts",{params:s({quotes_quantity:30})}).then(function(e){t.push.apply(t,r(e.data)),localStorage.setItem("_mt_random_quotes",JSON.stringify(t))})}var u=n(10);u.defaults.baseURL="https://quotesondesign.com/wp-json";var s=function(t){return{"filter[orderby]":"rand","filter[posts_per_page]":t.quotes_quantity,time:Date.now()}},a={cache:i,random:o};t.exports=a},function(t,e,n){"use strict";function r(t,e,n){var r="https://twitter.com/intent/tweet?text=";e=e.textContent.trim(),n=" — "+n.textContent.trim()+" #quote",e=e.length+n.length+2>140?'"'+e.substr(0,140-(n.length+5))+'..."':'"'+e+'"',r+=""+encodeURIComponent(e)+encodeURIComponent(n),t.dataset.url=r,t.removeAttribute("disabled")}function o(t,e){t.preventDefault();var n=320,r=480,o=window.screen.height/2-n/2,i=window.screen.width/2-r/2;window.open(e.dataset.url,"_blank","top="+o+",left="+i+",width="+r+",height="+n)}t.exports={processButton:r,tweet:o}},function(t,e){},function(t,e,n){t.exports=n(11)},function(t,e,n){"use strict";function r(t){var e=new u(t),n=i(u.prototype.request,e);return o.extend(n,u.prototype,e),o.extend(n,e),n}var o=n(0),i=n(6),u=n(13),s=n(1),a=r(s);a.Axios=u,a.create=function(t){return r(o.merge(s,t))},a.Cancel=n(3),a.CancelToken=n(12),a.isCancel=n(4),a.all=function(t){return Promise.all(t)},a.spread=n(27),t.exports=a,t.exports.default=a},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(3);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new u,response:new u}}var o=n(1),i=n(0),u=n(14),s=n(15),a=n(23),c=n(21);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url));var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(0),i=n(18),u=n(4),s=n(1);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return u(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";t.exports=function(t,e,n,r){return t.config=e,n&&(t.code=n),t.response=r,t}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n)):t(n)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),u="",s=0,a=i;o.charAt(0|s)||(a="=",s%1);u+=a.charAt(63&e>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;e=e<<8|n}return u}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var u=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),u.push(r(e)+"="+r(t))}))}),i=u.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e,n){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,u){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),u===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):y=-1,h.length&&s())}function s(){if(!m){var t=o(u);m=!0;for(var e=h.length;e;){for(d=h,h=[];++y<e;)d&&d[y].run();y=-1,e=h.length}d=null,m=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var d,h=[],m=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new a(t,e)),1!==h.length||m||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}n(9);var o=n(7),i=n(8),u=function(t){return"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)},s=["#B71C1C","#880E4F","#4A148C","#311B92","#1A237E","#0D47A1","#01579B","#006064","#004D40","#1B5E20","#33691E","#827717","#F57F17","#FF6F00","#E65100","#BF360C","#3E2723","#212121","#263238"],a=[],c=function(t,e,n){return t.style[e]=n},f=function(t,e){return t.forEach(function(t){return c.apply(void 0,r(t).concat([e]))})},l=localStorage._mt_random_quotes?JSON.parse(localStorage._mt_random_quotes):[];u(function(){var t=document.querySelector(".quote"),e=document.querySelectorAll(".icon");a.push([document.body,"background"]),a.push([t,"color"]),e.forEach(function(t){return a.push([t,"fill"])});var n=document.querySelector(".quote-body"),r=document.querySelector(".author"),u=document.querySelector(".button-next"),c=document.querySelector(".button-tweet"),p=function(e){n.innerHTML=e.content,r.innerHTML=e.title,f(a,s[Math.floor(Math.random()*s.length)]),i.processButton(c,n,r),t.classList.remove("loading"),u.removeAttribute("disabled")},d=function(){if(u.setAttribute("disabled",!0),c.setAttribute("disabled",!0),t.classList.add("loading"),l.length){l.length%5||localStorage.setItem("_mt_random_quotes",JSON.stringify(l));var e=l.shift();setTimeout(function(){return p(e)},100)}else o.cache(l),o.random(function(t,e){return!t&&p(e)})};u.addEventListener("click",function(t){return d(t)}),c.addEventListener("click",function(t){return i.tweet(t,c)}),setTimeout(function(){return d()},100)})}]);