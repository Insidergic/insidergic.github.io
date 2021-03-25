(window.webpackJsonp=window.webpackJsonp||[]).push([[5,12,16,17,20,21],{211:function(t,e,n){"use strict";var r=n(5),l=n(28),o=n(29),c=n(140),f=n(73),d=n(9),h=n(56).f,v=n(57).f,m=n(11).f,$=n(220).trim,y="Number",_=r.Number,w=_,x=_.prototype,S=o(n(96)(x))==y,P="trim"in String.prototype,M=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=P?e.trim():$(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(S?d((function(){x.valueOf.call(n)})):o(n)!=y)?c(new w(M(e)),n,_):M(e)};for(var D,I=n(8)?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)l(w,D=I[N])&&!l(_,D)&&m(_,D,v(w,D));_.prototype=x,x.constructor=_,n(16)(r,y,_)}},212:function(t,e,n){"use strict";n.r(e);n(211);var r=n(213),l=n(222),o=n.n(l),c={name:"ArticleList",components:{Pagination:r.default},props:{articles:{type:Array,default:Array},total:{type:Number,default:0},slugNamePagination:{type:String,default:"articles-page-page"},paginationIsQueryParams:{type:Boolean,default:!1}},methods:{dayjs:function(t){return o()(t)}}},f=n(35),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-wrap flex-col"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"flex items-center"},[n("div",{staticClass:"flex items-center m-2 p-2 list-articles"},[n("img",{staticClass:"w-24 h-24 mr-8",attrs:{src:article.img}}),t._v(" "),n("div",[n("h3",{staticClass:"text-3xl text-gray-900 font-medium"},[n("NuxtLink",{attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[t._v(t._s(article.title))])],1),t._v(" "),n("p",{staticClass:"text-1xl text-gray-500 font-medium"},[t._v(t._s(t.dayjs(article.date).format("MMM DD, YYYY"))+" · "+t._s(article.author))]),t._v(" "),n("div",{staticClass:"flex items-center article-tags"},t._l(article.tags,(function(e,r){return n("div",{key:r,staticClass:"text-sm mr-4 py-1 pr-1 pl-1 bg-gray-800 text-white rounded-md"},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),n("p",{staticClass:"text-lg mt-4 text-gray-700 font-medium"},[t._v("\n            "+t._s((article.description||"").substr(0,255))+"\n          ")]),t._v(" "),n("p",{staticClass:"font-bold text-blue-600 mt-2"},[n("NuxtLink",{attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[t._v("\n              Read more"),n("span",{staticClass:"text-blue-600"},[t._v("…")])])],1)])])])})),0),t._v(" "),t.total?n("div",{staticClass:"constainer mx-auto my-5 max-w-5xl"},[t.total>5?n("Pagination",{attrs:{total:t.total,perPage:t.$store.state.articlesPerPage,paginationIsQueryParams:t.paginationIsQueryParams,slugName:t.slugNamePagination}}):t._e()],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:n(213).default})},213:function(t,e,n){"use strict";n.r(e);n(211);var r=n(214),l=n(215),o=n(216),c=n(217),f={name:"Pagination",components:{DoubleFwd:r.default,DoubleBack:l.default,SingleFwd:o.default,SingleBack:c.default},props:{total:{type:Number,default:0},perPage:{type:Number,default:5},slugName:{type:String,default:"articles-page-page"},paginationIsQueryParams:{type:Boolean,default:!1}},methods:{routePagination:function(t){var e={};return e[-1===this.slugName.indexOf("/")?"name":"path"]=this.slugName,e[this.paginationIsQueryParams?"query":"params"]={page:t},e}},computed:{buttonStyles:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-gray-500 hover:text-white transform duration-500 ease-in-out button-paginate"},disabledStyle:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300 button-paginate"},totalPages:function(){return Math.ceil(this.total/this.perPage)},currentPage:function(){return parseInt(this.$route.params.page)||1},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},d=n(35),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.total>t.perPage?n("div",{staticClass:"flex flex-wrap div-pagination"},[1===t.currentPage?n("div",{class:t.disabledStyle},[n("SingleBack")],1):n("nuxt-link",{class:t.buttonStyles,attrs:{to:2===t.currentPage?"/":t.routePagination(t.prevPage)}},[n("SingleBack")],1),t._v(" "),1===t.currentPage?n("div",{class:t.disabledStyle+" active"},[n("span",{staticClass:"page-link"},[t._v("1")])]):n("nuxt-link",{class:t.buttonStyles,attrs:{to:"/"}},[n("span",{staticClass:"page-link"},[t._v("1")])]),t._v(" "),t._l(t.totalPages,(function(e){return e!==parseInt(t.currentPage)+1&&e!==parseInt(t.currentPage)+2&&e!==parseInt(t.currentPage)-1&&e!==parseInt(t.currentPage)-2&&e!==t.currentPage||1===e||e===t.totalPages?t._e():n("div",{key:e},[n("nuxt-link",{class:e===t.currentPage?t.disabledStyle+" active":t.buttonStyles,attrs:{to:1==e?"/":t.routePagination(e)}},[n("span",{staticClass:"page-link"},[t._v(t._s(e))])])],1)})),t._v(" "),t.currentPage===t.totalPages?n("div",{class:t.disabledStyle+" active"},[n("span",{staticClass:"page-link"},[t._v(t._s(t.totalPages))])]):n("nuxt-link",{class:t.buttonStyles,attrs:{to:t.routePagination(t.totalPages)}},[n("span",{staticClass:"page-link"},[t._v(t._s(t.totalPages))])]),t._v(" "),t.currentPage===t.totalPages?n("div",{class:t.disabledStyle},[n("SingleFwd")],1):n("nuxt-link",{class:t.buttonStyles,attrs:{to:t.routePagination(t.nextPage)}},[n("SingleFwd")],1)],2):t._e()}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,n){"use strict";n.r(e);var r={name:"DoubleFwd"},l=n(35),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("Last Page")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},215:function(t,e,n){"use strict";n.r(e);var r={name:"DoubleBack"},l=n(35),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("First Page")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,n){"use strict";n.r(e);var r={name:"SingleFwd"},l=n(35),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("Forward")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,n){"use strict";n.r(e);var r={name:"SingleBack"},l=n(35),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("Back")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,n){var r=n(4),l=n(37),o=n(9),c=n(221),f="["+c+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t,e,n){var l={},f=o((function(){return!!c[t]()||"​"!="​"[t]()})),d=l[t]=f?e(m):c[t];n&&(l[n]=d),r(r.P+r.F*f,"String",l)},m=v.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},221:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},222:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",l="year",o="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:l,w:s,d:i,D:o,h:r,m:n,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",$={};$[m]=d;var y=function(t){return t instanceof x},_=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)$[t]&&(r=t),e&&($[t]=e,r=t);else{var i=t.name;$[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},w=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},g=v;g.l=_,g.i=y,g.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function d(t){this.$L=_(t.locale,null,!0),this.parse(t)}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return w(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<w(t)},h.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var c=this,f=!!g.u(a)||a,d=g.p(t),h=function(t,e){var n=g.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf(i)},v=function(t,e){return g.w(c.toDate()[t].apply(c.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,$=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(d){case l:return f?h(1,0):h(31,11);case u:return f?h(1,$):h(0,$+1);case s:var w=this.$locale().weekStart||0,x=(m<w?m+7:m)-w;return h(f?y-x:y+(6-x),$);case i:case o:return v(_+"Hours",0);case r:return v(_+"Minutes",1);case n:return v(_+"Seconds",2);case e:return v(_+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,a){var c,f=g.p(s),d="set"+(this.$u?"UTC":""),h=(c={},c[i]=d+"Date",c[o]=d+"Date",c[u]=d+"Month",c[l]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[f],v=f===i?this.$D+(a-this.$W):a;if(f===u||f===l){var m=this.clone().set(o,1);m.$d[h](v),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](v);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[g.p(t)]()},h.add=function(t,a){var o,c=this;t=Number(t);var f=g.p(a),d=function(e){var n=w(c);return g.w(n.date(n.date()+Math.round(e*t)),c)};if(f===u)return this.set(u,this.$M+t);if(f===l)return this.set(l,this.$y+t);if(f===i)return d(1);if(f===s)return d(7);var h=(o={},o[n]=6e4,o[r]=36e5,o[e]=1e3,o)[f]||1,v=this.$d.getTime()+t*h;return g.w(v,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,l=i.weekdays,o=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:c(i.monthsShort,a,o,3),MMMM:c(o,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,l,2),ddd:c(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||v[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,o,c){var f,d=g.p(o),h=w(t),v=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,$=g.m(this,h);return $=(f={},f[l]=$/12,f[u]=$,f[a]=$/3,f[s]=(m-v)/6048e5,f[i]=(m-v)/864e5,f[r]=m/36e5,f[n]=m/6e4,f[e]=m/1e3,f)[d]||m,c?$:g.a($)},h.daysInMonth=function(){return this.endOf(u).$D},h.$locale=function(){return $[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=_(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),p=x.prototype;return w.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",l],["$D",o]].forEach((function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,x,w),t.$i=!0),w},w.locale=_,w.isDayjs=y,w.unix=function(t){return w(1e3*t)},w.en=$[m],w.Ls=$,w.p={},w}()}}]);