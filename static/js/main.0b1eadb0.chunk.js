(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(1),i=n(16),l=n(3),a=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/bimurto.io",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),s=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===s&&a.a.initialize(j);var o=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){"production"===s&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},u=n(5),b=n(21),h=[{index:!0,label:"Shawrup K. Suter",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],d=n(0),O=Object(c.lazy)((function(){return n.e(5).then(n.t.bind(null,169,7))})),m=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:n?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(O,{right:!0,isOpen:n,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:e.path,onClick:function(){return i(!n)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(m,{})]})},p=n(24),f=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(u.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat("/bimurto.io","/images/pp.jpg"),alt:""})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Shawrup Kumer Suter"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:shawrup.k.suter@gmail.com",children:"shawrup.k.suter@gmail.com"})})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsxs)("p",{children:["Hi, I'm Shawrup. I am a tech geek. I love everything about technology. I am a ",Object(d.jsx)("a",{href:"https://buet.ac.bd/",children:"Bangladesh University of Engineering and Technology"})," graduate and Software Engineer at ",Object(d.jsx)("a",{href:"https://konasl.com",children:"Kona Software Lab Ltd."}),"."]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsxs)("section",{id:"footer",children:[Object(d.jsx)(p.a,{}),Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Shawrup K. Suter ",Object(d.jsx)(u.b,{to:"/",children:"bimurto.io"}),"."]})]})]})},S=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},w=function(e){return Object(d.jsxs)(i.b,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(S,{}),Object(d.jsxs)(i.a,{titleTemplate:"%s | Shawrup K. Suter",defaultTitle:"Shawrup K. Suter",defer:!1,children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(f,{})]})]})};w.defaultProps={children:null,fullPage:!1,title:null,description:"Shawrup K. Suter's personal website."};t.a=w},24:function(e,t,n){"use strict";n(1);var c=n(29),i=n(30),l=n(31),a=n(33),r=n(32),s=[{link:"https://github.com/bimurto",label:"Github",icon:i.faGithub},{link:"https://www.linkedin.com/in/shawrup-kumer-suter/",label:"LinkedIn",icon:l.faLinkedinIn},{link:"https://stackoverflow.com/users/13755857/shawrup",label:"Stackoverflow",icon:r.faStackOverflow},{link:"mailto:shawrup.k.suter@gmail.com",label:"Email",icon:a.faEnvelope}],j=n(0);t.a=function(){return Object(j.jsx)("ul",{className:"icons",children:s.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.link,children:Object(j.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(15),a=n(5),r=n(3),s=n(20),j=(n(46),n(0)),o=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,166))})),u=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,173))})),b=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,167))})),h=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,168))})),d=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,172))})),O=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,170))})),m=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,171))})),x=function(){return Object(j.jsx)(a.a,{basename:"/bimurto.io",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(s.a,{}),children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(r.a,{path:"/about",component:o}),Object(j.jsx)(r.a,{path:"/projects",component:d}),Object(j.jsx)(r.a,{path:"/stats",component:m}),Object(j.jsx)(r.a,{path:"/contact",component:u}),Object(j.jsx)(r.a,{path:"/resume",component:O}),Object(j.jsx)(r.a,{component:h,status:404})]})})})},p=function(){return Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(j.jsx)(p,{}),f):Object(l.render)(Object(j.jsx)(p,{}),f)}},[[47,1,3]]]);
//# sourceMappingURL=main.0b1eadb0.chunk.js.map