import{r as c,o as d,c as o,b as e,e as r,h as a}from"./index-515b04a1.js";const l={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},n={class:"md:w-[720px] flex flex-col md:gap-1 gap-2 items-center"},i=e("h2",{class:"text-center text-2xl font-bold"},"Package List",-1),x={class:"flex justify-center"},p={key:0,class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl z-50"},f=a('<h3 class="text-xl font-semibold text-center">Add Package</h3><div class="flex flex-col gap-2"><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Package Name"><textarea class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Description"></textarea></div><hr class="border-t border-gray-300"><div class=""><div><p><strong>Added by: </strong>{ Name }</p></div></div>',4),g=e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),b=a('<div class="hidden w-full md:grid grid-cols-8 bg-white text-center rounded shadow divide-x-2 md:p-1 p-2"><p class="col-span-1 px-2"><strong>SL</strong></p><p class="col-span-3 px-2"><strong>Package Name</strong></p><p class="col-span-3 px-2"><strong>Description</strong></p><p class="col-span-1 px-2"><strong>Action</strong></p></div><div class="flex flex-col items-start md:grid md:grid-cols-8 bg-white text-center rounded shadow md:divide-x-2 w-80 md:w-full md:p-1 p-2 md:items-center"><p class="col-span-1 px-2"><strong class="md:hidden">SL:</strong> { 123 }</p><p class="col-span-3 px-2"><strong class="md:hidden">Package Name:</strong> { dfghdfg }</p><p class="col-span-3 px-2"><strong class="md:hidden">Description:</strong> { sgds sfgsdkfj dhdfh dfhdfh dfhdf vcbcvb cxbxcbx xcbxb xzgvbxc xbxbxbxc xbvx xcvb xbvxcb xvc } </p><div class="flex items-center gap-3 col-span-1 px-4 rounded"><button><i class="fad fa-edit text-cyan-600"></i></button><button><i class="fad fa-trash-alt text-red-600"></i></button></div></div><div class="w-80 md:w-full flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"><i class="far fa-exclamation-triangle text-3xl"></i><h1 class="text-xl">Caution</h1><div class="text-red-500">**The most sensetive area of this software. Use carefully.</div></div>',3),w={__name:"AddPackage",setup(u){const s=c(!1),t=()=>{s.value=!s.value};return(h,v)=>(d(),o("div",l,[e("div",n,[e("div",{class:"w-full flex flex-col md:flex-row md:justify-between items-center"},[i,e("div",null,[e("button",{onClick:t,class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Add new ")])]),e("div",x,[s.value?(d(),o("div",p,[f,e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:t}," Cancel "),g])])):r("",!0)]),b])]))}};export{w as default};
