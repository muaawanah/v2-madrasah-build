import{D as F,m as q,r as f,j as B,o,b as a,e,t as c,u as n,d as S,q as I,p as C,v as D,g as h,F as x,l as N,h as L,f as j,w as P,R as T}from"./index-de55e87e.js";import{u as M}from"./department-3fe9bf3f.js";import{u as R}from"./department-class-2c782db9.js";import{P as $}from"./PulseAnimatedBox-a6ea2f5b.js";const E={class:"container mx-auto flex flex-col items-center gap-2 mt-4 max-w-5xl"},U={class:"flex items-center justify-between gap-4"},z={class:"text-center text-2xl font-bold"},G={key:0},H=e("i",{class:"fal fa-plus-square"},null,-1),J=[H],K={class:"flex justify-center z-40"},O=["onSubmit"],Q={class:"text-xl font-semibold text-center"},W={class:"flex flex-col gap-2"},X=e("hr",{class:"border-t border-gray-300"},null,-1),Y={class:""},Z=e("strong",null,"Added by: ",-1),ee=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),se={class:"flex flex-col gap-1"},te=L('<div class="hidden w-full md:grid grid-cols-10 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>SL</strong></p><p class="col-span-3 px-2"><strong>Class Name</strong></p><p class="col-span-3 px-2"><strong>Description</strong></p><p class="col-span-2 px-2"><strong>Subjects</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',1),oe={key:0,class:"flex justify-center items-center text-red-500 py-6"},ae={class:"col-span-1 px-2"},ne=e("strong",{class:"md:hidden"},"SL: ",-1),re={class:"col-span-3 px-2"},le=e("strong",{class:"md:hidden"},"Class Name: ",-1),ce={class:"col-span-3 px-2"},de=e("strong",{class:"md:hidden"},"Description: ",-1),ie={class:"line-clamp-1"},pe={class:"col-span-2 px-2"},ue=e("strong",{class:"md:hidden"},"Subjects: ",-1),me=e("i",{class:"fal fa-plus-square"},null,-1),_e={class:"col-span-1 px-2"},fe=["onClick"],he=e("i",{class:"fal fa-edit"},null,-1),xe=[he],ge=e("div",{class:"flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"},[e("i",{class:"far fa-exclamation-triangle text-3xl"}),e("h1",{class:"text-xl"},"Caution"),e("div",{class:"text-red-500"},"**The most sensetive area of this software.")],-1),Ce={__name:"AddClass",setup(ve){const d=F(),g=M(),t=R(),A=q(),m=f(!1),i=(_=null)=>{if(v(),_){const l=t.department_classes.find(u=>u.id===_);l&&(r.value={...l},p.value="update")}m.value=!m.value};B(()=>{g.show(d.params.departmentId),t.index(d.params.departmentId),v()});const r=f({}),p=f("create");function v(){p.value="create",r.value={name:"",description:"",is_active:!0}}async function V(){t[p.value](d.params.departmentId,r.value).then(()=>{t.index(d.params.departmentId),i()})}return(_,l)=>{var u,b,y,w;return o(),a("div",E,[e("div",U,[e("h2",z," Add Class of "+c((b=(u=n(g))==null?void 0:u.department)==null?void 0:b.name),1),n(t).loader?S("",!0):(o(),a("div",G,[e("button",{onClick:i,class:"hover:text-cyan-600"},J)]))]),e("div",K,[m.value?(o(),a("form",{key:0,onSubmit:I(V,["prevent"]),class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},[e("h3",Q,c(p.value==="create"?"Add":"Edit")+" Class ",1),e("div",W,[C(e("input",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Name","onUpdate:modelValue":l[0]||(l[0]=s=>r.value.name=s)},null,512),[[D,r.value.name]]),C(e("textarea",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",placeholder:"Description","onUpdate:modelValue":l[1]||(l[1]=s=>r.value.description=s),rows:"10"},null,512),[[D,r.value.description]])]),X,e("div",Y,[e("p",null,[Z,h(" "+c(n(A).user.name),1)])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{type:"button",class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:i}," Cancel "),ee])],40,O)):S("",!0)]),e("div",se,[te,n(t).loader?(o(),a(x,{key:0},N(3,s=>j($,{key:s,class:"w-full mt-1 h-8 min-w-80"})),64)):(o(),a(x,{key:1},[(w=(y=n(t))==null?void 0:y.department_classes)!=null&&w.length?(o(!0),a(x,{key:1},N(n(t).department_classes,(s,k)=>(o(),a("div",{key:k,class:"flex flex-col items-start md:grid md:grid-cols-10 bg-white md:text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2"},[e("p",ae,[ne,h(" "+c(k+1),1)]),e("p",re,[le,h(" "+c(s.name),1)]),e("p",ce,[de,e("span",ie,c(s.description),1)]),e("p",pe,[ue,j(n(T),{to:`/settings/departments/${n(d).params.departmentId}/classes/${s.id}/subjects`,class:"hover:text-cyan-600"},{default:P(()=>[me]),_:2},1032,["to"])]),e("div",_e,[e("button",{onClick:be=>i(s.id),class:"hover:text-cyan-600"},xe,8,fe)])]))),128)):(o(),a("div",oe,"No data found!"))],64))]),ge])}}};export{Ce as default};