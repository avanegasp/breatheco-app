(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7124],{"./node_modules/@chakra-ui/image/dist/chunk-HR33I6FK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>useImage,z:()=>shouldShowFallbackImage});var _chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useImage(props){const{loading,src,srcSet,onLoad,onError,crossOrigin,sizes,ignoreFallback}=props,[status,setStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("pending");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setStatus(src?"loading":"pending")}),[src]);const imageRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),load=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(!src)return;flush();const img=new Image;img.src=src,crossOrigin&&(img.crossOrigin=crossOrigin),srcSet&&(img.srcset=srcSet),sizes&&(img.sizes=sizes),loading&&(img.loading=loading),img.onload=event=>{flush(),setStatus("loaded"),null==onLoad||onLoad(event)},img.onerror=error=>{flush(),setStatus("failed"),null==onError||onError(error)},imageRef.current=img}),[src,crossOrigin,srcSet,sizes,onLoad,onError,loading]),flush=()=>{imageRef.current&&(imageRef.current.onload=null,imageRef.current.onerror=null,imageRef.current=null)};return(0,_chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__.G)((()=>{if(!ignoreFallback)return"loading"===status&&load(),()=>{flush()}}),[status,load,ignoreFallback]),ignoreFallback?"loaded":status}var shouldShowFallbackImage=(status,fallbackStrategy)=>"loaded"!==status&&"beforeLoadOrError"===fallbackStrategy||"failed"===status&&"onError"===fallbackStrategy},"./node_modules/@chakra-ui/image/dist/chunk-QBIO4VEB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>NativeImage});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),NativeImage=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function NativeImage2(props,ref){const{htmlWidth,htmlHeight,alt,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{width:htmlWidth,height:htmlHeight,ref,alt,...rest})}));NativeImage.displayName="NativeImage"},"./node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Image});var _chunk_QBIO4VEB_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-QBIO4VEB.mjs"),_chunk_HR33I6FK_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-HR33I6FK.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function omit(object,keysToOmit=[]){const clone=Object.assign({},object);for(const key of keysToOmit)key in clone&&delete clone[key];return clone}var Image=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Image2(props,ref){const{fallbackSrc,fallback,src,srcSet,align,fit,loading,ignoreFallback,crossOrigin,fallbackStrategy="beforeLoadOrError",referrerPolicy,...rest}=props,shouldIgnoreFallbackImage=null!=loading||ignoreFallback||!(void 0!==fallbackSrc||void 0!==fallback),status=(0,_chunk_HR33I6FK_mjs__WEBPACK_IMPORTED_MODULE_2__.d)({...props,crossOrigin,ignoreFallback:shouldIgnoreFallbackImage}),showFallbackImage=(0,_chunk_HR33I6FK_mjs__WEBPACK_IMPORTED_MODULE_2__.z)(status,fallbackStrategy),shared={ref,objectFit:fit,objectPosition:align,...shouldIgnoreFallbackImage?rest:omit(rest,["onError","onLoad"])};return showFallbackImage?fallback||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.img,{as:_chunk_QBIO4VEB_mjs__WEBPACK_IMPORTED_MODULE_4__.Z,className:"chakra-image__placeholder",src:fallbackSrc,...shared}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.img,{as:_chunk_QBIO4VEB_mjs__WEBPACK_IMPORTED_MODULE_4__.Z,src,srcSet,crossOrigin,loading,referrerPolicy,className:"chakra-image",...shared})}));Image.displayName="Image"},"./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Heading=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Heading2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Heading",props),{className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.h2,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading",props.className),...rest,__css:styles})}));Heading.displayName="Heading"},"./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./node_modules/@chakra-ui/media-query/dist/chunk-MG6WC47T.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>useMediaQuery});var _chakra_ui_react_env__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/react-env/dist/chunk-23XYWYLU.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useMediaQuery(query,options={}){const{ssr=!0,fallback}=options,{getWindow}=(0,_chakra_ui_react_env__WEBPACK_IMPORTED_MODULE_1__.O)(),queries=Array.isArray(query)?query:[query];let fallbackValues=Array.isArray(fallback)?fallback:[fallback];fallbackValues=fallbackValues.filter((v=>null!=v));const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>queries.map(((query2,index)=>({media:query2,matches:ssr?!!fallbackValues[index]:getWindow().matchMedia(query2).matches})))));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const win=getWindow();setValue(queries.map((query2=>({media:query2,matches:win.matchMedia(query2).matches}))));const mql=queries.map((query2=>win.matchMedia(query2))),handler=evt=>{setValue((prev=>prev.slice().map((item=>item.media===evt.media?{...item,matches:evt.matches}:item))))};return mql.forEach((mql2=>{"function"==typeof mql2.addListener?mql2.addListener(handler):mql2.addEventListener("change",handler)})),()=>{mql.forEach((mql2=>{"function"==typeof mql2.removeListener?mql2.removeListener(handler):mql2.removeEventListener("change",handler)}))}}),[getWindow]),value.map((item=>item.matches))}},"./node_modules/next/dist/shared/lib/dynamic.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{noSSR:function(){return noSSR},default:function(){return dynamic}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_react=_interop_require_default._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablesharedruntime=_interop_require_default._(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.shared-runtime.js")),isServerSide="undefined"==typeof window;function convertModule(mod){return{default:(null==mod?void 0:mod.default)||mod}}function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>_react.default.createElement(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function dynamic(dynamicOptions,options){let loadableFn=_loadablesharedruntime.default,loadableOptions={loading:param=>{let{error,isLoading,pastDelay}=param;return null}};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions={...loadableOptions,...dynamicOptions}),loadableOptions={...loadableOptions,...options};const loaderFn=loadableOptions.loader;return loadableOptions.loadableGenerated&&(loadableOptions={...loadableOptions,...loadableOptions.loadableGenerated},delete loadableOptions.loadableGenerated),"boolean"!=typeof loadableOptions.ssr||loadableOptions.ssr?loadableFn({...loadableOptions,loader:()=>null!=loaderFn?loaderFn().then(convertModule):Promise.resolve(convertModule((()=>null)))}):(delete loadableOptions.webpack,delete loadableOptions.modules,noSSR(loadableFn,loadableOptions))}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoadableContext",{enumerable:!0,get:function(){return LoadableContext}});const LoadableContext=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")).default.createContext(null)},"./node_modules/next/dist/shared/lib/loadable.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablecontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js");const ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},options),subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(ids.includes(moduleId))return init()}))}function LoadableComponent(props,ref){!function useLoadableModule(){init();const context=_react.default.useContext(_loadablecontextsharedruntime.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}();const state=_react.default.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.default?obj.default:obj}(state.loaded),props):null),[props,state])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...partial},this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return createLoadableComponent(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=ids=>(void 0===ids&&(ids=[]),new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)}))),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);const _default=Loadable},"./node_modules/next/dynamic.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")}}]);