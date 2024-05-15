import{s as h,r as _,i as v,o,b as n,e as t,F as u,l as x,f as g,x as b,h as l,t as a,n as f}from"./index-677d092e.js";import{u as w}from"./notice-list-1624178d.js";const y={class:"container mx-auto max-w-6xl py-4"},N={class:"flex flex-col items-center gap-4"},k=b('<div class="flex justify-between w-full"><h2 class="text-2xl font-bold">Notice List</h2><button class="btn-2">Add New</button></div><div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 p-1"><p class="col-span-1 px-2"><strong>Notice</strong></p><p class="col-span-2 px-2"><strong>Date</strong></p><p class="col-span-3 px-2"><strong>Name</strong></p><p class="col-span-1 px-2"><strong>Amount</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',2),C={class:"flex w-full flex-col gap-1"},L={class:"col-span-1 px-2"},P=t("strong",{class:"md:hidden"},"Notice:",-1),A={class:"col-span-2 px-2"},S=t("strong",{class:"md:hidden"},"Date:",-1),V={class:"col-span-3 text-left px-2"},B=t("strong",{class:"md:hidden"},"Name:",-1),D={class:"col-span-1 px-2"},T=t("strong",{class:"md:hidden"},"Amount:",-1),$=t("button",{class:"text-cyan-600 col-span-1 px-4 rounded hover:font-semibold"},"View",-1),j={class:"flex justify-center items-center mt-4"},F=["disabled"],z=["onClick"],E=["disabled"],M=15,I={__name:"NoticeList",setup(R){const m=w(),{noticeList:p}=h(m),e=_(1),r=v(()=>Math.ceil(p.value.length/M)),i=c=>{c>=1&&c<=r.value&&(e.value=c)};return(c,d)=>(o(),n("div",y,[t("div",N,[k,t("div",C,[(o(!0),n(u,null,x(g(p),s=>(o(),n("div",{key:s.id,class:"flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 p-2 w-80 md:w-full"},[t("p",L,[P,l(" "+a(s.noticeNo),1)]),t("p",A,[S,l(" "+a(s.date),1)]),t("p",V,[B,l(" "+a(s.name),1)]),t("p",D,[T,l(" "+a(s.amount),1)]),$]))),128))]),t("div",j,[t("button",{onClick:d[0]||(d[0]=s=>i(e.value-1)),disabled:e.value===1,class:"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"}," Previous ",8,F),(o(!0),n(u,null,x(r.value,s=>(o(),n("button",{key:s,onClick:q=>i(s),class:f([{"bg-cyan-600 text-white":e.value===s},"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"])},a(s),11,z))),128)),t("button",{onClick:d[1]||(d[1]=s=>i(e.value+1)),disabled:e.value===r.value,class:"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"}," Next ",8,E)])])]))}};export{I as default};
