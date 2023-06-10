import{p as I,d as N,s as M}from"./styles-aefe6593-8f6cb242.js";import{ab as p,a5 as c,aa as w,as as R,am as B,al as D,ai as E,aj as G,ae as _}from"./doc-0d2ba965.js";import{G as z}from"./layout-6c7fe331.js";import{r as P}from"./index-a92ac404-45c57113.js";import"./edges-49ac43a2-61d794d6.js";import"./createText-3df630b5-a44f90fa.js";import"./svgDraw-0fcc813d-3699449a.js";import"./line-cb5ffbe6.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";const S=s=>_.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const q=function(s,t,y,n){const e=Object.keys(s);p.info("keys:",e),p.info(s),e.forEach(function(i){var l,r;const o=s[i],d={shape:"rect",id:o.id,domId:o.domId,labelText:S(o.id),labelStyle:"",style:"fill: none; stroke: black",padding:((l=c().flowchart)==null?void 0:l.padding)??((r=c().class)==null?void 0:r.padding)};t.setNode(o.id,d),A(o.classes,t,y,n,o.id),p.info("setNode",d)})},A=function(s,t,y,n,e){const i=Object.keys(s);p.info("keys:",i),p.info(s),i.forEach(function(l){var r,o;const a=s[l];let d="";a.cssClasses.length>0&&(d=d+" "+a.cssClasses.join(" "));const f={labelStyle:"",style:""},h=a.label??a.id,b=0,m="class_box",u={labelStyle:f.labelStyle,shape:m,labelText:S(h),classData:a,rx:b,ry:b,class:d,style:f.style,id:a.id,domId:a.domId,tooltip:n.db.getTooltip(a.id,e)||"",haveCallback:a.haveCallback,link:a.link,width:a.type==="group"?500:void 0,type:a.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((o=c().class)==null?void 0:o.padding)};t.setNode(a.id,u),e&&t.setParent(a.id,e),p.info("setNode",u)})},F=function(s,t,y,n){p.info(s),s.forEach(function(e,i){var l,r;const o=e,a="",d={labelStyle:"",style:""},f=o.text,h=0,b="note",m={labelStyle:d.labelStyle,shape:b,labelText:S(f),noteData:o,rx:h,ry:h,class:a,style:d.style,id:o.id,domId:o.id,tooltip:"",type:"note",padding:((l=c().flowchart)==null?void 0:l.padding)??((r=c().class)==null?void 0:r.padding)};if(t.setNode(o.id,m),p.info("setNode",m),!o.class||!(o.class in n))return;const u=y+i,g={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:D(k.curve,E)};t.setEdge(o.id,o.class,g,u)})},H=function(s,t){const y=c().flowchart;let n=0;s.forEach(function(e){var i;n++;const l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+n,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:C(e.relation.type1),arrowTypeEnd:C(e.relation.type2),style:"fill:none",labelStyle:"",curve:D(y==null?void 0:y.curve,E)};if(p.info(l,e),e.style!==void 0){const r=G(e.style);l.style=r.style,l.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(_.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,l,n)})},V=function(s){k={...k,...s}},W=async function(s,t,y,n){p.info("Drawing class - ",t);const e=c().flowchart??c().class,i=c().securityLevel;p.info("config:",e);const l=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,o=new z({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:l,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),a=n.db.getNamespaces(),d=n.db.getClasses(),f=n.db.getRelations(),h=n.db.getNotes();p.info(f),q(a,o,t,n),A(d,o,t,n),H(f,o),F(h,o,f.length+1,d);let b;i==="sandbox"&&(b=w("#i"+t));const m=i==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),u=m.select(`[id="${t}"]`),g=m.select("#"+t+" g");if(await P(g,o,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),R.insertTitle(u,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,n.db.getDiagramTitle()),B(o,u,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const T=i==="sandbox"?b.nodes()[0].contentDocument:document,$=T.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const x of $){const L=x.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),x.insertBefore(v,x.firstChild)}}};function C(s){let t;switch(s){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const J={setConf:V,draw:W},oe={parser:I,db:N,renderer:J,styles:M,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,N.clear()}};export{oe as diagram};
