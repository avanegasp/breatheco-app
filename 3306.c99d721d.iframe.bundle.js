"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3306],{"./node_modules/@codemirror/legacy-modes/mode/properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{properties:()=>properties});const properties={name:"properties",token:function(stream,state){var sol=stream.sol()||state.afterSection,eol=stream.eol();if(state.afterSection=!1,sol&&(state.nextMultiline?(state.inMultiline=!0,state.nextMultiline=!1):state.position="def"),eol&&!state.nextMultiline&&(state.inMultiline=!1,state.position="def"),sol)for(;stream.eatSpace(););var ch=stream.next();return!sol||"#"!==ch&&"!"!==ch&&";"!==ch?sol&&"["===ch?(state.afterSection=!0,stream.skipTo("]"),stream.eat("]"),"header"):"="===ch||":"===ch?(state.position="quote",null):("\\"===ch&&"quote"===state.position&&stream.eol()&&(state.nextMultiline=!0),state.position):(state.position="comment",stream.skipToEnd(),"comment")},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}}}]);