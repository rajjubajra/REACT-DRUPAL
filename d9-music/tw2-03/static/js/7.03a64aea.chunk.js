(this["webpackJsonptw2-03-music"]=this["webpackJsonptw2-03-music"]||[]).push([[7],{71:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(u){a=!0,c=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return a}))},72:function(t,e,r){"use strict";var n=r(71),a=r(0),c=r(12),o=r(3);e.a=function(t){var e=t.src,r=t.alt,i=t.cssClass,u=Object(a.useState)(!1),s=Object(n.a)(u,2),l=s[0],b=s[1];return Object(a.useEffect)((function(){var t=new Image;t.onload=function(){b(!0)},t.src=e}),[e]),l?Object(o.jsx)("img",{width:"100%",height:"100%",className:i,src:e,alt:r}):Object(o.jsx)(c.a,{})}},83:function(t,e,r){"use strict";r.r(e);var n=r(71),a=r(0),c=r(16),o=r(72),i=r(19),u=r(3);e.default=function(){var t=Object(c.b)();Object(a.useEffect)((function(){t(Object(i.a)())}),[t]);var e=Object(c.c)((function(t){return t.reducerAbout.about_data.data})),r=Object(c.c)((function(t){return t.reducerAbout.about_dataLength})),s=Object(c.c)((function(t){return t.reducerAbout.about_data.included}));console.log("about data",e,"about lng",s);var l=Object(a.useState)([]),b=Object(n.a)(l,2),d=b[0],f=b[1];return Object(a.useEffect)((function(){var t=[];r>0&&e.map((function(e){var r=e.attributes,n=r.title,a=r.field_about_page;s.map((function(e){if("file--file"===e.type){var r=e.attributes.uri;t.push({title:n,body:a.processed,image:r.url})}return f(t)}))}))}),[s,r,e]),console.log("Array about data",d),Object(u.jsx)("div",{children:r>0&&d.map((function(t){return Object(u.jsxs)("div",{className:"grid grid-cols-12 gap-4 max-w-screen-xl m-auto p-10 font-extralight tracking-wide",children:[Object(u.jsx)("div",{className:"p-10 col-span-12",children:Object(u.jsx)("h1",{className:"text-4xl",children:t.title})}),Object(u.jsx)("div",{className:"col-span-12 md:col-span-2 mt-12",children:Object(u.jsx)(o.a,{cssClass:"w-full md:h-96 h-40 object-cover",src:t.image,alt:"about"})}),Object(u.jsx)("div",{className:"col-span-12 md:col-span-10 p-2 md:p-10",children:Object(u.jsx)("div",{className:"tracking-wider",dangerouslySetInnerHTML:{__html:t.body}})})]})}))})}}}]);
//# sourceMappingURL=7.03a64aea.chunk.js.map