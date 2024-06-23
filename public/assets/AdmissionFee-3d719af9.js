import{I as C,r,i as V,J as S,y as A,E as D,j as E,o as n,b as c,e as t,q as I,g as v,w as f,f as i,p as j,G as R,d as m,F as U,l as $,t as o,x as q,v as F}from"./index-fc7042a4.js";import{_ as y}from"./PulseAnimatedWrapper-bb3bac66.js";import"./bundle-mjs-3a7afad5.js";const G=C("admission-fee",()=>{const u=r(!0),k=r(!1),b=r(""),p=r(""),e=r(""),g=r(""),l=r({}),x=r([]),s=r([]),h=V(()=>x.value.reduce((_,d)=>_+d.amount-(l.value[d.id]||0),0)),M=V(()=>s.value.reduce((_,d)=>_+d.amount-(l.value[d.id]||0),0));async function N(_){u.value=!0;try{const d=await S.get(`/api/adm/admission-forms/${_}/admission-fee`),{data:a={}}=d;b.value=a.admission_form_id,p.value=a.student_name,e.value=a.academic_class_name,g.value=a.package_name,l.value=a.concessions??{},s.value=a.monthly_fees??[],x.value=a.annual_fees??[]}catch(d){console.log(d)}u.value=!1}async function B(_,d={}){u.value=!0;try{const a=await S.put(`/api/adm/admission-forms/${_}/admission-fee`,d),{data:w={}}=a;l.value=w.concessions??{},s.value=w.monthly_fees??[],x.value=w.annual_fees??[]}catch(a){console.log(a)}u.value=!1}return{loader:u,editable:k,admission_form_id:b,student_name:p,academic_class_name:e,package_name:g,concessions:l,annual_fees:x,monthly_fees:s,annual_total:h,monthly_total:M,show:N,update:B}}),J={class:"flex items-center justify-center mt-5"},L={class:"w-full max-w-3xl rounded border bg-white p-4 shadow print:shadow-none print:border-0"},T=["onSubmit"],z=t("h2",{class:"mt-4 mb-2 text-center text-2xl font-bold text-brand-600 print:text-black"}," প্রদেয় ফি নির্ধারণ ",-1),H={class:"grid gap-x-2 print:grid-cols-3 md:grid-cols-3"},K={class:"col-span-2"},O={class:"flex items-center gap-2"},P=t("div",{class:"text-gray-500 print:text-black"},"শিক্ষার্থীর নাম:",-1),Q={class:"font-semibold text-gray-700 print:text-black"},W={class:"flex items-center gap-2"},X=t("div",{class:"text-gray-500 print:text-black"},"ফরম নাম্বার:",-1),Y={class:"font-semibold text-gray-700 print:text-black"},Z={class:"col-span-2"},tt={class:"flex items-center gap-2"},st=t("div",{class:"text-gray-500 print:text-black"},"ভর্তিচ্ছু বিভাগ/শ্রেণী:",-1),et={class:"font-semibold text-gray-700 print:text-black"},it={class:"flex items-center gap-2"},ot=t("div",{class:"text-gray-500 print:text-black"},"শিক্ষার্থীর ধরন:",-1),dt={class:"font-semibold text-gray-700 print:text-black"},at=t("hr",{class:"print:hidden"},null,-1),nt={class:"flex items-center justify-start print:hidden"},ct={class:"flex items-center gap-2"},rt=t("span",{class:"-mb-0.5"},"ছাড় পরিবর্তন চালু করুন",-1),lt={class:"grid gap-4 print:grid-cols-2 md:grid-cols-2"},pt={class:"flex flex-col"},xt={class:"overflow-x-auto border print:border-black"},_t={class:"inline-block min-w-full align-middle"},ut={class:"overflow-hidden"},mt={class:"min-w-full table-fixed divide-y divide-gray-200 print:divide-black"},ht={class:"bg-gray-300"},bt=t("th",{class:"py-2 px-2 text-left text-xs font-bold uppercase tracking-wider text-gray-700 print:text-black md:text-sm"}," ভর্তিকালীন প্রদেয় ",-1),gt=t("th",{class:"py-2 px-2 text-right text-xs font-bold uppercase tracking-wider text-gray-700 print:text-black md:text-sm"}," নির্ধারিত টাকা ",-1),vt={key:0,class:"py-2 pr-3 text-right text-xs font-bold uppercase tracking-wider text-gray-700 print:hidden print:text-black md:text-sm"},ft={class:"divide-y divide-gray-200 bg-white print:divide-black"},yt={class:"whitespace-nowrap py-2 px-2 text-left text-xs font-medium text-gray-900 md:text-sm"},kt={class:"whitespace-nowrap py-2 px-2 text-right text-xs font-medium text-gray-900 md:text-sm"},wt={class:"flex justify-end gap-2"},jt={key:0,class:"text-gray-400 print:hidden"},Vt={key:0,class:"pr-1.5 print:hidden"},St={class:"flex items-center justify-end"},Ut=["onUpdate:modelValue"],$t={class:"print:text-black"},Ft={colspan:"2",class:"py-2 px-2 text-right text-xs font-bold uppercase tracking-wider text-gray-700 print:text-black md:text-sm"},Mt={class:"flex justify-end gap-2"},Nt=t("span",null,"মোট: ",-1),Bt={class:"flex flex-col"},Ct={class:"overflow-x-auto border print:border-black"},At={class:"inline-block min-w-full align-middle"},Dt={class:"overflow-hidden"},Et={class:"min-w-full table-fixed divide-y divide-gray-200 print:divide-black"},It={class:"bg-gray-300"},Rt=t("th",{class:"py-2 px-2 text-left text-xs font-bold uppercase tracking-wider text-gray-700 print:text-black md:text-sm"}," মাসিক প্রদেয় ",-1),qt=t("th",{class:"py-2 px-2 text-right text-xs font-bold uppercase tracking-wider text-gray-700 print:text-black md:text-sm"}," নির্ধারিত টাকা ",-1),Gt={key:0,class:"py-2 pr-3 text-right text-xs font-bold uppercase tracking-wider text-gray-700 print:hidden print:text-black md:text-sm"},Jt={class:"divide-y divide-gray-200 bg-white print:divide-black"},Lt={class:"whitespace-nowrap py-2 px-2 text-left text-xs font-medium text-gray-900 md:text-sm"},Tt={class:"whitespace-nowrap py-2 px-2 text-right text-xs font-medium text-gray-900 md:text-sm"},zt={class:"flex justify-end gap-2"},Ht={key:0,class:"text-gray-400 print:hidden"},Kt={key:0,class:"pr-1.5 print:hidden"},Ot={class:"flex items-center justify-end"},Pt=["onUpdate:modelValue"],Qt={class:"print:text-black"},Wt={colspan:"2",class:"py-2 px-2 text-right text-xs font-bold uppercase tracking-wider text-gray-700 print:text-black md:text-sm"},Xt={class:"flex justify-end gap-2"},Yt=t("span",null,"মোট: ",-1),Zt=t("hr",{class:"print:hidden"},null,-1),ts={class:"flex items-center justify-between print:hidden"},ss=["href"],es=t("button",{type:"submit",class:"btn-2"},"পরবর্তী ধাপ →",-1),is=q('<div class="hidden print:block"><h3 class="mt-10 hidden text-center text-2xl font-bold text-brand-600 print:block print:text-black"> অভিভাবকের অঙ্গিকার </h3><div class="whitespace-pre-wrap text-justify"> এই মর্মে অঙ্গিকার করছি যে, <br> ১. আমি অত্র মাদ্ররাসার যাবতীয় নিয়ম-কানুনের প্রতি শ্রদ্ধাশীল থাকব। <br> ২. আমার সন্তানকে যথা সময়ে মাদরাসায় প্রেরণ করব। <br> ৩. নিয়মিত আমার সন্তানের পড়াশোনার খোঁজ-খবর রাখব। <br> ৪. উপরে বর্ণিত ফি সমূহ যথাসময়ে পরিশোধ করব। <br> ৫. মাদরাসার ভবিষ্যৎ নিয়ম-কানুনগুলোর প্রতি বিনা বাক্যে শ্রদ্ধাশীল থাকব। <br><br> জনাব, উপরে বর্ণিত সকল শর্ত মেনে নিয়ে আমি আমার সন্তানকে আপনার প্রতিষ্ঠানে ভর্তি করে নেওয়ার আবেদন করছি। আশা করি আমার আবেদন মহোদয় সমীপে গৃহীত হবে। </div><div class="flex justify-between"><div class="pt-12"><div class="flex items-center gap-2"><div class="text-gray-500 print:text-black">অভিভাবকের নাম:</div><div class="font-semibold text-gray-700 print:text-black"></div></div></div><div class="pt-12"><div class="flex items-center gap-2"><div class="text-gray-500 print:text-black">অভিভাবকের স্বাক্ষর</div><div class="font-semibold text-gray-700 print:text-black"></div></div></div></div></div>',1),ns={__name:"AdmissionFee",setup(u){const k=A(),b=D(),{admissionFormId:p}=b.params,e=G();function g(){e.update(p,{concessions:e.concessions}).then(l=>(console.log(l),k.push(`/adm/application-form/${p}/admission-completion`)))}return E(()=>{e.show(p)}),(l,x)=>(n(),c("div",J,[t("div",L,[t("form",{class:"space-y-4",onSubmit:I(g,["prevent"])},[z,t("div",H,[t("div",K,[t("div",O,[P,v(y,{loader:i(e).loader,class:"w-40"},{default:f(()=>[t("div",Q,o(i(e).student_name),1)]),_:1},8,["loader"])])]),t("div",null,[t("div",W,[X,v(y,{loader:i(e).loader},{default:f(()=>[t("div",Y,o(i(e).admission_form_id),1)]),_:1},8,["loader"])])]),t("div",Z,[t("div",tt,[st,v(y,{loader:i(e).loader,class:"w-28"},{default:f(()=>[t("div",et,o(i(e).academic_class_name),1)]),_:1},8,["loader"])])]),t("div",null,[t("div",it,[ot,v(y,{loader:i(e).loader},{default:f(()=>[t("div",dt,o(i(e).package_name),1)]),_:1},8,["loader"])])])]),at,t("div",nt,[t("label",ct,[j(t("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",type:"checkbox","onUpdate:modelValue":x[0]||(x[0]=s=>i(e).editable=s)},null,512),[[R,i(e).editable]]),rt])]),t("div",lt,[t("div",pt,[t("div",xt,[t("div",_t,[t("div",ut,[t("table",mt,[t("thead",ht,[t("tr",null,[bt,gt,i(e).editable?(n(),c("th",vt," ছাড় ")):m("",!0)])]),t("tbody",ft,[(n(!0),c(U,null,$(i(e).annual_fees,s=>(n(),c("tr",{key:s.id,class:"hover:bg-gray-100"},[t("td",yt,o(s==null?void 0:s.name),1),t("td",kt,[t("div",wt,[i(e).concessions[s.id]?(n(),c("del",jt,o(s==null?void 0:s.amount),1)):m("",!0),t("span",null,o((s==null?void 0:s.amount)-(i(e).concessions[s.id]||0)),1)])]),i(e).editable?(n(),c("td",Vt,[t("div",St,[j(t("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block w-14 px-1 py-0.5 text-right",type:"number","onUpdate:modelValue":h=>i(e).concessions[s.id]=h},null,8,Ut),[[F,i(e).concessions[s.id]]])])])):m("",!0)]))),128)),t("tr",$t,[t("th",Ft,[t("div",Mt,[Nt,t("span",null,o(i(e).annual_total),1)])])])])])])])])]),t("div",Bt,[t("div",Ct,[t("div",At,[t("div",Dt,[t("table",Et,[t("thead",It,[t("tr",null,[Rt,qt,i(e).editable?(n(),c("th",Gt," ছাড় ")):m("",!0)])]),t("tbody",Jt,[(n(!0),c(U,null,$(i(e).monthly_fees,s=>(n(),c("tr",{key:s.id,class:"hover:bg-gray-100"},[t("td",Lt,o(s==null?void 0:s.name),1),t("td",Tt,[t("div",zt,[i(e).concessions[s.id]?(n(),c("del",Ht,o(s==null?void 0:s.amount),1)):m("",!0),t("span",null,o((s==null?void 0:s.amount)-(i(e).concessions[s.id]||0)),1)])]),i(e).editable?(n(),c("td",Kt,[t("div",Ot,[j(t("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block w-14 px-1 py-0.5 text-right",type:"number","onUpdate:modelValue":h=>i(e).concessions[s.id]=h},null,8,Pt),[[F,i(e).concessions[s.id]]])])])):m("",!0)]))),128)),t("tr",Qt,[t("th",Wt,[t("div",Xt,[Yt,t("span",null,o(i(e).monthly_total),1)])])])])])])])])])]),Zt,t("div",ts,[t("a",{class:"btn-3",href:`/adm/application-form/${i(p)}/admission-test`}," ← পূর্ববর্তী ধাপ ",8,ss),es])],40,T),is])]))}};export{ns as default};
