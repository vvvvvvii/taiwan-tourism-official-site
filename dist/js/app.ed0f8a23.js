(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,b=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4856":"5817f6c7","chunk-82cb7a3e":"f5336f0b","chunk-2d2105af":"b607f00e","chunk-80515160":"f050fbe8"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/taiwan-tourism-official-site/dist/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("90ea"),o=n("a16a"),i=n("6d3b"),c=n("5dc8"),s=n("bc3a"),l=n.n(s),u=n("130e");function p(t,e,n,r,o,i){var c=Object(a["B"])("Navbar"),s=Object(a["B"])("router-view"),l=Object(a["B"])("Footer");return Object(a["w"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(c,{onEmitNavbarData:i.getEmitNavbarData},null,8,["onEmitNavbarData"]),Object(a["i"])(s,{searchPropsContent:o.searchContent,searchSpotPropsOption:o.searchSpotOption},null,8,["searchPropsContent","searchSpotPropsOption"]),Object(a["i"])(l)],64)}var b={class:"navbar"},f=Object(a["g"])("h1",{class:"header-logo"},[Object(a["g"])("a",{href:"/",title:"回到首頁"})],-1),h={class:"input-group bg-light rounded-3 w-50"},d={class:"fs-md text-warning"},O=Object(a["g"])("li",null,"全部景點",-1),m=Object(a["g"])("li",null,"熱門景點",-1),v=Object(a["g"])("li",null,"網美景點",-1),g=Object(a["g"])("li",null,"戶外景點",-1),j=Object(a["g"])("li",null,"運動景點",-1),x=Object(a["g"])("li",null,"DIY 活動",-1),w=[O,m,v,g,j,x],y=Object(a["g"])("i",{class:"bi bi-caret-down-fill text-warning ms-3"},null,-1),k=Object(a["g"])("i",{class:"bi bi-search"},null,-1),S=Object(a["h"])('<ul class="d-flex"><li><a href="#" class="d-flex flex-column align-items-center fs-xxs"><i class="bi bi-facebook fs-xxxl mb-3"></i> facebook </a></li><li class="ms-8"><a href="#" class="d-flex flex-column align-items-center fs-xxs"><i class="bi bi-globe fs-xxxl mb-3"></i> 語言 </a></li></ul>',1);function P(t,e,n,r,o,i){var c=Object(a["B"])("router-link");return Object(a["w"])(),Object(a["f"])("div",b,[f,Object(a["g"])("div",h,[Object(a["J"])(Object(a["g"])("input",{type:"text",class:"form-control",placeholder:"你想去哪裡？台南景點","aria-label":"你想去哪裡？台南景點","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.searchContent=t})},null,512),[[a["F"],o.searchContent]]),Object(a["g"])("div",{class:Object(a["o"])(["navbar-select-btn pe-4 py-2 position-relative",{active:o.optionListShow}]),onClick:e[2]||(e[2]=function(){return i.showOptions&&i.showOptions.apply(i,arguments)})},[Object(a["g"])("div",{class:Object(a["o"])(["border-warning ps-4",{"border-start":!o.optionListShow}])},[Object(a["g"])("p",d,Object(a["D"])(o.searchSpotOption),1),Object(a["J"])(Object(a["g"])("ul",{class:"navbar-option-list",onClick:e[1]||(e[1]=function(){return i.changeSearchSpotOption&&i.changeSearchSpotOption.apply(i,arguments)})},w,512),[[a["G"],o.optionListShow]])],2),y],2),Object(a["i"])(c,{to:"/attraction-list",class:"btn btn-success px-6 py-2",type:"button",onClick:e[3]||(e[3]=function(e){return t.$emit("emit-navbar-data",o.searchContent,o.searchSpotOption)})},{default:Object(a["I"])((function(){return[k]})),_:1})]),S])}var C={data:function(){return{optionListShow:!1,searchSpotOption:"全部景點",searchContent:""}},methods:{showOptions:function(){this.optionListShow=!this.optionListShow},changeSearchSpotOption:function(t){4===t.target.innerHTML.length&&(this.searchSpotOption=t.target.innerHTML)}}},L=n("6b0d"),D=n.n(L);const E=D()(C,[["render",P]]);var T=E,_={class:"bg-primary footer"},M=Object(a["h"])('<div class="d-flex justify-content-between w-50 mx-auto mb-10"><a href="#" class="text-dark">關於 Taiwan GO</a><ul><li><a href="#" class="text-dark mb-7">投稿說明</a></li><li><a href="#" class="text-dark mb-7">投稿說明</a></li><li><a href="#" class="text-dark">版權所有</a></li></ul><ul><li><a href="#" class="text-dark mb-7">最新消息</a></li><li><a href="#" class="text-dark mb-7">展覽資訊</a></li><li><a href="#" class="text-dark">景點告示</a></li></ul><a href="#" class="text-dark">友善旅遊</a><a href="#" class="text-dark">活動行事曆</a></div><div class="container"><a href="/" title="回到首頁" class="mb-6"><img src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/logo.png?raw=true" alt="footer-logo"></a><div class="d-flex justify-content-between"><div class="d-flex"><p class="fs-xxs">Design 芬妮</p><p class="ms-5 fs-xxs">更新日期：2021.11.03</p><p class="ms-5 fs-xxs">圖片來源：https://unsplash.com/</p></div><a href="#"> 關注我 <i class="bi bi-facebook ms-4"></i></a></div></div>',2),N=[M];function B(t,e){return Object(a["w"])(),Object(a["f"])("div",_,N)}const J={},F=D()(J,[["render",B]]);var G=F,H={data:function(){return{searchContent:"",searchSpotOption:""}},components:{Navbar:T,Footer:G},methods:{getEmitNavbarData:function(t,e){this.searchContent=t,this.searchSpotOption=e}}};n("7549");const I=D()(H,[["render",p]]);var q=I,A=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),U=[{path:"/",name:"首頁",component:function(){return Promise.all([n.e("chunk-82cb7a3e"),n.e("chunk-80515160")]).then(n.bind(null,"bb51"))}},{path:"/article",name:"文章頁",component:function(){return n.e("chunk-2d0c4856").then(n.bind(null,"3ad6"))}},{path:"/attraction-list",name:"景點列表頁",component:function(){return Promise.all([n.e("chunk-82cb7a3e"),n.e("chunk-2d2105af")]).then(n.bind(null,"b814"))}}],V=Object(A["a"])({history:Object(A["b"])(),routes:U}),Y=V;i["a"].use([c["a"]]);var $=Object(a["c"])(q);$.use(Y).use(u["a"],l.a).component("Swiper",r["a"]).component("SwiperSlide",o["a"]).mount("#app")},7549:function(t,e,n){"use strict";n("fa7e")},fa7e:function(t,e,n){}});
//# sourceMappingURL=app.ed0f8a23.js.map