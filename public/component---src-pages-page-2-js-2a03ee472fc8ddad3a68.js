(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),o=a(154),c=a(152);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Netlify Marketing"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(155),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Netlify Marketing",description:"Netlify Marketing Design System",author:"anonymous"}}}}},154:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(148),s=(a(143),function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(l.a,{to:"/"},t))))});s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,d=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"&",i.a.createElement("a",{href:"https://www.netlify.com"},"Netlify"))))},data:n})};d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-page-2-js-2a03ee472fc8ddad3a68.js.map