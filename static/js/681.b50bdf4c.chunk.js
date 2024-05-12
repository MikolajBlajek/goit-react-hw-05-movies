"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{722:function(n,r,e){e.d(r,{Hx:function(){return h},Mc:function(){return p},wr:function(){return a},xc:function(){return l},z1:function(){return s}});var t=e(861),o=e(757),c=e.n(o),u=e(340);function a(){return i.apply(this,arguments)}function i(){return(i=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/trending/movie/day");case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching trending movies:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWJiYjNkYmY5YTc4YmYzMzg4NzQ2NWRjMzNkYmZhMyIsInN1YiI6IjY1ZTg4NWM2MmIxYjQ0MDE4NzZhMWI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhBueR8wNg5cCNXzyHxhDQn0OaW1VXF-Xqm42zVWZhg";var s=function(){var n=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/search/movie",{params:{query:r}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error during API call:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}();function p(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(r));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie by id:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(r,"/credits"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie credits:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(r,"/reviews"));case 3:return e=n.sent,console.log(e),n.abrupt("return",e.data.results);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie reviews:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},681:function(n,r,e){e.r(r),e.d(r,{default:function(){return l}});var t=e(861),o=e(439),c=e(757),u=e.n(c),a=e(791),i=e(689),s=e(722),p=e(4),f=e(184);function l(){var n=(0,i.UO)().movieId,r=(0,a.useState)([]),e=(0,o.Z)(r,2),c=e[0],l=e[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,t.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Hx)(n);case 3:(e=r.sent)&&Array.isArray(e.results)?l(e.results):l([]),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),l([]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]),(0,f.jsx)(p._z,{children:c.length>0?(0,f.jsx)(p.Nr,{children:c.map((function(n){return(0,f.jsxs)(p.SM,{children:[(0,f.jsx)("strong",{children:n.author}),": ",n.content]},n.id)}))}):(0,f.jsx)("p",{children:"No reviews yet."})})}},4:function(n,r,e){e.d(r,{Fg:function(){return v},Mj:function(){return Z},Nr:function(){return x},QZ:function(){return w},SM:function(){return g},UI:function(){return m},_z:function(){return h}});var t,o,c,u,a,i,s,p,f=e(168),l=e(867),d=e(87),h=l.ZP.div(t||(t=(0,f.Z)(["\n  color: #333; \n  background-color: #f5f5f5; \n  padding: 20px;\n  text-align: center;\n"]))),v=(0,l.ZP)(d.rU)(o||(o=(0,f.Z)(["\n  color: #333;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),x=l.ZP.ul(c||(c=(0,f.Z)(["\n  list-style-type: none;\n  padding: 24px;\n  font-size: 24px;\n"]))),g=l.ZP.li(u||(u=(0,f.Z)(["\n  padding: 10px;\n  margin: auto;\n  font-size: 24px;\n  font-weight: 300;\n  color: #333; /* Ciemny szary */\n"]))),m=(l.ZP.button(a||(a=(0,f.Z)(["\n  background: none;\n  border: none;\n  color: #333;\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),l.ZP.form(i||(i=(0,f.Z)(["\n  margin: 20px 0;\n"])))),Z=l.ZP.input(s||(s=(0,f.Z)(["\n  padding: 5px;\n  margin-right: 10px;\n  border-radius: 5px;\n  border: 1px solid #333; \n  background-color: #f5f5f5;\n"]))),w=l.ZP.button(p||(p=(0,f.Z)(["\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  color: #333;\n  background-color: #f5f5f5;\n  cursor: pointer;\n  &:hover {\n    background-color: #ddd; \n  }\n"])))}}]);
//# sourceMappingURL=681.b50bdf4c.chunk.js.map