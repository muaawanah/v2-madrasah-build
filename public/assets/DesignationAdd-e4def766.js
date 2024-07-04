import{r as a,o,b as d,e,d as n,x as r}from"./index-ca119b07.js";const c={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},l={key:0,class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},i=r('<h3 class="text-xl font-semibold text-center">Add Designation</h3><div class="flex flex-col gap-2"><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Designation Name"><textarea class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Description"></textarea></div><hr class="border-t border-gray-300"><div class=""><div><p><strong>Added by: </strong>{ Name }</p></div></div>',4),p=e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),g=e("h2",{class:"text-center text-2xl font-bold"},"Designation List",-1),x=r('<div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 p-1"><p class="col-span-1 px-2"><strong>SL</strong></p><p class="col-span-3 px-2"><strong>Designation Name</strong></p><p class="col-span-3 px-2"><strong>Added by</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div><div class="flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 p-1 w-80 md:w-full"><p class="col-span-1 px-2"><strong class="md:hidden">SL:</strong> { 123 }</p><p class="col-span-3 text-left px-2"><strong class="md:hidden">Name:</strong> { dfghdfg } </p><p class="col-span-3 px-2"><strong class="md:hidden">Added by:</strong> { sgds }</p><div class="flex items-center gap-3 col-span-1 px-4 rounded"><button><i class="fad fa-edit text-cyan-600"></i></button><button><i class="fad fa-trash-alt text-red-600"></i></button></div></div>',2),v={__name:"DesignationAdd",setup(u){const s=a(!1),t=()=>{s.value=!s.value};return(f,b)=>(o(),d("div",c,[s.value?(o(),d("div",l,[i,e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:t}," Cancel "),p])])):n("",!0),e("div",{class:"flex flex-col gap-1"},[e("div",{class:"flex justify-between gap-4"},[g,e("div",null,[e("button",{onClick:t,class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Add new ")])]),x])]))}};export{v as default};
