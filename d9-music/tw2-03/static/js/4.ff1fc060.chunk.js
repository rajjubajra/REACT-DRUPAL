(this["webpackJsonptw2-03-music"]=this["webpackJsonptw2-03-music"]||[]).push([[4],{71:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,l=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(i){l=!0,a=i}finally{try{n||null==c.return||c.return()}finally{if(l)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return l}))},74:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(0),l=r.n(n),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=l.a.createContext&&l.a.createContext(a),c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var l in e=arguments[r])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}).apply(this,arguments)},i=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(t);l<n.length;l++)e.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(r[n[l]]=t[n[l]])}return r};function u(t){return t&&t.map((function(t,e){return l.a.createElement(t.tag,c({key:e},t.attr),u(t.child))}))}function s(t){return function(e){return l.a.createElement(f,c({attr:c({},t.attr)},e),u(t.child))}}function f(t){var e=function(e){var r,n=t.attr,a=t.size,o=t.title,u=i(t,["attr","size","title"]),s=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),l.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,u,{className:r,style:c(c({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&l.a.createElement("title",null,o),t.children)};return void 0!==o?l.a.createElement(o.Consumer,null,(function(t){return e(t)})):e(a)}},77:function(t,e,r){"use strict";var n=r(0),l=r.n(n),a=r(20),o=r.n(a),c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var l in e=arguments[r])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}).apply(this,arguments)};e.a=function(t){for(var e=t.url,r=t.allowFullScreen,n=t.position,a=t.display,i=t.height,u=t.width,s=t.overflow,f=t.styles,d=t.onLoad,y=t.onMouseOver,v=t.onMouseOut,h=t.scrolling,m=t.id,p=t.frameBorder,g=t.ariaHidden,b=t.sandbox,w=t.allow,O=t.className,z=t.title,j=t.ariaLabel,x=t.ariaLabelledby,C=t.name,M=t.target,S=t.loading,k=t.importance,E=t.referrerpolicy,N=t.allowpaymentrequest,L=t.src,A=o()({src:L||e,target:M||null,style:{position:n||null,display:a||"block",overflow:s||null},scrolling:h||null,allowpaymentrequest:N||null,importance:k||null,sandbox:b||null,loading:S||null,styles:f||null,name:C||null,className:O||null,referrerpolicy:E||null,title:z||null,allow:w||null,id:m||null,"aria-labelledby":x||null,"aria-hidden":g||null,"aria-label":j||null,width:u||null,height:i||null,onLoad:d||null,onMouseOver:y||null,onMouseOut:v||null}),B=Object.create(null),P=0,I=Object.keys(A);P<I.length;P++){var H=I[P];null!=A[H]&&(B[H]=A[H])}for(var q=0,J=Object.keys(B.style);q<J.length;q++){var F=J[q];null==B.style[F]&&delete B.style[F]}if(r)if("allow"in B){var T=B.allow.replace("fullscreen","");B.allow=("fullscreen "+T.trim()).trim()}else B.allow="fullscreen";return p>=0&&(B.style.hasOwnProperty("border")||(B.style.border=p)),l.a.createElement("iframe",c({},B))}},78:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(74);function l(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21.996 18.23c0 .727-.405 2.127-1.314 2.896-.182.14-.365.061-.285-.143.265-.648.872-2.147.587-2.492-.2-.262-1.03-.243-1.738-.182-.324.041-.607.06-.828.105-.203.017-.245-.163-.041-.303.262-.185.545-.325.87-.428 1.15-.344 2.48-.137 2.67.083.036.042.08.16.08.463zm-1.921 1.294a7.426 7.426 0 0 1-.83.55c-2.122 1.275-4.87 1.943-7.258 1.943-3.843 0-7.28-1.417-9.888-3.788-.223-.182-.038-.446.223-.303 2.81 1.64 6.288 2.632 9.889 2.632 2.265 0 4.708-.424 7.035-1.336.162-.061.344-.144.503-.202.367-.165.69.243.326.504zm-6.17-11.03c0-1.041.041-1.654-.304-2.18-.306-.433-.833-.693-1.568-.652-.798.044-1.655.567-1.874 1.526-.042.22-.171.436-.436.483l-2.436-.31c-.174-.04-.438-.173-.352-.521C7.458 4.088 9.81 3.129 12.033 3h.523c1.22 0 2.787.349 3.79 1.264 1.217 1.136 1.088 2.662 1.088 4.32v3.927c0 1.178.477 1.7.958 2.314.13.219.174.477-.045.655-.48.435-1.394 1.219-1.917 1.654-.174.133-.488.147-.61.045-.77-.645-.958-1.003-1.435-1.658-.83.871-1.526 1.352-2.355 1.613a7.035 7.035 0 0 1-1.784.216c-2.09 0-3.746-1.303-3.746-3.88 0-2.049 1.09-3.442 2.7-4.101 1.61-.66 3.95-.87 4.704-.874zm-.478 5.192c.52-.872.477-1.586.477-3.185-.651 0-1.306.045-1.871.178-1.045.303-1.874.961-1.874 2.355 0 1.09.567 1.832 1.525 1.832.132 0 .248-.016.349-.045.67-.186 1.088-.522 1.394-1.135z"}}]}]})(t)}},79:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return o}));var n=r(74);function l(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"}}]})(t)}function a(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"}}]})(t)}function o(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(t)}},80:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(74);function l(t){return Object(n.a)({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536-.142-.773.227-1.624 1.038-2.022.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516.014-.063.02-.13.02-.193 0-1.815 0-3.63-.002-5.443 0-.062-.01-.125-.026-.185-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.326.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.443-.088.664-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"}}]})(t)}}}]);
//# sourceMappingURL=4.ff1fc060.chunk.js.map