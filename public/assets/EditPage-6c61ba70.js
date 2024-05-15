import{u as g,_ as k}from"./admission-form-782fcb00.js";import{_ as p}from"./PulseAnimatedBox-21f3b5bd.js";import{o as n,b as l,e,f as o,F as b,g as i,p as a,v as c,q as $,C as D,w as h,A as V,h as U,z as F,l as C,t as x,j as I,D as M,c as O,d as B,r as E,B as G}from"./index-677d092e.js";import{_ as S,a as P,b as N,c as w,u as T}from"./common-data-6c2bcbcb.js";import{u as H}from"./academic-class-ce6d16c0.js";import{u as L}from"./package-af8fe77d.js";const z=["onSubmit"],W={class:"p-2"},J=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Academic Information"),e("button",{type:"submit",class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-save"})])],-1),K={key:1,class:"grid grid-cols-1 gap-4 px-2"},Q=e("p",{class:"font-bold"},"Previous School",-1),X={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Y=e("p",{class:"font-bold"},"Class",-1),Z=e("p",{class:"font-bold"},"Roll",-1),ee=e("p",{class:"font-bold"},"Previous Exam",-1),se=e("p",{class:"font-bold"},"Previous Test Result",-1),oe={__name:"AcademicInfoForm",setup(y){const s=g();function _(){s.update(s.admission_form_id,"previous_info",s.previous_info)}return(u,t)=>(n(),l("form",{onSubmit:$(_,["prevent"]),class:"border p-2 my-2"},[e("div",W,[J,o(s).loaders.previous_info?(n(),l(b,{key:0},[i(p,{class:"w-full h-12",items:["100%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]})],64)):(n(),l("div",K,[e("div",null,[Q,a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>o(s).previous_info.institute=d),class:"w-full rounded-md",type:"text",name:"previousSchool",placeholder:"Previous School"},null,512),[[c,o(s).previous_info.institute]])]),e("div",X,[e("div",null,[Y,a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=d=>o(s).previous_info.academic_class=d),class:"w-full rounded-md",type:"text",name:"class",placeholder:"Class"},null,512),[[c,o(s).previous_info.academic_class]])]),e("div",null,[Z,a(e("input",{"onUpdate:modelValue":t[2]||(t[2]=d=>o(s).previous_info.roll=d),class:"w-full rounded-md",type:"text",name:"roll",placeholder:"Roll"},null,512),[[c,o(s).previous_info.roll]])]),e("div",null,[ee,a(e("input",{"onUpdate:modelValue":t[3]||(t[3]=d=>o(s).previous_info.exam=d),class:"w-full rounded-md",type:"text",name:"previousExam",placeholder:"Previous Exam"},null,512),[[c,o(s).previous_info.exam]])]),e("div",null,[se,a(e("input",{"onUpdate:modelValue":t[4]||(t[4]=d=>o(s).previous_info.result=d),class:"w-full rounded-md",type:"text",name:"testResult",placeholder:"Test Result"},null,512),[[c,o(s).previous_info.result]])])])]))])],40,z))}},te=["onSubmit"],de={class:"p-2"},ie=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Address Information"),e("button",{type:"submit",class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-save"})])],-1),ne={key:1,class:"grid grid-cols-1 md:grid-cols-2 gap-2 px-2"},le={class:"grid grid-cols-1 gap-2"},ae=e("h4",{class:"font-semibold"},"Current Address",-1),re=e("p",{class:"font-bold"},"Division",-1),ue=e("p",{class:"font-bold"},"District",-1),_e=e("p",{class:"font-bold"},"Upazilla / Area",-1),ce=e("p",{class:"font-bold"},"Post office",-1),me=e("p",{class:"font-bold"},"House & Road No, Village",-1),pe=e("hr",{class:"md:hidden"},null,-1),fe={class:"md:border-l md:pl-2"},he={class:"grid grid-cols-1 gap-2"},ve={class:"flex gap-2 items-center"},be=e("label",{class:"font-semibold",for:"sameAsCurrent"}," Permanent Address Same as current ",-1),ge=e("p",{class:"font-bold"},"Division",-1),ye=e("p",{class:"font-bold"},"District",-1),xe=e("p",{class:"font-bold"},"Upazilla / Area",-1),$e=e("p",{class:"font-bold"},"Post office",-1),we=e("p",{class:"font-bold"},"House & Road No, Village",-1),Ve={__name:"AddressInfoForm",setup(y){const s=g();function _(){s.update(s.admission_form_id,"present_address_info",s.present_address_info).then(()=>{s.update(s.admission_form_id,"permanent_address_info",s.permanent_address_info)})}return(u,t)=>(n(),l("form",{onSubmit:$(_,["prevent"]),class:"border p-2 my-2"},[e("div",de,[ie,o(s).loaders.present_address_info||o(s).loaders.permanent_address_info?(n(),l(b,{key:0},[i(p,{class:"w-full h-8",items:["50%","50%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]})],64)):(n(),l("div",ne,[e("div",le,[ae,e("div",null,[re,i(S,{modelValue:o(s).present_address_info.division_id,"onUpdate:modelValue":t[0]||(t[0]=d=>o(s).present_address_info.division_id=d),class:"w-full rounded-md",required:""},null,8,["modelValue"])]),e("div",null,[ue,i(P,{"division-id":o(s).present_address_info.division_id,modelValue:o(s).present_address_info.district_id,"onUpdate:modelValue":t[1]||(t[1]=d=>o(s).present_address_info.district_id=d),class:"w-full rounded-md",required:""},null,8,["division-id","modelValue"])]),e("div",null,[_e,i(N,{"district-id":o(s).present_address_info.district_id,modelValue:o(s).present_address_info.area_id,"onUpdate:modelValue":t[2]||(t[2]=d=>o(s).present_address_info.area_id=d),class:"w-full rounded-md",required:""},null,8,["district-id","modelValue"])]),e("div",null,[ce,a(e("input",{"onUpdate:modelValue":t[3]||(t[3]=d=>o(s).present_address_info.postoffice=d),class:"w-full rounded-md",type:"text",name:"currentPostOffice",placeholder:"Post office"},null,512),[[c,o(s).present_address_info.postoffice]])]),e("div",null,[me,a(e("input",{"onUpdate:modelValue":t[4]||(t[4]=d=>o(s).present_address_info.address=d),class:"w-full rounded-md",type:"text",name:"currentVillage",placeholder:"House & Road No, Village"},null,512),[[c,o(s).present_address_info.address]])])]),pe,e("div",fe,[e("div",he,[e("div",ve,[a(e("input",{"onUpdate:modelValue":t[5]||(t[5]=d=>o(s).permanent_address_info.is_same_address=d),class:"rounded",type:"checkbox",id:"sameAsCurrent",name:"sameAsCurrent"},null,512),[[D,o(s).permanent_address_info.is_same_address]]),be]),e("div",null,[ge,i(w,{"is-same-address":o(s).permanent_address_info.is_same_address},{placeholder:h(()=>[i(S,{modelValue:o(s).present_address_info.division_id,"onUpdate:modelValue":t[6]||(t[6]=d=>o(s).present_address_info.division_id=d),class:"w-full rounded-md",required:""},null,8,["modelValue"])]),default:h(()=>[i(S,{modelValue:o(s).permanent_address_info.division_id,"onUpdate:modelValue":t[7]||(t[7]=d=>o(s).permanent_address_info.division_id=d),class:"w-full rounded-md",required:""},null,8,["modelValue"])]),_:1},8,["is-same-address"])]),e("div",null,[ye,i(w,{"is-same-address":o(s).permanent_address_info.is_same_address},{placeholder:h(()=>[i(P,{"division-id":o(s).present_address_info.division_id,modelValue:o(s).present_address_info.district_id,"onUpdate:modelValue":t[8]||(t[8]=d=>o(s).present_address_info.district_id=d),class:"w-full rounded-md",required:""},null,8,["division-id","modelValue"])]),default:h(()=>[i(P,{"division-id":o(s).permanent_address_info.division_id,modelValue:o(s).permanent_address_info.district_id,"onUpdate:modelValue":t[9]||(t[9]=d=>o(s).permanent_address_info.district_id=d),class:"w-full rounded-md",required:""},null,8,["division-id","modelValue"])]),_:1},8,["is-same-address"])]),e("div",null,[xe,i(w,{"is-same-address":o(s).permanent_address_info.is_same_address},{placeholder:h(()=>[i(N,{"district-id":o(s).present_address_info.district_id,modelValue:o(s).present_address_info.area_id,"onUpdate:modelValue":t[10]||(t[10]=d=>o(s).present_address_info.area_id=d),class:"w-full rounded-md",required:""},null,8,["district-id","modelValue"])]),default:h(()=>[i(N,{"district-id":o(s).permanent_address_info.district_id,modelValue:o(s).permanent_address_info.area_id,"onUpdate:modelValue":t[11]||(t[11]=d=>o(s).permanent_address_info.area_id=d),class:"w-full rounded-md",required:""},null,8,["district-id","modelValue"])]),_:1},8,["is-same-address"])]),e("div",null,[$e,i(w,{"is-same-address":o(s).permanent_address_info.is_same_address},{placeholder:h(()=>[a(e("input",{"onUpdate:modelValue":t[12]||(t[12]=d=>o(s).present_address_info.postoffice=d),class:"w-full rounded-md",type:"text",name:"currentPostOffice",placeholder:"Post office"},null,512),[[c,o(s).present_address_info.postoffice]])]),default:h(()=>[a(e("input",{"onUpdate:modelValue":t[13]||(t[13]=d=>o(s).permanent_address_info.postoffice=d),class:"w-full rounded-md",type:"text",name:"currentPostOffice",placeholder:"Post office"},null,512),[[c,o(s).permanent_address_info.postoffice]])]),_:1},8,["is-same-address"])]),e("div",null,[we,i(w,{"is-same-address":o(s).permanent_address_info.is_same_address},{placeholder:h(()=>[a(e("input",{"onUpdate:modelValue":t[14]||(t[14]=d=>o(s).present_address_info.address=d),class:"w-full rounded-md",type:"text",name:"currentVillage",placeholder:"House & Road No, Village"},null,512),[[c,o(s).present_address_info.address]])]),default:h(()=>[a(e("input",{"onUpdate:modelValue":t[15]||(t[15]=d=>o(s).permanent_address_info.address=d),class:"w-full rounded-md",type:"text",name:"currentVillage",placeholder:"House & Road No, Village"},null,512),[[c,o(s).permanent_address_info.address]])]),_:1},8,["is-same-address"])])])])]))])],40,te))}},ke=["onSubmit"],Ue={class:"p-2"},Se=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Student Information"),e("button",{type:"submit",class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-save"})])],-1),Pe={key:1,class:"px-2 space-y-2"},Ne={class:"grid md:grid-cols-3 gap-4"},Fe={class:"col-span-2"},Ce=e("p",{class:"font-bold"},"Name",-1),qe=e("label",{class:"font-bold"},"Gender",-1),je={class:"flex gap-4"},Ae={class:"grid md:grid-cols-3 gap-4"},Re=e("p",{class:"font-bold"},"Date of Birth",-1),Be=e("p",{class:"font-bold"},"Birth Certificate No",-1),Ie=e("p",{class:"font-bold"},"Blood Group",-1),De=e("option",{value:""},"--Select--",-1),Me=["value"],Oe={__name:"BasicInfoForm",setup(y){const s=g(),_=T();function u(){s.update(s.admission_form_id,"basic_info",s.basic_info)}return(t,d)=>(n(),l("form",{onSubmit:$(u,["prevent"]),class:"border p-2 my-2"},[e("div",Ue,[Se,o(s).loaders.basic_info?(n(),l(b,{key:0},[i(p,{class:"w-full h-12",items:["66%","16%","16%"]}),i(p,{class:"w-full h-12",items:["33%","33%","33%"]})],64)):(n(),l("div",Pe,[e("div",Ne,[e("div",Fe,[Ce,a(e("input",{class:"w-full rounded-md",type:"text",name:"studentName",placeholder:"Student Name","onUpdate:modelValue":d[0]||(d[0]=r=>o(s).basic_info.name=r),required:""},null,512),[[c,o(s).basic_info.name]])]),e("div",null,[qe,e("div",je,[e("label",null,[a(e("input",{"onUpdate:modelValue":d[1]||(d[1]=r=>o(s).basic_info.gender=r),type:"radio",name:"gender",value:1,required:""},null,512),[[V,o(s).basic_info.gender]]),U(" Male ")]),e("label",null,[a(e("input",{"onUpdate:modelValue":d[2]||(d[2]=r=>o(s).basic_info.gender=r),type:"radio",name:"gender",value:2,required:""},null,512),[[V,o(s).basic_info.gender]]),U(" Female ")])])])]),e("div",Ae,[e("div",null,[Re,a(e("input",{"onUpdate:modelValue":d[3]||(d[3]=r=>o(s).basic_info.date_of_birth=r),class:"w-full rounded-md",type:"date",name:"dob",placeholder:"Date of Birth",required:""},null,512),[[c,o(s).basic_info.date_of_birth]])]),e("div",null,[Be,a(e("input",{"onUpdate:modelValue":d[4]||(d[4]=r=>o(s).basic_info.birth_certificate=r),class:"w-full rounded-md",type:"text",name:"birthCertificateNo",placeholder:"Birth Certificate No"},null,512),[[c,o(s).basic_info.birth_certificate]])]),e("div",null,[Ie,a(e("select",{"onUpdate:modelValue":d[5]||(d[5]=r=>o(s).basic_info.blood_group=r),class:"w-full rounded-md",name:"bloodGroup",placeholder:"Blood Group"},[De,(n(!0),l(b,null,C(o(_).blood_groups,r=>(n(),l("option",{key:r.id,value:r.id},x(r.name),9,Me))),128))],512),[[F,o(s).basic_info.blood_group]])])])]))])],40,ke))}},Ee=["onSubmit"],Ge={class:"p-2"},Te=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Expectations"),e("button",{type:"submit",class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-save"})])],-1),He={key:1,class:"grid grid-cols-1 md:grid-cols-2 gap-4 px-2"},Le=e("p",{class:"font-bold"},"Expected Class:",-1),ze=e("option",{value:""},"--Select--",-1),We=["value"],Je=e("p",{class:"font-bold"},"Expected Package:",-1),Ke=e("option",{value:""},"--Select--",-1),Qe=["value"],Xe={__name:"ExpectationInfoForm",setup(y){const s=g(),_=H(),u=L();async function t(){s.update(s.admission_form_id,"academic_class_id",s.academic_class_id).then(()=>{s.update(s.admission_form_id,"package_id",s.package_id)})}return I(()=>{u.index()}),M(()=>s.academic_session_id,()=>{s.academic_session_id&&_.indexBySessionId(s.academic_session_id)}),(d,r)=>(n(),l("form",{onSubmit:$(t,["prevent"]),class:"border p-2 my-2"},[e("div",Ge,[Te,o(s).loaders.previous_info?(n(),O(p,{key:0,class:"w-full h-12",items:["50%","50%"]})):(n(),l("div",He,[e("div",null,[Le,i(k,{"is-loading":o(_).loader},{default:h(()=>[a(e("select",{"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).academic_class_id=m),class:"w-full rounded-md",name:"expectedClass",required:""},[ze,(n(!0),l(b,null,C(o(_).academic_classes,m=>{var v;return n(),l("option",{key:m.id,value:m.id},x((v=m==null?void 0:m.department_class)==null?void 0:v.name),9,We)}),128))],512),[[F,o(s).academic_class_id]])]),_:1},8,["is-loading"])]),e("div",null,[Je,i(k,{"is-loading":o(u).loader},{default:h(()=>[a(e("select",{"onUpdate:modelValue":r[1]||(r[1]=m=>o(s).package_id=m),class:"w-full rounded-md",name:"expectedPackage"},[Ke,(n(!0),l(b,null,C(o(u).packages,m=>(n(),l("option",{key:m.id,value:m.id},x(m.name),9,Qe))),128))],512),[[F,o(s).package_id]])]),_:1},8,["is-loading"])])]))])],40,Ee))}},Ye=["onSubmit"],Ze={class:"p-2"},es=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Guardian Information"),e("button",{type:"submit",class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-save"})])],-1),ss={class:"md:flex gap-4 px-2 py-2"},os=e("p",{class:"font-bold"},"Who is the Guardian?",-1),ts={class:"grid grid-cols-3 gap-4"},ds=e("label",{class:"pl-2",for:"father"},"Father",-1),is=e("label",{class:"pl-2",for:"mother"},"Mother",-1),ns=e("label",{class:"pl-2",for:"other"},"Other",-1),ls={class:"grid grid-cols-1 md:grid-cols-3 gap-4 px-2"},as=e("p",{class:"font-bold"},"Name:",-1),rs={key:0,class:"w-full h-[42px] rounded-md bg-gray-200 flex justify-start items-center py-1 px-3 overflow-hidden leading-none text-gray-400"},us=e("p",{class:"font-bold"},"Relation:",-1),_s={key:0,class:"w-full h-[42px] rounded-md bg-gray-200 flex justify-start items-center py-1 px-3 overflow-hidden leading-none text-gray-400"},cs=e("p",{class:"font-bold"},"Phone:",-1),ms={__name:"GuardianInfoForm",setup(y){const s=g();function _(){s.update(s.admission_form_id,"guardian_info",s.guardian_info)}return(u,t)=>{var d,r,m,v;return n(),l("form",{onSubmit:$(_,["prevent"]),class:"border p-2 my-2"},[e("div",Ze,[es,o(s).loaders.guardian_info?(n(),l(b,{key:0},[i(p,{class:"w-full h-12",items:["33%","10%","10%","10%"]}),i(p,{class:"w-full h-12",items:["33%","33%","33%"]})],64)):(n(),l(b,{key:1},[e("div",ss,[os,e("div",ts,[e("div",null,[a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=f=>o(s).guardian_info.type=f),type:"radio",id:"father",name:"parent",value:1,required:""},null,512),[[V,o(s).guardian_info.type]]),ds]),e("div",null,[a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=f=>o(s).guardian_info.type=f),type:"radio",id:"mother",name:"parent",value:2,required:""},null,512),[[V,o(s).guardian_info.type]]),is]),e("div",null,[a(e("input",{"onUpdate:modelValue":t[2]||(t[2]=f=>o(s).guardian_info.type=f),type:"radio",id:"other",name:"parent",value:3,required:""},null,512),[[V,o(s).guardian_info.type]]),ns])])]),e("div",ls,[e("div",null,[as,[1,2].includes(o(s).guardian_info.type)?(n(),l("div",rs,x(o(s).guardian_info.type===2?(r=(d=o(s))==null?void 0:d.mother_info)==null?void 0:r.name:(v=(m=o(s))==null?void 0:m.father_info)==null?void 0:v.name),1)):a((n(),l("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=f=>o(s).guardian_info.name=f),class:"w-full rounded-md",type:"text",name:"guardianName",placeholder:"Guardian's Name",required:""},null,512)),[[c,o(s).guardian_info.name]])]),e("div",null,[us,[1,2].includes(o(s).guardian_info.type)?(n(),l("div",_s,x(o(s).guardian_info.type===2?"Mother":"Father"),1)):a((n(),l("input",{key:1,"onUpdate:modelValue":t[4]||(t[4]=f=>o(s).guardian_info.relation=f),class:"w-full rounded-md",type:"text",name:"relation",placeholder:"Relation",required:""},null,512)),[[c,o(s).guardian_info.relation]])]),e("div",null,[cs,a(e("input",{"onUpdate:modelValue":t[5]||(t[5]=f=>o(s).guardian_info.phone=f),class:"w-full rounded-md",type:"text",name:"guardianPhone",placeholder:"Guardian's Phone",required:""},null,512),[[c,o(s).guardian_info.phone]])])])],64))])],40,Ye)}}},ps=["onSubmit"],fs={class:"p-2"},hs=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Parental Information"),e("button",{type:"submit",class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-save"})])],-1),vs={key:1,class:"grid grid-cols-1 md:grid-cols-2 gap-2 px-2"},bs={class:"grid grid-cols-1 space-y-2"},gs=e("p",{class:"font-bold"},"Father's Name:",-1),ys=e("p",{class:"font-bold"},"Occupation:",-1),xs=e("hr",{class:"md:hidden"},null,-1),$s={class:"md:border-l md:pl-2"},ws={class:"grid grid-cols-1 space-y-2"},Vs=e("p",{class:"font-bold"},"Mother's Name:",-1),ks=e("p",{class:"font-bold"},"Occupation:",-1),Us={__name:"ParentalInfoForm",setup(y){const s=g();function _(){s.update(s.admission_form_id,"father_info",s.father_info).then(()=>{s.update(s.admission_form_id,"mother_info",s.mother_info)})}return(u,t)=>(n(),l("form",{onSubmit:$(_,["prevent"]),class:"border p-2 my-2"},[e("div",fs,[hs,o(s).loaders.father_info||o(s).loaders.mother_info?(n(),l(b,{key:0},[i(p,{class:"w-full h-12",items:["50%","50%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]}),i(p,{class:"w-full h-12",items:["50%","50%"]})],64)):(n(),l("div",vs,[e("div",bs,[e("div",null,[gs,a(e("input",{class:"w-full rounded-md",type:"text",name:"fatherName",placeholder:"Father's Name","onUpdate:modelValue":t[0]||(t[0]=d=>o(s).father_info.name=d),required:""},null,512),[[c,o(s).father_info.name]])]),B("",!0),e("div",null,[ys,a(e("input",{class:"w-full rounded-md",type:"text",name:"fatherOccupation",placeholder:"Father's Occupation","onUpdate:modelValue":t[2]||(t[2]=d=>o(s).father_info.occupation=d)},null,512),[[c,o(s).father_info.occupation]])])]),xs,e("div",$s,[e("div",ws,[e("div",null,[Vs,a(e("input",{class:"w-full rounded-md",type:"text",name:"motherName",placeholder:"Mother's Name","onUpdate:modelValue":t[3]||(t[3]=d=>o(s).mother_info.name=d),required:""},null,512),[[c,o(s).mother_info.name]])]),B("",!0),e("div",null,[ks,a(e("input",{class:"w-full rounded-md",type:"text",name:"motherOccupation",placeholder:"Mother's Occupation","onUpdate:modelValue":t[5]||(t[5]=d=>o(s).mother_info.occupation=d)},null,512),[[c,o(s).mother_info.occupation]])])])])]))])],40,ps))}},Ss={class:"text-center"},Ps={class:"flex items-center justify-center"},Ns={for:"studentPhoto",class:"cursor-pointer h-28 w-28 rounded-md border-2 overflow-hidden"},Fs=["src"],Cs=["src"],qs={key:1,class:"h-28 w-28 p-2 bg-gray-100 rounded-md flex items-center justify-center"},js=e("div",{class:"flex flex-col gap-2 text-gray-500 hover:text-cyan-600"},[e("i",{class:"fad fa-file-upload text-xl"}),e("h4",{class:""},"Upload Photo")],-1),As=[js],Rs={key:0,class:"w-28 flex justify-center items-center gap-2 mt-2 text-sm pb-2"},Bs={key:0,class:"w-full px-3 text-center pt-0.5 border border-gray-400 text-gray-400 rounded"},Is={key:1,for:"studentPhoto",class:"w-28 block text-sm font-medium text-gray-700 pt-1.5 pb-2 cursor-pointer"},Ds={__name:"StudentPhotoForm",setup(y){const s=g(),_=E("");function u(r){const m=r.target.files[0],v=new FileReader;return v.readAsDataURL(m),v.onload=f=>{_.value=f.target.result},r.target.value=""}function t(){_.value=""}function d(){console.log(_.value)}return(r,m)=>{var v,f,q,j,A,R;return n(),l("div",Ss,[e("div",Ps,[e("label",Ns,[e("input",{type:"file",id:"studentPhoto",class:"hidden",onChange:u},null,32),_.value?(n(),l("img",{key:0,src:_.value,alt:"Logo With Name",class:"h-28 w-28 object-cover"},null,8,Fs)):(n(),l(b,{key:1},[(f=(v=o(s))==null?void 0:v.student_photo)!=null&&f.link?(n(),l("img",{key:0,src:(j=(q=o(s))==null?void 0:q.student_photo)==null?void 0:j.link,alt:"Logo With Name",class:"h-28 w-28 object-cover"},null,8,Cs)):(n(),l("div",qs,As))],64))])]),_.value?(n(),l("div",Rs,[(R=(A=o(s))==null?void 0:A.loaders)!=null&&R.student_photo?(n(),l(b,{key:1},[e("button",{type:"button",class:"w-20 text-center pt-0.5 border border-gray-600 text-gray-600 rounded",onClick:t}," Cancel "),e("button",{type:"button",class:"w-20 text-center pt-0.5 border border-green-600 bg-green-600 text-white rounded",onClick:d}," Save ")],64)):(n(),l("div",Bs," Uploading... "))])):(n(),l("label",Is," Student Photo "))])}}},Ms={class:"flex items-center justify-center mt-5"},Os={class:"w-full max-w-3xl md:p-8 p-4 bg-white rounded shadow-md"},Es=e("div",{class:"text-center"},[e("h1",{class:"text-3xl font-bold text-cyan-700"},"Admission Form")],-1),Gs={class:"flex justify-between items-center flex-col md:flex-row"},Ts={class:"flex flex-col gap-1 py-2"},Hs={class:"flex gap-2 items-center"},Ls=e("p",{class:"font-bold"},"Date:",-1),zs={class:"flex gap-2 items-center"},Ws=e("label",{class:"font-bold"},"Admission Type:",-1),Js={class:"flex gap-4"},Ks=["checked"],Qs=["checked"],Xs={class:"flex justify-center gap-4 mt-4 print:hidden"},Ys={key:0,type:"submit",class:"btn-2"},Zs={key:1,class:"text-red-500"},lo={__name:"EditPage",setup(y){const s=G(),{admissionFormId:_}=s.params,u=g();I(()=>{u.show(_)});function t(){return!!(u.basic_info&&u.father_info&&u.mother_info&&u.guardian_info&&u.present_address_info&&u.permanent_address_info&&u.academic_class_id&&u.package_id)}return(d,r)=>(n(),l("form",null,[e("div",Ms,[e("div",Os,[Es,e("div",Gs,[e("div",Ts,[e("div",Hs,[Ls,i(k,{class:"w-24 h-8","is-loading":o(u).loader},{default:h(()=>[e("p",null,x(o(u).application_date),1)]),_:1},8,["is-loading"])]),e("div",zs,[Ws,i(k,{class:"w-40","is-loading":o(u).loader},{fallback:h(()=>[i(p,{class:"h-8",items:["50%","50%"]})]),default:h(()=>[e("div",Js,[e("label",null,[e("input",{checked:o(u).admission_type==="new",type:"radio",name:"admissionType",value:"new"},null,8,Ks),U(" New ")]),e("label",null,[e("input",{checked:o(u).admission_type==="old",type:"radio",name:"admissionType",value:"old",disabled:""},null,8,Qs),U(" Old ")])])]),_:1},8,["is-loading"])])]),i(Ds)]),i(Oe),i(Us),i(ms),i(Ve),i(oe),i(Xe),e("div",Xs,[t()?(n(),l("button",Ys,"Next   →")):(n(),l("p",Zs,"Please fill the form"))])])])]))}};export{lo as default};
