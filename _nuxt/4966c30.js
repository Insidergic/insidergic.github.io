(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,5,10,12,14,16,17,20,21],{208:function(t,e,r){t.exports=r.p+"img/eu_lindo.5b3b45d.jpeg"},209:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"mr-3 flex-1 flex justify-start w-5/12 float-left"},[e("div",{staticClass:"my-img"},[e("img",{attrs:{src:r(208)}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"mr-3 flex-1 center li-my-img"},[e("div",{staticClass:"my-img"},[e("img",{attrs:{src:r(208)}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"mr-3 flex-1 mr-075"},[r("div",{staticClass:"my-regards"},[r("p"),r("h2",[t._v("Hi,")]),r("p"),t._v(" "),r("p"),r("h2",[r("strong",[t._v("I'm Nathan Feitoza")])]),r("p")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"mr-3 flex-1 mr-075"},[r("div",{staticClass:"footer"},[r("p",[t._v("Copyright © 2021 License")]),t._v(" "),r("p",[t._v("Powered by Nathan Feitoza and Nuxt")])])])}],o={name:"Sidebar",data:function(){return{openMenu:!1,menuItems:[{name:"Home",link:"/",icon:["fas","home"]},{name:"About",link:"/about",icon:["fas","user"]},{name:"Tags",link:"/tags",icon:["fas","tags"]},{name:"Contact",link:"/contact",icon:["fas","envelope"]}]}}},l=r(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-1/5 sidebar-blog md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen sidebar"},[r("div",[r("ul",{staticClass:"list-reset flex flex-row md:flex-col text-center md:text-left content-mobile"},[t._m(0),t._v(" "),r("li",{staticClass:"mr-3 flex-1 flex justify-end w-3/6 float-left"},[r("button",{staticClass:"mt-4 text-xl button-open",on:{click:function(){return t.openMenu=!t.openMenu}}},[r("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","bars"]}})],1)])]),t._v(" "),r("ul",{staticClass:"list-reset flex flex-row md:flex-col text-center md:text-left content-menu",style:t.openMenu?"display: flex;":""},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._l(t.menuItems,(function(e,n){return r("li",{key:n,staticClass:"mr-3 flex-1 item"},[r("NuxtLink",{staticClass:"block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white",attrs:{to:e.link}},[r("i",{staticClass:"fas fa-link pr-0 md:pr-3 text-pink-500"}),r("span",{staticClass:"pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block"},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:e.icon}})],1),t._v(t._s(e.name))])])],1)})),t._v(" "),r("li",{staticClass:"mr-3 mt-4 flex-1 mr-075"},[r("div",{},[r("a",{staticClass:"icon-social mr-4 text-white text-3xl",attrs:{href:"https://github.com/nathanfeitoza",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),t._v(" "),r("a",{staticClass:"icon-social mr-4 text-white text-3xl",attrs:{href:"https://www.linkedin.com/in/nathan-feitoza-716a4592/",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),t._v(" "),r("a",{staticClass:"icon-social mr-4 text-white text-3xl",attrs:{href:"https://twitter.com/feitoza_nathan",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),r("a",{staticClass:"icon-social mr-4 text-white text-3xl",attrs:{href:"http://instagram.com/nathanfeitoza",target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)])]),t._v(" "),t._m(3)],2)])])}),n,!1,null,null,null);e.default=component.exports},210:function(t,e,r){var content=r(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("55fcde80",content,!0,{sourceMap:!1})},211:function(t,e,r){"use strict";var n=r(5),o=r(28),l=r(29),c=r(140),f=r(73),d=r(9),m=r(56).f,h=r(57).f,v=r(11).f,x=r(220).trim,y="Number",_=n.Number,w=_,$=_.prototype,S=l(r(96)($))==y,C="trim"in String.prototype,k=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=C?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(S?d((function(){$.valueOf.call(r)})):l(r)!=y)?c(new w(k(e)),r,_):k(e)};for(var M,P=r(8)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;P.length>D;D++)o(w,M=P[D])&&!o(_,M)&&v(_,M,h(w,M));_.prototype=$,$.constructor=_,r(16)(n,y,_)}},212:function(t,e,r){"use strict";r.r(e);r(211);var n=r(213),o=r(222),l=r.n(o),c={name:"ArticleList",components:{Pagination:n.default},props:{articles:{type:Array,default:Array},total:{type:Number,default:0},slugNamePagination:{type:String,default:"articles-page-page"},paginationIsQueryParams:{type:Boolean,default:!1}},methods:{dayjs:function(t){return l()(t)}}},f=r(35),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex flex-wrap flex-col"},t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"flex items-center"},[r("div",{staticClass:"flex items-center m-2 p-2 list-articles"},[r("img",{staticClass:"w-24 h-24 mr-8",attrs:{src:article.img}}),t._v(" "),r("div",[r("h3",{staticClass:"text-3xl text-gray-900 font-medium"},[r("NuxtLink",{attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[t._v(t._s(article.title))])],1),t._v(" "),r("p",{staticClass:"text-1xl text-gray-500 font-medium"},[t._v(t._s(t.dayjs(article.date).format("MMM DD, YYYY"))+" · "+t._s(article.author))]),t._v(" "),r("div",{staticClass:"flex items-center article-tags"},t._l(article.tags,(function(e,n){return r("div",{key:n,staticClass:"text-sm mr-4 py-1 pr-1 pl-1 bg-gray-800 text-white rounded-md"},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),r("p",{staticClass:"text-lg mt-4 text-gray-700 font-medium"},[t._v("\n            "+t._s((article.description||"").substr(0,255))+"\n          ")]),t._v(" "),r("p",{staticClass:"font-bold text-blue-600 mt-2"},[r("NuxtLink",{attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[t._v("\n              Read more"),r("span",{staticClass:"text-blue-600"},[t._v("…")])])],1)])])])})),0),t._v(" "),t.total?r("div",{staticClass:"constainer mx-auto my-5 max-w-5xl"},[t.total>5?r("Pagination",{attrs:{total:t.total,perPage:t.$store.state.articlesPerPage,paginationIsQueryParams:t.paginationIsQueryParams,slugName:t.slugNamePagination}}):t._e()],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:r(213).default})},213:function(t,e,r){"use strict";r.r(e);r(211);var n=r(214),o=r(215),l=r(216),c=r(217),f={name:"Pagination",components:{DoubleFwd:n.default,DoubleBack:o.default,SingleFwd:l.default,SingleBack:c.default},props:{total:{type:Number,default:0},perPage:{type:Number,default:5},slugName:{type:String,default:"articles-page-page"},paginationIsQueryParams:{type:Boolean,default:!1}},methods:{routePagination:function(t){var e={};return e[-1===this.slugName.indexOf("/")?"name":"path"]=this.slugName,e[this.paginationIsQueryParams?"query":"params"]={page:t},e}},computed:{buttonStyles:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-gray-500 hover:text-white transform duration-500 ease-in-out button-paginate"},disabledStyle:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300 button-paginate"},totalPages:function(){return Math.ceil(this.total/this.perPage)},currentPage:function(){return parseInt(this.$route.params.page)||1},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},d=r(35),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.total>t.perPage?r("div",{staticClass:"flex flex-wrap div-pagination"},[1===t.currentPage?r("div",{class:t.disabledStyle},[r("SingleBack")],1):r("nuxt-link",{class:t.buttonStyles,attrs:{to:2===t.currentPage?"/":t.routePagination(t.prevPage)}},[r("SingleBack")],1),t._v(" "),1===t.currentPage?r("div",{class:t.disabledStyle+" active"},[r("span",{staticClass:"page-link"},[t._v("1")])]):r("nuxt-link",{class:t.buttonStyles,attrs:{to:"/"}},[r("span",{staticClass:"page-link"},[t._v("1")])]),t._v(" "),t._l(t.totalPages,(function(e){return e!==parseInt(t.currentPage)+1&&e!==parseInt(t.currentPage)+2&&e!==parseInt(t.currentPage)-1&&e!==parseInt(t.currentPage)-2&&e!==t.currentPage||1===e||e===t.totalPages?t._e():r("div",{key:e},[r("nuxt-link",{class:e===t.currentPage?t.disabledStyle+" active":t.buttonStyles,attrs:{to:1==e?"/":t.routePagination(e)}},[r("span",{staticClass:"page-link"},[t._v(t._s(e))])])],1)})),t._v(" "),t.currentPage===t.totalPages?r("div",{class:t.disabledStyle+" active"},[r("span",{staticClass:"page-link"},[t._v(t._s(t.totalPages))])]):r("nuxt-link",{class:t.buttonStyles,attrs:{to:t.routePagination(t.totalPages)}},[r("span",{staticClass:"page-link"},[t._v(t._s(t.totalPages))])]),t._v(" "),t.currentPage===t.totalPages?r("div",{class:t.disabledStyle},[r("SingleFwd")],1):r("nuxt-link",{class:t.buttonStyles,attrs:{to:t.routePagination(t.nextPage)}},[r("SingleFwd")],1)],2):t._e()}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,r){"use strict";r.r(e);var n={name:"DoubleFwd"},o=r(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("Last Page")]),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},215:function(t,e,r){"use strict";r.r(e);var n={name:"DoubleBack"},o=r(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("First Page")]),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,r){"use strict";r.r(e);var n={name:"SingleFwd"},o=r(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("Forward")]),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,r){"use strict";r.r(e);var n={name:"SingleBack"},o=r(35),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("title",[t._v("Back")]),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,r){"use strict";r.r(e);var n={name:"Layout",components:{Sidebar:r(209).default}},o=(r(223),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"flex md:flex-row-reverse flex-wrap"},[r("div",{staticClass:"w-full md:w-4/5"},[r("div",{staticClass:"container pt-16 px-6 container-data"},[r("AppSearchInput",{staticClass:"ml-8 to-right app-search"}),t._v(" "),t._t("main")],2)]),t._v(" "),r("Sidebar")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSearchInput:r(219).default,Sidebar:r(209).default})},219:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(36),r(95),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),l=r(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-5 items-center leading-5 transition ease-in-out duration-150 text-gray-800 hover:text-black",attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,r){var n=r(4),o=r(37),l=r(9),c=r(221),f="["+c+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t,e,r){var o={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=o[t]=f?e(v):c[t];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},221:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},222:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",i="day",s="week",u="month",a="quarter",o="year",l="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},h={s:m,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,u),s=r-i<0,a=e.clone().add(n+(s?-1:1),u);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:o,w:s,d:i,D:l,h:n,m:r,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",x={};x[v]=d;var y=function(t){return t instanceof $},_=function(t,e,r){var n;if(!t)return v;if("string"==typeof t)x[t]&&(n=t),e&&(x[t]=e,n=t);else{var i=t.name;x[i]=t,n=i}return!r&&n&&(v=n),n||!r&&v},w=function(t,e){if(y(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new $(r)},g=h;g.l=_,g.i=y,g.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var $=function(){function d(t){this.$L=_(t.locale,null,!0),this.parse(t)}var m=d.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(c);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return g},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,r){return g.u(t)?this[e]:this.set(r,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,a){var c=this,f=!!g.u(a)||a,d=g.p(t),m=function(t,e){var r=g.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?r:r.endOf(i)},h=function(t,e){return g.w(c.toDate()[t].apply(c.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},v=this.$W,x=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(d){case o:return f?m(1,0):m(31,11);case u:return f?m(1,x):m(0,x+1);case s:var w=this.$locale().weekStart||0,$=(v<w?v+7:v)-w;return m(f?y-$:y+(6-$),x);case i:case l:return h(_+"Hours",0);case n:return h(_+"Minutes",1);case r:return h(_+"Seconds",2);case e:return h(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(s,a){var c,f=g.p(s),d="set"+(this.$u?"UTC":""),m=(c={},c[i]=d+"Date",c[l]=d+"Date",c[u]=d+"Month",c[o]=d+"FullYear",c[n]=d+"Hours",c[r]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[f],h=f===i?this.$D+(a-this.$W):a;if(f===u||f===o){var v=this.clone().set(l,1);v.$d[m](h),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[g.p(t)]()},m.add=function(t,a){var l,c=this;t=Number(t);var f=g.p(a),d=function(e){var r=w(c);return g.w(r.date(r.date()+Math.round(e*t)),c)};if(f===u)return this.set(u,this.$M+t);if(f===o)return this.set(o,this.$y+t);if(f===i)return d(1);if(f===s)return d(7);var m=(l={},l[r]=6e4,l[n]=36e5,l[e]=1e3,l)[f]||1,h=this.$d.getTime()+t*m;return g.w(h,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,l=i.months,c=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},m=i.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:c(i.monthsShort,a,l,3),MMMM:c(l,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,o,2),ddd:c(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:m(s,u,!0),A:m(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:n};return r.replace(f,(function(t,e){return e||h[t]||n.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(t,l,c){var f,d=g.p(l),m=w(t),h=6e4*(m.utcOffset()-this.utcOffset()),v=this-m,x=g.m(this,m);return x=(f={},f[o]=x/12,f[u]=x,f[a]=x/3,f[s]=(v-h)/6048e5,f[i]=(v-h)/864e5,f[n]=v/36e5,f[r]=v/6e4,f[e]=v/1e3,f)[d]||v,c?x:g.a(x)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return x[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=_(t,e,!0);return n&&(r.$L=n),r},m.clone=function(){return g.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},d}(),p=$.prototype;return w.prototype=p,[["$ms",t],["$s",e],["$m",r],["$H",n],["$W",i],["$M",u],["$y",o],["$D",l]].forEach((function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,$,w),t.$i=!0),w},w.locale=_,w.isDayjs=y,w.unix=function(t){return w(1e3*t)},w.en=x[v],w.Ls=x,w.p={},w}()},223:function(t,e,r){"use strict";r(210)},224:function(t,e,r){var n=r(14)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap);"]),n.push([t.i,'$base-color:#1c1c1c;body{font-family:"Montserrat",sans-serif}.article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}.to-right{float:right}.div-pagination{.button-paginate{border-radius:50rem;width:50px;height:50px;margin-right:1rem;border-color:$base-color}.button-paginate.active{background:$base-color}}.article-tags{.tag{margin-right:1rem}}.sidebar{.content-mobile{display:none;.button-open{outline:0}}}.topics{margin-left:0;margin-right:0}@media only screen and (max-width:1120px){.sidebar{.footer{font-size:.7rem}}}@media only screen and (max-width:850px){.sidebar{top:0;.my-regards{h2{font-size:26px!important}}.my-img{width:45px!important;height:45px!important;margin-top:.6rem!important;margin-left:.6rem!important;margin-bottom:0!important}.content-mobile{display:block}.content-menu{display:none;width:100%;background:$base-color;flex-direction:column;position:fixed;height:100%;top:7%;left:0;.py-1{padding-top:1rem;padding-bottom:1rem}.text-xs{font-size:1.4rem}.mr-3{margin-right:0!important}.footer{position:relative}.li-my-img{display:none}}}.container-data{max-width:100%!important;width:100%!important;.text-4xl{font-size:1.65rem!important}}.app-search,.text-info-page{margin-left:1rem;margin-top:1rem}.list-articles{flex-direction:column;margin-bottom:1.5rem;.text-3xl{font-size:1.5rem}img{width:100%;max-width:100%;-o-object-fit:cover;object-fit:cover;margin-right:0;margin-bottom:1rem}}.topics{width:100%}}@media only screen and (max-width:450px){.app-search{float:left!important}}.sidebar-blog{background:$base-color;font-family:"Montserrat",sans-serif;li.center{display:flex;justify-content:center}li{a:hover{span{color:#fff}}a{span{color:#b3b3b3}}a[aria-current=page]{border-bottom:2px solid #c5c5c5;span{color:#fff}}}.my-img{width:216px;height:216px;margin-bottom:2rem;img{border-radius:50rem;width:100%;max-width:100%;max-height:100%;height:auto;-webkit-filter:grayscale(35%);filter:grayscale(35%)}}.mr-075{margin-left:.75rem}.my-regards{margin-bottom:2rem;h2{font-size:35px;color:#fff}}.item{span{font-weight:450!important}}span.icon{margin-right:1rem}.footer{color:#7a7a7a;position:absolute;bottom:0;margin-bottom:1rem}}',""]),t.exports=n},227:function(t,e,r){"use strict";var n=r(2),o=(r(36),r(17),r(143)),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,l,c,f,d,m,h,v,x,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,l=e.params,c=e.error,f=e.route,d=parseInt(l.page||f.query.page),m=o.stateDefault.articlesPerPage,t.next=5,n("articles").fetch();case 5:return h=t.sent,v=function(){return 1===d?0:(d-1)*m},x=n("articles").only(["name","title","description","img","slug","date","author","tags"]).sortBy("createdAt","asc").limit(m).skip(v()),r&&x.where({tags:{$contains:r.name}}),t.next=11,x.fetch();case 11:if(y=t.sent,0!==d&&y.length){t.next=14;break}return t.abrupt("return",c({statusCode:404,message:"No articles found!"}));case 14:return t.abrupt("return",{allArticles:h,paginatedArticles:y});case 15:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();e.a=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,l(e,r);case 3:return content=t.sent,t.abrupt("return",{allArticles:content.allArticles,paginatedArticles:content.paginatedArticles,params:n,tags:r});case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}}]);