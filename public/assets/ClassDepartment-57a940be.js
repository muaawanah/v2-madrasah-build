import{x as w,r as i,B as x,u as D,j as k,o as d,b as u,e,q as A,t as v,m as h,v as b,g,p as _,d as C,F as S,l as V,f as j,w as N,R as T}from"./index-03246827.js";const q=w("department",()=>{const p=i([]),o=i({});async function f(){const t=await x.get("/api/departments"),{data:a={}}=t;p.value=(a==null?void 0:a.departments)||[]}async function c(t={}){const a=await x.post("/api/departments",t),{data:s={}}=a;o.value=(s==null?void 0:s.department)||[]}async function l(t={}){const a=await x.put("/api/departments/"+t.id,t),{data:s={}}=a;o.value=(s==null?void 0:s.department)||[]}return{departments:p,department:o,callDepartmentsApi:f,create:c,update:l}}),B={class:"contaner mx-auto flex flex-col items-center gap-4 mt-4"},F=e("h2",{class:"text-center text-2xl font-bold"},"Departments",-1),M=e("i",{class:"fal fa-plus-square"},null,-1),E=[M],L={class:"flex justify-center"},P=["onSubmit"],R={class:"text-xl font-semibold text-center"},U={class:"flex flex-col gap-2"},$=e("hr",{class:"border-t border-gray-300"},null,-1),z={class:""},G=e("strong",null,"Added by: ",-1),H=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),J={class:"w-full flex flex-wrap gap-4 justify-center"},K={class:"flex flex-wrap justify-center items-center gap-2"},O={class:"md:text-xl font-bold"},Q=["onClick"],W=e("i",{class:"fal fa-edit"},null,-1),X=[W],Y=e("div",{class:"flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"},[e("i",{class:"far fa-exclamation-triangle text-3xl"}),e("h1",{class:"text-xl"},"Caution"),e("div",{class:"text-red-500"},"**The most sensetive area of this software.")],-1),ee={__name:"ClassDepartment",setup(p){const o=q(),f=D(),c=i(!1),l=(m=null)=>{if(a(),m){const r=o.departments.find(n=>n.id===m);r&&(t.value={...r},s.value="update")}c.value=!c.value};k(()=>{o.callDepartmentsApi(),a()});const t=i({});function a(){s.value="create",t.value={name:"",description:"",is_active:!0}}const s=i("create");async function y(){o[s.value](t.value).then(()=>{o.callDepartmentsApi(),l()})}return(m,r)=>(d(),u("div",B,[e("div",{class:"flex items-center justify-between gap-4"},[F,e("div",null,[e("button",{onClick:l,class:"hover:text-cyan-600"},E)])]),e("div",L,[c.value?(d(),u("form",{key:0,onSubmit:A(y,["prevent"]),class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},[e("h3",R,v(s.value==="create"?"Add":"Edit")+" Department ",1),e("div",U,[h(e("input",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Department Name","onUpdate:modelValue":r[0]||(r[0]=n=>t.value.name=n)},null,512),[[b,t.value.name]]),h(e("textarea",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Description","onUpdate:modelValue":r[1]||(r[1]=n=>t.value.description=n)},null,512),[[b,t.value.description]])]),$,e("div",z,[e("div",null,[e("p",null,[G,g(" "+v(_(f).user.name),1)])])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:l}," Cancel "),H])],40,P)):C("",!0)]),e("div",J,[(d(!0),u(S,null,V(_(o).departments,n=>(d(),u("div",{key:n.id,class:"main-card"},[e("div",K,[e("h2",O,v(n.name),1),e("button",{onClick:Z=>l(n.id),class:"hover:text-cyan-600"},X,8,Q)]),j(_(T),{to:"/settings/department/add-class",class:"btn-1"},{default:N(()=>[g("Add Class")]),_:1})]))),128))]),Y]))}};export{ee as default};
