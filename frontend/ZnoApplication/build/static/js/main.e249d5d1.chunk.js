(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,a,t){e.exports=t(375)},222:function(e,a,t){},374:function(e,a,t){},375:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(18),o=t.n(r),s=(t(222),t(22)),l=function(e){return!!e},c=t(26),m=t(27),u=t(29),d=t(28),p=t(36),h=t(30),g=t(6),b=t.n(g),f=t(21),w=t(19),E=t(8),v=t(147),k=t.n(v),C=t(149),y=t.n(C),O=t(150),S=t.n(O),j=t(146),x=t.n(j),N=t(144),P=t.n(N),U={default:"/",home:"/home",about:"/about",signin:"/signin",signup:"/signup"},T=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={open:!1},t.handleDrawerOpen=t.handleDrawerOpen.bind(Object(p.a)(t)),t.handleDrawerClose=t.handleDrawerClose.bind(Object(p.a)(t)),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"handleDrawerOpen",value:function(){this.setState({open:!0})}},{key:"handleDrawerClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.location.pathname,a=this.props,t=a.classes,n=a.theme,r=this.state.open,o=[{text:"Home",link:U.home,iconComponent:i.a.createElement(P.a,{className:t.icon})},{text:"About",link:U.about,iconComponent:i.a.createElement(x.a,{className:t.icon})}];return i.a.createElement("div",{className:t.root},i.a.createElement(E.a,{position:"static"},i.a.createElement(E.r,null,i.a.createElement(E.j,{onClick:this.handleDrawerOpen,className:b()(t.menuButton,r&&t.hide),color:"inherit","aria-label":"Menu"},i.a.createElement(k.a,null)),i.a.createElement(E.s,{variant:"h6",className:t.grow,color:"inherit"},i.a.createElement(E.k,{to:U.default,component:f.b,underline:"none",color:"inherit"},"ZNO")),i.a.createElement(E.c,{color:"inherit"},i.a.createElement(E.k,{to:U.signin,component:f.b,underline:"none",color:"inherit"},"Sign in / Sing up")))),i.a.createElement(E.h,{className:t.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:t.drawerPaper}},i.a.createElement("div",{className:t.drawerHeader},i.a.createElement(E.s,{variant:"h6",color:"inherit",className:t.grow},"ZNO"),i.a.createElement(E.j,{onClick:this.handleDrawerClose},"ltr"===n.direction?i.a.createElement(y.a,null):i.a.createElement(S.a,null))),i.a.createElement(E.g,null),i.a.createElement(E.l,null,o.map(function(a,n){return i.a.createElement(E.k,{underline:"none",className:t.link,key:a.text,component:f.b,to:a.link},i.a.createElement(E.m,{button:!0,selected:a.link===e||e===U.default&&a.link===U.home},i.a.createElement(E.n,null,a.iconComponent),i.a.createElement(E.o,{primary:a.text})))}))))}}]),a}(n.Component),R=Object(s.f)(Object(w.withStyles)(function(e){return{root:{flexGrow:1,position:"static"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},label:{textTransform:"capitalize"},hide:{display:"none"},drawer:{width:250,flexShrink:0},drawerPaper:{width:250},drawerHeader:{display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"flex-end"},link:{textDecoration:"none",fontWeight:"bold"},currentLink:{border:"1px solid gray"},icon:{}}},{withTheme:!0})(T)),q=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:{border:"1px solid black"}},"HOME")}}]),a}(n.Component),D=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:{border:"1px solid red"}},"About")}}]),a}(n.Component),V=t(65),B=t(20),W=t(66),L=t.n(W),M=t(152),A=t.n(M),z=t(5),H=t.n(z),F=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){var a=t.state.signupUser;a[e.target.name]=e.target.value,t.setState({signupUser:a,loading:!1}),t.shouldBlockNavigation=""!==a.phone||""!==a.password},t.handleCloseSnackbar=function(){return t.setState({signupUser:t.state.signupUser,loading:t.state.loading,isErrorShowing:!1})},t.state={signupUser:{phone:"",password:"",confirmPassword:"",email:""},loading:!1,isErrorShowing:!0},t.shouldBlockNavigation=!1,t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),B.ValidatorForm.addValidationRule("isPasswordMatch",function(e){return e===t.state.signupUser.password}),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"handleSubmit",value:function(){var e=this;console.log("Submit"),console.log(this.state.signupUser),this.setState({signupUser:this.state.signupUser,loading:!0}),fetch("").then(function(a){e.setState({signupUser:e.state.signupUser,loading:!1})}).catch(function(a){console.error(a),e.setState({signupUser:e.state.signupUser,loading:!1})})}},{key:"render",value:function(){var e=this.props.classes,a=this.state.signupUser;return i.a.createElement("main",{className:e.main},i.a.createElement(E.f,null),i.a.createElement(s.a,{when:this.shouldBlockNavigation,message:"You have unsaved changes, are you sure you want to leave?"}),i.a.createElement(E.p,{className:e.paper},i.a.createElement(E.b,{className:e.avatar},i.a.createElement(L.a,null)),i.a.createElement(E.s,{component:"h1",variant:"h5"},"Sign up"),i.a.createElement(B.ValidatorForm,{onSubmit:this.handleSubmit,className:e.form},i.a.createElement(B.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Phone",name:"phone",autoComplete:"tel",onChange:this.handleChange,value:a.phone,validators:["required","matchRegexp:^\\+?(38)?(0\\d{9})$"],errorMessages:["Phone is required","Phone must be like 0123456789 or +380123456789"]}),i.a.createElement(B.TextValidator,{margin:"normal",autoComplete:"new-password",required:!0,fullWidth:!0,label:"Password",name:"password",type:"password",onChange:this.handleChange,value:a.password,validators:["required"],errorMessages:["Password is required"]}),i.a.createElement(B.TextValidator,{margin:"normal",autoComplete:"new-password",required:!0,fullWidth:!0,label:"Confirm Password",name:"confirmPassword",type:"password",onChange:this.handleChange,value:a.confirmPassword,validators:["isPasswordMatch","required"],errorMessages:["Password mismatch","This field is required"]}),i.a.createElement(B.TextValidator,{margin:"normal",autoComplete:"email",fullWidth:!0,label:"Email",name:"email",validators:["isEmail"],errorMessages:["Email is not valid"],value:a.email,onChange:this.handleChange}),i.a.createElement(E.c,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:this.state.loading,className:e.submit},"Sign Up"),this.state.loading&&i.a.createElement(E.e,{size:24,className:e.buttonProgress})),i.a.createElement(E.k,{className:e.link,color:"secondary",component:f.b,to:U.signin},"Sign in")),i.a.createElement(E.q,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.isErrorShowing,autoHideDuration:6e3,onClose:this.handleCloseSnackbar,ContentProps:{"aria-describedby":"message-id"},message:i.a.createElement("span",{id:"message-id"},"Note archived"),action:[i.a.createElement(E.j,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleCloseSnackbar},i.a.createElement(A.a,null))]}))}}]),a}(n.Component),I=H()(function(e){return{main:Object(V.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:-2*e.spacing.unit},submit:{marginTop:3*e.spacing.unit},link:{cursor:"pointer"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})(F),Z=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).handleSubmit=function(){console.log("Submit");var e={login:t.state.signinUser.login,password:t.state.signinUser.password},a=JSON.stringify(e),n=new Headers;n.append("Content-Type","application/json"),n.append("Access-Control-Allow-Origin","*");var i={method:"POST",body:a,mode:"cors",cache:"default",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}};console.log({requestSettings:i}),t.setState({signinUser:t.state.signinUser,loading:!0}),fetch("http://104.248.135.234:8080/api/v1/account/Login",i).then(function(e){console.log({resp:e})}).catch(function(e){console.log("ERRRRORRRRRR"),console.log({err:e}),t.setState({signinUser:t.state.signinUser,loading:!1})})},t.handleChange=function(e){var a=t.state.signinUser;a[e.target.name]="checkbox"===e.target.type?e.target.checked:e.target.value.trim(),t.setState({signinUser:t.state.signinUser,loading:t.state.loading}),t.shouldBlockNavigation=""!==a.login||""!==a.password,console.log(t.shouldBlockNavigation)},t.state={signinUser:{login:"admin@domain.com",password:"QwertY123@",remember:!0},loading:!1},t.shouldBlockNavigation=!1,B.ValidatorForm.addValidationRule("isPhoneOrEmail",function(e){var a=String(e).toLowerCase();return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||/^\+?(38)?(0\d{9})$/.test(a)}),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.signinUser;return i.a.createElement("main",{className:e.main},i.a.createElement(E.f,null),i.a.createElement(s.a,{when:this.shouldBlockNavigation,message:"You have unsaved changes, are you sure you want to leave?"}),i.a.createElement(E.p,{className:e.paper},i.a.createElement(E.b,{className:e.avatar},i.a.createElement(L.a,null)),i.a.createElement(E.s,{component:"h1",variant:"h5"},"Sign in"),i.a.createElement(B.ValidatorForm,{onSubmit:this.handleSubmit,className:e.form},i.a.createElement(B.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Email/Phone",name:"login",autoComplete:"tel email",onChange:this.handleChange,value:a.login,validators:["required","isPhoneOrEmail"],errorMessages:["Field is required","This should be Email or Phone"]}),i.a.createElement(B.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Password",name:"password",type:"password",autoComplete:"current-password",onChange:this.handleChange,value:a.password,validators:["required"],errorMessages:["Password is required"]}),i.a.createElement(E.i,{control:i.a.createElement(E.d,{checked:a.remember,name:"remember",onChange:this.handleChange,color:"primary"}),label:"Remember me"}),i.a.createElement(E.c,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:this.state.loading,className:e.submit},"Sign in"),this.state.loading&&i.a.createElement(E.e,{size:24,className:e.buttonProgress})),i.a.createElement(E.k,{className:e.link,color:"secondary",component:f.b,to:U.signup},"Sign up")))}}]),a}(n.Component),$=H()(function(e){return{main:Object(V.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},link:{cursor:"pointer"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})(Z);t(374);var J=function(){return i.a.createElement("div",null,i.a.createElement(R,null),i.a.createElement(s.d,null,i.a.createElement(s.b,{exact:!0,path:U.default,component:q}),i.a.createElement(s.b,{path:U.home,component:q}),i.a.createElement(s.b,{path:U.about,component:D}),!l(null)&&i.a.createElement(s.b,{path:U.signin,component:$}),!l(null)&&i.a.createElement(s.b,{path:U.signup,component:I}),i.a.createElement(s.b,{component:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(f.a,null," ",i.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[217,1,2]]]);
//# sourceMappingURL=main.e249d5d1.chunk.js.map