import{u as f,r as p,o as n,b as d,e as o,F as g,f as t,h as x,t as $,B as V,d as v,g as i,q as y,x as k,j as w}from"./index-3bd1d8c6.js";const S={class:"w-full"},I={class:"flex items-center justify-center"},U={for:"InstLogo",class:"cursor-pointer w-full aspect-[1/1] md:max-w-full max-w-20 rounded-full border"},j=["src"],C=["src"],N={key:1,class:"max-w-20 md:max-w-full w-full aspect-[1/1] p-2 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-700"},L=o("div",{class:"flex flex-col gap-2 text-gray-500 hover:text-cyan-600"},[o("div",{class:"flex items-center h-24 w-24 p-2 bg-gray-200 rounded-full"},[o("h4",{class:""},"Upload Logo")])],-1),q=[L],F={key:0,class:"flex justify-center items-center gap-2 mt-2"},B={key:0,class:"px-3 text-center pt-0.5 border border-gray-400 text-gray-400 rounded"},A={key:1,class:"block text-sm font-medium text-gray-700 mt-2"},P=o("label",{for:"InstLogo",title:"change",class:"cursor-pointer"},[o("i",{class:"fad fa-edit"})],-1),z={__name:"IconForm",setup(c){const e=f(),l=p("");function u(s){const m=s.target.files[0],b=new FileReader;return b.readAsDataURL(m),b.onload=h=>{l.value=h.target.result},s.target.value=""}function _(){l.value=""}function a(){e.update("icon",{link:l.value}).then(()=>l.value=!1)}return(s,m)=>(n(),d("div",S,[o("div",I,[o("label",U,[l.value?(n(),d("img",{key:0,src:l.value,alt:"Icon",class:"max-w-full max-h-full object-cover"},null,8,j)):(n(),d(g,{key:1},[t(e).icon.link?(n(),d("img",{key:0,src:t(e).icon.link,alt:"Icon",class:"max-w-20 md:max-w-full w-full aspect-[1/1] object-cover rounded-full border"},null,8,C)):(n(),d("div",N,q))],64))]),o("input",{type:"file",id:"InstLogo",class:"hidden",onChange:u,accept:"image/*"},null,32)]),l.value?(n(),d("div",F,[t(e).loader?(n(),d("div",B," Uploading... ")):(n(),d(g,{key:1},[o("button",{type:"button",class:"w-20 text-center pt-0.5 border border-gray-600 text-gray-600 rounded",onClick:_}," Cancel "),o("button",{type:"button",class:"w-20 text-center pt-0.5 border border-green-600 bg-green-600 text-white rounded",onClick:a}," Save ")],64))])):(n(),d("h4",A,[x(" Logo Icon "),P]))]))}},R={class:"flex gap-2"},D={class:"min-w-max"},W={class:"relative w-full"},E=["value","required","dir"],M={key:1},T={key:2,class:"w-full rounded-lg z-10 absolute inset-0 bg-slate-200 animate-pulse"},r={__name:"InfoItem",props:{modelValue:{},loader:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},label:String,required:{Boolean,default:!1},dir:{String,default:"ltr"}},emits:["update:modelValue"],setup(c,{emit:e}){const l=e;return(u,_)=>(n(),d("div",R,[o("strong",D,$(c.label),1),o("div",W,[c.editable?(n(),d("input",{key:0,class:"w-full px-2 py-1 border rounded-lg",value:c.modelValue,onInput:_[0]||(_[0]=a=>l("update:modelValue",a.target.value)),required:c.required,dir:c.dir},null,40,E)):(n(),d("span",M,[V(u.$slots,"default",{},()=>[x($(c.modelValue),1)])])),c.loader?(n(),d("div",T)):v("",!0)])]))}},H=["onSubmit"],O={class:"relative flex items-center bg-gray-100 mb-2 justify-between px-2"},Y=o("h3",{class:"text-lg font-semibold"},"Address Information",-1),G={class:"cursor-pointer hover:text-blue-600"},J={key:1,type:"submit"},K=o("i",{class:"fad fa-save"},null,-1),Q=o("span",{class:"pl-2"},"Save",-1),X=[K,Q],Z={key:0,class:"w-full z-10 absolute inset-0 bg-slate-200 animate-pulse"},ee={class:"grid grid-cols-1 md:grid-cols-2 gap-1 px-2"},te={__name:"InstituteAddressForm",setup(c){const e=f(),l=p(!1);function u(){e.update("address_info",e.address_info).then(()=>l.value=!1)}return(_,a)=>(n(),d("form",{onSubmit:y(u,["prevent"]),class:"border p-2 break-all"},[o("div",O,[Y,o("div",G,[l.value?(n(),d("button",J,X)):(n(),d("i",{key:0,class:"fad fa-edit",onClick:a[0]||(a[0]=s=>l.value=!l.value)}))]),t(e).loaders.address_info?(n(),d("div",Z)):v("",!0)]),o("div",ee,[i(r,{class:"col-span-full",label:"House No/Road No/Village:",loader:t(e).loaders.address_info,editable:l.value,modelValue:t(e).address_info.address,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).address_info.address=s),required:!0},null,8,["loader","editable","modelValue"]),i(r,{label:"Post Office:",loader:t(e).loaders.address_info,editable:l.value,modelValue:t(e).address_info.post_office,"onUpdate:modelValue":a[2]||(a[2]=s=>t(e).address_info.post_office=s),required:!0},null,8,["loader","editable","modelValue"]),i(r,{label:"Post Code:",loader:t(e).loaders.address_info,editable:l.value,modelValue:t(e).address_info.post_code,"onUpdate:modelValue":a[3]||(a[3]=s=>t(e).address_info.post_code=s),required:!0},null,8,["loader","editable","modelValue"]),i(r,{label:"Upazilla/Area:",loader:t(e).loaders.address_info,editable:l.value,modelValue:t(e).address_info.area,"onUpdate:modelValue":a[4]||(a[4]=s=>t(e).address_info.area=s),required:!0},null,8,["loader","editable","modelValue"]),i(r,{label:"District:",loader:t(e).loaders.address_info,editable:l.value,modelValue:t(e).address_info.district,"onUpdate:modelValue":a[5]||(a[5]=s=>t(e).address_info.district=s),required:!0},null,8,["loader","editable","modelValue"])])],40,H))}},le=["onSubmit"],oe={class:"relative flex items-center bg-gray-100 mb-2 justify-between px-2"},ae=o("h3",{class:"text-lg font-semibold"},"Intitute Name",-1),se={class:"cursor-pointer hover:text-blue-600"},ne={key:1,type:"submit"},de=o("i",{class:"fad fa-save"},null,-1),ie=o("span",{class:"pl-2"},"Save",-1),re=[de,ie],ce={key:0,class:"w-full z-10 absolute inset-0 bg-slate-200 animate-pulse"},ue={class:"grid grid-cols-1 md:grid-cols-2 gap-1 px-2"},_e={__name:"InstituteBasicForm",setup(c){const e=f(),l=p(!1);function u(){e.update("basic_info",e.basic_info).then(()=>l.value=!1)}return(_,a)=>(n(),d("form",{onSubmit:y(u,["prevent"]),class:"border p-2 break-all"},[o("div",oe,[ae,o("div",se,[l.value?(n(),d("button",ne,re)):(n(),d("i",{key:0,class:"fad fa-edit",onClick:a[0]||(a[0]=s=>l.value=!l.value)}))]),t(e).loaders.basic_info?(n(),d("div",ce)):v("",!0)]),o("div",ue,[i(r,{class:"col-span-full",label:"Name Bangla:",loader:t(e).loaders.basic_info,editable:l.value,modelValue:t(e).basic_info.bengali_name,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).basic_info.bengali_name=s),required:!0},null,8,["loader","editable","modelValue"]),i(r,{class:"col-span-full",label:"Name English:",loader:t(e).loaders.basic_info,editable:l.value,modelValue:t(e).basic_info.english_name,"onUpdate:modelValue":a[2]||(a[2]=s=>t(e).basic_info.english_name=s),required:!0},null,8,["loader","editable","modelValue"]),i(r,{class:"col-span-full",label:"Name Arabic:",loader:t(e).loaders.basic_info,editable:l.value,modelValue:t(e).basic_info.arabic_name,"onUpdate:modelValue":a[3]||(a[3]=s=>t(e).basic_info.arabic_name=s),required:!0,dir:"rtl"},null,8,["loader","editable","modelValue"])])],40,le))}},fe=["onSubmit"],me={class:"relative flex items-center bg-gray-100 mb-2 justify-between px-2"},be=o("h3",{class:"text-lg font-semibold"},"Contact Information",-1),pe={class:"cursor-pointer hover:text-blue-600"},ge={key:1,type:"submit"},ve=o("i",{class:"fad fa-save"},null,-1),he=o("span",{class:"pl-2"},"Save",-1),xe=[ve,he],ye={key:0,class:"w-full z-10 absolute inset-0 bg-slate-200 animate-pulse"},$e={class:"grid grid-cols-1 md:grid-cols-3 gap-2 px-2"},Ve={class:"grid grid-cols-1 gap-1"},ke=o("hr",{class:"md:hidden"},null,-1),we={class:"md:border-l md:pl-2 md:col-span-2"},Se={class:"grid grid-cols-1 gap-1"},Ie={__name:"InstituteContactForm",setup(c){const e=f(),l=p(!1);function u(){e.update("contact_info",e.contact_info).then(()=>l.value=!1)}return(_,a)=>(n(),d("form",{onSubmit:y(u,["prevent"]),class:"border p-2 break-all"},[o("div",me,[be,o("div",pe,[l.value?(n(),d("button",ge,xe)):(n(),d("i",{key:0,class:"fad fa-edit",onClick:a[0]||(a[0]=s=>l.value=!l.value)}))]),t(e).loaders.contact_info?(n(),d("div",ye)):v("",!0)]),o("div",$e,[o("div",Ve,[i(r,{label:"Phone 1:",loader:t(e).loaders.contact_info,editable:l.value,modelValue:t(e).contact_info.phone,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).contact_info.phone=s),required:!0},null,8,["loader","editable","modelValue"]),i(r,{label:"Phone 2:",loader:t(e).loaders.contact_info,editable:l.value,modelValue:t(e).contact_info.alternative_phone,"onUpdate:modelValue":a[2]||(a[2]=s=>t(e).contact_info.alternative_phone=s)},null,8,["loader","editable","modelValue"]),i(r,{label:"Whatsapp:",loader:t(e).loaders.contact_info,editable:l.value,modelValue:t(e).contact_info.whatsapp,"onUpdate:modelValue":a[3]||(a[3]=s=>t(e).contact_info.whatsapp=s)},null,8,["loader","editable","modelValue"])]),ke,o("div",we,[o("div",Se,[i(r,{label:"Email:",loader:t(e).loaders.contact_info,editable:l.value,modelValue:t(e).contact_info.email,"onUpdate:modelValue":a[4]||(a[4]=s=>t(e).contact_info.email=s)},null,8,["loader","editable","modelValue"]),i(r,{label:"Facebook:",loader:t(e).loaders.contact_info,editable:l.value,modelValue:t(e).contact_info.facebook,"onUpdate:modelValue":a[5]||(a[5]=s=>t(e).contact_info.facebook=s)},null,8,["loader","editable","modelValue"]),i(r,{label:"YouTube:",loader:t(e).loaders.contact_info,editable:l.value,modelValue:t(e).contact_info.youtube,"onUpdate:modelValue":a[6]||(a[6]=s=>t(e).contact_info.youtube=s)},null,8,["loader","editable","modelValue"])])])])],40,fe))}},Ue={class:"md:col-span-5"},je={class:"flex items-center justify-center"},Ce={for:"fullLogo",class:"cursor-pointer w-full aspect-[5/1] flex justify-start items-center overflow-hidden rounded-lg border"},Ne=["src"],Le=["src"],qe={key:1,class:"w-full aspect-[5/1] p-2 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-700"},Fe=k('<div class="flex gap-2 text-gray-500 hover:text-cyan-600"><div class="flex items-center justify-center h-24 w-24 p-2 bg-gray-200 rounded-full"><h4 class="text-center">Logo Icon</h4></div><div class="flex flex-col gap-2"><div class="flex items-center justify-center h-12 w-48 p-2 bg-gray-200 rounded"><h4 class="text-center">Name-1</h4></div><div class="flex gap-2 items-center justify-between h-8 w-48 p-2 bg-gray-200 rounded"><h4 class="text-center">Name-2</h4><h4 class="text-center">Name-3</h4></div></div></div>',1),Be=[Fe],Ae={key:0,class:"flex justify-center items-center gap-2 mt-2"},Pe={key:0,class:"px-3 text-center pt-0.5 border border-gray-400 text-gray-400 rounded"},ze={key:1,class:"block text-sm font-medium text-gray-700 mt-2"},Re=o("label",{for:"fullLogo",title:"change",class:"cursor-pointer"},[o("i",{class:"fad fa-edit"})],-1),De={__name:"LogoForm",setup(c){const e=f(),l=p("");function u(s){const m=s.target.files[0],b=new FileReader;return b.readAsDataURL(m),b.onload=h=>{l.value=h.target.result},s.target.value=""}function _(){l.value=""}function a(){e.update("logo",{link:l.value}).then(()=>l.value=!1)}return(s,m)=>(n(),d("div",Ue,[o("div",je,[o("label",Ce,[l.value?(n(),d("img",{key:0,src:l.value,alt:"Logo With Name",class:"max-w-full max-h-full object-contain"},null,8,Ne)):(n(),d(g,{key:1},[t(e).logo.link?(n(),d("img",{key:0,src:t(e).logo.link,alt:"Logo With Name",class:"max-w-full max-h-full object-contain"},null,8,Le)):(n(),d("div",qe,Be))],64))]),o("input",{type:"file",id:"fullLogo",class:"hidden",onChange:u,accept:"image/*"},null,32)]),l.value?(n(),d("div",Ae,[t(e).loader?(n(),d("div",Pe," Uploading... ")):(n(),d(g,{key:1},[o("button",{type:"button",class:"w-20 text-center pt-0.5 border border-gray-600 text-gray-600 rounded",onClick:_}," Cancel "),o("button",{type:"button",class:"w-20 text-center pt-0.5 border border-green-600 bg-green-600 text-white rounded",onClick:a}," Save ")],64))])):(n(),d("h4",ze,[x(" Logo With Name "),Re]))]))}},We={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},Ee={class:"flex flex-col gap-4 md:w-[794px] md:p-8 p-4 bg-white rounded shadow-md"},Me={class:"border p-2"},Te=o("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[o("h3",{class:"text-lg font-semibold"},"Intitute Logo")],-1),He={class:"grid md:grid-cols-7 md:p-2 pb-0 text-center"},Oe=o("div",{class:"h-4"},null,-1),Ge={__name:"InstituteSetup",setup(c){const e=f();return w(()=>{e.index()}),(l,u)=>(n(),d("div",We,[o("div",Ee,[o("div",Me,[Te,o("div",He,[i(z),Oe,i(De)])]),i(_e),i(te),i(Ie)])]))}};export{Ge as default};
