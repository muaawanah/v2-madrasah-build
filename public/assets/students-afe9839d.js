import{I as v,r as a,J as l}from"./index-8e0a7070.js";const m=v("csm/students",()=>{const t=a(!0),n=a([]),c=a({}),r=a([]);async function d(o){t.value=!0,n.value=[];try{const s=await l.get(`/api/csm/academic-classes/${o}/students`),{data:e={}}=s;n.value=(e==null?void 0:e.students)||[]}catch(s){console.log(s)}t.value=!1}async function i(o,s){t.value=!0,c.value={};try{const e=await l.get(`/api/csm/academic-classes/${o}/students/${s}`),{data:u={}}=e;c.value=u.student||{},r.value=u.fees||[]}catch(e){console.log(e)}t.value=!1}return{students:n,student:c,fees:r,index:d,show:i}});export{m as u};