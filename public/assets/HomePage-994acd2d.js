import{r as D,a as $,o as h,c as q,w as f,b as _,t as x,d as I,u as U,e as t,f as j,g as d,h as M,_ as S,i as V,j as F,k as R,T as H,F as E,l as J,n as O}from"./index-fc7042a4.js";import{_ as W}from"./OurClasses-fb5938a5.js";import"./department-644867dc.js";const z={__name:"ScrollText",setup(e){const o=D("আগামী ১৬ ই এপ্রিল মাদরাসা বন্ধ হবে। আগামী ১৬ ই এপ্রিল মাদরাসা বন্ধ হবে।");return(s,a)=>{const l=$("marquee");return o.value?(h(),q(l,{scrollamount:"5",key:"scrollText",class:"flex justify-start overflow-hidden bg-cyan-600 text-white py-2 right-0 w-full"},{default:f(()=>[(h(),_("h1",{key:o.value,class:"scroll-text whitespace-nowrap"},x(o.value),1))]),_:1})):I("",!0)}}};var v=function(e){var o={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",".":".","-":"-"},s="";if(!e)return"";for(var a=e.toString(),l=a.length,r=0;r<l;r++)Number.isNaN(parseFloat(a[r]))||Number.isNaN(a[r]-0)?s+=a[r]:s+=o[a[r]];return s},G=["বৈশাখ","জ্যৈষ্ঠ","আষাঢ়","শ্রাবণ","ভাদ্র","আশ্বিন","কার্তিক","অগ্রহায়ণ","পৌষ","মাঘ","ফাল্গুন","চৈত্র"],T=["রবি","সোম","মঙ্গল","বুধ","বৃহস্পতি","শুক্র","শনি"],K=function(e){return e===void 0&&(e=0),e%100===0?e%400===0:e%4===0},w=function(e){return Object.prototype.toString.call(e)==="[object Date]"?!isNaN(e):!1},Q=function(e,o){e===void 0&&(e=1),o===void 0&&(o="D");var s=e.toString();switch(o){case"DD":return s=s.length===1?"0".concat(s):s,v(s);default:return v(e)}},X=function(e,o){switch(e===void 0&&(e=0),o===void 0&&(o="eeee"),o){case"eee":return T[e];default:return"".concat(T[e],"বার")}},Z=function(e,o){e===void 0&&(e=0),o===void 0&&(o="MMMM");var s=(e+1).toString();switch(o){case"M":return v(s);case"MM":return s=s.length===1?"0".concat(s):s,v(s);default:return G[e]}},C=function(e,o){e===void 0&&(e=0),o===void 0&&(o="YYYY");var s=e.toString();switch(o){case"YY":return v(s.substring(s.length-2));case"YYYYb":return"".concat(v(s)," (বঙ্গাব্দ)");default:return v(s)}},B=function(e,o,s){var a=e,l=o;o<=2&&(a-=1,l+=12);var r=Math.floor(a/100),n=2-r+Math.floor(r/4),c=Math.floor(365.25*(a+4716))+Math.floor(30.6001*(l+1))+s+n-1524.5;return c},Y=[0,30.93081,62.35364,93.9999999999999,125.47636,156.48933,186.92405,216.3179999,246.3153999,275.14288,305.09428,334.91145,365.258756],m=19380944629e-4,b=365.258756,p="Invalid Date";function ee(e,o,s){var a;switch(o){case 0:a=e<15?e+16:e-14;break;case 1:a=e<14?e+17:e-13;break;case 2:K(s)?a=e<15?e+16:e-14:a=e<15?e+15:e-14;break;case 3:a=e<14?e+17:e-13;break;case 4:a=e<15?e+17:e-14;break;case 5:a=e<15?e+17:e-14;break;case 6:a=e<16?e+16:e-15;break;case 7:a=e<16?e+16:e-15;break;case 8:a=e<16?e+16:e-15;break;case 9:a=e<17?e+15:e-16;break;case 10:a=e<16?e+15:e-15;break;default:a=e<16?e+15:e-15;break}return a}function te(e,o,s){var a=B(s,o+1,e);if(a<m)throw new Error(p);for(var l=Math.floor((a-m)/b),r=m+l*b,n,c,i,u=0;u<12;u+=1)n=r+Y[u],c=r+Y[u+1],a>=n&&a<=Math.floor(c)+1.75&&(i=Math.floor(a-n)+1);return i}function L(e,o){if(e===void 0&&(e=new Date),o===void 0&&(o={format:"D",calculationMethod:"BD"}),!w(e))throw new Error(p);var s=new Date(e);s.setTime(s.getTime()+(s.getTimezoneOffset()+360)*60*1e3);var a=s.getUTCDate(),l=s.getMonth(),r=s.getFullYear(),n=o.format,c=o.calculationMethod,i=c===void 0?"BD":c,u=i==="BD"?ee(a,l,r):te(a,l,r),g=Q(u,n);return g}var se=function(e,o,s){var a=B(e,o+1,s);if(a<m)throw new Error(p);for(var l=Math.floor((a-m)/b),r=m+l*b,n,c,i,u=0;u<12;u+=1)n=r+Y[u],c=r+Y[u+1],a>=n&&a<=Math.floor(c)+1.75&&(i=u+1);return i-1};function oe(e,o){var s;switch(!0){case(o===4&&e>14||o===5&&e<15):s=1;break;case(o===5&&e>14||o===6&&e<16):s=2;break;case(o===6&&e>15||o===7&&e<16):s=3;break;case(o===7&&e>15||o===8&&e<16):s=4;break;case(o===8&&e>15||o===9&&e<17):s=5;break;case(o===9&&e>16||o===10&&e<16):s=6;break;case(o===10&&e>15||o===11&&e<16):s=7;break;case(o===11&&e>15||o===0&&e<15):s=8;break;case(o===0&&e>14||o===1&&e<14):s=9;break;case(o===1&&e>13||o===2&&e<15):s=10;break;case(o===2&&e>14||o===3&&e<14):s=11;break;default:s=0;break}return s}function y(e,o){if(e===void 0&&(e=new Date),o===void 0&&(o={format:"MMMM",calculationMethod:"BD"}),!w(e))throw new Error(p);var s=new Date(e),a=s.getUTCDate(),l=s.getMonth(),r=s.getFullYear(),n=o.format,c=o.calculationMethod,i=c===void 0?"BD":c,u=i==="BD"?oe(a,l):se(r,l,a),g=Z(u,n);return g}function A(e,o){if(e===void 0&&(e=new Date),o===void 0&&(o={format:"eeee"}),!w(e))return p;var s=new Date(e),a=s.getDay();return X(a,o.format)}var ae=function(e,o,s){var a=B(e,o+1,s);if(a<m)throw new Error(p);return Math.floor((a-m)/b)+1};function N(e,o){if(e===void 0&&(e=new Date),o===void 0&&(o={format:"YYYY",calculationMethod:"BD"}),!w(e))throw new Error(p);var s=new Date(e),a=s.getUTCDate(),l=s.getMonth(),r=s.getFullYear(),n=o.format,c=o.calculationMethod,i=c===void 0?"BD":c;if(i==="IN")return C(ae(r,l,a),n);var u=r-593;if((l<3||l===3&&a<14)&&(u=r-594),u<1)throw new Error(p);return C(u,n)}function re(e,o){if(e===void 0&&(e=new Date),o===void 0&&(o={format:"eeee, D MMMM, YYYY",calculationMethod:"BD"}),!w(e))throw new Error(p);var s=new Date(e);s.setTime(s.getTime()+(s.getTimezoneOffset()+360)*60*1e3);var a=o.format,l=a===void 0?"eeee, D MMMM, YYYY":a,r=o.calculationMethod,n=r===void 0?"BD":r,c=l.replace(/eeee|eee/gi,function(i){switch(i){case"eee":return A(s,{format:"eee",calculationMethod:n});default:return A(s,{calculationMethod:n})}});return c=c.replace(/DD|D/gi,function(i){switch(i){case"DD":return L(s,{format:"DD",calculationMethod:n});default:return L(s,{calculationMethod:n})}}),c=c.replace(/MMMM|MM|M/gi,function(i){switch(i){case"M":return y(s,{format:"M",calculationMethod:n});case"MM":return y(s,{format:"MM",calculationMethod:n});default:return y(s,{calculationMethod:n})}}),c=c.replace(/YYYYb|YYYY|YY/gi,function(i){switch(i){case"YY":return N(s,{format:"YY",calculationMethod:n});case"YYYYb":return N(s,{format:"YYYYb",calculationMethod:n});default:return N(s,{calculationMethod:n})}}),c}const ne={class:"relative h-80 w-full overflow-hidden bg-cyan-600 lg:h-96"},le=t("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Darul_Uloom_Deoband_2018.jpg",class:"h-full w-full object-cover"},null,-1),ce={class:"absolute inset-0 z-10 bg-gradient-to-b from-cyan-800 to-cyan-500/10 px-4 grid md:grid-cols-2 grid-cols-1"},ie={class:"flex flex-col justify-center text-white md:px-12 text-center md:te"},ue=t("p",{class:"text-base md:text-lg md:font-semibold text-cyan-200"},"Assalamu Alaikum",-1),de=t("h3",{class:"mt-2 text-3xl font-bold md:text-5xl"},"Welcome to",-1),fe={class:"text-base md:text-lg md:font-semibold"},he=t("p",{class:"py-2 text-base md:py-4 md:text-lg md:font-semibold text-cyan-200"}," {2024 Session} admission is going-on. Apply online now. ",-1),_e={class:"flex justify-center text-cyan-900"},pe={class:"flex flex-col justify-center text-white md:px-12 text-center"},me=t("h4",null,"Hijri Date",-1),ve={__name:"CoverPhoto",setup(e){const o=U(),s=new Date,a={day:"numeric",month:"long",year:"numeric"},l=s.toLocaleDateString("en-GB",a),r=()=>re(new Date,{format:"D MMMM, YYYYb",calculationMethod:"BD"}),n=A();return(c,i)=>{const u=$("RouterLink");return h(),_("div",ne,[le,t("div",ce,[t("div",ie,[ue,de,t("p",fe,x(j(o).basic_info.english_name_name)+" website",1),he,t("div",_e,[d(u,{to:"#",class:"btn-1"},{default:f(()=>[M(" Apply Now ")]),_:1})])]),t("div",pe,[t("h4",null,x(j(n)),1),me,t("h4",null,x(r()),1),t("h4",null,x(j(l)),1)])])])}}},ge={},xe={class:"grid md:grid-cols-2 grid-cols-1 gap-8 w-full"},be={class:"flex flex-col gap-4 bg-white rounded p-6 max-h-80"},we=t("h2",{class:"text-xl font-bold"},"Notice",-1),De={class:"flex flex-col gap-2"},Me=t("p",{class:"text-cyan-600"},"Date: April 10, 2023",-1),Ye=t("h4",{class:"text-lg font-bold"},"Important Announcement",-1),$e={class:""},ke=t("br",null,null,-1),je=t("p",{class:"text-cyan-600"},"Published by: {Designation}",-1),ye={class:"bg-white rounded px-6 pb-6 overflow-y-auto h-80 scrollbar"},Ne=t("h2",{class:"sticky top-0 bg-white text-xl font-bold py-4"},"Notice List",-1),Ae={class:"flex flex-col gap-2 divide-y-2"},Be=t("div",{class:""},[t("h4",{class:"font-semibold"},"April 10, 2023"),t("p",{class:""},"Important Announcement")],-1),Te=t("i",{class:"far fa-arrow-right text-xl"},null,-1),Ce=t("div",null,[t("h4",{class:"font-semibold"},"April 15, 2023"),t("p",{class:""},"Upcoming Event")],-1),Le=t("i",{class:"far fa-arrow-right text-xl"},null,-1),Ie=t("div",{class:""},[t("h4",{class:"font-semibold"},"April 10, 2023"),t("p",{class:""},"Important Announcement")],-1),Se=t("i",{class:"far fa-arrow-right text-xl"},null,-1),Ee=t("div",null,[t("h4",{class:"font-semibold"},"April 15, 2023"),t("p",{class:""},"Upcoming Event")],-1),Pe=t("i",{class:"far fa-arrow-right text-xl"},null,-1),qe=t("div",{class:""},[t("h4",{class:"font-semibold"},"April 10, 2023"),t("p",{class:""},"Important Announcement")],-1),Ue=t("i",{class:"far fa-arrow-right text-xl"},null,-1),Ve=t("div",null,[t("h4",{class:"font-semibold"},"April 15, 2023"),t("p",{class:""},"Upcoming Event")],-1),Fe=t("i",{class:"far fa-arrow-right text-xl"},null,-1);function Re(e,o){const s=$("RouterLink");return h(),_("div",xe,[t("div",be,[we,t("div",De,[Me,Ye,t("p",$e,[M(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),ke,M(" { Max 200 chars } "),d(s,{to:"/",class:"text-cyan-600 hover:underline mt-2"},{default:f(()=>[M("See More")]),_:1})])]),je]),t("div",ye,[Ne,t("div",Ae,[d(s,{to:"/",class:"flex justify-between items-center hover:text-cyan-600"},{default:f(()=>[Be,Te]),_:1}),d(s,{to:"/",class:"flex justify-between pt-2 items-center hover:text-cyan-600"},{default:f(()=>[Ce,Le]),_:1}),d(s,{to:"/",class:"flex justify-between pt-2 items-center hover:text-cyan-600"},{default:f(()=>[Ie,Se]),_:1}),d(s,{to:"/",class:"flex justify-between pt-2 items-center hover:text-cyan-600"},{default:f(()=>[Ee,Pe]),_:1}),d(s,{to:"/",class:"flex justify-between pt-2 items-center hover:text-cyan-600"},{default:f(()=>[qe,Ue]),_:1}),d(s,{to:"/",class:"flex justify-between pt-2 items-center hover:text-cyan-600"},{default:f(()=>[Ve,Fe]),_:1})])])])}const He=S(ge,[["render",Re]]),Je={class:"bg-cyan-600 py-12"},Oe={class:"container mx-auto flex justify-center"},We={class:"grid md:grid-cols-2 grid-cols-1 gap-8"},ze=t("div",{class:"w-80 md:w-[480px] text-white flex flex-col items-center justify-center gap-4"},[t("h4",{class:"text-3xl font-semibold"},"why choose us?"),t("p",{class:"text-justify"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, sapiente. Omnis harum vel esse? Molestiae pariatur aspernatur ipsum, nesciunt aliquid nostrum ipsa velit asperiores aliquam, iusto vel odio rem repudiandae. ")],-1),Ge={class:"relative"},Ke={class:"relative w-80 md:w-[480px]"},Qe=["src"],Xe=t("i",{class:"fas fa-angle-left text-lg"},null,-1),Ze=[Xe],et=t("i",{class:"fas fa-angle-right text-lg"},null,-1),tt=[et],st={class:"mt-4 flex justify-center space-x-2"},ot=["onClick"],at=["src"],rt={__name:"WhyChoose",setup(e){const o=D(["https://www.indiaspend.com/wp-content/uploads/madrasa_620.jpg","https://www.state.gov/wp-content/uploads/2023/03/shutterstock_518048062-scaled-e1677675556762.jpg","https://www.isdb-bisew.org/photos/shares/Module/2019-10/1572160244-Kapashia-crop.jpg","https://www.state.gov/wp-content/uploads/2023/03/shutterstock_518048062-scaled-e1677675556762.jpg"]),s=D(0),a=D(null),l=V(()=>o.value[s.value]),r=()=>{s.value=(s.value+1)%o.value.length},n=()=>{s.value=(s.value-1+o.value.length)%o.value.length},c=()=>{a.value=setInterval(()=>{r()},3e3)},i=()=>{clearInterval(a.value)},u=g=>{s.value=g};return F(()=>{c()}),R(()=>{i()}),(g,Lt)=>(h(),_("div",Je,[t("div",Oe,[t("div",We,[ze,t("div",Ge,[t("div",Ke,[d(H,{name:"fade",mode:"out-in"},{default:f(()=>[l.value?(h(),_("img",{src:l.value,key:l.value,class:"w-full h-full aspect-video object-cover",alt:"Slider Image"},null,8,Qe)):I("",!0)]),_:1}),t("div",{class:"absolute top-0 left-0 flex items-center justify-between w-full px-4 h-full"},[t("button",{onClick:n,class:"px-3 py-1 pt-2 text-white rounded-full cursor-pointer hover:bg-cyan-600/50"},Ze),t("button",{onClick:r,class:"px-3 py-1 pt-2 text-white rounded-full cursor-pointer hover:bg-cyan-600/50"},tt)])]),t("div",st,[(h(!0),_(E,null,J(o.value,(P,k)=>(h(),_("button",{key:k,onClick:It=>u(k),class:O({"border-white":k===s.value,"border-2":!0,"w-3 h-3 rounded-full cursor-pointer":!0})},[t("img",{src:P,class:"w-full h-full object-cover rounded-full",alt:"Thumbnail"},null,8,at)],10,ot))),128))])])])])]))}},nt={},lt={class:"flex flex-col md:flex-row gap-8"},ct={class:"flex flex-col justify-between bg-white shadow-md rounded-md md:w-[320px] w-80 border-b-[3px] border-transparent hover:border-cyan-500 transition-all ease-in-out duration-500"},it=t("div",null,[t("img",{class:"rounded-t-md w-full aspect-video object-cover",src:"https://www.indiaspend.com/wp-content/uploads/madrasa_620.jpg",alt:"Photo"})],-1),ut={class:"p-3 md:p-4"},dt=t("div",{class:"line-clamp-[8]"},[t("h1",{class:"md:text-xl text-lg font-bold text-cyan-600"},"{ Title Here }"),t("hr",{class:"my-3 border-cyan-500"}),t("p",{class:"text-justify"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi temporibus at veniam quos esse corrupti dolorem nihil dolor? Nostrum porro eum temporibus illum sapiente esse iure asperiores aspernatur ea. ")],-1),ft={class:""},ht=t("hr",{class:"my-3 border-cyan-500"},null,-1),_t=t("h4",null,"পুরোটা পড়ুন",-1),pt=t("i",{class:"fal fa-angle-double-right text-2xl"},null,-1),mt={class:"flex flex-col justify-between bg-white shadow-md rounded-md md:w-[320px] w-80 border-b-[3px] border-transparent hover:border-cyan-500 transition-all ease-in-out duration-500"},vt=t("div",null,[t("img",{class:"rounded-t-md w-full aspect-video object-cover",src:"https://www.indiaspend.com/wp-content/uploads/madrasa_620.jpg",alt:"Photo"})],-1),gt={class:"p-3 md:p-4"},xt=t("div",{class:"line-clamp-[8]"},[t("h1",{class:"md:text-xl text-lg font-bold text-cyan-600"},"{ Title Here }"),t("hr",{class:"my-3 border-cyan-500"}),t("p",{class:"text-justify"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi temporibus at veniam quos esse corrupti dolorem nihil dolor? Nostrum porro eum temporibus illum sapiente esse iure asperiores aspernatur ea. ")],-1),bt=t("hr",{class:"my-3 border-cyan-500"},null,-1),wt=t("div",{class:"flex justify-center font-medium hover:text-cyan-500 items-center gap-2 hover:gap-3 transition-all ease-in-out duration-200"},[t("h4",null,"পুরোটা পড়ুন"),t("i",{class:"fal fa-angle-double-right text-2xl"})],-1),Dt={class:"flex flex-col justify-between bg-white shadow-md rounded-md md:w-[320px] w-80 border-b-[3px] border-transparent hover:border-cyan-500 transition-all ease-in-out duration-500"},Mt=t("div",null,[t("img",{class:"rounded-t-md w-full aspect-video object-cover",src:"https://www.indiaspend.com/wp-content/uploads/madrasa_620.jpg",alt:"Photo"})],-1),Yt={class:"p-3 md:p-4"},$t=t("div",{class:"line-clamp-[8]"},[t("h1",{class:"md:text-xl text-lg font-bold text-cyan-600"},"{ Title Here }"),t("hr",{class:"my-3 border-cyan-500"}),t("p",{class:"text-justify"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi temporibus at veniam quos esse corrupti dolorem nihil dolor? Nostrum porro eum temporibus illum sapiente esse iure asperiores aspernatur ea. ")],-1),kt=t("hr",{class:"my-3 border-cyan-500"},null,-1),jt=t("div",{class:"flex justify-center font-medium hover:text-cyan-500 items-center gap-2 hover:gap-3 transition-all ease-in-out duration-200"},[t("h4",null,"পুরোটা পড়ুন"),t("i",{class:"fal fa-angle-double-right text-2xl"})],-1);function yt(e,o){const s=$("RouterLink");return h(),_("div",lt,[t("div",ct,[it,t("div",ut,[dt,t("div",ft,[ht,d(s,{to:"#",class:"flex justify-center font-medium hover:text-cyan-500 items-center gap-2 hover:gap-3 transition-all ease-in-out duration-200"},{default:f(()=>[_t,pt]),_:1})])])]),t("div",mt,[vt,t("div",gt,[xt,d(s,{to:"#",class:""},{default:f(()=>[bt,wt]),_:1})])]),t("div",Dt,[Mt,t("div",Yt,[$t,d(s,{to:"#",class:""},{default:f(()=>[kt,jt]),_:1})])])])}const Nt=S(nt,[["render",yt]]),At={class:"container mx-auto flex flex-col items-center px-3"},Bt={class:"flex flex-col items-center justify-center max-w-6xl w-full gap-8"},Tt={class:"container mx-auto flex flex-col items-center px-3 mt-8"},Ct=t("h1",{class:"font-semibold text-2xl"},"Our Articls",-1),qt={__name:"HomePage",setup(e){return(o,s)=>(h(),_(E,null,[d(z),t("div",At,[t("div",Bt,[d(ve),d(He),d(W)])]),d(rt,{class:"mt-8"}),t("div",Tt,[Ct,d(Nt,{class:"mt-8"})])],64))}};export{qt as default};