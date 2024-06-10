import{m as k,r as m,j as S,o as n,b as r,e,f as c,d as l,q as A,p as h,v as g,h as i,t as u,F as b,l as v,x as N,g as V}from"./index-75253d2e.js";import{u as C}from"./package-d2c4e888.js";import{_ as D}from"./PulseAnimatedBox-5a39f7b0.js";import"./bundle-mjs-3a7afad5.js";const P={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},T={class:"md:w-[720px] flex flex-col md:gap-1 gap-2 items-center"},j={class:"w-full flex flex-col md:flex-row md:justify-between items-center"},F=e("h2",{class:"text-center text-2xl font-bold"},"Package List",-1),L={key:0},q={class:"flex justify-center"},B=["onSubmit"],M=e("h3",{class:"text-xl font-semibold text-center"},"Add Package",-1),U={class:"flex flex-col gap-2"},$=e("hr",{class:"border-t border-gray-300"},null,-1),z={class:""},E=e("strong",null,"Added by: ",-1),G=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),H=N('<div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>SL</strong></p><p class="col-span-3 px-2"><strong>Package Name</strong></p><p class="col-span-3 px-2"><strong>Description</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',1),J={class:"col-span-1 px-2"},K=e("strong",{class:"md:hidden"},"SL:",-1),O={class:"col-span-3 px-2"},Q=e("strong",{class:"md:hidden"},"Package Name:",-1),R={class:"col-span-3 px-2"},W=e("strong",{class:"md:hidden"},"Description:",-1),X={class:"flex items-center gap-3 col-span-1 px-4 rounded"},Y=["onClick"],Z=e("i",{class:"fad fa-edit text-cyan-600"},null,-1),I=[Z],ee=e("div",{class:"w-80 md:w-full flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"},[e("i",{class:"far fa-exclamation-triangle text-3xl"}),e("h1",{class:"text-xl"},"Caution"),e("div",{class:"text-red-500"},"**The most sensitive area of this software. Use carefully.")],-1),de={__name:"AddPackage",setup(te){const s=C(),y=k(),p=m(!1),d=(f=null)=>{if(_(),f){const a=s.packages.find(t=>t.id===f);a&&(o.value={...a},x.value="update")}p.value=!p.value};S(()=>{s.index(),_()});const x=m("create"),o=m({});function _(){x.value="create",o.value={name:"",description:"",is_active:!0}}async function w(){s[x.value](o.value).then(()=>{s.index(),d()})}return(f,a)=>(n(),r("div",P,[e("div",T,[e("div",j,[F,c(s).loader?l("",!0):(n(),r("div",L,[e("button",{onClick:d,class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Add new ")]))]),e("div",q,[p.value?(n(),r("form",{key:0,onSubmit:A(w,["prevent"]),class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl z-50"},[M,e("div",U,[h(e("input",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Package Name","onUpdate:modelValue":a[0]||(a[0]=t=>o.value.name=t)},null,512),[[g,o.value.name]]),h(e("textarea",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Description","onUpdate:modelValue":a[1]||(a[1]=t=>o.value.description=t)},null,512),[[g,o.value.description]])]),$,e("div",z,[e("div",null,[e("p",null,[E,i(u(c(y).user.name),1)])])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{type:"button",class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:d}," Cancel "),G])],40,B)):l("",!0)]),H,c(s).loader?(n(),r(b,{key:0},v(2,t=>V(D,{key:t,class:"w-full mt-1 h-8 min-w-80"})),64)):l("",!0),(n(!0),r(b,null,v(c(s).packages,t=>(n(),r("div",{key:t.id,class:"flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2 md:items-center"},[e("p",J,[K,i(" "+u(t.id),1)]),e("p",O,[Q,i(" "+u(t.name),1)]),e("p",R,[W,i(" "+u(t.description),1)]),e("div",X,[e("button",{type:"button",onClick:se=>d(t.id)},I,8,Y),l("",!0)])]))),128)),ee])]))}};export{de as default};
