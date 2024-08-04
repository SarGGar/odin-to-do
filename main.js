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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --green: #e0ffcd; \n    --yellow: #fdffcd;\n    --orange: #ffebbb;\n    --red: #ffcab0;\n}\n\nbody {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    padding: 0px;\n    border: 0px;\n    margin: 0px;\n    width: 100vw;\n    height: 100vh;\n}\n\nimg {\n    display:inline-block;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100vh;\n}\n\n#panel {\n    grid-column: 1;\n    background-color: var(--red);\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#dashboard {\n    grid-column: 2;\n    background-color: var(--yellow);\n    padding: 20px;\n    padding-right: 200px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n\n#project-title-section {\n    display: flex;\n    justify-content: space-between;\n}\n\n#new-project, .selectable-project, #new-task {\n    cursor: pointer;\n}\n\n#new-project, #new-task {\n    color: blue;\n}\n\n.panel-header, #new-task {\n    font-weight: bold;\n}\n\n.selectable-project {\n    padding: 20px 5px;\n    border-bottom: 2px solid;\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\n.selectable-project:hover, .item:hover {\n    background: var(--orange)\n}\n\n\n#project-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.name {\n    font-size: 36px;\n    font-weight: bold;\n    text-transform: uppercase;\n}\n\nbutton {\n    width: 80px;\n    padding: 5px 5px;\n    background-color: var(--orange);\n    border-radius: 8px;\n    border: solid 2px;\n}\n\n.button-panel {\n    display: flex;\n    gap: 10px;\n}\n\n#task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 15px\n}\n\n.item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 2px solid;\n    padding: 10px 5px;\n}\n\n#dashboard-header {\n    background-color: var(--red);\n}\n\n#dashboard > div {\n    padding: 10px 20px;\n}\n\n.title {\n    display: flex;\n    gap: 10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-to-do/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-to-do/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StorageManager: () => (/* binding */ StorageManager)\n/* harmony export */ });\nfunction StorageManager() {\n\n    const getProjects = () => Object.keys(localStorage);\n    const getTasks = (project) => getTasksJSON(project);\n    const getTasksJSON = (project) => JSON.parse(localStorage.getItem(project));\n    const getTasksString = (project) => localStorage.getItem(project)\n    const getTask = (project, taskId) => {\n        allTasks = getTasksJSON(project);\n        task = allTasks[taskId];\n        return task;\n    }\n\n    const addTask = (project, task) => {\n        let id = -1;\n        let data = {}\n        if (getProjects().includes(project)) {\n            data = getTasksJSON(project);\n            id = Object.keys(data).length+1;\n            \n        } else {\n            id = 1;\n        }\n        task['id'] = String(id);\n        data[String(id)] = task;\n        localStorage.setItem(project, JSON.stringify(data));\n        return id;\n    }\n\n    const removeProject = (project) => localStorage.removeItem(project);\n    const removeTask = (project, taskId) => {\n        let data = getTasksJSON(project);\n        delete data[taskId];\n\n        localStorage.setItem(project, JSON.stringify(data));\n    }\n\n    const updateTask = (project, task, taskId) => {\n        let data = getTasksJSON(project);\n        data[taskId] = task;\n\n        localStorage.setItem(project, JSON.stringify(data))\n    }\n\n    const updateProjectName = (project, newProject) => {\n        let data = getTasksString(project);\n        removeProject(project)\n\n        if (data !== null) {\n            localStorage.setItem(newProject, data)\n        }\n    }\n\n    return {getProjects, getTasks, getTask, addTask, removeProject, removeTask, updateTask, updateProjectName}\n\n}\n\n\n\n//# sourceURL=webpack://odin-to-do/./src/Storage.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nfunction Task(title) {\n    let description = '';\n    let dueDate = '';\n    let priority = 0;\n    let isCompleted = false;\n    let id = '';\n\n    const updateTitle = (newTitle) => {\n        title = newTitle;\n    }\n    const updateDescription = (text) => {\n        description = text;\n    }\n    const updateDueDate = (dateString) => {\n        dueDate = dateString;\n    }\n    const updateId = (idString) => {\n        id = idString;\n    }\n    const incrPriority = () => {\n        priority = (priority < 3) ? priority+1: priority;\n    }\n    const decrPriority = () => {\n        priority = (priority > 0) ? priority-1: priority;\n    }\n    const updateCompletionStatus = () => {\n        isCompleted = !isCompleted;\n    }\n    const getData = () => {\n        let obj = {title, description, dueDate, priority, isCompleted, id};\n        return obj\n    }\n    const getTitle = () => title;\n    const getId = () => id;\n    const generateFromStorageObject = (object) => {\n        title = object.title\n        description = object.description;\n        dueDate = object.dueDate;\n        priority = object.priority;\n        isCompleted = object.isCompleted;\n        id = object.id;\n    }\n    \n    return {getData, getTitle, getId, updateTitle, updateDescription, updateDueDate, updateId, incrPriority, decrPriority, updateCompletionStatus, generateFromStorageObject}\n}\n\n\n\n\n//# sourceURL=webpack://odin-to-do/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _manageDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manageDOM */ \"./src/manageDOM.js\");\n\n\n\n\n\n\nconst rootStyles = getComputedStyle(document.documentElement);\nconst greenColor = rootStyles.getPropertyValue('--green');\nconst yellowColor = rootStyles.getPropertyValue('--yellow');\nconst orangeColor = rootStyles.getPropertyValue('--orange');\nconst redColor = rootStyles.getPropertyValue('--red');\n\n\nconst projectPanelDomParent = document.querySelector(\"#project-list\")\nconst taskBoardDomParent = document.querySelector('#task-list')\nconst dashboardHeaderDomParent = document.querySelector('#dashboard-header')\n\nconst SM = (0,_Storage__WEBPACK_IMPORTED_MODULE_2__.StorageManager)();\n\nlet allProjects = SM.getProjects();\n\nif (allProjects.length === 0) {\n    allProjects = ['first-project']\n}\n\nlet activeProject = allProjects[0];\nlet activeTasks = loadActiveTasks(activeProject);\n\n\nfunction loadActiveTasks(project) {\n    let activeTasks = {}\n    let lsObject = SM.getTasks(project);\n    if (lsObject !== null) {\n        for (const [key, value] of Object.entries(lsObject)) {\n            let task = (0,_Task__WEBPACK_IMPORTED_MODULE_1__.Task)(value.title);\n            task.generateFromStorageObject(value);\n            activeTasks[key] = task;\n        }\n    }\n    return activeTasks\n}\n\n(0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadProjectPanel)(projectPanelDomParent, allProjects)\ncreateProjectEventHandlers(projectPanelDomParent)\n;(0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadProjectHeader)(dashboardHeaderDomParent, activeProject, activeTasks)\ncreateButtonEventHandlers(dashboardHeaderDomParent)\n;(0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadTaskBoard)(taskBoardDomParent, activeProject, activeTasks)\ncreateButtonEventHandlers(taskBoardDomParent)\n\n\nconst newProjectDiv = document.querySelector('#new-project')\nconst inputDiv = document.querySelector('#project-name-input')\n\nnewProjectDiv.addEventListener('click', showProjectInput)\ninputDiv.addEventListener('keydown', handleProjectInput)\n\nfunction showProjectInput() {\n    newProjectDiv.style.display = 'none';\n    inputDiv.style.display = 'inline-block';\n    inputDiv.focus();\n}\n\nfunction handleProjectInput(event) {\n    if (event.key === 'Enter') {\n        const projectName = event.target.value.trim().toLowerCase().replace(/\\s+/g, '-');\n        if (projectName) {\n            allProjects.push(projectName)\n            ;(0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadProjectPanel)(projectPanelDomParent, allProjects)\n            createProjectEventHandlers(projectPanelDomParent)\n            event.target.value = '';\n        }\n        inputDiv.style.display = 'none';\n        newProjectDiv.style.display = 'inline-block';\n    }\n}\n\nconst newTaskDiv = document.querySelector('#new-task')\nconst inputTaskDiv = document.querySelector('#task-input')\n\nnewTaskDiv.addEventListener('click', showTaskInput)\ninputTaskDiv.addEventListener('keydown', handleTaskInput)\n\nfunction showTaskInput() {\n    newTaskDiv.style.display = 'none';\n    inputTaskDiv.style.display = 'inline-block';\n    inputTaskDiv.focus();\n}\n\nfunction handleTaskInput(event) {\n    if (event.key === 'Enter') {\n        const title = event.target.value.trim();\n        if (title) {\n            let newTask = (0,_Task__WEBPACK_IMPORTED_MODULE_1__.Task)(title);\n            const id = SM.addTask(activeProject, newTask.getData());\n            newTask.updateId(String(id));\n            activeTasks[String(id)] = newTask;\n            event.target.value = '';\n            taskBoardDomParent.textContent = '';\n            updateTaskDashboard()\n        }\n        inputTaskDiv.style.display = 'none';\n        newTaskDiv.style.display = 'inline-block';\n    }\n}\n\nfunction createProjectEventHandlers(domParent) {\n    const children = domParent.children;\n\n    for (const child of children) {\n        child.addEventListener('click', switchProject)\n    }\n}\n\nfunction switchProject(e) {\n    activeProject = e.target.id;\n    activeTasks = loadActiveTasks(activeProject);\n    updateTaskDashboard()\n}\n\nfunction createButtonEventHandlers(domParent) {\n    const children = domParent.getElementsByTagName('BUTTON')\n    for (const child of children) {\n        switch (child.className) {\n            case 'delete-project':\n                child.addEventListener('click', deleteProject)\n                break;\n            case 'delete-item':\n                child.addEventListener('click', deleteItem)\n                break;\n            case 'edit-project':\n                child.addEventListener('click', editProject)\n                break;\n            case 'edit-item':\n                child.addEventListener('click', editItem)\n                break;\n            case 'completed-project':\n                child.addEventListener('click', completedProject)\n                break;\n            case 'completed-item':\n                child.addEventListener('click', completedItem)\n                break;\n        }\n    }\n}\n\nfunction updateEntirePage() {\n    let activeTasks = loadActiveTasks(activeProject);\n    (0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadProjectPanel)(projectPanelDomParent, allProjects)\n    createProjectEventHandlers(projectPanelDomParent)\n    ;(0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadProjectHeader)(dashboardHeaderDomParent, activeProject, activeTasks)\n    createButtonEventHandlers(dashboardHeaderDomParent)\n    ;(0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadTaskBoard)(taskBoardDomParent, activeProject, activeTasks)\n    createButtonEventHandlers(taskBoardDomParent)\n\n}\n\nfunction updateProjectPanel() {\n    (0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadProjectPanel)(projectPanelDomParent, allProjects)\n    createProjectEventHandlers(projectPanelDomParent)\n\n}\n\nfunction updateTaskDashboard() {\n    let activeTasks = loadActiveTasks(activeProject);\n    (0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadProjectHeader)(dashboardHeaderDomParent, activeProject, activeTasks)\n    createButtonEventHandlers(dashboardHeaderDomParent)\n    ;(0,_manageDOM__WEBPACK_IMPORTED_MODULE_3__.loadTaskBoard)(taskBoardDomParent, activeProject, activeTasks)\n    createButtonEventHandlers(taskBoardDomParent)\n\n}\n\nfunction deleteProject(e) {\n    SM.removeProject(activeProject)\n    const index = allProjects.indexOf(activeProject)\n    allProjects.splice(index, 1)\n    if (allProjects.length===0) {\n        allProjects = ['first-project']\n    }\n    activeProject = allProjects[0]\n\n    updateEntirePage()\n}\n\nfunction deleteItem(e) {\n    SM.removeTask(activeProject, Array.from(e.target.parentElement.parentElement.classList)[1])\n    updateTaskDashboard()\n}\n\nfunction editProject(e) {\n    const parentElement = e.target.parentElement.parentElement;\n    const textFirstChild = parentElement.firstChild\n    const currentText = parentElement.firstChild.textContent;\n    const input = document.createElement('input');\n    const taskId = textFirstChild.id;\n    input.type = 'text';\n    input.value = currentText;\n    input.addEventListener('keydown', (event) => {\n        if (event.key === 'Enter') {\n            const newProject = input.value.trim().toLowerCase().replace(/\\s+/g, '-')\n            textFirstChild.textContent = newProject\n            SM.updateProjectName(activeProject, newProject)\n            const index = allProjects.indexOf(activeProject)\n            allProjects[index] = newProject\n            activeProject = allProjects[index];\n            updateEntirePage()\n        }\n    });\n\n    parentElement.firstChild.textContent = ''\n    parentElement.appendChild(input);\n    parentElement.insertBefore(input, parentElement.firstChild)\n    input.focus();\n}\n\nfunction editItem(e) {\n    const parentElement = e.target.parentElement.parentElement;\n    const textFirstChild = parentElement.firstChild\n    const currentText = parentElement.firstChild.textContent;\n    const input = document.createElement('input');\n    const taskId = textFirstChild.id;\n    input.type = 'text';\n    input.value = currentText;\n    input.addEventListener('keydown', (event) => {\n        if (event.key === 'Enter') {\n            textFirstChild.textContent = input.value;\n            activeTasks[taskId].updateTitle(input.value)\n            SM.updateTask(activeProject, activeTasks[taskId].getData(), taskId)\n            parentElement.removeChild(input);\n        }\n    });\n\n    parentElement.firstChild.textContent = ''\n    parentElement.appendChild(input);\n    parentElement.insertBefore(input, parentElement.firstChild)\n    input.focus();\n}\n\nfunction completedProject(e) {\n    console.log(e.target.className)\n    \n}\n\nfunction completedItem(e) {\n    const taskId = Array.from(e.target.parentElement.parentElement.classList)[1]\n    activeTasks[taskId].updateCompletionStatus()\n    SM.updateTask(activeProject, activeTasks[taskId].getData(), taskId)\n    e.target.textContent = e.target.textContent === 'not done'? 'done': 'not done'\n    e.target.style.backgroundColor = e.target.textContent === 'not done'? orangeColor :greenColor\n}\n\n//# sourceURL=webpack://odin-to-do/./src/index.js?");

/***/ }),

/***/ "./src/manageDOM.js":
/*!**************************!*\
  !*** ./src/manageDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewToDo: () => (/* binding */ createNewToDo),\n/* harmony export */   loadProjectHeader: () => (/* binding */ loadProjectHeader),\n/* harmony export */   loadProjectPanel: () => (/* binding */ loadProjectPanel),\n/* harmony export */   loadTaskBoard: () => (/* binding */ loadTaskBoard)\n/* harmony export */ });\n/* harmony import */ var _checkmarks_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkmarks.png */ \"./src/checkmarks.png\");\n\n\n\nconst todoDomParent = document.querySelector('.main-content')\n\nconst rootStyles = getComputedStyle(document.documentElement);\nconst greenColor = rootStyles.getPropertyValue('--green');\n\n\nfunction loadProjectPanel(domParent, projectList) {\n    domParent.textContent = '';\n    for (let i=0; i<projectList.length; i++) {\n        const project = projectList[projectList.length-i-1];\n        const projectDiv = document.createElement(\"div\");\n        projectDiv.classList.add(\"selectable-project\");\n        projectDiv.id = project;\n        const textDiv = document.createElement(\"div\");\n        textDiv.textContent = project;\n        const completedImage = document.createElement(\"img\");\n        completedImage.src = _checkmarks_png__WEBPACK_IMPORTED_MODULE_0__;\n        completedImage.style.width = '30px'\n        completedImage.style.display = 'none'\n        completedImage.classList.add(\"completed-icon\")\n        projectDiv.appendChild(textDiv)\n        projectDiv.appendChild(completedImage)\n        domParent.appendChild(projectDiv);\n    }\n}\n\nfunction loadTaskBoard(domParent, project, tasks) {\n    domParent.textContent = '';\n\n    let taskList = []\n    for (const key in tasks) {\n        taskList.push(tasks[key])\n    }\n    if (tasks == null) {\n        taskList = []\n    }\n\n    createTaskSection(domParent, taskList, project)\n\n}\n\nfunction loadProjectHeader(domParent, project, tasks) {\n    createProjectTitleSection(domParent, project)\n    createInfoDisplay(domParent, Object.keys(tasks).length)\n}\n\nfunction createProjectTitleSection(domParent, project) {\n    domParent.textContent = ''\n\n    const projectTitleDiv = document.createElement(\"div\")\n    projectTitleDiv.id = 'project-title-section'\n\n    const titleDiv = document.createElement(\"div\");\n    titleDiv.classList.add(\"title\")\n    const nameDiv = document.createElement(\"div\");\n    nameDiv.classList.add(\"name\")\n    nameDiv.textContent = project;\n    const completedImage = document.createElement(\"img\");\n    completedImage.src = _checkmarks_png__WEBPACK_IMPORTED_MODULE_0__;\n    completedImage.style.width = '40px'\n    completedImage.style.display = 'none'\n    completedImage.classList.add(\"completed-icon\")\n    titleDiv.appendChild(nameDiv)\n    titleDiv.appendChild(completedImage)\n\n\n    const buttonDiv = document.createElement(\"div\")\n    buttonDiv.classList.add(\"button-panel\")\n    const editButton = addButton('edit', 'edit-project')\n    // const completedButton = addButton('completed', 'completed-project')\n    const deleteButton = addButton('delete', 'delete-project')\n\n    buttonDiv.appendChild(editButton)\n    // buttonDiv.appendChild(completedButton)\n    buttonDiv.appendChild(deleteButton)\n\n\n    projectTitleDiv.appendChild(titleDiv)\n    projectTitleDiv.appendChild(buttonDiv)\n\n    domParent.appendChild(projectTitleDiv)\n}\n\nfunction createInfoDisplay(domParent, numberTodos) {\n    const taskCount = document.createElement(\"div\")\n    taskCount.classList.add(\"details\")\n    taskCount.textContent= \"# To Do's: \" + String(numberTodos)\n\n    domParent.appendChild(taskCount)\n}\n\nfunction createNewToDo(domParent) {\n    const newDiv = document.createElement(\"div\")\n    newDiv.id = \"constant-new\"\n\n    const createTodoDiv = document.createElement(\"div\")\n    createTodoDiv.id = \"new-to-do\"\n    createTodoDiv.textContent = \"Create New To Do..\"\n\n    const hiddenInputDiv = document.createElement(\"input\")\n    hiddenInputDiv.type=\"text\" \n    hiddenInputDiv.id=\"todo-item-input\" \n    hiddenInputDiv.placeholder=\"Enter to do item\" \n    hiddenInputDiv.style.display = 'none'\n\n    newDiv.appendChild(createTodoDiv)\n    newDiv.appendChild(hiddenInputDiv)\n\n    domParent.append(newDiv)\n\n}\n\nfunction createTaskSection(domParent, taskList, project) {\n\n    let itemDivs = []\n    \n    if (taskList.length !== 0) {\n        for (let i=0; i<taskList.length; i++) {\n            const task = taskList[i];\n            let itemDiv = document.createElement(\"div\")\n            itemDiv.classList.add(\"item\")\n            itemDiv.classList.add(task.getId())\n\n            let itemTitleDiv = document.createElement(\"div\")\n            itemTitleDiv.classList.add(\"item-title\")\n            itemTitleDiv.textContent = task.getTitle();\n            itemTitleDiv.id = task.getId()\n\n            let buttonDiv = document.createElement(\"div\")\n            buttonDiv.classList.add(\"button-panel\")\n            const editButton = addButton('edit', 'edit-item')\n            let completedButton = addButton('not done', 'completed-item')\n            if (task.getData().isCompleted == true) {\n                completedButton = addButton('done', 'completed-item')\n                completedButton.style.backgroundColor = greenColor\n            }\n            const deleteButton = addButton('delete', 'delete-item')\n\n            buttonDiv.appendChild(editButton)\n            buttonDiv.appendChild(completedButton)\n            buttonDiv.appendChild(deleteButton)\n\n            itemDiv.appendChild(itemTitleDiv)\n            itemDiv.appendChild(buttonDiv)\n\n            itemDivs.push(itemDiv)\n        }\n    } \n\n    for (let i=0; i < itemDivs.length; i++) {\n        domParent.appendChild(itemDivs[i])\n    }\n}\n\nfunction addButton(type, className) {\n    const button = document.createElement(\"button\");\n    button.classList.add(className);\n    button.textContent = type;\n    return button\n}\n\n\n\n\n//# sourceURL=webpack://odin-to-do/./src/manageDOM.js?");

/***/ }),

/***/ "./src/checkmarks.png":
/*!****************************!*\
  !*** ./src/checkmarks.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"419141f3a6908f40b4cc.png\";\n\n//# sourceURL=webpack://odin-to-do/./src/checkmarks.png?");

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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