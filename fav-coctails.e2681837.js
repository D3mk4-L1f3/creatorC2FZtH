!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequirebbb8;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequirebbb8=i),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var a=i("bpxeT"),o=i("2TvXO");i("ebAoS"),i("emRxq"),i("8QNXk"),i("ao5XN"),i("agT6o");a=i("bpxeT"),o=i("2TvXO"),a=i("bpxeT");var s=i("8MBJY"),u=i("a2hTj"),c=i("hKHmD"),l=i("8nrFW"),f=(o=i("2TvXO"),a=i("bpxeT"),s=i("8MBJY"),u=i("a2hTj"),i("1t1Wn")),h=(l=i("8nrFW"),o=i("2TvXO"),i("ds8z5")),d=(s=i("8MBJY"),u=i("a2hTj"),i("eYQtU")),p=(f=i("1t1Wn"),l=i("8nrFW"),{});Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e){return b(e)};var v=k(i("ge8co")),m=k(i("cZGw3")),y=k(i("fVNic")),g=k(i("gD1JV"));function k(e){return e&&e.__esModule?e:{default:e}}function b(e){var t="function"==typeof Map?new Map:void 0;return b=function(e){if(null===e||!m.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return v.default(e,arguments,y.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g.default(n,e)},b(e)}var _,x,w,C=i("2MbLg"),I=_={};function T(){throw new Error("setTimeout has not been defined")}function N(){throw new Error("clearTimeout has not been defined")}function S(e){if(x===setTimeout)return setTimeout(e,0);if((x===T||!x)&&setTimeout)return x=setTimeout,setTimeout(e,0);try{return x(e,0)}catch(t){try{return x.call(null,e,0)}catch(t){return x.call(this,e,0)}}}!function(){try{x="function"==typeof setTimeout?setTimeout:T}catch(e){x=T}try{w="function"==typeof clearTimeout?clearTimeout:N}catch(e){w=N}}();var E,R=[],P=!1,A=-1;function O(){P&&E&&(P=!1,E.length?R=E.concat(R):A=-1,R.length&&L())}function L(){if(!P){var e=S(O);P=!0;for(var t=R.length;t;){for(E=R,R=[];++A<t;)E&&E[A].run();A=-1,t=R.length}E=null,P=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===N||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{w(e)}catch(t){try{return w.call(null,e)}catch(t){return w.call(this,e)}}}(e)}}function D(e,t){this.fun=e,this.array=t}function M(){}I.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];R.push(new D(e,t)),1!==R.length||P||S(L)},D.prototype.run=function(){this.fun.apply(null,this.array)},I.title="browser",I.browser=!0,I.env={},I.argv=[],I.version="",I.versions={},I.on=M,I.addListener=M,I.once=M,I.off=M,I.removeListener=M,I.removeAllListeners=M,I.emit=M,I.prependListener=M,I.prependOnceListener=M,I.listeners=function(e){return[]},I.binding=function(e){throw new Error("process.binding is not supported")},I.cwd=function(){return"/"},I.chdir=function(e){throw new Error("process.chdir is not supported")},I.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var F=!1,z=!1,W="${JSCORE_VERSION}",U=function(e,t){if(!e)throw j(t)},j=function(e){return new Error("Firebase Database ("+W+") INTERNAL ASSERT FAILED: "+e)},q=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},B={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(h=64)),r.push(n[l],n[f],n[h],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(q(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new H;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},H=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(p)(Error)),V=function(e){var t=q(e);return B.encodeByteArray(t,!0)},X=function(e){return V(e).replace(/\./g,"")},K=function(e){try{return B.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){return Y(void 0,e)}function Y(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Y(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var J=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},Q=function(){try{return J()||function(){if(void 0!==_&&void 0!==_.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&K(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},$=function(e){var t,n;return null===(n=null===(t=Q())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Z=function(e){var t=$(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},ee=function(){var e;return null===(e=Q())||void 0===e?void 0:e.config},te=function(e){var t;return null===(t=Q())||void 0===t?void 0:t["_".concat(e)]},ne=function(){"use strict";function t(){var n=this;e(s)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(u)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[X(JSON.stringify({alg:"none",type:"JWT"})),X(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ae(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function oe(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function se(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ue(){return!0===F||!0===z}function ce(){try{return"object"==typeof indexedDB}catch(e){return!1}}function le(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function fe(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(h)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(h)(o),de.prototype.create),o}return r}(e(p)(Error)),de=function(){"use strict";function t(n,r,i){e(s)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(u)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?pe(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new he(a,u,i);return c}}]),t}();function pe(e,t){return e.replace(ve,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ve=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){return JSON.parse(e)}function ye(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=me(K(a[0])||""),n=me(K(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},ke=function(e){var t=ge(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _e(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function xe(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function we(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Ce(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(Ie(l)&&Ie(f)){if(!Ce(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,d=!1,p=void 0;try{for(var v,m=r[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){d=!0,p=e}finally{try{h||null==m.return||m.return()}finally{if(d)throw p}}return!0}function Ie(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(f)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function Ne(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(f)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function Se(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function t(){e(s)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(u)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],f=this.chain_[2],h=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=h^l&(f^h),u=1518500249):(s=l^f^h,u=1859775393):p<60?(s=l&f|h&(l|f),u=2400959708):(s=l^f^h,u=3395469782);var v=(c<<5|c>>>27)+s+d+u+n[p]&4294967295;d=h,h=f,f=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var Re=function(){"use strict";function t(n,r){var i=this;e(s)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(u)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Pe),void 0===r.error&&(r.error=Pe),void 0===r.complete&&(r.complete=Pe);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Pe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oe=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,U(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Le=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},De=144e5;function Me(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(De,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(e){return e&&e._delegate?e._delegate:e}var ze=function(){"use strict";function t(n,r,i){e(s)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(u)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),We="[DEFAULT]",Ue=function(){"use strict";function t(n,r){e(s)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(u)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new ne;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:We})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(f)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(l)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(l)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(f)(c.value,2),d=h[0],p=h[1],v=this.normalizeInstanceIdentifier(d);i===v&&p.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===We?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;return this.component?this.component.multipleInstances?e:We:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,qe,Be=function(){"use strict";function t(n){e(s)(this,t),this.name=n,this.providers=new Map}return e(u)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ue(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),He=(s=i("8MBJY"),u=i("a2hTj"),c=i("hKHmD"),l=i("8nrFW"),[]);(qe=je||(je={}))[qe.DEBUG=0]="DEBUG",qe[qe.VERBOSE=1]="VERBOSE",qe[qe.INFO=2]="INFO",qe[qe.WARN=3]="WARN",qe[qe.ERROR=4]="ERROR",qe[qe.SILENT=5]="SILENT";var Ve,Xe={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},Ke=je.INFO,Ge=(Ve={},e(c)(Ve,je.DEBUG,"log"),e(c)(Ve,je.VERBOSE,"log"),e(c)(Ve,je.INFO,"info"),e(c)(Ve,je.WARN,"warn"),e(c)(Ve,je.ERROR,"error"),Ve),Ye=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Ge[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(l)(i)))}},Je=function(){"use strict";function t(n){e(s)(this,t),this.name=n,this._logLevel=Ke,this._logHandler=Ye,this._userLogHandler=null,He.push(this)}return e(u)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in je))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Xe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.DEBUG].concat(e(l)(n))),this._logHandler.apply(this,[this,je.DEBUG].concat(e(l)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.VERBOSE].concat(e(l)(n))),this._logHandler.apply(this,[this,je.VERBOSE].concat(e(l)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.INFO].concat(e(l)(n))),this._logHandler.apply(this,[this,je.INFO].concat(e(l)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.WARN].concat(e(l)(n))),this._logHandler.apply(this,[this,je.WARN].concat(e(l)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,je.ERROR].concat(e(l)(n))),this._logHandler.apply(this,[this,je.ERROR].concat(e(l)(n)))}}]),t}();a=i("bpxeT");var Qe={};Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ze.default(e,t,n[t])}))}return e};var $e,Ze=($e=i("hKHmD"))&&$e.__esModule?$e:{default:$e};var et,tt;l=i("8nrFW"),o=i("2TvXO"),l=i("8nrFW");var nt=new WeakMap,rt=new WeakMap,it=new WeakMap,at=new WeakMap,ot=new WeakMap;var st={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return rt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||it.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ut(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(tt||(tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(ft(this),n),lt(nt.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return lt(t.apply(ft(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[ft(this),n].concat(e(l)(i)));return it.set(s,n.sort?n.sort():[n]),lt(s)}}function ct(e){return"function"==typeof e?ut(e):(e instanceof IDBTransaction&&function(e){if(!rt.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));rt.set(e,t)}}(e),t=e,(et||(et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,st):e);var t}function lt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(lt(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&nt.set(e,t)})).catch((function(){})),ot.set(n,t),n;var t,n;if(at.has(e))return at.get(e);var r=ct(e);return r!==e&&(at.set(e,r),ot.set(r,e)),r}var ft=function(e){return ot.get(e)};function ht(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=lt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(lt(s.result),e.oldVersion,e.newVersion,lt(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var dt=["get","getKey","getAll","getAllKeys","count"],pt=["put","add","delete","clear"],vt=new Map;function mt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(vt.get(n))return vt.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,s=pt.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(s||dt.includes(r))){var u,c=(u=e(a)(e(o).mark((function t(n){var a,u,c,f,h,d,p=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=p.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=p[c];return h=this.transaction(n,s?"readwrite":"readonly"),d=h.store,i&&(d=d.index(u.shift())),t.next=7,Promise.all([(f=d)[r].apply(f,e(l)(u)),s&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return vt.set(n,c),c}}}st=function(t){return e(Qe)({},t,{get:function(e,n,r){return mt(e,n)||t.get(e,n,r)},has:function(e,n){return!!mt(e,n)||t.has(e,n)}})}(st);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yt=function(){"use strict";function t(n){e(s)(this,t),this.container=n}return e(u)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var gt,kt,bt="@firebase/app",_t="0.9.18",xt=new Je("@firebase/app"),wt="[DEFAULT]",Ct=(gt={},e(c)(gt,bt,"fire-core"),e(c)(gt,"@firebase/app-compat","fire-core-compat"),e(c)(gt,"@firebase/analytics","fire-analytics"),e(c)(gt,"@firebase/analytics-compat","fire-analytics-compat"),e(c)(gt,"@firebase/app-check","fire-app-check"),e(c)(gt,"@firebase/app-check-compat","fire-app-check-compat"),e(c)(gt,"@firebase/auth","fire-auth"),e(c)(gt,"@firebase/auth-compat","fire-auth-compat"),e(c)(gt,"@firebase/database","fire-rtdb"),e(c)(gt,"@firebase/database-compat","fire-rtdb-compat"),e(c)(gt,"@firebase/functions","fire-fn"),e(c)(gt,"@firebase/functions-compat","fire-fn-compat"),e(c)(gt,"@firebase/installations","fire-iid"),e(c)(gt,"@firebase/installations-compat","fire-iid-compat"),e(c)(gt,"@firebase/messaging","fire-fcm"),e(c)(gt,"@firebase/messaging-compat","fire-fcm-compat"),e(c)(gt,"@firebase/performance","fire-perf"),e(c)(gt,"@firebase/performance-compat","fire-perf-compat"),e(c)(gt,"@firebase/remote-config","fire-rc"),e(c)(gt,"@firebase/remote-config-compat","fire-rc-compat"),e(c)(gt,"@firebase/storage","fire-gcs"),e(c)(gt,"@firebase/storage-compat","fire-gcs-compat"),e(c)(gt,"@firebase/firestore","fire-fst"),e(c)(gt,"@firebase/firestore-compat","fire-fst-compat"),e(c)(gt,"fire-js","fire-js"),e(c)(gt,"firebase","fire-js-all"),gt),It=new Map,Tt=new Map;function Nt(e,t){try{e.container.addComponent(t)}catch(n){xt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function St(e){var t=e.name;if(Tt.has(t))return xt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Tt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=It.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){Nt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function Et(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rt=(kt={},e(c)(kt,"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),e(c)(kt,"bad-app-name","Illegal App name: '{$appName}"),e(c)(kt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(c)(kt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(c)(kt,"no-options","Need to provide options, when not being deployed to hosting via source."),e(c)(kt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(c)(kt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(c)(kt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(c)(kt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(c)(kt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(c)(kt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),kt),Pt=new de("app","Firebase",Rt),At=function(){"use strict";function t(n,r,i){var a=this;e(s)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ze("app",(function(){return a}),"PUBLIC"))}return e(u)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}]),t}(),Ot="10.3.1";function Lt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:wt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Pt.create("bad-app-name",{appName:String(a)});if(n||(n=ee()),!n)throw Pt.create("no-options");var o=It.get(a);if(o){if(Ce(n,o.options)&&Ce(i,o.config))return o;throw Pt.create("duplicate-app",{appName:a})}var s=new Be(a),u=!0,c=!1,l=void 0;try{for(var f,h=Tt.values()[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=f.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var p=new At(n,i,s);return It.set(a,p),p}function Dt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=It.get(e);if(!t&&e===wt&&ee())return Lt();if(!t)throw Pt.create("no-app",{appName:e});return t}function Mt(e,t,n){var r,i=null!==(r=Ct[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void xt.warn(s.join(" "))}St(new ze("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ft="firebase-heartbeat-store",zt=null;function Wt(){return zt||(zt=ht("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Ft)}}).catch((function(e){throw Pt.create("idb-open",{originalErrorMessage:e.message})}))),zt}function Ut(e){return jt.apply(this,arguments)}function jt(){return(jt=e(a)(e(o).mark((function t(n){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Wt();case 3:return r=e.sent,e.next=6,r.transaction(Ft).objectStore(Ft).get(Ht(n));case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),e.t0 instanceof he?xt.warn(e.t0.message):(a=Pt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),xt.warn(a.message));case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function qt(e,t){return Bt.apply(this,arguments)}function Bt(){return(Bt=e(a)(e(o).mark((function t(n,r){var i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Wt();case 3:return i=e.sent,a=i.transaction(Ft,"readwrite"),s=a.objectStore(Ft),e.next=8,s.put(r,Ht(n));case 8:return e.next=10,a.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof he?xt.warn(e.t0.message):(u=Pt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),xt.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function Ht(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Yt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(u)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Xt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=Xt(),i=Kt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,s=i.unsentEntries,u=X(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function Xt(){return(new Date).toISOString().substring(0,10)}function Kt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Jt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Jt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Gt,Yt=function(){"use strict";function t(n){e(s)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(u)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",le().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Ut(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",qt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",qt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(l)(a.heartbeats).concat(e(l)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Jt(e){return X(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt="",St(new ze("platform-logger",(function(e){return new yt(e)}),"PRIVATE")),St(new ze("heartbeat",(function(e){return new Vt(e)}),"PRIVATE")),Mt(bt,_t,Gt),Mt(bt,_t,"esm2017"),Mt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Mt("firebase","10.3.1","app");h=i("ds8z5"),a=i("bpxeT"),s=i("8MBJY"),u=i("a2hTj"),c=i("hKHmD");var Qt={};Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.default=function(e,t,n){return Zt(e,t,n)};var $t=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Zt(e,t,n){return(Zt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=$t.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var en=i("fVNic");d=i("eYQtU"),f=i("1t1Wn"),l=i("8nrFW"),C=i("2MbLg"),o=i("2TvXO");function tn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function nn(e){return void 0!==e&&void 0!==e.enterprise}var rn=function t(n){"use strict";if(e(s)(this,t),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return e(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var on=an,sn=new de("auth","Firebase",an()),un=new Je("@firebase/auth");function cn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;un.logLevel<=je.WARN&&(a=un).warn.apply(a,["Auth (".concat(Ot,"): ").concat(t)].concat(e(l)(r)))}function ln(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;un.logLevel<=je.ERROR&&(a=un).error.apply(a,["Auth (".concat(Ot,"): ").concat(t)].concat(e(l)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw vn.apply(void 0,[t].concat(e(l)(r)))}function hn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return vn.apply(void 0,[t].concat(e(l)(r)))}function dn(t,n,r){var i=Object.assign(Object.assign({},on()),e(c)({},n,r));return new de("auth","Firebase",i).create(n,{appName:t.name})}function pn(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&fn(e,"argument-error"),dn(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function vn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(l)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(l)(u)))}return(a=sn).create.apply(a,[t].concat(e(l)(r)))}function mn(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw vn.apply(void 0,[n].concat(e(l)(i)))}function yn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw ln(t),new Error(t)}function gn(e,t){e||yn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function bn(){return"http:"===_n()||"https:"===_n()}function _n(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xn=function(){"use strict";function t(n,r){e(s)(this,t),this.shortDelay=n,this.longDelay=r,gn(r>n,"Short delay should be less than long delay!"),this.isMobile=ae()||se()}return e(u)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(bn()||oe()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t){gn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn,In=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Tn=(Cn={},e(c)(Cn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(c)(Cn,"MISSING_CUSTOM_TOKEN","internal-error"),e(c)(Cn,"INVALID_IDENTIFIER","invalid-email"),e(c)(Cn,"MISSING_CONTINUE_URI","internal-error"),e(c)(Cn,"INVALID_PASSWORD","wrong-password"),e(c)(Cn,"MISSING_PASSWORD","missing-password"),e(c)(Cn,"EMAIL_EXISTS","email-already-in-use"),e(c)(Cn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(c)(Cn,"INVALID_IDP_RESPONSE","invalid-credential"),e(c)(Cn,"INVALID_PENDING_TOKEN","invalid-credential"),e(c)(Cn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(c)(Cn,"MISSING_REQ_TYPE","internal-error"),e(c)(Cn,"EMAIL_NOT_FOUND","user-not-found"),e(c)(Cn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(c)(Cn,"EXPIRED_OOB_CODE","expired-action-code"),e(c)(Cn,"INVALID_OOB_CODE","invalid-action-code"),e(c)(Cn,"MISSING_OOB_CODE","internal-error"),e(c)(Cn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(c)(Cn,"INVALID_ID_TOKEN","invalid-user-token"),e(c)(Cn,"TOKEN_EXPIRED","user-token-expired"),e(c)(Cn,"USER_NOT_FOUND","user-token-expired"),e(c)(Cn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(c)(Cn,"PASSWORD_DOES_NOT_MEET_REQUIREMENTS","password-does-not-meet-requirements"),e(c)(Cn,"INVALID_CODE","invalid-verification-code"),e(c)(Cn,"INVALID_SESSION_INFO","invalid-verification-id"),e(c)(Cn,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(c)(Cn,"MISSING_SESSION_INFO","missing-verification-id"),e(c)(Cn,"SESSION_EXPIRED","code-expired"),e(c)(Cn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(c)(Cn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(c)(Cn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(c)(Cn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(c)(Cn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(c)(Cn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(c)(Cn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(c)(Cn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(c)(Cn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(c)(Cn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(c)(Cn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),e(c)(Cn,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),e(c)(Cn,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),e(c)(Cn,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),e(c)(Cn,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),e(c)(Cn,"MISSING_CLIENT_TYPE","missing-client-type"),e(c)(Cn,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),e(c)(Cn,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),e(c)(Cn,"INVALID_REQ_TYPE","invalid-req-type"),Cn),Nn=new xn(3e4,6e4);function Sn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function En(e,t,n,r){return Rn.apply(this,arguments)}function Rn(){return Rn=e(a)(e(o).mark((function t(n,r,i,s){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",Pn(n,u,e(a)(e(o).mark((function t(){var a,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},s&&("GET"===r?u=s:a={body:JSON.stringify(s)}),c=Te(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",In.fetch()(Dn(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Rn.apply(this,arguments)}function Pn(e,t,n){return An.apply(this,arguments)}function An(){return(An=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,d,p,v;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},Tn),r),t.prev=2,s=new Mn(n),t.next=6,Promise.race([i(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Fn(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,h=e(f)(l.split(" : "),2),d=h[0],p=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw Fn(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw Fn(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw Fn(n,"user-disabled",c);case 29:if(v=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){t.next=34;break}throw dn(n,v,p);case 34:fn(n,v);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof he)){t.next=41;break}throw t.t0;case 41:fn(n,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function On(e,t,n,r){return Ln.apply(this,arguments)}function Ln(){return Ln=e(a)(e(o).mark((function t(n,r,i,a){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,En(n,r,i,a,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&fn(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),Ln.apply(this,arguments)}function Dn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?wn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Mn=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(hn(n.auth,"network-request-failed"))}),Nn.get())}))}return e(u)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Fn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=hn(e,t,r);return i.customData._tokenResponse=n,i}function zn(e,t){return Wn.apply(this,arguments)}function Wn(){return(Wn=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"GET","/v2/recaptchaConfig",Sn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Un(e,t){return jn.apply(this,arguments)}function jn(){return(jn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qn(e,t){return Bn.apply(this,arguments)}function Bn(){return(Bn=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return Vn=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Fe(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,mn((s=Kn(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:a,authTime:Hn(Xn(s.auth_time)),issuedAtTime:Hn(Xn(s.iat)),expirationTime:Hn(Xn(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Vn.apply(this,arguments)}function Xn(e){return 1e3*Number(e)}function Kn(t){var n=e(f)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return ln("JWT malformed, contained fewer than 3 sections"),null;try{var o=K(i);return o?JSON.parse(o):(ln("Failed to decode base64 JWT payload"),null)}catch(e){return ln("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Gn(e,t){return Yn.apply(this,arguments)}function Yn(){return Yn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof he&&Jn(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Yn.apply(this,arguments)}function Jn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn=function(){"use strict";function t(n){e(s)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(u)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),$n=function(){"use strict";function t(n,r){e(s)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(u)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e){return er.apply(this,arguments)}function er(){return(er=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l,f,h,d,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Gn(n,qn(i,{idToken:a}));case 7:mn(null==(s=e.sent)?void 0:s.users.length,i,"internal-error"),u=s.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?rr(u.providerUserInfo):[],l=nr(n.providerData,c),f=n.isAnonymous,h=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),d=!!f&&h,p={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new $n(u.createdAt,u.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function tr(){return(tr=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Fe(n),e.next=3,Zn(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function nr(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(l)(r).concat(e(l)(n))}function rr(e){return e.map((function(e){var t=e.providerId,n=tn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ir(e,t){return ar.apply(this,arguments)}function ar(){return(ar=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Pn(n,{},e(a)(e(o).mark((function t(){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Te({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,s=a.tokenApiHost,u=a.apiKey,c=Dn(n,s,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",In.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or=function(){"use strict";function t(){e(s)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(u)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){mn(e.idToken,"internal-error"),mn(void 0!==e.idToken,"internal-error"),mn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,mn(n=Kn(t),"internal-error"),mn(void 0!==n.exp,"internal-error"),mn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(mn(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ir(t,n);case 2:a=e.sent,s=a.accessToken,u=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return yn("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(mn("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(mn("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(mn("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t){mn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var ur=function(){"use strict";function t(n){e(s)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=tn(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(l)(o.providerData):[],this.metadata=new $n(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(u)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Gn(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(mn(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Vn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return tr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(mn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){mn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Zn(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,Gn(t,Un(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,h=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,_=n.isAnonymous,x=n.providerData,w=n.stsTokenManager;mn(k&&w,e,"internal-error");var C=or.fromJSON(this.name,w);mn("string"==typeof k,e,"internal-error"),sr(f,e.name),sr(h,e.name),mn("boolean"==typeof b,e,"internal-error"),mn("boolean"==typeof _,e,"internal-error"),sr(d,e.name),sr(p,e.name),sr(v,e.name),sr(m,e.name),sr(y,e.name),sr(g,e.name);var I=new t({uid:k,auth:e,email:h,emailVerified:b,displayName:f,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:C,createdAt:y,lastLoginAt:g});return x&&Array.isArray(x)&&(I.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(o).mark((function a(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new or).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:s,isAnonymous:i}),e.next=5,Zn(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),cr=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){gn(e instanceof Function,"Expected a class definition");var t=cr.get(e);return t?(gn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,cr.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr=function(){"use strict";function t(){e(s)(this,t),this.type="NONE",this.storage={}}return e(u)(t,[{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();fr.type="NONE";var hr=fr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var pr=function(){"use strict";function t(n,r,i){e(s)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=dr(this.userKey,o.apiKey,u),this.fullPersistenceKey=dr("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(u)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?ur._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(o).mark((function s(){var u,c,l,f,h,d,p,v,m,y,g,k,b;return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.length){s.next=2;break}return s.abrupt("return",new t(lr(hr),n,i));case 2:return s.next=4,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=s.sent.filter((function(e){return e})),c=u[0]||lr(hr),l=dr(i,n.config.apiKey,n.name),f=null,h=!0,d=!1,p=void 0,s.prev=9,v=r[Symbol.iterator]();case 11:if(h=(m=v.next()).done){s.next=29;break}return y=m.value,s.prev=13,s.next=16,y._get(l);case 16:if(!(g=s.sent)){s.next=22;break}return k=ur._fromJSON(n,g),y!==c&&(f=k),c=y,s.abrupt("break",29);case 22:s.next=26;break;case 24:s.prev=24,s.t0=s.catch(13);case 26:h=!0,s.next=11;break;case 29:s.next=35;break;case 31:s.prev=31,s.t1=s.catch(9),d=!0,p=s.t1;case 35:s.prev=35,s.prev=36,h||null==v.return||v.return();case 38:if(s.prev=38,!d){s.next=41;break}throw p;case 41:return s.finish(38);case 42:return s.finish(35);case 43:if(b=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&b.length){s.next=46;break}return s.abrupt("return",new t(c,n,i));case 46:if(c=b[0],!f){s.next=50;break}return s.next=50,c._set(l,f.toJSON());case 50:return s.next=52,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return s.abrupt("return",new t(c,n,i));case 53:case"end":return s.stop()}}),s,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_r(t))return"Blackberry";if(xr(t))return"Webos";if(yr(t))return"Safari";if((t.includes("chrome/")||gr(t))&&!t.includes("edge/"))return"Chrome";if(br(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/firefox\//i.test(e)}function yr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/crios\//i.test(e)}function kr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/iemobile/i.test(e)}function br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/android/i.test(e)}function _r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/blackberry/i.test(e)}function xr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/webos/i.test(e)}function wr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Cr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return wr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ir(){return((e=ie()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Tr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();return wr(e)||br(e)||xr(e)||_r(e)||/windows phone/i.test(e)||kr(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=vr(ie());break;case"Worker":t="".concat(vr(ie()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Ot,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.queue=[]}return e(u)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,f,h,d,p,v,m,y;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,s=!1,u=void 0,e.prev=5,c=n.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){e.next=15;break}return f=l.value,e.next=11,f(t);case 11:f.onAbort&&i.push(f.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),s=!0,u=e.t0;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!s){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),h=!0,d=!1,p=void 0,e.prev=35,v=i[Symbol.iterator]();!(h=(m=v.next()).done);h=!0){y=m.value;try{y()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,p=e.t2;case 43:e.prev=43,e.prev=44,h||null==v.return||v.return();case 46:if(e.prev=46,!d){e.next=49;break}throw p;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}();function Er(e){return Rr.apply(this,arguments)}function Rr(){return Rr=
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",En(n,"GET","/v2/passwordPolicy",Sn(n,r)));case 2:case"end":return e.stop()}}),t)}))),Rr.apply(this,arguments)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr=function(){"use strict";function t(n){var r,i,a,o;e(s)(this,t);var u=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(r=u.minPasswordLength)&&void 0!==r?r:6,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),void 0!==u.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),void 0!==u.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),void 0!==u.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),void 0!==u.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(a=null===(i=n.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==a?a:"",this.forceUpgradeOnSignin=null!==(o=n.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=n.schemaVersion}return e(u)(t,[{key:"validatePassword",value:function(e){var t,n,r,i,a,o,s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(a=s.containsNumericCharacter)||void 0===a||a),s.isValid&&(s.isValid=null===(o=s.containsNonAlphanumericCharacter)||void 0===o||o),s}},{key:"validatePasswordLengthOptions",value:function(e,t){var n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}},{key:"validatePasswordCharacterOptions",value:function(e,t){var n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(var r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}},{key:"updatePasswordCharacterOptionsStatuses",value:function(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}]),t}(),Ar=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lr(this),this.idTokenSubscription=new Lr(this),this.beforeStateQueue=new Sr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(u)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=lr(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,pr.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(s=r.currentUser)||void 0===s?void 0:s.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,s=a,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:f=e.sent,c&&c!==l||!(null==f?void 0:f.user)||(s=f.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return mn(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(s));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Zn(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Fe(t):null)&&mn(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&mn(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(lr(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"validatePassword",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._getPasswordPolicyInternal()){e.next=3;break}return e.next=3,n._updatePasswordPolicy();case 3:if((i=n._getPasswordPolicyInternal()).schemaVersion===n.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION){e.next=6;break}return e.abrupt("return",Promise.reject(n._errorFactory.create("unsupported-password-policy-schema-version",{})));case 6:return e.abrupt("return",i.validatePassword(t));case 7:case"end":return e.stop()}}),r)})))()}},{key:"_getPasswordPolicyInternal",value:function(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}},{key:"_updatePasswordPolicy",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Er(t);case 2:r=e.sent,i=new Pr(r),null===t.tenantId?t._projectPasswordPolicy=i:t._tenantPasswordPolicies[t.tenantId]=i;case 5:case"end":return e.stop()}}),n)})))()}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new de("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"authStateReady",value:function(){var e=this;return new Promise((function(t,n){if(e.currentUser)t();else var r=e.onAuthStateChanged((function(){r(),t()}),n)}))}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return mn(i=t&&lr(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,pr.create(n,[lr(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(s=n.redirectUser)||void 0===s?void 0:s._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=!1,s=this._isInitialized?Promise.resolve():this._initializationPromise;if(mn(s,this,"internal-error"),s.then((function(){o||a(i.currentUser)})),"function"==typeof t){var u=e.addObserver(t,n,r);return function(){o=!0,u()}}var c=e.addObserver(t);return function(){o=!0,c()}}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return mn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(c)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,t._getAppCheckToken();case 9:return(s=n.sent)&&(i["X-Firebase-AppCheck"]=s),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,null===(r=t.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=e.sent)?void 0:i.error)&&cn("Error while retrieving App Check token: ".concat(i.error)),e.abrupt("return",null==i?void 0:i.token);case 6:case"end":return e.stop()}}),n)})))()}}]),t}();function Or(e){return Fe(e)}var Lr=function(){"use strict";function t(n){var r,i,a=this;e(s)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Re((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(u)(t,[{key:"next",get:function(){return mn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=hn("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Mr(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var Fr="https://www.google.com/recaptcha/enterprise.js?render=",zr="NO_RECAPTCHA",Wr=function(){"use strict";function t(n){e(s)(this,t),this.type="recaptcha-enterprise",this.auth=Or(n)}return e(u)(t,[{key:"verify",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){var s,u,c;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s=function(e){return u.apply(this,arguments)},u=function(){return u=e(a)(e(o).mark((function t(r){return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){t.next=3;break}return t.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){t.next=5;break}return t.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return t.abrupt("return",new Promise(function(){var t=e(a)(e(o).mark((function t(n,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:zn(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new rn(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 6:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)},c=function(e,n,r){var i=window.grecaptcha;nn(i)?i.enterprise.ready((function(){i.enterprise.execute(e,{action:t}).then((function(e){n(e)})).catch((function(){n(zr)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){s(r.auth).then((function(r){if(!n&&nn(window.grecaptcha))c(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Dr(Fr+r).then((function(){c(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),t}();function Ur(e,t,n){return jr.apply(this,arguments)}function jr(){return jr=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]&&l[3],s=new Wr(n),e.prev=3,e.next=6,s.verify(i);case 6:u=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,s.verify(i,!0);case 13:u=e.sent;case 14:return c=Object.assign({},r),a?Object.assign(c,{captchaResp:u}):Object.assign(c,{captchaResponse:u}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",c);case 19:case"end":return e.stop()}}),t,null,[[3,9]])}))),jr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qr(e,t){var n=Et(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Ce(n.getOptions(),null!=t?t:{}))return r;fn(r,"already-initialized")}return n.initialize({options:t})}function Br(t,n,r){var i=Or(t);mn(i._canInitEmulator,i,"emulator-config-failed"),mn(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=Hr(n),s=function(t){var n=Hr(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Vr(i.substr(o.length+1))}}var s=e(f)(i.split(":"),2);return{host:s[0],port:Vr(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Hr(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Xr=function(){"use strict";function t(n,r){e(s)(this,t),this.providerId=n,this.signInMethod=r}return e(u)(t,[{key:"toJSON",value:function(){return yn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return yn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return yn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return yn("not implemented")}}]),t}();function Kr(e,t){return Gr.apply(this,arguments)}function Gr(){return(Gr=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Yr(e,t){return Jr.apply(this,arguments)}function Jr(){return(Jr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:signInWithPassword",Sn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qr(e,t){return $r.apply(this,arguments)}function $r(){return($r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Zr(e,t){return ei.apply(this,arguments)}function ei(){return(ei=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(s)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=u,o}return e(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s,u;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(s={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,Ur(t,s,"signInWithPassword");case 8:return u=r.sent,r.abrupt("return",Yr(t,u));case 12:return r.abrupt("return",Yr(t,s).catch(function(){var n=e(a)(e(o).mark((function n(r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==r.code){e.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),e.next=4,Ur(t,s,"signInWithPassword");case 4:return i=e.sent,e.abrupt("return",Yr(t,i));case 8:return e.abrupt("return",Promise.reject(r));case 9:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",Qr(t,{email:n._email,oobCode:n._password}));case 14:fn(t,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Kr(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Zr(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:fn(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Xr);function ni(e,t){return ri.apply(this,arguments)}function ri(){return(ri=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:signInWithIdp",Sn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ii=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return ni(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,ni(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,ni(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Te(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fn("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=tn(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Xr);function ai(e,t){return oi.apply(this,arguments)}function oi(){return(oi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:sendVerificationCode",Sn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function si(){return(si=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:signInWithPhoneNumber",Sn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ui(){return(ui=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,On(n,"POST","/v1/accounts:signInWithPhoneNumber",Sn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Fn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ci=e(c)({},"USER_NOT_FOUND","user-not-found");function li(){return(li=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",On(n,"POST","/v1/accounts:signInWithPhoneNumber",Sn(n,i),ci));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fi=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return si.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ui.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return li.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Xr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hi=function(){"use strict";function t(n){var r,i,a,o,u,c;e(s)(this,t);var l=Ne(Se(n)),f=null!==(r=l.apiKey)&&void 0!==r?r:null,h=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);mn(f&&h&&d,"argument-error"),this.apiKey=f,this.operation=d,this.code=h,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(u)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=Ne(Se(e)).link,n=t?Ne(Se(t)).deep_link_id:null,r=Ne(Se(e)).deep_link_id;return(r?Ne(Se(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var di=function(){"use strict";function t(){e(s)(this,t),this.providerId=t.PROVIDER_ID}return e(u)(t,null,[{key:"credential",value:function(e,t){return ti._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=hi.parseLink(t);return mn(n,"argument-error"),ti._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();di.PROVIDER_ID="password",di.EMAIL_PASSWORD_SIGN_IN_METHOD="password",di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pi=function(){"use strict";function t(n){e(s)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(u)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),vi=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(l)(this.scopes)}}]),r}(pi),mi=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){return e(s)(this,r),n.call(this,"facebook.com")}return e(u)(r,null,[{key:"credential",value:function(e){return ii._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(vi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mi.FACEBOOK_SIGN_IN_METHOD="facebook.com",mi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yi=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){var t;return e(s)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(u)(r,null,[{key:"credential",value:function(e,t){return ii._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(vi);yi.GOOGLE_SIGN_IN_METHOD="google.com",yi.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gi=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){return e(s)(this,r),n.call(this,"github.com")}return e(u)(r,null,[{key:"credential",value:function(e){return ii._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(vi);gi.GITHUB_SIGN_IN_METHOD="github.com",gi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ki=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){return e(s)(this,r),n.call(this,"twitter.com")}return e(u)(r,null,[{key:"credential",value:function(e,t){return ii._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(vi);function bi(e,t){return _i.apply(this,arguments)}function _i(){return(_i=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:signUp",Sn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ki.TWITTER_SIGN_IN_METHOD="twitter.com",ki.PROVIDER_ID="twitter.com";var xi=function(){"use strict";function t(n){e(s)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(u)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(o).mark((function a(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ur._fromIdTokenResponse(n,i,s);case 2:return u=e.sent,c=wi(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return s=wi(i),e.abrupt("return",new t({user:n,providerId:s,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function wi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ci=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i,a,o){var u,c;return e(s)(this,r),(u=n.call(this,i.code,i.message)).operationType=a,u.user=o,Object.setPrototypeOf(e(h)(u),r.prototype),u.customData={appName:t.name,tenantId:null!==(c=t.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a},u}return e(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(he);function Ii(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Ci._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e,t){return Ni.apply(this,arguments)}function Ni(){return Ni=e(a)(e(o).mark((function t(n,r){var i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>2&&void 0!==s[2]&&s[2],e.t0=Gn,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",xi._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Ni.apply(this,arguments)}function Si(e,t){return Ei.apply(this,arguments)}function Ei(){return Ei=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,f=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=n.auth,s="reauthenticate",e.prev=3,e.next=6,Gn(n,Ii(a,s,r,n),i);case 6:return mn((u=e.sent).idToken,a,"internal-error"),mn(c=Kn(u.idToken),a,"internal-error"),l=c.sub,mn(n.uid===l,a,"user-mismatch"),e.abrupt("return",xi._forOperation(n,s,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&fn(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Ei.apply(this,arguments)}function Ri(e,t){return Pi.apply(this,arguments)}function Pi(){return Pi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,Ii(n,a,r);case 4:return s=e.sent,e.next=7,xi._fromIdTokenResponse(n,a,s);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),Pi.apply(this,arguments)}function Ai(e,t){return Oi.apply(this,arguments)}function Oi(){return(Oi=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ri(Or(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Li(e){return Di.apply(this,arguments)}function Di(){return(Di=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=Or(n))._getPasswordPolicyInternal()){e.next=4;break}return e.next=4,r._updatePasswordPolicy();case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Mi(e,t,n){return Fi.apply(this,arguments)}function Fi(){return Fi=e(a)(e(o).mark((function t(n,r,i){var s,u,c,l,f,h,d;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=Or(n),c={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(s=u._getRecaptchaConfig())||void 0===s?void 0:s.emailPasswordEnabled)){t.next=11;break}return t.next=7,Ur(u,c,"signUpPassword");case 7:f=t.sent,l=bi(u,f),t.next=12;break;case 11:l=bi(u,c).catch(function(){var t=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=6;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,Ur(u,c,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",bi(u,r));case 6:throw n;case 7:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 12:return t.next=14,l.catch((function(e){throw"auth/password-does-not-meet-requirements"===e.code&&Li(n),e}));case 14:return h=t.sent,t.next=17,xi._fromIdTokenResponse(u,"signIn",h);case 17:return d=t.sent,t.next=20,u._updateCurrentUser(d.user);case 20:return t.abrupt("return",d);case 21:case"end":return t.stop()}}),t)}))),Fi.apply(this,arguments)}function zi(t,n,r){return Ai(Fe(t),di.credential(n,r)).catch((i=e(a)(e(o).mark((function n(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw"auth/password-does-not-meet-requirements"===r.code&&Li(t),r;case 2:case"end":return e.stop()}}),n)}))),function(e){return i.apply(this,arguments)}));var i}function Wi(e,t,n,r){return Fe(e).onIdTokenChanged(t,n,r)}function Ui(e,t,n){return Fe(e).beforeAuthStateChanged(t,n)}function ji(e,t,n,r){return Fe(e).onAuthStateChanged(t,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qi(e,t){return En(e,"POST","/v2/accounts/mfaEnrollment:start",Sn(e,t))}function Bi(e,t){return En(e,"POST","/v2/accounts/mfaEnrollment:finalize",Sn(e,t))}new WeakMap;var Hi="__sak",Vi=function(){"use strict";function t(n,r){e(s)(this,t),this.storageRetriever=n,this.type=r}return e(u)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){var t,i;return e(s)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(yr(i=ie())||wr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Tr(),t._shouldAllowMigration=!0,t}return e(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Ir()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Qt)(e(en)(r.prototype),"_set",i).call(s,t,n);case 2:s.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Qt)(e(en)(r.prototype),"_get",n).call(i,t);case 2:return s=a.sent,i.localCache[t]=JSON.stringify(s),a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Qt)(e(en)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(Vi);Xi.type="LOCAL";var Ki=Xi,Gi=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){return e(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Vi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gi.type="SESSION";var Yi=Gi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return Promise.all(t.map((n=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qi=function(){"use strict";function t(n){e(s)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(u)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s,u,c,l,f,h,d;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=(i=t).data,u=s.eventId,c=s.eventType,l=s.data,null==(f=n.handlersMap[c])?void 0:f.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),h=Array.from(f).map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,Ji(h);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $i(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi.receivers=[];var Zi=function(){"use strict";function t(n){e(s)(this,t),this.target=n,this.handlers=new Set}return e(u)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(o).mark((function a(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var o=$i("",20);s.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:s,onMessage:function(t){var n=t;if(n.data.eventId===o)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),s.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:o,data:n},[s.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){return window}function ta(e){ea().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){return void 0!==ea().WorkerGlobalScope&&"function"==typeof ea().importScripts}function ra(){return ia.apply(this,arguments)}function ia(){return(ia=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var aa="firebaseLocalStorageDb",oa="firebaseLocalStorage",sa="fbase_key",ua=function(){"use strict";function t(n){e(s)(this,t),this.request=n}return e(u)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function ca(e,t){return e.transaction([oa],t?"readwrite":"readonly").objectStore(oa)}function la(){var e=indexedDB.deleteDatabase(aa);return new ua(e).toPromise()}function fa(){var t=indexedDB.open(aa,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(oa,{keyPath:sa})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(oa)){e.next=12;break}return i.close(),e.next=5,la();case 5:return e.t0=n,e.next=8,fa();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function ha(e,t,n){return da.apply(this,arguments)}function da(){return(da=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=ca(n,!0).put((a={},e(c)(a,sa,r),e(c)(a,"value",i),a)),t.abrupt("return",new ua(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function pa(e,t){return va.apply(this,arguments)}function va(){return(va=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ca(n,!1).get(r),e.next=3,new ua(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ma(e,t){var n=ca(e,!0).delete(t);return new ua(n).toPromise()}var ya=function(){"use strict";function t(){e(s)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(u)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,fa();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",na()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=Qi._getInstance(na()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(o).mark((function n(r,i){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,ra();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Zi(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,fa();case 5:return n=e.sent,e.next=8,ha(n,Hi,"1");case 8:return e.next=10,ma(n,Hi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return ha(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return pa(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return ma(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u,c,l,f,h,d,p,v,m,y,g,k,b;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=ca(e,!1).getAll();return new ua(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(s=(f=l.next()).done);s=!0)h=f.value,d=h.fbase_key,p=h.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(p)&&(t.notifyListeners(d,p),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,y=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=g.next()).done);v=!0)b=k.value,t.localCache[b]&&!a.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,y=e.t1;case 35:e.prev=35,e.prev=36,v||null==g.return||g.return();case 38:if(e.prev=38,!m){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();ya.type="LOCAL";var ga=ya;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(e,t){return En(e,"POST","/v2/accounts/mfaSignIn:start",Sn(e,t))}function ba(e,t){return En(e,"POST","/v2/accounts/mfaSignIn:finalize",Sn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Mr("rcb"),new xn(3e4,6e4);var _a="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e,t,n){return wa.apply(this,arguments)}function wa(){return(wa=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,f,h,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(s=e.sent,e.prev=4,mn("string"==typeof s,n,"argument-error"),mn(i.type===_a,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return mn("enroll"===c.type,n,"internal-error"),e.next=15,qi(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return mn("signin"===c.type,n,"internal-error"),mn(f=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,ka(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:s}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ai(n,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ca=function(){"use strict";function t(n){e(s)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Or(n)}return e(u)(t,[{key:"verifyPhoneNumber",value:function(e,t){return xa(this.auth,e,Fe(t))}}],[{key:"credential",value:function(e,t){return fi._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?fi._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ia(e,t){return t?lr(t):(mn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ca.PROVIDER_ID="phone",Ca.PHONE_SIGN_IN_METHOD="phone";var Ta=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(u)(r,[{key:"_getIdTokenResponse",value:function(e){return ni(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return ni(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return ni(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Xr);function Na(e){return Ri(e.auth,new Ta(e),e.bypassAuthState)}function Sa(e){var t=e.auth,n=e.user;return mn(n,t,"internal-error"),Si(n,new Ta(e),e.bypassAuthState)}function Ea(e){return Ra.apply(this,arguments)}function Ra(){return(Ra=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,mn(i=n.user,r,"internal-error"),e.abrupt("return",Ti(i,new Ta(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pa=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(s)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(u)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(o).mark((function t(r,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return f={auth:n.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:s||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Na;case"linkViaPopup":case"linkViaRedirect":return Ea;case"reauthViaPopup":case"reauthViaRedirect":return Sa;default:fn(this.auth,"internal-error")}}},{key:"resolve",value:function(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Aa=new xn(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e,t,n){return La.apply(this,arguments)}function La(){return(La=e(a)(e(o).mark((function t(n,r,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Or(n),pn(n,r,pi),s=Ia(a,i),u=new Da(a,"signInViaPopup",r,s),e.abrupt("return",u.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Da=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i,a,o,u){var c;return e(s)(this,r),(c=n.call(this,t,i,o,u)).provider=a,c.authWindow=null,c.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(h)(c),c}return e(u)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return mn(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return gn(1===t.filter.length,"Popup operations only handle one event"),r=$i(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(hn(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(hn(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(hn(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,Aa.get())};t()}}]),r}(Pa);Da.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ma=new Map,Fa=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(u)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Ma.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,za(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Qt)(e(en)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:s=i.t0,a=function(){return Promise.resolve(s)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Ma.set(n.auth._key(),a);case 21:return n.bypassAuthState||Ma.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,s=function(){return e(Qt)(e(en)(r.prototype),"onAuthEvent",n)};return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",s().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",s().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Pa);function za(e,t){return Wa.apply(this,arguments)}function Wa(){return(Wa=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=qa(r),a=ja(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ua(e,t){Ma.set(e._key(),t)}function ja(e){return lr(e._redirectPersistence)}function qa(e){return dr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(e,t){return Ha.apply(this,arguments)}function Ha(){return Ha=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Or(n),s=Ia(a,r),u=new Fa(a,s,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),Ha.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Va=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(u)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ka(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Ka(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(hn(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xa(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Xa(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Xa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Ka(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Ga(e){return Ya.apply(this,arguments)}function Ya(){return Ya=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",En(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),Ya.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ja=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qa=/^https?/;function $a(){return($a=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ga(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,s=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Za(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,s=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:fn(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Za(e){var t=kn(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Qa.test(r))return!1;if(Ja.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo=new xn(3e4,6e4);function to(){var t=ea().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(l)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var no=null;function ro(e){return no=no||function(e){return new Promise((function(t,n){var r,i,a;function o(){to(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){to(),n(hn(e,"network-request-failed"))},timeout:eo.get()})}if(null===(i=null===(r=ea().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=ea().gapi)||void 0===a?void 0:a.load)){var s=Mr("iframefcb");return ea()[s]=function(){gapi.load?o():n(hn(e,"network-request-failed"))},Dr("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw no=null,e}))}(e),no}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io=new xn(5e3,15e3),ao={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function so(e){var t=e.config;mn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?wn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Ot},i=oo.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(Te(r).slice(1))}function uo(e){return co.apply(this,arguments)}function co(){return co=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ro(n);case 2:return r=t.sent,mn(i=ea().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:so(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ao,dontclear:!0},(function(t){return new Promise((r=e(a)(e(o).mark((function r(i,a){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){ea().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=hn(n,"network-request-failed"),u=ea().setTimeout((function(){a(s)}),io.get()),t.ping(c).then(c,(function(){a(s)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),co.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fo="_blank",ho="http://localhost",po=function(){"use strict";function t(n){e(s)(this,t),this.window=n,this.associatedEvent=null}return e(u)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function vo(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},lo),{width:i.toString(),height:a.toString(),top:o,left:s}),l=ie().toLowerCase();r&&(u=gr(l)?fo:r),mr(l)&&(n=n||ho,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(f)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(Cr(l)&&"_self"!==u)return mo(n||"",u),new po(null);var d=window.open(n||"",u,h);mn(d,t,"popup-blocked");try{d.focus()}catch(e){}return new po(d)}function mo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yo=encodeURIComponent("fac");function go(e,t,n,r,i,a){return ko.apply(this,arguments)}function ko(){return(ko=e(a)(e(o).mark((function t(n,r,i,a,s,u){var c,l,h,d,p,v,m,y,g,k,b,_,x,w,C,I,T,N,S;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(mn(n.config.authDomain,n,"auth-domain-config-required"),mn(n.config.apiKey,n,"invalid-api-key"),c={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:Ot,eventId:s},!(r instanceof pi)){t.next=24;break}for(r.setDefaultLanguage(n.languageCode),c.providerId=r.providerId||"",xe(r.getCustomParameters())||(c.customParameters=JSON.stringify(r.getCustomParameters())),l=!0,h=!1,d=void 0,t.prev=8,p=Object.entries(u||{})[Symbol.iterator]();!(l=(v=p.next()).done);l=!0)m=e(f)(v.value,2),y=m[0],g=m[1],c[y]=g;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),h=!0,d=t.t0;case 16:t.prev=16,t.prev=17,l||null==p.return||p.return();case 19:if(t.prev=19,!h){t.next=22;break}throw d;case 22:return t.finish(19);case 23:return t.finish(16);case 24:for(r instanceof vi&&(k=r.getScopes().filter((function(e){return""!==e}))).length>0&&(c.scopes=k.join(",")),n.tenantId&&(c.tid=n.tenantId),b=c,_=!0,x=!1,w=void 0,t.prev=28,C=Object.keys(b)[Symbol.iterator]();!(_=(I=C.next()).done);_=!0)T=I.value,void 0===b[T]&&delete b[T];t.next=36;break;case 32:t.prev=32,t.t1=t.catch(28),x=!0,w=t.t1;case 36:t.prev=36,t.prev=37,_||null==C.return||C.return();case 39:if(t.prev=39,!x){t.next=42;break}throw w;case 42:return t.finish(39);case 43:return t.finish(36);case 44:return t.next=46,n._getAppCheckToken();case 46:return N=t.sent,S=N?"#".concat(yo,"=").concat(encodeURIComponent(N)):"",t.abrupt("return","".concat(bo(n),"?").concat(Te(b).slice(1)).concat(S));case 49:case"end":return t.stop()}}),t,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function bo(e){var t=e.config;return t.emulator?wn(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _o="webStorageSupport",xo=function(){"use strict";function t(){e(s)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yi,this._completeRedirectFn=Ba,this._overrideRedirectResult=Ua}return e(u)(t,[{key:"_openPopup",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return gn(null===(u=s.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),e.next=4,go(t,n,r,kn(),i);case 4:return c=e.sent,e.abrupt("return",vo(t,c,$i()));case 6:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._originValidation(t);case 2:return e.next=4,go(t,n,r,kn(),i);case 4:return ta(e.sent),e.abrupt("return",new Promise((function(){})));case 7:case"end":return e.stop()}}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(gn(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,uo(t);case 2:return i=e.sent,a=new Va(t),i.register("authEvent",(function(e){return mn(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(_o,{type:_o},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),fn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return $a.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Tr()||yr()||wr()}}]),t}(),wo=xo,Co=function(){"use strict";function t(n){e(s)(this,t),this.factorId=n}return e(u)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return yn("unexpected MultiFactorSessionType")}}}]),t}(),Io=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return En(e,"POST","/v2/accounts/mfaEnrollment:finalize",Sn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return En(e,"POST","/v2/accounts/mfaSignIn:finalize",Sn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Co);(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertion",value:function(e){return Io._fromCredential(e)}}]),t}()).FACTOR_ID="phone",(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return To._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return To._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mn(void 0!==(null===(r=(i=t).user)||void 0===r?void 0:r.auth),"internal-error"),e.next=5,n=i.user.auth,o={idToken:i.credential,totpEnrollmentInfo:{}},En(n,"POST","/v2/accounts/mfaEnrollment:start",Sn(n,o));case 5:return a=e.sent,e.abrupt("return",No._fromStartTotpMfaEnrollmentResponse(a,i.user.auth));case 7:case"end":return e.stop()}var n,o}),n)})))()}}]),t}()).FACTOR_ID="totp";var To=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this,"totp")).otp=t,o.enrollmentId=i,o.secret=a,o}return e(u)(r,[{key:"_finalizeEnroll",value:function(t,n,r){var i=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mn(void 0!==i.secret,t,"argument-error"),e.abrupt("return",Bi(t,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return e.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mn(void 0!==r.enrollmentId&&void 0!==r.otp,t,"argument-error"),a={verificationCode:r.otp},e.abrupt("return",ba(t,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return e.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Co),No=function(){"use strict";function t(n,r,i,a,o,u,c){e(s)(this,t),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return e(u)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(So(e)||So(t))&&(r=!0),r&&(So(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),So(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}}]),t}();function So(e){return void 0===e||0===(null==e?void 0:e.length)}var Eo="@firebase/auth",Ro="1.3.0",Po=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.internalListeners=new Map}return e(u)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){mn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ao,Oo=te("authIdTokenMaxAge")||300,Lo=null,Do=function(t){return n=e(a)(e(o).mark((function n(r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Oo)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==i?void 0:i.token,Lo!==s){e.next=12;break}return e.abrupt("return");case 12:return Lo=s,e.next=15,fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};Ao="Browser",St(new ze("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;mn(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:Ao,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nr(Ao)},l=new Ar(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),St(new ze("auth-internal",(function(e){var t=Or(e.getProvider("auth").getImmediate());return new Po(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Eo,Ro,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ao)),Mt(Eo,Ro,"esm2017");var Mo,Fo;a=i("bpxeT"),s=i("8MBJY"),u=i("a2hTj"),c=i("hKHmD"),f=i("1t1Wn"),l=i("8nrFW"),o=i("2TvXO"),a=i("bpxeT"),c=i("hKHmD"),l=i("8nrFW"),o=i("2TvXO"),a=i("bpxeT"),l=i("8nrFW"),o=i("2TvXO"),l=i("8nrFW");var zo=new WeakMap,Wo=new WeakMap,Uo=new WeakMap,jo=new WeakMap,qo=new WeakMap;var Bo={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Wo.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Uo.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xo(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ho(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fo||(Fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Ko(this),n),Xo(zo.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Xo(t.apply(Ko(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[Ko(this),n].concat(e(l)(i)));return Uo.set(s,n.sort?n.sort():[n]),Xo(s)}}function Vo(e){return"function"==typeof e?Ho(e):(e instanceof IDBTransaction&&function(e){if(!Wo.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Wo.set(e,t)}}(e),t=e,(Mo||(Mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Bo):e);var t}function Xo(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Xo(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&zo.set(e,t)})).catch((function(){})),qo.set(n,t),n;var t,n;if(jo.has(e))return jo.get(e);var r=Vo(e);return r!==e&&(jo.set(e,r),qo.set(r,e)),r}var Ko=function(e){return qo.get(e)};function Go(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Xo(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Xo(s.result),e.oldVersion,e.newVersion,Xo(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Yo=["get","getKey","getAll","getAllKeys","count"],Jo=["put","add","delete","clear"],Qo=new Map;function $o(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Qo.get(n))return Qo.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,s=Jo.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(s||Yo.includes(r))){var u,c=(u=e(a)(e(o).mark((function t(n){var a,u,c,f,h,d,p=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=p.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=p[c];return h=this.transaction(n,s?"readwrite":"readonly"),d=h.store,i&&(d=d.index(u.shift())),t.next=7,Promise.all([(f=d)[r].apply(f,e(l)(u)),s&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return Qo.set(n,c),c}}}!function(e){Bo=e(Bo)}((function(t){return e(Qe)({},t,{get:function(e,n,r){return $o(e,n)||t.get(e,n,r)},has:function(e,n){return!!$o(e,n)||t.has(e,n)}})}));var Zo,es="@firebase/installations",ts="0.6.4",ns=1e4,rs="w:".concat(ts),is="FIS_v2",as=36e5,os=(Zo={},e(c)(Zo,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(c)(Zo,"not-registered","Firebase Installation is not registered."),e(c)(Zo,"installation-not-found","Firebase Installation not found."),e(c)(Zo,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(c)(Zo,"app-offline","Could not process request. Application offline."),e(c)(Zo,"delete-pending-registration","Can't delete installation while there is a pending registration request."),Zo),ss=new de("installations","Installations",os);function us(e){return e instanceof he&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function ls(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function fs(e,t){return hs.apply(this,arguments)}function hs(){return(hs=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",ss.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ds(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ps(e,t){var n=t.refreshToken,r=ds(e);return r.append("Authorization",function(e){return"".concat(is," ").concat(e)}(n)),r}function vs(e){return ms.apply(this,arguments)}function ms(){return(ms=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ys(e,t){return gs.apply(this,arguments)}function gs(){return(gs=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,f,h,d,p,v,m;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,s=r.fid,u=cs(i),c=ds(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(f=e.sent)&&c.append("x-firebase-client",f);case 9:return h={fid:s,authVersion:is,appId:i.appId,sdkVersion:rs},d={method:"POST",headers:c,body:JSON.stringify(h)},e.next=13,vs((function(){return fetch(u,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return v=e.sent,m={fid:v.fid||s,registrationStatus:2,refreshToken:v.refreshToken,authToken:ls(v.authToken)},e.abrupt("return",m);case 22:return e.next=24,fs("Create Installation",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bs=/^[cdef][\w-]{21}$/;function _s(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(l)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return bs.test(n)?n:""}catch(e){return""}}function xs(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ws=new Map;function Cs(e,t){var n=xs(e);Is(n,t),function(e,t){var n=Ns();n&&n.postMessage({key:e,fid:t});Ss()}(n,t)}function Is(e,t){var n=ws.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var Ts=null;function Ns(){return!Ts&&"BroadcastChannel"in self&&((Ts=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Is(e.data.key,e.data.fid)}),Ts}function Ss(){0===ws.size&&Ts&&(Ts.close(),Ts=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Es="firebase-installations-store",Rs=null;function Ps(){return Rs||(Rs=Go("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Es)}})),Rs}function As(e,t){return Os.apply(this,arguments)}function Os(){return(Os=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=xs(n),e.next=3,Ps();case 3:return a=e.sent,s=a.transaction(Es,"readwrite"),u=s.objectStore(Es),e.next=8,u.get(i);case 8:return c=e.sent,e.next=11,u.put(r,i);case 11:return e.next=13,s.done;case 13:return c&&c.fid===r.fid||Cs(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ls(e){return Ds.apply(this,arguments)}function Ds(){return(Ds=e(a)(e(o).mark((function t(n){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=xs(n),e.next=3,Ps();case 3:return i=e.sent,a=i.transaction(Es,"readwrite"),e.next=7,a.objectStore(Es).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ms(e,t){return Fs.apply(this,arguments)}function Fs(){return(Fs=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=xs(n),e.next=3,Ps();case 3:return a=e.sent,s=a.transaction(Es,"readwrite"),u=s.objectStore(Es),e.next=8,u.get(i);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,u.delete(i);case 13:e.next=17;break;case 15:return e.next=17,u.put(l,i);case 17:return e.next=19,s.done;case 19:return!l||c&&c.fid===l.fid||Cs(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zs(e){return Ws.apply(this,arguments)}function Ws(){return(Ws=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ms(n.appConfig,(function(e){var t=Us(e),i=js(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Us(e){return Xs(e||{fid:_s(),registrationStatus:0})}function js(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(ss.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return qs.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Bs(e)}:{installationEntry:t}}function qs(){return(qs=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ys(n,r);case 3:return i=e.sent,e.abrupt("return",As(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!us(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,Ls(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,As(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Bs(e){return Hs.apply(this,arguments)}function Hs(){return(Hs=e(a)(e(o).mark((function t(n){var r,i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Vs(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,ks(100);case 6:return e.next=8,Vs(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,zs(n);case 14:if(i=e.sent,a=i.installationEntry,!(s=i.registrationPromise)){e.next=21;break}return e.abrupt("return",s);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vs(e){return Ms(e,(function(e){if(!e)throw ss.create("installation-not-found");return Xs(e)}))}function Xs(e){return 1===(t=e).registrationStatus&&t.registrationTime+ns<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Ks(e,t){return Gs.apply(this,arguments)}function Gs(){return(Gs=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,f,h,d,p,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,s=Ys(i,r),u=ps(i,r),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return f={installation:{sdkVersion:rs,appId:i.appId}},h={method:"POST",headers:u,body:JSON.stringify(f)},e.next=13,vs((function(){return fetch(s,h)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return p=e.sent,v=ls(p),e.abrupt("return",v);case 22:return e.next=24,fs("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ys(e,t){var n=t.fid;return"".concat(cs(e),"/").concat(n,"/authTokens:generate")}function Js(e){return Qs.apply(this,arguments)}function Qs(){return Qs=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i,a,s,u=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],e.next=4,Ms(n.appConfig,(function(e){if(!ru(e))throw ss.create("not-registered");var t=e.authToken;if(!r&&iu(t))return e;if(1===t.requestStatus)return i=$s(n,r),e;if(!navigator.onLine)throw ss.create("app-offline");var a=au(e);return i=tu(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return s=e.t0,e.abrupt("return",s);case 14:case"end":return e.stop()}}),t)}))),Qs.apply(this,arguments)}function $s(e,t){return Zs.apply(this,arguments)}function Zs(){return(Zs=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,eu(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,ks(100);case 6:return e.next=8,eu(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",Js(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function eu(e){return Ms(e,(function(e){if(!ru(e))throw ss.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+ns<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function tu(e,t){return nu.apply(this,arguments)}function nu(){return(nu=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ks(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,As(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!us(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,Ls(n.appConfig);case 15:e.next=20;break;case 17:return s=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,As(n.appConfig,s);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function ru(e){return void 0!==e&&2===e.registrationStatus}function iu(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+as}(e)}function au(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ou(){return(ou=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,zs(r);case 3:return i=e.sent,a=i.installationEntry,(s=i.registrationPromise)?s.catch(console.error):Js(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function su(){return su=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(n){var r,i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],i=n,e.next=4,uu(i);case 4:return e.next=6,Js(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),t)}))),su.apply(this,arguments)}function uu(e){return cu.apply(this,arguments)}function cu(){return(cu=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,zs(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function lu(e){return ss.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fu="installations",hu=function(e){var t=Et(e.getProvider("app").getImmediate(),fu).getImmediate(),n={getId:function(){return function(e){return ou.apply(this,arguments)}(t)},getToken:function(e){return function(e){return su.apply(this,arguments)}(t,e)}};return n};St(new ze(fu,(function(e){var t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw lu("App Configuration");if(!e.name)throw lu("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw lu(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Et(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),St(new ze("installations-internal",hu,"PRIVATE")),Mt(es,ts),Mt(es,ts,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var du,pu="analytics",vu=6e4,mu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yu="https://www.googletagmanager.com/gtag/js",gu=new Je("@firebase/analytics"),ku=(du={},e(c)(du,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(c)(du,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(c)(du,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(c)(du,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(c)(du,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(c)(du,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(c)(du,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(c)(du,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(c)(du,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(c)(du,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),e(c)(du,"no-client-id",'The "client_id" field is empty.'),e(c)(du,"invalid-gtag-resource","Trusted Types detected an invalid gtag resource: {$gtagURL}."),du),bu=new de("analytics","Analytics",ku);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _u(e){if(!e.startsWith(yu)){var t=bu.create("invalid-gtag-resource",{gtagURL:e});return gu.warn(t.message),""}return e}function xu(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function wu(e,t){var n=function(e,t){var n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:_u}),r=document.createElement("script"),i="".concat(yu,"?l=").concat(e,"&id=").concat(t);r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Cu(e,t,n,r,i,a){return Iu.apply(this,arguments)}function Iu(){return(Iu=e(a)(e(o).mark((function t(n,r,i,a,s,u){var c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a[s],e.prev=1,!c){e.next=7;break}return e.next=5,r[c];case 5:e.next=14;break;case 7:return e.next=9,xu(i);case 9:if(l=e.sent,!(f=l.find((function(e){return e.measurementId===s})))){e.next=14;break}return e.next=14,r[f.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),gu.error(e.t0);case 19:n("config",s,u);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function Tu(e,t,n,r,i){return Nu.apply(this,arguments)}function Nu(){return(Nu=e(a)(e(o).mark((function t(n,r,i,a,s){var u,c,l,f,h,d,p,v,m,y,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u=[],!s||!s.send_to){e.next=38;break}return c=s.send_to,Array.isArray(c)||(c=[c]),e.next=7,xu(i);case 7:l=e.sent,f=!0,h=!1,d=void 0,e.prev=9,p=c[Symbol.iterator]();case 11:if(f=(v=p.next()).done){e.next=24;break}if(m=v.value,y=l.find((function(e){return e.measurementId===m})),!(g=y&&r[y.appId])){e.next=19;break}u.push(g),e.next=21;break;case 19:return u=[],e.abrupt("break",24);case 21:f=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),h=!0,d=e.t0;case 30:e.prev=30,e.prev=31,f||null==p.return||p.return();case 33:if(e.prev=33,!h){e.next=36;break}throw d;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===u.length&&(u=Object.values(r)),e.next=41,Promise.all(u);case 41:n("event",a,s||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),gu.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Su(t,n,r,i,s){var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(u=window[s]),window[s]=function(t,n,r,i){function s(){return s=e(a)(e(o).mark((function a(s){var u,c,h,d,p,v,m,y,g,k,b,_,x,w,C,I,T,N=arguments;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(u=N.length,c=new Array(u>1?u-1:0),h=1;h<u;h++)c[h-1]=N[h];if(a.prev=1,"event"!==s){a.next=8;break}return d=e(f)(c,2),p=d[0],v=d[1],a.next=6,Tu(t,n,r,p,v);case 6:a.next=15;break;case 8:if("config"!==s){a.next=14;break}return m=e(f)(c,2),y=m[0],g=m[1],a.next=12,Cu(t,n,r,i,y,g);case 12:a.next=15;break;case 14:"consent"===s?(k=e(f)(c,1),b=k[0],t("consent","update",b)):"get"===s?(_=e(f)(c,3),x=_[0],w=_[1],C=_[2],t("get",x,w,C)):"set"===s?(I=e(f)(c,1),T=I[0],t("set",T)):t.apply(void 0,[s].concat(e(l)(c)));case 15:a.next=20;break;case 17:a.prev=17,a.t0=a.catch(1),gu.error(a.t0);case 20:case"end":return a.stop()}}),a,null,[[1,17]])}))),s.apply(this,arguments)}return function(e){return s.apply(this,arguments)}}(u,t,n,r),{gtagCore:u,wrappedGtag:window[s]}}function Eu(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,i=void 0;try{for(var a,o=Object.values(t)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.src&&s.src.includes(yu)&&s.src.includes(e))return s}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ru=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(s)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(u)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),Pu=new Ru;function Au(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Ou(e){return Lu.apply(this,arguments)}function Lu(){return(Lu=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,s={method:"GET",headers:Au(a)},u=mu.replace("{app-id}",i),e.next=6,fetch(u,s);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return l="",e.prev=9,e.next=12,c.json();case 12:f=e.sent,(null===(r=f.error)||void 0===r?void 0:r.message)&&(l=f.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw bu.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function Du(e){return Mu.apply(this,arguments)}function Mu(){return Mu=e(a)(e(o).mark((function t(n){var r,i,s,u,c,l,f,h,d=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=d.length>1&&void 0!==d[1]?d[1]:Pu,i=d.length>2?d[2]:void 0,s=n.options,u=s.appId,c=s.apiKey,l=s.measurementId,u){t.next=4;break}throw bu.create("no-app-id");case 4:if(c){t.next=8;break}if(!l){t.next=7;break}return t.abrupt("return",{measurementId:l,appId:u});case 7:throw bu.create("no-api-key");case 8:return f=r.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new Bu,setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==i?i:vu),t.abrupt("return",Fu({appId:u,apiKey:c,measurementId:l},f,h,r));case 12:case"end":return t.stop()}}),t)}))),Mu.apply(this,arguments)}function Fu(e,t,n){return zu.apply(this,arguments)}function zu(){return zu=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,f,h,d,p,v,m=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,s=r.backoffCount,u=m.length>3&&void 0!==m[3]?m[3]:Pu,l=n.appId,f=n.measurementId,e.prev=3,e.next=6,Wu(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return gu.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===e.t0||void 0===e.t0?void 0:e.t0.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,Ou(n);case 17:return h=e.sent,u.deleteThrottleMetadata(l),e.abrupt("return",h);case 22:if(e.prev=22,e.t1=e.catch(14),Uu(d=e.t1)){e.next=33;break}if(u.deleteThrottleMetadata(l),!f){e.next=32;break}return gu.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==d?void 0:d.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 32:throw e.t1;case 33:return p=503===Number(null===(c=null==d?void 0:d.customData)||void 0===c?void 0:c.httpStatus)?Me(s,u.intervalMillis,30):Me(s,u.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:s+1},u.setThrottleMetadata(l,v),gu.debug("Calling attemptFetch again in ".concat(p," millis")),e.abrupt("return",Fu(n,v,i,u));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),zu.apply(this,arguments)}function Wu(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r(bu.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Uu(e){if(!(e instanceof he&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var ju,qu,Bu=function(){"use strict";function t(){e(s)(this,t),this.listeners=[]}return e(u)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){return(Hu=e(a)(e(o).mark((function t(n,r,i,a,s){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s||!s.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:u=e.sent,c=Object.assign(Object.assign({},a),{send_to:u}),n("event",i,c);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vu(e){qu=e}function Xu(e){ju=e}function Ku(){return Gu.apply(this,arguments)}function Gu(){return(Gu=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce()){e.next=5;break}return gu.warn(bu.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,le();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),gu.warn(bu.create("indexeddb-unavailable",{errorInfo:null===e.t0||void 0===e.t0?void 0:e.t0.toString()}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}function Yu(){return(Yu=e(a)(e(o).mark((function t(n,r,i,a,s,u,c){var l,h,d,p,v,m,y;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(h=Du(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&gu.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return gu.error(e)})),r.push(h),d=Ku().then((function(e){return e?a.getId():void 0})),t.t0=e(f),t.next=8,Promise.all([h,d]);case 8:return t.t1=t.sent,p=(0,t.t0)(t.t1,2),v=p[0],m=p[1],Eu(u)||wu(u,v.measurementId),qu&&(s("consent","default",qu),Vu(void 0)),s("js",new Date),(y=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",y.update=!0,null!=m&&(y.firebase_id=m),s("config",v.measurementId,y),ju&&(s("set",ju),Xu(void 0)),t.abrupt("return",v.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ju,Qu,$u=function(){"use strict";function t(n){e(s)(this,t),this.app=n}return e(u)(t,[{key:"_delete",value:function(){return delete Zu[this.app.options.appId],Promise.resolve()}}]),t}(),Zu={},ec=[],tc={},nc="dataLayer",rc="gtag",ic=!1;function ac(e,t,n){!function(){var e=[];if(oe()&&e.push("This is a browser extension environment."),fe()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=bu.create("invalid-analytics-context",{errorInfo:t});gu.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw bu.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw bu.create("no-api-key");gu.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Zu[a])throw bu.create("already-exists",{id:a});if(!ic){r=nc,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=Su(Zu,ec,tc,nc,rc),s=o.wrappedGtag,u=o.gtagCore;Qu=s,Ju=u,ic=!0}return Zu[a]=function(e,t,n,r,i,a,o){return Yu.apply(this,arguments)}(e,ec,tc,t,Ju,nc,n),new $u(e)}function oc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Et(e,pu);if(n.isInitialized()){var r=n.getImmediate();if(Ce(t,n.getOptions()))return r;throw bu.create("already-initialized")}var i=n.initialize({options:t});return i}function sc(e,t,n,r){e=Fe(e),function(e,t,n,r,i){return Hu.apply(this,arguments)}(Qu,Zu[e.app.options.appId],t,n,r).catch((function(e){return gu.error(e)}))}var uc="@firebase/analytics",cc="0.10.0";St(new ze(pu,(function(e,t){var n=t.options;return ac(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),St(new ze("analytics-internal",(function(e){try{var t=e.getProvider(pu).getImmediate();return{logEvent:function(e,n,r){return sc(t,e,n,r)}}}catch(e){throw bu.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Mt(uc,cc),Mt(uc,cc,"esm2017");h=i("ds8z5"),a=i("bpxeT"),s=i("8MBJY"),u=i("a2hTj"),d=i("eYQtU"),f=i("1t1Wn"),l=i("8nrFW");var lc=i("l5bVx"),fc=(C=i("2MbLg"),o=i("2TvXO"),"@firebase/database"),hc="1.0.1",dc="";function pc(e){dc=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vc,mc=function(){"use strict";function t(n){e(s)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(u)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:me(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),yc=function(){"use strict";function t(){e(s)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(u)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return be(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),gc=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new mc(t)}}catch(e){}return new yc},kc=gc("localStorage"),bc=gc("sessionStorage"),_c=new Je("@firebase/database"),xc=(vc=1,function(){return vc++}),wc=function(e){var t=Oe(e),n=new Ee;n.update(t);var r=n.digest();return B.encodeByteArray(r)},Cc=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=Cc.apply(null,a):r+="object"==typeof a?ye(a):a,r+=" "}return r},Ic=null,Tc=!0,Nc=function(e,t){U(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_c.logLevel=je.VERBOSE,Ic=_c.log.bind(_c),t&&bc.set("logging_enabled",!0)):"function"==typeof e?Ic=e:(Ic=null,bc.remove("logging_enabled"))},Sc=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===Tc&&(Tc=!1,null===Ic&&!0===bc.get("logging_enabled")&&Nc(!0)),Ic){var r=Cc.apply(null,t);Ic(r)}},Ec=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];Sc.apply(void 0,[t].concat(e(l)(r)))}},Rc=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+Cc.apply(void 0,e(l)(n));_c.error(i)},Pc=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(Cc.apply(void 0,e(l)(n)));throw _c.error(i),new Error(i)},Ac=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+Cc.apply(void 0,e(l)(n));_c.warn(i)},Oc=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Lc="[MIN_NAME]",Dc="[MAX_NAME]",Mc=function(e,t){if(e===t)return 0;if(e===Lc||t===Dc)return-1;if(t===Lc||e===Dc)return 1;var n=Hc(e),r=Hc(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Fc=function(e,t){return e===t?0:e<t?-1:1},zc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ye(t))},Wc=function(e){if("object"!=typeof e||null===e)return ye(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=ye(t[i]),r+=":",r+=Wc(e[t[i]]);return r+="}"},Uc=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var qc=function(e){U(!Oc(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Bc=new RegExp("^-?(0*)\\d{1,10}$"),Hc=function(e){if(Bc.test(e)){var t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Vc=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw Ac("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Xc=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Kc=function(){"use strict";function t(n,r){var i=this;e(s)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(u)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){Ac('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),Gc=function(){"use strict";function t(n,r,i){var a=this;e(s)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(u)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(Sc("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ac(e)}}]),t}(),Yc=function(){"use strict";function t(n){e(s)(this,t),this.accessToken=n}return e(u)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();Yc.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jc="5",Qc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$c="websocket",Zc="long_polling",el=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];e(s)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=u,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kc.get("host:"+n)||this._host}return e(u)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kc.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function tl(e,t,n){var r;if(U("string"==typeof t,"typeof type must == string"),U("object"==typeof n,"typeof params must == object"),t===$c)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Zc)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return jc(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nl=function(){"use strict";function t(){e(s)(this,t),this.counters_={}}return e(u)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;be(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return G(this.counters_)}}]),t}(),rl={},il={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(e){var t=e.toString();return rl[t]||(rl[t]=new nl),rl[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ol=function(){"use strict";function t(n){e(s)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(u)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Vc((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),sl="start",ul="close",cl=function(){"use strict";function t(n,r,i,a,o,u,c){var l=this;e(s)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=u,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ec(n),this.stats_=al(r),this.urlFn=function(e){return l.appCheckToken&&(e.ac=l.appCheckToken),tl(r,Zc,e)}}return e(u)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ol(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(ue()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new ll((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(f)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===sl)t.id=s,t.password=u;else{if(o!==ul)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(f)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=Jc,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&Qc.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=V(t),r=Uc(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!ue()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=ye(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!ue()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),ll=function(){"use strict";function t(n,r,i,a){if(e(s)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,ue())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=xc(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var u="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(e){Sc("frame writing exception"),e.stack&&Sc(e.stack),Sc(e)}}}return e(u)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.textContent="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;ue()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){Sc("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Sc("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),fl=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"undefined"!=typeof MozWebSocket?fl=MozWebSocket:"undefined"!=typeof WebSocket&&(fl=WebSocket);var hl=function(){"use strict";function t(n,r,i,a,o,u,c){e(s)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ec(this.connId),this.stats_=al(r),this.connURL=t.connectionURL_(r,u,c,a,i),this.nodeAdmin=r.nodeAdmin}return e(u)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kc.set("previous_websocket_failure",!0);try{var r;if(ue()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(Jc,"/").concat(dc,"/").concat(_.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new fl(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){kc.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=me(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(U(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Uc(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=Jc,!ue()&&"undefined"!=typeof location&&location.hostname&&Qc.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),tl(e,$c,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==fl&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return kc.isInMemoryStorage||!0===kc.get("previous_websocket_failure")}}]),t}();hl.responsesRequiredToBeHealthy=2,hl.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dl=function(){"use strict";function t(n){e(s)(this,t),this.initTransports_(n)}return e(u)(t,[{key:"initTransports_",value:function(e){var n=hl&&hl.isAvailable(),r=n&&!hl.previouslyFailed();if(e.webSocketOnly&&(n||Ac("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hl];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[cl,hl]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();dl.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pl=function(){"use strict";function t(n,r,i,a,o,u,c,l,f,h){e(s)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=u,this.onReady_=c,this.onDisconnect_=l,this.onKill_=f,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ec("c:"+this.id+":"),this.transportManager_=new dl(r),this.log_("Connection created"),this.start_()}return e(u)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xc((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=zc("t",e),n=zc("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=zc("t",e),n=zc("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=zc("t",e);if("d"in e){var n=e.d;if("h"===t){var r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Rc("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rc("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Jc!==n&&Ac("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xc((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xc((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kc.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),vl=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),ml=function(){"use strict";function t(n){e(s)(this,t),this.allowedEvents_=n,this.listeners_={},U(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(u)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(l)(this.listeners_[t]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){U(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),yl=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){var t;return e(s)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ae()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(u)(r,[{key:"getInitialEvent",value:function(e){return U("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(ml),gl=function(){"use strict";function t(n,r){if(e(s)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(u)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function kl(){return new gl("")}function bl(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function _l(e){return e.pieces_.length-e.pieceNum_}function xl(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new gl(e.pieces_,t)}function wl(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Cl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Il(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new gl(t,0)}function Tl(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof gl)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new gl(n,0)}function Nl(e){return e.pieceNum_>=e.pieces_.length}function Sl(e,t){var n=bl(e),r=bl(t);if(null===n)return t;if(n===r)return Sl(xl(e),xl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function El(e,t){for(var n=Cl(e,0),r=Cl(t,0),i=0;i<n.length&&i<r.length;i++){var a=Mc(n[i],r[i]);if(0!==a)return a}return n.length===r.length?0:n.length<r.length?-1:1}function Rl(e,t){if(_l(e)!==_l(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Pl(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(_l(e)>_l(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Al=function t(n,r){"use strict";e(s)(this,t),this.errorPrefix_=r,this.parts_=Cl(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Le(this.parts_[i]);Ol(this)};function Ol(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ll(e))}function Ll(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dl=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){var t,i,a;return e(s)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(u)(r,[{key:"getInitialEvent",value:function(e){return U("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(ml),Ml=1e3,Fl=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i,a,o,u,c,l,f){var d;if(e(s)(this,r),(d=n.call(this)).repoInfo_=t,d.applicationId_=i,d.onDataUpdate_=a,d.onConnectStatus_=o,d.onServerInfoUpdate_=u,d.authTokenProvider_=c,d.appCheckTokenProvider_=l,d.authOverride_=f,d.id=r.nextPersistentConnectionId_++,d.log_=Ec("p:"+d.id+":"),d.interruptReasons_={},d.listens=new Map,d.outstandingPuts_=[],d.outstandingGets_=[],d.outstandingPutCount_=0,d.outstandingGetCount_=0,d.onDisconnectRequestQueue_=[],d.connected_=!1,d.reconnectDelay_=Ml,d.maxReconnectDelay_=3e5,d.securityDebugCallback_=null,d.lastSessionId=null,d.establishConnectionTimer_=null,d.visible_=!1,d.requestCBHash_={},d.requestNumber_=0,d.realtime_=null,d.authToken_=null,d.appCheckToken_=null,d.forceTokenRefresh_=!1,d.invalidAuthTokenCount_=0,d.invalidAppCheckTokenCount_=0,d.firstConnection_=!0,d.lastConnectionAttemptTime_=null,d.lastConnectionEstablishedTime_=null,f&&!ue())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return Dl.getInstance().on("visible",d.onVisible_,e(h)(d)),-1===t.host.indexOf("fblocal")&&yl.getInstance().on("online",d.onOnline_,e(h)(d)),d}return e(u)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ye(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new ne,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=ge(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=ke(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+ye(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Rc("Unrecognized action received from server: "+ye(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ml,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ml,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ml),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(a)(e(o).mark((function n(){var i,a,s,u,c,l,h,d,p,v,m,y,g;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),s=t.onRealtimeDisconnect_.bind(t),u=t.id+":"+r.nextConnectionId_++,c=t.lastSessionId,l=!1,h=null,d=function(){h?h.close():(l=!0,s())},p=function(e){U(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},t.realtime_={close:d,sendRequest:p},v=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(f),n.next=20,Promise.all([t.authTokenProvider_.getToken(v),t.appCheckTokenProvider_.getToken(v)]);case 20:n.t1=n.sent,m=(0,n.t0)(n.t1,2),y=m[0],g=m[1],l?Sc("getToken() completed but was canceled"):(Sc("getToken() completed. Creating connection."),t.authToken_=y&&y.accessToken,t.appCheckToken_=g&&g.token,h=new pl(u,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,s,(function(e){Ac(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),c)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),l||(t.repoInfo_.nodeAdmin&&Ac(n.t2),d());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){Sc("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){Sc("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xe(this.interruptReasons_)&&(this.reconnectDelay_=Ml,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Wc(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new gl(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){Sc("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){Sc("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var f=c.value;this.sendListen_(f)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";ue()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+dc.replace(/\./g,"-")]=1,ae()?e["framework.cordova"]=1:se()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=yl.getInstance().currentlyOnline();return xe(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&be(e,"w")){var n=_e(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Ac("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(vl);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fl.nextPersistentConnectionId_=0,Fl.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zl,Wl=function(){"use strict";function t(n,r){e(s)(this,t),this.name=n,this.node=r}return e(u)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),Ul=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Wl(Lc,e),r=new Wl(Lc,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Wl.MIN}}]),t}(),jl=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"compare",value:function(e,t){return Mc(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw j("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Wl.MIN}},{key:"maxPost",value:function(){return new Wl(Dc,zl)}},{key:"makePost",value:function(e,t){return U("string"==typeof e,"KeyIndex indexValue must always be a string."),new Wl(e,zl)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return zl},set:function(e){zl=e}}]),r}(Ul),ql=new jl,Bl=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(s)(this,t),this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];for(var u=1;!n.isEmpty();)if(u=r?i(n.key,r):1,a&&(u*=-1),u<0)n=this.isReverse_?n.left:n.right;else{if(0===u){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(u)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),Hl=function(){"use strict";function t(n,r,i,a,o){e(s)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:Kl.EMPTY_NODE,this.right=null!=o?o:Kl.EMPTY_NODE}return e(u)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Kl.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Kl.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hl.RED=!0,Hl.BLACK=!1;var Vl,Xl=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Hl(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),Kl=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(s)(this,t),this.comparator_=n,this.root_=r}return e(u)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Hl.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Hl.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Bl(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Bl(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Bl(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Bl(this.root_,null,this.comparator_,!0,e)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gl(e,t){return Mc(e.name,t.name)}function Yl(e,t){return Mc(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kl.EMPTY_NODE=new Xl;var Jl,Ql,$l,Zl=function(e){return"number"==typeof e?"number:"+qc(e):"string:"+e},ef=function(e){if(e.isLeafNode()){var t=e.val();U("string"==typeof t||"number"==typeof t||"object"==typeof t&&be(t,".sv"),"Priority must be a string or number.")}else U(e===Vl||e.isEmpty(),"priority of unexpected type.");U(e===Vl||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},tf=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(s)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,U(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ef(this.priorityNode_)}return e(u)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return Nl(e)?this:".priority"===bl(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=bl(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(U(".priority"!==r||1===_l(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(xl(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Zl(this.priorityNode_.val())+":");var n=e(lc)(this.value_);t+=n+":",t+="number"===n?qc(this.value_):this.value_,this.lazyHash_=wc(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(lc)(n.value_),i=e(lc)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return U(a>=0,"Unknown leaf type: "+r),U(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Jl},set:function(e){Jl=e}}]),t}();tf.VALUE_TYPE_ORDER=["object","boolean","number","string"];var nf,rf,af=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Mc(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Wl.MIN}},{key:"maxPost",value:function(){return new Wl(Dc,new tf("[PRIORITY-POST]",$l))}},{key:"makePost",value:function(e,t){var n=Ql(e);return new Wl(t,new tf("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Ul),of=new af,sf=Math.log(2),uf=function(){"use strict";function t(n){e(s)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/sf,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(u)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),cf=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new Hl(o,a.node,Hl.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new Hl(o,a.node,Hl.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],f=n?n(l):l;u(new Hl(f,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),f=Math.pow(2,t.count-(c+1));l?s(f,Hl.BLACK):(s(f,Hl.BLACK),s(f,Hl.RED))}return a}(new uf(e.length));return new Kl(r||t,a)},lf={},ff=function(){"use strict";function t(n,r){e(s)(this,t),this.indexes_=n,this.indexSet_=r}return e(u)(t,[{key:"get",value:function(e){var t=_e(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kl?t:null}},{key:"hasIndex",value:function(e){return be(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){U(e!==ql,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(Wl.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?cf(i,e.getCompare()):lf;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(we(this.indexes_,(function(t,i){var a=_e(r.indexSet_,i);if(U(a,"Missing index implementation for "+i),t===lf){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(Wl.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),cf(o,a.getCompare())}return lf}var c=n.get(e.name),l=t;return c&&(l=l.remove(new Wl(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(we(this.indexes_,(function(t){if(t===lf)return t;var r=n.get(e.name);return r?t.remove(new Wl(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return U(lf&&of,"ChildrenNode.ts has not been loaded"),nf=nf||new t({".priority":lf},{".priority":of})}}]),t}(),hf=function(){"use strict";function t(n,r,i){e(s)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ef(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(u)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||rf}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?rf:t}},{key:"getChild",value:function(e){var t=bl(e);return null===t?this:this.getImmediateChild(t).getChild(xl(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(U(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new Wl(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?rf:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=bl(e);if(null===n)return t;U(".priority"!==bl(e)||1===_l(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(xl(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(of,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Zl(this.getPriority().val())+":"),this.forEachChild(of,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":wc(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Wl(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Wl(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Wl(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Wl.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Wl.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===df?-1:0}},{key:"withIndex",value:function(e){if(e===ql||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===ql||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(of),r=t.getIterator(of),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===ql?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return rf||(rf=new t(new Kl(Yl),null,ff.Default))}}]),t}();hf.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var df=new(function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){return e(s)(this,r),n.call(this,new Kl(Yl),hf.EMPTY_NODE,ff.Default)}return e(u)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return hf.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(hf));Object.defineProperties(Wl,{MIN:{value:new Wl(Lc,hf.EMPTY_NODE)},MAX:{value:new Wl(Dc,df)}}),jl.__EMPTY_NODE=hf.EMPTY_NODE,tf.__childrenNodeConstructor=hf,Vl=df,function(e){$l=e}(df);function pf(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return hf.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),U(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(lc)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new tf(r,pf(n))}if(t instanceof Array){var i=hf.EMPTY_NODE;return jc(t,(function(e,n){if(be(t,e)&&"."!==e.substring(0,1)){var r=pf(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(pf(n))}var a=[],o=!1,s=t;if(jc(s,(function(e,t){if("."!==e.substring(0,1)){var n=pf(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new Wl(e,n)))}})),0===a.length)return hf.EMPTY_NODE;var u=cf(a,Gl,(function(e){return e.name}),Yl);if(o){var c=cf(a,of.getCompare());return new hf(u,pf(n),new ff({".priority":c},{".priority":of}))}return new hf(u,pf(n),ff.Default)}!function(e){Ql=e}(pf);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vf=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this)).indexPath_=t,U(!Nl(t)&&".priority"!==bl(t),"Can't create PathIndex with empty path or .priority key"),i}return e(u)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Mc(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=pf(e),r=hf.EMPTY_NODE.updateChild(this.indexPath_,n);return new Wl(t,r)}},{key:"maxPost",value:function(){var e=hf.EMPTY_NODE.updateChild(this.indexPath_,df);return new Wl(Dc,e)}},{key:"toString",value:function(){return Cl(this.indexPath_,0).join("/")}}]),r}(Ul),mf=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(){return e(s)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?Mc(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Wl.MIN}},{key:"maxPost",value:function(){return Wl.MAX}},{key:"makePost",value:function(e,t){var n=pf(e);return new Wl(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Ul),yf=new mf;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gf(e){return{type:"value",snapshotNode:e}}function kf(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function bf(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function _f(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xf=function(){"use strict";function t(n){e(s)(this,t),this.index_=n}return e(u)(t,[{key:"updateChild",value:function(e,t,n,r,i,a){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=a&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(bf(t,o)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?a.trackChildChange(kf(t,n)):a.trackChildChange(_f(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}},{key:"updateFullNode",value:function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(of,(function(e,r){t.hasChild(e)||n.trackChildChange(bf(e,r))})),t.isLeafNode()||t.forEachChild(of,(function(t,r){if(e.hasChild(t)){var i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(_f(t,r,i))}else n.trackChildChange(kf(t,r))}))),t.withIndex(this.index_)}},{key:"updatePriority",value:function(e,t){return e.isEmpty()?hf.EMPTY_NODE:e.updatePriority(t)}},{key:"filtersNodes",value:function(){return!1}},{key:"getIndexedFilter",value:function(){return this}},{key:"getIndex",value:function(){return this.index_}}]),t}(),wf=function(){"use strict";function t(n){e(s)(this,t),this.indexedFilter_=new xf(n.getIndex()),this.index_=n.getIndex(),this.startPost_=t.getStartPost_(n),this.endPost_=t.getEndPost_(n),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}return e(u)(t,[{key:"getStartPost",value:function(){return this.startPost_}},{key:"getEndPost",value:function(){return this.endPost_}},{key:"matches",value:function(e){var t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}},{key:"updateChild",value:function(e,t,n,r,i,a){return this.matches(new Wl(t,n))||(n=hf.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,a)}},{key:"updateFullNode",value:function(e,t,n){t.isLeafNode()&&(t=hf.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(hf.EMPTY_NODE);var i=this;return t.forEachChild(of,(function(e,t){i.matches(new Wl(e,t))||(r=r.updateImmediateChild(e,hf.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.indexedFilter_}},{key:"getIndex",value:function(){return this.index_}}],[{key:"getStartPost_",value:function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}},{key:"getEndPost_",value:function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}]),t}(),Cf=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.withinDirectionalStart=function(e){return r.reverse_?r.withinEndPost(e):r.withinStartPost(e)},this.withinDirectionalEnd=function(e){return r.reverse_?r.withinStartPost(e):r.withinEndPost(e)},this.withinStartPost=function(e){var t=r.index_.compare(r.rangedFilter_.getStartPost(),e);return r.startIsInclusive_?t<=0:t<0},this.withinEndPost=function(e){var t=r.index_.compare(e,r.rangedFilter_.getEndPost());return r.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new wf(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft(),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}return e(u)(t,[{key:"updateChild",value:function(e,t,n,r,i,a){return this.rangedFilter_.matches(new Wl(t,n))||(n=hf.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,a):this.fullLimitUpdateChild_(e,t,n,i,a)}},{key:"updateFullNode",value:function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=hf.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){var i;r=hf.EMPTY_NODE.withIndex(this.index_),i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var a=0;i.hasNext()&&a<this.limit_;){var o=i.getNext();if(this.withinDirectionalStart(o)){if(!this.withinDirectionalEnd(o))break;r=r.updateImmediateChild(o.name,o.node),a++}}}else{var s;r=(r=t.withIndex(this.index_)).updatePriority(hf.EMPTY_NODE),s=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);for(var u=0;s.hasNext();){var c=s.getNext();u<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?u++:r=r.updateImmediateChild(c.name,hf.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.rangedFilter_.getIndexedFilter()}},{key:"getIndex",value:function(){return this.index_}},{key:"fullLimitUpdateChild_",value:function(e,t,n,r,i){var a;if(this.reverse_){var o=this.index_.getCompare();a=function(e,t){return o(t,e)}}else a=this.index_.getCompare();var s=e;U(s.numChildren()===this.limit_,"");var u=new Wl(t,n),c=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(u);if(s.hasChild(t)){for(var f=s.getImmediateChild(t),h=r.getChildAfterChild(this.index_,c,this.reverse_);null!=h&&(h.name===t||s.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);var d=null==h?1:a(h,u);if(l&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(_f(t,n,f)),s.updateImmediateChild(t,n);null!=i&&i.trackChildChange(bf(t,f));var p=s.updateImmediateChild(t,hf.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=i&&i.trackChildChange(kf(h.name,h.node)),p.updateImmediateChild(h.name,h.node)):p}return n.isEmpty()?e:l&&a(c,u)>=0?(null!=i&&(i.trackChildChange(bf(c.name,c.node)),i.trackChildChange(kf(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(c.name,hf.EMPTY_NODE)):e}}]),t}(),If=function(){"use strict";function t(){e(s)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=of}return e(u)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Lc}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dc}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===of}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(e){var t,n={};if(e.isDefault())return n;if(e.index_===of?t="$priority":e.index_===yf?t="$value":e.index_===ql?t="$key":(U(e.index_ instanceof vf,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=ye(t),e.startSet_){var r=e.startAfterSet_?"startAfter":"startAt";n[r]=ye(e.indexStartValue_),e.startNameSet_&&(n[r]+=","+ye(e.indexStartName_))}if(e.endSet_){var i=e.endBeforeSet_?"endBefore":"endAt";n[i]=ye(e.indexEndValue_),e.endNameSet_&&(n[i]+=","+ye(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function Nf(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==of&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sf=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i,a,o){var u;return e(s)(this,r),(u=n.call(this)).repoInfo_=t,u.onDataUpdate_=i,u.authTokenProvider_=a,u.appCheckTokenProvider_=o,u.log_=Ec("p:rest:"),u.listens_={},u}return e(u)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=Tf(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),_e(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=Tf(e._queryParams),r=e._path.toString(),i=new ne;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(f)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+Te(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=me(h.responseText)}catch(e){Ac("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&Ac("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(vl),Ef=function(){"use strict";function t(){e(s)(this,t),this.rootNode_=hf.EMPTY_NODE}return e(u)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rf(){return{value:null,children:new Map}}function Pf(e,t,n){if(Nl(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=bl(t);e.children.has(r)||e.children.set(r,Rf()),Pf(e.children.get(r),t=xl(t),n)}}function Af(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(function(e,r){Af(r,new gl(t.toString()+"/"+e),n)}))}var Of,Lf,Df=function(){"use strict";function t(n){e(s)(this,t),this.collection_=n,this.last_=null}return e(u)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&jc(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),Mf=function(){"use strict";function t(n,r){e(s)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new Df(n);var i=1e4+2e4*Math.random();Xc(this.reportStats_.bind(this),Math.floor(i))}return e(u)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;jc(t,(function(t,i){i>0&&be(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Xc(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Lf=Of||(Of={}))[Lf.OVERWRITE=0]="OVERWRITE",Lf[Lf.MERGE=1]="MERGE",Lf[Lf.ACK_USER_WRITE=2]="ACK_USER_WRITE",Lf[Lf.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var zf,Wf=function(){"use strict";function t(n,r,i){e(s)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=Of.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(u)(t,[{key:"operationForChild",value:function(e){if(Nl(this.path)){if(null!=this.affectedTree.value)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new gl(e));return new t(kl(),n,this.revert)}return U(bl(this.path)===e,"operationForChild called for unrelated child."),new t(xl(this.path),this.affectedTree,this.revert)}}]),t}(),Uf=function(){"use strict";function t(n,r){e(s)(this,t),this.source=n,this.path=r,this.type=Of.LISTEN_COMPLETE}return e(u)(t,[{key:"operationForChild",value:function(e){return Nl(this.path)?new t(this.source,kl()):new t(this.source,xl(this.path))}}]),t}(),jf=function(){"use strict";function t(n,r,i){e(s)(this,t),this.source=n,this.path=r,this.snap=i,this.type=Of.OVERWRITE}return e(u)(t,[{key:"operationForChild",value:function(e){return Nl(this.path)?new t(this.source,kl(),this.snap.getImmediateChild(e)):new t(this.source,xl(this.path),this.snap)}}]),t}(),qf=function(){"use strict";function t(n,r,i){e(s)(this,t),this.source=n,this.path=r,this.children=i,this.type=Of.MERGE}return e(u)(t,[{key:"operationForChild",value:function(e){if(Nl(this.path)){var n=this.children.subtree(new gl(e));return n.isEmpty()?null:n.value?new jf(this.source,kl(),n.value):new t(this.source,kl(),n)}return U(bl(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,xl(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),Bf=function(){"use strict";function t(n,r,i){e(s)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(u)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(Nl(e))return this.isFullyInitialized()&&!this.filtered_;var t=bl(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}(),Hf=function t(n){"use strict";e(s)(this,t),this.query_=n,this.index_=this.query_._queryParams.getIndex()};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw j("Should only compare child_ events.");var r=new Wl(t.childName,t.snapshotNode),i=new Wl(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Xf(e,t){return{eventCache:e,serverCache:t}}function Kf(e,t,n,r){return Xf(new Bf(t,n,r),e.serverCache)}function Gf(e,t,n,r){return Xf(e.eventCache,new Bf(t,n,r))}function Yf(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Jf(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qf=function(){return zf||(zf=new Kl(Fc)),zf},$f=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qf();e(s)(this,t),this.value=n,this.children=r}return e(u)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:kl(),value:this.value};if(Nl(e))return null;var n=bl(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(xl(e),t);return null!=i?{path:Tl(new gl(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(Nl(e))return this;var n=bl(e),r=this.children.get(n);return null!==r?r.subtree(xl(e)):new t(null)}},{key:"set",value:function(e,n){if(Nl(e))return new t(n,this.children);var r=bl(e),i=(this.children.get(r)||new t(null)).set(xl(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(Nl(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=bl(e),r=this.children.get(n);if(r){var i,a=r.remove(xl(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(Nl(e))return this.value;var t=bl(e),n=this.children.get(t);return n?n.get(xl(e)):null}},{key:"setTree",value:function(e,n){if(Nl(e))return n;var r,i=bl(e),a=(this.children.get(i)||new t(null)).setTree(xl(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(kl(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(Tl(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,kl(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(Nl(e))return null;var i=bl(e),a=this.children.get(i);return a?a.findOnPath_(xl(e),Tl(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,kl(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(Nl(e))return this;this.value&&r(n,this.value);var i=bl(e),a=this.children.get(i);return a?a.foreachOnPath_(xl(e),Tl(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(kl(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(Tl(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return jc(e,(function(e,t){n=n.set(new gl(e),t)})),n}}]),t}(),Zf=function(){"use strict";function t(n){e(s)(this,t),this.writeTree_=n}return e(u)(t,null,[{key:"empty",value:function(){return new t(new $f(null))}}]),t}();function eh(e,t,n){if(Nl(t))return new Zf(new $f(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=Sl(i,t);return a=a.updateChild(o,n),new Zf(e.writeTree_.set(i,a))}var s=new $f(n),u=e.writeTree_.setTree(t,s);return new Zf(u)}function th(e,t,n){var r=e;return jc(n,(function(e,n){r=eh(r,Tl(t,e),n)})),r}function nh(e,t){if(Nl(t))return Zf.empty();var n=e.writeTree_.setTree(t,new $f(null));return new Zf(n)}function rh(e,t){return null!=ih(e,t)}function ih(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Sl(n.path,t)):null}function ah(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(of,(function(e,n){t.push(new Wl(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Wl(e,n.value))})),t}function oh(e,t){if(Nl(t))return e;var n=ih(e,t);return new Zf(null!=n?new $f(n):e.writeTree_.subtree(t))}function sh(e){return e.writeTree_.isEmpty()}function uh(e,t){return ch(kl(),e.writeTree_,t)}function ch(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(U(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=ch(Tl(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Tl(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(e,t){return Ch(t,e)}function fh(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function hh(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));U(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&dh(s,r.path)?i=!1:Pl(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=vh(e.allWrites,ph,kl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=nh(e.visibleWrites,r.path):jc(r.children,(function(t){e.visibleWrites=nh(e.visibleWrites,Tl(r.path,t))}));return!0}return!1}function dh(e,t){if(e.snap)return Pl(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Pl(Tl(e.path,n),t))return!0;return!1}function ph(e){return e.visible}function vh(e,t,n){for(var r=Zf.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)Pl(n,o)?r=eh(r,s=Sl(n,o),a.snap):Pl(o,n)&&(s=Sl(o,n),r=eh(r,kl(),a.snap.getChild(s)));else{if(!a.children)throw j("WriteRecord should have .snap or .children");if(Pl(n,o))r=th(r,s=Sl(n,o),a.children);else if(Pl(o,n))if(Nl(s=Sl(o,n)))r=th(r,kl(),a.children);else{var u=_e(a.children,bl(s));if(u){var c=u.getChild(xl(s));r=eh(r,kl(),c)}}}}}return r}function mh(e,t,n,r,i){if(r||i){var a=oh(e.visibleWrites,t);if(!i&&sh(a))return n;if(i||null!=n||rh(a,kl())){return uh(vh(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Pl(e.path,t)||Pl(t,e.path))}),t),n||hf.EMPTY_NODE)}return null}var o=ih(e.visibleWrites,t);if(null!=o)return o;var s=oh(e.visibleWrites,t);return sh(s)?n:null!=n||rh(s,kl())?uh(s,n||hf.EMPTY_NODE):null}function yh(e,t,n,r){return mh(e.writeTree,e.treePath,t,n,r)}function gh(e,t){return function(e,t,n){var r=hf.EMPTY_NODE,i=ih(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(of,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=oh(e.visibleWrites,t);return n.forEachChild(of,(function(e,t){var n=uh(oh(a,new gl(e)),t);r=r.updateImmediateChild(e,n)})),ah(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return ah(oh(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function kh(e,t,n,r){return function(e,t,n,r,i){U(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=Tl(t,n);if(rh(e.visibleWrites,a))return null;var o=oh(e.visibleWrites,a);return sh(o)?i.getChild(n):uh(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function bh(e,t){return function(e,t){return ih(e.visibleWrites,t)}(e.writeTree,Tl(e.treePath,t))}function _h(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=oh(e.visibleWrites,t),c=ih(u,kl());if(null!=c)s=c;else{if(null==n)return[];s=uh(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],f=o.getCompare(),h=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),d=h.getNext();d&&l.length<i;)0!==f(d,r)&&l.push(d),d=h.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function xh(e,t,n){return function(e,t,n,r){var i=Tl(t,n),a=ih(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?uh(oh(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function wh(e,t){return Ch(Tl(e.treePath,t),e.writeTree)}function Ch(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ih=function(){"use strict";function t(){e(s)(this,t),this.changeMap=new Map}return e(u)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;U("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),U(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,_f(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,bf(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,kf(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw j("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,_f(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),Th=new(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),Nh=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(s)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(u)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Bf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xh(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Jf(this.viewCache_),i=_h(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(e,t,n,r,i){var a,o,s=new Ih;if(n.type===Of.OVERWRITE){var u=n;u.source.fromUser?a=Ph(e,t,u.path,u.snap,r,i,s):(U(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!Nl(u.path),a=Rh(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===Of.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=Tl(n,r);Ah(t,bl(c))&&(s=Ph(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=Tl(n,r);Ah(t,bl(c))||(s=Ph(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(U(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=Lh(e,t,c.path,c.children,r,i,o,s))}else if(n.type===Of.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=bh(r,n))return t;var s,u=new Nh(r,t,i),c=t.eventCache.getNode();if(Nl(n)||".priority"===bl(n)){var l;if(t.serverCache.isFullyInitialized())l=yh(r,Jf(t));else{var f=t.serverCache.getNode();U(f instanceof hf,"serverChildren would be complete if leaf node"),l=gh(r,f)}s=e.filter.updateFullNode(c,l,a)}else{var h=bl(n),d=xh(r,h,t.serverCache);null==d&&t.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),(s=null!=d?e.filter.updateChild(c,h,d,xl(n),u,a):t.eventCache.getNode().hasChild(h)?e.filter.updateChild(c,h,hf.EMPTY_NODE,xl(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=yh(r,Jf(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=bh(r,kl()),Kf(t,s,o,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=bh(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(Nl(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Rh(e,t,n,u.getNode().getChild(n),i,a,s,o);if(Nl(n)){var c=new $f(null);return u.getNode().forEachChild(ql,(function(e,t){c=c.set(new gl(e),t)})),Lh(e,t,n,c,i,a,s,o)}return t}var l=new $f(null);return r.foreach((function(e,t){var r=Tl(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Lh(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Of.LISTEN_COMPLETE)throw j("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=Gf(t,a.getNode(),a.isFullyInitialized()||Nl(n),a.isFiltered());return Eh(e,o,n,r,Th,i)}(e,t,n.path,r,s)}var f=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Yf(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(gf(Yf(t)))}}(t,a,f),{viewCache:a,changes:f}}function Eh(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=bh(r,n))return t;if(Nl(n))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Jf(t),l=gh(r,c instanceof hf?c:hf.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var f=yh(r,Jf(t));o=e.filter.updateFullNode(t.eventCache.getNode(),f,a)}else{var h=bl(n);if(".priority"===h){U(1===_l(n),"Can't have a priority with additional path components");var d=u.getNode(),p=kh(r,n,d,s=t.serverCache.getNode());o=null!=p?e.filter.updatePriority(d,p):u.getNode()}else{var v,m=xl(n);if(u.isCompleteForChild(h)){s=t.serverCache.getNode();var y=kh(r,n,u.getNode(),s);v=null!=y?u.getNode().getImmediateChild(h).updateChild(m,y):u.getNode().getImmediateChild(h)}else v=xh(r,h,t.serverCache);o=null!=v?e.filter.updateChild(u.getNode(),h,v,m,i,a):u.getNode()}}return Kf(t,o,u.isFullyInitialized()||Nl(n),e.filter.filtersNodes())}function Rh(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(Nl(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var f=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),f,null)}else{var h=bl(n);if(!c.isCompleteForPath(n)&&_l(n)>1)return t;var d=xl(n),p=c.getNode().getImmediateChild(h).updateChild(d,r);u=".priority"===h?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),h,p,d,Th,null)}var v=Gf(t,u,c.isFullyInitialized()||Nl(n),l.filtersNodes());return Eh(e,v,n,i,new Nh(i,v,a),s)}function Ph(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new Nh(i,t,a);if(Nl(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=Kf(t,u,!0,e.filter.filtersNodes());else{var f=bl(n);if(".priority"===f)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Kf(t,u,c.isFullyInitialized(),c.isFiltered());else{var h,d=xl(n),p=c.getNode().getImmediateChild(f);if(Nl(d))h=r;else{var v=l.getCompleteChild(f);h=null!=v?".priority"===wl(d)&&v.getChild(Il(d)).isEmpty()?v:v.updateChild(d,r):hf.EMPTY_NODE}if(p.equals(h))s=t;else s=Kf(t,e.filter.updateChild(c.getNode(),f,h,d,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function Ah(e,t){return e.eventCache.isCompleteForChild(t)}function Oh(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Lh(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=Nl(n)?r:new $f(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=Oh(0,t.serverCache.getNode().getImmediateChild(n),r);c=Rh(e,c,new gl(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var f=Oh(0,t.serverCache.getNode().getImmediateChild(n),r);c=Rh(e,c,new gl(n),f,i,a,o,s)}})),c}var Dh,Mh=function(){"use strict";function t(n,r){e(s)(this,t),this.query_=n,this.eventRegistrations_=[];var i,a=this.query_._queryParams,o=new xf(a.getIndex()),u=(i=a).loadsAllData()?new xf(i.getIndex()):i.hasLimit()?new Cf(i):new wf(i);this.processor_=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return{filter:e}}(u);var c=r.serverCache,l=r.eventCache,f=o.updateFullNode(hf.EMPTY_NODE,c.getNode(),null),h=u.updateFullNode(hf.EMPTY_NODE,l.getNode(),null),d=new Bf(f,c.isFullyInitialized(),o.filtersNodes()),p=new Bf(h,l.isFullyInitialized(),u.filtersNodes());this.viewCache_=Xf(p,d),this.eventGenerator_=new Hf(this.query_)}return e(u)(t,[{key:"query",get:function(){return this.query_}}]),t}();function Fh(e,t){var n=Jf(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Nl(t)&&!n.getImmediateChild(bl(t)).isEmpty())?n.getChild(t):null}function zh(e){return 0===e.eventRegistrations_.length}function Wh(e,t,n){var r=[];if(n){U(null==t,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){for(var a=[],o=0;o<e.eventRegistrations_.length;++o){var s=e.eventRegistrations_[o];if(s.matches(t)){if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(o+1));break}}else a.push(s)}e.eventRegistrations_=a}else e.eventRegistrations_=[];return r}function Uh(e,t,n,r){t.type===Of.MERGE&&null!==t.source.queryId&&(U(Jf(e.viewCache_),"We should always have a full cache before handling merges"),U(Yf(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=Sh(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,U(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),U(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),U(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,jh(e,s.changes,s.viewCache.eventCache.getNode(),null)}function jh(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Vf(e,i,"child_removed",t,r,n),Vf(e,i,"child_added",t,r,n),Vf(e,i,"child_moved",a,r,n),Vf(e,i,"child_changed",t,r,n),Vf(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qh,Bh=function t(){"use strict";e(s)(this,t),this.views=new Map};function Hh(e){return 0===e.views.size}function Vh(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return U(null!=a,"SyncTree gave us an op for an invalid query."),Uh(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,f=e.views.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;o=o.concat(Uh(h,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}return o}function Xh(e,t,n,r,i){var a=t._queryIdentifier,o=e.views.get(a);if(!o){var s=yh(n,i?r:null),u=!1;s?u=!0:r instanceof hf?(s=gh(n,r),u=!1):(s=hf.EMPTY_NODE,u=!1);var c=Xf(new Bf(s,u,!1),new Bf(r,i,!1));return new Mh(t,c)}return o}function Kh(e,t,n,r,i,a){var o=Xh(e,t,r,i,a);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){var n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(of,(function(e,t){r.push(kf(e,t))})),n.isFullyInitialized()&&r.push(gf(n.getNode())),jh(e,r,n.getNode(),t)}(o,n)}function Gh(t,n,r,i){var a=n._queryIdentifier,o=[],s=[],u=Zh(t),c=!0,l=!1,h=void 0;if("default"===a)try{for(var d,p=t.views.entries()[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var v=e(f)(d.value,2),m=v[0],y=v[1];s=s.concat(Wh(y,r,i)),zh(y)&&(t.views.delete(m),y.query._queryParams.loadsAllData()||o.push(y.query))}}catch(e){l=!0,h=e}finally{try{c||null==p.return||p.return()}finally{if(l)throw h}}else{var g=t.views.get(a);g&&(s=s.concat(Wh(g,r,i)),zh(g)&&(t.views.delete(a),g.query._queryParams.loadsAllData()||o.push(g.query)))}return u&&!Zh(t)&&o.push(new(U(Dh,"Reference.ts has not been loaded"),Dh)(n._repo,n._path)),{removed:o,events:s}}function Yh(e){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.views.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.query._queryParams.loadsAllData()||t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}function Jh(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||Fh(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}function Qh(e,t){if(t._queryParams.loadsAllData())return ed(e);var n=t._queryIdentifier;return e.views.get(n)}function $h(e,t){return null!=Qh(e,t)}function Zh(e){return null!=ed(e)}function ed(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.views.values()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var td=1,nd=function t(n){"use strict";e(s)(this,t),this.listenProvider_=n,this.syncPointTree_=new $f(null),this.pendingWriteTree_={visibleWrites:Zf.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function rd(e,t,n,r,i){return function(e,t,n,r,i){U(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=eh(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?fd(e,new jf({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function id(e,t,n,r){!function(e,t,n,r){U(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=th(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);var i=$f.fromObject(n);return fd(e,new qf({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function ad(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=fh(e.pendingWriteTree_,t),i=hh(e.pendingWriteTree_,t);if(i){var a=new $f(null);return null!=r.snap?a=a.set(kl(),!0):jc(r.children,(function(e){a=a.set(new gl(e),!0)})),fd(e,new Wf(r.path,a,n))}return[]}function od(e,t,n){return fd(e,new jf({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function sd(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t._path,o=e.syncPointTree_.get(a),s=[];if(o&&("default"===t._queryIdentifier||$h(o,t))){var u=Gh(o,t,n,r);Hh(o)&&(e.syncPointTree_=e.syncPointTree_.remove(a));var c=u.removed;if(s=u.events,!i){var l=-1!==c.findIndex((function(e){return e._queryParams.loadsAllData()})),f=e.syncPointTree_.findOnPath(a,(function(e,t){return Zh(t)}));if(l&&!f){var h=e.syncPointTree_.subtree(a);if(!h.isEmpty())for(var d=bd(h),p=0;p<d.length;++p){var v=d[p],m=v.query,y=pd(e,v);e.listenProvider_.startListening(_d(m),vd(e,m),y.hashFn,y.onComplete)}}if(!f&&c.length>0&&!r)if(l){var g=null;e.listenProvider_.stopListening(_d(t),g)}else c.forEach((function(t){var n=e.queryToTagMap.get(md(t));e.listenProvider_.stopListening(_d(t),n)}))}xd(e,c)}return s}function ud(e,t,n,r){var i=yd(e,r);if(null!=i){var a=gd(i),o=a.path,s=a.queryId,u=Sl(o,t);return kd(e,o,new jf(Ff(s),u,n))}return[]}function cd(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t._path,a=null,o=!1;e.syncPointTree_.foreachOnPath(i,(function(e,t){var n=Sl(e,i);a=a||Jh(t,n),o=o||Zh(t)}));var s,u=e.syncPointTree_.get(i);if(u?(o=o||Zh(u),a=a||Jh(u,kl())):(u=new Bh,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=a)s=!0;else{s=!1,a=hf.EMPTY_NODE;var c=e.syncPointTree_.subtree(i);c.foreachChild((function(e,t){var n=Jh(t,kl());n&&(a=a.updateImmediateChild(e,n))}))}var l=$h(u,t);if(!l&&!t._queryParams.loadsAllData()){var f=md(t);U(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");var h=wd();e.queryToTagMap.set(f,h),e.tagToQueryMap.set(h,f)}var d=lh(e.pendingWriteTree_,i),p=Kh(u,t,n,d,a,s);if(!l&&!o&&!r){var v=Qh(u,t);p=p.concat(Cd(e,t,v))}return p}function ld(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=Jh(n,Sl(e,t));if(r)return r}));return mh(r,t,i,n,!0)}function fd(e,t){return hd(t,e.syncPointTree_,null,lh(e.pendingWriteTree_,kl()))}function hd(e,t,n,r){if(Nl(e.path))return dd(e,t,n,r);var i=t.get(kl());null==n&&null!=i&&(n=Jh(i,kl()));var a=[],o=bl(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=wh(r,o);a=a.concat(hd(s,u,c,l))}return i&&(a=a.concat(Vh(i,e,r,n))),a}function dd(e,t,n,r){var i=t.get(kl());null==n&&null!=i&&(n=Jh(i,kl()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=wh(r,t),u=e.operationForChild(t);u&&(a=a.concat(dd(u,i,o,s)))})),i&&(a=a.concat(Vh(i,e,r,n))),a}function pd(e,t){var n=t.query,r=vd(e,n);return{hashFn:function(){var e=function(e){return e.viewCache_.serverCache.getNode()}(t)||hf.EMPTY_NODE;return e.hash()},onComplete:function(t){if("ok"===t)return r?function(e,t,n){var r=yd(e,n);if(r){var i=gd(r),a=i.path,o=i.queryId,s=Sl(a,t);return kd(e,a,new Uf(Ff(o),s))}return[]}(e,n._path,r):function(e,t){return fd(e,new Uf({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);var i=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return sd(e,n,null,i)}}}function vd(e,t){var n=md(t);return e.queryToTagMap.get(n)}function md(e){return e._path.toString()+"$"+e._queryIdentifier}function yd(e,t){return e.tagToQueryMap.get(t)}function gd(e){var t=e.indexOf("$");return U(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new gl(e.substr(0,t))}}function kd(e,t,n){var r=e.syncPointTree_.get(t);return U(r,"Missing sync point for query tag that we're tracking"),Vh(r,n,lh(e.pendingWriteTree_,t),null)}function bd(e){return e.fold((function(e,t,n){if(t&&Zh(t))return[ed(t)];var r=[];return t&&(r=Yh(t)),jc(n,(function(e,t){r=r.concat(t)})),r}))}function _d(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(U(qh,"Reference.ts has not been loaded"),qh)(e._repo,e._path):e}function xd(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=md(r),a=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(a)}}}function wd(){return td++}function Cd(e,t,n){var r=t._path,i=vd(e,t),a=pd(e,n),o=e.listenProvider_.startListening(_d(t),i,a.hashFn,a.onComplete),s=e.syncPointTree_.subtree(r);if(i)U(!Zh(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold((function(e,t,n){if(!Nl(e)&&t&&Zh(t))return[ed(t).query];var r=[];return t&&(r=r.concat(Yh(t).map((function(e){return e.query})))),jc(n,(function(e,t){r=r.concat(t)})),r})),c=0;c<u.length;++c){var l=u[c];e.listenProvider_.stopListening(_d(l),vd(e,l))}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Id=function(){"use strict";function t(n){e(s)(this,t),this.node_=n}return e(u)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Td=function(){"use strict";function t(n,r){e(s)(this,t),this.syncTree_=n,this.path_=r}return e(u)(t,[{key:"getImmediateChild",value:function(e){var n=Tl(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return ld(this.syncTree_,this.path_)}}]),t}(),Nd=function(e,t,n){return e&&"object"==typeof e?(U(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Sd(e[".sv"],t,n):"object"==typeof e[".sv"]?Ed(e[".sv"],t):void U(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Sd=function(e,t,n){if("timestamp"===e)return n.timestamp;U(!1,"Unexpected server value: "+e)},Ed=function(e,t,n){e.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&U(!1,"Unexpected increment value: "+r);var i=t.node();if(U(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},Rd=function(e,t,n,r){return Ad(t,new Td(n,e),r)},Pd=function(e,t,n){return Ad(e,new Id(t),n)};function Ad(e,t,n){var r,i=e.getPriority().val(),a=Nd(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=Nd(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new tf(s,pf(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new tf(a))),u.forEachChild(of,(function(e,i){var a=Ad(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Od=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(s)(this,t),this.name=n,this.parent=r,this.node=i};function Ld(e,t){for(var n=t instanceof gl?t:new gl(t),r=e,i=bl(n);null!==i;){var a=_e(r.node.children,i)||{children:{},childCount:0};r=new Od(i,r,a),i=bl(n=xl(n))}return r}function Dd(e){return e.node.value}function Md(e,t){e.node.value=t,jd(e)}function Fd(e){return e.node.childCount>0}function zd(e,t){jc(e.node.children,(function(n,r){t(new Od(n,e,r))}))}function Wd(e,t,n,r){n&&!r&&t(e),zd(e,(function(e){Wd(e,t,!0,r)})),n&&r&&t(e)}function Ud(e){return new gl(null===e.parent?e.name:Ud(e.parent)+"/"+e.name)}function jd(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Dd(e)&&!Fd(e)}(n),i=be(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,jd(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,jd(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}var qd=/[\[\].#$\/\u0000-\u001F\u007F]/,Bd=/[\[\].#$\u0000-\u001F\u007F]/,Hd=10485760,Vd=function(e){return"string"==typeof e&&0!==e.length&&!qd.test(e)},Xd=function(e){return"string"==typeof e&&0!==e.length&&!Bd.test(e)},Kd=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Oc(e)||e&&"object"==typeof e&&be(e,".sv")},Gd=function(e,t,n,r){r&&void 0===t||Yd(Ae(e,"value"),t,n)},Yd=function(e,t,n){var r=n instanceof gl?new Al(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ll(r));if("function"==typeof t)throw new Error(e+"contains a function "+Ll(r)+" with contents = "+t.toString());if(Oc(t))throw new Error(e+"contains "+t.toString()+" "+Ll(r));if("string"==typeof t&&t.length>3495253.3333333335&&Le(t)>Hd)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Ll(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(jc(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!Vd(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ll(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=Le(s),Ol(o),Yd(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Le(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+Ll(r)+" in addition to actual children.")}},Jd=function(e,t,n,r){if(!r||void 0!==t){var i=Ae(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var a=[];jc(t,(function(e,t){var r=new gl(e);if(Yd(i,t,Tl(n,r)),".priority"===wl(r)&&!Kd(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(r)})),function(e,t){var n,r;for(n=0;n<t.length;n++)for(var i=Cl(r=t[n]),a=0;a<i.length;a++)if(".priority"===i[a]&&a===i.length-1);else if(!Vd(i[a]))throw new Error(e+"contains an invalid key ("+i[a]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');t.sort(El);var o=null;for(n=0;n<t.length;n++){if(r=t[n],null!==o&&Pl(o,r))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}}(i,a)}},Qd=function(e,t,n,r){if(!(r&&void 0===n||Xd(n)))throw new Error(Ae(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},$d=function(e,t){if(".info"===bl(t))throw new Error(e+" failed = Can't modify data under /.info/")},Zd=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Vd(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Xd(e)}(n))throw new Error(Ae(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},ep=function t(){"use strict";e(s)(this,t),this.eventLists_=[],this.recursionDepth_=0};function tp(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||Rl(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function np(e,t,n){tp(e,n),ip(e,(function(e){return Rl(e,t)}))}function rp(e,t,n){tp(e,n),ip(e,(function(e){return Pl(e,t)||Pl(t,e)}))}function ip(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(ap(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function ap(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();Ic&&Sc("event: "+n.toString()),Vc(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var op="repo_interrupt",sp=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ep,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rf(),this.transactionQueueTree_=new Od,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(u)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function up(e,t,n){if(e.stats_=al(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Sf(e.repoInfo_,(function(t,n,r,i){fp(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return hp(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Fl(e.repoInfo_,t,(function(t,n,r,i){fp(e,t,n,r,i)}),(function(t){hp(e,t)}),(function(t){!function(e,t){jc(t,(function(t,n){dp(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new Mf(e.stats_,e.server_)},a=r.toString(),il[a]||(il[a]=i()),il[a]),e.infoData_=new Ef,e.infoSyncTree_=new nd({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=od(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),dp(e,"connected",!1),e.serverSyncTree_=new nd({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);rp(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function cp(e){var t=e.infoData_.getNode(new gl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function lp(e){return(t=(t={timestamp:cp(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function fp(e,t,n,r,i){e.dataUpdateCount++;var a=new gl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=we(n,(function(e){return pf(e)}));o=function(e,t,n,r){var i=yd(e,r);if(i){var a=gd(i),o=a.path,s=a.queryId,u=Sl(o,t),c=$f.fromObject(n);return kd(e,o,new qf(Ff(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=pf(n);o=ud(e.serverSyncTree_,a,u,i)}else if(r){var c=we(n,(function(e){return pf(e)}));o=function(e,t,n){var r=$f.fromObject(n);return fd(e,new qf({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=pf(n);o=od(e.serverSyncTree_,a,l)}var f=a;o.length>0&&(f=wp(e,a)),rp(e.eventQueue_,f,o)}function hp(e,t){dp(e,"connected",t),!1===t&&function(e){gp(e,"onDisconnectEvents");var t=lp(e),n=Rf();Af(e.onDisconnect_,kl(),(function(r,i){var a=Rd(r,i,e.serverSyncTree_,t);Pf(n,r,a)}));var r=[];Af(n,kl(),(function(t,n){r=r.concat(od(e.serverSyncTree_,t,n));var i=Sp(e,t);wp(e,i)})),e.onDisconnect_=Rf(),rp(e.eventQueue_,kl(),r)}(e)}function dp(e,t,n){var r=new gl("/.info/"+t),i=pf(n);e.infoData_.updateSnapshot(r,i);var a=od(e.infoSyncTree_,r,i);rp(e.eventQueue_,r,a)}function pp(e){return e.nextWriteId_++}function vp(e,t,n,r,i){gp(e,"set",{path:t.toString(),value:n,priority:r});var a=lp(e),o=pf(n,r),s=ld(e.serverSyncTree_,t),u=Pd(o,s,a),c=pp(e),l=rd(e.serverSyncTree_,t,u,c,!0);tp(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),(function(n,r){var a="ok"===n;a||Ac("set at "+t+" failed: "+n);var o=ad(e.serverSyncTree_,c,!a);rp(e.eventQueue_,t,o),kp(e,i,n,r)}));var f=Sp(e,t);wp(e,f),rp(e.eventQueue_,f,[])}function mp(e,t,n){var r;r=".info"===bl(t._path)?sd(e.infoSyncTree_,t,n):sd(e.serverSyncTree_,t,n),np(e.eventQueue_,t._path,r)}function yp(e){e.persistentConnection_&&e.persistentConnection_.interrupt(op)}function gp(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),Sc.apply(void 0,[a].concat(e(l)(r)))}function kp(e,t,n,r){t&&Vc((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var a=new Error(i);a.code=e,t(a)}}))}function bp(e,t,n){return ld(e.serverSyncTree_,t,n)||hf.EMPTY_NODE}function _p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Np(e,t),Dd(t)){var n=Ip(e,t);U(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&xp(e,Ud(t),n)}else Fd(t)&&zd(t,(function(t){_p(e,t)}))}function xp(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=bp(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];U(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=Sl(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),f=t;e.server_.put(f.toString(),l,(function(r){gp(e,"transaction put response",{path:f.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(ad(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);Np(e,Ld(e.transactionQueueTree_,t)),_p(e,e.transactionQueueTree_),rp(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)Vc(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{Ac("transaction at "+f.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}wp(e,t)}}),o)}function wp(e,t){var n=Cp(e,t),r=Ud(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=Sl(n,u.path),l=!1,f=void 0;if(U(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,f=u.abortReason,a=a.concat(ad(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,f="maxretry",a=a.concat(ad(e.serverSyncTree_,u.currentWriteId,!0));else{var h=bp(e,u.path,o);u.currentInputSnapshot=h;var d=t[r].update(h.val());if(void 0!==d){Yd("transaction failed: Data returned ",d,u.path);var p=pf(d);"object"==typeof d&&null!=d&&be(d,".priority")||(p=p.updatePriority(h.getPriority()));var v=u.currentWriteId,m=lp(e),y=Pd(p,h,m);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=y,u.currentWriteId=pp(e),o.splice(o.indexOf(v),1),a=(a=a.concat(rd(e.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally))).concat(ad(e.serverSyncTree_,v,!0))}else l=!0,f="nodata",a=a.concat(ad(e.serverSyncTree_,u.currentWriteId,!0))}rp(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===f?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(f),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Np(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Vc(i[u]);_p(e,e.transactionQueueTree_)}(e,Ip(e,n),r),r}function Cp(e,t){var n,r=e.transactionQueueTree_;for(n=bl(t);null!==n&&void 0===Dd(r);)r=Ld(r,n),n=bl(t=xl(t));return r}function Ip(e,t){var n=[];return Tp(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Tp(e,t,n){var r=Dd(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);zd(t,(function(t){Tp(e,t,n)}))}function Np(e,t){var n=Dd(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Md(t,n.length>0?n:void 0)}zd(t,(function(t){Np(e,t)}))}function Sp(e,t){var n=Ud(Cp(e,t)),r=Ld(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Ep(e,t)})),Ep(e,r),Wd(r,(function(t){Ep(e,t)})),n}function Ep(e,t){var n=Dd(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(U(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(U(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ad(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Md(t,void 0):n.length=a+1,rp(e.eventQueue_,Ud(t),i);for(var s=0;s<r.length;s++)Vc(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rp,Pp,Ap=function(e,t){var n=Op(e),r=n.namespace;"firebase.com"===n.domain&&Pc(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Pc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ac("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new el(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new gl(n.pathString)}},Op=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var f=e.indexOf("?");-1===f&&(f=e.length),t=e.substring(0,Math.min(l,f)),l<f&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,f)));var h=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):Ac("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,f)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),a=r}"ns"in h&&(a=h.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Lp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Dp=(Rp=0,Pp=[],function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.eventType=n,this.eventRegistration=r,this.snapshot=i,this.prevName=a}return e(u)(t,[{key:"getPath",value:function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}},{key:"getEventType",value:function(){return this.eventType}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}]),t}()),Mp=function(){"use strict";function t(n,r,i){e(s)(this,t),this.eventRegistration=n,this.error=r,this.path=i}return e(u)(t,[{key:"getPath",value:function(){return this.path}},{key:"getEventType",value:function(){return"cancel"}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.path.toString()+":cancel"}}]),t}(),Fp=function(){"use strict";function t(n,r){e(s)(this,t),this.snapshotCallback=n,this.cancelCallback=r}return e(u)(t,[{key:"onValue",value:function(e,t){this.snapshotCallback.call(null,e,t)}},{key:"onCancel",value:function(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}},{key:"hasCancelCallback",get:function(){return!!this.cancelCallback}},{key:"matches",value:function(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}]),t}(),zp=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(u)(t,[{key:"key",get:function(){return Nl(this._path)?null:wl(this._path)}},{key:"ref",get:function(){return new Wp(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=Nf(this._queryParams),t=Wc(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return Nf(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Fe(e))instanceof t))return!1;var n=this._repo===e._repo,r=Rl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var Wp=function(t){"use strict";e(d)(r,t);var n=e(C)(r);function r(t,i){return e(s)(this,r),n.call(this,t,i,new If,!1)}return e(u)(r,[{key:"parent",get:function(){var e=Il(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(zp),Up=function(){"use strict";function t(n,r,i){e(s)(this,t),this._node=n,this.ref=r,this._index=i}return e(u)(t,[{key:"priority",get:function(){return this._node.getPriority().val()}},{key:"key",get:function(){return this.ref.key}},{key:"size",get:function(){return this._node.numChildren()}},{key:"child",value:function(e){var n=new gl(e),r=qp(this.ref,e);return new t(this._node.getChild(n),r,of)}},{key:"exists",value:function(){return!this._node.isEmpty()}},{key:"exportVal",value:function(){return this._node.val(!0)}},{key:"forEach",value:function(e){var n=this;return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(function(r,i){return e(new t(i,qp(n.ref,r),of))}))}},{key:"hasChild",value:function(e){var t=new gl(e);return!this._node.getChild(t).isEmpty()}},{key:"hasChildren",value:function(){return!this._node.isLeafNode()&&!this._node.isEmpty()}},{key:"toJSON",value:function(){return this.exportVal()}},{key:"val",value:function(){return this._node.val()}}]),t}();function jp(e,t){return(e=Fe(e))._checkNotDeleted("ref"),void 0!==t?qp(e._root,t):e._root}function qp(e,t){var n,r,i,a;return null===bl((e=Fe(e))._path)?(n="child",r="path",a=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Qd(n,r,i,a)):Qd("child","path",t,!1),new Wp(e._repo,Tl(e._path,t))}function Bp(e,t){e=Fe(e),$d("set",e._path),Gd("set",t,e._path,!1);var n=new ne;return vp(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}function Hp(e,t){Jd("update",t,e._path,!1);var n=new ne;return function(e,t,n,r){gp(e,"update",{path:t.toString(),value:n});var i=!0,a=lp(e),o={};if(jc(n,(function(n,r){i=!1,o[n]=Rd(Tl(t,n),pf(r),e.serverSyncTree_,a)})),i)Sc("update() called with empty data.  Don't do anything."),kp(0,r,"ok",void 0);else{var s=pp(e),u=id(e.serverSyncTree_,t,o,s);tp(e.eventQueue_,u),e.server_.merge(t.toString(),n,(function(n,i){var a="ok"===n;a||Ac("update at "+t+" failed: "+n);var o=ad(e.serverSyncTree_,s,!a),u=o.length>0?wp(e,t):t;rp(e.eventQueue_,u,o),kp(0,r,n,i)})),jc(n,(function(n){var r=Sp(e,Tl(t,n));wp(e,r)})),rp(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((function(){}))),n.promise}var Vp=function(){"use strict";function t(n){e(s)(this,t),this.callbackContext=n}return e(u)(t,[{key:"respondsTo",value:function(e){return"value"===e}},{key:"createEvent",value:function(e,t){var n=t._queryParams.getIndex();return new Dp("value",this,new Up(e.snapshotNode,new Wp(t._repo,t._path),n))}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new Mp(this,e,t):null}},{key:"matches",value:function(e){return e instanceof t&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}},{key:"hasAnyCallback",value:function(){return null!==this.callbackContext}}]),t}(),Xp=function(){"use strict";function t(n,r){e(s)(this,t),this.eventType=n,this.callbackContext=r}return e(u)(t,[{key:"respondsTo",value:function(e){var t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new Mp(this,e,t):null}},{key:"createEvent",value:function(e,t){U(null!=e.childName,"Child events should have a childName.");var n=qp(new Wp(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Dp(e.type,this,new Up(e.snapshotNode,n,r),e.prevName)}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,e.prevName)}}},{key:"matches",value:function(e){return e instanceof t&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}},{key:"hasAnyCallback",value:function(){return!!this.callbackContext}}]),t}();function Kp(e,t,n,r,i){var a;if("object"==typeof r&&(a=void 0,i=r),"function"==typeof r&&(a=r),i&&i.onlyOnce){var o=n,s=function(t,n){mp(e._repo,e,d),o(t,n)};s.userCallback=n.userCallback,s.context=n.context,n=s}var u,c,l,f,h=new Fp(n,a||void 0),d="value"===t?new Vp(h):new Xp(t,h);return u=e._repo,l=d,f=".info"===bl((c=e)._path)?cd(u.infoSyncTree_,c,l):cd(u.serverSyncTree_,c,l),np(u.eventQueue_,c._path,f),function(){return mp(e._repo,e,d)}}function Gp(e,t,n,r){return Kp(e,"value",t,n,r)}!function(e){U(!Dh,"__referenceConstructor has already been defined"),Dh=e}(Wp),function(e){U(!qh,"__referenceConstructor has already been defined"),qh=e}(Wp);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yp={},Jp=!1;function Qp(e,t,n,r){e.repoInfo_=new el("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function $p(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||Pc("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Sc("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=Ap(a,i),u=s.repoInfo,c=void 0;void 0!==_&&_.env&&(c=_.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Ap(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new Yc(Yc.OWNER):new Gc(e.name,e.options,t);Zd("Invalid Firebase Database URL",s),Nl(s.path)||Pc("Database URL must point to the root of a Firebase Database (not including a child path).");var f=function(e,t,n,r){var i=Yp[t.name];i||(i={},Yp[t.name]=i);var a=i[e.toURLString()];a&&Pc("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new sp(e,Jp,n,r),i[e.toURLString()]=a,a}(u,e,l,new Kc(e.name,n));return new Zp(f,e)}var Zp=function(){"use strict";function t(n,r){e(s)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(u)(t,[{key:"_repo",get:function(){return this._instanceStarted||(up(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Wp(this._repo,kl())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Yp[t])&&n[e.key]===e||Pc("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),yp(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&Pc("Cannot call "+e+" on a deleted database.")}}]),t}();function ev(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt(),n=arguments.length>1?arguments[1]:void 0,r=Et(t,"database").getImmediate({identifier:n});if(!r._instanceStarted){var i=Z("database");i&&tv.apply(void 0,[r].concat(e(l)(i)))}return r}function tv(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=Fe(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Pc("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,a=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Pc('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Yc(Yc.OWNER);else if(r.mockUserToken){var o="string"==typeof r.mockUserToken?r.mockUserToken:re(r.mockUserToken,e.app.options.projectId);a=new Yc(o)}Qp(i,t,n,a)}Fl.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Fl.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){pc(Ot),St(new ze("database",(function(e,t){var n=t.instanceIdentifier;return $p(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Mt(fc,hc,e),Mt(fc,hc,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var nv,rv,iv={};nv=void 0===t?"undefined"==typeof window?iv:window:t,rv=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n,r,i,a,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",s='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',u="Success",c="Failure",l="Warning",f="Info",h={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d="Success",p="Failure",v="Warning",m="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},g="Show",k="Ask",b="Prompt",_={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x="Standard",w="Hourglass",C="Circle",I="Arrows",T="Dots",N="Pulse",S="Custom",E="Notiflix",R={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},P="Standard",A="Hourglass",O="Circle",L="Arrows",D="Dots",M="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},z=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+o)},W=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+o)},U=function(t){return t||(t="head"),null!==e.document[t]||(z('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!U("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}},q=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=t&&"[object Object]"===Object.prototype.toString.call(n[r])?q(e[r],n[r]):n[r])};n<arguments.length;n++)r(arguments[n]);return e},B=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},Y=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Q=0,$=function(n,r,i,a){if(!U("body"))return!1;t||ue.Notify.init({});var o=q(!0,t,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof a&&!Array.isArray(a)){var d={};"object"==typeof i?d=i:"object"==typeof a&&(d=a),t=q(!0,t,d)}var p=t[n.toLocaleLowerCase("en")];Q++,"string"!=typeof r&&(r="Notiflix "+n),t.plainText&&(r=B(r)),!t.plainText&&r.length>t.messageMaxLength&&(t=q(!0,t,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>t.messageMaxLength&&(r=r.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var v=e.document.getElementById(h.wrapID)||e.document.createElement("div");if(v.id=h.wrapID,v.style.width=t.width,v.style.zIndex=t.zindex,v.style.opacity=t.opacity,"center-center"===t.position?(v.style.left=t.distance,v.style.top=t.distance,v.style.right=t.distance,v.style.bottom=t.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===t.position?(v.style.left=t.distance,v.style.right=t.distance,v.style.top=t.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===t.position?(v.style.left=t.distance,v.style.right=t.distance,v.style.bottom=t.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===t.position?(v.style.right=t.distance,v.style.bottom=t.distance,v.style.top="auto",v.style.left="auto"):"left-top"===t.position?(v.style.left=t.distance,v.style.top=t.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===t.position?(v.style.left=t.distance,v.style.bottom=t.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=t.distance,v.style.top=t.distance,v.style.left="auto",v.style.bottom="auto"),t.backOverlay){var m=e.document.getElementById(h.overlayID)||e.document.createElement("div");m.id=h.overlayID,m.style.width="100%",m.style.height="100%",m.style.position="fixed",m.style.zIndex=t.zindex-1,m.style.left=0,m.style.top=0,m.style.right=0,m.style.bottom=0,m.style.background=p.backOverlayColor||t.backOverlayColor,m.className=t.cssAnimation?"nx-with-animation":"",m.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(h.overlayID)||e.document.body.appendChild(m)}e.document.getElementById(h.wrapID)||e.document.body.appendChild(v);var y=e.document.createElement("div");y.id=t.ID+"-"+Q,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof i?"nx-with-close-button":"")+" "+("function"==typeof i?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+s,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var g="";if(t.closeButton&&"function"!=typeof i&&(g='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?g:"");else{var k="";n===u?k='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?k='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===l?k='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===f&&(k='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=k+'<span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?g:"")}else y.innerHTML='<span class="nx-message">'+r+"</span>"+(t.closeButton?g:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(h.wrapID);b.insertBefore(y,b.firstChild)}else e.document.getElementById(h.wrapID).appendChild(y);var _=e.document.getElementById(y.id);if(_){var x,w,C=function(){_.classList.add("nx-remove");var t=e.document.getElementById(h.overlayID);t&&0>=v.childElementCount&&t.classList.add("nx-remove"),clearTimeout(x)},I=function(){if(_&&null!==_.parentNode&&_.parentNode.removeChild(_),0>=v.childElementCount&&null!==v.parentNode){v.parentNode.removeChild(v);var t=e.document.getElementById(h.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(w)};if(t.closeButton&&"function"!=typeof i&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof i||t.clickToClose)&&_.addEventListener("click",(function(){"function"==typeof i&&i(),C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof i){var T=function(){x=setTimeout((function(){C()}),t.timeout),w=setTimeout((function(){I()}),t.timeout+t.cssAnimationDuration)};T(),t.pauseOnHover&&(_.addEventListener("mouseenter",(function(){_.classList.add("nx-paused"),clearTimeout(x),clearTimeout(w)})),_.addEventListener("mouseleave",(function(){_.classList.remove("nx-paused"),T()})))}}if(t.showOnlyTheLastOne&&0<Q)for(var N,S=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Q+"])"),E=0;E<S.length;E++)null!==(N=S[E]).parentNode&&N.parentNode.removeChild(N);t=q(!0,t,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,r,i,a,o,u){if(!U("body"))return!1;n||ue.Report.init({});var c={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof u&&!Array.isArray(u)){var l={};"object"==typeof o?l=o:"object"==typeof u&&(l=u),c=q(!0,n,{}),n=q(!0,n,l)}var f=n[t.toLocaleLowerCase("en")];"string"!=typeof r&&(r="Notiflix "+t),"string"!=typeof i&&(t===d?i='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?i='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===v?i='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===m&&(i='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof a&&(a="Okay"),n.plainText&&(r=B(r),i=B(i),a=B(a)),n.plainText||(r.length>n.titleMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',a="Okay"),i.length>n.messageMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',a="Okay"),a.length>n.buttonMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',a="Okay")),r.length>n.titleMaxLength&&(r=r.substring(0,n.titleMaxLength)+"..."),i.length>n.messageMaxLength&&(i=i.substring(0,n.messageMaxLength)+"..."),a.length>n.buttonMaxLength&&(a=a.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var h=e.document.createElement("div");h.id=y.ID,h.className=n.className,h.style.zIndex=n.zindex,h.style.borderRadius=n.borderRadius,h.style.fontFamily='"'+n.fontFamily+'", '+s,n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center";var g="",k=!0===n.backOverlayClickToClose;n.backOverlay&&(g='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(k?" nx-report-click-to-close":"")+'" style="background:'+(f.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b="";if(t===d?b=function(e,t){return e||(e="110px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):t===p?b=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):t===v?b=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):t===m&&(b=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor)),h.innerHTML=g+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+b+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+f.titleColor+';">'+r+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+f.messageColor+';">'+i+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+f.buttonBackground+"; color:"+f.buttonColor+';">'+a+"</a></div>",!e.document.getElementById(h.id)){e.document.body.appendChild(h);var _=function(){var t=e.document.getElementById(h.id);t.classList.add("nx-remove");var r=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(r)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),_()})),g&&k&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){_()}))}n=q(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,i,a,o,u,c,l,f){if(!U("body"))return!1;r||ue.Confirm.init({});var h=q(!0,r,{});"object"!=typeof f||Array.isArray(f)||(r=q(!0,r,f)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof i&&(i="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof u&&(u="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof l&&(l=void 0),r.plainText&&(n=B(n),i=B(i),o=B(o),u=B(u)),r.plainText||(n.length>r.titleMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",u="..."),i.length>r.messageMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",u="..."),(o.length||u.length)>r.buttonsMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",u="...")),n.length>r.titleMaxLength&&(n=n.substring(0,r.titleMaxLength)+"..."),i.length>r.messageMaxLength&&(i=i.substring(0,r.messageMaxLength)+"..."),o.length>r.buttonsMaxLength&&(o=o.substring(0,r.buttonsMaxLength)+"..."),u.length>r.buttonsMaxLength&&(u=u.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=_.ID,d.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),d.style.zIndex=r.zindex,d.style.padding=r.distance,r.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on"));var p="string"==typeof r.position?r.position.trim():"center";d.classList.add("nx-position-"+p),d.style.fontFamily='"'+r.fontFamily+'", '+s;var v="";r.backOverlay&&(v='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var m="";"function"==typeof c&&(m='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+u+"</a>");var y="",g=null,x=void 0;if(t===k||t===b){g=a||"";var w=t===k||200<g.length?Math.ceil(1.5*g.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+g+'"':"")+' maxlength="'+w+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(d.innerHTML=v+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+n+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+i+y+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+o+"</a>"+m+"</div></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var C=e.document.getElementById(d.id),I=e.document.getElementById("NXConfirmButtonOk"),T=e.document.getElementById("NXConfirmValidationInput");T&&(T.focus(),T.setSelectionRange(0,(T.value||"").length),T.addEventListener("keyup",(function(e){var n=e.target.value;t===k&&n!==g?(e.preventDefault(),T.classList.add("nx-validation-failure"),T.classList.remove("nx-validation-success")):(t===k&&(T.classList.remove("nx-validation-failure"),T.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(e){if(t===k&&g&&T){if((T.value||"").toString()!==g)return T.focus(),T.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;T.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===b&&T&&(x=T.value||""),c(x)),C.classList.add("nx-remove");var n=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(n))}),r.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof l&&(t===b&&T&&(x=T.value||""),l(x)),C.classList.add("nx-remove");var e=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(e))}),r.cssAnimationDuration)}))}r=q(!0,r,h)},re=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ie=function(t,n,r,a,o){if(!U("body"))return!1;i||ue.Loading.init({});var u=q(!0,i,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof r&&!Array.isArray(r)){var c={};"object"==typeof n?c=n:"object"==typeof r&&(c=r),i=q(!0,i,c)}var l="";if("string"==typeof n&&0<n.length&&(l=n),a){var f="";0<(l=l.length>i.messageMaxLength?B(l).toString().substring(0,i.messageMaxLength)+"...":B(l).toString()).length&&(f='<p id="'+i.messageID+'" class="nx-loading-message" style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+l+"</p>"),i.cssAnimation||(i.cssAnimationDuration=0);var h="";if(t===x)h=H(i.svgSize,i.svgColor);else if(t===w)h=V(i.svgSize,i.svgColor);else if(t===C)h=X(i.svgSize,i.svgColor);else if(t===I)h=K(i.svgSize,i.svgColor);else if(t===T)h=G(i.svgSize,i.svgColor);else if(t===N)h=Y(i.svgSize,i.svgColor);else if(t===S&&null!==i.customSvgCode&&null===i.customSvgUrl)h=i.customSvgCode||"";else if(t===S&&null!==i.customSvgUrl&&null===i.customSvgCode)h='<img class="nx-custom-loading-icon" width="'+i.svgSize+'" height="'+i.svgSize+'" src="'+i.customSvgUrl+'" alt="Notiflix">';else{if(t===S&&(null===i.customSvgUrl||null===i.customSvgCode))return z('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;h=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(i.svgSize,"#f8f8f8","#32c682")}var d=parseInt((i.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,v=d>=p?p-40+"px":d+"px",m='<div style="width:'+v+"; height:"+v+';" class="'+i.className+"-icon"+(0<l.length?" nx-with-message":"")+'">'+h+"</div>",y=e.document.createElement("div");y.id=R.ID,y.className=i.className+(i.cssAnimation?" nx-with-animation":"")+(i.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=i.zindex,y.style.background=i.backgroundColor,y.style.animationDuration=i.cssAnimationDuration+"ms",y.style.fontFamily='"'+i.fontFamily+'", '+s,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",i.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=m+f,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),i.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),i.cssAnimationDuration)}))}else if(e.document.getElementById(R.ID))var g=e.document.getElementById(R.ID),k=setTimeout((function(){g.classList.add("nx-remove");var e=setTimeout((function(){null!==g.parentNode&&(g.parentNode.removeChild(g),clearTimeout(e))}),i.cssAnimationDuration);clearTimeout(k)}),o);i=q(!0,i,u)},ae=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},oe=0,se=function(t,n,r,i,o,u){var c;if(Array.isArray(r)){if(1>r.length)return z("Array of HTMLElements should contains at least one HTMLElement."),!1;c=r}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,r)){if(1>r.length)return z("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(r)}else{if("string"!=typeof r||1>(r||"").length||1===(r||"").length&&("#"===(r||"")[0]||"."===(r||"")[0]))return z("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var l=e.document.querySelectorAll(r);if(1>l.length)return z('You called the "Notiflix.Block..." function with "'+r+'" selector, but there is no such element(s) in the document.'),!1;c=l}a||ue.Block.init({});var f=q(!0,a,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof o&&!Array.isArray(o)){var h={};"object"==typeof i?h=i:"object"==typeof o&&(h=o),a=q(!0,a,h)}var d="";"string"==typeof i&&0<i.length&&(d=i),a.cssAnimation||(a.cssAnimationDuration=0);var p=F.className;"string"==typeof a.className&&(p=a.className.trim());var v="number"==typeof a.querySelectorLimit?a.querySelectorLimit:200,m=(c||[]).length>=v?v:c.length,y="nx-block-temporary-position";if(t){for(var g,k=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<m;b++)if(g=c[b]){if(-1<k.indexOf(g.tagName.toLocaleLowerCase("en")))break;var _=g.querySelectorAll("[id^="+F.ID+"]");if(1>_.length){var x="";n&&(x=n===A?V(a.svgSize,a.svgColor):n===O?X(a.svgSize,a.svgColor):n===L?K(a.svgSize,a.svgColor):n===D?G(a.svgSize,a.svgColor):n===M?Y(a.svgSize,a.svgColor):H(a.svgSize,a.svgColor));var w='<span class="'+p+'-icon" style="width:'+a.svgSize+";height:"+a.svgSize+';">'+x+"</span>",C="";0<d.length&&(d=d.length>a.messageMaxLength?B(d).substring(0,a.messageMaxLength)+"...":B(d),C='<span style="font-size:'+a.messageFontSize+";color:"+a.messageColor+';" class="'+p+'-message">'+d+"</span>"),oe++;var I=e.document.createElement("div");I.id=F.ID+"-"+oe,I.className=p+(a.cssAnimation?" nx-with-animation":""),I.style.position=a.position,I.style.zIndex=a.zindex,I.style.background=a.backgroundColor,I.style.animationDuration=a.cssAnimationDuration+"ms",I.style.fontFamily='"'+a.fontFamily+'", '+s,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",a.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=w+C;var T,N=e.getComputedStyle(g).getPropertyValue("position"),S="string"==typeof N?N.toLocaleLowerCase("en"):"relative",E=Math.round(1.25*parseInt(a.svgSize))+40,R="";E>(g.offsetHeight||0)&&(R="min-height:"+E+"px;"),T=g.getAttribute("id")?"#"+g.getAttribute("id"):g.classList[0]?"."+g.classList[0]:(g.tagName||"").toLocaleLowerCase("en");var P="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(S);if(j||0<R.length){if(!U("head"))return!1;j&&(P="position:relative!important;");var J='<style id="Style-'+F.ID+"-"+oe+'">'+T+"."+y+"{"+P+R+"}</style>",Q=e.document.createRange();Q.selectNode(e.document.head);var $=Q.createContextualFragment(J);e.document.head.appendChild($),g.classList.add(y)}g.appendChild(I)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var r=t.getAttribute("id"),i=e.document.getElementById("Style-"+r);i&&null!==i.parentNode&&i.parentNode.removeChild(i),clearTimeout(n)}),a.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else W("string"==typeof r?'"Notiflix.Block.remove();" function called with "'+r+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+r+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),a.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<m;t++)(e=c[t])&&(te(e),_=e.querySelectorAll("[id^="+F.ID+"]"),ee(_));clearTimeout(ne)}),u);a=q(!0,a,f)},ue={Notify:{init:function(e){t=q(!0,h,e),j(J,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=q(!0,t,e)):(z("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){$(u,e,t,n)},failure:function(e,t,n){$(c,e,t,n)},warning:function(e,t,n){$(l,e,t,n)},info:function(e,t,n){$(f,e,t,n)}},Report:{init:function(e){n=q(!0,y,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=q(!0,n,e)):(z("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,r,i){ee(d,e,t,n,r,i)},failure:function(e,t,n,r,i){ee(p,e,t,n,r,i)},warning:function(e,t,n,r,i){ee(v,e,t,n,r,i)},info:function(e,t,n,r,i){ee(m,e,t,n,r,i)}},Confirm:{init:function(e){r=q(!0,_,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return r?void(r=q(!0,r,e)):(z("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,r,i,a,o){ne(g,e,t,null,n,r,i,a,o)},ask:function(e,t,n,r,i,a,o,s){ne(k,e,t,n,r,i,a,o,s)},prompt:function(e,t,n,r,i,a,o,s){ne(b,e,t,n,r,i,a,o,s)}},Loading:{init:function(e){i=q(!0,R,e),j(re,"NotiflixLoadingInternalCSS")},merge:function(e){return i?void(i=q(!0,i,e)):(z("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){ie(x,e,t,!0,0)},hourglass:function(e,t){ie(w,e,t,!0,0)},circle:function(e,t){ie(C,e,t,!0,0)},arrows:function(e,t){ie(I,e,t,!0,0)},dots:function(e,t){ie(T,e,t,!0,0)},pulse:function(e,t){ie(N,e,t,!0,0)},custom:function(e,t){ie(S,e,t,!0,0)},notiflix:function(e,t){ie(E,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),ie(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(R.ID);if(n)if(0<t.length){t=t.length>i.messageMaxLength?B(t).substring(0,i.messageMaxLength)+"...":B(t);var r=n.getElementsByTagName("p")[0];if(r)r.innerHTML=t;else{var a=e.document.createElement("p");a.id=i.messageID,a.className="nx-loading-message nx-loading-message-new",a.style.color=i.messageColor,a.style.fontSize=i.messageFontSize,a.innerHTML=t,n.appendChild(a)}}else z("Where is the new message?")}(t)}},Block:{init:function(e){a=q(!0,F,e),j(ae,"NotiflixBlockInternalCSS")},merge:function(e){return a?void(a=q(!0,a,e)):(z('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){se(!0,P,e,t,n)},hourglass:function(e,t,n){se(!0,A,e,t,n)},circle:function(e,t,n){se(!0,O,e,t,n)},arrows:function(e,t,n){se(!0,L,e,t,n)},dots:function(e,t,n){se(!0,D,e,t,n)},pulse:function(e,t,n){se(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),se(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?q(!0,e.Notiflix,{Notify:ue.Notify,Report:ue.Report,Confirm:ue.Confirm,Loading:ue.Loading,Block:ue.Block}):{Notify:ue.Notify,Report:ue.Report,Confirm:ue.Confirm,Loading:ue.Loading,Block:ue.Block}},"function"==typeof define&&define.amd?define([],(function(){return rv(nv)})):"object"==typeof iv?iv=rv(nv):nv.Notiflix=rv(nv);var av=i("dIxxU"),ov=new yi;ov.addScope("https://www.googleapis.com/auth/contacts.readonly"),ov.setCustomParameters({login_hint:"user@example.com"});var sv,uv,cv=Lt({apiKey:"AIzaSyB5nzvMgM0XL_NZBrLuY523Oaf2cI4vwxQ",authDomain:"drinkify-project.firebaseapp.com",projectId:"drinkify-project",storageBucket:"drinkify-project.appspot.com",messagingSenderId:"235372226042",appId:"1:235372226042:web:7b36d78737638624c27043",measurementId:"G-Q6TRYCCQ3S"}),lv=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt(),t=Et(e=Fe(e),pu);t.isInitialized()?t.getImmediate():oc(e)}(cv),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt(),t=Et(e,"auth");if(t.isInitialized())return t.getImmediate();var n=qr(e,{popupRedirectResolver:wo,persistence:[ga,Ki,Yi]}),r=te("authTokenSyncURL");if(r){var i=Do(r);Ui(n,i,(function(){return i(n.currentUser)})),Wi(n,(function(e){return i(e)}))}var a=$("auth");return a&&Br(n,"http://".concat(a)),n}(cv)),fv=ev(cv),hv=document.querySelector("#reg-submit"),dv=document.querySelector("#login-submit"),pv=document.querySelector(".auth-backdrop"),vv=document.querySelector(".auth-logout"),mv=document.querySelector("#login-modal-btn"),yv=document.querySelector("#login-modal-close"),gv=document.querySelector("#google");function kv(e){return new Promise((function(t,n){Gp(jp(ev(),"users/"+lv.currentUser.uid+"/"+e),(function(e){var n=e.val();t(n)}),(function(e){n(e)}))}))}function bv(){return(bv=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(sv){e.next=5;break}return console.error("cocktailList not found!!!"),e.abrupt("return");case 5:console.log(sv);case 6:return e.next=8,kv("favorites");case 8:n=e.sent,data=n," "==data[0]&&data.shift(),data.map((function(e){var t=e.name,n=e.description,r=e.image;return'<li class="cocktail-item dynamic-box">\n      <img\n        class="card-image img "\n        src="'.concat(r,'"\n        alt="').concat(t,'"\n        loading="lazy"\n      />\n      <div class="text-box dynamic-element">\n        <h2 class="cocktail-name dynamic-element">').concat(t,'</h2>\n        <p class="cocktail-descr dynamic-element">').concat(n,'</p>\n        <div class="btn-box dynamic-element">\n          <button type="button" class="card-btn btn js-btn-learn-more dynamic-element">\n            learn more\n          </button>\n          <button type="button" class="btn-favorite btn js-btn-favorite dynamic-element">\n            <svg class="card-icon">\n              <use></use>;\n            </svg>\n          </button>\n        </div>\n      </div>\n    </li>')})).join();case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}document.addEventListener("load",(function(){sv=document.querySelector(".cocktail-list"),console.log(sv)})),ji(lv,(function(t){null!=t?(e(iv).Notify.success("Welcome, (user)"),pv.classList.add("is-hidden")):(pv.classList.remove("is-hidden"),e(iv).Notify.warning("Please log in your account!"))})),hv.addEventListener("click",(function(t){t.preventDefault();var n=document.querySelector("#reg-email").value,r=document.querySelector("#reg-pass").value,i=document.querySelector("#reg-username").value;Mi(lv,n,r).then((function(t){var r=t.user;Bp(jp(fv,"users/"+r.uid),{username:i,email:n,favorites:[" "]}),e(iv).Notify.success("You created your account,",i)})).catch((function(e){var t=e.code,n=e.message;console.error(t,n)}))})),dv.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector("#login-email").value,n=document.querySelector("#login-pass").value;zi(lv,t,n).then((function(e){var t=e.user,n=new Date;Hp(jp(fv,"users/"+t.uid),{last_login:n}),alert("Logged in!")})).catch((function(e){e.code,e.message;console.error("no valid date!!!")}))})),ji(lv,(function(e){if(e)e.uid})),vv.addEventListener("click",(function(e){var t;(t=lv,Fe(t).signOut()).then((function(){console.log("user logged out")})).catch((function(e){console.error("Error in log out")}))})),mv.addEventListener("click",(function(){pv.classList.remove("is-hidden")})),yv.addEventListener("click",(function(){pv.classList.add("is-hidden")})),gv.addEventListener("click",(function(e){Oa(lv,ov).then((function(e){yi.credentialFromResult(e).accessToken,e.user})).catch((function(e){e.code,e.message,e.customData.email,yi.credentialFromError(e)}))})),sv&&sv.addEventListener("click",(uv=e(a)(e(o).mark((function t(n){var r,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=n.target.classList.contains("js-btn-favorite")||0!=n.target.classList.contains("card-icon")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,kv("favorites");case 5:return r=e.sent,e.next=8,av.default.get("https://drinkify-backend.p.goit.global/API/V1/cocktails/lookup/?id=".concat(n.target.getAttribute("data-id")));case 8:i=e.sent,(a=r).push({name:i.data[0].drink,description:i.data[0].description,image:i.data[0].drinkThumb}),s=ev(),u=lv.currentUser.uid,Bp(jp(s,"users/"+u),{favorites:a}).then((function(){console.log("Updated data")})).catch((function(e){console.error("Problems with updating data! Line: 213")})),console.log(r),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),console.error(e.t0);case 20:case"end":return e.stop()}}),t,null,[[2,17]])}))),function(e){return uv.apply(this,arguments)}));document.querySelector("#favorite-container");console.log(function(){return bv.apply(this,arguments)}());av=i("dIxxU");var _v=i("776pa"),xv=i("dqeHJ"),wv="https://drinkify-backend.p.goit.global/API/V1/cocktails/";function Cv(){return Cv=e(a)(e(o).mark((function t(){var n,r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=_v.default.load("id"),r=n.map((function(e){return av.default.get("".concat(wv,"lookup/?id=").concat(e))})),e.next=5,Promise.all(r);case 5:i=e.sent,a=i.map((function(e){return e.data})),(0,xv.renderMarkUpFavCocktail)(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])}))),Cv.apply(this,arguments)}({heart:document.querySelector(".js-btn-favorite"),favoriteList:document.querySelector(".cocktail-favorite")}).favoriteList.addEventListener("click",(function(e){if(e.target.classList.contains("js-btn-favorite")||e.target.classList.contains("js-icon-favorite")||e.target.classList.contains("card-icon")){var t=e.target.closest(".js-btn-favorite");Iv.includes(t.dataset.id)&&(Iv=_v.default.load("id").filter((function(e){return e!==t.dataset.id})),_v.default.save("id",Iv),e.target.closest(".cocktail-fav-item").remove()),Iv.length?document.querySelector(".error-box").classList.add("visually-hidden"):document.querySelector(".error-box").classList.remove("visually-hidden")}})),(_v.default.load("id")||[]).length?document.querySelector(".error-box").classList.add("visually-hidden"):document.querySelector(".error-box").classList.remove("visually-hidden"),function(){Cv.apply(this,arguments)}();var Iv=_v.default.load("id")||[]}();
//# sourceMappingURL=fav-coctails.e2681837.js.map
