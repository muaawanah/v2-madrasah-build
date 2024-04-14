import{y as N,r as x,D as v,E as $,m as V,j as A,o as i,b as p,e,t as m,u as b,q as D,p as w,v as j,g as y,d as S,F as k,l as C,h as B,f as I}from"./index-54d168bd.js";import{P as F}from"./PulseAnimatedBox-57721fa2.js";import{u as P}from"./department-class-ca62e8b1.js";const T=N("departmentClassSubject",()=>{const l=x(!1),c=x([]),f=x({});async function g(s,n){l.value=!0;try{const r=await v.get(`/api/departments/${s}/classes/${n}/subjects`),{data:t={}}=r;c.value=(t==null?void 0:t.department_class_subjects)||[]}catch(r){console.log(r)}l.value=!1}async function d(s,n,r={}){l.value=!0;try{const t=await v.post(`/api/departments/${s}/classes/${n}/subjects`,r),{data:o={}}=t;f.value=(o==null?void 0:o.department_class_subject)||{}}catch(t){console.log(t)}l.value=!1}async function h(s,n,r){l.value=!0;try{const t=await v.get(`/api/departments/${s}/classes/${n}/subjects/${r}`),{data:o={}}=t;f.value=(o==null?void 0:o.department_class_subject)||{}}catch(t){console.log(t)}l.value=!1}async function _(s,n,r={}){l.value=!0;try{const t=await v.put(`/api/departments/${s}/classes/${n}/subjects/`+r.id,r),{data:o={}}=t;f.value=(o==null?void 0:o.department_class_subject)||{}}catch(t){console.log(t)}l.value=!1}return{loader:l,department_class_subjects:c,department_class_subject:f,index:g,create:d,show:h,update:_}}),q={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},E={class:"w-full max-w-6xl flex flex-col md:gap-1 gap-2"},M={class:"flex flex-col md:flex-row md:justify-between items-center"},U={class:"text-center text-2xl font-bold"},L={class:"flex justify-center z-40"},z=["onSubmit"],R={class:"text-xl font-semibold text-center"},G={class:"flex flex-col gap-2"},H={class:"flex gap-2"},J=e("hr",{class:"border-t border-gray-300"},null,-1),K={class:""},O=e("strong",null,"Added by: ",-1),Q=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),W=B('<div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>Subject Code</strong></p><p class="col-span-3 px-2"><strong>Subject Name</strong></p><p class="col-span-3 px-2"><strong>Book Name</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',1),X={key:0,class:"flex justify-center items-center text-red-500 py-6"},Y={class:"col-span-1 px-2"},Z=e("strong",{class:"md:hidden"},"Code:",-1),ee={class:"col-span-3 px-2"},se=e("strong",{class:"md:hidden"},"Name:",-1),te={class:"col-span-3 px-2"},oe=e("strong",{class:"md:hidden"},"Book:",-1),ae={class:"w-full flex items-center justify-end md:justify-center gap-3 col-span-1 px-4 rounded"},re=["onClick"],ne=e("i",{class:"fad fa-edit text-cyan-600"},null,-1),ce=[ne],pe={__name:"AddSubject",setup(l){const c=$(),f=V(),g=P(),d=T(),h=x(!1),_=(o=null)=>{if(r(),o){const u=d.department_class_subjects.find(a=>a.id===o);u&&(s.value={...u},n.value="update")}h.value=!h.value};A(()=>{g.show(c.params.departmentId,c.params.classId),d.index(c.params.departmentId,c.params.classId),r()});const s=x({}),n=x("create");function r(){n.value="create",s.value={name:"",subject_code:"",book:"",is_active:!0}}async function t(){d[n.value](c.params.departmentId,c.params.classId,s.value).then(()=>{d.index(c.params.departmentId,c.params.classId),_()})}return(o,u)=>(i(),p("div",q,[e("div",E,[e("div",M,[e("h2",U," Subject List of "+m(b(g).department_class.name),1),e("div",null,[e("button",{onClick:_,class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Add new ")])]),e("div",L,[h.value?(i(),p("form",{key:0,onSubmit:D(t,["prevent"]),class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},[e("h3",R,m(n.value==="create"?"Add":"Edit")+" Subject of "+m(b(g).department_class.name),1),e("div",G,[e("div",H,[w(e("input",{class:"shrink-0 text-center grow-0 w-16 border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block px-2 py-1",type:"Text",required:"",placeholder:"Code","onUpdate:modelValue":u[0]||(u[0]=a=>s.value.subject_code=a)},null,512),[[j,s.value.subject_code]]),w(e("input",{class:"shrink grow border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Subject Name","onUpdate:modelValue":u[1]||(u[1]=a=>s.value.name=a)},null,512),[[j,s.value.name]])]),w(e("textarea",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",placeholder:"Book Name","onUpdate:modelValue":u[2]||(u[2]=a=>s.value.book=a),rows:"3"},null,512),[[j,s.value.book]])]),J,e("div",K,[e("div",null,[e("p",null,[O,y(" "+m(b(f).user.name),1)])])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{type:"button",class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:_}," Cancel "),Q])],40,z)):S("",!0)]),W,b(d).loader?(i(),p(k,{key:0},C(3,a=>I(F,{key:a,class:"w-full mt-1 h-8 min-w-80"})),64)):(i(),p(k,{key:1},[b(d).department_class_subjects.length?(i(!0),p(k,{key:1},C(b(d).department_class_subjects,a=>(i(),p("div",{key:a.id,class:"flex flex-col items-start md:grid md:grid-cols-8 bg-white md:text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2"},[e("p",Y,[Z,y(" "+m(a.subject_code),1)]),e("p",ee,[se,y(" "+m(a.name),1)]),e("p",te,[oe,y(" "+m(a.book),1)]),e("div",ae,[e("button",{type:"button",onClick:le=>_(a.id)},ce,8,re),S("",!0)])]))),128)):(i(),p("div",X,"No data found!"))],64))])]))}};export{pe as default};
