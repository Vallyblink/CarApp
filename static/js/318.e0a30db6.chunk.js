"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{5869:function(n,e,r){r.d(e,{Z:function(){return L}});var t=r(9439),i=r(2791);var o,a,c,s,l,p,d,u,x,h=r.p+"static/media/sprite.632e3325ece2f42081db0f0ed37eb6a1.svg",f=r(168),g=r(5706),m=g.Z.div(o||(o=(0,f.Z)(["\nposition: relative;\ndisplay: flex;\nflex-direction: column;\nwidth: 274px;\nheight: 426px;\nborder-radius:8px;\nfont-family: Manrope;\nmargin-left: 60px;\n"]))),b=g.Z.img(a||(a=(0,f.Z)(["\nobject-fit: cover;\nwidth: 100%;\nheight: 268px !important;\nborder-radius:14px;\n"]))),v=g.Z.button(c||(c=(0,f.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  transition: color 0.3s;\n\n  &:hover {\n    color: blue;\n  }\n\n  &:active {\n    color: blue;\n  }\n"]))),Z=g.Z.h1(s||(s=(0,f.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #121417;\n  display: flex; \n  justify-content: space-between; \n  align-items: center; \n  margin-top:12px;\n  margin-bottom:8px;\n"]))),j=g.Z.span(l||(l=(0,f.Z)(["\n  color: #3470FF;\n"]))),w=g.Z.span(p||(p=(0,f.Z)(["\n  font-weight: 500; \n  color: #121417; \n"]))),k=g.Z.p(d||(d=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex; \n  gap: 12px;\n  align-items: center; \n  margin: 0px;\n"]))),y=g.Z.p(u||(u=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex; \n  gap: 12px;\n  align-items: center; \n  margin-top: 8px;\n"]))),C=g.Z.button(x||(x=(0,f.Z)([" \nmargin-top:24px;\n  background-color: #3470FF; \n  color: #fff; \n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  padding: 10px 20px;\n  text-decoration: none;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #0B44CD;\n; \n  }\n"]))),F=r(9434),_=r(7383),z=r(3329);var R=function(n){var e=n.car,r=e.address.replace(/^[^,]+,\s*/g,"").replace(/,+/g,"");return(0,z.jsxs)(m,{children:[(0,z.jsx)(b,{src:e.img,alt:e.model}),(0,z.jsxs)(Z,{children:[(0,z.jsxs)("div",{children:[e.make,"  ",(0,z.jsxs)(j,{children:[" ",e.model]}),",  ",e.year]}),(0,z.jsx)(w,{children:e.rentalPrice})]}),(0,z.jsxs)(k,{children:[r," ",e.rentalCompany," "]}),(0,z.jsxs)(y,{children:[e.type," ",e.model," ",e.id," ",e.functionalities[0]]})]})},D=r(7948),S=r.n(D),q={content:{width:"541px",height:"752px",top:"150px",left:"496px",borderRadius:"24px"},overlay:{background:"rgba(18, 20, 23, 0.5)",display:"flex",justifyContent:"center",alignItems:"center"}},I=function(n){var e=n.isOpen,r=n.onRequestClose,t=n.carData;return(0,z.jsx)(S(),{isOpen:e,onRequestClose:r,style:q,children:t&&(0,z.jsx)("div",{children:(0,z.jsx)(R,{car:t})})})};var L=function(n){var e=n.car,r=(0,F.I0)(),o=e.address.replace(/^[^,]+,\s*/g,"").replace(/,+/g,""),a=(0,F.v9)((function(n){return n.favoriteCars.likedCars})).some((function(n){return n.id===e.id})),c=(0,i.useState)(!1),s=(0,t.Z)(c,2),l=s[0],p=s[1];return(0,z.jsxs)(m,{children:[(0,z.jsx)(b,{src:e.img,alt:e.model}),(0,z.jsx)(v,{onClick:function(){var n=(0,_.Zs)({carId:e.id,carData:e});r(n)},style:{color:a?"blue":"inherit"},children:(0,z.jsx)("svg",{"aria-label":"filter icon",width:"18",height:"18",children:(0,z.jsx)("use",{href:h+"#normal",fill:a?" #3470FF":"transparent"})})}),(0,z.jsxs)(Z,{children:[(0,z.jsxs)("div",{children:[e.make,"  ",(0,z.jsxs)(j,{children:[" ",e.model]}),",  ",e.year]}),(0,z.jsx)(w,{children:e.rentalPrice})]}),(0,z.jsxs)(k,{children:[o," ",e.rentalCompany," "]}),(0,z.jsxs)(y,{children:[e.type," ",e.model," ",e.id," ",e.functionalities[0]]}),(0,z.jsx)(C,{onClick:function(){p(!0)},children:"Learn More"}),(0,z.jsx)(I,{isOpen:l,onRequestClose:function(){p(!1)},carData:e})]})}},8318:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,i,o,a=r(3433),c=r(5861),s=r(9439),l=r(168),p=r(4687),d=r.n(p),u=r(2791),x=r(1243).Z.create({baseURL:"https://649b68d9bf7c145d023a48c2.mockapi.io/api/advertsCars"}),h=function(){var n=(0,c.Z)(d().mark((function n(e,r){var t,i;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.get("?_page=".concat(e,"&_limit=").concat(r));case 3:return t=n.sent,i=t.data,n.abrupt("return",i);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u0456\u0432:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,r){return n.apply(this,arguments)}}(),f=r(5869),g=r(5706),m=r(3329),b=g.Z.div(t||(t=(0,l.Z)(["\n  margin-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  > div {\n    margin-right: 29px; \n    margin-bottom: 50px; \n\n    @media (max-width: 768px) {\n      margin-right: 0;\n      margin-bottom: 20px; \n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),v=g.Z.div(i||(i=(0,l.Z)(["\n  width: calc(25% - 29px); \n  box-sizing: border-box; \n  \n  @media (max-width: 768px) {\n    width: 100%; \n  }\n"]))),Z=g.Z.button(o||(o=(0,l.Z)(["\n  margin-top: 20px;\n  padding: 10px 20px;\n  background-color: #3470FF;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #2453CC;\n  }\n"])));var j=function(){var n=(0,u.useState)([]),e=(0,s.Z)(n,2),r=e[0],t=e[1],i=(0,u.useState)(1),o=(0,s.Z)(i,2),l=o[0],p=o[1],x=(0,u.useState)(!1),g=(0,s.Z)(x,2),j=g[0],w=g[1],k=function(){var n=(0,c.Z)(d().mark((function n(){var e,i;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.prev=1,e=l+1,n.next=5,h(e);case 5:(i=n.sent).length>0&&(t([].concat((0,a.Z)(r),(0,a.Z)(i))),p(e)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u0456\u0432:",n.t0);case 12:return n.prev=12,w(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return(0,u.useEffect)((function(){function n(){return(n=(0,c.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h(1,8);case 3:e=n.sent,t(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u0456\u0432:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,m.jsxs)("div",{children:[(0,m.jsx)(b,{children:r.map((function(n){return(0,m.jsx)(v,{children:(0,m.jsx)(f.Z,{car:n})},n.id)}))}),j?(0,m.jsx)("p",{children:"Loading..."}):(0,m.jsx)(Z,{onClick:k,children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"})]})}}}]);
//# sourceMappingURL=318.e0a30db6.chunk.js.map