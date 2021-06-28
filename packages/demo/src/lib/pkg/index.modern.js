import e,{useRef as t,useEffect as n,useState as o,useCallback as r}from"react";import a from"lodash.omitby";import i from"lodash.isnil";import s from"react-autosuggest";import l from"autosuggest-highlight/match";import u from"autosuggest-highlight/parse";import{Fade as c,LinearProgress as p,makeStyles as g,createStyles as m,TextField as h,InputAdornment as d,Paper as f,Grid as b,IconButton as y,MenuItem as x,Typography as C}from"@material-ui/core";import E from"@material-ui/icons/Search";import w from"@material-ui/icons/Cancel";import k from"clsx";import{useDebouncedCallback as S}from"use-debounce";import v from"color-alpha";function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t.indexOf(n=a[o])>=0||(r[n]=e[n]);return r}const I=({show:t=!1})=>{const[r,a]=o(t);n(()=>{t?i():(i.flush(),a(!1))},[t]);const i=S(()=>a(!0),250);return e.createElement(c,{in:r},e.createElement(p,{style:{position:"absolute",width:"100%"}}))},P=["ref","inputClasses"],F=["className"],T=g(e=>m({container:{flexGrow:1,position:"relative"},suggestionsContainerOpen:{position:"absolute",zIndex:1,marginTop:e.spacing(1),left:0,right:0},suggestion:{display:"block",marginBottom:0},suggestionsList:{margin:0,padding:0,listStyleType:"none"},inputContainer:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingRight:e.spacing(1),paddingLeft:e.spacing(2),backgroundColor:v(e.palette.background.paper,.9),overflow:"hidden","&:hover,&:active,&.inputContainerFocused":{backgroundColor:e.palette.background.paper},minHeight:"64px",display:"flex",flexDirection:"column",justifyContent:"center"},grow:{flexGrow:1},shrink:{flexShrink:1},noGrow:{flexGrow:0},noShrink:{flexShrink:0}}));export default({endpoint:p="https://api.mapbox.com",inputPlaceholder:g="Search",showLoader:m=!0,source:S="mapbox.places",onSuggest:v=(()=>{}),focusOnMount:$=!1,showInputContainer:N=!0,inputValue:R="",proximity:q,country:G,bbox:L,types:B,limit:U,autocomplete:W,language:D,suggestionsPaperProps:V,onSelect:H,accessToken:_,onInputFocus:z,onInputBlur:A,inputClasses:M,inputTextFieldProps:J,disableUnderline:K,inputPaperProps:Q})=>{const[X,Y]=o([]),[Z,ee]=o(!1),[te,ne]=o(new Date),[oe,re]=o(R),[ae,ie]=o(!1),se=T(),le=t(null),ue=function(e){const o=t();return n(()=>{o.current=e},[e]),o.current}(oe),ce=r(()=>{const{input:e=null}=le.current||{};e&&e.focus()},[]);n(()=>{re(R)},[R]),n(()=>{$&&ce()},[$,ce]),n(()=>{v&&v(X)},[X,v]);const pe=r(()=>{re(""),ce()},[ce]),ge=r(t=>{const{ref:n,inputClasses:o}=t,r=j(t,P),a=null!=Q?Q:{},{className:i}=a,s=j(a,F),l=e.createElement(h,O({fullWidth:!0,InputProps:O({disableUnderline:K,inputRef:n,startAdornment:e.createElement(d,{position:"start"},e.createElement(E,{color:"action"})),classes:o},r)},J));return N?e.createElement(e.Fragment,null,e.createElement(I,{show:Z&&m}),e.createElement(f,O({square:!1,elevation:1,className:k([se.inputContainer,{inputContainerFocused:ae},i])},s),e.createElement(b,{container:!0,alignItems:"center",spacing:1,wrap:"nowrap"},e.createElement(b,{item:!0,xs:!0,className:k(se.grow,se.noShrink)},l),e.createElement(c,{in:oe.length>0,unmountOnExit:!0,mountOnEnter:!0},e.createElement(b,{item:!0,xs:!0,className:k(se.shrink,se.noGrow)},e.createElement(y,{"aria-label":"Clear Search Input",onClick:pe},e.createElement(w,null))))))):e.createElement(e.Fragment,null,l)},[K,J,N,Z,m,se,ae,Q,oe.length,pe]),me=r(e=>{ie(!0),z&&z(e)},[z]),he=r(e=>{ie(!1),A&&A(e)},[A]),de=r(t=>{const{containerProps:n,children:o}=t;return e.createElement(f,O({},n,{square:!1,elevation:4},V),o)},[V]),fe=r((e,t,n)=>{!e&&t&&t.features&&te<=n&&(ne(n),Y(t.features.map(e=>({feature:e,label:e.place_name})).filter(e=>e.label)),ee(!1))},[te]),be=r(({value:e})=>{ee(!0),ue===e?ee(!1):""===e?(Y([]),ee(!1)):async function(e,t,n,o,r,s,l,u,c,p,g,m){const h=new Date;try{const f=`${e}/geocoding/v5/${t}/${o}.json`,b=a({access_token:n,proximity:s&&2===Object.keys(s).length?`${s.longitude},${s.latitude}`:null,bbox:u&&u.length>0?u.join(","):null,types:c,country:l,limit:p,autocomplete:g,language:m},i),y=`${f}?${d=b,Object.keys(d).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(d[e])).join("&")}`,x=await fetch(y);return r(null,await x.json(),h),{err:null,res:x,searchTime:h}}catch(e){return r(e,null,h),{err:e,res:null,searchTime:h}}var d}(p,S,_,e,fe,q,G,L,B,U,W,D)},[L,G,p,U,D,W,S,q,ue,fe,B,_]),ye=r((e,{suggestion:t})=>(H&&H(t.feature),!1),[H]),xe=r(()=>{Y([])},[]),Ce=r((e,{newValue:t})=>{re(t)},[]),Ee=r((t,{query:n,isHighlighted:o})=>{const r=l(t.label,n),a=u(t.label,r);return e.createElement(x,{selected:o,component:"div"},e.createElement(C,{noWrap:!0,variant:"subtitle1"},a.map((t,n)=>t.highlight?e.createElement("span",{key:String(n),style:{fontWeight:500}},t.text):e.createElement("strong",{key:String(n),style:{fontWeight:300}},t.text))))},[]),we=r(e=>e.label,[]);return _?e.createElement(s,{ref:le,theme:{container:se.container,suggestionsContainerOpen:se.suggestionsContainerOpen,suggestionsList:se.suggestionsList,suggestion:se.suggestion},renderInputComponent:ge,suggestions:X,onSuggestionsFetchRequested:be,onSuggestionsClearRequested:xe,onSuggestionSelected:ye,renderSuggestionsContainer:de,getSuggestionValue:we,renderSuggestion:Ee,inputProps:{placeholder:g,value:oe,onChange:Ce,onFocus:me,onBlur:he,className:M}}):null};
//# sourceMappingURL=index.modern.js.map