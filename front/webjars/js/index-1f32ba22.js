import{C as U,E as N,s as j,t as s,L as Y,b as Z,c as z,i as q,f as A,d as I,e as D,g as w,h as B}from"./tomorrow-af3a4336.js";const v=1,F=2,M=3,L=4,H=5,J=35,K=36,ee=37,Oe=11,te=13;function ne(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function ae(e){return e==9||e==10||e==13||e==32}let V=null,X=null,R=0;function _(e,O){let n=e.pos+O;if(X==e&&R==n)return V;for(;ae(e.peek(O));)O++;let t="";for(;;){let a=e.peek(O);if(!ne(a))break;t+=String.fromCharCode(a),O++}return X=e,R=n,V=t||null}function k(e,O){this.name=e,this.parent=O,this.hash=O?O.hash:0;for(let n=0;n<e.length;n++)this.hash+=(this.hash<<4)+e.charCodeAt(n)+(e.charCodeAt(n)<<8)}const re=new U({start:null,shift(e,O,n,t){return O==v?new k(_(t,1)||"",e):e},reduce(e,O){return O==Oe&&e?e.parent:e},reuse(e,O,n,t){let a=O.type.id;return a==v||a==te?new k(_(t,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),le=new N((e,O)=>{if(e.next==60){if(e.advance(),e.next==47){e.advance();let n=_(e,0);if(!n)return e.acceptToken(H);if(O.context&&n==O.context.name)return e.acceptToken(F);for(let t=O.context;t;t=t.parent)if(t.name==n)return e.acceptToken(M,-2);e.acceptToken(L)}else if(e.next!=33&&e.next!=63)return e.acceptToken(v)}},{contextual:!0});function W(e,O){return new N(n=>{for(let t=0,a=0;;a++){if(n.next<0){a&&n.acceptToken(e);break}if(n.next==O.charCodeAt(t)){if(t++,t==O.length){a>=O.length&&n.acceptToken(e,1-O.length);break}}else t=n.next==O.charCodeAt(0)?1:0;n.advance()}})}const se=W(J,"-->"),oe=W(K,"?>"),ie=W(ee,"]]>"),ye=j({Text:s.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":s.angleBracket,TagName:s.tagName,"MismatchedCloseTag/Tagname":[s.tagName,s.invalid],AttributeName:s.attributeName,AttributeValue:s.attributeValue,Is:s.definitionOperator,"EntityReference CharacterReference":s.character,Comment:s.blockComment,ProcessingInst:s.processingInstruction,DoctypeDecl:s.documentMeta,Cdata:s.special(s.string)}),$e=Y.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:re,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"]],propSources:[ye],skippedNodes:[0],repeatNodeCount:8,tokenData:"IX~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O*l!O!P$n!P!Q,{!Q![$n![!].e!]!^$n!^!_1v!_!`Cz!`!aDm!a!bE`!b!c$n!c!}.e!}#P$n#P#QFx#Q#R$n#R#S.e#S#T$n#T#o.e#o%W$n%W%o.e%o%p$n%p&a.e&a&b$n&b1p.e1p4U$n4U4d.e4d4e$n4e$IS.e$IS$I`$n$I`$Ib.e$Ib$Kh$n$Kh%#t.e%#t&/x$n&/x&Et.e&Et&FV$n&FV;'S.e;'S;:j1p;:j;=`&e<%l?&r$n?&r?Ah.e?Ah?BY$n?BY?Mn.e?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^VOp(sqs(sst)ht!](s!^;'S(s;'S;=`)b<%lO(s~(vVOp(sqs(st!](s!]!^)]!^;'S(s;'S;=`)b<%lO(s~)bOW~~)eP;=`<%l(s~)kTOp)zq!])z!^;'S)z;'S;=`*f<%lO)z~)}UOp)zq!])z!]!^*a!^;'S)z;'S;=`*f<%lO)z~*fOX~~*iP;=`<%l)zZ*sYVP{WOr$nrs%_sv$nw}$n}!O+c!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ+jYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a,Y!a;'S$n;'S;=`&e<%lO$nZ,cW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n]-SYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-r!a;'S$n;'S;=`&e<%lO$n]-{WdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_.p!O`S^QVP{WOr$nrs%_sv$nw}$n}!O.e!O!P.e!P!Q$n!Q![.e![!].e!]!^$n!^!_%y!_!c$n!c!}.e!}#R$n#R#S.e#S#T$n#T#o.e#o$}$n$}%O.e%O%W$n%W%o.e%o%p$n%p&a.e&a&b$n&b1p.e1p4U.e4U4d.e4d4e$n4e$IS.e$IS$I`$n$I`$Ib.e$Ib$Je$n$Je$Jg.e$Jg$Kh$n$Kh%#t.e%#t&/x$n&/x&Et.e&Et&FV$n&FV;'S.e;'S;:j1p;:j;=`&e<%l?&r$n?&r?Ah.e?Ah?BY$n?BY?Mn.e?MnO$n_1sP;=`<%l.eX1{W{WOq%yqr2esv%yw!a%y!a!bCd!b;'S%y;'S;=`&_<%lO%yX2j]{WOr%ysv%yw}%y}!O3c!O!f%y!f!g4e!g!}%y!}#O9t#O#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX3hV{WOr%ysv%yw}%y}!O3}!O;'S%y;'S;=`&_<%lO%yX4UT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX4jV{WOr%ysv%yw!q%y!q!r5P!r;'S%y;'S;=`&_<%lO%yX5UV{WOr%ysv%yw!e%y!e!f5k!f;'S%y;'S;=`&_<%lO%yX5pV{WOr%ysv%yw!v%y!v!w6V!w;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!{%y!{!|6q!|;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!r%y!r!s7]!s;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!g%y!g!h7w!h;'S%y;'S;=`&_<%lO%yX7|X{WOr7wrs8isv7wvw8iw!`7w!`!a9W!a;'S7w;'S;=`9n<%lO7wP8lTO!`8i!`!a8{!a;'S8i;'S;=`9Q<%lO8iP9QOiPP9TP;=`<%l8iX9_TiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX9qP;=`<%l7wX9yX{WOr%ysv%yw!e%y!e!f:f!f#V%y#V#W=t#W;'S%y;'S;=`&_<%lO%yX:kV{WOr%ysv%yw!f%y!f!g;Q!g;'S%y;'S;=`&_<%lO%yX;VV{WOr%ysv%yw!c%y!c!d;l!d;'S%y;'S;=`&_<%lO%yX;qV{WOr%ysv%yw!v%y!v!w<W!w;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!c%y!c!d<r!d;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!}%y!}#O=^#O;'S%y;'S;=`&_<%lO%yX=eT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX=yV{WOr%ysv%yw#W%y#W#X>`#X;'S%y;'S;=`&_<%lO%yX>eV{WOr%ysv%yw#T%y#T#U>z#U;'S%y;'S;=`&_<%lO%yX?PV{WOr%ysv%yw#h%y#h#i?f#i;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#T%y#T#U<r#U;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#c%y#c#d@l#d;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#V%y#V#WAW#W;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#h%y#h#iAr#i;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#m%y#m#nB^#n;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#d%y#d#eBx#e;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#X%y#X#Y7w#Y;'S%y;'S;=`&_<%lO%yXCkT!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZDTWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_DvW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZEgYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aFV!a;'S$n;'S;=`&e<%lO$nZF`W!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGPYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QGo#Q;'S$n;'S;=`&e<%lO$nZGvYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aHf!a;'S$n;'S;=`&e<%lO$nZHoWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[le,se,oe,ie,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function d(e,O){let n=O&&O.getChild("TagName");return n?e.sliceString(n.from,n.to):""}function h(e,O){let n=O&&O.firstChild;return!n||n.name!="OpenTag"?"":d(e,n)}function ce(e,O,n){let t=O&&O.getChildren("Attribute").find(l=>l.from<=n&&l.to>=n),a=t&&t.getChild("AttributeName");return a?e.sliceString(a.from,a.to):""}function b(e){for(let O=e&&e.parent;O;O=O.parent)if(O.name=="Element")return O;return null}function me(e,O){var n;let t=D(e).resolveInner(O,-1),a=null;for(let l=t;!a&&l.parent;l=l.parent)(l.name=="OpenTag"||l.name=="CloseTag"||l.name=="SelfClosingTag"||l.name=="MismatchedCloseTag")&&(a=l);if(a&&(a.to>O||a.lastChild.type.isError)){let l=a.parent;if(t.name=="TagName")return a.name=="CloseTag"||a.name=="MismatchedCloseTag"?{type:"closeTag",from:t.from,context:l}:{type:"openTag",from:t.from,context:b(l)};if(t.name=="AttributeName")return{type:"attrName",from:t.from,context:a};if(t.name=="AttributeValue")return{type:"attrValue",from:t.from,context:a};let y=t==a||t.name=="Attribute"?t.childBefore(O):t;return(y==null?void 0:y.name)=="StartTag"?{type:"openTag",from:O,context:b(l)}:(y==null?void 0:y.name)=="StartCloseTag"&&y.to<=O?{type:"closeTag",from:O,context:l}:(y==null?void 0:y.name)=="Is"?{type:"attrValue",from:O,context:a}:y?{type:"attrName",from:O,context:a}:null}else if(t.name=="StartCloseTag")return{type:"closeTag",from:O,context:t.parent};for(;t.parent&&t.to==O&&!(!((n=t.lastChild)===null||n===void 0)&&n.type.isError);)t=t.parent;return t.name=="Element"||t.name=="Text"||t.name=="Document"?{type:"tag",from:O,context:t.name=="Element"?t:b(t)}:null}class pe{constructor(O,n,t){this.attrs=n,this.attrValues=t,this.children=[],this.name=O.name,this.completion=Object.assign(Object.assign({type:"type"},O.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=O.textContent?O.textContent.map(a=>({label:a,type:"text"})):[]}}const Q=/^[:\-\.\w\u00b7-\uffff]*$/;function x(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function E(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function Se(e,O){let n=[],t=[],a=Object.create(null);for(let r of O){let c=x(r);n.push(c),r.global&&t.push(c),r.values&&(a[r.name]=r.values.map(E))}let l=[],y=[],u=Object.create(null);for(let r of e){let c=t,o=a;r.attributes&&(c=c.concat(r.attributes.map(m=>typeof m=="string"?n.find(g=>g.label==m)||{label:m,type:"property"}:(m.values&&(o==a&&(o=Object.create(o)),o[m.name]=m.values.map(E)),x(m)))));let S=new pe(r,c,o);u[S.name]=S,l.push(S),r.top&&y.push(S)}y.length||(y=l);for(let r=0;r<l.length;r++){let c=e[r],o=l[r];if(c.children)for(let S of c.children)u[S]&&o.children.push(u[S]);else o.children=l}return r=>{var c;let{doc:o}=r.state,S=me(r.state,r.pos);if(!S||S.type=="tag"&&!r.explicit)return null;let{type:m,from:g,context:P}=S;if(m=="openTag"){let i=y,$=h(o,P);if($){let p=u[$];i=(p==null?void 0:p.children)||l}return{from:g,options:i.map(p=>p.completion),validFor:Q}}else if(m=="closeTag"){let i=h(o,P);return i?{from:g,to:r.pos+(o.sliceString(r.pos,r.pos+1)==">"?1:0),options:[((c=u[i])===null||c===void 0?void 0:c.closeNameCompletion)||{label:i+">",type:"type"}],validFor:Q}:null}else if(m=="attrName"){let i=u[d(o,P)];return{from:g,options:(i==null?void 0:i.attrs)||t,validFor:Q}}else if(m=="attrValue"){let i=ce(o,P,g);if(!i)return null;let $=u[d(o,P)],p=(($==null?void 0:$.attrValues)||a)[i];return!p||!p.length?null:{from:g,to:r.pos+(o.sliceString(r.pos,r.pos+1)=='"'?1:0),options:p,validFor:/^"[^"]*"?$/}}else if(m=="tag"){let i=h(o,P),$=u[i],p=[],T=P&&P.lastChild;i&&(!T||T.name!="CloseTag"||d(o,T)!=i)&&p.push($?$.closeCompletion:{label:"</"+i+">",type:"type",boost:2});let C=p.concat((($==null?void 0:$.children)||(P?l:y)).map(f=>f.openCompletion));if(P&&($!=null&&$.text.length)){let f=P.firstChild;f.to>r.pos-20&&!/\S/.test(r.state.sliceDoc(f.to,r.pos))&&(C=C.concat($.text))}return{from:g,options:C,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else return null}}const G=z.define({name:"xml",parser:$e.configure({props:[q.add({Element(e){let O=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(O?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),A.add({Element(e){let O=e.firstChild,n=e.lastChild;return!O||O.name!="OpenTag"?null:{from:O.to,to:n.name=="CloseTag"?n.from:e.to}}}),I.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function de(e={}){return new Z(G,G.data.of({autocomplete:Se(e.elements||[],e.attributes||[])}))}const Pe=j({String:s.string,Number:s.number,"True False":s.bool,PropertyName:s.propertyName,Null:s.null,",":s.separator,"[ ]":s.squareBracket,"{ }":s.brace}),ue=Y.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[Pe],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),ge=z.define({name:"json",parser:ue.configure({props:[q.add({Object:w({except:/^\s*\}/}),Array:w({except:/^\s*\]/})}),A.add({"Object Array":B})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function Te(){return new Z(ge)}export{Te as j,de as x};