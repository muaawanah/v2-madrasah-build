import{m as v,s as y,r as p,a as b,o as t,b as n,e,p as c,v as u,f as i,t as f,d as h,c as w,q as k}from"./index-9f78e41b.js";const S={class:"px-4 py-8"},V=["onSubmit"],B={class:"grid"},C=e("span",{class:"text-sm text-gray-400"},"Email",-1),L={class:"grid"},q=e("span",{class:"text-sm text-gray-400"},"Password",-1),M={key:0,class:"text-rose-600 px-2.5 py-1.5 bg-rose-600/20 rounded text-xs md:text-base"},D={class:"flex justify-center items-center"},E={key:1,type:"submit",class:"cursor-pointer px-6 py-1.5 bg-green-600 text-white hover:bg-green-700",value:"Login"},j={__name:"LoginView",setup(N){const d=v(),{login:m}=d,{loader:_,errorMessage:l}=y(d),o=p("msi@gmail.com"),a=p("msi");async function x(){m({email:o.value,password:a.value})}return(T,s)=>{const g=b("LoaderComponent");return t(),n("div",S,[e("form",{onSubmit:k(x,["prevent"]),class:"mx-auto max-w-xs grid gap-4 bg-white p-4 rounded shadow"},[e("label",B,[C,c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r),type:"email",class:"border py-2 px-3 rounded",required:""},null,512),[[u,o.value]])]),e("label",L,[q,c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=r=>a.value=r),type:"password",class:"border py-2 px-3 rounded",required:""},null,512),[[u,a.value]])]),i(l)?(t(),n("div",M,f(i(l)),1)):h("",!0),e("div",D,[i(_)?(t(),w(g,{key:0})):(t(),n("input",E))])],40,V)])}}};export{j as default};
