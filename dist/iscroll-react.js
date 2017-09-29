(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["iscroll-react"] = factory(require("react"), require("prop-types"));
	else
		root["iscroll-react"] = factory(root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(3);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iScrollEventsMap = [["beforeScrollStart", "onBeforeScrollStart"], ["scrollCancel", "onScrollCancel"], ["scrollStart", "onScrollStart"], ["scroll", "onScroll"], ["scrollEnd", "onScrollEnd"], ["flick", "onFlick"], ["zoomStart", "onZoomStart"], ["zoomEnd", "onZoomEnd"]];

var ReactIScroll = function (_React$Component) {
  _inherits(ReactIScroll, _React$Component);

  function ReactIScroll(props) {
    _classCallCheck(this, ReactIScroll);

    var _this = _possibleConstructorReturn(this, (ReactIScroll.__proto__ || Object.getPrototypeOf(ReactIScroll)).call(this, props));

    if (props.pullDownToRefresh) {
      _this.props.options.probeType = 2;
    }

    _this.state = {
      pullDownActive: false,
      pullDownVisible: false
    };

    // reference to iscroll instance
    _this._iScroll = null;
    // touchend listener is used for PullDownToRefresh
    _this.listenToTouchEnd = false;

    _this.onScroll = _this.onScroll.bind(_this);
    _this.onTouchEnd = _this.onTouchEnd.bind(_this);
    _this.onScrollStart = _this.onScrollStart.bind(_this);
    return _this;
  }

  /**
   * Since IScroll don't know children updated or not, you might need to call this function manually.
   * e.g. on async data loaded, or on children's state changed
   * TODO: should be called automatically on needed, manual call is inconvenient
   */


  _createClass(ReactIScroll, [{
    key: "updateIScroll",
    value: function updateIScroll() {
      var _this2 = this;

      var wrapper = this.refs.wrapper;
      var scroller = this.refs.scroller;
      if (wrapper && scroller) {
        var props = this.props;

        // apply wrapper's dynamic properties

        if (props.dynamicTop) {
          wrapper.style.top = (0, _utils.getOffset)(wrapper.parentNode).top + "px";
        }

        if (props.dynamicBottomFunc) {
          wrapper.style.bottom = props.dynamicBottomFunc() + "px";
        }

        if (props.alwaysScroll) {
          scroller.style.minHeight = wrapper.clientHeight + 1 + "px";
        }

        // If iscroll instance exists, just update
        if (this._iScroll) {
          this._iScroll.refresh({ options: this.props.options });
          return;
        }

        // Create new iscroll instance here
        this._iScroll = new props.iScroll(wrapper, this.props.options);

        // Register listeners for events
        iScrollEventsMap.map(function (elem) {
          if (props[elem[1]]) {
            _this2._iScroll.on(elem[0], (0, _utils.wrapFunc)(props[elem[1]]));
          }
        });

        // If PullDownToRefresh is enabled, we need to register more listeners
        if (props.pullDownToRefresh) {
          this._iScroll.on("scrollStart", (0, _utils.wrapFunc)(this.onScrollStart));
          this._iScroll.on("scroll", (0, _utils.wrapFunc)(this.onScroll));
          //this._iScroll.on("scrollEnd", wrapFunc(this.onScroll))
        }
      }
    }

    /**
     * expose a function to get iScroll instance
     * @returns {*}
     */

  }, {
    key: "onScrollStart",
    value: function onScrollStart() {
      if (!this.listenToTouchEnd) {
        this.listenToTouchEnd = true;
        document.documentElement.addEventListener("touchend", this.onTouchEnd);
      }
    }

    /**
     * on iscroll scroll event, we update the PullDownToRefresh component's state and position
     * @param iScrollInstance
     */

  }, {
    key: "onScroll",
    value: function onScroll(iScrollInstance) {
      var pullDownToRefresh = this.props.pullDownToRefresh;

      var appearDistance = pullDownToRefresh.appearDistance || 20;
      var activeDistance = pullDownToRefresh.activeDistance || 55;

      var pullDownVisible = iScrollInstance.y >= appearDistance;
      var pullDownActive = iScrollInstance.y >= activeDistance;

      if (this.state.pullDownActive !== pullDownActive || this.state.pullDownVisible !== pullDownVisible) {
        this.setState({
          pullDownVisible: pullDownVisible,
          pullDownActive: pullDownActive
        });
      }

      var pullDown = this.refs.pullDown;
      if (pullDown) {
        pullDown.style.top = iScrollInstance.y - pullDown.clientHeight - 5 + "px";
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      if (this.state.pullDownActive) {
        this.props.pullDownToRefresh.onRefresh();
      }

      this.setState({
        pullDownVisible: false,
        pullDownActive: false
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateIScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.iScroll && this.props._iScroll) {
        this.props._iScroll.destroy();
        this.props._iScroll = null;
      }

      if (this.listenToTouchEnd) {
        this.listenToTouchEnd = false;
        document.documentElement.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderPullDown",
    value: function renderPullDown() {
      if (this.state.pullDownVisible) {
        var pullDownToRefresh = this.props.pullDownToRefresh;

        if (pullDownToRefresh) {
          pullDownToRefresh.labelInactive = pullDownToRefresh.labelInactive || _react2.default.createElement(
            "div",
            null,
            "Pull down to refresh.."
          );
          pullDownToRefresh.labelActive = pullDownToRefresh.labelActive || _react2.default.createElement(
            "div",
            null,
            "Release to refresh.."
          );
        }

        var label = void 0;
        if (this.state.pullDownActive) {
          label = pullDownToRefresh.labelActive;
        } else {
          label = pullDownToRefresh.labelInactive;
        }

        return _react2.default.createElement(
          "div",
          { style: { position: "relative" } },
          _react2.default.createElement(
            "div",
            { id: "pull-down", ref: "pullDown" },
            label
          )
        );
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          wrapperStyle = _props.wrapperStyle;


      return _react2.default.createElement(
        "div",
        { className: "react-iscroll" },
        _react2.default.createElement(
          "div",
          { id: "wrapper", ref: "wrapper", style: wrapperStyle },
          _react2.default.createElement(
            "div",
            { id: "scroller", ref: "scroller" },
            children
          )
        ),
        this.renderPullDown()
      );
    }
  }, {
    key: "iScrollInstance",
    get: function get() {
      return this.props.iScroll;
    }
  }]);

  return ReactIScroll;
}(_react2.default.Component);

ReactIScroll.propTypes = {
  iScroll: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.object,
  children: _propTypes2.default.node,

  // iscroll events
  onBeforeScrollStart: _propTypes2.default.func,
  onScrollCancel: _propTypes2.default.func,
  onScrollStart: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  onScrollEnd: _propTypes2.default.func,
  onFlick: _propTypes2.default.func,
  onZoomStart: _propTypes2.default.func,
  onZoomEnd: _propTypes2.default.func,

  // On mobile devices, sometimes we wish user can always scroll,
  // even the scroller's height is smaller than the wrapper's.
  // However, iscroll itself doesn't provide this option,
  // thus we dynamically set scroller's height to slightly bigger than wrapper's height
  // default: true
  alwaysScroll: _propTypes2.default.bool,

  // Calculate the wrapper's top dynamically
  // default: true
  dynamicTop: _propTypes2.default.bool,

  // Calculate the wrapper's bottom dynamically,
  // since we can't use the wrapper's height for calculation, so I exposed a function
  // notes: because IScroll is mounted before the parent,
  // if you want to use this feature, make sure to call updateIScroll() when parent is mounted,
  // just like the async load
  dynamicBottomFunc: _propTypes2.default.func,

  // If wrapper's position is static, provide here..
  wrapperStyle: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number,
    right: _propTypes2.default.number
  }),

  // If you want to enabled PullDownToRefresh feature,
  // ensure the iScroll prop you passed is "iscroll-probe"
  pullDownToRefresh: _propTypes2.default.shape({
    // you can customize the PullDownToRefresh labels
    labelInactive: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    labelActive: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    // PullDownToRefresh label appears when iscroll's y distance bigger than this value
    appearDistance: _propTypes2.default.number,
    // PullDownToRefresh active label appears when iscroll's y distance bigger than this value
    activeDistance: _propTypes2.default.number,
    // onRefresh func
    onRefresh: _propTypes2.default.func.isRequired
  })
};


ReactIScroll.defaultProps = {
  alwaysScroll: true,
  dynamicTop: false
};

exports.default = ReactIScroll;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrapFunc = wrapFunc;
exports.getOffset = getOffset;
/**
 * Since iscroll events are call with "this" pointing to iscroll instance,
 * here we wrap it with a function while keeping "this"
 * @param func
 * @returns {Function}
 */
function wrapFunc(func) {
    return function () {
        func(this);
    };
}

/**
 * These three functions are used to get the element's offset,
 * reference from http://javascript.info/tutorial/coordinates
 * @param elem
 * @returns {{top: number, left: number}}
 * @private
 */
function _getOffsetSum(elem) {
    var top = 0,
        left = 0;
    while (elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
    }

    return { top: top, left: left };
}

function _getOffsetRect(elem) {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docElem = document.documentElement;

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

function getOffset(elem) {
    if (elem.getBoundingClientRect) {
        return _getOffsetRect(elem);
    } else {
        // old browser
        return _getOffsetSum(elem);
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./IScroll.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./IScroll.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".react-iscroll #wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n.react-iscroll #scroller {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n.react-iscroll #pull-down {\n  color: #999;\n  z-index: -1;\n  width: 100%;\n  position: absolute;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});