import{u as x,_ as h}from"./admission-form-c5affad5.js";import{j as f,a as u,o as a,b as n,e,g as d,w as c,f as m,x as g,h as t,F as w,l as v,t as i,d as b}from"./index-cc373fef.js";import"./bundle-mjs-3a7afad5.js";import"./PulseAnimatedBox-8ddc6b1b.js";const y={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},k={class:"md:w-[720px] flex flex-col md:gap-1 gap-2 items-center"},A={class:"w-full flex flex-col md:flex-row md:justify-between items-center"},N=e("h2",{class:"text-center text-2xl font-bold"},"Application List",-1),F=g('<div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>Form ID</strong></p><p class="col-span-3 px-2"><strong>Applicant Name</strong></p><p class="col-span-3 px-2"><strong>Expected Class</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',1),B={class:"col-span-1 px-2"},C=e("strong",{class:"md:hidden"},"Form ID:",-1),L={class:"col-span-3 px-2"},V=e("strong",{class:"md:hidden"},"Applicant Name:",-1),E={class:"col-span-3 px-2"},S=e("strong",{class:"md:hidden"},"Expected Class:",-1),D={class:"flex items-center gap-3 col-span-1 px-4 rounded"},j=e("i",{class:"fad fa-edit text-cyan-600"},null,-1);const G={__name:"ApplicationList",setup(I){const o=x();return f(()=>{o.index()}),(R,$)=>{const l=u("RouterLink");return a(),n("div",y,[e("div",k,[e("div",A,[N,e("div",null,[d(l,{to:"/adm/application-type",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"},{default:c(()=>[t(" Add new ")]),_:1})])]),F,d(h,{class:"w-full h-8 space-y-2 py-1",number:3,"is-loading":m(o).loader},{default:c(()=>[(a(!0),n(w,null,v(m(o).admission_forms,s=>{var r,p,_;return a(),n("div",{key:s.admission_form_id,class:"flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2 md:items-center"},[e("p",B,[C,t(" "+i(s.admission_form_id),1)]),e("p",L,[V,t(" "+i((r=s.basic_info)==null?void 0:r.name),1)]),e("p",E,[S,t(" "+i((_=(p=s.academic_class)==null?void 0:p.department_class)==null?void 0:_.name),1)]),e("div",D,[d(l,{to:`/adm/application-form/${s.admission_form_id}`},{default:c(()=>[j]),_:2},1032,["to"]),b("",!0)])])}),128))]),_:1},8,["is-loading"])])])}}};export{G as default};
