(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(21),r=a.n(l),c=a(23),i=a(13),m=a(24);function s(e){var t=Object(n.useState)(e.bgColor),a=Object(m.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(e.textColor),i=Object(m.a)(c,2),s=i[0],u=i[1];return o.a.createElement("a",{className:"custom-link",target:"_blank",rel:"noopener noreferrer",href:e.to},o.a.createElement("button",{className:"custom-button",style:{backgroundColor:l,color:s},onMouseOver:function(){return r(e.hoverColor),void u(e.textColor)},onMouseLeave:function(){return r(e.bgColor),void u(e.textColor)}},e.title))}var u=function(e){return o.a.createElement("div",{className:"description"},o.a.createElement("h1",null,e.title),o.a.createElement("div",null),o.a.createElement("p",null,e.description),o.a.createElement(s,{title:"Mauricio GitHub",bgColor:"white",hoverColor:"black",textColor:"red",to:"https://github.com/Mauricio-Sotela"}))},E=a(77),d=(a(110),function(e){return o.a.createElement(E.Player,{autoPay:!0,playsInline:!0,poster:"https://bitmovin.com/wp-content/uploads/2016/06/sintel-poster.jpg",src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"})}),p=a(132),v=a(136),b=a(79),f=a.n(b);function h(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)"),backgroundColor:"rgba(238, 238, 238);"}}var g=Object(p.a)((function(e){return{paper:{position:"absolute",width:500,backgroundColor:"rgba(238, 238, 238);",border:"2px solid #000",boxShadow:e.shadows[5]}}}));function C(e){var t=g(),a=o.a.useState(h),n=Object(m.a)(a,1)[0],l=o.a.useState(!1),r=Object(m.a)(l,2),c=r[0],i=r[1],s=o.a.createElement("div",{style:n,className:t.paper},e.video);return o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){i(!0)}},o.a.createElement(f.a,{className:"icon"})),o.a.createElement(v.a,{open:c,onClose:function(){i(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},s))}var N=function(e){return o.a.createElement("div",{className:"componentContainer"},o.a.createElement("div",{className:"componentContainer__title"},o.a.createElement("h3",null,"JOSE MAURICIO SOTELA PRENDERGAST")),o.a.createElement("div",{className:"componentContainer__content"},o.a.createElement("div",{className:"componentContainer__description"},o.a.createElement(u,{title:"FULL-STACK WEB DEVELOPER",description:"\u201cA successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.\u201d"})),o.a.createElement("div",{className:"componentContainer__additional"},o.a.createElement("button",null,o.a.createElement(C,{video:o.a.createElement(d,null)})))))},_=a(80),y=a.n(_);var w=function(){return o.a.createElement("video",{className:"componentContainer__video",autoPlay:!0,muted:!0,loop:!0,src:y.a,type:"video/mp4"})};function O(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"home__container"},o.a.createElement(N,{title:"TEST"}),o.a.createElement("div",{className:"home__video"},o.a.createElement(w,null))))}function x(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"contact_menu"},o.a.createElement("div",{className:"logo"},o.a.createElement(c.b,{to:"/"},o.a.createElement(s,{title:"Back Home ",bgColor:"orange",hoverColor:"green",textColor:"white"})))),o.a.createElement("div",null,o.a.createElement("h1",null,"Thanks for taking the time to reach out. How can I help you today?")),o.a.createElement("div",{className:"container contact-form"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault()},id:"contact-form"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",className:"form-control"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),o.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{className:"form-control",rows:"5"})),o.a.createElement(s,{title:"Submit ",bgColor:"orange",hoverColor:"green",textColor:"white",type:"submit",className:"btn btn-primary"},"Submit"))))}var S=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"FOOTER"))};var k=function(){var e=Object(n.useState)("nav__container"),t=Object(m.a)(e,2),a=t[0],l=t[1],r=function(){var e=window.scrollY;l(e<10?"nav__container":"scrolled")};return Object(n.useEffect)((function(){window.addEventListener("scroll",r)})),o.a.createElement("div",{className:a},o.a.createElement("nav",{className:"container main_nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.b,{to:"/Portfolio"},"Home")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/contact"},"Contact Me")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/topics"},"Topics")))))};function j(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/contact"},o.a.createElement(x,null)),o.a.createElement(i.a,{exact:!0,path:"/Portfolio"},o.a.createElement(O,null)))),o.a.createElement(S,null))}a(114),a(115);r.a.render(o.a.createElement(j,null),document.getElementById("root"))},80:function(e,t,a){e.exports=a.p+"static/media/bgVideo.aa05cc53.mp4"},82:function(e,t,a){e.exports=a(116)}},[[82,1,2]]]);
//# sourceMappingURL=main.93457957.chunk.js.map