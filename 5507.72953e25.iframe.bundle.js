"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5507],{"./src/common/components/FinalProject/Form.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Form});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_ENIANY67=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),chunk_SMHKDLMK=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs"),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),breathecode=__webpack_require__("./src/common/services/breathecode.js"),FieldForm=__webpack_require__("./src/common/components/Forms/FieldForm.jsx"),regex=__webpack_require__("./src/utils/regex.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_tagsinput=__webpack_require__("./node_modules/react-tagsinput/react-tagsinput.js"),react_tagsinput_default=__webpack_require__.n(react_tagsinput),chunk_WPAIWTI3=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-WPAIWTI3.mjs"),chunk_UUGUEMMH=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),chunk_OWW5MU75=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),chunk_66WFFNY3=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),chunk_YBA5A33G=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YBA5A33G.mjs"),chunk_YLPWWAYV=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs"),chunk_PVJ72NKC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs"),chunk_YI7XFFAC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YI7XFFAC.mjs"),dist=__webpack_require__("./node_modules/react-autosuggest/dist/index.js"),dist_default=__webpack_require__.n(dist),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),_excluded=["handleChange","placeholder","addTag","students","value"],__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var AutosuggestInput=(0,react.forwardRef)((function(_ref,ref){var handleChange=_ref.handleChange,placeholder=_ref.placeholder,addTag=_ref.addTag,students=_ref.students,externalValue=_ref.value,props=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)([]),suggestions=_useState[0],setSuggestions=_useState[1],fontColor=(0,useStyle.Z)().fontColor;return __jsx(dist_default(),{suggestions,onSuggestionsFetchRequested:function onSuggestionsFetchRequested(_ref3){var value=_ref3.value;return setSuggestions(function getSuggestions(value,students){var inputValue=value.trim().toLowerCase();return function filterInputValue(students,inputLength,inputValue){return students.filter((function(student){var _student$user;return"".concat(null==student||null===(_student$user=student.user)||void 0===_student$user?void 0:_student$user.full_name).toLowerCase().slice(0,inputLength)===inputValue}))}(students,null==inputValue?void 0:inputValue.length,inputValue)}(value,students))},onSuggestionSelected:function onSuggestionSelected(event){handleChange(event),addTag(event.target.value)},onSuggestionsClearRequested:function onSuggestionsClearRequested(){return setSuggestions([])},getSuggestionValue:function getSuggestionValue(student){var _student$user2,_student$user3;return"(".concat(null==student||null===(_student$user2=student.user)||void 0===_student$user2?void 0:_student$user2.id,") ").concat(null==student||null===(_student$user3=student.user)||void 0===_student$user3?void 0:_student$user3.full_name)},renderSuggestion:function renderSuggestion(suggestion){var _suggestion$user,_suggestion$user2,_suggestion$user3,_suggestion$user4,_suggestion$user5;return __jsx(chunk_6CSUKJP7.xu,{color:fontColor,display:"flex",gridGap:"8px"},__jsx(chunk_WPAIWTI3.q,{id:"(".concat(null==suggestion||null===(_suggestion$user=suggestion.user)||void 0===_suggestion$user?void 0:_suggestion$user.id,") ").concat(null==suggestion||null===(_suggestion$user2=suggestion.user)||void 0===_suggestion$user2?void 0:_suggestion$user2.full_name),width:"25px",height:"25px",style:{userSelect:"none"},src:(null==suggestion||null===(_suggestion$user3=suggestion.user)||void 0===_suggestion$user3||null===(_suggestion$user3=_suggestion$user3.profile)||void 0===_suggestion$user3?void 0:_suggestion$user3.avatar_url)||(null==suggestion||null===(_suggestion$user4=suggestion.user)||void 0===_suggestion$user4||null===(_suggestion$user4=_suggestion$user4.github)||void 0===_suggestion$user4?void 0:_suggestion$user4.avatar_url)}),"(".concat(null==suggestion||null===(_suggestion$user5=suggestion.user)||void 0===_suggestion$user5?void 0:_suggestion$user5.id,") ").concat(suggestion.user.full_name))},inputProps:_objectSpread(_objectSpread({ref,value:externalValue,onChange:function onChange(event,_ref2){var newValue=_ref2.newValue;event.target.value=newValue||event.target.outerText,handleChange(event)}},props),{},{placeholder})})}));AutosuggestInput.propTypes={props:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),handleChange:prop_types_default().func.isRequired,value:prop_types_default().string.isRequired,addTag:prop_types_default().func.isRequired,ref:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])).isRequired,students:prop_types_default().arrayOf(prop_types_default().objectOf(prop_types_default().any)).isRequired,placeholder:prop_types_default().string},AutosuggestInput.defaultProps={props:{},placeholder:"Add member"},AutosuggestInput.__docgenInfo={description:"",methods:[],displayName:"AutosuggestInput",props:{props:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},placeholder:{defaultValue:{value:"'Add member'",computed:!1},description:"",type:{name:"string"},required:!1},handleChange:{description:"",type:{name:"func"},required:!0},value:{description:"",type:{name:"string"},required:!0},addTag:{description:"",type:{name:"func"},required:!0},ref:{description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!0},students:{description:"",type:{name:"arrayOf",value:{name:"objectOf",value:{name:"any"}}},required:!0}}};const Autosuggest=AutosuggestInput;var Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),useAuth=__webpack_require__("./src/common/hooks/useAuth.js"),utils=__webpack_require__("./src/utils/index.js"),AddMember_excluded=["addTag","ref","onChange","value"],AddMember_jsx=react.createElement;function AddMember(_ref){var students=_ref.students,errors=_ref.errors,required=_ref.required,hint=_ref.hint,_useField=(0,formik_esm.U$)("members"),_useField2=(0,slicedToArray.Z)(_useField,3),field=_useField2[0],helpers=(_useField2[1],_useField2[2]),_useStyle=(0,useStyle.Z)(),featuredColor=_useStyle.featuredColor,disabledColor=_useStyle.disabledColor,lightColor=_useStyle.lightColor,t=(0,useTranslation.Z)("final-project").t,user=(0,useAuth.Z)().user,_useState=(0,react.useState)(!1),openModal=_useState[0],setOpenModal=_useState[1],_useState2=(0,react.useState)(!1),warningModal=_useState2[0],setWarningModal=_useState2[1],_useState3=(0,react.useState)(null),removeKey=_useState3[0],setRemoveKey=_useState3[1],isDisabled=0===students.filter((function(student){return student.user.id!==user.id})).length;return AddMember_jsx(chunk_6CSUKJP7.xu,null,AddMember_jsx(react_tagsinput_default(),{className:"react-tagsinput ".concat(null!=errors&&errors.members||isDisabled?"error":""),value:field.value.map((function(f){return f})),onChange:function handleAddTag(tag){null==helpers||helpers.setValue(tag)},onRemove:function handleRemoveTag(index){null==helpers||helpers.remove(index)},renderInput:function renderInput(_ref2){var addTag=_ref2.addTag,ref=_ref2.ref,onChange=_ref2.onChange,value=_ref2.value,props=(0,objectWithoutProperties.Z)(_ref2,AddMember_excluded);return AddMember_jsx(Autosuggest,(0,esm_extends.Z)({ref,value,addTag,students,handleChange:onChange,disabled:isDisabled},props,{placeholder:"".concat(t("modal-form.add-participants")).concat(required?"*":""),className:"".concat(props.className," ").concat(null!=errors&&errors.members?"error":"")}))},renderTag:function renderTag(_ref3){var _tagId$replace,_userData$user,_userData$user2,_userData$user3,_userData$user4,_userData$user5,_userData$user6,tag=_ref3.tag,key=_ref3.key,onRemove=_ref3.onRemove,tagId=function getTag(tag){return(0,utils.hj)(tag)?"".concat(tag):null!==(null==tag?void 0:tag.match(/\(([^)]+)\)/))?null==tag?void 0:tag.match(/\(([^)]+)\)/)[1]:"".concat(tag)}(tag),replaceTag="string"==typeof tagId?null==tagId||null===(_tagId$replace=tagId.replace(/\(([^)]+)\)/,""))||void 0===_tagId$replace?void 0:_tagId$replace.trim():tagId,userData=null==students?void 0:students.find((function(student){var _student$user;return(null==student||null===(_student$user=student.user)||void 0===_student$user?void 0:_student$user.id)===Number(tagId)}));return AddMember_jsx(chunk_6CSUKJP7.xu,{as:"span",fontSize:"15px",fontWeight:400,background:featuredColor,color:disabledColor,key,className:"react-tagsinput-tag"},userData&&AddMember_jsx(chunk_WPAIWTI3.q,{id:"(".concat(null==userData||null===(_userData$user=userData.user)||void 0===_userData$user?void 0:_userData$user.id,") ").concat(null==userData||null===(_userData$user2=userData.user)||void 0===_userData$user2?void 0:_userData$user2.full_name),width:"25px",height:"25px",style:{userSelect:"none"},marginRight:"5px",src:(null==userData||null===(_userData$user3=userData.user)||void 0===_userData$user3||null===(_userData$user3=_userData$user3.profile)||void 0===_userData$user3?void 0:_userData$user3.avatar_url)||(null==userData||null===(_userData$user4=userData.user)||void 0===_userData$user4||null===(_userData$user4=_userData$user4.github)||void 0===_userData$user4?void 0:_userData$user4.avatar_url)}),null!=userData&&null!==(_userData$user5=userData.user)&&void 0!==_userData$user5&&_userData$user5.id?null==userData||null===(_userData$user6=userData.user)||void 0===_userData$user6?void 0:_userData$user6.full_name:replaceTag,AddMember_jsx(chunk_6CSUKJP7.xu,{as:"button",marginStart:"5px",verticalAlign:"text-bottom",type:"button",className:"react-tagsinput-remove",onClick:function onClick(e){var _userData$user7;e.preventDefault();var regExp=/\(([^)]+)\)/,members=field.value.map((function(val){return"string"==typeof val?parseInt(regExp.exec(val)[1],10):val}));return 1===members.length&&members.includes(user.id)?setWarningModal(!0):user.id===(null==userData||null===(_userData$user7=userData.user)||void 0===_userData$user7?void 0:_userData$user7.id)?(setOpenModal(!0),setRemoveKey(key)):onRemove(key)}},AddMember_jsx(Icon.Z,{icon:"closeRounded",width:"15px",height:"15px",color:"#999"})),AddMember_jsx(chunk_UUGUEMMH.u_,{isOpen:openModal,onClose:function onClose(){return setOpenModal(!1)}},AddMember_jsx(chunk_OWW5MU75.Z,null),AddMember_jsx(chunk_66WFFNY3.h,null,AddMember_jsx(chunk_YBA5A33G.x,null,t("modal-form.confirmation.title")),AddMember_jsx(chunk_YLPWWAYV.o,null),AddMember_jsx(chunk_PVJ72NKC.f,null,t("modal-form.confirmation.text")),AddMember_jsx(chunk_YI7XFFAC.m,null,AddMember_jsx(chunk_NAA7TEES.z,{colorScheme:"blue",mr:3,onClick:function onClick(){onRemove(removeKey),setRemoveKey(null),setOpenModal(!1)}},t("modal-form.confirmation.confirm")),AddMember_jsx(chunk_NAA7TEES.z,{variant:"ghost",onClick:function onClick(){return setOpenModal(!1)}},t("modal-form.confirmation.cancel"))))),AddMember_jsx(chunk_UUGUEMMH.u_,{isOpen:warningModal,onClose:function onClose(){return setWarningModal(!1)}},AddMember_jsx(chunk_OWW5MU75.Z,null),AddMember_jsx(chunk_66WFFNY3.h,null,AddMember_jsx(chunk_YBA5A33G.x,{marginTop:"15px"},t("modal-form.warning-modal.title")),AddMember_jsx(chunk_YLPWWAYV.o,null),AddMember_jsx(chunk_PVJ72NKC.f,null),AddMember_jsx(chunk_YI7XFFAC.m,null,AddMember_jsx(chunk_NAA7TEES.z,{variant:"default",mr:3,onClick:function onClick(){setWarningModal(!1)}},t("modal-form.warning-modal.close"))))))}}),hint&&!(null!=errors&&errors.members)&&!isDisabled&&AddMember_jsx(chunk_6CSUKJP7.xu,{fontSize:"sm",color:lightColor,mt:2},hint),(null==errors?void 0:errors.members)&&AddMember_jsx(chunk_6CSUKJP7.xu,{className:"error-message"},null==errors?void 0:errors.members),isDisabled&&AddMember_jsx(chunk_6CSUKJP7.xu,{className:"error-message"},t("modal-form.no-students")))}AddMember.displayName="AddMember",AddMember.propTypes={errors:prop_types_default().shape({members:prop_types_default().string}),students:prop_types_default().arrayOf(prop_types_default().objectOf(prop_types_default().any)).isRequired,required:prop_types_default().bool,hint:prop_types_default().string},AddMember.defaultProps={errors:{},required:!1,hint:""},AddMember.__docgenInfo={description:"",methods:[],displayName:"AddMember",props:{errors:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{members:{name:"string",required:!1}}},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},hint:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},students:{description:"",type:{name:"arrayOf",value:{name:"objectOf",value:{name:"any"}}},required:!0}}};const FinalProject_AddMember=AddMember;var usePersistent=__webpack_require__("./src/common/hooks/usePersistent.js"),finalProjectAction=__webpack_require__("./src/common/store/actions/finalProjectAction.js"),Form_jsx=react.createElement;function Form_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Form_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Form_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Form_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function FinalProjectForm(_ref){var _cohortData$academy,cohortData=_ref.cohortData,studentsData=_ref.studentsData,handleClose=_ref.handleClose,defaultValues=_ref.defaultValues,refreshFinalProject=_ref.refreshFinalProject,t=(0,useTranslation.Z)("final-project").t,_useState=(0,react.useState)(studentsData),students=_useState[0],setStudents=_useState[1],_useState2=(0,react.useState)([]),fileProps=_useState2[0],setFileProps=_useState2[1],_usePersistent=(0,usePersistent.K)("cohortSession",{}),cohortSession=(0,slicedToArray.Z)(_usePersistent,1)[0],cohortSlug=(null==cohortData?void 0:cohortData.slug)||"",toast=(0,chunk_ENIANY67.p)(),cohortAcademy=(null==cohortData||null===(_cohortData$academy=cohortData.academy)||void 0===_cohortData$academy?void 0:_cohortData$academy.id)||4,_useFinalProjectProps=(0,finalProjectAction.Z)(),finalProjectData=_useFinalProjectProps.finalProjectData,setFinalProjectData=_useFinalProjectProps.setFinalProjectData,_useStyle=(0,useStyle.Z)(),fontColor=_useStyle.fontColor,backgroundColor=_useStyle.backgroundColor,_useState3=(0,react.useState)((null==finalProjectData?void 0:finalProjectData.screenshot)||(null==defaultValues?void 0:defaultValues.screenshot)||null),prefillImage=_useState3[0],setPrefillImage=_useState3[1],_useState4=(0,react.useState)({name:"",one_line_desc:"",description:"",repo_url:"",slides_url:"",screenshot:null,members:[]}),formProps=_useState4[0],setFormProps=_useState4[1],finalProjectValidation=index_esm.Ry().shape({name:index_esm.Z_().required(t("common:validators.project-name-error")),one_line_desc:index_esm.Z_().max(50,t("common:validators.long-input")).required(t("common:validators.one-line-description-required")),description:index_esm.Z_().max(600,t("common:validators.long-input")).required(t("common:validators.description-required")),repo_url:index_esm.Z_().matches(regex.HQ,t("common:validators.invalid-url",{url:"https://github.com/"})).required(t("common:validators.repo-url-required")),screenshot:index_esm.nK().nullable().test("fileFormat",t("common:validators.unsupported-image-file"),(function(value){return!!prefillImage||(!value||["image/jpg","image/jpeg","image/gif","image/png"].includes(value.type))})).test("fileSize",t("common:validators.long-file"),(function(value){return!!prefillImage||(!value||value.size<=2e6)})),members:index_esm.IX().of(index_esm.Z_()).max(8,t("common:validators.geeks-members-max",{value:8})).required(t("common:validators.geeks-members-required"))}),handleUpdate=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(actions,allValues){var _result,result,formdata,screenshot,val;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!allValues[0].screenshot){_context2.next=6;break}return(formdata=new FormData).append("file",allValues[0].screenshot),_context2.next=5,breathecode.Z.todo().sendScreenshot(formdata);case 5:result=_context2.sent;case 6:screenshot=(null===(_result=result)||void 0===_result||null===(_result=_result.data)||void 0===_result?void 0:_result.url)||prefillImage||null,val=[Form_objectSpread(Form_objectSpread({},allValues[0]),{},{screenshot})],breathecode.Z.todo().updateFinalProject(val).then(function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(res){var data;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,res.json();case 2:data=_context.sent,Array.isArray(data)?(setFinalProjectData(data[0]),refreshFinalProject(),toast({position:"top",title:"Success",description:"Your final project has been updated",status:"success",duration:5e3})):toast({position:"top",title:"Error",description:data.detail||"Something went wrong updating your final project",status:"error",duration:5e3}),handleClose();case 5:case"end":return _context.stop()}}),_callee)})));return function(_x3){return _ref3.apply(this,arguments)}}()).catch((function(){toast({position:"top",title:"Error",description:"Something went wrong submiting your final project",status:"error",duration:5e3})})),actions.setSubmitting(!1);case 10:case"end":return _context2.stop()}}),_callee2)})));return function handleUpdate(_x,_x2){return _ref2.apply(this,arguments)}}(),handleSubmit=function(){var _ref4=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee3(actions,allValues){var _result2,result,formdata,screenshot;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(!allValues.screenshot){_context3.next=6;break}return(formdata=new FormData).append("file",allValues.screenshot),_context3.next=5,breathecode.Z.todo().sendScreenshot(formdata);case 5:result=_context3.sent;case 6:screenshot=(null===(_result2=result)||void 0===_result2||null===(_result2=_result2.data)||void 0===_result2?void 0:_result2.url)||null,breathecode.Z.todo().createFinalProject(Form_objectSpread(Form_objectSpread({},allValues),{},{screenshot})).then((function(res){res?(setFinalProjectData(res.data[0]),toast({position:"top",title:"Success",description:"Your final project has been sended",status:"success",duration:5e3}),handleClose()):toast({position:"top",title:"Error",description:"Something went wrong submiting your final project",status:"error",duration:5e3})})).catch((function(){toast({position:"top",title:"Error",description:"Something went wrong submiting your final project",status:"error",duration:5e3})})),actions.setSubmitting(!1);case 9:case"end":return _context3.stop()}}),_callee3)})));return function handleSubmit(_x4,_x5){return _ref4.apply(this,arguments)}}();(0,react.useEffect)((function(){(null==studentsData?void 0:studentsData.length)>0||breathecode.Z.cohort().getStudents(cohortSlug,cohortAcademy).then((function(res){var studentsFiltered=null==res?void 0:res.data.filter((function(student){return"STUDENT"===(null==student?void 0:student.role)})).map((function(student){var _student$user,_student$user2;return Form_objectSpread(Form_objectSpread({},student),{},{user:Form_objectSpread(Form_objectSpread({},null==student?void 0:student.user),{},{full_name:"".concat(null==student||null===(_student$user=student.user)||void 0===_student$user?void 0:_student$user.first_name," ").concat(null==student||null===(_student$user2=student.user)||void 0===_student$user2?void 0:_student$user2.last_name)})})}));setStudents(studentsFiltered)}))}),[]);var repoUrl=(null==finalProjectData?void 0:finalProjectData.repo_url)||(null==defaultValues?void 0:defaultValues.repo_url),projectId=(null==finalProjectData?void 0:finalProjectData.id)||(null==defaultValues?void 0:defaultValues.id),handleCloseFile=function handleCloseFile(){setPrefillImage(null)};return Form_jsx(formik_esm.J9,{initialValues:{name:(null==finalProjectData?void 0:finalProjectData.name)||(null==defaultValues?void 0:defaultValues.name)||"",one_line_desc:(null==finalProjectData?void 0:finalProjectData.one_line_desc)||(null==defaultValues?void 0:defaultValues.one_line_desc)||"",description:(null==finalProjectData?void 0:finalProjectData.description)||(null==defaultValues?void 0:defaultValues.description)||"",repo_url:repoUrl||"",slides_url:"",screenshot:null,members:function getMembers(){var _finalProjectData$mem,_defaultValues$member;return(null==finalProjectData||null===(_finalProjectData$mem=finalProjectData.members)||void 0===_finalProjectData$mem?void 0:_finalProjectData$mem.length)>0?null==finalProjectData?void 0:finalProjectData.members.map((function(member){return(null==member?void 0:member.id)||member})):(null==defaultValues||null===(_defaultValues$member=defaultValues.members)||void 0===_defaultValues$member?void 0:_defaultValues$member.length)>0?null==defaultValues?void 0:defaultValues.members.map((function(member){return member.id})):[]}()},onSubmit:function onSubmit(values,actions){var _values$members,userIds=null==values||null===(_values$members=values.members)||void 0===_values$members?void 0:_values$members.map((function(member){var _tagId$replace,_userData$user,tagId=function getTag(tag){return(0,utils.hj)(tag)?"".concat(tag):null!==(null==tag?void 0:tag.match(/\(([^)]+)\)/))?null==tag?void 0:tag.match(/\(([^)]+)\)/)[1]:"".concat(tag)}(member),replaceTag="string"==typeof tagId?null==tagId||null===(_tagId$replace=tagId.replace(/\(([^)]+)\)/,""))||void 0===_tagId$replace?void 0:_tagId$replace.trim():tagId,userData=null==students?void 0:students.find((function(student){var _student$user3;return(null==student||null===(_student$user3=student.user)||void 0===_student$user3?void 0:_student$user3.id)===Number(tagId)}));return(null==userData||null===(_userData$user=userData.user)||void 0===_userData$user?void 0:_userData$user.id)||replaceTag})),allValues=Form_objectSpread(Form_objectSpread({},values),{},{cohort:null==cohortSession?void 0:cohortSession.id,members:userIds,id:projectId});repoUrl?handleUpdate(actions,[allValues]):handleSubmit(actions,allValues),actions.setSubmitting(!1)},validationSchema:finalProjectValidation},(function(_ref5){var errors=_ref5.errors,isSubmitting=_ref5.isSubmitting,setFieldValue=_ref5.setFieldValue,errorFields=errors;return Form_jsx(chunk_MPFPK3CX.k,{flexDirection:"column",padding:"20px",gridGap:"30px"},Form_jsx(Heading.Z,{size:"xsm"},t("modal-form.title")),Form_jsx(formik_esm.l0,{style:{display:"flex",flexDirection:"column",gridGap:"22px"}},Form_jsx(FieldForm.Z,{type:"text",name:"name",label:t("modal-form.project-name"),required:!0,formProps,setFormProps}),Form_jsx(FieldForm.Z,{type:"text",name:"one_line_desc",label:t("modal-form.one-line-description"),required:!0,formProps,setFormProps}),Form_jsx(FieldForm.Z,{type:"textarea",maxLength:600,name:"description",label:t("modal-form.description"),required:!0,formProps,setFormProps}),Form_jsx(FieldForm.Z,{type:"text",name:"repo_url",label:t("modal-form.repository-url"),formProps,setFormProps,hint:t("modal-form.repository-hint"),required:!0}),prefillImage?Form_jsx(chunk_6CSUKJP7.xu,{width:"100 %",height:"100%",position:"relative"},Form_jsx(chunk_NAA7TEES.z,{display:"flex",background:backgroundColor,color:fontColor,variant:"unstyled",opacity:.7,_hover:{opacity:.9},onClick:handleCloseFile,position:"absolute",right:3,top:2},Form_jsx(Icon.Z,{icon:"close",width:"14px",height:"14px",color:"currentColor"})),Form_jsx(chunk_SMHKDLMK.E,{src:prefillImage,width:"100%",height:"auto",borderRadius:"3px"})):Form_jsx(FieldForm.Z,{type:"file",name:"screenshot",formProps,fileProps,setFileProps,setFormProps,setFieldValue,maxFileSize:2e6,acceptedFiles:"image/jpg, image/jpeg, image/gif, image/png, image/gif",hint:t("modal-form.screenshot-hint")}),Form_jsx(FinalProject_AddMember,{students,errors:errorFields,hint:t("modal-form.participants-hint")}),Form_jsx(chunk_NAA7TEES.z,{type:"submit",variant:"default",isLoading:isSubmitting},t("common:submit-project"))))}))}FinalProjectForm.displayName="FinalProjectForm",FinalProjectForm.propTypes={cohortData:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),studentsData:prop_types_default().arrayOf(prop_types_default().objectOf(prop_types_default().any)),handleClose:prop_types_default().func,defaultValues:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),refreshFinalProject:prop_types_default().func.isRequired},FinalProjectForm.defaultProps={cohortData:{},studentsData:[],handleClose:function handleClose(){},defaultValues:{}},FinalProjectForm.__docgenInfo={description:"",methods:[],displayName:"FinalProjectForm",props:{cohortData:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},studentsData:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"objectOf",value:{name:"any"}}},required:!1},handleClose:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},defaultValues:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},refreshFinalProject:{description:"",type:{name:"func"},required:!0}}};const Form=FinalProjectForm},"./src/common/components/FinalProject/Modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),prop_types__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__),_hooks_useStyle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/common/hooks/useStyle.js"),_Heading__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/Heading.jsx"),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/components/Text.jsx"),_Form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/common/components/FinalProject/Form.jsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function FinalProjectModal(_ref){var isOpen=_ref.isOpen,cohortData=_ref.cohortData,studentsData=_ref.studentsData,closeModal=_ref.closeModal,closeOnOverlayClick=_ref.closeOnOverlayClick,t=(0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__.Z)("final-project").t,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),openForm=_useState[0],setOpenForm=_useState[1],bullets=t("modal.bullets",{},{returnObjects:!0}),_useStyle=(0,_hooks_useStyle__WEBPACK_IMPORTED_MODULE_5__.Z)(),lightColor=_useStyle.lightColor,modal=_useStyle.modal;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.u_,{closeOnOverlayClick,isOpen,onClose:closeModal},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z,null),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.h,{maxWidth:"1045px",margin:"6rem 10px 4rem 10px",background:modal.background},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.o,null),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.k,{flexDirection:{base:"column",md:"row"},gridGap:"22px",padding:"30px"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.xu,{display:"flex",alignItems:"center",flex:.6,borderRadius:"17px"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.E,{src:"/static/images/final_project.gif",objectFit:"cover",borderRadius:"17px",margin:"0 auto",w:"100%",h:"100%",layout:"fill",zIndex:10,top:"0",left:"0"})),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.k,{flexDirection:"column",flex:.4,width:"100%",gridGap:"16px",padding:{base:"0",md:"20px"}},__jsx(_Heading__WEBPACK_IMPORTED_MODULE_2__.Z,{size:"sm",color:lightColor,letterSpacing:"0.05em"},t("modal.subtitle")),__jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.Z,{size:"18px"},t("modal.description")),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.k,{flexDirection:"column",gridGap:"8px"},bullets.map((function(bullet){return __jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.Z,{size:"18px",key:bullet,dangerouslySetInnerHTML:{__html:bullet}})}))),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.z,{variant:"default",width:"fit-content",margin:"auto 0 0 0",padding:"0 1.8rem",onClick:function onClick(){setOpenForm(!0),closeModal()}},t("modal.button")))))),openForm&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.u_,{size:"lg",isOpen:openForm,onClose:setOpenForm},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z,null),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.h,{margin:"5rem 0 4rem 0",background:modal.background,borderRadius:"13px"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.o,null),__jsx(_Form__WEBPACK_IMPORTED_MODULE_4__.Z,{cohortData,studentsData,handleClose:function handleClose(){closeModal(),setOpenForm(!1)}}))))}FinalProjectModal.propTypes={isOpen:prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool,cohortData:prop_types__WEBPACK_IMPORTED_MODULE_14___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_14___default().any])),studentsData:prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().any)),closeModal:prop_types__WEBPACK_IMPORTED_MODULE_14___default().func,closeOnOverlayClick:prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool},FinalProjectModal.defaultProps={isOpen:!1,cohortData:{},studentsData:[],closeModal:function closeModal(){},closeOnOverlayClick:!0},FinalProjectModal.__docgenInfo={description:"",methods:[],displayName:"FinalProjectModal",props:{isOpen:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},cohortData:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},studentsData:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"objectOf",value:{name:"any"}}},required:!1},closeModal:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},closeOnOverlayClick:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=FinalProjectModal},"./src/common/store/actions/finalProjectAction.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useFinalProjectProps(){var data=(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.v9)((function(state){return state.finalProjectReducer})),dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.I0)();return{finalProjectData:data.finalProjectData,setFinalProjectData:function setFinalProjectData(newState){return dispatch({type:"SET_FINAL_PROJECT_DATA",payload:newState})}}}}}]);