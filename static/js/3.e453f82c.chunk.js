(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{398:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var o=s(8),n=s(153),r=(s(0),s(17)),i=s(21),c=s(1),a=["isAuth"],u=function(t){return{isAuth:t.auth.isAuth}};function l(t){return Object(r.b)(u)((function(e){var s=e.isAuth,r=Object(n.a)(e,a);return s?Object(c.jsx)(t,Object(o.a)({},r)):Object(c.jsx)(i.a,{to:"/social-network/login"})}))}},399:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__30lGR",img:"ProfileInfo_img__22Ie5",mainPhoto:"ProfileInfo_mainPhoto__1-G_8",contact:"ProfileInfo_contact__48AAV",button:"ProfileInfo_button__224hj"}},400:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3qwSj",posts:"MyPosts_posts__1juom"}},401:function(t,e,s){t.exports={like:"Post_like__pSu4s",item:"Post_item__3dw9H"}},404:function(t,e,s){"use strict";s.r(e),s.d(e,"ProfileAPIContainer",(function(){return L}));var o=s(164),n=s(165),r=s(201),i=s(199),c=s(0),a=s.n(c),u=s(162),l=s(399),j=s.n(l),b=s(116),d=s(1),h=function(t){var e=Object(c.useState)(!1),s=Object(u.a)(e,2),o=s[0],n=s[1],r=Object(c.useState)(t.status),i=Object(u.a)(r,2),a=i[0],l=i[1];Object(c.useEffect)((function(){l(t.status)}),[t.status]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[!o&&Object(d.jsx)("div",{children:Object(d.jsxs)("span",{onDoubleClick:function(){n(!0)},children:[" ",Object(d.jsx)("b",{children:"Status"}),": ",t.status||"----"]})}),o&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(a)},value:a})})]})})},f=s(186),p=s(198),O=s(92),x=s.n(O),m=s(91),v=s(62),k=Object(p.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,o=t.error;return Object(d.jsxs)("form",{onSubmit:e,children:[Object(d.jsx)(v.a,{name:"save"}),o&&Object(d.jsx)("div",{className:x.a.formSummaryError,children:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name"}),": ",Object(m.c)("Full name","fullName",[],m.a)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job"}),": ",Object(m.c)("","lookingForAJob",[],m.a,{type:"checkbox"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"}),":",Object(m.c)("My professional skills","lookingForAJobDescription",[],m.b)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me"}),":",Object(m.c)("About me","aboutMe",[],m.b)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(d.jsx)("div",{className:x.a.contact,children:Object(d.jsxs)("b",{children:[t,": ",Object(m.c)(t,"contacts."+t,[],m.a)]})},t)}))]})]})}));function P(t){var e=Object(c.useState)(!1),s=Object(u.a)(e,2),o=s[0],n=s[1];if(!t.profile)return Object(d.jsx)(b.a,{});return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(d.jsx)("img",{src:t.profile.photos.large||f.a,className:j.a.mainPhoto,alt:""}),t.isOwner&&Object(d.jsx)("input",{className:j.a.button,type:"file",onChange:function(e){e.target.files&&e.target.files.length&&t.savePhoto(e.target.files[0])}}),o?Object(d.jsx)(k,{initialValues:t.profile,profile:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){n(!1)}))}}):Object(d.jsx)(g,{profile:t.profile,isOwner:t.isOwner,goToEditMode:function(){n(!0)}}),Object(d.jsx)(h,{status:t.status,updateStatus:t.updateStatus})]})})}var g=function(t){var e=t.profile,s=t.isOwner,o=t.goToEditMode;return Object(d.jsxs)("div",{children:[s&&Object(d.jsxs)("div",{children:[Object(d.jsx)(v.a,{name:"edit",onClick:o})," "]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(d.jsx)(_,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},_=function(t){var e=t.contactTitle,s=t.contactValue;return Object(d.jsxs)("div",{className:j.a.contact,children:[Object(d.jsx)("b",{children:e}),": ",s]})},S=s(163),w=s(55),y=s(400),C=s.n(y),A=s(401),T=s.n(A);function I(t){return Object(d.jsxs)("div",{className:T.a.item,children:[Object(d.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",alt:""}),t.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:T.a.like,children:"like:"})," ",t.likesCount]})]})}var N=s(154),F=s(114),M=a.a.memo((function(t){var e=Object(w.a)(t.posts).reverse().map((function(t){return Object(d.jsx)(I,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(d.jsxs)("div",{className:C.a.postsBlock,children:[Object(d.jsx)("h2",{children:"My posts"}),Object(d.jsx)("div",{children:Object(d.jsx)(J,{onSubmit:function(e){""!==e.newPostText.trim()&&(t.addPost(e.newPostText.trim()),e.newPostText="")}})}),Object(d.jsx)("div",{className:C.a.posts,children:e})]})})),B=Object(F.a)(100),J=Object(p.a)({form:"profileAddPostForm"})((function(t){return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{component:m.b,name:"newPostText",placeholder:"Enter your post",validate:[F.b,B],onKeyPress:function(t){t.key}})}),Object(d.jsx)("div",{children:Object(d.jsx)(v.a,{name:"Add post"})})]})})),D=s(17),E=Object(D.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(S.a)(e))}}}))(M);function U(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(d.jsx)(E,{})]})}var V=s(21),z=s(20),G=s(398),L=function(t){Object(r.a)(s,t);var e=Object(i.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/social-network/login"),this.props.setUserProfileThunkCreator(t),this.props.getStatusThunkCreator(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(d.jsx)(U,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunkCreator,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhotoThunkCreator,saveProfile:this.props.saveProfileThunkCreator})}}]),s}(a.a.Component);e.default=Object(z.d)(Object(D.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{setUserProfileThunkCreator:S.f,getStatusThunkCreator:S.b,updateStatusThunkCreator:S.g,savePhotoThunkCreator:S.d,saveProfileThunkCreator:S.e}),V.h,G.a)(L)}}]);
//# sourceMappingURL=3.e453f82c.chunk.js.map