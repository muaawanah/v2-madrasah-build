import{r as c,o as a,b as d,e,d as o,x as l}from"./index-e8f0b3ba.js";const r={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},n=e("h2",{class:"text-center text-2xl font-bold"},"Add Exam",-1),i=e("i",{class:"fal fa-plus-square"},null,-1),p=[i],x={key:0,class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},f=l('<h3 class="text-xl font-semibold text-center">Add Exam</h3><div class="flex flex-col gap-2"><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Exam Name"><div class="flex flex-col border gap-2 pb-2"><h5 class="bg-gray-50 text-center">Assign Class &amp; Add Fee</h5><div class="flex items-center justify-between px-2"><div class="flex items-center gap-2"><input class="check" type="checkbox" id="fee-1"><label for="fee-1">Class-1</label></div><input class="border-2 rounded block w-20 px-2 py-1" type="number" placeholder="Tk"></div><div class="flex items-center justify-between px-2"><div class="flex items-center gap-2"><input class="check" type="checkbox" id="fee-1"><label for="fee-1">class-2</label></div><input class="border-2 rounded block w-20 px-2 py-1" type="number" placeholder="Tk"></div></div></div><hr class="border-t border-gray-300"><div class=""><div><p><strong>Added by: </strong>{ Name }</p></div></div>',4),u=e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),g=l('<div class="max-w-5xl flex flex-col gap-1"><div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>SL</strong></p><p class="col-span-3 px-2"><strong>Exam Name</strong></p><p class="col-span-3 px-2"><strong>Classes</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div><div class="flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2 md:items-center"><p class="col-span-1 px-2"><strong class="md:hidden">SL:</strong> { 123 }</p><p class="col-span-3 px-2"><strong class="md:hidden">Exam Name:</strong> { dfghdfg }</p><p class="col-span-3 px-2"><strong class="md:hidden">Classes:</strong> { Class-1, class-2, class-3, class-4, class-5 } </p><div class="flex items-center gap-3 col-span-1 px-4 rounded"><button><i class="fad fa-edit text-cyan-600"></i></button><button><i class="fad fa-trash-alt text-red-600"></i></button></div></div></div><div class="flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"><i class="far fa-exclamation-triangle text-3xl"></i><h1 class="text-xl">Caution</h1><div class="text-red-500">**Avoid adding exam unless necessary.</div></div>',2),y={__name:"AddExam",setup(m){const s=c(!1),t=()=>{s.value=!s.value};return(b,h)=>(a(),d("div",r,[e("div",{class:"flex items-center gap-4"},[n,e("div",null,[e("button",{onClick:t,class:"hover:text-cyan-600"},p)])]),s.value?(a(),d("div",x,[f,e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:t}," Cancel "),u])])):o("",!0),g]))}};export{y as default};
