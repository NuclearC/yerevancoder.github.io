webpackJsonp([68142736585803],{409:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),u=o(i),c=n(29),f=o(c),s=n(85),p=n(118),d=o(p),h=n(6),b="PlainFlexColumn PlainFlexCentered FifteenPaddingLeft MobileRemoveFifteenPaddingLeft",y=function(e){function t(){var n,o,l;r(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=o=a(this,e.call.apply(e,[this].concat(u))),o.state={job:null},l=n,a(o,l)}return l(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.location.pathname.split("/"),n=t[3];s.hiring_table_posts_ref.child(n).once("value").then(function(t){var n=t.val();null!==n&&e.setState(function(){return{job:n}})}).catch(function(e){})},t.prototype.render=function(){var e=null;return e=null===this.state.job?u.default.createElement(f.default,{fadeIn:"quarter",name:"ball-scale-ripple-multiple"}):u.default.createElement(d.default,this.state.job),u.default.createElement("div",{className:b},h.SPACER_10_H,e)},t}(u.default.Component);y.displayName="DedicatedJobPost",t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-hiring-board-job-index-js-0a0108488d1d925a722f.js.map