(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.lj(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fD(b)
return new s(c,this)}:function(){if(s===null)s=A.fD(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fD(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
fM(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eT(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.fI==null){A.l_()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.az("Return interceptor for "+A.j(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ej
if(o==null)o=$.ej=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.l8(a)
if(p!=null)return p
if(typeof a=="function")return B.P
s=Object.getPrototypeOf(a)
if(s==null)return B.z
if(s===Object.prototype)return B.z
if(typeof q=="function"){o=$.ej
if(o==null)o=$.ej=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.t,enumerable:false,writable:true,configurable:true})
return B.t}return B.t},
iS(a,b){if(a<0||a>4294967295)throw A.a(A.R(a,0,4294967295,"length",null))
return J.iT(new Array(a),b)},
iT(a,b){var s=A.h(a,b.h("x<0>"))
s.$flags=1
return s},
aH(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bs.prototype
return J.cv.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.bt.prototype
if(typeof a=="boolean")return J.cu.prototype
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.aU.prototype
if(typeof a=="bigint")return J.aT.prototype
return a}if(a instanceof A.d)return a
return J.eT(a)},
aI(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.aU.prototype
if(typeof a=="bigint")return J.aT.prototype
return a}if(a instanceof A.d)return a
return J.eT(a)},
bb(a){if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.aU.prototype
if(typeof a=="bigint")return J.aT.prototype
return a}if(a instanceof A.d)return a
return J.eT(a)},
i7(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.aU.prototype
if(typeof a=="bigint")return J.aT.prototype
return a}if(a instanceof A.d)return a
return J.eT(a)},
as(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aH(a).M(a,b)},
A(a){return J.i7(a).bC(a)},
iz(a,b,c){return J.i7(a).bD(a,b,c)},
iA(a,b){return J.bb(a).N(a,b)},
iB(a){return J.bb(a).gb_(a)},
aM(a){return J.aH(a).gA(a)},
iC(a){return J.aI(a).gD(a)},
df(a){return J.bb(a).gt(a)},
fU(a){return J.bb(a).gb6(a)},
dg(a){return J.aI(a).gk(a)},
fa(a){return J.aH(a).gv(a)},
fV(a,b,c){return J.bb(a).ac(a,b,c)},
bf(a){return J.aH(a).i(a)},
cq:function cq(){},
cu:function cu(){},
bt:function bt(){},
bv:function bv(){},
am:function am(){},
cM:function cM(){},
bK:function bK(){},
ab:function ab(){},
aT:function aT(){},
aU:function aU(){},
x:function x(a){this.$ti=a},
du:function du(a){this.$ti=a},
aO:function aO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bu:function bu(){},
bs:function bs(){},
cv:function cv(){},
aS:function aS(){}},A={fg:function fg(){},
iV(a){return new A.bx("Field '"+a+"' has not been initialized.")},
fm(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hi(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eQ(a,b,c){return a},
fK(a){var s,r
for(s=$.aL.length,r=0;r<s;++r)if(a===$.aL[r])return!0
return!1},
iW(a,b,c,d){if(t.V.b(a))return new A.bk(a,b,c.h("@<0>").J(d).h("bk<1,2>"))
return new A.ax(a,b,c.h("@<0>").J(d).h("ax<1,2>"))},
br(){return new A.ay("No element")},
bg:function bg(a,b){this.a=a
this.$ti=b},
bh:function bh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
d_:function d_(a){this.a=0
this.b=a},
bx:function bx(a){this.a=a},
dF:function dF(){},
i:function i(){},
J:function J(){},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
cB:function cB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
bm:function bm(){},
ac:function ac(a,b){this.a=a
this.$ti=b},
i9(a,b){var s=new A.aQ(a,b.h("aQ<0>"))
s.bY(a)
return s},
ih(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
lR(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
j(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bf(a)
return s},
bE(a){var s,r=$.h9
if(r==null)r=$.h9=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ha(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.a(A.R(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
dC(a){var s,r,q,p
if(a instanceof A.d)return A.U(A.a4(a),null)
s=J.aH(a)
if(s===B.N||s===B.Q||t.o.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.U(A.a4(a),null)},
j6(a){if(typeof a=="number"||A.dc(a))return J.bf(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.al)return a.i(0)
return"Instance of '"+A.dC(a)+"'"},
h8(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
j8(a){var s,r,q,p=A.h([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.fN)(a),++r){q=a[r]
if(!A.eL(q))throw A.a(A.ba(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.a.a2(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.a(A.ba(q))}return A.h8(p)},
j7(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.eL(q))throw A.a(A.ba(q))
if(q<0)throw A.a(A.ba(q))
if(q>65535)return A.j8(a)}return A.h8(a)},
D(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.a2(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.R(a,0,1114111,null,null))},
aZ(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j5(a){var s=A.aZ(a).getUTCFullYear()+0
return s},
j3(a){var s=A.aZ(a).getUTCMonth()+1
return s},
j_(a){var s=A.aZ(a).getUTCDate()+0
return s},
j0(a){var s=A.aZ(a).getUTCHours()+0
return s},
j2(a){var s=A.aZ(a).getUTCMinutes()+0
return s},
j4(a){var s=A.aZ(a).getUTCSeconds()+0
return s},
j1(a){var s=A.aZ(a).getUTCMilliseconds()+0
return s},
iZ(a){var s=a.$thrownJsError
if(s==null)return null
return A.a3(s)},
hb(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.I(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
fG(a,b){var s,r="index"
if(!A.eL(b))return new A.Z(!0,b,r,null)
s=J.dg(a)
if(b<0||b>=s)return A.h2(b,s,a,r)
return A.j9(b,r)},
kR(a,b,c){if(a>c)return A.R(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.R(b,a,c,"end",null)
return new A.Z(!0,b,"end",null)},
ba(a){return new A.Z(!0,a,null,null)},
a(a){return A.I(a,new Error())},
I(a,b){var s
if(a==null)a=new A.ad()
b.dartException=a
s=A.lk
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
lk(){return J.bf(this.dartException)},
E(a,b){throw A.I(a,b==null?new Error():b)},
f(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.E(A.k0(a,b,c),s)},
k0(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.bL("'"+s+"': Cannot "+o+" "+l+k+n)},
fN(a){throw A.a(A.a_(a))},
ae(a){var s,r,q,p,o,n
a=A.ie(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.h([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dL(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dM(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hj(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fh(a,b){var s=b==null,r=s?null:b.method
return new A.cw(a,r,s?null:b.receiver)},
Y(a){if(a==null)return new A.dB(a)
if(a instanceof A.bl)return A.ar(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ar(a,a.dartException)
return A.kD(a)},
ar(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
kD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.a2(r,16)&8191)===10)switch(q){case 438:return A.ar(a,A.fh(A.j(s)+" (Error "+q+")",null))
case 445:case 5007:A.j(s)
return A.ar(a,new A.bD())}}if(a instanceof TypeError){p=$.il()
o=$.im()
n=$.io()
m=$.ip()
l=$.is()
k=$.it()
j=$.ir()
$.iq()
i=$.iv()
h=$.iu()
g=p.W(s)
if(g!=null)return A.ar(a,A.fh(s,g))
else{g=o.W(s)
if(g!=null){g.method="call"
return A.ar(a,A.fh(s,g))}else if(n.W(s)!=null||m.W(s)!=null||l.W(s)!=null||k.W(s)!=null||j.W(s)!=null||m.W(s)!=null||i.W(s)!=null||h.W(s)!=null)return A.ar(a,new A.bD())}return A.ar(a,new A.cS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bH()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ar(a,new A.Z(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bH()
return a},
a3(a){var s
if(a instanceof A.bl)return a.b
if(a==null)return new A.c_(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.c_(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
f3(a){if(a==null)return J.aM(a)
if(typeof a=="object")return A.bE(a)
return J.aM(a)},
kT(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.X(0,a[s],a[r])}return b},
ka(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.e5("Unsupported number of arguments for wrapped closure"))},
c8(a,b){var s=a.$identity
if(!!s)return s
s=A.kL(a,b)
a.$identity=s
return s},
kL(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ka)},
iJ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cP().constructor.prototype):Object.create(new A.aP(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.h_(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.iF(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.h_(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
iF(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.iD)}throw A.a("Error in functionType of tearoff")},
iG(a,b,c,d){var s=A.fZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
h_(a,b,c,d){if(c)return A.iI(a,b,d)
return A.iG(b.length,d,a,b)},
iH(a,b,c,d){var s=A.fZ,r=A.iE
switch(b?-1:a){case 0:throw A.a(new A.cO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
iI(a,b,c){var s,r
if($.fX==null)$.fX=A.fW("interceptor")
if($.fY==null)$.fY=A.fW("receiver")
s=b.length
r=A.iH(s,c,a,b)
return r},
fD(a){return A.iJ(a)},
iD(a,b){return A.ev(v.typeUniverse,A.a4(a.a),b)},
fZ(a){return a.a},
iE(a){return a.b},
fW(a){var s,r,q,p=new A.aP("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.t("Field name "+a+" not found.",null))},
kU(a){return v.getIsolateTag(a)},
l8(a){var s,r,q,p,o,n=$.i8.$1(a),m=$.eS[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.i2.$2(a,n)
if(q!=null){m=$.eS[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.f2(s)
$.eS[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.eY[n]=s
return s}if(p==="-"){o=A.f2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ic(a,s)
if(p==="*")throw A.a(A.az(n))
if(v.leafTags[n]===true){o=A.f2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ic(a,s)},
ic(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fM(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
f2(a){return J.fM(a,!1,null,!!a.$iS)},
la(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.f2(s)
else return J.fM(s,c,null,null)},
l_(){if(!0===$.fI)return
$.fI=!0
A.l0()},
l0(){var s,r,q,p,o,n,m,l
$.eS=Object.create(null)
$.eY=Object.create(null)
A.kZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.id.$1(o)
if(n!=null){m=A.la(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kZ(){var s,r,q,p,o,n,m=B.F()
m=A.b9(B.G,A.b9(B.H,A.b9(B.v,A.b9(B.v,A.b9(B.I,A.b9(B.J,A.b9(B.K(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.i8=new A.eV(p)
$.i2=new A.eW(o)
$.id=new A.eX(n)},
b9(a,b){return a(b)||b},
kN(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
iU(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.at("Illegal RegExp pattern ("+String(o)+")",a))},
kS(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ie(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lh(a,b,c){var s=A.li(a,b,c)
return s},
li(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.ie(b),"g"),A.kS(c))},
bi:function bi(){},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(a,b){this.a=a
this.$ti=b},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
co:function co(){},
aQ:function aQ(a,b){this.a=a
this.$ti=b},
dL:function dL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bD:function bD(){},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a){this.a=a},
dB:function dB(a){this.a=a},
bl:function bl(a,b){this.a=a
this.b=b},
c_:function c_(a){this.a=a
this.b=null},
al:function al(){},
cc:function cc(){},
cd:function cd(){},
cQ:function cQ(){},
cP:function cP(){},
aP:function aP(a,b){this.a=a
this.b=b},
cO:function cO(a){this.a=a},
au:function au(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dy:function dy(a,b){this.a=a
this.b=b
this.c=null},
aw:function aw(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
av:function av(a,b){this.a=a
this.$ti=b},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eV:function eV(a){this.a=a},
eW:function eW(a){this.a=a},
eX:function eX(a){this.a=a},
dt:function dt(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
en:function en(a){this.b=a},
lj(a){throw A.I(new A.bx("Field '"+a+"' has been assigned during initialization."),new Error())},
e1(a){var s=new A.e0(a)
return s.b=s},
e0:function e0(a){this.a=a
this.b=null},
eG(a,b,c){},
v(a){return a},
iX(a,b,c){var s
A.eG(a,b,c)
s=new DataView(a,b)
return s},
h5(a){return new Uint8Array(a)},
iY(a,b,c){var s
A.eG(a,b,c)
s=new Uint8Array(a,b,c)
return s},
aD(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.fG(b,a))},
b4(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.kR(a,b,c))
if(b==null)return c
return b},
cC:function cC(){},
bA:function bA(){},
db:function db(a){this.a=a},
cD:function cD(){},
aX:function aX(){},
by:function by(){},
bz:function bz(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
bB:function bB(){},
bC:function bC(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
fl(a,b){var s=b.c
return s==null?b.c=A.c3(a,"a5",[b.x]):s},
he(a){var s=a.w
if(s===6||s===7)return A.he(a.x)
return s===11||s===12},
jb(a){return a.as},
aG(a){return A.eu(v.typeUniverse,a,!1)},
ia(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.aq(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
aq(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aq(a1,s,a3,a4)
if(r===s)return a2
return A.hG(a1,r,!0)
case 7:s=a2.x
r=A.aq(a1,s,a3,a4)
if(r===s)return a2
return A.hF(a1,r,!0)
case 8:q=a2.y
p=A.b8(a1,q,a3,a4)
if(p===q)return a2
return A.c3(a1,a2.x,p)
case 9:o=a2.x
n=A.aq(a1,o,a3,a4)
m=a2.y
l=A.b8(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.fx(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.b8(a1,j,a3,a4)
if(i===j)return a2
return A.hH(a1,k,i)
case 11:h=a2.x
g=A.aq(a1,h,a3,a4)
f=a2.y
e=A.kA(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.hE(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.b8(a1,d,a3,a4)
o=a2.x
n=A.aq(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.fy(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.ca("Attempted to substitute unexpected RTI kind "+a0))}},
b8(a,b,c,d){var s,r,q,p,o=b.length,n=A.ex(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aq(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
kB(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ex(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aq(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
kA(a,b,c,d){var s,r=b.a,q=A.b8(a,r,c,d),p=b.b,o=A.b8(a,p,c,d),n=b.c,m=A.kB(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.d3()
s.a=q
s.b=o
s.c=m
return s},
h(a,b){a[v.arrayRti]=b
return a},
dd(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kV(s)
return a.$S()}return null},
l1(a,b){var s
if(A.he(b))if(a instanceof A.al){s=A.dd(a)
if(s!=null)return s}return A.a4(a)},
a4(a){if(a instanceof A.d)return A.w(a)
if(Array.isArray(a))return A.a8(a)
return A.fB(J.aH(a))},
a8(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
w(a){var s=a.$ti
return s!=null?s:A.fB(a)},
fB(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.k8(a,s)},
k8(a,b){var s=a instanceof A.al?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.jH(v.typeUniverse,s.name)
b.$ccache=r
return r},
kV(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.eu(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
bc(a){return A.W(A.w(a))},
fH(a){var s=A.dd(a)
return A.W(s==null?A.a4(a):s)},
kz(a){var s=a instanceof A.al?A.dd(a):null
if(s!=null)return s
if(t.bW.b(a))return J.fa(a).a
if(Array.isArray(a))return A.a8(a)
return A.a4(a)},
W(a){var s=a.r
return s==null?a.r=new A.et(a):s},
X(a){return A.W(A.eu(v.typeUniverse,a,!1))},
k7(a){var s,r,q,p,o=this
if(o===t.K)return A.ah(o,a,A.kf)
if(A.aK(o))return A.ah(o,a,A.kj)
s=o.w
if(s===6)return A.ah(o,a,A.k4)
if(s===1)return A.ah(o,a,A.hT)
if(s===7)return A.ah(o,a,A.kb)
if(o===t.S)r=A.eL
else if(o===t.i||o===t.n)r=A.ke
else if(o===t.N)r=A.kh
else r=o===t.y?A.dc:null
if(r!=null)return A.ah(o,a,r)
if(s===8){q=o.x
if(o.y.every(A.aK)){o.f="$i"+q
if(q==="p")return A.ah(o,a,A.kd)
return A.ah(o,a,A.ki)}}else if(s===10){p=A.kN(o.x,o.y)
return A.ah(o,a,p==null?A.hT:p)}return A.ah(o,a,A.k2)},
ah(a,b,c){a.b=c
return a.b(b)},
k6(a){var s=this,r=A.k1
if(A.aK(s))r=A.jS
else if(s===t.K)r=A.jQ
else if(A.be(s))r=A.k3
if(s===t.S)r=A.eA
else if(s===t.a3)r=A.jN
else if(s===t.N)r=A.a9
else if(s===t.aD)r=A.jR
else if(s===t.y)r=A.jK
else if(s===t.cG)r=A.hK
else if(s===t.n)r=A.jO
else if(s===t.ae)r=A.jP
else if(s===t.i)r=A.jL
else if(s===t.I)r=A.jM
s.a=r
return s.a(a)},
k2(a){var s=this
if(a==null)return A.be(s)
return A.l3(v.typeUniverse,A.l1(a,s),s)},
k4(a){if(a==null)return!0
return this.x.b(a)},
ki(a){var s,r=this
if(a==null)return A.be(r)
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.aH(a)[s]},
kd(a){var s,r=this
if(a==null)return A.be(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.d)return!!a[s]
return!!J.aH(a)[s]},
k1(a){var s=this
if(a==null){if(A.be(s))return a}else if(s.b(a))return a
throw A.I(A.hM(a,s),new Error())},
k3(a){var s=this
if(a==null||s.b(a))return a
throw A.I(A.hM(a,s),new Error())},
hM(a,b){return new A.c1("TypeError: "+A.hw(a,A.U(b,null)))},
hw(a,b){return A.cj(a)+": type '"+A.U(A.kz(a),null)+"' is not a subtype of type '"+b+"'"},
a7(a,b){return new A.c1("TypeError: "+A.hw(a,b))},
kb(a){var s=this
return s.x.b(a)||A.fl(v.typeUniverse,s).b(a)},
kf(a){return a!=null},
jQ(a){if(a!=null)return a
throw A.I(A.a7(a,"Object"),new Error())},
kj(a){return!0},
jS(a){return a},
hT(a){return!1},
dc(a){return!0===a||!1===a},
jK(a){if(!0===a)return!0
if(!1===a)return!1
throw A.I(A.a7(a,"bool"),new Error())},
hK(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.I(A.a7(a,"bool?"),new Error())},
jL(a){if(typeof a=="number")return a
throw A.I(A.a7(a,"double"),new Error())},
jM(a){if(typeof a=="number")return a
if(a==null)return a
throw A.I(A.a7(a,"double?"),new Error())},
eL(a){return typeof a=="number"&&Math.floor(a)===a},
eA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.I(A.a7(a,"int"),new Error())},
jN(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.I(A.a7(a,"int?"),new Error())},
ke(a){return typeof a=="number"},
jO(a){if(typeof a=="number")return a
throw A.I(A.a7(a,"num"),new Error())},
jP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.I(A.a7(a,"num?"),new Error())},
kh(a){return typeof a=="string"},
a9(a){if(typeof a=="string")return a
throw A.I(A.a7(a,"String"),new Error())},
jR(a){if(typeof a=="string")return a
if(a==null)return a
throw A.I(A.a7(a,"String?"),new Error())},
hZ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.U(a[q],b)
return s},
kv(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.hZ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.U(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
hO(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.h([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.U(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.U(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.U(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.U(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.U(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
U(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.U(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.U(a.x,b)+">"
if(m===8){p=A.kC(a.x)
o=a.y
return o.length>0?p+("<"+A.hZ(o,b)+">"):p}if(m===10)return A.kv(a,b)
if(m===11)return A.hO(a,b,null)
if(m===12)return A.hO(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
kC(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jI(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
jH(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.eu(a,b,!1)
else if(typeof m=="number"){s=m
r=A.c4(a,5,"#")
q=A.ex(s)
for(p=0;p<s;++p)q[p]=r
o=A.c3(a,b,q)
n[b]=o
return o}else return m},
jF(a,b){return A.hI(a.tR,b)},
jE(a,b){return A.hI(a.eT,b)},
eu(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hC(A.hA(a,null,b,!1))
r.set(b,s)
return s},
ev(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hC(A.hA(a,b,c,!0))
q.set(c,r)
return r},
jG(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.fx(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ap(a,b){b.a=A.k6
b.b=A.k7
return b},
c4(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a1(null,null)
s.w=b
s.as=c
r=A.ap(a,s)
a.eC.set(c,r)
return r},
hG(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.jC(a,b,r,c)
a.eC.set(r,s)
return s},
jC(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aK(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.be(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a1(null,null)
q.w=6
q.x=b
q.as=c
return A.ap(a,q)},
hF(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.jA(a,b,r,c)
a.eC.set(r,s)
return s},
jA(a,b,c,d){var s,r
if(d){s=b.w
if(A.aK(b)||b===t.K)return b
else if(s===1)return A.c3(a,"a5",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.a1(null,null)
r.w=7
r.x=b
r.as=c
return A.ap(a,r)},
jD(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a1(null,null)
s.w=13
s.x=b
s.as=q
r=A.ap(a,s)
a.eC.set(q,r)
return r},
c2(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
jz(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
c3(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.c2(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a1(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ap(a,r)
a.eC.set(p,q)
return q},
fx(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.c2(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a1(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ap(a,o)
a.eC.set(q,n)
return n},
hH(a,b,c){var s,r,q="+"+(b+"("+A.c2(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a1(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ap(a,s)
a.eC.set(q,r)
return r},
hE(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.c2(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.c2(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.jz(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a1(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ap(a,p)
a.eC.set(r,o)
return o},
fy(a,b,c,d){var s,r=b.as+("<"+A.c2(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.jB(a,b,c,r,d)
a.eC.set(r,s)
return s},
jB(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ex(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aq(a,b,r,0)
m=A.b8(a,c,r,0)
return A.fy(a,n,m,c!==m)}}l=new A.a1(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ap(a,l)},
hA(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hC(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.jt(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.hB(a,r,l,k,!1)
else if(q===46)r=A.hB(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aC(a.u,a.e,k.pop()))
break
case 94:k.push(A.jD(a.u,k.pop()))
break
case 35:k.push(A.c4(a.u,5,"#"))
break
case 64:k.push(A.c4(a.u,2,"@"))
break
case 126:k.push(A.c4(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.jv(a,k)
break
case 38:A.ju(a,k)
break
case 63:p=a.u
k.push(A.hG(p,A.aC(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.hF(p,A.aC(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.js(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.hD(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.jx(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.aC(a.u,a.e,m)},
jt(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hB(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.jI(s,o.x)[p]
if(n==null)A.E('No "'+p+'" in "'+A.jb(o)+'"')
d.push(A.ev(s,o,n))}else d.push(p)
return m},
jv(a,b){var s,r=a.u,q=A.hz(a,b),p=b.pop()
if(typeof p=="string")b.push(A.c3(r,p,q))
else{s=A.aC(r,a.e,p)
switch(s.w){case 11:b.push(A.fy(r,s,q,a.n))
break
default:b.push(A.fx(r,s,q))
break}}},
js(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.hz(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aC(p,a.e,o)
q=new A.d3()
q.a=s
q.b=n
q.c=m
b.push(A.hE(p,r,q))
return
case-4:b.push(A.hH(p,b.pop(),s))
return
default:throw A.a(A.ca("Unexpected state under `()`: "+A.j(o)))}},
ju(a,b){var s=b.pop()
if(0===s){b.push(A.c4(a.u,1,"0&"))
return}if(1===s){b.push(A.c4(a.u,4,"1&"))
return}throw A.a(A.ca("Unexpected extended operation "+A.j(s)))},
hz(a,b){var s=b.splice(a.p)
A.hD(a.u,a.e,s)
a.p=b.pop()
return s},
aC(a,b,c){if(typeof c=="string")return A.c3(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.jw(a,b,c)}else return c},
hD(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aC(a,b,c[s])},
jx(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aC(a,b,c[s])},
jw(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.ca("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.ca("Bad index "+c+" for "+b.i(0)))},
l3(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.B(a,b,null,c,null)
r.set(c,s)}return s},
B(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aK(d))return!0
s=b.w
if(s===4)return!0
if(A.aK(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.B(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.B(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.B(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.B(a,b.x,c,d,e))return!1
return A.B(a,A.fl(a,b),c,d,e)}if(s===6)return A.B(a,p,c,d,e)&&A.B(a,b.x,c,d,e)
if(q===7){if(A.B(a,b,c,d.x,e))return!0
return A.B(a,b,c,A.fl(a,d),e)}if(q===6)return A.B(a,b,c,p,e)||A.B(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.cY)return!0
if(q===12){if(b===t.L)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.B(a,j,c,i,e)||!A.B(a,i,e,j,c))return!1}return A.hS(a,b.x,c,d.x,e)}if(q===11){if(b===t.L)return!0
if(p)return!1
return A.hS(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.kc(a,b,c,d,e)}if(o&&q===10)return A.kg(a,b,c,d,e)
return!1},
hS(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.B(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.B(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.B(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.B(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.B(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
kc(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ev(a,b,r[o])
return A.hJ(a,p,null,c,d.y,e)}return A.hJ(a,b.y,null,c,d.y,e)},
hJ(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.B(a,b[s],d,e[s],f))return!1
return!0},
kg(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.B(a,r[s],c,q[s],e))return!1
return!0},
be(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aK(a))if(s!==6)r=s===7&&A.be(a.x)
return r},
aK(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
hI(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ex(a){return a>0?new Array(a):v.typeUniverse.sEA},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
d3:function d3(){this.c=this.b=this.a=null},
et:function et(a){this.a=a},
d2:function d2(){},
c1:function c1(a){this.a=a},
jf(){var s,r,q
if(self.scheduleImmediate!=null)return A.kE()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.c8(new A.dT(s),1)).observe(r,{childList:true})
return new A.dS(s,r,q)}else if(self.setImmediate!=null)return A.kF()
return A.kG()},
jg(a){self.scheduleImmediate(A.c8(new A.dU(a),0))},
jh(a){self.setImmediate(A.c8(new A.dV(a),0))},
ji(a){A.jy(0,a)},
jy(a,b){var s=new A.er()
s.c_(a,b)
return s},
eM(a){return new A.cV(new A.u($.k,a.h("u<0>")),a.h("cV<0>"))},
eD(a,b){a.$2(0,null)
b.b=!0
return b.a},
fz(a,b){A.jT(a,b)},
eC(a,b){b.ab(a)},
eB(a,b){b.aX(A.Y(a),A.a3(a))},
jT(a,b){var s,r,q=new A.eE(b),p=new A.eF(b)
if(a instanceof A.u)a.bB(q,p,t.z)
else{s=t.z
if(a instanceof A.u)a.bQ(q,p,s)
else{r=new A.u($.k,t._)
r.a=8
r.c=a
r.bB(q,p,s)}}},
eO(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.k.au(new A.eP(s))},
fc(a){var s
if(t.C.b(a)){s=a.ga3()
if(s!=null)return s}return B.f},
k9(a,b){if($.k===B.e)return null
return null},
hQ(a,b){if($.k!==B.e)A.k9(a,b)
if(b==null)if(t.C.b(a)){b=a.ga3()
if(b==null){A.hb(a,B.f)
b=B.f}}else b=B.f
else if(t.C.b(a))A.hb(a,b)
return new A.V(a,b)},
hx(a,b){var s=new A.u($.k,b.h("u<0>"))
s.a=8
s.c=a
return s},
fu(a,b,c){var s,r,q,p={},o=p.a=a
for(;s=o.a,(s&4)!==0;){o=o.c
p.a=o}if(o===b){s=A.jd()
b.aF(new A.V(new A.Z(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.by(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.a9()
b.ah(p.a)
A.aB(b,q)
return}b.a^=2
A.b7(null,null,b.b,new A.e9(p,b))},
aB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.b6(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.aB(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){r=r.b===k
r=!(r||r)}else r=!1
if(r){A.b6(m.a,m.b)
return}j=$.k
if(j!==k)$.k=k
else j=null
f=f.c
if((f&15)===8)new A.ed(s,g,p).$0()
else if(q){if((f&1)!==0)new A.ec(s,m).$0()}else if((f&2)!==0)new A.eb(g,s).$0()
if(j!=null)$.k=j
f=s.c
if(f instanceof A.u){r=s.a.$ti
r=r.h("a5<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.al(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.fu(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.al(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
kw(a,b){if(t.Q.b(a))return b.au(a)
if(t.v.b(a))return a
throw A.a(A.fb(a,"onError",u.c))},
kl(){var s,r
for(s=$.b5;s!=null;s=$.b5){$.c6=null
r=s.b
$.b5=r
if(r==null)$.c5=null
s.a.$0()}},
ky(){$.fC=!0
try{A.kl()}finally{$.c6=null
$.fC=!1
if($.b5!=null)$.fQ().$1(A.i3())}},
i0(a){var s=new A.cW(a),r=$.c5
if(r==null){$.b5=$.c5=s
if(!$.fC)$.fQ().$1(A.i3())}else $.c5=r.b=s},
kx(a){var s,r,q,p=$.b5
if(p==null){A.i0(a)
$.c6=$.c5
return}s=new A.cW(a)
r=$.c6
if(r==null){s.b=p
$.b5=$.c6=s}else{q=r.b
s.b=q
$.c6=r.b=s
if(q==null)$.c5=s}},
ig(a){var s=null,r=$.k
if(B.e===r){A.b7(s,s,B.e,a)
return}A.b7(s,s,r,r.bE(a))},
lu(a,b){A.eQ(a,"stream",t.K)
return new A.da(b.h("da<0>"))},
hf(a){return new A.bM(null,null,a.h("bM<0>"))},
i_(a){return},
hu(a,b){return b==null?A.kH():b},
hv(a,b){if(b==null)b=A.kJ()
if(t.k.b(b))return a.au(b)
if(t.u.b(b))return b
throw A.a(A.t(u.h,null))},
km(a){},
ko(a,b){A.b6(a,b)},
kn(){},
b6(a,b){A.kx(new A.eN(a,b))},
hW(a,b,c,d){var s,r=$.k
if(r===c)return d.$0()
$.k=c
s=r
try{r=d.$0()
return r}finally{$.k=s}},
hY(a,b,c,d,e){var s,r=$.k
if(r===c)return d.$1(e)
$.k=c
s=r
try{r=d.$1(e)
return r}finally{$.k=s}},
hX(a,b,c,d,e,f){var s,r=$.k
if(r===c)return d.$2(e,f)
$.k=c
s=r
try{r=d.$2(e,f)
return r}finally{$.k=s}},
b7(a,b,c,d){if(B.e!==c)d=c.bE(d)
A.i0(d)},
dT:function dT(a){this.a=a},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a){this.a=a},
dV:function dV(a){this.a=a},
er:function er(){},
es:function es(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=!1
this.$ti=b},
eE:function eE(a){this.a=a},
eF:function eF(a){this.a=a},
eP:function eP(a){this.a=a},
V:function V(a,b){this.a=a
this.b=b},
ao:function ao(a,b){this.a=a
this.$ti=b},
b0:function b0(a,b,c,d,e,f,g){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
cY:function cY(){},
bM:function bM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
cZ:function cZ(){},
af:function af(a,b){this.a=a
this.$ti=b},
b1:function b1(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
u:function u(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
e6:function e6(a,b){this.a=a
this.b=b},
ea:function ea(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(a,b){this.a=a
this.b=b},
ef:function ef(a){this.a=a},
ec:function ec(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
cW:function cW(a){this.a=a
this.b=null},
a2:function a2(){},
dJ:function dJ(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
bQ:function bQ(){},
bR:function bR(){},
bP:function bP(){},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a},
b3:function b3(){},
d1:function d1(){},
d0:function d0(a,b){this.b=a
this.a=null
this.$ti=b},
e3:function e3(a,b){this.b=a
this.c=b
this.a=null},
e2:function e2(){},
d9:function d9(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
eo:function eo(a,b){this.a=a
this.b=b},
bS:function bS(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
da:function da(a){this.$ti=a},
ey:function ey(){},
eN:function eN(a,b){this.a=a
this.b=b},
ep:function ep(){},
eq:function eq(a,b){this.a=a
this.b=b},
hy(a,b){var s=a[b]
return s===a?null:s},
fw(a,b,c){if(c==null)a[b]=a
else a[b]=c},
fv(){var s=Object.create(null)
A.fw(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
a6(a,b,c){return A.kT(a,new A.au(b.h("@<0>").J(c).h("au<1,2>")))},
fi(a,b){return new A.au(a.h("@<0>").J(b).h("au<1,2>"))},
iQ(a,b){A.fk(b,"index")
if(b>=3)return null
return a[b]},
fj(a){var s,r
if(A.fK(a))return"{...}"
s=new A.bJ("")
try{r={}
$.aL.push(a)
s.a+="{"
r.a=!0
a.a_(0,new A.dz(r,s))
s.a+="}"}finally{$.aL.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bT:function bT(){},
b2:function b2(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bU:function bU(a,b){this.a=a
this.$ti=b},
d4:function d4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
q:function q(){},
T:function T(){},
dz:function dz(a,b){this.a=a
this.b=b},
kr(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.Y(r)
q=A.at(String(s),null)
throw A.a(q)}q=A.eK(p)
return q},
eK(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.d6(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.eK(a[s])
return a},
h4(a,b,c){return new A.bw(a,b)},
k_(a){return a.cW()},
jq(a,b){return new A.ek(a,[],A.kM())},
jr(a,b,c){var s,r=new A.bJ(""),q=A.jq(r,b)
q.aw(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
d6:function d6(a,b){this.a=a
this.b=b
this.c=null},
d7:function d7(a){this.a=a},
ce:function ce(){},
cg:function cg(){},
bw:function bw(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
dv:function dv(){},
dx:function dx(a){this.b=a},
dw:function dw(a){this.a=a},
el:function el(){},
em:function em(a,b){this.a=a
this.b=b},
ek:function ek(a,b,c){this.c=a
this.a=b
this.b=c},
dR:function dR(){},
ew:function ew(a){this.b=0
this.c=a},
c(a,b){var s=A.jo(a,b)
if(s==null)throw A.a(A.at("Could not parse BigInt",a))
return s},
hs(a,b){var s,r,q=$.C(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.E(0,$.fR()).q(0,A.an(s))
s=0
o=0}}if(b)return q.R(0)
return q},
fs(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
ht(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.cv(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.fs(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.fs(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.C()
l=A.F(j,i)
return new A.z(l===0?!1:c,i,l)},
jm(a,b,c){var s,r,q,p=$.C(),o=A.an(b)
for(s=a.length,r=0;r<s;++r){q=A.fs(a.charCodeAt(r))
if(q>=b)return null
p=p.E(0,o).q(0,A.an(q))}if(c)return p.R(0)
return p},
jo(a,b){var s,r,q,p,o,n,m=null
if(a==="")return m
s=$.ix().cE(a)
if(s==null)return m
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
n=r[5]
if(b==null){if(p!=null)return A.hs(p,q)
if(o!=null)return A.ht(o,2,q)
return m}if(b<2||b>36)throw A.a(A.R(b,2,36,"radix",m))
if(b===10&&p!=null)return A.hs(p,q)
if(b===16)r=p!=null||n!=null
else r=!1
if(r){if(p==null){n.toString
r=n}else r=p
return A.ht(r,0,q)}r=p==null?n:p
if(r==null){o.toString
r=o}return A.jm(r,b,q)},
F(a,b){while(!0){if(!(a>0&&b[a-1]===0))break;--a}return a},
fr(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
bN(a){var s
if(a===0)return $.C()
if(a===1)return $.M()
if(a===2)return $.fS()
if(Math.abs(a)<4294967296)return A.an(B.a.a7(a))
s=A.jj(a)
return s},
an(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.F(4,s)
return new A.z(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.F(1,s)
return new A.z(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.a.a2(a,16)
r=A.F(2,s)
return new A.z(r===0?!1:o,s,r)}r=B.a.K(B.a.gbF(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.a.K(a,65536)}r=A.F(r,s)
return new A.z(r===0?!1:o,s,r)},
jj(a){var s,r,q,p,o,n,m,l
if(isNaN(a)||a==1/0||a==-1/0)throw A.a(A.t("Value must be finite: "+a,null))
a=Math.floor(a)
if(a===0)return $.C()
s=$.iw()
for(r=s.$flags|0,q=0;q<8;++q){r&2&&A.f(s)
s[q]=0}r=J.A(B.b.gu(s))
r.$flags&2&&A.f(r,13)
r.setFloat64(0,a,!0)
r=s[7]
p=s[6]
o=(r<<4>>>0)+(p>>>4)-1075
n=new Uint16Array(4)
n[0]=(s[1]<<8>>>0)+s[0]
n[1]=(s[3]<<8>>>0)+s[2]
n[2]=(s[5]<<8>>>0)+s[4]
n[3]=p&15|16
m=new A.z(!1,n,4)
if(o<0)l=m.F(0,-o)
else l=o>0?m.C(0,o):m
return l},
ft(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.f(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.f(d)
d[s]=0}return b+c},
hq(a,b,c,d){var s,r,q,p,o,n=B.a.K(c,16),m=B.a.B(c,16),l=16-m,k=B.a.C(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.a.aa(p,l)
r&2&&A.f(d)
d[s+n+1]=(o|q)>>>0
q=B.a.C(p&k,m)}r&2&&A.f(d)
d[n]=q},
hl(a,b,c,d){var s,r,q,p,o=B.a.K(c,16)
if(B.a.B(c,16)===0)return A.ft(a,b,o,d)
s=b+o+1
A.hq(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.f(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
jn(a,b,c,d){var s,r,q,p,o=B.a.K(c,16),n=B.a.B(c,16),m=16-n,l=B.a.C(1,n)-1,k=B.a.aa(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.a.C(q&l,m)
s&2&&A.f(d)
d[r]=(p|k)>>>0
k=B.a.aa(q,n)}s&2&&A.f(d)
d[j]=k},
dW(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
jk(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.f(e)
e[q]=r&65535
r=r>>>16}for(q=d;q<b;++q){r+=a[q]
s&2&&A.f(e)
e[q]=r&65535
r=r>>>16}s&2&&A.f(e)
e[b]=r},
cX(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.f(e)
e[q]=r&65535
r=0-(B.a.a2(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.f(e)
e[q]=r&65535
r=0-(B.a.a2(r,16)&1)}},
hr(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.f(d)
d[e]=p&65535
r=B.a.K(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.f(d)
d[e]=n&65535
r=B.a.K(n,65536)}},
jl(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.a.bg((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
aJ(a,b){var s=A.ha(a,b)
if(s!=null)return s
throw A.a(A.at(a,null))},
iL(a,b){a=A.I(a,new Error())
a.stack=b.i(0)
throw a},
aW(a,b,c,d){var s,r=J.iS(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
P(a,b){var s,r
if(Array.isArray(a))return A.h(a.slice(0),b.h("x<0>"))
s=A.h([],b.h("x<0>"))
for(r=J.df(a);r.l();)s.push(r.gp())
return s},
hh(a){var s
A.fk(0,"start")
s=A.P(a,t.S)
return A.j7(s)},
ja(a,b){return new A.dt(a,A.iU(a,!1,!1,!1,!1,""))},
hg(a,b,c){var s=J.df(b)
if(!s.l())return a
if(c.length===0){do a+=A.j(s.gp())
while(s.l())}else{a+=A.j(s.gp())
for(;s.l();)a=a+c+A.j(s.gp())}return a},
jd(){return A.a3(new Error())},
iK(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
h0(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ci(a){if(a>=10)return""+a
return"0"+a},
h1(a,b){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.a(A.fb(b,"name","No enum value with that name"))},
cj(a){if(typeof a=="number"||A.dc(a)||a==null)return J.bf(a)
if(typeof a=="string")return JSON.stringify(a)
return A.j6(a)},
iM(a,b){A.eQ(a,"error",t.K)
A.eQ(b,"stackTrace",t.l)
A.iL(a,b)},
ca(a){return new A.c9(a)},
t(a,b){return new A.Z(!1,null,b,a)},
fb(a,b,c){return new A.Z(!0,a,b,c)},
j9(a,b){return new A.bF(null,null,!0,a,b,"Value not in range")},
R(a,b,c,d,e){return new A.bF(b,c,!0,a,d,"Invalid value")},
hd(a,b,c){if(0>a||a>c)throw A.a(A.R(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.R(b,a,c,"end",null))
return b}return c},
fk(a,b){if(a<0)throw A.a(A.R(a,0,null,b,null))
return a},
h2(a,b,c,d){return new A.cn(b,!0,a,d,"Index out of range")},
cT(a){return new A.bL(a)},
az(a){return new A.cR(a)},
dI(a){return new A.ay(a)},
a_(a){return new A.cf(a)},
at(a,b){return new A.dk(a,b)},
iR(a,b,c){var s,r
if(A.fK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.h([],t.s)
$.aL.push(a)
try{A.kk(a,s)}finally{$.aL.pop()}r=A.hg(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
h3(a,b,c){var s,r
if(A.fK(a))return b+"..."+c
s=new A.bJ(b)
$.aL.push(a)
try{r=s
r.a=A.hg(r.a,a,", ")}finally{$.aL.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kk(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.l())return
s=A.j(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gp();++j
if(!l.l()){if(j<=4){b.push(A.j(p))
return}r=A.j(p)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.l();p=o,o=n){n=l.gp();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.j(p)
r=A.j(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
h6(a,b){var s=J.aM(a)
b=J.aM(b)
b=A.hi(A.fm(A.fm($.fT(),s),b))
return b},
h7(a){var s,r=$.fT()
for(s=a.gt(a);s.l();)r=A.fm(r,J.aM(s.gp()))
return A.hi(r)},
jX(a,b){return 65536+((a&1023)<<10)+(b&1023)},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(){},
dY:function dY(){},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(){},
o:function o(){},
c9:function c9(a){this.a=a},
ad:function ad(){},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cn:function cn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bL:function bL(a){this.a=a},
cR:function cR(a){this.a=a},
ay:function ay(a){this.a=a},
cf:function cf(a){this.a=a},
cL:function cL(){},
bH:function bH(){},
e5:function e5(a){this.a=a},
dk:function dk(a,b){this.a=a
this.b=b},
cp:function cp(){},
e:function e(){},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
H:function H(){},
d:function d(){},
c0:function c0(a){this.a=a},
dE:function dE(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
bJ:function bJ(a){this.a=a},
hP(a){var s
if(typeof a=="function")throw A.a(A.t("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jV,a)
s[$.fO()]=a
return s},
jV(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
hV(a){return a==null||A.dc(a)||typeof a=="number"||typeof a=="string"||t.U.b(a)||t.bX.b(a)||t.ca.b(a)||t.O.b(a)||t.c0.b(a)||t.w.b(a)||t.bk.b(a)||t.B.b(a)||t.q.b(a)||t.J.b(a)||t.Y.b(a)},
f0(a){if(A.hV(a))return a
return new A.f1(new A.b2(t.A)).$1(a)},
lf(a,b){var s=new A.u($.k,b.h("u<0>")),r=new A.af(s,b.h("af<0>"))
a.then(A.c8(new A.f4(r),1),A.c8(new A.f5(r),1))
return s},
hU(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
fF(a){if(A.hU(a))return a
return new A.eR(new A.b2(t.A)).$1(a)},
f1:function f1(a){this.a=a},
f4:function f4(a){this.a=a},
f5:function f5(a){this.a=a},
eR:function eR(a){this.a=a},
dA:function dA(a){this.a=a},
k5(a){var s,r=B.l.an(a),q=r.length,p=new Uint8Array(q*2+1)
for(s=0;s<q;++s)p[s]=r[s]>>>5
for(s=0;s<q;++s)p[q+s+1]=r[s]&31
return p},
i1(a){var s,r,q=t.s,p=A.h([],q),o=a.length
if(o===0)return A.h([],q)
if(o<=5)return A.h([a],q)
for(q=B.a.K(o,5),s=0;s<q;++s){r=s*5
p.push(B.d.T(a,r,r+5))}if(B.a.B(o,5)!==0)p.push(B.d.T(a,s*5,o))
return p},
jZ(a){var s=A.i1(new A.G(a,new A.eI(),A.a4(a).h("G<q.E,m>")).ao(0,"")),r=A.a8(s).h("G<1,b>")
r=A.P(new A.G(s,new A.eJ(),r),r.h("J.E"))
return new Uint8Array(A.v(r))},
jW(a){var s,r
if(a>1073741823)throw A.a(A.t("Value must be between 0 and 3FFFFFFF",null))
s=A.i1(B.d.a0(B.a.G(a,2),30,"0"))
r=A.a8(s).h("G<1,b>")
r=A.P(new A.G(s,new A.eH(),r),r.h("J.E"))
return new Uint8Array(A.v(r))},
jU(a,b,c){var s,r,q,p,o,n=A.P(a,t.S)
n.push(b)
B.c.n(n,c)
n.push(0)
n.push(0)
n.push(0)
n.push(0)
n.push(0)
n.push(0)
s=[A.aJ("111011011010100101011110110010",2),A.aJ("100110010100001000111001101101",2),A.aJ("011110101000010001100111111010",2),A.aJ("111101010000100011001111011101",2),A.aJ("101010000101000110001010110011",2)]
for(r=n.length,q=1,p=0;p<r;++p){o=q>>>25
q=(q&33554431)<<5^n[p]
if((o&1)===1)q^=s[0]
if((o&2)===2)q^=s[1]
if((o&4)===4)q^=s[2]
if((o&8)===8)q^=s[3]
if((o&16)===16)q^=s[4]}return A.jW(b===0?(q^1)>>>0:(q^734539939)>>>0)},
kK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g="Invalid scriptPubKey length: ",f="Invalid witness size: "
switch(b){case B.h:s="bc"
break
case B.m:s="tb"
break
case B.n:s="bcrt"
break
default:s=h}r=a.length
if(r<2)throw A.a(A.t(g+r,h))
q=a[0]
p=q===0
if(!p)o=q<81||q>96
else o=!1
if(o)throw A.a(A.t("Invalid witness version: "+q,h))
n=a[1]
if(p&&n!==20&&n!==32)throw A.a(A.t(f+n+" (expected 20 or 32)",h))
if(q===81&&n!==32)throw A.a(A.t(f+n+" (expected 32)",h))
o=n+2
if(r!==o)throw A.a(A.t(g+r+", expected: "+o,h))
m=A.k5(s)
l=p?0:q-80
k=A.jZ(B.b.af(a,2))
j=A.jU(m,l,k)
r=A.h([l],t.t)
B.c.n(r,k)
B.c.n(r,j)
s+="1"
for(p=r.length,i=0;i<p;++i)s+="qpzry9x8gf2tvdw0s3jn54khce6mua7l"[r[i]]
return s.charCodeAt(0)==0?s:s},
eI:function eI(){},
eJ:function eJ(){},
eH:function eH(){},
fL(a){var s
if(a.length===33){s=a[0]
s=s===2||s===3}else s=!1
return s},
l4(a){if(A.fL(a))return!0
else if(a.length===65)return a[0]===4
return!1},
aY:function aY(a){this.b=a},
b_:function b_(a){this.b=a},
fA(a,b){switch(a){case B.p:return A.ak(b)
case B.j:return A.lg(b)}},
jY(a,b){var s,r,q,p
switch(a){case B.p:s=64
break
case B.j:s=128
break
default:s=null}if(b.length>s)b=A.fA(a,b)
r=b.length
if(r<s){q=t.S
p=A.P(b,q)
B.c.n(p,A.aW(s-r,0,!1,q))
b=new Uint8Array(A.v(p))}return b},
eU(a,b,c){var s,r,q,p,o,n
b=A.jY(a,b)
s=b.length
r=new Uint8Array(s)
q=new Uint8Array(s)
for(p=0;p<s;++p){r[p]=b[p]^92
q[p]=b[p]^54}s=t.S
o=A.P(q,s)
B.c.n(o,c)
n=A.fA(a,new Uint8Array(A.v(o)))
s=A.P(r,s)
B.c.n(s,n)
return A.fA(a,new Uint8Array(A.v(s)))},
ck:function ck(a){this.b=a},
lm(a){var s
switch(a){case B.E:s="02"
break
case B.D:s="03"
break
default:s=null}return s},
hc(a){var s=$.ij().cK(A.aF(a)),r=B.d.a0(s.a.G(0,16),64,"0"),q=s.b
return new Uint8Array(A.v(A.bd(A.lm(q.c===0||(q.b[0]&1)===0?B.E:B.D)+r)))},
dD:function dD(){},
cN:function cN(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
ib(a,b,c){var s
switch(a){case B.y:s=A.eU(B.p,b,c)
break
case B.r:s=A.eU(B.j,b,c)
break
default:s=null}return s},
ks(a,b,c,d,e){var s,r,q,p,o,n,m,l=new Uint8Array(4),k=J.A(B.b.gu(l))
k.$flags&2&&A.f(k,11)
k.setUint32(0,d,!1)
k=A.P(c,t.S)
B.c.n(k,l)
s=A.ib(a,b,new Uint8Array(A.v(k)))
for(r=s,q=1;q<e;++q){r=A.ib(a,b,r)
for(k=r.length,p=s.$flags|0,o=0;o<k;++o){n=s[o]
m=r[o]
p&2&&A.f(s)
s[o]=n^m}}return s},
le(a,b,c,d,e){var s,r,q,p,o,n
switch(a){case B.y:s=32
break
case B.r:s=64
break
default:s=null}r=(d+7)/8|0
q=B.a.bg(r+s-1,s)
if(r<=0)throw A.a(A.t("bits must be as least 8.",null))
if(e<=0)throw A.a(A.t("iterations must be at least 1.",null))
p=new Uint8Array(r)
for(o=1;o<=q;++o){n=A.ks(a,b,c,o,e)
B.b.aA(p,(o-1)*s,B.a.cz(o*s,0,r),n)}return B.b.Y(p,0,r)},
cA:function cA(a){this.b=a},
hN(a,b,c,d){switch(a){case 0:return(b^c^d)>>>0
case 1:return(b&c|~b&d)>>>0
case 2:return((b|~c)^d)>>>0
case 3:return(b&d|c&~d)>>>0
case 4:return(b^(c|~d))>>>0
default:throw A.a(A.t("Invalid round: "+a,null))}},
hL(a,b){var s,r,q,p,o,n,m,l=a.bH(),k=a.bH(),j=A.h(new Array(16),t.t)
for(s=0;s<16;++s)j[s]=J.A(B.b.gu(b)).getUint32(s*4,!0)
for(s=0;s<80;++s){r=B.a.K(s,16)
q=l.a+A.hN(r,l.b,l.c,l.d)+j[B.U[s]]+B.a0[r]
p=B.Z[s]
o=B.a.bz(q,p)
p=B.a.aa(q>>>0,32-p)
q=l.e
p=((o|p)>>>0)+q
l.a=p
o=l.b
n=l.c
m=l.d
l.a=q
l.b=p
l.c=o
l.d=(n<<10|n>>>0>>>22)>>>0
l.e=m
m=k.a+A.hN(4-r,k.b,k.c,k.d)+j[B.X[s]]+B.T[r]
n=B.Y[s]
o=B.a.bz(m,n)
n=B.a.aa(m>>>0,32-n)
m=k.e
n=((o|n)>>>0)+m
k.a=n
o=k.b
p=k.c
q=k.d
k.a=m
k.b=n
k.c=o
k.d=(p<<10|p>>>0>>>22)>>>0
k.e=q}return new A.bI(a.b+l.c+k.d,a.c+l.d+k.e,a.d+l.e+k.a,a.e+l.a+k.b,a.a+l.b+k.c)},
de(a){var s,r,q,p,o,n,m,l,k=new A.bI(1732584193,4023233417,2562383102,271733878,3285377520)
for(s=0;!1;){r=s*64;++s
k=A.hL(k,new Uint8Array(a.subarray(r,A.b4(r,s*64,32))))}r=A.h([128],t.t)
q=t.S
B.c.n(r,A.aW(23,0,!1,q))
p=new Uint8Array(4)
o=J.A(B.b.gu(p))
o.$flags&2&&A.f(o,11)
o.setUint32(0,256,!0)
B.c.n(r,p)
p=new Uint8Array(4)
o=J.A(B.b.gu(p))
o.$flags&2&&A.f(o,11)
o.setUint32(0,0,!0)
B.c.n(r,p)
n=new Uint8Array(A.v(r))
r=A.P(B.b.af(a,0),q)
B.c.n(r,n)
m=new Uint8Array(A.v(r))
for(r=m.length,q=r>>>6,s=0;s<q;){p=s*64;++s
k=A.hL(k,new Uint8Array(m.subarray(p,A.b4(p,s*64,r))))}l=new Uint8Array(20)
r=J.A(B.b.gu(l))
q=k.a
r.$flags&2&&A.f(r,11)
r.setUint32(0,q,!0)
q=J.A(B.b.gu(l))
r=k.b
q.$flags&2&&A.f(q,11)
q.setUint32(4,r,!0)
r=J.A(B.b.gu(l))
q=k.c
r.$flags&2&&A.f(r,11)
r.setUint32(8,q,!0)
q=J.A(B.b.gu(l))
r=k.d
q.$flags&2&&A.f(q,11)
q.setUint32(12,r,!0)
r=J.A(B.b.gu(l))
q=k.e
r.$flags&2&&A.f(r,11)
r.setUint32(16,q,!0)
return l},
bI:function bI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jc(a,b){return new A.bG(a,b)},
hR(a,b){var s,r,q,p,o,n=$.C()
if(a.U(0,n)<0)a=a.B(0,b)
s=$.M()
for(r=s,q=b;a.U(0,s)>0;n=r,r=p,q=a,a=o){if(a.c===0)A.E(B.i)
p=n.H(0,q.ak(a).E(0,r))
o=q.B(0,a)}return r.B(0,b)},
cU:function cU(a){this.b=a},
bG:function bG(a,b){this.a=a
this.b=b},
kp(a){var s,r,q,p=a.length*8,o=new A.d_($.f8())
o.L(0,a)
o.am(128)
for(;(o.gk(0)+8)%64!==0;)o.am(0)
s=B.a.aT(p,32)
r=new Uint8Array(4)
q=J.A(B.b.gu(r))
q.$flags&2&&A.f(q,11)
q.setUint32(0,s,!1)
o.L(0,r)
r=new Uint8Array(4)
q=J.A(B.b.gu(r))
q.$flags&2&&A.f(q,11)
q.setUint32(0,p>>>0,!1)
o.L(0,r)
return o.bR()},
kt(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.aW(64,0,!1,t.S)
for(s=0;s<16;++s)c[s]=J.A(B.b.gu(a)).getUint32(s*4,!1)
for(s=16;s<64;++s){r=c[s-2]
q=c[s-7]
p=c[s-15]
c[s]=(((r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10)>>>0)+q+(((p>>>7|p<<25)^(p>>>18|p<<14)^p>>>3)>>>0)+c[s-16]>>>0}o=b.a
n=b.b
m=b.c
l=b.d
k=b.e
j=b.f
i=b.r
h=b.w
for(g=o,s=0;s<64;++s,h=i,i=j,j=k,k=e,l=m,m=n,n=g,g=d){f=h+(((k>>>6|k<<26)^(k>>>11|k<<21)^(k>>>25|k<<7))>>>0)+((k&j^~k&i)>>>0)+B.W[s]+c[s]>>>0
e=l+f>>>0
d=f+((((g>>>2|g<<30)^(g>>>13|g<<19)^(g>>>22|g<<10))>>>0)+((g&n^g&m^n&m)>>>0)>>>0)>>>0}b.a=o+g>>>0
b.b=b.b+n>>>0
b.c=b.c+m>>>0
b.d=b.d+l>>>0
b.e=b.e+k>>>0
b.f=b.f+j>>>0
b.r=b.r+i>>>0
b.w=b.w+h>>>0
return b},
ak(a){var s,r,q,p,o,n=A.kp(a),m=new A.dG(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225)
for(s=n.length,r=0;r<s;r=q){q=r+64
m=A.kt(new Uint8Array(n.subarray(r,A.b4(r,q,s))),m)}p=new Uint8Array(32)
s=J.A(B.b.gu(p))
o=m.a
s.$flags&2&&A.f(s,11)
s.setUint32(0,o,!1)
o=J.A(B.b.gu(p))
s=m.b
o.$flags&2&&A.f(o,11)
o.setUint32(4,s,!1)
s=J.A(B.b.gu(p))
o=m.c
s.$flags&2&&A.f(s,11)
s.setUint32(8,o,!1)
o=J.A(B.b.gu(p))
s=m.d
o.$flags&2&&A.f(o,11)
o.setUint32(12,s,!1)
s=J.A(B.b.gu(p))
o=m.e
s.$flags&2&&A.f(s,11)
s.setUint32(16,o,!1)
o=J.A(B.b.gu(p))
s=m.f
o.$flags&2&&A.f(o,11)
o.setUint32(20,s,!1)
s=J.A(B.b.gu(p))
o=m.r
s.$flags&2&&A.f(s,11)
s.setUint32(24,o,!1)
o=J.A(B.b.gu(p))
s=m.w
o.$flags&2&&A.f(o,11)
o.setUint32(28,s,!1)
return p},
dG:function dG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kq(a){var s=new A.d_($.f8())
s.L(0,a)
s.am(128)
for(;(s.gk(0)+16)%128!==0;)s.am(0)
s.L(0,A.ai(A.bN(a.length*8),16))
return s.bR()},
ku(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aW(80,$.C(),!1,t.e)
for(s=a2.length,r=0;r<16;r=p){q=r*8
p=r+1
a1[r]=A.aF(new Uint8Array(a2.subarray(q,A.b4(q,p*8,s))))}for(r=16;r<80;++r){s=a1[r-2]
q=s.F(0,19)
o=s.C(0,45)
n=$.f9()
m=q.S(0,o.m(0,n)).O(0,s.F(0,61).S(0,s.C(0,3).m(0,n))).O(0,s.F(0,6))
l=a1[r-7]
s=a1[r-15]
k=s.F(0,1).S(0,s.C(0,63).m(0,n)).O(0,s.F(0,8).S(0,s.C(0,56).m(0,n))).O(0,s.F(0,7))
j=a1[r-16]
a1[r]=m.q(0,l).q(0,k).q(0,j).m(0,n)}i=a3.a
h=a3.b
g=a3.c
f=a3.d
e=a3.e
d=a3.f
c=a3.r
b=a3.w
for(r=0;r<80;++r,b=c,c=d,d=e,e=a,f=g,g=h,h=i,i=a0){s=e.F(0,14)
q=e.C(0,50)
o=$.f9()
m=b.q(0,s.S(0,q.m(0,o)).O(0,e.F(0,18).S(0,e.C(0,46).m(0,o))).O(0,e.F(0,41).S(0,e.C(0,23).m(0,o)))).q(0,e.m(0,d).O(0,e.bV(0).m(0,c))).q(0,$.iy()[r]).q(0,a1[r]).m(0,o)
l=i.F(0,28).S(0,i.C(0,36).m(0,o)).O(0,i.F(0,34).S(0,i.C(0,30).m(0,o))).O(0,i.F(0,39).S(0,i.C(0,25).m(0,o))).q(0,i.m(0,h).O(0,i.m(0,g)).O(0,h.m(0,g))).m(0,o)
a=f.q(0,m).m(0,o)
a0=m.q(0,l).m(0,o)}s=a3.a.q(0,i)
q=$.f9()
a3.a=s.m(0,q)
a3.b=a3.b.q(0,h).m(0,q)
a3.c=a3.c.q(0,g).m(0,q)
a3.d=a3.d.q(0,f).m(0,q)
a3.e=a3.e.q(0,e).m(0,q)
a3.f=a3.f.q(0,d).m(0,q)
a3.r=a3.r.q(0,c).m(0,q)
a3.w=a3.w.q(0,b).m(0,q)
return a3},
lg(a){var s,r,q,p=A.kq(a),o=new A.dH(A.c("6a09e667f3bcc908",16),A.c("bb67ae8584caa73b",16),A.c("3c6ef372fe94f82b",16),A.c("a54ff53a5f1d36f1",16),A.c("510e527fade682d1",16),A.c("9b05688c2b3e6c1f",16),A.c("1f83d9abfb41bd6b",16),A.c("5be0cd19137e2179",16))
for(s=p.length,r=0;r<s;r=q){q=r+128
o=A.ku(new Uint8Array(p.subarray(r,A.b4(r,q,s))),o)}s=A.P(A.ai(o.a,8),t.S)
B.c.n(s,A.ai(o.b,8))
B.c.n(s,A.ai(o.c,8))
B.c.n(s,A.ai(o.d,8))
B.c.n(s,A.ai(o.e,8))
B.c.n(s,A.ai(o.f,8))
B.c.n(s,A.ai(o.r,8))
B.c.n(s,A.ai(o.w,8))
return new Uint8Array(A.v(s))},
dH:function dH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=$
_.w=f
_.x=g
_.$ti=h},
aR:function aR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.$ti=g},
ct:function ct(a){this.b=a},
bq:function bq(a){this.b=a},
ll(a){A.eZ(new A.f6(a),null,t.z,t.j)},
f6:function f6(a){this.a=a},
cr:function cr(a,b){this.a=a
this.$ti=b},
jp(a,b,c,d){var s=new A.d5(a,A.hf(d),c.h("@<0>").J(d).h("d5<1,2>"))
s.bZ(a,b,c,d)
return s},
cs:function cs(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b,c){this.a=a
this.c=b
this.$ti=c},
ei:function ei(a,b){this.a=a
this.b=b},
eZ(a,b,c,d){return A.l5(a,b,c,d)},
l5(a,b,c,d){var s=0,r=A.eM(t.H),q,p
var $async$eZ=A.eO(function(e,f){if(e===1)return A.eB(f,r)
while(true)switch(s){case 0:p=v.G.self
p=J.fa(p)===B.C?A.jp(t.m.a(p),null,c,d):A.iN(p,A.i9(A.i6(),c),!1,null,A.i9(A.i6(),c),c,d)
q=A.hx(null,t.H)
s=2
return A.fz(q,$async$eZ)
case 2:p.gb8().bN(new A.f_(a,new A.cr(new A.cs(p,c.h("@<0>").J(d).h("cs<1,2>")),c.h("@<0>").J(d).h("cr<1,2>")),d,c))
p.b0()
return A.eC(null,r)}})
return A.eD($async$eZ,r)},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff(a,b,c){return new A.O(c,a,b)},
iO(a){var s,r,q,p=A.a9(a.j(0,"name")),o=t.G.a(a.j(0,"value")),n=o.j(0,"e")
if(n==null)n=t.K.a(n)
s=new A.c0(A.a9(o.j(0,"s")))
for(r=0;r<2;++r){q=$.iP[r].$2(n,s)
if(q.gap()===p)return q}return new A.O("",n,s)},
je(a,b){return new A.aA("",a,b)},
hk(a,b){return new A.aA("",a,b)},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
bp(a,b){var s
$label0$0:{if(b.b(a)){s=a
break $label0$0}if(typeof a=="number"){s=new A.cm(a)
break $label0$0}if(typeof a=="string"){s=new A.a0(a)
break $label0$0}if(A.dc(a)){s=new A.cl(a)
break $label0$0}if(t.R.b(a)){s=new A.bn(J.fV(a,new A.dl(),t.f),B.a_)
break $label0$0}if(t.G.b(a)){s=t.f
s=new A.bo(a.b7(0,new A.dm(),s,s),B.a2)
break $label0$0}s=A.E(A.je("Unsupported type "+J.fa(a).i(0)+" when wrapping an IsolateType",B.f))}return b.a(s)},
l:function l(){},
dl:function dl(){},
dm:function dm(){},
cm:function cm(a){this.a=a},
a0:function a0(a){this.a=a},
cl:function cl(a){this.a=a},
bn:function bn(a,b){this.b=a
this.a=b},
bo:function bo(a,b){this.b=a
this.a=b},
ag:function ag(){},
eg:function eg(a){this.a=a},
N:function N(){},
eh:function eh(a){this.a=a},
jJ(a){var s=A.a8(a).h("G<1,K<m,m>>")
s=A.P(new A.G(a,new A.ez(),s),s.h("J.E"))
return B.k.bK(s,null)},
kY(a){return new A.a0(A.c7(A.le(B.r,B.l.an(a.a),B.l.an("mnemonic"),512,2048)))},
kX(a){var s=A.bd(a.a),r=A.eU(B.j,B.l.an("Bitcoin seed"),s),q=new Uint8Array(A.v(B.b.Y(r,0,32))),p=new Uint8Array(A.v(B.b.Y(r,32,64)))
return new A.a0(B.k.bK(A.a6(["depth",0,"parentFingerprint",0,"childNumber",0,"publicKey",A.c7(A.hc(q)),"chainCode",A.c7(p),"privateKey",A.c7(q)],t.N,t.K),null))},
kW(a2){var s,r,q,p,o,n,m,l,k,j,i,h="privateKey",g=B.k.bJ(a2.a,null),f=J.aI(g),e=B.k.bJ(A.a9(f.j(g,h)),null),d=J.aI(e),c=A.eA(d.j(e,"depth")),b=A.eA(d.j(e,"parentFingerprint")),a=A.eA(d.j(e,"childNumber")),a0=A.bd(A.a9(d.j(e,"publicKey"))),a1=A.bd(A.a9(d.j(e,"chainCode")))
d=A.bd(A.a9(d.j(e,h)))
s=A.h1(B.a1,A.a9(f.j(g,"network")))
r=A.h1(B.V,A.a9(f.j(g,"scriptType")))
f=A.a9(f.j(g,"derivationPath"))
q=new A.cN(d,c,b,a,a0,a1,B.h,B.o).cw(f)
p=A.h([],t.W)
for(d=t.S,c=t.t,f+="/",o=0;o<5;++o){n=q.bG(o,!1)
m=n.ct(s,r)
b=n.d
b=B.d.a0(A.aF(b).G(0,16),b.length*2,"0")
a=n.w
if(a.length!==32)A.E(A.t("Private key must be 32 bytes long.",null))
l=new Uint8Array(A.v(A.h([s===B.h?128:239],c)))
k=new Uint8Array(A.v(A.h([1],c)))
a0=A.P(l,d)
B.c.n(a0,a)
B.c.n(a0,k)
j=new Uint8Array(A.v(a0))
i=new Uint8Array(A.v(new Uint8Array(A.ak(A.ak(j)).subarray(0,A.b4(0,4,32)))))
a=A.P(j,A.a4(j).h("q.E"))
B.c.n(a,i)
p.push(new A.aN(f+o,m,b,A.i4(new Uint8Array(A.v(a)))))}return new A.a0(A.jJ(p))},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(){},
lc(a,b){var s,r
if(!A.l4(a))throw A.a(A.t("Invalid public key: "+A.j(a),null))
switch(b){case B.h:s=0
break
case B.m:s=111
break
case B.n:s=A.E(A.az("Regtest network not supported yet"))
break
default:s=null}r=A.de(A.ak(a))
s=A.h([s],t.t)
B.c.n(s,r)
return A.i5(new Uint8Array(A.v(s)))},
ld(a,b){var s,r,q,p
if(!A.fL(a))throw A.a(A.t("Invalid compressed public key: "+A.j(a),null))
switch(b){case B.h:s=5
break
case B.m:s=196
break
case B.n:s=A.E(A.az("Regtest network not supported yet"))
break
default:s=null}r=t.t
q=A.h([0,20],r)
B.c.n(q,A.de(A.ak(a)))
p=A.de(A.ak(new Uint8Array(A.v(q))))
r=A.h([s],r)
B.c.n(r,p)
return A.i5(new Uint8Array(A.v(r)))},
i4(a){var s,r,q,p,o=A.aF(a)
for(s="";o.U(0,$.C())>0;){r=o.B(0,A.bN(58))
q=A.bN(58)
if(q.c===0)A.E(B.i)
o=o.ak(q)
s="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[r.a7(0)]+s}for(q=a.length,p=0;p<q;++p)if(a[p]===0)s="1"+s
else break
return s},
i5(a){var s=new Uint8Array(A.v(B.b.Y(A.ak(A.ak(a)),0,4))),r=A.P(a,A.a4(a).h("q.E"))
B.c.n(r,s)
return A.i4(new Uint8Array(A.v(r)))},
c7(a){return B.d.a0(A.aF(a).G(0,16),a.length*2,"0")},
bd(a){var s,r,q,p,o,n
if(B.a.B(a.length,2)!==0)throw A.a(A.t("Hex string must have an even length",null))
if(B.d.bW(a,"0x"))a=B.d.bf(a,2)
s=a.length
r=B.a.K(s,2)
q=new Uint8Array(r)
for(p=0;p<s;p=o){o=p+2
n=A.aJ(B.d.T(a,p,o),16)
q[B.a.K(p,2)]=n}return q},
aF(a){var s,r,q=$.C()
for(s=a.length,r=0;r<s;++r)q=q.C(0,8).q(0,A.bN(a[r]))
return q},
ai(a,b){var s,r=$.C()
if(a.U(0,r)<0)throw A.a(A.t("Value must be non-negative",null))
s=A.h([],t.t)
for(;a.U(0,r)>0;){s.push(a.m(0,A.bN(255)).a7(0))
a=a.F(0,8)}for(;s.length<b;)s.push(0)
r=t.d
r=A.P(new A.ac(s,r),r.h("J.E"))
return new Uint8Array(A.v(r))},
iN(a,b,c,d,e,f,g){var s,r,q
if(t.j.b(a))t.r.a(J.fU(a)).gaY()
s=$.k
r=t.j.b(a)
q=r?t.r.a(J.fU(a)).gaY():a
if(r)J.iB(a)
s=new A.aR(q,d,e,A.hf(f),!1,new A.af(new A.u(s,t.D),t.h),f.h("@<0>").J(g).h("aR<1,2>"))
q.onmessage=A.hP(s.gcb())
return s},
fJ(a){return A.l2(a)},
l2(a){var s=0,r=A.eM(t.z),q,p,o
var $async$fJ=A.eO(function(b,c){if(b===1)return A.eB(c,r)
while(true)switch(s){case 0:p=A.hK(A.iQ(a,2))
o=a[1]
if(p===!0){p=o==null?t.K.a(o):o
o=A.bp(p,t.f)}p=new A.u($.k,t._)
new A.af(p,t.c).ab(t.Z.a(a[0]).$1(o))
q=p
s=1
break
case 1:return A.eC(q,r)}})
return A.eD($async$fJ,r)},
fE(a,b,c,d){var s=b==null?null:b.$1(a)
return s==null?d.a(a):s},
l9(){A.ll($.lb)}},B={}
var w=[A,J,B]
var $={}
A.fg.prototype={}
J.cq.prototype={
M(a,b){return a===b},
gA(a){return A.bE(a)},
i(a){return"Instance of '"+A.dC(a)+"'"},
gv(a){return A.W(A.fB(this))}}
J.cu.prototype={
i(a){return String(a)},
gA(a){return a?519018:218159},
gv(a){return A.W(t.y)},
$in:1,
$iaE:1}
J.bt.prototype={
M(a,b){return null==b},
i(a){return"null"},
gA(a){return 0},
gv(a){return A.W(t.P)},
$in:1}
J.bv.prototype={$iy:1}
J.am.prototype={
gA(a){return 0},
gv(a){return B.C},
i(a){return String(a)}}
J.cM.prototype={}
J.bK.prototype={}
J.ab.prototype={
i(a){var s=a[$.fO()]
if(s==null)return this.bX(a)
return"JavaScript function for "+J.bf(s)},
$iaa:1}
J.aT.prototype={
gA(a){return 0},
i(a){return String(a)}}
J.aU.prototype={
gA(a){return 0},
i(a){return String(a)}}
J.x.prototype={
n(a,b){var s
a.$flags&1&&A.f(a,"addAll",2)
if(Array.isArray(b)){this.c0(a,b)
return}for(s=J.df(b);s.l();)a.push(s.gp())},
c0(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.a(A.a_(a))
for(s=0;s<r;++s)a.push(b[s])},
ac(a,b,c){return new A.G(a,b,A.a8(a).h("@<1>").J(c).h("G<1,2>"))},
ao(a,b){var s,r=A.aW(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.j(a[s])
return r.join(b)},
N(a,b){return a[b]},
af(a,b){var s=a.length
if(b>s)throw A.a(A.R(b,0,s,"start",null))
if(b===s)return A.h([],A.a8(a))
return A.h(a.slice(b,s),A.a8(a))},
gb_(a){if(a.length>0)return a[0]
throw A.a(A.br())},
gb6(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.br())},
gD(a){return a.length===0},
gb5(a){return a.length!==0},
i(a){return A.h3(a,"[","]")},
gt(a){return new J.aO(a,a.length,A.a8(a).h("aO<1>"))},
gA(a){return A.bE(a)},
gk(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.a(A.fG(a,b))
return a[b]},
gv(a){return A.W(A.a8(a))},
$ii:1,
$ie:1,
$ip:1}
J.du.prototype={}
J.aO.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.a(A.fN(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bu.prototype={
U(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.a.gb4(b)
if(this.gb4(a)===s)return 0
if(this.gb4(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb4(a){return a===0?1/a<0:a<0},
a7(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.a(A.cT(""+a+".toInt()"))},
cv(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.a(A.cT(""+a+".ceil()"))},
cz(a,b,c){if(B.a.U(b,c)>0)throw A.a(A.ba(b))
if(this.U(a,b)<0)return b
if(this.U(a,c)>0)return c
return a},
G(a,b){var s,r,q,p
if(b<2||b>36)throw A.a(A.R(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.E(A.cT("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.d.E("0",q)},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
B(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bg(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.bA(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.bA(a,b)},
bA(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.cT("Result of truncating division is "+A.j(s)+": "+A.j(a)+" ~/ "+b))},
C(a,b){if(b<0)throw A.a(A.ba(b))
return b>31?0:a<<b>>>0},
bz(a,b){return b>31?0:a<<b>>>0},
a2(a,b){var s
if(a>0)s=this.aT(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aa(a,b){if(0>b)throw A.a(A.ba(b))
return this.aT(a,b)},
aT(a,b){return b>31?0:a>>>b},
gv(a){return A.W(t.n)},
$ir:1,
$iaj:1}
J.bs.prototype={
gbF(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.K(q,4294967296)
s+=32}return s-Math.clz32(q)},
gv(a){return A.W(t.S)},
$in:1,
$ib:1}
J.cv.prototype={
gv(a){return A.W(t.i)},
$in:1}
J.aS.prototype={
cD(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.bf(a,r-s)},
bW(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
T(a,b,c){return a.substring(b,A.hd(b,c,a.length))},
bf(a,b){return this.T(a,b,null)},
E(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.L)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
a0(a,b,c){var s=b-a.length
if(s<=0)return a
return this.E(c,s)+a},
i(a){return a},
gA(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gv(a){return A.W(t.N)},
gk(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.a(A.fG(a,b))
return a[b]},
$in:1,
$im:1}
A.bg.prototype={
a6(a,b,c,d){var s=this.a.bO(null,b,c),r=new A.bh(s,$.k,this.$ti.h("bh<1,2>"))
s.aq(r.gcg())
r.aq(a)
r.ar(d)
return r},
bN(a){return this.a6(a,null,null,null)},
bO(a,b,c){return this.a6(a,b,c,null)}}
A.bh.prototype={
aq(a){this.c=a==null?null:a},
ar(a){var s=this
s.a.ar(a)
if(a==null)s.d=null
else if(t.k.b(a))s.d=s.b.au(a)
else if(t.u.b(a))s.d=a
else throw A.a(A.t(u.h,null))},
ci(a){var s,r,q,p,o,n=this,m=n.c
if(m==null)return
s=null
try{s=n.$ti.y[1].a(a)}catch(o){r=A.Y(o)
q=A.a3(o)
p=n.d
if(p==null)A.b6(r,q)
else{m=n.b
if(t.k.b(p))m.bP(p,r,q)
else m.av(t.u.a(p),r)}return}n.b.av(m,s)}}
A.d_.prototype={
L(a,b){var s,r=this,q=b.length
if(q===0)return
s=r.a+q
if(r.b.length<s)r.bu(s)
B.b.aA(r.b,r.a,s,b)
r.a=s},
am(a){var s=this,r=s.b,q=s.a
if(r.length===q)s.bu(q)
r=s.b
q=s.a
r.$flags&2&&A.f(r)
r[q]=a
s.a=q+1},
bu(a){var s,r,q,p=a*2
if(p<1024)p=1024
else{s=p-1
s|=B.a.a2(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
p=((s|s>>>16)>>>0)+1}r=new Uint8Array(p)
q=this.b
B.b.aA(r,0,q.length,q)
this.b=r},
bR(){var s=this
if(s.a===0)return $.f8()
return new Uint8Array(A.v(J.iz(B.b.gu(s.b),s.b.byteOffset,s.a)))},
gk(a){return this.a}}
A.bx.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.dF.prototype={}
A.i.prototype={}
A.J.prototype={
gt(a){var s=this
return new A.aV(s,s.gk(s),A.w(s).h("aV<J.E>"))},
gD(a){return this.gk(this)===0},
ao(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.j(p.N(0,0))
if(o!==p.gk(p))throw A.a(A.a_(p))
for(r=s,q=1;q<o;++q){r=r+b+A.j(p.N(0,q))
if(o!==p.gk(p))throw A.a(A.a_(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.j(p.N(0,q))
if(o!==p.gk(p))throw A.a(A.a_(p))}return r.charCodeAt(0)==0?r:r}},
cI(a){return this.ao(0,"")},
ac(a,b,c){return new A.G(this,b,A.w(this).h("@<J.E>").J(c).h("G<1,2>"))}}
A.aV.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.aI(q),o=p.gk(q)
if(r.b!==o)throw A.a(A.a_(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.N(q,s);++r.c
return!0}}
A.ax.prototype={
gt(a){return new A.cB(J.df(this.a),this.b,A.w(this).h("cB<1,2>"))},
gk(a){return J.dg(this.a)},
gD(a){return J.iC(this.a)}}
A.bk.prototype={$ii:1}
A.cB.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.G.prototype={
gk(a){return J.dg(this.a)},
N(a,b){return this.b.$1(J.iA(this.a,b))}}
A.bm.prototype={}
A.ac.prototype={
gk(a){return J.dg(this.a)},
N(a,b){var s=this.a,r=J.aI(s)
return r.N(s,r.gk(s)-1-b)}}
A.bi.prototype={
gD(a){return this.gk(this)===0},
i(a){return A.fj(this)},
b7(a,b,c,d){var s=A.fi(c,d)
this.a_(0,new A.dh(this,b,s))
return s},
$iK:1}
A.dh.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.X(0,s.a,s.b)},
$S(){return A.w(this.a).h("~(1,2)")}}
A.bj.prototype={
gk(a){return this.b.length},
gbv(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a5(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
j(a,b){if(!this.a5(b))return null
return this.b[this.a[b]]},
a_(a,b){var s,r,q=this.gbv(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gV(){return new A.bV(this.gbv(),this.$ti.h("bV<1>"))}}
A.bV.prototype={
gk(a){return this.a.length},
gD(a){return 0===this.a.length},
gt(a){var s=this.a
return new A.d8(s,s.length,this.$ti.h("d8<1>"))}}
A.d8.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.co.prototype={
bY(a){if(false)A.ia(0,0)},
M(a,b){if(b==null)return!1
return b instanceof A.aQ&&this.a.M(0,b.a)&&A.fH(this)===A.fH(b)},
gA(a){return A.h6(this.a,A.fH(this))},
i(a){var s=B.c.ao([A.W(this.$ti.c)],", ")
return this.a.i(0)+" with "+("<"+s+">")}}
A.aQ.prototype={
$1(a){return this.a.$1$1(a,this.$ti.y[0])},
$S(){return A.ia(A.dd(this.a),this.$ti)}}
A.dL.prototype={
W(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bD.prototype={
i(a){return"Null check operator used on a null value"}}
A.cw.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cS.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dB.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bl.prototype={}
A.c_.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iL:1}
A.al.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ih(r==null?"unknown":r)+"'"},
gv(a){var s=A.dd(this)
return A.W(s==null?A.a4(this):s)},
$iaa:1,
gcV(){return this},
$C:"$1",
$R:1,
$D:null}
A.cc.prototype={$C:"$0",$R:0}
A.cd.prototype={$C:"$2",$R:2}
A.cQ.prototype={}
A.cP.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ih(s)+"'"}}
A.aP.prototype={
M(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aP))return!1
return this.$_target===b.$_target&&this.a===b.a},
gA(a){return(A.f3(this.a)^A.bE(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.dC(this.a)+"'")}}
A.cO.prototype={
i(a){return"RuntimeError: "+this.a}}
A.au.prototype={
gk(a){return this.a},
gD(a){return this.a===0},
gV(){return new A.aw(this,A.w(this).h("aw<1>"))},
a5(a){var s=this.cG(a)
return s},
cG(a){var s=this.d
if(s==null)return!1
return this.b2(s[this.b1(a)],a)>=0},
j(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cH(b)},
cH(a){var s,r,q=this.d
if(q==null)return null
s=q[this.b1(a)]
r=this.b2(s,a)
if(r<0)return null
return s[r].b},
X(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.bh(s==null?m.b=m.aL():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bh(r==null?m.c=m.aL():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aL()
p=m.b1(b)
o=q[p]
if(o==null)q[p]=[m.aM(b,c)]
else{n=m.b2(o,b)
if(n>=0)o[n].b=c
else o.push(m.aM(b,c))}}},
a_(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.a(A.a_(s))
r=r.c}},
bh(a,b,c){var s=a[b]
if(s==null)a[b]=this.aM(b,c)
else s.b=c},
aM(a,b){var s=this,r=new A.dy(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
b1(a){return J.aM(a)&1073741823},
b2(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.as(a[r].a,b))return r
return-1},
i(a){return A.fj(this)},
aL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.dy.prototype={}
A.aw.prototype={
gk(a){return this.a.a},
gD(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cz(s,s.r,s.e,this.$ti.h("cz<1>"))}}
A.cz.prototype={
gp(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.a_(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.av.prototype={
gk(a){return this.a.a},
gD(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cy(s,s.r,s.e,this.$ti.h("cy<1,2>"))}}
A.cy.prototype={
gp(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.a_(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.Q(s.a,s.b,r.$ti.h("Q<1,2>"))
r.c=s.c
return!0}}}
A.eV.prototype={
$1(a){return this.a(a)},
$S:4}
A.eW.prototype={
$2(a,b){return this.a(a,b)},
$S:12}
A.eX.prototype={
$1(a){return this.a(a)},
$S:13}
A.dt.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
cE(a){var s=this.b.exec(a)
if(s==null)return null
return new A.en(s)}}
A.en.prototype={
j(a,b){return this.b[b]}}
A.e0.prototype={
P(){var s=this.b
if(s===this)throw A.a(A.iV(this.a))
return s}}
A.cC.prototype={
gv(a){return B.a4},
bD(a,b,c){var s
A.eG(a,b,c)
s=new Uint8Array(a,b,c)
return s},
cu(a,b,c){var s
A.eG(a,b,c)
s=new DataView(a,b)
return s},
bC(a){return this.cu(a,0,null)},
$in:1,
$icb:1}
A.bA.prototype={
gu(a){if(((a.$flags|0)&2)!==0)return new A.db(a.buffer)
else return a.buffer},
cd(a,b,c,d){var s=A.R(b,0,c,d,null)
throw A.a(s)},
bo(a,b,c,d){if(b>>>0!==b||b>c)this.cd(a,b,c,d)}}
A.db.prototype={
bD(a,b,c){var s=A.iY(this.a,b,c)
s.$flags=3
return s},
bC(a){var s=A.iX(this.a,0,null)
s.$flags=3
return s},
$icb:1}
A.cD.prototype={
gv(a){return B.a5},
$in:1,
$ife:1}
A.aX.prototype={
gk(a){return a.length},
$iS:1}
A.by.prototype={
j(a,b){A.aD(b,a,a.length)
return a[b]},
$ii:1,
$ie:1,
$ip:1}
A.bz.prototype={
aA(a,b,c,d){var s,r,q,p
a.$flags&2&&A.f(a,5)
s=a.length
this.bo(a,b,s,"start")
this.bo(a,c,s,"end")
if(b>c)A.E(A.R(b,0,c,null,null))
r=c-b
q=d.length
if(q<r)A.E(A.dI("Not enough elements"))
p=q!==r?d.subarray(0,r):d
a.set(p,b)
return},
$ii:1,
$ie:1,
$ip:1}
A.cE.prototype={
gv(a){return B.a6},
$in:1,
$idi:1}
A.cF.prototype={
gv(a){return B.a7},
$in:1,
$idj:1}
A.cG.prototype={
gv(a){return B.a8},
j(a,b){A.aD(b,a,a.length)
return a[b]},
$in:1,
$idn:1}
A.cH.prototype={
gv(a){return B.a9},
j(a,b){A.aD(b,a,a.length)
return a[b]},
$in:1,
$idp:1}
A.cI.prototype={
gv(a){return B.aa},
j(a,b){A.aD(b,a,a.length)
return a[b]},
$in:1,
$idq:1}
A.cJ.prototype={
gv(a){return B.ac},
j(a,b){A.aD(b,a,a.length)
return a[b]},
$in:1,
$idN:1}
A.cK.prototype={
gv(a){return B.ad},
j(a,b){A.aD(b,a,a.length)
return a[b]},
$in:1,
$idO:1}
A.bB.prototype={
gv(a){return B.ae},
gk(a){return a.length},
j(a,b){A.aD(b,a,a.length)
return a[b]},
$in:1,
$idP:1}
A.bC.prototype={
gv(a){return B.af},
gk(a){return a.length},
j(a,b){A.aD(b,a,a.length)
return a[b]},
Y(a,b,c){return new Uint8Array(a.subarray(b,A.b4(b,c,a.length)))},
af(a,b){return this.Y(a,b,null)},
$in:1,
$idQ:1}
A.bW.prototype={}
A.bX.prototype={}
A.bY.prototype={}
A.bZ.prototype={}
A.a1.prototype={
h(a){return A.ev(v.typeUniverse,this,a)},
J(a){return A.jG(v.typeUniverse,this,a)}}
A.d3.prototype={}
A.et.prototype={
i(a){return A.U(this.a,null)}}
A.d2.prototype={
i(a){return this.a}}
A.c1.prototype={$iad:1}
A.dT.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.dS.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.dU.prototype={
$0(){this.a.$0()},
$S:6}
A.dV.prototype={
$0(){this.a.$0()},
$S:6}
A.er.prototype={
c_(a,b){if(self.setTimeout!=null)self.setTimeout(A.c8(new A.es(this,b),0),a)
else throw A.a(A.cT("`setTimeout()` not found."))}}
A.es.prototype={
$0(){this.b.$0()},
$S:0}
A.cV.prototype={
ab(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.ag(a)
else{s=r.a
if(r.$ti.h("a5<1>").b(a))s.bn(a)
else s.bq(a)}},
aX(a,b){var s=this.a
if(this.b)s.ai(new A.V(a,b))
else s.aF(new A.V(a,b))}}
A.eE.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.eF.prototype={
$2(a,b){this.a.$2(1,new A.bl(a,b))},
$S:15}
A.eP.prototype={
$2(a,b){this.a(a,b)},
$S:16}
A.V.prototype={
i(a){return A.j(this.a)},
$io:1,
ga3(){return this.b}}
A.ao.prototype={}
A.b0.prototype={
aN(){},
aO(){}}
A.cY.prototype={
gaK(){return this.c<4},
cn(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
cp(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if((k.c&4)!==0){s=new A.bS($.k,A.w(k).h("bS<1>"))
A.ig(s.gcj())
if(c!=null)s.c=c
return s}s=$.k
r=d?1:0
q=b!=null?32:0
p=A.hu(s,a)
o=A.hv(s,b)
n=c==null?A.kI():c
m=new A.b0(k,p,o,n,s,r|q,A.w(k).h("b0<1>"))
m.CW=m
m.ch=m
m.ay=k.c&1
l=k.e
k.e=m
m.ch=null
m.CW=l
if(l==null)k.d=m
else l.ch=m
if(k.d===m)A.i_(k.a)
return m},
cm(a){var s,r=this
A.w(r).h("b0<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.cn(a)
if((r.c&2)===0&&r.d==null)r.c2()}return null},
aC(){if((this.c&4)!==0)return new A.ay("Cannot add new events after calling close")
return new A.ay("Cannot add new events while doing an addStream")},
L(a,b){if(!this.gaK())throw A.a(this.aC())
this.aQ(b)},
aW(a,b){var s
if(!this.gaK())throw A.a(this.aC())
s=A.hQ(a,b)
this.aS(s.a,s.b)},
cs(a){return this.aW(a,null)},
a4(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gaK())throw A.a(q.aC())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.u($.k,t.D)
q.aR()
return r},
c2(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.ag(null)}A.i_(this.b)}}
A.bM.prototype={
aQ(a){var s,r
for(s=this.d,r=this.$ti.h("d0<1>");s!=null;s=s.ch)s.aE(new A.d0(a,r))},
aS(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.aE(new A.e3(a,b))},
aR(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.aE(B.M)
else this.r.ag(null)}}
A.cZ.prototype={
aX(a,b){var s=this.a
if((s.a&30)!==0)throw A.a(A.dI("Future already completed"))
s.aF(A.hQ(a,b))},
bI(a){return this.aX(a,null)}}
A.af.prototype={
ab(a){var s=this.a
if((s.a&30)!==0)throw A.a(A.dI("Future already completed"))
s.ag(a)},
cA(){return this.ab(null)}}
A.b1.prototype={
cJ(a){if((this.c&15)!==6)return!0
return this.b.b.bc(this.d,a.a)},
cF(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.Q.b(r))q=o.cO(r,p,a.b)
else q=o.bc(r,p)
try{p=q
return p}catch(s){if(t.b7.b(A.Y(s))){if((this.c&1)!==0)throw A.a(A.t("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.t("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
bQ(a,b,c){var s,r=$.k
if(r===B.e){if(!t.Q.b(b)&&!t.v.b(b))throw A.a(A.fb(b,"onError",u.c))}else b=A.kw(b,r)
s=new A.u(r,c.h("u<0>"))
this.aD(new A.b1(s,3,a,b,this.$ti.h("@<1>").J(c).h("b1<1,2>")))
return s},
bB(a,b,c){var s=new A.u($.k,c.h("u<0>"))
this.aD(new A.b1(s,19,a,b,this.$ti.h("@<1>").J(c).h("b1<1,2>")))
return s},
co(a){this.a=this.a&1|16
this.c=a},
ah(a){this.a=a.a&30|this.a&1
this.c=a.c},
aD(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.aD(a)
return}s.ah(r)}A.b7(null,null,s.b,new A.e6(s,a))}},
by(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.by(a)
return}n.ah(s)}m.a=n.al(a)
A.b7(null,null,n.b,new A.ea(m,n))}},
a9(){var s=this.c
this.c=null
return this.al(s)},
al(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bq(a){var s=this,r=s.a9()
s.a=8
s.c=a
A.aB(s,r)},
c5(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.a9()
q.ah(a)
A.aB(q,r)},
ai(a){var s=this.a9()
this.co(a)
A.aB(this,s)},
c4(a,b){this.ai(new A.V(a,b))},
ag(a){if(this.$ti.h("a5<1>").b(a)){this.bn(a)
return}this.c1(a)},
c1(a){this.a^=2
A.b7(null,null,this.b,new A.e8(this,a))},
bn(a){A.fu(a,this,!1)
return},
aF(a){this.a^=2
A.b7(null,null,this.b,new A.e7(this,a))},
$ia5:1}
A.e6.prototype={
$0(){A.aB(this.a,this.b)},
$S:0}
A.ea.prototype={
$0(){A.aB(this.b,this.a.a)},
$S:0}
A.e9.prototype={
$0(){A.fu(this.a.a,this.b,!0)},
$S:0}
A.e8.prototype={
$0(){this.a.bq(this.b)},
$S:0}
A.e7.prototype={
$0(){this.a.ai(this.b)},
$S:0}
A.ed.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.cM(q.d)}catch(p){s=A.Y(p)
r=A.a3(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.fc(q)
n=k.a
n.c=new A.V(q,o)
q=n}q.b=!0
return}if(j instanceof A.u&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.u){m=k.b.a
l=new A.u(m.b,m.$ti)
j.bQ(new A.ee(l,m),new A.ef(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ee.prototype={
$1(a){this.a.c5(this.b)},
$S:5}
A.ef.prototype={
$2(a,b){this.a.ai(new A.V(a,b))},
$S:17}
A.ec.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.bc(p.d,this.b)}catch(o){s=A.Y(o)
r=A.a3(o)
q=s
p=r
if(p==null)p=A.fc(q)
n=this.a
n.c=new A.V(q,p)
n.b=!0}},
$S:0}
A.eb.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.cJ(s)&&p.a.e!=null){p.c=p.a.cF(s)
p.b=!1}}catch(o){r=A.Y(o)
q=A.a3(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fc(p)
m=l.b
m.c=new A.V(p,n)
p=m}p.b=!0}},
$S:0}
A.cW.prototype={}
A.a2.prototype={
gk(a){var s={},r=new A.u($.k,t.a)
s.a=0
this.a6(new A.dJ(s,this),!0,new A.dK(s,r),r.gc3())
return r}}
A.dJ.prototype={
$1(a){++this.a.a},
$S(){return A.w(this.b).h("~(a2.T)")}}
A.dK.prototype={
$0(){var s=this.b,r=this.a.a,q=s.a9()
s.a=8
s.c=r
A.aB(s,q)},
$S:0}
A.bQ.prototype={
gA(a){return(A.bE(this.a)^892482866)>>>0},
M(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ao&&b.a===this.a}}
A.bR.prototype={
bw(){return this.w.cm(this)},
aN(){},
aO(){}}
A.bP.prototype={
aq(a){this.a=A.hu(this.d,a)},
ar(a){var s=this,r=s.e
if(a==null)s.e=r&4294967263
else s.e=r|32
s.b=A.hv(s.d,a)},
bm(){var s,r=this,q=r.e|=8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.bw()},
aN(){},
aO(){},
bw(){return null},
aE(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.d9(A.w(q).h("d9<1>"))
s=p.c
if(s==null)p.b=p.c=a
else{s.sad(a)
p.c=a}r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.bd(q)}},
aQ(a){var s=this,r=s.e
s.e=r|64
s.d.av(s.a,a)
s.e&=4294967231
s.bp((r&4)!==0)},
aS(a,b){var s=this,r=s.e,q=new A.e_(s,a,b)
if((r&1)!==0){s.e=r|16
s.bm()
q.$0()}else{q.$0()
s.bp((r&4)!==0)}},
aR(){this.bm()
this.e|=16
new A.dZ(this).$0()},
bp(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.aN()
else q.aO()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.bd(q)}}
A.e_.prototype={
$0(){var s,r,q=this.a,p=q.e
if((p&8)!==0&&(p&16)===0)return
q.e=p|64
s=q.b
p=this.b
r=q.d
if(t.k.b(s))r.bP(s,p,this.c)
else r.av(s,p)
q.e&=4294967231},
$S:0}
A.dZ.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|74
s.d.bb(s.c)
s.e&=4294967231},
$S:0}
A.b3.prototype={
a6(a,b,c,d){return this.a.cp(a,d,c,b===!0)},
bN(a){return this.a6(a,null,null,null)},
bO(a,b,c){return this.a6(a,b,c,null)}}
A.d1.prototype={
gad(){return this.a},
sad(a){return this.a=a}}
A.d0.prototype={
b9(a){a.aQ(this.b)}}
A.e3.prototype={
b9(a){a.aS(this.b,this.c)}}
A.e2.prototype={
b9(a){a.aR()},
gad(){return null},
sad(a){throw A.a(A.dI("No events after a done."))}}
A.d9.prototype={
bd(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.ig(new A.eo(s,a))
s.a=1}}
A.eo.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gad()
q.b=r
if(r==null)q.c=null
s.b9(this.b)},
$S:0}
A.bS.prototype={
aq(a){},
ar(a){},
ck(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.bb(s)}}else r.a=q}}
A.da.prototype={}
A.ey.prototype={}
A.eN.prototype={
$0(){A.iM(this.a,this.b)},
$S:0}
A.ep.prototype={
bb(a){var s,r,q
try{if(B.e===$.k){a.$0()
return}A.hW(null,null,this,a)}catch(q){s=A.Y(q)
r=A.a3(q)
A.b6(s,r)}},
cS(a,b){var s,r,q
try{if(B.e===$.k){a.$1(b)
return}A.hY(null,null,this,a,b)}catch(q){s=A.Y(q)
r=A.a3(q)
A.b6(s,r)}},
av(a,b){a.toString
return this.cS(a,b,t.z)},
cQ(a,b,c){var s,r,q
try{if(B.e===$.k){a.$2(b,c)
return}A.hX(null,null,this,a,b,c)}catch(q){s=A.Y(q)
r=A.a3(q)
A.b6(s,r)}},
bP(a,b,c){var s=t.z
a.toString
return this.cQ(a,b,c,s,s)},
bE(a){return new A.eq(this,a)},
j(a,b){return null},
cN(a){if($.k===B.e)return a.$0()
return A.hW(null,null,this,a)},
cM(a){a.toString
return this.cN(a,t.z)},
cR(a,b){if($.k===B.e)return a.$1(b)
return A.hY(null,null,this,a,b)},
bc(a,b){var s=t.z
a.toString
return this.cR(a,b,s,s)},
cP(a,b,c){if($.k===B.e)return a.$2(b,c)
return A.hX(null,null,this,a,b,c)},
cO(a,b,c){var s=t.z
a.toString
return this.cP(a,b,c,s,s,s)},
cL(a){return a},
au(a){var s=t.z
a.toString
return this.cL(a,s,s,s)}}
A.eq.prototype={
$0(){return this.a.bb(this.b)},
$S:0}
A.bT.prototype={
gk(a){return this.a},
gD(a){return this.a===0},
gV(){return new A.bU(this,this.$ti.h("bU<1>"))},
a5(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.c6(a)},
c6(a){var s=this.d
if(s==null)return!1
return this.aJ(this.bt(s,a),a)>=0},
j(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.hy(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.hy(q,b)
return r}else return this.ca(b)},
ca(a){var s,r,q=this.d
if(q==null)return null
s=this.bt(q,a)
r=this.aJ(s,a)
return r<0?null:s[r+1]},
X(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.bl(s==null?m.b=A.fv():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.bl(r==null?m.c=A.fv():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.fv()
p=A.f3(b)&1073741823
o=q[p]
if(o==null){A.fw(q,p,[b,c]);++m.a
m.e=null}else{n=m.aJ(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
a_(a,b){var s,r,q,p,o,n=this,m=n.br()
for(s=m.length,r=n.$ti.y[1],q=0;q<s;++q){p=m[q]
o=n.j(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.a(A.a_(n))}},
br(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aW(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
bl(a,b,c){if(a[b]==null){++this.a
this.e=null}A.fw(a,b,c)},
bt(a,b){return a[A.f3(b)&1073741823]}}
A.b2.prototype={
aJ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bU.prototype={
gk(a){return this.a.a},
gD(a){return this.a.a===0},
gt(a){var s=this.a
return new A.d4(s,s.br(),this.$ti.h("d4<1>"))}}
A.d4.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.a(A.a_(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.q.prototype={
gt(a){return new A.aV(a,this.gk(a),A.a4(a).h("aV<q.E>"))},
N(a,b){return this.j(a,b)},
gD(a){return this.gk(a)===0},
gb5(a){return!this.gD(a)},
gb_(a){if(this.gk(a)===0)throw A.a(A.br())
return this.j(a,0)},
gb6(a){if(this.gk(a)===0)throw A.a(A.br())
return this.j(a,this.gk(a)-1)},
ac(a,b,c){return new A.G(a,b,A.a4(a).h("@<q.E>").J(c).h("G<1,2>"))},
i(a){return A.h3(a,"[","]")}}
A.T.prototype={
a_(a,b){var s,r,q,p
for(s=this.gV(),s=s.gt(s),r=A.w(this).h("T.V");s.l();){q=s.gp()
p=this.j(0,q)
b.$2(q,p==null?r.a(p):p)}},
b7(a,b,c,d){var s,r,q,p,o,n=A.fi(c,d)
for(s=this.gV(),s=s.gt(s),r=A.w(this).h("T.V");s.l();){q=s.gp()
p=this.j(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.X(0,o.a,o.b)}return n},
gk(a){var s=this.gV()
return s.gk(s)},
gD(a){var s=this.gV()
return s.gD(s)},
i(a){return A.fj(this)},
$iK:1}
A.dz.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.j(a)
r.a=(r.a+=s)+": "
s=A.j(b)
r.a+=s},
$S:8}
A.d6.prototype={
j(a,b){var s,r=this.b
if(r==null)return this.c.j(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cl(b):s}},
gk(a){return this.b==null?this.c.a:this.aj().length},
gD(a){return this.gk(0)===0},
gV(){if(this.b==null){var s=this.c
return new A.aw(s,A.w(s).h("aw<1>"))}return new A.d7(this)},
a_(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a_(0,b)
s=o.aj()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.eK(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.a_(o))}},
aj(){var s=this.c
if(s==null)s=this.c=A.h(Object.keys(this.a),t.s)
return s},
cl(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.eK(this.a[a])
return this.b[a]=s}}
A.d7.prototype={
gk(a){return this.a.gk(0)},
N(a,b){var s=this.a
return s.b==null?s.gV().N(0,b):s.aj()[b]},
gt(a){var s=this.a
if(s.b==null){s=s.gV()
s=s.gt(s)}else{s=s.aj()
s=new J.aO(s,s.length,A.a8(s).h("aO<1>"))}return s}}
A.ce.prototype={}
A.cg.prototype={}
A.bw.prototype={
i(a){var s=A.cj(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.cx.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.dv.prototype={
bJ(a,b){var s=A.kr(a,this.gcB().a)
return s},
bK(a,b){var s=A.jr(a,this.gcC().b,null)
return s},
gcC(){return B.S},
gcB(){return B.R}}
A.dx.prototype={}
A.dw.prototype={}
A.el.prototype={
bT(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.d.T(a,r,q)
r=q+1
o=A.D(92)
s.a+=o
o=A.D(117)
s.a+=o
o=A.D(100)
s.a+=o
o=p>>>8&15
o=A.D(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.D(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.D(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.d.T(a,r,q)
r=q+1
o=A.D(92)
s.a+=o
switch(p){case 8:o=A.D(98)
s.a+=o
break
case 9:o=A.D(116)
s.a+=o
break
case 10:o=A.D(110)
s.a+=o
break
case 12:o=A.D(102)
s.a+=o
break
case 13:o=A.D(114)
s.a+=o
break
default:o=A.D(117)
s.a+=o
o=A.D(48)
s.a+=o
o=A.D(48)
s.a+=o
o=p>>>4&15
o=A.D(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.D(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.d.T(a,r,q)
r=q+1
o=A.D(92)
s.a+=o
o=A.D(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.d.T(a,r,m)},
aG(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.cx(a,null))}s.push(a)},
aw(a){var s,r,q,p,o=this
if(o.bS(a))return
o.aG(a)
try{s=o.b.$1(a)
if(!o.bS(s)){q=A.h4(a,null,o.gbx())
throw A.a(q)}o.a.pop()}catch(p){r=A.Y(p)
q=A.h4(a,r,o.gbx())
throw A.a(q)}},
bS(a){var s,r,q,p=this
if(typeof a=="number"){if(!isFinite(a))return!1
s=p.c
r=B.x.i(a)
s.a+=r
return!0}else if(a===!0){p.c.a+="true"
return!0}else if(a===!1){p.c.a+="false"
return!0}else if(a==null){p.c.a+="null"
return!0}else if(typeof a=="string"){s=p.c
s.a+='"'
p.bT(a)
s.a+='"'
return!0}else if(t.j.b(a)){p.aG(a)
p.cT(a)
p.a.pop()
return!0}else if(t.G.b(a)){p.aG(a)
q=p.cU(a)
p.a.pop()
return q}else return!1},
cT(a){var s,r,q=this.c
q.a+="["
s=J.bb(a)
if(s.gb5(a)){this.aw(s.j(a,0))
for(r=1;r<s.gk(a);++r){q.a+=","
this.aw(s.j(a,r))}}q.a+="]"},
cU(a){var s,r,q,p,o,n=this,m={}
if(a.gD(a)){n.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.aW(s,null,!1,t.X)
q=m.a=0
m.b=!0
a.a_(0,new A.em(m,r))
if(!m.b)return!1
p=n.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
n.bT(A.a9(r[q]))
p.a+='":'
n.aw(r[q+1])}p.a+="}"
return!0}}
A.em.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:8}
A.ek.prototype={
gbx(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dR.prototype={
an(a){var s,r,q=A.hd(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.ew(s)
if(r.c9(a,0,q)!==q)r.aV()
return B.b.Y(s,0,r.b)}}
A.ew.prototype={
aV(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.f(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
cr(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.f(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.aV()
return!1}},
c9(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.f(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.cr(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.aV()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.f(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.f(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.z.prototype={
R(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.F(p,r)
return new A.z(p===0?!1:s,r,p)},
c7(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.C()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.F(s,q)
return new A.z(n===0?!1:o,q,n)},
c8(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.C()
s=k-a
if(s<=0)return l.a?$.f7():$.C()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.F(s,q)
m=new A.z(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.H(0,$.M())
return m},
C(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.a(A.t("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.a.K(b,16)
if(B.a.B(b,16)===0)return n.c7(r)
q=s+r+1
p=new Uint16Array(q)
A.hq(n.b,s,b,p)
s=n.a
o=A.F(q,p)
return new A.z(o===0?!1:s,p,o)},
F(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.a(A.t("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.a.K(b,16)
q=B.a.B(b,16)
if(q===0)return j.c8(r)
p=s-r
if(p<=0)return j.a?$.f7():$.C()
o=j.b
n=new Uint16Array(p)
A.jn(o,s,b,n)
s=j.a
m=A.F(p,n)
l=new A.z(m===0?!1:s,n,m)
if(s){if((o[r]&B.a.C(1,q)-1)!==0)return l.H(0,$.M())
for(k=0;k<r;++k)if(o[k]!==0)return l.H(0,$.M())}return l},
U(a,b){var s,r=this.a
if(r===b.a){s=A.dW(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
Z(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.Z(p,b)
if(o===0)return $.C()
if(n===0)return p.a===b?p:p.R(0)
s=o+1
r=new Uint16Array(s)
A.jk(p.b,o,a.b,n,r)
q=A.F(s,r)
return new A.z(q===0?!1:b,r,q)},
I(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.C()
s=a.c
if(s===0)return p.a===b?p:p.R(0)
r=new Uint16Array(o)
A.cX(p.b,o,a.b,s,r)
q=A.F(o,r)
return new A.z(q===0?!1:b,r,q)},
bj(a,b){var s,r,q,p,o,n=this.c,m=a.c
n=n<m?n:m
s=this.b
r=a.b
q=new Uint16Array(n)
for(p=0;p<n;++p)q[p]=s[p]&r[p]
o=A.F(n,q)
return new A.z(o===0?!1:b,q,o)},
bi(a,b){var s,r,q=this.c,p=this.b,o=a.b,n=new Uint16Array(q),m=a.c
if(q<m)m=q
for(s=0;s<m;++s)n[s]=p[s]&~o[s]
for(s=m;s<q;++s)n[s]=p[s]
r=A.F(q,n)
return new A.z(r===0?!1:b,n,r)},
bk(a,b){var s,r,q,p,o,n=this.c,m=a.c,l=n>m?n:m,k=this.b,j=a.b,i=new Uint16Array(l)
if(n<m){s=n
r=a}else{s=m
r=this}for(q=0;q<s;++q)i[q]=k[q]|j[q]
p=r.b
for(q=s;q<l;++q)i[q]=p[q]
o=A.F(l,i)
return new A.z(o===0?!1:b,i,o)},
aB(a,b){var s,r,q,p,o,n=this.c,m=a.c,l=n>m?n:m,k=this.b,j=a.b,i=new Uint16Array(l)
if(n<m){s=n
r=a}else{s=m
r=this}for(q=0;q<s;++q)i[q]=k[q]^j[q]
p=r.b
for(q=s;q<l;++q)i[q]=p[q]
o=A.F(l,i)
return new A.z(o===0?!1:b,i,o)},
m(a,b){var s,r,q,p=this
if(p.c===0||b.c===0)return $.C()
s=p.a
if(s===b.a){if(s){s=$.M()
return p.I(s,!0).bk(b.I(s,!0),!0).Z(s,!0)}return p.bj(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.bi(r.I($.M(),!1),!1)},
S(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.M()
return p.I(s,!0).bj(b.I(s,!0),!0).Z(s,!0)}return p.bk(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.M()
return r.I(s,!0).bi(q,!0).Z(s,!0)},
O(a,b){var s,r,q,p=this
if(p.c===0)return b
if(b.c===0)return p
s=p.a
if(s===b.a){if(s){s=$.M()
return p.I(s,!0).aB(b.I(s,!0),!1)}return p.aB(b,!1)}if(s){r=p
q=b}else{r=b
q=p}s=$.M()
return q.aB(r.I(s,!0),!0).Z(s,!0)},
bV(a){var s=this
if(s.c===0)return $.f7()
if(s.a)return s.I($.M(),!1)
return s.Z($.M(),!0)},
q(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.Z(b,r)
if(A.dW(q.b,p,b.b,s)>=0)return q.I(b,r)
return b.I(q,!r)},
H(a,b){var s,r,q=this,p=q.c
if(p===0)return b.R(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.Z(b,r)
if(A.dW(q.b,p,b.b,s)>=0)return q.I(b,r)
return b.I(q,!r)},
E(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.C()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.hr(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.F(s,p)
return new A.z(m===0?!1:n,p,m)},
ak(a){var s,r,q,p
if(this.c<a.c)return $.C()
this.bs(a)
s=$.fp.P()-$.bO.P()
r=A.fr($.fo.P(),$.bO.P(),$.fp.P(),s)
q=A.F(s,r)
p=new A.z(!1,r,q)
return this.a!==a.a&&q>0?p.R(0):p},
aP(a){var s,r,q,p=this
if(p.c<a.c)return p
p.bs(a)
s=A.fr($.fo.P(),0,$.bO.P(),$.bO.P())
r=A.F($.bO.P(),s)
q=new A.z(!1,s,r)
if($.fq.P()>0)q=q.F(0,$.fq.P())
return p.a&&q.c>0?q.R(0):q},
bs(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.hn&&a.c===$.hp&&c.b===$.hm&&a.b===$.ho)return
s=a.b
r=a.c
q=16-B.a.gbF(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.hl(s,r,q,p)
n=new Uint16Array(b+5)
m=A.hl(c.b,b,q,n)}else{n=A.fr(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.ft(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.dW(n,m,j,i)>=0){g&2&&A.f(n)
n[m]=1
A.cX(n,h,j,i,n)}else{g&2&&A.f(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.cX(f,o+1,p,o,f)
e=m-1
for(;k>0;){d=A.jl(l,n,e);--k
A.hr(d,f,0,n,k,o)
if(n[e]<d){i=A.ft(f,o,k,j)
A.cX(n,h,j,i,n)
for(;--d,n[e]<d;)A.cX(n,h,j,i,n)}--e}$.hm=c.b
$.hn=b
$.ho=s
$.hp=r
$.fo.b=n
$.fp.b=h
$.bO.b=o
$.fq.b=q},
gA(a){var s,r,q,p=new A.dX(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.dY().$1(s)},
M(a,b){if(b==null)return!1
return b instanceof A.z&&this.U(0,b)===0},
B(a,b){var s
if(b.c===0)throw A.a(B.i)
s=this.aP(b)
if(s.a)s=b.a?s.H(0,b):s.q(0,b)
return s},
ba(a){var s,r
if(a===0)return $.M()
s=$.M()
for(r=this;a!==0;){if((a&1)===1)s=s.E(0,r)
a=a>>>1
if(a!==0)r=r.E(0,r)}return s},
a7(a){var s,r,q
for(s=this.c-1,r=this.b,q=0;s>=0;--s)q=q*65536+r[s]
return this.a?-q:q},
i(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.a.i(-n.b[0])
return B.a.i(n.b[0])}s=A.h([],t.s)
m=n.a
r=m?n.R(0):n
for(;r.c>1;){q=$.fR()
if(q.c===0)A.E(B.i)
p=r.aP(q).i(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.ak(q)}s.push(B.a.i(r.b[0]))
if(m)s.push("-")
return new A.ac(s,t.bd).cI(0)},
aU(a){if(a<10)return 48+a
return 97+a-10},
G(a,b){var s,r,q,p,o,n,m,l=this
if(b<2||b>36)throw A.a(A.R(b,2,36,null,null))
s=l.c
if(s===0)return"0"
if(s===1){r=B.a.G(l.b[0],b)
if(l.a)return"-"+r
return r}if(b===16)return l.cq()
q=A.an(b)
p=A.h([],t.t)
s=l.a
o=s?l.R(0):l
for(n=q.c===0;o.c!==0;){if(n)A.E(B.i)
m=o.aP(q).a7(0)
o=o.ak(q)
p.push(l.aU(m))}r=A.hh(new A.ac(p,t.d))
if(s)return"-"+r
return r},
cq(){var s,r,q,p,o,n,m=this,l=A.h([],t.t)
for(s=m.c-1,r=m.b,q=0;q<s;++q){p=r[q]
for(o=0;o<4;++o){l.push(m.aU(p&15))
p=p>>>4}}n=r[s]
for(;n!==0;){l.push(m.aU(n&15))
n=n>>>4}if(m.a)l.push(45)
return A.hh(new A.ac(l,t.d))},
$ifd:1}
A.dX.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:18}
A.dY.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:19}
A.ch.prototype={
M(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ch)if(this.a===b.a)s=this.b===b.b
return s},
gA(a){return A.h6(this.a,this.b)},
i(a){var s=this,r=A.iK(A.j5(s)),q=A.ci(A.j3(s)),p=A.ci(A.j_(s)),o=A.ci(A.j0(s)),n=A.ci(A.j2(s)),m=A.ci(A.j4(s)),l=A.h0(A.j1(s)),k=s.b,j=k===0?"":A.h0(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"}}
A.e4.prototype={
i(a){return this.a1()}}
A.o.prototype={
ga3(){return A.iZ(this)}}
A.c9.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cj(s)
return"Assertion failed"}}
A.ad.prototype={}
A.Z.prototype={
gaI(){return"Invalid argument"+(!this.a?"(s)":"")},
gaH(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.j(p),n=s.gaI()+q+o
if(!s.a)return n
return n+s.gaH()+": "+A.cj(s.gb3())},
gb3(){return this.b}}
A.bF.prototype={
gb3(){return this.b},
gaI(){return"RangeError"},
gaH(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.j(q):""
else if(q==null)s=": Not greater than or equal to "+A.j(r)
else if(q>r)s=": Not in inclusive range "+A.j(r)+".."+A.j(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.j(r)
return s}}
A.cn.prototype={
gb3(){return this.b},
gaI(){return"RangeError"},
gaH(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.bL.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cR.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.ay.prototype={
i(a){return"Bad state: "+this.a}}
A.cf.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cj(s)+"."}}
A.cL.prototype={
i(a){return"Out of Memory"},
ga3(){return null},
$io:1}
A.bH.prototype={
i(a){return"Stack Overflow"},
ga3(){return null},
$io:1}
A.e5.prototype={
i(a){return"Exception: "+this.a}}
A.dk.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.d.T(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.cp.prototype={
ga3(){return null},
i(a){return"IntegerDivisionByZeroException"},
$io:1}
A.e.prototype={
ac(a,b,c){return A.iW(this,b,A.w(this).h("e.E"),c)},
gk(a){var s,r=this.gt(this)
for(s=0;r.l();)++s
return s},
gD(a){return!this.gt(this).l()},
gb5(a){return!this.gD(this)},
gb_(a){var s=this.gt(this)
if(!s.l())throw A.a(A.br())
return s.gp()},
gb6(a){var s,r=this.gt(this)
if(!r.l())throw A.a(A.br())
do s=r.gp()
while(r.l())
return s},
N(a,b){var s,r
A.fk(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gp();--r}throw A.a(A.h2(b,b-r,this,"index"))},
i(a){return A.iR(this,"(",")")}}
A.Q.prototype={
i(a){return"MapEntry("+A.j(this.a)+": "+A.j(this.b)+")"}}
A.H.prototype={
gA(a){return A.d.prototype.gA.call(this,0)},
i(a){return"null"}}
A.d.prototype={$id:1,
M(a,b){return this===b},
gA(a){return A.bE(this)},
i(a){return"Instance of '"+A.dC(this)+"'"},
gv(a){return A.bc(this)},
toString(){return this.i(this)}}
A.c0.prototype={
i(a){return this.a},
$iL:1}
A.dE.prototype={
gp(){return this.d},
l(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.jX(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.bJ.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.f1.prototype={
$1(a){var s,r,q,p
if(A.hV(a))return a
s=this.a
if(s.a5(a))return s.j(0,a)
if(t.G.b(a)){r={}
s.X(0,a,r)
for(s=a.gV(),s=s.gt(s);s.l();){q=s.gp()
r[q]=this.$1(a.j(0,q))}return r}else if(t.R.b(a)){p=[]
s.X(0,a,p)
B.c.n(p,J.fV(a,this,t.z))
return p}else return a},
$S:9}
A.f4.prototype={
$1(a){return this.a.ab(a)},
$S:1}
A.f5.prototype={
$1(a){if(a==null)return this.a.bI(new A.dA(a===undefined))
return this.a.bI(a)},
$S:1}
A.eR.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.hU(a))return a
s=this.a
a.toString
if(s.a5(a))return s.j(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.E(A.R(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.eQ(!0,"isUtc",t.y)
return new A.ch(r,0,!0)}if(a instanceof RegExp)throw A.a(A.t("structured clone of RegExp",null))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.lf(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.fi(p,p)
s.X(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bb(n),p=s.gt(n);p.l();)m.push(A.fF(p.gp()))
for(l=0;l<s.gk(n);++l){k=s.j(n,l)
j=m[l]
if(k!=null)o.X(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.X(0,a,o)
h=a.length
for(s=J.aI(i),l=0;l<h;++l)o.push(this.$1(s.j(i,l)))
return o}return a},
$S:9}
A.dA.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.eI.prototype={
$1(a){return B.d.a0(B.a.G(a,2),8,"0")},
$S:20}
A.eJ.prototype={
$1(a){return A.aJ(a,2)},
$S:10}
A.eH.prototype={
$1(a){return A.aJ(a,2)},
$S:10}
A.aY.prototype={
a1(){return"Network."+this.b}}
A.b_.prototype={
a1(){return"ScriptType."+this.b}}
A.ck.prototype={
a1(){return"Hash."+this.b}}
A.dD.prototype={
ct(a,b){var s,r,q=this
if(q.a===0)throw A.a(A.t("Master keys cannot be used for addresses",null))
switch(b){case B.o:s=A.lc(q.d,a)
break
case B.A:s=A.ld(q.d,a)
break
case B.B:s=q.d
if(!A.fL(s))A.E(A.t("Invalid compressed public key: "+A.j(s),null))
r=A.h([0,20],t.t)
B.c.n(r,A.de(A.ak(s)))
r=A.kK(new Uint8Array(A.v(r)),a)
s=r
break
default:s=null}return s}}
A.cN.prototype={
bG(a,b){var s,r,q,p,o,n,m=this
if(b){if(a<2147483648||a>4294967295)throw A.a(A.t("Index ("+a+") must be in the range [0x80000000, 0xFFFFFFFF)",null))}else if(a<0||a>2147483647)throw A.a(A.t("Index ("+a+") must be in the range [0, 0x7FFFFFFF)",null))
s=b?A.bd("00"+A.c7(m.w)+B.d.a0(B.a.G(a,16),8,"0")):A.bd(A.c7(m.d)+B.d.a0(B.a.G(a,16),8,"0"))
r=A.eU(B.j,m.e,s)
q=new Uint8Array(A.v(B.b.Y(r,0,32)))
p=new Uint8Array(A.v(B.b.Y(r,32,64)))
o=A.ai(A.aF(q).q(0,A.aF(m.w)).B(0,$.ik()),32)
if(o.length>32)A.E(A.t("Value is too large for a private key",null))
n=A.hc(o)
return new A.cN(o,m.a+1,A.aF(B.b.Y(A.de(A.ak(m.d)),0,4)).a7(0),a,n,p,B.h,B.o)},
cw(a){var s,r,q,p,o,n,m,l,k=null,j=A.h(A.lh(a.toLowerCase(),"h","'").split("/"),t.s)
if(j[0]!=="m")throw A.a(A.at('Derivation path must start with "m/"',k))
for(s=B.c.af(j,1),r=s.length,q=this,p=0;p<s.length;s.length===r||(0,A.fN)(s),++p){o=s[p]
n=o.length
if(n===0)throw A.a(A.at("Invalid part in derivation path: "+o,k))
m=B.d.cD(o,"'")
if(m)o=B.d.T(o,0,n-1)
l=A.ha(o,k)
if(l==null)throw A.a(A.at("Invalid index in derivation path: "+o,k))
if(l<0||l>2147483647)throw A.a(A.at("Index ("+A.j(l)+") must be in the range [0, 0x7FFFFFFF)",k))
q=q.bG(m?l+2147483648:l,m)}return q}}
A.cA.prototype={
a1(){return"MacAlgorithm."+this.b}}
A.bI.prototype={
bH(){var s=this
return new A.bI(s.a,s.b,s.c,s.d,s.e)},
i(a){var s=this
return"h0="+B.a.G(s.a,16)+", h1="+B.a.G(s.b,16)+", h2="+B.a.G(s.c,16)+", h3="+B.a.G(s.d,16)+", h4="+B.a.G(s.e,16)}}
A.cU.prototype={
a1(){return"YParity."+this.b}}
A.bG.prototype={
aZ(){var s=this.a,r=A.bN(3).E(0,s.ba(2)).q(0,$.ii()),q=$.fS(),p=this.b,o=q.E(0,p),n=$.fP(),m=r.E(0,A.hR(o,n)),l=m.ba(2).H(0,q.E(0,s)).B(0,n)
return new A.bG(l,m.E(0,s.H(0,l)).H(0,p).B(0,n))},
L(a,b){var s,r,q,p,o,n,m,l,k=this
if(k===b)return k.aZ()
s=k.b
r=s.H(0,b.b)
q=k.a
p=b.a
o=q.H(0,p)
n=$.fP()
m=r.E(0,A.hR(o,n)).B(0,n)
l=m.ba(2).H(0,q).H(0,p).B(0,n)
return new A.bG(l,m.E(0,q.H(0,l)).H(0,s).B(0,n))},
cK(a){var s,r,q,p,o,n,m=this
for(s=new A.dE(B.d.a0(a.G(0,2),256,"0")),r=m,q=r,p=!1;s.l();){o=A.D(s.d)
if(p)q=q.aZ()
else r=r.aZ()
n=o==="1"
if(n&&p)q=q.L(0,m)
else r=r.L(0,m)
if(n)p=!0}return q}}
A.dG.prototype={}
A.dH.prototype={}
A.fn.prototype={}
A.ds.prototype={
gaY(){return this.a},
gb8(){var s=this.c
return new A.ao(s,A.w(s).h("ao<1>"))},
b0(){var s=this.a
if(s.gbL())return
s.gbe().L(0,A.a6([B.q,B.w],t.g,t.E))},
az(a){var s=this.a
if(s.gbL())return
s.gbe().L(0,A.a6([B.q,a],t.g,this.$ti.c))},
ae(a){var s=this.a
if(s.gbL())return
s.gbe().L(0,A.a6([B.q,a],t.g,t.x))},
$idr:1}
A.aR.prototype={
gaY(){return this.a},
gb8(){return A.E(A.az("onIsolateMessage is not implemented"))},
b0(){return A.E(A.az("initialized method is not implemented"))},
az(a){return A.E(A.az("sendResult is not implemented"))},
ae(a){return A.E(A.az("sendResultError is not implemented"))},
a4(){var s=0,r=A.eM(t.H),q=this
var $async$a4=A.eO(function(a,b){if(a===1)return A.eB(b,r)
while(true)switch(s){case 0:q.a.terminate()
s=2
return A.fz(q.e.a4(),$async$a4)
case 2:return A.eC(null,r)}})
return A.eD($async$a4,r)},
cc(a){var s,r,q,p,o,n,m,l=this
try{s=t.a5.a(A.fF(a.data))
if(s==null)return
if(J.as(s.j(0,"type"),"data")){r=s.j(0,"value")
if(t.F.b(A.h([],l.$ti.h("x<1>")))){n=r
if(n==null)n=t.K.a(n)
r=A.bp(n,t.f)}l.e.L(0,l.c.$1(r))
return}if(B.w.bM(s)){n=l.r
if((n.a.a&30)===0)n.cA()
return}if(B.O.bM(s)){l.a4()
return}if(J.as(s.j(0,"type"),"$IsolateException")){q=A.iO(s)
l.e.aW(q,q.c)
return}l.e.cs(new A.O("","Unhandled "+s.i(0)+" from the Isolate",B.f))}catch(m){p=A.Y(m)
o=A.a3(m)
l.e.aW(new A.O("",p,o),o)}},
$idr:1}
A.ct.prototype={
a1(){return"IsolatePort."+this.b}}
A.bq.prototype={
a1(){return"IsolateState."+this.b},
bM(a){return J.as(a.j(0,"type"),"$IsolateState")&&J.as(a.j(0,"value"),this.b)}}
A.f6.prototype={
$1(a){var s=J.aI(a)
return A.fJ([this.a.j(0,s.j(a,0)),s.j(a,1),s.j(a,2)])},
$S:22}
A.cr.prototype={}
A.cs.prototype={}
A.d5.prototype={
bZ(a,b,c,d){this.a.onmessage=A.hP(new A.ei(this,d))},
gb8(){var s=this.c,r=A.w(s).h("ao<1>")
return new A.bg(new A.ao(s,r),r.h("@<a2.T>").J(this.$ti.y[1]).h("bg<1,2>"))},
az(a){var s=t.N,r=t.X,q=this.a
if(a instanceof A.l)q.postMessage(A.f0(A.a6(["type","data","value",a.ga8()],s,r)))
else q.postMessage(A.f0(A.a6(["type","data","value",a],s,r)))},
ae(a){var s=t.N
this.a.postMessage(A.f0(A.a6(["type","$IsolateException","name",a.gap(),"value",A.a6(["e",J.bf(a.b),"s",a.c.i(0)],s,s)],s,t.z)))},
b0(){var s=t.N
this.a.postMessage(A.f0(A.a6(["type","$IsolateState","value","initialized"],s,s)))}}
A.ei.prototype={
$1(a){var s,r=A.fF(a.data),q=this.b
if(t.F.b(A.h([],q.h("x<0>")))){s=r==null?t.K.a(r):r
r=A.bp(s,t.f)}this.a.c.L(0,q.a(r))},
$S:23}
A.f_.prototype={
$1(a){return this.bU(a)},
bU(a){var s=0,r=A.eM(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h
var $async$$1=A.eO(function(b,c){if(b===1){p.push(c)
s=q}while(true)switch(s){case 0:q=3
k=o.a.$1(a)
j=o.d
s=6
return A.fz(j.h("a5<0>").b(k)?k:A.hx(k,j),$async$$1)
case 6:n=c
o.b.a.a.az(n)
q=1
s=5
break
case 3:q=2
h=p.pop()
m=A.Y(h)
l=A.a3(h)
k=o.b.a
if(m instanceof A.O)k.a.ae(m)
else k.a.ae(new A.O("",m,l))
s=5
break
case 2:s=1
break
case 5:return A.eC(null,r)
case 1:return A.eB(p.at(-1),r)}})
return A.eD($async$$1,r)},
$S(){return this.c.h("a5<~>(0)")}}
A.O.prototype={
i(a){return this.gap()+": "+A.j(this.b)+"\n"+this.c.i(0)},
gap(){return this.a}}
A.aA.prototype={
gap(){return"UnsupportedImTypeException"}}
A.l.prototype={
ga8(){return this.a},
M(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=A.w(r).h("l<l.T>").b(b)&&A.bc(r)===A.bc(b)&&J.as(r.a,b.a)
else s=!0
return s},
gA(a){return J.aM(this.a)},
i(a){return"ImType("+A.j(this.a)+")"}}
A.dl.prototype={
$1(a){return A.bp(a,t.f)},
$S:24}
A.dm.prototype={
$2(a,b){var s=t.f
return new A.Q(A.bp(a,s),A.bp(b,s),t.M)},
$S:25}
A.cm.prototype={
i(a){return"ImNum("+A.j(this.a)+")"}}
A.a0.prototype={
i(a){return"ImString("+A.j(this.a)+")"}}
A.cl.prototype={
i(a){return"ImBool("+A.j(this.a)+")"}}
A.bn.prototype={
M(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.bn&&A.bc(this)===A.bc(b)&&this.ce(b.b)
else s=!0
return s},
gA(a){return A.h7(this.b)},
ce(a){var s,r,q=this.b
if(q.gk(q)!==a.gk(a))return!1
s=q.gt(q)
r=a.gt(a)
while(!0){if(!(s.l()&&r.l()))break
if(!J.as(s.gp(),r.gp()))return!1}return!0},
i(a){return"ImList("+this.b.i(0)+")"}}
A.bo.prototype={
i(a){return"ImMap("+this.b.i(0)+")"}}
A.ag.prototype={
ga8(){return this.b.ac(0,new A.eg(this),A.w(this).h("ag.T"))}}
A.eg.prototype={
$1(a){return a.ga8()},
$S(){return A.w(this.a).h("ag.T(l<ag.T>)")}}
A.N.prototype={
ga8(){var s=A.w(this)
return this.b.b7(0,new A.eh(this),s.h("N.K"),s.h("N.V"))},
M(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.bo&&A.bc(this)===A.bc(b)&&this.cf(b.b)
else s=!0
return s},
gA(a){var s=this.b
return A.h7(new A.av(s,A.w(s).h("av<1,2>")))},
cf(a){var s,r,q=this.b
if(q.a!==a.a)return!1
for(q=new A.av(q,A.w(q).h("av<1,2>")).gt(0);q.l();){s=q.d
r=s.a
if(!a.a5(r)||!J.as(a.j(0,r),s.b))return!1}return!0}}
A.eh.prototype={
$2(a,b){return new A.Q(a.ga8(),b.ga8(),A.w(this.a).h("Q<N.K,N.V>"))},
$S(){return A.w(this.a).h("Q<N.K,N.V>(l<N.K>,l<N.V>)")}}
A.aN.prototype={}
A.ez.prototype={
$1(a){var s=t.N
return A.a6(["derivationPath",a.a,"address",a.b,"publicKey",a.c,"wif",a.d],s,s)},
$S:26};(function aliases(){var s=J.am.prototype
s.bX=s.i})();(function installTearOffs(){var s=hunkHelpers._instance_1u,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._static_2,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers.installStaticTearOff
s(A.bh.prototype,"gcg","ci",11)
r(A,"kE","jg",2)
r(A,"kF","jh",2)
r(A,"kG","ji",2)
q(A,"i3","ky",0)
r(A,"kH","km",1)
p(A,"kJ","ko",7)
q(A,"kI","kn",0)
o(A.u.prototype,"gc3","c4",7)
n(A.bS.prototype,"gcj","ck",0)
r(A,"kM","k_",4)
s(A.aR.prototype,"gcb","cc",21)
m(A,"l6",1,null,["$3","$1","$2"],["ff",function(a){return A.ff(a,B.f,"")},function(a,b){return A.ff(a,b,"")}],27,0)
m(A,"l7",1,null,["$2","$1"],["hk",function(a){return A.hk(a,B.f)}],28,0)
r(A,"kQ","kY",3)
r(A,"kP","kX",3)
r(A,"kO","kW",3)
m(A,"i6",1,null,["$1$3$customConverter$enableWasmConverter","$1","$1$1"],["fE",function(a){return A.fE(a,null,!0,t.z)},function(a,b){return A.fE(a,null,!0,b)}],29,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.d,null)
q(A.d,[A.fg,J.cq,J.aO,A.a2,A.bh,A.d_,A.o,A.dF,A.e,A.aV,A.cB,A.bm,A.bi,A.al,A.d8,A.dL,A.dB,A.bl,A.c_,A.T,A.dy,A.cz,A.cy,A.dt,A.en,A.e0,A.db,A.a1,A.d3,A.et,A.er,A.cV,A.V,A.bP,A.cY,A.cZ,A.b1,A.u,A.cW,A.d1,A.e2,A.d9,A.bS,A.da,A.ey,A.d4,A.q,A.ce,A.cg,A.el,A.ew,A.z,A.ch,A.e4,A.cL,A.bH,A.e5,A.dk,A.cp,A.Q,A.H,A.c0,A.dE,A.bJ,A.dA,A.dD,A.bI,A.bG,A.dG,A.dH,A.fn,A.ds,A.aR,A.cr,A.cs,A.d5,A.O,A.l,A.aN])
q(J.cq,[J.cu,J.bt,J.bv,J.aT,J.aU,J.bu,J.aS])
q(J.bv,[J.am,J.x,A.cC,A.bA])
q(J.am,[J.cM,J.bK,J.ab])
r(J.du,J.x)
q(J.bu,[J.bs,J.cv])
q(A.a2,[A.bg,A.b3])
q(A.o,[A.bx,A.ad,A.cw,A.cS,A.cO,A.d2,A.bw,A.c9,A.Z,A.bL,A.cR,A.ay,A.cf])
q(A.e,[A.i,A.ax,A.bV])
q(A.i,[A.J,A.aw,A.av,A.bU])
r(A.bk,A.ax)
q(A.J,[A.G,A.ac,A.d7])
q(A.al,[A.cd,A.co,A.cc,A.cQ,A.eV,A.eX,A.dT,A.dS,A.eE,A.ee,A.dJ,A.dY,A.f1,A.f4,A.f5,A.eR,A.eI,A.eJ,A.eH,A.f6,A.ei,A.f_,A.dl,A.eg,A.ez])
q(A.cd,[A.dh,A.eW,A.eF,A.eP,A.ef,A.dz,A.em,A.dX,A.dm,A.eh])
r(A.bj,A.bi)
r(A.aQ,A.co)
r(A.bD,A.ad)
q(A.cQ,[A.cP,A.aP])
q(A.T,[A.au,A.bT,A.d6])
q(A.bA,[A.cD,A.aX])
q(A.aX,[A.bW,A.bY])
r(A.bX,A.bW)
r(A.by,A.bX)
r(A.bZ,A.bY)
r(A.bz,A.bZ)
q(A.by,[A.cE,A.cF])
q(A.bz,[A.cG,A.cH,A.cI,A.cJ,A.cK,A.bB,A.bC])
r(A.c1,A.d2)
q(A.cc,[A.dU,A.dV,A.es,A.e6,A.ea,A.e9,A.e8,A.e7,A.ed,A.ec,A.eb,A.dK,A.e_,A.dZ,A.eo,A.eN,A.eq])
r(A.bQ,A.b3)
r(A.ao,A.bQ)
r(A.bR,A.bP)
r(A.b0,A.bR)
r(A.bM,A.cY)
r(A.af,A.cZ)
q(A.d1,[A.d0,A.e3])
r(A.ep,A.ey)
r(A.b2,A.bT)
r(A.cx,A.bw)
r(A.dv,A.ce)
q(A.cg,[A.dx,A.dw,A.dR])
r(A.ek,A.el)
q(A.Z,[A.bF,A.cn])
q(A.e4,[A.aY,A.b_,A.ck,A.cA,A.cU,A.ct,A.bq])
r(A.cN,A.dD)
r(A.aA,A.O)
q(A.l,[A.cm,A.a0,A.cl,A.ag,A.N])
r(A.bn,A.ag)
r(A.bo,A.N)
s(A.bW,A.q)
s(A.bX,A.bm)
s(A.bY,A.q)
s(A.bZ,A.bm)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",r:"double",aj:"num",m:"String",aE:"bool",H:"Null",p:"List",d:"Object",K:"Map"},mangledNames:{},types:["~()","~(@)","~(~())","a0(a0)","@(@)","H(@)","H()","~(d,L)","~(d?,d?)","d?(d?)","b(m)","~(d?)","@(@,m)","@(m)","H(~())","H(@,L)","~(b,@)","H(d,L)","b(b,b)","b(b)","m(b)","~(y)","a5<@>(p<@>)","H(y)","l<d>(@)","Q<l<d>,l<d>>(@,@)","K<m,m>(aN)","O(d[L,m])","aA(d[L])","0^(@{customConverter:0^(@)?,enableWasmConverter:aE})<d?>"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.jF(v.typeUniverse,JSON.parse('{"cM":"am","bK":"am","ab":"am","cu":{"aE":[],"n":[]},"bt":{"n":[]},"bv":{"y":[]},"am":{"y":[]},"x":{"p":["1"],"i":["1"],"y":[],"e":["1"]},"du":{"x":["1"],"p":["1"],"i":["1"],"y":[],"e":["1"]},"bu":{"r":[],"aj":[]},"bs":{"r":[],"b":[],"aj":[],"n":[]},"cv":{"r":[],"aj":[],"n":[]},"aS":{"m":[],"n":[]},"bg":{"a2":["2"],"a2.T":"2"},"bx":{"o":[]},"i":{"e":["1"]},"J":{"i":["1"],"e":["1"]},"ax":{"e":["2"],"e.E":"2"},"bk":{"ax":["1","2"],"i":["2"],"e":["2"],"e.E":"2"},"G":{"J":["2"],"i":["2"],"e":["2"],"e.E":"2","J.E":"2"},"ac":{"J":["1"],"i":["1"],"e":["1"],"e.E":"1","J.E":"1"},"bi":{"K":["1","2"]},"bj":{"bi":["1","2"],"K":["1","2"]},"bV":{"e":["1"],"e.E":"1"},"co":{"aa":[]},"aQ":{"aa":[]},"bD":{"ad":[],"o":[]},"cw":{"o":[]},"cS":{"o":[]},"c_":{"L":[]},"al":{"aa":[]},"cc":{"aa":[]},"cd":{"aa":[]},"cQ":{"aa":[]},"cP":{"aa":[]},"aP":{"aa":[]},"cO":{"o":[]},"au":{"T":["1","2"],"K":["1","2"],"T.V":"2"},"aw":{"i":["1"],"e":["1"],"e.E":"1"},"av":{"i":["Q<1,2>"],"e":["Q<1,2>"],"e.E":"Q<1,2>"},"cC":{"y":[],"cb":[],"n":[]},"bA":{"y":[]},"db":{"cb":[]},"cD":{"fe":[],"y":[],"n":[]},"aX":{"S":["1"],"y":[]},"by":{"q":["r"],"p":["r"],"S":["r"],"i":["r"],"y":[],"e":["r"]},"bz":{"q":["b"],"p":["b"],"S":["b"],"i":["b"],"y":[],"e":["b"]},"cE":{"di":[],"q":["r"],"p":["r"],"S":["r"],"i":["r"],"y":[],"e":["r"],"n":[],"q.E":"r"},"cF":{"dj":[],"q":["r"],"p":["r"],"S":["r"],"i":["r"],"y":[],"e":["r"],"n":[],"q.E":"r"},"cG":{"dn":[],"q":["b"],"p":["b"],"S":["b"],"i":["b"],"y":[],"e":["b"],"n":[],"q.E":"b"},"cH":{"dp":[],"q":["b"],"p":["b"],"S":["b"],"i":["b"],"y":[],"e":["b"],"n":[],"q.E":"b"},"cI":{"dq":[],"q":["b"],"p":["b"],"S":["b"],"i":["b"],"y":[],"e":["b"],"n":[],"q.E":"b"},"cJ":{"dN":[],"q":["b"],"p":["b"],"S":["b"],"i":["b"],"y":[],"e":["b"],"n":[],"q.E":"b"},"cK":{"dO":[],"q":["b"],"p":["b"],"S":["b"],"i":["b"],"y":[],"e":["b"],"n":[],"q.E":"b"},"bB":{"dP":[],"q":["b"],"p":["b"],"S":["b"],"i":["b"],"y":[],"e":["b"],"n":[],"q.E":"b"},"bC":{"dQ":[],"q":["b"],"p":["b"],"S":["b"],"i":["b"],"y":[],"e":["b"],"n":[],"q.E":"b"},"d2":{"o":[]},"c1":{"ad":[],"o":[]},"V":{"o":[]},"ao":{"b3":["1"],"a2":["1"],"a2.T":"1"},"b0":{"bP":["1"]},"bM":{"cY":["1"]},"af":{"cZ":["1"]},"u":{"a5":["1"]},"bQ":{"b3":["1"],"a2":["1"]},"bR":{"bP":["1"]},"b3":{"a2":["1"]},"bT":{"T":["1","2"],"K":["1","2"]},"b2":{"bT":["1","2"],"T":["1","2"],"K":["1","2"],"T.V":"2"},"bU":{"i":["1"],"e":["1"],"e.E":"1"},"T":{"K":["1","2"]},"d6":{"T":["m","@"],"K":["m","@"],"T.V":"@"},"d7":{"J":["m"],"i":["m"],"e":["m"],"e.E":"m","J.E":"m"},"bw":{"o":[]},"cx":{"o":[]},"r":{"aj":[]},"b":{"aj":[]},"p":{"i":["1"],"e":["1"]},"lt":{"i":["1"],"e":["1"]},"z":{"fd":[]},"c9":{"o":[]},"ad":{"o":[]},"Z":{"o":[]},"bF":{"o":[]},"cn":{"o":[]},"bL":{"o":[]},"cR":{"o":[]},"ay":{"o":[]},"cf":{"o":[]},"cL":{"o":[]},"bH":{"o":[]},"cp":{"o":[]},"c0":{"L":[]},"ds":{"dr":["1","2"]},"aR":{"dr":["1","2"]},"aA":{"O":[]},"a0":{"l":["m"],"l.T":"m"},"cm":{"l":["aj"],"l.T":"aj"},"cl":{"l":["aE"],"l.T":"aE"},"bn":{"ag":["d"],"l":["e<d>"],"ag.T":"d","l.T":"e<d>"},"bo":{"N":["d","d"],"l":["K<d,d>"],"N.K":"d","N.V":"d","l.T":"K<d,d>"},"ag":{"l":["e<1>"]},"N":{"l":["K<1,2>"]},"dq":{"p":["b"],"i":["b"],"e":["b"]},"dQ":{"p":["b"],"i":["b"],"e":["b"]},"dP":{"p":["b"],"i":["b"],"e":["b"]},"dn":{"p":["b"],"i":["b"],"e":["b"]},"dN":{"p":["b"],"i":["b"],"e":["b"]},"dp":{"p":["b"],"i":["b"],"e":["b"]},"dO":{"p":["b"],"i":["b"],"e":["b"]},"di":{"p":["r"],"i":["r"],"e":["r"]},"dj":{"p":["r"],"i":["r"],"e":["r"]}}'))
A.jE(v.typeUniverse,JSON.parse('{"bm":1,"aX":1,"bQ":1,"bR":1,"d1":1,"ce":2,"cg":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",h:"handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."}
var t=(function rtii(){var s=A.aG
return{e:s("fd"),J:s("cb"),Y:s("fe"),V:s("i<@>"),C:s("o"),B:s("di"),q:s("dj"),Z:s("aa"),f:s("l<d>"),O:s("dn"),w:s("dp"),U:s("dq"),r:s("dr<@,@>"),x:s("O"),g:s("ct"),E:s("bq"),R:s("e<@>"),W:s("x<aN>"),s:s("x<m>"),b:s("x<@>"),t:s("x<b>"),T:s("bt"),m:s("y"),L:s("ab"),p:s("S<@>"),F:s("p<l<d>>"),j:s("p<@>"),M:s("Q<l<d>,l<d>>"),G:s("K<@,@>"),P:s("H"),K:s("d"),cY:s("lo"),bd:s("ac<m>"),d:s("ac<b>"),l:s("L"),N:s("m"),bW:s("n"),b7:s("ad"),c0:s("dN"),bk:s("dO"),ca:s("dP"),bX:s("dQ"),o:s("bK"),c:s("af<@>"),h:s("af<~>"),_:s("u<@>"),a:s("u<b>"),D:s("u<~>"),A:s("b2<d?,d?>"),y:s("aE"),i:s("r"),z:s("@"),v:s("@(d)"),Q:s("@(d,L)"),S:s("b"),bc:s("a5<H>?"),a5:s("K<@,@>?"),X:s("d?"),aD:s("m?"),cG:s("aE?"),I:s("r?"),a3:s("b?"),ae:s("aj?"),n:s("aj"),H:s("~"),u:s("~(d)"),k:s("~(d,L)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.N=J.cq.prototype
B.c=J.x.prototype
B.a=J.bs.prototype
B.x=J.bu.prototype
B.d=J.aS.prototype
B.P=J.ab.prototype
B.Q=J.bv.prototype
B.b=A.bC.prototype
B.z=J.cM.prototype
B.t=J.bK.prototype
B.i=new A.cp()
B.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.F=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.K=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.J=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.I=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.H=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.v=function(hooks) { return hooks; }

B.k=new A.dv()
B.L=new A.cL()
B.ag=new A.dF()
B.l=new A.dR()
B.M=new A.e2()
B.e=new A.ep()
B.p=new A.ck("sha256")
B.j=new A.ck("sha512")
B.q=new A.ct("main")
B.O=new A.bq("dispose")
B.w=new A.bq("initialized")
B.R=new A.dw(null)
B.S=new A.dx(null)
B.T=A.h(s([1352829926,1548603684,1836072691,2053994217,0]),t.t)
B.U=A.h(s([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),t.t)
B.o=new A.b_("p2pkh")
B.A=new A.b_("p2shP2wpkh")
B.B=new A.b_("p2wpkh")
B.V=A.h(s([B.o,B.A,B.B]),A.aG("x<b_>"))
B.W=A.h(s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),t.t)
B.X=A.h(s([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),t.t)
B.Y=A.h(s([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),t.t)
B.Z=A.h(s([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),t.t)
B.a_=A.h(s([]),A.aG("x<0&>"))
B.a0=A.h(s([0,1518500249,1859775393,2400959708,2840853838]),t.t)
B.h=new A.aY("mainnet")
B.m=new A.aY("testnet")
B.n=new A.aY("regtest")
B.a1=A.h(s([B.h,B.m,B.n]),A.aG("x<aY>"))
B.y=new A.cA("hmacSha256")
B.r=new A.cA("hmacSha512")
B.a3={}
B.a2=new A.bj(B.a3,[],A.aG("bj<0&,0&>"))
B.a4=A.X("cb")
B.a5=A.X("fe")
B.a6=A.X("di")
B.a7=A.X("dj")
B.a8=A.X("dn")
B.a9=A.X("dp")
B.aa=A.X("dq")
B.C=A.X("y")
B.ab=A.X("d")
B.ac=A.X("dN")
B.ad=A.X("dO")
B.ae=A.X("dP")
B.af=A.X("dQ")
B.D=new A.cU("odd")
B.E=new A.cU("even")
B.f=new A.c0("")})();(function staticFields(){$.ej=null
$.aL=A.h([],A.aG("x<d>"))
$.h9=null
$.fY=null
$.fX=null
$.i8=null
$.i2=null
$.id=null
$.eS=null
$.eY=null
$.fI=null
$.b5=null
$.c5=null
$.c6=null
$.fC=!1
$.k=B.e
$.hm=null
$.hn=null
$.ho=null
$.hp=null
$.fo=A.e1("_lastQuoRemDigits")
$.fp=A.e1("_lastQuoRemUsed")
$.bO=A.e1("_lastRemUsed")
$.fq=A.e1("_lastRem_nsh")
$.iP=A.h([A.l6(),A.l7()],A.aG("x<O(d,L)>"))
$.lb=A.a6(["imSeed",A.kQ(),"imMasterKey",A.kP(),"imAddresses",A.kO()],t.N,t.Z)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ln","fO",()=>A.kU("_$dart_dartClosure"))
s($,"lN","f8",()=>A.h5(0))
s($,"lv","il",()=>A.ae(A.dM({
toString:function(){return"$receiver$"}})))
s($,"lw","im",()=>A.ae(A.dM({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"lx","io",()=>A.ae(A.dM(null)))
s($,"ly","ip",()=>A.ae(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"lB","is",()=>A.ae(A.dM(void 0)))
s($,"lC","it",()=>A.ae(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"lA","ir",()=>A.ae(A.hj(null)))
s($,"lz","iq",()=>A.ae(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"lE","iv",()=>A.ae(A.hj(void 0)))
s($,"lD","iu",()=>A.ae(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"lF","fQ",()=>A.jf())
s($,"lM","C",()=>A.an(0))
s($,"lK","M",()=>A.an(1))
s($,"lL","fS",()=>A.an(2))
s($,"lI","f7",()=>$.M().R(0))
s($,"lG","fR",()=>A.an(1e4))
r($,"lJ","ix",()=>A.ja("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"lH","iw",()=>A.h5(8))
s($,"lO","fT",()=>A.f3(B.ab))
s($,"lp","ii",()=>$.C())
s($,"ls","fP",()=>A.c("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F",null))
s($,"lr","ik",()=>A.c("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",null))
s($,"lq","ij",()=>A.jc(A.c("0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798",null),A.c("0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",null)))
s($,"lQ","f9",()=>A.c("FFFFFFFFFFFFFFFF",16))
s($,"lP","iy",()=>A.h([A.c("428a2f98d728ae22",16),A.c("7137449123ef65cd",16),A.c("b5c0fbcfec4d3b2f",16),A.c("e9b5dba58189dbbc",16),A.c("3956c25bf348b538",16),A.c("59f111f1b605d019",16),A.c("923f82a4af194f9b",16),A.c("ab1c5ed5da6d8118",16),A.c("d807aa98a3030242",16),A.c("12835b0145706fbe",16),A.c("243185be4ee4b28c",16),A.c("550c7dc3d5ffb4e2",16),A.c("72be5d74f27b896f",16),A.c("80deb1fe3b1696b1",16),A.c("9bdc06a725c71235",16),A.c("c19bf174cf692694",16),A.c("e49b69c19ef14ad2",16),A.c("efbe4786384f25e3",16),A.c("0fc19dc68b8cd5b5",16),A.c("240ca1cc77ac9c65",16),A.c("2de92c6f592b0275",16),A.c("4a7484aa6ea6e483",16),A.c("5cb0a9dcbd41fbd4",16),A.c("76f988da831153b5",16),A.c("983e5152ee66dfab",16),A.c("a831c66d2db43210",16),A.c("b00327c898fb213f",16),A.c("bf597fc7beef0ee4",16),A.c("c6e00bf33da88fc2",16),A.c("d5a79147930aa725",16),A.c("06ca6351e003826f",16),A.c("142929670a0e6e70",16),A.c("27b70a8546d22ffc",16),A.c("2e1b21385c26c926",16),A.c("4d2c6dfc5ac42aed",16),A.c("53380d139d95b3df",16),A.c("650a73548baf63de",16),A.c("766a0abb3c77b2a8",16),A.c("81c2c92e47edaee6",16),A.c("92722c851482353b",16),A.c("a2bfe8a14cf10364",16),A.c("a81a664bbc423001",16),A.c("c24b8b70d0f89791",16),A.c("c76c51a30654be30",16),A.c("d192e819d6ef5218",16),A.c("d69906245565a910",16),A.c("f40e35855771202a",16),A.c("106aa07032bbd1b8",16),A.c("19a4c116b8d2d0c8",16),A.c("1e376c085141ab53",16),A.c("2748774cdf8eeb99",16),A.c("34b0bcb5e19b48a8",16),A.c("391c0cb3c5c95a63",16),A.c("4ed8aa4ae3418acb",16),A.c("5b9cca4f7763e373",16),A.c("682e6ff3d6b2b8a3",16),A.c("748f82ee5defb2fc",16),A.c("78a5636f43172f60",16),A.c("84c87814a1f0ab72",16),A.c("8cc702081a6439ec",16),A.c("90befffa23631e28",16),A.c("a4506cebde82bde9",16),A.c("bef9a3f7b2c67915",16),A.c("c67178f2e372532b",16),A.c("ca273eceea26619c",16),A.c("d186b8c721c0c207",16),A.c("eada7dd6cde0eb1e",16),A.c("f57d4f7fee6ed178",16),A.c("06f067aa72176fba",16),A.c("0a637dc5a2c898a6",16),A.c("113f9804bef90dae",16),A.c("1b710b35131c471b",16),A.c("28db77f523047d84",16),A.c("32caab7b40c72493",16),A.c("3c9ebe0a15c9bebc",16),A.c("431d67c49c100d4c",16),A.c("4cc5d4becb3e42b6",16),A.c("597f299cfc657e2a",16),A.c("5fcb6fab3ad6faec",16),A.c("6c44198c4a475817",16)],A.aG("x<fd>")))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.cC,ArrayBufferView:A.bA,DataView:A.cD,Float32Array:A.cE,Float64Array:A.cF,Int16Array:A.cG,Int32Array:A.cH,Int8Array:A.cI,Uint16Array:A.cJ,Uint32Array:A.cK,Uint8ClampedArray:A.bB,CanvasPixelArray:A.bB,Uint8Array:A.bC})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.bW.$nativeSuperclassTag="ArrayBufferView"
A.bX.$nativeSuperclassTag="ArrayBufferView"
A.by.$nativeSuperclassTag="ArrayBufferView"
A.bY.$nativeSuperclassTag="ArrayBufferView"
A.bZ.$nativeSuperclassTag="ArrayBufferView"
A.bz.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$2$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.l9
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()