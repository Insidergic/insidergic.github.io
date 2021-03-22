(window.webpackJsonp=window.webpackJsonp||[]).push([[24,3,4,6,7,9,10,13,14,15,16,17,18,19,20],{194:function(t,e,r){"use strict";r.r(e);var n=r(31),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"NuxtLogo",attrs:{width:"80",height:"40",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),r("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),r("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},195:function(t,e,r){"use strict";var n=r(5),l=r(24),c=r(25),o=r(136),d=r(70),f=r(9),v=r(54).f,m=r(55).f,h=r(11).f,_=r(206).trim,x="Number",w=n.Number,C=w,y=w.prototype,S=c(r(93)(y))==x,k="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,l,c=(e=k?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+e}for(var code,o=e.slice(2),i=0,f=o.length;i<f;i++)if((code=o.charCodeAt(i))<48||code>l)return NaN;return parseInt(o,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(S?f((function(){y.valueOf.call(r)})):c(r)!=x)?o(new C(N(e)),r,w):N(e)};for(var P,E=r(8)?v(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)l(C,P=E[A])&&!l(w,P)&&h(w,P,m(C,P));w.prototype=y,y.constructor=w,r(14)(n,x,w)}},196:function(t,e,r){"use strict";r.r(e);var n=r(203),l=r(204),c={name:"Header",components:{Twitter:r(205).default,Github:l.default,RSS:n.default}},o=r(31),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"bg-black text-white px-4 py-2"},[r("div",{staticClass:"container mx-auto p-4"},[r("div",{staticClass:"flex justify-between items-center"},[t._m(0),t._v(" "),r("div",{staticClass:"flex"},[r("a",{staticClass:"hover:no-underline mx-2",attrs:{href:"/articles/rss.xml",target:"_blank"}},[r("RSS")],1),t._v(" "),r("a",{staticClass:"hover:no-underline mx-2",attrs:{href:"",target:"_blank"}},[r("Twitter")],1),t._v(" "),r("a",{staticClass:"hover:no-underline mx-2",attrs:{href:"",target:"_blank"}},[r("Github")],1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"uppercase font-bold"},[r("a",{staticClass:"hover:no-underline",attrs:{href:"/"}},[t._v("Nuxt Basic Blog")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(196).default})},197:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(32),r(92),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),c=r(31),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},198:function(t,e,r){"use strict";r.r(e);r(195);var n=r(199),l=r(200),c=r(201),o=r(202),d={name:"Pagination",components:{DoubleFwd:n.default,DoubleBack:l.default,SingleFwd:c.default,SingleBack:o.default},props:{total:{type:Number,default:0},perPage:{type:Number,default:5}},computed:{buttonStyles:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out"},disabledStyle:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300"},totalPages:function(){return Math.ceil(this.total/this.perPage)},currentPage:function(){return parseInt(this.$route.params.page)||1},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},f=r(31),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid gap-4 grid-cols-4"},[1===t.currentPage?r("div",{class:t.disabledStyle},[r("span",{staticClass:"hidden sm:inline"},[t._v("First")]),t._v(" "),r("SingleBack")],1):r("nuxt-link",{class:t.buttonStyles,attrs:{to:{name:"articles-page-page",params:{page:1}}}},[r("DoubleBack"),t._v(" "),r("span",{staticClass:"hidden sm:inline"},[t._v("First")])],1),t._v(" "),1===t.currentPage?r("div",{class:t.disabledStyle},[r("span",{staticClass:"hidden sm:inline"},[t._v("Prev")]),t._v(" "),r("SingleBack")],1):r("nuxt-link",{class:t.buttonStyles,attrs:{to:{name:"articles-page-page",params:{page:t.prevPage}}}},[r("SingleBack"),t._v(" "),r("span",{staticClass:"hidden sm:inline"},[t._v("Prev")])],1),t._v(" "),t.currentPage===t.totalPages?r("div",{class:t.disabledStyle},[r("span",{staticClass:"hidden sm:inline"},[t._v("Next")]),t._v(" "),r("SingleFwd")],1):r("nuxt-link",{class:t.buttonStyles,attrs:{to:{name:"articles-page-page",params:{page:t.nextPage}}}},[r("span",{staticClass:"hidden sm:inline"},[t._v("Next")]),t._v(" "),r("SingleFwd")],1),t._v(" "),t.currentPage===t.totalPages?r("div",{class:t.disabledStyle},[r("span",{staticClass:"hidden sm:inline"},[t._v("Last")]),t._v(" "),r("DoubleFwd")],1):r("nuxt-link",{class:t.buttonStyles,attrs:{to:{name:"articles-page-page",params:{page:t.totalPages}}}},[r("span",{staticClass:"hidden sm:inline"},[t._v("Last")]),t._v(" "),r("DoubleFwd")],1)],1)}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,r){"use strict";r.r(e);var n={name:"DoubleFwd"},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("Last Page")]),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},200:function(t,e,r){"use strict";r.r(e);var n={name:"DoubleBack"},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("First Page")]),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,r){"use strict";r.r(e);var n={name:"SingleFwd"},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("Forward")]),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},202:function(t,e,r){"use strict";r.r(e);var n={name:"SingleBack"},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("Back")]),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},203:function(t,e,r){"use strict";r.r(e);var n={name:"RSS"},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("RSS Feed")]),t._v(" "),r("path",{attrs:{d:"M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"}}),t._v(" "),r("path",{attrs:{d:"M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"}})])}),[],!1,null,null,null);e.default=component.exports},204:function(t,e,r){"use strict";r.r(e);var n={name:"Github"},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("GitHub")]),t._v(" "),r("path",{attrs:{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}})])}),[],!1,null,null,null);e.default=component.exports},205:function(t,e,r){"use strict";r.r(e);var n={name:"Twitter"},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("Twitter")]),t._v(" "),r("path",{attrs:{d:"M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"}})])}),[],!1,null,null,null);e.default=component.exports},206:function(t,e,r){var n=r(4),l=r(33),c=r(9),o=r(207),d="["+o+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(t,e,r){var l={},d=c((function(){return!!o[t]()||"​"!="​"[t]()})),f=l[t]=d?e(h):o[t];r&&(l[r]=f),n(n.P+n.F*d,"String",l)},h=m.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},207:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},208:function(t,e,r){"use strict";r.r(e);var n="Starter Blog",l={name:"Footer",computed:{siteName:function(){return n}}},c=r(31),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"bg-black text-white"},[r("div",{staticClass:"container mx-auto p-4 text-center"},[r("small",[t._v("© "+t._s((new Date).getFullYear())+" "+t._s(t.siteName))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(208).default})},209:function(t,e,r){"use strict";r.r(e);r(195);var n={name:"ArticleList",components:{Pagination:r(198).default},props:{articles:{type:Array,default:Array},total:{type:Number,default:0}}},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"md:grid md:gap-4 md:grid-cols-2",attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[article.image?r("img",{staticClass:"mb-4 border rounded",attrs:{src:article.image,alt:""}}):t._e(),t._v(" "),r("div",[r("h2",{staticClass:"font-bold text-gray-900 text-2xl mb-2"},[t._v("\n            "+t._s(article.title)+"\n          ")]),t._v(" "),r("p",{staticClass:"text-lg"},[t._v(t._s(article.description))]),t._v(" "),r("p",{staticClass:"font-bold text-indigo-600 mt-2"},[t._v("\n            Read more"),r("span",{staticClass:"text-indigo-600"},[t._v("…")])])])])],1)})),0),t._v(" "),t.total?r("div",{staticClass:"constainer mx-auto my-5 max-w-5xl"},[t.total>5?r("Pagination",{attrs:{total:t.total}}):t._e()],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:r(198).default})},211:function(t,e,r){var content=r(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("90f0709c",content,!0,{sourceMap:!1})},214:function(t,e,r){"use strict";r.r(e);var n=r(31),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"flex"},[r("NuxtLink",{attrs:{to:"/"}},[r("Logo",{staticClass:"mb-4"})],1),t._v(" "),r("AppSearchInput",{staticClass:"ml-8"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(194).default,AppSearchInput:r(197).default,Header:r(196).default})},219:function(t,e,r){"use strict";r(211)},220:function(t,e,r){var n=r(42)(!1);n.push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}",""]),t.exports=n},234:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(32),function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r,n){var l,c,o,d,f,v,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=parseInt(r.page),c=5,t.next=4,e("articles").fetch();case 4:return o=t.sent,d=o.length,f=Math.ceil(d/c),v=d%c,m=function(){return 1===l?0:l===f?d-v:(l-1)*c},t.next=11,e("articles").only(["name","description","img","slug"]).sortBy("createdAt","asc").limit(c).skip(m()).fetch();case 11:if(h=t.sent,0!==l&&h.length){t.next=14;break}return t.abrupt("return",n({statusCode:404,message:"No articles found!"}));case 14:return t.abrupt("return",{allArticles:o,paginatedArticles:h});case 15:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),c={name:"HomePage",components:{ArticleList:r(209).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,content,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.error,e.next=3,l(r,n,c);case 3:return content=e.sent,e.next=6,r("tags",n.slug).only(["name","description","img","slug"]).sortBy("createdAt","asc").fetch();case 6:return o=e.sent,e.abrupt("return",{allArticles:content.allArticles,paginatedArticles:content.paginatedArticles,tags:o});case 8:case"end":return e.stop()}}),e)})))()}},o=(r(219),r(31)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-8"},[r("TheHeader"),t._v(" "),r("h1",{staticClass:"font-bold text-4xl"},[t._v("Blog Posts")]),t._v(" "),r("ArticleList",{attrs:{articles:t.paginatedArticles,total:t.allArticles.length}}),t._v(" "),r("h3",{staticClass:"mb-4 font-bold text-2xl uppercase text-center"},[t._v("Topics")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[r("NuxtLink",{attrs:{to:"/blog/tag/"+e.slug}},[r("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n          "+t._s(e.name)+"\n        ")])])],1)})),0),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"flex justify-center border-gray-500 border-t-2"},[r("p",{staticClass:"mt-4"},[t._v("\n      Created by\n      "),r("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://twitter.com/debs_obrien"}},[t._v("Debbie O'Brien")]),t._v("\n      at NuxtJS. See the\n      "),r("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://nuxtjs.org/blog/creating-blog-with-nuxt-content"}},[t._v("tutorial")]),t._v("\n      for how to build it.\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:r(214).default,ArticleList:r(209).default,Footer:r(208).default})}}]);