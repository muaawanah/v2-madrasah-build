import{y as m,r as o,D as s}from"./index-54d168bd.js";const f=m("department",()=>{const a=o(!1),c=o([]),n=o({});async function l(){a.value=!0;try{const r=await s.get("/api/departments"),{data:e={}}=r;c.value=(e==null?void 0:e.departments)||[]}catch(r){console.log(r)}a.value=!1}async function p(r={}){a.value=!0;try{const e=await s.post("/api/departments",r),{data:t={}}=e;n.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}a.value=!1}async function u(r){a.value=!0;try{const e=await s.get("/api/departments/"+r),{data:t={}}=e;n.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}a.value=!1}async function i(r={}){a.value=!0;try{const e=await s.put("/api/departments/"+r.id,r),{data:t={}}=e;n.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}a.value=!1}return{loader:a,departments:c,department:n,index:l,create:p,show:u,update:i}});export{f as u};
