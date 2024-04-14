import{_ as t,a as s,o as a,b as n,e,f as r,w as c,h as i,g as l}from"./index-54d168bd.js";const d={},p={class:"container mx-auto mt-3"},f={class:"flex justify-center"},b={class:"absolute flex flex-col gap-2 bg-white rounded p-4 border-gray-300 w-80 md:w-96 shadow z-50"},u=i('<h3 class="text-xl font-semibold text-center">Add Session</h3><div class="flex flex-col gap-3"><select class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1"><option>Select Department</option><option>Department-1</option><option>Department-2</option></select><input class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1" type="Text" required="" placeholder="Session Name (2025-26 or 1445-46)"><div><h4>Select calendar type</h4><form class="flex items-center gap-2"><input type="radio" id="hijri" name="Calendar" value="Hijri"><label for="hijri">Hijri</label><input type="radio" id="gregorian" name="Calendar" value="Gregorian"><label for="gregorian">Gregorian</label><input type="radio" id="bangla" name="Calendar" value="Bangla"><label for="bangla">Bangla</label></form></div><div class="flex gap-2"><select class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1"><option>Starting month</option><option>Month-1</option><option>Month-2</option><option>Month-3</option><option>Month-4</option><option>Month-5</option></select><select class="border-2 border-gray-300 focus:border-2 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 rounded block w-full px-2 py-1"><option>Ending Month</option><option>Month-1</option><option>Month-2</option><option>Month-3</option><option>Month-4</option><option>Month-5</option></select></div><div><h4>Selected Class</h4><div class="flex gap-2 flex-wrap"><div class="flex items-center gap-2"><input class="check" type="checkbox" id="class-1"><label for="class-1">Class-1</label></div><div class="flex items-center gap-2"><input class="check" type="checkbox" id="class-2"><label for="class-2">Class-2</label></div><div class="flex items-center gap-2"><input class="check" type="checkbox" id="class-3"><label for="class-3">Class-3</label></div><div class="flex items-center gap-2"><input class="check" type="checkbox" id="class-4"><label for="class-4">Class-4</label></div><div class="flex items-center gap-2"><input class="check" type="checkbox" id="class-5"><label for="class-5">Class-5</label></div></div></div></div><hr class="border-t border-gray-300"><div class=""><div><p><strong>Added by: </strong>{ Name }</p></div></div>',4),h={class:"flex gap-2 justify-between"},g=e("button",{class:"border border-red-600 px-4 rounded text-red-600 hover:bg-red-600 hover:text-white"}," Cancel ",-1);function x(y,v){const o=s("RouterLink");return a(),n("div",p,[e("div",f,[e("div",b,[u,e("div",h,[g,r(o,{to:"/settings/session/add-step-2",class:"border border-cyan-600 px-4 rounded text-cyan-600 hover:bg-cyan-600 hover:text-white"},{default:c(()=>[l(" Save & Next ")]),_:1})])])])])}const _=t(d,[["render",x]]);export{_ as default};