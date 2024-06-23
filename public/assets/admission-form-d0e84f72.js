import{t as B}from"./bundle-mjs-3a7afad5.js";import{_ as H}from"./PulseAnimatedBox-47c5f030.js";import{o as x,b as I,H as L,n as S,f as M,F as J,l as N,c as W,I as j,r as a,J as v}from"./index-e1aafd27.js";const K={__name:"LoaderWrapper",props:{isLoading:Boolean,class:String,number:{type:Number,default:1}},setup(s){const i=s;return(u,_)=>s.isLoading?(x(),I("div",{key:0,class:S(M(B)(i.class))},[L(u.$slots,"fallback",{},()=>[(x(!0),I(J,null,N(s.number,d=>(x(),W(H,{key:d,class:S(M(B)(i.class))},null,8,["class"]))),128))])],2)):L(u.$slots,"default",{key:1})}},O=j("admission-form",()=>{const s=a(!0),i=a({student_photo:!0,basic_info:!0,father_info:!0,mother_info:!0,guardian_info:!0,present_address_info:!0,permanent_address_info:!0,previous_info:!0,expectation_info:!0}),u=a([]),_=a(""),d=a(""),h=a(""),F=a({link:""}),g=a({name:"",gender:"",blood_group:"",date_of_birth:"",birth_certificate:""}),f=a({name:"",phone:"",occupation:""}),m=a({name:"",phone:"",occupation:""}),o=a({type:"",name:"",phone:"",relation:""}),p=a({division_id:"",district_id:"",area_id:"",postoffice:"",address:""}),l=a({is_same_address:!1,division_id:"",district_id:"",area_id:"",postoffice:"",address:""}),y=a({student_type:"",institute:"",academic_class:"",roll:"",exam:"",result:""}),b=a(""),k=a(""),$=a("");async function z(){s.value=!0;const e=await v.get("/api/adm/admission-forms"),{data:n={}}=e;u.value=n.admission_forms,s.value=!1}function w(e={}){b.value=e.academic_class_id,k.value=e.package_id,$.value=e.application_date,F.value={...e.student_photo},g.value={...e.basic_info},f.value={...e.father_info},m.value={...e.mother_info},o.value={...e.guardian_info},p.value={...e.present_address_info},l.value={...e.permanent_address_info},y.value={...e.previous_info}}async function A(e,n="new"){s.value=!0;const t={academic_session_id:parseInt(e),admission_type:n,basic_info:g.value,father_info:f.value,mother_info:m.value,guardian_info:{type:o.value.type,name:o.value.type==3?o.value.name:o.value.type==2?m.value.name:f.value.name,relation:o.value.type==3?o.value.relation:o.value.type==2?"Mother":"Father",phone:o.value.phone},present_address_info:p.value,permanent_address_info:{is_same_address:l.value.is_same_address,...l.value.is_same_address?p.value:l.value},previous_info:y.value,academic_class_id:parseInt(b.value),package_id:parseInt(k.value)},c=await v.post("/api/adm/admission-forms",t),{data:r={}}=c;return _.value=r.admission_form_id,d.value=r.admission_type,h.value=r.academic_session_id,w(r),s.value=!1,_.value}async function C(e){s.value=!0,i.value={student_photo:!0,basic_info:!0,father_info:!0,mother_info:!0,guardian_info:!0,present_address_info:!0,permanent_address_info:!0,previous_info:!0,expectation_info:!0};const n=await v.get(`/api/adm/admission-forms/${e}`),{data:t={}}=n;_.value=t.admission_form_id,d.value=t.admission_type,h.value=t.academic_session_id,w(t),i.value={student_photo:!1,basic_info:!1,father_info:!1,mother_info:!1,guardian_info:!1,present_address_info:!1,permanent_address_info:!1,previous_info:!1,expectation_info:!1},s.value=!1}async function E(e,n,t={}){s.value=!0,i.value[n]=!0;try{const c=await v.put(`/api/adm/admission-forms/${e}`,{[n]:t}),{data:r={}}=c;[n].value={...[n].value,...r[n]}}catch(c){console.log(c)}s.value=!1,i.value[n]=!1}return{loader:s,loaders:i,admission_forms:u,student_photo:F,admission_form_id:_,admission_type:d,academic_session_id:h,basic_info:g,father_info:f,mother_info:m,guardian_info:o,present_address_info:p,permanent_address_info:l,previous_info:y,academic_class_id:b,package_id:k,application_date:$,dataFormate:w,index:z,store:A,show:C,update:E}});export{K as _,O as u};