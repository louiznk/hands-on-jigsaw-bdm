(function(t){function e(e){for(var r,i,c=e[0],o=e[1],u=e[2],h=0,d=[];h<c.length;h++)i=c[h],n[i]&&d.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0af1":function(t,e,a){},1087:function(t,e,a){t.exports=a.p+"img/jetbrains.2a1c1512.png"},2372:function(t,e,a){"use strict";var r=a("2e70"),n=a.n(r);n.a},"2b77":function(t,e,a){},"2e70":function(t,e,a){},4009:function(t,e,a){},"4e55":function(t,e,a){t.exports=a.p+"img/detail.368ad3fd.png"},"673a":function(t,e,a){"use strict";var r=a("88f1"),n=a.n(r);n.a},"74a7":function(t,e,a){t.exports=a.p+"img/devfest.d9b60c2b.png"},"74d1":function(t,e,a){"use strict";var r=a("ee84"),n=a.n(r);n.a},"7faf":function(t,e,a){"use strict";var r=a("0af1"),n=a.n(r);n.a},"88f1":function(t,e,a){},ac9b:function(t,e,a){"use strict";var r=a("2b77"),n=a.n(r);n.a},bbc5:function(t,e,a){t.exports=a.p+"img/search.66406aed.png"},c0b9:function(t,e,a){t.exports=a.p+"img/zenika.c7351289.png"},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app"},[r("router-view"),t.isInfosRoute?t._e():r("footer",{staticClass:"footer"},[r("img",{attrs:{src:a("c0b9"),alt:"Zenika Logo"}}),r("img",{attrs:{src:a("74a7"),alt:"Devfest Nantes 2018 Logo"}}),r("img",{attrs:{src:a("1087"),alt:"Jetbrains Logo"}})])],1)},s=[],i=a("c665"),c=a("dc0a"),o=a("aa9a"),u=a("d328"),l=a("11d9"),h=a("60a3"),d=(a("f5df"),function(t){function e(){return Object(i["a"])(this,e),Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(o["a"])(e,[{key:"isInfosRoute",get:function(){return"/infos"===this.$route.path}}]),Object(c["a"])(e,t),e}(h["c"])),f=d,p=(a("7faf"),a("2877")),v=Object(p["a"])(f,n,s,!1,null,null,null);v.options.__file="App.vue";var b=v.exports,g=a("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[t.character?r("CharacterCard",{attrs:{character:t.character}}):r("Loader"),r("router-link",{staticClass:"search-link",attrs:{to:"/characters"}},[r("img",{attrs:{src:a("bbc5"),alt:""}})])],1)},_=[],y=(a("96cf"),a("3040")),w=a("9ab4"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"character-card"},[a("img",{staticClass:"character-card__logo",attrs:{src:t.character.logo,alt:t.character.name},on:{click:t.goToDetail}}),a("div",{staticClass:"character-card__delimiter"}),a("div",{staticClass:"character-card__detail"},[a("h2",{staticClass:"character-card__title"},[t._v(t._s(t.character.name))]),a("div",{staticClass:"character-card__description"},[t._v(t._s(t.character.description))]),a("div",{staticClass:"character-card__icon"})])])},O=[],x=function(t){function e(){return Object(i["a"])(this,e),Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(o["a"])(e,[{key:"goToDetail",value:function(){this.$router.push("/characters/"+this.character.id)}}]),Object(c["a"])(e,t),e}(h["c"]);w["a"]([Object(h["b"])({required:!0})],x.prototype,"character",void 0),x=w["a"]([h["a"]],x);var k=x,C=k,R=(a("ac9b"),Object(p["a"])(C,j,O,!1,null,"06b90599",null));R.options.__file="CharacterCard.vue";var S=R.exports,V=(a("7f7f"),function t(e,a,r){Object(i["a"])(this,t),this.id=e,this.name=a,this.description=r,this.logo="/api/images/"+this.id+"?type=standard"}),E=a("bc3a"),M=a.n(E),P=function t(e){Object(i["a"])(this,t),this.javaSpecificationVersion=e.javaSpecificationVersion,this.javaVersion=e.javaVersion,this.javaVendor=e.javaVendor,this.moduleName=e.moduleName,this.modules=e.modules},D="/api/characters",L="/api/info";function A(t,e){return M.a.get(D,{params:{search:t,score:e}}).then(function(t){return t.data.characters.map(function(t){return new V(t.id,t.name,t.description)})}).catch(function(t){return 404===t.response.status?Promise.resolve([]):(console.error(t.response),Promise.reject())})}function $(t){return M.a.get(D+"/"+t).then(function(t){return t.data}).then(function(t){return new V(t.id,t.name,t.description)})}function N(){return M.a.get(L).then(function(t){return new P(t.data)})}var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{staticClass:"hyperspace"})},I=[],J=a("5118"),U=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.ctx=null,t.particles=[],t.w=0,t.h=0,t.spawnRadius=0,t.speed=0,t}return Object(o["a"])(e,[{key:"mounted",value:function(){var t=this.$el;if(t.width=window.innerWidth,t.height=window.innerHeight,t.getContext){var e=t.getContext("2d");if(!e)return;this.ctx=e,this.w=t.width,this.h=t.height,e.lineWidth=2,e.lineCap="round",this.spawnRadius=300,this.speed=this.spawnRadius/50;for(var a=[],r=200,n=0;n<r;n++){var s=this.w/2+Math.random()*this.spawnRadius-this.spawnRadius/2,i=this.h/2+Math.random()*this.spawnRadius-this.spawnRadius/2,c=Math.round(255*Math.random()),o=Math.round(255*Math.random()),u=Math.round(255*Math.random());a.push({x:s,y:i,xs:(s-this.w/2)/this.speed,ys:(i-this.h/2)/this.speed,l:5*Math.random(),color:"rgb("+c+","+o+","+u+")"})}this.particles=[];for(var l=0;l<r;l++)this.particles[l]=a[l];Object(J["setTimeout"])(this.draw,30)}}},{key:"draw",value:function(){this.ctx.clearRect(0,0,this.w,this.h);for(var t=0;t<this.particles.length;t++){var e=this.particles[t];this.ctx.strokeStyle="rgba(255,255,255,"+e.l/20+")",this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(e.x+e.l*e.xs,e.y+e.l*e.ys),this.ctx.stroke()}this.move(),Object(J["setTimeout"])(this.draw,30)}},{key:"move",value:function(){for(var t=0;t<this.particles.length;t++){var e=this.particles[t];e.x+=e.xs,e.y+=e.ys,(e.x<0||e.y<0||e.x>this.w||e.y>this.h)&&(e.x=this.w/2+Math.random()*this.spawnRadius-this.spawnRadius/2,e.y=this.h/2+Math.random()*this.spawnRadius-this.spawnRadius/2,e.xs=(e.x-this.w/2)/this.speed,e.ys=(e.y-this.h/2)/this.speed)}}}]),Object(c["a"])(e,t),e}(h["c"]);U=w["a"]([h["a"]],U);var q=U,F=q,H=(a("74d1"),Object(p["a"])(F,T,I,!1,null,"774534ab",null));H.options.__file="Loader.vue";var W=H.exports,z=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.character=null,t.loading=!0,t}return Object(o["a"])(e,[{key:"mounted",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,$(this.id);case 3:this.character=t.sent,this.loading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),Object(c["a"])(e,t),e}(h["c"]);w["a"]([Object(h["b"])({required:!0})],z.prototype,"id",void 0),z=w["a"]([Object(h["a"])({components:{CharacterCard:S,Loader:W}})],z);var B=z,Y=B,Z=(a("e68e"),Object(p["a"])(Y,m,_,!1,null,null,null));Z.options.__file="Character.vue";var G=Z.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{on:{scroll:t.detectEndOfPage}},[r("div",{staticClass:"character-card",staticStyle:{"flex-direction":"column"}},[r("input",{staticClass:"search-character",attrs:{type:"text",role:"searchbox",placeholder:"Search for character"},domProps:{value:t.searchValue},on:{input:t.updateSearchValue}}),r("div",{staticClass:"score"},[r("span",[t._v("Score: "+t._s(t.score))]),r("range-slider",{staticClass:"slider",attrs:{min:0,max:100,step:1},model:{value:t.score,callback:function(e){t.score=e},expression:"score"}})],1)]),t.loading?r("Loader"):t._e(),t._l(t.displayedCharacters,function(t,e){return r("CharacterCard",{key:e,attrs:{character:t}})}),r("router-link",{staticClass:"search-link",attrs:{to:"/infos"}},[r("img",{attrs:{src:a("4e55"),alt:""}})])],2)},Q=[],X=(a("386d"),a("c7e3")),tt=a.n(X),et=(a("2760"),function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.characters=[],t.score=90,t.showDetail=!1,t.loading=!1,t.currentPage=1,t}return Object(o["a"])(e,[{key:"updateSearchValue",value:function(t){var e=t.target.value;this.$router.push({path:"/characters",query:{search:e}})}},{key:"toggleShowDetail",value:function(){this.showDetail=!this.showDetail}},{key:"onUpdateSearchValue",value:function(){this.fetchData()}},{key:"onUpdatescore",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,A(this.searchValue,this.score);case 3:this.characters=t.sent,this.loading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"mounted",value:function(){this.fetchData(),window.addEventListener("scroll",this.detectEndOfPage)}},{key:"detectEndOfPage",value:function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-500&&(this.currentPage=this.currentPage+1)}},{key:"searchValue",get:function(){return this.$route.query.search}},{key:"displayedCharacters",get:function(){return this.characters?this.characters.slice(0,20*this.currentPage):this.characters}}]),Object(c["a"])(e,t),e}(h["c"]));w["a"]([Object(h["d"])("searchValue")],et.prototype,"onUpdateSearchValue",null),w["a"]([Object(h["d"])("score")],et.prototype,"onUpdatescore",null),et=w["a"]([Object(h["a"])({components:{CharacterCard:S,RangeSlider:tt.a,Loader:W}})],et);var at=et,rt=at,nt=(a("673a"),Object(p["a"])(rt,K,Q,!1,null,null,null));nt.options.__file="Characters.vue";var st=nt.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("audio",{attrs:{src:"/opening.ogg",autoplay:""}}),t.info?r("div",{staticClass:"starwars-scroll"},t._l(4,function(e){return r("div",{key:"content_"+e,staticClass:"starwars-scroll__content",class:"starwars-scroll__content__"+e},[r("div",{staticClass:"starwars-scroll__title"},[t._v("Information")]),r("br"),r("p",[t._v("JAVA SPECIFICATION VERSION: "+t._s(t.info.javaSpecificationVersion))]),r("p",[t._v("JAVA VERSION: "+t._s(t.info.javaVersion))]),r("p",[t._v("JAVA VENDOR: "+t._s(t.info.javaVendor))]),r("p",[t._v("MODULE NAME: "+t._s(t.info.moduleName))]),r("br"),r("div",{staticClass:"starwars-scroll__subtitle"},[t._v("LOADED MODULES")]),r("br"),r("p"),t._l(t.info.modules,function(e){return r("p",{key:e},[t._v(t._s(e))])})],2)})):r("Loader"),r("router-link",{staticClass:"search-link",attrs:{to:"/characters"}},[r("img",{attrs:{src:a("bbc5"),alt:""}})])],1)},ct=[],ot=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.info=null,t}return Object(o["a"])(e,[{key:"mounted",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:this.info=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),Object(c["a"])(e,t),e}(h["c"]);ot=w["a"]([Object(h["a"])({components:{Loader:W}})],ot);var ut=ot,lt=ut,ht=(a("2372"),Object(p["a"])(lt,it,ct,!1,null,"105a17d9",null));ht.options.__file="Infos.vue";var dt=ht.exports;r["default"].use(g["a"]);var ft=new g["a"]({mode:"history",base:"/",routes:[{path:"/characters",component:st},{path:"/characters/:id",component:G,props:!0},{path:"/infos",component:dt},{path:"*",redirect:"/characters"}]}),pt=a("2f62");r["default"].use(pt["a"]);var vt=new pt["a"].Store({state:{},mutations:{},actions:{}}),bt=a("9483");Object(bt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["default"].config.productionTip=!1,new r["default"]({router:ft,store:vt,render:function(t){return t(b)}}).$mount("#app")},e68e:function(t,e,a){"use strict";var r=a("4009"),n=a.n(r);n.a},ee84:function(t,e,a){}});
//# sourceMappingURL=app.b57a1aba.js.map