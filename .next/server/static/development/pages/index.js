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
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, "Proudly published with \xA0", __jsx("a", {
  href: "https://prismic.io",
  target: "_blank",
  rel: "noopener noreferrer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, "Prismic")));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prismic-configuration */ "./prismic-configuration.ts");
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/components/Meta.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { reset, globals } from 'styles'

/**
 * Meta data component
 */

const Meta = () => {
  const repoNameArray = /([^\/]+)\.cdn.prismic\.io\/api/.exec(_prismic_configuration__WEBPACK_IMPORTED_MODULE_2__["apiEndpoint"]);
  const repoName = repoNameArray === null || repoNameArray === void 0 ? void 0 : repoNameArray[1];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    defer: true,
    src: `//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("script", {
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
                
                document.addEventListener("DOMContentLoaded", function(event) { 
                  const loader = document.getElementById("modal-1")
                  console.log(loader);
                  if(loader) {
                    loader.style.display = "block";
                  }  
                });

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
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "modal-1",
    "aria-hidden": "true",
    style: {
      display: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("div", {
    tabIndex: -1,
    "data-micromodal-close": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-1-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("h2", {
    id: "modal-1-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Loading prismic preview mode..."), __jsx("button", {
    "aria-label": "Close modal",
    "data-micromodal-close": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  })), __jsx("div", {
    id: "modal-1-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Just hold on a second...")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./getPrismicClient.ts":
/*!*****************************!*\
  !*** ./getPrismicClient.ts ***!
  \*****************************/
/*! exports provided: prismicClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prismicClient", function() { return prismicClient; });
/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prismic-configuration */ "./prismic-configuration.ts");
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

/***/ "./graphql/__generated__/index.tsx":
/*!*****************************************!*\
  !*** ./graphql/__generated__/index.tsx ***!
  \*****************************************/
/*! exports provided: SortArticley, SortDocumentsBy, SortHomey, SortSectiony, HomeDocument, HomeComponent, withHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortArticley", function() { return SortArticley; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDocumentsBy", function() { return SortDocumentsBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortHomey", function() { return SortHomey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortSectiony", function() { return SortSectiony; });
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
    lineNumber: 663,
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/layouts/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * Default layout component
 */

const DefaultLayout = ({
  children
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx("main", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, " ", children, " "), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
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
/* harmony import */ var _getPrismicClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getPrismicClient */ "./getPrismicClient.ts");
/* harmony import */ var _graphql_generated___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/__generated__ */ "./graphql/__generated__/index.tsx");
/* harmony import */ var _utils_richText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/richText */ "./utils/richText.tsx");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts */ "./layouts/index.tsx");
var _jsxFileName = "/Users/martaver/Projects/beaufort-asia/www/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const Home = ({
  greeting
}) => __jsx(_layouts__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 49
  }
}, Object(_utils_richText__WEBPACK_IMPORTED_MODULE_3__["richText"])(greeting));

const getStaticProps = async context => {
  var _result$data$allHomes, _result$data$allHomes2;

  const result = await _getPrismicClient__WEBPACK_IMPORTED_MODULE_1__["prismicClient"].query({
    query: _graphql_generated___WEBPACK_IMPORTED_MODULE_2__["HomeDocument"],
    fetchPolicy: 'no-cache',
    context: context.previewData
  });
  const greeting = (_result$data$allHomes = result.data.allHomes.edges) === null || _result$data$allHomes === void 0 ? void 0 : (_result$data$allHomes2 = _result$data$allHomes[0]) === null || _result$data$allHomes2 === void 0 ? void 0 : _result$data$allHomes2.node.homepageTitle;
  return {
    props: {
      greeting
    }
  };
};
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map