"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{47:function(n,r,t){t.d(r,{e:function(){return h}});var e,a,u,i=t(689),o=t(168),c=t(87),s=t(924),f=s.ZP.ul(e||(e=(0,o.Z)(["\n  min-width: 300px;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),p=s.ZP.li(a||(a=(0,o.Z)(["\n  border: 1px solid #f2f2f2;\n  border-radius: 8px;\n  transition: transform 0.2s;\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n    color: #008080;\n    border-color: #008080;\n    transform: translateX(15px);\n  }\n"]))),d=(0,s.ZP)(c.rU)(u||(u=(0,o.Z)(["\n  display: block;\n  padding: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  transition: color 0.2s;\n\n  &:hover {\n    cursor: pointer;\n    color: #008080;\n  }\n"]))),l=t(184),h=function(n){var r=n.movies,t=(0,i.TH)();return(0,l.jsx)(f,{children:r.map((function(n){var r=n.id,e=n.title;return(0,l.jsx)(p,{children:(0,l.jsx)(d,{to:"/movies/".concat(r),state:{from:t},children:e})},r)}))})}},415:function(n,r,t){t.r(r);var e=t(439),a=t(791),u=t(963),i=t(47),o=t(451),c=t(258),s=t(184);r.default=function(){var n=(0,a.useState)([]),r=(0,e.Z)(n,2),t=r[0],f=r[1],p=(0,a.useState)(""),d=(0,e.Z)(p,2),l=d[0],h=d[1],m=(0,a.useState)(!1),v=(0,e.Z)(m,2),x=v[0],Z=v[1];return(0,a.useEffect)((function(){Z(!0),(0,u.XT)().then(f).catch((function(n){return h(n.message)})).finally(Z(!1))}),[]),(0,s.jsx)(o.$0,{children:(0,s.jsxs)(o.W2,{children:[(0,s.jsx)(o.mr,{children:"Today trending movies:"}),t&&(0,s.jsx)(i.e,{movies:t}),x&&(0,s.jsx)(c.a,{}),l&&(0,s.jsx)("h2",{children:l})]})})}},963:function(n,r,t){t.d(r,{Ai:function(){return s},Bt:function(){return p},Ny:function(){return c},XT:function(){return o},y:function(){return f}});var e=t(861),a=t(757),u=t.n(a),i=t(294);i.Z.defaults.baseURL="https://api.themoviedb.org",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWUwNjQ5MmUwYTZhYmYwOTRmMTMyNTRlOTBkMzUxNCIsInN1YiI6IjY1ZTQ0OGFkYzk5ODI2MDE3YjYzNWQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgnj5wglUrZkxfComjLe7ezDV__x8ttfIV2b4V8LRuc";var o=function(){var n=(0,e.Z)(u().mark((function n(){var r,t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/trending/movie/day");case 2:return r=n.sent,t=r.data,e=t.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/search/movie",{params:{query:r,include_adult:!1,language:"en-US",page:1}});case 2:return t=n.sent,e=t.data,a=e.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(r,"/credits"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(r,"/reviews"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.29190376.chunk.js.map