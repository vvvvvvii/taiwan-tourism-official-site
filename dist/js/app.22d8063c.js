(function(t){function e(e){for(var a,r,o=e[0],i=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);b&&b(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},c=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4856":"f8479c0b","chunk-82cb7a3e":"f5336f0b","chunk-1f819b76":"a2a55bc6","chunk-80515160":"71cb368e"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=r(t);var l=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}s[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/taiwan-tourism-official-site/dist/",o.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),s=n("90ea"),c=n("a16a"),r=n("6d3b"),o=n("5dc8"),i=n("bc3a"),l=n.n(i),u=n("130e");function b(t,e,n,s,c,r){var o=Object(a["C"])("Navbar"),i=Object(a["C"])("router-view"),l=Object(a["C"])("Footer");return Object(a["x"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(o,{onEmitNavbarData:r.getEmitNavbarData},null,8,["onEmitNavbarData"]),Object(a["j"])(i,{searchPropsContent:c.searchContent,searchSpotPropsOption:c.searchSpotOption},null,8,["searchPropsContent","searchSpotPropsOption"]),Object(a["j"])(l)],64)}var p=Object(a["g"])("i",{class:"bi bi-chevron-left text-light fw-bold fs-xxxl"},null,-1),f=[p],d={class:"input-group bg-light rounded-3 mb-3"},h=Object(a["g"])("i",{class:"bi bi-search"},null,-1),m={class:"d-flex justify-content-end mb-6"},g={class:"fs-md"},O=Object(a["g"])("li",null,"全部景點",-1),j=Object(a["g"])("li",null,"熱門景點",-1),x=Object(a["g"])("li",null,"網美景點",-1),v=Object(a["g"])("li",null,"戶外景點",-1),w=Object(a["g"])("li",null,"運動景點",-1),y=Object(a["g"])("li",null,"DIY 活動",-1),k=[O,j,x,v,w,y],S=Object(a["g"])("i",{class:"bi bi-caret-down-fill text-warning ms-6"},null,-1),C=Object(a["h"])('<p class="fs-xxxs mb-3">推薦景點</p><ul><li class="d-flex align-items-center mb-3"><div class="p-3 bg-light opacity-75 rounded-1"><i class="bi bi-geo-alt"></i></div><p class="ms-3">Taipei‧台北 2021 燈節</p></li></ul>',2),M={class:"navbar"},P={class:"header-logo mx-md-0 mx-auto mb-md-0 mb-4"},E={class:"input-group d-md-flex d-none bg-light rounded-3 w-50"},L={class:"fs-md text-warning"},D=Object(a["g"])("li",null,"全部景點",-1),H=Object(a["g"])("li",null,"熱門景點",-1),T=Object(a["g"])("li",null,"網美景點",-1),_=Object(a["g"])("li",null,"戶外景點",-1),N=Object(a["g"])("li",null,"運動景點",-1),J=Object(a["g"])("li",null,"DIY 活動",-1),G=[D,H,T,_,N,J],K=Object(a["g"])("i",{class:"bi bi-caret-down-fill text-warning ms-3"},null,-1),F=Object(a["g"])("i",{class:"bi bi-search"},null,-1),I=Object(a["h"])('<ul class="d-flex mb-md-0 mb-4"><li class="d-md-block d-none"><a href="#" class="d-flex flex-column align-items-center fs-xxs"><i class="bi bi-facebook fs-xxxl mb-3"></i> facebook </a></li><li class="ms-md-8"><a href="#" class="d-flex flex-column align-items-center fs-xxs"><i class="bi bi-globe fs-xxxl mb-3"></i> 語言 </a></li></ul>',1),U={class:"input-group d-md-none align-items-center bg-light rounded-3"};function V(t,e,n,s,c,r){var o=Object(a["C"])("router-link");return Object(a["x"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",{class:Object(a["p"])(["hamburger-menu",{active:c.hamburgerMenuShow}])},[Object(a["g"])("p",{class:"mb-10",onClick:e[0]||(e[0]=function(){return r.toggleHamburgerMenu&&r.toggleHamburgerMenu.apply(r,arguments)})},f),Object(a["g"])("div",d,[Object(a["K"])(Object(a["g"])("input",{type:"text",class:"form-control",placeholder:"你想去哪裡？台南景點","aria-label":"你想去哪裡？台南景點","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.searchContent=t})},null,512),[[a["G"],c.searchContent]]),Object(a["j"])(o,{to:"/attraction-list",class:"btn btn-success px-6 py-2",type:"button",onClick:r.sendEmitNavbarData},{default:Object(a["J"])((function(){return[h]})),_:1},8,["onClick"])]),Object(a["g"])("div",m,[Object(a["g"])("div",{class:"navbar-select-btn justify-content-center rounded-3 w-50 position-relative",onClick:e[3]||(e[3]=function(){return r.showOptions&&r.showOptions.apply(r,arguments)})},[Object(a["g"])("p",g,Object(a["E"])(c.searchSpotOption),1),Object(a["K"])(Object(a["g"])("ul",{class:"navbar-option-list",onClick:e[2]||(e[2]=function(){return r.changeSearchSpotOption&&r.changeSearchSpotOption.apply(r,arguments)})},k,512),[[a["H"],c.optionListShow]]),S])]),C],2),Object(a["g"])("div",M,[Object(a["g"])("h1",P,[Object(a["j"])(o,{to:"/",title:"回到首頁"})]),Object(a["g"])("div",E,[Object(a["K"])(Object(a["g"])("input",{type:"text",class:"form-control",placeholder:"你想去哪裡？台南景點","aria-label":"你想去哪裡？台南景點","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.searchContent=t})},null,512),[[a["G"],c.searchContent]]),Object(a["g"])("div",{class:Object(a["p"])(["navbar-select-btn pe-4 py-2 position-relative",{active:c.optionListShow}]),onClick:e[6]||(e[6]=function(){return r.showOptions&&r.showOptions.apply(r,arguments)})},[Object(a["g"])("div",{class:Object(a["p"])(["border-warning ps-4",{"border-start":!c.optionListShow}])},[Object(a["g"])("p",L,Object(a["E"])(c.searchSpotOption),1),Object(a["K"])(Object(a["g"])("ul",{class:"navbar-option-list",onClick:e[5]||(e[5]=function(){return r.changeSearchSpotOption&&r.changeSearchSpotOption.apply(r,arguments)})},G,512),[[a["H"],c.optionListShow]])],2),K],2),Object(a["j"])(o,{to:"/attraction-list",class:"btn btn-success px-6 py-2",type:"button",onClick:e[7]||(e[7]=function(e){return t.$emit("emit-navbar-data",c.searchContent,c.searchSpotOption)})},{default:Object(a["J"])((function(){return[F]})),_:1})]),I,Object(a["g"])("div",U,[Object(a["g"])("input",{type:"text",class:"form-control text-center",placeholder:"你想去哪裡？台南景點","aria-label":"你想去哪裡？台南景點",onClick:e[8]||(e[8]=function(){return r.toggleHamburgerMenu&&r.toggleHamburgerMenu.apply(r,arguments)})})])])],64)}var Y={data:function(){return{optionListShow:!1,hamburgerMenuShow:!1,searchContent:"",searchSpotOption:"全部景點"}},emits:["emit-navbar-data"],methods:{showOptions:function(){this.optionListShow=!this.optionListShow},changeSearchSpotOption:function(t){4===t.target.innerHTML.length&&(this.searchSpotOption=t.target.innerHTML)},toggleHamburgerMenu:function(){this.hamburgerMenuShow=!this.hamburgerMenuShow},sendEmitNavbarData:function(){this.$emit("emit-navbar-data",this.searchContent,this.searchSpotOption),this.hamburgerMenuShow=!1}}},$=n("6b0d"),q=n.n($);const A=q()(Y,[["render",V]]);var z=A,B={class:"bg-primary footer"},Q=Object(a["h"])('<a href="#" class="text-dark d-md-none fs-xxs text-center mb-10">關於 Taiwan GO</a><div class="d-flex justify-content-between w-lg-50 w-75 mx-auto mb-10"><a href="#" class="text-dark fs-md-sm fs-xxs d-md-inline d-none">關於 Taiwan GO</a><ul><li><a href="#" class="text-dark fs-md-sm fs-xxs mb-7">投稿說明</a></li><li><a href="#" class="text-dark fs-md-sm fs-xxs mb-7">投稿說明</a></li><li><a href="#" class="text-dark fs-md-sm fs-xxs">版權所有</a></li></ul><ul><li><a href="#" class="text-dark fs-md-sm fs-xxs mb-7">最新消息</a></li><li><a href="#" class="text-dark fs-md-sm fs-xxs mb-7">展覽資訊</a></li><li><a href="#" class="text-dark fs-md-sm fs-xxs">景點告示</a></li></ul><a href="#" class="text-dark fs-md-sm fs-xxs">友善旅遊</a><a href="#" class="text-dark fs-md-sm fs-xxs">活動行事曆</a></div>',2),R={class:"container"},W={class:"d-flex justify-content-between align-items-center mb-6"},X=Object(a["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/logo.png?raw=true",alt:"footer-logo"},null,-1),Z=Object(a["g"])("a",{href:"#",class:"d-md-none fs-xxs"},[Object(a["i"])(" 關注我 "),Object(a["g"])("i",{class:"bi bi-facebook ms-md-4 ms-2"})],-1),tt=Object(a["h"])('<div class="d-flex justify-content-between align-items-center"><div class="d-flex"><p class="fs-md-xxs fs-xxxs">Design 芬妮</p><p class="ms-5 fs-md-xxs fs-xxxs">更新日期：2021.11.03</p><p class="ms-5 fs-md-xxs fs-xxxs">圖片來源：https://unsplash.com/</p></div><a href="#" class="d-md-block d-none"> 關注我 <i class="bi bi-facebook ms-4"></i></a></div>',1);function et(t,e){var n=Object(a["C"])("router-link");return Object(a["x"])(),Object(a["f"])("div",B,[Q,Object(a["g"])("div",R,[Object(a["g"])("div",W,[Object(a["j"])(n,{to:"/",title:"回到首頁"},{default:Object(a["J"])((function(){return[X]})),_:1}),Z]),tt])])}const nt={},at=q()(nt,[["render",et]]);var st=at,ct={data:function(){return{searchContent:"",searchSpotOption:""}},components:{Navbar:z,Footer:st},methods:{getEmitNavbarData:function(t,e){this.searchContent=t,this.searchSpotOption=e}}};n("7549");const rt=q()(ct,[["render",b]]);var ot=rt,it=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),lt=[{path:"/",name:"首頁",component:function(){return Promise.all([n.e("chunk-82cb7a3e"),n.e("chunk-80515160")]).then(n.bind(null,"bb51"))}},{path:"/article",name:"文章頁",component:function(){return n.e("chunk-2d0c4856").then(n.bind(null,"3ad6"))}},{path:"/attraction-list",name:"景點列表頁",component:function(){return Promise.all([n.e("chunk-82cb7a3e"),n.e("chunk-1f819b76")]).then(n.bind(null,"b814"))}}],ut=Object(it["a"])({history:Object(it["b"])(),routes:lt}),bt=ut;r["a"].use([o["a"]]);var pt=Object(a["c"])(ot);pt.use(bt).use(u["a"],l.a).component("Swiper",s["a"]).component("SwiperSlide",c["a"]).mount("#app")},7549:function(t,e,n){"use strict";n("fa7e")},fa7e:function(t,e,n){}});
//# sourceMappingURL=app.22d8063c.js.map