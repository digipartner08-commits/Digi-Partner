(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function mT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _x={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),gT=Symbol.for("react.portal"),vT=Symbol.for("react.fragment"),_T=Symbol.for("react.strict_mode"),xT=Symbol.for("react.profiler"),yT=Symbol.for("react.provider"),ST=Symbol.for("react.context"),ET=Symbol.for("react.forward_ref"),MT=Symbol.for("react.suspense"),TT=Symbol.for("react.memo"),wT=Symbol.for("react.lazy"),wg=Symbol.iterator;function AT(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var xx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yx=Object.assign,Sx={};function To(t,e,n){this.props=t,this.context=e,this.refs=Sx,this.updater=n||xx}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ex(){}Ex.prototype=To.prototype;function Rp(t,e,n){this.props=t,this.context=e,this.refs=Sx,this.updater=n||xx}var Pp=Rp.prototype=new Ex;Pp.constructor=Rp;yx(Pp,To.prototype);Pp.isPureReactComponent=!0;var Ag=Array.isArray,Mx=Object.prototype.hasOwnProperty,Dp={current:null},Tx={key:!0,ref:!0,__self:!0,__source:!0};function wx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mx.call(e,i)&&!Tx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ga,type:t,key:s,ref:o,props:r,_owner:Dp.current}}function CT(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function bT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cg=/\/+/g;function Wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bT(""+t.key):e.toString(36)}function ic(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ga:case gT:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Wu(o,0):i,Ag(r)?(n="",t!=null&&(n=t.replace(Cg,"$&/")+"/"),ic(r,e,n,"",function(c){return c})):r!=null&&(Lp(r)&&(r=CT(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ag(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Wu(s,a);o+=ic(s,e,n,l,r)}else if(l=AT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Wu(s,a++),o+=ic(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var i=[],r=0;return ic(t,i,"","",function(s){return e.call(n,s,r++)}),i}function RT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},rc={transition:null},PT={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:rc,ReactCurrentOwner:Dp};function Ax(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!Lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=To;Ge.Fragment=vT;Ge.Profiler=xT;Ge.PureComponent=Rp;Ge.StrictMode=_T;Ge.Suspense=MT;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PT;Ge.act=Ax;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Mx.call(e,l)&&!Tx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ga,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:ST,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yT,_context:t},t.Consumer=t};Ge.createElement=wx;Ge.createFactory=function(t){var e=wx.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:ET,render:t}};Ge.isValidElement=Lp;Ge.lazy=function(t){return{$$typeof:wT,_payload:{_status:-1,_result:t},_init:RT}};Ge.memo=function(t,e){return{$$typeof:TT,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=rc.transition;rc.transition={};try{t()}finally{rc.transition=e}};Ge.unstable_act=Ax;Ge.useCallback=function(t,e){return pn.current.useCallback(t,e)};Ge.useContext=function(t){return pn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return pn.current.useEffect(t,e)};Ge.useId=function(){return pn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return pn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Ge.useRef=function(t){return pn.current.useRef(t)};Ge.useState=function(t){return pn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return pn.current.useTransition()};Ge.version="18.3.1";_x.exports=Ge;var te=_x.exports;const R=mT(te);var gd={},Cx={exports:{}},In={},bx={exports:{}},Rx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,X){var q=F.length;F.push(X);e:for(;0<q;){var re=q-1>>>1,de=F[re];if(0<r(de,X))F[re]=X,F[q]=de,q=re;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var X=F[0],q=F.pop();if(q!==X){F[0]=q;e:for(var re=0,de=F.length,ze=de>>>1;re<ze;){var We=2*(re+1)-1,Le=F[We],Z=We+1,he=F[Z];if(0>r(Le,q))Z<de&&0>r(he,Le)?(F[re]=he,F[Z]=q,re=Z):(F[re]=Le,F[We]=q,re=We);else if(Z<de&&0>r(he,q))F[re]=he,F[Z]=q,re=Z;else break e}}return X}function r(F,X){var q=F.sortIndex-X.sortIndex;return q!==0?q:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=F)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function S(F){if(y=!1,_(F),!v)if(n(l)!==null)v=!0,G(w);else{var X=n(c);X!==null&&B(S,X.startTime-F)}}function w(F,X){v=!1,y&&(y=!1,h(x),x=-1),p=!0;var q=f;try{for(_(X),d=n(l);d!==null&&(!(d.expirationTime>X)||F&&!D());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var de=re(d.expirationTime<=X);X=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(l)&&i(l),_(X)}else i(l);d=n(l)}if(d!==null)var ze=!0;else{var We=n(c);We!==null&&B(S,We.startTime-X),ze=!1}return ze}finally{d=null,f=q,p=!1}}var T=!1,b=null,x=-1,C=5,P=-1;function D(){return!(t.unstable_now()-P<C)}function O(){if(b!==null){var F=t.unstable_now();P=F;var X=!0;try{X=b(!0,F)}finally{X?j():(T=!1,b=null)}}else T=!1}var j;if(typeof g=="function")j=function(){g(O)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,N=$.port2;$.port1.onmessage=O,j=function(){N.postMessage(null)}}else j=function(){m(O,0)};function G(F){b=F,T||(T=!0,j())}function B(F,X){x=m(function(){F(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(w))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var q=f;f=X;try{return F()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=f;f=F;try{return X()}finally{f=q}},t.unstable_scheduleCallback=function(F,X,q){var re=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?re+q:re):q=re,F){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=q+de,F={id:u++,callback:X,priorityLevel:F,startTime:q,expirationTime:de,sortIndex:-1},q>re?(F.sortIndex=q,e(c,F),n(l)===null&&F===n(c)&&(y?(h(x),x=-1):y=!0,B(S,q-re))):(F.sortIndex=de,e(l,F),v||p||(v=!0,G(w))),F},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(F){var X=f;return function(){var q=f;f=X;try{return F.apply(this,arguments)}finally{f=q}}}})(Rx);bx.exports=Rx;var DT=bx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT=te,Ln=DT;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Px=new Set,xa={};function xs(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(xa[t]=e,t=0;t<e.length;t++)Px.add(e[t])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,NT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bg={},Rg={};function IT(t){return vd.call(Rg,t)?!0:vd.call(bg,t)?!1:NT.test(t)?Rg[t]=!0:(bg[t]=!0,!1)}function UT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FT(t,e,n,i){if(e===null||typeof e>"u"||UT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function Ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Np,Ip);Zt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Np,Ip);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Np,Ip);Zt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Up(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FT(e,n,r,i)&&(n=null),i||r===null?IT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var rr=LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Fp=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),Dx=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),yd=Symbol.for("react.suspense_list"),kp=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Nx=Symbol.for("react.offscreen"),Pg=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Xu;function Ko(t){if(Xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||""}return`
`+Xu+t}var ju=!1;function Yu(t,e){if(!t||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function OT(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=Yu(t.type,!1),t;case 11:return t=Yu(t.type.render,!1),t;case 1:return t=Yu(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case zs:return"Portal";case _d:return"Profiler";case Fp:return"StrictMode";case xd:return"Suspense";case yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lx:return(t.displayName||"Context")+".Consumer";case Dx:return(t._context.displayName||"Context")+".Provider";case Op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kp:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function kT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===Fp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ix(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BT(t){var e=Ix(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=BT(t))}function Ux(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ix(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ed(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fx(t,e){e=e.checked,e!=null&&Up(t,"checked",e,!1)}function Md(t,e){Fx(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||bc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zo=Array.isArray;function no(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Zo(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function Ox(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,Bx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VT=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){VT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function Vx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function zx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var zT=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(zT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=null;function Bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,io=null,ro=null;function Ug(t){if(t=ja(t)){if(typeof Pd!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Su(e),Pd(t.stateNode,t.type,e))}}function Hx(t){io?ro?ro.push(t):ro=[t]:io=t}function Gx(){if(io){var t=io,e=ro;if(ro=io=null,Ug(t),e)for(t=0;t<e.length;t++)Ug(e[t])}}function Wx(t,e){return t(e)}function Xx(){}var $u=!1;function jx(t,e,n){if($u)return t(e,n);$u=!0;try{return Wx(t,e,n)}finally{$u=!1,(io!==null||ro!==null)&&(Xx(),Gx())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Dd=!1;if(Ki)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{Dd=!1}function HT(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var sa=!1,Rc=null,Pc=!1,Ld=null,GT={onError:function(t){sa=!0,Rc=t}};function WT(t,e,n,i,r,s,o,a,l){sa=!1,Rc=null,HT.apply(GT,arguments)}function XT(t,e,n,i,r,s,o,a,l){if(WT.apply(this,arguments),sa){if(sa){var c=Rc;sa=!1,Rc=null}else throw Error(ie(198));Pc||(Pc=!0,Ld=c)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fg(t){if(ys(t)!==t)throw Error(ie(188))}function jT(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fg(r),t;if(s===i)return Fg(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function $x(t){return t=jT(t),t!==null?qx(t):null}function qx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qx(t);if(e!==null)return e;t=t.sibling}return null}var Kx=Ln.unstable_scheduleCallback,Og=Ln.unstable_cancelCallback,YT=Ln.unstable_shouldYield,$T=Ln.unstable_requestPaint,Pt=Ln.unstable_now,qT=Ln.unstable_getCurrentPriorityLevel,Vp=Ln.unstable_ImmediatePriority,Zx=Ln.unstable_UserBlockingPriority,Dc=Ln.unstable_NormalPriority,KT=Ln.unstable_LowPriority,Qx=Ln.unstable_IdlePriority,vu=null,Ci=null;function ZT(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:ew,QT=Math.log,JT=Math.LN2;function ew(t){return t>>>=0,t===0?32:31-(QT(t)/JT|0)|0}var ul=64,fl=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Qo(a):(s&=o,s!==0&&(i=Qo(s)))}else o=n&~r,o!==0?i=Qo(o):s!==0&&(i=Qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function tw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=tw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jx(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function iw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function ey(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ty,Hp,ny,iy,ry,Id=!1,dl=[],Ar=null,Cr=null,br=null,Ea=new Map,Ma=new Map,xr=[],rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&Hp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sw(t,e,n,i,r){switch(e){case"focusin":return Ar=Uo(Ar,t,e,n,i,r),!0;case"dragenter":return Cr=Uo(Cr,t,e,n,i,r),!0;case"mouseover":return br=Uo(br,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Uo(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ma.set(s,Uo(Ma.get(s)||null,t,e,n,i,r)),!0}return!1}function sy(t){var e=es(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=Yx(n),e!==null){t.blockedOn=e,ry(t.priority,function(){ny(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Rd=i,n.target.dispatchEvent(i),Rd=null}else return e=ja(n),e!==null&&Hp(e),t.blockedOn=n,!1;e.shift()}return!0}function Bg(t,e,n){sc(t)&&n.delete(e)}function ow(){Id=!1,Ar!==null&&sc(Ar)&&(Ar=null),Cr!==null&&sc(Cr)&&(Cr=null),br!==null&&sc(br)&&(br=null),Ea.forEach(Bg),Ma.forEach(Bg)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,Id||(Id=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,ow)))}function Ta(t){function e(r){return Fo(r,t)}if(0<dl.length){Fo(dl[0],t);for(var n=1;n<dl.length;n++){var i=dl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ar!==null&&Fo(Ar,t),Cr!==null&&Fo(Cr,t),br!==null&&Fo(br,t),Ea.forEach(e),Ma.forEach(e),n=0;n<xr.length;n++)i=xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)sy(n),n.blockedOn===null&&xr.shift()}var so=rr.ReactCurrentBatchConfig,Nc=!0;function aw(t,e,n,i){var r=it,s=so.transition;so.transition=null;try{it=1,Gp(t,e,n,i)}finally{it=r,so.transition=s}}function lw(t,e,n,i){var r=it,s=so.transition;so.transition=null;try{it=4,Gp(t,e,n,i)}finally{it=r,so.transition=s}}function Gp(t,e,n,i){if(Nc){var r=Ud(t,e,n,i);if(r===null)of(t,e,i,Ic,n),kg(t,i);else if(sw(r,t,e,n,i))i.stopPropagation();else if(kg(t,i),e&4&&-1<rw.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&ty(s),s=Ud(t,e,n,i),s===null&&of(t,e,i,Ic,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else of(t,e,i,null,n)}}var Ic=null;function Ud(t,e,n,i){if(Ic=null,t=Bp(i),t=es(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function oy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qT()){case Vp:return 1;case Zx:return 4;case Dc:case KT:return 16;case Qx:return 536870912;default:return 16}default:return 16}}var Er=null,Wp=null,oc=null;function ay(){if(oc)return oc;var t,e=Wp,n=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return oc=r.slice(t,1<i?1-i:void 0)}function ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function Vg(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hl:Vg,this.isPropagationStopped=Vg,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=Un(wo),Xa=Et({},wo,{view:0,detail:0}),cw=Un(Xa),Ku,Zu,Oo,_u=Et({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(Ku=t.screenX-Oo.screenX,Zu=t.screenY-Oo.screenY):Zu=Ku=0,Oo=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),zg=Un(_u),uw=Et({},_u,{dataTransfer:0}),fw=Un(uw),dw=Et({},Xa,{relatedTarget:0}),Qu=Un(dw),hw=Et({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),pw=Un(hw),mw=Et({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gw=Un(mw),vw=Et({},wo,{data:0}),Hg=Un(vw),_w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yw[t])?!!e[t]:!1}function jp(){return Sw}var Ew=Et({},Xa,{key:function(t){if(t.key){var e=_w[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(t){return t.type==="keypress"?ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mw=Un(Ew),Tw=Et({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=Un(Tw),ww=Et({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),Aw=Un(ww),Cw=Et({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),bw=Un(Cw),Rw=Et({},_u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pw=Un(Rw),Dw=[9,13,27,32],Yp=Ki&&"CompositionEvent"in window,oa=null;Ki&&"documentMode"in document&&(oa=document.documentMode);var Lw=Ki&&"TextEvent"in window&&!oa,ly=Ki&&(!Yp||oa&&8<oa&&11>=oa),Wg=" ",Xg=!1;function cy(t,e){switch(t){case"keyup":return Dw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function Nw(t,e){switch(t){case"compositionend":return uy(e);case"keypress":return e.which!==32?null:(Xg=!0,Wg);case"textInput":return t=e.data,t===Wg&&Xg?null:t;default:return null}}function Iw(t,e){if(Gs)return t==="compositionend"||!Yp&&cy(t,e)?(t=ay(),oc=Wp=Er=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ly&&e.locale!=="ko"?null:e.data;default:return null}}var Uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uw[t.type]:e==="textarea"}function fy(t,e,n,i){Hx(i),e=Uc(e,"onChange"),0<e.length&&(n=new Xp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,wa=null;function Fw(t){Ey(t,0)}function xu(t){var e=js(t);if(Ux(e))return t}function Ow(t,e){if(t==="change")return e}var dy=!1;if(Ki){var Ju;if(Ki){var ef="oninput"in document;if(!ef){var Yg=document.createElement("div");Yg.setAttribute("oninput","return;"),ef=typeof Yg.oninput=="function"}Ju=ef}else Ju=!1;dy=Ju&&(!document.documentMode||9<document.documentMode)}function $g(){aa&&(aa.detachEvent("onpropertychange",hy),wa=aa=null)}function hy(t){if(t.propertyName==="value"&&xu(wa)){var e=[];fy(e,wa,t,Bp(t)),jx(Fw,e)}}function kw(t,e,n){t==="focusin"?($g(),aa=e,wa=n,aa.attachEvent("onpropertychange",hy)):t==="focusout"&&$g()}function Bw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(wa)}function Vw(t,e){if(t==="click")return xu(e)}function zw(t,e){if(t==="input"||t==="change")return xu(e)}function Hw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:Hw;function Aa(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vd.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kg(t,e){var n=qg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qg(n)}}function py(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?py(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function my(){for(var t=window,e=bc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bc(t.document)}return e}function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gw(t){var e=my(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&py(n.ownerDocument.documentElement,n)){if(i!==null&&$p(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kg(n,s);var o=Kg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ww=Ki&&"documentMode"in document&&11>=document.documentMode,Ws=null,Fd=null,la=null,Od=!1;function Zg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Od||Ws==null||Ws!==bc(i)||(i=Ws,"selectionStart"in i&&$p(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&Aa(la,i)||(la=i,i=Uc(Fd,"onSelect"),0<i.length&&(e=new Xp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ws)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},tf={},gy={};Ki&&(gy=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function yu(t){if(tf[t])return tf[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gy)return tf[t]=e[n];return t}var vy=yu("animationend"),_y=yu("animationiteration"),xy=yu("animationstart"),yy=yu("transitionend"),Sy=new Map,Qg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){Sy.set(t,e),xs(e,[t])}for(var nf=0;nf<Qg.length;nf++){var rf=Qg[nf],Xw=rf.toLowerCase(),jw=rf[0].toUpperCase()+rf.slice(1);kr(Xw,"on"+jw)}kr(vy,"onAnimationEnd");kr(_y,"onAnimationIteration");kr(xy,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(yy,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Jg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,XT(i,e,void 0,t),t.currentTarget=null}function Ey(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jg(r,a,c),s=l}}}if(Pc)throw t=Ld,Pc=!1,Ld=null,t}function pt(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var i=t+"__bubble";n.has(i)||(My(e,t,2,!1),n.add(i))}function sf(t,e,n){var i=0;e&&(i|=4),My(n,t,i,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[ml]){t[ml]=!0,Px.forEach(function(n){n!=="selectionchange"&&(Yw.has(n)||sf(n,!1,t),sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,sf("selectionchange",!1,e))}}function My(t,e,n,i){switch(oy(e)){case 1:var r=aw;break;case 4:r=lw;break;default:r=Gp}n=r.bind(null,e,n,t),r=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function of(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jx(function(){var c=s,u=Bp(n),d=[];e:{var f=Sy.get(t);if(f!==void 0){var p=Xp,v=t;switch(t){case"keypress":if(ac(n)===0)break e;case"keydown":case"keyup":p=Mw;break;case"focusin":v="focus",p=Qu;break;case"focusout":v="blur",p=Qu;break;case"beforeblur":case"afterblur":p=Qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Aw;break;case vy:case _y:case xy:p=pw;break;case yy:p=bw;break;case"scroll":p=cw;break;case"wheel":p=Pw;break;case"copy":case"cut":case"paste":p=gw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gg}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=Sa(g,h),S!=null&&y.push(ba(g,S,_)))),m)break;g=g.return}0<y.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Rd&&(v=n.relatedTarget||n.fromElement)&&(es(v)||v[Zi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?es(v):null,v!==null&&(m=ys(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=zg,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Gg,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:js(p),_=v==null?f:js(v),f=new y(S,g+"leave",p,n,u),f.target=m,f.relatedTarget=_,S=null,es(u)===c&&(y=new y(h,g+"enter",v,n,u),y.target=_,y.relatedTarget=m,S=y),m=S,p&&v)t:{for(y=p,h=v,g=0,_=y;_;_=Ts(_))g++;for(_=0,S=h;S;S=Ts(S))_++;for(;0<g-_;)y=Ts(y),g--;for(;0<_-g;)h=Ts(h),_--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=Ts(y),h=Ts(h)}y=null}else y=null;p!==null&&e0(d,f,p,y,!1),v!==null&&m!==null&&e0(d,m,v,y,!0)}}e:{if(f=c?js(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=Ow;else if(jg(f))if(dy)w=zw;else{w=Bw;var T=kw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Vw);if(w&&(w=w(t,c))){fy(d,w,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Td(f,"number",f.value)}switch(T=c?js(c):window,t){case"focusin":(jg(T)||T.contentEditable==="true")&&(Ws=T,Fd=c,la=null);break;case"focusout":la=Fd=Ws=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,Zg(d,n,u);break;case"selectionchange":if(Ww)break;case"keydown":case"keyup":Zg(d,n,u)}var b;if(Yp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Gs?cy(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ly&&n.locale!=="ko"&&(Gs||x!=="onCompositionStart"?x==="onCompositionEnd"&&Gs&&(b=ay()):(Er=u,Wp="value"in Er?Er.value:Er.textContent,Gs=!0)),T=Uc(c,x),0<T.length&&(x=new Hg(x,t,null,n,u),d.push({event:x,listeners:T}),b?x.data=b:(b=uy(n),b!==null&&(x.data=b)))),(b=Lw?Nw(t,n):Iw(t,n))&&(c=Uc(c,"onBeforeInput"),0<c.length&&(u=new Hg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}Ey(d,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(ba(t,s,r)),s=Sa(t,e),s!=null&&i.push(ba(t,s,r))),t=t.return}return i}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function e0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Sa(n,s),l!=null&&o.unshift(ba(n,l,a))):r||(l=Sa(n,s),l!=null&&o.push(ba(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $w=/\r\n?/g,qw=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace($w,`
`).replace(qw,"")}function gl(t,e,n){if(e=t0(e),t0(t)!==e&&n)throw Error(ie(425))}function Fc(){}var kd=null,Bd=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,Kw=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,Zw=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(Qw)}:zd;function Qw(t){setTimeout(function(){throw t})}function af(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function i0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Ao,Ra="__reactProps$"+Ao,Zi="__reactContainer$"+Ao,Hd="__reactEvents$"+Ao,Jw="__reactListeners$"+Ao,e1="__reactHandles$"+Ao;function es(t){var e=t[Ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zi]||n[Ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=i0(t);t!==null;){if(n=t[Ti])return n;t=i0(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[Ti]||t[Zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Su(t){return t[Ra]||null}var Gd=[],Ys=-1;function Br(t){return{current:t}}function gt(t){0>Ys||(t.current=Gd[Ys],Gd[Ys]=null,Ys--)}function dt(t,e){Ys++,Gd[Ys]=t.current,t.current=e}var Ur={},on=Br(Ur),xn=Br(!1),fs=Ur;function fo(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Oc(){gt(xn),gt(on)}function r0(t,e,n){if(on.current!==Ur)throw Error(ie(168));dt(on,e),dt(xn,n)}function Ty(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,kT(t)||"Unknown",r));return Et({},n,i)}function kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,fs=on.current,dt(on,t),dt(xn,xn.current),!0}function s0(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Ty(t,e,fs),i.__reactInternalMemoizedMergedChildContext=t,gt(xn),gt(on),dt(on,t)):gt(xn),dt(xn,n)}var zi=null,Eu=!1,lf=!1;function wy(t){zi===null?zi=[t]:zi.push(t)}function t1(t){Eu=!0,wy(t)}function Vr(){if(!lf&&zi!==null){lf=!0;var t=0,e=it;try{var n=zi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,Eu=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),Kx(Vp,Vr),r}finally{it=e,lf=!1}}return null}var $s=[],qs=0,Bc=null,Vc=0,Bn=[],Vn=0,ds=null,Gi=1,Wi="";function $r(t,e){$s[qs++]=Vc,$s[qs++]=Bc,Bc=t,Vc=e}function Ay(t,e,n){Bn[Vn++]=Gi,Bn[Vn++]=Wi,Bn[Vn++]=ds,ds=t;var i=Gi;t=Wi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-ci(e)+r|n<<r|i,Wi=s+t}else Gi=1<<s|n<<r|i,Wi=t}function qp(t){t.return!==null&&($r(t,1),Ay(t,1,0))}function Kp(t){for(;t===Bc;)Bc=$s[--qs],$s[qs]=null,Vc=$s[--qs],$s[qs]=null;for(;t===ds;)ds=Bn[--Vn],Bn[Vn]=null,Wi=Bn[--Vn],Bn[Vn]=null,Gi=Bn[--Vn],Bn[Vn]=null}var Pn=null,Rn=null,vt=!1,ri=null;function Cy(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function o0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xd(t){if(vt){var e=Rn;if(e){var n=e;if(!o0(t,e)){if(Wd(t))throw Error(ie(418));e=Rr(n.nextSibling);var i=Pn;e&&o0(t,e)?Cy(i,n):(t.flags=t.flags&-4097|2,vt=!1,Pn=t)}}else{if(Wd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,vt=!1,Pn=t}}}function a0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function vl(t){if(t!==Pn)return!1;if(!vt)return a0(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=Rn)){if(Wd(t))throw by(),Error(ie(418));for(;e;)Cy(t,e),e=Rr(e.nextSibling)}if(a0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?Rr(t.stateNode.nextSibling):null;return!0}function by(){for(var t=Rn;t;)t=Rr(t.nextSibling)}function ho(){Rn=Pn=null,vt=!1}function Zp(t){ri===null?ri=[t]:ri.push(t)}var n1=rr.ReactCurrentBatchConfig;function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l0(t){var e=t._init;return e(t._payload)}function Ry(t){function e(h,g){if(t){var _=h.deletions;_===null?(h.deletions=[g],h.flags|=16):_.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Nr(h,g),h.index=0,h.sibling=null,h}function s(h,g,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<g?(h.flags|=2,g):_):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,_,S){return g===null||g.tag!==6?(g=mf(_,h.mode,S),g.return=h,g):(g=r(g,_),g.return=h,g)}function l(h,g,_,S){var w=_.type;return w===Hs?u(h,g,_.props.children,S,_.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vr&&l0(w)===g.type)?(S=r(g,_.props),S.ref=ko(h,g,_),S.return=h,S):(S=pc(_.type,_.key,_.props,null,h.mode,S),S.ref=ko(h,g,_),S.return=h,S)}function c(h,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=gf(_,h.mode,S),g.return=h,g):(g=r(g,_.children||[]),g.return=h,g)}function u(h,g,_,S,w){return g===null||g.tag!==7?(g=ls(_,h.mode,S,w),g.return=h,g):(g=r(g,_),g.return=h,g)}function d(h,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=mf(""+g,h.mode,_),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case al:return _=pc(g.type,g.key,g.props,null,h.mode,_),_.ref=ko(h,null,g),_.return=h,_;case zs:return g=gf(g,h.mode,_),g.return=h,g;case vr:var S=g._init;return d(h,S(g._payload),_)}if(Zo(g)||No(g))return g=ls(g,h.mode,_,null),g.return=h,g;_l(h,g)}return null}function f(h,g,_,S){var w=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(h,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case al:return _.key===w?l(h,g,_,S):null;case zs:return _.key===w?c(h,g,_,S):null;case vr:return w=_._init,f(h,g,w(_._payload),S)}if(Zo(_)||No(_))return w!==null?null:u(h,g,_,S,null);_l(h,_)}return null}function p(h,g,_,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,a(g,h,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case al:return h=h.get(S.key===null?_:S.key)||null,l(g,h,S,w);case zs:return h=h.get(S.key===null?_:S.key)||null,c(g,h,S,w);case vr:var T=S._init;return p(h,g,_,T(S._payload),w)}if(Zo(S)||No(S))return h=h.get(_)||null,u(g,h,S,w,null);_l(g,S)}return null}function v(h,g,_,S){for(var w=null,T=null,b=g,x=g=0,C=null;b!==null&&x<_.length;x++){b.index>x?(C=b,b=null):C=b.sibling;var P=f(h,b,_[x],S);if(P===null){b===null&&(b=C);break}t&&b&&P.alternate===null&&e(h,b),g=s(P,g,x),T===null?w=P:T.sibling=P,T=P,b=C}if(x===_.length)return n(h,b),vt&&$r(h,x),w;if(b===null){for(;x<_.length;x++)b=d(h,_[x],S),b!==null&&(g=s(b,g,x),T===null?w=b:T.sibling=b,T=b);return vt&&$r(h,x),w}for(b=i(h,b);x<_.length;x++)C=p(b,h,x,_[x],S),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?x:C.key),g=s(C,g,x),T===null?w=C:T.sibling=C,T=C);return t&&b.forEach(function(D){return e(h,D)}),vt&&$r(h,x),w}function y(h,g,_,S){var w=No(_);if(typeof w!="function")throw Error(ie(150));if(_=w.call(_),_==null)throw Error(ie(151));for(var T=w=null,b=g,x=g=0,C=null,P=_.next();b!==null&&!P.done;x++,P=_.next()){b.index>x?(C=b,b=null):C=b.sibling;var D=f(h,b,P.value,S);if(D===null){b===null&&(b=C);break}t&&b&&D.alternate===null&&e(h,b),g=s(D,g,x),T===null?w=D:T.sibling=D,T=D,b=C}if(P.done)return n(h,b),vt&&$r(h,x),w;if(b===null){for(;!P.done;x++,P=_.next())P=d(h,P.value,S),P!==null&&(g=s(P,g,x),T===null?w=P:T.sibling=P,T=P);return vt&&$r(h,x),w}for(b=i(h,b);!P.done;x++,P=_.next())P=p(b,h,x,P.value,S),P!==null&&(t&&P.alternate!==null&&b.delete(P.key===null?x:P.key),g=s(P,g,x),T===null?w=P:T.sibling=P,T=P);return t&&b.forEach(function(O){return e(h,O)}),vt&&$r(h,x),w}function m(h,g,_,S){if(typeof _=="object"&&_!==null&&_.type===Hs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case al:e:{for(var w=_.key,T=g;T!==null;){if(T.key===w){if(w=_.type,w===Hs){if(T.tag===7){n(h,T.sibling),g=r(T,_.props.children),g.return=h,h=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vr&&l0(w)===T.type){n(h,T.sibling),g=r(T,_.props),g.ref=ko(h,T,_),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}_.type===Hs?(g=ls(_.props.children,h.mode,S,_.key),g.return=h,h=g):(S=pc(_.type,_.key,_.props,null,h.mode,S),S.ref=ko(h,g,_),S.return=h,h=S)}return o(h);case zs:e:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(h,g.sibling),g=r(g,_.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=gf(_,h.mode,S),g.return=h,h=g}return o(h);case vr:return T=_._init,m(h,g,T(_._payload),S)}if(Zo(_))return v(h,g,_,S);if(No(_))return y(h,g,_,S);_l(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,_),g.return=h,h=g):(n(h,g),g=mf(_,h.mode,S),g.return=h,h=g),o(h)):n(h,g)}return m}var po=Ry(!0),Py=Ry(!1),zc=Br(null),Hc=null,Ks=null,Qp=null;function Jp(){Qp=Ks=Hc=null}function em(t){var e=zc.current;gt(zc),t._currentValue=e}function jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Hc=t,Qp=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Qp!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Hc===null)throw Error(ie(308));Ks=t,Hc.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var ts=null;function tm(t){ts===null?ts=[t]:ts.push(t)}function Dy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Qi(t,i)}function Qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function nm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ly(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(t,n)}return r=i.interleaved,r===null?(e.next=e,tm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(t,n)}function lc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zp(t,n)}}function c0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gc(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=Et({},d,f);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=d}}function u0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ya={},bi=Br(Ya),Pa=Br(Ya),Da=Br(Ya);function ns(t){if(t===Ya)throw Error(ie(174));return t}function im(t,e){switch(dt(Da,e),dt(Pa,t),dt(bi,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}gt(bi),dt(bi,e)}function mo(){gt(bi),gt(Pa),gt(Da)}function Ny(t){ns(Da.current);var e=ns(bi.current),n=Ad(e,t.type);e!==n&&(dt(Pa,t),dt(bi,n))}function rm(t){Pa.current===t&&(gt(bi),gt(Pa))}var yt=Br(0);function Wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cf=[];function sm(){for(var t=0;t<cf.length;t++)cf[t]._workInProgressVersionPrimary=null;cf.length=0}var cc=rr.ReactCurrentDispatcher,uf=rr.ReactCurrentBatchConfig,hs=0,St=null,Bt=null,jt=null,Xc=!1,ca=!1,La=0,i1=0;function Jt(){throw Error(ie(321))}function om(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function am(t,e,n,i,r,s){if(hs=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cc.current=t===null||t.memoizedState===null?a1:l1,t=n(i,r),ca){s=0;do{if(ca=!1,La=0,25<=s)throw Error(ie(301));s+=1,jt=Bt=null,e.updateQueue=null,cc.current=c1,t=n(i,r)}while(ca)}if(cc.current=jc,e=Bt!==null&&Bt.next!==null,hs=0,jt=Bt=St=null,Xc=!1,e)throw Error(ie(300));return t}function lm(){var t=La!==0;return La=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?St.memoizedState=jt=t:jt=jt.next=t,jt}function $n(){if(Bt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=jt===null?St.memoizedState:jt.next;if(e!==null)jt=e,Bt=t;else{if(t===null)throw Error(ie(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},jt===null?St.memoizedState=jt=t:jt=jt.next=t}return jt}function Na(t,e){return typeof e=="function"?e(t):e}function ff(t){var e=$n(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((hs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,St.lanes|=u,ps|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,ps|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function df(t){var e=$n(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Iy(){}function Uy(t,e){var n=St,i=$n(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,cm(ky.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Ia(9,Oy.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(ie(349));hs&30||Fy(n,e,r)}return r}function Fy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Oy(t,e,n,i){e.value=n,e.getSnapshot=i,By(e)&&Vy(t)}function ky(t,e,n){return n(function(){By(e)&&Vy(t)})}function By(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function Vy(t){var e=Qi(t,1);e!==null&&ui(e,t,1,-1)}function f0(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=o1.bind(null,St,t),[e.memoizedState,t]}function Ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function zy(){return $n().memoizedState}function uc(t,e,n,i){var r=yi();St.flags|=t,r.memoizedState=Ia(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&om(i,o.deps)){r.memoizedState=Ia(e,n,s,i);return}}St.flags|=t,r.memoizedState=Ia(1|e,n,s,i)}function d0(t,e){return uc(8390656,8,t,e)}function cm(t,e){return Mu(2048,8,t,e)}function Hy(t,e){return Mu(4,2,t,e)}function Gy(t,e){return Mu(4,4,t,e)}function Wy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xy(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,Wy.bind(null,e,t),n)}function um(){}function jy(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&om(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yy(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&om(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $y(t,e,n){return hs&21?(hi(n,e)||(n=Jx(),St.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function r1(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=uf.transition;uf.transition={};try{t(!1),e()}finally{it=n,uf.transition=i}}function qy(){return $n().memoizedState}function s1(t,e,n){var i=Lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ky(t))Zy(e,n);else if(n=Dy(t,e,n,i),n!==null){var r=fn();ui(n,t,i,r),Qy(n,e,i)}}function o1(t,e,n){var i=Lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ky(t))Zy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,tm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dy(t,e,r,i),n!==null&&(r=fn(),ui(n,t,i,r),Qy(n,e,i))}}function Ky(t){var e=t.alternate;return t===St||e!==null&&e===St}function Zy(t,e){ca=Xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zp(t,n)}}var jc={readContext:Yn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},a1={readContext:Yn,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:d0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uc(4194308,4,Wy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return uc(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=s1.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:f0,useDebugValue:um,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=f0(!1),e=t[0];return t=r1.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=yi();if(vt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Yt===null)throw Error(ie(349));hs&30||Fy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,d0(ky.bind(null,i,s,t),[t]),i.flags|=2048,Ia(9,Oy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=Yt.identifierPrefix;if(vt){var n=Wi,i=Gi;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=i1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},l1={readContext:Yn,useCallback:jy,useContext:Yn,useEffect:cm,useImperativeHandle:Xy,useInsertionEffect:Hy,useLayoutEffect:Gy,useMemo:Yy,useReducer:ff,useRef:zy,useState:function(){return ff(Na)},useDebugValue:um,useDeferredValue:function(t){var e=$n();return $y(e,Bt.memoizedState,t)},useTransition:function(){var t=ff(Na)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Uy,useId:qy,unstable_isNewReconciler:!1},c1={readContext:Yn,useCallback:jy,useContext:Yn,useEffect:cm,useImperativeHandle:Xy,useInsertionEffect:Hy,useLayoutEffect:Gy,useMemo:Yy,useReducer:df,useRef:zy,useState:function(){return df(Na)},useDebugValue:um,useDeferredValue:function(t){var e=$n();return Bt===null?e.memoizedState=t:$y(e,Bt.memoizedState,t)},useTransition:function(){var t=df(Na)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Iy,useSyncExternalStore:Uy,useId:qy,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Lr(t),s=ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(ui(e,t,r,i),lc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Lr(t),s=ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(ui(e,t,r,i),lc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=Lr(t),r=ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pr(t,r,i),e!==null&&(ui(e,t,i,n),lc(e,t,i))}};function h0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function Jy(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=yn(e)?fs:on.current,i=e.contextTypes,s=(i=i!=null)?fo(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function p0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function $d(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=yn(e)?fs:on.current,r.context=fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tu.enqueueReplaceState(r,r.state,null),Gc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=OT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var u1=typeof WeakMap=="function"?WeakMap:Map;function eS(t,e,n){n=ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$c||($c=!0,sh=i),qd(t,e)},n}function tS(t,e,n){n=ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof i!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function m0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new u1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=T1.bind(null,t,e,n),e.then(t,t))}function g0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ji(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var f1=rr.ReactCurrentOwner,_n=!1;function ln(t,e,n,i){e.child=t===null?Py(e,null,n,i):po(e,t.child,n,i)}function _0(t,e,n,i,r){n=n.render;var s=e.ref;return oo(e,r),i=am(t,e,n,i,s,r),n=lm(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(vt&&n&&qp(e),e.flags|=1,ln(t,e,i,r),e.child)}function x0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_m(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nS(t,e,s,i,r)):(t=pc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,i)&&t.ref===e.ref)return Ji(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function nS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Ji(t,e,r)}return Kd(t,e,n,i,r)}function iS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Qs,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Qs,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Qs,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Qs,bn),bn|=i;return ln(t,e,r,n),e.child}function rS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kd(t,e,n,i,r){var s=yn(n)?fs:on.current;return s=fo(e,s),oo(e,r),n=am(t,e,n,i,s,r),i=lm(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(vt&&i&&qp(e),e.flags|=1,ln(t,e,n,r),e.child)}function y0(t,e,n,i,r){if(yn(n)){var s=!0;kc(e)}else s=!1;if(oo(e,r),e.stateNode===null)fc(t,e),Jy(e,n,i),$d(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=yn(n)?fs:on.current,c=fo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&p0(e,o,i,c),_r=!1;var f=e.memoizedState;o.state=f,Gc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||xn.current||_r?(typeof u=="function"&&(Yd(e,n,u,i),l=e.memoizedState),(a=_r||h0(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ly(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=yn(n)?fs:on.current,l=fo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&p0(e,o,i,l),_r=!1,f=e.memoizedState,o.state=f,Gc(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||xn.current||_r?(typeof p=="function"&&(Yd(e,n,p,i),v=e.memoizedState),(c=_r||h0(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Zd(t,e,n,i,s,r)}function Zd(t,e,n,i,r,s){rS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&s0(e,n,!1),Ji(t,e,s);i=e.stateNode,f1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&s0(e,n,!0),e.child}function sS(t){var e=t.stateNode;e.pendingContext?r0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&r0(t,e.context,!1),im(t,e.containerInfo)}function S0(t,e,n,i,r){return ho(),Zp(r),e.flags|=256,ln(t,e,n,i),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function Jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function oS(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(yt,r&1),t===null)return Xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,i,0,null),t=ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jd(n),e.memoizedState=Qd,t):fm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return d1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qd,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fm(t,e){return e=Cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xl(t,e,n,i){return i!==null&&Zp(i),po(e,t.child,null,n),t=fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function d1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=hf(Error(ie(422))),xl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cu({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=Jd(o),e.memoizedState=Qd,s);if(!(e.mode&1))return xl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=hf(s,i,void 0),xl(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(t,r),ui(i,t,r,-1))}return vm(),i=hf(Error(ie(421))),xl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=w1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=Rr(r.nextSibling),Pn=e,vt=!0,ri=null,t!==null&&(Bn[Vn++]=Gi,Bn[Vn++]=Wi,Bn[Vn++]=ds,Gi=t.id,Wi=t.overflow,ds=e),e=fm(e,i.children),e.flags|=4096,e)}function E0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jd(t.return,e,n)}function pf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function aS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E0(t,n,e);else if(t.tag===19)E0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pf(e,!0,n,null,s);break;case"together":pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function h1(t,e,n){switch(e.tag){case 3:sS(e),ho();break;case 5:Ny(e);break;case 1:yn(e.type)&&kc(e);break;case 4:im(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(zc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?oS(t,e,n):(dt(yt,yt.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);dt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return aS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,iS(t,e,n)}return Ji(t,e,n)}var lS,eh,cS,uS;lS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eh=function(){};cS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ns(bi.current);var s=null;switch(n){case"input":r=Ed(t,r),i=Ed(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=wd(t,r),i=wd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fc)}Cd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};uS=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function p1(t,e,n){var i=e.pendingProps;switch(Kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return yn(e.type)&&Oc(),en(e),null;case 3:return i=e.stateNode,mo(),gt(xn),gt(on),sm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(lh(ri),ri=null))),eh(t,e),en(e),null;case 5:rm(e);var r=ns(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)cS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return en(e),null}if(t=ns(bi.current),vl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ti]=e,i[Ra]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Jo.length;r++)pt(Jo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Dg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Ng(i,s),pt("invalid",i)}Cd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(i.textContent,a,t),r=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":ll(i),Lg(i,s,!0);break;case"textarea":ll(i),Ig(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ti]=e,t[Ra]=i,lS(t,e,!1,!1),e.stateNode=t;e:{switch(o=bd(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Jo.length;r++)pt(Jo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Dg(t,i),r=Ed(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Ng(t,i),r=wd(t,i),pt("invalid",t);break;default:r=i}Cd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Up(t,s,l,o))}switch(n){case"input":ll(t),Lg(t,i,!1);break;case"textarea":ll(t),Ig(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?no(t,!!i.multiple,s,!1):i.defaultValue!=null&&no(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)uS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ns(Da.current),ns(bi.current),vl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ti]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:gl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=e,e.stateNode=i}return en(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Rn!==null&&e.mode&1&&!(e.flags&128))by(),ho(),e.flags|=98560,s=!1;else if(s=vl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Ti]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ri!==null&&(lh(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Vt===0&&(Vt=3):vm())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return mo(),eh(t,e),t===null&&Ca(e.stateNode.containerInfo),en(e),null;case 10:return em(e.type._context),en(e),null;case 17:return yn(e.type)&&Oc(),en(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bo(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wc(t),o!==null){for(e.flags|=128,Bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>vo&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return en(e),null}else 2*Pt()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=yt.current,dt(yt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return gm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function m1(t,e){switch(Kp(e),e.tag){case 1:return yn(e.type)&&Oc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),gt(xn),gt(on),sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rm(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return mo(),null;case 10:return em(e.type._context),null;case 22:case 23:return gm(),null;case 24:return null;default:return null}}var yl=!1,rn=!1,g1=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function th(t,e,n){try{n()}catch(i){At(t,e,i)}}var M0=!1;function v1(t,e){if(kd=Nc,t=my(),$p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},Nc=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ni(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){At(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return v=M0,M0=!1,v}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&th(e,n,s)}r=r.next}while(r!==i)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fS(t){var e=t.alternate;e!==null&&(t.alternate=null,fS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ti],delete e[Ra],delete e[Hd],delete e[Jw],delete e[e1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dS(t){return t.tag===5||t.tag===3||t.tag===4}function T0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fc));else if(i!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var $t=null,ii=!1;function lr(t,e,n){for(n=n.child;n!==null;)hS(t,e,n),n=n.sibling}function hS(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:rn||Zs(n,e);case 6:var i=$t,r=ii;$t=null,lr(t,e,n),$t=i,ii=r,$t!==null&&(ii?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(ii?(t=$t,n=n.stateNode,t.nodeType===8?af(t.parentNode,n):t.nodeType===1&&af(t,n),Ta(t)):af($t,n.stateNode));break;case 4:i=$t,r=ii,$t=n.stateNode.containerInfo,ii=!0,lr(t,e,n),$t=i,ii=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&th(n,e,o),r=r.next}while(r!==i)}lr(t,e,n);break;case 1:if(!rn&&(Zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,lr(t,e,n),rn=i):lr(t,e,n);break;default:lr(t,e,n)}}function w0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new g1),e.forEach(function(i){var r=A1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,ii=!1;break e;case 3:$t=a.stateNode.containerInfo,ii=!0;break e;case 4:$t=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if($t===null)throw Error(ie(160));hS(s,o,r),$t=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pS(e,t),e=e.sibling}function pS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),vi(t),i&4){try{ua(3,t,t.return),wu(3,t)}catch(y){At(t,t.return,y)}try{ua(5,t,t.return)}catch(y){At(t,t.return,y)}}break;case 1:Kn(e,t),vi(t),i&512&&n!==null&&Zs(n,n.return);break;case 5:if(Kn(e,t),vi(t),i&512&&n!==null&&Zs(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(y){At(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fx(r,s),bd(a,o);var c=bd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?zx(r,d):u==="dangerouslySetInnerHTML"?Bx(r,d):u==="children"?ya(r,d):Up(r,u,d,c)}switch(a){case"input":Md(r,s);break;case"textarea":Ox(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?no(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?no(r,!!s.multiple,s.defaultValue,!0):no(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ra]=s}catch(y){At(t,t.return,y)}}break;case 6:if(Kn(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){At(t,t.return,y)}}break;case 3:if(Kn(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(y){At(t,t.return,y)}break;case 4:Kn(e,t),vi(t);break;case 13:Kn(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pm=Pt())),i&4&&w0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||u,Kn(e,t),rn=c):Kn(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Me=t,u=t.child;u!==null;){for(d=Me=u;Me!==null;){switch(f=Me,p=f.child,f.tag){case 0:case 11:case 14:case 15:ua(4,f,f.return);break;case 1:Zs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){At(i,n,y)}}break;case 5:Zs(f,f.return);break;case 22:if(f.memoizedState!==null){C0(d);continue}}p!==null?(p.return=f,Me=p):C0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vx("display",o))}catch(y){At(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){At(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,t),vi(t),i&4&&w0(t);break;case 21:break;default:Kn(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dS(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=T0(t);rh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=T0(t);ih(t,a,o);break;default:throw Error(ie(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _1(t,e,n){Me=t,mS(t)}function mS(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=yl;var c=rn;if(yl=o,(rn=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?b0(r):l!==null?(l.return=o,Me=l):b0(r);for(;s!==null;)Me=s,mS(s),s=s.sibling;Me=r,yl=a,rn=c}A0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):A0(t)}}function A0(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&u0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}u0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}rn||e.flags&512&&nh(e)}catch(f){At(e,e.return,f)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function C0(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function b0(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{nh(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{nh(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var x1=Math.ceil,Yc=rr.ReactCurrentDispatcher,dm=rr.ReactCurrentOwner,Xn=rr.ReactCurrentBatchConfig,Qe=0,Yt=null,Ut=null,Kt=0,bn=0,Qs=Br(0),Vt=0,Ua=null,ps=0,Au=0,hm=0,fa=null,vn=null,pm=0,vo=1/0,Vi=null,$c=!1,sh=null,Dr=null,Sl=!1,Mr=null,qc=0,da=0,oh=null,dc=-1,hc=0;function fn(){return Qe&6?Pt():dc!==-1?dc:dc=Pt()}function Lr(t){return t.mode&1?Qe&2&&Kt!==0?Kt&-Kt:n1.transition!==null?(hc===0&&(hc=Jx()),hc):(t=it,t!==0||(t=window.event,t=t===void 0?16:oy(t.type)),t):1}function ui(t,e,n,i){if(50<da)throw da=0,oh=null,Error(ie(185));Wa(t,n,i),(!(Qe&2)||t!==Yt)&&(t===Yt&&(!(Qe&2)&&(Au|=n),Vt===4&&yr(t,Kt)),Sn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(vo=Pt()+500,Eu&&Vr()))}function Sn(t,e){var n=t.callbackNode;nw(t,e);var i=Lc(t,t===Yt?Kt:0);if(i===0)n!==null&&Og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Og(n),e===1)t.tag===0?t1(R0.bind(null,t)):wy(R0.bind(null,t)),Zw(function(){!(Qe&6)&&Vr()}),n=null;else{switch(ey(i)){case 1:n=Vp;break;case 4:n=Zx;break;case 16:n=Dc;break;case 536870912:n=Qx;break;default:n=Dc}n=MS(n,gS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gS(t,e){if(dc=-1,hc=0,Qe&6)throw Error(ie(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var i=Lc(t,t===Yt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kc(t,i);else{e=i;var r=Qe;Qe|=2;var s=_S();(Yt!==t||Kt!==e)&&(Vi=null,vo=Pt()+500,as(t,e));do try{E1();break}catch(a){vS(t,a)}while(!0);Jp(),Yc.current=s,Qe=r,Ut!==null?e=0:(Yt=null,Kt=0,e=Vt)}if(e!==0){if(e===2&&(r=Nd(t),r!==0&&(i=r,e=ah(t,r))),e===1)throw n=Ua,as(t,0),yr(t,i),Sn(t,Pt()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!y1(r)&&(e=Kc(t,i),e===2&&(s=Nd(t),s!==0&&(i=s,e=ah(t,s))),e===1))throw n=Ua,as(t,0),yr(t,i),Sn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:qr(t,vn,Vi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=pm+500-Pt(),10<e)){if(Lc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zd(qr.bind(null,t,vn,Vi),e);break}qr(t,vn,Vi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*x1(i/1960))-i,10<i){t.timeoutHandle=zd(qr.bind(null,t,vn,Vi),i);break}qr(t,vn,Vi);break;case 5:qr(t,vn,Vi);break;default:throw Error(ie(329))}}}return Sn(t,Pt()),t.callbackNode===n?gS.bind(null,t):null}function ah(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=Kc(t,e),t!==2&&(e=vn,vn=n,e!==null&&lh(e)),t}function lh(t){vn===null?vn=t:vn.push.apply(vn,t)}function y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~hm,e&=~Au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function R0(t){if(Qe&6)throw Error(ie(327));ao();var e=Lc(t,0);if(!(e&1))return Sn(t,Pt()),null;var n=Kc(t,e);if(t.tag!==0&&n===2){var i=Nd(t);i!==0&&(e=i,n=ah(t,i))}if(n===1)throw n=Ua,as(t,0),yr(t,e),Sn(t,Pt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,vn,Vi),Sn(t,Pt()),null}function mm(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(vo=Pt()+500,Eu&&Vr())}}function ms(t){Mr!==null&&Mr.tag===0&&!(Qe&6)&&ao();var e=Qe;Qe|=1;var n=Xn.transition,i=it;try{if(Xn.transition=null,it=1,t)return t()}finally{it=i,Xn.transition=n,Qe=e,!(Qe&6)&&Vr()}}function gm(){bn=Qs.current,gt(Qs)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kw(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(Kp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Oc();break;case 3:mo(),gt(xn),gt(on),sm();break;case 5:rm(i);break;case 4:mo();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:em(i.type._context);break;case 22:case 23:gm()}n=n.return}if(Yt=t,Ut=t=Nr(t.current,null),Kt=bn=e,Vt=0,Ua=null,hm=Au=ps=0,vn=fa=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ts=null}return t}function vS(t,e){do{var n=Ut;try{if(Jp(),cc.current=jc,Xc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xc=!1}if(hs=0,jt=Bt=St=null,ca=!1,La=0,dm.current=null,n===null||n.return===null){Vt=1,Ua=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=g0(o);if(p!==null){p.flags&=-257,v0(p,o,a,s,e),p.mode&1&&m0(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){m0(s,c,e),vm();break e}l=Error(ie(426))}}else if(vt&&a.mode&1){var m=g0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),v0(m,o,a,s,e),Zp(go(l,a));break e}}s=l=go(l,a),Vt!==4&&(Vt=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=eS(s,l,e);c0(s,h);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Dr===null||!Dr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=tS(s,a,e);c0(s,S);break e}}s=s.return}while(s!==null)}yS(n)}catch(w){e=w,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function _S(){var t=Yc.current;return Yc.current=jc,t===null?jc:t}function vm(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Yt===null||!(ps&268435455)&&!(Au&268435455)||yr(Yt,Kt)}function Kc(t,e){var n=Qe;Qe|=2;var i=_S();(Yt!==t||Kt!==e)&&(Vi=null,as(t,e));do try{S1();break}catch(r){vS(t,r)}while(!0);if(Jp(),Qe=n,Yc.current=i,Ut!==null)throw Error(ie(261));return Yt=null,Kt=0,Vt}function S1(){for(;Ut!==null;)xS(Ut)}function E1(){for(;Ut!==null&&!YT();)xS(Ut)}function xS(t){var e=ES(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?yS(t):Ut=e,dm.current=null}function yS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=m1(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ut=null;return}}else if(n=p1(n,e,bn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Vt===0&&(Vt=5)}function qr(t,e,n){var i=it,r=Xn.transition;try{Xn.transition=null,it=1,M1(t,e,n,i)}finally{Xn.transition=r,it=i}return null}function M1(t,e,n,i){do ao();while(Mr!==null);if(Qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iw(t,s),t===Yt&&(Ut=Yt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,MS(Dc,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,dm.current=null,v1(t,n),pS(n,t),Gw(Bd),Nc=!!kd,Bd=kd=null,t.current=n,_1(n),$T(),Qe=a,it=o,Xn.transition=s}else t.current=n;if(Sl&&(Sl=!1,Mr=t,qc=r),s=t.pendingLanes,s===0&&(Dr=null),ZT(n.stateNode),Sn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($c)throw $c=!1,t=sh,sh=null,t;return qc&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===oh?da++:(da=0,oh=t):da=0,Vr(),null}function ao(){if(Mr!==null){var t=ey(qc),e=Xn.transition,n=it;try{if(Xn.transition=null,it=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,qc=0,Qe&6)throw Error(ie(331));var r=Qe;for(Qe|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:ua(8,u,s)}var d=u.child;if(d!==null)d.return=u,Me=d;else for(;Me!==null;){u=Me;var f=u.sibling,p=u.return;if(fS(u),u===c){Me=null;break}if(f!==null){f.return=p,Me=f;break}Me=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Me=h;break e}Me=s.return}}var g=t.current;for(Me=g;Me!==null;){o=Me;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Me=_;else e:for(o=g;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(w){At(a,a.return,w)}if(a===o){Me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Me=S;break e}Me=a.return}}if(Qe=r,Vr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(vu,t)}catch{}i=!0}return i}finally{it=n,Xn.transition=e}}return!1}function P0(t,e,n){e=go(n,e),e=eS(t,e,1),t=Pr(t,e,1),e=fn(),t!==null&&(Wa(t,1,e),Sn(t,e))}function At(t,e,n){if(t.tag===3)P0(t,t,n);else for(;e!==null;){if(e.tag===3){P0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dr===null||!Dr.has(i))){t=go(n,t),t=tS(e,t,1),e=Pr(e,t,1),t=fn(),e!==null&&(Wa(e,1,t),Sn(e,t));break}}e=e.return}}function T1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Kt&n)===n&&(Vt===4||Vt===3&&(Kt&130023424)===Kt&&500>Pt()-pm?as(t,0):hm|=n),Sn(t,e)}function SS(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=fn();t=Qi(t,e),t!==null&&(Wa(t,e,n),Sn(t,n))}function w1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),SS(t,n)}function A1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),SS(t,n)}var ES;ES=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,h1(t,e,n);_n=!!(t.flags&131072)}else _n=!1,vt&&e.flags&1048576&&Ay(e,Vc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fc(t,e),t=e.pendingProps;var r=fo(e,on.current);oo(e,n),r=am(null,e,i,t,r,n);var s=lm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,kc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nm(e),r.updater=Tu,e.stateNode=r,r._reactInternals=e,$d(e,i,t,n),e=Zd(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&qp(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=b1(i),t=ni(i,t),r){case 0:e=Kd(null,e,i,t,n);break e;case 1:e=y0(null,e,i,t,n);break e;case 11:e=_0(null,e,i,t,n);break e;case 14:e=x0(null,e,i,ni(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Kd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),y0(t,e,i,r,n);case 3:e:{if(sS(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ly(t,e),Gc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=go(Error(ie(423)),e),e=S0(t,e,i,n,r);break e}else if(i!==r){r=go(Error(ie(424)),e),e=S0(t,e,i,n,r);break e}else for(Rn=Rr(e.stateNode.containerInfo.firstChild),Pn=e,vt=!0,ri=null,n=Py(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=Ji(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return Ny(e),t===null&&Xd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vd(i,r)?o=null:s!==null&&Vd(i,s)&&(e.flags|=32),rS(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Xd(e),null;case 13:return oS(t,e,n);case 4:return im(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=po(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),_0(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(zc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!xn.current){e=Ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,oo(e,n),r=Yn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),x0(t,e,i,r,n);case 15:return nS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),fc(t,e),e.tag=1,yn(i)?(t=!0,kc(e)):t=!1,oo(e,n),Jy(e,i,r),$d(e,i,r,n),Zd(null,e,i,!0,t,n);case 19:return aS(t,e,n);case 22:return iS(t,e,n)}throw Error(ie(156,e.tag))};function MS(t,e){return Kx(t,e)}function C1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new C1(t,e,n,i)}function _m(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b1(t){if(typeof t=="function")return _m(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Op)return 11;if(t===kp)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_m(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return ls(n.children,r,s,e);case Fp:o=8,r|=8;break;case _d:return t=Gn(12,n,e,r|2),t.elementType=_d,t.lanes=s,t;case xd:return t=Gn(13,n,e,r),t.elementType=xd,t.lanes=s,t;case yd:return t=Gn(19,n,e,r),t.elementType=yd,t.lanes=s,t;case Nx:return Cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dx:o=10;break e;case Lx:o=9;break e;case Op:o=11;break e;case kp:o=14;break e;case vr:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ls(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Cu(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=Nx,t.lanes=n,t.stateNode={isHidden:!1},t}function mf(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function gf(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function R1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xm(t,e,n,i,r,s,o,a,l){return t=new R1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nm(s),t}function P1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function TS(t){if(!t)return Ur;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(yn(n))return Ty(t,n,e)}return e}function wS(t,e,n,i,r,s,o,a,l){return t=xm(n,i,!0,t,r,s,o,a,l),t.context=TS(null),n=t.current,i=fn(),r=Lr(n),s=ji(i,r),s.callback=e??null,Pr(n,s,r),t.current.lanes=r,Wa(t,r,i),Sn(t,i),t}function bu(t,e,n,i){var r=e.current,s=fn(),o=Lr(r);return n=TS(n),e.context===null?e.context=n:e.pendingContext=n,e=ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pr(r,e,o),t!==null&&(ui(t,r,o,s),lc(t,r,o)),o}function Zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function D0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ym(t,e){D0(t,e),(t=t.alternate)&&D0(t,e)}function D1(){return null}var AS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sm(t){this._internalRoot=t}Ru.prototype.render=Sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));bu(t,e,null,null)};Ru.prototype.unmount=Sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){bu(null,t,null,null)}),e[Zi]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=iy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&sy(t)}};function Em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L0(){}function L1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Zc(o);s.call(c)}}var o=wS(e,i,t,0,null,!1,!1,"",L0);return t._reactRootContainer=o,t[Zi]=o.current,Ca(t.nodeType===8?t.parentNode:t),ms(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Zc(l);a.call(c)}}var l=xm(t,0,!1,null,null,!1,!1,"",L0);return t._reactRootContainer=l,t[Zi]=l.current,Ca(t.nodeType===8?t.parentNode:t),ms(function(){bu(e,l,n,i)}),l}function Du(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zc(o);a.call(l)}}bu(e,o,t,r)}else o=L1(n,e,t,r,i);return Zc(o)}ty=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(zp(e,n|1),Sn(e,Pt()),!(Qe&6)&&(vo=Pt()+500,Vr()))}break;case 13:ms(function(){var i=Qi(t,1);if(i!==null){var r=fn();ui(i,t,1,r)}}),ym(t,1)}};Hp=function(t){if(t.tag===13){var e=Qi(t,134217728);if(e!==null){var n=fn();ui(e,t,134217728,n)}ym(t,134217728)}};ny=function(t){if(t.tag===13){var e=Lr(t),n=Qi(t,e);if(n!==null){var i=fn();ui(n,t,e,i)}ym(t,e)}};iy=function(){return it};ry=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Pd=function(t,e,n){switch(e){case"input":if(Md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Su(i);if(!r)throw Error(ie(90));Ux(i),Md(i,r)}}}break;case"textarea":Ox(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};Wx=mm;Xx=ms;var N1={usingClientEntryPoint:!1,Events:[ja,js,Su,Hx,Gx,mm]},Vo={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I1={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$x(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||D1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{vu=El.inject(I1),Ci=El}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N1;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(e))throw Error(ie(200));return P1(t,e,null,n)};In.createRoot=function(t,e){if(!Em(t))throw Error(ie(299));var n=!1,i="",r=AS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xm(t,1,!1,null,null,n,!1,i,r),t[Zi]=e.current,Ca(t.nodeType===8?t.parentNode:t),new Sm(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=$x(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return ms(t)};In.hydrate=function(t,e,n){if(!Pu(e))throw Error(ie(200));return Du(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!Em(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=AS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wS(e,null,t,1,n??null,r,!1,s,o),t[Zi]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ru(e)};In.render=function(t,e,n){if(!Pu(e))throw Error(ie(200));return Du(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(ie(40));return t._reactRootContainer?(ms(function(){Du(null,null,t,!1,function(){t._reactRootContainer=null,t[Zi]=null})}),!0):!1};In.unstable_batchedUpdates=mm;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Du(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function CS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(CS)}catch(t){console.error(t)}}CS(),Cx.exports=In;var U1=Cx.exports,N0=U1;gd.createRoot=N0.createRoot,gd.hydrateRoot=N0.hydrateRoot;const F1="/assets/logo-DjZ6Iwdh.png",O1=()=>{const[t,e]=te.useState("home"),[n,i]=te.useState(!1),[r,s]=te.useState(!1),[o,a]=te.useState(0),l=[{name:"Home",id:"home"},{name:"Service",id:"service"},{name:"Process",id:"process"},{name:"Portfolio",id:"portfolio"},{name:"About Us",id:"about"},{name:"Contact",id:"contact"}];te.useEffect(()=>{const u=()=>{s(window.scrollY>40);const d=document.documentElement.scrollHeight-window.innerHeight;a(window.scrollY/d*100);const f=document.querySelectorAll("section");let p="";f.forEach(v=>{const y=v.getBoundingClientRect();y.top<=150&&y.bottom>=150&&(p=v.getAttribute("id"))}),p&&e(p)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const c=u=>{const d=document.getElementById(u);d&&d.scrollIntoView({behavior:"smooth",block:"start"}),e(u),i(!1)};return R.createElement(R.Fragment,null,R.createElement("div",{className:"fixed top-0 left-0 h-[3px] bg-orange-500 z-[9999] transition-all duration-200",style:{width:`${o}%`}}),R.createElement("header",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${r?"bg-black/60 backdrop-blur-xl border-b border-white/10":"bg-transparent"}`},R.createElement("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between"},R.createElement("div",{onClick:()=>c("home"),className:"cursor-pointer group relative"},R.createElement("img",{src:F1,alt:"logo",className:`\r
                w-[75px] md:w-[100px]\r
                object-contain\r
                transition-all duration-500\r
                group-hover:scale-110\r
                drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]\r
                group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.9)]\r
              `}),R.createElement("span",{className:`\r
                absolute inset-0 rounded-full blur-2xl opacity-0\r
                group-hover:opacity-50\r
                transition duration-500\r
                bg-orange-500 -z-10\r
              `})),R.createElement("nav",{className:"hidden md:flex items-center gap-8"},l.map(u=>R.createElement("button",{key:u.id,onClick:()=>c(u.id),className:`relative text-sm transition duration-300 ${t===u.id?"text-orange-400":"text-white/70 hover:text-white"}`},u.name,R.createElement("span",{className:`absolute left-0 -bottom-1 h-[2px] bg-orange-400 transition-all duration-500 ease-out ${t===u.id?"w-full":"w-0"}`})))),R.createElement("button",{onClick:()=>c("contact"),className:"hidden md:block px-5 py-2 bg-orange-500 text-white rounded-full font-semibold hover:scale-105 transition duration-300"},"Let's Talk"),R.createElement("div",{onClick:()=>i(!n),className:"md:hidden cursor-pointer z-[1001] p-2"},R.createElement("div",{className:"space-y-1"},R.createElement("span",{className:"block w-6 h-[2px] bg-white"}),R.createElement("span",{className:"block w-6 h-[2px] bg-white"}),R.createElement("span",{className:"block w-6 h-[2px] bg-white"}))))),n&&R.createElement("div",{className:"fixed inset-0 bg-black/50 z-[999]",onClick:()=>i(!1)}),R.createElement("div",{className:`fixed top-0 right-0 h-full w-[78%] sm:w-[65%] bg-black z-[1000] transform transition-transform duration-500 ${n?"translate-x-0":"translate-x-full"}`},R.createElement("div",{className:"flex items-center justify-between px-4 py-3 border-b border-white/10"},R.createElement("button",{onClick:()=>i(!1),className:"text-white text-xl leading-none"},"✖")),R.createElement("div",{className:"flex flex-col items-center justify-center h-[calc(100%-50px)] space-y-4"},l.map(u=>R.createElement("button",{key:u.id,onClick:()=>c(u.id),className:`text-base transition duration-300 ${t===u.id?"text-orange-400":"text-white hover:text-orange-400"}`},u.name)),R.createElement("button",{onClick:()=>c("contact"),className:"mt-3 px-5 py-2 bg-orange-500 text-black rounded-full text-xs font-semibold"},"Let's Talk"))))};var bS={exports:{}},Lu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=te,B1=Symbol.for("react.element"),V1=Symbol.for("react.fragment"),z1=Object.prototype.hasOwnProperty,H1=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G1={key:!0,ref:!0,__self:!0,__source:!0};function RS(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)z1.call(e,i)&&!G1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B1,type:t,key:s,ref:o,props:r,_owner:H1.current}}Lu.Fragment=V1;Lu.jsx=RS;Lu.jsxs=RS;bS.exports=Lu;var Yi=bS.exports;const Mm=te.createContext({});function er(t){const e=te.useRef(null);return e.current===null&&(e.current=t()),e.current}const W1=typeof window<"u",$a=W1?te.useLayoutEffect:te.useEffect,Nu=te.createContext(null);function Tm(t,e){t.indexOf(e)===-1&&t.push(e)}function Qc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const pi=(t,e,n)=>n>e?e:n<t?t:n;let Fa=()=>{};const Fr={},PS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function DS(t){return typeof t=="object"&&t!==null}const LS=t=>/^0[^.\s]+$/u.test(t);function NS(t){let e;return()=>(e===void 0&&(e=t()),e)}const En=t=>t,X1=(t,e)=>n=>e(t(n)),qa=(...t)=>t.reduce(X1),_o=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class wm{constructor(){this.subscriptions=[]}add(e){return Tm(this.subscriptions,e),()=>Qc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Dn=t=>t*1e3,Wn=t=>t/1e3;function Am(t,e){return e?t*(1e3/e):0}const IS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,j1=1e-7,Y1=12;function $1(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=IS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>j1&&++a<Y1);return o}function Ka(t,e,n,i){if(t===e&&n===i)return En;const r=s=>$1(s,0,1,t,n);return s=>s===0||s===1?s:IS(r(s),e,i)}const US=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,FS=t=>e=>1-t(1-e),OS=Ka(.33,1.53,.69,.99),Cm=FS(OS),kS=US(Cm),BS=t=>t>=1?1:(t*=2)<1?.5*Cm(t):.5*(2-Math.pow(2,-10*(t-1))),bm=t=>1-Math.sin(Math.acos(t)),VS=FS(bm),zS=US(bm),q1=Ka(.42,0,1,1),K1=Ka(0,0,.58,1),HS=Ka(.42,0,.58,1),Z1=t=>Array.isArray(t)&&typeof t[0]!="number",GS=t=>Array.isArray(t)&&typeof t[0]=="number",Q1={linear:En,easeIn:q1,easeInOut:HS,easeOut:K1,circIn:bm,circInOut:zS,circOut:VS,backIn:Cm,backInOut:kS,backOut:OS,anticipate:BS},J1=t=>typeof t=="string",I0=t=>{if(GS(t)){Fa(t.length===4);const[e,n,i,r]=t;return Ka(e,n,i,r)}else if(J1(t))return Q1[t];return t},Ml=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function eA(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const v=f&&r?n:i;return d&&o.add(u),v.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0;const d=n;n=i,i=d,n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const tA=40;function WS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ml.reduce((_,S)=>(_[S]=eA(s),_),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:p,postRender:v}=o,y=()=>{const _=Fr.useManualTiming,S=_?r.timestamp:performance.now();n=!1,_||(r.delta=i?1e3/60:Math.max(Math.min(S-r.timestamp,tA),1)),r.timestamp=S,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),p.process(r),v.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},m=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:Ml.reduce((_,S)=>{const w=o[S];return _[S]=(T,b=!1,x=!1)=>(n||m(),w.schedule(T,b,x)),_},{}),cancel:_=>{for(let S=0;S<Ml.length;S++)o[Ml[S]].cancel(_)},state:r,steps:o}}const{schedule:qe,cancel:qn,state:Xt,steps:vf}=WS(typeof requestAnimationFrame<"u"?requestAnimationFrame:En,!0);let mc;function nA(){mc=void 0}const cn={now:()=>(mc===void 0&&cn.set(Xt.isProcessing||Fr.useManualTiming?Xt.timestamp:performance.now()),mc),set:t=>{mc=t,queueMicrotask(nA)}},XS=t=>e=>typeof e=="string"&&e.startsWith(t),jS=XS("--"),iA=XS("var(--"),Rm=t=>iA(t)?rA.test(t.split("/*")[0].trim()):!1,rA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function U0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Co={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Oa={...Co,transform:t=>pi(0,1,t)},Tl={...Co,default:1},ha=t=>Math.round(t*1e5)/1e5,Pm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function sA(t){return t==null}const oA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Dm=(t,e)=>n=>!!(typeof n=="string"&&oA.test(n)&&n.startsWith(t)||e&&!sA(n)&&Object.prototype.hasOwnProperty.call(n,e)),YS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Pm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},aA=t=>pi(0,255,t),_f={...Co,transform:t=>Math.round(aA(t))},is={test:Dm("rgb","red"),parse:YS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+_f.transform(t)+", "+_f.transform(e)+", "+_f.transform(n)+", "+ha(Oa.transform(i))+")"};function lA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ch={test:Dm("#"),parse:lA,transform:is.transform},Za=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),mr=Za("deg"),Ri=Za("%"),Te=Za("px"),cA=Za("vh"),uA=Za("vw"),F0={...Ri,parse:t=>Ri.parse(t)/100,transform:t=>Ri.transform(t*100)},Js={test:Dm("hsl","hue"),parse:YS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ri.transform(ha(e))+", "+Ri.transform(ha(n))+", "+ha(Oa.transform(i))+")"},It={test:t=>is.test(t)||ch.test(t)||Js.test(t),parse:t=>is.test(t)?is.parse(t):Js.test(t)?Js.parse(t):ch.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?is.transform(t):Js.transform(t),getAnimatableNone:t=>{const e=It.parse(t);return e.alpha=0,It.transform(e)}},fA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Pm))==null?void 0:e.length)||0)+(((n=t.match(fA))==null?void 0:n.length)||0)>0}const $S="number",qS="color",hA="var",pA="var(",O0="${}",mA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xo(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(mA,l=>(It.test(l)?(i.color.push(s),r.push(qS),n.push(It.parse(l))):l.startsWith(pA)?(i.var.push(s),r.push(hA),n.push(l)):(i.number.push(s),r.push($S),n.push(parseFloat(l))),++s,O0)).split(O0);return{values:n,split:a,indexes:i,types:r}}function gA(t){return xo(t).values}function KS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===$S?r+=ha(i[s]):o===qS?r+=It.transform(i[s]):r+=i[s]}return r}}function vA(t){return KS(xo(t))}const _A=t=>typeof t=="number"?0:It.test(t)?It.getAnimatableNone(t):t,xA=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:_A(t);function yA(t){const e=xo(t);return KS(e)(e.values.map((i,r)=>xA(i,e.split[r])))}const fi={test:dA,parse:gA,createTransformer:vA,getAnimatableNone:yA};function xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function SA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=xf(l,a,t+1/3),s=xf(l,a,t),o=xf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Jc(t,e){return n=>n>0?e:t}const mt=(t,e,n)=>t+(e-t)*n,yf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},EA=[ch,is,Js],MA=t=>EA.find(e=>e.test(t));function k0(t){const e=MA(t);if(!e)return!1;let n=e.parse(t);return e===Js&&(n=SA(n)),n}const B0=(t,e)=>{const n=k0(t),i=k0(e);if(!n||!i)return Jc(t,e);const r={...n};return s=>(r.red=yf(n.red,i.red,s),r.green=yf(n.green,i.green,s),r.blue=yf(n.blue,i.blue,s),r.alpha=mt(n.alpha,i.alpha,s),is.transform(r))},uh=new Set(["none","hidden"]);function TA(t,e){return uh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function wA(t,e){return n=>mt(t,e,n)}function Lm(t){return typeof t=="number"?wA:typeof t=="string"?Rm(t)?Jc:It.test(t)?B0:bA:Array.isArray(t)?ZS:typeof t=="object"?It.test(t)?B0:AA:Jc}function ZS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Lm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function AA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Lm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function CA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const bA=(t,e)=>{const n=fi.createTransformer(e),i=xo(t),r=xo(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?uh.has(t)&&!r.values.length||uh.has(e)&&!i.values.length?TA(t,e):qa(ZS(CA(i,r),r.values),n):Jc(t,e)};function QS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?mt(t,e,n):Lm(t)(t,e)}const RA=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>qe.update(e,n),stop:()=>qn(e),now:()=>Xt.isProcessing?Xt.timestamp:cn.now()}},JS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},eu=2e4;function Nm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<eu;)e+=n,i=t.next(e);return e>=eu?1/0:e}function PA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Nm(i),eu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Wn(r)}}const wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function fh(t,e){return t*Math.sqrt(1-e*e)}const DA=12;function LA(t,e,n){let i=n;for(let r=1;r<DA;r++)i=i-t(i)/e(i);return i}const Sf=.001;function NA({duration:t=wt.duration,bounce:e=wt.bounce,velocity:n=wt.velocity,mass:i=wt.mass}){let r,s,o=1-e;o=pi(wt.minDamping,wt.maxDamping,o),t=pi(wt.minDuration,wt.maxDuration,Wn(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=fh(c,o),v=Math.exp(-d);return Sf-f/p*v},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,v=Math.exp(-d),y=fh(Math.pow(c,2),o);return(-r(c)+Sf>0?-1:1)*((f-p)*v)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Sf+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=LA(r,s,a);if(t=Dn(t),isNaN(l))return{stiffness:wt.stiffness,damping:wt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const IA=["duration","bounce"],UA=["stiffness","damping","mass"];function V0(t,e){return e.some(n=>t[n]!==void 0)}function FA(t){let e={velocity:wt.velocity,stiffness:wt.stiffness,damping:wt.damping,mass:wt.mass,isResolvedFromDuration:!1,...t};if(!V0(t,UA)&&V0(t,IA))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*pi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:wt.mass,stiffness:r,damping:s}}else{const n=NA({...t,velocity:0});e={...e,...n,mass:wt.mass},e.isResolvedFromDuration=!0}return e}function tu(t=wt.visualDuration,e=wt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=FA({...n,velocity:-Wn(n.velocity||0)}),v=f||0,y=c/(2*Math.sqrt(l*u)),m=o-s,h=Wn(Math.sqrt(l/u)),g=Math.abs(m)<5;i||(i=g?wt.restSpeed.granular:wt.restSpeed.default),r||(r=g?wt.restDelta.granular:wt.restDelta.default);let _,S,w,T,b,x;if(y<1)w=fh(h,y),T=(v+y*h*m)/w,_=P=>{const D=Math.exp(-y*h*P);return o-D*(T*Math.sin(w*P)+m*Math.cos(w*P))},b=y*h*T+m*w,x=y*h*m-T*w,S=P=>Math.exp(-y*h*P)*(b*Math.sin(w*P)+x*Math.cos(w*P));else if(y===1){_=D=>o-Math.exp(-h*D)*(m+(v+h*m)*D);const P=v+h*m;S=D=>Math.exp(-h*D)*(h*P*D-v)}else{const P=h*Math.sqrt(y*y-1);_=$=>{const N=Math.exp(-y*h*$),G=Math.min(P*$,300);return o-N*((v+y*h*m)*Math.sinh(G)+P*m*Math.cosh(G))/P};const D=(v+y*h*m)/P,O=y*h*D-m*P,j=y*h*m-D*P;S=$=>{const N=Math.exp(-y*h*$),G=Math.min(P*$,300);return N*(O*Math.sinh(G)+j*Math.cosh(G))}}const C={calculatedDuration:p&&d||null,velocity:P=>Dn(S(P)),next:P=>{if(!p&&y<1){const O=Math.exp(-y*h*P),j=Math.sin(w*P),$=Math.cos(w*P),N=o-O*(T*j+m*$),G=Dn(O*(b*j+x*$));return a.done=Math.abs(G)<=i&&Math.abs(o-N)<=r,a.value=a.done?o:N,a}const D=_(P);if(p)a.done=P>=d;else{const O=Dn(S(P));a.done=Math.abs(O)<=i&&Math.abs(o-D)<=r}return a.value=a.done?o:D,a},toString:()=>{const P=Math.min(Nm(C),eu),D=JS(O=>C.next(P*O).value,P,30);return P+"ms "+D},toTransition:()=>{}};return C}tu.applyToOptions=t=>{const e=PA(t,100,tu);return t.ease=e.ease,t.duration=Dn(e.duration),t.type="keyframes",t};const OA=5;function eE(t,e,n){const i=Math.max(e-OA,0);return Am(n-t(i),e-i)}function dh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,v=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let y=n*e;const m=d+y,h=o===void 0?m:o(m);h!==m&&(y=h-d);const g=x=>-y*Math.exp(-x/i),_=x=>h+g(x),S=x=>{const C=g(x),P=_(x);f.done=Math.abs(C)<=c,f.value=f.done?h:P};let w,T;const b=x=>{p(f.value)&&(w=x,T=tu({keyframes:[f.value,v(f.value)],velocity:eE(_,x,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return b(0),{calculatedDuration:null,next:x=>{let C=!1;return!T&&w===void 0&&(C=!0,S(x),b(x)),w!==void 0&&x>=w?T.next(x-w):(!C&&S(x),f)}}}function kA(t,e,n){const i=[],r=n||Fr.mix||QS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||En:e;a=qa(l,a)}i.push(a)}return i}function Im(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Fa(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=kA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=_o(t[d],t[d+1],u);return a[d](f)};return n?u=>c(pi(t[0],t[s-1],u)):c}function BA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=_o(0,e,i);t.push(mt(n,1,r))}}function tE(t){const e=[0];return BA(e,t.length-1),e}function VA(t,e){return t.map(n=>n*e)}function zA(t,e){return t.map(()=>e||HS).splice(0,t.length-1)}function pa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=Z1(i)?i.map(I0):I0(i),s={done:!1,value:e[0]},o=VA(n&&n.length===e.length?n:tE(e),t),a=Im(o,e,{ease:Array.isArray(r)?r:zA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const HA=t=>t!==null;function Iu(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(HA),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const GA={decay:dh,inertia:dh,tween:pa,keyframes:pa,spring:tu};function nE(t){typeof t.type=="string"&&(t.type=GA[t.type])}class Um{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const WA=t=>t/100;class ka extends Um{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==cn.now()&&this.tick(cn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;nE(e);const{type:n=pa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||pa;l!==pa&&typeof a[0]!="number"&&(this.mixKeyframes=qa(WA,QS(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Nm(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:p,type:v,onUpdate:y,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let _=this.currentTime,S=i;if(d){const x=Math.min(this.currentTime,r)/a;let C=Math.floor(x),P=x%1;!P&&x>=1&&(P=1),P===1&&C--,C=Math.min(C,d+1),!!(C%2)&&(f==="reverse"?(P=1-P,p&&(P-=p/a)):f==="mirror"&&(S=o)),_=pi(0,1,P)*a}let w;g?(this.delayState.value=u[0],w=this.delayState):w=S.next(_),s&&!g&&(w.value=s(w.value));let{done:T}=w;!g&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return b&&v!==dh&&(w.value=Iu(u,this.options,m,this.speed)),y&&y(w.value),b&&this.finish(),w}then(e,n){return this.finished.then(e,n)}get duration(){return Wn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wn(e)}get time(){return Wn(this.currentTime)}set time(e){e=Dn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return eE(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(cn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Wn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=RA,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(cn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function XA(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const rs=t=>t*180/Math.PI,hh=t=>{const e=rs(Math.atan2(t[1],t[0]));return ph(e)},jA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:hh,rotateZ:hh,skewX:t=>rs(Math.atan(t[1])),skewY:t=>rs(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},ph=t=>(t=t%360,t<0&&(t+=360),t),z0=hh,H0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),G0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),YA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:H0,scaleY:G0,scale:t=>(H0(t)+G0(t))/2,rotateX:t=>ph(rs(Math.atan2(t[6],t[5]))),rotateY:t=>ph(rs(Math.atan2(-t[2],t[0]))),rotateZ:z0,rotate:z0,skewX:t=>rs(Math.atan(t[4])),skewY:t=>rs(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function mh(t){return t.includes("scale")?1:0}function gh(t,e){if(!t||t==="none")return mh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=YA,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=jA,r=a}if(!r)return mh(e);const s=i[e],o=r[1].split(",").map(qA);return typeof s=="function"?s(o):o[s]}const $A=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return gh(n,e)};function qA(t){return parseFloat(t.trim())}const bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ro=new Set(bo),W0=t=>t===Co||t===Te,KA=new Set(["x","y","z"]),ZA=bo.filter(t=>!KA.has(t));function QA(t){const e=[];return ZA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Tr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>gh(e,"x"),y:(t,{transform:e})=>gh(e,"y")};Tr.translateX=Tr.x;Tr.translateY=Tr.y;const cs=new Set;let vh=!1,_h=!1,xh=!1;function iE(){if(_h){const t=Array.from(cs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=QA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}_h=!1,vh=!1,cs.forEach(t=>t.complete(xh)),cs.clear()}function rE(){cs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(_h=!0)})}function JA(){xh=!0,rE(),iE(),xh=!1}class Fm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(cs.add(this),vh||(vh=!0,qe.read(rE),qe.resolveKeyframes(iE))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}XA(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),cs.delete(this)}cancel(){this.state==="scheduled"&&(cs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const eC=t=>t.startsWith("--");function sE(t,e,n){eC(e)?t.style.setProperty(e,n):t.style[e]=n}const tC={};function Om(t,e){const n=NS(t);return()=>tC[e]??n()}const km=Om(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),oE=Om(()=>window.ViewTimeline!==void 0,"viewTimeline"),aE=Om(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ea=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,X0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ea([0,.65,.55,1]),circOut:ea([.55,0,1,.45]),backIn:ea([.31,.01,.66,-.59]),backOut:ea([.33,1.53,.69,.99])};function lE(t,e){if(t)return typeof t=="function"?aE()?JS(t,e):"ease-out":GS(t)?ea(t):Array.isArray(t)?t.map(n=>lE(n,e)||X0.easeOut):X0[t]}function nC(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=lE(a,r);Array.isArray(d)&&(u.easing=d);const f={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),t.animate(u,f)}function cE(t){return typeof t=="function"&&"applyToOptions"in t}function iC({type:t,...e}){return cE(t)&&aE()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class uE extends Um{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Fa(typeof e.type!="string");const c=iC(e);this.animation=nC(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Iu(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),sE(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Wn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wn(e)}get time(){return Wn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Dn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&km()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),En):r(this)}}const fE={anticipate:BS,backInOut:kS,circInOut:zS};function rC(t){return t in fE}function sC(t){typeof t.ease=="string"&&rC(t.ease)&&(t.ease=fE[t.ease])}const Ef=10;class oC extends uE{constructor(e){sC(e),nE(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new ka({...o,autoplay:!1}),l=Math.max(Ef,cn.now()-this.startTime),c=pi(0,Ef,l-Ef),u=a.sample(l).value,{name:d}=this.options;s&&d&&sE(s,d,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const j0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(fi.test(t)||t==="0")&&!t.startsWith("url("));function aC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function lC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=j0(r,e),a=j0(s,e);return!o||!a?!1:aC(t)||(n==="spring"||cE(n))&&i}function yh(t){t.duration=0,t.type="keyframes"}const dE=new Set(["opacity","clipPath","filter","transform"]),cC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function uC(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&cC.test(t[e]))return!0;return!1}const fC=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),dC=NS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function hC(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((d=e==null?void 0:e.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return dC()&&n&&(dE.has(n)||fC.has(n)&&uC(a))&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const pC=40;class mC extends Um{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var v;super(),this.stop=()=>{var y,m;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=cn.now();const f={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...d},p=(u==null?void 0:u.KeyframeResolver)||Fm;this.keyframeResolver=new p(a,(y,m,h)=>this.onKeyframesResolved(y,m,f,!h),l,c,u),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,g;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=cn.now();let d=!0;lC(e,s,o,a)||(d=!1,(Fr.instantAnimations||!l)&&(u==null||u(Iu(e,i,n))),e[0]=e[e.length-1],yh(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>pC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},v=d&&!c&&hC(p),y=(g=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:g.current;let m;if(v)try{m=new oC({...p,element:y})}catch{m=new ka(p)}else m=new ka(p);m.finished.then(()=>{this.notifyFinished()}).catch(En),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),JA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function hE(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const gC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function vC(t){const e=gC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function pE(t,e,n=1){const[i,r]=vC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return PS(o)?parseFloat(o):o}return Rm(r)?pE(r,e,n+1):r}const _C={type:"spring",stiffness:500,damping:25,restSpeed:10},xC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),yC={type:"keyframes",duration:.8},SC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},EC=(t,{keyframes:e})=>e.length>2?yC:Ro.has(t)?t.startsWith("scale")?xC(e[1]):_C:SC;function mE(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Bm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?mE(n,t):n}const MC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function TC(t){for(const e in t)if(!MC.has(e))return!0;return!1}const Vm=(t,e,n,i={},r,s)=>o=>{const a=Bm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Dn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};TC(a)||Object.assign(u,EC(t,u)),u.duration&&(u.duration=Dn(u.duration)),u.repeatDelay&&(u.repeatDelay=Dn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(yh(u),u.delay===0&&(d=!0)),(Fr.instantAnimations||Fr.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(d=!0,yh(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=Iu(u.keyframes,a);if(f!==void 0){qe.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new ka(u):new mC(u)};function Y0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function zm(t,e,n,i){if(typeof e=="function"){const[r,s]=Y0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Y0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function us(t,e,n){const i=t.getProps();return zm(i,e,n!==void 0?n:i.custom,t)}const gE=new Set(["width","height","top","left","right","bottom",...bo]),$0=30,wC=t=>!isNaN(parseFloat(t)),ma={current:void 0};class AC{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=cn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=cn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=wC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new wm);const i=this.events[e].add(n);return e==="change"?()=>{i(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ma.current&&ma.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=cn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>$0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,$0);return Am(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ai(t,e){return new AC(t,e)}const Sh=t=>Array.isArray(t);function CC(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ai(n))}function bC(t){return Sh(t)?t[t.length-1]||0:t}function Hm(t,e){const n=us(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=bC(s[o]);CC(t,o,a)}}const zt=t=>!!(t&&t.getVelocity);function RC(t){return!!(zt(t)&&t.add)}function Eh(t,e){const n=t.getValue("willChange");if(RC(n))return n.add(e);if(!n&&Fr.WillChange){const i=new Fr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Gm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const PC="framerAppearId",vE="data-"+Gm(PC);function _E(t){return t.props[vE]}function DC({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function xE(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?mE(s,l):l;const c=s==null?void 0:s.reduceMotion;i&&(s=i);const u=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const p=t.getValue(f,t.latestValues[f]??null),v=a[f];if(v===void 0||d&&DC(d,f))continue;const y={delay:n,...Bm(s||{},f)},m=p.get();if(m!==void 0&&!p.isAnimating()&&!Array.isArray(v)&&v===m&&!y.velocity){qe.update(()=>p.set(v));continue}let h=!1;if(window.MotionHandoffAnimation){const S=_E(t);if(S){const w=window.MotionHandoffAnimation(S,f,qe);w!==null&&(y.startTime=w,h=!0)}}Eh(t,f);const g=c??t.shouldReduceMotion;p.start(Vm(f,p,v,g&&gE.has(f)?{type:!1}:y,t,h));const _=p.animation;_&&u.push(_)}if(o){const f=()=>qe.update(()=>{o&&Hm(t,o)});u.length?Promise.all(u).then(f):f()}return u}function Mh(t,e,n={}){var l;const i=us(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(xE(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=r;return LC(t,e,c,u,d,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function LC(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Mh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+hE(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function yE(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Mh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Mh(t,e,n);else{const r=typeof e=="function"?us(t,e,n.custom):e;i=Promise.all(xE(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const NC={test:t=>t==="auto",parse:t=>t},SE=t=>e=>e.test(t),EE=[Co,Te,Ri,mr,uA,cA,NC],q0=t=>EE.find(SE(t));function IC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||LS(t):!0}const UC=new Set(["brightness","contrast","saturate","opacity"]);function FC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Pm)||[];if(!i)return t;const r=n.replace(i,"");let s=UC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const OC=/\b([a-z-]*)\(.*?\)/gu,Th={...fi,getAnimatableNone:t=>{const e=t.match(OC);return e?e.map(FC).join(" "):t}},wh={...fi,getAnimatableNone:t=>{const e=fi.parse(t);return fi.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},K0={...Co,transform:Math.round},kC={rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:Tl,scaleX:Tl,scaleY:Tl,scaleZ:Tl,skew:mr,skewX:mr,skewY:mr,distance:Te,translateX:Te,translateY:Te,translateZ:Te,x:Te,y:Te,z:Te,perspective:Te,transformPerspective:Te,opacity:Oa,originX:F0,originY:F0,originZ:Te},Wm={borderWidth:Te,borderTopWidth:Te,borderRightWidth:Te,borderBottomWidth:Te,borderLeftWidth:Te,borderRadius:Te,borderTopLeftRadius:Te,borderTopRightRadius:Te,borderBottomRightRadius:Te,borderBottomLeftRadius:Te,width:Te,maxWidth:Te,height:Te,maxHeight:Te,top:Te,right:Te,bottom:Te,left:Te,inset:Te,insetBlock:Te,insetBlockStart:Te,insetBlockEnd:Te,insetInline:Te,insetInlineStart:Te,insetInlineEnd:Te,padding:Te,paddingTop:Te,paddingRight:Te,paddingBottom:Te,paddingLeft:Te,paddingBlock:Te,paddingBlockStart:Te,paddingBlockEnd:Te,paddingInline:Te,paddingInlineStart:Te,paddingInlineEnd:Te,margin:Te,marginTop:Te,marginRight:Te,marginBottom:Te,marginLeft:Te,marginBlock:Te,marginBlockStart:Te,marginBlockEnd:Te,marginInline:Te,marginInlineStart:Te,marginInlineEnd:Te,fontSize:Te,backgroundPositionX:Te,backgroundPositionY:Te,...kC,zIndex:K0,fillOpacity:Oa,strokeOpacity:Oa,numOctaves:K0},BC={...Wm,color:It,backgroundColor:It,outlineColor:It,fill:It,stroke:It,borderColor:It,borderTopColor:It,borderRightColor:It,borderBottomColor:It,borderLeftColor:It,filter:Th,WebkitFilter:Th,mask:wh,WebkitMask:wh},ME=t=>BC[t],VC=new Set([Th,wh]);function TE(t,e){let n=ME(t);return VC.has(n)||(n=fi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const zC=new Set(["auto","none","0"]);function HC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!zC.has(s)&&xo(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=TE(n,r)}class GC extends Fm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let d=e[u];if(typeof d=="string"&&(d=d.trim(),Rm(d))){const f=pE(d,n.current);f!==void 0&&(e[u]=f),u===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!gE.has(i)||e.length!==2)return;const[r,s]=e,o=q0(r),a=q0(s),l=U0(r),c=U0(s);if(l!==c&&Tr[i]){this.needsMeasurement=!0;return}if(o!==a)if(W0(o)&&W0(a))for(let u=0;u<e.length;u++){const d=e[u];typeof d=="string"&&(e[u]=parseFloat(d))}else Tr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||IC(e[r]))&&i.push(r);i.length&&HC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Tr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Tr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function wE(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const AE=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ga(t){return DS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Xm}=WS(queueMicrotask,!1),ti={x:!1,y:!1};function CE(){return ti.x||ti.y}function WC(t){return t==="x"||t==="y"?ti[t]?null:(ti[t]=!0,()=>{ti[t]=!1}):ti.x||ti.y?null:(ti.x=ti.y=!0,()=>{ti.x=ti.y=!1})}function bE(t,e){const n=wE(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function XC(t){return!(t.pointerType==="touch"||CE())}function jC(t,e,n={}){const[i,r,s]=bE(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",v)},d=m=>{c&&(c(m),c=void 0),u()},f=m=>{a=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,d(m))},p=()=>{a=!0,window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",f,r)},v=m=>{if(m.pointerType!=="touch"){if(a){l=!0;return}d(m)}},y=m=>{if(!XC(m))return;l=!1;const h=e(o,m);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",v,r))};o.addEventListener("pointerenter",y,r),o.addEventListener("pointerdown",p,r)}),s}const RE=(t,e)=>e?t===e?!0:RE(t,e.parentElement):!1,jm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,YC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function $C(t){return YC.has(t.tagName)||t.isContentEditable===!0}const qC=new Set(["INPUT","SELECT","TEXTAREA"]);function KC(t){return qC.has(t.tagName)||t.isContentEditable===!0}const gc=new WeakSet;function Z0(t){return e=>{e.key==="Enter"&&t(e)}}function Mf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ZC=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Z0(()=>{if(gc.has(n))return;Mf(n,"down");const r=Z0(()=>{Mf(n,"up")}),s=()=>Mf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Q0(t){return jm(t)&&!CE()}const J0=new WeakSet;function QC(t,e,n={}){const[i,r,s]=bE(t,n),o=a=>{const l=a.currentTarget;if(!Q0(a)||J0.has(a))return;gc.add(l),n.stopPropagation&&J0.add(a);const c=e(l,a),u=(p,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),gc.has(l)&&gc.delete(l),Q0(p)&&typeof c=="function"&&c(p,{success:v})},d=p=>{u(p,l===window||l===document||n.useGlobalTarget||RE(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),ga(a)&&(a.addEventListener("focus",c=>ZC(c,r)),!$C(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Ym(t){return DS(t)&&"ownerSVGElement"in t}const vc=new WeakMap;let gr;const PE=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Ym(i)&&"getBBox"in i?i.getBBox()[e]:i[n],JC=PE("inline","width","offsetWidth"),eb=PE("block","height","offsetHeight");function tb({target:t,borderBoxSize:e}){var n;(n=vc.get(t))==null||n.forEach(i=>{i(t,{get width(){return JC(t,e)},get height(){return eb(t,e)}})})}function nb(t){t.forEach(tb)}function ib(){typeof ResizeObserver>"u"||(gr=new ResizeObserver(nb))}function rb(t,e){gr||ib();const n=wE(t);return n.forEach(i=>{let r=vc.get(i);r||(r=new Set,vc.set(i,r)),r.add(e),gr==null||gr.observe(i)}),()=>{n.forEach(i=>{const r=vc.get(i);r==null||r.delete(e),r!=null&&r.size||gr==null||gr.unobserve(i)})}}const _c=new Set;let eo;function sb(){eo=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};_c.forEach(e=>e(t))},window.addEventListener("resize",eo)}function ob(t){return _c.add(t),eo||sb(),()=>{_c.delete(t),!_c.size&&typeof eo=="function"&&(window.removeEventListener("resize",eo),eo=void 0)}}function Ah(t,e){return typeof t=="function"?ob(t):rb(t,e)}function DE(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return qe.preUpdate(i,!0),()=>qn(i)}function ab(t){return Ym(t)&&t.tagName==="svg"}function lb(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=Im(r,s,o);return e?a(i):a}function cb(t,e,n={}){const i=t.get();let r=null,s=i,o;const a=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,l=()=>{r&&(r.stop(),r=null),t.animation=void 0},c=()=>{const d=ev(t.get()),f=ev(s);if(d===f){l();return}const p=r?r.getGeneratorVelocity():t.getVelocity();l(),r=new ka({keyframes:[d,f],velocity:p,type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:o})},u=()=>{var d;c(),t.animation=r??void 0,(d=t.events.animationStart)==null||d.notify(),r==null||r.then(()=>{var f;t.animation=void 0,(f=t.events.animationComplete)==null||f.notify()})};if(t.attach((d,f)=>{s=d,o=p=>f(Tf(p,a)),qe.postRender(u)},l),zt(e)){let d=n.skipInitialAnimation===!0;const f=e.on("change",v=>{d?(d=!1,t.jump(Tf(v,a),!1)):t.set(Tf(v,a))}),p=t.on("destroy",f);return()=>{f(),p()}}return l}function Tf(t,e){return e?t+e:t}function ev(t){return typeof t=="number"?t:parseFloat(t)}const ub=[...EE,It,fi],fb=t=>ub.find(SE(t)),tv=()=>({translate:0,scale:1,origin:0,originPoint:0}),to=()=>({x:tv(),y:tv()}),nv=()=>({min:0,max:0}),kt=()=>({x:nv(),y:nv()}),db=new WeakMap;function Uu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ba(t){return typeof t=="string"||Array.isArray(t)}const $m=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qm=["initial",...$m];function Fu(t){return Uu(t.animate)||qm.some(e=>Ba(t[e]))}function LE(t){return!!(Fu(t)||t.variants)}function hb(t,e,n){for(const i in e){const r=e[i],s=n[i];if(zt(r))t.addValue(i,r);else if(zt(s))t.addValue(i,ai(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ai(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Ch={current:null},NE={current:!1},pb=typeof window<"u";function mb(){if(NE.current=!0,!!pb)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ch.current=t.matches;t.addEventListener("change",e),e()}else Ch.current=!1}const iv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let nu={};function IE(t){nu=t}function gb(){return nu}class vb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Fm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=cn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,qe.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Fu(n),this.isVariantNode=LE(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const v=f[p];c[p]!==void 0&&zt(v)&&v.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,db.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(NE.current||mb(),this.shouldReduceMotion=Ch.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),qn(this.notifyUpdate),qn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&dE.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,d=new uE({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Dn(u)}),f=o(d);this.valueSubscriptions.set(e,()=>{f(),d.cancel()});return}const i=Ro.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&qe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in nu){const n=nu[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):kt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<iv.length;i++){const r=iv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=hb(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ai(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(PS(i)||LS(i))?i=parseFloat(i):!fb(i)&&fi.test(n)&&(i=TE(e,n)),this.setBaseTarget(e,zt(i)?i.get():i)),zt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=zm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!zt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new wm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Xm.render(this.render)}}class UE extends vb{constructor(){super(...arguments),this.KeyframeResolver=GC}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;zt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class zr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function FE({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function _b({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function xb(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function wf(t){return t===void 0||t===1}function bh({scale:t,scaleX:e,scaleY:n}){return!wf(t)||!wf(e)||!wf(n)}function Kr(t){return bh(t)||OE(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function OE(t){return rv(t.x)||rv(t.y)}function rv(t){return t&&t!=="0%"}function iu(t,e,n){const i=t-n,r=e*i;return n+r}function sv(t,e,n,i,r){return r!==void 0&&(t=iu(t,r,i)),iu(t,n,i)+e}function Rh(t,e=0,n=1,i,r){t.min=sv(t.min,e,n,i,r),t.max=sv(t.max,e,n,i,r)}function kE(t,{x:e,y:n}){Rh(t.x,e.translate,e.scale,e.originPoint),Rh(t.y,n.translate,n.scale,n.originPoint)}const ov=.999999999999,av=1.0000000000001;function yb(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Ei(t.x,-s.scroll.offset.x),Ei(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,kE(t,o)),i&&Kr(s.latestValues)&&xc(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<av&&e.x>ov&&(e.x=1),e.y<av&&e.y>ov&&(e.y=1)}function Ei(t,e){t.min+=e,t.max+=e}function lv(t,e,n,i,r=.5){const s=mt(t.min,t.max,r);Rh(t,e,n,s,i)}function cv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function xc(t,e,n){const i=n??t;lv(t.x,cv(e.x,i.x),e.scaleX,e.scale,e.originX),lv(t.y,cv(e.y,i.y),e.scaleY,e.scale,e.originY)}function BE(t,e){return FE(xb(t.getBoundingClientRect(),e))}function Sb(t,e,n){const i=BE(t,n),{scroll:r}=e;return r&&(Ei(i.x,r.offset.x),Ei(i.y,r.offset.y)),i}const Eb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Mb=bo.length;function Tb(t,e,n){let i="",r=!0;for(let s=0;s<Mb;s++){const o=bo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=AE(a,Wm[o]);if(!l){r=!1;const u=Eb[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Km(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Ro.has(l)){o=!0;continue}else if(jS(l)){r[l]=c;continue}else{const u=AE(c,Wm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=Tb(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function VE(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function uv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const zo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Te.test(t))t=parseFloat(t);else return t;const n=uv(t,e.target.x),i=uv(t,e.target.y);return`${n}% ${i}%`}},wb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=fi.parse(t);if(r.length>5)return i;const s=fi.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},Ph={borderRadius:{...zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zo,borderTopRightRadius:zo,borderBottomLeftRadius:zo,borderBottomRightRadius:zo,boxShadow:wb};function zE(t,{layout:e,layoutId:n}){return Ro.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ph[t]||t==="opacity")}function Zm(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(zt(i[a])||r&&zt(r[a])||zE(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function Ab(t){return window.getComputedStyle(t)}class Cb extends UE{constructor(){super(...arguments),this.type="html",this.renderInstance=VE}readValueFromInstance(e,n){var i;if(Ro.has(n))return(i=this.projection)!=null&&i.isProjecting?mh(n):$A(e,n);{const r=Ab(e),s=(jS(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return BE(e,n)}build(e,n,i){Km(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Zm(e,n,i)}}const bb={offset:"stroke-dashoffset",array:"stroke-dasharray"},Rb={offset:"strokeDashoffset",array:"strokeDasharray"};function Pb(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?bb:Rb;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const Db=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function HE(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(Km(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox);for(const p of Db)d[p]!==void 0&&(f[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&Pb(d,r,s,o,!1)}const GE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),WE=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Lb(t,e,n,i){VE(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(GE.has(r)?r:Gm(r),e.attrs[r])}function XE(t,e,n){const i=Zm(t,e,n);for(const r in t)if(zt(t[r])||zt(e[r])){const s=bo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class Nb extends UE{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ro.has(n)){const i=ME(n);return i&&i.default||0}return n=GE.has(n)?n:Gm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return XE(e,n,i)}build(e,n,i){HE(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){Lb(e,n,i,r)}mount(e){this.isSVGTag=WE(e.tagName),super.mount(e)}}const Ib=qm.length;function jE(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?jE(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Ib;n++){const i=qm[n],r=t.props[i];(Ba(r)||r===!1)&&(e[i]=r)}return e}function YE(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const Ub=[...$m].reverse(),Fb=$m.length;function Ob(t){return e=>Promise.all(e.map(({animation:n,options:i})=>yE(t,n,i)))}function kb(t){let e=Ob(t),n=fv(),i=!0,r=!1;const s=c=>(u,d)=>{var p;const f=us(t,d,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:v,transitionEnd:y,...m}=f;u={...u,...m,...y}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,d=jE(t.parent)||{},f=[],p=new Set;let v={},y=1/0;for(let h=0;h<Fb;h++){const g=Ub[h],_=n[g],S=u[g]!==void 0?u[g]:d[g],w=Ba(S),T=g===c?_.isActive:null;T===!1&&(y=h);let b=S===d[g]&&S!==u[g]&&w;if(b&&(i||r)&&t.manuallyAnimateOnMount&&(b=!1),_.protectedKeys={...v},!_.isActive&&T===null||!S&&!_.prevProp||Uu(S)||typeof S=="boolean")continue;if(g==="exit"&&_.isActive&&T!==!0){_.prevResolvedValues&&(v={...v,..._.prevResolvedValues});continue}const x=Bb(_.prevProp,S);let C=x||g===c&&_.isActive&&!b&&w||h>y&&w,P=!1;const D=Array.isArray(S)?S:[S];let O=D.reduce(s(g),{});T===!1&&(O={});const{prevResolvedValues:j={}}=_,$={...j,...O},N=F=>{C=!0,p.has(F)&&(P=!0,p.delete(F)),_.needsAnimating[F]=!0;const X=t.getValue(F);X&&(X.liveStyle=!1)};for(const F in $){const X=O[F],q=j[F];if(v.hasOwnProperty(F))continue;let re=!1;Sh(X)&&Sh(q)?re=!YE(X,q):re=X!==q,re?X!=null?N(F):p.add(F):X!==void 0&&p.has(F)?N(F):_.protectedKeys[F]=!0}_.prevProp=S,_.prevResolvedValues=O,_.isActive&&(v={...v,...O}),(i||r)&&t.blockInitialAnimation&&(C=!1);const G=b&&x;C&&(!G||P)&&f.push(...D.map(F=>{const X={type:g};if(typeof F=="string"&&(i||r)&&!G&&t.manuallyAnimateOnMount&&t.parent){const{parent:q}=t,re=us(q,F);if(q.enteringChildren&&re){const{delayChildren:de}=re.transition||{};X.delay=hE(q.enteringChildren,t,de)}}return{animation:F,options:X}}))}if(p.size){const h={};if(typeof u.initial!="boolean"){const g=us(t,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(h.transition=g.transition)}p.forEach(g=>{const _=t.getBaseTarget(g),S=t.getValue(g);S&&(S.liveStyle=!0),h[g]=_??null}),f.push({animation:h})}let m=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(m=!1),i=!1,r=!1,m?e(f):Promise.resolve()}function l(c,u){var f;if(n[c].isActive===u)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(p=>{var v;return(v=p.animationState)==null?void 0:v.setActive(c,u)}),n[c].isActive=u;const d=a(c);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=fv(),r=!0}}}function Bb(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!YE(e,t):!1}function Gr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fv(){return{animate:Gr(!0),whileInView:Gr(),whileHover:Gr(),whileTap:Gr(),whileDrag:Gr(),whileFocus:Gr(),exit:Gr()}}function Dh(t,e){t.min=e.min,t.max=e.max}function Zn(t,e){Dh(t.x,e.x),Dh(t.y,e.y)}function dv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const $E=1e-4,Vb=1-$E,zb=1+$E,qE=.01,Hb=0-qE,Gb=0+qE;function un(t){return t.max-t.min}function Wb(t,e,n){return Math.abs(t-e)<=n}function hv(t,e,n,i=.5){t.origin=i,t.originPoint=mt(e.min,e.max,t.origin),t.scale=un(n)/un(e),t.translate=mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Vb&&t.scale<=zb||isNaN(t.scale))&&(t.scale=1),(t.translate>=Hb&&t.translate<=Gb||isNaN(t.translate))&&(t.translate=0)}function va(t,e,n,i){hv(t.x,e.x,n.x,i?i.originX:void 0),hv(t.y,e.y,n.y,i?i.originY:void 0)}function pv(t,e,n,i=0){const r=i?mt(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+un(e)}function Xb(t,e,n,i){pv(t.x,e.x,n.x,i==null?void 0:i.x),pv(t.y,e.y,n.y,i==null?void 0:i.y)}function mv(t,e,n,i=0){const r=i?mt(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+un(e)}function ru(t,e,n,i){mv(t.x,e.x,n.x,i==null?void 0:i.x),mv(t.y,e.y,n.y,i==null?void 0:i.y)}function gv(t,e,n,i,r){return t-=e,t=iu(t,1/n,i),r!==void 0&&(t=iu(t,1/r,i)),t}function jb(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ri.test(e)&&(e=parseFloat(e),e=mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=mt(s.min,s.max,i);t===s&&(a-=e),t.min=gv(t.min,e,n,a,r),t.max=gv(t.max,e,n,a,r)}function vv(t,e,[n,i,r],s,o){jb(t,e[n],e[i],e[r],e.scale,s,o)}const Yb=["x","scaleX","originX"],$b=["y","scaleY","originY"];function _v(t,e,n,i){vv(t.x,e,Yb,n?n.x:void 0,i?i.x:void 0),vv(t.y,e,$b,n?n.y:void 0,i?i.y:void 0)}function xv(t){return t.translate===0&&t.scale===1}function KE(t){return xv(t.x)&&xv(t.y)}function yv(t,e){return t.min===e.min&&t.max===e.max}function qb(t,e){return yv(t.x,e.x)&&yv(t.y,e.y)}function Sv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function ZE(t,e){return Sv(t.x,e.x)&&Sv(t.y,e.y)}function Ev(t){return un(t.x)/un(t.y)}function Mv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Si(t){return[t("x"),t("y")]}function Kb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const QE=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Zb=QE.length,Tv=t=>typeof t=="string"?parseFloat(t):t,wv=t=>typeof t=="number"||Te.test(t);function Qb(t,e,n,i,r,s){r?(t.opacity=mt(0,n.opacity??1,Jb(i)),t.opacityExit=mt(e.opacity??1,0,eR(i))):s&&(t.opacity=mt(e.opacity??1,n.opacity??1,i));for(let o=0;o<Zb;o++){const a=QE[o];let l=Av(e,a),c=Av(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||wv(l)===wv(c)?(t[a]=Math.max(mt(Tv(l),Tv(c),i),0),(Ri.test(c)||Ri.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=mt(e.rotate||0,n.rotate||0,i))}function Av(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Jb=JE(0,.5,VS),eR=JE(.5,.95,En);function JE(t,e,n){return i=>i<t?0:i>e?1:n(_o(t,e,i))}function tR(t,e,n){const i=zt(t)?t:ai(t);return i.start(Vm("",i,e,n)),i.animation}function Va(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const nR=(t,e)=>t.depth-e.depth;class iR{constructor(){this.children=[],this.isDirty=!1}add(e){Tm(this.children,e),this.isDirty=!0}remove(e){Qc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(nR),this.isDirty=!1,this.children.forEach(e)}}function rR(t,e){const n=cn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(qn(i),t(s-e))};return qe.setup(i,!0),()=>qn(i)}function yc(t){return zt(t)?t.get():t}class sR{constructor(){this.members=[]}add(e){Tm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(Qc(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(Qc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Sc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Af=["","X","Y","Z"],oR=1e3;let aR=0;function Cf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function eM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=_E(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",qe,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&eM(i)}function tM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=aR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(uR),this.nodes.forEach(gR),this.nodes.forEach(vR),this.nodes.forEach(fR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new iR)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new wm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Ym(o)&&!ab(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,d=0;const f=()=>this.root.updateBlockedByResize=!1;qe.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,u&&u(),u=rR(f,250),Sc.hasAnimatedSinceResize&&(Sc.hasAnimatedSinceResize=!1,this.nodes.forEach(Rv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||ER,{onLayoutAnimationStart:y,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!ZE(this.targetLayout,p),g=!d&&f;if(this.options.layoutRoot||this.resumeFrom||g||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...Bm(v,"layout"),onPlay:y,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(u,g)}else d||Rv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(_R),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&eM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(hR),this.nodes.forEach(Cv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(bv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(pR),this.nodes.forEach(mR),this.nodes.forEach(lR),this.nodes.forEach(cR)):this.nodes.forEach(bv),this.clearAllSnapshots();const a=cn.now();Xt.delta=pi(0,1e3/60,a-Xt.timestamp),Xt.timestamp=a,Xt.isProcessing=!0,vf.update.process(Xt),vf.preRender.process(Xt),vf.render.process(Xt),Xt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(dR),this.sharedNodes.forEach(xR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!un(this.snapshot.measuredBox.x)&&!un(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=kt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!KE(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Kr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),MR(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return kt();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(TR))){const{scroll:u}=this.root;u&&(Ei(a.x,u.offset.x),Ei(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=kt();if(Zn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Zn(a,o),Ei(a.x,d.offset.x),Ei(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var u,d;const c=l||kt();Zn(c,o);for(let f=0;f<this.path.length;f++){const p=this.path[f];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Ei(c.x,-p.scroll.offset.x),Ei(c.y,-p.scroll.offset.y)),Kr(p.latestValues)&&xc(c,p.latestValues,(u=p.layout)==null?void 0:u.layoutBox)}return Kr(this.latestValues)&&xc(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=kt();Zn(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!Kr(u.latestValues))continue;let d;u.instance&&(bh(u.latestValues)&&u.updateSnapshot(),d=kt(),Zn(d,u.measurePageBox())),_v(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,d)}return Kr(this.latestValues)&&_v(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!this.layout||!(u||d))return;this.resolvedRelativeTargetAt=Xt.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=kt(),this.targetWithTransforms=kt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Xb(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Zn(this.target,this.layout.layoutBox),kE(this.target,this.targetDelta)):Zn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||bh(this.parent.latestValues)||OE(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=kt(),this.relativeTargetOrigin=kt(),ru(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Zn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Xt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Zn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;yb(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=kt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(dv(this.prevProjectionDelta.x,this.projectionDelta.x),dv(this.prevProjectionDelta.y,this.projectionDelta.y)),va(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!Mv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Mv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=to(),this.projectionDelta=to(),this.projectionDeltaWithTransform=to()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=to();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=kt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,m=this.getStack(),h=!m||m.members.length<=1,g=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(SR));this.animationProgress=0;let _;this.mixTargetDelta=S=>{const w=S/1e3;Pv(d.x,o.x,w),Pv(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ru(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),yR(this.relativeTarget,this.relativeTargetOrigin,f,w),_&&qb(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=kt()),Zn(_,this.relativeTarget)),y&&(this.animationValues=u,Qb(u,c,this.latestValues,w,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{Sc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ai(0)),this.motionValue.jump(0,!1),this.currentAnimation=tR(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(oR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&nM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||kt();const d=un(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=un(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Zn(a,l),xc(a,u),va(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new sR),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Cf("z",o,c,this.animationValues);for(let u=0;u<Af.length;u++)Cf(`rotate${Af[u]}`,o,c,this.animationValues),Cf(`skew${Af[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=yc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=yc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Kr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=Kb(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:f,y:p}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const v in Ph){if(u[v]===void 0)continue;const{correct:y,applyTo:m,isCSSVariable:h}=Ph[v],g=d==="none"?u[v]:y(u[v],c);if(m){const _=m.length;for(let S=0;S<_;S++)o[m[S]]=g}else h?this.options.visualElement.renderState.vars[v]=g:o[v]=g}this.options.layoutId&&(o.pointerEvents=c===this?yc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Cv),this.root.sharedNodes.clear()}}}function lR(t){t.updateLayout()}function cR(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")Si(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=un(f);f.min=i[d].min,f.max=f.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";Dh(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else nM(s,e.layoutBox,i)&&Si(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=un(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=to();va(a,i,e.layoutBox);const l=to();o?va(l,t.applyTransform(r,!0),e.measuredBox):va(l,i,e.layoutBox);const c=!KE(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const v=t.options.layoutAnchor||void 0,y=kt();ru(y,e.layoutBox,f.layoutBox,v);const m=kt();ru(m,i,p.layoutBox,v),ZE(y,m)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=y,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function uR(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function fR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function dR(t){t.clearSnapshot()}function Cv(t){t.clearMeasurements()}function hR(t){t.isLayoutDirty=!0,t.updateLayout()}function bv(t){t.isLayoutDirty=!1}function pR(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function mR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Rv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function gR(t){t.resolveTargetDelta()}function vR(t){t.calcProjection()}function _R(t){t.resetSkewAndRotation()}function xR(t){t.removeLeadSnapshot()}function Pv(t,e,n){t.translate=mt(e.translate,0,n),t.scale=mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Dv(t,e,n,i){t.min=mt(e.min,n.min,i),t.max=mt(e.max,n.max,i)}function yR(t,e,n,i){Dv(t.x,e.x,n.x,i),Dv(t.y,e.y,n.y,i)}function SR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ER={duration:.45,ease:[.4,0,.1,1]},Lv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Nv=Lv("applewebkit/")&&!Lv("chrome/")?Math.round:En;function Iv(t){t.min=Nv(t.min),t.max=Nv(t.max)}function MR(t){Iv(t.x),Iv(t.y)}function nM(t,e,n){return t==="position"||t==="preserve-aspect"&&!Wb(Ev(e),Ev(n),.2)}function TR(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const wR=tM({attachResizeListener:(t,e)=>Va(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bf={current:void 0},iM=tM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bf.current){const t=new wR({});t.mount(window),t.setOptions({layoutScroll:!0}),bf.current=t}return bf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Qa=te.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Uv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function AR(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Uv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Uv(t[r],null)}}}}function CR(...t){return te.useCallback(AR(...t),t)}class bR extends te.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(ga(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=ga(i)&&i.offsetWidth||0,s=ga(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function RR({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var f;const o=te.useId(),a=te.useRef(null),l=te.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=te.useContext(Qa),u=((f=t.props)==null?void 0:f.ref)??(t==null?void 0:t.ref),d=CR(a,u);return te.useInsertionEffect(()=>{const{width:p,height:v,top:y,left:m,right:h,bottom:g}=l.current;if(e||s===!1||!a.current||!p||!v)return;const _=n==="left"?`left: ${m}`:`right: ${h}`,S=i==="bottom"?`bottom: ${g}`:`top: ${y}`;a.current.dataset.motionPopId=o;const w=document.createElement("style");c&&(w.nonce=c);const T=r??document.head;return T.appendChild(w),w.sheet&&w.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${v}px !important;
            ${_}px !important;
            ${S}px !important;
          }
        `),()=>{var b;(b=a.current)==null||b.removeAttribute("data-motion-pop-id"),T.contains(w)&&T.removeChild(w)}},[e]),Yi.jsx(bR,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:te.cloneElement(t,{ref:d})})}const PR=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=er(DR),d=te.useId();let f=!0,p=te.useMemo(()=>(f=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:v=>{u.set(v,!0);for(const y of u.values())if(!y)return;i&&i()},register:v=>(u.set(v,!1),()=>u.delete(v))}),[n,u,i]);return s&&f&&(p={...p}),te.useMemo(()=>{u.forEach((v,y)=>u.set(y,!1))},[n]),te.useEffect(()=>{!n&&!u.size&&i&&i()},[n]),t=Yi.jsx(RR,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),Yi.jsx(Nu.Provider,{value:p,children:t})};function DR(){return new Map}function rM(t=!0){const e=te.useContext(Nu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=te.useId();te.useEffect(()=>{if(t)return r(s)},[t]);const o=te.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const wl=t=>t.key||"";function Fv(t){const e=[];return te.Children.forEach(t,n=>{te.isValidElement(n)&&e.push(n)}),e}const LR=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,d]=rM(o),f=te.useMemo(()=>Fv(t),[t]),p=o&&!u?[]:f.map(wl),v=te.useRef(!0),y=te.useRef(f),m=er(()=>new Map),h=te.useRef(new Set),[g,_]=te.useState(f),[S,w]=te.useState(f);$a(()=>{v.current=!1,y.current=f;for(let x=0;x<S.length;x++){const C=wl(S[x]);p.includes(C)?(m.delete(C),h.current.delete(C)):m.get(C)!==!0&&m.set(C,!1)}},[S,p.length,p.join("-")]);const T=[];if(f!==g){let x=[...f];for(let C=0;C<S.length;C++){const P=S[C],D=wl(P);p.includes(D)||(x.splice(C,0,P),T.push(P))}return s==="wait"&&T.length&&(x=T),w(Fv(x)),_(f),null}const{forceRender:b}=te.useContext(Mm);return Yi.jsx(Yi.Fragment,{children:S.map(x=>{const C=wl(x),P=o&&!u?!1:f===S||p.includes(C),D=()=>{if(h.current.has(C))return;if(m.has(C))h.current.add(C),m.set(C,!0);else return;let O=!0;m.forEach(j=>{j||(O=!1)}),O&&(b==null||b(),w(y.current),o&&(d==null||d()),i&&i())};return Yi.jsx(PR,{isPresent:P,initial:!v.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:P?void 0:D,anchorX:a,anchorY:l,children:x},C)})})},sM=te.createContext({strict:!1}),Ov={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let kv=!1;function NR(){if(kv)return;const t={};for(const e in Ov)t[e]={isEnabled:n=>Ov[e].some(i=>!!n[i])};IE(t),kv=!0}function oM(){return NR(),gb()}function IR(t){const e=oM();for(const n in t)e[n]={...e[n],...t[n]};IE(e)}const UR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function su(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||UR.has(t)}let aM=t=>!su(t);function FR(t){typeof t=="function"&&(aM=e=>e.startsWith("on")?!su(e):t(e))}try{FR(require("@emotion/is-prop-valid").default)}catch{}function OR(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||zt(t[r])||(aM(r)||n===!0&&su(r)||!e&&!su(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Ou=te.createContext({});function kR(t,e){if(Fu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ba(n)?n:void 0,animate:Ba(i)?i:void 0}}return t.inherit!==!1?e:{}}function BR(t){const{initial:e,animate:n}=kR(t,te.useContext(Ou));return te.useMemo(()=>({initial:e,animate:n}),[Bv(e),Bv(n)])}function Bv(t){return Array.isArray(t)?t.join(" "):t}const Qm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function lM(t,e,n){for(const i in e)!zt(e[i])&&!zE(i,n)&&(t[i]=e[i])}function VR({transformTemplate:t},e){return te.useMemo(()=>{const n=Qm();return Km(n,e,t),Object.assign({},n.vars,n.style)},[e])}function zR(t,e){const n=t.style||{},i={};return lM(i,n,t),Object.assign(i,VR(t,e)),i}function HR(t,e){const n={},i=zR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const cM=()=>({...Qm(),attrs:{}});function GR(t,e,n,i){const r=te.useMemo(()=>{const s=cM();return HE(s,e,WE(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};lM(s,t.style,t),r.style={...s,...r.style}}return r}const WR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jm(t){return typeof t!="string"||t.includes("-")?!1:!!(WR.indexOf(t)>-1||/[A-Z]/u.test(t))}function XR(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??Jm(t)?GR:HR)(e,i,r,t),c=OR(e,typeof t=="string",s),u=t!==te.Fragment?{...c,...l,ref:n}:{},{children:d}=e,f=te.useMemo(()=>zt(d)?d.get():d,[d]);return te.createElement(t,{...u,children:f})}function jR({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:YR(n,i,r,t),renderState:e()}}function YR(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=yc(s[f]);let{initial:o,animate:a}=t;const l=Fu(t),c=LE(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Uu(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const v=zm(t,f[p]);if(v){const{transitionEnd:y,transition:m,...h}=v;for(const g in h){let _=h[g];if(Array.isArray(_)){const S=u?_.length-1:0;_=_[S]}_!==null&&(r[g]=_)}for(const g in y)r[g]=y[g]}}}return r}const uM=t=>(e,n)=>{const i=te.useContext(Ou),r=te.useContext(Nu),s=()=>jR(t,e,i,r);return n?s():er(s)},$R=uM({scrapeMotionValuesFromProps:Zm,createRenderState:Qm}),qR=uM({scrapeMotionValuesFromProps:XE,createRenderState:cM}),KR=Symbol.for("motionComponentSymbol");function ZR(t,e,n){const i=te.useRef(n);te.useInsertionEffect(()=>{i.current=n});const r=te.useRef(null);return te.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s));const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const fM=te.createContext({});function Vs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function QR(t,e,n,i,r,s){var _,S;const{visualElement:o}=te.useContext(Ou),a=te.useContext(sM),l=te.useContext(Nu),c=te.useContext(Qa),u=c.reducedMotion,d=c.skipAnimations,f=te.useRef(null),p=te.useRef(!1);i=i||a.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:s}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const v=f.current,y=te.useContext(fM);v&&!v.projection&&r&&(v.type==="html"||v.type==="svg")&&JR(f.current,n,r,y);const m=te.useRef(!1);te.useInsertionEffect(()=>{v&&m.current&&v.update(n,l)});const h=n[vE],g=te.useRef(!!h&&typeof window<"u"&&!((_=window.MotionHandoffIsComplete)!=null&&_.call(window,h))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,h)));return $a(()=>{p.current=!0,v&&(m.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),g.current&&v.animationState&&v.animationState.animateChanges())}),te.useEffect(()=>{v&&(!g.current&&v.animationState&&v.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var w;(w=window.MotionHandoffMarkAsComplete)==null||w.call(window,h)}),g.current=!1),v.enteringChildren=void 0)}),v}function JR(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:dM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Vs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function dM(t){if(t)return t.options.allowProjection!==!1?t.projection:dM(t.parent)}function Rf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&IR(i);const s=n?n==="svg":Jm(t),o=s?qR:$R;function a(c,u){let d;const f={...te.useContext(Qa),...c,layoutId:eP(c)},{isStatic:p}=f,v=BR(c),y=o(c,p);if(!p&&typeof window<"u"){tP();const m=nP(f);d=m.MeasureLayout,v.visualElement=QR(t,y,f,r,m.ProjectionNode,s)}return Yi.jsxs(Ou.Provider,{value:v,children:[d&&v.visualElement?Yi.jsx(d,{visualElement:v.visualElement,...f}):null,XR(t,c,ZR(y,v.visualElement,u),y,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=te.forwardRef(a);return l[KR]=t,l}function eP({layoutId:t}){const e=te.useContext(Mm).id;return e&&t!==void 0?e+"-"+t:t}function tP(t,e){te.useContext(sM).strict}function nP(t){const e=oM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function iP(t,e){if(typeof Proxy>"u")return Rf;const n=new Map,i=(s,o)=>Rf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Rf(o,void 0,t,e)),n.get(o))})}const rP=(t,e)=>e.isSVG??Jm(t)?new Nb(e):new Cb(e,{allowProjection:t!==te.Fragment});class sP extends zr{constructor(e){super(e),e.animationState||(e.animationState=kb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Uu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let oP=0;class aP extends zr{constructor(){super(...arguments),this.id=oP++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=us(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...d}=l;for(const f in d)(s=this.node.getValue(f))==null||s.jump(d[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const lP={animation:{Feature:sP},exit:{Feature:aP}};function Ja(t){return{point:{x:t.pageX,y:t.pageY}}}const cP=t=>e=>jm(e)&&t(e,Ja(e));function _a(t,e,n,i){return Va(t,e,cP(n),i)}const hM=({current:t})=>t?t.ownerDocument.defaultView:null,Vv=(t,e)=>Math.abs(t-e);function uP(t,e){const n=Vv(t.x,e.x),i=Vv(t.y,e.y);return Math.sqrt(n**2+i**2)}const zv=new Set(["auto","scroll"]);class pM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Al(this.lastRawMoveEventInfo,this.transformPagePoint));const p=Pf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,y=uP(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!y)return;const{point:m}=p,{timestamp:h}=Xt;this.history.push({...m,timestamp:h});const{onStart:g,onMove:_}=this.handlers;v||(g&&g(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,p)},this.handlePointerMove=(p,v)=>{this.lastMoveEvent=p,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=Al(v,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(p,v)=>{this.end();const{onEnd:y,onSessionEnd:m,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Pf(p.type==="pointercancel"?this.lastMoveEventInfo:Al(v,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,g),m&&m(p,g)},!jm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=Ja(e),c=Al(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=Xt;this.history=[{...u,timestamp:d}];const{onSessionStart:f}=n;f&&f(e,Pf(c,this.history)),this.removeListeners=qa(_a(this.contextWindow,"pointermove",this.handlePointerMove),_a(this.contextWindow,"pointerup",this.handlePointerUp),_a(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(zv.has(i.overflowX)||zv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),qe.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qn(this.updatePoint)}}function Al(t,e){return e?{point:e(t.point)}:t}function Hv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Pf({point:t},e){return{point:t,delta:Hv(t,mM(e)),offset:Hv(t,fP(e)),velocity:dP(e,.1)}}function fP(t){return t[0]}function mM(t){return t[t.length-1]}function dP(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=mM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Dn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Dn(e)*2&&(i=t[1]);const s=Wn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function hP(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?mt(n,t,i.max):Math.min(t,n)),t}function Gv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function pP(t,{top:e,left:n,bottom:i,right:r}){return{x:Gv(t.x,n,r),y:Gv(t.y,e,i)}}function Wv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function mP(t,e){return{x:Wv(t.x,e.x),y:Wv(t.y,e.y)}}function gP(t,e){let n=.5;const i=un(t),r=un(e);return r>i?n=_o(e.min,e.max-i,t.min):i>r&&(n=_o(t.min,t.max-r,e.min)),pi(0,1,n)}function vP(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Lh=.35;function _P(t=Lh){return t===!1?t=0:t===!0&&(t=Lh),{x:Xv(t,"left","right"),y:Xv(t,"top","bottom")}}function Xv(t,e,n){return{min:jv(t,e),max:jv(t,n)}}function jv(t,e){return typeof t=="number"?t:t[e]||0}const xP=new WeakMap;class yP{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=kt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(Ja(d).point),this.stopAnimation()},o=(d,f)=>{const{drag:p,dragPropagation:v,onDragStart:y}=this.getProps();if(p&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=WC(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Si(h=>{let g=this.getAxisMotionValue(h).get()||0;if(Ri.test(g)){const{projection:_}=this.visualElement;if(_&&_.layout){const S=_.layout.layoutBox[h];S&&(g=un(S)*(parseFloat(g)/100))}}this.originPoint[h]=g}),y&&qe.update(()=>y(d,f),!1,!0),Eh(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:y,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=f;if(v&&this.currentDirection===null){this.currentDirection=EP(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,h),this.updateAxis("y",f.point,h),this.visualElement.render(),m&&qe.update(()=>m(d,f),!1,!0)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new pM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:hM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&qe.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Cl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=hP(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Vs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=pP(i.layoutBox,e):this.constraints=!1,this.elastic=_P(n),r!==this.constraints&&!Vs(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Si(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=vP(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Vs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Sb(i,r.root,this.visualElement.getTransformPagePoint());let o=mP(r.layout.layoutBox,s);if(n){const a=n(_b(o));this.hasMutatedConstraints=!!a,a&&(o=FE(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Si(u=>{if(!Cl(u,n,this.currentDirection))return;let d=l&&l[u]||{};(o===!0||o===u)&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Eh(this.visualElement,e),i.start(Vm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Si(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Si(n=>{const{drag:i}=this.getProps();if(!Cl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-mt(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Vs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Si(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=gP({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Si(o=>{if(!Cl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(mt(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;xP.set(this.visualElement,this);const e=this.visualElement.current,n=_a(e,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps(),f=c.target,p=f!==e&&KC(f);u&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Vs(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=SP(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),qe.read(r);const a=Va(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Si(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Lh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Yv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function SP(t,e,n){const i=Ah(t,Yv(n)),r=Ah(e,Yv(n));return()=>{i(),r()}}function Cl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function EP(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class MP extends zr{constructor(e){super(e),this.removeGroupControls=En,this.removeListeners=En,this.controls=new yP(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||En}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Df=t=>(e,n)=>{t&&qe.update(()=>t(e,n),!1,!0)};class TP extends zr{constructor(){super(...arguments),this.removePointerDownListener=En}onPointerDown(e){this.session=new pM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Df(e),onStart:Df(n),onMove:Df(i),onEnd:(s,o)=>{delete this.session,r&&qe.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=_a(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Lf=!1;class wP extends te.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Lf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Sc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Lf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||qe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Xm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Lf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function gM(t){const[e,n]=rM(),i=te.useContext(Mm);return Yi.jsx(wP,{...t,layoutGroup:i,switchLayoutGroup:te.useContext(fM),isPresent:e,safeToRemove:n})}const AP={pan:{Feature:TP},drag:{Feature:MP,ProjectionNode:iM,MeasureLayout:gM}};function $v(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&qe.postRender(()=>s(e,Ja(e)))}class CP extends zr{mount(){const{current:e}=this.node;e&&(this.unmount=jC(e,(n,i)=>($v(this.node,i,"Start"),r=>$v(this.node,r,"End"))))}unmount(){}}class bP extends zr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qa(Va(this.node.current,"focus",()=>this.onFocus()),Va(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function qv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&qe.postRender(()=>s(e,Ja(e)))}class RP extends zr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=QC(e,(r,s)=>(qv(this.node,s,"Start"),(o,{success:a})=>qv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Nh=new WeakMap,Nf=new WeakMap,PP=t=>{const e=Nh.get(t.target);e&&e(t)},DP=t=>{t.forEach(PP)};function LP({root:t,...e}){const n=t||document;Nf.has(n)||Nf.set(n,{});const i=Nf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(DP,{root:t,...e})),i[r]}function NP(t,e,n){const i=LP(e);return Nh.set(t,n),i.observe(t),()=>{Nh.delete(t),i.unobserve(t)}}const IP={some:0,all:1};class UP extends zr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:IP[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};this.stopObserver=NP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(FP(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function FP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const OP={inView:{Feature:UP},tap:{Feature:RP},focus:{Feature:bP},hover:{Feature:CP}},kP={layout:{ProjectionNode:iM,MeasureLayout:gM}},BP={...lP,...OP,...AP,...kP},et=iP(BP,rP);function ou(t){return typeof window>"u"?!1:t?oE():km()}const VP=50,Kv=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),zP=()=>({time:0,x:Kv(),y:Kv()}),HP={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Zv(t,e,n,i){const r=n[e],{length:s,position:o}=HP[e],a=r.current,l=n.time;r.current=Math.abs(t[`scroll${o}`]),r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=_o(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>VP?0:Am(r.current-a,c)}function GP(t,e,n){Zv(t,"x",e,n),Zv(t,"y",e,n),e.time=n}function WP(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(ga(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Ih={start:0,center:.5,end:1};function Qv(t,e,n=0){let i=0;if(t in Ih&&(t=Ih[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const XP=[0,0];function jP(t,e,n,i){let r=Array.isArray(t)?t:XP,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Ih[t]?t:"0"]),s=Qv(r[0],n,i),o=Qv(r[1],e),s-o}const ta={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},YP={x:0,y:0};function $P(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function qP(t,e,n){const{offset:i=ta.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?WP(r,t):YP,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:$P(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const d=i.length;for(let f=0;f<d;f++){const p=jP(i[f],c[o],l[o],a[s]);!u&&p!==e[s].interpolatorOffsets[f]&&(u=!0),e[s].offset[f]=p}u&&(e[s].interpolate=Im(e[s].offset,tE(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=pi(0,1,e[s].interpolate(e[s].current))}function KP(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function ZP(t,e,n,i={}){return{measure:r=>{KP(t,i.target,n),GP(t,n,r),(i.offset||i.target)&&qP(t,n,i)},notify:()=>e(n)}}const ws=new WeakMap,Jv=new WeakMap,If=new WeakMap,e_=new WeakMap,bl=new WeakMap,t_=t=>t===document.scrollingElement?window:t;function vM(t,{container:e=document.scrollingElement,trackContentSize:n=!1,...i}={}){if(!e)return En;let r=If.get(e);r||(r=new Set,If.set(e,r));const s=zP(),o=ZP(e,t,s,i);if(r.add(o),!ws.has(e)){const l=()=>{for(const f of r)f.measure(Xt.timestamp);qe.preUpdate(c)},c=()=>{for(const f of r)f.notify()},u=()=>qe.read(l);ws.set(e,u);const d=t_(e);window.addEventListener("resize",u),e!==document.documentElement&&Jv.set(e,Ah(e,u)),d.addEventListener("scroll",u),u()}if(n&&!bl.has(e)){const l=ws.get(e),c={width:e.scrollWidth,height:e.scrollHeight};e_.set(e,c);const u=()=>{const f=e.scrollWidth,p=e.scrollHeight;(c.width!==f||c.height!==p)&&(l(),c.width=f,c.height=p)},d=qe.read(u,!0);bl.set(e,d)}const a=ws.get(e);return qe.read(a,!1,!0),()=>{var d;qn(a);const l=If.get(e);if(!l||(l.delete(o),l.size))return;const c=ws.get(e);ws.delete(e),c&&(t_(e).removeEventListener("scroll",c),(d=Jv.get(e))==null||d(),window.removeEventListener("resize",c));const u=bl.get(e);u&&(qn(u),bl.delete(e)),e_.delete(e)}}const QP=[[ta.Enter,"entry"],[ta.Exit,"exit"],[ta.Any,"cover"],[ta.All,"contain"]],n_={start:0,end:1};function JP(t){const e=t.trim().split(/\s+/);if(e.length!==2)return;const n=n_[e[0]],i=n_[e[1]];if(!(n===void 0||i===void 0))return[n,i]}function e2(t){if(t.length!==2)return;const e=[];for(const n of t)if(Array.isArray(n))e.push(n);else if(typeof n=="string"){const i=JP(n);if(!i)return;e.push(i)}else return;return e}function t2(t,e){const n=e2(t);if(!n)return!1;for(let i=0;i<2;i++){const r=n[i],s=e[i];if(r[0]!==s[0]||r[1]!==s[1])return!1}return!0}function eg(t){if(!t)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,n]of QP)if(t2(t,e))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}const i_=new Map;function r_(t){const e={value:0},n=vM(i=>{e.value=i[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function _M({source:t,container:e,...n}){const{axis:i}=n;t&&(e=t);let r=i_.get(e);r||(r=new Map,i_.set(e,r));const s=n.target??"self";let o=r.get(s);o||(o={},r.set(s,o));const a=i+(n.offset??[]).join(",");return o[a]||(n.target&&ou(n.target)?eg(n.offset)?o[a]=new ViewTimeline({subject:n.target,axis:i}):o[a]=r_({container:e,...n}):ou()?o[a]=new ScrollTimeline({source:e,axis:i}):o[a]=r_({container:e,...n})),o[a]}function n2(t,e){const n=_M(e),i=e.target?eg(e.offset):void 0,r=e.target?ou(e.target)&&!!i:ou();return t.attachTimeline({timeline:r?n:void 0,...i&&r&&{rangeStart:i.rangeStart,rangeEnd:i.rangeEnd},observe:s=>(s.pause(),DE(o=>{s.time=s.iterationDuration*o},n))})}function i2(t){return t.length===2}function r2(t,e){return i2(t)?vM(n=>{t(n[e.axis].progress,n)},e):DE(t,_M(e))}function xM(t,{axis:e="y",container:n=document.scrollingElement,...i}={}){if(!n)return En;const r={axis:e,container:n,...i};return typeof t=="function"?r2(t,r):n2(t,r)}const s2=()=>({scrollX:ai(0),scrollY:ai(0),scrollXProgress:ai(0),scrollYProgress:ai(0)}),Rl=t=>t?!t.current:!1;function s_(t,e,n,i){return{factory:r=>xM(r,{...e,axis:t,container:(n==null?void 0:n.current)||void 0,target:(i==null?void 0:i.current)||void 0}),times:[0,1],keyframes:[0,1],ease:r=>r,duration:1}}function o2(t,e){return typeof window>"u"?!1:t?oE()&&!!eg(e):km()}function au({container:t,target:e,...n}={}){const i=er(s2);o2(e,n.offset)&&(i.scrollXProgress.accelerate=s_("x",n,t,e),i.scrollYProgress.accelerate=s_("y",n,t,e));const r=te.useRef(null),s=te.useRef(!1),o=te.useCallback(()=>(r.current=xM((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[t,e,JSON.stringify(n.offset)]);return $a(()=>{if(s.current=!1,Rl(t)||Rl(e)){s.current=!0;return}else return o()},[o]),te.useEffect(()=>{if(s.current)return Fa(!Rl(t)),Fa(!Rl(e)),o()},[o]),i}function yM(t){const e=er(()=>ai(t)),{isStatic:n}=te.useContext(Qa);if(n){const[,i]=te.useState(t);te.useEffect(()=>e.on("change",i),[])}return e}function SM(t,e){const n=yM(e()),i=()=>n.set(e());return i(),$a(()=>{const r=()=>qe.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),qn(i)}}),n}function a2(t){ma.current=[],t();const e=SM(ma.current,t);return ma.current=void 0,e}function si(t,e,n,i){if(typeof t=="function")return a2(t);if(n!==void 0&&!Array.isArray(n)&&typeof e!="function")return l2(t,e,n,i);const o=typeof e=="function"?e:lb(e,n,i),a=Array.isArray(t)?o_(t,o):o_([t],([c])=>o(c)),l=Array.isArray(t)?void 0:t.accelerate;return l&&!l.isTransformed&&typeof e!="function"&&Array.isArray(n)&&(i==null?void 0:i.clamp)!==!1&&(a.accelerate={...l,times:e,keyframes:n,isTransformed:!0}),a}function o_(t,e){const n=er(()=>[]);return SM(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function l2(t,e,n,i){const r=er(()=>Object.keys(n)),s=er(()=>({}));for(const o of r)s[o]=si(t,e,n[o],i);return s}function c2(t,e={}){const{isStatic:n}=te.useContext(Qa),i=()=>zt(t)?t.get():t;if(n)return si(i);const r=yM(i());return te.useInsertionEffect(()=>cb(r,t,e),[r,JSON.stringify(e)]),r}function a_(t,e={}){return c2(t,{type:"spring",...e})}function u2(t){t.values.forEach(e=>e.stop())}function Uh(t,e){[...e].reverse().forEach(i=>{const r=t.getVariant(i);r&&Hm(t,r),t.variantChildren&&t.variantChildren.forEach(s=>{Uh(s,e)})})}function f2(t,e){if(Array.isArray(e))return Uh(t,e);if(typeof e=="string")return Uh(t,[e]);Hm(t,e)}function d2(){const t=new Set,e={subscribe(n){return t.add(n),()=>void t.delete(n)},start(n,i){const r=[];return t.forEach(s=>{r.push(yE(s,n,{transitionOverride:i}))}),Promise.all(r)},set(n){return t.forEach(i=>{f2(i,n)})},stop(){t.forEach(n=>{u2(n)})},mount(){return()=>{e.stop()}}};return e}function h2(){const t=er(d2);return $a(t.mount,[]),t}const p2=h2;function m2(){return te.useEffect(()=>{const t=document.getElementById("hero-canvas"),e=t.getContext("2d");let n=[],i={x:0,y:0};const r=()=>{t.width=window.innerWidth,t.height=window.innerHeight};r(),window.addEventListener("resize",r),window.addEventListener("mousemove",a=>{i.x=a.clientX,i.y=a.clientY});for(let a=0;a<90;a++)n.push({x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.15,vy:(Math.random()-.5)*.15});function s(){e.clearRect(0,0,t.width,t.height),n.forEach(a=>{let l=i.x-a.x,c=i.y-a.y;Math.sqrt(l*l+c*c)<180&&(a.x-=l/60,a.y-=c/60),a.x+=a.vx,a.y+=a.vy,(a.x<0||a.x>t.width)&&(a.vx*=-1),(a.y<0||a.y>t.height)&&(a.vy*=-1),e.beginPath(),e.arc(a.x,a.y,1.2,0,Math.PI*2),e.fillStyle="rgba(249,115,22,0.6)",e.fill()}),requestAnimationFrame(s)}s();const o=a=>{const l=document.querySelector(".hero-content");if(!l)return;let c=(window.innerWidth/2-a.clientX)/60,u=(window.innerHeight/2-a.clientY)/60;l.style.transform=`translate3d(${c}px, ${u}px, 0)`};return window.addEventListener("mousemove",o),()=>{window.removeEventListener("resize",r),window.removeEventListener("mousemove",o)}},[]),R.createElement("section",{className:"hero",id:"home"},R.createElement("canvas",{id:"hero-canvas"}),R.createElement(et.div,{className:"hero-content",initial:{opacity:0,y:80},animate:{opacity:1,y:0}},R.createElement("p",{className:"hero-kicker"},"DIGITAL GROWTH STUDIO"),R.createElement("h1",{className:"hero-title"},"Results that speaks ",R.createElement("br",null),"for themselves"),R.createElement("p",{className:"hero-subtitle"},"Performance marketing. Branding. Systems that convert attention into revenue."),R.createElement("div",{className:"hero-buttons"},R.createElement("a",{href:"#contact",className:"btn-primary"},"Start Growth"),R.createElement("a",{href:"#portfolio",className:"btn-secondary"},"View Work"))))}const g2=[{number:"5+",label:"Years Experience"},{number:"50+",label:"Happy Clients"},{number:"500+",label:"Campaigns Delivered"},{number:"10M+",label:"Total Reach"}],v2={hidden:{},show:{transition:{staggerChildren:.15}}},_2=()=>{const{scrollYProgress:t}=au(),e=si(t,[0,1],[0,-80]);return R.createElement("section",{className:"relative bg-[#0b0b0b] text-white py-28 px-6 md:px-24 overflow-hidden"},R.createElement(et.div,{style:{y:e},className:"absolute inset-0 pointer-events-none"},R.createElement("div",{className:"absolute top-[-25%] left-[-15%] w-[650px] h-[650px] bg-orange-500 blur-[240px] opacity-10"}),R.createElement("div",{className:"absolute bottom-[-25%] right-[-15%] w-[600px] h-[600px] bg-blue-500 blur-[260px] opacity-10"})),R.createElement("div",{className:"relative max-w-5xl mx-auto text-center"},R.createElement(et.h2,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:1},className:"text-4xl md:text-5xl font-semibold tracking-tight"},"Experience That ",R.createElement("span",{className:"text-orange-500"},"Feels Proven")),R.createElement(et.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2,duration:.8},className:"text-gray-400 mt-5 max-w-xl mx-auto"},"Built through consistent execution, strategic thinking, and measurable results."),R.createElement(et.div,{variants:v2,initial:"hidden",whileInView:"show",viewport:{once:!0},className:`mt-16 flex flex-wrap md:flex-nowrap justify-center gap-16\r
          relative rounded-3xl px-10 py-12\r
          bg-gradient-to-br from-white/10 via-white/5 to-transparent\r
          border border-white/10 backdrop-blur-xl`},g2.map((n,i)=>R.createElement(et.div,{key:i,variants:n,whileHover:{y:-6,scale:1.05},transition:{type:"spring",stiffness:120,damping:12},className:"relative text-center group cursor-default"},R.createElement("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"},R.createElement("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 bg-orange-500 blur-3xl opacity-20"})),R.createElement("div",{className:`\r
  text-4xl md:text-5xl\r
  font-serif\r
  font-light\r
  italic\r
  text-orange-500\r
  tracking-wide\r
  drop-shadow-[0_0_18px_rgba(249,115,22,0.22)]\r
`},n.number),R.createElement("div",{className:"mt-2 text-[10px] tracking-[0.35em] uppercase text-gray-400 font-light"},n.label))))))},x2="/assets/1-CO8CNONR.png",y2="/assets/2-CeadrQJO.png",S2="/assets/3-Z2K5bNuj.png",E2="/assets/4-B7p9CDN6.png",M2="/assets/5-qAn9pZog.png",T2="/assets/6-CWn1RhQT.png",w2="/assets/7-za1Z5Ehh.png",A2="/assets/8-C5D8lmIK.png",C2="/assets/9-D8cypcDN.png",b2="/assets/10-uR8U1XVb.png",R2="/assets/11-BOCiC6Cw.png",P2="/assets/13-dyMSk9bb.png",D2="/assets/14-BrrtDrPQ.png",L2="/assets/15-BtEuovRp.png",N2="/assets/16-DL0UICcs.png",I2="/assets/19-D9D0KblU.png",U2="/assets/20-CrQvBi6Q.png",F2=[x2,y2,S2,E2,M2,T2,w2,A2,C2,b2,R2,P2,D2,L2,N2,I2,U2],Fh=18;function l_(){return[...F2].sort(()=>Math.random()-.5).slice(0,Fh)}const c_=[{x:0,y:60},{x:0,y:-60},{x:60,y:0},{x:-60,y:0}];function u_(){return c_[Math.floor(Math.random()*c_.length)]}function O2(){const[t,e]=te.useState(l_()),[n,i]=te.useState(0),[r,s]=te.useState(Array.from({length:Fh},()=>u_()));return te.useEffect(()=>{const o=setInterval(()=>{e(l_()),s(Array.from({length:Fh},()=>u_())),i(a=>a+1)},2500);return()=>clearInterval(o)},[]),R.createElement("section",{className:"clients-section"},R.createElement("div",{className:"container"},R.createElement("h2",{className:"title"},"Trusted By ",R.createElement("span",{className:"text-orange-500"},"Brands")),R.createElement("p",{className:"subtitle"},"Powering growth for modern brands"),R.createElement("div",{className:"grid"},t.map((o,a)=>R.createElement("div",{className:"card",key:a},R.createElement(LR,{mode:"wait"},R.createElement(et.img,{key:`${o}-${n}`,src:o,initial:{opacity:0,x:r[a].x,y:r[a].y,scale:1},animate:{opacity:1,x:0,y:0,scale:1},exit:{opacity:0,x:-r[a].x,y:-r[a].y,scale:1},transition:{duration:.7,ease:"easeInOut"}})))))))}const k2=[{title:"Performance Marketing",desc:"Growth campaigns engineered to increase traffic, leads, and measurable revenue.",type:"marketing"},{title:"Brand Identity",desc:"Luxury visual systems crafted to build trust, authority, and premium positioning.",type:"branding"},{title:"Web Experiences",desc:"Cinematic websites with smooth interactions and modern user experiences.",type:"web"},{title:"Content Creation",desc:"High-impact visual storytelling built for attention and engagement.",type:"content"}];function B2({type:t}){return t==="marketing"?R.createElement("div",{className:"relative w-28 h-28 mx-auto mb-10"},R.createElement("div",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-orange-500/20"}),R.createElement("div",{className:"absolute bottom-0 left-4 flex items-end gap-3"},R.createElement(et.div,{animate:{height:[20,55,20]},transition:{duration:2,repeat:1/0},className:"w-3 rounded-full bg-orange-700"}),R.createElement(et.div,{animate:{height:[35,80,35]},transition:{duration:2,repeat:1/0,delay:.2},className:"w-3 rounded-full bg-orange-500"}),R.createElement(et.div,{animate:{height:[50,105,50]},transition:{duration:2,repeat:1/0,delay:.4},className:"w-3 rounded-full bg-orange-300"})),R.createElement(et.div,{animate:{y:[0,-10,0],x:[0,5,0]},transition:{duration:2,repeat:1/0},className:"absolute top-2 right-2 text-orange-400 text-3xl"},"↗")):t==="branding"?R.createElement("div",{className:"relative w-28 h-28 mx-auto mb-10 flex items-center justify-center"},R.createElement(et.div,{animate:{rotate:360},transition:{duration:10,repeat:1/0,ease:"linear"},className:"absolute w-28 h-28 border border-orange-500/30 rounded-full"}),R.createElement(et.div,{animate:{rotate:-360},transition:{duration:6,repeat:1/0,ease:"linear"},className:"absolute w-20 h-20 border border-orange-300/40 rounded-full"}),R.createElement(et.div,{animate:{scale:[1,1.25,1],opacity:[.7,1,.7]},transition:{duration:2,repeat:1/0},className:"w-8 h-8 rounded-full bg-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.8)]"})):t==="web"?R.createElement("div",{className:"relative w-32 h-24 mx-auto mb-10"},R.createElement("div",{className:"absolute inset-0 rounded-2xl border border-orange-500/20 bg-black overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.15)]"},R.createElement("div",{className:"p-4 space-y-2"},R.createElement(et.div,{animate:{width:["20%","80%","20%"]},transition:{duration:2,repeat:1/0},className:"h-2 rounded-full bg-orange-500"}),R.createElement(et.div,{animate:{width:["70%","30%","70%"]},transition:{duration:2,repeat:1/0,delay:.3},className:"h-2 rounded-full bg-orange-300"}),R.createElement(et.div,{animate:{width:["40%","90%","40%"]},transition:{duration:2,repeat:1/0,delay:.5},className:"h-2 rounded-full bg-orange-400"}))),R.createElement("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-2 bg-orange-500/30 rounded-full"})):t==="content"?R.createElement("div",{className:"relative w-28 h-28 mx-auto mb-10 flex items-center justify-center"},R.createElement(et.div,{animate:{scale:[1,1.4,1],opacity:[.3,0,.3]},transition:{duration:2,repeat:1/0},className:"absolute w-24 h-24 rounded-full border border-orange-500/30"}),R.createElement(et.div,{animate:{y:[0,-6,0]},transition:{duration:2,repeat:1/0},className:"w-20 h-20 rounded-[28px] bg-orange-500/10 border border-orange-500/20 flex items-center justify-center backdrop-blur-xl"},R.createElement(et.div,{animate:{x:[0,5,0]},transition:{duration:1.5,repeat:1/0},className:"text-4xl text-orange-400"},"▶"))):null}function V2(){return R.createElement("section",{id:"service",className:"relative bg-[#050505] text-white py-32 px-6 overflow-hidden"},R.createElement("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[200px] rounded-full"}),R.createElement("div",{className:"absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]"}),R.createElement("div",{className:"relative z-10 max-w-7xl mx-auto"},R.createElement(et.div,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},className:"text-center mb-24"},R.createElement("div",{className:"inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-7"},R.createElement(et.div,{animate:{scale:[1,1.4,1],opacity:[1,.4,1]},transition:{duration:2,repeat:1/0},className:"w-2 h-2 rounded-full bg-orange-500"}),R.createElement("span",{className:"uppercase tracking-[0.3em] text-xs text-orange-300"},"Premium Digital Solutions")),R.createElement("h2",{className:"text-5xl md:text-7xl font-semibold tracking-tight leading-tight"},"Crafted For"," ",R.createElement("span",{className:"text-orange-500"},"Modern Brands")),R.createElement("p",{className:"max-w-3xl mx-auto mt-8 text-white/50 text-lg leading-relaxed"},"We design premium digital experiences that combine creativity, strategy, and technology to elevate ambitious brands.")),R.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"},k2.map((t,e)=>R.createElement(et.div,{key:e,initial:{opacity:0,y:70},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:e*.12},viewport:{once:!0},whileHover:{y:-14},className:"group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 min-h-[430px] transition-all duration-500 text-center"},R.createElement("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent"}),R.createElement(B2,{type:t.type}),R.createElement("div",{className:"relative z-10"},R.createElement("h3",{className:"text-2xl font-semibold mb-5 group-hover:text-orange-400 transition duration-300"},t.title),R.createElement("p",{className:"text-white/55 leading-relaxed text-[15px]"},t.desc)),R.createElement("div",{className:"absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-700"}))))))}const z2="/assets/f1-CwKJRpH_.png",H2="/assets/f2-eTZ5b6TY.png",G2="/assets/f3-fk8saOBv.jpeg";function W2(){const t=[{name:"Meet Ramani",role:"Founder & CTO",img:z2},{name:"Deep Ramani",role:"Founder & CEO",img:H2},{name:"Ravi Savaliya",role:"Founder & Clint Coordinator",img:G2}],[e,n]=te.useState(0);return te.useEffect(()=>{const i=setInterval(()=>{n(r=>(r+1)%t.length)},3e3);return()=>clearInterval(i)},[]),R.createElement("section",{className:"about-section",id:"about"},R.createElement("div",{className:"about-container"},R.createElement("div",{className:"about-content"},R.createElement("span",{className:"about-badge"},"Award Winning Digital Agency"),R.createElement("h2",null,"Meet Our ",R.createElement("span",null,"Founding Partners")),R.createElement("p",null,"A powerful team of visionaries building premium digital experiences with strategy, design, and engineering excellence."),R.createElement("div",{className:"founder-list"},t.map((i,r)=>R.createElement("div",{key:r,className:`founder-tab ${r===e?"active":""}`,onClick:()=>n(r)},i.name)))),R.createElement("div",{className:"founder-showcase"},R.createElement("div",{className:"founder-image-box"},R.createElement("img",{src:t[e].img,alt:"founder"})),R.createElement("div",{className:"founder-info"},R.createElement("h3",null,t[e].name),R.createElement("p",null,t[e].role)))))}const X2="/assets/1-CXfr1J6L.jpeg",j2="/assets/6-DfYOhhUz.jpg",Y2="/assets/1-C-jy6rvy.jpg",f_="/assets/2-0JgiFxI8.jpeg",$2="/assets/6-DQKTGzcA.jpg",q2="/assets/3-BSe0Di5T.jpg",K2="/assets/7-DYWX9jVk.jpeg",Z2="/assets/8-B0JhKqad.jpeg",Q2="/assets/9-B01x90R8.jpeg",J2="/assets/1-BHIchSc0.jpeg",e3="/assets/2-Cp4j03fj.jpeg",t3="/assets/1-B9j_kUw-.jpg",n3="/assets/2-DpZSIi2A.jpg",i3="/assets/3-BjmrVtea.jpg",r3="/assets/9-k94TywiL.jpeg",s3="/assets/1-xXW6N9VB.jpg",o3="/assets/4--nDfj7QO.jpg",d_="/assets/3-DogFvsPw.jpeg",Uf=t=>[...t,...t,...t,...t,...t];function a3(){const t=te.useRef(null),{scrollYProgress:e}=au({target:t,offset:["start end","end start"]}),n=si(e,[0,1],["0%","-40%"]),i=si(e,[0,1],["-40%","0%"]),r=si(e,[0,1],["0%","-35%"]),s=[X2,f_,d_,K2,J2,i3,s3],o=[$2,j2,Z2,t3,r3,e3],a=[Y2,d_,Q2,f_,n3,q2,o3];return R.createElement("section",{className:"pf-section",ref:t,id:"portfolio"},R.createElement("div",{className:"pf-header"},R.createElement("h2",{className:"pf-title"},"Selected ",R.createElement("span",null,"Work"))),R.createElement("div",{className:"pf-wrapper"},R.createElement(et.div,{className:"pf-row",style:{x:n}},Uf(s).map((l,c)=>R.createElement("div",{className:"pf-card",key:c},R.createElement("img",{src:l,alt:""})))),R.createElement(et.div,{className:"pf-row",style:{x:i}},Uf(o).map((l,c)=>R.createElement("div",{className:"pf-card",key:c},R.createElement("img",{src:l,alt:""})))),R.createElement(et.div,{className:"pf-row",style:{x:r}},Uf(a).map((l,c)=>R.createElement("div",{className:"pf-card",key:c},R.createElement("img",{src:l,alt:""}))))))}const l3=[{title:"Research",desc:"We deeply analyze your business, audience, and competitors."},{title:"Strategy & Design",desc:"We craft modern UI/UX systems with premium direction."},{title:"Development",desc:"We build fast, scalable, high-performance products."},{title:"Launch & Scale",desc:"We deploy and optimize for maximum growth."}];function c3(){const t=te.useRef(null),{scrollYProgress:e}=au({target:t,offset:["start 0.2","end 0.9"]}),n=a_(e,{stiffness:120,damping:30,mass:.6}),i=si(n,[0,1],["0%","100%"]);return R.createElement("section",{ref:t,className:"relative py-32 px-6 text-white bg-transparent overflow-hidden",id:"process"},R.createElement("div",{className:"absolute inset-0 pointer-events-none"},R.createElement("div",{className:"absolute top-[-180px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-orange-500/20 blur-[160px] rounded-full"}),R.createElement("div",{className:"absolute bottom-[-180px] right-0 w-[520px] h-[520px] bg-orange-600/20 blur-[160px] rounded-full"})),R.createElement("div",{className:"text-center mb-24 relative z-10"},R.createElement("h2",{className:"text-5xl md:text-6xl font-bold"},"Our"," ",R.createElement("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300"},"Process")),R.createElement("p",{className:"text-gray-400 mt-4"},"Fully transparent section with scroll-based premium flow")),R.createElement("div",{className:"relative max-w-5xl mx-auto"},R.createElement("div",{className:"absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2"}),R.createElement(et.div,{style:{height:i},className:"absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-orange-400 via-orange-500 to-yellow-400 shadow-[0_0_25px_rgba(255,140,0,0.6)]"}),R.createElement("div",{className:"space-y-28 relative z-10"},l3.map((r,s)=>{const o=te.useRef(null),{scrollYProgress:a}=au({target:o,offset:["0.8 1","0.2 0.5"]}),l=a_(a,{stiffness:120,damping:25}),c=si(l,[0,1],[0,1]),u=s%2===0?si(l,[0,1],[-80,0]):si(l,[0,1],[80,0]),d=si(l,[0,1],[.9,1]);return R.createElement(et.div,{key:s,ref:o,style:{opacity:c,x:u,scale:d},className:`relative flex items-center ${s%2===0?"justify-start":"justify-end"}`},R.createElement("div",{className:"absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg shadow-orange-500/40"}),R.createElement("div",{className:"w-[45%]"},R.createElement("div",{className:"p-6 rounded-2xl border border-white/10 bg-black/10 shadow-xl hover:scale-[1.02] transition-transform duration-300"},R.createElement("h3",{className:"text-xl font-semibold mb-2"},String(s+1).padStart(2,"0"),". ",r.title),R.createElement("p",{className:"text-gray-400 text-sm leading-relaxed"},r.desc))))}))))}const h_=[{text:"The website transformation completely upgraded our digital presence.",name:"Akshay Patra Dreams",role:"Real Estate Brand"},{text:"Our project presentation now feels extremely premium and trustworthy.",name:"Atmeshwar Developers",role:"Luxury Developer"},{text:"We now look like a top-tier real estate company online.",name:"Cygni Realty",role:"Realty Brand"},{text:"Our leads improved immediately after redesign.",name:"Ganesh Developers",role:"Construction Firm"},{text:"Our brand now feels global and premium.",name:"Jatki Group",role:"Infrastructure Group"}];function u3(){const t=p2(),e=te.useRef(!1),n=[...h_,...h_];te.useEffect(()=>{let s;const o=()=>{s=t.start({x:["0%","-50%"],transition:{duration:18,ease:"linear",repeat:1/0}})};return e.current||o(),()=>s},[t]);const i=()=>{e.current=!0,t.stop()},r=()=>{e.current=!1,t.start({x:["0%","-50%"],transition:{duration:18,ease:"linear",repeat:1/0}})};return R.createElement("section",{className:"relative py-24 bg-black overflow-hidden text-white"},R.createElement("div",{className:"absolute inset-0"},R.createElement("div",{className:"absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[160px] rounded-full"})),R.createElement("div",{className:"text-center mb-14 relative z-10"},R.createElement("h2",{className:"text-4xl font-bold"},"Client ",R.createElement("span",{className:"text-orange-500"},"Reviews"))),R.createElement("div",{className:"relative w-full overflow-hidden px-6 md:px-16 lg:px-24",onMouseEnter:i,onMouseLeave:r},R.createElement(et.div,{className:"flex gap-6 w-max",animate:t},n.map((s,o)=>R.createElement("div",{key:o,className:`w-[320px] h-[250px] p-6 rounded-2xl\r
              bg-white/5 border border-white/10 backdrop-blur-xl\r
              shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden`},R.createElement("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10"}),R.createElement("div",{className:"relative z-10"},R.createElement("div",{className:"text-orange-500 text-4xl"},"“"),R.createElement("p",{className:"text-gray-200 text-sm mt-3 leading-relaxed"},s.text),R.createElement("div",{className:"mt-6 border-t border-white/10 pt-3"},R.createElement("h4",{className:"font-semibold text-white"},s.name),R.createElement("span",{className:"text-orange-400 text-xs"},s.role))))))))}function f3(){return R.createElement("section",{className:"cta",id:"contact"},R.createElement("div",{className:"cta-container"},R.createElement(et.div,{className:"cta-left",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0}},R.createElement("h2",null,"Let’s Work ",R.createElement("span",null,"Together")),R.createElement("p",null,"Ready to transform your digital presence? Let’s build something exceptional."),R.createElement("div",{className:"cta-info"},R.createElement("div",{className:"info"},R.createElement("span",{className:"icon"},"📍"),R.createElement("span",null,"Surat, India")),R.createElement("div",{className:"info"},R.createElement("span",{className:"icon"},"✉"),R.createElement("span",null,"digipartner08@gmail.com")),R.createElement("div",{className:"info"},R.createElement("span",{className:"icon"},"📞"),R.createElement("span",null,"+91 97372 84141")))),R.createElement(et.form,{className:"cta-form",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0}},R.createElement("div",{className:"row"},R.createElement("div",{className:"field"},R.createElement("input",{type:"text",required:!0}),R.createElement("label",null,"First Name")),R.createElement("div",{className:"field"},R.createElement("input",{type:"text",required:!0}),R.createElement("label",null,"Last Name"))),R.createElement("div",{className:"field"},R.createElement("input",{type:"email",required:!0}),R.createElement("label",null,"Email Address")),R.createElement("div",{className:"field"},R.createElement("input",{type:"text",required:!0}),R.createElement("label",null,"Mobile Number")),R.createElement("div",{className:"field"},R.createElement("input",{type:"text",required:!0}),R.createElement("label",null,"Service you're interested in")),R.createElement("div",{className:"field"},R.createElement("textarea",{rows:"4",required:!0}),R.createElement("label",null,"Project Details")),R.createElement("button",{className:"cta-btn"},"Send Message →"))))}function d3(){const t=e=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth",block:"start"})};return R.createElement("footer",{className:"footer"},R.createElement("div",{className:"footer-container"},R.createElement("div",{className:"footer-col brand"},R.createElement("h2",{className:"logo"},"DIGI PARTNER"),R.createElement("p",null,"Elevating brands through strategic digital marketing, superior design, and cutting-edge technology.")),R.createElement("div",{className:"footer-col"},R.createElement("h3",null,"Quick Links"),R.createElement("ul",null,R.createElement("li",{onClick:()=>t("home")},"Home"),R.createElement("li",{onClick:()=>t("service")},"Services"),R.createElement("li",{onClick:()=>t("portfolio")},"Portfolio"),R.createElement("li",{onClick:()=>t("about")},"About Us"),R.createElement("li",{onClick:()=>t("process")},"Process"))),R.createElement("div",{className:"footer-col"},R.createElement("h3",null,"Services"),R.createElement("ul",null,R.createElement("li",{onClick:()=>t("service")},"Digital Marketing"),R.createElement("li",{onClick:()=>t("service")},"UI/UX & Design"),R.createElement("li",{onClick:()=>t("service")},"Web Development"),R.createElement("li",{onClick:()=>t("service")},"Content Creation"))),R.createElement("div",{className:"footer-col contact"},R.createElement("h3",null,"Contact"),R.createElement("p",null,"📍 912, C2 Pragti IT Park",R.createElement("br",null),"Mota Varachha, Surat"),R.createElement("p",null,"📧 digipartner08@gmail.com"),R.createElement("p",null,"📞 +91 97372 84141"),R.createElement("button",{onClick:()=>t("contact"),className:"footer-btn"},"Get in Touch"))))}function h3(){return te.useEffect(()=>{const t=document.createElement("div"),e=document.createElement("div");t.className="cursor-dot",e.className="cursor-ring",document.body.appendChild(t),document.body.appendChild(e);let n=0,i=0,r=0,s=0;window.addEventListener("mousemove",a=>{n=a.clientX,i=a.clientY,t.style.left=n+"px",t.style.top=i+"px"});function o(){r+=(n-r)*.12,s+=(i-s)*.12,e.style.left=r+"px",e.style.top=s+"px",requestAnimationFrame(o)}o()},[]),null}function p3(){te.useEffect(()=>{document.querySelectorAll(".magnetic").forEach(e=>{e.addEventListener("mousemove",n=>{const i=e.getBoundingClientRect(),r=n.clientX-i.left-i.width/2,s=n.clientY-i.top-i.height/2;e.style.transform=`translate(${r*.3}px, ${s*.3}px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="translate(0,0)"})})},[])}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tg="184",m3=0,p_=1,g3=2,Ec=1,v3=2,na=3,Or=0,Mn=1,Hi=2,$i=0,lo=1,m_=2,g_=3,v_=4,_3=5,Qr=100,x3=101,y3=102,S3=103,E3=104,M3=200,T3=201,w3=202,A3=203,Oh=204,kh=205,C3=206,b3=207,R3=208,P3=209,D3=210,L3=211,N3=212,I3=213,U3=214,Bh=0,Vh=1,zh=2,yo=3,Hh=4,Gh=5,Wh=6,Xh=7,EM=0,F3=1,O3=2,Pi=0,MM=1,TM=2,wM=3,AM=4,CM=5,bM=6,RM=7,PM=300,gs=301,So=302,Ff=303,Of=304,ku=306,jh=1e3,Xi=1001,Yh=1002,qt=1003,k3=1004,Pl=1005,sn=1006,kf=1007,ss=1008,Hn=1009,DM=1010,LM=1011,za=1012,ng=1013,Li=1014,wi=1015,tr=1016,ig=1017,rg=1018,Ha=1020,NM=35902,IM=35899,UM=1021,FM=1022,li=1023,nr=1026,os=1027,OM=1028,sg=1029,vs=1030,og=1031,ag=1033,Mc=33776,Tc=33777,wc=33778,Ac=33779,$h=35840,qh=35841,Kh=35842,Zh=35843,Qh=36196,Jh=37492,ep=37496,tp=37488,np=37489,lu=37490,ip=37491,rp=37808,sp=37809,op=37810,ap=37811,lp=37812,cp=37813,up=37814,fp=37815,dp=37816,hp=37817,pp=37818,mp=37819,gp=37820,vp=37821,_p=36492,xp=36494,yp=36495,Sp=36283,Ep=36284,cu=36285,Mp=36286,B3=3200,__=0,V3=1,Sr="",kn="srgb",uu="srgb-linear",fu="linear",nt="srgb",As=7680,x_=519,z3=512,H3=513,G3=514,lg=515,W3=516,X3=517,cg=518,j3=519,y_=35044,S_="300 es",Ai=2e3,du=2001;function Y3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $3(){const t=hu("canvas");return t.style.display="block",t}const E_={};function M_(...t){const e="THREE."+t.shift();console.log(e,...t)}function kM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Pe(...t){t=kM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=kM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Tp(...t){const e=t.join(" ");e in E_||(E_[e]=!0,Pe(...t))}function q3(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const K3={[Bh]:Vh,[zh]:Wh,[Hh]:Xh,[yo]:Gh,[Vh]:Bh,[Wh]:zh,[Xh]:Hh,[Gh]:yo};class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=Math.PI/180,wp=180/Math.PI;function el(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Z3(t,e){return(t%e+e)%e}function Vf(t,e,n){return(1-n)*t+n*e}function Ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const dg=class dg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dg.prototype.isVector2=!0;let at=dg;class Po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(d!==y||l!==f||c!==p||u!==v){let m=l*f+c*p+u*v+d*y;m<0&&(f=-f,p=-p,v=-v,y=-y,m=-m);let h=1-a;if(m<.9995){const g=Math.acos(m),_=Math.sin(g);h=Math.sin(h*g)/_,a=Math.sin(a*g)/_,l=l*h+f*a,c=c*h+p*a,u=u*h+v*a,d=d*h+y*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+v*a,d=d*h+y*a;const g=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=g,c*=g,u*=g,d*=g}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*f,e[n+1]=l*v+u*f+c*d-a*p,e[n+2]=c*v+u*p+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hg=class hg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(T_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(T_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hg.prototype.isVector3=!0;let V=hg;const zf=new V,T_=new Po,pg=class pg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],h=r[6],g=r[1],_=r[4],S=r[7],w=r[2],T=r[5],b=r[8];return s[0]=o*y+a*g+l*w,s[3]=o*m+a*_+l*T,s[6]=o*h+a*S+l*b,s[1]=c*y+u*g+d*w,s[4]=c*m+u*_+d*T,s[7]=c*h+u*S+d*b,s[2]=f*y+p*g+v*w,s[5]=f*m+p*_+v*T,s[8]=f*h+p*S+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hf.makeScale(e,n)),this}rotate(e){return this.premultiply(Hf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pg.prototype.isMatrix3=!0;let Ue=pg;const Hf=new Ue,w_=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q3(){const t={enabled:!0,workingColorSpace:uu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=co(r.r),r.g=co(r.g),r.b=co(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?fu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Tp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Tp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[uu]:{primaries:e,whitePoint:i,transfer:fu,toXYZ:w_,fromXYZ:A_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:w_,fromXYZ:A_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const Ye=Q3();function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function co(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cs;class J3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=hu("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eD=0;class ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eD++}),this.uuid=el(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gf(r[o].image)):s.push(Gf(r[o]))}else s=Gf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?J3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let tD=0;const Wf=new V;class dn extends Ss{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Xi,r=Xi,s=sn,o=ss,a=li,l=Hn,c=dn.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tD++}),this.uuid=el(),this.name="",this.source=new ug(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==PM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=PM;dn.DEFAULT_ANISOTROPY=1;const mg=class mg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,w=(h+1)/2,T=(u+f)/4,b=(d+y)/4,x=(v+m)/4;return _>S&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=b/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-y)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mg.prototype.isVector4=!0;let Dt=mg;class nD extends Ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ug(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends nD{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class BM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iD extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=class gu{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,v=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,y=c*d;n[0]=f+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,v=a*u,y=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rD,e,sD)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),cr.crossVectors(i,An),cr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),cr.crossVectors(i,An)),cr.normalize(),Dl.crossVectors(An,cr),r[0]=cr.x,r[4]=Dl.x,r[8]=An.x,r[1]=cr.y,r[5]=Dl.y,r[9]=An.y,r[2]=cr.z,r[6]=Dl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],h=i[14],g=i[3],_=i[7],S=i[11],w=i[15],T=r[0],b=r[4],x=r[8],C=r[12],P=r[1],D=r[5],O=r[9],j=r[13],$=r[2],N=r[6],G=r[10],B=r[14],F=r[3],X=r[7],q=r[11],re=r[15];return s[0]=o*T+a*P+l*$+c*F,s[4]=o*b+a*D+l*N+c*X,s[8]=o*x+a*O+l*G+c*q,s[12]=o*C+a*j+l*B+c*re,s[1]=u*T+d*P+f*$+p*F,s[5]=u*b+d*D+f*N+p*X,s[9]=u*x+d*O+f*G+p*q,s[13]=u*C+d*j+f*B+p*re,s[2]=v*T+y*P+m*$+h*F,s[6]=v*b+y*D+m*N+h*X,s[10]=v*x+y*O+m*G+h*q,s[14]=v*C+y*j+m*B+h*re,s[3]=g*T+_*P+S*$+w*F,s[7]=g*b+_*D+S*N+w*X,s[11]=g*x+_*O+S*G+w*q,s[15]=g*C+_*j+S*B+w*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],h=e[15],g=l*p-c*f,_=a*p-c*d,S=a*f-l*d,w=o*p-c*u,T=o*f-l*u,b=o*d-a*u;return n*(y*g-m*_+h*S)-i*(v*g-m*w+h*T)+r*(v*_-y*w+h*b)-s*(v*S-y*T+m*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],h=e[15],g=n*a-i*o,_=n*l-r*o,S=n*c-s*o,w=i*l-r*a,T=i*c-s*a,b=r*c-s*l,x=u*y-d*v,C=u*m-f*v,P=u*h-p*v,D=d*m-f*y,O=d*h-p*y,j=f*h-p*m,$=g*j-_*O+S*D+w*P-T*C+b*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/$;return e[0]=(a*j-l*O+c*D)*N,e[1]=(r*O-i*j-s*D)*N,e[2]=(y*b-m*T+h*w)*N,e[3]=(f*T-d*b-p*w)*N,e[4]=(l*P-o*j-c*C)*N,e[5]=(n*j-r*P+s*C)*N,e[6]=(m*S-v*b-h*_)*N,e[7]=(u*b-f*S+p*_)*N,e[8]=(o*O-a*P+c*x)*N,e[9]=(i*P-n*O-s*x)*N,e[10]=(v*T-y*S+h*g)*N,e[11]=(d*S-u*T-p*g)*N,e[12]=(a*C-o*D-l*x)*N,e[13]=(n*D-i*C+r*x)*N,e[14]=(y*_-v*w-m*g)*N,e[15]=(u*w-d*_+f*g)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,v=s*d,y=o*u,m=o*d,h=a*d,g=l*c,_=l*u,S=l*d,w=i.x,T=i.y,b=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+S)*w,r[2]=(v-_)*w,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(v+_)*b,r[9]=(m-g)*b,r[10]=(1-(f+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=bs.set(r[0],r[1],r[2]).length();const a=bs.set(r[4],r[5],r[6]).length(),l=bs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Qn.copy(this);const c=1/o,u=1/a,d=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,n.setFromRotationMatrix(Qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===Ai)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===du)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===Ai)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===du)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};gu.prototype.isMatrix4=!0;let Lt=gu;const bs=new V,Qn=new Lt,rD=new V(0,0,0),sD=new V(1,1,1),cr=new V,Dl=new V,An=new V,C_=new Lt,b_=new Po;class _s{constructor(e=0,n=0,i=0,r=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return C_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return b_.setFromEuler(this),this.setFromQuaternion(b_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class VM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oD=0;const R_=new V,Rs=new Po,Ui=new Lt,Ll=new V,Go=new V,aD=new V,lD=new Po,P_=new V(1,0,0),D_=new V(0,1,0),L_=new V(0,0,1),N_={type:"added"},cD={type:"removed"},Ps={type:"childadded",child:null},Xf={type:"childremoved",child:null};class hn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oD++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new V,n=new _s,i=new Po,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ue}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new VM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(P_,e)}rotateY(e){return this.rotateOnAxis(D_,e)}rotateZ(e){return this.rotateOnAxis(L_,e)}translateOnAxis(e,n){return R_.copy(e).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(P_,e)}translateY(e){return this.translateOnAxis(D_,e)}translateZ(e){return this.translateOnAxis(L_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ll.copy(e):Ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Go,Ll,this.up):Ui.lookAt(Ll,Go,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cD),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N_),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,aD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,lD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new V(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nl extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uD={type:"move"};class jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=Z3(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Yf(o,s,e+1/3),this.g=Yf(o,s,e),this.b=Yf(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=zM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Ye.workingToColorSpace(nn.copy(this),e),Math.round($e(nn.r*255,0,255))*65536+Math.round($e(nn.g*255,0,255))*256+Math.round($e(nn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=kn){Ye.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(Il);const i=Vf(ur.h,Il.h,n),r=Vf(ur.s,Il.s,n),s=Vf(ur.l,Il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new tt;tt.NAMES=zM;class fD extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new V,Fi=new V,$f=new V,Oi=new V,Ds=new V,Ls=new V,I_=new V,qf=new V,Kf=new V,Zf=new V,Qf=new Dt,Jf=new Dt,ed=new Dt;class oi{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Fi.subVectors(i,n),$f.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(Fi),l=Jn.dot($f),c=Fi.dot(Fi),u=Fi.dot($f),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Qf.setScalar(0),Jf.setScalar(0),ed.setScalar(0),Qf.fromBufferAttribute(e,n),Jf.fromBufferAttribute(e,i),ed.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qf,s.x),o.addScaledVector(Jf,s.y),o.addScaledVector(ed,s.z),o}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Fi.subVectors(e,n),Jn.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),Jn.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Ls.subVectors(s,i),qf.subVectors(e,i);const l=Ds.dot(qf),c=Ls.dot(qf);if(l<=0&&c<=0)return n.copy(i);Kf.subVectors(e,r);const u=Ds.dot(Kf),d=Ls.dot(Kf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ds,o);Zf.subVectors(e,s);const p=Ds.dot(Zf),v=Ls.dot(Zf);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Ls,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return I_.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(I_,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(Ds,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class tl{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ul.copy(i.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Fl.subVectors(this.max,Wo),Ns.subVectors(e.a,Wo),Is.subVectors(e.b,Wo),Us.subVectors(e.c,Wo),fr.subVectors(Is,Ns),dr.subVectors(Us,Is),Wr.subVectors(Ns,Us);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Wr.z,Wr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Wr.z,0,-Wr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Wr.y,Wr.x,0];return!td(n,Ns,Is,Us,Fl)||(n=[1,0,0,0,1,0,0,0,1],!td(n,Ns,Is,Us,Fl))?!1:(Ol.crossVectors(fr,dr),n=[Ol.x,Ol.y,Ol.z],td(n,Ns,Is,Us,Fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new V,new V,new V,new V,new V,new V,new V,new V],ei=new V,Ul=new tl,Ns=new V,Is=new V,Us=new V,fr=new V,dr=new V,Wr=new V,Wo=new V,Fl=new V,Ol=new V,Xr=new V;function td(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),u=i.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nt=new V,kl=new at;let dD=0;class di extends Ss{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dD++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=y_,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)kl.fromBufferAttribute(this,n),kl.applyMatrix3(e),this.setXY(n,kl.x,kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class HM extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class GM extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jn extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const hD=new tl,Xo=new V,nd=new V;class nl{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(nd)),this.expandByPoint(Xo.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pD=0;const On=new Lt,id=new hn,Fs=new V,Cn=new tl,jo=new tl,Wt=new V;class Nn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pD++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y3(e)?GM:HM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Cn.min,jo.min),Cn.expandByPoint(Wt),Wt.addVectors(Cn.max,jo.max),Cn.expandByPoint(Wt)):(Cn.expandByPoint(jo.min),Cn.expandByPoint(jo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),Wt.add(Fs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new V,l[x]=new V;const c=new V,u=new V,d=new V,f=new at,p=new at,v=new at,y=new V,m=new V;function h(x,C,P){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),v.fromBufferAttribute(s,P),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(D),a[x].add(y),a[C].add(y),a[P].add(y),l[x].add(m),l[C].add(m),l[P].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,C=g.length;x<C;++x){const P=g[x],D=P.start,O=P.count;for(let j=D,$=D+O;j<$;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const _=new V,S=new V,w=new V,T=new V;function b(x){w.fromBufferAttribute(r,x),T.copy(w);const C=a[x];_.copy(C),_.sub(w.multiplyScalar(w.dot(C))).normalize(),S.crossVectors(T,C);const D=S.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,D)}for(let x=0,C=g.length;x<C;++x){const P=g[x],D=P.start,O=P.count;for(let j=D,$=D+O;j<$;j+=3)b(e.getX(j+0)),b(e.getX(j+1)),b(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new di(f,u,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mD=0;class Do extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mD++}),this.uuid=el(),this.name="",this.type="Material",this.blending=lo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=kh,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Pe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oh&&(i.blendSrc=this.blendSrc),this.blendDst!==kh&&(i.blendDst=this.blendDst),this.blendEquation!==Qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bi=new V,rd=new V,Bl=new V,hr=new V,sd=new V,Vl=new V,od=new V;class fg{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){rd.copy(e).add(n).multiplyScalar(.5),Bl.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(rd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Bl),a=hr.dot(this.direction),l=-hr.dot(Bl),c=hr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(rd).addScaledVector(Bl,f),p}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,i,r,s){sd.subVectors(n,e),Vl.subVectors(i,e),od.crossVectors(sd,Vl);let o=this.direction.dot(od),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Vl.crossVectors(hr,Vl));if(l<0)return null;const c=a*this.direction.dot(sd.cross(hr));if(c<0||l+c>o)return null;const u=-a*hr.dot(od);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class WM extends Do{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=EM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const U_=new Lt,jr=new fg,zl=new nl,F_=new V,Hl=new V,Gl=new V,Wl=new V,ad=new V,Xl=new V,O_=new V,jl=new V;class ir extends hn{constructor(e=new Nn,n=new WM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ad.fromBufferAttribute(d,e),o?Xl.addScaledVector(ad,u):Xl.addScaledVector(ad.sub(n),u))}n.add(Xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(zl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(zl,F_)===null||jr.origin.distanceToSquared(F_)>(e.far-e.near)**2))&&(U_.copy(s).invert(),jr.copy(e.ray).applyMatrix4(U_),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,w=_;S<w;S+=3){const T=a.getX(S),b=a.getX(S+1),x=a.getX(S+2);r=Yl(this,h,e,i,c,u,d,T,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Yl(this,o,e,i,c,u,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,w=_;S<w;S+=3){const T=S,b=S+1,x=S+2;r=Yl(this,h,e,i,c,u,d,T,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=m,_=m+1,S=m+2;r=Yl(this,o,e,i,c,u,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function gD(t,e,n,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;jl.copy(a),jl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jl);return c<n.near||c>n.far?null:{distance:c,point:jl.clone(),object:t}}function Yl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Hl),t.getVertexPosition(l,Gl),t.getVertexPosition(c,Wl);const u=gD(t,e,n,i,Hl,Gl,Wl,O_);if(u){const d=new V;oi.getBarycoord(O_,Hl,Gl,Wl,d),r&&(u.uv=oi.getInterpolatedAttribute(r,a,l,c,d,new at)),s&&(u.uv1=oi.getInterpolatedAttribute(s,a,l,c,d,new at)),o&&(u.normal=oi.getInterpolatedAttribute(o,a,l,c,d,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};oi.getNormal(Hl,Gl,Wl,f.normal),u.face=f,u.barycoord=d}return u}class vD extends dn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=qt,u=qt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ld=new V,_D=new V,xD=new Ue;class Zr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ld.subVectors(i,n).cross(_D.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ld),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xD.getNormalMatrix(e),r=this.coplanarPoint(ld).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new nl,yD=new at(.5,.5),$l=new V;class XM{constructor(e=new Zr,n=new Zr,i=new Zr,r=new Zr,s=new Zr,o=new Zr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],v=s[8],y=s[9],m=s[10],h=s[11],g=s[12],_=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-o,p-u,h-v,w-g).normalize(),r[1].setComponents(c+o,p+u,h+v,w+g).normalize(),r[2].setComponents(c+a,p+d,h+y,w+_).normalize(),r[3].setComponents(c-a,p-d,h-y,w-_).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(c-l,p-f,h-m,w-S).normalize();else if(r[4].setComponents(c-l,p-f,h-m,w-S).normalize(),n===Ai)r[5].setComponents(c+l,p+f,h+m,w+S).normalize();else if(n===du)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=yD.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($l.x=r.normal.x>0?e.max.x:e.min.x,$l.y=r.normal.y>0?e.max.y:e.min.y,$l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jM extends Do{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new V,mu=new V,k_=new Lt,Yo=new fg,ql=new nl,cd=new V,B_=new V;class SD extends hn{constructor(e=new Nn,n=new jM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)pu.fromBufferAttribute(n,r-1),mu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new jn(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(r),ql.radius+=s,e.ray.intersectsSphere(ql)===!1)return;k_.copy(r).invert(),Yo.copy(e.ray).applyMatrix4(k_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=c){const h=u.getX(y),g=u.getX(y+1),_=Kl(this,e,Yo,l,h,g,y);_&&n.push(_)}if(this.isLineLoop){const y=u.getX(v-1),m=u.getX(p),h=Kl(this,e,Yo,l,y,m,v-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=c){const h=Kl(this,e,Yo,l,y,y+1,y);h&&n.push(h)}if(this.isLineLoop){const y=Kl(this,e,Yo,l,v-1,p,v-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(pu.fromBufferAttribute(a,r),mu.fromBufferAttribute(a,s),n.distanceSqToSegment(pu,mu,cd,B_)>i)return;cd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(cd);if(!(c<e.near||c>e.far))return{distance:c,point:B_.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const V_=new V,z_=new V;class ED extends SD{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)V_.fromBufferAttribute(n,r),z_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+V_.distanceTo(z_);e.setAttribute("lineDistance",new jn(i,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class YM extends Do{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const H_=new Lt,Ap=new fg,Zl=new nl,Ql=new V;class MD extends hn{constructor(e=new Nn,n=new YM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(r),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;H_.copy(r).invert(),Ap.copy(e.ray).applyMatrix4(H_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,y=p;v<y;v++){const m=c.getX(v);Ql.fromBufferAttribute(d,m),G_(Ql,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,y=p;v<y;v++)Ql.fromBufferAttribute(d,v),G_(Ql,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function G_(t,e,n,i,r,s,o){const a=Ap.distanceSqToPoint(t);if(a<n){const l=new V;Ap.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class $M extends dn{constructor(e=[],n=gs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eo extends dn{constructor(e,n,i=Li,r,s,o,a=qt,l=qt,c,u=nr,d=1){if(u!==nr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ug(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class TD extends Eo{constructor(e,n=Li,i=gs,r,s,o=qt,a=qt,l,c=nr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qM extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class il extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(d,2));function v(y,m,h,g,_,S,w,T,b,x,C){const P=S/b,D=w/x,O=S/2,j=w/2,$=T/2,N=b+1,G=x+1;let B=0,F=0;const X=new V;for(let q=0;q<G;q++){const re=q*D-j;for(let de=0;de<N;de++){const ze=de*P-O;X[y]=ze*g,X[m]=re*_,X[h]=$,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[h]=T>0?1:-1,u.push(X.x,X.y,X.z),d.push(de/b),d.push(1-q/x),B+=1}}for(let q=0;q<x;q++)for(let re=0;re<b;re++){const de=f+re+N*q,ze=f+re+N*(q+1),We=f+(re+1)+N*(q+1),Le=f+(re+1)+N*q;l.push(de,ze,Le),l.push(ze,We,Le),F+=6}a.addGroup(p,F,C),p+=F,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bu extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],v=[],y=[],m=[];for(let h=0;h<u;h++){const g=h*f-o;for(let _=0;_<c;_++){const S=_*d-s;v.push(S,-g,0),y.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const _=g+c*h,S=g+c*(h+1),w=g+1+c*(h+1),T=g+1+c*h;p.push(_,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new jn(v,3)),this.setAttribute("normal",new jn(y,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(W_(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(W_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Mo(t[n]);for(const r in i)e[r]=i[r]}return e}function W_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function wD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function KM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const AD={clone:Mo,merge:an};var CD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Do{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CD,this.fragmentShader=bD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=wD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class RD extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class PD extends Do{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DD extends Do{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jl=new V,ec=new Po,_i=new V;class ZM extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,ec,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,_i.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Jl,ec,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new V,X_=new at,j_=new at;class zn extends ZM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(Bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,X_,j_),n.subVectors(j_,X_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class QM extends ZM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=-90,ks=1;class LD extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Os,ks,e,n);r.layers=this.layers,this.add(r);const s=new zn(Os,ks,e,n);s.layers=this.layers,this.add(s);const o=new zn(Os,ks,e,n);o.layers=this.layers,this.add(o);const a=new zn(Os,ks,e,n);a.layers=this.layers,this.add(a);const l=new zn(Os,ks,e,n);l.layers=this.layers,this.add(l);const c=new zn(Os,ks,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ND extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gg=class gg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};gg.prototype.isMatrix2=!0;let Y_=gg;function $_(t,e,n,i){const r=ID(i);switch(n){case UM:return t*e;case OM:return t*e/r.components*r.byteLength;case sg:return t*e/r.components*r.byteLength;case vs:return t*e*2/r.components*r.byteLength;case og:return t*e*2/r.components*r.byteLength;case FM:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case ag:return t*e*4/r.components*r.byteLength;case Mc:case Tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wc:case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:case Zh:return Math.max(t,16)*Math.max(e,8)/4;case $h:case Kh:return Math.max(t,8)*Math.max(e,8)/2;case Qh:case Jh:case tp:case np:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ep:case lu:case ip:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case op:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ap:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case up:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case pp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _p:case xp:case yp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Sp:case Ep:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cu:case Mp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ID(t){switch(t){case Hn:case DM:return{byteLength:1,components:1};case za:case LM:case tr:return{byteLength:2,components:1};case ig:case rg:return{byteLength:2,components:4};case Li:case ng:case wi:return{byteLength:4,components:1};case NM:case IM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tg}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tg);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function JM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function UD(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var FD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,XD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$D=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dL="gl_FragColor = linearToOutputTexel( gl_FragColor );",hL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_L=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ML=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IL=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kL=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$L=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_N=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ON=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$N=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:FD,alphahash_pars_fragment:OD,alphamap_fragment:kD,alphamap_pars_fragment:BD,alphatest_fragment:VD,alphatest_pars_fragment:zD,aomap_fragment:HD,aomap_pars_fragment:GD,batching_pars_vertex:WD,batching_vertex:XD,begin_vertex:jD,beginnormal_vertex:YD,bsdfs:$D,iridescence_fragment:qD,bumpmap_pars_fragment:KD,clipping_planes_fragment:ZD,clipping_planes_pars_fragment:QD,clipping_planes_pars_vertex:JD,clipping_planes_vertex:eL,color_fragment:tL,color_pars_fragment:nL,color_pars_vertex:iL,color_vertex:rL,common:sL,cube_uv_reflection_fragment:oL,defaultnormal_vertex:aL,displacementmap_pars_vertex:lL,displacementmap_vertex:cL,emissivemap_fragment:uL,emissivemap_pars_fragment:fL,colorspace_fragment:dL,colorspace_pars_fragment:hL,envmap_fragment:pL,envmap_common_pars_fragment:mL,envmap_pars_fragment:gL,envmap_pars_vertex:vL,envmap_physical_pars_fragment:bL,envmap_vertex:_L,fog_vertex:xL,fog_pars_vertex:yL,fog_fragment:SL,fog_pars_fragment:EL,gradientmap_pars_fragment:ML,lightmap_pars_fragment:TL,lights_lambert_fragment:wL,lights_lambert_pars_fragment:AL,lights_pars_begin:CL,lights_toon_fragment:RL,lights_toon_pars_fragment:PL,lights_phong_fragment:DL,lights_phong_pars_fragment:LL,lights_physical_fragment:NL,lights_physical_pars_fragment:IL,lights_fragment_begin:UL,lights_fragment_maps:FL,lights_fragment_end:OL,lightprobes_pars_fragment:kL,logdepthbuf_fragment:BL,logdepthbuf_pars_fragment:VL,logdepthbuf_pars_vertex:zL,logdepthbuf_vertex:HL,map_fragment:GL,map_pars_fragment:WL,map_particle_fragment:XL,map_particle_pars_fragment:jL,metalnessmap_fragment:YL,metalnessmap_pars_fragment:$L,morphinstance_vertex:qL,morphcolor_vertex:KL,morphnormal_vertex:ZL,morphtarget_pars_vertex:QL,morphtarget_vertex:JL,normal_fragment_begin:eN,normal_fragment_maps:tN,normal_pars_fragment:nN,normal_pars_vertex:iN,normal_vertex:rN,normalmap_pars_fragment:sN,clearcoat_normal_fragment_begin:oN,clearcoat_normal_fragment_maps:aN,clearcoat_pars_fragment:lN,iridescence_pars_fragment:cN,opaque_fragment:uN,packing:fN,premultiplied_alpha_fragment:dN,project_vertex:hN,dithering_fragment:pN,dithering_pars_fragment:mN,roughnessmap_fragment:gN,roughnessmap_pars_fragment:vN,shadowmap_pars_fragment:_N,shadowmap_pars_vertex:xN,shadowmap_vertex:yN,shadowmask_pars_fragment:SN,skinbase_vertex:EN,skinning_pars_vertex:MN,skinning_vertex:TN,skinnormal_vertex:wN,specularmap_fragment:AN,specularmap_pars_fragment:CN,tonemapping_fragment:bN,tonemapping_pars_fragment:RN,transmission_fragment:PN,transmission_pars_fragment:DN,uv_pars_fragment:LN,uv_pars_vertex:NN,uv_vertex:IN,worldpos_vertex:UN,background_vert:FN,background_frag:ON,backgroundCube_vert:kN,backgroundCube_frag:BN,cube_vert:VN,cube_frag:zN,depth_vert:HN,depth_frag:GN,distance_vert:WN,distance_frag:XN,equirect_vert:jN,equirect_frag:YN,linedashed_vert:$N,linedashed_frag:qN,meshbasic_vert:KN,meshbasic_frag:ZN,meshlambert_vert:QN,meshlambert_frag:JN,meshmatcap_vert:eI,meshmatcap_frag:tI,meshnormal_vert:nI,meshnormal_frag:iI,meshphong_vert:rI,meshphong_frag:sI,meshphysical_vert:oI,meshphysical_frag:aI,meshtoon_vert:lI,meshtoon_frag:cI,points_vert:uI,points_frag:fI,shadow_vert:dI,shadow_frag:hI,sprite_vert:pI,sprite_frag:mI},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Mi={basic:{uniforms:an([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:an([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:an([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:an([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:an([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:an([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:an([me.points,me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:an([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:an([me.common,me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:an([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:an([me.sprite,me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:an([me.common,me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:an([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Mi.physical={uniforms:an([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const tc={r:0,b:0,g:0},gI=new Lt,eT=new Ue;eT.set(-1,0,0,0,1,0,0,0,1);function vI(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const S=g.backgroundBlurriness>0;_=e.get(_,S)}return _}function v(g){let _=!1;const S=p(g);S===null?m(o,a):S&&S.isColor&&(m(S,1),_=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(g,_){const S=p(_);S&&(S.isCubeTexture||S.mapping===ku)?(c===void 0&&(c=new ir(new il(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Mo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gI.makeRotationFromEuler(_.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(eT),c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==nt,(u!==S||d!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ir(new Bu(2,2),new Ni({name:"BackgroundMaterial",uniforms:Mo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,_){g.getRGB(tc,KM(t)),n.buffers.color.setClear(tc.r,tc.g,tc.b,_,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,m(o,a)},render:v,addToRenderList:y,dispose:h}}function _I(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(D,O,j,$,N){let G=!1;const B=d(D,$,j,O);s!==B&&(s=B,c(s.object)),G=p(D,$,j,N),G&&v(D,$,j,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(D,O,j,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function d(D,O,j,$){const N=$.wireframe===!0;let G=i[O.id];G===void 0&&(G={},i[O.id]=G);const B=D.isInstancedMesh===!0?D.id:0;let F=G[B];F===void 0&&(F={},G[B]=F);let X=F[j.id];X===void 0&&(X={},F[j.id]=X);let q=X[N];return q===void 0&&(q=f(l()),X[N]=q),q}function f(D){const O=[],j=[],$=[];for(let N=0;N<n;N++)O[N]=0,j[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:$,object:D,attributes:{},index:null}}function p(D,O,j,$){const N=s.attributes,G=O.attributes;let B=0;const F=j.getAttributes();for(const X in F)if(F[X].location>=0){const re=N[X];let de=G[X];if(de===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;B++}return s.attributesNum!==B||s.index!==$}function v(D,O,j,$){const N={},G=O.attributes;let B=0;const F=j.getAttributes();for(const X in F)if(F[X].location>=0){let re=G[X];re===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),N[X]=de,B++}s.attributes=N,s.attributesNum=B,s.index=$}function y(){const D=s.newAttributes;for(let O=0,j=D.length;O<j;O++)D[O]=0}function m(D){h(D,0)}function h(D,O){const j=s.newAttributes,$=s.enabledAttributes,N=s.attributeDivisors;j[D]=1,$[D]===0&&(t.enableVertexAttribArray(D),$[D]=1),N[D]!==O&&(t.vertexAttribDivisor(D,O),N[D]=O)}function g(){const D=s.newAttributes,O=s.enabledAttributes;for(let j=0,$=O.length;j<$;j++)O[j]!==D[j]&&(t.disableVertexAttribArray(j),O[j]=0)}function _(D,O,j,$,N,G,B){B===!0?t.vertexAttribIPointer(D,O,j,N,G):t.vertexAttribPointer(D,O,j,$,N,G)}function S(D,O,j,$){y();const N=$.attributes,G=j.getAttributes(),B=O.defaultAttributeValues;for(const F in G){const X=G[F];if(X.location>=0){let q=N[F];if(q===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){const re=q.normalized,de=q.itemSize,ze=e.get(q);if(ze===void 0)continue;const We=ze.buffer,Le=ze.type,Z=ze.bytesPerElement,he=Le===t.INT||Le===t.UNSIGNED_INT||q.gpuType===ng;if(q.isInterleavedBufferAttribute){const le=q.data,Re=le.stride,Ie=q.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)h(X.location+De,le.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<X.locationSize;De++)m(X.location+De);t.bindBuffer(t.ARRAY_BUFFER,We);for(let De=0;De<X.locationSize;De++)_(X.location+De,de/X.locationSize,Le,re,Re*Z,(Ie+de/X.locationSize*De)*Z,he)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)h(X.location+le,q.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);t.bindBuffer(t.ARRAY_BUFFER,We);for(let le=0;le<X.locationSize;le++)_(X.location+le,de/X.locationSize,Le,re,de*Z,de/X.locationSize*le*Z,he)}}else if(B!==void 0){const re=B[F];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(X.location,re);break;case 3:t.vertexAttrib3fv(X.location,re);break;case 4:t.vertexAttrib4fv(X.location,re);break;default:t.vertexAttrib1fv(X.location,re)}}}}g()}function w(){C();for(const D in i){const O=i[D];for(const j in O){const $=O[j];for(const N in $){const G=$[N];for(const B in G)u(G[B].object),delete G[B];delete $[N]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const j in O){const $=O[j];for(const N in $){const G=$[N];for(const B in G)u(G[B].object),delete G[B];delete $[N]}}delete i[D.id]}function b(D){for(const O in i){const j=i[O];for(const $ in j){const N=j[$];if(N[D.id]===void 0)continue;const G=N[D.id];for(const B in G)u(G[B].object),delete G[B];delete N[D.id]}}}function x(D){for(const O in i){const j=i[O],$=D.isInstancedMesh===!0?D.id:0,N=j[$];if(N!==void 0){for(const G in N){const B=N[G];for(const F in B)u(B[F].object),delete B[F];delete N[G]}delete j[$],Object.keys(j).length===0&&delete i[O]}}}function C(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function xI(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function yI(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==li&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const x=b===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Hn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==wi&&!x)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:S,maxSamples:w,samples:T}}function SI(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let S=h.clippingState||null;l.value=S,S=u(v,f,_,p);for(let w=0;w!==_;++w)S[w]=n[w];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const h=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=p;_!==y;++_,S+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const wr=4,q_=[.125,.215,.35,.446,.526,.582],Jr=20,EI=256,$o=new QM,K_=new tt;let ud=null,fd=0,dd=0,hd=!1;const MI=new V;class Z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=MI}=s;ud=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,fd,dd),this._renderer.xr.enabled=hd,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===gs||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:tr,format:li,colorSpace:uu,depthBuffer:!1},r=Q_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TI(s)),this._blurMaterial=AI(s,e,n),this._ggxMaterial=wI(s,e,n)}return r}_compileMaterial(e){const n=new ir(new Nn,e);this._renderer.compile(n,$o)}_sceneToCubeUV(e,n,i,r,s){const l=new zn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(K_),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ir(new il,new WM({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(K_),h=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const w=this._cubeSize;Bs(r,S*w,_>2?w:0,w,w),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===gs||e.mapping===So;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,$o)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-wr?i-v+wr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,Bs(s,m,h,3*y,2*y),r.setRenderTarget(s),r.render(a,$o),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Bs(e,m,h,3*y,2*y),r.setRenderTarget(e),r.render(a,$o)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jr-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Jr;m>Jr&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jr}`);const h=[];let g=0;for(let b=0;b<Jr;++b){const x=b/y,C=Math.exp(-x*x/2);h.push(C),b===0?g+=C:b<m&&(g+=2*C)}for(let b=0;b<h.length;b++)h[b]=h[b]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const S=this._sizeLods[r],w=3*S*(r>_-wr?r-_+wr:0),T=4*(this._cubeSize-S);Bs(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(d,$o)}}function TI(t){const e=[],n=[],i=[];let r=t;const s=t-wr+1+q_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-wr?l=q_[o-t+wr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,y=3,m=2,h=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,x=T>2?0:-1,C=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];g.set(C,y*v*T),_.set(f,m*v*T);const P=[T,T,T,T,T,T];S.set(P,h*v*T)}const w=new Nn;w.setAttribute("position",new di(g,y)),w.setAttribute("uv",new di(_,m)),w.setAttribute("faceIndex",new di(S,h)),i.push(new ir(w,null)),r>wr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Q_(t,e,n){const i=new Di(t,e,n);return i.texture.mapping=ku,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wI(t,e,n){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function AI(t,e,n){const i=new Float32Array(Jr),r=new V(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function J_(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ex(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class tT extends Di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $M(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new il(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:$i});s.uniforms.tEquirect.value=n;const o=new ir(r,s),a=n.minFilter;return n.minFilter===ss&&(n.minFilter=sn),new LD(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function CI(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Ff||p===Of)if(e.has(f)){const v=e.get(f).texture;return a(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const y=new tT(v.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,v=p===Ff||p===Of,y=p===gs||p===So;if(v||y){let m=n.get(f);const h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new Z_(t)),m=v?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return v&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new Z_(t)),m=v?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,p){return p===Ff?f.mapping=gs:p===Of&&(f.mapping=So),f}function l(f){let p=0;const v=6;for(let y=0;y<v;y++)f[y]!==void 0&&p++;return p===v}function c(f){const p=f.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function bI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Tp("WebGLRenderer: "+i+" extension not supported."),r}}}function RI(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,v=d.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const g=p.array;y=p.version;for(let _=0,S=g.length;_<S;_+=3){const w=g[_+0],T=g[_+1],b=g[_+2];f.push(w,T,T,b,b,w)}}else{const g=v.array;y=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const w=_+0,T=_+1,b=_+2;f.push(w,T,T,b,b,w)}}const m=new(v.count>=65535?GM:HM)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function PI(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function DI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LI(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*T*4*d),x=new BM(b,w,T,d);x.type=wi,x.needsUpdate=!0;const C=S*4;for(let D=0;D<d;D++){const O=h[D],j=g[D],$=_[D],N=w*T*4*D;for(let G=0;G<O.count;G++){const B=G*C;v===!0&&(r.fromBufferAttribute(O,G),b[N+B+0]=r.x,b[N+B+1]=r.y,b[N+B+2]=r.z,b[N+B+3]=0),y===!0&&(r.fromBufferAttribute(j,G),b[N+B+4]=r.x,b[N+B+5]=r.y,b[N+B+6]=r.z,b[N+B+7]=0),m===!0&&(r.fromBufferAttribute($,G),b[N+B+8]=r.x,b[N+B+9]=r.y,b[N+B+10]=r.z,b[N+B+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new at(w,T)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function NI(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const II={[MM]:"LINEAR_TONE_MAPPING",[TM]:"REINHARD_TONE_MAPPING",[wM]:"CINEON_TONE_MAPPING",[AM]:"ACES_FILMIC_TONE_MAPPING",[bM]:"AGX_TONE_MAPPING",[RM]:"NEUTRAL_TONE_MAPPING",[CM]:"CUSTOM_TONE_MAPPING"};function UI(t,e,n,i,r){const s=new Di(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Eo(e,n):void 0}),o=new Di(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),a=new Nn;a.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new jn([0,2,0,0,2,0],2));const l=new RD({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ir(a,l),u=new QM(-1,1,1,-1,0,1);let d=null,f=null,p=!1,v,y=null,m=[],h=!1;this.setSize=function(g,_){s.setSize(g,_),o.setSize(g,_);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(g,_)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const _=s.width,S=s.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(_,S)}},this.begin=function(g,_){if(p||g.toneMapping===Pi&&m.length===0)return!1;if(y=_,_!==null){const S=_.width,w=_.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return h===!1&&g.setRenderTarget(s),v=g.toneMapping,g.toneMapping=Pi,!0},this.hasRenderPass=function(){return h},this.end=function(g,_){g.toneMapping=v,p=!0;let S=s,w=o;for(let T=0;T<m.length;T++){const b=m[T];if(b.enabled!==!1&&(b.render(g,w,S,_),b.needsSwap!==!1)){const x=S;S=w,w=x}}if(d!==g.outputColorSpace||f!==g.toneMapping){d=g.outputColorSpace,f=g.toneMapping,l.defines={},Ye.getTransfer(d)===nt&&(l.defines.SRGB_TRANSFER="");const T=II[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(y),g.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const nT=new dn,Cp=new Eo(1,1),iT=new BM,rT=new iD,sT=new $M,tx=[],nx=[],ix=new Float32Array(16),rx=new Float32Array(9),sx=new Float32Array(4);function Lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tx[r];if(s===void 0&&(s=new Float32Array(r),tx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zu(t,e){let n=nx[e];n===void 0&&(n=new Int32Array(e),nx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function kI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function BI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function VI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;sx.set(i),t.uniformMatrix2fv(this.addr,!1,sx),Gt(n,i)}}function zI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;rx.set(i),t.uniformMatrix3fv(this.addr,!1,rx),Gt(n,i)}}function HI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;ix.set(i),t.uniformMatrix4fv(this.addr,!1,ix),Gt(n,i)}}function GI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function XI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function jI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function YI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $I(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function qI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function KI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function ZI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Cp.compareFunction=n.isReversedDepthBuffer()?cg:lg,s=Cp):s=nT,n.setTexture2D(e||s,r)}function QI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rT,r)}function JI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sT,r)}function eU(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iT,r)}function tU(t){switch(t){case 5126:return FI;case 35664:return OI;case 35665:return kI;case 35666:return BI;case 35674:return VI;case 35675:return zI;case 35676:return HI;case 5124:case 35670:return GI;case 35667:case 35671:return WI;case 35668:case 35672:return XI;case 35669:case 35673:return jI;case 5125:return YI;case 36294:return $I;case 36295:return qI;case 36296:return KI;case 35678:case 36198:case 36298:case 36306:case 35682:return ZI;case 35679:case 36299:case 36307:return QI;case 35680:case 36300:case 36308:case 36293:return JI;case 36289:case 36303:case 36311:case 36292:return eU}}function nU(t,e){t.uniform1fv(this.addr,e)}function iU(t,e){const n=Lo(e,this.size,2);t.uniform2fv(this.addr,n)}function rU(t,e){const n=Lo(e,this.size,3);t.uniform3fv(this.addr,n)}function sU(t,e){const n=Lo(e,this.size,4);t.uniform4fv(this.addr,n)}function oU(t,e){const n=Lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aU(t,e){const n=Lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lU(t,e){const n=Lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cU(t,e){t.uniform1iv(this.addr,e)}function uU(t,e){t.uniform2iv(this.addr,e)}function fU(t,e){t.uniform3iv(this.addr,e)}function dU(t,e){t.uniform4iv(this.addr,e)}function hU(t,e){t.uniform1uiv(this.addr,e)}function pU(t,e){t.uniform2uiv(this.addr,e)}function mU(t,e){t.uniform3uiv(this.addr,e)}function gU(t,e){t.uniform4uiv(this.addr,e)}function vU(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Cp:o=nT;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function _U(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||rT,s[o])}function xU(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sT,s[o])}function yU(t,e,n){const i=this.cache,r=e.length,s=zu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||iT,s[o])}function SU(t){switch(t){case 5126:return nU;case 35664:return iU;case 35665:return rU;case 35666:return sU;case 35674:return oU;case 35675:return aU;case 35676:return lU;case 5124:case 35670:return cU;case 35667:case 35671:return uU;case 35668:case 35672:return fU;case 35669:case 35673:return dU;case 5125:return hU;case 36294:return pU;case 36295:return mU;case 36296:return gU;case 35678:case 36198:case 36298:case 36306:case 35682:return vU;case 35679:case 36299:case 36307:return _U;case 35680:case 36300:case 36308:case 36293:return xU;case 36289:case 36303:case 36311:case 36292:return yU}}class EU{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tU(n.type)}}class MU{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SU(n.type)}}class TU{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function ox(t,e){t.seq.push(e),t.map[e.id]=e}function wU(t,e,n){const i=t.name,r=i.length;for(pd.lastIndex=0;;){const s=pd.exec(i),o=pd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ox(n,c===void 0?new EU(a,t,e):new MU(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new TU(a),ox(n,d)),n=d}}}class Cc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);wU(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ax(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const AU=37297;let CU=0;function bU(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const lx=new Ue;function RU(t){Ye._getMatrix(lx,Ye.workingColorSpace,t);const e=`mat3( ${lx.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case fu:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function cx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+bU(t.getShaderSource(e),a)}else return s}function PU(t,e){const n=RU(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const DU={[MM]:"Linear",[TM]:"Reinhard",[wM]:"Cineon",[AM]:"ACESFilmic",[bM]:"AgX",[RM]:"Neutral",[CM]:"Custom"};function LU(t,e){const n=DU[e];return n===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nc=new V;function NU(){Ye.getLuminanceCoefficients(nc);const t=nc.x.toFixed(4),e=nc.y.toFixed(4),n=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IU(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function UU(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function FU(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function ux(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OU=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(t){return t.replace(OU,BU)}const kU=new Map;function BU(t,e){let n=Be[e];if(n===void 0){const i=kU.get(e);if(i!==void 0)n=Be[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bp(n)}const VU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dx(t){return t.replace(VU,zU)}function zU(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HU={[Ec]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function GU(t){return HU[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WU={[gs]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[ku]:"ENVMAP_TYPE_CUBE_UV"};function XU(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":WU[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const jU={[So]:"ENVMAP_MODE_REFRACTION"};function YU(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":jU[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $U={[EM]:"ENVMAP_BLENDING_MULTIPLY",[F3]:"ENVMAP_BLENDING_MIX",[O3]:"ENVMAP_BLENDING_ADD"};function qU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":$U[t.combine]||"ENVMAP_BLENDING_NONE"}function KU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZU(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=GU(n),c=XU(n),u=YU(n),d=qU(n),f=KU(n),p=IU(n),v=UU(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ia).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(m=[hx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[hx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Pi?LU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,PU("linearToOutputTexel",n.outputColorSpace),NU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=bp(o),o=ux(o,n),o=fx(o,n),a=bp(a),a=ux(a,n),a=fx(a,n),o=dx(o),a=dx(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=g+m+o,S=g+h+a,w=ax(r,r.VERTEX_SHADER,_),T=ax(r,r.FRAGMENT_SHADER,S);r.attachShader(y,w),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",j=r.getShaderInfoLog(w)||"",$=r.getShaderInfoLog(T)||"",N=O.trim(),G=j.trim(),B=$.trim();let F=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,T);else{const q=cx(r,w,"vertex"),re=cx(r,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+q+`
`+re)}else N!==""?Pe("WebGLProgram: Program Info Log:",N):(G===""||B==="")&&(X=!1);X&&(D.diagnostics={runnable:F,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(w),r.deleteShader(T),x=new Cc(r,y),C=FU(r,y)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,AU)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CU++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=T,this}let QU=0;class JU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eF(e),n.set(e,i)),i}}class eF{constructor(e){this.id=QU++,this.code=e,this.usedTimes=0}}function tF(t){return t===vs||t===lu||t===cu}function nF(t,e,n,i,r,s){const o=new VM,a=new JU,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,C,P,D,O,j){const $=D.fog,N=O.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||G,B),X=F&&F.mapping===ku?F.image.height:null,q=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=re!==void 0?re.length:0;let ze=0;N.morphAttributes.position!==void 0&&(ze=1),N.morphAttributes.normal!==void 0&&(ze=2),N.morphAttributes.color!==void 0&&(ze=3);let We,Le,Z,he;if(q){const Fe=Mi[q];We=Fe.vertexShader,Le=Fe.fragmentShader}else We=x.vertexShader,Le=x.fragmentShader,a.update(x),Z=a.getVertexShaderID(x),he=a.getFragmentShaderID(x);const le=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,De=O.isBatchedMesh===!0,_t=!!x.map,Xe=!!x.matcap,rt=!!F,ht=!!x.aoMap,He=!!x.lightMap,Ft=!!x.bumpMap,xt=!!x.normalMap,Tn=!!x.displacementMap,I=!!x.emissiveMap,Ot=!!x.metalnessMap,je=!!x.roughnessMap,ut=x.anisotropy>0,pe=x.clearcoat>0,Mt=x.dispersion>0,A=x.iridescence>0,E=x.sheen>0,k=x.transmission>0,Q=ut&&!!x.anisotropyMap,ne=pe&&!!x.clearcoatMap,se=pe&&!!x.clearcoatNormalMap,fe=pe&&!!x.clearcoatRoughnessMap,Y=A&&!!x.iridescenceMap,J=A&&!!x.iridescenceThicknessMap,_e=E&&!!x.sheenColorMap,Se=E&&!!x.sheenRoughnessMap,ce=!!x.specularMap,oe=!!x.specularColorMap,Ne=!!x.specularIntensityMap,ke=k&&!!x.transmissionMap,Je=k&&!!x.thicknessMap,L=!!x.gradientMap,ae=!!x.alphaMap,K=x.alphaTest>0,xe=!!x.alphaHash,ue=!!x.extensions;let ee=Pi;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ee=t.toneMapping);const Ae={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:Le,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:De,batchingColor:De&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:_t,matcap:Xe,envMap:rt,envMapMode:rt&&F.mapping,envMapCubeUVHeight:X,aoMap:ht,lightMap:He,bumpMap:Ft,normalMap:xt,displacementMap:Tn,emissiveMap:I,normalMapObjectSpace:xt&&x.normalMapType===V3,normalMapTangentSpace:xt&&x.normalMapType===__,packedNormalMap:xt&&x.normalMapType===__&&tF(x.normalMap.format),metalnessMap:Ot,roughnessMap:je,anisotropy:ut,anisotropyMap:Q,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:se,clearcoatRoughnessMap:fe,dispersion:Mt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:E,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:ce,specularColorMap:oe,specularIntensityMap:Ne,transmission:k,transmissionMap:ke,thicknessMap:Je,gradientMap:L,opaque:x.transparent===!1&&x.blending===lo&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:K,alphaHash:xe,combine:x.combine,mapUv:_t&&v(x.map.channel),aoMapUv:ht&&v(x.aoMap.channel),lightMapUv:He&&v(x.lightMap.channel),bumpMapUv:Ft&&v(x.bumpMap.channel),normalMapUv:xt&&v(x.normalMap.channel),displacementMapUv:Tn&&v(x.displacementMap.channel),emissiveMapUv:I&&v(x.emissiveMap.channel),metalnessMapUv:Ot&&v(x.metalnessMap.channel),roughnessMapUv:je&&v(x.roughnessMap.channel),anisotropyMapUv:Q&&v(x.anisotropyMap.channel),clearcoatMapUv:ne&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(x.sheenRoughnessMap.channel),specularMapUv:ce&&v(x.specularMap.channel),specularColorMapUv:oe&&v(x.specularColorMap.channel),specularIntensityMapUv:Ne&&v(x.specularIntensityMap.channel),transmissionMapUv:ke&&v(x.transmissionMap.channel),thicknessMapUv:Je&&v(x.thicknessMap.channel),alphaMapUv:ae&&v(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xt||ut),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(_t||ae),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ze,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:_t&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:I&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hi,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)C.push(P),C.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(C,x),g(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function h(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function g(x,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function _(x){const C=p[x.type];let P;if(C){const D=Mi[C];P=AD.clone(D.uniforms)}else P=x.uniforms;return P}function S(x,C){let P=u.get(C);return P!==void 0?++P.usedTimes:(P=new ZU(t,C,x,r),c.push(P),u.set(C,P)),P}function w(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function b(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:b}}function iF(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function rF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function px(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,v,y,m,h){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:v,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:h},t[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=v,g.materialVariant=o(f),g.groupOrder=y,g.renderOrder=f.renderOrder,g.z=m,g.group=h),e++,g}function l(f,p,v,y,m,h){const g=a(f,p,v,y,m,h);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(f,p,v,y,m,h){const g=a(f,p,v,y,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function u(f,p){n.length>1&&n.sort(f||rF),i.length>1&&i.sort(p||px),r.length>1&&r.sort(p||px)}function d(){for(let f=e,p=t.length;f<p;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function sF(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new mx,t.set(i,[o])):r>=s.length?(o=new mx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function oF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new tt};break;case"SpotLight":n={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function aF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lF=0;function cF(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uF(t){const e=new oF,n=aF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new Lt,o=new Lt;function a(c){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,v=0,y=0,m=0,h=0,g=0,_=0,S=0,w=0,T=0,b=0;c.sort(cF);for(let C=0,P=c.length;C<P;C++){const D=c[C],O=D.color,j=D.intensity,$=D.distance;let N=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===vs?N=D.shadow.map.texture:N=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=O.r*j,d+=O.g*j,f+=O.b*j;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],j);b++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,F=n.get(D);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(O).multiplyScalar(j),G.distance=$,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[y]=G;const B=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,B.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[y]=B.matrix,D.castShadow){const F=n.get(D);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=N,S++}y++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(O).multiplyScalar(j),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const B=D.shadow,F=n.get(D);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,i.pointShadow[v]=F,i.pointShadowMap[v]=N,i.pointShadowMatrix[v]=D.shadow.matrix,_++}i.point[v]=G,v++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(j),G.groundColor.copy(D.groundColor).multiplyScalar(j),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==g||x.numPointShadows!==_||x.numSpotShadows!==S||x.numSpotMaps!==w||x.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,x.directionalLength=p,x.pointLength=v,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=g,x.numPointShadows=_,x.numSpotShadows=S,x.numSpotMaps=w,x.numLightProbes=b,i.version=lF++)}function l(c,u){let d=0,f=0,p=0,v=0,y=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const _=c[h];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function gx(t){const e=new uF(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function fF(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gx(t),e.set(r,[a])):s>=o.length?(a=new gx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const dF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pF=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],mF=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],vx=new Lt,qo=new V,md=new V;function gF(t,e,n){let i=new XM;const r=new at,s=new at,o=new Dt,a=new PD,l=new DD,c={},u=n.maxTextureSize,d={[Or]:Mn,[Mn]:Or,[Hi]:Hi},f=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:dF,fragmentShader:hF}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Nn;v.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ir(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let h=this.type;this.render=function(T,b,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===v3&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ec);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending($i),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const j=h!==this.type;j&&b.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(N=>N.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,N=T.length;$<N;$++){const G=T[$],B=G.shadow;if(B===void 0){Pe("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const F=B.getFrameExtents();r.multiply(F),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,B.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||j===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===na){if(G.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Di(r.x,r.y,{format:vs,type:tr,minFilter:sn,magFilter:sn,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new Eo(r.x,r.y,wi),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=nr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=qt,B.map.depthTexture.magFilter=qt}else G.isPointLight?(B.map=new tT(r.x),B.map.depthTexture=new TD(r.x,Li)):(B.map=new Di(r.x,r.y),B.map.depthTexture=new Eo(r.x,r.y,Li)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=nr,this.type===Ec?(B.map.depthTexture.compareFunction=X?cg:lg,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=qt,B.map.depthTexture.magFilter=qt);B.camera.updateProjectionMatrix()}const q=B.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<q;re++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,re),t.clear();else{re===0&&(t.setRenderTarget(B.map),t.clear());const de=B.getViewport(re);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),O.viewport(o)}if(G.isPointLight){const de=B.camera,ze=B.matrix,We=G.distance||de.far;We!==de.far&&(de.far=We,de.updateProjectionMatrix()),qo.setFromMatrixPosition(G.matrixWorld),de.position.copy(qo),md.copy(de.position),md.add(pF[re]),de.up.copy(mF[re]),de.lookAt(md),de.updateMatrixWorld(),ze.makeTranslation(-qo.x,-qo.y,-qo.z),vx.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),B._frustum.setFromProjectionMatrix(vx,de.coordinateSystem,de.reversedDepth)}else B.updateMatrices(G);i=B.getFrustum(),S(b,x,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===na&&g(B,x),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(C,P,D)};function g(T,b){const x=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Di(r.x,r.y,{format:vs,type:tr})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,x,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,x,p,y,null)}function _(T,b,x,C){let P=null;const D=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const O=P.uuid,j=b.uuid;let $=c[O];$===void 0&&($={},c[O]=$);let N=$[j];N===void 0&&(N=P.clone(),$[j]=N,b.addEventListener("dispose",w)),P=N}if(P.visible=b.visible,P.wireframe=b.wireframe,C===na?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:d[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=x}return P}function S(T,b,x,C,P){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===na)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const j=e.update(T),$=T.material;if(Array.isArray($)){const N=j.groups;for(let G=0,B=N.length;G<B;G++){const F=N[G],X=$[F.materialIndex];if(X&&X.visible){const q=_(T,X,C,P);T.onBeforeShadow(t,T,b,x,j,q,F),t.renderBufferDirect(x,null,j,q,T,F),T.onAfterShadow(t,T,b,x,j,q,F)}}}else if($.visible){const N=_(T,$,C,P);T.onBeforeShadow(t,T,b,x,j,N,null),t.renderBufferDirect(x,null,j,N,T,null),T.onAfterShadow(t,T,b,x,j,N,null)}}const O=T.children;for(let j=0,$=O.length;j<$;j++)S(O[j],b,x,C,P)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const C=c[x],P=T.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function vF(t,e){function n(){let L=!1;const ae=new Dt;let K=null;const xe=new Dt(0,0,0,0);return{setMask:function(ue){K!==ue&&!L&&(t.colorMask(ue,ue,ue,ue),K=ue)},setLocked:function(ue){L=ue},setClear:function(ue,ee,Ae,Fe,Ct){Ct===!0&&(ue*=Fe,ee*=Fe,Ae*=Fe),ae.set(ue,ee,Ae,Fe),xe.equals(ae)===!1&&(t.clearColor(ue,ee,Ae,Fe),xe.copy(ae))},reset:function(){L=!1,K=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,K=null,xe=null,ue=null;return{setReversed:function(ee){if(ae!==ee){const Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;const Fe=ue;ue=null,this.setClear(Fe)}},getReversed:function(){return ae},setTest:function(ee){ee?le(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ee){K!==ee&&!L&&(t.depthMask(ee),K=ee)},setFunc:function(ee){if(ae&&(ee=K3[ee]),xe!==ee){switch(ee){case Bh:t.depthFunc(t.NEVER);break;case Vh:t.depthFunc(t.ALWAYS);break;case zh:t.depthFunc(t.LESS);break;case yo:t.depthFunc(t.LEQUAL);break;case Hh:t.depthFunc(t.EQUAL);break;case Gh:t.depthFunc(t.GEQUAL);break;case Wh:t.depthFunc(t.GREATER);break;case Xh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=ee}},setLocked:function(ee){L=ee},setClear:function(ee){ue!==ee&&(ue=ee,ae&&(ee=1-ee),t.clearDepth(ee))},reset:function(){L=!1,K=null,xe=null,ue=null,ae=!1}}}function r(){let L=!1,ae=null,K=null,xe=null,ue=null,ee=null,Ae=null,Fe=null,Ct=null;return{setTest:function(st){L||(st?le(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(st){ae!==st&&!L&&(t.stencilMask(st),ae=st)},setFunc:function(st,Ii,mi){(K!==st||xe!==Ii||ue!==mi)&&(t.stencilFunc(st,Ii,mi),K=st,xe=Ii,ue=mi)},setOp:function(st,Ii,mi){(ee!==st||Ae!==Ii||Fe!==mi)&&(t.stencilOp(st,Ii,mi),ee=st,Ae=Ii,Fe=mi)},setLocked:function(st){L=st},setClear:function(st){Ct!==st&&(t.clearStencil(st),Ct=st)},reset:function(){L=!1,ae=null,K=null,xe=null,ue=null,ee=null,Ae=null,Fe=null,Ct=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,v=[],y=null,m=!1,h=null,g=null,_=null,S=null,w=null,T=null,b=null,x=new tt(0,0,0),C=0,P=!1,D=null,O=null,j=null,$=null,N=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=F>=2);let q=null,re={};const de=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),We=new Dt().fromArray(de),Le=new Dt().fromArray(ze);function Z(L,ae,K,xe){const ue=new Uint8Array(4),ee=t.createTexture();t.bindTexture(L,ee),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<K;Ae++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(ae+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return ee}const he={};he[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(yo),Ft(!1),xt(p_),le(t.CULL_FACE),ht($i);function le(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function Re(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Ie(L,ae){return f[L]!==ae?(t.bindFramebuffer(L,ae),f[L]=ae,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function De(L,ae){let K=v,xe=!1;if(L){K=p.get(ae),K===void 0&&(K=[],p.set(ae,K));const ue=L.textures;if(K.length!==ue.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Ae=ue.length;ee<Ae;ee++)K[ee]=t.COLOR_ATTACHMENT0+ee;K.length=ue.length,xe=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,xe=!0);xe&&t.drawBuffers(K)}function _t(L){return y!==L?(t.useProgram(L),y=L,!0):!1}const Xe={[Qr]:t.FUNC_ADD,[x3]:t.FUNC_SUBTRACT,[y3]:t.FUNC_REVERSE_SUBTRACT};Xe[S3]=t.MIN,Xe[E3]=t.MAX;const rt={[M3]:t.ZERO,[T3]:t.ONE,[w3]:t.SRC_COLOR,[Oh]:t.SRC_ALPHA,[D3]:t.SRC_ALPHA_SATURATE,[R3]:t.DST_COLOR,[C3]:t.DST_ALPHA,[A3]:t.ONE_MINUS_SRC_COLOR,[kh]:t.ONE_MINUS_SRC_ALPHA,[P3]:t.ONE_MINUS_DST_COLOR,[b3]:t.ONE_MINUS_DST_ALPHA,[L3]:t.CONSTANT_COLOR,[N3]:t.ONE_MINUS_CONSTANT_COLOR,[I3]:t.CONSTANT_ALPHA,[U3]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(L,ae,K,xe,ue,ee,Ae,Fe,Ct,st){if(L===$i){m===!0&&(Re(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),L!==_3){if(L!==h||st!==P){if((g!==Qr||w!==Qr)&&(t.blendEquation(t.FUNC_ADD),g=Qr,w=Qr),st)switch(L){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case m_:t.blendFunc(t.ONE,t.ONE);break;case g_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case v_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",L);break}else switch(L){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case m_:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case g_:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",L);break}_=null,S=null,T=null,b=null,x.set(0,0,0),C=0,h=L,P=st}return}ue=ue||ae,ee=ee||K,Ae=Ae||xe,(ae!==g||ue!==w)&&(t.blendEquationSeparate(Xe[ae],Xe[ue]),g=ae,w=ue),(K!==_||xe!==S||ee!==T||Ae!==b)&&(t.blendFuncSeparate(rt[K],rt[xe],rt[ee],rt[Ae]),_=K,S=xe,T=ee,b=Ae),(Fe.equals(x)===!1||Ct!==C)&&(t.blendColor(Fe.r,Fe.g,Fe.b,Ct),x.copy(Fe),C=Ct),h=L,P=!1}function He(L,ae){L.side===Hi?Re(t.CULL_FACE):le(t.CULL_FACE);let K=L.side===Mn;ae&&(K=!K),Ft(K),L.blending===lo&&L.transparent===!1?ht($i):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),I(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function xt(L){L!==m3?(le(t.CULL_FACE),L!==O&&(L===p_?t.cullFace(t.BACK):L===g3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),O=L}function Tn(L){L!==j&&(B&&t.lineWidth(L),j=L)}function I(L,ae,K){L?(le(t.POLYGON_OFFSET_FILL),($!==ae||N!==K)&&($=ae,N=K,o.getReversed()&&(ae=-ae),t.polygonOffset(ae,K))):Re(t.POLYGON_OFFSET_FILL)}function Ot(L){L?le(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function je(L){L===void 0&&(L=t.TEXTURE0+G-1),q!==L&&(t.activeTexture(L),q=L)}function ut(L,ae,K){K===void 0&&(q===null?K=t.TEXTURE0+G-1:K=q);let xe=re[K];xe===void 0&&(xe={type:void 0,texture:void 0},re[K]=xe),(xe.type!==L||xe.texture!==ae)&&(q!==K&&(t.activeTexture(K),q=K),t.bindTexture(L,ae||he[L]),xe.type=L,xe.texture=ae)}function pe(){const L=re[q];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Mt(){try{t.compressedTexImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function E(){try{t.texSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function k(){try{t.texSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function se(){try{t.texStorage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function fe(){try{t.texStorage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Y(){try{t.texImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function _e(L){return d[L]!==void 0?d[L]:t.getParameter(L)}function Se(L,ae){d[L]!==ae&&(t.pixelStorei(L,ae),d[L]=ae)}function ce(L){We.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function oe(L){Le.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Le.copy(L))}function Ne(L,ae){let K=c.get(ae);K===void 0&&(K=new WeakMap,c.set(ae,K));let xe=K.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(ae,L.name),K.set(L,xe))}function ke(L,ae){const xe=c.get(ae).get(L);l.get(ae)!==xe&&(t.uniformBlockBinding(ae,xe,L.__bindingPointIndex),l.set(ae,xe))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},q=null,re={},f={},p=new WeakMap,v=[],y=null,m=!1,h=null,g=null,_=null,S=null,w=null,T=null,b=null,x=new tt(0,0,0),C=0,P=!1,D=null,O=null,j=null,$=null,N=null,We.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Re,bindFramebuffer:Ie,drawBuffers:De,useProgram:_t,setBlending:ht,setMaterial:He,setFlipSided:Ft,setCullFace:xt,setLineWidth:Tn,setPolygonOffset:I,setScissorTest:Ot,activeTexture:je,bindTexture:ut,unbindTexture:pe,compressedTexImage2D:Mt,compressedTexImage3D:A,texImage2D:Y,texImage3D:J,pixelStorei:Se,getParameter:_e,updateUBOMapping:Ne,uniformBlockBinding:ke,texStorage2D:se,texStorage3D:fe,texSubImage2D:E,texSubImage3D:k,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:ce,viewport:oe,reset:Je}}function _F(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return v?new OffscreenCanvas(A,E):hu("canvas")}function m(A,E,k){let Q=1;const ne=Mt(A);if((ne.width>k||ne.height>k)&&(Q=k/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(Q*ne.width),fe=Math.floor(Q*ne.height);f===void 0&&(f=y(se,fe));const Y=E?y(se,fe):f;return Y.width=se,Y.height=fe,Y.getContext("2d").drawImage(A,0,0,se,fe),Pe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+se+"x"+fe+")."),Y}else return"data"in A&&Pe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function h(A){return A.generateMipmaps}function g(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(A,E,k,Q,ne,se=!1){if(A!==null){if(t[A]!==void 0)return t[A];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;Q&&(fe=e.get("EXT_texture_norm16"),fe||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=E;if(E===t.RED&&(k===t.FLOAT&&(Y=t.R32F),k===t.HALF_FLOAT&&(Y=t.R16F),k===t.UNSIGNED_BYTE&&(Y=t.R8),k===t.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),k===t.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.R8UI),k===t.UNSIGNED_SHORT&&(Y=t.R16UI),k===t.UNSIGNED_INT&&(Y=t.R32UI),k===t.BYTE&&(Y=t.R8I),k===t.SHORT&&(Y=t.R16I),k===t.INT&&(Y=t.R32I)),E===t.RG&&(k===t.FLOAT&&(Y=t.RG32F),k===t.HALF_FLOAT&&(Y=t.RG16F),k===t.UNSIGNED_BYTE&&(Y=t.RG8),k===t.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),k===t.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RG8UI),k===t.UNSIGNED_SHORT&&(Y=t.RG16UI),k===t.UNSIGNED_INT&&(Y=t.RG32UI),k===t.BYTE&&(Y=t.RG8I),k===t.SHORT&&(Y=t.RG16I),k===t.INT&&(Y=t.RG32I)),E===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),k===t.UNSIGNED_INT&&(Y=t.RGB32UI),k===t.BYTE&&(Y=t.RGB8I),k===t.SHORT&&(Y=t.RGB16I),k===t.INT&&(Y=t.RGB32I)),E===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),k===t.UNSIGNED_INT&&(Y=t.RGBA32UI),k===t.BYTE&&(Y=t.RGBA8I),k===t.SHORT&&(Y=t.RGBA16I),k===t.INT&&(Y=t.RGBA32I)),E===t.RGB&&(k===t.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),k===t.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),E===t.RGBA){const J=se?fu:Ye.getTransfer(ne);k===t.FLOAT&&(Y=t.RGBA32F),k===t.HALF_FLOAT&&(Y=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Y=J===nt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),k===t.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(A,E){let k;return A?E===null||E===Li||E===Ha?k=t.DEPTH24_STENCIL8:E===wi?k=t.DEPTH32F_STENCIL8:E===za&&(k=t.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Li||E===Ha?k=t.DEPTH_COMPONENT24:E===wi?k=t.DEPTH_COMPONENT32F:E===za&&(k=t.DEPTH_COMPONENT16),k}function T(A,E){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function b(A){const E=A.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&d.delete(E)}function x(A){const E=A.target;E.removeEventListener("dispose",x),D(E)}function C(A){const E=i.get(A);if(E.__webglInit===void 0)return;const k=A.source,Q=p.get(k);if(Q){const ne=Q[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(A),Object.keys(Q).length===0&&p.delete(k)}i.remove(A)}function P(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const k=A.source,Q=p.get(k);delete Q[E.__cacheKey],o.memory.textures--}function D(A){const E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ne=0;ne<E.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=A.textures;for(let Q=0,ne=k.length;Q<ne;Q++){const se=i.get(k[Q]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(A)}let O=0;function j(){O=0}function $(){return O}function N(A){O=A}function G(){const A=O;return A>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function B(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function F(A,E){const k=i.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const Q=A.image;if(Q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(k,A,E);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function X(A,E){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Re(k,A,E);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function q(A,E){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Re(k,A,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function re(A,E){const k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Ie(k,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const de={[jh]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[Yh]:t.MIRRORED_REPEAT},ze={[qt]:t.NEAREST,[k3]:t.NEAREST_MIPMAP_NEAREST,[Pl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[kf]:t.LINEAR_MIPMAP_NEAREST,[ss]:t.LINEAR_MIPMAP_LINEAR},We={[z3]:t.NEVER,[j3]:t.ALWAYS,[H3]:t.LESS,[lg]:t.LEQUAL,[G3]:t.EQUAL,[cg]:t.GEQUAL,[W3]:t.GREATER,[X3]:t.NOTEQUAL};function Le(A,E){if(E.type===wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===kf||E.magFilter===Pl||E.magFilter===ss||E.minFilter===sn||E.minFilter===kf||E.minFilter===Pl||E.minFilter===ss)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,de[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,de[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,de[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ze[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ze[E.minFilter]),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,We[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==Pl&&E.minFilter!==ss||E.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Z(A,E){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",b));const Q=E.source;let ne=p.get(Q);ne===void 0&&(ne={},p.set(Q,ne));const se=B(E);if(se!==A.__cacheKey){ne[se]===void 0&&(ne[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[se].usedTimes++;const fe=ne[A.__cacheKey];fe!==void 0&&(ne[A.__cacheKey].usedTimes--,fe.usedTimes===0&&P(E)),A.__cacheKey=se,A.__webglTexture=ne[se].texture}return k}function he(A,E,k){return Math.floor(Math.floor(A/k)/E)}function le(A,E,k,Q){const se=A.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,k,Q,E.data);else{se.sort((Se,ce)=>Se.start-ce.start);let fe=0;for(let Se=1;Se<se.length;Se++){const ce=se[fe],oe=se[Se],Ne=ce.start+ce.count,ke=he(oe.start,E.width,4),Je=he(ce.start,E.width,4);oe.start<=Ne+1&&ke===Je&&he(oe.start+oe.count-1,E.width,4)===ke?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++fe,se[fe]=oe)}se.length=fe+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Se=0,ce=se.length;Se<ce;Se++){const oe=se[Se],Ne=Math.floor(oe.start/4),ke=Math.ceil(oe.count/4),Je=Ne%E.width,L=Math.floor(Ne/E.width),ae=ke,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Je,L,ae,K,k,Q,E.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function Re(A,E,k){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=Z(A,E),se=E.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+k);const fe=i.get(se);if(se.version!==fe.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const K=Ye.getPrimaries(Ye.workingColorSpace),xe=E.colorSpace===Sr?null:Ye.getPrimaries(E.colorSpace),ue=E.colorSpace===Sr||K===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let J=m(E.image,!1,r.maxTextureSize);J=pe(E,J);const _e=s.convert(E.format,E.colorSpace),Se=s.convert(E.type);let ce=S(E.internalFormat,_e,Se,E.normalized,E.colorSpace,E.isVideoTexture);Le(Q,E);let oe;const Ne=E.mipmaps,ke=E.isVideoTexture!==!0,Je=fe.__version===void 0||ne===!0,L=se.dataReady,ae=T(E,J);if(E.isDepthTexture)ce=w(E.format===os,E.type),Je&&(ke?n.texStorage2D(t.TEXTURE_2D,1,ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,null));else if(E.isDataTexture)if(Ne.length>0){ke&&Je&&n.texStorage2D(t.TEXTURE_2D,ae,ce,Ne[0].width,Ne[0].height);for(let K=0,xe=Ne.length;K<xe;K++)oe=Ne[K],ke?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,oe.width,oe.height,_e,Se,oe.data):n.texImage2D(t.TEXTURE_2D,K,ce,oe.width,oe.height,0,_e,Se,oe.data);E.generateMipmaps=!1}else ke?(Je&&n.texStorage2D(t.TEXTURE_2D,ae,ce,J.width,J.height),L&&le(E,J,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ce,Ne[0].width,Ne[0].height,J.depth);for(let K=0,xe=Ne.length;K<xe;K++)if(oe=Ne[K],E.format!==li)if(_e!==null)if(ke){if(L)if(E.layerUpdates.size>0){const ue=$_(oe.width,oe.height,E.format,E.type);for(const ee of E.layerUpdates){const Ae=oe.data.subarray(ee*ue/oe.data.BYTES_PER_ELEMENT,(ee+1)*ue/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ee,oe.width,oe.height,1,_e,Ae)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,J.depth,_e,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,ce,oe.width,oe.height,J.depth,0,oe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,J.depth,_e,Se,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,ce,oe.width,oe.height,J.depth,0,_e,Se,oe.data)}else{ke&&Je&&n.texStorage2D(t.TEXTURE_2D,ae,ce,Ne[0].width,Ne[0].height);for(let K=0,xe=Ne.length;K<xe;K++)oe=Ne[K],E.format!==li?_e!==null?ke?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,oe.width,oe.height,_e,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,K,ce,oe.width,oe.height,0,oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,oe.width,oe.height,_e,Se,oe.data):n.texImage2D(t.TEXTURE_2D,K,ce,oe.width,oe.height,0,_e,Se,oe.data)}else if(E.isDataArrayTexture)if(ke){if(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ce,J.width,J.height,J.depth),L)if(E.layerUpdates.size>0){const K=$_(J.width,J.height,E.format,E.type);for(const xe of E.layerUpdates){const ue=J.data.subarray(xe*K/J.data.BYTES_PER_ELEMENT,(xe+1)*K/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,J.width,J.height,1,_e,Se,ue)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(E.isData3DTexture)ke?(Je&&n.texStorage3D(t.TEXTURE_3D,ae,ce,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(E.isFramebufferTexture){if(Je)if(ke)n.texStorage2D(t.TEXTURE_2D,ae,ce,J.width,J.height);else{let K=J.width,xe=J.height;for(let ue=0;ue<ae;ue++)n.texImage2D(t.TEXTURE_2D,ue,ce,K,xe,0,_e,Se,null),K>>=1,xe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),d.add(E),K.onpaint=Fe=>{const Ct=Fe.changedElements;for(const st of d)Ct.includes(st.image)&&(st.needsUpdate=!0)},K.requestPaint();return}const xe=0,ue=t.RGBA,ee=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,ue,ee,Ae,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ke&&Je){const K=Mt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,ae,ce,K.width,K.height)}for(let K=0,xe=Ne.length;K<xe;K++)oe=Ne[K],ke?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e,Se,oe):n.texImage2D(t.TEXTURE_2D,K,ce,_e,Se,oe);E.generateMipmaps=!1}else if(ke){if(Je){const K=Mt(J);n.texStorage2D(t.TEXTURE_2D,ae,ce,K.width,K.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,ce,_e,Se,J);h(E)&&g(Q),fe.__version=se.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ie(A,E,k){if(E.image.length!==6)return;const Q=Z(A,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);const se=i.get(ne);if(ne.version!==se.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const fe=Ye.getPrimaries(Ye.workingColorSpace),Y=E.colorSpace===Sr?null:Ye.getPrimaries(E.colorSpace),J=E.colorSpace===Sr||fe===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!_e&&!Se?ce[ee]=m(E.image[ee],!0,r.maxCubemapSize):ce[ee]=Se?E.image[ee].image:E.image[ee],ce[ee]=pe(E,ce[ee]);const oe=ce[0],Ne=s.convert(E.format,E.colorSpace),ke=s.convert(E.type),Je=S(E.internalFormat,Ne,ke,E.normalized,E.colorSpace),L=E.isVideoTexture!==!0,ae=se.__version===void 0||Q===!0,K=ne.dataReady;let xe=T(E,oe);Le(t.TEXTURE_CUBE_MAP,E);let ue;if(_e){L&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Je,oe.width,oe.height);for(let ee=0;ee<6;ee++){ue=ce[ee].mipmaps;for(let Ae=0;Ae<ue.length;Ae++){const Fe=ue[Ae];E.format!==li?Ne!==null?L?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Fe.width,Fe.height,Ne,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Je,Fe.width,Fe.height,0,Fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Fe.width,Fe.height,Ne,ke,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Je,Fe.width,Fe.height,0,Ne,ke,Fe.data)}}}else{if(ue=E.mipmaps,L&&ae){ue.length>0&&xe++;const ee=Mt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Ne,ke,ce[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,ce[ee].width,ce[ee].height,0,Ne,ke,ce[ee].data);for(let Ae=0;Ae<ue.length;Ae++){const Ct=ue[Ae].image[ee].image;L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Ct.width,Ct.height,Ne,ke,Ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Je,Ct.width,Ct.height,0,Ne,ke,Ct.data)}}else{L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,ke,ce[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,Ne,ke,ce[ee]);for(let Ae=0;Ae<ue.length;Ae++){const Fe=ue[Ae];L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Ne,ke,Fe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Je,Ne,ke,Fe.image[ee])}}}h(E)&&g(t.TEXTURE_CUBE_MAP),se.__version=ne.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function De(A,E,k,Q,ne,se){const fe=s.convert(k.format,k.colorSpace),Y=s.convert(k.type),J=S(k.internalFormat,fe,Y,k.normalized,k.colorSpace),_e=i.get(E),Se=i.get(k);if(Se.__renderTarget=E,!_e.__hasExternalTextures){const ce=Math.max(1,E.width>>se),oe=Math.max(1,E.height>>se);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,se,J,ce,oe,E.depth,0,fe,Y,null):n.texImage2D(ne,se,J,ce,oe,0,fe,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,0,Ot(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,Se.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(A,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer){const Q=E.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,se=w(E.stencilBuffer,ne),fe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;je(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ot(E),se,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ot(E),se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,se,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,A)}else{const Q=E.textures;for(let ne=0;ne<Q.length;ne++){const se=Q[ne],fe=s.convert(se.format,se.colorSpace),Y=s.convert(se.type),J=S(se.internalFormat,fe,Y,se.normalized,se.colorSpace);je(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ot(E),J,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ot(E),J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(A,E,k){const Q=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",b)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Le(t.TEXTURE_CUBE_MAP,E.depthTexture);const _e=s.convert(E.depthTexture.format),Se=s.convert(E.depthTexture.type);let ce;E.depthTexture.format===nr?ce=t.DEPTH_COMPONENT24:E.depthTexture.format===os&&(ce=t.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ce,E.width,E.height,0,_e,Se,null)}}else F(E.depthTexture,0);const se=ne.__webglTexture,fe=Ot(E),Y=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,J=E.depthTexture.format===os?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===nr)je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,se,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,se,0);else if(E.depthTexture.format===os)je(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,se,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,se,0);else throw new Error("Unknown depthTexture format")}function rt(A){const E=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Q}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let Q=0;Q<6;Q++)Xe(E.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Xe(E.__webglFramebuffer[0],A,0):Xe(E.__webglFramebuffer,A,0)}else if(k){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),_t(E.__webglDepthbuffer[Q],A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,se)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),_t(E.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(A,E,k){const Q=i.get(A);E!==void 0&&De(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&rt(A)}function He(A){const E=A.texture,k=i.get(A),Q=i.get(E);A.addEventListener("dispose",x);const ne=A.textures,se=A.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),se){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let J=0;J<E.mipmaps.length;J++)k.__webglFramebuffer[Y][J]=t.createFramebuffer()}else k.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<E.mipmaps.length;Y++)k.__webglFramebuffer[Y]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(fe)for(let Y=0,J=ne.length;Y<J;Y++){const _e=i.get(ne[Y]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&je(A)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const J=ne[Y];k.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const _e=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),ce=S(J.internalFormat,_e,Se,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),oe=Ot(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),_t(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(t.TEXTURE_CUBE_MAP,E);for(let Y=0;Y<6;Y++)if(E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)De(k.__webglFramebuffer[Y][J],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else De(k.__webglFramebuffer[Y],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(E)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let Y=0,J=ne.length;Y<J;Y++){const _e=ne[Y],Se=i.get(_e);let ce=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Se.__webglTexture),Le(ce,_e),De(k.__webglFramebuffer,A,_e,t.COLOR_ATTACHMENT0+Y,ce,0),h(_e)&&g(ce)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,Q.__webglTexture),Le(Y,E),E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)De(k.__webglFramebuffer[J],A,E,t.COLOR_ATTACHMENT0,Y,J);else De(k.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,Y,0);h(E)&&g(Y),n.unbindTexture()}A.depthBuffer&&rt(A)}function Ft(A){const E=A.textures;for(let k=0,Q=E.length;k<Q;k++){const ne=E[k];if(h(ne)){const se=_(A),fe=i.get(ne).__webglTexture;n.bindTexture(se,fe),g(se),n.unbindTexture()}}}const xt=[],Tn=[];function I(A){if(A.samples>0){if(je(A)===!1){const E=A.textures,k=A.width,Q=A.height;let ne=t.COLOR_BUFFER_BIT;const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(A),Y=E.length>1;if(Y)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Se=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,ne,t.NEAREST),l===!0&&(xt.length=0,Tn.length=0,xt.push(t.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xt.push(se),Tn.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Tn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Se=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ot(A){return Math.min(r.maxSamples,A.samples)}function je(A){const E=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(A){const E=o.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function pe(A,E){const k=A.colorSpace,Q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==uu&&k!==Sr&&(Ye.getTransfer(k)===nt?(Q!==li||ne!==Hn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),E}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.getTextureUnits=$,this.setTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=re,this.rebindTextures=ht,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xF(t,e){function n(i,r=Sr){let s;const o=Ye.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===ig)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===NM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===IM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===DM)return t.BYTE;if(i===LM)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===ng)return t.INT;if(i===Li)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===UM)return t.ALPHA;if(i===FM)return t.RGB;if(i===li)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===os)return t.DEPTH_STENCIL;if(i===OM)return t.RED;if(i===sg)return t.RED_INTEGER;if(i===vs)return t.RG;if(i===og)return t.RG_INTEGER;if(i===ag)return t.RGBA_INTEGER;if(i===Mc||i===Tc||i===wc||i===Ac)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$h||i===qh||i===Kh||i===Zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qh||i===Jh||i===ep||i===tp||i===np||i===lu||i===ip)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qh||i===Jh)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ep)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===tp)return s.COMPRESSED_R11_EAC;if(i===np)return s.COMPRESSED_SIGNED_R11_EAC;if(i===lu)return s.COMPRESSED_RG11_EAC;if(i===ip)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rp||i===sp||i===op||i===ap||i===lp||i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===vp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===op)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ap)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===up)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vp)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_p||i===xp||i===yp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_p)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Ep||i===cu||i===Mp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ep)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ha?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const yF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new qM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ni({vertexShader:yF,fragmentShader:SF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ir(new Bu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MF extends Ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",m=new EF,h={},g=n.getContextAttributes();let _=null,S=null;const w=[],T=[],b=new at;let x=null;const C=new zn;C.viewport=new Dt;const P=new zn;P.viewport=new Dt;const D=[C,P],O=new ND;let j=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=w[Z];return he===void 0&&(he=new jf,w[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=w[Z];return he===void 0&&(he=new jf,w[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=w[Z];return he===void 0&&(he=new jf,w[Z]=he),he.getHandSpace()};function N(Z){const he=T.indexOf(Z.inputSource);if(he===-1)return;const le=w[he];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||o),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",B);for(let Z=0;Z<w.length;Z++){const he=T[Z];he!==null&&(T[Z]=null,w[Z].disconnect(he))}j=null,$=null,m.reset();for(const Z in h)delete h[Z];e.setRenderTarget(_),p=null,f=null,d=null,r=null,S=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",G),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Re=null,Ie=null;g.depth&&(Ie=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?os:nr,Re=g.stencil?Ha:Li);const De={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Di(f.textureWidth,f.textureHeight,{format:li,type:Hn,depthTexture:new Eo(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Di(p.framebufferWidth,p.framebufferHeight,{format:li,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Z){for(let he=0;he<Z.removed.length;he++){const le=Z.removed[he],Re=T.indexOf(le);Re>=0&&(T[Re]=null,w[Re].disconnect(le))}for(let he=0;he<Z.added.length;he++){const le=Z.added[he];let Re=T.indexOf(le);if(Re===-1){for(let De=0;De<w.length;De++)if(De>=T.length){T.push(le),Re=De;break}else if(T[De]===null){T[De]=le,Re=De;break}if(Re===-1)break}const Ie=w[Re];Ie&&Ie.connect(le)}}const F=new V,X=new V;function q(Z,he,le){F.setFromMatrixPosition(he.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const Re=F.distanceTo(X),Ie=he.projectionMatrix.elements,De=le.projectionMatrix.elements,_t=Ie[14]/(Ie[10]-1),Xe=Ie[14]/(Ie[10]+1),rt=(Ie[9]+1)/Ie[5],ht=(Ie[9]-1)/Ie[5],He=(Ie[8]-1)/Ie[0],Ft=(De[8]+1)/De[0],xt=_t*He,Tn=_t*Ft,I=Re/(-He+Ft),Ot=I*-He;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ot),Z.translateZ(I),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const je=_t+I,ut=Xe+I,pe=xt-Ot,Mt=Tn+(Re-Ot),A=rt*Xe/ut*je,E=ht*Xe/ut*je;Z.projectionMatrix.makePerspective(pe,Mt,A,E,je,ut),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let he=Z.near,le=Z.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(le=m.depthFar)),O.near=P.near=C.near=he,O.far=P.far=C.far=le,(j!==O.near||$!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),j=O.near,$=O.far),O.layers.mask=Z.layers.mask|6,C.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Re=Z.parent,Ie=O.cameras;re(O,Re);for(let De=0;De<Ie.length;De++)re(Ie[De],Re);Ie.length===2?q(O,C,P):O.projectionMatrix.copy(C.projectionMatrix),de(Z,O,Re)};function de(Z,he,le){le===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=wp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return h[Z]};let ze=null;function We(Z,he){if(u=he.getViewerPose(c||o),v=he,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Re=!1;le.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let Xe=0;Xe<le.length;Xe++){const rt=le[Xe];let ht=null;if(p!==null)ht=p.getViewport(rt);else{const Ft=d.getViewSubImage(f,rt);ht=Ft.viewport,Xe===0&&(e.setRenderTargetTextures(S,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(S))}let He=D[Xe];He===void 0&&(He=new zn,He.layers.enable(Xe),He.viewport=new Dt,D[Xe]=He),He.matrix.fromArray(rt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(rt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ht.x,ht.y,ht.width,ht.height),Xe===0&&(O.matrix.copy(He.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(He)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Xe=d.getDepthInformation(le[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<le.length;Xe++){const rt=le[Xe].camera;if(rt){let ht=h[rt];ht||(ht=new qM,h[rt]=ht);const He=d.getCameraImage(rt);ht.sourceTexture=He}}}}for(let le=0;le<w.length;le++){const Re=T[le],Ie=w[le];Re!==null&&Ie!==void 0&&Ie.update(Re,he,c||o)}ze&&ze(Z,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),v=null}const Le=new JM;Le.setAnimationLoop(We),this.setAnimationLoop=function(Z){ze=Z},this.dispose=function(){}}}const TF=new Lt,oT=new Ue;oT.set(-1,0,0,0,1,0,0,0,1);function wF(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,KM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,_,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Mn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Mn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(TF.makeRotationFromEuler(S)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(oT),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AF(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function c(g,_){let S=r[g.id];S===void 0&&(v(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(g,w);const T=e.render.frame;s[g.id]!==T&&(f(g),s[g.id]=T)}function u(g){const _=d();g.__bindingPointIndex=_;const S=t.createBuffer(),w=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],S=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,b=S.length;T<b;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let C=0,P=x.length;C<P;C++){const D=x[C];if(p(D,T,C,w)===!0){const O=D.__offset,j=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let N=0;N<j.length;N++){const G=j[N],B=y(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,O+$,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):ArrayBuffer.isView(G)?D.__data.set(new G.constructor(G.buffer,G.byteOffset,D.__data.length)):(G.toArray(D.__data,$),$+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,w){const T=g.value,b=_+"_"+S;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:ArrayBuffer.isView(T)?w[b]=T.slice():w[b]=T.clone(),!0;{const x=w[b];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[b]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function v(g){const _=g.uniforms;let S=0;const w=16;for(let b=0,x=_.length;b<x;b++){const C=Array.isArray(_[b])?_[b]:[_[b]];for(let P=0,D=C.length;P<D;P++){const O=C[P],j=Array.isArray(O.value)?O.value:[O.value];for(let $=0,N=j.length;$<N;$++){const G=j[$],B=y(G),F=S%w,X=F%B.boundary,q=F+X;S+=X,q!==0&&w-q<B.storage&&(S+=w-q),O.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=B.storage}}}const T=S%w;return T>0&&(S+=w-T),g.__size=S,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(_.boundary=16,_.storage=g.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const CF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function bF(){return xi===null&&(xi=new vD(CF,16,16,vs,tr),xi.name="DFG_LUT",xi.minFilter=sn,xi.magFilter=sn,xi.wrapS=Xi,xi.wrapT=Xi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class RF{constructor(e={}){const{canvas:n=$3(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=p,m=new Set([ag,og,sg]),h=new Set([Hn,Li,za,Ha,ig,rg]),g=new Uint32Array(4),_=new Int32Array(4),S=new V;let w=null,T=null;const b=[],x=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,O=null;this._outputColorSpace=kn;let j=0,$=0,N=null,G=-1,B=null;const F=new Dt,X=new Dt;let q=null;const re=new tt(0);let de=0,ze=n.width,We=n.height,Le=1,Z=null,he=null;const le=new Dt(0,0,ze,We),Re=new Dt(0,0,ze,We);let Ie=!1;const De=new XM;let _t=!1,Xe=!1;const rt=new Lt,ht=new V,He=new Dt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Tn(){return N===null?Le:1}let I=i;function Ot(M,U){return n.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tg}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),I===null){const U="webgl2";if(I=Ot(U,M),I===null)throw Ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ze("WebGLRenderer: "+M.message),M}let je,ut,pe,Mt,A,E,k,Q,ne,se,fe,Y,J,_e,Se,ce,oe,Ne,ke,Je,L,ae,K;function xe(){je=new bI(I),je.init(),L=new xF(I,je),ut=new yI(I,je,e,L),pe=new vF(I,je),ut.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),Mt=new DI(I),A=new iF,E=new _F(I,je,pe,A,ut,L,Mt),k=new CI(P),Q=new UD(I),ae=new _I(I,Q),ne=new RI(I,Q,Mt,ae),se=new NI(I,ne,Q,ae,Mt),Ne=new LI(I,ut,E),Se=new SI(A),fe=new nF(P,k,je,ut,ae,Se),Y=new wF(P,A),J=new sF,_e=new fF(je),oe=new vI(P,k,pe,se,v,l),ce=new gF(P,se,ut),K=new AF(I,Mt,ut,pe),ke=new xI(I,je,Mt),Je=new PI(I,je,Mt),Mt.programs=fe.programs,P.capabilities=ut,P.extensions=je,P.properties=A,P.renderLists=J,P.shadowMap=ce,P.state=pe,P.info=Mt}xe(),y!==Hn&&(C=new UI(y,n.width,n.height,r,s));const ue=new MF(P,I);this.xr=ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(M){M!==void 0&&(Le=M,this.setSize(ze,We,!1))},this.getSize=function(M){return M.set(ze,We)},this.setSize=function(M,U,W=!0){if(ue.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=M,We=U,n.width=Math.floor(M*Le),n.height=Math.floor(U*Le),W===!0&&(n.style.width=M+"px",n.style.height=U+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ze*Le,We*Le).floor()},this.setDrawingBufferSize=function(M,U,W){ze=M,We=U,Le=W,n.width=Math.floor(M*W),n.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(y===Hn){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(F)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,U,W,z){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,U,W,z),pe.viewport(F.copy(le).multiplyScalar(Le).round())},this.getScissor=function(M){return M.copy(Re)},this.setScissor=function(M,U,W,z){M.isVector4?Re.set(M.x,M.y,M.z,M.w):Re.set(M,U,W,z),pe.scissor(X.copy(Re).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(M){pe.setScissorTest(Ie=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){he=M},this.getClearColor=function(M){return M.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let z=0;if(M){let H=!1;if(N!==null){const ve=N.texture.format;H=m.has(ve)}if(H){const ve=N.texture.type,Ee=h.has(ve),ge=oe.getClearColor(),we=oe.getClearAlpha(),Ce=ge.r,Oe=ge.g,Ve=ge.b;Ee?(g[0]=Ce,g[1]=Oe,g[2]=Ve,g[3]=we,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ce,_[1]=Oe,_[2]=Ve,_[3]=we,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),oe.dispose(),J.dispose(),_e.dispose(),A.dispose(),k.dispose(),se.dispose(),ae.dispose(),K.dispose(),fe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",vg),ue.removeEventListener("sessionend",_g),Hr.stop()};function ee(M){M.preventDefault(),M_("WebGLRenderer: Context Lost."),D=!0}function Ae(){M_("WebGLRenderer: Context Restored."),D=!1;const M=Mt.autoReset,U=ce.enabled,W=ce.autoUpdate,z=ce.needsUpdate,H=ce.type;xe(),Mt.autoReset=M,ce.enabled=U,ce.autoUpdate=W,ce.needsUpdate=z,ce.type=H}function Fe(M){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ct(M){const U=M.target;U.removeEventListener("dispose",Ct),st(U)}function st(M){Ii(M),A.remove(M)}function Ii(M){const U=A.get(M).programs;U!==void 0&&(U.forEach(function(W){fe.releaseProgram(W)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,z,H,ve){U===null&&(U=Ft);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,ge=cT(M,U,W,z,H);pe.setMaterial(z,Ee);let we=W.index,Ce=1;if(z.wireframe===!0){if(we=ne.getWireframeAttribute(W),we===void 0)return;Ce=2}const Oe=W.drawRange,Ve=W.attributes.position;let be=Oe.start*Ce,ot=(Oe.start+Oe.count)*Ce;ve!==null&&(be=Math.max(be,ve.start*Ce),ot=Math.min(ot,(ve.start+ve.count)*Ce)),we!==null?(be=Math.max(be,0),ot=Math.min(ot,we.count)):Ve!=null&&(be=Math.max(be,0),ot=Math.min(ot,Ve.count));const bt=ot-be;if(bt<0||bt===1/0)return;ae.setup(H,z,ge,W,we);let Tt,lt=ke;if(we!==null&&(Tt=Q.get(we),lt=Je,lt.setIndex(Tt)),H.isMesh)z.wireframe===!0?(pe.setLineWidth(z.wireframeLinewidth*Tn()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(H.isLine){let Qt=z.linewidth;Qt===void 0&&(Qt=1),pe.setLineWidth(Qt*Tn()),H.isLineSegments?lt.setMode(I.LINES):H.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else H.isPoints?lt.setMode(I.POINTS):H.isSprite&&lt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(je.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Qt=H._multiDrawStarts,ye=H._multiDrawCounts,wn=H._multiDrawCount,Ke=we?Q.get(we).bytesPerElement:1,Fn=A.get(z).currentProgram.getUniforms();for(let gi=0;gi<wn;gi++)Fn.setValue(I,"_gl_DrawID",gi),lt.render(Qt[gi]/Ke,ye[gi])}else if(H.isInstancedMesh)lt.renderInstances(be,bt,H.count);else if(W.isInstancedBufferGeometry){const Qt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Qt);lt.renderInstances(be,bt,ye)}else lt.render(be,bt)};function mi(M,U,W){M.transparent===!0&&M.side===Hi&&M.forceSinglePass===!1?(M.side=Mn,M.needsUpdate=!0,sl(M,U,W),M.side=Or,M.needsUpdate=!0,sl(M,U,W),M.side=Hi):sl(M,U,W)}this.compile=function(M,U,W=null){W===null&&(W=M),T=_e.get(W),T.init(U),x.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),M!==W&&M.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const z=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ve=H.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const ge=ve[Ee];mi(ge,W,H),z.add(ge)}else mi(ve,W,H),z.add(ve)}),T=x.pop(),z},this.compileAsync=function(M,U,W=null){const z=this.compile(M,U,W);return new Promise(H=>{function ve(){if(z.forEach(function(Ee){A.get(Ee).currentProgram.isReady()&&z.delete(Ee)}),z.size===0){H(M);return}setTimeout(ve,10)}je.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Hu=null;function aT(M){Hu&&Hu(M)}function vg(){Hr.stop()}function _g(){Hr.start()}const Hr=new JM;Hr.setAnimationLoop(aT),typeof self<"u"&&Hr.setContext(self),this.setAnimationLoop=function(M){Hu=M,ue.setAnimationLoop(M),M===null?Hr.stop():Hr.start()},ue.addEventListener("sessionstart",vg),ue.addEventListener("sessionend",_g),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,U);const W=ue.enabled===!0&&ue.isPresenting===!0,z=C!==null&&(N===null||W)&&C.begin(P,N);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(U),U=ue.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,N),T=_e.get(M,x.length),T.init(U),T.state.textureUnits=E.getTextureUnits(),x.push(T),rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),De.setFromProjectionMatrix(rt,Ai,U.reversedDepth),Xe=this.localClippingEnabled,_t=Se.init(this.clippingPlanes,Xe),w=J.get(M,b.length),w.init(),b.push(w),ue.enabled===!0&&ue.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Gu(Ee,U,-1/0,P.sortObjects)}Gu(M,U,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(Z,he),xt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,xt&&oe.addToRenderList(w,M),this.info.render.frame++,_t===!0&&Se.beginShadows();const H=T.state.shadowsArray;if(ce.render(H,M,U),_t===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&C.hasRenderPass())===!1){const Ee=w.opaque,ge=w.transmissive;if(T.setupLights(),U.isArrayCamera){const we=U.cameras;if(ge.length>0)for(let Ce=0,Oe=we.length;Ce<Oe;Ce++){const Ve=we[Ce];yg(Ee,ge,M,Ve)}xt&&oe.render(M);for(let Ce=0,Oe=we.length;Ce<Oe;Ce++){const Ve=we[Ce];xg(w,M,Ve,Ve.viewport)}}else ge.length>0&&yg(Ee,ge,M,U),xt&&oe.render(M),xg(w,M,U)}N!==null&&$===0&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),z&&C.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),ae.resetDefaultState(),G=-1,B=null,x.pop(),x.length>0?(T=x[x.length-1],E.setTextureUnits(T.state.textureUnits),_t===!0&&Se.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,O!==null&&O.renderEnd()};function Gu(M,U,W,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||De.intersectsSprite(M)){z&&He.setFromMatrixPosition(M.matrixWorld).applyMatrix4(rt);const Ee=se.update(M),ge=M.material;ge.visible&&w.push(M,Ee,ge,W,He.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||De.intersectsObject(M))){const Ee=se.update(M),ge=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),He.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),He.copy(Ee.boundingSphere.center)),He.applyMatrix4(M.matrixWorld).applyMatrix4(rt)),Array.isArray(ge)){const we=Ee.groups;for(let Ce=0,Oe=we.length;Ce<Oe;Ce++){const Ve=we[Ce],be=ge[Ve.materialIndex];be&&be.visible&&w.push(M,Ee,be,W,He.z,Ve)}}else ge.visible&&w.push(M,Ee,ge,W,He.z,null)}}const ve=M.children;for(let Ee=0,ge=ve.length;Ee<ge;Ee++)Gu(ve[Ee],U,W,z)}function xg(M,U,W,z){const{opaque:H,transmissive:ve,transparent:Ee}=M;T.setupLightsView(W),_t===!0&&Se.setGlobalState(P.clippingPlanes,W),z&&pe.viewport(F.copy(z)),H.length>0&&rl(H,U,W),ve.length>0&&rl(ve,U,W),Ee.length>0&&rl(Ee,U,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function yg(M,U,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const be=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Di(1,1,{generateMipmaps:!0,type:be?tr:Hn,minFilter:ss,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ve=T.state.transmissionRenderTarget[z.id],Ee=z.viewport||F;ve.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),we=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(re),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),xt&&oe.render(W);const Oe=P.toneMapping;P.toneMapping=Pi;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),_t===!0&&Se.setGlobalState(P.clippingPlanes,z),rl(M,W,z),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve),je.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ot=0,bt=U.length;ot<bt;ot++){const Tt=U[ot],{object:lt,geometry:Qt,material:ye,group:wn}=Tt;if(ye.side===Hi&&lt.layers.test(z.layers)){const Ke=ye.side;ye.side=Mn,ye.needsUpdate=!0,Sg(lt,W,z,Qt,ye,wn),ye.side=Ke,ye.needsUpdate=!0,be=!0}}be===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve))}P.setRenderTarget(ge,we,Ce),P.setClearColor(re,de),Ve!==void 0&&(z.viewport=Ve),P.toneMapping=Oe}function rl(M,U,W){const z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ve=M.length;H<ve;H++){const Ee=M[H],{object:ge,geometry:we,group:Ce}=Ee;let Oe=Ee.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),ge.layers.test(W.layers)&&Sg(ge,U,W,we,Oe,Ce)}}function Sg(M,U,W,z,H,ve){M.onBeforeRender(P,U,W,z,H,ve),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(P,U,W,z,M,ve),H.transparent===!0&&H.side===Hi&&H.forceSinglePass===!1?(H.side=Mn,H.needsUpdate=!0,P.renderBufferDirect(W,U,z,H,M,ve),H.side=Or,H.needsUpdate=!0,P.renderBufferDirect(W,U,z,H,M,ve),H.side=Hi):P.renderBufferDirect(W,U,z,H,M,ve),M.onAfterRender(P,U,W,z,H,ve)}function sl(M,U,W){U.isScene!==!0&&(U=Ft);const z=A.get(M),H=T.state.lights,ve=T.state.shadowsArray,Ee=H.state.version,ge=fe.getParameters(M,H.state,ve,U,W,T.state.lightProbeGridArray),we=fe.getProgramCacheKey(ge);let Ce=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=k.get(M.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Ct),Ce=new Map,z.programs=Ce);let Ve=Ce.get(we);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===Ee)return Mg(M,ge),Ve}else ge.uniforms=fe.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,W,ge),M.onBeforeCompile(ge,P),Ve=fe.acquireProgram(ge,we),Ce.set(we,Ve),z.uniforms=ge.uniforms;const be=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=Se.uniform),Mg(M,ge),z.needsLights=fT(M),z.lightsStateVersion=Ee,z.needsLights&&(be.ambientLightColor.value=H.state.ambient,be.lightProbe.value=H.state.probe,be.directionalLights.value=H.state.directional,be.directionalLightShadows.value=H.state.directionalShadow,be.spotLights.value=H.state.spot,be.spotLightShadows.value=H.state.spotShadow,be.rectAreaLights.value=H.state.rectArea,be.ltc_1.value=H.state.rectAreaLTC1,be.ltc_2.value=H.state.rectAreaLTC2,be.pointLights.value=H.state.point,be.pointLightShadows.value=H.state.pointShadow,be.hemisphereLights.value=H.state.hemi,be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,be.spotLightMatrix.value=H.state.spotLightMatrix,be.spotLightMap.value=H.state.spotLightMap,be.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function Eg(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Cc.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Mg(M,U){const W=A.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function lT(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let W=0,z=M.length;W<z;W++){const H=M[W];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function cT(M,U,W,z,H){U.isScene!==!0&&(U=Ft),E.resetTextureUnits();const ve=U.fog,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,ge=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ye.workingColorSpace,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ce=k.get(z.envMap||Ee,we),Oe=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,bt=!!W.morphAttributes.color;let Tt=Pi;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qt=lt!==void 0?lt.length:0,ye=A.get(z),wn=T.state.lights;if(_t===!0&&(Xe===!0||M!==B)){const ft=M===B&&z.id===G;Se.setState(z,M,ft)}let Ke=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==wn.state.version||ye.outputColorSpace!==ge||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Ce||z.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==Oe||ye.vertexTangents!==Ve||ye.morphTargets!==be||ye.morphNormals!==ot||ye.morphColors!==bt||ye.toneMapping!==Tt||ye.morphTargetsCount!==Qt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,ye.__version=z.version);let Fn=ye.currentProgram;Ke===!0&&(Fn=sl(z,U,H),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Fn,ye));let gi=!1,sr=!1,Es=!1;const ct=Fn.getUniforms(),Rt=ye.uniforms;if(pe.useProgram(Fn.program)&&(gi=!0,sr=!0,Es=!0),z.id!==G&&(G=z.id,sr=!0),ye.needsLights){const ft=lT(T.state.lightProbeGridArray,H);ye.lightProbeGrid!==ft&&(ye.lightProbeGrid=ft,sr=!0)}if(gi||B!==M){pe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",M.projectionMatrix),ct.setValue(I,"viewMatrix",M.matrixWorldInverse);const ar=ct.map.cameraPosition;ar!==void 0&&ar.setValue(I,ht.setFromMatrixPosition(M.matrixWorld)),ut.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,sr=!0,Es=!0)}if(ye.needsLights&&(wn.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",wn.state.directionalShadowMap,E),wn.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",wn.state.spotShadowMap,E),wn.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",wn.state.pointShadowMap,E)),H.isSkinnedMesh){ct.setOptional(I,H,"bindMatrix"),ct.setOptional(I,H,"bindMatrixInverse");const ft=H.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(I,"boneTexture",ft.boneTexture,E))}H.isBatchedMesh&&(ct.setOptional(I,H,"batchingTexture"),ct.setValue(I,"batchingTexture",H._matricesTexture,E),ct.setOptional(I,H,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",H._indirectTexture,E),ct.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",H._colorsTexture,E));const or=W.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Ne.update(H,W,Fn),(sr||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,ct.setValue(I,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Rt.envMapIntensity.value=U.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=bF()),sr){if(ct.setValue(I,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&uT(Rt,Es),ve&&z.fog===!0&&Y.refreshFogUniforms(Rt,ve),Y.refreshMaterialUniforms(Rt,z,Le,We,T.state.transmissionRenderTarget[M.id]),ye.needsLights&&ye.lightProbeGrid){const ft=ye.lightProbeGrid;Rt.probesSH.value=ft.texture,Rt.probesMin.value.copy(ft.boundingBox.min),Rt.probesMax.value.copy(ft.boundingBox.max),Rt.probesResolution.value.copy(ft.resolution)}Cc.upload(I,Eg(ye),Rt,E)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Cc.upload(I,Eg(ye),Rt,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(I,"center",H.center),ct.setValue(I,"modelViewMatrix",H.modelViewMatrix),ct.setValue(I,"normalMatrix",H.normalMatrix),ct.setValue(I,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const ft=z.uniformsGroups;for(let ar=0,Ms=ft.length;ar<Ms;ar++){const Tg=ft[ar];K.update(Tg,Fn),K.bind(Tg,Fn)}}return Fn}function uT(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function fT(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,U,W){const z=A.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),A.get(M.texture).__webglTexture=U,A.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const W=A.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const dT=I.createFramebuffer();this.setRenderTarget=function(M,U=0,W=0){N=M,j=U,$=W;let z=null,H=!1,ve=!1;if(M){const ge=A.get(M);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),F.copy(M.viewport),X.copy(M.scissor),q=M.scissorTest,pe.viewport(F),pe.scissor(X),pe.setScissorTest(q),G=-1;return}else if(ge.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(ge.__hasExternalTextures)E.rebindTextures(M,A.get(M.texture).__webglTexture,A.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(ge.__boundDepthTexture!==Oe){if(Oe!==null&&A.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const Ce=A.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?z=Ce[U][W]:z=Ce[U],H=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?z=A.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?z=Ce[W]:z=Ce,F.copy(M.viewport),X.copy(M.scissor),q=M.scissorTest}else F.copy(le).multiplyScalar(Le).floor(),X.copy(Re).multiplyScalar(Le).floor(),q=Ie;if(W!==0&&(z=dT),pe.bindFramebuffer(I.FRAMEBUFFER,z)&&pe.drawBuffers(M,z),pe.viewport(F),pe.scissor(X),pe.setScissorTest(q),H){const ge=A.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,W)}else if(ve){const ge=U;for(let we=0;we<M.textures.length;we++){const Ce=A.get(M.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,Ce.__webglTexture,W,ge)}}else if(M!==null&&W!==0){const ge=A.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(M,U,W,z,H,ve,Ee,ge=0){if(!(M&&M.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){pe.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ce=M.textures[ge],Oe=Ce.format,Ve=Ce.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(Oe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ve)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&W>=0&&W<=M.height-H&&I.readPixels(U,W,z,H,L.convert(Oe),L.convert(Ve),ve)}finally{const Ce=N!==null?A.get(N).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,z,H,ve,Ee,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(U>=0&&U<=M.width-z&&W>=0&&W<=M.height-H){pe.bindFramebuffer(I.FRAMEBUFFER,we);const Ce=M.textures[ge],Oe=Ce.format,Ve=Ce.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!ut.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(U,W,z,H,L.convert(Oe),L.convert(Ve),0);const ot=N!==null?A.get(N).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,ot);const bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await q3(I,bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.deleteBuffer(be),I.deleteSync(bt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){const z=Math.pow(2,-W),H=Math.floor(M.image.width*z),ve=Math.floor(M.image.height*z),Ee=U!==null?U.x:0,ge=U!==null?U.y:0;E.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Ee,ge,H,ve),pe.unbindTexture()};const hT=I.createFramebuffer(),pT=I.createFramebuffer();this.copyTextureToTexture=function(M,U,W=null,z=null,H=0,ve=0){let Ee,ge,we,Ce,Oe,Ve,be,ot,bt;const Tt=M.isCompressedTexture?M.mipmaps[ve]:M.image;if(W!==null)Ee=W.max.x-W.min.x,ge=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,Oe=W.min.y,Ve=W.isBox3?W.min.z:0;else{const Rt=Math.pow(2,-H);Ee=Math.floor(Tt.width*Rt),ge=Math.floor(Tt.height*Rt),M.isDataArrayTexture?we=Tt.depth:M.isData3DTexture?we=Math.floor(Tt.depth*Rt):we=1,Ce=0,Oe=0,Ve=0}z!==null?(be=z.x,ot=z.y,bt=z.z):(be=0,ot=0,bt=0);const lt=L.convert(U.format),Qt=L.convert(U.type);let ye;U.isData3DTexture?(E.setTexture3D(U,0),ye=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),ye=I.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),ye=I.TEXTURE_2D),pe.activeTexture(I.TEXTURE0),pe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),pe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pe.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const wn=pe.getParameter(I.UNPACK_ROW_LENGTH),Ke=pe.getParameter(I.UNPACK_IMAGE_HEIGHT),Fn=pe.getParameter(I.UNPACK_SKIP_PIXELS),gi=pe.getParameter(I.UNPACK_SKIP_ROWS),sr=pe.getParameter(I.UNPACK_SKIP_IMAGES);pe.pixelStorei(I.UNPACK_ROW_LENGTH,Tt.width),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tt.height),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),pe.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve);const Es=M.isDataArrayTexture||M.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Rt=A.get(M),or=A.get(U),ft=A.get(Rt.__renderTarget),ar=A.get(or.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,ft.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Ms=0;Ms<we;Ms++)Es&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A.get(M).__webglTexture,H,Ve+Ms),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,A.get(U).__webglTexture,ve,bt+Ms)),I.blitFramebuffer(Ce,Oe,Ee,ge,be,ot,Ee,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||A.has(M)){const Rt=A.get(M),or=A.get(U);pe.bindFramebuffer(I.READ_FRAMEBUFFER,hT),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,pT);for(let ft=0;ft<we;ft++)Es?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,H,Ve+ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,H),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,or.__webglTexture,ve,bt+ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,or.__webglTexture,ve),H!==0?I.blitFramebuffer(Ce,Oe,Ee,ge,be,ot,Ee,ge,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(ye,ve,be,ot,bt+ft,Ce,Oe,Ee,ge):I.copyTexSubImage2D(ye,ve,be,ot,Ce,Oe,Ee,ge);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(ye,ve,be,ot,bt,Ee,ge,we,lt,Qt,Tt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,ve,be,ot,bt,Ee,ge,we,lt,Tt.data):I.texSubImage3D(ye,ve,be,ot,bt,Ee,ge,we,lt,Qt,Tt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,be,ot,Ee,ge,lt,Qt,Tt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,be,ot,Tt.width,Tt.height,lt,Tt.data):I.texSubImage2D(I.TEXTURE_2D,ve,be,ot,Ee,ge,lt,Qt,Tt);pe.pixelStorei(I.UNPACK_ROW_LENGTH,wn),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Fn),pe.pixelStorei(I.UNPACK_SKIP_ROWS,gi),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,sr),ve===0&&U.generateMipmaps&&I.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(M){A.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){j=0,$=0,N=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}function PF(){const t=te.useRef(null);return te.useEffect(()=>{if(!t.current)return;const e=new fD,n=new zn(60,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const i=new RF({alpha:!0,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(i.domElement);const r=1800,s=new Nn,o=new Float32Array(r*3),a=new Float32Array(r*3);for(let m=0;m<r*3;m++){const h=(Math.random()-.5)*12;o[m]=h,a[m]=h}s.setAttribute("position",new di(o,3));const l=new MD(s,new YM({size:.015,color:"#ffffff",transparent:!0,opacity:.75}));e.add(l);const c=new jM({color:"#ffffff",transparent:!0,opacity:.08}),u=new Nn,d=new ED(u,c);e.add(d);const f={x:0,y:0};window.addEventListener("mousemove",m=>{f.x=m.clientX/window.innerWidth*2-1,f.y=-(m.clientY/window.innerHeight)*2+1});let p=0;window.addEventListener("scroll",()=>{const m=window.innerHeight*2;p=Math.min(window.scrollY/m,1)});const v=()=>{requestAnimationFrame(v);const m=l.geometry.attributes.position.array,h=[],g=2.2;for(let _=0;_<r;_++){let S=_*3;m[S]=a[S]+a[S]*p*2,m[S+1]=a[S+1]+a[S+1]*p*2,m[S+2]=a[S+2]+a[S+2]*p*2;for(let w=_+1;w<_+18&&w<r;w++){let T=w*3;const b=m[S]-m[T],x=m[S+1]-m[T+1],C=m[S+2]-m[T+2];Math.sqrt(b*b+x*x+C*C)<g&&(h.push(m[S],m[S+1],m[S+2]),h.push(m[T],m[T+1],m[T+2]))}}l.geometry.attributes.position.needsUpdate=!0,u.setAttribute("position",new jn(h,3)),c.opacity=.08-p*.05,l.rotation.y+=25e-5,d.rotation.y+=12e-5,n.position.x+=(f.x*1.2-n.position.x)*.02,n.position.y+=(f.y*1.2-n.position.y)*.02,n.lookAt(e.position),i.render(e,n)};v();const y=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y),t.current.removeChild(i.domElement)}},[]),R.createElement("div",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})}const DF=[{question:"What services does Digi Partner offer?",answer:"We provide digital marketing, UI/UX design, web development, and content creation tailored to elevate your brand."},{question:"How long does a project take?",answer:"Project timelines vary based on scope, but most projects are completed within 2–6 weeks."},{question:"Do you provide ongoing support?",answer:"Yes, we offer maintenance and ongoing support to ensure your business runs smoothly."},{question:"Can you help improve my existing website?",answer:"Absolutely! We specialize in redesigning and optimizing websites for better performance and conversion."}];function LF(){const[t,e]=te.useState(null),n=i=>{e(t===i?null:i)};return R.createElement("section",{className:"faq"},R.createElement("h2",{className:"faq-title"},"Frequently Asked Questions"),R.createElement("div",{className:"faq-container"},DF.map((i,r)=>R.createElement("div",{key:r,className:`faq-item ${t===r?"active":""}`,onClick:()=>n(r)},R.createElement("div",{className:"faq-question"},R.createElement("span",null,i.question),R.createElement("div",{className:"icon"},t===r?"✕":"+")),R.createElement("div",{className:"faq-answer"},R.createElement("p",null,i.answer))))))}function NF(){return p3(),R.createElement(R.Fragment,null,R.createElement(PF,null),R.createElement(h3,null),R.createElement(O1,null),R.createElement(m2,null),R.createElement(O2,null),R.createElement(_2,null),R.createElement(V2,null),R.createElement(c3,null),R.createElement(a3,null),R.createElement(u3,null),R.createElement(W2,null),R.createElement(LF,null),R.createElement(f3,null),R.createElement(d3,null))}gd.createRoot(document.getElementById("root")).render(R.createElement(R.StrictMode,null,R.createElement(NF,null)));
