import{I as p,r as a,J as r}from"./index-ca119b07.js";const y=p("monthly-fee",()=>{const t=a(!0),c=a([]),n=a({});async function l(){t.value=!0;try{const s=await r.get("/api/monthly-fees"),{data:e={}}=s;c.value=(e==null?void 0:e.fees)||[]}catch(s){console.log(s)}t.value=!1}async function u(s={}){t.value=!0;try{const e=await r.post("/api/monthly-fees",s),{data:o={}}=e;n.value=(o==null?void 0:o.fee)||[]}catch(e){console.log(e)}t.value=!1}async function f(s){t.value=!0;try{const e=await r.get("/api/monthly-fees/"+s),{data:o={}}=e;n.value=(o==null?void 0:o.fee)||[]}catch(e){console.log(e)}t.value=!1}async function i(s={}){t.value=!0;try{const e=await r.put("/api/monthly-fees/"+s.id,s),{data:o={}}=e;n.value=(o==null?void 0:o.fee)||[]}catch(e){console.log(e)}t.value=!1}return{loader:t,fees:c,fee:n,index:l,create:u,show:f,update:i}});export{y as u};