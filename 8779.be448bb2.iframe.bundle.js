(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8779],{"./node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Divider=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Divider2(props,ref){const{borderLeftWidth,borderBottomWidth,borderTopWidth,borderRightWidth,borderWidth,borderStyle,borderColor,...styles}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Divider",props),{className,orientation="horizontal",__css,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),dividerStyles={vertical:{borderLeftWidth:borderLeftWidth||borderRightWidth||borderWidth||"1px",height:"100%"},horizontal:{borderBottomWidth:borderBottomWidth||borderTopWidth||borderWidth||"1px",width:"100%"}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.hr,{ref,"aria-orientation":orientation,...rest,__css:{...styles,border:"0",borderColor,borderStyle,...dividerStyles[orientation],...__css},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-divider",className)})}));Divider.displayName="Divider"},"./node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./src/common/components/DynamicContentCard/card-types.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>types});var types={workshop:"workshop",lesson:"lesson",howTo:"howTo",project:"project",exercise:"exercise"}},"./src/common/components/DynamicContentCard/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_DynamicContentCard});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_WPAIWTI3=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-WPAIWTI3.mjs"),chunk_YGVX4ESO=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),Text=__webpack_require__("./src/common/components/Text.jsx"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),__jsx=react.createElement;function HeadInfo(_ref2){var technologies=_ref2.technologies,duration=_ref2.duration,type=_ref2.type,date=_ref2.date,t=(0,useTranslation.Z)("common").t,_useStyle=(0,useStyle.Z)(),backgroundColor=_useStyle.backgroundColor,featuredLight=_useStyle.featuredLight,lightColor=_useStyle.lightColor,startedButNotEnded=(null==date?void 0:date.started)&&!1===(null==date?void 0:date.ended),intervalDurationText=function getIntervalDurationTranslation(date){var t=(0,useTranslation.Z)("common").t,_ref=(null==date?void 0:date.intervalDurationDate)||{},days=_ref.days,hours=_ref.hours,minutes=_ref.minutes;return days>0?t("live-event:day",{count:days}):hours>0?minutes>0?"".concat(hours,"h ").concat(minutes,"m"):"".concat(hours,"h"):0===hours&&minutes>0?t("live-event:minute",{count:minutes}):null}(date),existsDuration=intervalDurationText||duration,isWorkshop="workshop"===type;return __jsx(chunk_MPFPK3CX.k,{minHeight:"24px",alignItems:"center",justifyContent:"space-between",width:"100%"},(null==technologies?void 0:technologies.length)>0?__jsx(chunk_MPFPK3CX.k,{alignItems:"center",gridGap:"8px"},technologies.filter((function(tech){return tech.icon_url})).map((function(tech){return null!=tech&&tech.icon_url?__jsx(next_image.Z,{src:null==tech?void 0:tech.icon_url,width:20,height:20}):__jsx(Text.Z,{alignItems:"center",gridGap:"4px",background:featuredLight,padding:"4px 10px",borderRadius:"18px"},null==tech?void 0:tech.title)}))):__jsx(chunk_6CSUKJP7.xu,null),__jsx(chunk_MPFPK3CX.k,{display:null!=date&&date.ended?"none":"flex",gridGap:"10px",padding:isWorkshop?"4px 0 0 0":"auto",alignItems:"center"},(Number.isInteger(duration)||(null==date?void 0:date.text))&&__jsx(chunk_MPFPK3CX.k,{display:existsDuration?"flex":"none",alignItems:"center",gridGap:"4px",background:backgroundColor,borderRadius:"18px"},__jsx(Icon.Z,{icon:"clock",width:"14px",height:"14px"}),intervalDurationText?__jsx(Text.Z,{size:"12px",fontWeight:700},intervalDurationText):duration&&__jsx(Text.Z,null,t("hrs-average",{number:duration}))),isWorkshop&&__jsx(react.Fragment,null,startedButNotEnded?__jsx(chunk_6CSUKJP7.xu,{display:"flex",alignItems:"center",height:"auto",gridGap:"8px",padding:"4px 10px",color:"danger",background:"red.light",borderRadius:"18px"},__jsx(Icon.Z,{icon:"dot",color:"currentColor",width:"9px",height:"9px"}),__jsx(Text.Z,{size:"12px",fontWeight:700,lineHeight:"14.4px"},t("live-now"))):(null==date?void 0:date.text)&&__jsx(Text.Z,{size:"12px",color:lightColor,fontWeight:700},null==date?void 0:date.text))))}HeadInfo.displayName="HeadInfo",HeadInfo.propTypes={technologies:prop_types_default().arrayOf(prop_types_default().shape({title:prop_types_default().string,icon_url:prop_types_default().string})),duration:prop_types_default().number,type:prop_types_default().string.isRequired,date:prop_types_default().string.isRequired},HeadInfo.defaultProps={technologies:[],duration:null},HeadInfo.__docgenInfo={description:"",methods:[],displayName:"HeadInfo",props:{technologies:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},icon_url:{name:"string",required:!1}}}},required:!1},duration:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},type:{description:"",type:{name:"string"},required:!0},date:{description:"",type:{name:"string"},required:!0}}};const DynamicContentCard_HeadInfo=HeadInfo;var FeatureIndicator_jsx=react.createElement;function FeatureIndicator(_ref){var _langData$lang,_langData$lang2,_langData$lang3,data=_ref.data,type=_ref.type,backgroundColor=(0,useStyle.Z)().backgroundColor,lang=null==data?void 0:data.lang,langData={en:{title:"Eng",icon:"usaFlag"},us:{title:"Eng",icon:"usaFlag"},es:{title:"Esp",icon:"spainFlag"}};return FeatureIndicator_jsx(chunk_MPFPK3CX.k,{id:"feature_indicator",_empty:{display:"none"},margin:"0 0 0 auto",gridGap:"10px",alignItems:"center"},"workshop"===type?FeatureIndicator_jsx(chunk_MPFPK3CX.k,{display:null!=langData&&null!==(_langData$lang=langData[lang])&&void 0!==_langData$lang&&_langData$lang.title?"flex":"none",alignItems:"center",gridGap:"8px",background:backgroundColor,padding:"4px 10px",borderRadius:"18px"},FeatureIndicator_jsx(Text.Z,{size:"12px",textTransform:"uppercase"},null==langData||null===(_langData$lang2=langData[lang])||void 0===_langData$lang2?void 0:_langData$lang2.title),FeatureIndicator_jsx(Icon.Z,{icon:null==langData||null===(_langData$lang3=langData[lang])||void 0===_langData$lang3?void 0:_langData$lang3.icon,width:"15px",height:"15px"})):FeatureIndicator_jsx(react.Fragment,null,["project","exercise"].includes(type)&&FeatureIndicator_jsx(react.Fragment,null,(null==data?void 0:data.interactive)&&FeatureIndicator_jsx(react.Fragment,null,FeatureIndicator_jsx(Icon.Z,{icon:"rigobot-avatar-tiny",width:"20px",height:"18px"}),FeatureIndicator_jsx(Icon.Z,{icon:"learnpack",width:"18px",height:"18px"}),(null==data?void 0:data.solution_url)&&FeatureIndicator_jsx(Icon.Z,{icon:"download",color:"currentColor",width:"18px",height:"14px"})),data.gitpod&&FeatureIndicator_jsx(Icon.Z,{icon:"prov-bridge",width:"20px",height:"18px"})),(null==data?void 0:data.intro_video_url)&&FeatureIndicator_jsx(Icon.Z,{icon:"tv-live",width:"18px",height:"18px"})))}FeatureIndicator.displayName="FeatureIndicator",FeatureIndicator.propTypes={type:prop_types_default().string.isRequired,data:prop_types_default().objectOf(prop_types_default().oneOfType(prop_types_default().any)).isRequired},FeatureIndicator.__docgenInfo={description:"",methods:[],displayName:"FeatureIndicator",props:{type:{description:"",type:{name:"string"},required:!0},data:{description:"",type:{name:"objectOf",value:{name:"union",computed:!0,value:"PropTypes.any"}},required:!0}}};const DynamicContentCard_FeatureIndicator=FeatureIndicator;var card_types=__webpack_require__("./src/common/components/DynamicContentCard/card-types.js"),intervalToDuration=__webpack_require__("./node_modules/date-fns/esm/intervalToDuration/index.js"),utils=__webpack_require__("./src/utils/index.js");const DynamicContentCard_useFormatDate=function useFormatDate(){var t=(0,useTranslation.Z)("live-event").t,formatTimeString=function formatTimeString(start){if(!(0,utils.qb)(start))return t("invalid-date");var formatted=function formatDurationString(duration){var months=duration.months,days=duration.days,hours=duration.hours,minutes=duration.minutes,averageHour=hours>=1&&minutes>0?hours+1:hours;return months>=1?t(months>1?"start-months":"start-month",{time:months}):days>=1&&0===months?t(days>1?"start-days":"start-day",{time:days}):hours>=1&&0===days&&0===months?t(hours>1?"start-hours":"start-hour",{time:averageHour||0}):minutes>=1&&0===hours&&0===days&&0===months?t(minutes>1?"start-minutes":"start-minute",{time:minutes||0}):""}((0,intervalToDuration.Z)({end:new Date,start}));return""===formatted?t("few-seconds"):formatted},textTime=function textTime(_ref){var formattedTime,start=_ref.start,started=_ref.started,end=_ref.end;return _ref.ended?(formattedTime=formatTimeString(end),t("ended",{time:formattedTime})):(formattedTime=formatTimeString(start),t(started?"started":"will-start",{time:formattedTime}))};return{formattedTime:function formattedTime(start,end){var started=start-new Date<=30,ended=end-new Date<=0,intervalDurationDate=start&&end&&(0,intervalToDuration.Z)({start,end});return{text:textTime({start,started,end,ended}),started,ended,intervalDurationDate}},formatTimeString}};var variables=__webpack_require__("./src/utils/variables.js"),NextChakraLink=__webpack_require__("./src/common/components/NextChakraLink.jsx"),requests=__webpack_require__("./src/utils/requests.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),_excluded=["data","type","technologies","usersWorkedHere"],DynamicContentCard_jsx=react.createElement,getAssetPath=function getAssetPath(asset){var _asset$category,_asset$category2,_asset$asset_type,_asset$asset_type2,_asset$asset_type3;return"how-to"===(null==asset||null===(_asset$category=asset.category)||void 0===_asset$category?void 0:_asset$category.slug)||"como"===(null==asset||null===(_asset$category2=asset.category)||void 0===_asset$category2?void 0:_asset$category2.slug)?"how-to":"LESSON"===(null==asset||null===(_asset$asset_type=asset.asset_type)||void 0===_asset$asset_type?void 0:_asset$asset_type.toUpperCase())?"lesson":"EXERCISE"===(null==asset||null===(_asset$asset_type2=asset.asset_type)||void 0===_asset$asset_type2?void 0:_asset$asset_type2.toUpperCase())?"interactive-exercise":"PROJECT"===(null==asset||null===(_asset$asset_type3=asset.asset_type)||void 0===_asset$asset_type3?void 0:_asset$asset_type3.toUpperCase())?"interactive-coding-tutorial":"lesson"},getDifficultyColors=function getDifficultyColors(currDifficulty){var currentDifficulty=currDifficulty.toLowerCase();return{bg:{beginner:"featuredLight",easy:"green.light",intermediate:"yellow.100",hard:"red.light"}[currentDifficulty],color:{beginner:"#005b7b",easy:"#115932",intermediate:"#6f4f0a",hard:"#7e0000"}[currentDifficulty]}};function DynamicContentCard(_ref){var _data$host_user,_data$host_user2,_data$host_user3,_data$host_user4,data=_ref.data,type=_ref.type,technologies=_ref.technologies,usersWorkedHere=_ref.usersWorkedHere,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),_useTranslation=(0,useTranslation.Z)("live-event"),t=_useTranslation.t,lang=_useTranslation.lang,_useStyle=(0,useStyle.Z)(),featuredColor=_useStyle.featuredColor,borderColor=_useStyle.borderColor,backgroundColor=_useStyle.backgroundColor,fontColor=_useStyle.fontColor,_useState=(0,react.useState)({}),date=_useState[0],setDate=_useState[1],language=null==data?void 0:data.lang,formattedTime=DynamicContentCard_useFormatDate().formattedTime,usersWithPicture=(null==usersWorkedHere?void 0:usersWorkedHere.length)>5?usersWorkedHere.slice(0,5):usersWorkedHere,remainingUsers=(null==usersWorkedHere?void 0:usersWorkedHere.length)>5?usersWorkedHere.length-5:"",languageConnector="us"===language||"en"===language||null===language?"":"/".concat(language),startedButNotEnded=(null==date?void 0:date.started)&&!1===(null==date?void 0:date.ended),isWorkshop=type===card_types.V.workshop,isWorkshopStarted=isWorkshop&&startedButNotEnded,description=(null==data?void 0:data.excerpt)||(null==data?void 0:data.description),langConnector="us"===(null==data?void 0:data.lang)?"":"/".concat(null==data?void 0:data.lang),isLesson="lesson"===getAssetPath(data),isExercise="interactive-exercise"===getAssetPath(data),isProject="interactive-coding-tutorial"===getAssetPath(data),isHowTo="how-to"===getAssetPath(data),getFormatedDate=function getFormatedDate(){var endDate=(null==data?void 0:data.ended_at)||(null==data?void 0:data.ending_at),startingAtDate=(0,utils.qb)(null==data?void 0:data.starting_at)&&new Date(null==data?void 0:data.starting_at),endingAtDate=(0,utils.qb)(endDate)&&new Date(endDate);return formattedTime(startingAtDate,endingAtDate)};return(0,react.useEffect)((function(){if(isWorkshop){var formattedDate=getFormatedDate();setDate(formattedDate),(0,utils.zb)((function(){setDate(formattedDate)}))}}),[]),(0,react.useEffect)((function(){if(isWorkshop){var formattedDate=getFormatedDate();setDate(formattedDate)}}),[lang]),DynamicContentCard_jsx(chunk_MPFPK3CX.k,(0,esm_extends.Z)({flexDirection:"column",border:isWorkshopStarted?"solid 2px":"solid 1px",borderColor:isWorkshopStarted?"blue.default":borderColor,padding:isWorkshop?"10px 16px 0px":"16px",gridGap:"14px",width:isWorkshop?{base:"310px",md:"360px"}:"auto",minWidth:"280px",background:isWorkshopStarted?featuredColor:backgroundColor,color:fontColor,borderRadius:"10px",position:"relative"},rest),DynamicContentCard_jsx(DynamicContentCard_HeadInfo,{technologies:(null==data?void 0:data.technologies)||technologies,date,duration:null==data?void 0:data.duration,type}),DynamicContentCard_jsx(chunk_MPFPK3CX.k,{flexDirection:"column",gridGap:"10px"},DynamicContentCard_jsx(Heading.Z,{as:"h3",size:"18px",lineHeight:"normal"},isWorkshop?DynamicContentCard_jsx(chunk_6CSUKJP7.xu,{display:"-webkit-box",style:{WebkitBoxOrient:"vertical",WebkitLineClamp:2},overflow:"hidden",textOverflow:"ellipsis",maxHeight:"2.4em",lineHeight:"1.2em","aria-label":null==data?void 0:data.title},null==data?void 0:data.title):DynamicContentCard_jsx(chunk_MPFPK3CX.k,{flexDirection:"row",justifyContent:"space-between"},DynamicContentCard_jsx(NextChakraLink.Z,{href:function getLink(){return isLesson?"".concat(langConnector,"/lesson/").concat(data.slug):isExercise?"".concat(langConnector,"/interactive-exercise/").concat(data.slug):isProject?"".concat(langConnector,"/interactive-coding-tutorial/").concat(data.slug):isHowTo?"".concat(langConnector,"/how-to/").concat(data.slug):"/".concat(data.slug)}(),onClick:function onClick(){var _data$category;(0,requests._1)({dataLayer:{event:"select_content",asset_slug:null==data?void 0:data.slug,asset_title:null==data?void 0:data.title,asset_lang:null==data?void 0:data.lang,asset_category:null==data||null===(_data$category=data.category)||void 0===_data$category?void 0:_data$category.slug}})},_after:{content:'""',position:"absolute",inset:0}},null==data?void 0:data.title),DynamicContentCard_jsx(Icon.Z,{icon:"arrowRight",color:fontColor,width:"15px",height:"15px"}))),(null==description?void 0:description.length)>0&&DynamicContentCard_jsx(react.Fragment,null,DynamicContentCard_jsx(Text.Z,isWorkshop?{size:"14px",height:isWorkshop?"3.6em":"auto",display:"-webkit-box",style:{WebkitBoxOrient:"vertical",WebkitLineClamp:3},overflow:"hidden",textOverflow:"ellipsis",maxHeight:"3.6em",lineHeight:"1.2em","aria-label":description}:{size:"14px",lineHeight:"normal"},description))),DynamicContentCard_jsx(chunk_MPFPK3CX.k,{_empty:{display:"none"},alignItems:"center",justifyContent:"space-between",gridGap:"10px",id:"event_info",marginTop:isWorkshop?"auto":"inherit"},DynamicContentCard_jsx(chunk_MPFPK3CX.k,{id:"left_info",_empty:{display:"none"}},isWorkshop&&(null==data?void 0:data.host_user)&&DynamicContentCard_jsx(chunk_MPFPK3CX.k,{alignItems:"center",gridGap:"12px"},DynamicContentCard_jsx(chunk_WPAIWTI3.q,{width:"35px",height:"35px",src:(null==data||null===(_data$host_user=data.host_user)||void 0===_data$host_user||null===(_data$host_user=_data$host_user.profile)||void 0===_data$host_user?void 0:_data$host_user.avatar_url)||""}),DynamicContentCard_jsx(chunk_MPFPK3CX.k,{flexDirection:"column",gridGap:"8px"},DynamicContentCard_jsx(Text.Z,{size:"14px",lineHeight:"normal"},"By ".concat(null==data||null===(_data$host_user2=data.host_user)||void 0===_data$host_user2?void 0:_data$host_user2.first_name," ").concat(null==data||null===(_data$host_user3=data.host_user)||void 0===_data$host_user3?void 0:_data$host_user3.last_name)),(null==data||null===(_data$host_user4=data.host_user)||void 0===_data$host_user4?void 0:_data$host_user4.profesion)&&DynamicContentCard_jsx(Text.Z,{fontSize:"12px",lineHeight:"normal"},data.host_user.profesion))),type===card_types.V.project&&(null==data?void 0:data.difficulty)&&DynamicContentCard_jsx(Text.Z,{background:getDifficultyColors(null==data?void 0:data.difficulty).bg,color:getDifficultyColors(null==data?void 0:data.difficulty).color,size:"13px",fontWeight:700,padding:"5px 7px",borderRadius:"18px"},(0,utils.fp)(data.difficulty))),DynamicContentCard_jsx(DynamicContentCard_FeatureIndicator,{data,type})),DynamicContentCard_jsx(chunk_6CSUKJP7.xu,{display:[card_types.V.workshop,card_types.V.project].includes(type)?"block":"none"},isWorkshop?DynamicContentCard_jsx(react.Fragment,null,DynamicContentCard_jsx(chunk_YGVX4ESO.i,{mb:isWorkshop?"0px":"16px"}),null!=date&&date.ended?DynamicContentCard_jsx(Text.Z,{size:"17px",padding:"10px 0",lineHeight:"normal",textAlign:"center",fontWeight:700},null==date?void 0:date.text):DynamicContentCard_jsx(NextChakraLink.Z,{href:"".concat(languageConnector,"/workshops/").concat(null==data?void 0:data.slug),color:"blue.default",fontSize:"17px",fontWeight:700,letterSpacing:"0.05em",height:"40px",display:"flex",alignItems:"center",width:"fit-content",margin:"0 auto",gridGap:"10px"},null!=date&&date.started?t("join-workshop"):t("register-workshop"),(null==date?void 0:date.started)&&DynamicContentCard_jsx(Icon.Z,{icon:"longArrowRight",width:"24px",height:"10px",color:"currentColor"}))):DynamicContentCard_jsx(react.Fragment,null,type===card_types.V.project&&(null==usersWorkedHere?void 0:usersWorkedHere.length)>0&&DynamicContentCard_jsx(react.Fragment,null,DynamicContentCard_jsx(chunk_YGVX4ESO.i,{mb:isWorkshop?"0px":"16px"}),DynamicContentCard_jsx(chunk_MPFPK3CX.k,{gridGap:"8px",alignItems:"center"},null==usersWithPicture?void 0:usersWithPicture.map((function(user,index){var _user$profile,avatarNumber=(0,utils.Xm)({number:null==user?void 0:user.id,min:1,max:20}),avatar=(null==user||null===(_user$profile=user.profile)||void 0===_user$profile?void 0:_user$profile.avatar_url)||"".concat(variables.k1,"/static/img/avatar-").concat(avatarNumber,".png");return DynamicContentCard_jsx(chunk_WPAIWTI3.q,{key:null==user?void 0:user.id,width:"32px",height:"32px",style:{userSelect:"none"},src:avatar,marginLeft:0!==index&&usersWorkedHere.length>index?"-24px":"0px",zIndex:index})})),remainingUsers&&DynamicContentCard_jsx(Text.Z,{size:"12px"},t("students-worked-here",{count:remainingUsers})))))),DynamicContentCard_jsx("style",null,"\n          #left_info:empty {\n            display: none;\n          }\n          #event_info:has(#left_info:empty + #feature_indicator:empty) {\n            display: none;\n          }\n        "))}DynamicContentCard.displayName="DynamicContentCard",DynamicContentCard.propTypes={data:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),type:prop_types_default().string.isRequired,technologies:prop_types_default().arrayOf(prop_types_default().shape({title:prop_types_default().string,icon:prop_types_default().string})).isRequired,usersWorkedHere:prop_types_default().arrayOf(prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])))},DynamicContentCard.defaultProps={data:{},usersWorkedHere:[]},DynamicContentCard.__docgenInfo={description:"",methods:[],displayName:"DynamicContentCard",props:{data:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},usersWorkedHere:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}}},required:!1},type:{description:"",type:{name:"string"},required:!0},technologies:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},icon:{name:"string",required:!1}}}},required:!0}}};const components_DynamicContentCard=DynamicContentCard},"./src/common/components/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_excluded=["children","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={xxl:"var(--heading-xxl)",xl:"var(--heading-xl)",l:"var(--heading-l)",m:"var(--heading-m)",sm:"var(--heading-sm)",xsm:"var(--heading-xsm)"};function Heading(_ref){var children=_ref.children,size=_ref.size,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.X,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({fontSize:sizes[size]||size},rest),children)}Heading.displayName="Heading",Heading.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().object]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},Heading.defaultProps={size:"l",children:null},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{defaultValue:{value:"'l'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Heading}}]);