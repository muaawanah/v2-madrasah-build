import{G as C,r as p,s as D,i as L,o as n,b as r,e,n as u,d as y,F as x,l as f,t as a,f as A,x as v,h as c,p as T,C as M}from"./index-9f78e41b.js";const $=C("voucherList",()=>({voucherList:p([{id:1,voucherNo:"001",date:"12-10-2023",name:"John Doe",amount:1500},{id:2,voucherNo:"002",date:"13-10-2023",name:"Jane Smith",amount:1200},{id:3,voucherNo:"003",date:"14-10-2023",name:"Bob Johnson",amount:1800},{id:4,voucherNo:"004",date:"15-10-2023",name:"Alice Williams",amount:2e3},{id:5,voucherNo:"005",date:"16-10-2023",name:"Charlie Brown",amount:1e3},{id:6,voucherNo:"006",date:"17-10-2023",name:"Eva Davis",amount:1300},{id:7,voucherNo:"007",date:"18-10-2023",name:"Frank Miller",amount:1600},{id:8,voucherNo:"008",date:"19-10-2023",name:"Grace Taylor",amount:1400},{id:9,voucherNo:"009",date:"20-10-2023",name:"David Wilson",amount:1100},{id:10,voucherNo:"010",date:"21-10-2023",name:"Sophie Martinez",amount:1700}])})),J={class:"container mx-auto"},B={class:"flex flex-col items-center justify-center mt-2 gap-4"},G={class:"flex flex-wrap gap-2 justify-center mt-4"},I={key:0},E={class:"flex flex-col gap-4"},F={class:"flex flex-col gap-1 bg-white rounded p-4 border border-gray-300 w-80 md:w-96"},R=v('<h3 class="text-xl font-semibold text-center">General Voucher</h3><div class="flex flex-col"><div class="flex items-center justify-between text-sm"><p><strong>Voucher No: </strong>{0123}</p><p><strong>Date: </strong>{12-10-23}</p></div><hr class="my-2 border-t border-gray-300"><div class="grid grid-col gap-1"><p><strong>Name: </strong>{Staff Name}</p><p><strong>Phone: </strong>{0123456789}</p></div></div><div class="my-2 flex flex-row justify-between bg-gray-200 px-2 font-bold"><p>purpose</p><p>Amount</p></div><div class="px-2"><div class="flex justify-between items-center"><div class="flex gap-2"><select for="deposit" class="font-semibold"><option value="1">Select Perpose</option><option value="2">Perpose</option><option value="3">Perpose</option></select><button class="px-1 border-2 rounded">+</button></div><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md block w-24 px-1 py-0.5" type="Text" required=""></div></div><hr class="my-2 border-t border-gray-300">',5),W={class:""},q={class:"flex gap-1 text-xs"},z={class:""},O=["value"],U=e("div",null,[e("label",{for:"received",class:"ms-2"},"I have paid above amount of money")],-1),H=e("div",null,[e("p",null,[e("strong",null,"Approved by: "),c("{ Name }")])],-1),K=e("div",{class:"flex gap-2 justify-center"},[e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save "),e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"},[e("i",{class:"fad fa-print"}),c(" Print ")])],-1),Q={key:1,class:"flex flex-col items-center gap-4"},X=v('<div class="flex flex-col items-center bg-white rounded-md p-4 shadow w-full"><h2 class="text-center text-2xl font-bold">Select Staff</h2><hr class="my-2 w-full"><div class="flex items-center gap-4"><label for="search" class="font-semibold">Search With Saff ID:</label><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md block w-28 px-1 py-0.5" type="text"></div><hr class="my-2 w-full"><div class="flex flex-col justify-between md:flex-row gap-2 w-full"><p><strong>Name: </strong>{Staff Name}</p><p><strong>Designation: </strong>{Designation}</p></div><hr class="my-2 w-full"><div class="flex gap-2 justify-center"><button class="border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"> Search Payments </button></div></div><h2 class="text-center text-2xl font-bold">Make Payment</h2>',2),Y={class:"grid md:grid-cols-2 grid-cols-1 gap-4"},Z={class:"pay-list flex flex-col gap-2 w-80"},ee=["onClick"],te=["value"],se={class:"flex items-center justify-between w-full"},oe={class:"text-lg"},ne={class:""},re={class:"flex flex-col gap-4"},ae={class:"flex flex-col gap-1 bg-white rounded p-4 border border-gray-300 w-80"},le=v('<h3 class="text-xl font-semibold text-center">Receipt</h3><div class="flex flex-col"><div class="grid grid-cols-2 text-sm"><p><strong>Receipt No: </strong>{0123}</p><p><strong>Date: </strong>{12-10-23}</p></div><hr class="my-2 border-t border-gray-300"><div class="grid grid-col gap-1"><p><strong>Name: </strong>{Saff Name}</p><p><strong>Class: </strong>{Designation}</p><div class="grid grid-cols-2 text-sm"><p><strong>Staff ID: </strong>{12356}</p></div></div></div><div class="my-2 flex flex-row justify-between bg-gray-200 px-2 font-bold"><p>purpose</p><p>Amount</p></div>',3),ce={key:0,class:"flex justify-center"},de=e("p",null,"No fees selected.",-1),ie=[de],ue={key:1,class:"px-2"},pe={class:"flex justify-between items-center"},ve={class:"font-semibold"},he={class:"text-gray-600"},xe=e("hr",{class:"my-2 border-t border-gray-300"},null,-1),fe={class:"flex justify-between items-center"},me=e("p",{class:"font-semibold"},"Total Amount:",-1),be={class:"text-xl font-bold"},ge=v('<hr class="my-2 border-t border-gray-300"><div class="flex justify-between items-center"><label for="deposit" class="font-semibold">Payment:</label><br><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md block w-24 px-1 py-0.5 text-right" type="number" required=""></div><hr class="my-2 border-t border-gray-300"><div class="flex justify-between items-center text-red-500"><p class="font-semibold">Paycut:</p><p class="text-xl font-bold">৳ {500}</p></div>',4),ye=e("hr",{class:"my-2 border-t border-gray-300"},null,-1),_e={class:""},we={class:"flex gap-1 text-xs"},ke={class:""},Ne=["value"],Se=e("div",null,[e("label",{for:"received",class:"ms-2"},"I have paid above amount of money")],-1),je=e("div",null,[e("p",null,[e("strong",null,"Paid by: "),c("{Accounts Name}")])],-1),Pe=e("div",{class:"flex gap-2 justify-center"},[e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save "),e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"},[e("i",{class:"fad fa-print"}),c(" Print ")])],-1),Ve={key:2,class:"flex flex-col items-center gap-4"},Ce=v('<h2 class="text-center text-2xl font-bold">Voucher List</h2><div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 p-1"><p class="col-span-1 px-2"><strong>Voucher</strong></p><p class="col-span-2 px-2"><strong>Date</strong></p><p class="col-span-3 px-2"><strong>Name</strong></p><p class="col-span-1 px-2"><strong>Amount</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div>',2),De={class:"flex w-full flex-col gap-1"},Le={class:"col-span-1 px-2"},Ae=e("strong",{class:"md:hidden"},"Voucher:",-1),Te={class:"col-span-2 px-2"},Me=e("strong",{class:"md:hidden"},"Date:",-1),$e={class:"col-span-3 text-left px-2"},Je=e("strong",{class:"md:hidden"},"Name:",-1),Be={class:"col-span-1 px-2"},Ge=e("strong",{class:"md:hidden"},"Amount:",-1),Ie=e("button",{class:"text-cyan-600 col-span-1 px-4 rounded hover:font-semibold"},"View",-1),Ee={class:"flex justify-center items-center mt-4"},Fe=["disabled"],Re=["onClick"],We=["disabled"],qe=15,Oe={__name:"ExpensesView",setup(k){const N=$(),{voucherList:_}=D(N),d=p("general"),m=o=>{d.value=o},S=p([{name:"Salary of Jan",amount:1e3},{name:"Salary of feb",amount:1500},{name:"Salary of Mar",amount:1200},{name:"Salary of apr",amount:1200},{name:"Salary of May",amount:500},{name:"June 2024",amount:100},{name:"July 24",amount:400}]),l=p([]),j=()=>l.value.reduce((o,s)=>o+s.amount,0),P=o=>l.value.includes(o),V=o=>{const s=l.value.indexOf(o);s===-1?l.value.push(o):l.value.splice(s,1)},i=p(1),b=L(()=>Math.ceil(_.value.length/qe)),g=o=>{o>=1&&o<=b.value&&(i.value=o)};return(o,s)=>(n(),r("div",J,[e("div",B,[e("div",G,[e("button",{class:u(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":d.value==="general"}]),onClick:s[0]||(s[0]=t=>m("general"))}," General Voucher ",2),e("button",{class:u(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":d.value==="staff"}]),onClick:s[1]||(s[1]=t=>m("staff"))}," Staff Voucher ",2),e("button",{class:u(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":d.value==="voucherList"}]),onClick:s[2]||(s[2]=t=>m("voucherList"))}," Voucher List ",2)]),d.value==="general"?(n(),r("div",I,[e("div",null,[e("div",E,[e("div",F,[R,e("div",W,[e("div",q,[e("div",z,[e("input",{type:"checkbox",value:o.received,class:"form-checkbox",id:"received"},null,8,O)]),U]),H])]),K])])])):y("",!0),d.value==="staff"?(n(),r("div",Q,[X,e("div",Y,[e("div",Z,[(n(!0),r(x,null,f(S.value,(t,h)=>(n(),r("div",{key:h,class:u([{"border-2 border-cyan-600 text-cyan-600":P(t)},"flex items-center gap-4 bg-white rounded shadow px-4 py-2 transition-transform transform hover:scale-105 hover:text-cyan-600 cursor-pointer"]),onClick:w=>V(t)},[T(e("input",{type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=w=>l.value=w),value:t,class:"form-checkbox"},null,8,te),[[M,l.value]]),e("div",se,[e("h4",oe,a(t.name),1),e("p",ne,"৳ "+a(t.amount),1)])],10,ee))),128))]),e("div",re,[e("div",ae,[le,l.value.length===0?(n(),r("div",ce,ie)):(n(),r("div",ue,[(n(!0),r(x,null,f(l.value,(t,h)=>(n(),r("div",{key:h},[e("div",pe,[e("p",ve,a(t.name),1),e("p",he,"৳ "+a(t.amount),1)])]))),128)),xe,e("div",fe,[me,e("p",be,"৳ "+a(j()),1)]),ge])),ye,e("div",_e,[e("div",we,[e("div",ke,[e("input",{type:"checkbox",value:o.received,class:"form-checkbox",id:"received"},null,8,Ne)]),Se]),je])]),Pe])])])):y("",!0),d.value==="voucherList"?(n(),r("div",Ve,[Ce,e("div",De,[(n(!0),r(x,null,f(A(_),t=>(n(),r("div",{key:t.id,class:"flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 p-2 w-80 md:w-full"},[e("p",Le,[Ae,c(" "+a(t.voucherNo),1)]),e("p",Te,[Me,c(" "+a(t.date),1)]),e("p",$e,[Je,c(" "+a(t.name),1)]),e("p",Be,[Ge,c(" "+a(t.amount),1)]),Ie]))),128))]),e("div",Ee,[e("button",{onClick:s[4]||(s[4]=t=>g(i.value-1)),disabled:i.value===1,class:"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"}," Previous ",8,Fe),(n(!0),r(x,null,f(b.value,t=>(n(),r("button",{key:t,onClick:h=>g(t),class:u([{"bg-cyan-600 text-white":i.value===t},"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"])},a(t),11,Re))),128)),e("button",{onClick:s[5]||(s[5]=t=>g(i.value+1)),disabled:i.value===b.value,class:"border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600 mx-1 cursor-pointer hover:bg-cyan-600 hover:text-white"}," Next ",8,We)])])):y("",!0)])]))}};export{Oe as default};
