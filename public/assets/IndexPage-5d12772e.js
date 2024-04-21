import{_ as d}from"./PulseAnimatedBox-fcaa8fdd.js";import{u as C}from"./academic-class-c3f3e943.js";import{y as A,r as w,D as j,G as D,j as B,o as u,b as m,e as t,u as v,F as g,f,l as S,d as F,t as k}from"./index-5cfa2707.js";import{u as N}from"./department-class-subject-1f1ecc14.js";const V=A("academicSubject",()=>{const i=w(!0),c=w([]),p=w({}),_=w([]);async function y(l,r,o){var n;i.value=!0;try{const e=await j.get(`/api/departments/${l}/academic-sessions/${r}/academic-classes/${o}/academic-subjects`),{data:a={}}=e;c.value=(a==null?void 0:a.academic_subjects)||[],_.value=(n=c.value)==null?void 0:n.map(s=>s.department_class_subject_id)}catch(e){console.log(e)}i.value=!1}async function b(l,r,o){i.value=!0;try{const n=await j.post(`/api/departments/${l}/academic-sessions/${r}/academic-classes/${o}/academic-subjects`,{department_class_subject_ids:_.value}),{data:e={}}=n;p.value=(e==null?void 0:e.academic_subject)||[]}catch(n){console.log(n)}await y(l,r,o),i.value=!1}async function h(l,r,o,n){i.value=!0;try{const e=await j.get(`/api/departments/${l}/academic-sessions/${r}/academic-classes/${o}/academic-subjects/${n}`),{data:a={}}=e;p.value=(a==null?void 0:a.academic_subject)||[]}catch(e){console.log(e)}i.value=!1}return{loader:i,academic_subjects:c,department_class_subject_ids:_,academic_subject:p,index:y,save:b,show:h}}),L={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},E=t("div",{class:"flex items-center justify-between gap-4"},[t("h2",{class:"text-center text-2xl font-bold"},"Academic Subjects")],-1),G={class:"w-full max-w-3xl flex flex-col md:flex-row gap-4"},M={class:"w-full"},O={class:"w-full border border-cyan-400 rounded p-3 flex flex-col items-center gap-3"},P=t("div",{class:"text-center font-bold"},"Selected For Academic Subject",-1),R={class:"w-full"},T={class:"w-full border border-slate-400 rounded p-3 flex flex-col items-center gap-3"},q=t("div",{class:"text-center font-bold"},"Department Subject List",-1),z=["checked","onClick"],H={key:2,class:"flex justify-center items-center px-4 py-1.5"},U={__name:"IndexPage",setup(i){const c=V(),p=C(),_=N(),y=D(),{departmentId:b,academicSessionId:h,academicClassId:l}=y.params;function r(){o.value=!1,c.save(b,h,l)}const o=w(!1);function n(e,a){const s=c.department_class_subject_ids.indexOf(a);s!==-1&&c.department_class_subject_ids.splice(s,1),e.target.checked&&c.department_class_subject_ids.push(a),o.value=!0}return B(()=>{c.index(b,h,l),p.show(b,h,l).then(()=>{_.index(b,p.academic_class.department_class_id)})}),(e,a)=>(u(),m("div",L,[E,t("div",G,[t("div",M,[t("div",O,[P,v(c).loader?(u(),m(g,{key:0},[f(d,{class:"w-full h-8",items:["65%"]}),f(d,{class:"w-full h-8",items:["50%"]}),f(d,{class:"w-full h-8",items:["60%"]}),f(d,{class:"w-full h-8",items:["40%"]})],64)):(u(!0),m(g,{key:1},S(v(c).academic_subjects,s=>{var x;return u(),m("div",{key:s.id,class:"w-full px-3 py-2 bg-white rounded border flex items-center justify-between gap-2"},[t("div",null,k((x=s==null?void 0:s.department_class_subject)==null?void 0:x.name),1)])}),128))])]),t("div",R,[t("div",T,[q,v(_).loader?(u(),m(g,{key:0},[f(d,{class:"w-full h-8",items:["20px","50%"]}),f(d,{class:"w-full h-8",items:["20px","60%"]}),f(d,{class:"w-full h-8",items:["20px","40%"]}),f(d,{class:"w-full h-8",items:["20px","65%"]})],64)):(u(!0),m(g,{key:1},S(v(_).department_class_subjects,s=>{var x;return u(),m("div",{key:s.id,class:"w-full px-3 py-1.5 bg-white rounded-md border flex items-center gap-2"},[t("input",{type:"checkbox",checked:(x=v(c).department_class_subject_ids)==null?void 0:x.includes(s.id),onClick:$=>n($,s.id)},null,8,z),t("div",null,k(s.name),1)])}),128)),o.value?(u(),m("div",H,[t("button",{type:"button",onClick:r,class:"btn-2"},"Save Change")])):F("",!0)])])])]))}};export{U as default};
