!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["iscroll-react"]=t(require("react"),require("prop-types")):e["iscroll-react"]=t(e.react,e["prop-types"])}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),c=o(s),u=n(2),f=o(u),p=n(3);n(4);var d=[["beforeScrollStart","onBeforeScrollStart"],["scrollCancel","onScrollCancel"],["scrollStart","onScrollStart"],["scroll","onScroll"],["scrollEnd","onScrollEnd"],["flick","onFlick"],["zoomStart","onZoomStart"],["zoomEnd","onZoomEnd"]],h=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e.pullDownToRefresh&&(n.props.options.probeType=2),n.state={pullDownActive:!1,pullDownVisible:!1},n.iReactIScrollInstance=null,n.listenToTouchEnd=!1,n.onScroll=n.onScroll.bind(n),n.onTouchEnd=n.onTouchEnd.bind(n),n.onScrollStart=n.onScrollStart.bind(n),n}return i(t,e),a(t,[{key:"updateIScroll",value:function(){var e=this,t=this.refs.wrapper,n=this.refs.scroller;if(t&&n){var o=this.props;if(o.dynamicTop&&(t.style.top=(0,p.getOffset)(t.parentNode).top+"px"),o.dynamicBottomFunc&&(t.style.bottom=o.dynamicBottomFunc()+"px"),o.alwaysScroll&&(n.style.minHeight=t.clientHeight+1+"px"),this.iReactIScrollInstance)return void this.iReactIScrollInstance.refresh();this.iReactIScrollInstance=new o.iScroll(t,this.props.options),d.map(function(t){o[t[1]]&&e.iReactIScrollInstance.on(t[0],(0,p.wrapFunc)(o[t[1]]))}),o.pullDownToRefresh&&(this.iReactIScrollInstance.on("scrollStart",(0,p.wrapFunc)(this.onScrollStart)),this.iReactIScrollInstance.on("scroll",(0,p.wrapFunc)(this.onScroll)))}}},{key:"onScrollStart",value:function(){this.listenToTouchEnd||(this.listenToTouchEnd=!0,document.documentElement.addEventListener("touchend",this.onTouchEnd))}},{key:"onScroll",value:function(e){var t=this.props.pullDownToRefresh,n=t.appearDistance||20,o=t.activeDistance||55,r=e.y>=n,l=e.y>=o;this.state.pullDownActive===l&&this.state.pullDownVisible===r||this.setState({pullDownVisible:r,pullDownActive:l});var i=this.refs.pullDown;i&&(i.style.top=e.y-i.clientHeight-5+"px")}},{key:"onTouchEnd",value:function(){this.state.pullDownActive&&this.props.pullDownToRefresh.onRefresh(),this.setState({pullDownVisible:!1,pullDownActive:!1})}},{key:"componentDidMount",value:function(){this.updateIScroll()}},{key:"componentWillUnmount",value:function(){this.props.iScroll&&this.props.iReactIScrollInstance&&(this.props.iReactIScrollInstance.destroy(),this.props.iReactIScrollInstance=null),this.listenToTouchEnd&&(this.listenToTouchEnd=!1,document.documentElement.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderPullDown",value:function(){if(this.state.pullDownVisible){var e=this.props.pullDownToRefresh;e&&(e.labelInactive=e.labelInactive||c.default.createElement("div",null,"Pull down to refresh.."),e.labelActive=e.labelActive||c.default.createElement("div",null,"Release to refresh.."));var t=void 0;return t=this.state.pullDownActive?e.labelActive:e.labelInactive,c.default.createElement("div",{style:{position:"relative"}},c.default.createElement("div",{id:"pull-down",ref:"pullDown"},t))}return null}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.wrapperStyle;return c.default.createElement("div",{className:"react-iscroll"},c.default.createElement("div",{id:"wrapper",ref:"wrapper",style:n},c.default.createElement("div",{id:"scroller",ref:"scroller"},t)),this.renderPullDown())}},{key:"iScrollInstance",get:function(){return this.props.iScroll}}]),t}(c.default.Component);h.propTypes={iScroll:f.default.func.isRequired,options:f.default.object,children:f.default.node,onBeforeScrollStart:f.default.func,onScrollCancel:f.default.func,onScrollStart:f.default.func,onScroll:f.default.func,onScrollEnd:f.default.func,onFlick:f.default.func,onZoomStart:f.default.func,onZoomEnd:f.default.func,alwaysScroll:f.default.bool,dynamicTop:f.default.bool,dynamicBottomFunc:f.default.func,wrapperStyle:f.default.shape({top:f.default.number,bottom:f.default.number,left:f.default.number,right:f.default.number}),pullDownToRefresh:f.default.shape({labelInactive:f.default.oneOfType([f.default.string,f.default.node]),labelActive:f.default.oneOfType([f.default.string,f.default.node]),appearDistance:f.default.number,activeDistance:f.default.number,onRefresh:f.default.func.isRequired})},h.defaultProps={alwaysScroll:!0,dynamicTop:!1},t.default=h},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function o(e){return function(){e(this)}}function r(e){for(var t=0,n=0;e;)t+=parseInt(e.offsetTop),n+=parseInt(e.offsetLeft),e=e.offsetParent;return{top:t,left:n}}function l(e){var t=e.getBoundingClientRect(),n=document.body,o=document.documentElement,r=window.pageYOffset||o.scrollTop||n.scrollTop,l=window.pageXOffset||o.scrollLeft||n.scrollLeft,i=o.clientTop||n.clientTop||0,a=o.clientLeft||n.clientLeft||0,s=t.top+r-i,c=t.left+l-a;return{top:Math.round(s),left:Math.round(c)}}function i(e){return e.getBoundingClientRect?l(e):r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.wrapFunc=o,t.getOffset=i},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(7)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(6)(void 0),t.push([e.i,".react-iscroll #wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n.react-iscroll #scroller {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none;\n}\n.react-iscroll #pull-down {\n  color: #999;\n  z-index: -1;\n  width: 100%;\n  position: absolute;\n  text-align: center;\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var l=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([l]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var l=this[r][0];"number"==typeof l&&(o[l]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=h[o.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](o.parts[l]);for(;l<o.parts.length;l++)r.parts.push(u(o.parts[l],t))}else{for(var i=[],l=0;l<o.parts.length;l++)i.push(u(o.parts[l],t));h[o.id]={id:o.id,refs:1,parts:i}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var l=e[r],i=t.base?l[0]+t.base:l[0],a=l[1],s=l[2],c=l[3],u={css:a,media:s,sourceMap:c};o[i]?o[i].parts.push(u):n.push(o[i]={id:i,parts:[u]})}return n}function l(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),l(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),l(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,o,r,l;if(t.transform&&e.css){if(!(l=t.transform(e.css)))return function(){};e.css=l}if(t.singleton){var c=y++;n=b||(b=a(t)),o=f.bind(null,n,c,!1),r=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=d.bind(null,n,t),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=p.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function f(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var l=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(l,i[t]):e.appendChild(l)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var o=n.css,r=n.sourceMap,l=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||l)&&(o=S(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,y=0,w=[],S=n(8);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var l=[],i=0;i<n.length;i++){var a=n[i],s=h[a.id];s.refs--,l.push(s)}if(e){o(r(e,t),t)}for(var i=0;i<l.length;i++){var s=l[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete h[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var l;return l=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(l)+")"})}}])});