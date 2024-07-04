import{E as S,m as N,r as x,j as C,o as n,b as d,e,t as c,f as l,q as V,p as b,v as h,h as p,d as y,F as g,l as w,x as A,g as D}from"./index-ca119b07.js";import{_ as I}from"./PulseAnimatedBox-de17d9a5.js";import{u as B}from"./department-class-39dc2de1.js";import{u as F}from"./department-class-subject-f63ebeb2.js";import"./bundle-mjs-3a7afad5.js";const T={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},q={class:"w-full max-w-6xl flex flex-col md:gap-1 gap-2"},E={class:"flex flex-col md:flex-row md:justify-between items-center"},M={class:"text-center text-2xl font-bold"},U={class:"flex justify-center z-40"},L=["onSubmit"],P={class:"text-xl font-semibold text-center"},$={class:"flex flex-col gap-2"},z={class:"flex gap-2"},R=e("hr",{class:"border-t border-gray-300"},null,-1),G={class:""},H=e("strong",null,"Added by: ",-1),J=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),K=A('<div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>Subject Code</strong></p><p class="col-span-3 px-2"><strong>Subject Name</strong></p><p class="col-span-3 px-2"><strong>Book Name</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',1),O={key:0,class:"flex justify-center items-center text-red-500 py-6"},Q={class:"col-span-1 px-2"},W=e("strong",{class:"md:hidden"},"Code:",-1),X={class:"col-span-3 px-2"},Y=e("strong",{class:"md:hidden"},"Name:",-1),Z={class:"col-span-3 px-2"},ee=e("strong",{class:"md:hidden"},"Book:",-1),te={class:"w-full flex items-center justify-end md:justify-center gap-3 col-span-1 px-4 rounded"},se=["onClick"],oe=e("i",{class:"fad fa-edit text-cyan-600"},null,-1),ae=[oe],pe={__name:"AddSubject",setup(re){const a=S(),k=N(),m=B(),r=F(),f=x(!1),i=(_=null)=>{if(v(),_){const o=r.department_class_subjects.find(t=>t.id===_);o&&(s.value={...o},u.value="update")}f.value=!f.value};C(()=>{m.show(a.params.departmentId,a.params.classId),r.index(a.params.departmentId,a.params.classId),v()});const s=x({}),u=x("create");function v(){u.value="create",s.value={name:"",subject_code:"",book:"",is_active:!0}}async function j(){r[u.value](a.params.departmentId,a.params.classId,s.value).then(()=>{r.index(a.params.departmentId,a.params.classId),i()})}return(_,o)=>(n(),d("div",T,[e("div",q,[e("div",E,[e("h2",M," Subject List of "+c(l(m).department_class.name),1),e("div",null,[e("button",{onClick:i,class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Add new ")])]),e("div",U,[f.value?(n(),d("form",{key:0,onSubmit:V(j,["prevent"]),class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},[e("h3",P,c(u.value==="create"?"Add":"Edit")+" Subject of "+c(l(m).department_class.name),1),e("div",$,[e("div",z,[b(e("input",{class:"shrink-0 text-center grow-0 w-16 border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block px-2 py-1",type:"Text",required:"",placeholder:"Code","onUpdate:modelValue":o[0]||(o[0]=t=>s.value.subject_code=t)},null,512),[[h,s.value.subject_code]]),b(e("input",{class:"shrink grow border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Subject Name","onUpdate:modelValue":o[1]||(o[1]=t=>s.value.name=t)},null,512),[[h,s.value.name]])]),b(e("textarea",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",placeholder:"Book Name","onUpdate:modelValue":o[2]||(o[2]=t=>s.value.book=t),rows:"3"},null,512),[[h,s.value.book]])]),R,e("div",G,[e("div",null,[e("p",null,[H,p(" "+c(l(k).user.name),1)])])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{type:"button",class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:i}," Cancel "),J])],40,L)):y("",!0)]),K,l(r).loader?(n(),d(g,{key:0},w(3,t=>D(I,{key:t,class:"w-full mt-1 h-8 min-w-80"})),64)):(n(),d(g,{key:1},[l(r).department_class_subjects.length?(n(!0),d(g,{key:1},w(l(r).department_class_subjects,t=>(n(),d("div",{key:t.id,class:"flex flex-col items-start md:grid md:grid-cols-8 bg-white md:text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2"},[e("p",Q,[W,p(" "+c(t.subject_code),1)]),e("p",X,[Y,p(" "+c(t.name),1)]),e("p",Z,[ee,p(" "+c(t.book),1)]),e("div",te,[e("button",{type:"button",onClick:ne=>i(t.id)},ae,8,se),y("",!0)])]))),128)):(n(),d("div",O,"No data found!"))],64))])]))}};export{pe as default};
