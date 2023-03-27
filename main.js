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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    background-color: rgb(20,20,20);\\r\\n    color: aliceblue;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    font-size: 18px;\\r\\n    font-weight: 500;\\r\\n}\\r\\n\\r\\n.container{\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: grid;\\r\\n    grid-template: minmax(100px, 0.5fr) 5fr 30px / \\r\\n    minmax(300px, 1fr) 6fr;\\r\\n}\\r\\n\\r\\n/*HEADER*/\\r\\n.header-banner{\\r\\n    grid-area: 1 / 1 / 2 / 3;\\r\\n    font-family: 'Exo 2', sans-serif;\\r\\n    font-size: 42px;\\r\\n    font-weight: 700;\\r\\n\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    padding: 5px 30px 5px 10px;\\r\\n}\\r\\n\\r\\n.header-banner > * {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.header-title{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n/*SIDE BANNER*/\\r\\n.side-banner{\\r\\n    grid-area: 2 / 1 / 3 / 2;\\r\\n    background-color: #0b2630;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    row-gap: 30px;\\r\\n\\r\\n    padding: 15px;\\r\\n    letter-spacing: 0.5px;\\r\\n}\\r\\n\\r\\n.folder-header{\\r\\n    border-bottom: solid 1px aliceblue;\\r\\n    font-weight: 700;\\r\\n    font-size: 24px;\\r\\n    padding-bottom: 3px;\\r\\n}\\r\\n\\r\\n.folder-content{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.folder-content > *{\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.home-item{\\r\\n    display: flex;\\r\\n    column-gap: 10px;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.home-item:hover{\\r\\n    background-color: #10323e;\\r\\n    filter: opacity(0.9);\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.side-banner > *{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    row-gap: 20px;\\r\\n}\\r\\n\\r\\n/*SIDE BANNER - ADD PROJECT */\\r\\n#add-project{\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n#project-list{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n#panel-div{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.panel-div-upper{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    row-gap: 5px;\\r\\n}\\r\\n\\r\\n.panel-input-box{\\r\\n    padding: 5px;\\r\\n    border-radius: 5px;\\r\\n    border: none;\\r\\n}\\r\\n\\r\\n.panel-input-box::placeholder{\\r\\n    font-family: 'Exo 2','Roboto', Arial, sans-serif;\\r\\n}\\r\\n\\r\\n#panel-add-button{\\r\\n    background-color: #39ff14;\\r\\n}\\r\\n\\r\\n#panel-add-button:hover, #panel-cancel-button:hover{\\r\\n    opacity: 0.8;\\r\\n}\\r\\n\\r\\n#panel-cancel-button{\\r\\n    background-color: #ff073a;\\r\\n}\\r\\n\\r\\n.panel-buttons{\\r\\n    align-self: center;\\r\\n    display: flex;\\r\\n    column-gap: 5px;\\r\\n}\\r\\n\\r\\n.panel-buttons > * {\\r\\n    padding: 3px 7px;\\r\\n    border-radius: 5px;\\r\\n    border: none;\\r\\n    font-family: 'Exo 2','Roboto', Arial, sans-serif;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/*BODY*/\\r\\n.body-banner{\\r\\n    grid-area: 2 / 2 / 3 / 3;\\r\\n    background-color: #10323e;\\r\\n}\\r\\n\\r\\n.body-project-name{\\r\\n    font-family: 'Exo 2','Roboto', Arial, sans-serif;\\r\\n    font-size: 48px;\\r\\n    color:aliceblue;\\r\\n    background-color:#0b2630;\\r\\n    padding: 15px 10px;\\r\\n}\\r\\n\\r\\n.body-new-task{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    column-gap: 5px;\\r\\n}\\r\\n\\r\\n.Jey-hude-1{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.footer{\\r\\n    grid-area: 3 / 1 / 4 / 3;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    font-family: 'Exo 2', 'Roboto', sans-serif;\\r\\n\\r\\n}\\r\\n\\r\\n.icon-link:link, .icon-link:visited{\\r\\n    color: aquamarine;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-project.js":
/*!****************************!*\
  !*** ./src/add-project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_side_banner_icons_project_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/side-banner/icons-project.png */ \"./src/images/side-banner/icons-project.png\");\n/* harmony import */ var _images_body_icons_new_task_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/body/icons-new-task.png */ \"./src/images/body/icons-new-task.png\");\n\r\n\r\n\r\n\r\nconst addProject = () =>{\r\n    const projectList = document.querySelector('#project-list');\r\n    const panelDiv = document.querySelector('#panel-div');\r\n    const addProject = document.querySelector('#add-project');\r\n    const bodyBanner = document.querySelector('.body-banner');\r\n    \r\n    const panelAddButton = document.createElement('button');\r\n    const panelCancelButton = document.createElement('button');\r\n    let panelInputBox = \"\";\r\n\r\n    let panelDivUpper = \"\";\r\n    let panelLogo = \"\";\r\n    let projectName = \"\";\r\n\r\n    const addProjectPanel = () => {\r\n        panelDivUpper = document.createElement('div');\r\n        panelDivUpper.className = 'panel-div-upper';\r\n        panelDiv.appendChild(panelDivUpper);\r\n\r\n        panelLogo = new Image();\r\n        panelLogo.src = _images_side_banner_icons_project_png__WEBPACK_IMPORTED_MODULE_0__;\r\n        panelLogo.style.width = '50px';\r\n        panelDivUpper.appendChild(panelLogo);\r\n\r\n        panelInputBox = document.createElement('input')\r\n        panelInputBox.setAttribute('class','panel-input-box');\r\n        panelInputBox.type = 'text';\r\n        panelInputBox.placeholder = 'Enter Project Name';\r\n        panelDivUpper.appendChild(panelInputBox);\r\n\r\n        //BUTTONS\r\n        panelAddButton.setAttribute('id','panel-add-button');\r\n        panelCancelButton.setAttribute('id','panel-cancel-button');\r\n\r\n        const panelButtons = document.createElement('div');\r\n        panelButtons.setAttribute('class','panel-buttons')\r\n\r\n        panelButtons.appendChild(panelAddButton);\r\n        panelButtons.appendChild(panelCancelButton);\r\n        panelDiv.appendChild(panelButtons);\r\n\r\n        panelAddButton.innerText = 'Add';\r\n        panelCancelButton.innerText = 'Cancel';\r\n    }\r\n\r\n    const deleteTempPanel = () => {\r\n        while(panelDiv.hasChildNodes()){\r\n            panelDiv.removeChild(panelDiv.firstChild);\r\n        }\r\n    }\r\n\r\n    const createProject = () =>{\r\n        const projectNameInput = panelInputBox.value;\r\n        const projectItem = document.createElement('div');\r\n        const newStr = projectNameInput.replace(/\\s/g,'-')\r\n\r\n        projectItem.className = 'home-item';\r\n        projectItem.setAttribute('id',`${newStr}-${projectList.childElementCount+1}`)\r\n        projectList.appendChild(projectItem);\r\n\r\n        panelLogo = new Image();\r\n        panelLogo.src = _images_side_banner_icons_project_png__WEBPACK_IMPORTED_MODULE_0__;\r\n        panelLogo.style.width = '50px';\r\n        projectItem.appendChild(panelLogo);\r\n\r\n        projectName = document.createElement('span');\r\n        projectName.innerText = projectNameInput;\r\n        projectItem.appendChild(projectName);\r\n\r\n        //CREATION OF INITIAL BODY DIV\r\n        const bodyDiv = document.createElement('div');\r\n        bodyDiv.setAttribute('class',`${newStr}-${projectList.childElementCount}`);\r\n        bodyBanner.appendChild(bodyDiv);\r\n        bodyDiv.style.display = 'flex';\r\n        bodyDiv.style.flexDirection = 'column';\r\n        bodyDiv.style.rowGap = '10px';\r\n\r\n        const bodyProjectName = document.createElement('div');\r\n        bodyProjectName.className = 'body-project-name';\r\n        bodyProjectName.innerText = projectNameInput;\r\n        bodyDiv.appendChild(bodyProjectName)\r\n\r\n        const bodyContent = document.createElement('div');\r\n        bodyContent.setAttribute('class','body-content');\r\n        bodyDiv.appendChild(bodyContent);\r\n\r\n        const newTask = document.createElement('div');\r\n        newTask.setAttribute('class','body-new-task');\r\n        bodyDiv.appendChild(newTask);\r\n\r\n        const newTaskLogo = new Image();\r\n        newTaskLogo.src = _images_body_icons_new_task_png__WEBPACK_IMPORTED_MODULE_1__;\r\n        newTaskLogo.style.width = '30px';\r\n        newTaskLogo.style.filter = 'brightness(0) invert(1)';\r\n        newTask.appendChild(newTaskLogo);\r\n\r\n        const newTaskText = document.createElement('span');\r\n        newTaskText.innerText = 'new task';\r\n        newTask.appendChild(newTaskText);\r\n\r\n        //HIDING THE INITIAL DISPLAY OF DIVS IN THE BODY SECTION\r\n        bodyDiv.style.display = 'none';\r\n\r\n\r\n    }\r\n\r\n    addProject.addEventListener('click', () =>{\r\n        addProjectPanel();\r\n    })\r\n\r\n    panelAddButton.addEventListener('click', ()=>{\r\n        deleteTempPanel();\r\n        createProject();\r\n    })\r\n\r\n    panelCancelButton.addEventListener('click', ()=>{\r\n        deleteTempPanel();\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\n\n//# sourceURL=webpack://to-do-list/./src/add-project.js?");

/***/ }),

/***/ "./src/body-banner.js":
/*!****************************!*\
  !*** ./src/body-banner.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bodyLayout\": () => (/* binding */ bodyLayout),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst bodyLayout = () => {\r\n    const body = document.createElement('section');\r\n    const container = document.querySelector('.container');\r\n    \r\n    body.className = 'body-banner';\r\n    container.appendChild(body);    \r\n}\r\n\r\nconst body = () => {\r\n    const body = document.querySelector('.body-banner');\r\n    const projectList = document.querySelector('#project-list');\r\n\r\n    const selectProject = () => {\r\n        let divSelect = '';\r\n\r\n        projectList.addEventListener('click',(e)=>{\r\n            for (let i=0;i<body.childElementCount;i++){\r\n                body.children[i].style.display = 'none'\r\n            }\r\n\r\n            if (e.target.tagName.toLowerCase() != 'div'){\r\n                divSelect = document.querySelector(`.${e.target.parentNode.id}`);\r\n            }else{\r\n                divSelect = document.querySelector(`.${e.target.id}`);\r\n            }\r\n\r\n\r\n            divSelect.style.display = 'flex';\r\n            //console.log(projectList.childElementCount);\r\n        \r\n        })    \r\n    }\r\n\r\n    selectProject();\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/body-banner.js?");

/***/ }),

/***/ "./src/header-banner.js":
/*!******************************!*\
  !*** ./src/header-banner.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_header_banner_icons_todolist_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/header-banner/icons-todolist.png */ \"./src/images/header-banner/icons-todolist.png\");\n/* harmony import */ var _images_header_banner_icons_menulogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/header-banner/icons-menulogo.png */ \"./src/images/header-banner/icons-menulogo.png\");\n/* harmony import */ var _images_header_banner_john_pogi_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/header-banner/john-pogi.png */ \"./src/images/header-banner/john-pogi.png\");\n\r\n\r\n\r\n\r\nconst layout = () => {\r\n    headerLayout();\r\n    footerLayout();    \r\n}\r\n\r\nconst headerLayout = () => {\r\n    const headerBanner = document.createElement('section');\r\n    const hamburger = document.createElement('div');\r\n    const headerTitle = document.createElement('div');\r\n    const darkMode = document.createElement('div');\r\n    const container = document.querySelector('.container');\r\n    \r\n    headerBanner.className = 'header-banner';\r\n    container.appendChild(headerBanner);\r\n\r\n    hamburger.setAttribute('class','hamburger-logo');\r\n    headerBanner.appendChild(hamburger);\r\n    headerTitle.setAttribute('class','header-title');\r\n    headerBanner.appendChild(headerTitle);\r\n    darkMode.setAttribute('class','dark-mode');\r\n    headerBanner.appendChild(darkMode);\r\n\r\n    const hamburgerIcon = new Image();\r\n    hamburgerIcon.src = _images_header_banner_icons_menulogo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    hamburger.appendChild(hamburgerIcon);\r\n    hamburgerIcon.style.width = '30px';\r\n    hamburgerIcon.style.filter = 'brightness(0) invert(1)';\r\n    hamburgerIcon.style.opacity = '0.85';\r\n\r\n    const todoIcon = new Image();\r\n    todoIcon.src = _images_header_banner_icons_todolist_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    headerTitle.appendChild(todoIcon);\r\n\r\n    const headerTitleText = document.createElement('span');\r\n    headerTitleText.innerText = \"toDoList\";\r\n    headerTitle.appendChild(headerTitleText);\r\n\r\n    const profilePic = new Image();\r\n    profilePic.src = _images_header_banner_john_pogi_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    darkMode.appendChild(profilePic);\r\n    profilePic.style.width = '60px'\r\n    profilePic.style.borderRadius = '30px';\r\n}\r\n\r\nconst footerLayout = () => {\r\n    const container = document.querySelector('.container');\r\n    const footer = document.createElement('section');\r\n\r\n    footer.className = 'footer'\r\n    container.appendChild(footer);\r\n\r\n    const text2 = document.createElement('a');\r\n    text2.className = 'icon-link';\r\n    text2.innerText = 'Icons8'\r\n    text2.href = 'https://icons8.com/'\r\n    text2.target = '_blank';\r\n\r\n    const text1 = document.createElement('span');\r\n    text1.innerText =  '2023 \\u00A9 jeldrint | `Icons by '\r\n    footer.appendChild(text1);\r\n    text1.appendChild(text2);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);\n\n//# sourceURL=webpack://to-do-list/./src/header-banner.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_banner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-banner.js */ \"./src/header-banner.js\");\n/* harmony import */ var _side_banner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-banner.js */ \"./src/side-banner.js\");\n/* harmony import */ var _body_banner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body-banner.js */ \"./src/body-banner.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n \r\n\r\n(0,_header_banner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_side_banner_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_body_banner_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/side-banner.js":
/*!****************************!*\
  !*** ./src/side-banner.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_side_banner_icons_tasks_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/side-banner/icons-tasks.png */ \"./src/images/side-banner/icons-tasks.png\");\n/* harmony import */ var _images_side_banner_icons_today_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/side-banner/icons-today.png */ \"./src/images/side-banner/icons-today.png\");\n/* harmony import */ var _images_side_banner_icons_7days_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/side-banner/icons-7days.png */ \"./src/images/side-banner/icons-7days.png\");\n/* harmony import */ var _images_side_banner_icons_important_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/side-banner/icons-important.png */ \"./src/images/side-banner/icons-important.png\");\n/* harmony import */ var _images_side_banner_icons_add_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/side-banner/icons-add-3.png */ \"./src/images/side-banner/icons-add-3.png\");\n/* harmony import */ var _add_project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-project.js */ \"./src/add-project.js\");\n/* harmony import */ var _body_banner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body-banner.js */ \"./src/body-banner.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst sideBanner = () => {\r\n    (0,_body_banner_js__WEBPACK_IMPORTED_MODULE_6__.bodyLayout)();\r\n    layout();\r\n    (0,_add_project_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n}\r\n\r\nconst layout = () => {\r\n    const side = document.createElement('section');\r\n    const container = document.querySelector('.container');\r\n    \r\n    side.className = 'side-banner';\r\n    container.appendChild(side);\r\n    \r\n    const homeFolder = document.createElement('div');\r\n    const projectFolder = document.createElement('div');\r\n    homeFolder.setAttribute('class','home-folder');\r\n    projectFolder.setAttribute('class','project-folder');\r\n    side.appendChild(homeFolder);\r\n    side.appendChild(projectFolder);\r\n\r\n    //THIS IS THE HOME FOLDER\r\n    const homeFolderHeader = document.createElement('div');\r\n    homeFolderHeader.setAttribute('class', 'folder-header')\r\n    homeFolderHeader.innerText = 'Home'\r\n    homeFolder.appendChild(homeFolderHeader);\r\n\r\n    const homeFolderContent = document.createElement('div');\r\n    homeFolderContent.setAttribute('class','folder-content')\r\n    homeFolder.appendChild(homeFolderContent)\r\n\r\n    const homeFolderAllTasks = document.createElement('div');\r\n    const homeFolderToday = document.createElement('div');\r\n    const homeFolderSevenDays = document.createElement('div');\r\n    const homeFolderImportant = document.createElement('div');\r\n\r\n    homeFolderAllTasks.setAttribute('class','home-item')\r\n    homeFolderToday.setAttribute('class','home-item')\r\n    homeFolderSevenDays.setAttribute('class','home-item')\r\n    homeFolderImportant.setAttribute('class','home-item')\r\n\r\n    homeFolderContent.appendChild(homeFolderAllTasks);\r\n    homeFolderContent.appendChild(homeFolderToday);\r\n    homeFolderContent.appendChild(homeFolderSevenDays);\r\n    homeFolderContent.appendChild(homeFolderImportant);\r\n\r\n    const allTasksImg = new Image();\r\n    allTasksImg.src = _images_side_banner_icons_tasks_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    homeFolderAllTasks.appendChild(allTasksImg);\r\n    allTasksImg.style.width = '50px'\r\n\r\n    const allTasksText = document.createElement('span');\r\n    allTasksText.innerText = 'All Tasks'\r\n    homeFolderAllTasks.appendChild(allTasksText);\r\n\r\n    const todayImg = new Image();\r\n    todayImg.src = _images_side_banner_icons_today_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    homeFolderToday.appendChild(todayImg);\r\n    todayImg.style.width = '50px'\r\n\r\n    const todayText = document.createElement('span');\r\n    todayText.innerText = 'Today'\r\n    homeFolderToday.appendChild(todayText);\r\n    \r\n    const sevenDaysImg = new Image();\r\n    sevenDaysImg.src = _images_side_banner_icons_7days_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    homeFolderSevenDays.appendChild(sevenDaysImg);\r\n    sevenDaysImg.style.width = '50px'\r\n\r\n    const sevenDaysText = document.createElement('span');\r\n    sevenDaysText.innerText = 'Next 7 Days'\r\n    homeFolderSevenDays.appendChild(sevenDaysText);\r\n\r\n    const importantImg = new Image();\r\n    importantImg.src = _images_side_banner_icons_important_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    homeFolderImportant.appendChild(importantImg);\r\n    importantImg.style.width = '50px'\r\n\r\n    const importantText = document.createElement('span');\r\n    importantText.innerText = 'Important'\r\n    homeFolderImportant.appendChild(importantText);\r\n    \r\n    //THIS IS THE PROJECT FOLDER\r\n    const projFolderHeader = document.createElement('div');\r\n    projFolderHeader.setAttribute('class', 'folder-header')\r\n    projFolderHeader.innerText = 'Projects'\r\n    projectFolder.appendChild(projFolderHeader);\r\n\r\n    const projFolderContent = document.createElement('div');\r\n    projFolderContent.setAttribute('id','project-folder-content');\r\n    projFolderContent.className = 'folder-content';\r\n    projectFolder.appendChild(projFolderContent)\r\n\r\n    const projectList = document.createElement('div');\r\n    projectList.setAttribute('id','project-list');\r\n    projFolderContent.appendChild(projectList);\r\n\r\n    const panelDiv = document.createElement('div');\r\n    panelDiv.setAttribute('id','panel-div');\r\n    projFolderContent.appendChild(panelDiv);\r\n\r\n    const addProject = document.createElement('div');\r\n    projFolderContent.appendChild(addProject);\r\n    addProject.setAttribute('id','add-project');\r\n    addProject.className = 'home-item'\r\n\r\n    const addProjImg = new Image();\r\n    addProjImg.src = _images_side_banner_icons_add_3_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    addProject.appendChild(addProjImg);\r\n    addProjImg.style.width = '30px';\r\n    addProjImg.style.filter = 'brightness(0) invert(1)';\r\n    addProjImg.style.opacity = '0.85'\r\n    addProjImg.style.paddingLeft = '10px'\r\n\r\n    const addProjText = document.createElement('span');\r\n    addProjText.innerText = \"Add Project\";\r\n    addProject.appendChild(addProjText);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sideBanner);\n\n//# sourceURL=webpack://to-do-list/./src/side-banner.js?");

/***/ }),

/***/ "./src/images/body/icons-new-task.png":
/*!********************************************!*\
  !*** ./src/images/body/icons-new-task.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b031f2e48afc879ec53.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/body/icons-new-task.png?");

/***/ }),

/***/ "./src/images/header-banner/icons-menulogo.png":
/*!*****************************************************!*\
  !*** ./src/images/header-banner/icons-menulogo.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0d695bf304e7e3f7769.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/header-banner/icons-menulogo.png?");

/***/ }),

/***/ "./src/images/header-banner/icons-todolist.png":
/*!*****************************************************!*\
  !*** ./src/images/header-banner/icons-todolist.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f206df1217f699b8e520.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/header-banner/icons-todolist.png?");

/***/ }),

/***/ "./src/images/header-banner/john-pogi.png":
/*!************************************************!*\
  !*** ./src/images/header-banner/john-pogi.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cfcfab76231d71f45ef6.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/header-banner/john-pogi.png?");

/***/ }),

/***/ "./src/images/side-banner/icons-7days.png":
/*!************************************************!*\
  !*** ./src/images/side-banner/icons-7days.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34896694468bf99e056f.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/side-banner/icons-7days.png?");

/***/ }),

/***/ "./src/images/side-banner/icons-add-3.png":
/*!************************************************!*\
  !*** ./src/images/side-banner/icons-add-3.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25f56a2a0831edd8ae76.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/side-banner/icons-add-3.png?");

/***/ }),

/***/ "./src/images/side-banner/icons-important.png":
/*!****************************************************!*\
  !*** ./src/images/side-banner/icons-important.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"616a3a8e09b7957df49f.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/side-banner/icons-important.png?");

/***/ }),

/***/ "./src/images/side-banner/icons-project.png":
/*!**************************************************!*\
  !*** ./src/images/side-banner/icons-project.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3ab55001a55363e8bc6.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/side-banner/icons-project.png?");

/***/ }),

/***/ "./src/images/side-banner/icons-tasks.png":
/*!************************************************!*\
  !*** ./src/images/side-banner/icons-tasks.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f932485692f26ac7ca8e.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/side-banner/icons-tasks.png?");

/***/ }),

/***/ "./src/images/side-banner/icons-today.png":
/*!************************************************!*\
  !*** ./src/images/side-banner/icons-today.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3702e682fa66e9a600ad.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/side-banner/icons-today.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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