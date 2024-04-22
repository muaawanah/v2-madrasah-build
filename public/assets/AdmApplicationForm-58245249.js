import{r,j as c,o as a,b as o,e,t as p,x as i}from"./index-4382be12.js";const u={class:"flex items-center justify-center mt-5"},v={class:"w-full max-w-3xl md:p-8 p-4 bg-white rounded shadow-md"},m=e("div",{class:"text-center"},[e("h1",{class:"text-3xl font-bold text-cyan-700"},"Admission Form")],-1),f={class:"flex justify-between items-center flex-col md:flex-row"},h={class:"flex flex-col gap-1 py-2"},b={class:"flex gap-2"},g=e("p",{class:"font-bold"},"Date:",-1),x=i('<div class="flex gap-2"><label class="font-bold">Admission Type:</label><div class="flex gap-4"><label><input type="radio" name="admissionType" value="Old"> Old</label><label><input type="radio" name="admissionType" value="New"> New</label></div></div>',1),y={class:"text-center"},w={class:"flex items-center justify-center"},_={for:"studentPhoto",class:"cursor-pointer"},P=["src"],N={key:1,class:"h-28 w-28 p-2 bg-gray-100 rounded-md flex items-center justify-center border-2 border-gray-700"},A=e("div",{class:"flex flex-col gap-2 text-gray-500 hover:text-cyan-600"},[e("i",{class:"fad fa-file-upload text-xl"}),e("h4",{class:""},"Upload Photo")],-1),D=[A],B=e("h4",{for:"studentPhoto",class:"block text-sm font-medium text-gray-700"}," Student Photo ",-1),C=i('<div class="border"><div class="p-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Student Information</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="px-2 space-y-2"><div class="grid md:grid-cols-3 gap-4"><div class="col-span-2"><p class="font-bold">Name</p><input class="w-full rounded-md" type="text" name="studentName" placeholder="Student Name"></div><div><label class="font-bold">Gender</label><div class="flex gap-4"><label><input type="radio" name="gender" value="Male"> Male</label><label><input type="radio" name="gender" value="Female"> Female</label></div></div></div><div class="grid md:grid-cols-3 gap-4"><div><p class="font-bold">Date of Birth</p><input class="w-full rounded-md" type="date" name="dob" placeholder="Date of Birth"></div><div><p class="font-bold">Birth Certificate No</p><input class="w-full rounded-md" type="text" name="birthCertificateNo" placeholder="Birth Certificate No"></div><div><p class="font-bold">Blood Group</p><select class="w-full rounded-md" name="bloodGroup" placeholder="Blood Group"><option value="A+">--Select--</option><option value="A+">A+</option><option value="A-">A-</option><option value="B+">B+</option><option value="B-">B-</option><option value="AB+">AB+</option><option value="AB-">AB-</option><option value="O+">O+</option><option value="O-">O-</option></select></div></div></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Parental Information</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-2"><div class="grid grid-cols-1 space-y-2"><div><p class="font-bold">Father&#39;s Name</p><input class="w-full rounded-md" type="text" name="fatherName" placeholder="Father&#39;s Name"></div><div><p class="font-bold">Phone</p><input class="w-full rounded-md" type="text" name="fatherPhone" placeholder="Father&#39;s Phone"></div><div><p class="font-bold">Occupation</p><input class="w-full rounded-md" type="text" name="fatherOccupation" placeholder="Father&#39;s Occupation"></div></div><hr class="md:hidden"><div class="md:border-l md:pl-2"><div class="grid grid-cols-1 space-y-2"><div><p class="font-bold">Mother&#39;s Name</p><input class="w-full rounded-md" type="text" name="motherName" placeholder="Mother&#39;s Name"></div><div><p class="font-bold">Phone</p><input class="w-full rounded-md" type="text" name="motherPhone" placeholder="Mother&#39;s Phone"></div><div><p class="font-bold">Occupation</p><input class="w-full rounded-md" type="text" name="motherOccupation" placeholder="Mother&#39;s Occupation"></div></div></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Guardian Information</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="md:flex gap-4 px-2 py-2"><p class="font-bold">Who is the Guardian?</p><div class="grid grid-cols-3 gap-4"><div><input type="radio" id="father" name="parent" value="father"><label class="pl-2" for="father">Father</label></div><div><input type="radio" id="mother" name="parent" value="mother"><label class="pl-2" for="mother">Mother</label></div><div><input type="radio" id="other" name="parent" value="other"><label class="pl-2" for="other">Other</label></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-2"><div><p class="font-bold">Name</p><input class="w-full rounded-md" type="text" name="guardianName" placeholder="Guardian&#39;s Name"></div><div><p class="font-bold">Relation</p><input class="w-full rounded-md" type="text" name="relation" placeholder="Relation"></div><div><p class="font-bold">Phone</p><input class="w-full rounded-md" type="text" name="guardianPhone" placeholder="Guardian&#39;s Phone"></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Address</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2 px-2"><div class="grid grid-cols-1 gap-2"><h4 class="font-semibold">Current Address</h4><div><p class="font-bold">Division</p><input class="w-full rounded-md" type="text" name="currentDivision" placeholder="Division"></div><div><p class="font-bold">District</p><input class="w-full rounded-md" type="text" name="currentDistrict" placeholder="District"></div><div><p class="font-bold">Upazilla</p><input class="w-full rounded-md" type="text" name="currentUpazilla" placeholder="Upazilla"></div><div><p class="font-bold">Post office</p><input class="w-full rounded-md" type="text" name="currentPostOffice" placeholder="Post office"></div><div><p class="font-bold">House &amp; Road No, Village</p><input class="w-full rounded-md" type="text" name="currentVillage" placeholder="House &amp; Road No, Village"></div></div><hr class="md:hidden"><div class="md:border-l md:pl-2"><div class="grid grid-cols-1 gap-2"><div class="flex gap-2 items-center"><input class="rounded" type="checkbox" id="sameAsCurrent" name="sameAsCurrent"><label class="font-semibold" for="sameAsCurrent">Permanent Address Same as current</label></div><div><p class="font-bold">Division</p><input class="w-full rounded-md" type="text" name="currentDivision" placeholder="Division"></div><div><p class="font-bold">District</p><input class="w-full rounded-md" type="text" name="currentDistrict" placeholder="District"></div><div><p class="font-bold">Upazilla</p><input class="w-full rounded-md" type="text" name="currentUpazilla" placeholder="Upazilla"></div><div><p class="font-bold">Post office</p><input class="w-full rounded-md" type="text" name="currentPostOffice" placeholder="Post office"></div><div><p class="font-bold">House &amp; Road No, Village</p><input class="w-full rounded-md" type="text" name="currentVillage" placeholder="House &amp; Road No, Village"></div></div></div></div></div><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Academic Information</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 gap-4 px-2"><div><p class="font-bold">Previous School</p><input class="w-full rounded-md" type="text" name="previousSchool" placeholder="Previous School"></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><p class="font-bold">Class</p><input class="w-full rounded-md" type="text" name="class" placeholder="Class"></div><div><p class="font-bold">Roll</p><input class="w-full rounded-md" type="text" name="roll" placeholder="Roll"></div><div><p class="font-bold">Previous Exam</p><input class="w-full rounded-md" type="text" name="previousExam" placeholder="Previous Exam"></div><div><p class="font-bold">Previous Test Result</p><input class="w-full rounded-md" type="text" name="testResult" placeholder="Test Result"></div></div></div></div><div class=""><div class="border p-2 my-2"><div class="flex items-center bg-gray-100 mb-2 justify-between px-2"><h3 class="text-lg font-semibold">Expectations</h3><div class="cursor-pointer hover:text-blue-600"><i class="fad fa-edit"></i></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-2"><div><p class="font-bold">Expected Class:</p><input class="w-full rounded-md" type="text" name="expectedClass" placeholder="Expected Class"></div><div><p class="font-bold">Expected Package:</p><input class="w-full rounded-md" type="text" name="expectedPackage" placeholder="Expected Package"></div></div></div></div><div class="flex justify-center gap-4 mt-4 print:hidden"><button type="submit" class="btn-2">Apply Now</button></div>',7),j={__name:"AdmApplicationForm",setup(O){const d=r("");return c(()=>{const l=new Date,t=String(l.getDate()).padStart(2,"0"),s=String(l.getMonth()+1).padStart(2,"0"),n=l.getFullYear();d.value=`${t}/${s}/${n}`,document.getElementById("date").value=d.value}),(l,t)=>(a(),o("form",null,[e("div",u,[e("div",v,[m,e("div",f,[e("div",h,[e("div",b,[g,e("p",null,p(d.value),1)]),x]),e("div",y,[e("div",w,[e("label",_,[e("input",{type:"file",id:"studentPhoto",class:"hidden",onChange:t[0]||(t[0]=(...s)=>l.handlePhotoChange&&l.handlePhotoChange(...s))},null,32),l.studentPhoto?(a(),o("img",{key:0,src:l.studentPhoto,alt:"Student Photo",class:"h-28 w-28 object-cover rounded-full border"},null,8,P)):(a(),o("div",N,D))])]),B])]),C])])]))}};export{j as default};
