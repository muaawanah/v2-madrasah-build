import{I as i,r,J as t}from"./index-cc373fef.js";const k=i("package-store",()=>{const c=r(!0),n=r([]),o=r({});async function l(){c.value=!0;try{const s=await t.get("/api/packages"),{data:e={}}=s;n.value=(e==null?void 0:e.packages)||[]}catch(s){console.log(s)}c.value=!1}async function u(s={}){c.value=!0;try{const e=await t.post("/api/packages",s),{data:a={}}=e;o.value=(a==null?void 0:a.package)||[]}catch(e){console.log(e)}c.value=!1}async function p(s){c.value=!0;try{const e=await t.get("/api/packages/"+s),{data:a={}}=e;o.value=(a==null?void 0:a.package)||[]}catch(e){console.log(e)}c.value=!1}async function g(s={}){c.value=!0;try{const e=await t.put("/api/packages/"+s.id,s),{data:a={}}=e;o.value=(a==null?void 0:a.package)||[]}catch(e){console.log(e)}c.value=!1}return{loader:c,packages:n,singlePackage:o,index:l,create:u,show:p,update:g}});export{k as u};
