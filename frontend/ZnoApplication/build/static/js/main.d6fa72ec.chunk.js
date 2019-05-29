(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,a,n){e.exports=n(370)},221:function(e,a,n){},369:function(e,a,n){},370:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(18),o=n.n(i),l=(n(221),n(22)),s=function(e){return!!e},c=n(26),m=n(27),u=n(29),d=n(28),p=n(35),h=n(30),g=n(6),b=n.n(g),f=n(21),w=n(19),E=n(9),v=n(143),k=n.n(v),y=n(145),C=n.n(y),O=n(146),j=n.n(O),x=n(142),N=n.n(x),S=n(140),P=n.n(S),q={default:"/",home:"/home",about:"/about",signin:"/signin",signup:"/signup"},T=function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={open:!1},n.handleDrawerOpen=n.handleDrawerOpen.bind(Object(p.a)(n)),n.handleDrawerClose=n.handleDrawerClose.bind(Object(p.a)(n)),n}return Object(h.a)(a,e),Object(m.a)(a,[{key:"handleDrawerOpen",value:function(){this.setState({open:!0})}},{key:"handleDrawerClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.location.pathname,a=this.props,n=a.classes,t=a.theme,i=this.state.open,o=[{text:"Home",link:q.home,iconComponent:r.a.createElement(P.a,{className:n.icon})},{text:"About",link:q.about,iconComponent:r.a.createElement(N.a,{className:n.icon})}];return r.a.createElement("div",{className:n.root},r.a.createElement(E.a,{position:"static"},r.a.createElement(E.p,null,r.a.createElement(E.i,{onClick:this.handleDrawerOpen,className:b()(n.menuButton,i&&n.hide),color:"inherit","aria-label":"Menu"},r.a.createElement(k.a,null)),r.a.createElement(E.q,{variant:"h6",className:n.grow,color:"inherit"},r.a.createElement(E.j,{to:q.default,component:f.b,underline:"none",color:"inherit"},"ZNO")),r.a.createElement(E.c,{color:"inherit"},r.a.createElement(E.j,{to:q.signin,component:f.b,underline:"none",color:"inherit"},"Sign in / Sing up")))),r.a.createElement(E.g,{className:n.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement(E.q,{variant:"h6",color:"inherit",className:n.grow},"ZNO"),r.a.createElement(E.i,{onClick:this.handleDrawerClose},"ltr"===t.direction?r.a.createElement(C.a,null):r.a.createElement(j.a,null))),r.a.createElement(E.f,null),r.a.createElement(E.k,null,o.map(function(a,t){return r.a.createElement(E.j,{underline:"none",className:n.link,key:a.text,component:f.b,to:a.link},r.a.createElement(E.l,{button:!0,selected:a.link===e||e===q.default&&a.link===q.home},r.a.createElement(E.m,null,a.iconComponent),r.a.createElement(E.n,{primary:a.text})))}))))}}]),a}(t.Component),V=Object(l.f)(Object(w.withStyles)(function(e){return{root:{flexGrow:1,position:"static"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},label:{textTransform:"capitalize"},hide:{display:"none"},drawer:{width:250,flexShrink:0},drawerPaper:{width:250},drawerHeader:{display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"flex-end"},link:{textDecoration:"none",fontWeight:"bold"},currentLink:{border:"1px solid gray"},icon:{}}},{withTheme:!0})(T)),B=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{border:"1px solid black"}},"HOME")}}]),a}(t.Component),D=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{border:"1px solid red"}},"About")}}]),a}(t.Component),U=n(63),W=n(20),M=n(64),R=n.n(M),L=n(5),F=n.n(L),A=function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(u.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){var a=n.state.signupUser;a[e.target.name]=e.target.value,n.setState({signupUser:a}),n.shouldBlockNavigation=""!==a.phone||""!==a.password},n.state={signupUser:{phone:"",password:"",confirmPassword:"",email:""}},n.shouldBlockNavigation=!1,n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),W.ValidatorForm.addValidationRule("isPasswordMatch",function(e){return e===n.state.signupUser.password}),n}return Object(h.a)(a,e),Object(m.a)(a,[{key:"handleSubmit",value:function(){console.log("Submit"),console.log(this.state.signupUser)}},{key:"render",value:function(){var e=this.props.classes,a=this.state.signupUser;return r.a.createElement("main",{className:e.main},r.a.createElement(E.e,null),r.a.createElement(l.a,{when:this.shouldBlockNavigation,message:"You have unsaved changes, are you sure you want to leave?"}),r.a.createElement(E.o,{className:e.paper},r.a.createElement(E.b,{className:e.avatar},r.a.createElement(R.a,null)),r.a.createElement(E.q,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement(W.ValidatorForm,{onSubmit:this.handleSubmit,className:e.form},r.a.createElement(W.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Phone",name:"phone",autoComplete:"tel",onChange:this.handleChange,value:a.phone,validators:["required","matchRegexp:^\\+?(38)?(0\\d{9})$"],errorMessages:["Phone is required","Phone must be like 0123456789 or +380123456789"]}),r.a.createElement(W.TextValidator,{margin:"normal",autoComplete:"new-password",required:!0,fullWidth:!0,label:"Password",name:"password",type:"password",onChange:this.handleChange,value:a.password,validators:["required"],errorMessages:["Password is required"]}),r.a.createElement(W.TextValidator,{margin:"normal",autoComplete:"new-password",required:!0,fullWidth:!0,label:"Confirm Password",name:"confirmPassword",type:"password",onChange:this.handleChange,value:a.confirmPassword,validators:["isPasswordMatch","required"],errorMessages:["Password mismatch","This field is required"]}),r.a.createElement(W.TextValidator,{margin:"normal",autoComplete:"email",fullWidth:!0,label:"Email",name:"email",validators:["isEmail"],errorMessages:["Email is not valid"],value:a.email,onChange:this.handleChange}),r.a.createElement(E.c,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up")),r.a.createElement(E.j,{className:e.link,color:"secondary",component:f.b,to:q.signin},"Sign in")))}}]),a}(t.Component),H=F()(function(e){return{main:Object(U.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:-2*e.spacing.unit},submit:{marginTop:3*e.spacing.unit},link:{cursor:"pointer"}}})(A),I=function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(u.a)(this,Object(d.a)(a).call(this,e))).handleSubmit=function(){console.log("Submit"),console.log(n.state)},n.handleChange=function(e){var a=n.state.signinUser;a[e.target.name]="checkbox"===e.target.type?e.target.checked:e.target.value.trim(),n.setState({signinUser:a}),n.shouldBlockNavigation=""!==a.login||""!==a.password,console.log(n.shouldBlockNavigation)},n.state={signinUser:{login:"",password:"",remember:!0}},n.shouldBlockNavigation=!1,W.ValidatorForm.addValidationRule("isPhoneOrEmail",function(e){var a=String(e).toLowerCase();return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||/^\+?(38)?(0\d{9})$/.test(a)}),n}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.signinUser;return r.a.createElement("main",{className:e.main},r.a.createElement(E.e,null),r.a.createElement(l.a,{when:this.shouldBlockNavigation,message:"You have unsaved changes, are you sure you want to leave?"}),r.a.createElement(E.o,{className:e.paper},r.a.createElement(E.b,{className:e.avatar},r.a.createElement(R.a,null)),r.a.createElement(E.q,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(W.ValidatorForm,{onSubmit:this.handleSubmit,className:e.form},r.a.createElement(W.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Email/Phone",name:"login",autoComplete:"tel email",onChange:this.handleChange,value:a.login,validators:["required","isPhoneOrEmail"],errorMessages:["Field is required","This should be Email or Phone"]}),r.a.createElement(W.TextValidator,{margin:"normal",required:!0,fullWidth:!0,label:"Password",name:"password",type:"password",autoComplete:"current-password",onChange:this.handleChange,value:a.password,validators:["required"],errorMessages:["Password is required"]}),r.a.createElement(E.h,{control:r.a.createElement(E.d,{checked:a.remember,name:"remember",onChange:this.handleChange,color:"primary"}),label:"Remember me"}),r.a.createElement(E.c,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign in")),r.a.createElement(E.j,{className:e.link,color:"secondary",component:f.b,to:q.signup},"Sign up")))}}]),a}(t.Component),Z=F()(function(e){return{main:Object(U.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},link:{cursor:"pointer"}}})(I);n(369);var $=function(){return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:q.default,component:B}),r.a.createElement(l.b,{path:q.home,component:B}),r.a.createElement(l.b,{path:q.about,component:D}),!s(null)&&r.a.createElement(l.b,{path:q.signin,component:Z}),!s(null)&&r.a.createElement(l.b,{path:q.signup,component:H}),r.a.createElement(l.b,{component:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f.a,null," ",r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[216,1,2]]]);
//# sourceMappingURL=main.d6fa72ec.chunk.js.map