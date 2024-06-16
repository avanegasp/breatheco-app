"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7776],{"./node_modules/@chakra-ui/hooks/dist/chunk-VHPIVGMD.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}__webpack_require__.d(__webpack_exports__,{Y:()=>useInterval});var isBrowser=canUseDOM();var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),useSafeLayoutEffect=isBrowser?react.useLayoutEffect:react.useEffect;function useInterval(callback,delay){const fn=function useCallbackRef(fn,deps=[]){const ref=(0,react.useRef)(fn);return useSafeLayoutEffect((()=>{ref.current=fn})),(0,react.useCallback)(((...args)=>{var _a;return null==(_a=ref.current)?void 0:_a.call(ref,...args)}),deps)}(callback);(0,react.useEffect)((()=>{let intervalId=null;const tick=()=>fn();return null!==delay&&(intervalId=window.setInterval(tick,delay)),()=>{intervalId&&window.clearInterval(intervalId)}}),[delay,fn])}},"./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Heading=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Heading2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Heading",props),{className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.h2,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading",props.className),...rest,__css:styles})}));Heading.displayName="Heading"},"./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./src/stories/SubTasks.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_common_components_MarkDownParser_SubTasks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/MarkDownParser/SubTasks.jsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/SubTasks",component:_common_components_MarkDownParser_SubTasks__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{subTasks:{control:{type:"object"}}}};var Component=function Component(args,context){return __jsx(_common_components_MarkDownParser_SubTasks__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Component.displayName="Component";var Default=Component.bind({});Default.args={subTasks:[{id:"example-1",label:"Simple example 1",status:"DONE"},{id:"example-2",label:"Simple example 2",status:"PENDING"},{id:"example-3",label:"Simple example 3",status:"PENDING"},{id:"example-4",label:"Simple example 4",status:"PENDING"}]},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <SubTasks {...args} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/common/components/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_excluded=["children","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={xxl:"var(--heading-xxl)",xl:"var(--heading-xl)",l:"var(--heading-l)",m:"var(--heading-m)",sm:"var(--heading-sm)",xsm:"var(--heading-xsm)"};function Heading(_ref){var children=_ref.children,size=_ref.size,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.X,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({fontSize:sizes[size]||size},rest),children)}Heading.displayName="Heading",Heading.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().object]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},Heading.defaultProps={size:"l",children:null},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{defaultValue:{value:"'l'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Heading},"./src/common/components/MarkDownParser/SubTasks.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MarkDownParser_SubTasks});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),Counter=__webpack_require__("./src/common/components/ProgressCircle/Counter.jsx"),__jsx=react.createElement;function ProgressCircle(_ref){var percents=_ref.percents,counterString=_ref.counterString,counter=_ref.counter,stroke=_ref.stroke,emptyStroke=_ref.emptyStroke,emptyStrokeOpacity=_ref.emptyStrokeOpacity,duration=_ref.duration,delay=_ref.delay,size=_ref.size,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=void 0===_ref$strokeWidth?6:_ref$strokeWidth,caption=_ref.caption,circumference=Math.ceil(2*Math.PI*45),fillPercents=Math.abs(Math.ceil(circumference/100*(percents-100))),transition={duration,delay,ease:"easeIn"},variants={hidden:{strokeDashoffset:circumference,transition},show:{strokeDashoffset:fillPercents,transition}};return __jsx(react.Fragment,null,__jsx(chunk_MPFPK3CX.k,{justifyContent:"center",alignItems:"center"},counter&&__jsx(chunk_6CSUKJP7.xu,{position:"absolute",size:"".concat(Math.round(.25*size),"px"),fontWeight:"700"},counterString||__jsx(react.Fragment,null,__jsx(Counter.Z,{valueTo:percents,totalDuration:duration+delay}),"%")),__jsx(chunk_6CSUKJP7.xu,{height:"".concat(size,"px"),position:"relative"},__jsx("svg",{viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:size,height:size},__jsx("circle",{cx:"50",cy:"50",r:45,className:"circle",strokeWidth,stroke:emptyStroke,strokeOpacity:emptyStrokeOpacity,fill:"transparent"})),__jsx("svg",{viewBox:"0 0 100 100",width:size,height:size,style:{position:"absolute",transform:"rotate(90deg)",overflow:"visible",top:"0px",left:"0px"}},__jsx(motion.E.circle,{cx:"50",cy:"50",r:45,strokeWidth,stroke,fill:"transparent",strokeDashoffset:fillPercents,strokeDasharray:circumference,variants,initial:"hidden",animate:"show"})))),caption&&__jsx(chunk_6CSUKJP7.xu,{width:size,fontSize:3,color:"text500",textAlign:"center"},caption))}ProgressCircle.propTypes={percents:prop_types_default().number,counterString:prop_types_default().string,counter:prop_types_default().bool,stroke:prop_types_default().string,emptyStroke:prop_types_default().string,emptyStrokeOpacity:prop_types_default().number,duration:prop_types_default().number,delay:prop_types_default().number,size:prop_types_default().number,strokeWidth:prop_types_default().number,caption:prop_types_default().string},ProgressCircle.defaultProps={percents:0,counterString:"",counter:!0,stroke:"#0097CD",emptyStroke:"#0097CD",emptyStrokeOpacity:.25,duration:3,delay:.5,size:100,strokeWidth:6,caption:""},ProgressCircle.__docgenInfo={description:"",methods:[],displayName:"ProgressCircle",props:{strokeWidth:{defaultValue:{value:"6",computed:!1},description:"",type:{name:"number"},required:!1},percents:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},counterString:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},counter:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},stroke:{defaultValue:{value:"'#0097CD'",computed:!1},description:"",type:{name:"string"},required:!1},emptyStroke:{defaultValue:{value:"'#0097CD'",computed:!1},description:"",type:{name:"string"},required:!1},emptyStrokeOpacity:{defaultValue:{value:"0.25",computed:!1},description:"",type:{name:"number"},required:!1},duration:{defaultValue:{value:"3",computed:!1},description:"",type:{name:"number"},required:!1},delay:{defaultValue:{value:"0.5",computed:!1},description:"",type:{name:"number"},required:!1},size:{defaultValue:{value:"100",computed:!1},description:"",type:{name:"number"},required:!1},caption:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const components_ProgressCircle=ProgressCircle;var Text=__webpack_require__("./src/common/components/Text.jsx"),utils=__webpack_require__("./src/utils/index.js"),SubTasks_jsx=react.createElement;function SubTasks(_ref){var subTasks=_ref.subTasks,title=_ref.title,description=_ref.description,assetType=_ref.assetType,t=(0,useTranslation.Z)("common").t,tasksDone=subTasks.length>0&&(null==subTasks?void 0:subTasks.filter((function(subtask){return"DONE"===subtask.status}))),taskPercent=Math.round(tasksDone.length/subTasks.length*100),assetValue=t("common:asset-type-pronouns.".concat(assetType.toLowerCase()));return subTasks.length>0&&SubTasks_jsx(chunk_6CSUKJP7.xu,{display:"flex",border:"2px solid",borderColor:"blue.default",borderRadius:"18px",p:"16px 22px",mt:"18px",gridGap:"19px",alignItems:"center"},SubTasks_jsx(components_ProgressCircle,{size:74,duration:1,delay:.3,percents:taskPercent,counterString:"".concat(tasksDone.length," / ").concat(subTasks.length)}),SubTasks_jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",gridGap:"6px"},SubTasks_jsx(Heading.Z,{as:"p",size:"18px",style:{margin:0}},title||(0,utils.fp)(t("subtasks.title",{count:subTasks.length,asset_type:assetValue}))),SubTasks_jsx(Text.Z,{size:"14px",color:"gray.600",p:{base:"0",md:"0 14% 0 0"},style:{margin:0}},description||t("subtasks.description"))))}SubTasks.propTypes={subTasks:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),title:prop_types_default().string,description:prop_types_default().string,assetType:prop_types_default().string},SubTasks.defaultProps={subTasks:[],title:"",description:"",assetType:"lesson"},SubTasks.__docgenInfo={description:"",methods:[],displayName:"SubTasks",props:{subTasks:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},description:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},assetType:{defaultValue:{value:"'lesson'",computed:!1},description:"",type:{name:"string"},required:!1}}};const MarkDownParser_SubTasks=SubTasks},"./src/common/components/ProgressCircle/Counter.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/hooks/dist/chunk-VHPIVGMD.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function Counter(_ref){var _ref$valueFrom=_ref.valueFrom,valueFrom=void 0===_ref$valueFrom?0:_ref$valueFrom,_ref$valueTo=_ref.valueTo,valueTo=void 0===_ref$valueTo?100:_ref$valueTo,_ref$totalDuration=_ref.totalDuration,totalDuration=void 0===_ref$totalDuration?3.5:_ref$totalDuration,_ref$withDecimal=_ref.withDecimal,withDecimal=void 0!==_ref$withDecimal&&_ref$withDecimal,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(valueFrom),count=_useState[0],setCount=_useState[1],value=withDecimal?valueTo.toFixed(1):Math.round(valueTo);return withDecimal&&value%1!=0&&(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Y)((function(){count<value&&setCount(Number((count+.1).toFixed(1))),count>value&&setCount(Number((count-.1).toFixed(1)))}),totalDuration/value*300),withDecimal||value%1!=0||(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Y)((function(){count<value&&setCount(count+1),count>value&&setCount(count-1)}),totalDuration/value*1e3),count}},"./src/common/components/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-HEDGDMHJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_excluded=["children","size","maxWidth","letterSpacing","withLimit","label","withTooltip"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={l:"15px",md:"14px",sm:"12px",xs:"10px"};function Text(_ref){var children=_ref.children,size=_ref.size,maxWidth=_ref.maxWidth,letterSpacing=_ref.letterSpacing,withLimit=_ref.withLimit,label=_ref.label,withTooltip=_ref.withTooltip,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return withLimit?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.u,{label:withTooltip?label:children,hasArrow:!0,placement:"top-start",openDelay:500},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:"text",letterSpacing,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:sizes[size]||size,width:maxWidth||withTooltip?"auto":"13em",border:"0px"},rest),children&&children)):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({letterSpacing,maxWidth,fontSize:sizes[size]||size},rest),children&&children)}Text.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,prop_types__WEBPACK_IMPORTED_MODULE_5___default().object]),letterSpacing:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,withLimit:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,withTooltip:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Text.defaultProps={letterSpacing:"0.05em",size:"sm",maxWidth:"",children:null,withLimit:!1,withTooltip:!1,label:""},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{letterSpacing:{defaultValue:{value:"'0.05em'",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},maxWidth:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},withLimit:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withTooltip:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Text},"./src/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A$:()=>unSlugify,FJ:()=>isWindow,I4:()=>unSlugifyCapitalize,L_:()=>removeStorageItem,NV:()=>decodeBase64,Nh:()=>setStorageItem,Wz:()=>getQueryString,X6:()=>isDevMode,Xm:()=>adjustNumberBeetwenMinMax,fp:()=>toCapitalize,hj:()=>isNumber,lV:()=>slugify,oR:()=>lengthOfString,qb:()=>isValidDate,qn:()=>getStorageItem,rV:()=>slugToTitle,rg:()=>removeURLParameter,sW:()=>cleanObject,tF:()=>getBrowserSize,td:()=>formatBytes,xh:()=>location,zb:()=>syncInterval});var process=__webpack_require__("./node_modules/process/browser.js"),isWindow=(__webpack_require__("./node_modules/console-browserify/index.js"),"undefined"!=typeof window),isDevMode=(!!isWindow&&localStorage.getItem("accessToken"),"production"!==process.env.VERCEL_ENV||!1),slugify=function slugify(str){return"string"==typeof str?str.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""):""},unSlugify=function unSlugify(str){var capitalize=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"==typeof str?str.replace(/-/g," ").replace(/\w\S*/g,(function(txt){return(capitalize?txt.charAt(0).toUpperCase():txt.charAt(0))+txt.substring(1).toLowerCase()})):""},unSlugifyCapitalize=function unSlugifyCapitalize(str){return"string"==typeof str?str.replace(/-/g," ").replace(/\w\S*/g,(function(txt){return txt.charAt(0).toUpperCase()+txt.substring(1).toLowerCase()})):""};function slugToTitle(slug){return void 0===slug?"":slug.split("-").map((function(word,i){return 0===i?word.charAt(0).toUpperCase()+word.slice(1):word.charAt(0)+word.slice(1)})).join(" ").replace(/([A-Z])/g," $1").trim()}var getStorageItem=function getStorageItem(key){return isWindow?localStorage.getItem(key):null},setStorageItem=(String(getStorageItem("accessToken")).length,function setStorageItem(key,value){return isWindow?localStorage.setItem(key,value):null}),removeStorageItem=function removeStorageItem(key){return isWindow?localStorage.removeItem(key):null};function removeURLParameter(url,parameter){var urlparts=url.split("?");if(urlparts.length>=2){for(var prefix="".concat(encodeURIComponent(parameter),"="),pars=urlparts[1].split(/[&;]/g),i=pars.length;i-- >0;)-1!==pars[i].lastIndexOf(prefix,0)&&pars.splice(i,1);return urlparts[0]+(pars.length>0?"?".concat(pars.join("&")):"")}return url}var toCapitalize=function toCapitalize(){var input=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return input.charAt(0).toUpperCase()+input.toLowerCase().slice(1)};function formatBytes(bytes){var decimals=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!+bytes)return"0 Bytes";var dm=decimals<0?0:decimals,i=Math.floor(Math.log(bytes)/Math.log(1024));return"".concat(parseFloat((bytes/Math.pow(1024,i)).toFixed(dm))," ").concat(["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i])}var isNumber=function isNumber(value){return Number.isFinite(Number(value))},isValidDate=function isValidDate(dateString){return!Number.isNaN(Date.parse(dateString))},getQueryString=function getQueryString(key,def){var urlParams=isWindow&&new URLSearchParams(window.location.search);return urlParams&&(urlParams.get(key)||def)},lengthOfString=function lengthOfString(string){return"string"==typeof string?null==string?void 0:string.replaceAll(/\s/g,"").length:0},syncInterval=function syncInterval(){var callback=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},secondsToNextMinute=60-(new Date).getSeconds();setTimeout((function(){callback(),setInterval(callback,6e4)}),1e3*secondsToNextMinute)};function getBrowserSize(){return isWindow?{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}:{}}function adjustNumberBeetwenMinMax(_ref){var _ref$number=_ref.number,number=void 0===_ref$number?1:_ref$number,_ref$min=_ref.min,min=void 0===_ref$min?1:_ref$min,_ref$max=_ref.max,max=void 0===_ref$max?10:_ref$max,range=max-min;return number>max?max-(number-max)%range:number<min?max-(min-number)%range:number}var location=isWindow&&window.location;isWindow&&new URL(window.location.href);function cleanObject(obj){var cleaned={};return Object.keys(obj).forEach((function(key){if(void 0!==obj[key]&&null!==obj[key]){if(Array.isArray(obj[key])&&0===obj[key].length)return;cleaned[key]=obj[key]}})),cleaned}function decodeBase64(encoded){return new TextDecoder("utf-8").decode(Uint8Array.from(atob(encoded),(function(c){return c.charCodeAt(0)}))).replace(/�/g,"")}}}]);