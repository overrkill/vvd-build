(this["webpackJsonpvirt-app"]=this["webpackJsonpvirt-app"]||[]).push([[0],{130:function(e,t,a){},171:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),o=a.n(c),i=a(12),r=a.n(i),s=(a(171),a(29)),d=a(14),l=a(10),b=a(118),j=a(298),u=a(280),h=a(300),m=a(119),g=a(87),x=a.n(g),p=a(279),O=a(276),f=a(277),v=a(278),y=Object(b.a)((function(e){return{root:{flexGrow:1,background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},butt:{color:"white",textDecoration:"None"}}}));function N(){var e=y();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(O.a,{position:"static",style:{background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)"},children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(m.a,{variant:"h6",className:e.title,children:"Virtuoso          "}),Object(n.jsx)(s.b,{to:"/home",className:e.butt,children:Object(n.jsx)(v.a,{className:e.butt,children:"Home"})}),Object(n.jsx)(s.b,{to:"/",className:e.butt,children:Object(n.jsx)(v.a,{className:e.butt,children:"Lock"})})]})})})}var S=a(15),k=a.n(S),w=Object(b.a)((function(e){return{root:{width:"100%",paddingTop:"2em"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},card:{background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)",minWidth:320,position:"relative",boxShadow:"0 8px 24px 0 rgba(0,0,0,0.12)",overflow:"visible",borderRadius:"1.5rem",transition:"0.4s","&:hover":{transform:"translateY(-2px)",boxShadow:"0 6px 12px 0 red\n        .rotate(-12)\n        .darken(0.2)\n        .fade(0.5)}","& $shadow":{bottom:"-1.5rem"},"& $shadow2":{bottom:"-2.5rem"}},"&:before":{content:'""',position:"absolute",zIndex:0,display:"block",width:"100%",bottom:-1,height:"100%",borderRadius:"1.5rem"}}}}));function C(){var e=this,t=w(),a=o.a.useState(!1),i=Object(l.a)(a,2),r=i[0],s=i[1],d=Object(c.useState)([]),b=Object(l.a)(d,2),g=b[0],O=b[1];Object(c.useEffect)((function(){console.log(e),k.a.get("http://localhost:5000/get_all_logs").then((function(e){console.log(e),O(e.data.logs),console.log(g)})).catch((function(e){console.error(e)}))}),[]);return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsx)("div",{className:t.root,children:Object(n.jsxs)(p.a,{maxWidth:"md",className:t.card,children:[Object(n.jsx)(m.a,{children:"Logs"}),g.map((function(e,a){return Object(n.jsxs)(j.a,{expanded:r===a,onChange:(c=a,function(e,t){s(!!t&&c)}),style:{borderRadius:"0.5rem",transition:"0.4s",transform:"translateY(-2px)"},children:[Object(n.jsxs)(h.a,{expandIcon:Object(n.jsx)(x.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(n.jsx)(m.a,{className:t.heading,children:e.time}),Object(n.jsx)(m.a,{className:t.secondaryHeading,children:e.type})]}),Object(n.jsx)(u.a,{children:Object(n.jsx)(m.a,{children:e.desc})}),Object(n.jsx)(m.a,{children:"..."})]},a);var c})),Object(n.jsx)(m.a,{children:"..."})]})})]})}var I=a(23),F=a(286),R=a(289),T=a(288),B=a(287),L=a(301),D=a.p+"static/media/background.5fa5d3c4.jpg",M=a.p+"static/media/car1.cc0c93bf.png",_=a(302),P=a(303),U=a(304),z=a(299),W=a(134),E=a.n(W),A=a(136),$=a.n(A),H=a(137),V=a.n(H),q=a(42),Y=a.n(q),G=a(135),X=a.n(G),J=Object(b.a)((function(e){return{root:{height:380,transform:"translateZ(0px)",flexGrow:1,margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",zIndex:1e5},speedDial:{position:"absolute",bottom:e.spacing(1),right:e.spacing(2)}}})),K=[{icon:Object(n.jsx)(E.a,{onClick:function(){return window.location.replace("/logs")}}),name:"Logs"},{icon:Object(n.jsx)(Y.a,{onClick:function(){return window.location.replace("/upload")}}),name:"upload PUC"},{icon:Object(n.jsx)(X.a,{onClick:function(){return window.location.replace("/upload2")}}),name:"add Insurance"},{icon:Object(n.jsx)($.a,{}),name:"Share"},{icon:Object(n.jsx)(V.a,{}),name:"Like"}];function Z(){var e=J(),t=o.a.useState(!1),a=Object(l.a)(t,2),c=a[0],i=a[1],r=o.a.useState(!1),s=Object(l.a)(r,2),d=s[0];s[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(_.a,{open:c}),Object(n.jsx)(P.a,{ariaLabel:"SpeedDial tooltip example",className:e.speedDial,hidden:d,icon:Object(n.jsx)(U.a,{}),onClose:function(){i(!1)},onOpen:function(){i(!0)},open:c,children:K.map((function(e){return Object(n.jsx)(z.a,{icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0},e.name)}))})]})}var Q=a(5),ee=a(4),te=a(284),ae=a(285),ne=a(297),ce=(a(139),a(140)),oe=a.n(ce),ie=a(141),re=a.n(ie),se=a(142),de=a.n(se),le=a(240);Object(Q.a)({alternativeLabel:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},active:{"& $line":{borderColor:"#784af4"}},completed:{"& $line":{borderColor:"#784af4"}},line:{borderColor:"#eaeaf0",borderTopWidth:3,borderRadius:1}})(le.a),Object(b.a)({root:{color:"#eaeaf0",display:"flex",height:22,alignItems:"center",borderRadius:"1.5rem"},active:{color:"#784af4"},circle:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"},completed:{color:"#784af4",zIndex:1,fontSize:18}});var be=Object(Q.a)({alternativeLabel:{top:22},active:{"& $line":{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},completed:{"& $line":{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(le.a),je=Object(b.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},completed:{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}});function ue(e){var t,a=je(),c=e.active,o=e.completed,i={1:Object(n.jsx)(oe.a,{}),2:Object(n.jsx)(re.a,{}),3:Object(n.jsx)(de.a,{})};return Object(n.jsx)("div",{className:Object(ee.default)(a.root,(t={},Object(I.a)(t,a.active,c),Object(I.a)(t,a.completed,o),t)),children:i[String(e.icon)]})}var he=Object(b.a)((function(e){return{root:{width:"100%"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function me(e){switch(e){case 0:return"Check if You have all the required Document";case 1:return"Scan your licnece through NFC or App";case 2:return"Scan your Fingurprint throug Scanner";default:return"Unknown step"}}function ge(e){var t=he(),a=o.a.useState(0),c=Object(l.a)(a,2),i=c[0],r=c[1],s=o.a.useState({}),d=Object(l.a)(s,2),b=d[0],j=d[1],u=["Check Required document","Scan your Licence","Scan your Figurprint"],h=function(){var e;null===(e=document.getElementById("modal-boss"))||void 0===e||e.classList.toggle("is-active")},g=function(){var e;null===(e=document.getElementById("modal-boss"))||void 0===e||e.classList.remove("is-active")};return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(te.a,{alternativeLabel:!0,activeStep:i,connector:Object(n.jsx)(be,{}),children:u.map((function(e){return Object(n.jsx)(ae.a,{children:Object(n.jsx)(ne.a,{StepIconComponent:ue,children:e})},e)}))}),Object(n.jsx)("div",{children:i===u.length?Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{className:t.instructions,style:{color:"white"},children:"All steps completed - you're finished! enjoy your ride"}),Object(n.jsx)(v.a,{onClick:function(){r(0)},className:t.button,style:{color:"white"},children:"Reset"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{style:{color:"white"},className:t.instructions,children:me(i)}),Object(n.jsxs)("div",{children:[Object(n.jsx)(v.a,{disabled:0===i,onClick:function(){r((function(e){return e-1}))},className:t.button,style:{color:"white"},children:"Back"}),Object(n.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){0===i?k.a.get(ot+"/verify_documents").then((function(t){console.log(t),"Success"==(null===t||void 0===t?void 0:t.data)?(e.changeMessage({head:"Document Check",type:"is-success",msg:"\ud83d\udc4d all documents available"}),h(),r((function(e){return e+1})),setTimeout((function(){g()}),3e3)):(e.changeMessage({head:"Oh no",type:"is-danger",msg:t.data}),h(),setTimeout((function(){g()}),3e3))})):1===i?k.a.get(ot+"/verify_license").then((function(t){console.log(t),t.data.length>0?(console.log(t.data[0]),j(t.data[0]),e.changeMessage({head:"\ud83d\udcb3 License",type:"is-success",msg:"\ud83d\udc4dhi! "+t.data[0].name+" we Found your license"}),h(),r((function(e){return e+1})),setTimeout((function(){g()}),3e3)):(e.changeMessage({head:"Oh no",type:"is-danger",msg:"License didnt match"}),h(),setTimeout((function(){g()}),3e3))})):2===i&&k.a.post(ot+"/verify_fingerprint",{fingerprint:b.fingerprint}).then((function(t){console.log(t),1==t.data?(e.changeMessage({head:"\ud83e\uddecFingerprint",type:"is-success",msg:"\ud83d\udc4dFingerprint Matched \n \n you can ride your vehicle safely"}),h(),r((function(e){return e+1})),setTimeout((function(){g()}),3e3)):(e.changeMessage({head:"Oh no",type:"is-danger",msg:"Fingerprint didnt match!!Try again"}),h(),setTimeout((function(){g()}),3e3))}))},className:t.button,children:i===u.length-1?"Ride":"Verify"})]})]})})]})}a(195);var xe=Object(b.a)((function(e){return{root:{minWidth:275,padding:"2rem"},butt:{color:"white",textDecoration:"None"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14,color:"blue"},pos:{marginBottom:12},large:{height:e.spacing(7),width:e.spacing(7)},avat:{display:"flex",justifyContent:"space-between"},more:Object(I.a)({background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",border:0,fontSize:16,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},"borderRadius","1.5rem"),card:{background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)",minWidth:320,position:"relative",boxShadow:"0 8px 24px 0 rgba(0,0,0,0.12)",overflow:"visible",borderRadius:"1.5rem",transition:"0.4s","&:hover":{transform:"translateY(-2px)",boxShadow:"0 6px 12px 0 red\n          .rotate(-12)\n          .darken(0.2)\n          .fade(0.5)}","& $shadow":{bottom:"-1.5rem"},"& $shadow2":{bottom:"-2.5rem"}},"&:before":{content:'""',position:"absolute",zIndex:0,display:"block",width:"100%",bottom:-1,height:"100%",borderRadius:"1.5rem",backgroundColor:"rgba(0,0,0,0.08)"}},card1:{background:"transparent",minWidth:320,position:"relative",boxShadow:"0 8px 24px 0 rgba(0,0,0,0.12)",overflow:"visible",borderRadius:"1.5rem",transition:"0.4s","&:hover":{transform:"translateY(-2px)",boxShadow:"0 6px 12px 0 red\n          .rotate(-12)\n          .darken(0.2)\n          .fade(0.5)}","& $shadow":{bottom:"-1.5rem"},"& $shadow2":{bottom:"-2.5rem"}},"&:before":{content:'""',position:"absolute",zIndex:0,display:"block",width:"100%",bottom:-1,height:"100%",borderRadius:"1.5rem",backgroundColor:"rgba(0,0,0,0.08)"}}}}));function pe(){var e=xe(),t=(F.a,Object(c.useState)({})),a=Object(l.a)(t,2),i=a[0],r=a[1],d=Object(c.useState)({}),b=Object(l.a)(d,2),j=b[0],u=b[1],h=Object(c.useState)({head:"",type:"",msg:""}),g=Object(l.a)(h,2),x=g[0],p=g[1];return Object(c.useEffect)((function(){k.a.get(ot+"/get_vehicle_details").then((function(e){r(e.data),console.log(i)})),k.a.get(ot+"/get_owner_details").then((function(e){u(e.data),console.log(j)}))}),[]),Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsxs)("div",{style:{backgroundImage:"url(".concat(D,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"repeat"},children:[Object(n.jsxs)(B.a,{container:!0,spacing:2,className:e.root,justify:"center",children:[Object(n.jsx)(B.a,{item:!0,xs:12,md:6,children:Object(n.jsxs)(F.a,{variant:"outlined",className:e.card,children:[Object(n.jsxs)(T.a,{children:[Object(n.jsxs)("div",{className:e.avat,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Owner"}),Object(n.jsx)(m.a,{variant:"h5",component:"h2",children:j.name})]}),Object(n.jsx)("div",{children:Object(n.jsx)(L.a,{alt:"Remy Sharp",src:"",className:e.large,children:"A"})})]}),Object(n.jsxs)(m.a,{className:e.pos,color:"textSecondary",children:["Driving License : ",j.licenseNo]}),Object(n.jsxs)(m.a,{variant:"body2",component:"p",children:["Date of Birth",Object(n.jsx)("br",{}),new Date(j.dob).toDateString()]})]}),Object(n.jsx)(R.a,{children:Object(n.jsx)(s.b,{to:"/drivers",className:e.butt,children:Object(n.jsx)(v.a,{size:"small",className:e.more,children:" More"})})})]})}),Object(n.jsx)(B.a,{item:!0,xs:12,md:6,children:Object(n.jsxs)(F.a,{variant:"outlined",className:e.card,children:[Object(n.jsxs)(T.a,{children:[Object(n.jsxs)("div",{className:e.avat,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{variant:"h5",component:"h2",children:"Vehicle Details"}),Object(n.jsx)(m.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:i.model}),Object(n.jsxs)(m.a,{className:e.pos,color:"textSecondary",children:["RC  : ",i.rc_no]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:M,alt:"BigCo Inc. logo",width:"200",height:"80"})})]}),Object(n.jsxs)(m.a,{variant:"body2",component:"p",children:["Purchased",Object(n.jsx)("br",{}),"on :           ",new Date(i.purchased_on).toDateString()]})]}),Object(n.jsx)(R.a,{children:Object(n.jsx)(s.b,{to:"/vehicledetails",className:e.butt,children:Object(n.jsx)(v.a,{size:"small",className:e.more,children:" More"})})})]})})]}),Object(n.jsxs)(B.a,{container:!0,spacing:2,className:e.root,justify:"center",children:[Object(n.jsx)(B.a,{item:!0,xs:12,md:6,children:Object(n.jsxs)(F.a,{variant:"outlined",className:e.card,children:[Object(n.jsxs)(T.a,{children:[Object(n.jsx)(m.a,{variant:"h5",component:"h2",children:"Last  Driving Status"}),Object(n.jsx)(m.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Driver name"}),Object(n.jsx)(m.a,{className:e.pos,color:"textSecondary",children:"John Smith"}),Object(n.jsx)(m.a,{variant:"body2",component:"p",children:"at  :  26/12/2020 21:00"})]}),Object(n.jsx)(R.a,{children:Object(n.jsx)(s.b,{to:"/logs",className:e.butt,children:Object(n.jsx)(v.a,{size:"small",className:e.more,children:" More"})})})]})}),Object(n.jsxs)(B.a,{item:!0,xs:12,md:6,children:[Object(n.jsxs)(F.a,{className:e.card1,children:[Object(n.jsx)(T.a,{children:Object(n.jsx)(ge,{style:{background:"transparent"},changeMessage:p})}),Object(n.jsx)(R.a,{})]}),Object(n.jsx)(Z,{})]})]})]}),Object(n.jsxs)("div",{className:"modal",id:"modal-boss",children:[Object(n.jsx)("div",{className:"modal-background"}),Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsxs)("article",{className:"message "+x.type,id:"modal",children:[Object(n.jsxs)("div",{className:"message-header",children:[Object(n.jsx)("p",{children:x.head}),Object(n.jsx)("button",{className:"delete","aria-label":"delete"})]}),Object(n.jsx)("div",{className:"message-body",children:x.msg})]})}),Object(n.jsx)("button",{class:"modal-close is-large","aria-label":"close"})]})]})}var Oe=a(291),fe=a(290),ve=Object(b.a)((function(e){return{root:{backgroundColor:"black",padding:"0 2em 0 2em",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"repeat"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},card:{background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)",minWidth:320,position:"relative",boxShadow:"0 8px 24px 0 rgba(0,0,0,0.12)",overflow:"visible",borderRadius:"1.5rem",transition:"0.4s","&:hover":{transform:"translateY(-2px)",boxShadow:"0 6px 12px 0 red\n        .rotate(-12)\n        .darken(0.2)\n        .fade(0.5)}","& $shadow":{bottom:"-1.5rem"},"& $shadow2":{bottom:"-2.5rem"}},"&:before":{content:'""',position:"absolute",zIndex:0,display:"block",width:"100%",bottom:-1,height:"100%",borderRadius:"1.5rem"}}}}));function ye(){var e=this,t=Object(c.useState)([]),a=Object(l.a)(t,2),i=a[0],r=a[1],s=ve();Object(c.useEffect)((function(){console.log(e),k.a.get("http://localhost:5000/get_all_drivers").then((function(e){console.log(e),r(e.data.drivers),console.log(i)})).catch((function(e){console.error(e)}))}),[]);var d=i.map((function(e,t){return Object(n.jsxs)(j.a,{defaultExpanded:!0,className:s.card,children:[Object(n.jsxs)(h.a,{expandIcon:Object(n.jsx)(x.a,{}),"aria-controls":"panel1c-content",id:"panel1c-header",children:[Object(n.jsx)("div",{className:s.column,children:Object(n.jsxs)(m.a,{className:s.heading,children:["Driver Name : ",e.name]})}),Object(n.jsx)("div",{className:s.column,children:Object(n.jsx)(m.a,{className:s.secondaryHeading,children:"Driver License No"})})]}),Object(n.jsxs)(u.a,{className:s.details,children:[Object(n.jsx)("div",{className:s.column}),Object(n.jsx)("div",{className:s.column,children:Object(n.jsx)("h5",{children:e.dl})}),Object(n.jsx)("div",{className:Object(ee.default)(s.column,s.helper)})]}),Object(n.jsx)(fe.a,{}),Object(n.jsx)(Oe.a,{children:Object(n.jsx)(v.a,{size:"small",color:"secondary",children:"Delete"})})]},t)}));return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsxs)("div",{className:s.root,children:[Object(n.jsx)("h3",{style:{color:"Red"},children:"Drivers"}),d]})]})}var Ne=a(101),Se=a.n(Ne),ke=(a(129),a(130),a(296)),we=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",color:"#ffffff"},margin:{margin:e.spacing(1),color:"#ffffff"}}})),Ce=Object(Q.a)({root:{"& input:valid + fieldset":{borderColor:"green",borderWidth:2,color:"#ffffff"},"& input:invalid + fieldset":{borderColor:"red",borderWidth:2,color:"#ffffff"},"& input:valid:focus + fieldset":{borderLeftWidth:6,color:"#ffffff",padding:"4px !important"}}})(ke.a);function Ie(e){we();var t=Object(c.useState)(""),a=Object(l.a)(t,2),o=a[0],i=a[1],r=function(){k.a.post(ot+"/add_document",{type:"PUC",id:o}).then((function(t){"Bad request"!==t.data?e.changeModal({head:"PUC",type:"is-success",msg:"Document added succesfully"}):e.changeModal({head:"PUC",type:"is-danger",msg:t.data}),function(){var e;null===(e=document.getElementById("modal-boss"))||void 0===e||e.classList.toggle("is-active")}(),setTimeout((function(){!function(){var e;null===(e=document.getElementById("modal-boss"))||void 0===e||e.classList.remove("is-active")}()}),3e3)}))};return Object(n.jsxs)("form",{children:[Object(n.jsx)(Ce,{label:"PUC Number",required:!0,variant:"outlined",defaultValue:"Licence No",color:"secondary",id:"validation-outlined-input",style:{padding:10},onChange:function(e){return i(e.target.value)}}),Object(n.jsx)(v.a,{variant:"contained",color:"default",style:{background:"linear-gradient(45deg, #13B3C8  40%, #FFFFFF 70%)",paddingTop:10},startIcon:Object(n.jsx)(Y.a,{}),onClick:function(){r()},children:"Upload"})]})}function Fe(){var e=o.a.useState(""),t=Object(l.a)(e,2),a=t[0],c=t[1],i=o.a.useState(""),r=Object(l.a)(i,2),s=r[0],d=(r[1],o.a.useState({head:"",type:"",msg:""})),b=Object(l.a)(d,2),j=b[0],u=b[1],h=function(e){var t=e.dataUri,a=e.isFullscreen?"demo-image-preview-fullscreen":"";return Object(n.jsx)("div",{className:"demo-image-preview "+a,children:Object(n.jsx)("img",{src:t})})};return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsxs)("div",{className:"container1",children:[Object(n.jsx)("div",{className:"camera",children:s?Object(n.jsx)(h,{dataUri:s,isFullscreen:false}):Object(n.jsx)(Se.a,{onTakePhoto:function(e){console.log("takePhoto")},onCameraError:function(e){!function(e){console.log("handleCameraError",e)}(e)},onCameraStart:function(e){console.log("handleCameraStart")},onCameraStop:function(){console.log("handleCameraStop")},isFullscreen:false})}),Object(n.jsxs)("div",{id:"upload-box",children:[Object(n.jsx)("h2",{children:"PUC Upload "}),Object(n.jsx)("input",{type:"file",onChange:function(e){c(e.target.files[0])}}),Object(n.jsx)(v.a,{variant:"contained",color:"default",style:{background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)"},startIcon:Object(n.jsx)(Y.a,{}),onClick:function(){(new FormData).append("image",a,a.name),console.log(a.name)},children:"Upload"}),Object(n.jsxs)("p",{children:["Filename: ",a.name]}),Object(n.jsxs)("p",{children:["File type: ",a.type]}),Object(n.jsxs)("p",{children:["File size: ",a.size," bytes"]}),a&&Object(n.jsx)(Re,{image:a}),Object(n.jsxs)(F.a,{style:{background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)"},children:[Object(n.jsx)(m.a,{style:{padding:10},children:" OR Enter the PUC number here to upload "}),Object(n.jsx)("br",{}),Object(n.jsx)(Ie,{changeModal:u}),Object(n.jsx)(m.a,{style:{padding:10},children:" PUC number is on your PUC  "})]})]})]}),Object(n.jsxs)("div",{className:"modal",id:"modal-boss",children:[Object(n.jsx)("div",{className:"modal-background"}),Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsxs)("article",{className:"message "+j.type,id:"modal",children:[Object(n.jsxs)("div",{className:"message-header",children:[Object(n.jsx)("p",{children:j.head}),Object(n.jsx)("button",{className:"delete","aria-label":"delete"})]}),Object(n.jsx)("div",{className:"message-body",children:j.msg})]})}),Object(n.jsx)("button",{class:"modal-close is-large","aria-label":"close"})]})]})}var Re=function(e){var t=e.image;return Object(n.jsx)("img",{height:"150px",width:"150px",src:URL.createObjectURL(t),alt:t.name})},Te=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",color:"#ffffff"},margin:{margin:e.spacing(1),color:"#ffffff"}}})),Be=Object(Q.a)({root:{"& input:valid + fieldset":{borderColor:"green",borderWidth:2,color:"#ffffff"},"& input:invalid + fieldset":{borderColor:"red",borderWidth:2,color:"#ffffff"},"& input:valid:focus + fieldset":{borderLeftWidth:6,color:"#ffffff",padding:"4px !important"}}})(ke.a);function Le(e){Te();var t=Object(c.useState)(""),a=Object(l.a)(t,2),o=a[0],i=a[1],r=function(){k.a.post(ot+"/add_document",{type:"INS",id:o}).then((function(t){"Bad request"!==t.data?e.changeModal({head:"Insurance",type:"is-success",msg:"Document added succesfully"}):e.changeModal({head:"Insurance",type:"is-danger",msg:t.data}),function(){var e;null===(e=document.getElementById("modal-boss"))||void 0===e||e.classList.toggle("is-active")}(),setTimeout((function(){!function(){var e;null===(e=document.getElementById("modal-boss"))||void 0===e||e.classList.remove("is-active")}()}),3e3)}))};return Object(n.jsxs)("form",{children:[Object(n.jsx)(Be,{label:"Insurance Number",required:!0,variant:"outlined",defaultValue:"Insurance Number",color:"secondary",id:"validation-outlined-input",style:{padding:10},onChange:function(e){return i(e.target.value)}}),Object(n.jsx)(v.a,{variant:"contained",color:"default",style:{background:"linear-gradient(45deg, #13B3C8  40%, #FFFFFF 70%)",paddingTop:10},startIcon:Object(n.jsx)(Y.a,{}),onClick:function(){return r()},children:"Upload"})]})}function De(){var e=o.a.useState(""),t=Object(l.a)(e,2),a=t[0],c=t[1],i=o.a.useState(""),r=Object(l.a)(i,2),s=(r[0],r[1],o.a.useState({head:"",type:"",msg:""})),d=Object(l.a)(s,2),b=d[0],j=d[1];return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsx)("div",{style:{display:"flez",padding:"1rem",maxheight:"90vh",maxWidth:400,backgroundcolor:"black",color:"gray",justifyContent:"center"},children:Object(n.jsxs)("div",{id:"upload-box",children:[Object(n.jsx)("h2",{children:"Insurance Upload "}),Object(n.jsx)("input",{type:"file",onChange:function(e){c(e.target.files[0])}}),Object(n.jsx)(v.a,{variant:"contained",color:"default",style:{background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)"},startIcon:Object(n.jsx)(Y.a,{}),onClick:function(){(new FormData).append("image",a,a.name),console.log(a.name)},children:"Submit"}),Object(n.jsxs)("p",{children:["Filename: ",a.name]}),Object(n.jsxs)("p",{children:["File type: ",a.type]}),Object(n.jsxs)("p",{children:["File size: ",a.size," bytes"]}),a&&Object(n.jsx)(Me,{image:a}),Object(n.jsxs)(F.a,{style:{background:"linear-gradient(45deg, #13B3C8  40%, #2196F3 70%)"},children:[Object(n.jsx)(m.a,{style:{padding:10},children:" OR Enter the Insurance number here to upload "}),Object(n.jsx)("br",{}),Object(n.jsx)(Le,{changeModal:j}),Object(n.jsx)(m.a,{style:{padding:10},children:" Insurance number is on your licnece  "})]})]})}),Object(n.jsxs)("div",{className:"modal",id:"modal-boss",children:[Object(n.jsx)("div",{className:"modal-background"}),Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsxs)("article",{className:"message "+b.type,id:"modal",children:[Object(n.jsxs)("div",{className:"message-header",children:[Object(n.jsx)("p",{children:b.head}),Object(n.jsx)("button",{className:"delete","aria-label":"delete"})]}),Object(n.jsx)("div",{className:"message-body",children:b.msg})]})}),Object(n.jsx)("button",{class:"modal-close is-large","aria-label":"close"})]})]})}var Me=function(e){var t=e.image;return Object(n.jsx)("img",{height:"150px",width:"150px",src:URL.createObjectURL(t),alt:t.name})},_e=a(92),Pe=a(89),Ue=a.n(Pe),ze=a(90),We=a(91),Ee=a.p+"static/media/car2.23d1e908.png",Ae=Object(b.a)((function(e){var t=e.breakpoints,a=e.spacing;return{root:Object(I.a)({backgroundImage:"linear-gradient(147deg, #13B3C8  40%, #2196F3 70%)",margin:"auto",borderRadius:a(2),transition:"0.3s",boxShadow:"0px 14px 80px rgba(34, 35, 58, 0.2)",position:"relative",maxWidth:650,marginLeft:"auto",overflow:"initial",background:"#ffffff",display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:a(2)},t.up("md"),{flexDirection:"row",paddingTop:a(2)}),media:Object(I.a)({width:"20%",maxWidth:300,maxHeight:200,marginLeft:"auto",marginRight:"auto",content:"center",marginTop:a(-3),height:0,paddingBottom:"48%",textAlign:"center",verticalAlign:"middle",borderRadius:a(2),backgroundImage:"linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)"},t.up("md"),{width:"100%",marginLeft:a(-3),marginTop:0,transform:"translateX(-8px)"}),media2:Object(I.a)({padding:20,borderRadius:a(2),marginTop:a(-3),marginLeft:"auto",marginRight:"auto",textAlign:"center",content:"center",backgroundImage:"linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)"},t.up("md"),{width:"20%",marginLeft:a(-3),marginTop:0,transform:"translateX(-8px)"}),content:{padding:24},cta:{marginTop:24,textTransform:"initial"}}})),$e=o.a.memo((function(){var e=Ae(),t=Object(ze.useBlogTextInfoContentStyles)(),a=(t.button,Object(_e.a)(t,["button"])),o=Object(We.useOverShadowStyles)(),i=Object(c.useState)({}),r=Object(l.a)(i,2),s=r[0],d=r[1];return Object(c.useEffect)((function(){k.a.get(ot+"/get_vehicle_details").then((function(e){d(e.data),console.log(s)}))}),[]),Object(n.jsxs)(F.a,{className:Object(ee.default)(e.root,o.root),children:[Object(n.jsx)("card",{className:e.media2,children:Object(n.jsx)("div",{styles:{verticalAlign:"middle",marginTop:10},children:Object(n.jsx)("img",{src:Ee,alt:"BigCo Inc. logo",width:"80",height:"200"})})}),Object(n.jsxs)(T.a,{children:[Object(n.jsx)(Ue.a,{classes:a,overline:new Date(s.purchased_on).toUTCString(),heading:s.model,body:s.info}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["Vehicle Type  : ",s.vehicle_type]}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["RC  : ",s.rc_no]}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["Fuel Type: ",s.fuel_type]}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["Engine Number: ",s.engine_no]}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["Chasis Number:  ",s.chasis_no]})]})]})})),He=a.p+"static/media/user.01f57b62.png",Ve=Object(b.a)((function(e){var t=e.breakpoints,a=e.spacing;return{root:Object(I.a)({backgroundImage:"linear-gradient(147deg, #13B3C8  40%, #2196F3 70%)",margin:"auto",borderRadius:a(2),transition:"0.3s",boxShadow:"0px 14px 80px rgba(34, 35, 58, 0.2)",position:"relative",maxWidth:650,marginLeft:"auto",overflow:"initial",background:"#ffffff",display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:a(2)},t.up("md"),{flexDirection:"row",paddingTop:a(2)}),media:Object(I.a)({width:"20%",maxWidth:300,maxHeight:200,marginLeft:"auto",marginRight:"auto",content:"center",marginTop:a(-3),height:0,paddingBottom:"48%",textAlign:"center",verticalAlign:"middle",borderRadius:a(2),backgroundImage:"linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)"},t.up("md"),{width:"100%",marginLeft:a(-3),marginTop:0,transform:"translateX(-8px)"}),media2:Object(I.a)({padding:20,borderRadius:a(2),marginTop:a(-3),marginLeft:"auto",marginRight:"auto",textAlign:"center",content:"center",backgroundImage:"linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)"},t.up("md"),{width:"20%",marginLeft:a(-3),marginTop:0,transform:"translateX(-8px)"}),content:{padding:24},cta:{marginTop:24,textTransform:"initial"}}})),qe=o.a.memo((function(){var e=Ve(),t=Object(ze.useBlogTextInfoContentStyles)(),a=(t.button,Object(_e.a)(t,["button"])),o=Object(We.useOverShadowStyles)(),i=Object(c.useState)({}),r=Object(l.a)(i,2),s=r[0],d=r[1];return Object(c.useEffect)((function(){k.a.get(ot+"/get_owner_details").then((function(e){d(e.data),console.log(s)}))}),[]),Object(n.jsxs)(F.a,{className:Object(ee.default)(e.root,o.root),children:[Object(n.jsx)("card",{className:e.media2,children:Object(n.jsx)("div",{styles:{verticalAlign:"middle",marginTop:10},children:Object(n.jsx)("img",{src:He,alt:"BigCo Inc. logo",width:"100",height:"100"})})}),Object(n.jsxs)(T.a,{children:[Object(n.jsx)(Ue.a,{classes:a,overline:"USER DEATILS ",heading:s.name,body:"Address:  "+s.address}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["Date Of Birth  : ",new Date(s.dob).toDateString()]}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["License no: ",s.licenseNo]}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["Phone no: ",s.contact]}),Object(n.jsxs)(m.a,{color:"textSecondary",children:["Nationality : ",s.nationality]})]})]})}));function Ye(){return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{children:"."}),Object(n.jsx)($e,{}),Object(n.jsx)(m.a,{children:".............."}),Object(n.jsx)(qe,{}),Object(n.jsx)(m.a,{children:"."})]})]})}var Ge=a(104),Xe=a(143),Je=a(144),Ke=a(146),Ze=a(145),Qe=(a(236),a.p+"static/media/bugatti.d8a5373c.png"),et=function(e){Object(Ke.a)(a,e);var t=Object(Ze.a)(a);function a(){var e;return Object(Xe.a)(this,a),(e=t.call(this)).state={docs:[]},e}return Object(Je.a)(a,[{key:"drawMeter",value:function(e,t){var a=document.getElementById(e).getContext("2d"),n=a.createLinearGradient(0,0,290,20);n.addColorStop("0","red"),n.addColorStop("0.5","yellow"),n.addColorStop("1.0","green");var c=(1+t)*Math.PI,o=150+100*Math.cos(c),i=110+100*Math.sin(c);a.strokeStyle="#FF0000",a.lineWidth=5,a.moveTo(150,110),a.lineTo(o,i),a.stroke(),a.strokeStyle="#808080",a.lineWidth=12,a.beginPath(),a.arc(150,110,100,1*Math.PI,2*Math.PI),a.stroke(),a.strokeStyle=n,a.lineWidth=10,a.beginPath(),a.arc(150,110,100,1*Math.PI,(1+t)*Math.PI),a.stroke()}},{key:"getAllDocs",value:function(){var e=this;k.a.get(ot+"/get_all_docs").then((function(t){e.setState({docs:t.data.docs}),e.state.docs.forEach((function(t){"PUC"==t.docname&&e.setState(Object(Ge.a)({puc:t.valid_till},e.state)),"INS"==t.docname&&e.setState(Object(Ge.a)({ins:t.valid_till},e.state))})),console.log(e.state)}))}},{key:"componentDidMount",value:function(){this.getAllDocs(),console.log(this.state),this.drawMeter("puc",.4),this.drawMeter("ic",.7)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"overlay",children:[Object(n.jsxs)("div",{className:"slider",children:["^",Object(n.jsx)("br",{}),"^"]}),Object(n.jsx)("div",{className:"unlock-text",children:Object(n.jsx)(s.b,{to:"/home",children:"UNLOCK"})})]}),Object(n.jsx)("div",{class:"logo ",children:"Virtuoso"}),Object(n.jsxs)("div",{className:"meter-1 disco-text",children:[this.state.puc," ",Object(n.jsx)("br",{}),"PUC",Object(n.jsx)("canvas",{id:"puc"})]}),Object(n.jsxs)("div",{className:"meter-2 disco-text",children:[this.state.ins," ",Object(n.jsx)("br",{})," Insurance",Object(n.jsx)("canvas",{id:"ic"})]}),Object(n.jsx)("div",{className:"car",children:Object(n.jsx)("img",{src:Qe,alt:"car",id:"bugatti"})}),Object(n.jsx)("div",{className:"infobar  disco-text",children:this.state.docs.filter((function(e){return"test"!==e.docname})).map((function(e,t){return Object(n.jsxs)("div",{children:[e.docname," \u2705"]})}))})]})}}]),a}(c.Component),tt=a(56),at=a(295),nt=Object(tt.a)({palette:{primary:{main:"#98acf8",backgroundColor:"black"},secondary:{main:"#f44336"}}});var ct=function(){return Object(n.jsx)("div",{style:{backgroundColor:"black",minHeight:"100vh"},children:Object(n.jsx)(at.a,{theme:nt,children:Object(n.jsx)(s.a,{children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{path:"/lock",component:et,exact:!0}),Object(n.jsx)(d.a,{from:"/",to:"/lock",exact:!0}),Object(n.jsx)(d.b,{path:"/home",component:pe,exact:!0}),Object(n.jsx)(d.b,{path:"/drivers",component:ye,exact:!0}),Object(n.jsx)(d.b,{path:"/logs",component:C,exact:!0}),Object(n.jsx)(d.b,{path:"/upload",component:Fe,exact:!0}),Object(n.jsx)(d.b,{path:"/upload2",component:De,exact:!0}),Object(n.jsx)(d.b,{path:"/vehicledetails",component:Ye,exact:!0})]})})})})},ot="http://localhost:5000",it=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,305)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),o(e),i(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(ct,{})}),document.getElementById("root")),it()}},[[237,1,2]]]);
//# sourceMappingURL=main.d5524b3f.chunk.js.map