(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{113:function(e,t,n){e.exports={item:"Post_item__3dw9H"}},118:function(e,t,n){},122:function(e,t,n){},14:function(e,t,n){e.exports={nav:"Navbar_nav__3wGBX",item:"Navbar_item__3EZBU",active:"Navbar_active__1x9Ce"}},23:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1Qqv4",dialogsItems:"Dialogs_dialogsItems__kD1r2",active:"Dialogs_active__13x0l",messages:"Dialogs_messages__4eULh",message:"Dialogs_message__-pyI3"}},252:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=(n(118),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,256)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))}),c=n(54),i=n.n(c),o=(n(122),n(10)),u=n(14),d=n.n(u),l=n(0);function j(){return Object(l.jsxs)("nav",{className:d.a.nav,children:[Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(o.b,{to:"/profile",activeClassName:d.a.active,children:"Profile"})}),Object(l.jsx)("div",{className:"".concat(d.a.item," ").concat(d.a.active),children:Object(l.jsx)(o.b,{to:"/dialogs",activeClassName:d.a.active,children:"Messages"})}),Object(l.jsx)("div",{className:"".concat(d.a.item," ").concat(d.a.active),children:Object(l.jsx)(o.b,{to:"/users",activeClassName:d.a.active,children:"Users"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(o.b,{to:"/news",activeClassName:d.a.active,children:"News"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(o.b,{to:"/music",activeClassName:d.a.active,children:"Music"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(o.b,{to:"/settings",activeClassName:d.a.active,children:"Settings"})})]})}var g=n(8),h=function(){return Object(l.jsx)("div",{children:"News"})},b=function(){return Object(l.jsx)("div",{children:"Music"})},p=function(){return Object(l.jsx)("div",{children:"Settings"})},O=n(39),f=n(5),x="SEND-MESSAGE",m="UPDATE-NEW-MESSAGE-BODY",A={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,messages:"Hi"},{id:2,messages:"How is your it-kamasutra?"},{id:3,messages:"Yo"},{id:4,messages:"Yo"},{id:5,messages:"Yo"}],newMessageBody:""},v=n(23),C=n.n(v),S=function(e){var t="/dialogs/"+e.id;return Object(l.jsx)("div",{className:C.a.dialog+" "+C.a.active,children:Object(l.jsx)(o.b,{to:t,children:e.name})})},w=function(e){return Object(l.jsx)("div",{className:C.a.message,children:e.messages})},F=n(12),P=n(7),N=Object(P.d)(Object(F.b)((function(e){return{newMessageBody:e.dialogsPage.newMessageBody,dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:m,messageBody:e}}(t))},sendMessage:function(){e({type:x})}}})))((function(e){var t=e.dialogs.map((function(e){return Object(l.jsx)(S,{name:e.name,id:e.id},e.id)})),n=e.messages.map((function(e){return Object(l.jsx)(w,{messages:e.messages,id:e.id},e.id)})),s=a.a.createRef();return Object(l.jsxs)("div",{className:C.a.dialogs,children:[Object(l.jsx)("div",{className:C.a.dialogsItems,children:t}),Object(l.jsxs)("div",{className:C.a.messages,children:[Object(l.jsx)("div",{children:n}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{ref:s,value:e.newMessageBody,onChange:function(){if(s.current){var t=s.current.value;e.updateNewMessageBody(t)}},placeholder:"Enter your message"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})})),R=n(25),k=n(26),U=n(29),I=n(28),B=n(112),E=n.n(B).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}}),L=function(e,t){return E.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},Q=function(e){return E.delete("follow/".concat(e)).then((function(e){return e.data}))},M=function(e){return E.post("follow/".concat(e)).then((function(e){return e.data}))},D=function(){return E.get("auth/me").then((function(e){return e.data}))},y=function(e){return E.get("profile/"+e).then((function(e){return e.data}))},T=function(e){return E.get("profile/status/"+e)},W=function(e){return E.put("profile/status",{status:e})},K="FOLLOW",Y="UNFOLLOW",H="SET_USERS",G="SET_CURRENT_PAGE",J="SET_USERS_TOTAL_COUNT",z="TOGGLE_IS_FETCHING",X="TOGGLE_IS_FOLLOWING_PROGRESS",V={users:[],pageSize:10,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Z=function(e){return{type:H,users:e}},q=function(e){return{type:z,isFetching:e}},_=function(e,t){return{type:X,isFetching:e,userId:t}},$=n(77),ee=n.n($),te=n.p+"static/media/user.720f4e12.jpg",ne=function(e){for(var t=[],n=1;n<=10;n++)t.push(n);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:t.map((function(t){return Object(l.jsx)("span",{onClick:function(){e.onCurrentPageChanged(t)},className:e.currentPage===t?ee.a.selectedPage:"",children:t})}))}),e.users.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{to:"/profile/"+t.id,children:Object(l.jsx)("img",{src:null!=t.photos.small?t.photos.small:te,className:ee.a.userPhoto,alt:""})})}),Object(l.jsx)("div",{children:t.followed?Object(l.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollowThunkCreator(t.id)},children:" Unfollow"}):Object(l.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followThunkCreator(t.id)},children:" Follow"})})]}),Object(l.jsxs)("span",{children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:t.name}),Object(l.jsx)("div",{children:t.status})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:"u.location.country"}),Object(l.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},se=n.p+"static/media/preloader.372b42cf.gif",ae=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:se,alt:""})})},re=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(R.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onCurrentPageChanged=function(t){e.props.onCurrentPageChangedThunkCreator(t,e.props.pageSize)},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[this.props.isFetching?Object(l.jsx)(ae,{}):null,Object(l.jsx)(ne,{users:this.props.users,currentPage:this.props.currentPage,onCurrentPageChanged:this.onCurrentPageChanged,followingInProgress:this.props.followingInProgress,followThunkCreator:this.props.followThunkCreator,unFollowThunkCreator:this.props.unFollowThunkCreator})]})}}]),n}(a.a.Component),ce=Object(P.d)(Object(F.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUserCount:e.usersPage.totalUserCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{getUsersThunkCreator:function(e,t){return function(n){n(q(!0)),L(e,t).then((function(e){var t;n(q(!1)),n(Z(e.items)),n((t=e.totalCount,{type:J,totalCount:t}))}))}},onCurrentPageChangedThunkCreator:function(e,t){return function(n){n(function(e){return{type:G,currentPage:e}}(e)),n(q(!0)),L(e,t).then((function(e){n(q(!1)),n(Z(e.items))}))}},followThunkCreator:function(e){return function(t){t(_(!0,e)),M(e).then((function(n){0===n.resultCode&&t(function(e){return{type:K,userId:e}}(e)),t(_(!1,e))}))}},unFollowThunkCreator:function(e){return function(t){t(_(!0,e)),Q(e).then((function(n){0===n.resultCode&&t(function(e){return{type:Y,userId:e}}(e)),t(_(!1,e))}))}}}))(re),ie=n(78),oe=n.n(ie),ue=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(R.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(k.a)(n,[{key:"componentDidUpdate",value:function(e){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[!this.state.editMode&&Object(l.jsx)("div",{children:Object(l.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"----"})}),this.state.editMode&&Object(l.jsx)("div",{children:Object(l.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status})})]})})}}]),n}(a.a.Component);function de(e){return e.profile?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:oe.a.img,src:"https://www.study.ru/uploads/server/jqMeRR0Fw70d5uNi.jpg",alt:""})}),Object(l.jsxs)("div",{className:oe.a.descriptionBlock,children:[Object(l.jsx)("img",{src:e.profile.photos.large,alt:""}),Object(l.jsx)("div",{children:e.profile.fullName}),Object(l.jsx)("div",{children:e.profile.aboutMe}),Object(l.jsx)(ue,{status:e.status,updateStatus:e.updateStatus})]})]}):Object(l.jsx)(ae,{})}var le="ADD-POST",je="UPDATE-NEW-POST-TEXT",ge="SET_USER_PROFILE",he="SET_STATUS",be={posts:[{id:1,message:"Hi, how are you?",likesCount:10},{id:2,message:"It's my first post",likesCount:25},{id:3,message:"Blablabla",likesCount:15},{id:4,message:"Valera is the best",likesCount:9}],newPostText:"",profile:{aboutMe:null,lookingForAJob:!1,lookingForAJobDescription:null,fullName:"dmitriy199427",userId:19481,photos:{small:"",large:""}},status:""},pe=function(e){return{type:he,status:e}},Oe=n(79),fe=n.n(Oe),xe=n(113),me=n.n(xe);function Ae(e){return Object(l.jsxs)("div",{className:me.a.item,children:[Object(l.jsx)("img",{src:"https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka.jpg"}),e.message,Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"like"})," ",e.likesCount]})]})}var ve=Object(F.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(function(e){return{type:je,postText:e}}(t))},addPost:function(){e({type:le})}}}))((function(e){var t=e.posts.map((function(e){return Object(l.jsx)(Ae,{message:e.message,likesCount:e.likesCount},e.id)})),n=a.a.createRef();return Object(l.jsxs)("div",{className:fe.a.postsBlock,children:[Object(l.jsx)("h3",{children:"My posts"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{onChange:function(){if(n.current){var t=n.current.value;e.updateNewPostText(t)}},ref:n,value:e.newPostText})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(l.jsx)("div",{className:fe.a.posts,children:t})]})}));function Ce(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(de,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(l.jsx)(ve,{})]})}var Se=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="19481"),this.props.getProfileThunkCreator(e),this.props.getStatusThunkCreator(e)}},{key:"render",value:function(){return Object(l.jsx)(Ce,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunkCreator})}}]),n}(a.a.Component),we=Object(P.d)(Object(F.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getProfileThunkCreator:function(e){return function(t){y(e).then((function(e){t({type:ge,profile:e})}))}},getStatusThunkCreator:function(e){return function(t){T(e).then((function(e){t(pe(e.data))}))}},updateStatusThunkCreator:function(e){return function(t){W(e).then((function(n){0===n.data.resultCode&&t(pe(e))}))}}}),g.e)(Se),Fe=n(80),Pe=n.n(Fe);function Ne(e){return Object(l.jsxs)("header",{className:Pe.a.header,children:[Object(l.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""}),Object(l.jsx)("div",{className:Pe.a.loginBlock,children:e.isAuth?e.login:Object(l.jsx)(o.b,{to:"/login",children:"Login"})})]})}var Re="SET_AUTH_USER_DATA",ke={id:null,email:null,login:null,isAuth:!1},Ue=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.props.getLoginThunkCreator()}},{key:"render",value:function(){return Object(l.jsx)(Ne,{isAuth:this.props.isAuth,login:this.props.login})}}]),n}(a.a.Component),Ie=Object(F.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getLoginThunkCreator:function(){return function(e){D().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,a=n.email,r=n.login;e(function(e,t,n){return{type:Re,data:{id:e,email:t,login:n}}}(s,a,r))}}))}}})(Ue),Be=n(254),Ee=n(253),Le=Object(Ee.a)({form:"login"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(Be.a,{placeholder:"Login",name:"login",component:"input"})}),Object(l.jsx)("div",{children:Object(l.jsx)(Be.a,{placeholder:"Password",name:"password",component:"input"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(Be.a,{component:"input",name:"rememberMe",type:"checkbox"})," remember me"]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Login"})})]})})),Qe=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"LOGIN"}),Object(l.jsx)(Le,{onSubmit:function(e){console.log(e)}})]})},Me=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(Ie,{}),Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"app-wrapper-content",children:[Object(l.jsx)(g.a,{path:"/dialogs",render:function(){return Object(l.jsx)(N,{})}}),Object(l.jsx)(g.a,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(we,{})}}),Object(l.jsx)(g.a,{path:"/news",render:function(){return Object(l.jsx)(h,{})}}),Object(l.jsx)(g.a,{path:"/music",render:function(){return Object(l.jsx)(b,{})}}),Object(l.jsx)(g.a,{path:"/settings",render:function(){return Object(l.jsx)(p,{})}}),Object(l.jsx)(g.a,{path:"/users",render:function(){return Object(l.jsx)(ce,{})}}),Object(l.jsx)(g.a,{path:"/login",render:function(){return Object(l.jsx)(Qe,{})}})]})]})})},De=n(115),ye=n(255),Te=Object(P.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:var n={id:(new Date).getTime(),message:e.newPostText,likesCount:0};return Object(f.a)(Object(f.a)({},e),{},{posts:[].concat(Object(O.a)(e.posts),[n]),newPostText:""});case je:return Object(f.a)(Object(f.a)({},e),{},{newPostText:t.postText});case ge:return Object(f.a)(Object(f.a)({},e),{},{profile:t.profile});case he:return Object(f.a)(Object(f.a)({},e),{},{status:t.status});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n={id:(new Date).getTime(),messages:e.newMessageBody};return Object(f.a)(Object(f.a)({},e),{},{messages:[].concat(Object(O.a)(e.messages),[n]),newMessageBody:""});case m:return Object(f.a)(Object(f.a)({},e),{},{newMessageBody:t.messageBody});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)(Object(f.a)({},e),{},{followed:!0}):e}))});case Y:return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)(Object(f.a)({},e),{},{followed:!1}):e}))});case H:return Object(f.a)(Object(f.a)({},e),{},{users:t.users});case G:return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});case J:return Object(f.a)(Object(f.a)({},e),{},{totalUserCount:t.totalCount});case z:return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case X:return Object(f.a)(Object(f.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(f.a)(Object(f.a)(Object(f.a)({},e),t.data),{},{isAuth:!0});default:return e}},form:ye.a}),We=Object(P.e)(Te,Object(P.a)(De.a));window.store=We,i.a.render(Object(l.jsx)(o.a,{basename:"/social-network",children:Object(l.jsx)(F.a,{store:We,children:Object(l.jsx)(Me,{})})}),document.getElementById("root")),r()},77:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2ygPv",selectedPage:"users_selectedPage__NTteQ"}},78:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__30lGR",img:"ProfileInfo_img__22Ie5"}},79:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__3qwSj",posts:"MyPosts_posts__1juom"}},80:function(e,t,n){e.exports={header:"Header_header__3N_my",loginBlock:"Header_loginBlock__1QUPD"}}},[[252,1,2]]]);
//# sourceMappingURL=main.97fae22a.chunk.js.map