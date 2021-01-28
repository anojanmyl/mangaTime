(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},71:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(24),r=a.n(i),o=a(8),l=a(4),h=a(5),u=a(7),j=a(6),d=a(15),b=a.n(d),m=b.a.create({baseURL:"https://manga-time.herokuapp.com",withCredentials:!0});function p(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var g=function(e){return m.post("/api/auth/signup",e).then((function(e){return e.data})).catch(p)},f=function(e){return m.post("/api/auth/signin",e).then((function(e){return e.data})).catch(p)},O=function(){return m.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(p)},x=function(){return m.get("/api/auth/logout").then((function(e){return e.data})).catch(p)},v=function(e){return m.patch("/api/users/me/manga",{mangas:e}).then((function(e){return e.data})).catch(p)},N=function(e){return m.patch("/api/users/manga",e).then((function(e){return e.data})).catch(p)},k=function(e){return m.patch("/api/users/dashboard",{mangaId:e}).then((function(e){return e.data})).catch(p)},y=function(e){return m.get("/api/users/dashboard",{mangaId:e}).then((function(e){return e.data})).catch(p)},C=c.a.createContext(),_=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(n.jsx)(C.Provider,{value:e,children:this.props.children})}}]),a}(s.Component),w=a(3),S=a(18),L=function(e){return function(t){return Object(n.jsx)(C.Consumer,{children:function(a){return Object(n.jsx)(e,Object(S.a)(Object(S.a)({},t),{},{context:a}))}})}},M=a(23),R=a.n(M),I=a(41),A=a.n(I),T=a(43),D=a.n(T),F=a(42),U=a.n(F),B=a(45),H=a.n(B),E=a(44),P=a.n(E),J=(a(71),L((function(e){var t=e.context;return Object(n.jsxs)("nav",{className:"nav",children:[Object(n.jsxs)(o.c,{exact:!0,to:"/search",className:"nav__link",activeClassName:"nav__link--active",children:[Object(n.jsx)(R.a,{className:"nav__icon"}),Object(n.jsx)("span",{className:"nav__text",children:"Search"})]}),Object(n.jsxs)(o.c,{exact:!0,to:"/",className:"nav__link",activeclassname:"nav__link--active",children:[Object(n.jsx)(A.a,{className:"nav__icon"}),Object(n.jsx)("span",{className:"nav__text",children:"Home"})]}),t.isLoggedIn&&Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)(o.c,{exact:!0,to:"/profile",className:"nav__link",activeclassname:"nav__link--active",children:[Object(n.jsx)(U.a,{className:"nav__icon"}),Object(n.jsx)("span",{className:"nav__text",children:"Profile"})]}),Object(n.jsxs)("p",{onClick:function(){x().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},className:"nav__link",activeclassname:"nav__link--active",children:[Object(n.jsx)(D.a,{className:"nav__icon"}),Object(n.jsx)("span",{className:"nav__text",children:"Logout"})]})]}),!t.isLoggedIn&&Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)(o.c,{to:"/signin",className:"nav__link",activeclassname:"nav__link--active",children:[Object(n.jsx)(P.a,{className:"nav__icon"}),Object(n.jsx)("span",{className:"nav__text",children:"Signin"})]}),Object(n.jsxs)(o.c,{to:"/signup",className:"nav__link",activeclassname:"nav__link--active",children:[Object(n.jsx)(H.a,{className:"nav__icon"}),Object(n.jsx)("span",{className:"nav__text",children:"Signup"})]})]})]})}))),W=(a(78),a(38),a(39),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={infos:[],value:""},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://kitsu.io/api/edge/manga?filter[text]=".concat(this.state.value)).then((function(t){e.setState({infos:t.data.data})}))}},{key:"render",value:function(){var e=this,t=this.state.infos.filter((function(t){return e.props.id===t.id||e.props.match.params.id===t.id}));return Object(n.jsx)("div",{children:0!==t.length&&Object(n.jsxs)("div",{className:"one-manga",children:[Object(n.jsx)("img",{className:"img-manga",src:t[0].attributes.posterImage.tiny,alt:t[0].attributes.canonicalTitle}),Object(n.jsx)("h1",{children:t[0].attributes.canonicalTitle}),Object(n.jsxs)("p",{children:["Rank: ",t[0].attributes.popularityRank]}),Object(n.jsxs)("p",{children:["Rating: ",t[0].attributes.averageRating]}),Object(n.jsxs)("p",{children:["Description: ",t[0].attributes.description]})]})})}}]),a}(s.Component)),Y=Object(w.g)(W),q=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleClickBtn=function(e){N(e).then((function(e){console.log("searchData:",e)})).catch((function(e){console.log(e)}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return console.log("search",this.props.info.id),Object(n.jsx)(c.a.Fragment,{children:this.props.show&&Object(n.jsxs)("div",{className:"modal scrollbox",children:[Object(n.jsx)(Y,{id:this.props.info.id}),Object(n.jsx)("button",{onClick:this.props.onHide,children:"Close"}),Object(n.jsx)("button",{className:"btn-add",onClick:function(){return e.handleClickBtn(e.props.info)},children:"Add this manga"})]})})}}]),a}(s.Component),z=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={value:"",results:[],infos:[],showModal:!1,info:"",isLoading:!1},e.handleChange=function(t){e.setState({value:t.target.value,isLoading:!0})},e.handleSubmit=function(t){t.preventDefault(),b.a.get("https://kitsu.io/api/edge/manga?filter[text]=".concat(e.state.value)).then((function(t){e.setState({infos:t.data.data,isLoading:!1})}))},e.getModal=function(t){e.setState({showModal:!0,info:t})},e.hideModal=function(){e.setState({showModal:!1})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return console.log("HERE",this.state.infos),!0===this.state.isLoading?Object(n.jsxs)("section",{children:[Object(n.jsx)("header",{className:"header-search",children:Object(n.jsx)("div",{className:"wrap",children:Object(n.jsxs)("form",{className:"search",onSubmit:this.handleSubmit,children:[Object(n.jsx)("input",{type:"search",className:"searchTerm",name:"search",onChange:this.handleChange,placeholder:"Search your manga..."}),Object(n.jsx)("button",{type:"submit",className:"searchButton",children:Object(n.jsx)(R.a,{})})]})})}),Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("img",{src:"/images/loading.gif",alt:"loading"})})]}):Object(n.jsxs)("section",{children:[Object(n.jsx)("header",{className:"header-search",children:Object(n.jsx)("div",{className:"wrap",children:Object(n.jsxs)("form",{className:"search",onSubmit:this.handleSubmit,children:[Object(n.jsx)("input",{type:"search",className:"searchTerm",name:"search",onChange:this.handleChange,placeholder:"Search your manga..."}),Object(n.jsx)("button",{type:"submit",className:"searchButton",children:Object(n.jsx)(R.a,{})})]})})}),Object(n.jsxs)("div",{children:[this.state.infos.map((function(t){return Object(n.jsxs)("div",{className:"small",children:[Object(n.jsx)("img",{onClick:function(){return e.getModal(t)},className:"home-image",src:t.attributes.posterImage.tiny,alt:t.attributes.canonicalTitle}),Object(n.jsxs)("p",{children:["Rank: ",t.attributes.popularityRank]}),Object(n.jsxs)("p",{children:["Rating: ",t.attributes.averageRating]}),Object(n.jsx)("h3",{children:t.attributes.canonicalTitle})]},t.id)})),Object(n.jsx)(q,{show:this.state.showModal,onHide:this.hideModal,info:this.state.info})]})]})}}]),a}(s.Component),G=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={infos:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://kitsu.io/api/edge/trending/manga").then((function(t){e.setState({infos:t.data.data})}))}},{key:"render",value:function(){var e=this,t=this.state.infos.filter((function(t){return e.props.id===t.id||e.props.match.params.id===t.id}));return Object(n.jsx)("div",{children:0!==t.length&&Object(n.jsxs)("div",{className:"one-manga",children:[Object(n.jsx)("img",{className:"img-manga",src:t[0].attributes.posterImage.tiny,alt:t[0].attributes.canonicalTitle}),Object(n.jsx)("h1",{children:t[0].attributes.canonicalTitle}),Object(n.jsxs)("p",{children:["Rank: ",t[0].attributes.popularityRank]}),Object(n.jsxs)("p",{children:["Rating: ",t[0].attributes.averageRating]}),Object(n.jsxs)("p",{children:["Description: ",t[0].attributes.description]})]})})}}]),a}(s.Component),K=Object(w.g)(G),Q=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleClickBtn=function(e){N(e).then((function(e){console.log("data:",e)})).catch((function(e){console.log(e)}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return console.log("home",this.props.info.id),Object(n.jsx)(c.a.Fragment,{children:this.props.show&&Object(n.jsxs)("div",{className:"modal scrollbox",children:[Object(n.jsx)(K,{id:this.props.info.id}),Object(n.jsx)("button",{onClick:this.props.onHide,children:"Close"}),Object(n.jsx)("button",{className:"btn-add",onClick:function(){return e.handleClickBtn(e.props.info)},children:"Add this manga"})]})})}}]),a}(s.Component),V=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={infos:[],showModal:!1,info:""},e.getModal=function(t){e.setState({showModal:!0,info:t})},e.hideModal=function(){e.setState({showModal:!1})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://kitsu.io/api/edge/trending/manga").then((function(t){e.setState({infos:t.data.data})}))}},{key:"render",value:function(){var e=this;return console.log(this.state.infos),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"title",children:"Manga Time"}),this.state.infos.map((function(t){return Object(n.jsxs)("div",{className:"small",children:[Object(n.jsx)("img",{onClick:function(){return e.getModal(t)},className:"home-image",src:t.attributes.posterImage.tiny,alt:t.attributes.canonicalTitle}),Object(n.jsxs)("p",{children:["Rank: ",t.attributes.popularityRank]}),Object(n.jsxs)("p",{children:["Rating: ",t.attributes.averageRating]}),Object(n.jsx)("h3",{children:t.attributes.canonicalTitle})]},t.id)})),Object(n.jsx)(Q,{show:this.state.showModal,onHide:this.hideModal,info:this.state.info})]})}}]),a}(s.Component),X=a(22),Z=(a(40),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(X.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),f(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(h.a)(a,[{key:"render",value:function(){return this.context.user?Object(n.jsx)(w.a,{to:"/"}):Object(n.jsxs)("section",{className:"form-section",children:[Object(n.jsx)("header",{className:"headersignin",children:Object(n.jsx)("h1",{children:"Welcome back"})}),Object(n.jsxs)("form",{autoComplete:"off",className:"form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(n.jsx)("input",{onChange:this.handleChange,value:this.state.email,className:"input",type:"email",id:"email",name:"email"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{onChange:this.handleChange,value:this.state.password,className:"input",id:"password",type:"password",name:"password"})]}),Object(n.jsx)("button",{className:"btn-submit",children:"Submit"})]}),Object(n.jsxs)("div",{className:"form-section link",children:[Object(n.jsx)("p",{children:"Already have an account? "}),Object(n.jsx)(o.b,{to:"/signup",children:"Register"})]})]})}}]),a}(s.Component));Z.contextType=C;var $=Object(w.g)(Z),ee=function(e){return Object(n.jsx)($,{})},te=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={firstName:"",lastName:"",nickName:"",email:"",password:""},e.handleChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(X.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),g(e.state).then((function(t){e.context.setUser(t)})).catch((function(e){console.log("You already have an account with this email",e)}))},e}return Object(h.a)(a,[{key:"render",value:function(){return this.context.user?Object(n.jsx)(w.a,{to:"/"}):Object(n.jsxs)("section",{className:"form-section",children:[Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("h1",{children:"Hello !"})}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,onChange:this.handleChange,className:"form",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"label",htmlFor:"firstName",children:"Firstname"}),Object(n.jsx)("input",{className:"input",onChange:this.handleChange,value:this.state.firstName,type:"firstName",id:"firstName",name:"firstName"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"label",htmlFor:"lastName",children:"Lastname"}),Object(n.jsx)("input",{className:"input",onChange:this.handleChange,value:this.state.lastName,type:"lastName",id:"lastName",name:"lastName"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"label",htmlFor:"nickName",children:"Nickname"}),Object(n.jsx)("input",{className:"input",onChange:this.handleChange,value:this.state.nickName,type:"nickName",id:"nickName",name:"nickName"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(n.jsx)("input",{className:"input",onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{className:"input",onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password"})]}),Object(n.jsx)("button",{className:"btn-submit",children:"Submit"})]}),Object(n.jsxs)("div",{className:"form-section link",children:[Object(n.jsx)("p",{children:"Already have an account? "}),Object(n.jsx)(o.b,{to:"/signin",children:"Log in"})]})]})}}]),a}(s.Component);te.contextType=C;var ae=Object(w.g)(te),ne=function(e){return Object(n.jsx)(ae,{})},se=a(46),ce=L((function(e){var t=e.component,a=e.context,s=Object(se.a)(e,["component","context"]);return a.isLoading?null:a.isLoggedIn?Object(n.jsx)(w.b,Object(S.a)(Object(S.a)({},s),{},{render:function(e){return Object(n.jsx)(t,Object(S.a)({},e))}})):Object(n.jsx)(w.a,{to:"/signin"})})),ie=(a(79),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={mangas:[],name:""},e.handleClick=function(e){k(e).then((function(e){console.log("data",e)})).catch((function(e){console.log(e)}))},e.handleChange=function(t,a){var n=e.state.mangas.find((function(e){return e.id===a})),s=Object(S.a)({},n);s.chapter=t.target.value,e.setState({mangas:e.state.mangas.map((function(e){return e.id===s.id?s:e}))})},e.handleSubmit=function(t){t.preventDefault(),v(e.state.mangas).then((function(t){e.setState({mangas:t.totalmanga})}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){console.log("DATA",t),e.setState({mangas:t})}))}},{key:"render",value:function(){var e=this;return console.log(">>>>>>",this.state.mangas),Object(n.jsxs)("div",{className:"profile-title",children:[Object(n.jsx)("h1",{children:"My Profile"}),this.state.mangas.map((function(t){return Object(n.jsxs)("div",{className:"smaller",children:[Object(n.jsx)("img",{className:"profile-img",src:t.attributes.posterImage.tiny,alt:"manga"}),Object(n.jsx)("h3",{children:t.attributes.canonicalTitle}),Object(n.jsxs)("p",{children:["Rank: ",t.attributes.popularityRank]}),Object(n.jsxs)("p",{children:["Rating: ",t.attributes.averageRating]}),Object(n.jsx)("button",{className:"btn-profile",onClick:function(){return e.handleClick(t.id)},children:"Delete"}),Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("input",{className:"profile-input",type:"number",value:t.chapter,onChange:function(a){return e.handleChange(a,t.id)}}),Object(n.jsx)("button",{className:"btn-profile",children:"Add"})]})]})}))]})}}]),a}(c.a.Component));ie.contextType=C;var re=ie;var oe=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(J,{}),Object(n.jsxs)(w.d,{children:[Object(n.jsx)(w.b,{exact:!0,path:"/search",component:z}),Object(n.jsx)(w.b,{exact:!0,path:"/",component:V}),Object(n.jsx)(w.b,{exact:!0,path:"/signin",component:ee}),Object(n.jsx)(w.b,{exact:!0,path:"/signup",component:ne}),Object(n.jsx)(ce,{exact:!0,path:"/profile",component:re})]})]})};a(80),a(81);r.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(_,{children:Object(n.jsx)(oe,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.e7e50403.chunk.js.map