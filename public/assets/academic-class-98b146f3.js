import{B as _,r as n,D as u}from"./index-4382be12.js";const $=_("academicClass",()=>{const a=n(!0),r=n([]),l=n({}),i=n([]);async function m(t,o){var e;a.value=!0;try{const s=await u.get(`/api/departments/${t}/academic-sessions/${o}/academic-classes`),{data:c={}}=s;r.value=(c==null?void 0:c.academic_classes)||[],i.value=(e=r.value)==null?void 0:e.map(v=>v.department_class_id)}catch(s){console.log(s)}a.value=!1}async function d(t,o){a.value=!0;try{const e=await u.post(`/api/departments/${t}/academic-sessions/${o}/academic-classes`,{department_class_ids:i.value}),{data:s={}}=e;l.value=(s==null?void 0:s.academic_class)||[]}catch(e){console.log(e)}await m(t,o),a.value=!1}async function p(t,o,e){a.value=!0;try{const s=await u.get(`/api/departments/${t}/academic-sessions/${o}/academic-classes/${e}`),{data:c={}}=s;l.value=(c==null?void 0:c.academic_class)||[]}catch(s){console.log(s)}a.value=!1}return{loader:a,academic_classes:r,department_class_ids:i,academic_class:l,index:m,save:d,show:p}});export{$ as u};