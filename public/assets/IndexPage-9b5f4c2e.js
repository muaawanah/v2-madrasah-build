import{_ as o}from"./PulseAnimatedBox-5a39f7b0.js";import{u as j}from"./academic-class-1a630cd2.js";import{u as $}from"./department-class-fea88b30.js";import{B,r as F,j as L,a as N,o as n,b as c,e,f as l,F as f,g as t,l as h,d as b,t as w,w as g,h as v}from"./index-75253d2e.js";import"./bundle-mjs-3a7afad5.js";const V={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},A=e("div",{class:"flex items-center justify-between gap-4"},[e("h2",{class:"text-center text-2xl font-bold"},"Academic Classes")],-1),D={class:"w-full max-w-3xl flex flex-col md:flex-row gap-4"},R={class:"w-full"},I={class:"w-full border border-cyan-400 rounded p-3 flex flex-col items-center gap-3"},T=e("div",{class:"text-center font-bold"},"Selected For Academic Class",-1),E={class:"flex justify-center items-center gap-1"},M={class:"w-full"},O={class:"w-full border border-slate-400 rounded p-3 flex flex-col items-center gap-3"},P=e("div",{class:"text-center font-bold"},"Department Class List",-1),q=["checked","onClick"],z={key:1,class:"flex justify-center items-center px-4 py-1.5"},W={__name:"IndexPage",setup(G){const a=j(),m=$(),k=B(),{departmentId:i,academicSessionId:u}=k.params;function y(){p.value=!1,a.save(i,u)}const p=F(!1);function C(_,x){const d=a.department_class_ids.indexOf(x);d!==-1&&a.department_class_ids.splice(d,1),_.target.checked&&a.department_class_ids.push(x),p.value=!0}return L(()=>{a.index(i,u),m.index(i)}),(_,x)=>{const d=N("RouterLink");return n(),c("div",V,[A,e("div",D,[e("div",R,[e("div",I,[T,l(a).loader?(n(),c(f,{key:0},[t(o,{class:"w-full h-8",items:["50%","20%","30%"]}),t(o,{class:"w-full h-8",items:["50%","20%","30%"]}),t(o,{class:"w-full h-8",items:["50%","20%","30%"]}),t(o,{class:"w-full h-8",items:["50%","20%","30%"]})],64)):(n(!0),c(f,{key:1},h(l(a).academic_classes,s=>{var r;return n(),c("div",{key:s.id,class:"w-full px-3 py-2 bg-white rounded border flex items-center justify-between gap-2"},[e("div",null,w((r=s==null?void 0:s.department_class)==null?void 0:r.name),1),e("div",E,[t(d,{to:`/settings/departments/${l(i)}/academic-sessions/${l(u)}/academic-classes/${s.id}/academic-subjects`,class:"btn-1 pt-0.5 pb-0 px-2"},{default:g(()=>[v(" Subjects ")]),_:2},1032,["to"]),t(d,{to:`/settings/departments/${l(i)}/academic-sessions/${l(u)}/academic-classes/${s.id}/package-fees`,class:"btn-2 pt-0.5 pb-0 px-2"},{default:g(()=>[v(" Fees ")]),_:2},1032,["to"])])])}),128))])]),e("div",M,[e("div",O,[P,l(m).loader?(n(),c(f,{key:0},[t(o,{class:"w-full h-8",items:["20px","50%"]}),t(o,{class:"w-full h-8",items:["20px","60%"]}),t(o,{class:"w-full h-8",items:["20px","40%"]}),t(o,{class:"w-full h-8",items:["20px","65%"]})],64)):b("",!0),(n(!0),c(f,null,h(l(m).department_classes,s=>{var r;return n(),c("div",{key:s.id,class:"w-full px-3 py-1.5 bg-white rounded-md border flex items-center gap-2"},[e("input",{type:"checkbox",checked:(r=l(a).department_class_ids)==null?void 0:r.includes(s.id),onClick:S=>C(S,s.id)},null,8,q),e("div",null,w(s.name),1)])}),128)),p.value?(n(),c("div",z,[e("button",{type:"button",onClick:y,class:"btn-2"},"Save Change")])):b("",!0)])])])])}}};export{W as default};
