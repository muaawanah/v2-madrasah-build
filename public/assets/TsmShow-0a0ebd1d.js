import{r as p,o as a,b as i,e as s,n as d,d as g,h as l,z as c}from"./index-54d168bd.js";const f={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},m={class:"flex flex-wrap gap-2 justify-center"},h={key:0,class:"md:w-[794px] md:h-[1123px] md:p-8 p-4 bg-white rounded shadow-md"},v=s("div",{class:"text-center"},[s("h1",{class:"text-3xl font-bold text-cyan-700"},"Staff Profile")],-1),x={class:"border"},u={class:"p-2"},b=s("div",{class:"flex items-center bg-gray-100 mb-2 justify-between px-2"},[s("h3",{class:"text-lg font-semibold"},"Basic Information"),s("div",{class:"cursor-pointer hover:text-blue-600"},[s("i",{class:"fad fa-edit"})])],-1),y={class:"flex flex-col md:flex-row px-2 justify-between gap-4"},_=l('<div class="grid gap-1"><p><strong>Name:</strong> [Staff Name]</p><p><strong>Gender:</strong> [Gender]</p><p><strong>Date of Birth:</strong> [Date of Birth]</p><p><strong>Blood Group:</strong> [Blood Group]</p><p><strong>Nationality:</strong> [Select Country]</p><p><strong>NID No:</strong> [Nid or Birth Certificate No]</p><p><strong>Father&#39;s Name:</strong> [Father&#39;s Name]</p><p><strong>Mother&#39;s Name:</strong> [Mother&#39;s Name]</p></div>',1),N={class:"flex flex-col gap-4 text-center col-span-1"},P={class:"flex items-center justify-center"},w={for:"staffPhoto",class:"cursor-pointer"},C={key:0,src:c,alt:"Staff Photo",class:"h-28 w-28 object-cover rounded-full border"},k={key:1,class:"h-28 w-28 p-2 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-700"},j=s("div",{class:"flex flex-col gap-2 text-gray-500 hover:text-cyan-600"},[s("i",{class:"fad fa-file-upload text-xl"}),s("h4",{class:""},"Upload Photo")],-1),B=[j],R=s("h4",{for:"staffPhoto",class:"block text-sm font-medium text-gray-700 mt-1"}," Staff Photo ",-1),D={class:"flex items-center justify-center"},S={for:"staffPhoto",class:"cursor-pointer"},V={key:0,src:c,alt:"Staff Photo",class:"h-12 w-28 object-cover rounded-full border"},z={key:1,class:"h-12 w-28 p-2 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-700"},A=s("div",{class:"flex flex-col gap-2 text-gray-500 hover:text-cyan-600"},[s("h4",{class:""},"Signature")],-1),I=[A],U=s("h4",{for:"staffPhoto",class:"block text-sm font-medium text-gray-700 mt-1"}," Staff Signature ",-1),G=l('<div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Contact Information</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-2"><div class="grid grid-cols-1"><p><strong>Phone 1:</strong> [0123456789]</p><p><strong>Whatsapp:</strong> [0123456789]</p></div><hr class="md:hidden"><div class="md:border-l md:pl-2"><div class="grid grid-cols-1"><p><strong>Email: </strong> [your@email.com]</p><p><strong>Facebook: </strong> [FB Acc Name]</p></div></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Address</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-2"><div class="grid grid-cols-1 gap-1"><h4 class="font-semibold">Current Address</h4><p><strong>House No. </strong>House No.</p><p><strong>Road No. </strong>Road No.</p><p><strong>Village: </strong>Village Village</p><p><strong>Post office: </strong>Post office</p><p><strong>Upazilla: </strong>Upazilla Upazilla</p><p><strong>District: </strong>District</p><p><strong>Division: </strong>Division</p></div><hr class="md:hidden"><div class="md:border-l md:pl-2"><div class="grid grid-cols-1 gap-1"><h4 class="font-semibold">Permanent Address</h4><p><strong>House No. </strong>House No.</p><p><strong>Road No. </strong>Road No.</p><p><strong>Village: </strong>Village Village</p><p><strong>Post office: </strong>Post office</p><p><strong>Upazilla: </strong>Upazilla Upazilla</p><p><strong>District: </strong>District</p><p><strong>Division: </strong>Division</p></div></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Academic Qualification</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="hidden w-full md:grid grid-cols-12 text-center divide-x-2 p-1"><p class="col-span-2 px-2"><strong>Exam Name</strong></p><p class="col-span-3 px-2"><strong>Institute</strong></p><p class="col-span-3 px-2"><strong>Board</strong></p><p class="col-span-1 px-2"><strong>Roll</strong></p><p class="col-span-1 px-2"><strong>Year</strong></p><p class="col-span-2 px-2"><strong>Result</strong></p></div><div class="flex w-full flex-col gap-1"><div class="flex flex-col items-start md:grid md:grid-cols-12 text-center md:divide-x-2 p-1 w-80 md:w-full"><p class="col-span-2 px-2"><strong class="md:hidden">Exam Name:</strong> { Exam Name } </p><p class="col-span-3 px-2"><strong class="md:hidden">Institute:</strong> { Institute } </p><p class="col-span-3 px-2"><strong class="md:hidden">Board:</strong> { Board }</p><p class="col-span-1 px-2"><strong class="md:hidden">Roll:</strong> { Roll }</p><p class="col-span-1 px-2"><strong class="md:hidden">Year:</strong> { Year }</p><p class="col-span-2 px-2"><strong class="md:hidden">Result:</strong> { Result }</p></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Referance Information</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-1 px-2"><p><strong>Name:</strong> [Guardian&#39;s Name]</p><p><strong>Relation:</strong> [Relation]</p><p><strong>Phone:</strong> [Guardian&#39;s Phone]</p><p><strong>Aaddress:</strong> [Aaddress]</p></div></div>',4),H={__name:"TsmShow",setup(E){const r=p("profile"),n=o=>{r.value=o};return(o,t)=>(a(),i("div",f,[s("div",m,[s("button",{class:d(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":r.value==="profile"}]),onClick:t[0]||(t[0]=e=>n("profile"))}," Profile ",2),s("button",{class:d(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":r.value==="pay"}]),onClick:t[1]||(t[1]=e=>n("pay"))}," Make Payment ",2),s("button",{class:d(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":r.value==="promotion"}]),onClick:t[2]||(t[2]=e=>n("promotion"))}," Promotion ",2),s("button",{class:d(["border-2 border-cyan-600 rounded-md p-1 px-2 md:px-4 text-cyan-600",{"bg-cyan-600 text-white":r.value==="discharge"}]),onClick:t[3]||(t[3]=e=>n("discharge"))}," Discharge ",2)]),s("div",null,[r.value==="profile"?(a(),i("div",h,[v,s("div",x,[s("div",u,[b,s("div",y,[_,s("div",N,[s("div",null,[s("div",P,[s("label",w,[o.staffPhoto?(a(),i("img",C)):(a(),i("div",k,B))]),s("input",{type:"file",id:"staffPhoto",class:"hidden",onChange:t[4]||(t[4]=(...e)=>o.handlePhotoChange&&o.handlePhotoChange(...e))},null,32)]),R]),s("div",null,[s("div",D,[s("label",S,[o.staffPhoto?(a(),i("img",V)):(a(),i("div",z,I))]),s("input",{type:"file",id:"staffPhoto",class:"hidden",onChange:t[5]||(t[5]=(...e)=>o.handlePhotoChange&&o.handlePhotoChange(...e))},null,32)]),U])])])])]),G])):g("",!0)])]))}};export{H as default};
