(window.webpackJsonp=window.webpackJsonp||[]).push([[23,9],{194:function(t,l,e){"use strict";e.r(l);var n=e(31),component=Object(n.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"80",height:"40",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);l.default=component.exports},236:function(t,l,e){"use strict";e.r(l);var n=e(2),r=(e(32),e(15),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function l(){var e,n,r,c,o;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e=t.$content,n=t.params,l.next=3,e("tags").where({slug:{$contains:n.tag}}).limit(1).fetch();case 3:return r=l.sent,c=r.length>0?r[0]:{},l.next=7,e("articles",n.slug).where({tags:{$contains:c.name}}).sortBy("createdAt","asc").fetch();case 7:return o=l.sent,l.abrupt("return",{articles:o,tag:c});case 9:case"end":return l.stop()}}),l)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=e(31),component=Object(c.a)(r,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"},[e("div",{staticClass:"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left"},[e("img",{staticClass:"absolute h-full w-full object-cover",attrs:{src:t.tag.img,alt:t.tag.name}})]),t._v(" "),e("div",{staticClass:"overlay"}),t._v(" "),e("div",{staticClass:"absolute top-32 left-32 right-32 text-white"},[e("NuxtLink",{attrs:{to:"/"}},[e("Logo")],1),t._v(" "),e("div",{staticClass:"mt-16 -mb-3 flex flex-col text-sm"},[e("div",{staticClass:"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left"},[e("h1",{staticClass:"text-4xl font-bold uppercase"},[t._v("\n          "+t._s(t.tag.name)+"\n        ")]),t._v(" "),e("p",{staticClass:"mb-4 uppercase"},[t._v(t._s(t.tag.description))]),t._v(" "),e("nuxt-content",{attrs:{document:t.tag}})],1)])],1),t._v(" "),e("div",{staticClass:"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"},[e("NuxtLink",{attrs:{to:"/"}},[e("p",{staticClass:"hover:underline"},[t._v("Back to All Articles")])]),t._v(" "),e("h3",{staticClass:"mb-4 font-bold text-4xl"},[t._v("Articles tagged "+t._s(t.tag.name)+":")]),t._v(" "),e("ul",t._l(t.articles,(function(article){return e("li",{key:article.slug,staticClass:"w-full px-2 xs:mb-6 md:mb-12 article-card"},[e("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[article.img?e("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img,alt:article.alt}}):t._e(),t._v(" "),e("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[e("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),e("p",[t._v(t._s(article.description))]),t._v(" "),e("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n              "+t._s(t.formatDate(article.updatedAt))+"\n            ")])])])],1)})),0)],1)])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{Logo:e(194).default})}}]);