"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[973],{5869:function(n,e,r){r.d(e,{Z:function(){return M}});var i=r(9439),t=r(2791);var o,a,s,l,c,d,p,x,h,u=r.p+"static/media/sprite.632e3325ece2f42081db0f0ed37eb6a1.svg",f=r(168),g=r(5706),m=g.Z.div(o||(o=(0,f.Z)(["\nposition: relative;\ndisplay: flex;\nflex-direction: column;\nwidth: 274px;\nheight: 426px;\nborder-radius:8px;\nfont-family: Manrope;\nmargin-left: 60px;\n"]))),b=g.Z.img(a||(a=(0,f.Z)(["\nobject-fit: cover;\nwidth: 100%;\nheight: 268px !important;\nborder-radius:14px;\n"]))),j=g.Z.button(s||(s=(0,f.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  transition: color 0.3s;\n\n  &:hover {\n    color: blue;\n  }\n\n  &:active {\n    color: blue;\n  }\n"]))),v=g.Z.h1(l||(l=(0,f.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #121417;\n  display: flex; \n  justify-content: space-between; \n  align-items: center; \n  margin-top:12px;\n  margin-bottom:8px;\n"]))),Z=g.Z.span(c||(c=(0,f.Z)(["\n  color: #3470FF;\n"]))),w=g.Z.span(d||(d=(0,f.Z)(["\n  font-weight: 500; \n  color: #121417; \n"]))),y=g.Z.p(p||(p=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex; \n  gap: 12px;\n  align-items: center; \n  margin: 0px;\n"]))),k=g.Z.p(x||(x=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex; \n  gap: 12px;\n  align-items: center; \n  margin-top: 8px;\n"]))),C=g.Z.button(h||(h=(0,f.Z)([" \nmargin-top:24px;\n  background-color: #3470FF; \n  color: #fff; \n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  padding: 10px 20px;\n  text-decoration: none;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: #0B44CD;\n; \n  }\n"]))),F=r(9434),z=r(7383),D=r(3329);var R=function(n){var e=n.car,r=e.address.replace(/^[^,]+,\s*/g,"").replace(/,+/g,"");return(0,D.jsxs)(m,{children:[(0,D.jsx)(b,{src:e.img,alt:e.model}),(0,D.jsxs)(v,{children:[(0,D.jsxs)("div",{children:[e.make,"  ",(0,D.jsxs)(Z,{children:[" ",e.model]}),",  ",e.year]}),(0,D.jsx)(w,{children:e.rentalPrice})]}),(0,D.jsxs)(y,{children:[r," ",e.rentalCompany," "]}),(0,D.jsxs)(k,{children:[e.type," ",e.model," ",e.id," ",e.functionalities[0]]})]})},_=r(7948),q=r.n(_),I={content:{width:"541px",height:"752px",top:"150px",left:"496px",borderRadius:"24px"},overlay:{background:"rgba(18, 20, 23, 0.5)",display:"flex",justifyContent:"center",alignItems:"center"}},O=function(n){var e=n.isOpen,r=n.onRequestClose,i=n.carData;return(0,D.jsx)(q(),{isOpen:e,onRequestClose:r,style:I,children:i&&(0,D.jsx)("div",{children:(0,D.jsx)(R,{car:i})})})};var M=function(n){var e=n.car,r=(0,F.I0)(),o=e.address.replace(/^[^,]+,\s*/g,"").replace(/,+/g,""),a=(0,F.v9)((function(n){return n.favoriteCars.likedCars})).some((function(n){return n.id===e.id})),s=(0,t.useState)(!1),l=(0,i.Z)(s,2),c=l[0],d=l[1];return(0,D.jsxs)(m,{children:[(0,D.jsx)(b,{src:e.img,alt:e.model}),(0,D.jsx)(j,{onClick:function(){var n=(0,z.Zs)({carId:e.id,carData:e});r(n)},style:{color:a?"blue":"inherit"},children:(0,D.jsx)("svg",{"aria-label":"filter icon",width:"18",height:"18",children:(0,D.jsx)("use",{href:u+"#normal",fill:a?" #3470FF":"transparent"})})}),(0,D.jsxs)(v,{children:[(0,D.jsxs)("div",{children:[e.make,"  ",(0,D.jsxs)(Z,{children:[" ",e.model]}),",  ",e.year]}),(0,D.jsx)(w,{children:e.rentalPrice})]}),(0,D.jsxs)(y,{children:[o," ",e.rentalCompany," "]}),(0,D.jsxs)(k,{children:[e.type," ",e.model," ",e.id," ",e.functionalities[0]]}),(0,D.jsx)(C,{onClick:function(){d(!0)},children:"Learn More"}),(0,D.jsx)(O,{isOpen:c,onRequestClose:function(){d(!1)},carData:e})]})}},3973:function(n,e,r){r.r(e);var i,t,o=r(168),a=(r(2791),r(9434)),s=r(5869),l=r(5706),c=r(3329),d=l.Z.div(i||(i=(0,o.Z)(["\nmargin-top:50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n\n  > div {\n    margin-right: 29px; \n    margin-bottom: 50px; \n\n    @media (max-width: 768px) {\n      margin-right: 0;\n      margin-bottom: 20px; \n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),p=l.Z.div(t||(t=(0,o.Z)(["\n  width: calc(25% - 29px); \n  box-sizing: border-box; \n  \n  @media (max-width: 768px) {\n    width: 100%; \n  }\n"])));e.default=function(){var n=(0,a.v9)((function(n){return n.favoriteCars.likedCars}));return(0,c.jsx)(d,{children:n.map((function(n){return(0,c.jsx)(p,{children:(0,c.jsx)(s.Z,{car:n})},n.id)}))})}}}]);
//# sourceMappingURL=973.755be948.chunk.js.map