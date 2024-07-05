import{o as d,b as p,e as m,H as B,h as k,t as _,I as f,r as l,J as h,K as g,B as I,j as y,c as S,w as $,l as V,F as x,n as b,f as w}from"./index-e8f0b3ba.js";import{_ as A}from"./admission-form-ad231254.js";const C={key:0,class:"h-[42px] bg-gray-200 overflow-hidden relative rounded"},D=m("div",{class:"absolute inset-0 bg-gray-300/30 cursor-default"},null,-1),z={class:"-z-10"},G={__name:"PermanentAddressWrapper",props:{isSameAddress:{type:Boolean,default:!1},placeholder:{type:String,default:""}},setup(e){return(i,o)=>e.isSameAddress?(d(),p("div",C,[D,m("div",z,[B(i.$slots,"placeholder",{},()=>[k(_(e.placeholder),1)])])])):B(i.$slots,"default",{key:1})}},F=f("location-bd-areas",()=>{const e=l(!0),i=l(!0),o=l({}),s=l([]);async function r(u){if(e.value=!0,!u)return e.value=!1,[];const t=`/api/location-bd/districts/${u}/areas`;if(o.value[t])return e.value=!1,o.value[t];try{const a=await h.get(t),{data:c={}}=a;s.value=(c==null?void 0:c.areas)||[]}catch(a){console.log(a)}return o.value[t]=s.value,e.value=!1,s.value}return{loader:e,cache:i,history:o,areas:s,index:r}}),M=["value"],N=m("option",{value:""},"--Select--",-1),O=["value"],Q={__name:"AreaSelect",props:["modelValue","districtId"],emits:["update:modelValue"],setup(e,{emit:i}){const o=g(),s=F(),r=e,u=i,t=l(""),a=l(!0);return I(()=>r.districtId,async()=>{a.value=!0,console.log("area watch districtId: "+r.districtId),t.value=await s.index(r.districtId),u("update:modelValue",""),a.value=!1}),y(async()=>{t.value=await s.index(r.districtId),console.log("area onMounded"),a.value=!1}),(c,v)=>(d(),S(A,{"is-loading":a.value},{default:$(()=>[m("select",{class:b(w(o).class),value:r.modelValue,onChange:v[0]||(v[0]=n=>u("update:modelValue",n.target.value))},[N,(d(!0),p(x,null,V(t.value,n=>(d(),p("option",{key:n.id,value:n.id},_(n.en_name)+" ("+_(n.name)+") ",9,O))),128))],42,M)]),_:1},8,["is-loading"]))}},j=f("location-bd-districts",()=>{const e=l(!0),i=l(!0),o=l({}),s=l([]);async function r(u){if(e.value=!0,!u)return e.value=!1,[];const t=`/api/location-bd/divisions/${u}/districts`;if(o.value[t])return e.value=!1,o.value[t];try{const a=await h.get(t),{data:c={}}=a;s.value=(c==null?void 0:c.districts)||[]}catch(a){console.log(a)}return o.value[t]=s.value,e.value=!1,s.value}return{loader:e,cache:i,history:o,districts:s,index:r}}),E=["value"],H=m("option",{value:""},"--Select--",-1),J=["value"],R={__name:"DistrictSelect",props:["modelValue","divisionId"],emits:["update:modelValue"],setup(e,{emit:i}){const o=g(),s=j(),r=e,u=i,t=l(""),a=l(!0);return I(()=>r.divisionId,async()=>{a.value=!0,t.value=await s.index(r.divisionId),u("update:modelValue",""),a.value=!1}),y(async()=>{t.value=await s.index(r.divisionId),a.value=!1}),(c,v)=>(d(),S(A,{"is-loading":a.value},{default:$(()=>[m("select",{class:b(w(o).class),value:r.modelValue,onChange:v[0]||(v[0]=n=>u("update:modelValue",n.target.value))},[H,(d(!0),p(x,null,V(t.value,n=>(d(),p("option",{key:n.id,value:n.id},_(n.en_name)+" ("+_(n.name)+") ",9,J))),128))],42,E)]),_:1},8,["is-loading"]))}},K=f("location-bd-divisions",()=>{const e=l(!0),i=l(!0),o=l({}),s=l([]);async function r(){e.value=!0;const u="/api/location-bd/divisions";if(o.value[u])return e.value=!1,o.value[u];try{const t=await h.get(u),{data:a={}}=t;s.value=(a==null?void 0:a.divisions)||[]}catch(t){console.log(t)}return o.value[u]=s.value,e.value=!1,s.value}return{loader:e,cache:i,history:o,divisions:s,index:r}}),L=["value"],P=m("option",{value:""},"--Select--",-1),T=["value"],U={__name:"DivisionSelect",props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:i}){const o=g(),s=K(),r=e,u=i,t=l(""),a=l(!0);return y(async()=>{t.value=await s.index(),a.value=!1}),(c,v)=>(d(),S(A,{"is-loading":a.value},{default:$(()=>[m("select",{class:b(w(o).class),value:r.modelValue,onChange:v[0]||(v[0]=n=>u("update:modelValue",n.target.value))},[P,(d(!0),p(x,null,V(t.value,n=>(d(),p("option",{key:n.id,value:n.id},_(n.en_name)+" ("+_(n.name)+") ",9,T))),128))],42,L)]),_:1},8,["is-loading"]))}},X=f("common-data",()=>({blood_groups:l([{id:1,name:"A (+)"},{id:2,name:"A (-)"},{id:3,name:"B (+)"},{id:4,name:"B (-)"},{id:5,name:"AB (+)"},{id:6,name:"AB (-)"},{id:7,name:"O (+)"},{id:8,name:"O (-)"}])}));export{U as _,R as a,Q as b,G as c,X as u};
