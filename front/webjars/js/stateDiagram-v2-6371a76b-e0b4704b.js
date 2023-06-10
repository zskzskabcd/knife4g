import{p as Q,d as B,s as X,D as H,a as Z,S as F,b as j,c as I}from"./styles-fa41df25-28ca9c63.js";import{G as tt}from"./layout-6c7fe331.js";import{ab as a,a5 as g,aa as x,as as et,ac as st,ae as w}from"./doc-0d2ba965.js";import{r as ot}from"./index-a92ac404-45c57113.js";import"./edges-49ac43a2-61d794d6.js";import"./createText-3df630b5-a44f90fa.js";import"./svgDraw-0fcc813d-3699449a.js";import"./line-cb5ffbe6.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";const h="rect",C="rectWithTitle",nt="start",ct="end",it="divider",rt="roundedWithTitle",at="note",lt="noteGroup",_="statediagram",dt="state",Et=`${_}-${dt}`,U="transition",St="note",Tt="note-edge",pt=`${U} ${Tt}`,_t=`${_}-${St}`,ut="cluster",Dt=`${_}-${ut}`,bt="cluster-alt",ft=`${_}-${bt}`,V="parent",Y="note",At="state",N="----",ht=`${N}${Y}`,M=`${N}${V}`,W="fill:none",z="fill: #333",m="c",q="text",K="normal";let y={},E=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){a.trace("Extracting classes"),n.db.clear();try{return n.parser.parse(t),n.db.extract(n.db.getRootDocV2()),n.db.getClasses()}catch(e){return e}};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",c=N){const i=e!==null&&e.length>0?`${c}${e}`:"";return`${At}-${t}${i}-${n}`}const A=(t,n,e,c,i,r)=>{const s=e.id,u=$t(c[s]);if(s!=="root"){let T=h;e.start===!0&&(T=nt),e.start===!1&&(T=ct),e.type!==H&&(T=e.type),y[s]||(y[s]={id:s,shape:T,description:w.sanitizeText(s,g()),classes:`${u} ${Et}`});const o=y[s];e.description&&(Array.isArray(o.description)?(o.shape=C,o.description.push(e.description)):o.description.length>0?(o.shape=C,o.description===s?o.description=[e.description]:o.description=[o.description,e.description]):(o.shape=h,o.description=e.description),o.description=w.sanitizeTextOrArray(o.description,g())),o.description.length===1&&o.shape===C&&(o.shape=h),!o.type&&e.doc&&(a.info("Setting cluster for ",s,G(e)),o.type="group",o.dir=G(e),o.shape=e.type===Z?it:rt,o.classes=o.classes+" "+Dt+" "+(r?ft:""));const p={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:s,dir:o.dir,domId:R(s,E),type:o.type,padding:15};if(p.centerLabel=!0,e.note){const l={labelStyle:"",shape:at,labelText:e.note.text,classes:_t,style:"",id:s+ht+"-"+E,domId:R(s,E,Y),type:o.type,padding:15},d={labelStyle:"",shape:lt,labelText:e.note.text,classes:o.classes,style:"",id:s+M,domId:R(s,E,V),type:"group",padding:0};E++;const D=s+M;t.setNode(D,d),t.setNode(l.id,l),t.setNode(s,p),t.setParent(s,D),t.setParent(l.id,D);let S=s,b=l.id;e.note.position==="left of"&&(S=l.id,b=s),t.setEdge(S,b,{arrowhead:"none",arrowType:"",style:W,labelStyle:"",classes:pt,arrowheadStyle:z,labelpos:m,labelType:q,thickness:K})}else t.setNode(s,p)}n&&n.id!=="root"&&(a.trace("Setting node ",s," to be child of its parent ",n.id),t.setParent(s,n.id)),e.doc&&(a.trace("Adding nodes children "),xt(t,e,e.doc,c,i,!r))},xt=(t,n,e,c,i,r)=>{a.trace("items",e),e.forEach(s=>{switch(s.stmt){case j:A(t,n,s,c,i,r);break;case H:A(t,n,s,c,i,r);break;case F:{A(t,n,s.state1,c,i,r),A(t,n,s.state2,c,i,r);const u={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:W,labelStyle:"",label:w.sanitizeText(s.description,g()),arrowheadStyle:z,labelpos:m,labelType:q,thickness:K,classes:U};t.setEdge(s.state1.id,s.state2.id,u,E),E++}break}})},G=(t,n=I)=>{let e=n;if(t.doc)for(let c=0;c<t.doc.length;c++){const i=t.doc[c];i.stmt==="dir"&&(e=i.value)}return e},Ct=async function(t,n,e,c){a.info("Drawing state diagram (v2)",n),y={},c.db.getDirection();const{securityLevel:i,state:r}=g(),s=r.nodeSpacing||50,u=r.rankSpacing||50;a.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),a.info(c.db.getRootDocV2());const T=c.db.getStates(),o=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:G(c.db.getRootDocV2()),nodesep:s,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(o,void 0,c.db.getRootDocV2(),T,c.db,!0);let p;i==="sandbox"&&(p=x("#i"+n));const l=i==="sandbox"?x(p.nodes()[0].contentDocument.body):x("body"),d=l.select(`[id="${n}"]`),D=l.select("#"+n+" g");await ot(D,o,["barb"],_,n);const S=8;et.insertTitle(d,"statediagramTitleText",r.titleTopMargin,c.db.getDiagramTitle());const b=d.node().getBBox(),L=b.width+S*2,P=b.height+S*2;d.attr("class",_);const k=d.node().getBBox();st(d,P,L,r.useMaxWidth);const v=`${k.x-S} ${k.y-S} ${L} ${P}`;a.debug(`viewBox ${v}`),d.attr("viewBox",v);const J=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of J){const O=$.getBBox(),f=document.createElementNS("http://www.w3.org/2000/svg",h);f.setAttribute("rx",0),f.setAttribute("ry",0),f.setAttribute("width",O.width),f.setAttribute("height",O.height),$.insertBefore(f,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Ht={parser:Q,db:B,renderer:Rt,styles:X,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,B.clear()}};export{Ht as diagram};
