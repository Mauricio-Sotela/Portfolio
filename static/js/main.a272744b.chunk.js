(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(22),r=a.n(o),c=a(20),i=a(13),s=a(158);var m=function(e){var t=e.skills.map((function(e){return l.a.createElement("div",{className:"icon__box",key:e.id},e.icon&&l.a.createElement("i",{className:e.icon}),e.img&&l.a.createElement("span",{className:"iconify","data-icon":e.img,"data-inline":"false"}),e.unknown&&l.a.createElement("img",{align:"center",alt:"express",width:"80%",src:e.external__url}))}));return l.a.createElement("div",{className:"skills__icons"},t)},u=a(89),d=(a(110),a(27));var p=function(){var e=d.projects.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("img",{alt:"",src:e.img}),l.a.createElement("a",{href:e.url,target:"blank"}," ",l.a.createElement("p",{className:"legend"},"Visit the ",l.a.createElement("span",null,e.label)," project website")))}));return l.a.createElement(u.Carousel,{autoPlay:!0,infiniteLoop:!0},e)};var E=function(e){return e.simpleModal?l.a.createElement("div",{className:"componentContainer container"},l.a.createElement("div",{className:"componentContainer__title"},l.a.createElement("h3",null,e.title)),l.a.createElement("div",{className:"componentContainer__content"},l.a.createElement("div",{className:"componentContainer__description"},e.description),l.a.createElement("div",{className:"componentContainer__additional video"},l.a.createElement("button",null,e.simpleModal)))):l.a.createElement("div",{className:"componentContainer container"},l.a.createElement("div",{className:"componentContainer__title"},l.a.createElement("h3",null,e.title)),l.a.createElement("div",{className:"componentContainer__content"},l.a.createElement("div",{className:"componentContainer__description"},e.description),l.a.createElement("div",{className:"componentContainer__additional"},e.img&&l.a.createElement(s.a,{alt:"IMG",src:e.img}),e.skills&&l.a.createElement(m,{skills:d.skills}),e.slider&&l.a.createElement(p,null))))};var g=function(e){return l.a.createElement("video",{className:"componentContainer__video",autoPlay:!0,muted:!0,loop:!0,src:e.href,type:"video/mp4"})},h=a(90),f=(a(133),function(e){return l.a.createElement(h.Player,{autoPay:!0,playsInline:!0,poster:"https://bitmovin.com/wp-content/uploads/2016/06/sintel-poster.jpg",src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"})}),b=a(17),v=a(156),_=a(157);function N(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)"),backgroundColor:"rgba(238, 238, 238);"}}var C=Object(v.a)((function(e){return{paper:{position:"absolute",width:"90%",backgroundColor:"rgba(238, 238, 238)",border:"2px solid #000",boxShadow:e.shadows[5]}}}));function k(e){var t=C(),a=l.a.useState(N),n=Object(b.a)(a,1)[0],o=l.a.useState(!1),r=Object(b.a)(o,2),c=r[0],i=r[1],s=l.a.createElement("div",{style:n,className:t.paper},e.video&&e.video,e.slider&&e.slider);return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){i(!0)}},e.icon&&e.icon)),l.a.createElement(_.a,{open:c,onClose:function(){i(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},s))}var S=a(92),w=a.n(S);var j=function(e){return e.button?l.a.createElement("div",{className:"description"},l.a.createElement("h1",null,e.title),l.a.createElement("div",{className:"line"}),l.a.createElement("p",null,e.description),e.button):l.a.createElement("div",{className:"description"},l.a.createElement("h1",null,e.title),l.a.createElement("div",{className:"line"}),l.a.createElement("p",null,e.description))};function y(e){var t=Object(n.useState)(e.bgColor),a=Object(b.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(e.textColor),s=Object(b.a)(i,2),m=s[0],u=s[1],d=function(){r(e.hoverColor),u(e.textColor)},p=function(){r(e.bgColor),u(e.textColor)};return""===e.target?l.a.createElement(c.b,{to:e.to,className:"custom-link",rel:"noopener noreferrer"},l.a.createElement("button",{className:"custom-button",style:{backgroundColor:o,color:m},onMouseOver:function(){return d()},onMouseLeave:function(){return p()}},e.title)):l.a.createElement("a",{className:"custom-link",target:e.target,rel:"noopener noreferrer",href:e.to},l.a.createElement("button",{className:"custom-button",style:{backgroundColor:o,color:m},onMouseOver:function(){return d()},onMouseLeave:function(){return p()}},e.title))}function O(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"home__container"},l.a.createElement(E,{title:"JOSE MAURICIO SOTELA PRENDERGAST",description:l.a.createElement(j,{title:"FULL-STACK WEB DEVELOPER",description:"\u201cA successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.\u201d",button:l.a.createElement(y,{title:"GitHub",bgColor:"rgba(0,0,0,.8)",hoverColor:"white",textColor:"red",to:"https://github.com/Mauricio-Sotela",target:"_blank"})}),simpleModal:l.a.createElement(k,{video:l.a.createElement(f,null),icon:l.a.createElement(w.a,{className:"icon"})})}),l.a.createElement("div",{className:"home__video"},l.a.createElement(g,{href:"https://assets.mixkit.co/videos/preview/mixkit-young-engineers-working-on-server-room-23161-large.mp4"}))))}var M=a(24),x=a(93),I=a.n(x);function P(e){var t=Object(n.useState)({name:"",email:"",phone:"",msg:""}),a=Object(b.a)(t,2),o=a[0],r=a[1];return l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"contact-title"},l.a.createElement("h3",null,"CONTACT")),l.a.createElement("div",{className:"container contact-form"},l.a.createElement("div",{className:"contact-image"},l.a.createElement("img",{src:I.a,alt:"rocket_contact"})),l.a.createElement("form",{onSubmit:function(e){e.preventDefault()},method:""},l.a.createElement("h3",null,"Drop Me a Message"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"txtName",className:"form-control",placeholder:"Your Name *",value:o.name,onChange:function(e){r(Object(M.a)(Object(M.a)({},o),{},{name:e.target.value}))}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",name:"txtEmail",className:"form-control",placeholder:"Your Email *",value:o.email,onChange:function(e){r(Object(M.a)(Object(M.a)({},o),{},{email:e.target.value}))}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"tel",name:"txtPhone",className:"form-control",placeholder:"Your Phone Number *",value:o.phone,onChange:function(e){r(Object(M.a)(Object(M.a)({},o),{},{phone:e.target.value}))}}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group txt_area"},l.a.createElement("textarea",{name:"txtMsg",className:"form-control",placeholder:"Your Message *",value:o.img,onChange:function(e){r(Object(M.a)(Object(M.a)({},o),{},{msg:e.target.value}))}})))),l.a.createElement("div",{className:"form-group s_btn"},l.a.createElement("input",{type:"submit",name:"btnSubmit",className:"btnContact",value:"Send Message"}))))))}var A=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("ul",{className:"social-network social-circle"},l.a.createElement("li",null,l.a.createElement("a",{className:"icoLinkedin",target:"blank",href:"https://www.linkedin.com/in/jos%C3%A9-sotela/",title:"Linkedin"},l.a.createElement("i",{className:"fab fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"icoGithub",target:"blank",href:"https://github.com/Mauricio-Sotela",title:"GitHub"},l.a.createElement("i",{className:"fab fa-github-square"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"icoHotmail",href:"mailto:j-ms-27@hotmail.com",title:"Hot Mail"},l.a.createElement("i",{className:"fas fa-envelope"})))))},L=a(94),T=a.n(L),G=a(95),J=a.n(G),H=a(96),D=a.n(H);var R=function(){var e=l.a.createElement(J.a,null),t=l.a.createElement(D.a,null),a=Object(n.useState)(e),o=Object(b.a)(a,2),r=o[0],i=o[1],s=Object(n.useState)(0),m=Object(b.a)(s,2),u=m[0],d=m[1],p=function(){1===u&&(d(0),i(e))},E=function(){window.innerWidth>700&&i(e)},g=Object(n.useState)("nav__container"),h=Object(b.a)(g,2),f=h[0],v=h[1],_=function(){var e=window.scrollY;v(e<10?"nav__container":"nav__container scrolled")};return Object(n.useEffect)((function(){window.addEventListener("scroll",_),window.addEventListener("resize",E)})),l.a.createElement("div",{className:f},l.a.createElement("nav",{className:"container main_nav"},l.a.createElement("div",{className:"logo"},l.a.createElement(c.b,{to:"/portfolio"},l.a.createElement("img",{src:T.a,alt:"logo"}))),l.a.createElement("div",{className:"menu__container"},l.a.createElement("ul",{className:1===u?"menuOpen":""},l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(c.b,{to:"/portfolio"},"Home")),l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(c.b,{to:"/about"},"About Me")),l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(c.b,{to:"/skills"},"Skills")),l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(c.b,{to:"/projects"},"Projects")),l.a.createElement("li",{onClick:function(){p()}},l.a.createElement(c.b,{to:"/contact"},"Contact Me")))),l.a.createElement("div",{className:"burgerMenu",onClick:function(){0===u?(i(t),d(1)):1===u&&(i(e),d(0))}},r)))};var W=function(){return l.a.createElement("div",{className:"about__container"},l.a.createElement(E,{img:"https://avatars3.githubusercontent.com/u/55654453?s=460&u=43d4e8f576aa12909e38997048676242ce9e251f&v=4",title:"ABOUT ME",description:l.a.createElement(j,{title:"FULL-STACK WEB DEVELOPER",description:"Hello! my name is Mauricio Sotela Prendergast, I'm a Web Developer student in DCI Berlin, Germany. I have serious passion for Front-End and Back-End development, focus in learning new technologies and web tendencies.",button:l.a.createElement(y,{title:"Contact Me",bgColor:"rgba(0,0,0,.8)",hoverColor:"white",textColor:"red",to:"/contact",target:""})})}))};function V(e){return l.a.createElement("div",{className:"skills__container"},l.a.createElement(E,{skills:!0,title:"SKILLS",description:l.a.createElement(j,{title:"Front-end / Back-end",description:"I develop web sites using a combination of graphic design skills and technical computer skills that will allow me to create particular web pages. In addition to looking nice, I use different technologies to make the web sites functional and secure, always according with the requirements of employers or clients."})}))}var B=function(e){var t=e.project,a=t.logo,n=t.project__name,o=t.description,r=t.site__img,c=t.client__img,i=t.client__name,m=t.client__profession,u=t.client__testimony,d=t.company__name,p=t.url,E=t.color1,g=t.color2,h=t.color3;return l.a.createElement("div",{className:"fullProject"},l.a.createElement("div",{className:"fullProject__info",style:{background:"linear-gradient(to right,".concat(E," -50%,").concat(g,"  )")}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"left"},""===a?l.a.createElement("svg",{height:"10%",width:"50%"},l.a.createElement("text",{x:"0",y:"40",fill:"red",fontSize:"4rem",fontWeight:"bold"},"JMSP"),"Sorry, your browser does not support inline SVG."):l.a.createElement("img",{alt:"img",src:a}),l.a.createElement("h2",null,n),l.a.createElement("p",null,o),l.a.createElement("button",{className:"f-btn"},l.a.createElement("a",{className:"f-anc",href:p,target:"blank"},"Go to the page"))),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"img__container"},l.a.createElement("a",{href:r,target:"blank"},l.a.createElement("img",{alt:"img",src:r})))))),l.a.createElement("div",{className:"fullProject__comment",style:{background:"".concat(h," ")}},l.a.createElement("div",{className:"container"},l.a.createElement(s.a,{className:"avatar",alt:"avatar_img",src:c}),l.a.createElement("div",{className:"client"},l.a.createElement("p",{className:"testimony"},u),l.a.createElement("p",null,l.a.createElement("span",null,i),l.a.createElement("span",null," "," / ".concat(m))),l.a.createElement("p",null,l.a.createElement("strong",null,d))))))};function Y(e){var t=d.fullProjects.map((function(e){return l.a.createElement(B,{key:e.id,project:e})}));return l.a.createElement("div",null,l.a.createElement("div",{className:"slider__container container"},l.a.createElement(E,{title:"PROJECTS",slider:"true"})),t)}function U(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"main__div"},l.a.createElement(R,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/skills"},l.a.createElement(V,null)),l.a.createElement(i.a,{exact:!0,path:"/contact"},l.a.createElement(P,null)),l.a.createElement(i.a,{exact:!0,path:"/about"},l.a.createElement(W,null)),l.a.createElement(i.a,{exact:!0,path:"/portfolio"},l.a.createElement(O,null),l.a.createElement(W,null),l.a.createElement(V,null),l.a.createElement(Y,null),l.a.createElement(P,null)),l.a.createElement(i.a,{exact:!0,path:"/projects"},l.a.createElement(Y,null))),l.a.createElement(A,null)))}a(135),a(136),a(137);r.a.render(l.a.createElement(U,null),document.getElementById("root"))},27:function(e){e.exports=JSON.parse('{"skills":[{"id":"01","icon":"fab fa-sass"},{"id":"02","icon":"fab fa-html5"},{"id":"03","icon":"fab fa-css3-alt"},{"id":"04","icon":"fab fa-js"},{"id":"05","icon":"fab fa-node"},{"id":"06","icon":"fab fa-git"},{"id":"07","icon":"fab fa-github"},{"id":"08","icon":"fas fa-terminal"},{"id":"09","img":"file-icons:vscode"},{"id":"10","img":"cib:react"},{"id":"11","img":"cib:mongodb"},{"id":"12","img":"mdi:regex"},{"id":"13","unknown":"express","external__url":"https://timmymatthews.com/images/express.png"}],"projects":[{"id":"01","img":"https://raw.githubusercontent.com/Mauricio-Sotela/Storege/master/projects_picts/mauricio-sotela.github.io_shopping_car_.png?token=ANITQNLKOTYEPR5GRDCPMR27NSGPG","label":"Shopping-card","url":"https://mauricio-sotela.github.io/shopping-card/"},{"id":"02","img":"https://raw.githubusercontent.com/Mauricio-Sotela/Storege/master/projects_picts/mauricio-sotela.github.io_weather_app_.png?token=ANITQNMCI3UVLA3S7NION2C7NSG3C","label":"Weather_app","url":"https://mauricio-sotela.github.io/weather_app/"},{"id":"03","img":"https://raw.githubusercontent.com/Mauricio-Sotela/Storege/master/projects_picts/mauricio-sotela.github.io_Instagram-react_.png?token=ANITQNIKH2NCBNSJXPP64H27NSHDM","label":"Instagram-clone","url":"https://mauricio-sotela.github.io/Instagram-react/"},{"id":"04","img":"https://raw.githubusercontent.com/Mauricio-Sotela/Storege/master/projects_picts/mauricio-sotela.github.io_Online_Shop_.png?token=ANITQNLC4ES66CRCLIAKWMC7NSHMG","label":"Online-shop","url":"https://mauricio-sotela.github.io/Online_Shop/"},{"id":"05","img":"https://raw.githubusercontent.com/Mauricio-Sotela/Storege/master/projects_picts/mauricio-sotela.github.io_vehicules_.png?token=ANITQNIAUYJOAOZ4JTLPVO27NSHRY","label":"Vehicles","url":"https://mauricio-sotela.github.io/vehicules/"}],"fullProjects":[{"id":1,"logo":"","project__name":"Weather-App","description":"This weather app was created with react, here you can find find information about the weather in many different cities around the world","site__img":"https://raw.githubusercontent.com/Mauricio-Sotela/Storege/master/projects_picts/mauricio-sotela.github.io_weather_app_.png?token=ANITQNMCI3UVLA3S7NION2C7NSG3C","client__img":"https://avatars3.githubusercontent.com/u/55654453?s=460&u=43d4e8f576aa12909e38997048676242ce9e251f&v=4","client__name":"Jose Mauricio Sotela Prendergast","client__profession":"Web Developer","company__name":"JMSP","client__testimony":"Creating this app I got some experience on react by using different npm packages.","url":"https://mauricio-sotela.github.io/weather_app/","color1":"#02aab0 ","color2":"#00cdac","color3":"white"},{"id":2,"logo":"","project__name":"Vehicles","description":"Here you can find information about different kinds of vehicles, you also can filter your search depending on the vehicle type.","site__img":"https://raw.githubusercontent.com/Mauricio-Sotela/vehicules/master/images/spercarshot.png","client__img":"https://avatars3.githubusercontent.com/u/55654453?s=460&u=43d4e8f576aa12909e38997048676242ce9e251f&v=4","client__name":"Jose Mauricio Sotela Prendergast","client__profession":"Web Developer","company__name":"JMSP","client__testimony":"A web site created with vanilla JavaScript, HTML and CSS.","url":"https://mauricio-sotela.github.io/vehicules/","color1":"#2193b0 ","color2":"#6dd5ed","color3":"white"}]}')},93:function(e,t,a){e.exports=a.p+"static/media/rocket.eacb1738.png"},94:function(e,t,a){e.exports=a.p+"static/media/logo.dddfd63b.svg"},99:function(e,t,a){e.exports=a(138)}},[[99,1,2]]]);
//# sourceMappingURL=main.a272744b.chunk.js.map