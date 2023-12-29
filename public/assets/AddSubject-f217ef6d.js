import{r,o,c as d,b as e,e as a,h as c}from"./index-0a9e1ba6.js";const n={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},l={class:"flex flex-col md:gap-1 gap-2"},i=e("h2",{class:"text-center text-2xl font-bold"},"Subject List of { __Class }",-1),p={class:"flex justify-center"},u={key:0,class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl z-50"},x=c('<h3 class="text-xl font-semibold text-center">Add Subject</h3><div class="flex flex-col gap-2"><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Subject Name"><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Description"></div><hr class="border-t border-gray-300"><div class=""><div><p><strong>Added by: </strong>{ Name }</p></div></div>',4),g=e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),b=c('<div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>SL</strong></p><p class="col-span-3 px-2"><strong>Subject Name</strong></p><p class="col-span-3 px-2"><strong>Book Name</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div><div class="flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2"><p class="col-span-1 px-2"><strong class="md:hidden">SL:</strong> { 123 }</p><p class="col-span-3 px-2"><strong class="md:hidden">Subject Name:</strong> { dfghdfg }</p><p class="col-span-3 px-2"><strong class="md:hidden">Book Name:</strong> { sgds }</p><div class="flex items-center gap-3 col-span-1 px-4 rounded"><button><i class="fad fa-edit text-cyan-600"></i></button><button><i class="fad fa-trash-alt text-red-600"></i></button></div></div>',2),y={__name:"AddSubject",setup(f){const s=r(!1),t=()=>{s.value=!s.value};return(h,m)=>(o(),d("div",n,[e("div",l,[e("div",{class:"flex flex-col md:flex-row md:justify-between items-center"},[i,e("div",null,[e("button",{onClick:t,class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Add new ")])]),e("div",p,[s.value?(o(),d("div",u,[x,e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:t}," Cancel "),g])])):a("",!0)]),b])]))}};export{y as default};
