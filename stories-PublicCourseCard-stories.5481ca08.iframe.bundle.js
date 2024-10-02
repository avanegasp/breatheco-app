"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2373],{"./src/stories/PublicCourseCard.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>PublicCourseCard_stories,withDescription:()=>withDescription});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_E3YVMML4=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-E3YVMML4.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),NextChakraLink=__webpack_require__("./src/common/components/NextChakraLink.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),ProjectsSection=__webpack_require__("./src/common/components/ProjectsSection.jsx"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),variables=__webpack_require__("./src/utils/variables.js"),_excluded=["programName","programDescription","programSlug","icon_url","iconBackground","startsIn","syllabusContent","courseProgress","usersConnected","assistants","teacher","isAvailableAsSaas","subscriptionStatus","width","href","onClick"],__jsx=react.createElement;function PublicCourseCard(_ref){var programName=_ref.programName,programDescription=_ref.programDescription,programSlug=_ref.programSlug,icon_url=_ref.icon_url,startsIn=(_ref.iconBackground,_ref.startsIn),syllabusContent=_ref.syllabusContent,courseProgress=_ref.courseProgress,usersConnected=_ref.usersConnected,assistants=_ref.assistants,teacher=_ref.teacher,isAvailableAsSaas=_ref.isAvailableAsSaas,subscriptionStatus=_ref.subscriptionStatus,width=_ref.width,href=_ref.href,onClick=_ref.onClick,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),t=(0,useTranslation.Z)("program-card").t,_useStyle=(0,useStyle.Z)(),backgroundColor2=_useStyle.backgroundColor2,hexColor=_useStyle.hexColor,textColor=(0,chunk_7NLW6UB6.ff)("black","white");return __jsx(chunk_6CSUKJP7.xu,(0,esm_extends.Z)({border:"1px solid",borderColor:hexColor.borderColor,borderRadius:"9px",padding:"15px",background:backgroundColor2,position:"relative",width,marginTop:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between"},rest),__jsx(chunk_6CSUKJP7.xu,{position:"absolute",borderRadius:"full",top:"-30px"},__jsx(chunk_E3YVMML4.E,{src:icon_url,width:"44px",height:"44px"})),__jsx(chunk_6CSUKJP7.xu,{height:"10px"}),__jsx(chunk_6CSUKJP7.xu,null,__jsx(Heading.Z,{size:"lg",as:"h3",lineHeight:"19px",fontWeight:"700",color:textColor,margin:"0 0 5px 0 !important"},programName),syllabusContent||assistants.length>0?__jsx(ProjectsSection.Z,{startsIn,syllabusContent,courseProgress,usersConnected,assistants,teacher,isAvailableAsSaas,subscriptionStatus}):__jsx(Text.Z,{size:{base:"md",md:"xs"},lineHeight:{base:"24px",md:"14px"},fontWeight:"500",color:textColor,marginTop:"0 !important",overflow:"hidden !important"},programDescription)),__jsx(NextChakraLink.Z,{variant:"buttonDefault",border:"1px solid",borderRadius:"3px",onClick,href:href||"".concat(variables.vi,"/").concat(programSlug),textAlign:"center",marginTop:"10px",display:"block",width:"120px",color:"white !important",textDecoration:"none !important",padding:"7px 16px !important",_hover:{opacity:.7},_active:{opacity:1}},t("common:learn-more")))}PublicCourseCard.displayName="PublicCourseCard",PublicCourseCard.propTypes={programName:prop_types_default().string.isRequired,programDescription:prop_types_default().string,programSlug:prop_types_default().string.isRequired,icon_url:prop_types_default().string,iconBackground:prop_types_default().string,startsIn:prop_types_default().instanceOf(Date),syllabusContent:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),courseProgress:prop_types_default().number,usersConnected:prop_types_default().arrayOf(prop_types_default().number),assistants:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])),teacher:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),isAvailableAsSaas:prop_types_default().bool,subscriptionStatus:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().objectOf(prop_types_default().any)]),href:prop_types_default().string,onClick:prop_types_default().func},PublicCourseCard.defaultProps={programDescription:null,icon_url:"",iconBackground:"",startsIn:null,syllabusContent:null,courseProgress:null,usersConnected:[],assistants:[],teacher:null,isAvailableAsSaas:!0,subscriptionStatus:"",width:"300px",href:"",onClick:function onClick(){}},PublicCourseCard.__docgenInfo={description:"",methods:[],displayName:"PublicCourseCard",props:{programDescription:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},icon_url:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},iconBackground:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},startsIn:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"instanceOf",value:"Date"},required:!1},syllabusContent:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},courseProgress:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},usersConnected:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},assistants:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!1},teacher:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},isAvailableAsSaas:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},subscriptionStatus:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:"'300px'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"objectOf",value:{name:"any"}}]},required:!1},href:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},programName:{description:"",type:{name:"string"},required:!0},programSlug:{description:"",type:{name:"string"},required:!0}}};const components_PublicCourseCard=PublicCourseCard;var _Default$parameters,_Default$parameters2,_withDescription$para,_withDescription$para2,PublicCourseCard_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const PublicCourseCard_stories={title:"Components/PublicCourseCard",component:components_PublicCourseCard,argTypes:{isAvailableAsSaas:{control:{type:"boolean"}},programName:{control:{type:"text"}},programSlug:{control:{type:"text"}},programDescription:{control:{type:"text"}},startsIn:{control:{type:"date"}},icon_url:{control:{type:"text"}},iconBackground:{control:{type:"text"}},subscriptionStatus:{control:{type:"text"}},syllabusContent:{control:{type:"object"}},assistants:{control:{type:"object"}},courseProgress:{control:{type:"number"}}}};var Component=function Component(args,context){return PublicCourseCard_stories_jsx(components_PublicCourseCard,args)};Component.displayName="Component";var Default=Component.bind({});Default.args={programName:"A.I & Machine Learning",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",programSlug:"machine-learning",startsIn:new Date((0,addDays.Z)(new Date,3)),icon_url:"https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png",iconBackground:"blue.default",syllabusContent:{totalLessons:30,totalProjects:15,totalExercises:15,completedLessons:3,completedProjects:10,completedExercises:5},subscriptionStatus:"ACTIVE",assistants:[{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},{isOnline:!0,user:{first_name:"John",last_name:"Doe",profile:{avatar_url:"/static/images/p2.png"}}},{isOnline:!0,user:{first_name:"Jane",last_name:"Doe",profile:{avatar_url:"/static/images/p3.png"}}},{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},{isOnline:!0,user:{first_name:"John",last_name:"Doe",profile:{avatar_url:"/static/images/p2.png"}}},{isOnline:!0,user:{first_name:"Jane",last_name:"Doe",profile:{avatar_url:"/static/images/p3.png"}}}],teacher:{isOnline:!0,user:{first_name:"Juan",last_name:"López",profile:{avatar_url:"/static/images/p1.png"}}},courseProgress:7};var withDescription=Component.bind({});withDescription.args={programName:"Data Science",programDescription:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",programSlug:"machine-learning",startsIn:new Date((0,addDays.Z)(new Date,3)),icon_url:"https://www.freeiconspng.com/thumbs/brain-icon-png/brain-2.png",iconBackground:"#25BF6C",subscriptionStatus:"ACTIVE",courseProgress:7},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <PublicCourseCard {...args} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),withDescription.parameters=_objectSpread(_objectSpread({},withDescription.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_withDescription$para=withDescription.parameters)||void 0===_withDescription$para?void 0:_withDescription$para.docs),{},{source:_objectSpread({originalSource:"(args, context) => {\n  return <PublicCourseCard {...args} />;\n}"},null===(_withDescription$para2=withDescription.parameters)||void 0===_withDescription$para2||null===(_withDescription$para2=_withDescription$para2.docs)||void 0===_withDescription$para2?void 0:_withDescription$para2.source)})})},"./src/common/components/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_excluded=["children","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={xxl:"var(--heading-xxl)",xl:"var(--heading-xl)",l:"var(--heading-l)",m:"var(--heading-m)",sm:"var(--heading-sm)",xsm:"var(--heading-xsm)"};function Heading(_ref){var children=_ref.children,size=_ref.size,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.X,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({fontSize:sizes[size]||size},rest),children)}Heading.displayName="Heading",Heading.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().object]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},Heading.defaultProps={size:"l",children:null},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{defaultValue:{value:"'l'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Heading}}]);