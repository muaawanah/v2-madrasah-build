import{r as x,o,b as i,e,n as l,d as a,F as f,l as m,t as g,x as c,J as u,h as b,p as C,C as j}from"./index-d23e54bc.js";const N={class:"container mx-auto"},P={class:"flex flex-col items-center justify-center mt-2 gap-4"},R={class:"flex flex-wrap gap-2 justify-center mt-4"},F={key:0,class:"w-full max-w-3xl md:p-8 p-4 bg-white rounded shadow-md"},S=e("div",{class:"text-center"},[e("h1",{class:"text-3xl font-bold text-cyan-700"},"Student Profile")],-1),D={class:"border"},M={class:"p-2"},V=e("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[e("h3",{class:"text-lg font-semibold"},"Student Information"),e("div",{class:"cursor-pointer hover:text-blue-600"},[e("i",{class:"fad fa-edit"})])],-1),T={class:"flex flex-col md:flex-row px-2 justify-between gap-4"},B=c('<div class="grid gap-1"><p><strong>Name:</strong> [Student Name]</p><p><strong>Gender:</strong> [Gender]</p><p><strong>Date of Birth:</strong> [Date of Birth]</p><p><strong>Blood Group:</strong> [Blood Group]</p><p><strong>Birth Certificate No:</strong> [Birth Certificate No]</p></div>',1),I={class:"text-center col-span-1"},O={class:"flex items-center justify-center"},z={for:"studentPhoto",class:"cursor-pointer"},A={key:0,src:u,alt:"Student Photo",class:"h-28 w-28 object-cover rounded-full border"},U={key:1,class:"h-28 w-28 p-2 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-700"},G=e("div",{class:"flex flex-col gap-2 text-gray-500 hover:text-cyan-600"},[e("i",{class:"fad fa-file-upload text-xl"}),e("h4",{class:""},"Upload Photo")],-1),$=[G],H=e("h4",{for:"studentPhoto",class:"block text-sm font-medium text-gray-700"}," Student Photo ",-1),L=c('<div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Parental Information</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-2"><div class="grid grid-cols-1"><p><strong>Father&#39;s Name:</strong> [Father&#39;s Name]</p><p><strong>Phone:</strong> [Father&#39;s Phone]</p><p><strong>Occupation:</strong> [Father&#39;s Occupation]</p></div><hr class="md:hidden"><div class="md:border-l md:pl-2"><div class="grid grid-cols-1"><p><strong>Mother&#39;s Name:</strong> [Mother&#39;s Name]</p><p><strong>Phone:</strong> [Mother&#39;s Phone]</p><p><strong>Occupation:</strong> [Mother&#39;s Occupation]</p></div></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Guardian Information</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-1 px-2"><p><strong>Name:</strong> [Guardian&#39;s Name]</p><p><strong>Relation:</strong> [Relation]</p><p><strong>Phone:</strong> [Guardian&#39;s Phone]</p></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Address</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-2"><div class="grid grid-cols-1 gap-1"><h4 class="font-semibold">Current Address</h4><p><strong>House No. </strong>House No.</p><p><strong>Road No. </strong>Road No.</p><p><strong>Village: </strong>Village Village</p><p><strong>Post office: </strong>Post office</p><p><strong>Upazilla: </strong>Upazilla Upazilla</p><p><strong>District: </strong>District</p><p><strong>Division: </strong>Division</p></div><hr class="md:hidden"><div class="md:border-l md:pl-2"><div class="grid grid-cols-1 gap-1"><h4 class="font-semibold">Permanent Address</h4><p><strong>House No. </strong>House No.</p><p><strong>Road No. </strong>Road No.</p><p><strong>Village: </strong>Village Village</p><p><strong>Post office: </strong>Post office</p><p><strong>Upazilla: </strong>Upazilla Upazilla</p><p><strong>District: </strong>District</p><p><strong>Division: </strong>Division</p></div></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Academic Information</h3></div><div class="grid grid-cols-1 md:grid-cols-2 gap-1 px-2"><p><strong>Class:</strong> [Class]</p><p><strong>Roll:</strong> [Roll]</p><p><strong>Registration:</strong> [Registration]</p><p><strong>Session:</strong> [Session]</p></div></div>',4),q={key:1,class:"flex flex-col gap-4"},E=e("h2",{class:"text-center text-2xl font-bold"},"Collect Fees",-1),J={class:"grid md:grid-cols-2 grid-cols-1 gap-4"},Q={class:"fee-list flex flex-col gap-2 w-80"},K=["onClick"],W=["value"],X={class:"flex items-center justify-between w-full"},Y={class:"text-lg"},Z={class:""},ee={class:"flex flex-col gap-4"},te={class:"flex flex-col gap-1 bg-white rounded p-4 border border-gray-300 w-80"},se=c('<h3 class="text-xl font-semibold text-center">Invoice</h3><div class="flex flex-col"><div class="grid grid-cols-2 text-sm"><p><strong>Invoice No: </strong>{0123}</p><p><strong>Date: </strong>{12-10-23}</p></div><hr class="my-2 border-t border-gray-300"><div class="grid grid-col gap-1"><p><strong>Name: </strong>{Student Name}</p><p><strong>Class: </strong>{Class}</p><div class="grid grid-cols-2 text-sm"><p><strong>Roll: </strong>{123}</p><p><strong>Reg: </strong>{12356}</p></div></div></div><div class="my-2 flex flex-row justify-between bg-gray-200 px-2 font-bold"><p>purpose</p><p>Amount</p></div>',3),oe={key:0,class:"flex justify-center"},ie=e("p",null,"No fees selected.",-1),re=[ie],ne={key:1,class:"px-2"},de={class:"flex justify-between items-center"},le={class:"font-semibold"},ae={class:"text-gray-600"},ce=e("hr",{class:"my-2 border-t border-gray-300"},null,-1),pe={class:"flex justify-between items-center"},ge=e("p",{class:"font-semibold"},"Total Amount:",-1),ve={class:"text-xl font-bold"},xe=c('<hr class="my-2 border-t border-gray-300"><div class="flex justify-between items-center"><label for="deposit" class="font-semibold">Deposited:</label><br><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded-md block w-16 px-1 py-0.5 text-right" type="number" required=""></div><hr class="my-2 border-t border-gray-300"><div class="flex justify-between items-center text-red-500"><p class="font-semibold">Due:</p><p class="text-xl font-bold">৳ {500}</p></div>',4),ue=e("hr",{class:"my-2 border-t border-gray-300"},null,-1),he={class:""},fe={class:"flex gap-1 text-xs"},me={class:""},be=["value"],ye=e("div",null,[e("label",{for:"received",class:"ms-2"},"I have received above amount of money")],-1),_e=e("div",null,[e("p",null,[e("strong",null,"Received by: "),b("{Receiver Name}")])],-1),we=e("div",{class:"flex gap-2 justify-center"},[e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save "),e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"},[e("i",{class:"fad fa-print"}),b(" Print ")])],-1),ke={key:2},Ce={class:"flex flex-wrap gap-8 md:flex-row justify-center"},je={class:"w-[204px] space-y-2"},Ne=e("h3",{class:"text-center font-bold print:hidden mt-4"},"সামনের অংশ",-1),Pe={class:"h-[324px] border bg-white"},Re=c('<div class="flex flex-col items-center justify-center gap-1 pt-2.5 pb-1.5"><img src="'+u+'" class="h-9" alt="Logo"><div class="flex flex-col items-center justify-end space-y-1"><h2 class="text-[13px] font-bold text-cyan-950">Madrasah Name</h2></div></div><div class="flex h-[20px] items-center justify-center bg-cyan-600 text-white mt-[-5px]"><h2 class="text-[11px] mt-[3px]">শিক্ষার্থীর পরিচয়পত্র</h2></div><div class="mt-[50px] h-[118px] bg-cyan-900"><div class="mx-auto -mb-11 aspect-[50/50] w-[90px] -translate-y-1/2 overflow-hidden border-2 border-cyan-500 rounded-lg"><img src="'+u+'" class="h-full w-full object-cover"></div><div class="text-center text-[13px] font-semibold text-white"><h1 class="pb-[2px] line-clamp-1 mt-[2px] text-cyan-100">{ student.name }</h1><div class="flex items-center justify-center gap-2 text-[10px]"><div class="w-20 shrink-0 grow-0 text-right">শ্রেণী :</div><div class="shrink grow text-left">{ Current Class }</div></div><div class="flex items-center justify-center gap-2 text-[10px]"><div class="w-20 shrink-0 grow-0 text-right">রোল :</div><div class="shrink grow text-left">{ student.roll }</div></div><div class="flex items-center justify-center gap-2 text-[10px]"><div class="w-20 shrink-0 grow-0 text-right">রেজি. নং :</div><div class="shrink grow text-left">{ student.registration }</div></div></div></div>',3),Fe={class:"flex h-[38px] items-center justify-center"},Se=["src"],De=e("div",{class:"flex items-center justify-center"},[e("p",{class:"text-[10px] font-bold text-cyan-950"},"অধ্যক্ষের স্বাক্ষর")],-1),Me=c('<div class="w-[204px] space-y-2"><h3 class="text-center font-bold print:hidden mt-4">পিছনের অংশ</h3><div class="relative h-[324px] border bg-white py-2.5"><div class="flex items-center justify-center gap-1 text-[10px] font-bold"><div class="shrink-0 grow-0">মেয়াদ :</div><div class="shrink-0 grow-0">{ মেয়াদ }</div></div><p class="text-center text-[10px]">তথ্য যাচাইয়ের জন্য স্ক্যান করুন</p><div class="mt-1 flex items-center justify-center"><img class="h-[91px] w-[91px] border border-black p-1 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png" alt=""></div><p class="mt-2 px-8 text-center text-[9px]"> পরিচয়পত্রটি কোথাও পাওয়া গেলে নিম্নোক্ত যেকোন ঠিকানায় পৌঁছে দিন </p><h3 class="mt-2 text-center text-[10px] font-bold">শিক্ষার্থীর ঠিকানা</h3><div class="px-8 text-center text-[9px]"> { বর্তমান ঠিকানা }, { থানা এরিয়া }, { ডিস্ট্রিক্ট জেলা } </div><div class="flex items-center justify-center gap-1 text-[9px] font-bold"><div class="shrink-0 grow-0">অভিভাবকের ফোন :</div><div class="shrink-0 grow-0">{ 0123456789 }</div></div><div class="absolute bottom-0 left-0 right-0 z-10 w-full"><div class="flex flex-col items-center justify-end space-y-1 bg-cyan-900 py-2 text-white"><h2 class="text-[12px] font-bold text-cyan-100">{ প্রতিষ্ঠানের নাম }</h2><h2 class="px-6 text-center text-[8px] font-bold text-white"> { প্রতিষ্ঠানের নাম ঠিকানা } </h2><div class="flex items-center justify-center gap-1 text-[9px] font-bold"><div class="shrink-0 grow-0">ফোন :</div><div class="shrink-0 grow-0">{ প্রতিষ্ঠানের ফোন }</div></div></div></div></div></div>',1),Ve={key:3},Te={key:4},Be=c('<div><div class="bg-white shadow rounded md:w-96 w-80 p-4"><h2 class="text-center text-2xl font-bold">Migration Form</h2><p class="text-center">Current Class Info</p><div class="grid grid-col gap-1"><p><strong>Name: </strong>{Student Name}</p><p><strong>Class: </strong>{Class}</p><div class="grid grid-cols-2 text-sm"><p><strong>Roll: </strong>{123}</p><p><strong>Reg: </strong>{12356}</p></div></div><hr class="my-2 border-t border-gray-300"><p class="text-center">Migrated To</p><label for="MigratedTo">Select Class</label><select name="MigratedTo" id="MigratedTo" class="rounded w-full border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"><option value="1">Option 1</option><option value="2">Option 1</option><option value="3">Option 1</option><option value="4">Option 1</option></select><div class="flex gap-2 justify-center mt-4"><button class="border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"> Save </button></div></div></div>',1),Ie=[Be],Oe={key:5},Ue={__name:"StudentView",setup(ze){const y=x([{name:"Fee 1",amount:1e3},{name:"Fee 2",amount:1500},{name:"Fee 4",amount:1200},{name:"Fee 5",amount:1200},{name:"Fee 6",amount:500},{name:"Fee 7",amount:100},{name:"Fee 8",amount:9890}]),n=x("profile"),d=x([]),p=r=>{n.value=r},_=()=>d.value.reduce((r,t)=>r+t.amount,0),w=r=>d.value.includes(r),k=r=>{const t=d.value.indexOf(r);t===-1?d.value.push(r):d.value.splice(t,1)};return(r,t)=>(o(),i("div",N,[e("div",P,[e("div",R,[e("button",{class:l(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":n.value==="profile"}]),onClick:t[0]||(t[0]=s=>p("profile"))}," Profile ",2),e("button",{class:l(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":n.value==="fees"}]),onClick:t[1]||(t[1]=s=>p("fees"))}," Collect Fees ",2),e("button",{class:l(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":n.value==="idCard"}]),onClick:t[2]||(t[2]=s=>p("idCard"))}," ID Card ",2),e("button",{class:l(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":n.value==="resulCard"}]),onClick:t[3]||(t[3]=s=>p("resulCard"))}," Result Card ",2),e("button",{class:l(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":n.value==="migration"}]),onClick:t[4]||(t[4]=s=>p("migration"))}," Migration ",2),e("button",{class:l(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":n.value==="tc"}]),onClick:t[5]||(t[5]=s=>p("tc"))}," TC Paper ",2)]),n.value==="profile"?(o(),i("div",F,[S,e("div",D,[e("div",M,[V,e("div",T,[B,e("div",I,[e("div",O,[e("label",z,[r.studentPhoto?(o(),i("img",A)):(o(),i("div",U,$))]),e("input",{type:"file",id:"studentPhoto",class:"hidden",onChange:t[6]||(t[6]=(...s)=>r.handlePhotoChange&&r.handlePhotoChange(...s))},null,32)]),H])])])]),L])):a("",!0),n.value==="fees"?(o(),i("div",q,[E,e("div",J,[e("div",Q,[(o(!0),i(f,null,m(y.value,(s,v)=>(o(),i("div",{key:v,class:l([{"border-2 border-cyan-600 text-cyan-600":w(s)},"flex items-center gap-4 bg-white rounded shadow px-4 py-2 transition-transform transform hover:scale-105 hover:text-cyan-600 cursor-pointer"]),onClick:h=>k(s)},[C(e("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=h=>d.value=h),value:s,class:"form-checkbox"},null,8,W),[[j,d.value]]),e("div",X,[e("h4",Y,g(s.name),1),e("p",Z,"৳ "+g(s.amount),1)])],10,K))),128))]),e("div",ee,[e("div",te,[se,d.value.length===0?(o(),i("div",oe,re)):(o(),i("div",ne,[(o(!0),i(f,null,m(d.value,(s,v)=>(o(),i("div",{key:v},[e("div",de,[e("p",le,g(s.name),1),e("p",ae,"৳ "+g(s.amount),1)])]))),128)),ce,e("div",pe,[ge,e("p",ve,"৳ "+g(_()),1)]),xe])),ue,e("div",he,[e("div",fe,[e("div",me,[e("input",{type:"checkbox",value:r.received,class:"form-checkbox",id:"received"},null,8,be)]),ye]),_e])]),we])])])):a("",!0),n.value==="idCard"?(o(),i("div",ke,[e("div",Ce,[e("div",je,[Ne,e("div",Pe,[Re,e("div",Fe,[r.signature?(o(),i("img",{key:0,src:r.signature,class:"h-full w-full object-contain"},null,8,Se)):a("",!0)]),De])]),Me])])):a("",!0),n.value==="resulCard"?(o(),i("div",Ve,"No Result Available")):a("",!0),n.value==="migration"?(o(),i("div",Te,Ie)):a("",!0),n.value==="tc"?(o(),i("div",Oe,"this is tc")):a("",!0)])]))}};export{Ue as default};
