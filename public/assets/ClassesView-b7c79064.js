import{y as i,r as l,s as d,a as _,o as e,b as a,e as s,F as b,l as m,u as S,c as p,w as f,t as n,g as h}from"./index-de55e87e.js";const x=i("zamats",()=>({zamats:l([{id:1,name:"Class One",description:"",subjects:["Sub-1","Sub-2","Sub-3","Sub-4"],students:"১০০"},{id:2,name:"Class Two",description:"",subjects:["Sub-1","Sub-2","Sub-3","Sub-4"],students:"১০০"},{id:3,name:"Class Three",description:"",subjects:["Sub-1","Sub-2","Sub-3","Sub-4"],students:"১০০"},{id:14,name:"Class Four",description:"",subjects:["Sub-1","Sub-2","Sub-3","Sub-4"],students:"১০০"}])})),g={class:"container mx-auto flex justify-center"},y={class:"w-full flex flex-wrap gap-4 justify-center mt-5"},C={class:"text-lg font-bold px-2 py-1 bg-cyan-100 rounded-lg"},j={class:""},k={class:"font-semibold line-clamp-1"},w={class:"text-gray-500 text-sm"},v=s("span",null,"Student: ",-1),V={__name:"ClassesView",setup(o){const u=x(),{zamats:c}=d(u);return(B,T)=>{const r=_("router-link");return e(),a("div",g,[s("div",y,[(e(!0),a(b,null,m(S(c),t=>(e(),p(r,{to:"/csm/student-list",key:t.id,class:"main-card"},{default:f(()=>[s("div",null,[s("h1",C,n(t.id),1)]),s("div",j,[s("h2",k,n(t.name),1),s("p",w,[v,h(n(t.students),1)])])]),_:2},1024))),128))])])}}};export{V as default};
