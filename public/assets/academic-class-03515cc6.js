import{G as y,r as u,H as l}from"./index-d23e54bc.js";const g=y("academicClass",()=>{const a=u(!0),n=u([]),r=u({}),i=u([]);async function m(o,c){var e;a.value=!0;try{const s=await l.get(`/api/departments/${o}/academic-sessions/${c}/academic-classes`),{data:t={}}=s;n.value=(t==null?void 0:t.academic_classes)||[],i.value=(e=n.value)==null?void 0:e.map(f=>f.department_class_id)}catch(s){console.log(s)}a.value=!1}async function d(o){var c;a.value=!0;try{const e=await l.get(`/api/academic-sessions/${o}/academic-classes`),{data:s={}}=e;n.value=(s==null?void 0:s.academic_classes)||[],i.value=(c=n.value)==null?void 0:c.map(t=>t.department_class_id)}catch(e){console.log(e)}a.value=!1}async function v(o,c){a.value=!0;try{const e=await l.post(`/api/departments/${o}/academic-sessions/${c}/academic-classes`,{department_class_ids:i.value}),{data:s={}}=e;r.value=(s==null?void 0:s.academic_class)||[]}catch(e){console.log(e)}await m(o,c),a.value=!1}async function p(o,c,e){a.value=!0;try{const s=await l.get(`/api/departments/${o}/academic-sessions/${c}/academic-classes/${e}`),{data:t={}}=s;r.value=(t==null?void 0:t.academic_class)||[]}catch(s){console.log(s)}a.value=!1}async function _(o,c){a.value=!0;try{const e=await l.get(`/api/academic-sessions/${o}/academic-classes/${c}`),{data:s={}}=e;r.value=(s==null?void 0:s.academic_class)||[]}catch(e){console.log(e)}a.value=!1}return{loader:a,academic_classes:n,department_class_ids:i,academic_class:r,index:m,indexBySessionId:d,save:v,show:p,showBySessionId:_}});export{g as u};
