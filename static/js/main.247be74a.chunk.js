(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),o=a(19),m=a(13);var i=function(e){return e.simpleModal?l.a.createElement("div",{className:"componentContainer container"},l.a.createElement("div",{className:"componentContainer__title"},l.a.createElement("h3",null,e.title)),l.a.createElement("div",{className:"componentContainer__content"},l.a.createElement("div",{className:"componentContainer__description"},e.description),l.a.createElement("div",{className:"componentContainer__additional"},l.a.createElement("button",null,e.simpleModal)))):l.a.createElement("div",{className:"componentContainer container"},l.a.createElement("div",{className:"componentContainer__title"},l.a.createElement("h3",null,e.title)),l.a.createElement("div",{className:"componentContainer__content"},l.a.createElement("div",{className:"componentContainer__description"},e.description),l.a.createElement("div",{className:"componentContainer__additional"})))};var u=function(e){return l.a.createElement("video",{className:"componentContainer__video",autoPlay:!0,muted:!0,loop:!0,src:e.href,type:"video/mp4"})},s=a(78),E=(a(113),function(e){return l.a.createElement(s.Player,{autoPay:!0,playsInline:!0,poster:"https://bitmovin.com/wp-content/uploads/2016/06/sintel-poster.jpg",src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"})}),d=a(21),p=a(135),v=a(139),b=a(80),f=a.n(b);function h(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)"),backgroundColor:"rgba(238, 238, 238);"}}var C=Object(p.a)((function(e){return{paper:{position:"absolute",width:"90%",backgroundColor:"rgba(238, 238, 238);",border:"2px solid #000",boxShadow:e.shadows[5]}}}));function g(e){var t=C(),a=l.a.useState(h),n=Object(d.a)(a,1)[0],r=l.a.useState(!1),c=Object(d.a)(r,2),o=c[0],m=c[1],i=l.a.createElement("div",{style:n,className:t.paper},e.video);return l.a.createElement("div",null,l.a.createElement("button",{type:"button",onClick:function(){m(!0)}},l.a.createElement(f.a,{className:"icon"})),l.a.createElement(v.a,{open:o,onClose:function(){m(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},i))}var N=function(e){return e.button?l.a.createElement("div",{className:"description"},l.a.createElement("h1",null,e.title),l.a.createElement("div",{className:"line"}),l.a.createElement("p",null,e.description),e.button):l.a.createElement("div",{className:"description"},l.a.createElement("h1",null,e.title),l.a.createElement("div",{className:"line"}),l.a.createElement("p",null,e.description))};function _(e){var t=Object(n.useState)(e.bgColor),a=Object(d.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(e.textColor),m=Object(d.a)(o,2),i=m[0],u=m[1];return l.a.createElement("a",{className:"custom-link",target:e.target,rel:"noopener noreferrer",href:e.to},l.a.createElement("button",{className:"custom-button",style:{backgroundColor:r,color:i},onMouseOver:function(){return c(e.hoverColor),void u(e.textColor)},onMouseLeave:function(){return c(e.bgColor),void u(e.textColor)}},e.title))}function k(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"home__container"},l.a.createElement(i,{title:"JOSE MAURICIO SOTELA PRENDERGAST",description:l.a.createElement(N,{title:"FULL-STACK WEB DEVELOPER",description:"\u201cA successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.\u201d",button:l.a.createElement(_,{title:"Mauricio GitHub",bgColor:"white",hoverColor:"black",textColor:"red",to:"https://github.com/Mauricio-Sotela",target:"_blank"})}),simpleModal:l.a.createElement(g,{video:l.a.createElement(E,null)})}),l.a.createElement("div",{className:"home__video"},l.a.createElement(u,{href:"https://assets.mixkit.co/videos/preview/mixkit-young-engineers-working-on-server-room-23161-large.mp4"}))))}function w(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"contact_menu"},l.a.createElement("div",{className:"logo"},l.a.createElement(o.b,{to:"/"},l.a.createElement(_,{title:"Back Home ",bgColor:"orange",hoverColor:"green",textColor:"white"})))),l.a.createElement("div",null,l.a.createElement("h1",null,"Thanks for taking the time to reach out. How can I help you today?")),l.a.createElement("div",{className:"container contact-form"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault()},id:"contact-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",rows:"5"})),l.a.createElement(_,{title:"Submit ",bgColor:"orange",hoverColor:"green",textColor:"white",type:"submit",className:"btn btn-primary"},"Submit"))))}var O=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"FOOTER"))},y=a(81),S=a.n(y),x=a(82),j=a.n(x),M=a(83),P=a.n(M);var I=function(){var e=l.a.createElement(j.a,null),t=l.a.createElement(P.a,null),a=Object(n.useState)(e),r=Object(d.a)(a,2),c=r[0],m=r[1],i=Object(n.useState)(0),u=Object(d.a)(i,2),s=u[0],E=u[1],p=function(){1===s&&(E(0),m(e))},v=function(){window.innerWidth>700&&m(e)},b=Object(n.useState)("nav__container"),f=Object(d.a)(b,2),h=f[0],C=f[1],g=function(){var e=window.scrollY;C(e<10?"nav__container":"nav__container scrolled")};return Object(n.useEffect)((function(){window.addEventListener("scroll",g),window.addEventListener("resize",v)})),l.a.createElement("div",{className:h},l.a.createElement("nav",{className:"container main_nav"},l.a.createElement("div",{className:"logo"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{src:S.a,alt:"logo"}))),l.a.createElement("div",{className:"menu__container"},l.a.createElement("ul",{className:1===s?"menuOpen":""},l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(o.b,{to:"/Portfolio"},"Home")),l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(o.b,{to:"/About"},"About Me")),l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(o.b,{to:"/Skills"},"Skills")),l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(o.b,{to:"/Projects"},"Projects")),l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(o.b,{to:"/contact"},"Contact Me")))),l.a.createElement("div",{className:"burgerMenu",onClick:function(){0===s?(m(t),E(1)):1===s&&(m(e),E(0))}},c)))};var L=function(){return l.a.createElement("div",{className:"about__container"},l.a.createElement(i,{title:"ABOUT ME",description:l.a.createElement(N,{title:"FULL-STACK WEB DEVELOPER",description:"Hello! my name is Mauricio Sotela Prendergast, I'm a Web Developer student in DCI Berlin, Germany. I have serious passion for Front-End and Back-End development, focus in learning new technologies and web tendencies.",button:l.a.createElement(_,{title:"Contact Me",bgColor:"white",hoverColor:"black",textColor:"red",to:"./Contact.js",target:""})})}))};function A(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/contact"},l.a.createElement(w,null)),l.a.createElement(m.a,{exact:!0,path:"/about"},l.a.createElement(L,null)),l.a.createElement(m.a,{exact:!0,path:"/Portfolio"},l.a.createElement(k,null))),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null)))}a(116),a(117),a(118);c.a.render(l.a.createElement(A,null),document.getElementById("root"))},81:function(e,t,a){e.exports=a.p+"static/media/logo.dddfd63b.svg"},85:function(e,t,a){e.exports=a(119)}},[[85,1,2]]]);
//# sourceMappingURL=main.247be74a.chunk.js.map