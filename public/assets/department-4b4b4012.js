import{P as l}from"./PulseAnimatedBox-55e31e1a.js";import{o as d,b as v,e as _,f as u,x as h,r as c,B as n}from"./index-c9a6bcd2.js";const w={class:"w-full flex flex-wrap justify-center items-center gap-4"},x={__name:"PulseAnimatedCard",setup(s){return(o,r)=>(d(),v("div",null,[_("div",w,[u(l,{class:"w-full h-6"}),u(l,{class:"w-20 h-8"})])]))}},B=h("department",()=>{const s=c(!1),o=c([]),r=c({});async function p(){s.value=!0;try{const a=await n.get("/api/departments"),{data:e={}}=a;o.value=(e==null?void 0:e.departments)||[]}catch(a){console.log(a)}s.value=!1}async function i(a={}){s.value=!0;try{const e=await n.post("/api/departments",a),{data:t={}}=e;r.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}s.value=!1}async function m(a){s.value=!0;try{const e=await n.get("/api/departments/"+a),{data:t={}}=e;r.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}s.value=!1}async function f(a={}){s.value=!0;try{const e=await n.put("/api/departments/"+a.id,a),{data:t={}}=e;r.value=(t==null?void 0:t.department)||[]}catch(e){console.log(e)}s.value=!1}return{loader:s,departments:o,department:r,index:p,create:i,show:m,update:f}});export{x as _,B as u};