import{y as k,r as V,j as D,o as s,b as o,e as a,f as n,c as m,p as d,z as p,F as _,l as f,d as u,A as y,h as v,q as j,t as x}from"./index-ca119b07.js";import{_ as h}from"./PulseAnimatedBox-de17d9a5.js";import{u as B}from"./academic-session-28e7cd86.js";import{u as N}from"./department-7cad2487.js";import"./bundle-mjs-3a7afad5.js";const A={class:"container mx-auto flex w-full flex-col items-center gap-2 md:gap-4 p-4"},M=["onSubmit"],U={class:"flex justify-center items-center"},q=a("option",{value:"",selected:"",disabled:""},"-- Select Department --",-1),R=["value"],T={key:0,class:"flex justify-center items-center"},$=a("option",{value:"",selected:"",disabled:""},"-- Select Session --",-1),C=["value"],F=a("h2",{class:"my-2 text-center text-xl font-bold text-brand-600 print:text-black"}," Select Admission Type ",-1),z={class:"flex items-center justify-center gap-4"},E={class:"cursor-pointer"},L={class:"cursor-pointer"},O={key:1,class:"rounded-md w-full",type:"text",placeholder:"Registration"},G={key:2,class:"flex justify-center gap-4"},H=a("button",{type:"submit",class:"btn-2"},"Next",-1),I=[H],Y={__name:"AdmType",setup(J){const b=k(),l=N(),r=B(),t=V({department_id:"",academic_session_id:"",admission_type:"new"});async function S(){b.push(`/adm/application-form?academic_session_id=${t.value.academic_session_id}&admission_type=${t.value.admission_type}`)}async function w(c){r.index(c.target.value)}D(()=>{l.index()});function g(){return!!(t.value.department_id&&t.value.academic_session_id)}return(c,i)=>(s(),o("div",A,[a("form",{onSubmit:j(S,["prevent"]),class:"flex flex-col w-full max-w-lg rounded border bg-white p-4 shadow gap-4"},[a("div",U,[n(l).loader?(s(),m(h,{key:0,class:"w-full h-11"})):d((s(),o("select",{key:1,"onUpdate:modelValue":i[0]||(i[0]=e=>t.value.department_id=e),class:"w-full rounded-md",onChange:w,required:""},[q,(s(!0),o(_,null,f(n(l).departments,e=>(s(),o("option",{key:e.id,value:e.id},x(e.name),9,R))),128))],544)),[[p,t.value.department_id]])]),t.value.department_id?(s(),o("div",T,[n(r).loader?(s(),m(h,{key:0,class:"w-full h-11"})):d((s(),o("select",{key:1,"onUpdate:modelValue":i[1]||(i[1]=e=>t.value.academic_session_id=e),class:"w-full rounded-md",required:""},[$,(s(!0),o(_,null,f(n(r).academic_sessions,e=>(s(),o("option",{key:e.id,value:e.id},x(e.name),9,C))),128))],512)),[[p,t.value.academic_session_id]])])):u("",!0),F,a("div",z,[a("label",E,[d(a("input",{"onUpdate:modelValue":i[2]||(i[2]=e=>t.value.admission_type=e),class:"",type:"radio",name:"admission_type",value:"new"},null,512),[[y,t.value.admission_type]]),v(" New Student ")]),a("label",L,[d(a("input",{"onUpdate:modelValue":i[3]||(i[3]=e=>t.value.admission_type=e),class:"",type:"radio",name:"admission_type",value:"old",disabled:""},null,512),[[y,t.value.admission_type]]),v(" Old Student ")])]),t.value.admission_type?u("",!0):(s(),o("input",O)),g()?(s(),o("div",G,I)):u("",!0)],40,M)]))}};export{Y as default};
