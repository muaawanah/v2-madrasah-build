import{e as i,o as a,c as o,a as e,h as u,b as c,w as l,g as d,k as f,d as r,R as n}from"./index-d97bace0.js";const x={class:"contaner mx-auto flex flex-col items-center gap-4 mt-4"},_=e("h2",{class:"text-center text-2xl font-bold"},"Add Classs of {__}",-1),h=e("i",{class:"fal fa-plus-square"},null,-1),p=[h],b={key:0,class:"absolute flex flex-col gap-2 bg-white rounded-lg p-4 border-gray-300 w-80 md:w-96 shadow-2xl"},g=f('<h3 class="text-xl font-semibold text-center">Add Class</h3><div class="flex flex-col gap-2"><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Class Name"><textarea class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Description"></textarea></div><hr class="border-t border-gray-300"><div class=""><div><p><strong>Added by: </strong>{ Name }</p></div></div>',4),v=e("button",{class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"}," Save ",-1),m={class:"w-full flex flex-wrap gap-4 justify-center"},y={class:"main-card"},w=e("h2",{class:"md:text-xl font-bold"},"Classs-1",-1),C=e("i",{class:"fal fa-edit"},null,-1),k=[C],j={class:"main-card"},A=e("h2",{class:"md:text-xl font-bold"},"Classs-2",-1),N=e("i",{class:"fal fa-edit"},null,-1),V=[N],S=e("div",{class:"flex flex-col items-center mt-8 bg-white p-2 rounded gap-2 shadow"},[e("i",{class:"far fa-exclamation-triangle text-3xl"}),e("h1",{class:"text-xl"},"Caution"),e("div",{class:"text-red-500"},"**The most sensetive area of this software.")],-1),R={__name:"AddClass",setup(T){const t=i(!1),s=()=>{t.value=!t.value};return(q,B)=>(a(),o("div",x,[e("div",{class:"flex items-center justify-between gap-4"},[_,e("div",null,[e("button",{onClick:s,class:"hover:text-cyan-600"},p)])]),t.value?(a(),o("div",b,[g,e("div",{class:"flex gap-2 justify-between"},[e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white",onClick:s}," Cancel "),v])])):u("",!0),e("div",m,[e("div",y,[e("div",{class:"flex flex-wrap justify-center items-center gap-2"},[w,e("div",null,[e("button",{onClick:s,class:"hover:text-cyan-600"},k)])]),c(d(n),{to:"/settings/department/class/add-subject",class:"btn-1"},{default:l(()=>[r("Add Subject")]),_:1})]),e("div",j,[e("div",{class:"flex flex-wrap justify-center items-center gap-2"},[A,e("div",null,[e("button",{onClick:s,class:"hover:text-cyan-600"},V)])]),c(d(n),{to:"/settings/department/class/add-subject",class:"btn-1"},{default:l(()=>[r("Add Subject")]),_:1})])]),S]))}};export{R as default};
