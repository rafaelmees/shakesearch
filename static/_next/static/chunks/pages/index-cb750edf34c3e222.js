(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2804)}])},2804:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var s=t(7568),i=t(655),r=t(5893),o=t(754),c=t(7294),a=t(2971),u=t(5050),h=t(1953),l=t(6336),d=t(9072),x=t(9942),f=t(1516),p=t(9041),g=t(562),j=t(9722),m=t(4412),Z=function(e){var n,t=e.window,o=e.onSubmitSearch,Z=(0,c.useState)(""),v=Z[0],_=Z[1],y=w().width,b=(0,a.Z)({target:t?t():void 0,disableHysteresis:!0,threshold:y&&y<600?0:136}),k=(n=(0,s.Z)(function(e){return(0,i.__generator)(this,function(n){return e.preventDefault(),o(v),[2]})}),function(e){return n.apply(this,arguments)});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.Z,{color:"secondary",position:b?"fixed":"absolute",elevation:b?4:0,sx:{top:{xs:0,sm:b?"-136px":"0"}},children:[(0,r.jsx)(h.Z,{sx:{display:{xs:"none",sm:"flex"},justifyContent:"center",paddingTop:2},children:(0,r.jsx)("img",{src:"/shakesearch_logo.svg",height:120})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(d.ZP,{container:!0,spacing:1,sx:{paddingTop:2,paddingBottom:2},children:[(0,r.jsxs)(d.ZP,{item:!0,xs:"auto",sm:2,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,r.jsx)(h.Z,{sx:{display:{xs:"block",sm:"none"}},children:(0,r.jsx)("img",{src:"/shakesearch_icon.svg",height:40})}),(0,r.jsx)(h.Z,{sx:{display:{xs:"none",sm:"block"}},children:(0,r.jsx)(x.Z,{in:b,children:(0,r.jsx)("img",{src:"/shakesearch_logo.svg",height:40})})})]}),(0,r.jsx)(d.ZP,{item:!0,xs:!0,sm:8,children:(0,r.jsx)("form",{onSubmit:k,children:(0,r.jsx)(f.Z,{fullWidth:!0,autoFocus:!0,id:"outlined-basic",variant:"outlined",placeholder:"Search in the complete works of William Shakespeare",value:v,onChange:function(e){return _(e.target.value)},InputProps:{endAdornment:(0,r.jsx)(p.Z,{position:"end",children:(0,r.jsx)(g.Z,{onClick:k,edge:"end",children:(0,r.jsx)(j.Z,{children:"search"})})})}})})}),(0,r.jsx)(d.ZP,{item:!0,xs:!1,sm:2})]})})]}),(0,r.jsx)(h.Z,{sx:{height:{xs:"88px",sm:"224px"}}}),(0,r.jsx)(m.Z,{})]})},w=function(){var e=function(){var e;return{width:window.innerWidth,height:window.innerHeight}},n=(0,c.useState)(e()),t=n[0],s=n[1],i=function(){s(e())};return(0,c.useEffect)(function(){return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}},[!0]),t},v=t(160),_=function(e){var n=e.window,t=(0,a.Z)({target:n?n():void 0,disableHysteresis:!0,threshold:136});return(0,r.jsx)(x.Z,{in:t,children:(0,r.jsx)(v.Z,{color:"primary",size:"small",sx:{position:"fixed",bottom:"24px",right:"24px"},onClick:function(e){var n=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");n&&n.scrollIntoView({block:"center"})},children:(0,r.jsx)(j.Z,{children:"keyboard_arrow_up"})})})},y=t(3265),b=t(7763),k=t.n(b),S=function(e){var n=e.results,t=e.searchText;return(0,r.jsxs)(d.ZP,{container:!0,spacing:{xs:0,sm:2},children:[0==n.length&&t&&(0,r.jsx)(d.ZP,{item:!0,xs:12,children:(0,r.jsx)(h.Z,{sx:{display:"flex",justifyContent:"center",paddingTop:"48px",fontStyle:"italic"},children:"No results found!"})}),n.length>0&&n.map(function(e,s){return(0,r.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,r.jsx)(l.Z,{maxWidth:"sm",sx:{paddingX:{xs:0,sm:2}},children:(0,r.jsx)(y.ZP,{className:"quote",sx:{fontStyle:"italic",whiteSpace:"pre-wrap",padding:6},children:(0,r.jsx)(k(),{highlightClassName:"highlightedText",searchWords:[t],autoEscape:!0,textToHighlight:e})})}),s+1<n.length&&(0,r.jsx)(m.Z,{})]},s)})]})},P=function(){var e,n=(0,c.useState)([]),t=n[0],a=n[1],u=(0,c.useState)(""),h=u[0],l=u[1],d=(0,c.useState)(!1),x=d[0],f=d[1];(0,c.useEffect)(function(){p()},[h]);var p=(e=(0,s.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:var n;if(a([]),!h)return[2];return f(!0),[4,fetch("http://localhost:3001/search?q=".concat(h)).then((n=(0,s.Z)(function(e){var n;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,e.json()];case 1:return a(n.sent()),[2]}})}),function(e){return n.apply(this,arguments)}))];case 1:return e.sent(),f(!1),[2]}})}),function(){return e.apply(this,arguments)});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"back-to-top-anchor"}),(0,r.jsx)(Z,{onSubmitSearch:function(e){return l(e)}}),x?(0,r.jsx)(o.Z,{}):(0,r.jsx)(S,{results:t,searchText:h}),(0,r.jsx)(_,{})]})}}},function(e){e.O(0,[214,936,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);