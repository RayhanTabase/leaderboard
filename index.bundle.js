/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Gluten:wght@600;700&family=Lato:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-weight: 600;\\r\\n  font-family: \\\"Gluten\\\", cursive;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: linear-gradient(#dad7d7, #ececec, #b1b1b1);\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 3rem;\\r\\n}\\r\\n\\r\\ntable {\\r\\n  table-layout: fixed;\\r\\n  word-wrap: break-word;\\r\\n  border: 4px solid black;\\r\\n}\\r\\n\\r\\n#pageHeader {\\r\\n  width: 100%;\\r\\n  display: -webkit-box;\\r\\n  display: flex;\\r\\n  -webkit-box-pack: center;\\r\\n  -ms-flex-pack: center;\\r\\n  justify-content: center;\\r\\n  -webkit-box-align: center;\\r\\n  -ms-flex-align: center;\\r\\n  align-items: center;\\r\\n  padding: 1em;\\r\\n}\\r\\n\\r\\n#pageHeader h1 {\\r\\n  text-align: center;\\r\\n  margin-top: 1em;\\r\\n  margin-bottom: 1.5em;\\r\\n  -webkit-animation-name: rotateleftright;\\r\\n  animation-name: rotateLeftRight;\\r\\n  -webkit-animation-iteration-count: infinite;\\r\\n  animation-iteration-count: infinite;\\r\\n  -webkit-animation-duration: 1s;\\r\\n  animation-duration: 1s;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes rotateLeftRight {\\r\\n  25% {\\r\\n    -webkit-transform: rotate(-10deg);\\r\\n    transform: rotate(-10deg);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    -webkit-transform: rotate(10deg);\\r\\n    transform: rotate(10deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    -webkit-transform: rotate(0);\\r\\n    transform: rotate(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes rotateLeftRight {\\r\\n  25% {\\r\\n    -webkit-transform: rotate(-10deg);\\r\\n    transform: rotate(-10deg);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    -webkit-transform: rotate(10deg);\\r\\n    transform: rotate(10deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    -webkit-transform: rotate(0);\\r\\n    transform: rotate(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n#pageHeader h1:hover {\\r\\n  -webkit-animation: none;\\r\\n  animation: none;\\r\\n}\\r\\n\\r\\n#mainContent {\\r\\n  width: 100%;\\r\\n  min-width: 100%;\\r\\n  max-width: 100%;\\r\\n}\\r\\n\\r\\n#mainContent #scoresContent {\\r\\n  width: 45%;\\r\\n  max-width: 45%;\\r\\n  min-width: 45%;\\r\\n  margin-right: 10%;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n#mainContent #scoresContent #recentScoresHeader {\\r\\n  display: -webkit-box;\\r\\n  display: flex;\\r\\n  -ms-flex-wrap: wrap;\\r\\n  flex-wrap: wrap;\\r\\n  margin-bottom: 2em;\\r\\n  -webkit-box-pack: justify;\\r\\n  -ms-flex-pack: justify;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#mainContent #addScoreContent {\\r\\n  width: 37%;\\r\\n  max-width: 37%;\\r\\n  min-width: 37%;\\r\\n}\\r\\n\\r\\n#mainContent #addScoreContent .addYourScore {\\r\\n  -webkit-animation-name: blink;\\r\\n  animation-name: blink;\\r\\n  -webkit-animation-iteration-count: infinite;\\r\\n  animation-iteration-count: infinite;\\r\\n  -webkit-animation-duration: 1s;\\r\\n  animation-duration: 1s;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes blink {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes blink {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n#notificationMessage {\\r\\n  margin-top: 2em;\\r\\n}\\r\\n\\r\\n#notificationMessage .fadeMessage {\\r\\n  -webkit-animation-name: fademessage;\\r\\n  animation-name: fadeMessage;\\r\\n  -webkit-animation-duration: 3s;\\r\\n  animation-duration: 3s;\\r\\n  opacity: 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes fadeMessage {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes fadeMessage {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.errorMessage {\\r\\n  display: none;\\r\\n  color: red;\\r\\n  margin-top: 2em;\\r\\n}\\r\\n\\r\\n#loadingContent {\\r\\n  display: none;\\r\\n  -webkit-box-pack: center;\\r\\n  -ms-flex-pack: center;\\r\\n  justify-content: center;\\r\\n  -webkit-box-align: center;\\r\\n  -ms-flex-align: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 767px) {\\r\\n  h1 {\\r\\n    font-size: 1.5rem;\\r\\n  }\\r\\n\\r\\n  h2,\\r\\n  h3 {\\r\\n    font-size: 1.5rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apiScores.js":
/*!**************************!*\
  !*** ./src/apiScores.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getScores\": () => (/* binding */ getScores),\n/* harmony export */   \"addScore\": () => (/* binding */ addScore)\n/* harmony export */ });\nconst endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';\r\nconst gameId = 'MmPje8nXd7xg0GvcGIEk';\r\n\r\n// Get all scores from api\r\nconst getScores = async () => {\r\n  const data = await fetch(`${endpoint}/${gameId}/scores`);\r\n  const response = await data.json();\r\n  const results = await response.result;\r\n  const sortedResults = await results.sort((score1, score2) => score2.score - score1.score);\r\n  return sortedResults.slice(0, 10);\r\n};\r\n\r\n// Add score to api\r\nconst addScore = async (user, score) => {\r\n  const data = await fetch(`${endpoint}/${gameId}/scores`,\r\n    {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        user,\r\n        score,\r\n      }),\r\n      mode: 'cors',\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n    });\r\n  const response = await data.json();\r\n  const result = await response.result;\r\n  return result;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://leaderboard/./src/apiScores.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayScore\": () => (/* binding */ displayScore),\n/* harmony export */   \"displayAllScores\": () => (/* binding */ displayAllScores),\n/* harmony export */   \"displayError\": () => (/* binding */ displayError),\n/* harmony export */   \"displayNotification\": () => (/* binding */ displayNotification)\n/* harmony export */ });\n/* harmony import */ var _apiScores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiScores.js */ \"./src/apiScores.js\");\n\r\n\r\nconst scoresTable = document.querySelector('#tableOfScores');\r\n\r\n// Display loading icon\r\nconst loadingContent = (show) => {\r\n  const loadingContent = document.querySelector('#loadingContent');\r\n  if (show) {\r\n    loadingContent.style.display = 'flex';\r\n    return;\r\n  }\r\n  loadingContent.style.display = 'none';\r\n};\r\n\r\n// Display a score on the page\r\nconst displayScore = (score) => {\r\n  const tableRow = document.createElement('tr');\r\n  tableRow.innerHTML = `<td> ${score.user.slice(0, 15)}: ${score.score}</td>`;\r\n  scoresTable.appendChild(tableRow);\r\n};\r\n\r\n// Display all the scores on the page\r\nconst displayAllScores = async () => {\r\n  loadingContent(true);\r\n  scoresTable.innerHTML = '';\r\n  const scores = await (0,_apiScores_js__WEBPACK_IMPORTED_MODULE_0__.getScores)();\r\n  scores.forEach((score) => {\r\n    displayScore(score);\r\n  });\r\n  loadingContent(false);\r\n};\r\n\r\n// Display error message on incorrect form\r\nconst displayError = (display) => {\r\n  const errorMessage = document.querySelector('.errorMessage');\r\n  if (display) errorMessage.style.display = 'block';\r\n  else errorMessage.style.display = 'none';\r\n};\r\n\r\n// Display notifications\r\nconst displayNotification = (message) => {\r\n  const notificationElement = document.querySelector('#notificationMessage');\r\n  const notification = document.createElement('p');\r\n  notification.classList.add('fadeMessage');\r\n  notification.style.color = 'green';\r\n  notification.innerHTML = `${message}`;\r\n  notificationElement.appendChild(notification);\r\n  notification.addEventListener('animationend', () => {\r\n    notification.remove();\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://leaderboard/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _apiScores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiScores.js */ \"./src/apiScores.js\");\n\r\n\r\n\r\n\r\nconst newScoreForm = document.querySelector('#newScoreForm');\r\nconst refreshButton = document.querySelector('#refreshButton');\r\n\r\n// Refresh the scores list\r\nrefreshButton.addEventListener('click', () => {\r\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayAllScores)();\r\n});\r\n\r\n// Submit a new score\r\nnewScoreForm.addEventListener('submit', async (e) => {\r\n  e.preventDefault();\r\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayError)(false);\r\n  const data = new FormData(newScoreForm);\r\n  const user = data.get('user');\r\n  const score = data.get('score');\r\n  if (user.trim() && score.trim()) {\r\n    const message = await (0,_apiScores_js__WEBPACK_IMPORTED_MODULE_2__.addScore)(user, score);\r\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayNotification)(message);\r\n    newScoreForm.reset();\r\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayAllScores)();\r\n  } else (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayError)(true);\r\n});\r\n\r\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayAllScores)();\r\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;