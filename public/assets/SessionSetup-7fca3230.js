import{_ as i}from"./PulseAnimatedCard-65c73847.js";import{u as l}from"./department-644867dc.js";import{j as m,a as _,o as e,b as t,e as s,f as n,F as r,g as c,l as f,t as p,w as u,h as x}from"./index-fc7042a4.js";import"./PulseAnimatedBox-fe3829fd.js";import"./bundle-mjs-3a7afad5.js";const h={class:"container mx-auto flex flex-col items-center gap-4 mt-4"},y=s("div",{class:"flex items-center justify-between gap-4"},[s("h2",{class:"text-center text-2xl font-bold"},"Departments")],-1),g={class:"w-full flex flex-wrap gap-4 justify-center"},k={key:0,class:"flex justify-center items-center text-red-500 py-6"},v={class:"flex flex-wrap justify-center items-center gap-2"},w={class:"md:text-xl font-bold"},C={__name:"SessionSetup",setup(S){const a=l();return m(()=>{a.index()}),(b,j)=>{const d=_("RouterLink");return e(),t("div",h,[y,s("div",g,[n(a).loader?(e(),t(r,{key:0},[c(i,{class:"main-card"}),c(i,{class:"main-card"})],64)):(e(),t(r,{key:1},[n(a).departments.length?(e(!0),t(r,{key:1},f(n(a).departments,o=>(e(),t("div",{key:o.id,class:"main-card"},[s("div",v,[s("h2",w,p(o.name),1)]),c(d,{to:`/settings/departments/${o.id}/academic-sessions`,class:"btn-1"},{default:u(()=>[x(" Academic Sessions ")]),_:2},1032,["to"])]))),128)):(e(),t("div",k,"No data found!"))],64))])])}}};export{C as default};