webpackJsonp([35783957827783],{407:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,o=s&&s(Object);return function l(u,c,p){if("string"!=typeof c){if(o){var f=s(c);f&&f!==o&&l(u,f,p)}var d=r(c);a&&(d=d.concat(a(c)));for(var h=0;h<d.length;++h){var g=d[h];if(!(e[g]||t[g]||p&&p[g])){var m=i(c,g);try{n(u,g,m)}catch(e){}}}return u}return u}})},541:function(e,t){},651:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3),u=r(l),c=n(10),p=r(c),f=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return s(t,e),o(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&this.state.shouldSwitchAutoOnNextCycle===!0&&window.setTimeout(function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})},50),e.open!==this.props.open&&(this.props.open===!0?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.refs.inner.offsetHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.refs.inner.offsetHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){e.preventDefault(),this.props.triggerDisabled||(this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):this.state.isClosed===!0?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?u.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?u.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(){this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen())}},{key:"render",value:function(){var e={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},t=this.state.isClosed?"is-closed":"is-open",n=this.props.triggerDisabled?"is-disabled":"",r=this.state.isClosed===!1&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,a=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,i=this.props.classParentString+"__trigger "+t+" "+n+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),s=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),o=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,l=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return u.default.createElement("div",{className:s.trim()},u.default.createElement("span",{className:i.trim(),onClick:this.handleTriggerClick},r),this.renderNonClickableTriggerElement(),u.default.createElement("div",{className:o.trim(),ref:"outer",style:e,onTransitionEnd:this.handleTransitionEnd},u.default.createElement("div",{className:l.trim(),ref:"inner"},a)))}}]),t}(l.Component);f.propTypes={transitionTime:p.default.number,easing:p.default.string,open:p.default.bool,classParentString:p.default.string,openedClassName:p.default.string,triggerClassName:p.default.string,triggerOpenedClassName:p.default.string,contentOuterClassName:p.default.string,contentInnerClassName:p.default.string,accordionPosition:p.default.oneOfType([p.default.string,p.default.number]),handleTriggerClick:p.default.func,onOpen:p.default.func,onClose:p.default.func,onOpening:p.default.func,onClosing:p.default.func,trigger:p.default.oneOfType([p.default.string,p.default.element]),triggerWhenOpen:p.default.oneOfType([p.default.string,p.default.element]),triggerDisabled:p.default.bool,lazyRender:p.default.bool,overflowWhenOpen:p.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:p.default.oneOfType([p.default.element,p.default.func])},f.defaultProps={transitionTime:400,easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){}},t.default=f},446:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(3),i=r(a),s=n(281),o=r(s);t.default=function(e){var t=e.node,n=t.frontmatter,r=n.title,a=n.tags,s=n.author,l=n.date;return i.default.createElement("div",{key:t.fields.slug,className:"BlogEntryCard"},i.default.createElement("h3",{className:"BlogEntryCard__Banner"},i.default.createElement(o.default,{to:t.fields.slug},r)),i.default.createElement("small",{className:"BlogEntryCard__Byline"},l," | ",t.wordCount.words," words | ",t.timeToRead," minutes to read | ",s," |"," ",a),i.default.createElement("p",{className:"BlogEntryCard__Excerpt",dangerouslySetInnerHTML:{__html:t.excerpt}}))},e.exports=t.default},447:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(3),i=r(a);t.default=function(e){var t=e.known_tags,n=e.filtered_tags,r=e.on_checkbox_toggle,a=e.clear_all,s=[].concat(t);s.sort();var o=s.map(function(e){return i.default.createElement("span",{key:""+Math.random(),className:"PlainFlexRow FilterControl__FilterRow"},i.default.createElement("input",{type:"checkbox",onChange:function(t){return r({name:e,checked:t.target.checked})},checked:n.has(e)}),i.default.createElement("label",{className:"FilterControl__FilterLabel"},e))});return i.default.createElement("div",null,i.default.createElement("div",{className:"FilterControl"},o),i.default.createElement("input",{className:"SubmitInput FilterControl__ClearAllButton",type:"button",onClick:a,value:"Clear all filters"}))},e.exports=t.default},454:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0,n(541);var o=n(3),l=r(o),u=n(281),c=(r(u),n(651)),p=r(c),f=n(446),d=r(f),h=n(447),g=r(h),m=l.default.createElement("span",{className:"FilterControl__TriggerMessage"},"Filter by topic tags",l.default.createElement("span",{"data-balloon":"Click to toggle filter tags","data-ballon-pos":"right",className:"FilterControl__TriggerMessageTooltip"})),b=function(e){function t(n,r){a(this,t);var s=i(this,e.call(this,n,r));s.on_checkbox_toggle=function(e){var t=e.name,n=e.checked,r=s.state.filtered_tags;n?r.add(t):r.delete(t),s.setState(function(){return{filtered_tags:r}})},s.clear_all=function(){return s.setState(function(){return{filtered_tags:new Set}})};var o=s.props.data.allMarkdownRemark.edges,l=new Set;return o.forEach(function(e){var t=e.node;t.frontmatter.tags.split(",").map(function(e){return e.toLowerCase().trim()}).forEach(function(e){return l.add(e)})}),s.state={filtered_tags:new Set,known_tags:Array.from(l.values())},s}return s(t,e),t.prototype.make_posts=function(){var e=this.props.data,t=this.state.filtered_tags,n=e.allMarkdownRemark.edges,r=[];if(0===t.size)r=n.map(function(e){var t=e.node;return l.default.createElement(d.default,{key:t.frontmatter.author+"/"+t.frontmatter.title,node:t})});else for(var a=n,i=Array.isArray(a),s=0,a=i?a:a[Symbol.iterator]();;){var o;if(i){if(s>=a.length)break;o=a[s++]}else{if(s=a.next(),s.done)break;o=s.value}for(var u=o,c=new Set(u.node.frontmatter.tags.split(",").map(function(e){return e.toLowerCase().trim()})),p=!1,f=c,h=Array.isArray(f),g=0,f=h?f:f[Symbol.iterator]();;){var m;if(h){if(g>=f.length)break;m=f[g++]}else{if(g=f.next(),g.done)break;m=g.value}var b=m;if(t.has(b)){p=!0;break}}if(p){var y=u.node;r.push(l.default.createElement(d.default,{key:y.frontmatter.author+"/"+y.frontmatter.title,node:y}))}}return r},t.prototype.render=function(){var e=this.make_posts(),t="AvailableForWorkContainer__PageBanner AlignSelfFlexStart LeftMinorOneHalfRemPadding";return l.default.createElement("div",{className:"BlogTable"},l.default.createElement("h4",{className:t},e.length+" great posts to read"),l.default.createElement("div",{className:"FilterControlWrapper LeftMinorOneHalfRemMargin"},l.default.createElement(p.default,{trigger:m},l.default.createElement(g.default,{known_tags:this.state.known_tags,on_checkbox_toggle:this.on_checkbox_toggle,filtered_tags:this.state.filtered_tags,clear_all:this.clear_all}))),e)},t}(l.default.Component);b.displayName="BlogIndex",t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-71f88e144a67093d11fc.js.map