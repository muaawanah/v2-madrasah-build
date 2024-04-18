import{m as C,r as f,j as D,o,b as a,e,u as l,d as h,q as S,t as p,p as v,v as b,g as y,F as m,f as _,l as j,w as V,R as N}from"./index-e45e1d2a.js";import{_ as g}from"./PulseAnimatedCard-6364ce9d.js";import{u as A}from"./department-55b26e50.js";import"./PulseAnimatedBox-6091b3d2.js";const F={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},T={class:"flex items-center justify-between gap-4"},q=e("h2",{class:"text-center text-2xl font-bold"},"Departments",-1),B={key:0},M=e("i",{class:"fal fa-plus-square"},null,-1),$=[M],E={class:"flex justify-center z-40"},L=["onSubmit"],P={class:"text-xl font-semibold text-center"},R={class:"flex flex-col gap-2"},U=e("hr",{class:"border-t border-gray-300"},null,-1),z={class:""},G=e("strong",null,"Added by: ",-1),H=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),J={class:"w-full flex flex-wrap gap-4 justify-center"},K={key:0,class:"flex justify-center items-center text-red-500 py-6"},O={class:"flex flex-wrap justify-center items-center gap-2"},Q={class:"md:text-xl font-bold"},W=["onClick"],X=e("i",{class:"fal fa-edit"},null,-1),Y=[X],Z=e("div",{class:"flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"},[e("i",{class:"far fa-exclamation-triangle text-3xl"}),e("h1",{class:"text-xl"},"Caution"),e("div",{class:"text-red-500"},"**The most sensetive area of this software.")],-1),re={__name:"ClassDepartment",setup(I){const s=A(),w=C(),d=f(!1),c=(u=null)=>{if(x(),u){const n=s.departments.find(t=>t.id===u);n&&(r.value={...n},i.value="update")}d.value=!d.value};D(()=>{s.index(),x()});const i=f("create"),r=f({});function x(){i.value="create",r.value={name:"",description:"",is_active:!0}}async function k(){s[i.value](r.value).then(()=>{s.index(),c()})}return(u,n)=>(o(),a("div",F,[e("div",T,[q,l(s).loader?h("",!0):(o(),a("div",B,[e("button",{onClick:c,class:"hover:text-cyan-600"},$)]))]),e("div",E,[d.value?(o(),a("form",{key:0,onSubmit:S(k,["prevent"]),class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},[e("h3",P,p(i.value==="create"?"Add":"Edit")+" Department ",1),e("div",R,[v(e("input",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Name","onUpdate:modelValue":n[0]||(n[0]=t=>r.value.name=t)},null,512),[[b,r.value.name]]),v(e("textarea",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",placeholder:"Description","onUpdate:modelValue":n[1]||(n[1]=t=>r.value.description=t),rows:"10"},null,512),[[b,r.value.description]])]),U,e("div",z,[e("div",null,[e("p",null,[G,y(" "+p(l(w).user.name),1)])])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:c,type:"button"}," Cancel "),H])],40,L)):h("",!0)]),e("div",J,[l(s).loader?(o(),a(m,{key:0},[_(g,{class:"main-card"}),_(g,{class:"main-card"})],64)):(o(),a(m,{key:1},[l(s).departments.length?(o(!0),a(m,{key:1},j(l(s).departments,t=>(o(),a("div",{key:t.id,class:"main-card"},[e("div",O,[e("h2",Q,p(t.name),1),e("button",{onClick:ee=>c(t.id),class:"hover:text-cyan-600"},Y,8,W)]),_(l(N),{to:`/settings/departments/${t.id}/classes`,class:"btn-1"},{default:V(()=>[y("Add Class")]),_:2},1032,["to"])]))),128)):(o(),a("div",K,"No data found!"))],64))]),Z]))}};export{re as default};
