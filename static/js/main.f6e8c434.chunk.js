(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{31:function(e,t,a){e.exports=a(62)},36:function(e,t,a){},59:function(e,t,a){e.exports=a.p+"static/media/profile.8bd7fa66.jpeg"},60:function(e,t,a){e.exports=a.p+"static/media/covid-19-thumb.81595068.png"},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(29),r=a.n(l),o=(a(36),a(4)),c=a(5),s=a(7),m=a(6),u=a(12),d=a(2),p=a(15),b=a.n(p),h=a(1),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a.div,{className:"header-container",initial:{y:100,opacity:-3},animate:{y:0,opacity:1},transition:{duration:1.5}},i.a.createElement(u.b,{className:"header-link",to:"/"},"home"),i.a.createElement(u.b,{className:"header-link",to:"/about"},"about me"),i.a.createElement(u.b,{className:"header-link",to:"/skills"},"skills"),i.a.createElement(u.b,{className:"header-link",to:"/work"},"work"),i.a.createElement(u.b,{className:"header-link",to:"/contact"},"contact"))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"home-container"},i.a.createElement("div",{id:"bg-container"},i.a.createElement(h.a.div,{id:"bg-1",initial:{y:2e3,opacity:-5},animate:{y:0,opacity:1},transition:{duration:3.5}}),i.a.createElement(h.a.div,{id:"bg-2",initial:{x:2e3,opacity:-5},animate:{x:0,opacity:1},transition:{duration:4.5}})),i.a.createElement("div",{id:"greeting-container"},i.a.createElement(h.a.div,{id:"greeting",initial:{x:100,opacity:0},animate:{x:0,opacity:1},transition:{delay:1,duration:1.5}},"Hi, my name is"," ",i.a.createElement(h.a.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:4.1,duration:.2},style:{color:"whitesmoke",textDecoration:"underline"}},"Wesley Kater"),"."),i.a.createElement(h.a.div,{initial:{x:100,opacity:-5},animate:{x:0,opacity:1},transition:{delay:3.5,duration:1}},i.a.createElement("span",{id:"greeting-intro"},"I'm a"," ",i.a.createElement("span",{style:{color:"whitesmoke",textDecoration:"underline"}},"full-stack")," ","web developer."))))}}]),a}(n.Component),f=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"about-container"},i.a.createElement(h.a.h1,{id:"about-title",initial:{x:-100,opacity:-10},animate:{x:0,opacity:1},transition:{duration:1}},"About me"),i.a.createElement(h.a.div,{id:"about-section",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:1}},i.a.createElement(h.a.div,{id:"selfie",initial:{x:50,opacity:-1},animate:{x:0,opacity:1},transition:{delay:.8,duration:1}},i.a.createElement("img",{src:a(59),alt:"selfie",style:{borderRadius:200}})),i.a.createElement("br",null),i.a.createElement(h.a.div,{id:"about-me-intro",initial:{x:50,opacity:-1},animate:{x:0,opacity:1},transition:{delay:.8,duration:1}},i.a.createElement("p",null,"I'm a ",i.a.createElement("span",{className:"highlight"}," junior full-stack web developer")," ","with a passion for designing and building user-friendly and responsive web applications and websites.",i.a.createElement("br",null)," In addition to programming as a hobby, I signed up for and graduated from the intensive on-site full-stack developer bootcamp organized by"," ",i.a.createElement("span",{className:"highlight"},"Code For All_The Netherlands"),", the Dutch branch from the succesful Portuguese organization"," ",i.a.createElement("span",{className:"highlight"},"Academia de Codigo"),".",i.a.createElement("br",null)," Not only did I got to program and learn a lot of new techniques, but I also focused on improving my softskills a lot too.",i.a.createElement("br",null),i.a.createElement("br",null),"I'm experienced in HTML, CSS and JavaScript and develop a lot with React.js with which I've created this portfolio website also with. I also have experience in programming with Java and have basic knowledge of SQL and data modelling with MySQL Workbench. For a complete overview of my skill-levels, please take a look at the 'skills'-section.",i.a.createElement("br",null),"I speak fluently ",i.a.createElement("span",{className:"highlight"},"Dutch"),", and have excellent skills in both writing and speaking"," ",i.a.createElement("span",{className:"highlight"},"English"),".",i.a.createElement("br",null),"If there's anything else you would like to know or if you would like to reach out to me, please use the contact form by clicking on 'contact' in the navigation bar up top.",i.a.createElement("br",null)," ",i.a.createElement("br",null),i.a.createElement("span",{className:"highlight"},"At the moment, I'm available for any junior full-stack or front-end developer position.")))))}}]),n}(n.Component),v=function(e){var t=e.skillsData;return i.a.createElement("div",{id:"skills-container"},i.a.createElement(h.a.h1,{id:"skills-title",initial:{x:-100,opacity:-10},animate:{x:0,opacity:1},transition:{duration:1}},"Skills"),i.a.createElement(h.a.div,{id:"skills-section",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:1}},i.a.createElement(h.a.div,{className:"tile is-ancestor",initial:{x:50,opacity:-1},animate:{x:0,opacity:1},transition:{delay:.8,duration:1}},i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("div",{className:"tile is-child box"},t.map((function(e){return i.a.createElement(h.a.div,{className:"skill-container",key:e.name,initial:{opacity:-10},animate:{opacity:1},transition:{duration:e.animateDuration}},i.a.createElement("h3",{className:"skill-name"},e.name),i.a.createElement("progress",{className:"progress is-small is-black",value:e.progress,max:"100"}))})))))))},g=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"work-container"},i.a.createElement(h.a.h1,{id:"work-title",initial:{x:-100,opacity:-10},animate:{x:0,opacity:1},transition:{duration:1}},"Work"),i.a.createElement(h.a.div,{id:"work-section",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:1}},i.a.createElement(h.a.div,{className:"tile is-ancestor",initial:{x:50,opacity:-1},animate:{x:0,opacity:1},transition:{delay:.8,duration:1}},i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("div",{className:"tile is-child box"},i.a.createElement(h.a.h3,{className:"project-title",initial:{opacity:0},animate:{opacity:1},transition:{duration:3}},"COVID-19 Tracker (WIP)"),i.a.createElement(h.a.div,{className:"project-thumbnail",initial:{x:50,opacity:-1},animate:{x:0,opacity:1},transition:{delay:.8,duration:1}},i.a.createElement("img",{src:a(60),alt:"project-thumbnail",style:{borderRadius:10,height:300}})),i.a.createElement(h.a.p,{className:"project-description",initial:{opacity:0},animate:{opacity:1},transition:{duration:3}},"Provides global up-to-date COVID-19 statistics.",i.a.createElement("br",null),i.a.createElement("br",null),"(Not optimized for mobile devices yet)"),i.a.createElement(h.a.div,{className:"project-buttons-container",initial:{opacity:0},animate:{opacity:1},transition:{duration:3}},i.a.createElement("span",{className:"project-button"},i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://katert.github.io/covid19-tracker/#",className:"button is-black"},"View")),i.a.createElement("span",{className:"project-button"},i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Katert/covid19-tracker",className:"button is-black"},"Github"))))),i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("div",{className:"tile is-child box"})),i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("div",{className:"tile is-child box"})))))}}]),n}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={fname:"",lname:"",email:"",subject:"",phone:null,company:"",message:"",sent:!1,buttonText:"Submit",buttonDisabled:!0},e.resetForm=function(){e.setState({fname:"",lname:"",email:"",subject:"",phone:null,company:"",message:"",buttonText:"Message sent!",buttonDisabled:!0})},e.formSubmit=function(t){t.preventDefault(),e.setState({buttonText:"...Sending message",buttonDisabled:!0});var a={fname:e.state.fname,lname:e.state.lname,email:e.state.email,subject:e.state.subject,phone:e.state.phone,company:e.state.company,message:e.state.message};b.a.post("https://portfolio-contactform-api.herokuapp.com/api/v1",a).then((function(t){t.data.success?e.setState({sent:!0,buttonDisabled:!0}):e.setState({buttonDisabled:!1})})).then((function(){e.resetForm()})).catch((function(){Error("Message could not be sent!"),e.setState({buttonDisabled:!1})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"contact-container"},i.a.createElement(h.a.div,{className:"notification is-black",id:"notification-contactform",initial:{opacity:-10},animate:{opacity:1},transition:{duration:1}},i.a.createElement("p",null,"The contact form below is temporarily not working because of an issue with the SMTP service provider.",i.a.createElement("br",null),i.a.createElement("br",null),"Feel free to use the 'Contact me'-button below as an alternative until the issue has been resolved. Thanks!",i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("a",{href:"mailto:wesley.kater@icloud.com?subject=Hi Wesley!",className:"button is-link"},"Contact me")),i.a.createElement(h.a.h1,{id:"contact-title",initial:{x:-100,opacity:-10},animate:{x:0,opacity:1},transition:{duration:1}},"Let's talk!"),i.a.createElement(h.a.div,{id:"contact-section",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:2}},i.a.createElement(h.a.form,{initial:{x:50,opacity:-1},animate:{x:0,opacity:1},transition:{delay:.8,duration:1},onSubmit:this.formSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"First name *"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{id:"fname-input",className:"input",type:"text",name:"fname",onChange:function(t){return e.setState({fname:t.target.value})},required:!0}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"Last name *"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{id:"lname-input",className:"input",type:"text",name:"lname",onChange:function(t){return e.setState({lname:t.target.value})},required:!0}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"E-mail *"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{id:"email-input",className:"input",type:"email",name:"email",onChange:function(t){return e.setState({email:t.target.value})},required:!0}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"Subject *"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{id:"subject-input",className:"input",name:"subject",onChange:function(t){return e.setState({subject:t.target.value})},required:!0}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"Phone"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{id:"phone-input",className:"input",type:"number",name:"phone",onChange:function(t){return e.setState({phone:t.target.value})}}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"Company"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{id:"company-input",className:"input",type:"text",name:"company",onChange:function(t){return e.setState({company:t.target.value})}}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"Message *"),i.a.createElement("div",{className:"control"},i.a.createElement("textarea",{className:"textarea",rows:"8",name:"message",onChange:function(t){return e.setState({message:t.target.value})},required:!0}))),i.a.createElement("div",{className:"control"},i.a.createElement("button",{id:"contact-submit",className:"button is-black",type:"submit",name:"submit",disabled:this.state.buttonDisabled},this.state.buttonText)))))}}]),a}(n.Component),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a.footer,{id:"footer-container",initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{duration:1.5}},i.a.createElement("div",{id:"options-container"}),i.a.createElement("div",{id:"social-container"},i.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/wesley-kater-27949014b/",className:"fab fa-linkedin",rel:"noopener noreferrer"}," "),i.a.createElement("a",{target:"_blank",href:"https://github.com/Katert",className:"fab fa-github-square",rel:"noopener noreferrer"}," ")))}}]),a}(n.Component),j=(a(61),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={skills:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("./data/skills.json").then((function(t){e.setState({skills:t.data.skills})})).catch((function(e){alert("Something went wrong.\n"+e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{basename:"/"},i.a.createElement("div",{className:"app"},i.a.createElement(y,null),i.a.createElement(d.a,{exact:!0,path:"/",component:E}),i.a.createElement(d.a,{path:"/about",component:f}),i.a.createElement(d.a,{path:"/work",component:g}),i.a.createElement(d.a,{path:"/skills",render:function(t){return i.a.createElement(v,Object.assign({},t,{skillsData:e.state.skills}))}}),i.a.createElement(d.a,{path:"/contact",component:k}),i.a.createElement(N,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.f6e8c434.chunk.js.map