(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { footerStyles } from 'styles'

/**
 * Site footer component
 */

var Footer = function Footer() {
  return __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Proudly published with \xA0", __jsx("a", {
    href: "https://prismic.io",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Prismic")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Meta.tsx":
/*!*****************************!*\
  !*** ./components/Meta.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prismic-configuration */ "./prismic-configuration.ts");
var _this = undefined,
    _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/Meta.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { reset, globals } from 'styles'

/**
 * Meta data component
 */

var Meta = function Meta() {
  var repoNameArray = /([^\/]+)\.cdn.prismic\.io\/api/.exec(_prismic_configuration__WEBPACK_IMPORTED_MODULE_2__["apiEndpoint"]);
  var repoName = repoNameArray === null || repoNameArray === void 0 ? void 0 : repoNameArray[1];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    defer: true,
    src: "//static.cdn.prismic.io/prismic.js?repo=".concat(repoName, "&new=true"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("script", {
    lang: "javascript",
    dangerouslySetInnerHTML: {
      __html: "\n\n          (function checkPreviewCookies() {\n\n            function getCookieValue(key) {              \n              const cookieMatcher = new RegExp(\"(?:(?:^|.*;\\\\s*)\" + key + \"\\\\s*\\\\=\\\\s*([^;]*).*$)|^.*$\");\n              return document.cookie.replace(cookieMatcher, \"$1\");\n            }\n            \n            const previewCookieValue = getCookieValue(\"io.prismic.preview\");\n            // console.log('value', previewCookieValue);\n            const decodedCookieValue = decodeURIComponent(previewCookieValue);\n            // console.log('decoded', decodedCookieValue);\n            const prismic = decodedCookieValue !== \"\" ? JSON.parse(decodedCookieValue) : {};\n            // console.log('prismic object', prismic);\n            const previewKey = \"".concat(repoName, ".prismic.io\";\n                               \n            const isEntering = getCookieValue(\"expectPrismicPreview\") === \"entering\";\n            const isEntered = getCookieValue(\"expectPrismicPreview\") === \"entered\";\n            const hasPrismicPreview = !!prismic[previewKey] && !!prismic[previewKey].preview;\n            \n            if (hasPrismicPreview) {\n              if (isEntering) {\n                console.log('Entered prismic preview mode...');\n                // Set entered in cookie here.\n                document.cookie = \"expectPrismicPreview=entered; path=/\";\n              }\n              else if (isEntered) {\n                console.log('Currently in prismic preview mode...');\n              }\n              else {\n                console.log('Nextjs preview was deactivated by the user or expired, but prismic preview is still activated.');\n                // Re-activate preview mode in nextjs api.\n                const previewToken = prismic[previewKey].preview;\n                // console.log('token', previewToken);\n                window.location.replace('/api/preview?token='+encodeURIComponent(previewToken));\n              }\n            }\n            else {\n              if (isEntering) {\n                console.log('Waiting to enter prismic preview mode...');                \n              }\n              else if (isEntered) {\n                console.log('Prismic preview was deactivated by the user or expired, but nextjs preview is still activated.');\n                // Deactivate nextjs preview by calling /api/preview-clear.\n                window.location.replace('/api/preview-clear');\n              }\n              else {\n                // console.log('In static viewing mode.');\n                // Do nothing.\n              }\n            }\n          })();\n          \n          ")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./layouts/index.tsx":
/*!***************************!*\
  !*** ./layouts/index.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
var _this = undefined,
    _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/layouts/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * Default layout component
 */

var DefaultLayout = function DefaultLayout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, " ", children, " "), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmartaver%2FProjects%2Fbeaufort-asia%2Fwww%2Fpages%2Findex.tsx!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmartaver%2FProjects%2Fbeaufort-asia%2Fwww%2Fpages%2Findex.tsx ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js":
/*!**************************************************************!*\
  !*** ./node_modules/prismic-reactjs/dist/prismic-reactjs.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
	else {}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prismic-helpers/dist/prismic-helpers.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/prismic-helpers/dist/prismic-helpers.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var u = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(u.exports, u, u.exports, t), u.l = !0, u.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.i = function (e) {
      return e;
    }, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 3);
  }([function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = n(2),
        o = r(u),
        i = n(1),
        f = r(i);
    e.exports = {
      Link: o.default,
      Date: f.default
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      if (!e) return null;
      var t = 24 == e.length ? e.substring(0, 22) + ":" + e.substring(22, 24) : e;
      return new Date(t);
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      url: function (e, t) {
        return "Document" === e.link_type ? t ? t(e, e.isBroken) : "" : e.url;
      }
    };
  }, function (e, t, n) {
    e.exports = n(0);
  }]);
});

/***/ }),

/***/ "./node_modules/prismic-richtext/dist/prismic-richtext.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/prismic-richtext/dist/prismic-richtext.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 9);
  }([function (e, t, n) {
    var r = n(3);

    e.exports = function (e) {
      return function t(n) {
        return 0 === arguments.length || r(n) ? t : e.apply(this, arguments);
      };
    };
  }, function (e, t, n) {
    var r = n(0),
        o = n(3);

    e.exports = function (e) {
      return function t(n, i) {
        switch (arguments.length) {
          case 0:
            return t;

          case 1:
            return o(n) ? t : r(function (t) {
              return e(n, t);
            });

          default:
            return o(n) && o(i) ? t : o(n) ? r(function (t) {
              return e(t, i);
            }) : o(i) ? r(function (t) {
              return e(n, t);
            }) : e(n, i);
        }
      };
    };
  }, function (e, t, n) {
    "use strict";

    var r;

    function o(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PRIORITIES = t.NODE_TYPES = void 0;
    var i = {
      heading1: "heading1",
      heading2: "heading2",
      heading3: "heading3",
      heading4: "heading4",
      heading5: "heading5",
      heading6: "heading6",
      paragraph: "paragraph",
      preformatted: "preformatted",
      strong: "strong",
      em: "em",
      listItem: "list-item",
      oListItem: "o-list-item",
      list: "group-list-item",
      oList: "group-o-list-item",
      image: "image",
      embed: "embed",
      hyperlink: "hyperlink",
      label: "label",
      span: "span"
    };
    t.NODE_TYPES = i;
    var u = (o(r = {}, i.heading1, 4), o(r, i.heading2, 4), o(r, i.heading3, 4), o(r, i.heading4, 4), o(r, i.heading5, 4), o(r, i.heading6, 4), o(r, i.paragraph, 3), o(r, i.preformatted, 5), o(r, i.strong, 6), o(r, i.em, 6), o(r, i.oList, 1), o(r, i.list, 1), o(r, i.listItem, 1), o(r, i.oListItem, 1), o(r, i.image, 1), o(r, i.embed, 1), o(r, i.hyperlink, 3), o(r, i.label, 4), o(r, i.span, 7), r);
    t.PRIORITIES = u;
  }, function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"];
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = d(n(12)),
        o = d(n(15)),
        i = d(n(16)),
        u = d(n(17)),
        c = d(n(21)),
        a = d(n(7)),
        l = n(23),
        f = n(2),
        s = n(8);

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function p(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function h(e) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }(e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }();
    }

    function y(e, t) {
      var n = t.others.reduce(function (n, r) {
        var o = n.inner,
            i = n.outer,
            u = function (e, t, n) {
          return n.start < t.start ? {
            inner: s.SpanNode.slice(n, t.start, n.end, e),
            outer: s.SpanNode.slice(n, n.start, t.start, e)
          } : n.end > t.end ? {
            inner: s.SpanNode.slice(n, n.start, t.end, e),
            outer: s.SpanNode.slice(n, t.end, n.end, e)
          } : {
            inner: n
          };
        }(e, t.elected, r);

        return {
          inner: o.concat(u.inner),
          outer: u.outer ? i.concat(u.outer) : i
        };
      }, {
        inner: [],
        outer: []
      }),
          r = n.inner,
          o = n.outer;
      return [t.elected.setChildren(x(e, r, t.elected.boundaries()))].concat(b(e, o));
    }

    function v(e) {
      return function (e, t) {
        return t.reduce(function (t, n) {
          var r = (0, c.default)(t);

          if (r) {
            if (r.some(function (e) {
              return e.isParentOf(n);
            })) return (0, u.default)(t).concat([r.concat(n)]);
            var o = (0, c.default)(r);
            return o && e(o, n) ? (0, u.default)(t).concat([r.concat(n)]) : t.concat([[n]]);
          }

          return [[n]];
        }, []);
      }(function (e, t) {
        return e.end >= t.start;
      }, (0, i.default)([function (e, t) {
        return e.start - t.start;
      }, function (e, t) {
        return e.end - t.end;
      }], e));
    }

    function m(e) {
      if (0 === e.length) throw new Error("Unable to elect node on empty list");
      var t = h(e.sort(function (e, t) {
        if (e.isParentOf(t)) return -1;
        if (t.isParentOf(e)) return 1;
        var n = f.PRIORITIES[e.type] - f.PRIORITIES[t.type];
        return 0 === n ? e.text.length - t.text.length : n;
      }));
      return {
        elected: t[0],
        others: t.slice(1)
      };
    }

    function x(e, t, n) {
      if (t.length > 0) return function (e, t, n) {
        return t.reduce(function (r, o, i) {
          var u = [],
              c = 0 === i && o.start > n.lower,
              a = i === t.length - 1 && n.upper > o.end;

          if (c) {
            var l = new s.TextNode(n.lower, o.start, e.slice(n.lower, o.start));
            u = u.concat(l);
          } else {
            var f = t[i - 1];

            if (f && o.start > f.end) {
              var d = e.slice(f.end, o.start),
                  p = new s.TextNode(f.end, o.start, d);
              u = u.concat(p);
            }
          }

          if (u = u.concat(o), a) {
            var h = new s.TextNode(o.end, n.upper, e.slice(o.end, n.upper));
            u = u.concat(h);
          }

          return r.concat(u);
        }, []);
      }(e, b(e, t), n);
      var r = e.slice(n.lower, n.upper);
      return [new s.TextNode(n.lower, n.upper, r)];
    }

    function b(e, t) {
      var n = v((0, o.default)(function (e) {
        return e.start;
      }, t)).map(m),
          i = (0, r.default)(n.map(function (t) {
        return y(e, t);
      }));
      return (0, o.default)(function (e) {
        return e.start;
      }, i);
    }

    var g = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
      }

      var t, n, r;
      return t = e, r = [{
        key: "fromRichText",
        value: function (e) {
          return {
            key: (0, a.default)(),
            children: e.reduce(function (e, t, n) {
              if (l.RichTextBlock.isEmbedBlock(t.type) || l.RichTextBlock.isImageBlock(t.type)) return e.concat(new s.BlockNode(t.type, t));

              var r = function (e) {
                var t = e.spans.map(function (t) {
                  var n = e.text.slice(t.start, t.end);
                  return new s.SpanNode(t.start, t.end, t.type, n, [], t);
                }),
                    n = {
                  lower: 0,
                  upper: e.text.length
                };
                return x(e.text, t, n);
              }(t),
                  o = e[e.length - 1];

              if (l.RichTextBlock.isListItem(t.type) && o && o instanceof s.ListBlockNode) {
                var i = new s.ListItemBlockNode(t, r),
                    c = o.addChild(i);
                return (0, u.default)(e).concat(c);
              }

              if (l.RichTextBlock.isOrderedListItem(t.type) && o && o instanceof s.OrderedListBlockNode) {
                var a = new s.OrderedListItemBlockNode(t, r),
                    f = o.addChild(a);
                return (0, u.default)(e).concat(f);
              }

              if (l.RichTextBlock.isListItem(t.type)) {
                var d = new s.ListItemBlockNode(t, r),
                    p = new s.ListBlockNode(l.RichTextBlock.emptyList(), [d]);
                return e.concat(p);
              }

              if (l.RichTextBlock.isOrderedListItem(t.type)) {
                var h = new s.OrderedListItemBlockNode(t, r),
                    y = new s.OrderedListBlockNode(l.RichTextBlock.emptyOrderedList(), [h]);
                return e.concat(y);
              }

              return e.concat(new s.BlockNode(t.type, t, r));
            }, [])
          };
        }
      }], (n = null) && p(t.prototype, n), r && p(t, r), e;
    }();

    t.default = g;
  }, function (e, t) {
    e.exports = Array.isArray || function (e) {
      return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e);
    };
  }, function (e, t) {
    e.exports = function (e) {
      return "[object String]" === Object.prototype.toString.call(e);
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function () {
      var e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var n = (e + 16 * Math.random()) % 16 | 0;
        return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16);
      });
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ListBlockNode = t.OrderedListBlockNode = t.OrderedListItemBlockNode = t.ListItemBlockNode = t.BlockNode = t.TextNode = t.SpanNode = t.Node = void 0;
    var r,
        o = (r = n(7)) && r.__esModule ? r : {
      default: r
    },
        i = n(2);

    function u(e) {
      return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function a(e, t, n) {
      return t && c(e.prototype, t), n && c(e, n), e;
    }

    function l(e, t) {
      return !t || "object" !== u(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function f(e) {
      return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && d(e, t);
    }

    function d(e, t) {
      return (d = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function p(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var h = function e(t, n, r) {
      p(this, e), this.key = (0, o.default)(), this.type = t, this.element = n, this.children = r;
    };

    t.Node = h;

    var y = function (e) {
      function t(e, n, r, o, i, u) {
        var c;
        return p(this, t), (c = l(this, f(t).call(this, r, u, i))).start = e, c.end = n, c.text = o, c.children = i, c;
      }

      return s(t, h), a(t, [{
        key: "boundaries",
        value: function () {
          return {
            lower: this.start,
            upper: this.end
          };
        }
      }, {
        key: "isParentOf",
        value: function (e) {
          return this.start <= e.start && this.end >= e.end;
        }
      }, {
        key: "setChildren",
        value: function (e) {
          return new t(this.start, this.end, this.type, this.text, e, this.element);
        }
      }], [{
        key: "slice",
        value: function (e, n, r, o) {
          return new t(n, r, e.type, o.slice(n, r), e.children, e.element);
        }
      }]), t;
    }();

    t.SpanNode = y;

    var v = function (e) {
      function t(e, n, r) {
        p(this, t);
        var o = {
          type: i.NODE_TYPES.span,
          start: e,
          end: n,
          text: r
        };
        return l(this, f(t).call(this, e, n, i.NODE_TYPES.span, r, [], o));
      }

      return s(t, y), t;
    }();

    t.TextNode = v;

    var m = function (e) {
      function t(e, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return p(this, t), l(this, f(t).call(this, e, n, r));
      }

      return s(t, h), t;
    }();

    t.BlockNode = m;

    var x = function (e) {
      function t(e, n) {
        return p(this, t), l(this, f(t).call(this, i.NODE_TYPES.listItem, e, n));
      }

      return s(t, m), t;
    }();

    t.ListItemBlockNode = x;

    var b = function (e) {
      function t(e, n) {
        return p(this, t), l(this, f(t).call(this, i.NODE_TYPES.oListItem, e, n));
      }

      return s(t, m), t;
    }();

    t.OrderedListItemBlockNode = b;

    var g = function (e) {
      function t(e, n) {
        return p(this, t), l(this, f(t).call(this, i.NODE_TYPES.oList, e, n));
      }

      return s(t, m), a(t, [{
        key: "addChild",
        value: function (e) {
          var n = this.children.concat(e);
          return new t(this.element, n);
        }
      }]), t;
    }();

    t.OrderedListBlockNode = g;

    var O = function (e) {
      function t(e, n) {
        return p(this, t), l(this, f(t).call(this, i.NODE_TYPES.list, e, n));
      }

      return s(t, m), a(t, [{
        key: "addChild",
        value: function (e) {
          var n = this.children.concat(e);
          return new t(this.element, n);
        }
      }]), t;
    }();

    t.ListBlockNode = O;
  }, function (e, t, n) {
    e.exports = n(10);
  }, function (e, t, n) {
    "use strict";

    var r = c(n(11)),
        o = c(n(4)),
        i = c(n(24)),
        u = n(2);

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.exports = {
      asText: r.default,
      asTree: o.default.fromRichText,
      serialize: i.default,
      Elements: u.NODE_TYPES
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var r = function (e, t) {
      var n = "string" == typeof t ? t : " ";
      return e.map(function (e) {
        return e.text;
      }).join(n);
    };

    t.default = r;
  }, function (e, t, n) {
    var r = n(0)(n(13)(!0));
    e.exports = r;
  }, function (e, t, n) {
    var r = n(14);

    e.exports = function (e) {
      return function t(n) {
        for (var o, i, u, c = [], a = 0, l = n.length; a < l;) {
          if (r(n[a])) for (u = 0, i = (o = e ? t(n[a]) : n[a]).length; u < i;) c[c.length] = o[u], u += 1;else c[c.length] = n[a];
          a += 1;
        }

        return c;
      };
    };
  }, function (e, t, n) {
    var r = n(0),
        o = n(5),
        i = n(6),
        u = r(function (e) {
      return !!o(e) || !!e && "object" == typeof e && !i(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || e.length > 0 && e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1));
    });
    e.exports = u;
  }, function (e, t, n) {
    var r = n(1)(function (e, t) {
      return Array.prototype.slice.call(t, 0).sort(function (t, n) {
        var r = e(t),
            o = e(n);
        return r < o ? -1 : r > o ? 1 : 0;
      });
    });
    e.exports = r;
  }, function (e, t, n) {
    var r = n(1)(function (e, t) {
      return Array.prototype.slice.call(t, 0).sort(function (t, n) {
        for (var r = 0, o = 0; 0 === r && o < e.length;) r = e[o](t, n), o += 1;

        return r;
      });
    });
    e.exports = r;
  }, function (e, t, n) {
    var r = n(18)(0, -1);
    e.exports = r;
  }, function (e, t, n) {
    var r = n(19),
        o = n(20)(r("slice", function (e, t, n) {
      return Array.prototype.slice.call(n, e, t);
    }));
    e.exports = o;
  }, function (e, t, n) {
    var r = n(5);

    e.exports = function (e, t) {
      return function () {
        var n = arguments.length;
        if (0 === n) return t();
        var o = arguments[n - 1];
        return r(o) || "function" != typeof o[e] ? t.apply(this, arguments) : o[e].apply(o, Array.prototype.slice.call(arguments, 0, n - 1));
      };
    };
  }, function (e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(3);

    e.exports = function (e) {
      return function t(n, u, c) {
        switch (arguments.length) {
          case 0:
            return t;

          case 1:
            return i(n) ? t : o(function (t, r) {
              return e(n, t, r);
            });

          case 2:
            return i(n) && i(u) ? t : i(n) ? o(function (t, n) {
              return e(t, u, n);
            }) : i(u) ? o(function (t, r) {
              return e(n, t, r);
            }) : r(function (t) {
              return e(n, u, t);
            });

          default:
            return i(n) && i(u) && i(c) ? t : i(n) && i(u) ? o(function (t, n) {
              return e(t, n, c);
            }) : i(n) && i(c) ? o(function (t, n) {
              return e(t, u, n);
            }) : i(u) && i(c) ? o(function (t, r) {
              return e(n, t, r);
            }) : i(n) ? r(function (t) {
              return e(t, u, c);
            }) : i(u) ? r(function (t) {
              return e(n, t, c);
            }) : i(c) ? r(function (t) {
              return e(n, u, t);
            }) : e(n, u, c);
        }
      };
    };
  }, function (e, t, n) {
    var r = n(22)(-1);
    e.exports = r;
  }, function (e, t, n) {
    var r = n(1),
        o = n(6),
        i = r(function (e, t) {
      var n = e < 0 ? t.length + e : e;
      return o(t) ? t.charAt(n) : t[n];
    });
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RichTextBlock = void 0;
    var r = n(2);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var i = function () {
      function e(t, n, r) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.type = t, this.text = n, this.spans = r;
      }

      var t, n, i;
      return t = e, i = [{
        key: "isEmbedBlock",
        value: function (e) {
          return e === r.NODE_TYPES.embed;
        }
      }, {
        key: "isImageBlock",
        value: function (e) {
          return e === r.NODE_TYPES.image;
        }
      }, {
        key: "isList",
        value: function (e) {
          return e === r.NODE_TYPES.list;
        }
      }, {
        key: "isOrderedList",
        value: function (e) {
          return e === r.NODE_TYPES.oList;
        }
      }, {
        key: "isListItem",
        value: function (e) {
          return e === r.NODE_TYPES.listItem;
        }
      }, {
        key: "isOrderedListItem",
        value: function (e) {
          return e === r.NODE_TYPES.oListItem;
        }
      }, {
        key: "emptyList",
        value: function () {
          return {
            type: r.NODE_TYPES.list,
            spans: [],
            text: ""
          };
        }
      }, {
        key: "emptyOrderedList",
        value: function () {
          return {
            type: r.NODE_TYPES.oList,
            spans: [],
            text: ""
          };
        }
      }], (n = null) && o(t.prototype, n), i && o(t, i), e;
    }();

    t.RichTextBlock = i;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r,
        o = (r = n(4)) && r.__esModule ? r : {
      default: r
    },
        i = n(8);

    var u = function (e, t, n) {
      return o.default.fromRichText(e).children.map(function (e, r) {
        return function (e, t, n, r) {
          return function e(n, o) {
            var u = n instanceof i.SpanNode ? n.text : null,
                c = n.children.reduce(function (t, n, r) {
              return t.concat([e(n, r)]);
            }, []),
                a = r && r(n.type, n.element, u, c, o);
            return a || t(n.type, n.element, u, c, o);
          }(e, n);
        }(e, t, r, n);
      });
    };

    t.default = u;
  }]);
});

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function () {};

if (true) {
  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (  true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./src/Component.js":
/*!**************************!*\
  !*** ./src/Component.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_richtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-richtext */ "./node_modules/prismic-richtext/dist/prismic-richtext.min.js");
/* harmony import */ var prismic_richtext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_richtext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _richtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./richtext */ "./src/richtext.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var createHtmlSerializer = function createHtmlSerializer() {
  var bucket = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var serializers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var processors = serializers.reduce(function (acc, _ref) {
    var type = _ref.type,
        fn = _ref.fn;
    return Object.assign({}, acc, _defineProperty({}, type, fn));
  }, {});
  return function (type) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return processors[type] ? processors[type].apply(processors, [type].concat(args)) : null;
  };
};

var RichText = function RichText(_ref2) {
  var Component = _ref2.Component,
      elements = _ref2.elements,
      htmlSerializer = _ref2.htmlSerializer,
      linkResolver = _ref2.linkResolver,
      render = _ref2.render,
      renderAsText = _ref2.renderAsText,
      serializeHyperlink = _ref2.serializeHyperlink,
      rest = _objectWithoutProperties(_ref2, ["Component", "elements", "htmlSerializer", "linkResolver", "render", "renderAsText", "serializeHyperlink"]);

  var maybeSerializer = htmlSerializer || serializeHyperlink && createHtmlSerializer({}, [{
    type: prismic_richtext__WEBPACK_IMPORTED_MODULE_2__["Elements"].hyperlink,
    fn: serializeHyperlink
  }]);
  return render ? Object(_richtext__WEBPACK_IMPORTED_MODULE_3__["renderRichText"])(render, linkResolver, maybeSerializer, Component, elements, rest) : null;
};

RichText.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  linkResolver: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  htmlSerializer: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  elements: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  serializeHyperlink: function serializeHyperlink(props, _, componentName) {
    if (props.serializeHyperlink && props.htmlSerializer) {
      return new Error("You cannot specify both 'htmlSerializer' and 'serializeHyperlink'. The latter will be ignored by '".concat(componentName, "'."));
    }
  },
  render: function render(props, _, componentName) {
    if (!props.render) {
      return new Error("Prop 'render' was not specified in '".concat(componentName, "'."));
    }
  }
};
RichText.asText = _richtext__WEBPACK_IMPORTED_MODULE_3__["asText"];
RichText.render = _richtext__WEBPACK_IMPORTED_MODULE_3__["renderRichText"];
RichText.displayName = 'RichText';
/* harmony default export */ __webpack_exports__["default"] = (RichText);

/***/ }),

/***/ "./src/embeds.js":
/*!***********************!*\
  !*** ./src/embeds.js ***!
  \***********************/
/*! exports provided: createScript, embeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScript", function() { return createScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embeds", function() { return embeds; });
function createScript(_ref) {
  var property = _ref.property,
      src = _ref.src,
      id = _ref.id;

  if (!window) {
    return;
  }

  (function (src, id) {
    var js,
        fjs = document.getElementsByTagName('script')[0],
        t = window[property] || {};

    if (document.getElementById(id)) {
      return t;
    }

    js = document.createElement('script');
    js.id = id;
    js.src = src;
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];

    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  })(src, id);
}
var embeds = {
  Twitter: {
    property: 'twttr',
    src: 'https://platform.twitter.com/widgets.js',
    id: 'twitter-wjs',
    load: function load() {
      if (window && window.twttr) {
        window.twttr.widgets.load();
      }
    }
  },
  Facebook: {
    property: 'FB',
    src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3',
    id: 'fb-wjs',
    load: function load(ref) {
      if (window && window.FB) {
        window.FB.XFBML.parse(ref);
      }
    }
  },
  Instagram: {
    property: 'instgrm',
    src: 'https://www.instagram.com/embed.js',
    id: 'insta-wjs',
    load: function load() {
      if (window && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var PrismicHelpers = __webpack_require__(/*! prismic-helpers */ "./node_modules/prismic-helpers/dist/prismic-helpers.min.js");

var PrismicRichText = __webpack_require__(/*! prismic-richtext */ "./node_modules/prismic-richtext/dist/prismic-richtext.min.js");

var Component = __webpack_require__(/*! ./Component */ "./src/Component.js");

module.exports = {
  Date: PrismicHelpers.Date,
  Elements: PrismicRichText.Elements,
  Link: PrismicHelpers.Link,
  RichText: Component["default"]
};

/***/ }),

/***/ "./src/richtext.js":
/*!*************************!*\
  !*** ./src/richtext.js ***!
  \*************************/
/*! exports provided: asText, renderRichText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asText", function() { return asText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRichText", function() { return renderRichText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_richtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-richtext */ "./node_modules/prismic-richtext/dist/prismic-richtext.min.js");
/* harmony import */ var prismic_richtext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_richtext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-helpers */ "./node_modules/prismic-helpers/dist/prismic-helpers.min.js");
/* harmony import */ var prismic_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _embeds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embeds */ "./src/embeds.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var createScript = typeof window !== "undefined" ? __webpack_require__(/*! ./embeds */ "./src/embeds.js").createScript : function () {};

function serialize(linkResolver, elements, type, element, content, children, index) {
  if (elements[type]) {
    return serializeElement(elements[type], type, element, content, children, index);
  }

  switch (type) {
    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading1:
      return serializeStandardTag('h1', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading2:
      return serializeStandardTag('h2', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading3:
      return serializeStandardTag('h3', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading4:
      return serializeStandardTag('h4', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading5:
      return serializeStandardTag('h5', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].heading6:
      return serializeStandardTag('h6', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].paragraph:
      return serializeStandardTag('p', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].preformatted:
      return serializeStandardTag('pre', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].strong:
      return serializeStandardTag('strong', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].em:
      return serializeStandardTag('em', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].listItem:
      return serializeStandardTag('li', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].oListItem:
      return serializeStandardTag('li', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].list:
      return serializeStandardTag('ul', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].oList:
      return serializeStandardTag('ol', element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].image:
      return serializeImage(linkResolver, element, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].embed:
      return serializeEmbed(element, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].hyperlink:
      return serializeHyperlink(linkResolver, element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].label:
      return serializeLabel(element, children, index);

    case prismic_richtext__WEBPACK_IMPORTED_MODULE_1__["Elements"].span:
      return serializeSpan(content);

    default:
      return null;
  }
}

function propsWithUniqueKey() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 ? arguments[1] : undefined;
  return Object.assign(props, {
    key: key
  });
}

function serializeElement(Element, type, props, content, children, index) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Element, _objectSpread({
    key: "element-".concat(type, "-").concat(index + 1)
  }, props, {
    children: children && children.length ? children : undefined
  }, type === 'image' ? {
    src: props.url,
    url: undefined
  } : null));
}

function serializeStandardTag(tag, element, children, key) {
  var props = element.label ? Object.assign({}, {
    className: element.label
  }) : {};
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(tag, propsWithUniqueKey(props, key), children);
}

function serializeHyperlink(linkResolver, element, children, key) {
  var targetAttr = element.data.target ? {
    target: element.data.target
  } : {};
  var relAttr = element.data.target ? {
    rel: 'noopener'
  } : {};
  var props = Object.assign({
    href: prismic_helpers__WEBPACK_IMPORTED_MODULE_2__["Link"].url(element.data, linkResolver)
  }, targetAttr, relAttr);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', propsWithUniqueKey(props, key), children);
}

function serializeLabel(element, children, key) {
  var props = element.data ? Object.assign({}, {
    className: element.data.label
  }) : {};
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', propsWithUniqueKey(props, key), children);
}

function serializeSpan(content) {
  if (content) {
    return content.split("\n").reduce(function (acc, p) {
      if (acc.length === 0) {
        return [p];
      } else {
        var brIndex = (acc.length + 1) / 2 - 1;
        var br = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('br', propsWithUniqueKey({}, brIndex));
        return acc.concat([br, p]);
      }
    }, []);
  } else {
    return null;
  }
}

function serializeImage(linkResolver, element, key) {
  var linkUrl = element.linkTo ? prismic_helpers__WEBPACK_IMPORTED_MODULE_2__["Link"].url(element.linkTo, linkResolver) : null;
  var linkTarget = element.linkTo && element.linkTo.target ? {
    target: element.linkTo.target
  } : {};
  var relAttr = linkTarget.target ? {
    rel: 'noopener'
  } : {};
  var img = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('img', {
    src: element.url,
    alt: element.alt || ''
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('p', propsWithUniqueKey({
    className: [element.label || '', 'block-img'].join(' ')
  }, key), linkUrl ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', Object.assign({
    href: linkUrl
  }, linkTarget, relAttr), img) : img);
}

function serializeEmbed(element, key) {
  if (_embeds__WEBPACK_IMPORTED_MODULE_3__["embeds"][element.oembed.provider_name]) {
    createScript(_embeds__WEBPACK_IMPORTED_MODULE_3__["embeds"][element.oembed.provider_name]);
  }

  var className = "embed embed-".concat(element.oembed.provider_name.toLowerCase());
  var props = Object.assign({
    "data-oembed": element.oembed.embed_url,
    "data-oembed-type": element.oembed.type,
    "data-oembed-provider": element.oembed.provider_name,
    ref: function ref(_ref) {
      if (_embeds__WEBPACK_IMPORTED_MODULE_3__["embeds"][element.oembed.provider_name]) {
        _embeds__WEBPACK_IMPORTED_MODULE_3__["embeds"][element.oembed.provider_name].load(_ref);
      }
    }
  }, element.label ? {
    className: "".concat(className, " ").concat(element.label)
  } : {
    className: className
  });
  var embedHtml = Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    dangerouslySetInnerHTML: {
      __html: element.oembed.html
    }
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', propsWithUniqueKey(props, key), embedHtml);
}

var asText = function asText(structuredText) {
  return prismic_richtext__WEBPACK_IMPORTED_MODULE_1___default.a.asText(structuredText);
};
var renderRichText = function renderRichText(richText, linkResolver, htmlSerializer) {
  var Component = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];
  var elements = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var args = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  if (Object.prototype.toString.call(richText) !== '[object Array]') {
    console.warn("Rich text argument should be an Array. Received ".concat(_typeof(richText)));
    return null;
  }

  var serializedChildren = prismic_richtext__WEBPACK_IMPORTED_MODULE_1___default.a.serialize(richText, serialize.bind(null, linkResolver, elements), htmlSerializer);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, args, serializedChildren);
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/data/hub/prismic/prismic-reactjs/src/index.js */"./src/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_richText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/richText */ "./utils/richText.tsx");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts */ "./layouts/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var Home = function Home(_ref) {
  var greeting = _ref.greeting;
  return __jsx(_layouts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 49
    }
  }, "Hello world! - user agent: ", Object(_utils_richText__WEBPACK_IMPORTED_MODULE_1__["richText"])(greeting));
};

// Home.getInitialProps = async ({ }) => {
//     return { greeting: "bar" }
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./prismic-configuration.ts":
/*!**********************************!*\
  !*** ./prismic-configuration.ts ***!
  \**********************************/
/*! exports provided: apiEndpoint, graphqlEndpoint, accessToken, linkResolver, hrefResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiEndpoint", function() { return apiEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlEndpoint", function() { return graphqlEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessToken", function() { return accessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkResolver", function() { return linkResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrefResolver", function() { return hrefResolver; });
// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
var apiEndpoint = 'https://beaufort-asia.cdn.prismic.io/api';
var graphqlEndpoint = 'https://beaufort-asia.cdn.prismic.io/graphql'; // -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private

var accessToken = ''; // -- Link resolution rules
// Manages the url links to internal Prismic documents

var linkResolver = function linkResolver(doc) {
  if (doc.type === 'post') {
    return "/blog/".concat(doc.uid);
  }

  return '/';
}; // Additional helper function for Next/Link components

var hrefResolver = function hrefResolver(doc) {
  if (doc.type === 'post') {
    return '/blog/[uid]';
  }

  return '/';
};

/***/ }),

/***/ "./utils/richText.tsx":
/*!****************************!*\
  !*** ./utils/richText.tsx ***!
  \****************************/
/*! exports provided: richText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "richText", function() { return richText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prismic-configuration */ "./prismic-configuration.ts");
var _this = undefined,
    _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/utils/richText.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var richText = function richText(rich_text_field) {
  return __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    linkResolver: _prismic_configuration__WEBPACK_IMPORTED_MODULE_2__["linkResolver"],
    render: rich_text_field,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 51
    }
  });
};

/***/ }),

/***/ 1:
/*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmartaver%2FProjects%2Fbeaufort-asia%2Fwww%2Fpages%2Findex.tsx ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmartaver%2FProjects%2Fbeaufort-asia%2Fwww%2Fpages%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmartaver%2FProjects%2Fbeaufort-asia%2Fwww%2Fpages%2Findex.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map