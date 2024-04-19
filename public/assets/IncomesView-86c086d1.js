import{y as F,r as p,s as L,i as A,o as n,b as r,e,n as u,F as m,l as h,t as d,d as _,u as D,h as v,g as i,p as P,A as R}from"./index-3ce42378.js";const T=F("invoiceList",()=>({invoiceList:p([{id:1,invoiceNo:"001",date:"12-10-2023",name:"John Doe",amount:1500},{id:2,invoiceNo:"002",date:"13-10-2023",name:"Jane Smith",amount:1200},{id:3,invoiceNo:"003",date:"14-10-2023",name:"Bob Johnson",amount:1800},{id:4,invoiceNo:"004",date:"15-10-2023",name:"Alice Williams",amount:2e3},{id:5,invoiceNo:"005",date:"16-10-2023",name:"Charlie Brown",amount:1e3},{id:6,invoiceNo:"006",date:"17-10-2023",name:"Eva Davis",amount:1300},{id:7,invoiceNo:"007",date:"18-10-2023",name:"Frank Miller",amount:1600},{id:8,invoiceNo:"008",date:"19-10-2023",name:"Grace Taylor",amount:1400},{id:9,invoiceNo:"009",date:"20-10-2023",name:"David Wilson",amount:1100},{id:10,invoiceNo:"010",date:"21-10-2023",name:"Sophie Martinez",amount:1700}])})),V={class:"container mx-auto"},$={class:"flex flex-col items-center justify-center mt-2 gap-4"},B={class:"flex flex-wrap gap-2 justify-center mt-4"},M={key:0,class:"flex flex-col items-center gap-4"},J=v('<div class="flex flex-col items-center bg-white rounded-md p-4 shadow w-full"><h2 class="text-center text-2xl font-bold">Search Student</h2><hr class="my-2 w-full"><div class="flex items-center gap-4"><label for="search" class="font-semibold">Search With Registration Number:</label><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md block w-28 px-1 py-0.5" type="text"></div><hr class="my-2 w-full"><div class="flex flex-col justify-between md:flex-row gap-2 w-full"><p><strong>Class: </strong>{Class select}</p><p><strong>Name: </strong>{Student Select}</p><p><strong>Roll: </strong>{123}</p></div><hr class="my-2 w-full"><div class="flex gap-2 justify-center"><button class="border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"> Search Fees </button></div></div><h2 class="text-center text-2xl font-bold">Collect Fee</h2>',2),O={class:"grid md:grid-cols-2 grid-cols-1 gap-4"},W={class:"fee-list flex flex-col gap-2 w-80"},q=["onClick"],z=["value"],E={class:"flex items-center justify-between w-full"},G={class:"text-lg"},U={class:""},H={class:"flex flex-col gap-4"},K={class:"flex flex-col gap-1 bg-white rounded p-4 border border-gray-300 w-80"},Q=v('<h3 class="text-xl font-semibold text-center">Invoice</h3><div class="flex flex-col"><div class="grid grid-cols-2 text-sm"><p><strong>Invoice No: </strong>{0123}</p><p><strong>Date: </strong>{12-10-23}</p></div><hr class="my-2 border-t border-gray-300"><div class="grid grid-col gap-1"><p><strong>Name: </strong>{Student Name}</p><p><strong>Class: </strong>{Class}</p><div class="grid grid-cols-2 text-sm"><p><strong>Roll: </strong>{123}</p><p><strong>Reg: </strong>{12356}</p></div></div></div><div class="my-2 flex flex-row justify-between bg-gray-200 px-2 font-bold"><p>purpose</p><p>Amount</p></div>',3),X={key:0,class:"flex justify-center"},Y=e("p",null,"No fees selected.",-1),Z=[Y],ee={key:1,class:"px-2"},te={class:"flex justify-between items-center"},se={class:"font-semibold"},oe={class:"text-gray-600"},ne=e("hr",{class:"my-2 border-t border-gray-300"},null,-1),re={class:"flex justify-between items-center"},de=e("p",{class:"font-semibold"},"Total Amount:",-1),ce={class:"text-xl font-bold"},ie=v('<hr class="my-2 border-t border-gray-300"><div class="flex justify-between items-center"><label for="deposit" class="font-semibold">Deposited:</label><br><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md block w-16 px-1 py-0.5 text-right" type="number" required=""></div><hr class="my-2 border-t border-gray-300"><div class="flex justify-between items-center text-red-500"><p class="font-semibold">Due:</p><p class="text-xl font-bold">৳ {500}</p></div>',4),le=e("hr",{class:"my-2 border-t border-gray-300"},null,-1),ae={class:""},ue={class:"flex gap-1 text-xs"},pe={class:""},ve=["value"],xe=e("div",null,[e("label",{for:"received",class:"ms-2"},"I have received above amount of money")],-1),me=e("div",null,[e("p",null,[e("strong",null,"Received by: "),i("{Receiver Name}")])],-1),he=e("div",{class:"flex gap-2 justify-center"},[e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save "),e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"},[e("i",{class:"fad fa-print"}),i(" Print ")])],-1),be={key:1},ge={class:"flex flex-col gap-4"},fe={class:"flex flex-col gap-1 bg-white rounded p-4 border border-gray-300 w-80 md:w-96"},_e=v('<h3 class="text-xl font-semibold text-center">Other Invoice</h3><div class="flex flex-col"><div class="grid grid-cols-2 text-sm"><p><strong>Invoice No: </strong>{0123}</p><p><strong>Date: </strong>{12-10-23}</p></div><hr class="my-2 border-t border-gray-300"><div class="grid grid-col gap-1"><p><strong>Name: </strong>{Student Name}</p><p><strong>Address: </strong>{Address}</p><p><strong>Phone: </strong>{0123456789}</p></div></div><div class="my-2 flex flex-row justify-between bg-gray-200 px-2 font-bold"><p>purpose</p><p>Amount</p></div><div class="px-2"><div class="flex justify-between items-center"><select for="deposit" class="font-semibold"><option value="1">Select Perpose</option><option value="2">Select Perpose</option></select><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md block w-16 px-1 py-0.5" type="Text" required=""></div></div><hr class="my-2 border-t border-gray-300">',5),ye={class:""},we={class:"flex gap-1 text-xs"},ke={class:""},Ne=["value"],Se=e("div",null,[e("label",{for:"received",class:"ms-2"},"I have received above amount of money")],-1),Ce=e("div",null,[e("p",null,[e("strong",null,"Received by: "),i("{Receiver Name}")])],-1),je=e("div",{class:"flex gap-2 justify-center"},[e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save "),e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"},[e("i",{class:"fad fa-print"}),i(" Print ")])],-1),Ie={key:2,class:"flex flex-col items-center gap-4"},Fe=v('<h2 class="text-center text-2xl font-bold">Invoice List</h2><div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 p-1"><p class="col-span-1 px-2"><strong>Invoice</strong></p><p class="col-span-2 px-2"><strong>Date</strong></p><p class="col-span-3 px-2"><strong>Name</strong></p><p class="col-span-1 px-2"><strong>Amount</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',2),Le={class:"flex w-full flex-col gap-1"},Ae={class:"col-span-1 px-2"},De=e("strong",{class:"md:hidden"},"Invoice:",-1),Pe={class:"col-span-2 px-2"},Re=e("strong",{class:"md:hidden"},"Date:",-1),Te={class:"col-span-3 text-left px-2"},Ve=e("strong",{class:"md:hidden"},"Name:",-1),$e={class:"col-span-1 px-2"},Be=e("strong",{class:"md:hidden"},"Amount:",-1),Me=e("button",{class:"text-cyan-600 col-span-1 px-4 rounded hover:font-semibold"},"View",-1),Je={class:"flex justify-center items-center mt-4"},Oe=["disabled"],We=["onClick"],qe=["disabled"],ze=15,Ge={__name:"IncomesView",setup(k){const N=T(),{invoiceList:y}=L(N),S=p([{name:"Fee 1",amount:1e3},{name:"Fee 2",amount:1500},{name:"Fee 4",amount:1200},{name:"Fee 5",amount:1200},{name:"Fee 6",amount:500},{name:"Fee 7",amount:100},{name:"Fee 8",amount:400}]),l=p("student"),c=p([]),b=o=>{l.value=o},C=()=>c.value.reduce((o,s)=>o+s.amount,0),j=o=>c.value.includes(o),I=o=>{const s=c.value.indexOf(o);s===-1?c.value.push(o):c.value.splice(s,1)},a=p(1),g=A(()=>Math.ceil(y.value.length/ze)),f=o=>{o>=1&&o<=g.value&&(a.value=o)};return(o,s)=>(n(),r("div",V,[e("div",$,[e("div",B,[e("button",{class:u(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":l.value==="student"}]),onClick:s[0]||(s[0]=t=>b("student"))}," Student Income ",2),e("button",{class:u(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":l.value==="other"}]),onClick:s[1]||(s[1]=t=>b("other"))}," Others Income ",2),e("button",{class:u(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":l.value==="invoiceList"}]),onClick:s[2]||(s[2]=t=>b("invoiceList"))}," Invoice List ",2)]),l.value==="student"?(n(),r("div",M,[J,e("div",O,[e("div",W,[(n(!0),r(m,null,h(S.value,(t,x)=>(n(),r("div",{key:x,class:u([{"border-2 border-cyan-600 text-cyan-600":j(t)},"flex items-center gap-4 bg-white rounded shadow px-4 py-2 transition-transform transform hover:scale-105 hover:text-cyan-600 cursor-pointer"]),onClick:w=>I(t)},[P(e("input",{type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=w=>c.value=w),value:t,class:"form-checkbox"},null,8,z),[[R,c.value]]),e("div",E,[e("h4",G,d(t.name),1),e("p",U,"৳ "+d(t.amount),1)])],10,q))),128))]),e("div",H,[e("div",K,[Q,c.value.length===0?(n(),r("div",X,Z)):(n(),r("div",ee,[(n(!0),r(m,null,h(c.value,(t,x)=>(n(),r("div",{key:x},[e("div",te,[e("p",se,d(t.name),1),e("p",oe,"৳ "+d(t.amount),1)])]))),128)),ne,e("div",re,[de,e("p",ce,"৳ "+d(C()),1)]),ie])),le,e("div",ae,[e("div",ue,[e("div",pe,[e("input",{type:"checkbox",value:o.received,class:"form-checkbox",id:"received"},null,8,ve)]),xe]),me])]),he])])])):_("",!0),l.value==="other"?(n(),r("div",be,[e("div",null,[e("div",ge,[e("div",fe,[_e,e("div",ye,[e("div",we,[e("div",ke,[e("input",{type:"checkbox",value:o.received,class:"form-checkbox",id:"received"},null,8,Ne)]),Se]),Ce])]),je])])])):_("",!0),l.value==="invoiceList"?(n(),r("div",Ie,[Fe,e("div",Le,[(n(!0),r(m,null,h(D(y),t=>(n(),r("div",{key:t.id,class:"flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 p-2 w-80 md:w-full"},[e("p",Ae,[De,i(" "+d(t.invoiceNo),1)]),e("p",Pe,[Re,i(" "+d(t.date),1)]),e("p",Te,[Ve,i(" "+d(t.name),1)]),e("p",$e,[Be,i(" "+d(t.amount),1)]),Me]))),128))]),e("div",Je,[e("button",{onClick:s[4]||(s[4]=t=>f(a.value-1)),disabled:a.value===1,class:"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"}," Previous ",8,Oe),(n(!0),r(m,null,h(g.value,t=>(n(),r("button",{key:t,onClick:x=>f(t),class:u([{"bg-cyan-600 text-white":a.value===t},"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"])},d(t),11,We))),128)),e("button",{onClick:s[5]||(s[5]=t=>f(a.value+1)),disabled:a.value===g.value,class:"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"}," Next ",8,qe)])])):_("",!0)])]))}};export{Ge as default};
