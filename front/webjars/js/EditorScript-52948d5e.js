import{a as s,T as d}from"./tomorrow-af3a4336.js";import{j as n}from"./index-9c1fa022.js";import{$ as o,c as m,o as f,s as h,I as g,a0 as v}from"./doc-de971aef.js";const b={__name:"EditorScript",props:{value:{type:[String,Object],required:!0,default:""},tsMode:{type:Boolean,required:!1,default:!1}},emits:["change","showDescription"],setup(t,{emit:r}){const i=t,e=o("javascript"),l=o(200),c=m(()=>e.value=="typescript"?[n(),s]:[n(),s]),u=a=>{r("change",a)},p=()=>{i.tsMode&&(e.value="typescript")};return(a,y)=>(f(),h(v(d),{"model-value":t.value,onChange:u,onReady:p,lang:e.value,"indent-with-tab":!0,"tab-size":2,width:"100%",extensions:c.value,style:g({"min-height":l.value+"px"})},null,8,["model-value","lang","extensions","style"]))}};export{b as default};