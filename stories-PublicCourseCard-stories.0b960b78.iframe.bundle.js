"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2373],{"./node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Divider=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Divider2(props,ref){const{borderLeftWidth,borderBottomWidth,borderTopWidth,borderRightWidth,borderWidth,borderStyle,borderColor,...styles}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Divider",props),{className,orientation="horizontal",__css,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),dividerStyles={vertical:{borderLeftWidth:borderLeftWidth||borderRightWidth||borderWidth||"1px",height:"100%"},horizontal:{borderBottomWidth:borderBottomWidth||borderTopWidth||borderWidth||"1px",width:"100%"}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.hr,{ref,"aria-orientation":orientation,...rest,__css:{...styles,border:"0",borderColor,borderStyle,...dividerStyles[orientation],...__css},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-divider",className)})}));Divider.displayName="Divider"},"./src/stories/PublicCourseCard.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>PublicCourseCard_stories,withDescription:()=>withDescription});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_E3YVMML4=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-E3YVMML4.mjs"),chunk_YGVX4ESO=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),NextChakraLink=__webpack_require__("./src/common/components/NextChakraLink.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),ProjectsSection=__webpack_require__("./src/common/components/ProjectsSection.jsx"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),variables=__webpack_require__("./src/utils/variables.js"),_excluded=["programName","programDescription","programSlug","icon_url","iconBackground","startsIn","stTranslation","syllabusContent","courseProgress","usersConnected","assistants","teacher","isAvailableAsSaas","subscriptionStatus","width","href","onClick"],__jsx=react.createElement;function PublicCourseCard(_ref){var _stTranslation$lang,programName=_ref.programName,programDescription=_ref.programDescription,programSlug=_ref.programSlug,icon_url=_ref.icon_url,iconBackground=_ref.iconBackground,startsIn=_ref.startsIn,stTranslation=_ref.stTranslation,syllabusContent=_ref.syllabusContent,courseProgress=_ref.courseProgress,usersConnected=_ref.usersConnected,assistants=_ref.assistants,teacher=_ref.teacher,isAvailableAsSaas=_ref.isAvailableAsSaas,subscriptionStatus=_ref.subscriptionStatus,width=_ref.width,href=_ref.href,onClick=_ref.onClick,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),_useTranslation=(0,useTranslation.Z)("program-card"),t=_useTranslation.t,lang=_useTranslation.lang,_useStyle=(0,useStyle.Z)(),backgroundColor2=_useStyle.backgroundColor2,hexColor=_useStyle.hexColor,textColor=(0,chunk_7NLW6UB6.ff)("black","white");return __jsx(chunk_6CSUKJP7.xu,(0,esm_extends.Z)({width},rest),__jsx(chunk_6CSUKJP7.xu,{borderRadius:"9px 9px 0 0",width:"90%",margin:"auto",height:"140px",background:iconBackground,display:"flex",flexDirection:"column",justifyContent:"center"},__jsx(chunk_E3YVMML4.E,{width:"84px",height:"74px",margin:"auto",objectFit:"cover",src:icon_url,alt:"Course Icon"})),__jsx(chunk_6CSUKJP7.xu,{border:"1px solid",borderColor:hexColor.blueDefault,borderRadius:"9px",padding:"15px",height:"min-content",background:backgroundColor2},__jsx(Heading.Z,{size:"lg",as:"h3",lineHeight:"31px",fontWeight:"700",color:textColor,marginBottom:"10px",textAlign:"center"},programName),__jsx(chunk_YGVX4ESO.i,{style:{borderBottomWidth:"1px",borderStyle:"solid",borderColor:"#DADADA"},w:"90%",margin:"auto"}),syllabusContent||assistants.length>0?__jsx(ProjectsSection.Z,{startsIn,stTranslation,syllabusContent,courseProgress,usersConnected,assistants,teacher,isAvailableAsSaas,subscriptionStatus}):__jsx(Text.Z,{fontSize:"xs",lineHeight:"14px",fontWeight:"700",color:textColor,textAlign:"center",marginTop:"20px"},programDescription),__jsx(NextChakraLink.Z,{variant:"buttonDefault",border:"1px solid",borderRadius:"3px",borderColor:hexColor.blueDefault,onClick,href:href||"".concat(variables.vi,"/").concat(programSlug),textAlign:"center",margin:"10px auto 0 auto",display:"block",width:"50%",color:"".concat(hexColor.blueDefault," !important"),textDecoration:"none !important",background:"none",_hover:{opacity:.7},_active:{opacity:1}},(null==stTranslation||null===(_stTranslation$lang=stTranslation[lang])||void 0===_stTranslation$lang?void 0:_stTranslation$lang.common["learn-more"])||t("common:learn-more"))))}PublicCourseCard.displayName="PublicCourseCard",PublicCourseCard.propTypes={programName:prop_types_default().string.isRequired,programDescription:prop_types_default().string,programSlug:prop_types_default().string.isRequired,icon_url:prop_types_default().string,iconBackground:prop_types_default().string,startsIn:prop_types_default().instanceOf(Date),syllabusContent:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),courseProgress:prop_types_default().number,stTranslation:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),usersConnected:prop_types_default().arrayOf(prop_types_default().number),assistants:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),teacher:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),isAvailableAsSaas:prop_types_default().bool,subscriptionStatus:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().objectOf(prop_types_default().any)]),href:prop_types_default().string,onClick:prop_types_default().func},PublicCourseCard.defaultProps={programDescription:null,icon_url:"",iconBackground:"",stTranslation:null,startsIn:null,syllabusContent:null,courseProgress:null,usersConnected:[],assistants:[],teacher:null,isAvailableAsSaas:!0,subscriptionStatus:"",width:"300px",href:"",onClick:function onClick(){}},PublicCourseCard.__docgenInfo={description:"",methods:[],displayName:"PublicCourseCard",props:{programDescription:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},icon_url:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},iconBackground:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},stTranslation:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},startsIn:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"instanceOf",value:"Date"},required:!1},syllabusContent:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},courseProgress:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},usersConnected:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},assistants:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},teacher:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},isAvailableAsSaas:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},subscriptionStatus:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:"'300px'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"objectOf",value:{name:"any"}}]},required:!1},href:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},programName:{description:"",type:{name:"string"},required:!0},programSlug:{description:"",type:{name:"string"},required:!0}}};const components_PublicCourseCard=PublicCourseCard;var _Default$parameters,_Default$parameters2,_withDescription$para,_withDescription$para2,PublicCourseCard_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const PublicCourseCard_stories={title:"Components/PublicCourseCard",component:components_PublicCourseCard,argTypes:{isAvailableAsSaas:{control:{type:"boolean"}},programName:{control:{type:"text"}},programSlug:{control:{type:"text"}},programDescription:{control:{type:"text"}},startsIn:{control:{type:"date"}},icon_url:{control:{type:"text"}},iconBackground:{control:{type:"text"}},subscriptionStatus:{control:{type:"text"}},syllabusContent:{control:{type:"object"}},assistants:{control:{type:"object"}},courseProgress:{control:{type:"number"}}}};var Component=function Component(args,context){return PublicCourseCard_stories_jsx(components_PublicCourseCard,(0,esm_extends.Z)({stTranslation:context.parameters.i18n.store.data},args))};Component.displayName="Component";var Default=Component.bind({});Default.args={programName:"A.I & Machine Learning",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",programSlug:"machine-learning",startsIn:new Date((0,addDays.Z)(new Date,3)),icon_url:"https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png",iconBackground:"blue.default",syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},subscriptionStatus:"ACTIVE",assistants:[{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},{isOnline:!0,user:{first_name:"John",last_name:"Doe",profile:{avatar_url:"/static/images/p2.png"}}},{isOnline:!0,user:{first_name:"Jane",last_name:"Doe",profile:{avatar_url:"/static/images/p3.png"}}},{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},{isOnline:!0,user:{first_name:"John",last_name:"Doe",profile:{avatar_url:"/static/images/p2.png"}}},{isOnline:!0,user:{first_name:"Jane",last_name:"Doe",profile:{avatar_url:"/static/images/p3.png"}}}],teacher:{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},courseProgress:7};var withDescription=Component.bind({});withDescription.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",programSlug:"machine-learning",startsIn:new Date((0,addDays.Z)(new Date,3)),icon_url:"https://www.freeiconspng.com/thumbs/brain-icon-png/brain-2.png",iconBackground:"#25BF6C",subscriptionStatus:"ACTIVE",courseProgress:7},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <PublicCourseCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),withDescription.parameters=_objectSpread(_objectSpread({},withDescription.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_withDescription$para=withDescription.parameters)||void 0===_withDescription$para?void 0:_withDescription$para.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <PublicCourseCard stTranslation={context.parameters.i18n.store.data} {...args} />;\n}"},null===(_withDescription$para2=withDescription.parameters)||void 0===_withDescription$para2||null===(_withDescription$para2=_withDescription$para2.docs)||void 0===_withDescription$para2?void 0:_withDescription$para2.source)})})},"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getTimezoneOffsetInMilliseconds(date){var utcDate=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()));return utcDate.setUTCFullYear(date.getFullYear()),date.getTime()-utcDate.getTime()}__webpack_require__.d(__webpack_exports__,{Z:()=>getTimezoneOffsetInMilliseconds})},"./node_modules/date-fns/esm/_lib/requiredArgs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function requiredArgs(required,args){if(args.length<required)throw new TypeError(required+" argument"+(required>1?"s":"")+" required, but only "+args.length+" present")}__webpack_require__.d(__webpack_exports__,{Z:()=>requiredArgs})},"./node_modules/date-fns/esm/_lib/toInteger/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toInteger(dirtyNumber){if(null===dirtyNumber||!0===dirtyNumber||!1===dirtyNumber)return NaN;var number=Number(dirtyNumber);return isNaN(number)?number:number<0?Math.ceil(number):Math.floor(number)}__webpack_require__.d(__webpack_exports__,{Z:()=>toInteger})},"./node_modules/date-fns/esm/addDays/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>addDays});var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js"),_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function addDays(dirtyDate,dirtyAmount){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(2,arguments);var date=(0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDate),amount=(0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.Z)(dirtyAmount);return isNaN(amount)?new Date(NaN):amount?(date.setDate(date.getDate()+amount),date):date}},"./node_modules/date-fns/esm/toDate/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>toDate});var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function toDate(argument){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(1,arguments);var argStr=Object.prototype.toString.call(argument);return argument instanceof Date||"object"===(0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__.Z)(argument)&&"[object Date]"===argStr?new Date(argument.getTime()):"number"==typeof argument||"[object Number]"===argStr?new Date(argument):("string"!=typeof argument&&"[object String]"!==argStr||void 0===console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}}}]);