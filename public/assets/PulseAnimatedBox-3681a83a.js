import{E as ie,e as le,o as N,b as $,l as ae,K as ce,F as de,n as ue,f as pe}from"./index-ec3a0052.js";const F="-";function fe(e){const r=ge(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function l(s){const a=s.split(F);return a[0]===""&&a.length!==1&&a.shift(),re(a,r)||be(s)}function n(s,a){const u=t[s]||[];return a&&o[s]?[...u,...o[s]]:u}return{getClassGroupId:l,getConflictingClassGroupIds:n}}function re(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),l=o?re(e.slice(1),o):void 0;if(l)return l;if(r.validators.length===0)return;const n=e.join(F);return(s=r.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const D=/^\[(.+)\]$/;function be(e){if(D.test(e)){const r=D.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ge(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return he(Object.entries(e.classGroups),t).forEach(([n,s])=>{O(s,o,n,r)}),o}function O(e,r,t,o){e.forEach(l=>{if(typeof l=="string"){const n=l===""?r:ee(r,l);n.classGroupId=t;return}if(typeof l=="function"){if(me(l)){O(l(o),r,t,o);return}r.validators.push({validator:l,classGroupId:t});return}Object.entries(l).forEach(([n,s])=>{O(s,ee(r,n),t,o)})})}function ee(e,r){let t=e;return r.split(F).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function me(e){return e.isThemeGetter}function he(e,r){return r?e.map(([t,o])=>{const l=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[r+s,a])):n);return[t,l]}):e}function ye(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function l(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return l(n,s),s},set(n,s){t.has(n)?t.set(n,s):l(n,s)}}}const te="!";function xe(e){const r=e.separator,t=r.length===1,o=r[0],l=r.length;return function(s){const a=[];let u=0,f=0,p;for(let b=0;b<s.length;b++){let m=s[b];if(u===0){if(m===o&&(t||s.slice(b,b+l)===r)){a.push(s.slice(f,b)),f=b+l;continue}if(m==="/"){p=b;continue}}m==="["?u++:m==="]"&&u--}const g=a.length===0?s:s.substring(f),h=g.startsWith(te),w=h?g.substring(1):g,S=p&&p>f?p-f:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:w,maybePostfixModifierPosition:S}}}function we(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function ve(e){return{cache:ye(e.cacheSize),splitModifiers:xe(e),...fe(e)}}const ke=/\s+/;function ze(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:l}=r,n=new Set;return e.trim().split(ke).map(s=>{const{modifiers:a,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:p}=t(s);let g=o(p?f.substring(0,p):f),h=!!p;if(!g){if(!p)return{isTailwindClass:!1,originalClassName:s};if(g=o(f),!g)return{isTailwindClass:!1,originalClassName:s};h=!1}const w=we(a).join(":");return{isTailwindClass:!0,modifierId:u?w+te:w,classGroupId:g,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:u,hasPostfixModifier:f}=s,p=a+u;return n.has(p)?!1:(n.add(p),l(u,f).forEach(g=>n.add(a+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Ce(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=oe(r))&&(o&&(o+=" "),o+=t);return o}function oe(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=oe(e[o]))&&(t&&(t+=" "),t+=r);return t}function Se(e,...r){let t,o,l,n=s;function s(u){const f=r.reduce((p,g)=>g(p),e());return t=ve(f),o=t.cache.get,l=t.cache.set,n=a,a(u)}function a(u){const f=o(u);if(f)return f;const p=ze(u,t);return l(u,p),p}return function(){return n(Ce.apply(null,arguments))}}function c(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const ne=/^\[(?:([a-z-]+):)?(.+)\]$/i,Me=/^\d+\/\d+$/,Ae=new Set(["px","full","screen"]),Re=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ge=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ie=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Pe=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ee=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function x(e){return C(e)||Ae.has(e)||Me.test(e)}function k(e){return M(e,"length",Ne)}function C(e){return!!e&&!Number.isNaN(Number(e))}function j(e){return M(e,"number",C)}function G(e){return!!e&&Number.isInteger(Number(e))}function Te(e){return e.endsWith("%")&&C(e.slice(0,-1))}function i(e){return ne.test(e)}function z(e){return Re.test(e)}const je=new Set(["length","size","percentage"]);function Le(e){return M(e,je,se)}function _e(e){return M(e,"position",se)}const We=new Set(["image","url"]);function Be(e){return M(e,We,Oe)}function Ve(e){return M(e,"",$e)}function I(){return!0}function M(e,r,t){const o=ne.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Ne(e){return Ge.test(e)&&!Ie.test(e)}function se(){return!1}function $e(e){return Pe.test(e)}function Oe(e){return Ee.test(e)}function Fe(){const e=c("colors"),r=c("spacing"),t=c("blur"),o=c("brightness"),l=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),a=c("borderWidth"),u=c("contrast"),f=c("grayscale"),p=c("hueRotate"),g=c("invert"),h=c("gap"),w=c("gradientColorStops"),S=c("gradientColorStopPositions"),b=c("inset"),m=c("margin"),v=c("opacity"),y=c("padding"),U=c("saturate"),L=c("scale"),q=c("sepia"),J=c("skew"),K=c("space"),X=c("translate"),_=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",i,r],d=()=>[i,r],Z=()=>["",x,k],P=()=>["auto",C,i],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",i],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>[C,j],T=()=>[C,i];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[x,k],blur:["none","",z,i],brightness:R(),borderColor:[e],borderRadius:["none","","full",z,i],borderSpacing:d(),borderWidth:Z(),contrast:R(),grayscale:A(),hueRotate:T(),invert:A(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Te,k],inset:B(),margin:B(),opacity:R(),padding:d(),saturate:R(),scale:R(),sepia:A(),skew:T(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",i]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),i]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G,i]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",i]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",G,i]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",G,i]},i]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[G,i]},i]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",i]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",i]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",i,r]}],"min-w":[{"min-w":[i,r,"min","max","fit"]}],"max-w":[{"max-w":[i,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[i,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[i,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",j]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",i]}],"line-clamp":[{"line-clamp":["none",C,j]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",x,i]}],"list-image":[{"list-image":["none",i]}],"list-style-type":[{list:["none","disc","decimal",i]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",x,k]}],"underline-offset":[{"underline-offset":["auto",x,i]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),_e]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Le]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Be]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:E()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[x,i]}],"outline-w":[{outline:[x,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[x,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,Ve]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",z,i]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[U]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[U]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",i]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",i]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",i]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[G,i]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[x,k,j]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Ue=Se(Fe),qe={key:1,class:"bg-gray-200 min-h-2 rounded h-full w-full"},Ke={__name:"PulseAnimatedBox",props:{items:Array,class:String},setup(e){const r=e;return(t,o)=>ie(t.$slots,"default",{},()=>[le("div",{class:ue(pe(Ue)("w-full h-10 rounded-md z-10 bg-white animate-pulse p-2 flex gap-2",r.class))},[e.items?(N(!0),$(de,{key:0},ae(e.items,l=>(N(),$("div",{key:l,class:"bg-gray-200 min-h-2 rounded h-full w-full",style:ce({width:l})},null,4))),128)):(N(),$("div",qe))],2)])}};export{Ke as _,Ue as t};