(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{396:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s(8),o=s(152),i=(s(0),s(17)),r=s(21),c=s(1),a=["isAuth"],u=function(t){return{isAuth:t.auth.isAuth}};function l(t){return Object(i.b)(u)((function(e){var s=e.isAuth,i=Object(o.a)(e,a);return s?Object(c.jsx)(t,Object(n.a)({},i)):Object(c.jsx)(r.a,{to:"/social-network/login"})}))}},397:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__30lGR",img:"ProfileInfo_img__22Ie5",mainPhoto:"ProfileInfo_mainPhoto__1-G_8",contact:"ProfileInfo_contact__48AAV",button:"ProfileInfo_button__224hj"}},398:function(t,e,s){t.exports={button:"Button_button__3CC4i"}},399:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3qwSj",posts:"MyPosts_posts__1juom"}},400:function(t,e,s){t.exports={like:"Post_like__pSu4s",item:"Post_item__3dw9H"}},403:function(t,e,s){"use strict";s.r(e),s.d(e,"ProfileAPIContainer",(function(){return H}));var n=s(163),o=s(164),i=s(200),r=s(198),c=s(0),a=s.n(c),u=s(161),l=s(397),j=s.n(l),b=s(115),d=s(1),h=function(t){var e=Object(c.useState)(!1),s=Object(u.a)(e,2),n=s[0],o=s[1],i=Object(c.useState)(t.status),r=Object(u.a)(i,2),a=r[0],l=r[1];Object(c.useEffect)((function(){l(t.status)}),[t.status]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[!n&&Object(d.jsx)("div",{children:Object(d.jsxs)("span",{onDoubleClick:function(){o(!0)},children:[" ",Object(d.jsx)("b",{children:"Status"}),": ",t.status||"----"]})}),n&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(a)},value:a})})]})})},f=s(185),p=s(197),O=s(91),x=s.n(O),m=s(90),v=s(398),k=s.n(v),P=function(t){return Object(d.jsx)("button",{className:k.a.button,onClick:t.onClick,children:t.name})},g=Object(p.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,n=t.error;return Object(d.jsxs)("form",{onSubmit:e,children:[Object(d.jsx)(P,{name:"save"}),n&&Object(d.jsx)("div",{className:x.a.formSummaryError,children:n}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name"}),": ",Object(m.c)("Full name","fullName",[],m.a)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job"}),": ",Object(m.c)("","lookingForAJob",[],m.a,{type:"checkbox"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"}),":",Object(m.c)("My professional skills","lookingForAJobDescription",[],m.b)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me"}),":",Object(m.c)("About me","aboutMe",[],m.b)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(d.jsx)("div",{className:x.a.contact,children:Object(d.jsxs)("b",{children:[t,": ",Object(m.c)(t,"contacts."+t,[],m.a)]})},t)}))]})]})}));function _(t){var e=Object(c.useState)(!1),s=Object(u.a)(e,2),n=s[0],o=s[1];if(!t.profile)return Object(d.jsx)(b.a,{});return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(d.jsx)("img",{src:t.profile.photos.large||f.a,className:j.a.mainPhoto,alt:""}),t.isOwner&&Object(d.jsx)("input",{className:j.a.button,type:"file",onChange:function(e){e.target.files&&e.target.files.length&&t.savePhoto(e.target.files[0])}}),n?Object(d.jsx)(g,{initialValues:t.profile,profile:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){o(!1)}))}}):Object(d.jsx)(C,{profile:t.profile,isOwner:t.isOwner,goToEditMode:function(){o(!0)}}),Object(d.jsx)(h,{status:t.status,updateStatus:t.updateStatus})]})})}var C=function(t){var e=t.profile,s=t.isOwner,n=t.goToEditMode;return Object(d.jsxs)("div",{children:[s&&Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{name:"edit",onClick:n})," "]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(d.jsx)(S,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},S=function(t){var e=t.contactTitle,s=t.contactValue;return Object(d.jsxs)("div",{className:j.a.contact,children:[Object(d.jsx)("b",{children:e}),": ",s]})},y=s(162),A=s(57),T=s(399),w=s.n(T),I=s(400),N=s.n(I);function F(t){return Object(d.jsxs)("div",{className:N.a.item,children:[Object(d.jsx)("img",{src:"https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka.jpg",alt:""}),t.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:N.a.like,children:"like:"})," ",t.likesCount]})]})}var M=s(153),B=s(113),J=a.a.memo((function(t){var e=Object(A.a)(t.posts).reverse().map((function(t){return Object(d.jsx)(F,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(d.jsxs)("div",{className:w.a.postsBlock,children:[Object(d.jsx)("h2",{children:"My posts"}),Object(d.jsx)("div",{children:Object(d.jsx)(E,{onSubmit:function(e){""!==e.newPostText.trim()&&(t.addPost(e.newPostText.trim()),e.newPostText="")}})}),Object(d.jsx)("div",{className:w.a.posts,children:e})]})})),D=Object(B.a)(100),E=Object(p.a)({form:"profileAddPostForm"})((function(t){return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(M.a,{component:m.b,name:"newPostText",placeholder:"Enter your post",validate:[B.b,D],onKeyPress:function(t){t.key}})}),Object(d.jsx)("div",{children:Object(d.jsx)(P,{name:"Add post"})})]})})),U=s(17),z=Object(U.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(y.a)(e))}}}))(J);function V(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(d.jsx)(z,{})]})}var G=s(21),L=s(20),q=s(396),H=function(t){Object(i.a)(s,t);var e=Object(r.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/social-network/login"),this.props.setUserProfileThunkCreator(t),this.props.getStatusThunkCreator(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(d.jsx)(V,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunkCreator,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhotoThunkCreator,saveProfile:this.props.saveProfileThunkCreator})}}]),s}(a.a.Component);e.default=Object(L.d)(Object(U.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{setUserProfileThunkCreator:y.f,getStatusThunkCreator:y.b,updateStatusThunkCreator:y.g,savePhotoThunkCreator:y.d,saveProfileThunkCreator:y.e}),G.h,q.a)(H)}}]);
//# sourceMappingURL=3.8cd2ee98.chunk.js.map