import{y as v,r as o,D as c}from"./index-54d168bd.js";const d=v("departmentClass",()=>{const a=o(!1),l=o([]),n=o({});async function p(r){a.value=!0;try{const t=await c.get(`/api/departments/${r}/classes`),{data:e={}}=t;l.value=(e==null?void 0:e.department_classes)||[]}catch(t){console.log(t)}a.value=!1}async function u(r,t={}){a.value=!0;try{const e=await c.post(`/api/departments/${r}/classes`,t),{data:s={}}=e;n.value=(s==null?void 0:s.department_class)||[]}catch(e){console.log(e)}a.value=!1}async function i(r,t){a.value=!0;try{const e=await c.get(`/api/departments/${r}/classes/${t}`),{data:s={}}=e;n.value=(s==null?void 0:s.department_class)||[]}catch(e){console.log(e)}a.value=!1}async function m(r,t={}){a.value=!0;try{const e=await c.put(`/api/departments/${r}/classes/`+t.id,t),{data:s={}}=e;n.value=(s==null?void 0:s.department_class)||[]}catch(e){console.log(e)}a.value=!1}return{loader:a,department_classes:l,department_class:n,index:p,create:u,show:i,update:m}});export{d as u};
