"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(2363);let n=r(5859),i=r(1159);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let s,u,d,{src:c,sizes:f,unoptimized:p=!1,priority:m=!1,loading:g,className:h,quality:y,width:v,height:b,fill:_=!1,style:w,overrideSrc:S,onLoad:x,onLoadingComplete:C,placeholder:E="empty",blurDataURL:j,fetchPriority:O,decoding:P="async",layout:R,objectFit:T,objectPosition:M,lazyBoundary:D,lazyRoot:k,...z}=e,{imgConf:I,showAltText:A,blurComplete:N,defaultLoader:L}=t,U=I||i.imageConfigDefault;if("allSizes"in U)s=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),n=null==(r=U.qualities)?void 0:r.sort((e,t)=>e-t);s={...U,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=z.loader||L;delete z.loader,delete z.srcSet;let F="__next_img_default"in B;if(F){if("custom"===s.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!f&&(f=t)}let q="",G=l(v),W=l(b);if((a=c)&&"object"==typeof a&&(o(a)||void 0!==a.src)){let e=o(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(u=e.blurWidth,d=e.blurHeight,j=j||e.blurDataURL,q=e.src,!_){if(G||W){if(G&&!W){let t=G/e.width;W=Math.round(e.height*t)}else if(!G&&W){let t=W/e.height;G=Math.round(e.width*t)}}else G=e.width,W=e.height}}let X=!m&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:q)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,X=!1),s.unoptimized&&(p=!0),F&&!s.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let V=l(y),H=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:M}:{},A?{}:{color:"transparent"},w),Y=N||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:W,blurWidth:u,blurHeight:d,blurDataURL:j||"",objectFit:H.objectFit})+'")':'url("'+E+'")',$=Y?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[d]})}}({config:s,src:c,unoptimized:p,width:G,quality:V,sizes:f,loader:B});return{props:{...z,loading:X?"lazy":g,fetchPriority:O,width:G,height:W,decoding:P,className:h,style:{...H,...$},sizes:J.sizes,srcSet:J.srcSet,src:S||J.src},meta:{unoptimized:p,priority:m,placeholder:E,fill:_}}}},675:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},1159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},1172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(2115),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,l=i?()=>{}:n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),a()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},3003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext({})},3576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext(null)},3621:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(306)._(r(2115)),i=r(1159),o=n.default.createContext(i.imageConfigDefault)},4146:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let n=r(306),i=r(666),o=r(7970),l=n._(r(5514));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/thesopranos.github.io/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},4980:(e,t,r)=>{var n=r(5155),i=r(2115),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function l(e,t){var r,n;switch(t.type){case"TYPE":return o(o({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length+1)});case"DELAY":return o(o({},e),{speed:t.payload});case"DELETE":return o(o({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length-1)});case"COUNT":return o(o({},e),{count:e.count+1});default:return e}}var a=function(e){var t=e.words,r=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,n=e.loop,o=void 0===n?1:n,a=e.typeSpeed,s=void 0===a?80:a,u=e.deleteSpeed,d=void 0===u?50:u,c=e.delaySpeed,f=void 0===c?1500:c,p=e.onLoopDone,m=e.onType,g=e.onDelete,h=e.onDelay,y=i.useReducer(l,{speed:s,text:"",count:0}),v=y[0],b=v.speed,_=v.text,w=v.count,S=y[1],x=i.useRef(0),C=i.useRef(!1),E=i.useRef(!1),j=i.useRef(!1),O=i.useRef(!1),P=i.useCallback(function(){var e=w%r.length,t=r[e];E.current?(S({type:"DELETE",payload:t,speed:d}),""===_&&(E.current=!1,S({type:"COUNT"}))):(S({type:"TYPE",payload:t,speed:s}),j.current=!0,_===t&&(S({type:"DELAY",payload:f}),j.current=!1,O.current=!0,setTimeout(function(){O.current=!1,E.current=!0},f),o>0&&(x.current+=1,x.current/r.length===o&&(O.current=!1,C.current=!0)))),j.current&&m&&m(x.current),E.current&&g&&g(),O.current&&h&&h()},[w,f,d,o,s,r,_,m,g,h]);return i.useEffect(function(){var e=setTimeout(P,b);return C.current&&clearTimeout(e),function(){return clearTimeout(e)}},[P,b]),i.useEffect(function(){p&&C.current&&p()},[p]),[_,{isType:j.current,isDelay:O.current,isDelete:E.current,isDone:C.current}]};!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var s=i.memo(function(e){var t=e.cursorBlinking,r=e.cursorStyle,i=e.cursorColor;return n.jsx("span",o({style:{color:void 0===i?"inherit":i},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(void 0===t||t?"styles-module_blinking__9VXRT":"")},{children:void 0===r?"|":r}))});t.cU=function(e){var t=e.words,r=e.loop,i=e.typeSpeed,o=e.deleteSpeed,l=e.delaySpeed,u=e.cursor,d=e.cursorStyle,c=e.cursorColor,f=e.cursorBlinking,p=a({words:void 0===t?["Hello World!","This is","a simple Typewriter"]:t,loop:void 0===r?1:r,typeSpeed:void 0===i?80:i,deleteSpeed:void 0===o?50:o,delaySpeed:void 0===l?1500:l,onLoopDone:e.onLoopDone,onType:e.onType,onDelay:e.onDelay,onDelete:e.onDelete})[0];return n.jsxs(n.Fragment,{children:[n.jsx("span",{children:p}),void 0!==u&&u&&n.jsx(s,{cursorStyle:void 0===d?"|":d,cursorColor:void 0===c?"inherit":c,cursorBlinking:void 0===f||f})]})}},5514:(e,t)=>{function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,l=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+l+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5565:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(4146),i=r.n(n)},5859:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6107:(e,t,r)=>{var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return f}});let i=r(306),o=r(9955),l=r(5155),a=o._(r(2115)),s=i._(r(1172)),u=r(3003),d=r(1147),c=r(675);function f(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let m=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,r=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(d.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(306),i=r(9955),o=r(5155),l=i._(r(2115)),a=n._(r(7650)),s=n._(r(6107)),u=r(666),d=r(1159),c=r(3621);r(2363);let f=r(3576),p=n._(r(5514)),m=r(5353),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/thesopranos.github.io/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:v,fill:b,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:x,sizesInput:C,onLoad:E,onError:j,...O}=e,P=(0,l.useCallback)(e=>{e&&(j&&(e.src=e.src),e.complete&&h(e,p,_,w,S,v,C))},[r,p,_,w,S,j,v,C]),R=(0,m.useMergedRef)(t,P);return(0,o.jsx)("img",{...O,...y(f),loading:g,width:s,height:a,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:R,onLoad:e=>{h(e.currentTarget,p,_,w,S,v,C)},onError:e=>{x(!0),"empty"!==p&&S(!0),j&&j(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),i=(0,l.useMemo)(()=>{var e;let t=g||n||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:a,onLoadingComplete:s}=e,m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let[y,_]=(0,l.useState)(!1),[w,S]=(0,l.useState)(!1),{props:x,meta:C}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...x,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:S,sizesInput:e.sizes,ref:t}),C.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);