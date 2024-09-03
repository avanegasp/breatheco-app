"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8002],{"./node_modules/@codemirror/legacy-modes/mode/fcl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{fcl:()=>fcl});var keywords={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},start_blocks={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},end_blocks={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},atoms={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},isOperatorChar=/[+\-*&^%:=<>!|\/]/;function tokenBase(stream,state){var ch=stream.next();if(/[\d\.]/.test(ch))return"."==ch?stream.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==ch?stream.match(/^[xX][0-9a-fA-F]+/)||stream.match(/^0[0-7]+/):stream.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if("/"==ch||"("==ch){if(stream.eat("*"))return state.tokenize=tokenComment,tokenComment(stream,state);if(stream.eat("/"))return stream.skipToEnd(),"comment"}if(isOperatorChar.test(ch))return stream.eatWhile(isOperatorChar),"operator";stream.eatWhile(/[\w\$_\xa1-\uffff]/);var cur=stream.current().toLowerCase();return keywords.propertyIsEnumerable(cur)||start_blocks.propertyIsEnumerable(cur)||end_blocks.propertyIsEnumerable(cur)?"keyword":atoms.propertyIsEnumerable(cur)?"atom":"variable"}function tokenComment(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if(("/"==ch||")"==ch)&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="*"==ch}return"comment"}function Context(indented,column,type,align,prev){this.indented=indented,this.column=column,this.type=type,this.align=align,this.prev=prev}const fcl={name:"fcl",startState:function(indentUnit){return{tokenize:null,context:new Context(-indentUnit,0,"top",!1),indented:0,startOfLine:!0}},token:function(stream,state){var ctx=state.context;if(stream.sol()&&(null==ctx.align&&(ctx.align=!1),state.indented=stream.indentation(),state.startOfLine=!0),stream.eatSpace())return null;var style=(state.tokenize||tokenBase)(stream,state);if("comment"==style)return style;null==ctx.align&&(ctx.align=!0);var cur=stream.current().toLowerCase();return start_blocks.propertyIsEnumerable(cur)?function pushContext(state,col,type){return state.context=new Context(state.indented,col,type,null,state.context)}(state,stream.column(),"end_block"):end_blocks.propertyIsEnumerable(cur)&&function popContext(state){if(state.context.prev)return"end_block"==state.context.type&&(state.indented=state.context.indented),state.context=state.context.prev}(state),state.startOfLine=!1,style},indent:function(state,textAfter,cx){if(state.tokenize!=tokenBase&&null!=state.tokenize)return 0;var ctx=state.context,closing=end_blocks.propertyIsEnumerable(textAfter);return ctx.align?ctx.column+(closing?0:1):ctx.indented+(closing?0:cx.unit)},languageData:{commentTokens:{line:"//",block:{open:"(*",close:"*)"}}}}}}]);