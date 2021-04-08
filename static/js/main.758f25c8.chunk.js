(this["webpackJsonpreact-router-redux-saga-mui-boilerplate"]=this["webpackJsonpreact-router-redux-saga-mui-boilerplate"]||[]).push([[0],{147:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),s=(n(147),n(34)),o=n(17),l=n(19),d=n(215),j=n(217),u=n(179),b=n(118),p=n.n(b),m=n(69),O="TOGGLE_SIDEBAR";function x(){return{type:O}}var f=n(212),h=n(2),v=Object(f.a)((function(){return{appBar:{color:"#fff"}}}));var g=function(){var e=v(),t=Object(o.e)(),n=Object(l.b)(),r=Object(a.useCallback)((function(){n(x())}),[n]);return Object(h.jsx)(d.a,{className:e.appBar,children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:r,children:Object(h.jsx)(p.a,{})}),Object(h.jsx)(m.a,{variant:"h6",onClick:function(){return t.push("/medi360/")},children:Object(h.jsx)("strong",{children:"Medi360"})})]})})},y=n(231),w=n(218),N=n(219),S=n(220),C=n(221),k=[{label:"Home",url:"/"},{label:"My Account",url:"/account"},{label:"Reports",url:"/reports"},{label:"Logout",url:"/logout"}],I="REGISTER_USER",E="REGISTER_USER_SUCCESS",R="REGISTER_USER_FAIL",T="LOGIN_USER",F="LOGIN_USER_SUCCESS",L="LOGIN_USER_FAIL",_="LOGOUT_USER";var B=n(119),A=n.n(B),D=n(120),P=n.n(D),U=n(122),W=n.n(U),z=n(121),G=n.n(z),M={Home:A.a,"My Account":P.a,Reports:G.a,Logout:W.a},q=Object(f.a)((function(e){return{drawer:{top:64,width:0,transition:e.transitions.create(["width"],{easing:e.transitions.easing.easeIn,duration:200})},drawerOpen:{width:240},selected:{color:e.palette.primary.main},item:{whiteSpace:"nowrap"}}}));var V=function(){var e=Object(o.f)().pathname,t=Object(l.c)((function(e){return e.sidebar})).expanded,n=q(),r=Object(o.e)(),c=Object(l.b)(),i=Object(a.useCallback)((function(e){"/medi360/logout"===e&&(c({type:_}),e="/medi360/"),r.push(e),c(x())}),[c,r]);return Object(h.jsx)(y.a,{variant:"permanent",classes:{paper:"".concat(n.drawer," ").concat(t?n.drawerOpen:"")},children:Object(h.jsx)(w.a,{children:k.map((function(t,a){var r=t.label,c=t.url,s=M[r];return Object(h.jsxs)(N.a,{className:n.item,button:!0,onClick:function(){return i(c)},children:[Object(h.jsx)(S.a,{children:Object(h.jsx)(s,{color:"".concat(e===c?"primary":"inherit")})}),Object(h.jsx)(C.a,{primary:r,className:"".concat(e===c?n.selected:"")})]},r)}))})})};var H=function(){return Object(h.jsx)("div",{children:"Home component"})};var Z=function(){return Object(h.jsx)("div",{children:"MyAccount component"})},J=n(131),X=Object(J.a)({palette:{primary:{main:"#38b790",contrastText:"#fff"}}}),Y=n(228),$=n(46),K=n(232),Q=n(229),ee="SET_NOTIFICATION",te="CLEAR_NOTIFICATION";function ne(e){return Object(h.jsx)(Q.a,Object($.a)({elevation:6,variant:"filled"},e))}var ae=Object(f.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));var re=function(){var e=Object(l.c)((function(e){return e.notifications})),t=e.message,n=e.timeout,a=e.severity,r=ae(),c=Object(l.b)(),i=function(){c({type:te})};return t?Object(h.jsx)("div",{className:r.root,children:Object(h.jsx)(K.a,{open:Boolean(t),autoHideDuration:n,onClose:i,children:Object(h.jsx)(ne,{onClose:i,severity:a,children:t})})}):null},ce=n(57),ie=n(44),se=n(21),oe=n(225),le=n(224),de=n(226),je=function(e){if(!e)return"This field is required"},ue=function(e){var t=je(e);return t||(e.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?void 0:"Invalid email format")},be=Object(f.a)((function(){return{container:{margin:"20px",display:"flex",width:"calc(100% - 40px)",justifyContent:"space-between"},btn:{textTransform:"capitalize",color:"#fff",width:"160px",borderRadius:"4px",fontSize:"12px",padding:"8px"},fb:{background:"#3b5998","&:hover":{background:"#3b5998",opacity:"0.6"}},google:{background:"#db3236","&:hover":{background:"#db3236",opacity:"0.6"}}}}));var pe=function(){var e=be();return Object(h.jsxs)("div",{className:e.container,children:[Object(h.jsx)(le.a,{className:"".concat(e.btn," ").concat(e.fb),variant:"contained",children:"Continue with Facebook"}),Object(h.jsx)(le.a,{className:"".concat(e.btn," ").concat(e.google),variant:"contained",children:"Continue with Google"})]})},me=Object(f.a)((function(){return{container:{textAlign:"center"}}}));var Oe=function(){var e=me();return Object(h.jsx)("div",{className:e.container,children:Object(h.jsx)("img",{src:"https://mayank8aug.github.io/medi360/logo.png",alt:"logo",width:100})})},xe=n(81),fe=n.n(xe),he=n(82),ve=n.n(he),ge=Object(f.a)((function(e){return{form:{margin:20},title:{fontWeight:700,marginBottom:40,fontSize:24},field:{marginBottom:32},label:{fontWeight:700},button:{marginTop:32},link:{color:e.palette.primary.main,textDecoration:"none",fontWeight:600},separator:{display:"flex",justifyContent:"center",fontSize:"14px"},eyeBtn:{position:"absolute",right:"10px"},w100:{width:"100%"},white:{color:"#fff"}}}));var ye=function(){var e=Object(a.useState)(!1),t=Object(ce.a)(e,2),n=t[0],r=t[1],c=ge(),i=Object(l.b)(),o=Object(l.c)((function(e){return e.auth})).loading;return console.log(o),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(se.b,{onSubmit:function(e){o||i({type:T,payload:e})},render:function(e){var t=e.handleSubmit,a=e.submitting;e.values;return Object(h.jsxs)("form",{onSubmit:t,className:c.form,noValidate:!0,children:[Object(h.jsx)(Oe,{}),Object(h.jsx)("div",{className:c.title,children:"Sign In"}),Object(h.jsxs)(oe.a,{container:!0,justify:"center",children:[Object(h.jsx)(oe.a,{item:!0,xs:12,className:c.field,children:Object(h.jsx)(se.a,{fullWidth:!0,required:!0,validate:ue,name:"username",component:ie.TextField,type:"text",label:Object(h.jsx)("span",{className:c.label,children:"Email"}),placeholder:"Your email address",InputLabelProps:{shrink:!0}})}),Object(h.jsxs)("div",{className:c.w100,children:[Object(h.jsx)(se.a,{fullWidth:!0,required:!0,validate:je,name:"password",placeholder:"********",component:ie.TextField,type:n?"text":"password",label:Object(h.jsx)("span",{className:c.label,children:"Password"}),InputLabelProps:{shrink:!0}}),Object(h.jsx)(u.a,{className:c.eyeBtn,"aria-label":"toggle password visibility",onClick:function(){return r(!n)},children:n?Object(h.jsx)(fe.a,{}):Object(h.jsx)(ve.a,{})})]}),Object(h.jsx)(le.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",className:c.button,children:o||a?Object(h.jsx)(de.a,{size:24,className:c.white}):"Login"})]})]})}}),Object(h.jsx)("div",{className:c.separator,children:"OR"}),Object(h.jsx)(pe,{}),Object(h.jsx)(oe.a,{container:!0,justify:"space-around",children:Object(h.jsxs)(oe.a,{item:!0,children:["I'm a new member. ",Object(h.jsx)(s.b,{className:c.link,to:{pathname:"/",state:{context:"register"}},children:"Sign Up"})]})})]})},we=n(227),Ne=Object(f.a)((function(e){return{form:{margin:20},title:{fontWeight:700,marginBottom:40,fontSize:24},field:{marginBottom:32},label:{fontWeight:700},button:{marginTop:20},link:{color:e.palette.primary.main,textDecoration:"none",fontWeight:600},separator:{display:"flex",justifyContent:"center",fontSize:"14px"},eyeBtn:{position:"absolute",right:"10px"},w100:{width:"100%"},white:{color:"#fff"}}}));var Se=function(){var e=Ne(),t=Object(a.useState)(!1),n=Object(ce.a)(t,2),r=n[0],c=n[1],i=Object(l.b)(),o=Object(l.c)((function(e){return e.auth})).loading;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(se.b,{onSubmit:function(e){o||i({type:I,payload:e})},render:function(t){var n=t.handleSubmit,a=t.submitting,i=t.values;return Object(h.jsxs)("form",{onSubmit:n,className:e.form,noValidate:!0,children:[Object(h.jsx)(Oe,{}),Object(h.jsx)("div",{className:e.title,children:"Sign Up"}),Object(h.jsxs)(oe.a,{container:!0,justify:"center",children:[Object(h.jsx)(oe.a,{item:!0,xs:12,className:e.field,children:Object(h.jsx)(se.a,{fullWidth:!0,required:!0,validate:ue,name:"username",component:ie.TextField,type:"text",label:Object(h.jsx)("span",{className:e.label,children:"Email"}),placeholder:"Your email address",InputLabelProps:{shrink:!0}})}),Object(h.jsx)(oe.a,{item:!0,xs:12,className:e.field,children:Object(h.jsxs)("div",{className:e.w100,children:[Object(h.jsx)(se.a,{fullWidth:!0,required:!0,validate:je,name:"password",placeholder:"********",component:ie.TextField,type:r?"text":"password",label:Object(h.jsx)("span",{className:e.label,children:"Password"}),InputLabelProps:{shrink:!0}}),Object(h.jsx)(u.a,{className:e.eyeBtn,"aria-label":"toggle password visibility",onClick:function(){return c(!r)},children:r?Object(h.jsx)(fe.a,{}):Object(h.jsx)(ve.a,{})})]})}),Object(h.jsx)(oe.a,{item:!0,xs:12,children:Object(h.jsx)(we.a,{label:Object(h.jsxs)("span",{children:["I agree to the ",Object(h.jsx)(s.b,{className:e.link,to:"",children:"Terms of Service"})]}),control:Object(h.jsx)(se.a,{name:"tnc",component:ie.Checkbox,type:"checkbox",color:"primary"})})}),Object(h.jsx)(le.a,{fullWidth:!0,type:"submit",disabled:!i.tnc,variant:"contained",color:"primary",className:e.button,children:o||a?Object(h.jsx)(de.a,{size:24,className:e.white}):"Sign Up"})]})]})}}),Object(h.jsx)("div",{className:e.separator,children:"OR"}),Object(h.jsx)(pe,{}),Object(h.jsx)(oe.a,{container:!0,justify:"space-around",children:Object(h.jsxs)(oe.a,{item:!0,children:["I'm already a member. ",Object(h.jsx)(s.b,{className:e.link,to:"/",children:"Sign In"})]})})]})};var Ce=function(){var e=Object(o.f)().state;return e&&"register"===e.context?Object(h.jsx)(Se,{}):Object(h.jsx)(ye,{})},ke=Object(f.a)((function(e){return{container:{margin:32}}}));var Ie=function(){var e=ke(),t=Object(o.e)(),n=Object(a.useCallback)((function(){t.push("/medi360/new-report")}),[t]);return Object(h.jsx)("div",{className:e.container,children:Object(h.jsx)(le.a,{color:"primary",variant:"contained",onClick:n,children:"+ New Report"})})},Ee=n(123),Re=n(124),Te=n(134),Fe=n(125),Le=n(127),_e=n.n(Le),Be=n(126),Ae=n.n(Be),De=n(132),Pe=n(128),Ue=n.n(Pe),We=Object(f.a)((function(){return{container:{display:"flex",justifyContent:"space-between",border:"1px solid #ccc",padding:8,borderRadius:8,marginBottom:20,alignItems:"center",flexBasis:"90%"},marginLeft:{marginLeft:16},stopCaptureIcon:{color:"#f00",fontSize:24},uploadPhoto:{display:"block",padding:"6px 8px"},hidden:{display:"none"},flexCol:{display:"flex",alignItems:"center",flexDirection:"column"},label:{fontWeight:700,fontSize:12,color:"rgba(0, 0, 0, 0.54)"},field:{display:"flex",justifyContent:"space-between",alignItems:"center"},removeIcon:{margin:"0 -8px 20px 8px",color:"#d66"}}}));var ze=function(e){var t=e.name,n=e.setFile,r=e.remove,c=We(),i=Object(a.useState)(!1),s=Object(ce.a)(i,2),o=s[0],l=s[1],d=Object(a.useState)(null),j=Object(ce.a)(d,2),u=j[0],b=j[1],p=Object(a.createRef)(),O=Object(a.useCallback)((function(e){b(e.webP),l(!1),n(new File([e.webP],"".concat(t,".png")))}),[n,l,b,t]),x=Object(a.useMemo)((function(){return{video:!0}}),[]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:c.field,children:[Object(h.jsxs)("div",{className:c.container,children:[Object(h.jsxs)("div",{className:c.flexCol,children:[Object(h.jsx)(m.a,{className:c.label,children:"Upload Report"}),Object(h.jsx)(se.a,{fullWidth:!0,required:!0,name:t,placeholder:"Upload Report",children:function(e){var t=e.input,a=(t.value,t.onChange),r=Object(Te.a)(t,["value","onChange"]),i=e.meta,s=e.placeholder;return Object(h.jsxs)("div",{className:i.active?"active":"",children:[Object(h.jsx)("label",{className:c.uploadPhoto,htmlFor:"upload-photo",children:Object(h.jsx)(Ae.a,{color:"primary"})}),Object(h.jsx)("input",Object($.a)(Object($.a)({},r),{},{id:"upload-photo",type:"file",placeholder:s,onChange:function(e){var t=e.target;a(t.files[0]),n(t.files[0]),b(URL.createObjectURL(t.files[0]))},className:c.hidden}))]})}})]}),Object(h.jsx)("div",{children:Object(h.jsx)(m.a,{className:c.label,children:"--OR--"})}),Object(h.jsxs)("div",{className:c.flexCol,children:[Object(h.jsx)(m.a,{className:c.label,children:"Take Snapshot"}),Object(h.jsx)("div",{children:o?Object(h.jsx)(le.a,{className:c.stopCaptureIcon,onClick:function(){l(!1),b(null)},children:Object(h.jsx)(De.a,{})}):Object(h.jsx)(le.a,{color:"primary",onClick:function(){l(!0),b(null)},children:Object(h.jsx)(_e.a,{})})})]})]}),Object(h.jsx)(Ue.a,{className:c.removeIcon,onClick:function(){r(),b(null)}})]}),o&&Object(h.jsx)(Fe.a,{onCapture:O,userMediaConfig:x,width:300}),u&&Object(h.jsx)("div",{children:Object(h.jsx)("img",{ref:p,alt:"img",src:u,width:300})})]})},Ge=n(129),Me=n.n(Ge),qe=Object(f.a)((function(){return{label:{fontWeight:700,fontSize:12,color:"rgba(0, 0, 0, 0.54)"}}}));var Ve=function(){var e=qe();return Object(h.jsx)(Re.a,{name:"reports",children:function(t){var n=t.fields;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:Object(h.jsxs)(m.a,{className:e.label,children:["Reports ",Object(h.jsx)(le.a,{disabled:!0,color:"primary",onClick:function(){return n.push({})},children:Object(h.jsx)(Me.a,{})})]})}),n.map((function(t,a){return Object(h.jsx)("div",{className:e.field,children:Object(h.jsx)(ze,{name:t,setFile:function(e){return n.value[a]=e},remove:function(){return n.value[a]=null}})},t)}))]})}})},He=n(130),Ze=n.n(He),Je="CREATE_REPORT",Xe="CREATE_REPORT_SUCCESS",Ye="CREATE_REPORT_FAIL";var $e=Object(f.a)((function(){return{container:{margin:16,width:"100%"},submitButton:{position:"fixed",bottom:0,padding:"12px 0",background:"#fff",display:"flex",justifyContent:"space-between",width:"calc(100% - 32px)"},btn:{flexBasis:"48%"},label:{fontWeight:700},field:{marginBottom:20},marginLeft:{marginLeft:16}}}));var Ke=function(){var e=$e(),t=Object(o.e)(),n=Object(l.b)(),a=function(){t.push("/medi360/reports")};return Object(h.jsx)("div",{className:e.container,children:Object(h.jsx)(se.b,{onSubmit:function(e){var t=new FormData;for(var a in e)"reports"===a?e[a].forEach((function(e,n){return t.append("report_".concat(n),e)})):t.append(a,e[a]);n({type:Je,payload:t})},mutators:Object($.a)({},Ee.a),keepDirtyOnReinitialize:!0,initialValues:{reports:[{}]},render:function(t){var n=t.handleSubmit;t.values;return Object(h.jsxs)("form",{onSubmit:n,encType:"multipart/form-data",noValidate:!0,children:[Object(h.jsxs)(oe.a,{container:!0,children:[Object(h.jsx)(oe.a,{item:!0,xs:12,className:e.field,children:Object(h.jsx)(se.a,{fullWidth:!0,required:!0,name:"title",component:ie.TextField,type:"text",label:Object(h.jsx)("span",{className:e.label,children:"Title"}),placeholder:"Corona Tests",InputLabelProps:{shrink:!0}})}),Object(h.jsx)(oe.a,{item:!0,xs:12,className:e.field,children:Object(h.jsx)(se.a,{fullWidth:!0,name:"summary",component:ie.TextField,type:"text",label:Object(h.jsx)("span",{className:e.label,children:"Summary"}),InputLabelProps:{shrink:!0}})})]}),Object(h.jsx)(Ve,{}),Object(h.jsxs)("div",{className:e.submitButton,children:[Object(h.jsx)(le.a,{onClick:a,className:e.btn,size:"large",variant:"contained",children:"Discard"}),Object(h.jsx)(le.a,{className:e.btn,size:"large",variant:"contained",color:"primary",type:"submit",startIcon:Object(h.jsx)(Ze.a,{}),children:"Save"})]})]})}})})},Qe=Object(f.a)((function(){return{container:{display:"flex",marginTop:64}}}));var et=function(){var e=Qe(),t=Object(l.c)((function(e){return e.auth})).loggedIn;return Object(h.jsx)("div",{children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(Y.a,{theme:X,children:[t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)("div",{className:e.container,children:[Object(h.jsx)(V,{}),Object(h.jsx)(o.a,{path:"/",exact:!0,component:H}),Object(h.jsx)(o.a,{path:"/account",exact:!0,component:Z}),Object(h.jsx)(o.a,{path:"/reports",exact:!0,component:Ie}),Object(h.jsx)(o.a,{path:"/new-report",exact:!0,component:Ke})]})]}):Object(h.jsx)(Ce,{}),Object(h.jsx)(re,{})]})})})},tt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},nt=n(42),at=n(133),rt={expanded:!1};var ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object.assign({},e,{expanded:!e.expanded});default:return e}},it={message:"",timeout:null,severity:""};var st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object.assign({},e,Object($.a)({},t.payload));case te:return it;default:return e}},ot={loading:!1,loggedIn:!1,userDetails:null};var lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object.assign({},e,{loading:!0,userDetails:null});case E:return Object.assign({},e,{loading:!1,loggedIn:!0,userDetails:t.data});case R:return Object.assign({},e,{loading:!1,loggedIn:!1});case T:return Object.assign({},e,{loading:!0,userDetails:null});case F:return Object.assign({},e,{loading:!1,loggedIn:!0,userDetails:t.data});case L:return Object.assign({},e,{loading:!1,loggedIn:!1});case _:return Object.assign({},e,{loggedIn:!1,userDetails:null});default:return e}},dt=Object(nt.c)({sidebar:ct,notifications:st,auth:lt}),jt=n(25),ut=n.n(jt),bt=n(18),pt=n(83),mt=n.n(pt);var Ot=ut.a.mark(gt),xt=ut.a.mark(yt),ft=ut.a.mark(wt),ht="https://api.backendless.com/84171686-6F45-01B0-FFBC-D588F51A6500/4DF9D9C0-E2F9-4EE2-A3A4-A896B3897C7F",vt=mt.a;function gt(e){var t,n,a,r,c;return ut.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,i.prev=1,n="".concat(ht,"/services/login/putlogin"),i.next=5,Object(bt.b)(vt.post,n,t);case 5:return a=i.sent,i.next=8,Object(bt.c)({type:E,data:a.data});case 8:i.next=16;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(bt.c)({type:R,error:i.t0});case 14:return i.next=16,Object(bt.c)({type:ee,payload:{message:(null===i.t0||void 0===i.t0||null===(r=i.t0.response)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.message)||(null===i.t0||void 0===i.t0?void 0:i.t0.message)||"System Error: Please try after sometime",severity:"error",timeout:4e3}});case 16:case"end":return i.stop()}}),Ot,null,[[1,10]])}function yt(e){var t,n,a,r,c;return ut.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,i.prev=1,n="".concat(ht,"/services/Loginvalidation/validlogin"),i.next=5,Object(bt.b)(vt.post,n,t);case 5:return a=i.sent,i.next=8,Object(bt.c)({type:F,data:a.data});case 8:i.next=16;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(bt.c)({type:L,error:i.t0});case 14:return i.next=16,Object(bt.c)({type:ee,payload:{message:(null===i.t0||void 0===i.t0||null===(r=i.t0.response)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.message)||(null===i.t0||void 0===i.t0?void 0:i.t0.message)||"System Error: Please try after sometime",severity:"error",timeout:4e3}});case 16:case"end":return i.stop()}}),xt,null,[[1,10]])}function wt(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(bt.a)([Object(bt.d)(I,gt),Object(bt.d)(T,yt)]);case 2:case"end":return e.stop()}}),ft)}var Nt=ut.a.mark(Ct),St=ut.a.mark(kt);function Ct(e){var t,n,a;return ut.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n={headers:{"content-type":"multipart/form-data"}},r.prev=2,"/reports/create",r.next=6,Object(bt.b)(mt.a.post,"/reports/create",t,n);case 6:return a=r.sent,r.next=9,Object(bt.c)({type:Xe,data:a.data});case 9:r.next=17;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(bt.c)({type:Ye,error:r.t0});case 15:return r.next=17,Object(bt.c)({type:ee,payload:{message:r.t0.message,severity:"error",timeout:5e3}});case 17:case"end":return r.stop()}}),Nt,null,[[2,11]])}function kt(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(bt.a)([Object(bt.d)(Je,Ct)]);case 2:case"end":return e.stop()}}),St)}var It=ut.a.mark(Et);function Et(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(bt.a)([wt(),kt()]);case 2:case"end":return e.stop()}}),It)}var Rt=function(){var e=Object(at.a)(),t=[e],n=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||nt.d)(nt.a.apply(void 0,t)),a=Object(nt.e)(dt,n);return e.run(Et),a}();i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(l.a,{store:Rt,children:Object(h.jsx)(et,{})})}),document.getElementById("root")),tt()}},[[174,1,2]]]);
//# sourceMappingURL=main.758f25c8.chunk.js.map