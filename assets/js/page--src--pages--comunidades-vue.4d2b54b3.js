(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3BRl":function(t,a,e){"use strict";var s={props:{communities:Array}},i=e("KHd+"),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},t._l(t.communities,(function(a){return e("div",{key:a.id,staticClass:"col-lg-4 col-md-6 col-xs-12 mb-4"},[e("div",{staticClass:"card h-100 shadow px-2 px-lg-3 card-span"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"fw-bold lh-base fs-1 text-700"}),e("div",{staticClass:"d-flex align-items-center"},[e("g-link",{attrs:{to:a.node.path}},[e("g-image",{staticClass:"me-3 me-md-3",attrs:{src:a.node.image}})],1),e("div",{staticClass:"my-3"},[e("p",{staticClass:"mb-0 text-black fw-bold fs-1 text-truncate d-inline-block"},[t._v(t._s(a.node.title))]),e("p",{staticClass:"fw-normal mb-0"},[e("font-awesome",{attrs:{icon:["fas","map-marker-alt"]}}),t._v("\n              "+t._s(a.node.location)+"\n            ")],1)])],1),e("div",{staticClass:"fw-bold text-uppercase"},[t._v("Descripción")]),e("p",{staticClass:"text-wrap text-body text-truncate text-black"},[t._v(t._s(a.node.description.slice(0,80)))]),e("div",{staticClass:"fw-bold text-uppercase"},[t._v("Tags")]),e("div",{staticClass:"d-flex align-items-center mt-1 fs-1"},[e("div",{staticClass:"tagcloud"},t._l(a.node.tags.slice(0,3),(function(a){return e("g-link",{key:a.id,attrs:{to:a.path}},[t._v("\n              "+t._s(a.title)+"\n            ")])})),1)])])])])})),0)}),[],!1,null,"567694d0",null);a.a=n.exports},Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return l}));e("Kw5r");var s=e("DOVJ"),i=(e("Y6W1"),e("VTBJ")),n=(e("qePV"),e("rB9j"),e("UxlC"),e("2B1R"),e("ma9I"),e("fVfk")),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,l=a.data,o=a.parent,c=e.info,u=e.showLinks,d=e.showNavigation,p=e.ariaLabel,f=function(t,a){var e=t.currentPage,s=void 0===e?1:e,i=t.totalPages,n=void 0===i?1:i,l=Math.ceil(a/2),r=Math.floor(s-l),o=Math.floor(s+l);n<=a?(r=0,o=n):s<=l?(r=0,o=a):s+l>=n&&(r=n-a,o=n);for(var c=[],u=r+1;u<=o;u++)c.push(u);return{current:s,total:n,start:r,end:o,pages:c}}(c,e.range),v=f.current,g=f.total,b=f.pages,C=f.start,m=f.end,L=Object(n.d)(o.$route),y=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===v&&(l=e.ariaCurrentLabel);var c={to:r(L,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,o],attrs:Object(i.a)(Object(i.a)({},c),{},{"aria-label":l.replace("%n",a),"aria-current":v===a})},[n])},h=u?b.map((function(t){return y(t,t,e.ariaLinkLabel)})):[];if(d){var x=e.firstLabel,k=e.prevLabel,w=e.nextLabel,S=e.lastLabel,_=e.ariaFirstLabel,P=e.ariaPrevLabel,j=e.ariaNextLabel,O=e.ariaLastLabel,B=e.firstClass,N=e.prevClass,G=e.nextClass,A=e.lastClass,$=e.navClass;v>1&&h.unshift(y(v-1,k,P,[N,$])),C>0&&h.unshift(y(1,x,_,[B,$])),v<g&&h.push(y(v+1,w,j,[G,$])),m<g&&h.push(y(g,S,O,[A,$]))}return h.length<2?null:t("nav",Object(i.a)(Object(i.a)({},l),{},{attrs:{role:"navigation","aria-label":p}}),h)}};function r(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(n.g)(t)+"/".concat(a).concat(e):t}e("6NbQ")},YXci:function(t,a,e){"use strict";e("lwo/")},bnGp:function(t,a,e){"use strict";e.r(a);var s=e("Wsvf"),i=e("3BRl"),n={components:{Pager:s.a,CommunityCards:i.a},metaInfo:{title:"Comunidades"}},l=(e("YXci"),e("KHd+")),r=null,o=Object(l.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("div",{staticClass:"container"},[a("h1",{staticClass:"mt-7"},[this._v("Comunidades")]),a("CommunityCards",{attrs:{communities:this.$page.communities.edges}})],1)])}),[],!1,null,"4d9ca0f1",null);"function"==typeof r&&r(o);a.default=o.exports},"lwo/":function(t,a,e){}}]);