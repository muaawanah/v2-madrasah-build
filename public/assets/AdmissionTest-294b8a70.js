import{G as y,r as c,H as b,y as w,B as k,j,o as $,b as q,e as s,q as C,g as _,w as g,f as t,p as x,v as S,z as B,t as f}from"./index-d23e54bc.js";import{_ as M}from"./AuthUserNameAsText-20dfc199.js";import{_ as h}from"./PulseAnimatedWrapper-746a8ef6.js";import"./bundle-mjs-3a7afad5.js";const T=y("admission-test",()=>{const d=c(!0),u=c(""),m=c(""),n=c(""),e=c(""),r=c({admission_test_result:"",is_eligible:"",is_attached:"",is_correct:"",teacher_id:""});async function p(i){d.value=!0;try{const l=await b.get(`/api/adm/admission-forms/${i}/admission-test`),{data:a={}}=l;u.value=a.admission_form_id,m.value=a.student_name,n.value=a.academic_class_name,e.value=a.package_name,r.value={admission_test_result:a.admission_test.admission_test_result||"",is_eligible:a.admission_test.is_eligible??"",is_attached:a.admission_test.is_attached??"",is_correct:a.admission_test.is_correct??"",teacher_id:a.admission_test.teacher_id||""}}catch(l){console.log(l)}d.value=!1}async function o(i,l={}){d.value=!0;try{const a=await b.put(`/api/adm/admission-forms/${i}/admission-test`,l),{data:v={}}=a;r.value=v}catch(a){console.log(a)}d.value=!1}return{loader:d,admission_form_id:u,student_name:m,academic_class_name:n,package_name:e,admission_test:r,show:p,update:o}}),V={class:"flex items-center justify-center mt-5"},A={class:"w-full max-w-3xl rounded border bg-white p-4 shadow"},D=["onSubmit"],N=s("h2",{class:"mt-4 mb-2 text-center text-2xl font-bold text-brand-600 print:text-black"}," ভর্তির যোগ্যতা যাচাই ",-1),R={class:"grid gap-x-2 print:grid-cols-3 md:grid-cols-3"},U={class:"col-span-2"},z={class:"flex items-center gap-2"},E=s("div",{class:"text-gray-500 print:text-black"},"শিক্ষার্থীর নাম:",-1),F={class:"font-semibold text-gray-700 print:text-black"},G={class:"flex items-center gap-2"},H=s("div",{class:"text-gray-500 print:text-black"},"ফরম নাম্বার:",-1),I={class:"font-semibold text-gray-700 print:text-black"},J={class:"col-span-2"},K={class:"flex items-center gap-2"},L=s("div",{class:"text-gray-500 print:text-black"},"ভর্তিচ্ছু বিভাগ/শ্রেণী:",-1),O={class:"font-semibold text-gray-700 print:text-black"},P={class:"flex items-center gap-2"},Q=s("div",{class:"text-gray-500 print:text-black"},"শিক্ষার্থীর ধরন:",-1),W={class:"font-semibold text-gray-700 print:text-black"},X=s("hr",null,null,-1),Y={class:"grid gap-x-2 gap-y-4 md:grid-cols-2"},Z={class:"relative flex flex-col-reverse w-full"},ss=s("label",{class:"block font-bold text-sm md:text-base text-gray-500 bg-white px-0.5 line-clamp-1"},[s("span",null,"ভর্তি পরীক্ষা / বার্ষিক পরীক্ষায় প্রাপ্ত ফলাফল")],-1),es={class:"relative flex flex-col-reverse flex-1"},ts=s("option",{value:""},"-- নির্বাচন করুন --",-1),os=[ts],is=s("label",{class:"block font-bold text-sm md:text-base text-gray-500 bg-white px-0.5 line-clamp-1"},[s("span",null,"পরীক্ষক:")],-1),as={class:"col-span-full space-y-3 rounded-md border border-dashed border-gray-300 p-3"},ns={class:"flex items-center justify-between gap-4"},ds=s("div",{class:"shrink grow text-sm md:text-base"}," এই আবেদনকারী অত্র প্রতিষ্ঠানে ভর্তি হওয়ার যোগ্য কি না? ",-1),cs={class:"flex shrink-0 grow-0 flex-col items-center justify-center gap-0.5 md:flex-row md:gap-4"},rs={class:"flex items-center justify-center gap-2"},ls=["checked"],_s=s("span",{class:"w-5"},"হ্যাঁ",-1),us={class:"flex items-center justify-center gap-2"},ms=["checked"],gs=s("span",{class:"w-5"},"না",-1),fs={class:"flex items-center justify-between gap-4"},hs=s("div",{class:"shrink grow text-sm md:text-base"}," আবেদনের সাথে প্রয়োজনীয় সকল কাগজপত্র সংযুক্ত করেছে কি না? ",-1),ps={class:"flex shrink-0 grow-0 flex-col items-center justify-center gap-0.5 md:flex-row md:gap-4"},bs={class:"flex items-center justify-center gap-2"},xs=["checked"],vs=s("span",{class:"w-5"},"হ্যাঁ",-1),ys={class:"flex items-center justify-center gap-2"},ws=["checked"],ks=s("span",{class:"w-5"},"না",-1),js={class:"flex items-center justify-between gap-4"},$s=s("div",{class:"shrink grow text-sm md:text-base"}," প্রদিত সকল তথ্য সঠিক ও বিশ্বাসযোগ্য কি না? ",-1),qs={class:"flex shrink-0 grow-0 flex-col items-center justify-center gap-0.5 md:flex-row md:gap-4"},Cs={class:"flex items-center justify-center gap-2"},Ss=["checked"],Bs=s("span",{class:"w-5"},"হ্যাঁ",-1),Ms={class:"flex items-center justify-center gap-2"},Ts=["checked"],Vs=s("span",{class:"w-5"},"না",-1),As={class:"col-span-full space-y-1 rounded-md border border-dashed border-gray-300 p-3"},Ds=s("label",{class:"flex items-center gap-2"},[s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",type:"checkbox",name:"declaration",required:"",value:"1"}),s("span",null," আমি এই আবেদনকারীর দেওয়া সমস্ত তথ্য যাচাই করেছি ")],-1),Ns={class:"flex items-center gap-2"},Rs=s("div",{class:"text-gray-500 print:text-black"},"যাচাইকারী:",-1),Us=s("hr",null,null,-1),zs={class:"flex items-center justify-between"},Es=["href"],Fs=s("button",{type:"submit",class:"btn-2"},"পরবর্তী ধাপ →",-1),Ks={__name:"AdmissionTest",setup(d){const u=w(),m=k(),{admissionFormId:n}=m.params,e=T();function r(){e.update(n,{admission_test:e.admission_test}).then(()=>u.push(`/adm/application-form/${n}/admission-fee`))}return j(()=>{e.show(n)}),(p,o)=>($(),q("div",V,[s("div",A,[s("form",{class:"space-y-4",onSubmit:C(r,["prevent"])},[N,s("div",R,[s("div",U,[s("div",z,[E,_(h,{loader:t(e).loader},{default:g(()=>[s("div",F,f(t(e).student_name),1)]),_:1},8,["loader"])])]),s("div",null,[s("div",G,[H,_(h,{loader:t(e).loader},{default:g(()=>[s("div",I,f(t(e).admission_form_id),1)]),_:1},8,["loader"])])]),s("div",J,[s("div",K,[L,_(h,{loader:t(e).loader},{default:g(()=>[s("div",O,f(t(e).academic_class_name),1)]),_:1},8,["loader"])])]),s("div",null,[s("div",P,[Q,_(h,{loader:t(e).loader},{default:g(()=>[s("div",W,f(t(e).package_name),1)]),_:1},8,["loader"])])])]),X,s("div",Y,[s("div",Z,[x(s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block w-full",type:"text","onUpdate:modelValue":o[0]||(o[0]=i=>t(e).admission_test.admission_test_result=i)},null,512),[[S,t(e).admission_test.admission_test_result]]),ss]),s("div",es,[x(s("select",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block w-full","onUpdate:modelValue":o[1]||(o[1]=i=>t(e).admission_test.teacher_id=i)},os,512),[[B,t(e).admission_test.teacher_id]]),is]),s("div",as,[s("div",ns,[ds,s("div",cs,[s("label",rs,[s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",type:"radio",name:"eligible",required:"",value:1,checked:t(e).admission_test.is_eligible===1,onChange:o[2]||(o[2]=i=>t(e).admission_test.is_eligible=1)},null,40,ls),_s]),s("label",us,[s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",type:"radio",name:"eligible",required:"",value:0,checked:t(e).admission_test.is_eligible===0,onChange:o[3]||(o[3]=i=>t(e).admission_test.is_eligible=0)},null,40,ms),gs])])]),s("div",fs,[hs,s("div",ps,[s("label",bs,[s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",type:"radio",name:"attached",required:"",value:1,checked:t(e).admission_test.is_attached===1,onChange:o[4]||(o[4]=i=>t(e).admission_test.is_attached=1)},null,40,xs),vs]),s("label",ys,[s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",type:"radio",name:"attached",required:"",value:0,checked:t(e).admission_test.is_attached===0,onChange:o[5]||(o[5]=i=>t(e).admission_test.is_attached=0)},null,40,ws),ks])])]),s("div",js,[$s,s("div",qs,[s("label",Cs,[s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",type:"radio",name:"correct",required:"",value:1,checked:t(e).admission_test.is_correct===1,onChange:o[6]||(o[6]=i=>t(e).admission_test.is_correct=1)},null,40,Ss),Bs]),s("label",Ms,[s("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",type:"radio",name:"correct",required:"",value:0,checked:t(e).admission_test.is_correct===0,onChange:o[7]||(o[7]=i=>t(e).admission_test.is_correct=0)},null,40,Ts),Vs])])])]),s("div",As,[Ds,s("div",null,[s("div",Ns,[Rs,_(M)])])])]),Us,s("div",zs,[s("a",{class:"btn-3",href:`/adm/application-form/${t(n)}`}," ← পূর্ববর্তী ধাপ ",8,Es),Fs])],40,D)])]))}};export{Ks as default};
