(this["webpackJsonpgo-game"]=this["webpackJsonpgo-game"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){e.exports=a(47)},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),l=a.n(s),c=(a(35),a(12)),o=a.n(c),i=a(15),u=a(4),m=a(5),d=a(7),p=a(6),h=a(29),f=a(26),g=a.n(f),b=a(1),v=new function e(){Object(u.a)(this,e),Object(b.g)(this,{loading:!0,isloggedIn:!1,username:"",win:0,lose:0})},E=(a(24),a(14)),y=a(2),w=(a(37),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("h2",{id:"welcomeText"},"Go Game"),r.a.createElement("a",{href:"/login",className:"niceButton"},"Login/Register"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"/findGameAsGuest",className:"niceButton"},"Find Game As Guest"),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),a}(n.Component)),j=(a(38),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row",id:"Body"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("h2",null,"Home")))}}]),a}(n.Component)),k=a(27),O=a(11),N=(a(39),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={username:"",password:"",redirect:!1,register:!1},e.handleLogin=e.login.bind(Object(O.a)(e)),e.onChange=e.onChange.bind(Object(O.a)(e)),e.handleRegister=e.register.bind(Object(O.a)(e)),e}return Object(m.a)(a,[{key:"login",value:function(){var e=this.alphaNumCheck(document.getElementById("username").value),t=this.alphaNumCheck(document.getElementById("password").value);console.log(e),e&&t&&this.setState({redirect:!0})}},{key:"resetForm",value:function(){this.setState({username:"",password:"",redirect:!1,register:!1})}},{key:"doLogin",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.getElementById("username").value){e.next=2;break}return e.abrupt("return");case 2:if(document.getElementById("password").value){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch("/login/isLogin",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:document.getElementById("username").value,password:document.getElementById("password").value})});case 7:return t=e.sent,e.next=10,t.json();case 10:(a=e.sent)&&a.success?(v.isloggedIn=!0,v.username=a.username,v.win=a.win,v.lose=a.lose,this.setState({redirect:!0})):a&&!1===a.success&&(this.resetForm(),alert(a.msg)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(),this.resetForm();case 18:case"end":return e.stop()}}),e,this,[[4,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"register",value:function(){this.setState({register:!0})}},{key:"onChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"alphaNumCheck",value:function(e){return!(null==e||!e.match(/^[a-z0-9]+$/i))}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(y.a,{to:"/profile"}):this.state.register?r.a.createElement(y.a,{to:"/signup"}):r.a.createElement("div",{className:"row",id:"Body"},r.a.createElement("div",{className:"medium-5 columns left"},r.a.createElement("h4",null,"Login"),r.a.createElement("label",null,"Username"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"username",name:"username",placeholder:"Username",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"button",value:"Submit",onClick:function(){return e.doLogin()}}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{type:"button",value:"Register",onClick:this.handleRegister})))}}]),a}(n.Component)),C=(a(44),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={fields:{},errors:{},redirectToReferrer:!1},e.handleChange=e.handleChange.bind(Object(O.a)(e)),e}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=this.state.fields;t[e.target.name]=e.target.value,this.setState({fields:t})}},{key:"validateForm",value:function(){var e=this.state.fields,t={},a=!0;return e.username||(a=!1,t.username="*Please enter your username."),"undefined"!==typeof e.username&&(e.username.match(/^[a-zA-Z ]*$/)||(a=!1,t.username="*Please enter alphabet characters only.")),e.password||(a=!1,t.password="*Please enter your password."),"undefined"!==typeof e.password&&(e.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)||(a=!1,t.password="*Please enter secure and strong password.\n          At least 8 characters,\n 1 special symbol from @#$%&,\n 1 capital letter, 1 small letter, 1 number")),this.setState({errors:t}),a}},{key:"resetForm",value:function(){var e={username:"",password:""};this.setState({fields:e})}},{key:"doRegister",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.fields.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.fields.password){e.next=4;break}return e.abrupt("return");case 4:if(e.prev=4,!this.validateForm()){e.next=13;break}return e.next=8,fetch("/signup/registered",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.fields.username,password:this.state.fields.password,win:0,lose:0})});case 8:return t=e.sent,e.next=11,t.json();case 11:(a=e.sent)&&a.success?(this.resetForm(),alert("Successfully registered")):a&&!1===a.success&&(this.resetForm(),alert(a.msg));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),this.resetForm();case 18:case"end":return e.stop()}}),e,this,[[4,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row",id:"main-registration-container"},r.a.createElement("div",{className:"medium-5 columns left",id:"register"},r.a.createElement("h4",null,"Registration"),r.a.createElement("label",null,"Username "),r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.fields.username,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("div",{style:{fontSize:12,color:"red"},className:"errorMsg"},this.state.errors.username),r.a.createElement("label",null,"Password "),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:this.state.fields.password,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("div",{style:{fontSize:12,color:"red"},className:"errorMsg"},this.state.errors.password),r.a.createElement("input",{type:"submit",className:"button",value:"Register",onClick:function(){return e.doRegister()}}),r.a.createElement("br",null),r.a.createElement("a",{style:{fontSize:12},href:"/",className:"button"},"Home"),r.a.createElement("br",null)))}}]),a}(n.Component)),x=(a(45),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("h2",{id:"findGameAsGuestText"},"Find Game As Guest")))}}]),a}(n.Component)),S=(a(46),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).profilePictureRef=r.a.createRef(),n.state={Stats:[{Win:0,Lose:0}],logout:!1},n.doLogout=n.doLogout.bind(Object(O.a)(n)),n}return Object(m.a)(a,[{key:"renderTableData",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,v.win),r.a.createElement("td",null,v.lose))}},{key:"renderTableHeader",value:function(){return Object.keys(this.state.Stats[0]).map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())}))}},{key:"doLogout",value:function(){this.setState({logout:!0})}},{key:"render",value:function(){this.setState.redirect;return this.state.logout?r.a.createElement(y.a,{to:"/login"}):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("h2",{id:"welcomeText"},"Profile: ",v.username),r.a.createElement("img",{src:"pfp.png",alt:"PFP place holder"}),r.a.createElement("table",{id:"Stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.renderTableHeader()),this.renderTableData())),r.a.createElement("input",{type:"submit",className:"button",value:"logout",onClick:this.doLogout})))}}]),a}(n.Component)),G=function(){return r.a.createElement(E.a,null,r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/",component:w}),r.a.createElement(y.b,{path:"/home",component:j}),r.a.createElement(y.b,{path:"/login",component:N}),r.a.createElement(y.b,{path:"/signup",component:C}),r.a.createElement(y.b,{path:"/findGameAsGuest",component:x}),r.a.createElement(y.b,{pate:"/profile",component:S})))},A=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={appName:"GO Game",home:!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/login/isloggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success?(v.loading=!1,v.isloggedIn=!0,v.username=a.username):(v.loading=!1,v.isloggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),v.loading=!1,v.isloggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"off-canvas-wrapper"},r.a.createElement("div",{className:"off-canvas-wrapper-inner","data-off-canvas-wrapper":!0},r.a.createElement("div",{className:"off-canvas-content","data-off-canvas-content":!0},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),r.a.createElement(G,{name:this.state.appName}),r.a.createElement("br",null),r.a.createElement("a",{className:"myButton",href:"https://en.wikipedia.org/wiki/Go_(game)",target:"_blank",rel:"noopener noreferrer"},"Read About GO"))))))}}]),a}(n.Component),B=Object(h.a)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.0e2dcc07.chunk.js.map