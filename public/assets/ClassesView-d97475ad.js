import{I as y,r as u,J as v,j as h,p as x,z as S,o as r,b as c,F as _,l as f,t as m,e as o,a as k,f as g,g as b,c as C,w as $}from"./index-e1aafd27.js";const w=y("csm/departmentStore",()=>{const a=u(!0),s=u([]),l=u({});async function d(){a.value=!0;try{const t=await v.get("/api/csm/departments"),{data:e={}}=t;s.value=(e==null?void 0:e.departments)||[]}catch(t){console.log(t)}a.value=!1}async function i(t,e){a.value=!0;try{const n=await v.get(`/api/csm/departments/academic-sessions/${e}`),{data:p={}}=n;l.value[t]=(p==null?void 0:p.academic_classes)||[]}catch(n){console.log(n)}a.value=!1}return{loader:a,departments:s,academic_classes:l,index:d,show:i}}),B=o("option",{value:""},"--Select--",-1),V=["value"],j={__name:"SessionSelect",props:["department"],setup(a){const s=a,l=w(),d=u(s.department.academic_sessions[0].id);h(()=>{s.department.id&&s.department.academic_sessions[0].id&&l.show(s.department.id,s.department.academic_sessions[0].id)});function i(t,e){console.log(e,t.target.value),l.show(e,t.target.value)}return(t,e)=>x((r(),c("select",{"onUpdate:modelValue":e[0]||(e[0]=n=>d.value=n),onChange:e[1]||(e[1]=n=>i(n,a.department.id)),class:"rounded-lg"},[B,(r(!0),c(_,null,f(a.department.academic_sessions,n=>(r(),c("option",{key:n.id,value:n.id},m(n.name),9,V))),128))],544)),[[S,d.value]])}},D={class:"container mx-auto grid gap-4 p-4 md:py-8"},F={class:"bg-white px-4 py-3 rounded-lg shadow flex justify-between items-center"},M={class:"w-full flex flex-wrap gap-4 justify-center mt-5"},N={class:"text-lg font-bold px-2 py-1 bg-cyan-100 rounded-lg"},z={class:""},A={class:"font-semibold line-clamp-1"},I={__name:"ClassesView",setup(a){const s=w();return h(()=>{s.index(),console.log("mounted")}),(l,d)=>{const i=k("router-link");return r(),c("div",D,[(r(!0),c(_,null,f(g(s).departments,t=>(r(),c("div",{key:t.id,class:"mb-20"},[o("div",F,[o("div",null,m(t.name),1),b(j,{department:t},null,8,["department"])]),o("div",M,[(r(!0),c(_,null,f(g(s).academic_classes[t.id],e=>(r(),C(i,{to:`/csm/academic-classes/${e.id}/students`,key:e.id,class:"main-card"},{default:$(()=>[o("div",null,[o("h1",N,m(e.id),1)]),o("div",z,[o("h2",A,m(e.department_class.name),1)])]),_:2},1032,["to"]))),128))])]))),128))])}}};export{I as default};
