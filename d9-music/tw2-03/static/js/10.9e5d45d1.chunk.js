(this["webpackJsonptw2-03-music"]=this["webpackJsonptw2-03-music"]||[]).push([[10],{72:function(e,t,a){"use strict";var i=a(71),c=a(0),r=a(12),s=a(3);t.a=function(e){var t=e.src,a=e.alt,n=e.cssClass,d=Object(c.useState)(!1),l=Object(i.a)(d,2),j=l[0],u=l[1];return Object(c.useEffect)((function(){var e=new Image;e.onload=function(){u(!0)},e.src=t}),[t]),j?Object(s.jsx)("img",{width:"100%",height:"100%",className:n,src:t,alt:a}):Object(s.jsx)(r.a,{})}},73:function(e,t,a){"use strict";var i=a(24),c=a(3);t.a=function(e){var t=e.link;return Object(c.jsx)("div",{children:Object(c.jsx)(i.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}},90:function(e,t,a){"use strict";a.r(t);var i=a(71),c=a(0),r=a(16),s=a(19),n=a(73),d=a(72),l=a(3);var j=function(e){var t=e.image,a=e.article_id,i=e.date,c=e.title,r=e.body,s=e.readmore,j=e.index;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"grid md:grid-cols-12 my-10 font-extralight",children:[Object(l.jsx)("div",{className:"col-span-3",children:Object(l.jsx)("div",{className:"py-5 md:pr-5 m-5 md:border-r border-gray-400",children:Object(l.jsx)(d.a,{src:t,alt:"news"})})}),Object(l.jsxs)("div",{className:"col-span-9",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("p",{className:"text-xs",children:[a.substring(0,5),"..."]})}),Object(l.jsx)("div",{children:i}),Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"text-2xl my-2",children:c})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:r.substring(0,200)}})}),Object(l.jsx)("div",{className:"my-5",children:Object(l.jsx)("div",{onClick:function(){return s(j,!0)},children:Object(l.jsx)(n.a,{link:"#"})})})]})]})})},u=a(75);var b=function(e){var t=e.date,a=e.title,i=e.image,c=e.body,r=e.readmore;return Object(l.jsxs)("div",{className:"w-full max-w-screen-xl m-auto font-extralight",children:[Object(l.jsx)("div",{className:"w-full flex justify-end  cursor-pointer",title:"close",onClick:function(){return r(0,!1)},children:Object(l.jsx)(u.a,{})}),Object(l.jsx)("div",{className:"my-8 flex justify-end",children:t}),Object(l.jsx)("div",{children:Object(l.jsx)("h2",{className:"text-4xl my-5 tracking-wider",children:a})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(d.a,{cssClass:"md:w-1/2 object-cover pr-6 pb-5 pt-5 md:float-left md:border-r border-gray-300 mr-6",src:i,alt:"news"}),Object(l.jsx)("div",{className:"pl-10 ml-10 border-l-2 border-gray-300",dangerouslySetInnerHTML:{__html:c}})]})]})};t.default=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.reducerNews.news_data})),a=Object(r.c)((function(e){return e.reducerNews.news_fetched})),n=Object(c.useState)([]),d=Object(i.a)(n,2),u=d[0],o=d[1],m=Object(c.useState)(!1),h=Object(i.a)(m,2),O=h[0],x=h[1],f=Object(c.useState)(0),g=Object(i.a)(f,2),v=g[0],p=g[1],w=Object(c.useState)(""),y=Object(i.a)(w,2),_=y[0],N=y[1],S=Object(c.useState)(""),k=Object(i.a)(S,2),M=k[0],E=k[1],J=Object(c.useState)(""),A=Object(i.a)(J,2),C=A[0],I=A[1],D=Object(c.useState)(""),R=Object(i.a)(D,2),T=R[0],F=R[1];Object(c.useEffect)((function(){var e=t.data,i=t.included,c=[];function r(e){var t=[];return i.map((function(a){var c;e===a.id&&t.push({id:a.id,mediaId:a.relationships.field_media_image.data.id,alt:a.relationships.field_media_image.data.meta.alt,height:a.relationships.field_media_image.data.meta.height,width:a.relationships.field_media_image.data.meta.width,imageTitle:a.relationships.field_media_image.data.meta.title,url:(c=a.relationships.field_media_image.data.id,i.filter((function(e){return e.id===c})).map((function(e){return e.attributes.uri.url})))})})),t}a&&e.map((function(e){var t=e.id,a=e.attributes,i=a.title,s=a.field_news_body.processed,n=a.field_news_date,d=e.relationships.field_news_media.data.id;return c.push({id:t,date:n,title:i,body:s,image:r(d)})})),console.log("ARRAY ONE",c),o(c)}),[a,t]),Object(c.useEffect)((function(){e(Object(s.h)())}),[e]),Object(c.useEffect)((function(){N(u.length>0&&u[v].title),I(u.length>0&&u[v].image[0].url),E(u.length>0&&u[v].date),F(u.length>0&&u[v].body)}),[u,v]);var H=function(e){var t=new Date(e);return t.getDate()+" "+["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+", "+t.getFullYear()},L=function(e,t){x(t),p(e)};return Object(l.jsx)("div",{className:"max-w-screen-xl m-auto p-10",children:Object(l.jsxs)("div",{className:"w-full max-w-screen-xl m-auto px-10",children:[Object(l.jsx)("h2",{className:"text-3xl",children:"News"}),u.length>0&&!O&&u.map((function(e,t){return Object(l.jsx)(j,{title:e.title,date:H(e.date),image:e.image[0].url,body:e.body,article_id:e.id,index:t,readmore:L})})),O&&Object(l.jsx)(b,{date:H(M),title:_,image:C,body:T,readmore:L})]})})}}}]);
//# sourceMappingURL=10.9e5d45d1.chunk.js.map