import{I as j,r as u,J as o}from"./index-8e0a7070.js";const b=j("departmentClassSubject",()=>{const a=u(!0),l=u([]),n=u({});async function p(c,r){a.value=!0;try{const t=await o.get(`/api/departments/${c}/classes/${r}/subjects`),{data:e={}}=t;l.value=(e==null?void 0:e.department_class_subjects)||[]}catch(t){console.log(t)}a.value=!1}async function i(c,r,t={}){a.value=!0;try{const e=await o.post(`/api/departments/${c}/classes/${r}/subjects`,t),{data:s={}}=e;n.value=(s==null?void 0:s.department_class_subject)||{}}catch(e){console.log(e)}a.value=!1}async function m(c,r,t){a.value=!0;try{const e=await o.get(`/api/departments/${c}/classes/${r}/subjects/${t}`),{data:s={}}=e;n.value=(s==null?void 0:s.department_class_subject)||{}}catch(e){console.log(e)}a.value=!1}async function v(c,r,t={}){a.value=!0;try{const e=await o.put(`/api/departments/${c}/classes/${r}/subjects/`+t.id,t),{data:s={}}=e;n.value=(s==null?void 0:s.department_class_subject)||{}}catch(e){console.log(e)}a.value=!1}return{loader:a,department_class_subjects:l,department_class_subject:n,index:p,create:i,show:m,update:v}});export{b as u};
