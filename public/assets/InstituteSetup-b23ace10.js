import{u as y,e as m,r as j,o as s,c as l,i as L,h as N,a as e,f as v,v as b,t as n,j as I,s as C,g as i,b as P,d as c,p as k,k as $}from"./index-e021f983.js";const V=["onSubmit"],S={class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},B=e("h3",{class:"text-lg font-semibold"},"Intitute Name",-1),D={key:0,type:"submit",value:"save",class:"bg-sky-500 px-2 py-0.5 text-white text-center cursor-pointer"},U=e("i",{class:"fad fa-edit"},null,-1),T=[U],z={key:1,class:"grid gap-1"},A={class:"flex items-center gap-1"},E=e("strong",null,"Name Bangla:",-1),R={class:"flex items-center gap-1"},q=e("strong",null,"Name English:",-1),F={class:"flex items-center gap-1"},H=e("strong",null,"Name Arabic:",-1),M={key:2,class:"flex flex-col md:flex-row px-2 justify-between gap-4"},W={class:"grid gap-1"},Y={class:"flex items-center gap-1"},O=e("strong",null,"Name Bangla:",-1),G={class:"flex items-center gap-1"},J=e("strong",null,"Name English:",-1),K={class:"flex items-center gap-1"},Q=e("strong",null,"Name Arabic:",-1),X={__name:"InstituteNameForm",props:{instituteName:{type:Object,default:{}}},setup(p){var _,g,x;const f=y(),o=p,t=m({bengali:((_=o==null?void 0:o.instituteName)==null?void 0:_.bengali)||"",english:((g=o==null?void 0:o.instituteName)==null?void 0:g.english)||"",arabic:((x=o==null?void 0:o.instituteName)==null?void 0:x.arabic)||""}),a=m(!1),d=m(!1);function u(){d.value=!0,f.updateInstituteName(t.value).then(()=>{a.value=!1,d.value=!1})}return(De,r)=>{const w=j("LoaderComponent");return s(),l("form",{onSubmit:I(u,["prevent"]),class:"border p-2 relative"},[d.value?(s(),L(w,{key:0,class:"absolute inset-0 z-10 bg-gray-100/50"})):N("",!0),e("div",S,[B,a.value?(s(),l("input",D)):(s(),l("div",{key:1,onClick:r[0]||(r[0]=h=>a.value=!a.value),class:"cursor-pointer hover:text-blue-600"},T))]),a.value?(s(),l("div",z,[e("p",A,[E,v(e("input",{type:"text",class:"border px-2 rounded","onUpdate:modelValue":r[1]||(r[1]=h=>t.value.bengali=h),required:""},null,512),[[b,t.value.bengali]])]),e("p",R,[q,v(e("input",{type:"text",class:"border px-2 rounded","onUpdate:modelValue":r[2]||(r[2]=h=>t.value.english=h),required:""},null,512),[[b,t.value.english]])]),e("p",F,[H,v(e("input",{type:"text",class:"border px-2 rounded","onUpdate:modelValue":r[3]||(r[3]=h=>t.value.arabic=h),required:""},null,512),[[b,t.value.arabic]])])])):(s(),l("div",M,[e("div",W,[e("div",Y,[O,e("div",null,n(p.instituteName.bengali),1)]),e("div",G,[J,e("div",null,n(p.instituteName.english),1)]),e("div",K,[Q,e("div",null,n(p.instituteName.arabic),1)])])]))],40,V)}}},Z={class:"contaner mx-auto flex flex-col items-center gap-4 mt-4"},ee={key:0,class:"flex flex-col gap-4 md:w-[794px] md:p-8 p-4 bg-white rounded shadow-md"},te={class:"border p-2"},se=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Intitute Logo"),e("div",{class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-edit"})])],-1),oe={class:"md:flex gap-5 text-center justify-center col-span-1"},ne={class:"flex items-center justify-center"},le={for:"InstLogo",class:"cursor-pointer"},ie={key:0,src:k,alt:"Staff Photo",class:"h-28 w-28 object-cover rounded-full border"},ae={key:1,class:"h-28 w-28 p-2 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-700"},de=e("div",{class:"flex flex-col gap-2 text-gray-500 hover:text-cyan-600"},[e("div",{class:"flex items-center h-24 w-24 p-2 bg-gray-200 rounded-full"},[e("h4",{class:""},"Upload Logo")])],-1),re=[de],ce=e("h4",{for:"InstLogo",class:"block text-sm font-medium text-gray-700 mt-1"},"Logo Icon",-1),ue={class:"flex items-center justify-center"},ge={for:"InstLogo",class:"cursor-pointer"},he={key:0,src:k,alt:"Staff Photo",class:"h-12 w-28 object-cover rounded-full border"},pe={key:1,class:"h-28 w-80 p-2 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-700"},_e=$('<div class="flex gap-2 text-gray-500 hover:text-cyan-600"><div class="flex items-center justify-center h-24 w-24 p-2 bg-gray-200 rounded-full"><h4 class="text-center">Logo Icon</h4></div><div class="flex flex-col gap-2"><div class="flex items-center justify-center h-12 w-48 p-2 bg-gray-200 rounded"><h4 class="text-center">Name-1</h4></div><div class="flex gap-2 items-center justify-between h-8 w-48 p-2 bg-gray-200 rounded"><h4 class="text-center">Name-2</h4><h4 class="text-center">Name-3</h4></div></div></div>',1),me=[_e],fe=e("h4",{for:"InstLogo",class:"block text-sm font-medium text-gray-700 mt-1"}," Logo With Name ",-1),ve=$('<div class="border p-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Address</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-1 px-2"><p><strong>House No. </strong>House No.</p><p><strong>Road No. </strong>Road No.</p><p><strong>Village: </strong>Village Village</p><p><strong>Post office: </strong>Post office</p><p><strong>Upazilla: </strong>Upazilla Upazilla</p><p><strong>District: </strong>District</p><p><strong>Division: </strong>Division</p></div><h4 class="text-center font-semibold pb-2">Short Address</h4><div class="px-2"><p>House No., Road No., Village, Upazilla, District-Post Code (This is a input fill)</p></div></div>',1),be={class:"border p-2 break-all"},xe=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Contact Information"),e("div",{class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-edit"})])],-1),ye={class:"grid grid-cols-1 md:grid-cols-2 gap-2 px-2"},Ne={class:"grid grid-cols-1 gap-1"},ke=e("strong",null,"Phone 1:",-1),$e=e("strong",null,"Phone 2:",-1),we=e("strong",null,"Whatsapp:",-1),je=e("strong",null,"Email: ",-1),Le=e("hr",{class:"md:hidden"},null,-1),Ie={class:"md:border-l md:pl-2"},Ce={class:"grid grid-cols-1 gap-1"},Pe=e("strong",null,"FB Name: ",-1),Ve=e("strong",null,"FB Link: ",-1),Se=e("strong",null,"YouTube Name: ",-1),Be=e("strong",null,"YouTube Link: ",-1),Te={__name:"InstituteSetup",setup(p){const f=y(),{appDataLoaded:o,institute:t}=C(f),a=m(!1);return(d,u)=>{var _;return s(),l("div",Z,[i(o)?(s(),l("div",ee,[e("div",te,[se,e("div",oe,[e("div",null,[e("div",ne,[e("label",le,[a.value?(s(),l("img",ie)):(s(),l("div",ae,re))]),e("input",{type:"file",id:"InstLogo",class:"hidden",onChange:u[0]||(u[0]=(...g)=>d.handlePhotoChange&&d.handlePhotoChange(...g))},null,32)]),ce]),e("div",null,[e("div",ue,[e("label",ge,[a.value?(s(),l("img",he)):(s(),l("div",pe,me))]),e("input",{type:"file",id:"InstLogo",class:"hidden",onChange:u[1]||(u[1]=(...g)=>d.handlePhotoChange&&d.handlePhotoChange(...g))},null,32)]),fe])])]),P(X,{instituteName:(_=i(t))==null?void 0:_.name},null,8,["instituteName"]),ve,e("div",be,[xe,e("div",ye,[e("div",Ne,[e("p",null,[ke,c(" "+n(i(t).phone),1)]),e("p",null,[$e,c(" "+n(i(t).aulterPhone),1)]),e("p",null,[we,c(" "+n(i(t).whatsapp),1)]),e("p",null,[je,c(" "+n(i(t).email),1)])]),Le,e("div",Ie,[e("div",Ce,[e("p",null,[Pe,c(" "+n(i(t).facebook.name),1)]),e("p",null,[Ve,c(" "+n(i(t).facebook.link),1)]),e("p",null,[Se,c(" "+n(i(t).youtube.name),1)]),e("p",null,[Be,c(" "+n(i(t).youtube.link),1)])])])])])])):N("",!0)])}}};export{Te as default};
