(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80515160"],{"00b4":function(t,e,i){"use strict";i("ac1f");var n=i("23e7"),r=i("da84"),s=i("c65b"),c=i("e330"),a=i("1626"),o=i("861d"),l=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=r.Error,f=c(/./.test);n({target:"RegExp",proto:!0,forced:!l},{test:function(t){var e=this.exec;if(!a(e))return f(this,t);var i=s(e,this,t);if(null!==i&&!o(i))throw new u("RegExp exec method returned something other than an Object or null");return!!i}})},"04d1":function(t,e,i){var n=i("342f"),r=n.match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},"057f":function(t,e,i){var n=i("c6b6"),r=i("fc6a"),s=i("241c").f,c=i("f36a"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(e){return c(a)}};t.exports.f=function(t){return a&&"Window"==n(t)?o(t):s(r(t))}},"428f":function(t,e,i){var n=i("da84");t.exports=n},"4df4":function(t,e,i){"use strict";var n=i("da84"),r=i("0366"),s=i("c65b"),c=i("7b0b"),a=i("9bdd"),o=i("e95a"),l=i("68ee"),u=i("07fa"),f=i("8418"),d=i("9a1f"),b=i("35a1"),p=n.Array;t.exports=function(t){var e=c(t),i=l(this),n=arguments.length,v=n>1?arguments[1]:void 0,g=void 0!==v;g&&(v=r(v,n>2?arguments[2]:void 0));var m,h,w,O,j,x,y=b(e),S=0;if(!y||this==p&&o(y))for(m=u(e),h=i?new this(m):p(m);m>S;S++)x=g?v(e[S],S):e[S],f(h,S,x);else for(O=d(e,y),j=O.next,h=i?new this:[];!(w=s(j,O)).done;S++)x=g?a(O,v,[w.value,S],!0):w.value,f(h,S,x);return h.length=S,h}},"4e82":function(t,e,i){"use strict";var n=i("23e7"),r=i("e330"),s=i("59ed"),c=i("7b0b"),a=i("07fa"),o=i("577e"),l=i("d039"),u=i("addb"),f=i("a640"),d=i("04d1"),b=i("d998"),p=i("2d00"),v=i("512c"),g=[],m=r(g.sort),h=r(g.push),w=l((function(){g.sort(void 0)})),O=l((function(){g.sort(null)})),j=f("sort"),x=!l((function(){if(p)return p<70;if(!(d&&d>3)){if(b)return!0;if(v)return v<603;var t,e,i,n,r="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(n=0;n<47;n++)g.push({k:e+n,v:i})}for(g.sort((function(t,e){return e.v-t.v})),n=0;n<g.length;n++)e=g[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}})),y=w||!O||!j||!x,S=function(t){return function(e,i){return void 0===i?-1:void 0===e?1:void 0!==t?+t(e,i)||0:o(e)>o(i)?1:-1}};n({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&s(t);var e=c(this);if(x)return void 0===t?m(e):m(e,t);var i,n,r=[],o=a(e);for(n=0;n<o;n++)n in e&&h(r,e[n]);u(r,S(t)),i=r.length,n=0;while(n<i)e[n]=r[n++];while(n<o)delete e[n++];return e}})},"4fad":function(t,e,i){var n=i("d039"),r=i("861d"),s=i("c6b6"),c=i("d86b"),a=Object.isExtensible,o=n((function(){a(1)}));t.exports=o||c?function(t){return!!r(t)&&((!c||"ArrayBuffer"!=s(t))&&(!a||a(t)))}:a},"512c":function(t,e,i){var n=i("342f"),r=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},6062:function(t,e,i){"use strict";var n=i("6d61"),r=i("6566");n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,i){"use strict";var n=i("9bf2").f,r=i("7c73"),s=i("e2cc"),c=i("0366"),a=i("19aa"),o=i("2266"),l=i("7dd0"),u=i("2626"),f=i("83ab"),d=i("f183").fastKey,b=i("69f3"),p=b.set,v=b.getterFor;t.exports={getConstructor:function(t,e,i,l){var u=t((function(t,n){a(t,b),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=n&&o(n,t[l],{that:t,AS_ENTRIES:i})})),b=u.prototype,g=v(e),m=function(t,e,i){var n,r,s=g(t),c=h(t,e);return c?c.value=i:(s.last=c={index:r=d(e,!0),key:e,value:i,previous:n=s.last,next:void 0,removed:!1},s.first||(s.first=c),n&&(n.next=c),f?s.size++:t.size++,"F"!==r&&(s.index[r]=c)),t},h=function(t,e){var i,n=g(t),r=d(e);if("F"!==r)return n.index[r];for(i=n.first;i;i=i.next)if(i.key==e)return i};return s(b,{clear:function(){var t=this,e=g(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,i=g(e),n=h(e,t);if(n){var r=n.next,s=n.previous;delete i.index[n.index],n.removed=!0,s&&(s.next=r),r&&(r.previous=s),i.first==n&&(i.first=r),i.last==n&&(i.last=s),f?i.size--:e.size--}return!!n},forEach:function(t){var e,i=g(this),n=c(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!h(this,t)}}),s(b,i?{get:function(t){var e=h(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),f&&n(b,"size",{get:function(){return g(this).size}}),u},setStrong:function(t,e,i){var n=e+" Iterator",r=v(e),s=v(n);l(t,e,(function(t,e){p(this,{type:n,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),u(e)}}},"6d61":function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),s=i("e330"),c=i("94ca"),a=i("6eeb"),o=i("f183"),l=i("2266"),u=i("19aa"),f=i("1626"),d=i("861d"),b=i("d039"),p=i("1c7e"),v=i("d44e"),g=i("7156");t.exports=function(t,e,i){var m=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),w=m?"set":"add",O=r[t],j=O&&O.prototype,x=O,y={},S=function(t){var e=s(j[t]);a(j,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!d(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return h&&!d(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!d(t))&&e(this,0===t?0:t)}:function(t,i){return e(this,0===t?0:t,i),this})},k=c(t,!f(O)||!(h||j.forEach&&!b((function(){(new O).entries().next()}))));if(k)x=i.getConstructor(e,t,m,w),o.enable();else if(c(t,!0)){var A=new x,P=A[w](h?{}:-0,1)!=A,N=b((function(){A.has(1)})),T=p((function(t){new O(t)})),B=!h&&b((function(){var t=new O,e=5;while(e--)t[w](e,e);return!t.has(-0)}));T||(x=e((function(t,e){u(t,j);var i=g(new O,t,x);return void 0!=e&&l(e,i[w],{that:i,AS_ENTRIES:m}),i})),x.prototype=j,j.constructor=x),(N||B)&&(S("delete"),S("has"),m&&S("get")),(B||P)&&S(w),h&&j.clear&&delete j.clear}return y[t]=x,n({global:!0,forced:x!=O},y),v(x,t),h||i.setStrong(x,t,m),x}},7156:function(t,e,i){var n=i("1626"),r=i("861d"),s=i("d2bb");t.exports=function(t,e,i){var c,a;return s&&n(c=e.constructor)&&c!==i&&r(a=c.prototype)&&a!==i.prototype&&s(t,a),t}},"746f":function(t,e,i){var n=i("428f"),r=i("1a2d"),s=i("e538"),c=i("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||c(e,t,{value:s.f(t)})}},"9bdd":function(t,e,i){var n=i("825a"),r=i("2a62");t.exports=function(t,e,i,s){try{return s?e(n(i)[0],i[1]):e(i)}catch(c){r(t,"throw",c)}}},a15b:function(t,e,i){"use strict";var n=i("23e7"),r=i("e330"),s=i("44ad"),c=i("fc6a"),a=i("a640"),o=r([].join),l=s!=Object,u=a("join",",");n({target:"Array",proto:!0,forced:l||!u},{join:function(t){return o(c(this),void 0===t?",":t)}})},a4d3:function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),s=i("d066"),c=i("2ba4"),a=i("c65b"),o=i("e330"),l=i("c430"),u=i("83ab"),f=i("4930"),d=i("d039"),b=i("1a2d"),p=i("e8b5"),v=i("1626"),g=i("861d"),m=i("3a9b"),h=i("d9b5"),w=i("825a"),O=i("7b0b"),j=i("fc6a"),x=i("a04b"),y=i("577e"),S=i("5c6c"),k=i("7c73"),A=i("df75"),P=i("241c"),N=i("057f"),T=i("7418"),B=i("06cf"),D=i("9bf2"),E=i("d1e7"),I=i("f36a"),C=i("6eeb"),V=i("5692"),z=i("f772"),M=i("d012"),_=i("90e3"),W=i("b622"),F=i("e538"),H=i("746f"),R=i("d44e"),J=i("69f3"),K=i("b727").forEach,Q=z("hidden"),$="Symbol",U="prototype",X=W("toPrimitive"),G=J.set,L=J.getterFor($),Y=Object[U],Z=r.Symbol,q=Z&&Z[U],tt=r.TypeError,et=r.QObject,it=s("JSON","stringify"),nt=B.f,rt=D.f,st=N.f,ct=E.f,at=o([].push),ot=V("symbols"),lt=V("op-symbols"),ut=V("string-to-symbol-registry"),ft=V("symbol-to-string-registry"),dt=V("wks"),bt=!et||!et[U]||!et[U].findChild,pt=u&&d((function(){return 7!=k(rt({},"a",{get:function(){return rt(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=nt(Y,e);n&&delete Y[e],rt(t,e,i),n&&t!==Y&&rt(Y,e,n)}:rt,vt=function(t,e){var i=ot[t]=k(q);return G(i,{type:$,tag:t,description:e}),u||(i.description=e),i},gt=function(t,e,i){t===Y&&gt(lt,e,i),w(t);var n=x(e);return w(i),b(ot,n)?(i.enumerable?(b(t,Q)&&t[Q][n]&&(t[Q][n]=!1),i=k(i,{enumerable:S(0,!1)})):(b(t,Q)||rt(t,Q,S(1,{})),t[Q][n]=!0),pt(t,n,i)):rt(t,n,i)},mt=function(t,e){w(t);var i=j(e),n=A(i).concat(xt(i));return K(n,(function(e){u&&!a(wt,i,e)||gt(t,e,i[e])})),t},ht=function(t,e){return void 0===e?k(t):mt(k(t),e)},wt=function(t){var e=x(t),i=a(ct,this,e);return!(this===Y&&b(ot,e)&&!b(lt,e))&&(!(i||!b(this,e)||!b(ot,e)||b(this,Q)&&this[Q][e])||i)},Ot=function(t,e){var i=j(t),n=x(e);if(i!==Y||!b(ot,n)||b(lt,n)){var r=nt(i,n);return!r||!b(ot,n)||b(i,Q)&&i[Q][n]||(r.enumerable=!0),r}},jt=function(t){var e=st(j(t)),i=[];return K(e,(function(t){b(ot,t)||b(M,t)||at(i,t)})),i},xt=function(t){var e=t===Y,i=st(e?lt:j(t)),n=[];return K(i,(function(t){!b(ot,t)||e&&!b(Y,t)||at(n,ot[t])})),n};if(f||(Z=function(){if(m(q,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=_(t),i=function(t){this===Y&&a(i,lt,t),b(this,Q)&&b(this[Q],e)&&(this[Q][e]=!1),pt(this,e,S(1,t))};return u&&bt&&pt(Y,e,{configurable:!0,set:i}),vt(e,t)},q=Z[U],C(q,"toString",(function(){return L(this).tag})),C(Z,"withoutSetter",(function(t){return vt(_(t),t)})),E.f=wt,D.f=gt,B.f=Ot,P.f=N.f=jt,T.f=xt,F.f=function(t){return vt(W(t),t)},u&&(rt(q,"description",{configurable:!0,get:function(){return L(this).description}}),l||C(Y,"propertyIsEnumerable",wt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Z}),K(A(dt),(function(t){H(t)})),n({target:$,stat:!0,forced:!f},{for:function(t){var e=y(t);if(b(ut,e))return ut[e];var i=Z(e);return ut[e]=i,ft[i]=e,i},keyFor:function(t){if(!h(t))throw tt(t+" is not a symbol");if(b(ft,t))return ft[t]},useSetter:function(){bt=!0},useSimple:function(){bt=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!u},{create:ht,defineProperty:gt,defineProperties:mt,getOwnPropertyDescriptor:Ot}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:jt,getOwnPropertySymbols:xt}),n({target:"Object",stat:!0,forced:d((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(O(t))}}),it){var yt=!f||d((function(){var t=Z();return"[null]"!=it([t])||"{}"!=it({a:t})||"{}"!=it(Object(t))}));n({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,i){var n=I(arguments),r=e;if((g(e)||void 0!==t)&&!h(t))return p(e)||(e=function(t,e){if(v(r)&&(e=a(r,this,t,e)),!h(e))return e}),n[1]=e,c(it,null,n)}})}if(!q[X]){var St=q.valueOf;C(q,X,(function(t){return a(St,this)}))}R(Z,$),M[Q]=!0},a630:function(t,e,i){var n=i("23e7"),r=i("4df4"),s=i("1c7e"),c=!s((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:c},{from:r})},addb:function(t,e,i){var n=i("f36a"),r=Math.floor,s=function(t,e){var i=t.length,o=r(i/2);return i<8?c(t,e):a(t,s(n(t,0,o),e),s(n(t,o),e),e)},c=function(t,e){var i,n,r=t.length,s=1;while(s<r){n=s,i=t[s];while(n&&e(t[n-1],i)>0)t[n]=t[--n];n!==s++&&(t[n]=i)}return t},a=function(t,e,i,n){var r=e.length,s=i.length,c=0,a=0;while(c<r||a<s)t[c+a]=c<r&&a<s?n(e[c],i[a])<=0?e[c++]:i[a++]:c<r?e[c++]:i[a++];return t};t.exports=s},b0c0:function(t,e,i){var n=i("83ab"),r=i("5e77").EXISTS,s=i("e330"),c=i("9bf2").f,a=Function.prototype,o=s(a.toString),l=/^\s*function ([^ (]*)/,u=s(l.exec),f="name";n&&!r&&c(a,f,{configurable:!0,get:function(){try{return u(l,o(this))[1]}catch(t){return""}}})},bb2f:function(t,e,i){var n=i("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bb51:function(t,e,i){"use strict";i.r(e);i("a15b"),i("ac1f"),i("1276");var n=i("7a23"),r={class:"swiper py-7"},s=Object(n["g"])("i",{class:"bi bi-exclamation-triangle-fill"},null,-1),c={class:"ms-5"},a={class:"swiper"},o=Object(n["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/banner.png?raw=true",alt:"駁二特區彩虹步道即將開幕",class:"w-100"},null,-1),l=Object(n["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/banner.png?raw=true",alt:"駁二特區彩虹步道即將開幕",class:"w-100"},null,-1),u=Object(n["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/banner.png?raw=true",alt:"駁二特區彩虹步道即將開幕",class:"w-100"},null,-1),f={class:"container"},d={class:"section"},b=Object(n["g"])("h2",{class:"section-title mb-0"},"從台灣發現更多美好",-1),p=Object(n["g"])("h2",{class:"section-title"},"兩大城市 教你拍起 EMO 圖！",-1),v={class:"row"},g={class:"col-md-6 mb-8"},m=Object(n["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/kaohsiung.jpeg?raw=true",alt:"2021 高雄旅遊景點一日遊",title:"2021 高雄旅遊景點一日遊",class:"card-img-top"},null,-1),h=Object(n["g"])("div",{class:"card-body"},[Object(n["g"])("h3",{class:"card-title mb-10"},"2021 高雄旅遊景點 一日遊"),Object(n["g"])("div",{class:"position-relative float-end"},[Object(n["g"])("p",{class:"card-text position-absolute"},"一起了解，你從未發現高雄"),Object(n["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/arrow.png?raw=true",alt:"arrow img",class:"w-lg-100 w-75"})])],-1),w=Object(n["h"])('<li class="col-md-6"><a href="#" class="card bg-primary"><img src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/taipei.jpeg?raw=true" alt="2021 台北旅遊景點一日遊" title="2021 台北旅遊景點一日遊" class="card-img-top"><div class="card-body"><h3 class="card-title mb-10">2021 台北旅遊景點 一日遊</h3><div class="position-relative float-end"><p class="card-text position-absolute">一起了解，你從未發現台北</p><img src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/arrow.png?raw=true" alt="arrow img" class="w-lg-100 w-75"></div></div></a></li>',1),O={class:"section pt-0 text-center"},j=Object(n["h"])('<div class="d-flex justify-content-between align-items-center mb-9"><h2 class="fs-md-xxl fs-md">人氣景點探索</h2><div class="d-flex align-items-center"><div class="btn btn-success btn-pagination"><i class="bi bi-chevron-left"></i></div><p class="ms-10">1/4</p><div class="btn btn-success btn-pagination ms-10"><i class="bi bi-chevron-right"></i></div></div></div>',1),x={class:"swiper mb-md-10 mb-3"},y=["title"],S={class:"position-relative mb-4"},k=["src","alt"],A={class:"card-img-title"},P={class:"fs-md text-center"},N=Object(n["g"])("div",{class:"btn read-more-btn"},[Object(n["g"])("p",{class:"fs-md-lg fs-xxs"},"了解更多詳情"),Object(n["g"])("i",{class:"bi bi-arrow-right-short arrow-icon btn-arrow"})],-1),T={class:"section"},B=Object(n["h"])('<div class="row align-items-center mb-9"><div class="offset-4 col-4"><h2 class="fs-md-xxl fs-md text-center">〔 投稿專區 〕</h2></div><div class="col-4"><div class="d-flex justify-content-end align-items-center"><div class="btn btn-success btn-pagination"><i class="bi bi-chevron-left"></i></div><p class="ms-10">1/3</p><div class="btn btn-success btn-pagination ms-10"><i class="bi bi-chevron-right"></i></div></div></div></div>',1),D={class:"swiper mb-md-10 mb-3"},E=Object(n["g"])("a",{href:"#",title:"關於墾丁回憶...",class:"text-dark"},[Object(n["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/contribute.jpeg?raw=true",alt:"關於墾丁回憶...",class:"card-img-lg mb-5"}),Object(n["g"])("div",{class:"border border-warning rounded-1 px-3 pt-3 pb-7"},[Object(n["g"])("h4",{class:"mb-2"},[Object(n["g"])("span",{class:"fs-xxxl fw-bold align-middle"},"Q"),Object(n["g"])("span",{class:"fs-lg align-middle ms-3"},"關於墾丁回憶...")]),Object(n["g"])("div",{class:"d-flex align-items-center"},[Object(n["g"])("p",null,"人與景點猶如夏天般的炙熱，是我所熟悉墾丁。"),Object(n["g"])("i",{class:"bi bi-arrow-right-short arrow-icon"})])])],-1),I=Object(n["g"])("a",{href:"#",title:"對於台北巷弄早午餐？",class:"text-dark"},[Object(n["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/contribute2.jpeg?raw=true",alt:"對於台北巷弄早午餐？",class:"card-img-lg mb-5"}),Object(n["g"])("div",{class:"border border-warning rounded-1 px-3 pt-3 pb-7"},[Object(n["g"])("h4",{class:"mb-2"},[Object(n["g"])("span",{class:"fs-xxxl fw-bold align-middle"},"Q"),Object(n["g"])("span",{class:"fs-lg align-middle ms-3"},"對於台北巷弄早午餐？")]),Object(n["g"])("div",{class:"d-flex align-items-center"},[Object(n["g"])("p",null,"台北的巷弄藏著不同風格早午餐，是我每次來到台北的動力..."),Object(n["g"])("i",{class:"bi bi-arrow-right-short arrow-icon"})])])],-1),C=Object(n["g"])("a",{href:"#",title:"廟的文化",class:"text-dark"},[Object(n["g"])("img",{src:"https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/contribute3.jpeg?raw=true",alt:"廟的文化",class:"card-img-lg mb-5"}),Object(n["g"])("div",{class:"border border-warning rounded-1 px-3 pt-3 pb-7"},[Object(n["g"])("h4",{class:"mb-2"},[Object(n["g"])("span",{class:"fs-xxxl fw-bold align-middle"},"Q"),Object(n["g"])("span",{class:"fs-lg align-middle ms-3"},"廟的文化")]),Object(n["g"])("div",{class:"d-flex align-items-center"},[Object(n["g"])("p",null,"每當去不同的地方，就一定要到附近的廟宇感受不同的背景時空及信仰。"),Object(n["g"])("i",{class:"bi bi-arrow-right-short arrow-icon"})])])],-1),V=Object(n["g"])("div",{class:"text-center"},[Object(n["g"])("div",{class:"btn read-more-btn"},[Object(n["g"])("p",{class:"fs-md-lg fs-xxs"},"了解更多詳情"),Object(n["g"])("i",{class:"bi bi-arrow-right-short arrow-icon btn-arrow"})])],-1),z={class:"section pt-0 text-center"},M=Object(n["g"])("h2",{class:"section-title"},"〔 活動告示 〕",-1),_={key:0,class:"list-item"},W={class:"d-flex justify-content-md-between align-items-center w-md-50 mb-2 mb-md-0"},F={class:"fs-lg-xxl fs-md-lg fs-xxs fw-bold text-center"},H=Object(n["g"])("div",{class:"bg-success list-item-title ms-3 ms-lg-0"},"景點維修",-1),R={class:"w-md-50 ms-md-3 fs-md-md fs-xs"},J={key:1,class:"list-item"},K={class:"d-flex justify-content-md-between align-items-center w-md-50 mb-2 mb-md-0"},Q={class:"fs-lg-xxl fs-md-lg fs-xxs fw-bold text-center"},$=Object(n["g"])("div",{class:"bg-primary text-dark list-item-title ms-3 ms-lg-0"},"暫停辦理",-1),U={class:"w-md-50 ms-md-3 fs-md-md fs-xs"},X=Object(n["g"])("div",{class:"btn read-more-btn"},[Object(n["g"])("p",{class:"fs-md-lg fs-xxs"},"了解更多詳情"),Object(n["g"])("i",{class:"bi bi-arrow-right-short arrow-icon btn-arrow"})],-1),G=Object(n["h"])('<div class="section"><div class="contribute-note"><h4 class="contribute-note-title">募集</h4><p class="contribute-note-subtitle">歡迎投稿 讓台灣更美好</p><p class="contribute-note-text"> 號召熱愛台灣的旅遊人，需要你們熱情投稿來創造台灣旅遊勝地。<br> 台灣有許多未被發現美好景點，不管是鄉村、網美以及廟宇的景點等等，都需要你們一起分享！ </p><div class="text-center"><div class="btn btn-success fw-bold w-50 position-relative"><p class="fs-md-lg fs-xxs">了解更多詳情</p><i class="bi bi-arrow-right-short arrow-icon btn-arrow"></i></div></div></div></div>',1);function L(t,e,i,L,Y,Z){var q=Object(n["B"])("SwiperSlide"),tt=Object(n["B"])("Swiper"),et=Object(n["B"])("router-link");return Object(n["w"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",r,[Object(n["i"])(tt,{loop:!0,centeredSlides:!0,freeMode:!0,"slides-per-view":4.5,"space-between":30,breakpoints:Y.swiperOption.warningBreakpoints,class:"swiper-wrapper"},{default:Object(n["I"])((function(){return[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(Z.cxlWarning,(function(t){return Object(n["w"])(),Object(n["d"])(q,{class:"swiper-slide tab",key:t.ID},{default:Object(n["I"])((function(){return[s,Object(n["g"])("span",c,Object(n["D"])(t.WarningContent),1)]})),_:2},1024)})),128))]})),_:1},8,["slides-per-view","breakpoints"])]),Object(n["g"])("div",a,[Object(n["i"])(tt,{slidesPerView:2.05,spaceBetween:15,loop:!0,centeredSlides:!0,freeMode:!0,pagination:!0,breakpoints:Y.swiperOption.bannerBreakpoints,class:"swiper-wrapper pb-4"},{default:Object(n["I"])((function(){return[Object(n["i"])(q,{class:"swiper-slide mb-4"},{default:Object(n["I"])((function(){return[o]})),_:1}),Object(n["i"])(q,{class:"swiper-slide mb-4"},{default:Object(n["I"])((function(){return[l]})),_:1}),Object(n["i"])(q,{class:"swiper-slide mb-4"},{default:Object(n["I"])((function(){return[u]})),_:1})]})),_:1},8,["slidesPerView","breakpoints"])]),Object(n["g"])("div",f,[Object(n["g"])("div",d,[b,p,Object(n["g"])("ul",v,[Object(n["g"])("li",g,[Object(n["i"])(et,{to:"/article",class:"card bg-primary"},{default:Object(n["I"])((function(){return[m,h]})),_:1})]),w])]),Object(n["g"])("div",O,[j,Object(n["g"])("div",x,[Object(n["i"])(tt,{slidesPerView:3.5,spaceBetween:20,freeMode:!0,breakpoints:Y.swiperOption.spotBreakpoints,class:"swiper-wrapper"},{default:Object(n["I"])((function(){return[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(Y.popularScenicSpots,(function(t,e){return Object(n["w"])(),Object(n["f"])(n["a"],{key:t.Name},[e<12?(Object(n["w"])(),Object(n["d"])(q,{key:0,class:"swiper-slide"},{default:Object(n["I"])((function(){return[Object(n["g"])("a",{href:"#",title:t.Name,class:"text-dark"},[Object(n["g"])("div",S,[Object(n["g"])("img",{src:t.Picture.PictureUrl1,alt:t.Picture.PictureDescription1,class:"card-img"},null,8,k),Object(n["g"])("h4",A,Object(n["D"])(t.City),1)]),Object(n["g"])("p",P,Object(n["D"])(t.Name),1)],8,y)]})),_:2},1024)):Object(n["e"])("",!0)],64)})),128))]})),_:1},8,["slidesPerView","breakpoints"])]),N]),Object(n["g"])("div",T,[B,Object(n["g"])("div",D,[Object(n["i"])(tt,{slidesPerView:2.5,spaceBetween:22,freeMode:!0,breakpoints:Y.swiperOption.contributeBreakpoints,class:"swiper-wrapper"},{default:Object(n["I"])((function(){return[Object(n["i"])(q,{class:"swiper-slide"},{default:Object(n["I"])((function(){return[E]})),_:1}),Object(n["i"])(q,{class:"swiper-slide"},{default:Object(n["I"])((function(){return[I]})),_:1}),Object(n["i"])(q,{class:"swiper-slide"},{default:Object(n["I"])((function(){return[C]})),_:1})]})),_:1},8,["slidesPerView","breakpoints"])]),V]),Object(n["g"])("div",z,[M,Object(n["g"])("ul",null,[(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(Z.cxlWarning,(function(t,e){return Object(n["w"])(),Object(n["f"])(n["a"],{key:t.ID},[e<3?(Object(n["w"])(),Object(n["f"])(n["a"],{key:0},[t.OpenTime?(Object(n["w"])(),Object(n["f"])("li",_,[Object(n["g"])("div",W,[Object(n["g"])("p",F,Object(n["D"])(t.UpdateTime.split("T")[0].split("-").join(".")),1),H]),Object(n["g"])("p",R," 〔 "+Object(n["D"])(t.Name)+" 〕"+Object(n["D"])(t.OpenTime),1)])):Object(n["e"])("",!0),t.Cycle?(Object(n["w"])(),Object(n["f"])("li",J,[Object(n["g"])("div",K,[Object(n["g"])("p",Q,Object(n["D"])(t.StartTime.split("T")[0].split("-").join(".")),1),$]),Object(n["g"])("p",U," 〔 "+Object(n["D"])(t.Name)+" 〕"+Object(n["D"])(t.Cycle),1)])):Object(n["e"])("",!0)],64)):Object(n["e"])("",!0)],64)})),128))]),X]),G])],64)}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function Z(t){if(Array.isArray(t))return Y(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function q(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}i("fb6a"),i("b0c0"),i("00b4");function tt(t,e){if(t){if("string"===typeof t)return Y(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Y(t,e):void 0}}function et(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function it(t){return Z(t)||q(t)||tt(t)||et()}i("4de4"),i("caad"),i("2532"),i("159b"),i("b64b"),i("4e82"),i("d81d"),i("6062"),i("99af");var nt=i("6c2d"),rt={name:"Home",data:function(){return{scenicSpots:[],activities:[],popularScenicSpots:[],cxlScenicSpots:[],cxlActivities:[],swiperOption:{warningBreakpoints:{1:{slidesPerView:1.5,spaceBetween:12},576:{slidesPerView:2.1,spaceBetween:15},768:{slidesPerView:3.5,spaceBetween:15},992:{slidesPerView:3.5,spaceBetween:20},1200:{slidesPerView:4.5,spaceBetween:30}},bannerBreakpoints:{1:{slidesPerView:1.2,spaceBetween:8},576:{slidesPerView:1.5,spaceBetween:8},1200:{slidesPerView:2.05,spaceBetween:15}},spotBreakpoints:{1:{slidesPerView:1.5,spaceBetween:8},576:{slidesPerView:2.5,spaceBetween:8},1200:{slidesPerView:3.5,spaceBetween:20}},contributeBreakpoints:{1:{slidesPerView:1.25,spaceBetween:8},576:{slidesPerView:1.5,spaceBetween:8},1200:{slidesPerView:2.5,spaceBetween:22}}}}},methods:{getAllScenicSpotData:function(){var t=this;this.axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON",{headers:this.getAuthorizationHeader()}).then((function(e){t.scenicSpots=e.data,t.cxlScenicSpots=t.scenicSpots.filter((function(t){return t.OpenTime&&(t.OpenTime.includes("施工")||t.OpenTime.includes("暫停")||t.OpenTime.includes("整修")||t.OpenTime.includes("封閉"))&&!t.OpenTime.includes("遇颱風天")&&!t.OpenTime.includes("遇天候不佳")&&!t.OpenTime.includes("上午")&&!t.OpenTime.includes("下午")})),t.cxlScenicSpots.forEach((function(e,i){var n=t.cxlScenicSpots[i];n.Name=e.Name.split("(部分封閉中)").join(""),n.Name=e.Name.split("(封閉整修中)").join(""),n.WarningContent="".concat(e.Name," 整修中")})),t.popularScenicSpots=t.scenicSpots.filter((function(t){return t.Description&&0!==Object.keys(t.Picture).length&&t.Description.includes("熱門")})),t.popularScenicSpots.forEach((function(e,i){!1===Object.keys(e).includes("City")&&(t.popularScenicSpots[i].City=e.Address.includes("縣")?"".concat(e.Address.split("縣")[0],"縣"):"".concat(e.Address.split("市")[0],"市"))}))})).catch((function(t){console.log(t)}))},getAllActivitiesData:function(){var t=this;this.axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON",{headers:this.getAuthorizationHeader()}).then((function(e){var i=e.data,n=i.map((function(t){return t.StartTime})).sort().reverse();n.forEach((function(e,n){for(var r=0;r<i.length;r+=1)if(i[r].StartTime===e){t.activities[n]=i[r];break}})),t.activities=it(new Set(t.activities)),t.cxlActivities=t.activities.filter((function(t){return t.Cycle&&t.Cycle.includes("暫停")||t.Description&&(t.Description.includes("延期")||t.Description.includes("暫停")||t.Description.includes("取消"))})),t.cxlActivities.forEach((function(e,i){var n=t.cxlActivities[i];e.Description.includes("延期")?n.cxlReason="延期":e.Description.includes("暫停")?n.cxlReason="暫停":n.cxlReason="取消",n.Name=e.Name.split("2021").join(""),n.Name=e.Name.split("年").join(""),n.Name=e.Name.split("【取消辦理】").join(""),n.Name=e.Name.split("[取消辦理]").join(""),n.Name=e.Name.split("取消辦理").join(""),n.Name=e.Name.split("[延期舉辦]").join(""),n.Name=e.Name.split("(因應近日疫情嚴峻，活動已取消)").join(""),n.WarningContent="".concat(e.Name," ").concat(e.cxlReason),!1===Object.keys(e).includes("Cycle")&&(n.Cycle=n.WarningContent)}))})).catch((function(t){console.log(t)}))},getAuthorizationHeader:function(){var t=(new Date).toGMTString(),e=new nt["a"]("SHA-1","TEXT");e.setHMACKey("8ZL9ShsbFrpjYgPPoQEKPVfNygg","TEXT"),e.update("x-date: ".concat(t));var i=e.getHMAC("B64"),n='hmac username="'.concat("88a970578d174830a9ea23eec12b15bf",'",algorithm="hmac-sha1", headers="x-date", signature="').concat(i,'"');return{Authorization:n,"X-Date":t}}},computed:{cxlWarning:function(){var t=[];if(0!==this.cxlActivities.length&&0!==this.cxlScenicSpots.length)for(var e=this.cxlActivities[0],i=this.cxlScenicSpots[0],n=0;n<6;n+=1)e.StartTime>i.UpdateTime?(t.push(e),e=this.cxlActivities[n+1]):(t.push(i),i=this.cxlScenicSpots[n+1]);return t}},created:function(){this.getAllScenicSpotData(),this.getAllActivitiesData()}},st=i("6b0d"),ct=i.n(st);const at=ct()(rt,[["render",L]]);e["default"]=at},d28b:function(t,e,i){var n=i("746f");n("iterator")},d81d:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").map,s=i("1dde"),c=s("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d86b:function(t,e,i){var n=i("d039");t.exports=n((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},d998:function(t,e,i){var n=i("342f");t.exports=/MSIE|Trident/.test(n)},e01a:function(t,e,i){"use strict";var n=i("23e7"),r=i("83ab"),s=i("da84"),c=i("e330"),a=i("1a2d"),o=i("1626"),l=i("3a9b"),u=i("577e"),f=i("9bf2").f,d=i("e893"),b=s.Symbol,p=b&&b.prototype;if(r&&o(b)&&(!("description"in p)||void 0!==b().description)){var v={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=l(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(v[e]=!0),e};d(g,b),g.prototype=p,p.constructor=g;var m="Symbol(test)"==String(b("test")),h=c(p.toString),w=c(p.valueOf),O=/^Symbol\((.*)\)[^)]+$/,j=c("".replace),x=c("".slice);f(p,"description",{configurable:!0,get:function(){var t=w(this),e=h(t);if(a(v,t))return"";var i=m?x(e,7,-1):j(e,O,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:g})}},e538:function(t,e,i){var n=i("b622");e.f=n},f183:function(t,e,i){var n=i("23e7"),r=i("e330"),s=i("d012"),c=i("861d"),a=i("1a2d"),o=i("9bf2").f,l=i("241c"),u=i("057f"),f=i("4fad"),d=i("90e3"),b=i("bb2f"),p=!1,v=d("meta"),g=0,m=function(t){o(t,v,{value:{objectID:"O"+g++,weakData:{}}})},h=function(t,e){if(!c(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,v)){if(!f(t))return"F";if(!e)return"E";m(t)}return t[v].objectID},w=function(t,e){if(!a(t,v)){if(!f(t))return!0;if(!e)return!1;m(t)}return t[v].weakData},O=function(t){return b&&p&&f(t)&&!a(t,v)&&m(t),t},j=function(){x.enable=function(){},p=!0;var t=l.f,e=r([].splice),i={};i[v]=1,t(i).length&&(l.f=function(i){for(var n=t(i),r=0,s=n.length;r<s;r++)if(n[r]===v){e(n,r,1);break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},x=t.exports={enable:j,fastKey:h,getWeakData:w,onFreeze:O};s[v]=!0},fb6a:function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),s=i("e8b5"),c=i("68ee"),a=i("861d"),o=i("23cb"),l=i("07fa"),u=i("fc6a"),f=i("8418"),d=i("b622"),b=i("1dde"),p=i("f36a"),v=b("slice"),g=d("species"),m=r.Array,h=Math.max;n({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var i,n,r,d=u(this),b=l(d),v=o(t,b),w=o(void 0===e?b:e,b);if(s(d)&&(i=d.constructor,c(i)&&(i===m||s(i.prototype))?i=void 0:a(i)&&(i=i[g],null===i&&(i=void 0)),i===m||void 0===i))return p(d,v,w);for(n=new(void 0===i?m:i)(h(w-v,0)),r=0;v<w;v++,r++)v in d&&f(n,r,d[v]);return n.length=r,n}})}}]);
//# sourceMappingURL=chunk-80515160.6a7402da.js.map