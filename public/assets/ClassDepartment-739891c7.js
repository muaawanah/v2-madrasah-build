import{u as k,r as f,j as C,o as r,b as n,e,q as D,t as p,m as _,v as h,g as v,p as i,d as S,F as b,f as m,l as V,w as j,R as T}from"./index-f801e1a5.js";import{u as A,_ as y}from"./department-5aa5bb5b.js";const F={class:"contaner mx-auto flex flex-col items-center gap-4 mt-4"},N=e("h2",{class:"text-center text-2xl font-bold"},"Departments",-1),q=e("i",{class:"fal fa-plus-square"},null,-1),B=[q],M={class:"flex justify-center z-40"},$=["onSubmit"],E={class:"text-xl font-semibold text-center"},L={class:"flex flex-col gap-2"},P=e("hr",{class:"border-t border-gray-300"},null,-1),R={class:""},U=e("strong",null,"Added by: ",-1),z=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),G={class:"w-full flex flex-wrap gap-4 justify-center"},H={class:"flex flex-wrap justify-center items-center gap-2"},J={class:"md:text-xl font-bold"},K=["onClick"],O=e("i",{class:"fal fa-edit"},null,-1),Q=[O],W=e("div",{class:"flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"},[e("i",{class:"far fa-exclamation-triangle text-3xl"}),e("h1",{class:"text-xl"},"Caution"),e("div",{class:"text-red-500"},"**The most sensetive area of this software.")],-1),ee={__name:"ClassDepartment",setup(X){const s=A(),g=k(),d=f(!1),l=(u=null)=>{if(x(),u){const a=s.departments.find(t=>t.id===u);a&&(o.value={...a},c.value="update")}d.value=!d.value};C(()=>{s.loader=!0,setTimeout(()=>{s.index()},1e3),x()});const c=f("create"),o=f({});function x(){c.value="create",o.value={name:"",description:"",is_active:!0}}async function w(){s[c.value](o.value).then(()=>{s.index(),l()})}return(u,a)=>(r(),n("div",F,[e("div",{class:"flex items-center justify-between gap-4"},[N,e("div",null,[e("button",{onClick:l,class:"hover:text-cyan-600"},B)])]),e("div",M,[d.value?(r(),n("form",{key:0,onSubmit:D(w,["prevent"]),class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},[e("h3",E,p(c.value==="create"?"Add":"Edit")+" Department ",1),e("div",L,[_(e("input",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Name","onUpdate:modelValue":a[0]||(a[0]=t=>o.value.name=t)},null,512),[[h,o.value.name]]),_(e("textarea",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",placeholder:"Description","onUpdate:modelValue":a[1]||(a[1]=t=>o.value.description=t),rows:"10"},null,512),[[h,o.value.description]])]),P,e("div",R,[e("div",null,[e("p",null,[U,v(" "+p(i(g).user.name),1)])])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:l,type:"button"}," Cancel "),z])],40,$)):S("",!0)]),e("div",G,[i(s).loader?(r(),n(b,{key:0},[m(y,{class:"main-card"}),m(y,{class:"main-card"})],64)):(r(!0),n(b,{key:1},V(i(s).departments,t=>(r(),n("div",{key:t.id,class:"main-card"},[e("div",H,[e("h2",J,p(t.name),1),e("button",{onClick:Y=>l(t.id),class:"hover:text-cyan-600"},Q,8,K)]),m(i(T),{to:`/settings/department/${t.id}/add-class`,class:"btn-1"},{default:j(()=>[v("Add Class")]),_:2},1032,["to"])]))),128))]),W]))}};export{ee as default};
