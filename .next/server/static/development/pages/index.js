module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Column.tsx":
/*!*******************************!*\
  !*** ./components/Column.tsx ***!
  \*******************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DashBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBox */ "./components/DashBox.tsx");
/* harmony import */ var _utils_richText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/richText */ "./utils/richText.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/Column.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_DashBox__WEBPACK_IMPORTED_MODULE_1__["DashColumn"]).withConfig({
  displayName: "Column__Container",
  componentId: "sc-1dqsjtk-0"
})([""]);
const Column = (_ref) => {
  let {
    contentId,
    values,
    dash
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["contentId", "values", "dash"]);

  return __jsx(Container, _extends({}, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_DashBox__WEBPACK_IMPORTED_MODULE_1__["DashColumn"], _extends({
    dash
  }, {
    id: contentId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), values.map(section => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: section.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(_DashBox__WEBPACK_IMPORTED_MODULE_1__["DashRow"], {
    dash: {
      bottom: true
    },
    padX: true,
    padY: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, Object(_utils_richText__WEBPACK_IMPORTED_MODULE_2__["richText"])(section.title)), section.articles.map(article => {
    if (article.id === 'XoE7VRIAACTouko9') console.log(article);
    return __jsx(_DashBox__WEBPACK_IMPORTED_MODULE_1__["DashColumn"], {
      padX: true,
      padY: true,
      key: article.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 41
      }
    }, article.slices.map(slice => {
      switch (slice.type) {
        case "html":
          {
            return Object(_utils_richText__WEBPACK_IMPORTED_MODULE_2__["richText"])(slice.html_rich_text);
          }

        case "vimeo":
          {
            var _slice$vimeo_thumbnai, _slice$vimeo_embed;

            if (!slice.vimeo_embed) return;
            const thumbnailUrl = ((_slice$vimeo_thumbnai = slice.vimeo_thumbnail_image) === null || _slice$vimeo_thumbnai === void 0 ? void 0 : _slice$vimeo_thumbnai.url) || ((_slice$vimeo_embed = slice.vimeo_embed) === null || _slice$vimeo_embed === void 0 ? void 0 : _slice$vimeo_embed.thumbnail_url);
            if (!thumbnailUrl) return;
            return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
              href: slice.vimeo_embed.embed_url,
              target: "_blank",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 57
              }
            }, __jsx("img", {
              src: thumbnailUrl,
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 111
              }
            })), Object(_utils_richText__WEBPACK_IMPORTED_MODULE_2__["richText"])(slice.vimeo_link_text));
          }

        case "link":
          {
            var _slice$link_thumbnail;

            const thumbnailUrl = (_slice$link_thumbnail = slice.link_thumbnail) === null || _slice$link_thumbnail === void 0 ? void 0 : _slice$link_thumbnail.url;
            const content = thumbnailUrl ? __jsx("img", {
              src: thumbnailUrl,
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 82
              }
            }) : __jsx("span", {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 111
              }
            }, slice.link_text);
            return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_utils_richText__WEBPACK_IMPORTED_MODULE_2__["richText"])(slice.link_text_before), __jsx("a", {
              href: slice.link_url,
              target: "_blank",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 57
              }
            }, content), Object(_utils_richText__WEBPACK_IMPORTED_MODULE_2__["richText"])(slice.link_text_after));
          }

        case "image":
          {
            var _slice$image_file, _slice$image_file2;

            const thumbnailUrl = (_slice$image_file = slice.image_file) === null || _slice$image_file === void 0 ? void 0 : _slice$image_file.thumbnailUrl;
            if (!thumbnailUrl) return;
            return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_utils_richText__WEBPACK_IMPORTED_MODULE_2__["richText"])(slice.image_text_before), __jsx("a", {
              href: (_slice$image_file2 = slice.image_file) === null || _slice$image_file2 === void 0 ? void 0 : _slice$image_file2.url,
              target: "_blank",
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 57
              }
            }, __jsx("img", {
              src: thumbnailUrl,
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 61
              }
            }), slice.image_link_text), Object(_utils_richText__WEBPACK_IMPORTED_MODULE_2__["richText"])(slice.image_text_after));
          }
      }
    }));
  })))));
};

/***/ }),

/***/ "./components/DashBox.tsx":
/*!********************************!*\
  !*** ./components/DashBox.tsx ***!
  \********************************/
/*! exports provided: svgData, DashBox, DashRow, DashColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgData", function() { return svgData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBox", function() { return DashBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashRow", function() { return DashRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashColumn", function() { return DashColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/DashBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const cover = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["position:absolute;top:0;left:0;right:0;bottom:0;opacity:0.25;z-index:-1;"]);
const dotSize = 3;
const size = 8;
const r = dotSize / 2;
const total = size * 2 + 2 * r;
const opacity = 0.25;
const borderImg = `
<svg viewBox="0 0 ${total} ${total}" width="${total}px" height="${total}px" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="${opacity}" cx="${r + size * 0}" cy="${r + size * 0}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + size * 1}" cy="${r + size * 0}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + size * 2}" cy="${r + size * 0}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + size * 0}" cy="${r + size * 1}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + size * 2}" cy="${r + size * 1}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + size * 0}" cy="${r + size * 2}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + size * 1}" cy="${r + size * 2}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + size * 2}" cy="${r + size * 2}" r="${r}"/>
</svg>    
`;
const svgData = svg => `data:image/svg+xml;utf8,${svg}`;
const borderColor = `transparent`; // const borderColor = `red`;

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DashBox__Container",
  componentId: "rg1m75-0"
})(["position:relative;z-index:0;", " ", " ", ";", ";", ";", ";border-image-source:url('", "');border-image-slice:", ";border-image-width:", ";border-image-repeat:round;"], p => p.padX ? `padding-left: 6px; padding-right: 6px;` : ``, p => p.padY ? `padding-top: 6px; padding-bottom: 6px;` : ``, p => {
  var _p$dash;

  return ((_p$dash = p.dash) === null || _p$dash === void 0 ? void 0 : _p$dash.top) ? `border-top: ${dotSize}px solid ${borderColor};` : ``;
}, p => {
  var _p$dash2;

  return ((_p$dash2 = p.dash) === null || _p$dash2 === void 0 ? void 0 : _p$dash2.left) ? `border-left: ${dotSize}px solid ${borderColor};` : ``;
}, p => {
  var _p$dash3;

  return ((_p$dash3 = p.dash) === null || _p$dash3 === void 0 ? void 0 : _p$dash3.bottom) ? `border-bottom: ${dotSize}px solid ${borderColor};` : ``;
}, p => {
  var _p$dash4;

  return ((_p$dash4 = p.dash) === null || _p$dash4 === void 0 ? void 0 : _p$dash4.right) ? `border-right: ${dotSize}px solid ${borderColor};` : ``;
}, svgData(borderImg), dotSize, p => {
  var _p$dash5, _p$dash6, _p$dash7, _p$dash8;

  return `${((_p$dash5 = p.dash) === null || _p$dash5 === void 0 ? void 0 : _p$dash5.top) ? `${dotSize}px` : `0`} ${((_p$dash6 = p.dash) === null || _p$dash6 === void 0 ? void 0 : _p$dash6.right) ? `${dotSize}px` : `0`} ${((_p$dash7 = p.dash) === null || _p$dash7 === void 0 ? void 0 : _p$dash7.bottom) ? `${dotSize}px` : `0`} ${((_p$dash8 = p.dash) === null || _p$dash8 === void 0 ? void 0 : _p$dash8.left) ? `${dotSize}px` : `0`} `;
});
const DashBox = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Container, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }), children);
};
DashBox.defaultProps = {};
const DashRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(DashBox).withConfig({
  displayName: "DashBox__DashRow",
  componentId: "rg1m75-1"
})(["display:flex;flex-direction:row;align-items:flex-start;justify-content:center;width:100%;text-align:center;"]);
const DashColumn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(DashBox).withConfig({
  displayName: "DashBox__DashColumn",
  componentId: "rg1m75-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;width:100%;"]);

/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { footerStyles } from 'styles'

/**
 * Site footer component
 */

const Footer = () => __jsx("footer", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/GlobalStyle.tsx":
/*!************************************!*\
  !*** ./components/GlobalStyle.tsx ***!
  \************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/fonts */ "./styles/fonts.ts");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/typography */ "./styles/typography.ts");



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`  
  ${_styles_fonts__WEBPACK_IMPORTED_MODULE_1__["fonts"]}
  ${_styles_typography__WEBPACK_IMPORTED_MODULE_2__["typography"]}
  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    z-index: 1;
  }
  * {
    box-sizing: border-box;
  }
`;

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _utils_richText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/richText */ "./utils/richText.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashBox */ "./components/DashBox.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const subtitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["font-family:LetterGothicSlanted,LucidaConsole;font-size:25px;letter-spacing:-3px;text-transform:uppercase;"]);
const Header = (_ref) => {
  let {
    values
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["values"]);

  return __jsx(_DashBox__WEBPACK_IMPORTED_MODULE_2__["DashColumn"], _extends({}, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), values.title && __jsx(_DashBox__WEBPACK_IMPORTED_MODULE_2__["DashBox"], {
    padX: true,
    dash: {
      bottom: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 30
    }
  }, Object(_utils_richText__WEBPACK_IMPORTED_MODULE_0__["richText"])(values.title)), __jsx(_DashBox__WEBPACK_IMPORTED_MODULE_2__["DashBox"], {
    padX: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, values.body && Object(_utils_richText__WEBPACK_IMPORTED_MODULE_0__["richText"])(values.body)));
};

/***/ }),

/***/ "./components/Meta.tsx":
/*!*****************************!*\
  !*** ./components/Meta.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prismic-configuration */ "./prismic-configuration.ts");
/* harmony import */ var _PreviewSync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreviewSync */ "./components/PreviewSync.tsx");
/* harmony import */ var _PreviewLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviewLoading */ "./components/PreviewLoading.tsx");
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/Meta.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






/**
 * Meta data component
 */

const Meta = () => {
  const repoNameArray = /([^\/]+)\.cdn.prismic\.io\/api/.exec(_prismic_configuration__WEBPACK_IMPORTED_MODULE_2__["apiEndpoint"]);
  const repoName = repoNameArray === null || repoNameArray === void 0 ? void 0 : repoNameArray[1];
  const loadingElementId = "prismic-loading-overlay";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Beaufort"), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    defer: true,
    src: `//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), repoName && __jsx(_PreviewSync__WEBPACK_IMPORTED_MODULE_3__["PreviewSync"], _extends({
    repoName,
    loadingElementId
  }, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 22
    }
  }))), __jsx(_PreviewLoading__WEBPACK_IMPORTED_MODULE_4__["PreviewLoading"], {
    id: loadingElementId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/PreviewLoading.tsx":
/*!***************************************!*\
  !*** ./components/PreviewLoading.tsx ***!
  \***************************************/
/*! exports provided: PreviewLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewLoading", function() { return PreviewLoading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/PreviewLoading.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const PreviewLoading = ({
  id
}) => {
  return __jsx("div", _extends({
    id
  }, {
    "aria-hidden": "true",
    style: {
      display: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    tabIndex: -1,
    "data-micromodal-close": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-1-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("h2", {
    id: "modal-1-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Loading prismic preview mode..."), __jsx("button", {
    "aria-label": "Close modal",
    "data-micromodal-close": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  })), __jsx("div", {
    id: "modal-1-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Just hold on a second..."))));
};

/***/ }),

/***/ "./components/PreviewSync.tsx":
/*!************************************!*\
  !*** ./components/PreviewSync.tsx ***!
  \************************************/
/*! exports provided: PreviewSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewSync", function() { return PreviewSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/PreviewSync.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PreviewSync = ({
  repoName,
  loadingElementId
}) => __jsx("script", {
  lang: "javascript",
  dangerouslySetInnerHTML: {
    __html: `
        (function syncPrismicAndNextPreviews() {

          function getCookieValue(key) {              
            const cookieMatcher = new RegExp("(?:(?:^|.*;\\\\s*)" + key + "\\\\s*\\\\=\\\\s*([^;]*).*$)|^.*$");
            return document.cookie.replace(cookieMatcher, \"$1\");
          }
          
          const prismicCookieValue = getCookieValue("io.prismic.preview");            
          const decodedCookieValue = decodeURIComponent(prismicCookieValue);            
          const prismic = decodedCookieValue !== "" ? JSON.parse(decodedCookieValue) : {};            
          const prismicSiteKey = "${repoName}.prismic.io";
          const prismicSite = prismic[prismicSiteKey];
                             
          const isEntering = getCookieValue("expectPrismicPreview") === "entering";
          const isEntered = getCookieValue("expectPrismicPreview") === "entered";
          const hasPrismicPreview = !!prismicSite && !!prismicSite.preview;
          
          if (hasPrismicPreview) {
            if (isEntering) {                
              // Set entered in cookie here.
              document.cookie = "expectPrismicPreview=entered; path=/";
              console.log('Entered prismic preview mode...');
            }
            else if (isEntered) {
              console.log('Currently in prismic preview mode...');
            }
            else {
              console.log('Nextjs preview was deactivated by the user or expired, but prismic preview is still activated.');                
              console.log('Reactivating nextjs preview...');
              window.location.replace('/api/preview?token='+encodeURIComponent(prismicSite.preview));
            }
          }
          else {
            if (isEntering) {
              console.log('Waiting to enter prismic preview mode...');                
              
              ${loadingElementId && `
                document.addEventListener("DOMContentLoaded", function(event) { 
                  const loader = document.getElementById("${loadingElementId}")
                  console.log(loader);
                  if(loader) {
                    loader.style.display = "block";
                  }  
                });
              `}

            }
            else if (isEntered) {
              console.log('Prismic preview was deactivated by the user or expired, but nextjs preview is still activated.');
              console.log('Deactivating nextjs preview...');                
              window.location.replace('/api/preview-clear');                
            }
            else {
              // console.log('In static viewing mode.');
              // Do nothing.
            }
          }
        })();        
        `
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 92
  }
});

/***/ }),

/***/ "./components/Title.tsx":
/*!******************************!*\
  !*** ./components/Title.tsx ***!
  \******************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashBox */ "./components/DashBox.tsx");
/* harmony import */ var _utils_richText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/richText */ "./utils/richText.tsx");
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/Title.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_DashBox__WEBPACK_IMPORTED_MODULE_2__["DashColumn"]).withConfig({
  displayName: "Title__Container",
  componentId: "sc-1q8zlqt-0"
})(["justify-content:center;"]);
const Title = (_ref) => {
  let {
    values
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["values"]);

  return __jsx(Container, _extends({}, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), Object(_utils_richText__WEBPACK_IMPORTED_MODULE_3__["richText"])(values));
};

/***/ }),

/***/ "./graphql/__generated__/index.tsx":
/*!*****************************************!*\
  !*** ./graphql/__generated__/index.tsx ***!
  \*****************************************/
/*! exports provided: SortArticley, SortDocumentsBy, SortHomey, SortSectiony, ArticlesDocument, ArticlesComponent, withArticles, HomeDocument, HomeComponent, withHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortArticley", function() { return SortArticley; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDocumentsBy", function() { return SortDocumentsBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortHomey", function() { return SortHomey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortSectiony", function() { return SortSectiony; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesDocument", function() { return ArticlesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withArticles", function() { return withArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDocument", function() { return HomeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHome", function() { return withHome; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-components */ "@apollo/react-components");
/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hoc */ "@apollo/react-hoc");
/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/graphql/__generated__/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





let SortArticley;

(function (SortArticley) {
  SortArticley["MetaFirstPublicationDateAsc"] = "meta_firstPublicationDate_ASC";
  SortArticley["MetaFirstPublicationDateDesc"] = "meta_firstPublicationDate_DESC";
  SortArticley["MetaLastPublicationDateAsc"] = "meta_lastPublicationDate_ASC";
  SortArticley["MetaLastPublicationDateDesc"] = "meta_lastPublicationDate_DESC";
  SortArticley["ArticleDateAsc"] = "articleDate_ASC";
  SortArticley["ArticleDateDesc"] = "articleDate_DESC";
  SortArticley["HighlightAsc"] = "highlight_ASC";
  SortArticley["HighlightDesc"] = "highlight_DESC";
})(SortArticley || (SortArticley = {}));

let SortDocumentsBy;

(function (SortDocumentsBy) {
  SortDocumentsBy["MetaFirstPublicationDateAsc"] = "meta_firstPublicationDate_ASC";
  SortDocumentsBy["MetaFirstPublicationDateDesc"] = "meta_firstPublicationDate_DESC";
  SortDocumentsBy["MetaLastPublicationDateAsc"] = "meta_lastPublicationDate_ASC";
  SortDocumentsBy["MetaLastPublicationDateDesc"] = "meta_lastPublicationDate_DESC";
})(SortDocumentsBy || (SortDocumentsBy = {}));

let SortHomey;

(function (SortHomey) {
  SortHomey["MetaFirstPublicationDateAsc"] = "meta_firstPublicationDate_ASC";
  SortHomey["MetaFirstPublicationDateDesc"] = "meta_firstPublicationDate_DESC";
  SortHomey["MetaLastPublicationDateAsc"] = "meta_lastPublicationDate_ASC";
  SortHomey["MetaLastPublicationDateDesc"] = "meta_lastPublicationDate_DESC";
  SortHomey["HomepageTitleAsc"] = "homepageTitle_ASC";
  SortHomey["HomepageTitleDesc"] = "homepageTitle_DESC";
  SortHomey["HeaderLeftTitleAsc"] = "header_left_title_ASC";
  SortHomey["HeaderLeftTitleDesc"] = "header_left_title_DESC";
  SortHomey["HeaderLeftRichTextAsc"] = "header_left_rich_text_ASC";
  SortHomey["HeaderLeftRichTextDesc"] = "header_left_rich_text_DESC";
  SortHomey["HeaderRightTitleAsc"] = "header_right_title_ASC";
  SortHomey["HeaderRightTitleDesc"] = "header_right_title_DESC";
  SortHomey["HeaderRightRichTextAsc"] = "header_right_rich_text_ASC";
  SortHomey["HeaderRightRichTextDesc"] = "header_right_rich_text_DESC";
})(SortHomey || (SortHomey = {}));

let SortSectiony;

(function (SortSectiony) {
  SortSectiony["MetaFirstPublicationDateAsc"] = "meta_firstPublicationDate_ASC";
  SortSectiony["MetaFirstPublicationDateDesc"] = "meta_firstPublicationDate_DESC";
  SortSectiony["MetaLastPublicationDateAsc"] = "meta_lastPublicationDate_ASC";
  SortSectiony["MetaLastPublicationDateDesc"] = "meta_lastPublicationDate_DESC";
  SortSectiony["SectionTitleAsc"] = "section_title_ASC";
  SortSectiony["SectionTitleDesc"] = "section_title_DESC";
  SortSectiony["ColumnAsc"] = "column_ASC";
  SortSectiony["ColumnDesc"] = "column_DESC";
})(SortSectiony || (SortSectiony = {}));

const ArticlesDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Articles($after: String) {
  allArticles(after: $after) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        body {
          ... on ArticleBodyHtml {
            primary {
              html_rich_text
            }
            type
          }
          ... on ArticleBodyVimeo {
            primary {
              vimeo_embed
              vimeo_link_text
              vimeo_thumbnail_image
            }
            type
          }
          ... on ArticleBodyYoutube {
            primary {
              youtube_embed
              youtube_link_text
              youtube_thumbnail_image
            }
            type
          }
          ... on ArticleBodySoundcloud {
            primary {
              soundcloud_embed
            }
            type
          }
          ... on ArticleBodyImage {
            primary {
              image_link_text
              image_file
              image_text_before
              image_text_below
            }
            type
          }
          ... on ArticleBodyLink {
            primary {
              link_text
              link_text_after
              link_text_before
              link_thumbnail
              link_url {
                _linkType
              }
            }
            type
          }
        }
        articleDate
        _meta {
          id
        }
        highlight
        section {
          ... on Section {
            _meta {
              id
            }
          }
        }
      }
    }
  }
}
    `;
const ArticlesComponent = props => __jsx(_apollo_react_components__WEBPACK_IMPORTED_MODULE_2__["Query"], _extends({
  query: ArticlesDocument
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 770,
    columnNumber: 7
  }
}));
function withArticles(operationOptions) {
  return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__["withQuery"](ArticlesDocument, _objectSpread({
    alias: 'articles'
  }, operationOptions));
}
;
const HomeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Home {
  allHomes {
    edges {
      node {
        homepageTitle
        header_left_rich_text
        header_left_title
        header_right_rich_text
        header_right_title
        column1_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
        column2_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
        column3_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
        column4_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
        column5_sections {
          section {
            ... on Section {
              section_title
              _meta {
                id
              }
            }
          }
        }
      }
    }
  }
}
    `;
const HomeComponent = props => __jsx(_apollo_react_components__WEBPACK_IMPORTED_MODULE_2__["Query"], _extends({
  query: HomeDocument
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 853,
    columnNumber: 7
  }
}));
function withHome(operationOptions) {
  return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__["withQuery"](HomeDocument, _objectSpread({
    alias: 'home'
  }, operationOptions));
}
;

/***/ }),

/***/ "./layouts/index.tsx":
/*!***************************!*\
  !*** ./layouts/index.tsx ***!
  \***************************/
/*! exports provided: HL, HR, HT, HH, C1, C2, C3, C4, C5, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HL", function() { return HL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HR", function() { return HR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HT", function() { return HT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HH", function() { return HH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C1", function() { return C1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C2", function() { return C2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C3", function() { return C3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4", function() { return C4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C5", function() { return C5; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-normalize */ "styled-normalize");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GlobalStyle */ "./components/GlobalStyle.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/media */ "./styles/media.ts");
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/layouts/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const HL = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:hL;"]);
const HR = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:hR;"]);
const HT = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:hT;"]);
const HH = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:hh;"]);
const C1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:c1;"]);
const C2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:c2;"]);
const C3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:c3;"]);
const C4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:c4;"]);
const C5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["grid-area:c5;"]);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.main.withConfig({
  displayName: "layouts__Grid",
  componentId: "sc-1knwqih-0"
})(["display:grid;grid-template-areas:\"hL hT hT hT hR\" \"hh hh hh hh hh\" \"c1 c2 c3 c4 c5\";grid-template-columns:repeat(5,1fr);grid-template-rows:120px 3px;", " max-width:960px;min-height:100%;margin:0px auto;padding:0;"], _styles_media__WEBPACK_IMPORTED_MODULE_6__["mq"].lt.md`
    grid-template-areas:
      "hT hT"
      "hL hR"
      "hh hh"
      "c1 c1"
      "c2 c2"
      "c3 c3"
      "c4 c4"
      "c5 c5";
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 120px 120px 3px repeat(5, 1fr);
  `);
/**
 * Default layout component
 */

const DefaultLayout = ({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_normalize__WEBPACK_IMPORTED_MODULE_3__["Normalize"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }
}), __jsx(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__["GlobalStyle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }
}), __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }
}), __jsx(Grid, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }
}, " ", children, " "), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getPrismicClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getPrismicClient */ "./utils/getPrismicClient.ts");
/* harmony import */ var _graphql_generated___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/__generated__ */ "./graphql/__generated__/index.tsx");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts */ "./layouts/index.tsx");
/* harmony import */ var _utils_getHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getHeader */ "./utils/getHeader.ts");
/* harmony import */ var _utils_getColumnSections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getColumnSections */ "./utils/getColumnSections.ts");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/media */ "./styles/media.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Title */ "./components/Title.tsx");
/* harmony import */ var _components_DashBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/DashBox */ "./components/DashBox.tsx");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-resize-detector */ "react-resize-detector");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_resize_detector__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Column__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Column */ "./components/Column.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















const Column1 = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_Column__WEBPACK_IMPORTED_MODULE_13__["Column"]).withConfig({
  displayName: "pages__Column1",
  componentId: "sc-14ngk06-0"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["C1"]);
const Column2 = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_Column__WEBPACK_IMPORTED_MODULE_13__["Column"]).withConfig({
  displayName: "pages__Column2",
  componentId: "sc-14ngk06-1"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["C2"]);
const Column3 = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_Column__WEBPACK_IMPORTED_MODULE_13__["Column"]).withConfig({
  displayName: "pages__Column3",
  componentId: "sc-14ngk06-2"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["C3"]);
const Column4 = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_Column__WEBPACK_IMPORTED_MODULE_13__["Column"]).withConfig({
  displayName: "pages__Column4",
  componentId: "sc-14ngk06-3"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["C4"]);
const Column5 = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_Column__WEBPACK_IMPORTED_MODULE_13__["Column"]).withConfig({
  displayName: "pages__Column5",
  componentId: "sc-14ngk06-4"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["C5"]);
const HeaderLeft = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_Header__WEBPACK_IMPORTED_MODULE_8__["Header"]).withConfig({
  displayName: "pages__HeaderLeft",
  componentId: "sc-14ngk06-5"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["HL"]);
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_Title__WEBPACK_IMPORTED_MODULE_9__["Title"]).withConfig({
  displayName: "pages__HeaderTitle",
  componentId: "sc-14ngk06-6"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["HT"]);
const HeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_Header__WEBPACK_IMPORTED_MODULE_8__["Header"]).withConfig({
  displayName: "pages__HeaderRight",
  componentId: "sc-14ngk06-7"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["HR"]);
const Horizontal = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_components_DashBox__WEBPACK_IMPORTED_MODULE_10__["DashRow"]).withConfig({
  displayName: "pages__Horizontal",
  componentId: "sc-14ngk06-8"
})(["", ""], _layouts__WEBPACK_IMPORTED_MODULE_3__["HH"]);

const Index = props => {
  const {
    home,
    articles
  } = props;
  const header = Object(_utils_getHeader__WEBPACK_IMPORTED_MODULE_4__["getHeader"])(home);
  if (!header) return null;
  const articlesBySectionId = Object(_utils_getColumnSections__WEBPACK_IMPORTED_MODULE_5__["getArticlesBySectionId"])(articles);
  const column1Sections = Object(_utils_getColumnSections__WEBPACK_IMPORTED_MODULE_5__["getColumnSections"])(articlesBySectionId, home.column1_sections);
  const column2Sections = Object(_utils_getColumnSections__WEBPACK_IMPORTED_MODULE_5__["getColumnSections"])(articlesBySectionId, home.column2_sections);
  const column3Sections = Object(_utils_getColumnSections__WEBPACK_IMPORTED_MODULE_5__["getColumnSections"])(articlesBySectionId, home.column3_sections);
  const column4Sections = Object(_utils_getColumnSections__WEBPACK_IMPORTED_MODULE_5__["getColumnSections"])(articlesBySectionId, home.column4_sections);
  const column5Sections = Object(_utils_getColumnSections__WEBPACK_IMPORTED_MODULE_5__["getColumnSections"])(articlesBySectionId, home.column5_sections);
  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_6__["useMediaQuery"])({
    query: _styles_media__WEBPACK_IMPORTED_MODULE_7__["lt"].md
  });
  const {
    0: c1Height,
    1: setC1Height
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: c2Height,
    1: setC2Height
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: c3Height,
    1: setC3Height
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: c4Height,
    1: setC4Height
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: c5Height,
    1: setC5Height
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(HeaderLeft, {
    values: header.left,
    dash: {
      right: c1Height >= c2Height
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx(HeaderTitle, {
    values: header.title,
    dash: {
      left: !isMobile && c2Height > c1Height,
      bottom: isMobile,
      right: c4Height >= c5Height && !isMobile
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx(HeaderRight, {
    values: header.right,
    dash: {
      left: c5Height > c4Height
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }), __jsx(Horizontal, {
    dash: {
      bottom: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_11___default.a, {
    handleHeight: true,
    querySelector: "#column-1-content",
    onResize: (width, height) => setC1Height(height),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_11___default.a, {
    handleHeight: true,
    querySelector: "#column-2-content",
    onResize: (width, height) => setC2Height(height),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_11___default.a, {
    handleHeight: true,
    querySelector: "#column-3-content",
    onResize: (width, height) => setC3Height(height),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_11___default.a, {
    handleHeight: true,
    querySelector: "#column-4-content",
    onResize: (width, height) => setC4Height(height),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(react_resize_detector__WEBPACK_IMPORTED_MODULE_11___default.a, {
    handleHeight: true,
    querySelector: "#column-5-content",
    onResize: (width, height) => setC5Height(height),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx(Column1, _extends({
    contentId: "column-1-content"
  }, {
    isMobile
  }, {
    dash: {
      top: false,
      right: c1Height >= c2Height && !isMobile
    },
    values: column1Sections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })), __jsx(Column2, _extends({
    contentId: "column-2-content"
  }, {
    isMobile
  }, {
    dash: {
      top: false,
      left: c2Height > c1Height,
      right: c2Height >= c3Height && !isMobile
    },
    values: column2Sections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  })), __jsx(Column3, _extends({
    contentId: "column-3-content"
  }, {
    isMobile
  }, {
    dash: {
      top: false,
      left: c3Height > c2Height,
      right: c3Height >= c4Height && !isMobile
    },
    values: column3Sections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })), __jsx(Column4, _extends({
    contentId: "column-4-content"
  }, {
    isMobile
  }, {
    dash: {
      top: false,
      left: c4Height > c3Height,
      right: c4Height >= c5Height && !isMobile
    },
    values: column4Sections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })), __jsx(Column5, _extends({
    contentId: "column-5-content"
  }, {
    isMobile
  }, {
    dash: {
      top: false,
      left: c5Height > c4Height
    },
    values: column5Sections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  })));
};

const getStaticProps = async context => {
  var _homeQuery$allHomes, _homeQuery$allHomes$e, _homeQuery$allHomes$e2, _articlesQuery$allArt3;

  const {
    data: homeQuery
  } = await _utils_getPrismicClient__WEBPACK_IMPORTED_MODULE_1__["prismicClient"].query({
    query: _graphql_generated___WEBPACK_IMPORTED_MODULE_2__["HomeDocument"],
    fetchPolicy: 'no-cache',
    context: context.previewData
  });
  const articlesQuery = {};

  do {
    var _articlesQuery$allArt, _articlesQuery$allArt2;

    const last = (_articlesQuery$allArt = articlesQuery.allArticles) === null || _articlesQuery$allArt === void 0 ? void 0 : (_articlesQuery$allArt2 = _articlesQuery$allArt.pageInfo) === null || _articlesQuery$allArt2 === void 0 ? void 0 : _articlesQuery$allArt2.endCursor;
    const {
      data
    } = await _utils_getPrismicClient__WEBPACK_IMPORTED_MODULE_1__["prismicClient"].query({
      query: _graphql_generated___WEBPACK_IMPORTED_MODULE_2__["ArticlesDocument"],
      fetchPolicy: 'no-cache',
      variables: {
        after: last || ''
      },
      context: context.previewData
    });

    lodash__WEBPACK_IMPORTED_MODULE_14___default.a.mergeWith(articlesQuery, data, (obj, src) => {
      if (!(Array.isArray(obj) && Array.isArray(src))) return undefined;
      return obj.concat(src);
    });
  } while (articlesQuery.allArticles.pageInfo.hasNextPage);

  const props = {
    home: (_homeQuery$allHomes = homeQuery.allHomes) === null || _homeQuery$allHomes === void 0 ? void 0 : (_homeQuery$allHomes$e = _homeQuery$allHomes.edges) === null || _homeQuery$allHomes$e === void 0 ? void 0 : (_homeQuery$allHomes$e2 = _homeQuery$allHomes$e[0]) === null || _homeQuery$allHomes$e2 === void 0 ? void 0 : _homeQuery$allHomes$e2.node,
    articles: ((_articlesQuery$allArt3 = articlesQuery.allArticles.edges) === null || _articlesQuery$allArt3 === void 0 ? void 0 : _articlesQuery$allArt3.map(a => a === null || a === void 0 ? void 0 : a.node)) || []
  };
  homeQuery.allHomes.edges;
  return {
    props
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

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
const apiEndpoint = 'https://beaufort-asia.cdn.prismic.io/api';
const graphqlEndpoint = 'https://beaufort-asia.cdn.prismic.io/graphql'; // -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private

const accessToken = ''; // -- Link resolution rules
// Manages the url links to internal Prismic documents

const linkResolver = doc => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`;
  }

  return '/';
}; // Additional helper function for Next/Link components

const hrefResolver = doc => {
  if (doc.type === 'post') {
    return '/blog/[uid]';
  }

  return '/';
};

/***/ }),

/***/ "./styles/fonts.ts":
/*!*************************!*\
  !*** ./styles/fonts.ts ***!
  \*************************/
/*! exports provided: fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const base = `/fonts`;
const LetterGothicEot = `${base}/LetterGothic/LetterGothicStdSlanted.eot`;
const LetterGothicSvg = `${base}/LetterGothic/LetterGothicStdSlanted.svg`;
const LetterGothicTtf = `${base}/LetterGothic/LetterGothicStdSlanted.ttf`;
const LetterGothicWoff = `${base}/LetterGothic/LetterGothicStdSlanted.woff`;
const EditionEot = `${base}/Edition/edition_-webfont.eot`;
const EditionSvg = `${base}/Edition/edition_-webfont.svg`;
const EditionTtf = `${base}/Edition/edition_-webfont.ttf`;
const EditionWoff = `${base}/Edition/edition_-webfont.woff`;
const LucidaConsoleEot = `${base}/LucidaConsole/LucidaConsole.eot`;
const LucidaConsoleSvg = `${base}/LucidaConsole/LucidaConsole.svg`;
const LucidaConsoleTtf = `${base}/LucidaConsole/LucidaConsole.ttf`;
const LucidaConsoleWoff = `${base}/LucidaConsole/LucidaConsole.woff`;
const fonts = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@font-face{font-family:'LetterGothicSlanted';src:url('", "');src:url('", "#iefix') format('embedded-opentype'),url('", "') format('woff'),url('", "') format('truetype'),url('", "#LetterGothicSlanted') format('svg');}@font-face{font-family:'EditionRegular';src:url('", "');src:url('", "#iefix') format('embedded-opentype'),url('", "') format('woff'),url('", "') format('truetype'),url('", "#EditionRegular') format('svg');}@font-face{font-family:'LucidaConsole';src:url('", "');src:url('", "#iefix') format('embedded-opentype'),url('", "') format('woff'),url('", "') format('truetype'),url('", "#LucidaConsole') format('svg');}"], LetterGothicEot, LetterGothicEot, LetterGothicWoff, LetterGothicTtf, LetterGothicSvg, EditionEot, EditionEot, EditionWoff, EditionTtf, EditionSvg, LucidaConsoleEot, LucidaConsoleEot, LucidaConsoleWoff, LucidaConsoleTtf, LucidaConsoleSvg);

/***/ }),

/***/ "./styles/media.ts":
/*!*************************!*\
  !*** ./styles/media.ts ***!
  \*************************/
/*! exports provided: gt, lt, is, mq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mq", function() { return mq; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const bp = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const em = bp => `${bp / 16}em`;

const minw = bp => `(min-width: ${em(bp)})`;

const maxw = bp => `(max-width: ${em(bp)})`;

const gt = {
  xs: minw(bp.sm + 1),
  sm: minw(bp.md + 1),
  md: minw(bp.lg + 1),
  lg: minw(bp.xl + 1)
};
const lt = {
  sm: maxw(bp.sm),
  md: maxw(bp.md),
  lg: maxw(bp.lg),
  xl: maxw(bp.xl)
};
const is = {
  xs: lt.sm,
  sm: `${gt.xs} and ${lt.md}`,
  md: `${gt.sm} and ${lt.lg}`,
  lg: `${gt.md} and ${lt.xl}`,
  xl: gt.lg
};

const build = queries => Object.keys(queries).reduce((acc, label) => {
  acc[label] = (strings, ...interpolations) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media ", "{", "}"], queries[label], Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(strings, ...interpolations));

  return acc;
}, {});

const mq = _objectSpread({}, build(is), {
  gt: build(gt),
  lt: build(lt)
});

/***/ }),

/***/ "./styles/typography.ts":
/*!******************************!*\
  !*** ./styles/typography.ts ***!
  \******************************/
/*! exports provided: typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const typography = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["h1{font-family:EditionRegular;font-size:120px;letter-spacing:25px;font-weight:400;text-transform:uppercase;margin:0;}h2{font-family:LetterGothicSlanted,LucidaConsole;font-size:25px;letter-spacing:-3px;text-transform:uppercase;margin:0;font-weight:400;}h3{font-family:LucidaConsole;font-size:12px;text-transform:uppercase;letter-spacing:-1;font-weight:400;}h4,h5,h6,body{font-family:LucidaConsole;font-size:10px;letter-spacing:-1;font-weight:400;}"]);

/***/ }),

/***/ "./utils/getColumnSections.ts":
/*!************************************!*\
  !*** ./utils/getColumnSections.ts ***!
  \************************************/
/*! exports provided: getArticlesBySectionId, exists, getColumnSections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticlesBySectionId", function() { return getArticlesBySectionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnSections", function() { return getColumnSections; });
// import { HomeQuery, HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Section, HomeQuery_prismic_allHomes_edges_node_column1_sections, HomeQuery_prismic_allArticles_edges, HomeQuery_prismic_allHomes_edges_node_column2_sections, HomeQuery_prismic_allHomes_edges_node_column3_sections, HomeQuery_prismic_allHomes_edges_node_column4_sections, HomeQuery_prismic_allHomes_edges_node_column5_sections } from "../templates/home/HomeQuery";
const fromYesNo = str => {
  if (!str) return false;
  return str.toLowerCase() === "yes";
};

const getArticlesBySectionId = articles => {
  const articlesBySectionId = articles.reduce((acc, article) => {
    if (!article) return acc;
    const sectionLink = article.section;

    if (sectionLink === null || sectionLink === undefined) {
      console.log(`'section'  not set on Article: `, article);
      return acc;
    }

    const section = sectionLink;
    const sectionId = section._meta.id;
    acc[sectionId] = [...(acc[sectionId] || []), article];
    return acc;
  }, {}) || {};
  return articlesBySectionId;
};
const exists = value => !!value;
const getColumnSections = (articlesBySectionId, columnSections) => {
  return columnSections.map(columnSection => columnSection.section).filter(exists).map(section => {
    return {
      id: section._meta.id,
      title: section.section_title,
      articles: (articlesBySectionId[section._meta.id] || []).map(article => {
        var _article$body;

        const art = {
          id: article._meta.id,
          date: new Date(article.articleDate),
          highlight: fromYesNo(article.highlight),
          slices: ((_article$body = article.body) === null || _article$body === void 0 ? void 0 : _article$body.map(slice => {
            const {
              primary,
              type
            } = slice;

            switch (type) {
              case "html":
                {
                  const {
                    html_rich_text
                  } = primary;
                  const htmlSlice = {
                    type: "html",
                    html_rich_text
                  };
                  return htmlSlice;
                }

              case "vimeo":
                {
                  const {
                    vimeo_link_text,
                    vimeo_embed,
                    vimeo_thumbnail_image
                  } = primary;
                  const vimeoSlice = {
                    type: "vimeo",
                    vimeo_embed,
                    vimeo_link_text,
                    vimeo_thumbnail_image
                  };
                  return vimeoSlice;
                }

              case "link":
                {
                  const {
                    link_text_before,
                    link_text,
                    link_url,
                    link_thumbnail,
                    link_text_after
                  } = primary;
                  const linkSlice = {
                    type: "link",
                    link_text_before,
                    link_text,
                    link_url,
                    link_thumbnail,
                    link_text_after
                  };
                  return linkSlice;
                }

              case "image":
                {
                  const {
                    image_file,
                    image_link_text,
                    image_text_after,
                    image_text_before
                  } = primary;
                  const linkSlice = {
                    type: "image",
                    image_file,
                    image_link_text,
                    image_text_after,
                    image_text_before
                  };
                  return linkSlice;
                }

              default:
                throw "Unrecognised slice type: " + type;
            }
          }).filter(s => !!s)) || []
        };
        return art;
      }) || []
    };
  });
}; // export const getColumnSections = (data: HomeQuery, column: number): ISection[] =>
//     data.prismic.allSections!.edges!.map(edge => edge!.node!)
//         .filter(section => section.column === column.toString())
//         .map(section => {
//             return {
//                 title: section.section_title,
//                 articles: section.section_articles?.filter(sa => !!sa.section_article)
//                     .map(sa => sa.section_article)
//                     .map(link => (link as any)._meta.id)
//                     .map(id => data.prismic.allArticles.edges?.find(article => article?.node._meta.id === id))
//                     .map(article => {
//                         const node = article!.node;
//                         console.log(node);
//                         const art: IArticle = {
//                             date: new Date(node.articleDate),
//                             highlight: fromYesNo(node.highlight),
//                             slices: node.body?.map(slice => {
//                                 const { primary, type } = slice;
//                                 console.log(primary);
//                                 switch (type) {
//                                     case ("html"): {
//                                         const { html_rich_text } = primary as any;
//                                         const htmlSlice: IHtmlSlice = {
//                                             type: "html",
//                                             html_rich_text
//                                         }
//                                         return htmlSlice;
//                                     }
//                                     default: throw "Unrecognised slice type: " + type;
//                                 }
//                             }).filter(s => !!s) as any || []
//                         }
//                         return art;
//                     }) || []
//             }
//         });

/***/ }),

/***/ "./utils/getHeader.ts":
/*!****************************!*\
  !*** ./utils/getHeader.ts ***!
  \****************************/
/*! exports provided: getHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
const getHeader = home => {
  if (!home) return undefined;
  const {
    homepageTitle,
    header_left_title,
    header_left_rich_text,
    header_right_title,
    header_right_rich_text
  } = home;
  const header = {
    title: homepageTitle,
    left: {
      title: header_left_title,
      body: header_left_rich_text
    },
    right: {
      title: header_right_title,
      body: header_right_rich_text
    }
  };
  return header;
};

/***/ }),

/***/ "./utils/getPrismicClient.ts":
/*!***********************************!*\
  !*** ./utils/getPrismicClient.ts ***!
  \***********************************/
/*! exports provided: prismicClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prismicClient", function() { return prismicClient; });
/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prismic-configuration */ "./prismic-configuration.ts");
/* harmony import */ var apollo_link_prismic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-prismic */ "apollo-link-prismic");
/* harmony import */ var apollo_link_prismic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_prismic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);




const link = new apollo_link_prismic__WEBPACK_IMPORTED_MODULE_1__["PrismicLink"]({
  uri: _prismic_configuration__WEBPACK_IMPORTED_MODULE_0__["graphqlEndpoint"]
});
const prismicClient = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
  link,
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]()
});

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prismic-configuration */ "./prismic-configuration.ts");
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/utils/richText.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const richText = rich_text_field => __jsx(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
  linkResolver: _prismic_configuration__WEBPACK_IMPORTED_MODULE_2__["linkResolver"],
  render: rich_text_field,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 51
  }
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/martaver/Projects/beaufort-asia/www/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@apollo/react-components":
/*!*******************************************!*\
  !*** external "@apollo/react-components" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-components");

/***/ }),

/***/ "@apollo/react-hoc":
/*!************************************!*\
  !*** external "@apollo/react-hoc" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hoc");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-prismic":
/*!**************************************!*\
  !*** external "apollo-link-prismic" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-prismic");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prismic-reactjs":
/*!**********************************!*\
  !*** external "prismic-reactjs" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-resize-detector":
/*!****************************************!*\
  !*** external "react-resize-detector" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map