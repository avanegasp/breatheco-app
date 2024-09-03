(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3750],{"./node_modules/@chakra-ui/avatar/dist/chunk-ZYO64PFG.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>AvatarGroup});var _chunk_WPAIWTI3_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-WPAIWTI3.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");var AvatarGroup=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AvatarGroup2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("Avatar",props),{children,borderColor,max,spacing="-0.75rem",borderRadius="full",...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.Lr)(props),validChildren=(0,_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_5__.W)(children),childrenWithinMax=null!=max?validChildren.slice(0,max):validChildren,excess=null!=max?validChildren.length-max:0,clones=childrenWithinMax.reverse().map(((child,index)=>{var _a;const childProps={marginEnd:0===index?0:spacing,size:props.size,borderColor:null!=(_a=child.props.borderColor)?_a:borderColor,showBorder:!0};return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}(childProps))})),groupStyles={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...styles.group},excessStyles={borderRadius,marginStart:spacing,..._chunk_WPAIWTI3_mjs__WEBPACK_IMPORTED_MODULE_6__.O,...styles.excessLabel};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.m.div,{ref,role:"group",__css:groupStyles,...rest,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_8__.cx)("chakra-avatar__group",props.className),children:[excess>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.m.span,{className:"chakra-avatar__excess",__css:excessStyles,children:`+${excess}`}),clones]})}));AvatarGroup.displayName="AvatarGroup"},"./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),[ButtonGroupProvider,useButtonGroup]=(0,dist.k)({strict:!1,name:"ButtonGroupContext"}),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function ButtonIcon(props){const{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=(0,shared_utils_dist.cx)("chakra-button__icon",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className,children:_children})}ButtonIcon.displayName="ButtonIcon";var chunk_NO6MRLPK=__webpack_require__("./node_modules/@chakra-ui/spinner/dist/chunk-NO6MRLPK.mjs");function ButtonSpinner(props){const{label,placement,spacing="0.5rem",children=(0,jsx_runtime.jsx)(chunk_NO6MRLPK.$,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=(0,shared_utils_dist.cx)("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)((()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css})),[__css,label,marginProp,spacing]);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:_className,...rest,__css:spinnerStyles,children})}ButtonSpinner.displayName="ButtonSpinner";var react_use_merge_refs_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),Button=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const group=useButtonGroup(),styles=(0,chunk_T2VHL7RE.mq)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,styled_system_dist.Lr)(props),buttonStyles=(0,react.useMemo)((()=>{const _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}}),[styles,group]),{ref:_ref,type:defaultType}=function useButtonType(value){const[isButton,setIsButton]=(0,react.useState)(!value);return{ref:(0,react.useCallback)((node=>{node&&setIsButton("BUTTON"===node.tagName)}),[]),type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return(0,jsx_runtime.jsxs)(chunk_3LE6AY5Q.m.button,{ref:(0,react_use_merge_refs_dist.qq)(ref,_ref),as,type:null!=type?type:defaultType,"data-active":(0,shared_utils_dist.PB)(isActive),"data-loading":(0,shared_utils_dist.PB)(isLoading),__css:buttonStyles,className:(0,shared_utils_dist.cx)("chakra-button",className),...rest,disabled:isDisabled||isLoading,children:[isLoading&&"start"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing,children:spinner}),isLoading?loadingText||(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{opacity:0,children:(0,jsx_runtime.jsx)(ButtonContent,{...contentProps})}):(0,jsx_runtime.jsx)(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing,children:spinner})]})}));function ButtonContent(props){const{leftIcon,rightIcon,children,iconSpacing}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leftIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginEnd:iconSpacing,children:leftIcon}),children,rightIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginStart:iconSpacing,children:rightIcon})]})}Button.displayName="Button"},"./node_modules/@chakra-ui/image/dist/chunk-E3YVMML4.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Img});var _chunk_QBIO4VEB_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-QBIO4VEB.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Img=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.img,{ref,as:_chunk_QBIO4VEB_mjs__WEBPACK_IMPORTED_MODULE_3__.Z,className:"chakra-image",...props})))},"./node_modules/@chakra-ui/image/dist/chunk-QBIO4VEB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>NativeImage});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),NativeImage=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function NativeImage2(props,ref){const{htmlWidth,htmlHeight,alt,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{width:htmlWidth,height:htmlHeight,ref,alt,...rest})}));NativeImage.displayName="NativeImage"},"./node_modules/@chakra-ui/layout/dist/chunk-5FO2ZLZM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Grid=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Grid2(props,ref){const{templateAreas,gap,rowGap,columnGap,column,row,autoFlow,autoRows,templateRows,autoColumns,templateColumns,...rest}=props,styles={display:"grid",gridTemplateAreas:templateAreas,gridGap:gap,gridRowGap:rowGap,gridColumnGap:columnGap,gridAutoColumns:autoColumns,gridColumn:column,gridRow:row,gridAutoFlow:autoFlow,gridAutoRows:autoRows,gridTemplateRows:templateRows,gridTemplateColumns:templateColumns};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Grid.displayName="Grid"},"./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Heading=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Heading2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Heading",props),{className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.h2,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading",props.className),...rest,__css:styles})}));Heading.displayName="Heading"},"./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Divider=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Divider2(props,ref){const{borderLeftWidth,borderBottomWidth,borderTopWidth,borderRightWidth,borderWidth,borderStyle,borderColor,...styles}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Divider",props),{className,orientation="horizontal",__css,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),dividerStyles={vertical:{borderLeftWidth:borderLeftWidth||borderRightWidth||borderWidth||"1px",height:"100%"},horizontal:{borderBottomWidth:borderBottomWidth||borderTopWidth||borderWidth||"1px",width:"100%"}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.hr,{ref,"aria-orientation":orientation,...rest,__css:{...styles,border:"0",borderColor,borderStyle,...dividerStyles[orientation],...__css},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-divider",className)})}));Divider.displayName="Divider"},"./node_modules/@chakra-ui/layout/dist/chunk-Z47J5YMH.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{HC:()=>ListItem,QI:()=>UnorderedList});var _chakra_ui_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs"),_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),[ListStylesProvider,useListStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),List=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function List2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("List",props),{children,styleType="none",stylePosition,spacing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.Lr)(props),validChildren=(0,_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_5__.W)(children),spacingStyle=spacing?{"& > *:not(style) ~ *:not(style)":{mt:spacing}}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.ul,{ref,listStyleType:styleType,listStylePosition:stylePosition,role:"list",__css:{...styles.container,...spacingStyle},...rest,children:validChildren})})}));List.displayName="List",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>{const{as,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(List,{ref,as:"ol",styleType:"decimal",marginStart:"1em",...rest})})).displayName="OrderedList";var UnorderedList=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function UnorderedList2(props,ref){const{as,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(List,{ref,as:"ul",styleType:"initial",marginStart:"1em",...rest})}));UnorderedList.displayName="UnorderedList";var ListItem=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function ListItem2(props,ref){const styles=useListStyles();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.li,{ref,...props,__css:styles.item})}));ListItem.displayName="ListItem",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function ListIcon2(props,ref){const styles=useListStyles();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icon__WEBPACK_IMPORTED_MODULE_7__.J,{ref,role:"presentation",...props,__css:styles.icon})})).displayName="ListIcon"},"./node_modules/@chakra-ui/media-query/dist/chunk-MG6WC47T.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>useMediaQuery});var _chakra_ui_react_env__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/react-env/dist/chunk-23XYWYLU.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useMediaQuery(query,options={}){const{ssr=!0,fallback}=options,{getWindow}=(0,_chakra_ui_react_env__WEBPACK_IMPORTED_MODULE_1__.O)(),queries=Array.isArray(query)?query:[query];let fallbackValues=Array.isArray(fallback)?fallback:[fallback];fallbackValues=fallbackValues.filter((v=>null!=v));const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>queries.map(((query2,index)=>({media:query2,matches:ssr?!!fallbackValues[index]:getWindow().matchMedia(query2).matches})))));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const win=getWindow();setValue(queries.map((query2=>({media:query2,matches:win.matchMedia(query2).matches}))));const mql=queries.map((query2=>win.matchMedia(query2))),handler=evt=>{setValue((prev=>prev.slice().map((item=>item.media===evt.media?{...item,matches:evt.matches}:item))))};return mql.forEach((mql2=>{"function"==typeof mql2.addListener?mql2.addListener(handler):mql2.addEventListener("change",handler)})),()=>{mql.forEach((mql2=>{"function"==typeof mql2.removeListener?mql2.removeListener(handler):mql2.removeEventListener("change",handler)}))}}),[getWindow]),value.map((item=>item.matches))}},"./node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./node_modules/@chakra-ui/skeleton/dist/chunk-3GRGLNAR.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>Skeleton});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),chunk_7V3ZYTH7=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-7V3ZYTH7.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),StyledSkeleton=(0,chunk_3LE6AY5Q.m)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),$startColor=(0,styled_system_dist.gJ)("skeleton-start-color"),$endColor=(0,styled_system_dist.gJ)("skeleton-end-color"),fade=(0,emotion_react_browser_esm.F4)({from:{opacity:0},to:{opacity:1}}),bgFade=(0,emotion_react_browser_esm.F4)({from:{borderColor:$startColor.reference,background:$startColor.reference},to:{borderColor:$endColor.reference,background:$endColor.reference}}),Skeleton=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const skeletonProps={...props,fadeDuration:"number"==typeof props.fadeDuration?props.fadeDuration:.4,speed:"number"==typeof props.speed?props.speed:.8},styles=(0,chunk_T2VHL7RE.mq)("Skeleton",skeletonProps),isFirstRender=function useIsFirstRender(){const isFirstRender=(0,react.useRef)(!0);return(0,react.useEffect)((()=>{isFirstRender.current=!1}),[]),isFirstRender.current}(),{startColor="",endColor="",isLoaded,fadeDuration,speed,className,fitContent,...rest}=(0,styled_system_dist.Lr)(skeletonProps),[startColorVar,endColorVar]=(0,chunk_7V3ZYTH7.dQ)("colors",[startColor,endColor]),wasPreviouslyLoaded=function usePrevious(value){const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=value}),[value]),ref.current}(isLoaded),_className=(0,dist.cx)("chakra-skeleton",className),cssVarStyles={...startColorVar&&{[$startColor.variable]:startColorVar},...endColorVar&&{[$endColor.variable]:endColorVar}};if(isLoaded){const animation=isFirstRender||wasPreviouslyLoaded?"none":`${fade} ${fadeDuration}s`;return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,className:_className,__css:{animation},...rest})}return(0,jsx_runtime.jsx)(StyledSkeleton,{ref,className:_className,...rest,__css:{width:fitContent?"fit-content":void 0,...styles,...cssVarStyles,_dark:{...styles._dark,...cssVarStyles},animation:`${speed}s linear infinite alternate ${bgFade}`}})}));Skeleton.displayName="Skeleton"},"./node_modules/@chakra-ui/skeleton/dist/chunk-OJ7ITIQ2.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>SkeletonCircle});var _chunk_3GRGLNAR_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/skeleton/dist/chunk-3GRGLNAR.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),SkeletonCircle=({size="2rem",...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_3GRGLNAR_mjs__WEBPACK_IMPORTED_MODULE_1__.O,{borderRadius:"full",boxSize:size,...rest});SkeletonCircle.displayName="SkeletonCircle"},"./node_modules/@chakra-ui/skeleton/dist/chunk-QTKSMHLN.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>SkeletonText});var chunk_3GRGLNAR=__webpack_require__("./node_modules/@chakra-ui/skeleton/dist/chunk-3GRGLNAR.mjs"),chunk_G72KV6MB=__webpack_require__("./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var chunk_MG6WC47T=__webpack_require__("./node_modules/@chakra-ui/media-query/dist/chunk-MG6WC47T.mjs"),chunk_NLMMK76H=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-NLMMK76H.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");function useBreakpointValue(values,arg){var _a;const breakpoint=function useBreakpoint(arg){var _a,_b;const opts=(0,dist.Kn)(arg)?arg:{fallback:null!=arg?arg:"base"},breakpoints=(0,chunk_NLMMK76H.F)().__breakpoints.details.map((({minMaxQuery,breakpoint})=>({breakpoint,query:minMaxQuery.replace("@media screen and ","")}))),fallback=breakpoints.map((bp=>bp.breakpoint===opts.fallback)),values=(0,chunk_MG6WC47T.a)(breakpoints.map((bp=>bp.query)),{fallback,ssr:opts.ssr});return null!=(_b=null==(_a=breakpoints[values.findIndex((value=>1==value))])?void 0:_a.breakpoint)?_b:opts.fallback}((0,dist.Kn)(arg)?arg:{fallback:null!=arg?arg:"base"}),theme=(0,chunk_NLMMK76H.F)();if(!breakpoint)return;const breakpoints=Array.from((null==(_a=theme.__breakpoints)?void 0:_a.keys)||[]);return function getClosestValue(values,breakpoint,breakpoints=chunk_G72KV6MB.AV){let index=Object.keys(values).indexOf(breakpoint);if(-1!==index)return values[breakpoint];let stopIndex=breakpoints.indexOf(breakpoint);for(;stopIndex>=0;){const key=breakpoints[stopIndex];if(values.hasOwnProperty(key)){index=stopIndex;break}stopIndex-=1}if(-1!==index)return values[breakpoints[index]]}(Array.isArray(values)?Object.fromEntries(Object.entries((0,chunk_G72KV6MB.Yq)(values,breakpoints)).map((([key,value])=>[key,value]))):values,breakpoint,breakpoints)}var chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");var defaultNoOfLines=3,SkeletonText=props=>{const{noOfLines=defaultNoOfLines,spacing="0.5rem",skeletonHeight="0.5rem",className,startColor,endColor,isLoaded,fadeDuration,speed,variant,size,colorScheme,children,...rest}=props,noOfLinesValue=useBreakpointValue("number"==typeof noOfLines?[noOfLines]:noOfLines)||defaultNoOfLines,numbers=function range(count){return Array(count).fill(1).map(((_,index)=>index+1))}(noOfLinesValue),getWidth=index=>noOfLinesValue>1&&index===numbers.length?"80%":"100%",_className=(0,dist.cx)("chakra-skeleton__group",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:_className,...rest,children:numbers.map(((number,index)=>{if(isLoaded&&index>0)return null;const sizeProps=isLoaded?null:{mb:number===numbers.length?"0":spacing,width:getWidth(number),height:skeletonHeight};return(0,jsx_runtime.jsx)(chunk_3GRGLNAR.O,{startColor,endColor,isLoaded,fadeDuration,speed,variant,size,colorScheme,...sizeProps,children:0===index?children:void 0},numbers.length.toString()+number)}))})};SkeletonText.displayName="SkeletonText"},"./node_modules/next/head.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/head.js")},"./node_modules/react-masonry-css/dist/react-masonry-css.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};class Masonry extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){let columnCount;super(props),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),columnCount=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((()=>{this.reCalculateColumnCount()}))):this.reCalculateColumnCount()}reCalculateColumnCount(){const windowWidth=window&&window.innerWidth||1/0;let breakpointColsObject=this.props.breakpointCols;"object"!=typeof breakpointColsObject&&(breakpointColsObject={default:parseInt(breakpointColsObject)||2});let matchedBreakpoint=1/0,columns=breakpointColsObject.default||2;for(let breakpoint in breakpointColsObject){const optBreakpoint=parseInt(breakpoint);optBreakpoint>0&&windowWidth<=optBreakpoint&&optBreakpoint<matchedBreakpoint&&(matchedBreakpoint=optBreakpoint,columns=breakpointColsObject[breakpoint])}columns=Math.max(1,parseInt(columns)||1),this.state.columnCount!==columns&&this.setState({columnCount:columns})}itemsInColumns(){const currentColumnCount=this.state.columnCount,itemsInColumns=new Array(currentColumnCount),items=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.children);for(let i=0;i<items.length;i++){const columnIndex=i%currentColumnCount;itemsInColumns[columnIndex]||(itemsInColumns[columnIndex]=[]),itemsInColumns[columnIndex].push(items[i])}return itemsInColumns}renderColumns(){const{column,columnAttrs={},columnClassName}=this.props,childrenInColumns=this.itemsInColumns(),columnWidth=100/childrenInColumns.length+"%";let className=columnClassName;className&&"string"!=typeof className&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===className&&(className="my-masonry-grid_column"));const columnAttributes=_objectSpread(_objectSpread(_objectSpread({},column),columnAttrs),{},{style:_objectSpread(_objectSpread({},columnAttrs.style),{},{width:columnWidth}),className});return childrenInColumns.map(((items,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},columnAttributes,{key:i}),items)))}logDeprecated(message){console.error("[Masonry]",message)}render(){const _this$props=this.props,{children,breakpointCols,columnClassName,columnAttrs,column,className}=_this$props,rest=_objectWithoutProperties(_this$props,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let classNameOutput=className;return"string"!=typeof className&&(this.logDeprecated('The property "className" requires a string'),void 0===className&&(classNameOutput="my-masonry-grid")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({},rest,{className:classNameOutput}),this.renderColumns())}}Masonry.defaultProps=defaultProps;const __WEBPACK_DEFAULT_EXPORT__=Masonry}}]);