(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{114:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?""===e.trim()?"Field is required":void 0:"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n.p+"static/media/preloader.372b42cf.gif",a=n(1),c=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:""})})}},135:function(e,t,n){e.exports={paginator:"Paginator_paginator__38LH3",pageNumber:"Paginator_pageNumber__12Z-L",selectedPage:"Paginator_selectedPage__GpwoB"}},163:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"b",(function(){return x})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return E}));var r=n(23),a=n(55),c=n(8),i=n(13),s=n.n(i),o=n(66),u=n(34),l=function(e){return u.a.get("profile/"+e)},d=function(e){return u.a.get("profile/status/"+e)},j=function(e){return u.a.put("profile/status",{status:e})},f=function(e){var t=new FormData;return t.append("image",e),u.a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},b=function(e){return u.a.put("profile",e)},p={posts:[{id:1,message:"Hi, how are you?",likesCount:10},{id:2,message:"It's my first post",likesCount:25},{id:3,message:"Blablabla",likesCount:15},{id:4,message:"Valera is the best",likesCount:9}],profile:null,status:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/ADD-POST":var n={id:(new Date).getTime(),message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n])});case"PROFILE/SET-USER-PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"PROFILE/SET-STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"PROFILE/DELETE-POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"PROFILE/SAVE-PHOTO-SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}},h=function(e){return{type:"PROFILE/ADD-POST",newPostText:e}},m=function(e){return{type:"PROFILE/SET-STATUS",status:e}},g=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n({type:"PROFILE/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"PROFILE/SAVE-PHOTO-SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(n,r){var a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.id,t.next=3,b(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=12;break}if(null===a){t.next=9;break}n(g(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(o.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(55),a=n(8),c={dialogs:[{id:1,name:"Dimych",img:"https://i.pinimg.com/236x/6c/a9/eb/6ca9eb3a85019663b9cb685695e5d549.jpg"},{id:2,name:"Andrey",img:"https://avatoon.net/wp-content/uploads/2022/07/Cartoon-Avatar-White-Background-300x300.png"},{id:3,name:"Sveta",img:"https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"},{id:4,name:"Sasha",img:"https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"},{id:5,name:"Viktor",img:"https://i.pinimg.com/550x/f5/69/67/f56967d3bb848e5c48d96b90d0d4cd88.jpg"},{id:6,name:"Valera",img:"https://img.freepik.com/premium-vector/elegant-man-business-suit-with-badge-man-business-avatar-profile-picture-vector-illustration-isolated_625536-1376.jpg?w=2000"}],messages:[{id:1,messages:"Hi"},{id:2,messages:"How is your it-kamasutra?"},{id:3,messages:"How are you?"},{id:4,messages:"Yo"},{id:5,messages:"Hello"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if("DIALOGS/SEND_MESSAGE"===t.type){var n={id:(new Date).getTime(),messages:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{dialogs:[].concat(Object(r.a)(e.dialogs),[{id:6,name:"Valera",img:"https://img.freepik.com/premium-vector/elegant-man-business-suit-with-badge-man-business-avatar-profile-picture-vector-illustration-isolated_625536-1376.jpg?w=2000"}]),messages:[].concat(Object(r.a)(e.messages),[n])})}return e},s=function(e){return{type:"DIALOGS/SEND_MESSAGE",newMessageBody:e}}},186:function(e,t,n){"use strict";t.a=n.p+"static/media/user.720f4e12.jpg"},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return P})),n.d(t,"b",(function(){return I}));var r=n(23),a=n(55),c=n(8),i=n(13),s=n.n(i),o={"messages-received":[],"status-changed":[]},u=null,l=function(){p("pending"),setTimeout(O,3e3)},d=function(e){var t=JSON.parse(e.data);o["messages-received"].forEach((function(e){return e(t)}))},j=function(){p("ready")},f=function(){p("error"),console.error("REFRESH PAGE")},b=function(){var e,t,n,r;null===(e=u)||void 0===e||e.removeEventListener("close",l),null===(t=u)||void 0===t||t.removeEventListener("message",d),null===(n=u)||void 0===n||n.removeEventListener("open",j),null===(r=u)||void 0===r||r.removeEventListener("error",f)},p=function(e){o["status-changed"].forEach((function(t){return t(e)}))};function O(){var e;b(),null===(e=u)||void 0===e||e.close(),u=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),p("pending"),u.addEventListener("close",l),u.addEventListener("message",d),u.addEventListener("open",j),u.addEventListener("error",f)}var h=function(){O()},m=function(){var e;o["messages-received"]=[],o["status-changed"]=[],b(),null===(e=u)||void 0===e||e.close()},g=function(e,t){return o[e].push(t),function(){o[e]=o[e].filter((function(e){return e!==t}))}},x=function(e,t){o[e]=o[e].filter((function(e){return e!==t}))},v=function(e){var t;null===(t=u)||void 0===t||t.send(e)},S=n(391),E={messages:[],status:"pending"},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHAT/MESSAGES_RECEIVED":return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),Object(a.a)(t.payload.messages.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{id:Object(S.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"CHAT/STATUS_CHANGED":return Object(c.a)(Object(c.a)({},e),{},{status:t.payload.status});case"CHAT/MESSAGES_DELETED":return Object(c.a)(Object(c.a)({},e),{},{messages:[]});default:return e}},y=null,C=function(e){return null===y&&(y=function(t){e(function(e){return{type:"CHAT/MESSAGES_RECEIVED",payload:{messages:e}}}(t))}),y},T=null,_=function(e){return null===T&&(T=function(t){e(function(e){return{type:"CHAT/STATUS_CHANGED",payload:{status:e}}}(t))}),T},k=function(){return function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(),g("messages-received",C(t)),g("status-changed",_(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(){return function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x("messages-received",C(t)),x("status-changed",_(t)),t({type:"CHAT/MESSAGES_DELETED"}),m();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},206:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2ygPv",selectedPage:"users_selectedPage__NTteQ"}},207:function(e,t,n){e.exports={button:"Button_button__3CC4i"}},249:function(e,t,n){},253:function(e,t,n){},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(203),a=n.n(r),c=a.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"a1c29d8b-1c83-4c49-8a4c-55a3c1e75564"}})},385:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=(n(249),function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,402)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))}),i=n(40),s=n.n(i),o=n(164),u=n(165),l=n(201),d=n(199),j=(n(253),n(39)),f=n(21),b=n(1),p=function(){return Object(b.jsx)("div",{children:"News"})},O=function(){return Object(b.jsx)("div",{children:"Music"})},h=function(){return Object(b.jsx)("div",{children:"Settings"})},m=n(20),g=n(163),x=n(175),v=n(23),S=n(55),E=n(8),w=n(13),y=n.n(w),C=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(E.a)(Object(E.a)({},e),r):e}))},T=n(34),_={getUsers:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return T.a.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},deleteFollow:function(e){return T.a.delete("follow/".concat(e)).then((function(e){return e.data}))},postFollow:function(e){return T.a.post("follow/".concat(e)).then((function(e){return e.data}))}},k={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},P=function(e){return{type:"USERS/FOLLOW",userId:e}},I=function(e){return{type:"USERS/UNFOLLOW",userId:e}},U=function(e){return{type:"USERS/SET_CURRENT_PAGE",currentPage:e}},A=function(e){return{type:"USERS/SET_FILTER",payload:e}},L=function(e){return{type:"USERS/TOGGLE_IS_FETCHING",isFetching:e}},R=function(e,t){return{type:"USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},F=function(e,t,n){return function(){var r=Object(v.a)(y.a.mark((function r(a){var c;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(L(!0)),a(U(e)),a(A(n)),r.next=5,_.getUsers(e,t,n.term,n.friend);case 5:c=r.sent,a(L(!1)),a({type:"USERS/SET_USERS",users:c.items}),a({type:"USERS/SET_USERS_TOTAL_COUNT",totalCount:c.totalCount});case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},N=function(){var e=Object(v.a)(y.a.mark((function e(t,n,r,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t(R(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),D=n(66),G=function(){return T.a.get("auth/me")},H=function(e,t,n,r){return T.a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},z=function(){return T.a.delete("auth/login")},M=function(){return T.a.get("security/get-captcha-url")},V={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},B=function(e,t,n,r){return{type:"AUTH/SET_AUTH_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},W=function(e){return{type:"AUTH/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},X=function(){return function(){var e=Object(v.a)(y.a.mark((function e(t){var n,r,a,c,i,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,i=r.login,s=B(a,c,i,!0),t(s));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J=function(){return function(){var e=Object(v.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:n=e.sent,r=n.data.url,t(W(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=n(205),Z=n(200),q={initialized:!1},Q=n(202),Y=Object(m.c)({profilePage:g.c,dialogsPage:x.a,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/FOLLOW":return Object(E.a)(Object(E.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case"USERS/UNFOLLOW":return Object(E.a)(Object(E.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case"USERS/SET_USERS":return Object(E.a)(Object(E.a)({},e),{},{users:t.users});case"USERS/SET_CURRENT_PAGE":return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case"USERS/SET_USERS_TOTAL_COUNT":return Object(E.a)(Object(E.a)({},e),{},{totalUsersCount:t.totalCount});case"USERS/TOGGLE_IS_FETCHING":return Object(E.a)(Object(E.a)({},e),{},{isFetching:t.isFetching});case"USERS/SET_FILTER":return Object(E.a)(Object(E.a)({},e),{},{filter:t.payload});case"USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(E.a)(Object(E.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(S.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_AUTH_USER_DATA":case"AUTH/GET_CAPTCHA_URL_SUCCESS":return Object(E.a)(Object(E.a)({},e),t.payload);default:return e}},form:Z.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;return"APP/INITIALIZED_SUCCESS"===(arguments.length>1?arguments[1]:void 0).type?Object(E.a)(Object(E.a)({},e),{},{initialized:!0}):e},chat:Q.a}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,ee=Object(m.e)(Y,$(Object(m.a)(K.a))),te=n(17),ne=n(116);function re(e){return function(t){return Object(b.jsx)(a.a.Suspense,{fallback:Object(b.jsx)("div",{children:"loading..."}),children:Object(b.jsx)(e,Object(E.a)({},t))})}}var ae=n(206),ce=n.n(ae),ie=n(186),se=n(62),oe=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(j.c,{to:"/social-network/profile/"+e.user.id,children:Object(b.jsx)("img",{style:{marginBottom:"5px",marginTop:"5px"},src:null!=e.user.photos.small?e.user.photos.small:ie.a,className:ce.a.userPhoto,alt:""})})}),Object(b.jsx)("div",{children:e.user.followed?Object(b.jsx)(se.a,{name:"Unfollow",onClick:function(){e.unFollowThunkCreator(e.user.id)},disabled:e.followingInProgress.some((function(t){return t===e.user.id}))}):Object(b.jsx)(se.a,{name:"Follow",onClick:function(){e.followThunkCreator(e.user.id)},disabled:e.followingInProgress.some((function(t){return t===e.user.id}))})})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("h3",{children:e.user.name}),Object(b.jsx)("h3",{style:{marginTop:"-5px"},children:e.user.status}),Object(b.jsxs)("h3",{style:{marginTop:"-5px"},children:["id: ",e.user.id]})]})]})},ue=n(118),le=n(162),de=n(135),je=n.n(de),fe=n(6),be=n.n(fe),pe=function(e){for(var t=e.totalItemsCount,n=e.currentPage,a=void 0===n?1:n,c=e.onCurrentPageChanged,i=void 0===c?function(e){return e}:c,s=e.pageSize,o=e.portionSize,u=void 0===o?10:o,l=Math.ceil(t/s),d=[],j=1;j<=l;j++)d.push(j);var f=Math.ceil(l/u),p=Object(r.useState)(1),O=Object(le.a)(p,2),h=O[0],m=O[1],g=(h-1)*u+1,x=h*u;return Object(b.jsxs)("div",{className:be()(je.a.paginator),children:[h>1&&Object(b.jsx)(se.a,{name:"Prev",onClick:function(){m(h-1)}}),d.filter((function(e){return e>=g&&e<=x})).map((function(e){return Object(b.jsx)("span",{className:be()(Object(ue.a)({},je.a.selectedPage,a===e),je.a.pageNumber),onClick:function(){i(e)},children:e},e)})),f>h&&Object(b.jsx)(se.a,{name:"Next",onClick:function(){m(h+1)}})]})},Oe=n(102),he=function(e){return e.usersPage.users},me=function(e){return e.usersPage.pageSize},ge=function(e){return e.usersPage.totalUsersCount},xe=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},Se=function(e){return e.usersPage.followingInProgress},Ee=function(e){return e.usersPage.filter},we=function(e){var t=Object(te.d)(Ee);return Object(b.jsx)("div",{children:Object(b.jsx)(Oe.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:function(e){return{}},onSubmit:function(t,n){var r=n.setSubmitting,a={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(a),r(!1)},children:function(e){var t=e.isSubmitting;return Object(b.jsxs)(Oe.b,{children:[Object(b.jsx)(Oe.a,{type:"text",name:"term"}),Object(b.jsxs)(Oe.a,{name:"friend",as:"select",style:{marginLeft:"5px",marginRight:"5px",height:"30px"},children:[Object(b.jsx)("option",{value:"null",children:"All"}),Object(b.jsx)("option",{value:"true",children:"Only followed"}),Object(b.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(b.jsx)(se.a,{name:"Find",disabled:t})]})}})})},ye=n(157),Ce=function(){var e=Object(te.d)(he),t=Object(te.d)(ge),n=Object(te.d)(xe),a=Object(te.d)(me),c=Object(te.d)(Ee),i=Object(te.d)(Se),s=Object(te.c)(),o=Object(f.g)();Object(r.useEffect)((function(){var e=ye.parse(o.location.search.substr(1)),t=n,r=c;switch(e.page&&(t=Number(e.page)),e.term&&(r=Object(E.a)(Object(E.a)({},r),{},{term:e.term})),e.friend){case"null":r=Object(E.a)(Object(E.a)({},r),{},{friend:null});break;case"true":r=Object(E.a)(Object(E.a)({},r),{},{friend:!0});break;case"false":r=Object(E.a)(Object(E.a)({},r),{},{friend:!1})}s(F(t,a,r))}),[]),Object(r.useEffect)((function(){var e={};c.term&&(e.term=c.term),null!==!!c.friend&&(e.friend=String(c.friend)),1!==n&&(e.page=String(n)),o.push({pathname:"/social-network/users",search:ye.stringify(e)})}),[c,n]);var u=function(e){s(function(e){return function(){var t=Object(v.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(n,e,_.postFollow.bind(_),P);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},l=function(e){s(function(e){return function(){var t=Object(v.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(n,e,_.deleteFollow.bind(_),I);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(b.jsxs)("div",{children:[Object(b.jsx)(we,{onFilterChanged:function(e){s(F(1,a,e))}}),Object(b.jsx)("div",{children:Object(b.jsx)(pe,{totalItemsCount:t,pageSize:a,currentPage:n,onCurrentPageChanged:function(e){s(F(e,a,c))}})}),e.map((function(e){return Object(b.jsx)(oe,{user:e,followingInProgress:i,followThunkCreator:u,unFollowThunkCreator:l},e.id)}))]})},Te=function(){var e=Object(te.d)(ve);return Object(b.jsxs)(b.Fragment,{children:[e?Object(b.jsx)(ne.a,{}):null,Object(b.jsx)(Ce,{})]})},_e=n(154),ke=n(198),Pe=n(91),Ie=n(114),Ue=n(92),Ae=n.n(Ue),Le=Object(ke.a)({form:"login"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(_e.a,{placeholder:"Email",name:"email",component:Pe.a,validate:[Ie.b]})}),Object(b.jsx)("div",{children:Object(b.jsx)(_e.a,{placeholder:"Password",name:"password",component:Pe.a,type:"password",validate:[Ie.b]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(_e.a,{component:Pe.a,name:"rememberMe",type:"checkbox"})," remember me"]}),e.captchaUrl&&Object(b.jsx)("img",{src:e.captchaUrl,alt:""}),e.captchaUrl&&Object(b.jsx)(_e.a,{placeholder:"Symbols from image",name:"captcha",component:Pe.a,validate:Ie.b}),e.error&&Object(b.jsx)("div",{className:Ae.a.formSummaryError,children:e.error}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),Re=function(){var e=Object(te.d)((function(e){return e.auth.captchaUrl})),t=Object(te.d)((function(e){return e.auth.isAuth})),n=Object(te.c)();return t?Object(b.jsx)(f.a,{to:"/social-network/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)(Le,{onSubmit:function(e){var t,r,a,c;n((t=e.email,r=e.password,a=e.rememberMe,c=e.captcha,function(){var e=Object(v.a)(y.a.mark((function e(n){var i,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,r,a,c);case 2:0===(i=e.sent).data.resultCode?n(X()):(10===i.data.resultCode&&n(J()),s=i.data.messages.length>0?i.data.messages[0]:"Some error",n(Object(D.a)("login",{_error:s})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})},Fe=(n(384),n(394)),Ne=n(395),De=n(396),Ge=n(217),He=n(388),ze=n(390),Me=function(e){return e.auth.isAuth},Ve=function(e){return e.auth.login},Be=n(392),We=n(393),Xe=n(389),Je=n(137);function Ke(e){var t=Object(te.d)(Me),n=Object(te.d)(Ve),r=Object(te.c)(),a=He.a.Header;return Object(b.jsx)(a,{className:"header",children:Object(b.jsxs)(Be.a,{children:[Object(b.jsx)(We.a,{span:18,children:Object(b.jsx)(Ge.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(b.jsx)(Ge.a.Item,{children:Object(b.jsx)(j.b,{to:"/social-network/users",children:"Developers"})},"1")})}),t?Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)(We.a,{span:1,children:Object(b.jsx)(Xe.a,{alt:n||"",style:{backgroundColor:"#87d068"},icon:Object(b.jsx)(Fe.a,{})})}),Object(b.jsx)(We.a,{span:5,children:Object(b.jsx)(Je.a,{onClick:function(){r(function(){var e=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:0===e.sent.data.resultCode&&t(B(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]}):Object(b.jsx)(We.a,{span:6,children:Object(b.jsx)(Je.a,{children:Object(b.jsx)(j.b,{to:"/social-network/login",children:"Login"})})})]})})}var Ze=Ge.a.SubMenu,qe=He.a.Content,Qe=He.a.Footer,Ye=He.a.Sider,$e=a.a.lazy((function(){return n.e(4).then(n.bind(null,405))})),et=a.a.lazy((function(){return n.e(3).then(n.bind(null,404))})),tt=a.a.lazy((function(){return n.e(5).then(n.bind(null,403))})),nt=re($e),rt=re(et),at=re(tt),ct=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error occurred")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillMount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)(He.a,{children:[Object(b.jsx)(Ke,{}),Object(b.jsxs)(qe,{style:{padding:"0 50px"},children:[Object(b.jsxs)(ze.a,{style:{margin:"16px 0"},children:[Object(b.jsx)(ze.a.Item,{children:"Home"}),Object(b.jsx)(ze.a.Item,{children:"List"}),Object(b.jsx)(ze.a.Item,{children:"App"})]}),Object(b.jsxs)(He.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(b.jsx)(Ye,{className:"site-layout-background",width:200,children:Object(b.jsxs)(Ge.a,{mode:"inline",style:{height:"100%"},children:[Object(b.jsxs)(Ze,{icon:Object(b.jsx)(Fe.a,{}),title:"My Profile",children:[Object(b.jsxs)(Ge.a.Item,{children:[" ",Object(b.jsx)(j.b,{to:"/social-network/profile",children:"Profile"})]},"1"),Object(b.jsxs)(Ge.a.Item,{children:[" ",Object(b.jsx)(j.b,{to:"/social-network/dialogs",children:"Messages"})]},"2"),Object(b.jsx)(Ge.a.Item,{children:"option3"},"3"),Object(b.jsx)(Ge.a.Item,{children:"option4"},"4")]},"sub1"),Object(b.jsxs)(Ze,{icon:Object(b.jsx)(Ne.a,{}),title:"Developers",children:[Object(b.jsx)(Ge.a.Item,{children:Object(b.jsx)(j.b,{to:"/social-network/users",children:"Developers"})},"5"),Object(b.jsx)(Ge.a.Item,{children:"option6"},"6"),Object(b.jsx)(Ge.a.Item,{children:"option7"},"7"),Object(b.jsx)(Ge.a.Item,{children:"option8"},"8")]},"sub2"),Object(b.jsxs)(Ze,{icon:Object(b.jsx)(De.a,{}),title:"Chat",children:[Object(b.jsx)(Ge.a.Item,{children:Object(b.jsx)(j.b,{to:"/social-network/chat",children:"Chat"})},"9"),Object(b.jsx)(Ge.a.Item,{children:"option10"},"10"),Object(b.jsx)(Ge.a.Item,{children:"option11"},"11"),Object(b.jsx)(Ge.a.Item,{children:"option12"},"12")]},"sub3")]})}),Object(b.jsx)(qe,{style:{padding:"0 24px",minHeight:280},children:Object(b.jsxs)(f.d,{children:[Object(b.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(f.a,{to:"/social-network/profile"})}}),Object(b.jsx)(f.b,{exact:!0,path:"/social-network",render:function(){return Object(b.jsx)(f.a,{to:"/social-network/profile"})}}),Object(b.jsx)(f.b,{path:"/social-network/profile/:userId?",render:function(){return Object(b.jsx)(rt,{})}}),Object(b.jsx)(f.b,{path:"/social-network/dialogs",render:function(){return Object(b.jsx)(nt,{})}}),Object(b.jsx)(f.b,{path:"/social-network/users",render:function(){return Object(b.jsx)(Te,{})}}),Object(b.jsx)(f.b,{path:"/social-network/login",render:function(){return Object(b.jsx)(Re,{})}}),Object(b.jsx)(f.b,{path:"/social-network/news",render:function(){return Object(b.jsx)(p,{})}}),Object(b.jsx)(f.b,{path:"/social-network/music",render:function(){return Object(b.jsx)(O,{})}}),Object(b.jsx)(f.b,{path:"/social-network/settings",render:function(){return Object(b.jsx)(h,{})}}),Object(b.jsx)(f.b,{path:"/social-network/chat",render:function(){return Object(b.jsx)(at,{})}}),Object(b.jsx)(f.b,{path:"*",render:function(){return Object(b.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})]}),Object(b.jsx)(Qe,{style:{textAlign:"center"},children:"Social Network \xa92022 Created by dmitriy19942"})]}):Object(b.jsx)(ne.a,{})}}]),n}(a.a.Component),it=Object(m.d)(Object(te.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(X());Promise.all([t]).then((function(){e({type:"APP/INITIALIZED_SUCCESS"})}))}}}),f.h)(ct),st=function(){return Object(b.jsx)(j.a,{children:Object(b.jsx)(te.a,{store:ee,children:Object(b.jsx)(it,{})})})};s.a.render(Object(b.jsx)(st,{}),document.getElementById("root")),c()},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var r=n(207),a=n.n(r),c=n(1),i=function(e){return Object(c.jsx)("button",{className:a.a.button,onClick:e.onClick,disabled:e.disabled,children:e.name})}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b}));var r=n(8),a=n(153),c=(n(0),n(92)),i=n.n(c),s=n(154),o=n(1),u=["input","meta"],l=["input","meta"],d=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(o.jsx)("div",{children:a}),c&&Object(o.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({style:{width:"250px",height:"70px"}},t),n))}))},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,l));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function b(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c))," ",i]})}},92:function(e,t,n){e.exports={formControl:"FormControls_formControl__vX3Kp",error:"FormControls_error__24hnp",formSummaryError:"FormControls_formSummaryError__2XQde"}}},[[385,1,2]]]);
//# sourceMappingURL=main.ca58b14e.chunk.js.map