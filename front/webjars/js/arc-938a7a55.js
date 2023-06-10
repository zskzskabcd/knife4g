import{w as ln,c as H}from"./path-53f90ab3.js";import{bG as an,bH as N,bI as w,bJ as rn,bK as y,aL as on,bL as j,bM as _,bN as un,bO as t,bP as sn,bQ as tn,bR as fn}from"./doc-0d2ba965.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,O,I,v,R,J,a){var q=O-l,i=I-h,n=J-v,m=a-R,r=m*q-n*i;if(!(r*r<y))return r=(n*(h-R)-m*(l-v))/r,[l+r*q,h+r*i]}function V(l,h,O,I,v,R,J){var a=l-O,q=h-I,i=(J?R:-R)/j(a*a+q*q),n=i*q,m=-i*a,r=l+n,s=h+m,f=O+n,c=I+m,K=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,A=p*p+g*g,b=v-R,T=r*c-f*s,D=(g<0?-1:1)*j(fn(0,b*b*A-T*T)),E=(T*g-p*D)/A,G=(-T*p-g*D)/A,P=(T*g+p*D)/A,d=(-T*p+g*D)/A,x=E-K,e=G-o,u=P-K,M=d-o;return x*x+e*e>u*u+M*M&&(E=P,G=d),{cx:E,cy:G,x01:-n,y01:-m,x11:E*(v/b-1),y11:G*(v/b-1)}}function vn(){var l=cn,h=yn,O=H(0),I=null,v=gn,R=mn,J=pn,a=null,q=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=R.apply(this,arguments)-rn,K=un(c-f),o=c>f;if(a||(a=n=q()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(K>on-y)a.moveTo(s*N(f),s*w(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*N(c),r*w(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,A=f,b=c,T=K,D=K,E=J.apply(this,arguments)/2,G=E>y&&(I?+I.apply(this,arguments):j(r*r+s*s)),P=_(un(s-r)/2,+O.apply(this,arguments)),d=P,x=P,e,u;if(G>y){var M=sn(G/r*w(E)),z=sn(G/s*w(E));(T-=M*2)>y?(M*=o?1:-1,A+=M,b-=M):(T=0,A=b=(f+c)/2),(D-=z*2)>y?(z*=o?1:-1,p+=z,g-=z):(D=0,p=g=(f+c)/2)}var Q=s*N(p),S=s*w(p),B=r*N(b),C=r*w(b);if(P>y){var F=s*N(g),U=s*w(g),W=r*N(A),X=r*w(A),L;if(K<an)if(L=dn(Q,S,W,X,F,U,B,C)){var Y=Q-L[0],Z=S-L[1],$=F-L[0],k=U-L[1],nn=1/w(tn((Y*$+Z*k)/(j(Y*Y+Z*Z)*j($*$+k*k)))/2),en=j(L[0]*L[0]+L[1]*L[1]);d=_(P,(r-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}D>y?x>y?(e=V(W,X,Q,S,s,x,o),u=V(F,U,B,C,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(Q,S),a.arc(0,0,s,p,g,!o)):a.moveTo(Q,S),!(r>y)||!(T>y)?a.lineTo(B,C):d>y?(e=V(B,C,F,U,r,-d,o),u=V(Q,S,W,X,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,b,A,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[N(m)*n,w(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:H(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:H(+n),i):h},i.cornerRadius=function(n){return arguments.length?(O=typeof n=="function"?n:H(+n),i):O},i.padRadius=function(n){return arguments.length?(I=n==null?null:typeof n=="function"?n:H(+n),i):I},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:H(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:H(+n),i):R},i.padAngle=function(n){return arguments.length?(J=typeof n=="function"?n:H(+n),i):J},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
