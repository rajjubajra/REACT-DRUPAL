(this["webpackJsonptw2-03-music"]=this["webpackJsonptw2-03-music"]||[]).push([[12],{88:function(e,t,c){"use strict";c.r(t);var s=c(71),r=c(0),i=c(16),a=c(19),n=c(75),d=c(3);var l=function(e){var t=e.date,c=e.title,s=e.venue,r=e.view,i=e.index;return Object(d.jsxs)("div",{className:"grid grid-cols-12 grid-flow-row gap-2 py-5 border-t border-gray-300",children:[Object(d.jsx)("div",{className:"col-span-12",children:t}),Object(d.jsxs)("div",{className:"col-span-12",children:[Object(d.jsx)("h2",{className:"text-2xl",children:c}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})})]}),Object(d.jsx)("div",{className:"col-span-6 border border-gray-200",children:Object(d.jsxs)("div",{className:"cursor-pointer p-2 text-sm flex",onClick:function(){return r(i)},children:[Object(d.jsx)("div",{children:"View Detail"}),Object(d.jsx)("div",{className:"pt-1 px-2",children:Object(d.jsx)(n.b,{})})]})}),Object(d.jsx)("div",{className:"col-span-6 border border-gray-200 p-2",children:"Ticket"})]})};var j=function(e){var t=e.event_title,c=e.date,s=e.venue,r=e.body;return Object(d.jsxs)("div",{className:"absolute top-0 md:relative z-10 bg-white\n      p-10 md:block",children:[Object(d.jsx)("div",{className:"w-full flex justify-end",children:Object(d.jsx)("div",{className:"cursor-pointer md:hidden",children:Object(d.jsx)(n.a,{})})}),Object(d.jsx)("h2",{className:"text-3xl",children:t}),Object(d.jsxs)("div",{className:"grid grid-col-12 grid-flow-row gap-5",children:[Object(d.jsx)("div",{className:"col-span-6",children:Object(d.jsx)("div",{className:"h-40 flex justify-center items-center border border-gray-300",children:c})}),Object(d.jsx)("div",{className:"col-span-6",children:Object(d.jsx)("div",{className:"h-40 flex justify-center items-center border border-gray-300",children:"Ticket"})}),Object(d.jsxs)("div",{className:"col-span-12",children:[Object(d.jsx)("h3",{children:"Location"}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})})]}),Object(d.jsx)("div",{className:"col-span-12",children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})})})]})]})};t.default=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.reducerTour.tour_data.data})),c=Object(i.c)((function(e){return e.reducerTour.tour_fetched}));console.log(t),Object(r.useEffect)((function(){e(Object(a.i)())}),[e]),console.log(t,"fetched",c);var n=Object(r.useState)(0),o=Object(s.a)(n,2),b=o[0],u=o[1],v=Object(r.useState)(""),x=Object(s.a)(v,2),O=x[0],h=x[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),p=m[0],g=m[1],N=Object(r.useState)(""),_=Object(s.a)(N,2),w=_[0],y=_[1],S=Object(r.useState)(""),T=Object(s.a)(S,2),k=T[0],M=T[1];Object(r.useEffect)((function(){h(c&&t[b].attributes.field_event_date),g(c&&t[b].attributes.title),y(c&&t[b].attributes.field_event_location.processed),M(c&&t[b].attributes.field_event_details.processed)}),[c,t,b]);var J=function(e){return u(e)},D=function(e){var t=new Date(e);return t.getDate()+" "+["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+", "+t.getFullYear()};return Object(d.jsxs)("div",{className:"w-full max-w-screen-xl m-auto p-10 relative grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2 font-extralight",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"text-3xl",children:"Tour"}),c&&t.map((function(e,t){var c=e.attributes,s=c.field_event_date,r=c.title,i=c.field_event_location.processed;return Object(d.jsx)(l,{id:e.id,date:D(s),title:r,venue:i,index:t,view:J})}))]}),Object(d.jsx)("div",{children:c&&Object(d.jsx)(j,{event_title:p,date:D(O),venue:w,body:k})})]})}}}]);
//# sourceMappingURL=12.cd7e9e21.chunk.js.map