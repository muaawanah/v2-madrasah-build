import{m as C,r as p,j as D,o,b as a,e,f as r,d as b,q as j,t as d,p as v,v as y,h as _,F as m,g as x,l as S,w as V,R as N}from"./index-75253d2e.js";import{_ as g}from"./PulseAnimatedCard-12bcb203.js";import{u as A}from"./department-f3a2c4e2.js";import"./PulseAnimatedBox-5a39f7b0.js";import"./bundle-mjs-3a7afad5.js";const F={class:"container mx-auto flex flex-col items-center gap-2 mt-4"},T={class:"flex items-center justify-between gap-4"},q=e("h2",{class:"text-center text-2xl font-bold"},"Departments",-1),B={key:0},E=e("i",{class:"fal fa-plus-square"},null,-1),M=[E],$={class:"flex justify-center z-40"},L=["onSubmit"],P={class:"text-xl font-semibold text-center"},R={class:"flex flex-col gap-2"},U=e("hr",{class:"border-t border-gray-300"},null,-1),z={class:""},G=e("strong",null,"Added by: ",-1),H=e("button",{type:"submit",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),J={class:"w-full flex flex-wrap gap-4 justify-center"},K={key:0,class:"flex justify-center items-center text-red-500 py-6"},O={class:"flex flex-col justify-center items-center gap-2"},Q={class:"md:text-xl font-bold"},W=e("hr",{class:"w-full"},null,-1),X={class:"text-justify line-clamp-4"},Y={class:"w-full flex justify-between"},Z=["onClick"],I=e("i",{class:"fal fa-edit"},null,-1),ee=e("p",null,"Edit",-1),te=e("div",{class:"flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"},[e("i",{class:"far fa-exclamation-triangle text-3xl"}),e("h1",{class:"text-xl"},"Caution"),e("div",{class:"text-red-500"},"**The most sensetive area of this software.")],-1),ce={__name:"ClassDepartment",setup(se){const s=A(),w=C(),u=p(!1),i=(f=null)=>{if(h(),f){const l=s.departments.find(t=>t.id===f);l&&(n.value={...l},c.value="update")}u.value=!u.value};D(()=>{s.index(),h()});const c=p("create"),n=p({});function h(){c.value="create",n.value={name:"",description:"",is_active:!0}}async function k(){s[c.value](n.value).then(()=>{s.index(),i()})}return(f,l)=>(o(),a("div",F,[e("div",T,[q,r(s).loader?b("",!0):(o(),a("div",B,[e("button",{onClick:i,class:"hover:text-cyan-600"},M)]))]),e("div",$,[u.value?(o(),a("form",{key:0,onSubmit:j(k,["prevent"]),class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},[e("h3",P,d(c.value==="create"?"Add":"Edit")+" Department ",1),e("div",R,[v(e("input",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",type:"Text",required:"",placeholder:"Name","onUpdate:modelValue":l[0]||(l[0]=t=>n.value.name=t)},null,512),[[y,n.value.name]]),v(e("textarea",{class:"border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1",placeholder:"Description","onUpdate:modelValue":l[1]||(l[1]=t=>n.value.description=t),rows:"10"},null,512),[[y,n.value.description]])]),U,e("div",z,[e("div",null,[e("p",null,[G,_(" "+d(r(w).user.name),1)])])]),e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:i,type:"button"}," Cancel "),H])],40,L)):b("",!0)]),e("div",J,[r(s).loader?(o(),a(m,{key:0},[x(g,{class:"main-card"}),x(g,{class:"main-card"})],64)):(o(),a(m,{key:1},[r(s).departments.length?(o(!0),a(m,{key:1},S(r(s).departments,t=>(o(),a("div",{key:t.id,class:"main-card px-4"},[e("div",O,[e("h2",Q,d(t.name),1),W,e("p",X,d(t.description),1)]),e("div",Y,[e("button",{onClick:oe=>i(t.id),class:"btn-1 gap-2"},[I,_(),ee],8,Z),x(r(N),{to:`/settings/departments/${t.id}/classes`,class:"btn-2"},{default:V(()=>[_(" Add Class ")]),_:2},1032,["to"])])]))),128)):(o(),a("div",K,"No data found!"))],64))]),te]))}};export{ce as default};
