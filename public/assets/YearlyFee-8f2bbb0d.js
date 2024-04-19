import{y as k,r as u,D as h,m as S,j as A,o as d,b as i,e,u as _,d as v,q as N,p as C,v as V,g,t as y,F as w,l as F,h as j,f as D}from"./index-3ce42378.js";import{_ as T}from"./PulseAnimatedBox-68fc1868.js";const L=k("annual-fee",()=>{const a=u(!1),m=u([]),n=u({});async function p(){a.value=!0;try{const o=await h.get("/api/annual-fees"),{data:t={}}=o;m.value=(t==null?void 0:t.fees)||[]}catch(o){console.log(o)}a.value=!1}async function r(o={}){a.value=!0;try{const t=await h.post("/api/annual-fees",o),{data:s={}}=t;n.value=(s==null?void 0:s.fee)||[]}catch(t){console.log(t)}a.value=!1}async function f(o){a.value=!0;try{const t=await h.get("/api/annual-fees/"+o),{data:s={}}=t;n.value=(s==null?void 0:s.fee)||[]}catch(t){console.log(t)}a.value=!1}async function c(o={}){a.value=!0;try{const t=await h.put("/api/annual-fees/"+o.id,o),{data:s={}}=t;n.value=(s==null?void 0:s.fee)||[]}catch(t){console.log(t)}a.value=!1}return{loader:a,fees:m,fee:n,index:p,create:r,show:f,update:c}}),B={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},M={class:"md:w-[720px] flex flex-col gap-8 items-center"},q={class:"md:w-[720px] flex flex-col md:gap-1 gap-4 items-center"},O={class:"w-full flex flex-col md:flex-row md:justify-between items-center"},P=e("h2",{class:"text-center text-2xl font-bold"},"One Time Fee List",-1),U={key:0},$={class:"flex justify-center"},z=["onSubmit"],E=e("h3",{class:"text-xl font-semibold text-center"},"Add Fee",-1),Y={class:"flex flex-col gap-2"},G=e("hr",{class:"border-t border-gray-300"},null,-1),H={class:""},J=e("strong",null,"Added by: ",-1),K=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),Q=j('<div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>SL</strong></p><p class="col-span-3 px-2"><strong>Fee Name</strong></p><p class="col-span-3 px-2"><strong>Added by</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',1),R={class:"col-span-1 px-2"},W=e("strong",{class:"md:hidden"},"SL:",-1),X={class:"col-span-3 px-2"},Z=e("strong",{class:"md:hidden"},"Fee Name:",-1),I=e("p",{class:"col-span-3 px-2"},[e("strong",{class:"md:hidden"},"Added by:"),g(" { sgds }")],-1),ee={class:"flex items-center gap-3 col-span-1 px-4 rounded"},te=["onClick"],se=e("i",{class:"fad fa-edit text-cyan-600"},null,-1),oe=[se],ne=e("div",{class:"md:w-full w-80 flex flex-col justify-center items-center mt-8 bg-white p-2 rounded gap-2 shadow"},[e("i",{class:"far fa-exclamation-triangle text-3xl"}),e("h1",{class:"text-xl"},"Caution"),e("div",{class:"text-red-500"},"**The most sensetive area of this software. Use carefully.")],-1),re={__name:"YearlyFee",setup(a){const m=S(),n=L(),p=u(!1),r=(s=null)=>{if(o(),s){const x=n.fees.find(l=>l.id===s);x&&(c.value={...x},f.value="update")}p.value=!p.value};A(()=>{n.index(),o()});const f=u("create"),c=u({});function o(){f.value="create",c.value={name:"",description:"",is_active:!0}}async function t(){n[f.value](c.value).then(()=>{n.index(),r()})}return(s,x)=>(d(),i("div",B,[e("div",M,[e("div",q,[e("div",O,[P,_(n).loader?v("",!0):(d(),i("div",U,[e("button",{onClick:r,class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Add new ")]))]),e("div",$,[p.value?(d(),i("form",{key:0,onSubmit:N(t,["prevent"]),class:"absolute flex flex-col it gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl z-50"},[E,e("div",Y,[C(e("input",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Fee Name Only","onUpdate:modelValue":x[0]||(x[0]=l=>c.value.name=l)},null,512),[[V,c.value.name]])]),G,e("div",H,[e("div",null,[e("p",null,[J,g(y(_(m).user.name),1)])])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{type:"button",class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:r}," Cancel "),K])],40,z)):v("",!0)]),Q,_(n).loader?(d(),i(w,{key:0},F(2,l=>D(T,{key:l,class:"w-full mt-1 h-8 min-w-80"})),64)):v("",!0),(d(!0),i(w,null,F(_(n).fees,(l,b)=>(d(),i("div",{key:b,class:"flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2 md:items-center"},[e("p",R,[W,g(" "+y(b+1),1)]),e("p",X,[Z,g(" "+y(l.name),1)]),I,e("div",ee,[e("button",{type:"button",onClick:ae=>r(l.id)},oe,8,te),v("",!0)])]))),128))]),ne])]))}};export{re as default};
