import{_ as e,a as i,o as a,b as d,e as s,g as n,x as c}from"./index-cc373fef.js";const l="/assets/logo-14a495b0.png",r="/assets/Sign180X80-5f9f3142.jpg",o={},v={class:"container mx-auto mt-4"},p={class:"flex flex-col items-center"},x={class:"md:w-[794px]"},m={class:"w-full bg-white px-12 py-4 print:py-0 print:px-4 relative -z-20 overflow-hidden"},f=s("div",{class:"absolute inset-0 w-full h-full -z-10 flex justify-center items-center"},[s("img",{class:"opacity-10",src:l})],-1),g=c('<div class="mt-2 flex items-center justify-center gap-4 text-lg font-bold"><div>{ exam.name }</div><div>{ (data.exam.session) } Hijri</div></div><div class="mt-1.5 mb-2 flex items-center justify-center z-10"><div class="rounded-md border px-4 py-0.5 text-center text-2xl font-bold print:border-black print:text-black"> Admit Card </div></div><div class="grid grid-cols-5"><div class="col-span-3 flex gap-2"><div class="w-24 text-gray-500 print:text-black">Student Name</div><span>:</span><div>{ student.name }</div></div><div class="col-span-2 flex gap-2"><div class="w-20 text-gray-500 print:text-black">Reg. No.</div><span>:</span><div>{ (student.registration) }</div></div><div class="col-span-3 flex gap-2"><div class="w-24 text-gray-500 print:text-black">Class</div><span>:</span><div>{ student.currentClassName }</div></div><div class="col-span-2 flex gap-2"><div class="w-20 text-gray-500 print:text-black">Class Roll</div><span>:</span><div>{ (student.currentClassRoll) }</div></div><div class="col-span-3 flex gap-2"><div class="w-24 text-gray-500 print:text-black">Guardian</div><span>:</span><div>{ student.guardianInfo.name }</div></div><div class="col-span-2 flex gap-2"><div class="w-20 text-gray-500 print:text-black">Seat No.</div><span>:</span><div>{ student.seatNumber }</div></div></div><hr class="mt-1"><div class="grid py-1"><div class="text-md font-bold">Subjects with Subject Codes:</div><div class="grid grid-cols-3 gap-x-3 px-3"><div class="text-sm font-semibold">{ (subject.code) } - { subject.name }</div></div></div><hr class="mb-1"><div class="flex items-end justify-between gap-4 py-2"><div class=""><div class="text-xs">Important Information for Candidates</div><div class="whitespace-pre-wrap text-xs print:px-4 md:px-6"> { $page.props.settings.admitCardText } </div></div><div class="flex min-w-max flex-col items-center justify-center"><img src="'+r+'" class="w-28"><div>Chairman&#39;s Signature</div></div></div>',7);function u(_,b){const t=i("letter-head");return a(),d("div",v,[s("div",p,[s("div",x,[s("div",m,[f,n(t,{photoUrl:"student.imageUrl || '/images/hijab-icon.jpg'"}),g])])])])}const w=e(o,[["render",u]]);export{w as default};
