(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f819b76"],{"498a":function(t,s,e){"use strict";var n=e("23e7"),i=e("58a8").trim,c=e("c8d2");n({target:"String",proto:!0,forced:c("trim")},{trim:function(){return i(this)}})},5899:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,s,e){var n=e("e330"),i=e("1d80"),c=e("577e"),o=e("5899"),r=n("".replace),a="["+o+"]",l=RegExp("^"+a+a+"*"),p=RegExp(a+a+"*$"),b=function(t){return function(s){var e=c(i(s));return 1&t&&(e=r(e,l,"")),2&t&&(e=r(e,p,"")),e}};t.exports={start:b(1),end:b(2),trim:b(3)}},b814:function(t,s,e){"use strict";e.r(s);var n=e("7a23"),i={class:"container"},c={class:"section"},o=Object(n["h"])('<p class="mb-10 fs-md-sm fs-xxs"> 首頁 <i class="bi bi-chevron-right ms-4"></i><span class="ms-4 pb-1 border-bottom border-dark">人氣景點探索</span></p><h2 class="fs-md-xxxl fs-lg fw-bold text-center mb-4">景點列表</h2><p class="fs-md-lg fs-xxs text-center mb-md-10 mb-4">地點</p>',3),r={class:"d-flex"},a={class:"fs-md-lg fs-xs"},l=Object(n["g"])("i",{class:"bi bi-chevron-down ms-10"},null,-1),p={class:"navbar-option-list"},b={class:"d-md-flex justify-content-md-center overflow-md-visible white-space-md-normal white-space-nowrap overflow-scroll"},u={class:"d-flex"},d={class:"fs-lg-md fs-md-sm fs-xs"},f=Object(n["g"])("i",{class:"bi bi-chevron-down ms-lg-10 ms-2"},null,-1),h={class:"navbar-option-list"},m=Object(n["h"])('<li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-10 ms-2"> 熱門景點 </li><li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-5 ms-2"> 網美景點 </li><li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-5 ms-2"> 戶外景點 </li><li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-5 ms-2"> 運動景點 </li><li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-5 ms-2"> DIY 景點 </li>',5),g={class:"section pt-0"},O={class:"row"},j=["title"],S={class:"position-relative mb-4"},v=["src","alt"],x={class:"card-img-title"},C={class:"fs-md-md fs-xxs text-center"},w={key:0,class:"text-center fs-lg text-success"},L=Object(n["h"])('<div class="btn btn-success btn-pagination"><i class="bi bi-chevron-left"></i></div><p class="ms-10">1/4</p><div class="btn btn-success btn-pagination ms-10"><i class="bi bi-chevron-right"></i></div>',3),P=[L];function y(t,s,e,L,y,k){return Object(n["x"])(),Object(n["f"])("div",i,[Object(n["g"])("div",c,[o,Object(n["g"])("div",{onClick:s[2]||(s[2]=function(){return k.changeSearchSpotOption&&k.changeSearchSpotOption.apply(k,arguments)})},[Object(n["g"])("div",{class:Object(n["p"])(["btn btn-lg btn-outline-warning d-md-none mb-3 fs-xs position-relative",{active:y.optionListShow}]),onClick:s[0]||(s[0]=function(){return k.showOptions&&k.showOptions.apply(k,arguments)})},[Object(n["g"])("div",r,[Object(n["g"])("p",a,Object(n["E"])(y.optionListContent),1),l]),Object(n["K"])(Object(n["g"])("ul",p,[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(y.cities,(function(t){return Object(n["x"])(),Object(n["f"])("li",{key:t},Object(n["E"])(t),1)})),128))],512),[[n["H"],y.optionListShow]])],2),Object(n["g"])("ul",b,[Object(n["g"])("li",{class:Object(n["p"])(["btn btn-lg btn-outline-warning d-md-inline-block d-none position-relative",{active:y.optionListShow}]),onClick:s[1]||(s[1]=function(){return k.showOptions&&k.showOptions.apply(k,arguments)})},[Object(n["g"])("div",u,[Object(n["g"])("p",d,Object(n["E"])(y.optionListContent),1),f]),Object(n["K"])(Object(n["g"])("ul",h,[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(y.cities,(function(t){return Object(n["x"])(),Object(n["f"])("li",{key:t},Object(n["E"])(t),1)})),128))],512),[[n["H"],y.optionListShow]])],2),m])])]),Object(n["g"])("div",g,[Object(n["g"])("div",O,[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(k.filterSpot,(function(t,s){return Object(n["x"])(),Object(n["f"])(n["a"],{key:t.ID},[s<12?(Object(n["x"])(),Object(n["f"])("div",{key:0,class:Object(n["p"])(["col-md-4 col-6",{"mb-md-10":s<9,"mb-7":s<9}])},[Object(n["g"])("a",{href:"#",title:t.Name,class:"text-dark"},[Object(n["g"])("div",S,[Object(n["g"])("img",{src:t.Picture.PictureUrl1,alt:t.Picture.PictureDescription1,class:"card-img"},null,8,v),Object(n["g"])("h4",x,Object(n["E"])(t.City),1)]),Object(n["g"])("p",C,Object(n["E"])(t.Name),1)],8,j)],2)):Object(n["e"])("",!0)],64)})),128))]),0===k.filterSpot.length?(Object(n["x"])(),Object(n["f"])("p",w,"暫無資料")):Object(n["e"])("",!0)]),Object(n["g"])("div",{class:Object(n["p"])(["section d-flex justify-content-center align-items-center pt-0",{"d-none":0===k.filterSpot.length}])},P,2)])}e("4de4"),e("d3b7"),e("b64b"),e("159b"),e("caad"),e("2532"),e("ac1f"),e("1276"),e("99af"),e("498a");var k=e("6c2d"),E={data:function(){return{scenicSpots:[],cities:["基隆市","台北市","新北市","桃園縣","新竹市","新竹縣","苗栗縣","台中市","彰化縣","南投縣","雲林縣","嘉義市","嘉義縣","台南市","高雄市","屏東縣","台東縣","花蓮縣","宜蘭縣","澎湖縣","金門縣","連江縣"],optionListShow:!1,optionListContent:"地區",searchSpotOption:""}},props:["searchPropsContent","searchSpotPropsOption"],methods:{getAllScenicSpotData:function(){var t=this;this.axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON",{headers:this.getAuthorizationHeader()}).then((function(s){t.scenicSpots=s.data,t.scenicSpots=t.scenicSpots.filter((function(t){return 0!==Object.keys(t.Picture).length})),t.scenicSpots.forEach((function(s,e){!1===Object.keys(s).includes("City")&&(t.scenicSpots[e].City=s.Address.includes("縣")?"".concat(s.Address.split("縣")[0],"縣"):"".concat(s.Address.split("市")[0],"市")),t.scenicSpots[e].Classes=[],s.Class1&&t.scenicSpots[e].Classes.push(s.Class1),s.Class2&&t.scenicSpots[e].Classes.push(s.Class2),s.Class3&&t.scenicSpots[e].Classes.push(s.Class3)}))})).catch((function(t){console.log(t)}))},getAuthorizationHeader:function(){var t=(new Date).toGMTString(),s=new k["a"]("SHA-1","TEXT");s.setHMACKey("8ZL9ShsbFrpjYgPPoQEKPVfNygg","TEXT"),s.update("x-date: ".concat(t));var e=s.getHMAC("B64"),n='hmac username="'.concat("88a970578d174830a9ea23eec12b15bf",'",algorithm="hmac-sha1", headers="x-date", signature="').concat(e,'"');return{Authorization:n,"X-Date":t}},showOptions:function(){this.optionListShow=!this.optionListShow},changeSearchSpotOption:function(t){if(t.target.innerHTML.trim().length<=6&&t.target.innerHTML.length>3){for(var s=1;s<=5;s+=1)t.target.parentNode.children[s]!==t.target&&t.target.parentNode.children[s].classList.remove("active");t.target.classList.value.includes("active")?(t.target.classList.remove("active"),this.searchSpotOption=""):(t.target.classList.add("active"),this.searchSpotOption=t.target.innerHTML)}else 3===t.target.innerHTML.length&&(this.optionListContent=t.target.innerHTML)}},computed:{filterSpot:function(){var t,s=this;return t="地區"===this.optionListContent&&""===this.searchPropsContent?this.scenicSpots:""!==this.searchPropsContent?this.scenicSpots.filter((function(t){return t.Name.includes(s.searchPropsContent)})):this.scenicSpots.filter((function(t){return t.City.includes(s.optionListContent)})),"熱門景點"===this.searchSpotOption.trim()||"熱門景點"===this.searchSpotPropsOption?t=t.filter((function(t){return t.Description&&t.Description.includes("熱門")})):"網美景點"===this.searchSpotOption.trim()||"網美景點"===this.searchSpotPropsOption?t=t.filter((function(t){return t.Classes&&(t.Classes.includes("都會公園類")||t.Classes.includes("溫泉類")||t.Classes.includes("文化類"))})):"戶外景點"===this.searchSpotOption.trim()||"戶外景點"===this.searchSpotPropsOption?t=t.filter((function(t){return t.Classes&&(t.Classes.includes("自然風景類")||t.Classes.includes("生態類"))})):"運動景點"===this.searchSpotOption.trim()||"運動景點"===this.searchSpotPropsOption?t=t.filter((function(t){return t.Classes&&t.Classes.includes("體育健身類")})):"DIY 景點"!==this.searchSpotOption.trim()&&"DIY 景點"!==this.searchSpotPropsOption||(t=t.filter((function(t){return t.Classes&&t.Classes.includes("觀光工廠類")}))),t}},created:function(){this.getAllScenicSpotData()}},H=e("6b0d"),T=e.n(H);const A=T()(E,[["render",y]]);s["default"]=A},c8d2:function(t,s,e){var n=e("5e77").PROPER,i=e("d039"),c=e("5899"),o="​᠎";t.exports=function(t){return i((function(){return!!c[t]()||o[t]()!==o||n&&c[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-1f819b76.a2a55bc6.js.map