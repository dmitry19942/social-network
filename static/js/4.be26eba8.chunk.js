(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{397:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1Qqv4",dialogsItems:"Dialogs_dialogsItems__kD1r2",active:"Dialogs_active__13x0l",messages:"Dialogs_messages__4eULh",dialog:"Dialogs_dialog__4yIMx",message:"Dialogs_message__-pyI3"}},398:function(e,s,a){"use strict";a.d(s,"a",(function(){return g}));var i=a(8),t=a(153),n=(a(0),a(17)),c=a(21),o=a(1),d=["isAuth"],r=function(e){return{isAuth:e.auth.isAuth}};function g(e){return Object(n.b)(r)((function(s){var a=s.isAuth,n=Object(t.a)(s,d);return a?Object(o.jsx)(e,Object(i.a)({},n)):Object(o.jsx)(c.a,{to:"/social-network/login"})}))}},405:function(e,s,a){"use strict";a.r(s);var i=a(175),t=(a(0),a(39)),n=a(397),c=a.n(n),o=a(1),d=function(e){var s="/social-network/dialogs/"+e.id;return Object(o.jsxs)("div",{className:c.a.dialog+" "+c.a.active,children:[Object(o.jsx)("img",{src:e.img,alt:""}),Object(o.jsx)(t.c,{to:s,children:e.name})]})},r=function(e){return Object(o.jsx)("div",{className:c.a.message,children:e.messages})},g=a(154),l=a(198),j=a(91),m=a(114),u=a(62),b=Object(m.a)(50),O=Object(l.a)({form:"dialogAddMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(g.a,{component:j.b,validate:[m.b,b],name:"newMessageBody",placeholder:"Enter your message",style:{height:"43px",width:"200px",marginTop:"-6px"}})}),Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{name:"Send"})})]})})),h=a(17),x=a(20),f=a(398);s.default=Object(x.d)(Object(h.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),f.a)((function(e){var s=e.dialogs.map((function(e){return Object(o.jsx)(d,{name:e.name,id:e.id,img:e.img},e.id)})),a=e.messages.map((function(e){return Object(o.jsx)(r,{messages:e.messages,id:e.id},e.id)}));return Object(o.jsxs)("div",{className:c.a.dialogs,children:[Object(o.jsx)("div",{className:c.a.dialogsItems,children:s}),Object(o.jsxs)("div",{className:c.a.messages,children:[Object(o.jsx)("div",{children:a}),Object(o.jsx)("div",{children:Object(o.jsx)(O,{onSubmit:function(s){""!==s.newMessageBody.trim()&&(e.sendMessage(s.newMessageBody.trim()),s.newMessageBody="")}})})]})]})}))}}]);
//# sourceMappingURL=4.be26eba8.chunk.js.map