import{_ as y}from"./PulseAnimatedBox-405c501b.js";import{o,b as m,e as n,t as v,F as k,l as w,p as V,v as B,d as F,I as D,r as b,J as I,E as M,j,f as h,g,c as A}from"./index-e8f0b3ba.js";import{u as N}from"./annual-fee-d7be5074.js";import{u as T}from"./monthly-fee-2de87a54.js";import{u as E}from"./package-31e60d87.js";import"./bundle-mjs-3a7afad5.js";const U={class:"w-full p-2 border rounded-md bg-white overflow-x-auto"},J={class:"auto min-w-max w-full"},K={class:"text-left p-2 text-cyan-600"},L={class:"p-2 text-left"},R={class:"flex items-start gap-2"},q=["onUpdate:modelValue"],C={__name:"FeePackageTableForm",props:{title:String,fees:Array},setup(p){return(c,_)=>{var l;return o(),m("div",U,[n("table",J,[n("thead",null,[n("tr",null,[n("th",K,v(p.title)+" Fees ~ Packages",1),(o(!0),m(k,null,w((l=p.fees[0])==null?void 0:l.packages,s=>(o(),m("th",{key:s.id,class:"p-2"},v(s.name),1))),128))])]),n("tbody",null,[p.fees.length?(o(!0),m(k,{key:0},w(p.fees,s=>(o(),m("tr",{key:s.id,class:"border-t"},[n("td",L,[n("div",R,[n("h5",null,v(s.id)+" - "+v(s.name),1)])]),(o(!0),m(k,null,w(s.packages,r=>(o(),m("td",{key:r.id,class:"p-2 text-center"},[V(n("input",{type:"number",class:"w-20 rounded py-1 text-right placeholder:text-gray-300",placeholder:"TK","onUpdate:modelValue":f=>r.amount=f},null,8,q),[[B,r.amount]])]))),128))]))),128)):F("",!0)])])])}}},z=D("packageFee",()=>{const p=E(),c=T(),_=N(),l=b(!0),s=b([]),r=b([]);function f(i,u){const t=r.value.find(a=>parseInt(a.package_id)===parseInt(i)&&parseInt(a.fee_id)===parseInt(u));return(t==null?void 0:t.amount)||null}async function S(){var i,u;s.value={monthly_fees:[],annual_fees:[]},await Promise.all([p.index(),c.index(),_.index()]),(i=c.fees)==null||i.map(t=>{const a=[];p.packages.map(e=>{a.push({id:e.id,name:e.name,amount:f(e.id,t.id)})}),s.value.monthly_fees.push({id:t.id,name:t.name,packages:a})}),(u=_.fees)==null||u.map(t=>{const a=[];p.packages.map(e=>{a.push({id:e.id,name:e.name,amount:f(e.id,t.id)})}),s.value.annual_fees.push({id:t.id,name:t.name,packages:a})})}async function $(i,u,t){l.value=!0;try{const a=await I.get(`/api/departments/${i}/academic-sessions/${u}/academic-classes/${t}/package-fees`),{data:e={}}=a;r.value=(e==null?void 0:e.academic_class_package_fees)||[],S()}catch(a){console.log(a)}l.value=!1}async function x(i,u,t){l.value=!0;const a=[];s.value.annual_fees.map(e=>{e.packages.map(d=>{d.amount>0&&a.push({package_id:d.id,fee_id:e.id,amount:d.amount})})}),s.value.monthly_fees.map(e=>{e.packages.map(d=>{d.amount>0&&a.push({package_id:d.id,fee_id:e.id,amount:d.amount})})});try{const e=await I.post(`/api/departments/${i}/academic-sessions/${u}/academic-classes/${t}/package-fees`,{academic_class_package_fees:a}),{data:d={}}=e;r.value=(d==null?void 0:d.academic_class_package_fees)||[]}catch(e){console.log(e)}l.value=!1}return{loader:l,academic_class_package_fees:r,form_data:s,index:$,save:x}}),G={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},H=n("div",{class:"flex items-center justify-between gap-4"},[n("h2",{class:"text-center text-2xl font-bold"},"Academic Class Page Fees")],-1),O={class:"w-full max-w-3xl grid gap-4"},P={key:1,class:"w-full grid gap-4"},Q=n("h1",{class:"font-medium"}," Academic Class Page Fees ",-1),te={__name:"IndexPage",setup(p){const c=z(),_=M(),{departmentId:l,academicSessionId:s,academicClassId:r}=_.params;function f(){c.save(l,s,r)}return j(()=>{c.index(l,s,r)}),(S,$)=>{var x,i,u,t,a,e;return o(),m("div",G,[H,n("div",O,[h(c).loader?(o(),m(k,{key:0},[g(y,{class:"w-full h-8",items:["16px","50%","10%","10%","10%","10%"]}),g(y,{class:"w-full h-8",items:["16px","50%","10%","10%","10%","10%"]}),g(y,{class:"w-full h-8",items:["16px","50%","10%","10%","10%","10%"]}),g(y,{class:"w-full h-8",items:["16px","50%","10%","10%","10%","10%"]})],64)):(o(),m("div",P,[n("div",{class:"flex justify-between items-center"},[Q,n("button",{type:"button",onClick:f,class:"btn-2"},"Save Change")]),(i=(x=h(c).form_data)==null?void 0:x.annual_fees)!=null&&i.length?(o(),A(C,{key:0,title:"Annual",fees:(u=h(c).form_data)==null?void 0:u.annual_fees},null,8,["fees"])):F("",!0),(a=(t=h(c).form_data)==null?void 0:t.monthly_fees)!=null&&a.length?(o(),A(C,{key:1,title:"Monthly",fees:(e=h(c).form_data)==null?void 0:e.monthly_fees},null,8,["fees"])):F("",!0)]))])])}}};export{te as default};
