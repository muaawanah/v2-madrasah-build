import{G as p,r,H as t}from"./index-9f78e41b.js";const y=p("annual-fee",()=>{const s=r(!0),c=r([]),o=r({});async function u(){s.value=!0;try{const a=await t.get("/api/annual-fees"),{data:e={}}=a;c.value=(e==null?void 0:e.fees)||[]}catch(a){console.log(a)}s.value=!1}async function l(a={}){s.value=!0;try{const e=await t.post("/api/annual-fees",a),{data:n={}}=e;o.value=(n==null?void 0:n.fee)||[]}catch(e){console.log(e)}s.value=!1}async function f(a){s.value=!0;try{const e=await t.get("/api/annual-fees/"+a),{data:n={}}=e;o.value=(n==null?void 0:n.fee)||[]}catch(e){console.log(e)}s.value=!1}async function i(a={}){s.value=!0;try{const e=await t.put("/api/annual-fees/"+a.id,a),{data:n={}}=e;o.value=(n==null?void 0:n.fee)||[]}catch(e){console.log(e)}s.value=!1}return{loader:s,fees:c,fee:o,index:u,create:l,show:f,update:i}});export{y as u};
