(this["webpackJsonpreact-one"]=this["webpackJsonpreact-one"]||[]).push([[4],{292:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__cVsJy",dialogsItems:"Dialogs_dialogsItems__zFxr3",active:"Dialogs_active__3wpXm",messages:"Dialogs_messages__2QpjB",message:"Dialogs_message__3zPaM",btn:"Dialogs_btn__1Oz0T"}},297:function(e,s,a){"use strict";a.r(s);var t=a(0),n=a.n(t),i=a(129),c=a(292),o=a.n(c),r=a(22),d=a(1),j=function(e){var s="/dialogs/"+e.id;return Object(d.jsx)("div",{className:o.a.dialog+" "+o.a.active,children:Object(d.jsx)(r.b,{to:s,children:e.name})})},l=function(e){return Object(d.jsx)("div",{className:o.a.dialog,children:e.message})},b=a(12),u=a(91),g=a(130),m=a(26),O=a(48),h=Object(O.a)(50),f=Object(g.a)({form:"dialog-add-message-form"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{component:m.b,validate:[O.b,h],placeholder:"Enter your message",name:"newMessageBody"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:o.a.btn,children:"Send"})})]})})),x=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(d.jsx)(j,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(d.jsx)(l,{message:e.message},e.id)}));s.newMessageBody;return e.isAuth?Object(d.jsxs)("div",{className:o.a.dialogs,children:[Object(d.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(d.jsx)("div",{className:o.a.messages,children:Object(d.jsx)("div",{children:t})}),Object(d.jsx)(f,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(d.jsx)(b.a,{to:"/login"})},p=a(18),v=a(3),_=a(37),y=a(38),w=a(40),D=a(39),M=function(e){return{isAuth:e.auth.isAuth}},N=a(10);s.default=Object(N.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),(function(e){var s=function(s){Object(w.a)(t,s);var a=Object(D.a)(t);function t(){return Object(_.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(v.a)({},this.props)):Object(d.jsx)(b.a,{to:"/login"})}}]),t}(n.a.Component);return Object(p.b)(M)(s)}))(x)}}]);
//# sourceMappingURL=4.6a6c6d5f.chunk.js.map