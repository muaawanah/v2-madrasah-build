import{I as d,r,J as t}from"./index-e1aafd27.js";const f=d("academicSession",()=>{const c=r(!0),i=r([]),n=r({});async function u(o){c.value=!0;try{const a=await t.get(`/api/departments/${o}/academic-sessions`),{data:e={}}=a;i.value=(e==null?void 0:e.academic_sessions)||[]}catch(a){console.log(a)}c.value=!1}async function l(o,a={}){c.value=!0;try{const e=await t.post(`/api/departments/${o}/academic-sessions`,a),{data:s={}}=e;n.value=(s==null?void 0:s.academic_session)||[]}catch(e){console.log(e)}c.value=!1}async function m(o,a){c.value=!0;try{const e=await t.get(`/api/departments/${o}/academic-sessions/${a}`),{data:s={}}=e;n.value=(s==null?void 0:s.academic_session)||[]}catch(e){console.log(e)}c.value=!1}async function p(o,a={}){c.value=!0;try{const e=await t.put(`/api/departments/${o}/academic-sessions/`+a.id,a),{data:s={}}=e;n.value=(s==null?void 0:s.academic_session)||[]}catch(e){console.log(e)}c.value=!1}return{loader:c,academic_sessions:i,academic_session:n,index:u,create:l,show:m,update:p}});export{f as u};
