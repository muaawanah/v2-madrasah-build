import{I as m,r as o,J as s}from"./index-e8f0b3ba.js";const d=m("department",()=>{const a=o(!0),c=o([]),n=o({});async function u(){a.value=!0;try{const r=await s.get("/api/departments"),{data:e={}}=r;c.value=(e==null?void 0:e.departments)||[]}catch(r){console.log(r)}a.value=!1}async function l(r={}){a.value=!0;try{const e=await s.post("/api/departments",r),{data:t={}}=e;n.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}a.value=!1}async function p(r){a.value=!0;try{const e=await s.get("/api/departments/"+r),{data:t={}}=e;n.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}a.value=!1}async function i(r={}){a.value=!0;try{const e=await s.put("/api/departments/"+r.id,r),{data:t={}}=e;n.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}a.value=!1}return{loader:a,departments:c,department:n,index:u,create:l,show:p,update:i}});export{d as u};
