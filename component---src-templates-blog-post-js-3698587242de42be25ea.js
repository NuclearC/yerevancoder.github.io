webpackJsonp([0x620f737b6699],{354:function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,f;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t))return!!c(e)&&(t=a.call(t),e=a.call(e),l(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var s=u(t),p=u(e)}catch(t){return!1}if(s.length!=p.length)return!1;for(s.sort(),p.sort(),i=s.length-1;i>=0;i--)if(s[i]!=p[i])return!1;for(i=s.length-1;i>=0;i--)if(f=s[i],!l(t[f],e[f],n))return!1;return typeof t==typeof e}var a=Array.prototype.slice,u=n(356),c=n(355),l=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},355:function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},356:function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},648:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){if(!T){var t=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src=window.talkyardCommentsScriptUrl||"https://cdn.talkyard.net/-/talkyard-comments.min.js",window.talkyardCommentsServerUrl=window.talkyardCommentsServerUrl||"https://comments-demo.talkyard.io",e.appendChild(t),T=!0}}e.__esModule=!0;var i=n(221),a=r(i),u=n(251),c=r(u),l=n(250),f=r(l),s=n(3),p=r(s),T=!1,d=function(t){function e(n){return(0,a.default)(this,e),(0,c.default)(this,t.call(this,n))}return(0,f.default)(e,t),e.prototype.componentDidMount=function(){var t=T;o(),t&&(window.edReloadCommentsAndEditor?window.edReloadCommentsAndEditor():window.talkyardReloadCommentsAndEditor&&window.talkyardReloadCommentsAndEditor())},e.prototype.componentWillUnmount=function(){window.edRemoveCommentsAndEditor?window.edRemoveCommentsAndEditor():window.talkyardRemoveCommentsAndEditor&&window.talkyardRemoveCommentsAndEditor()},e.prototype.render=function(){return p.default.createElement("div",{className:"talkyard-comments","data-discussion-id":this.props.discussionId||"","data-talkyard-page-id":this.props.talkyardPageId||this.props.edPageId||""},p.default.createElement("noscript",null,"Please enable Javascript to view comments."),p.default.createElement("p",{style:{marginTop:25,opacity:.9,fontSize:"96%"}},"Comments powered by ",p.default.createElement("a",{href:"https://www.talkyard.io"},"Talkyard"),"."))},e}(s.Component);e.default=d},364:function(t,e){function n(t){return!!t&&"object"==typeof t}function r(t,e){var n=null==t?void 0:t[e];return a(n)?n:void 0}function o(t){return i(t)&&p.call(t)==u}function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){return null!=t&&(o(t)?T.test(f.call(t)):n(t)&&c.test(t))}var u="[object Function]",c=/^\[object .+?Constructor\]$/,l=Object.prototype,f=Function.prototype.toString,s=l.hasOwnProperty,p=l.toString,T=RegExp("^"+f.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},365:function(t,e){function n(t){return o(t)&&d.call(t,"callee")&&(!y.call(t,"callee")||E.call(t)==f)}function r(t){return null!=t&&a(t.length)&&!i(t)}function o(t){return c(t)&&r(t)}function i(t){var e=u(t)?E.call(t):"";return e==s||e==p}function a(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=l}function u(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function c(t){return!!t&&"object"==typeof t}var l=9007199254740991,f="[object Arguments]",s="[object Function]",p="[object GeneratorFunction]",T=Object.prototype,d=T.hasOwnProperty,E=T.toString,y=T.propertyIsEnumerable;t.exports=n},366:function(t,e){function n(t){return!!t&&"object"==typeof t}function r(t,e){var n=null==t?void 0:t[e];return u(n)?n:void 0}function o(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}function i(t){return a(t)&&d.call(t)==l}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function u(t){return null!=t&&(i(t)?E.test(p.call(t)):n(t)&&f.test(t))}var c="[object Array]",l="[object Function]",f=/^\[object .+?Constructor\]$/,s=Object.prototype,p=Function.prototype.toString,T=s.hasOwnProperty,d=s.toString,E=RegExp("^"+p.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=r(Array,"isArray"),A=9007199254740991,m=y||function(t){return n(t)&&o(t.length)&&d.call(t)==c};t.exports=m},367:function(t,e,n){function r(t){return function(e){return null==e?void 0:e[t]}}function o(t){return null!=t&&a(m(t))}function i(t,e){return t="number"==typeof t||T.test(t)?+t:-1,e=null==e?A:e,t>-1&&t%1==0&&t<e}function a(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}function u(t){for(var e=l(t),n=e.length,r=n&&t.length,o=!!r&&a(r)&&(p(t)||s(t)),u=-1,c=[];++u<n;){var f=e[u];(o&&i(f,r)||E.call(t,f))&&c.push(f)}return c}function c(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function l(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&a(e)&&(p(t)||s(t))&&e||0;for(var n=t.constructor,r=-1,o="function"==typeof n&&n.prototype===t,u=Array(e),l=e>0;++r<e;)u[r]=r+"";for(var f in t)l&&i(f,e)||"constructor"==f&&(o||!E.call(t,f))||u.push(f);return u}var f=n(364),s=n(365),p=n(366),T=/^\d+$/,d=Object.prototype,E=d.hasOwnProperty,y=f(Object,"keys"),A=9007199254740991,m=r("length"),h=y?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?u(t):c(t)?y(t):[]}:u;t.exports=h},397:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(3),s=r(f),p=n(10),T=r(p),d=n(402),E=r(d),y=n(354),A=r(y),m=n(398),h=n(296),S=function(t){var e,n;return n=e=function(e){function n(){return i(this,n),a(this,e.apply(this,arguments))}return u(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,A.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case h.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return c({},r,(e={},e[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case h.TAG_NAMES.TITLE:return c({},o,(e={},e[r.type]=a,e.titleAttributes=c({},i),e));case h.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case h.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=c({},e);return Object.keys(t).forEach(function(e){var r;n=c({},n,(r={},r[e]=t[e],r))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return s.default.Children.forEach(t,function(t){if(t&&t.props){var i=t.props,a=i.children,u=o(i,["children"]),c=(0,m.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(t,a),t.type){case h.TAG_NAMES.LINK:case h.TAG_NAMES.META:case h.TAG_NAMES.NOSCRIPT:case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:a})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=o(e,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.default.createElement(t,i)},l(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(s.default.Component),e.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,m.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n},b=function(){return null},_=(0,E.default)(m.reducePropsToState,m.handleClientStateChange,m.mapStateOnServer)(b),v=S(_);v.renderStatic=v.rewind,e.Helmet=v,e.default=v},296:function(t,e){e.__esModule=!0;var n=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},398:function(t,e,n){(function(t){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(3),u=r(a),c=n(21),l=r(c),f=n(296),s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(t){var e=A(t,f.TAG_NAMES.TITLE),n=A(t,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=A(t,f.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},T=function(t){return A(t,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return i({},t,e)},{})},E=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[f.TAG_NAMES.BASE]}).map(function(t){return t[f.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(t.indexOf(a)!==-1&&n[a])return e.concat(n)}return e},[])},y=function(t,e,n){var r={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&v("Helmet: "+t+' should be of type "Array". Instead found type "'+o(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var o={};n.filter(function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();e.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(n=c),e.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return t},[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},m=function(t){return{baseTag:E([f.TAG_PROPERTIES.HREF],t),bodyAttributes:d(f.ATTRIBUTE_NAMES.BODY,t),defer:A(t,f.HELMET_PROPS.DEFER),encode:A(t,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(f.ATTRIBUTE_NAMES.HTML,t),linkTags:y(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],t),metaTags:y(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:y(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:T(t),scriptTags:y(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],t),styleTags:y(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],t),title:p(t),titleAttributes:d(f.ATTRIBUTE_NAMES.TITLE,t)}},h=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){h(e)},0)}}(),S=function(t){return clearTimeout(t)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:t.requestAnimationFrame||h,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:t.cancelAnimationFrame||S,v=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,R=function(t){g&&_(g),t.defer?g=b(function(){O(t,function(){g=null})}):(O(t),g=null)},O=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,s=t.styleTags,p=t.title,T=t.titleAttributes;M(f.TAG_NAMES.BODY,r),M(f.TAG_NAMES.HTML,o),w(p,T);var d={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,i),metaTags:C(f.TAG_NAMES.META,a),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,u),scriptTags:C(f.TAG_NAMES.SCRIPT,l),styleTags:C(f.TAG_NAMES.STYLE,s)},E={},y={};Object.keys(d).forEach(function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(y[t]=d[t].oldTags)}),e&&e(),c(t,E,y)},P=function(t){return Array.isArray(t)?t.join(""):t},w=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=P(t)),M(f.TAG_NAMES.TITLE,e)},M=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],l=e[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=i.indexOf(c);s!==-1&&i.splice(s,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,a.join(","))}},C=function(t,e){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u="undefined"==typeof e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(t,e){return a=e,n.isEqualNode(t)})?o.splice(a,1):i.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),i.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:i}},I=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!=typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},N=function(t,e,n,r){var o=I(n),i=P(e);return o?"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+t+">":"<"+t+" "+f.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+t+">"},L=function(t,e,n){return e.reduce(function(e,r){var o=Object.keys(r).filter(function(t){return!(t===f.TAG_PROPERTIES.INNER_HTML||t===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var o="undefined"==typeof r[e]?e:e+'="'+s(r[e],n)+'"';return t?t+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=f.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")},"")},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.REACT_TAG_MAP[n]||n]=t[n],e},e)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[f.HTML_TAG_MAP[n]||n]=t[n],e},e)},H=function(t,e,n){var r,o=(r={key:e},r[f.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,i,e)]},k=function(t,e){return e.map(function(e,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=f.REACT_TAG_MAP[t]||t;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]}),u.default.createElement(t,o)})},x=function(t,e,n){switch(t){case f.TAG_NAMES.TITLE:return{toComponent:function(){return H(t,e.title,e.titleAttributes,n)},toString:function(){return N(t,e.title,e.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(e)},toString:function(){return I(e)}};default:return{toComponent:function(){return k(t,e)},toString:function(){return L(t,e,n)}}}},B=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,l=t.styleTags,s=t.title,p=void 0===s?"":s,T=t.titleAttributes;return{base:x(f.TAG_NAMES.BASE,e,r),bodyAttributes:x(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(f.ATTRIBUTE_NAMES.HTML,o,r),link:x(f.TAG_NAMES.LINK,i,r),meta:x(f.TAG_NAMES.META,a,r),noscript:x(f.TAG_NAMES.NOSCRIPT,u,r),script:x(f.TAG_NAMES.SCRIPT,c,r),style:x(f.TAG_NAMES.STYLE,l,r),title:x(f.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}};e.convertReactPropstoHtmlAttributes=G,e.handleClientStateChange=R,e.mapStateOnServer=B,e.reducePropsToState=m,e.requestAnimationFrame=b,e.warn=v}).call(e,function(){return this}())},402:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e,n){function r(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){d=t(T.map(function(t){return t.props})),E.canUseDOM?e(d):n&&(d=n(d))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var T=[],d=void 0,E=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.peek=function(){return d},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=d;return d=void 0,T=[],t},e.prototype.shouldComponentUpdate=function(t){return!s(t,this.props)},e.prototype.componentWillMount=function(){T.push(this),p()},e.prototype.componentDidUpdate=function(){p()},e.prototype.componentWillUnmount=function(){var t=T.indexOf(this);T.splice(t,1),p()},e.prototype.render=function(){return l.createElement(u,this.props)},e}(c.Component);return E.displayName="SideEffect("+r(u)+")",E.canUseDOM=f.canUseDOM,E}}var c=n(3),l=r(c),f=r(n(272)),s=r(n(403));t.exports=u},403:function(t,e,n){"use strict";var r=n(367);t.exports=function(t,e,n,o){var i=n?n.call(o,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var a=r(t),u=r(e),c=a.length;if(c!==u.length)return!1;o=o||null;for(var l=Object.prototype.hasOwnProperty.bind(e),f=0;f<c;f++){var s=a[f];if(!l(s))return!1;var p=t[s],T=e[s],d=n?n.call(o,p,T,s):void 0;if(d===!1||void 0===d&&p!==T)return!1}return!0}},506:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.pageQuery=void 0;var o=n(3),i=r(o),a=n(397),u=r(a),c=n(648),l=r(c);e.default=function(t){var e=t.data,n=e.markdownRemark,r=n.frontmatter,o=r.title,a=r.tags,c=r.author,f=r.date,s=new Set(a.split(",").map(function(t){return t.trim().toLowerCase()})),p=e.site.siteMetadata.title;return i.default.createElement("div",null,i.default.createElement(u.default,{title:o+" | "+p}),i.default.createElement("h1",null,o),i.default.createElement("p",{className:"BlogPost__ByLine"},f," | By ",c," | ",a),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),i.default.createElement("hr",null),s.has("javascript")?i.default.createElement("iframe",{height:"400px",width:"100%",src:"https://repl.it/@fxfactorial/WarlikeIntrepidGraphics?lite=true",scrolling:"no",frameBorder:"no",allowTransparency:"true",allowFullScreen:"true",sandbox:"allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"}):null,i.default.createElement(l.default,{discussionId:n.frontmatter.discussionId}))};e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-3698587242de42be25ea.js.map