/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/pokemon-solid.ttf */ "./src/assets/fonts/pokemon-solid.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/pokemon-classic.ttf */ "./src/assets/fonts/pokemon-classic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'pokemon-solid';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'pokemon-classic';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n  --main-bg-color: #fe0065;\r\n}\r\n\r\nbody {\r\n  font-family: 'pokemon-classic', sans-serif;\r\n  background-color: var(--main-bg-color);\r\n  min-height: 100vh;\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'pokemon-solid', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n.pokeball-logo {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer {\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main-bg-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  margin: 20px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n@keyframes changeBackgroundColorBlue {\r\n  from {\r\n    background-color: #1eb8ff;\r\n  }\r\n\r\n  to {\r\n    background-color: #85fce8;\r\n  }\r\n}\r\n\r\n.big-blue-circle {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.7s;\r\n  animation-name: changeBackgroundColorBlue;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorRed {\r\n  from {\r\n    background-color: #ff1a1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #ff9696;\r\n  }\r\n}\r\n\r\n.red-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorYellow {\r\n  from {\r\n    background-color: #fffb1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #fdf4bd;\r\n  }\r\n}\r\n\r\n.yellow-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.5s;\r\n  animation-name: changeBackgroundColorYellow;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorGreen {\r\n  from {\r\n    background-color: #1aff2d;\r\n  }\r\n\r\n  to {\r\n    background-color: #a7ff96;\r\n  }\r\n}\r\n\r\n.green-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.9s;\r\n  animation-name: changeBackgroundColorGreen;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-header {\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.gray-box {\r\n  width: 250px;\r\n  height: 260px;\r\n  background-color: #e0e0e0;\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.small-red-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.display-green {\r\n  width: 180px;\r\n  height: 180px;\r\n  background-color: #7ecc98;\r\n  border-radius: 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.medium-red-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-footer {\r\n  background-color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\n.name-pokemon {\r\n  height: 60px;\r\n  width: 210px;\r\n  background-color: #00cc5c;\r\n  border: solid 5px #000;\r\n}\r\n\r\n.gray-dark-circle-heart-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n}\r\n\r\n.white-heart {\r\n  background-color: white;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before,\r\n.white-heart::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.white-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.Comments-button {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.modal-content {\r\n  border: solid 5px #000;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.total-comments,\r\n.add-comment-heading {\r\n  text-align: center;\r\n  color: #bebebe;\r\n  margin: 30px 0;\r\n}\r\n\r\n.add-comment-heading {\r\n  margin-top: 50px;\r\n}\r\n\r\n.all-comments {\r\n  text-align: center;\r\n  font-size: 0.85rem;\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border: 4px solid black;\r\n  border-radius: 6px;\r\n}\r\n\r\n.t-center {\r\n  text-align: center;\r\n  padding: 1.75em 0.5em;\r\n}\r\n\r\n.likes-box {\r\n  background-color: rgb(249, 238, 96);\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.pokemon-image {\r\n  width: 100%;\r\n}\r\n\r\n.pokemon-number {\r\n  background-color: rgb(0, 170, 247);\r\n  border-radius: 0 40px 0 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.spinner-center {\r\n  min-height: 640px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-link,\r\n.page-link:hover {\r\n  border: solid 5px #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'pokemon-solid';\r\n  src: url('./assets/fonts/pokemon-solid.ttf') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'pokemon-classic';\r\n  src: url('./assets/fonts/pokemon-classic.ttf') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n  --main-bg-color: #fe0065;\r\n}\r\n\r\nbody {\r\n  font-family: 'pokemon-classic', sans-serif;\r\n  background-color: var(--main-bg-color);\r\n  min-height: 100vh;\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'pokemon-solid', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n.pokeball-logo {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer {\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main-bg-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  margin: 20px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n@keyframes changeBackgroundColorBlue {\r\n  from {\r\n    background-color: #1eb8ff;\r\n  }\r\n\r\n  to {\r\n    background-color: #85fce8;\r\n  }\r\n}\r\n\r\n.big-blue-circle {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.7s;\r\n  animation-name: changeBackgroundColorBlue;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorRed {\r\n  from {\r\n    background-color: #ff1a1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #ff9696;\r\n  }\r\n}\r\n\r\n.red-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorYellow {\r\n  from {\r\n    background-color: #fffb1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #fdf4bd;\r\n  }\r\n}\r\n\r\n.yellow-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.5s;\r\n  animation-name: changeBackgroundColorYellow;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorGreen {\r\n  from {\r\n    background-color: #1aff2d;\r\n  }\r\n\r\n  to {\r\n    background-color: #a7ff96;\r\n  }\r\n}\r\n\r\n.green-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.9s;\r\n  animation-name: changeBackgroundColorGreen;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-header {\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.gray-box {\r\n  width: 250px;\r\n  height: 260px;\r\n  background-color: #e0e0e0;\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.small-red-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.display-green {\r\n  width: 180px;\r\n  height: 180px;\r\n  background-color: #7ecc98;\r\n  border-radius: 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.medium-red-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-footer {\r\n  background-color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\n.name-pokemon {\r\n  height: 60px;\r\n  width: 210px;\r\n  background-color: #00cc5c;\r\n  border: solid 5px #000;\r\n}\r\n\r\n.gray-dark-circle-heart-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n}\r\n\r\n.white-heart {\r\n  background-color: white;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before,\r\n.white-heart::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.white-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.Comments-button {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.modal-content {\r\n  border: solid 5px #000;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.total-comments,\r\n.add-comment-heading {\r\n  text-align: center;\r\n  color: #bebebe;\r\n  margin: 30px 0;\r\n}\r\n\r\n.add-comment-heading {\r\n  margin-top: 50px;\r\n}\r\n\r\n.all-comments {\r\n  text-align: center;\r\n  font-size: 0.85rem;\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border: 4px solid black;\r\n  border-radius: 6px;\r\n}\r\n\r\n.t-center {\r\n  text-align: center;\r\n  padding: 1.75em 0.5em;\r\n}\r\n\r\n.likes-box {\r\n  background-color: rgb(249, 238, 96);\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.pokemon-image {\r\n  width: 100%;\r\n}\r\n\r\n.pokemon-number {\r\n  background-color: rgb(0, 170, 247);\r\n  border-radius: 0 40px 0 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.spinner-center {\r\n  min-height: 640px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-link,\r\n.page-link:hover {\r\n  border: solid 5px #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-new-like.js":
/*!*****************************!*\
  !*** ./src/add-new-like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
const addNewLike = async (itemId) => {
  const pokemonLikes = document.getElementById(`${itemId}_pokemonLikes`);
  pokemonLikes.textContent = parseInt(pokemonLikes.textContent, 10) + 1;
  const colorHeart = document.getElementById(`${itemId}_colorHeart`);
  colorHeart.classList.remove('white-heart');
  colorHeart.classList.add('red-heart');
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/euJcQ410fgo2CbYVuqO8/likes/', {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewLike);


/***/ }),

/***/ "./src/display-likes.js":
/*!******************************!*\
  !*** ./src/display-likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-pokemon-list.js */ "./src/display-pokemon-list.js");
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */



const recievedLikes = async () => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/euJcQ410fgo2CbYVuqO8/likes/', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((json) => (0,_display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_0__.displayLikes)(json));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recievedLikes);


/***/ }),

/***/ "./src/display-pokemon-list.js":
/*!*************************************!*\
  !*** ./src/display-pokemon-list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPokemons": () => (/* binding */ fetchPokemons),
/* harmony export */   "displayLikes": () => (/* binding */ displayLikes),
/* harmony export */   "SetPokemonCount": () => (/* binding */ SetPokemonCount),
/* harmony export */   "indexer": () => (/* binding */ indexer)
/* harmony export */ });
/* harmony import */ var _add_new_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-like.js */ "./src/add-new-like.js");
/* harmony import */ var _display_likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-likes.js */ "./src/display-likes.js");
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */




const pokemonContainer = document.getElementById('pokemonContainer');
const spinner = document.getElementById('spinner');

const getNumberAllPokemons = document.getElementById('getNumberAllPokemons');

const offset = 1;
const limit = 8;

let pokemon;

const fetchPokemons = async () => {
  await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500')
    .then((response) => response.json())
    .then((data) => {
      createPokemon(data);
      spinner.classList.add('d-none');
    }).then(() => addLikesListener());
};

function indexer(pokedex) {
  pokedex.results.forEach((pokemon, index) => {
    pokemon.index = index + 1;
  });
  return pokedex.results;
}

function SetPokemonCount(total) {
  const getNumberAllPokemons = document.getElementById('getNumberAllPokemons');
  getNumberAllPokemons.textContent = total;
}

function createPokemon(pokedex) {
  let page = 1;
  const indexerPokedex = indexer(pokedex);

  SetPokemonCount(indexerPokedex.length);

  const displayPage = (page) => {
    pokemonContainer.innerHTML = '';

    const end = page * 30;
    const start = end - 30;
    indexerPokedex.filter((item, i) => {
      if (i >= start && i < end) {
        return item;
      }
    }).forEach((pokemon) => {
      pokemonContainer.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <div class="card-header d-flex border-bottom border-5 border-dark">
            <div class="big-blue-circle me-3 mb-3"></div>
            <div class="red-circle me-2"></div>
            <div class="yellow-circle me-2"></div>
            <div class="green-circle me-2"></div>
          </div>
          <div class="card-body d-flex justify-content-center">
            <div class="gray-box">
              <div class="d-flex justify-content-center">
                <div class="small-red-circle m-1"></div>
                <div class="small-red-circle m-1"></div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="display-green d-flex justify-content-center align-items-center" id="${pokemon.index}PokemonImageMain">
                </div>
              </div>
              <div class="d-flex justify-content-between px-4">
                <div class="medium-red-circle m-1"></div>
                <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <div class="name-pokemon d-flex align-items-center ps-3">${pokemon.name}</div>
              <button type="button" class="like-btn gray-dark-circle-heart-button d-flex justify-content-center align-items-center" data-pokemon-id=${pokemon.index} id="${pokemon.index}_likeButton">
                <span id="${pokemon.index}_colorHeart" class="white-heart border-5"></span>
              </button>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div class="pokemon-number d-flex align-items-center ps-2 pe-3">#${pokemon.index}</div>
              <div class="likes-box d-flex align-items-center ps-3"><span class="pe-2" id="${pokemon.index}_pokemonLikes">0</span>Likes</div>
            </div>

            <button type="button" class="Comments-button mt-3" data-bs-toggle="modal" data-bs-target="#commentsModal">
              Comments
            </button>

            <div
                    class="modal fade"
                    id="commentsModal"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div
                          class="modal-header border-bottom border-dark border-5"
                        >
                          <div class="d-flex">
                            <div class="big-blue-circle me-3 mb-3"></div>
                            <div class="red-circle me-2"></div>
                            <div class="yellow-circle me-2"></div>
                            <div class="green-circle me-2"></div>
                          </div>
                          <div class="d-flex">
                            <button
                              type="button"
                              class="btn-close fs-1 me-4"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                        </div>
                        <div class="modal-body">
                          <div class="d-flex justify-content-center">
                            <div class="gray-box">
                              <div class="d-flex justify-content-center">
                                <div class="small-red-circle m-1"></div>
                                <div class="small-red-circle m-1"></div>
                              </div>
                              <div class="d-flex justify-content-center">
                                <div
                                  class="
                                    display-green
                                    d-flex
                                    justify-content-center
                                    align-items-center
                                  "
                                  id="PokemonImageComments"
                                >
                                  <img
                                    src="https://i.pinimg.com/originals/0d/b1/0c/0db10c1dd328a29177abbd8d992a370f.gif"
                                    alt="pikachu-image"
                                    class="pokemon-image"
                                  />
                                </div>
                              </div>
                              <div class="d-flex justify-content-between px-4">
                                <div class="medium-red-circle m-1"></div>
                                <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 class="total-comments">Comments (2)</h3>
                            <section class="all-comments"></section>
                          </div>
                          <div>
                            <h3 class="add-comment-heading">Add a comment</h3>
                            <form action="#" class="form" id="form">
                              <input
                                type="text"
                                placeholder="Your name"
                                id="username"
                              />
                              <textarea
                                name="comment"
                                id="comment"
                                cols="20"
                                rows="10"
                                placeholder="Your insights"
                              ></textarea>
                              <input
                                type="submit"
                                value="Comment"
                                class="btn btn-primary"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
      </div>
      `;

      const spriteContainer = document.getElementById(`${pokemon.index}PokemonImageMain`);
      const sprite = document.createElement('img');
      sprite.className = 'pokemon-image';
      sprite.alt = 'pokemon-image';
      sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`;

      spriteContainer.appendChild(sprite);
    });

    (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };

  const previous = document.getElementById('previous');
  const next = document.getElementById('next');

  displayPage(page);

  previous.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      displayPage(page);
      (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      addLikesListener();
    }
  });

  next.addEventListener('click', () => {
    if (page < indexerPokedex.length / 30) {
      page += 1;
      displayPage(page);
      (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      addLikesListener();
    }
  });
}

function displayLikes(likes) {
  likes.forEach((like) => {
    const pokemonLikes = document.getElementById(`${like.item_id}_pokemonLikes`);
    if (pokemonLikes) {
      pokemonLikes.textContent = like.likes;
      const colorHeart = document.getElementById(`${like.item_id}_colorHeart`);
      colorHeart.classList.remove('white-heart');
      colorHeart.classList.add('red-heart');
    }
  });
}

function addLikesListener(page) {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      (0,_add_new_like_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parseInt(likeButton.dataset.pokemonId, 10));
    });
  });
}



/***/ }),

/***/ "./src/get-comments.js":
/*!*****************************!*\
  !*** ./src/get-comments.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
const ID = 'sOH39XWa9gMFVPLXHU2G';
const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ID}/comments`;

const getComments = async (itemId) => {
  const fetchComments = `${URL}?item_id=item${itemId}`;
  const response = await fetch(fetchComments, {
    method: 'GET',
  });
  const list = await response.json();
  return list;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);


/***/ }),

/***/ "./src/assets/fonts/pokemon-classic.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/pokemon-classic.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b405427a72cc3786ceb.ttf";

/***/ }),

/***/ "./src/assets/fonts/pokemon-solid.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/pokemon-solid.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d60be1f7ff5fcc21fc1.ttf";

/***/ }),

/***/ "./src/assets/img/pokeball-logo.png":
/*!******************************************!*\
  !*** ./src/assets/img/pokeball-logo.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a835fb9ba399394db72d.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_img_pokeball_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/pokeball-logo.png */ "./src/assets/img/pokeball-logo.png");
/* harmony import */ var _get_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-comments.js */ "./src/get-comments.js");
/* harmony import */ var _display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-pokemon-list.js */ "./src/display-pokemon-list.js");
/* harmony import */ var _display_likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-likes.js */ "./src/display-likes.js");
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */






const pokeballLogo = document.getElementById('pokeballLogo');
const allComments = document.querySelector('.all-comments');
const singleComment = document.createElement('p');

const getAllComments = async () => {
  const response = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1);
  response.forEach((resp) => {
    singleComment.innerHTML = `${resp.creation_date} ${resp.username}: ${resp.comment}`;
    // allComments.appendChild(singleComment);
  });
};

getAllComments();

const pokemonContainer = document.getElementById('pokemonContainer');

let offset;
let limit;

// add icon to the page
const link = document.createElement('link');
link.rel = 'icon';
link.href = _assets_img_pokeball_logo_png__WEBPACK_IMPORTED_MODULE_1__;
document.head.appendChild(link);

const img = document.createElement('img');
img.src = _assets_img_pokeball_logo_png__WEBPACK_IMPORTED_MODULE_1__;
img.alt = 'Pokeball';
img.classList.add('pokeball-logo');
pokeballLogo.appendChild(img);

(0,_display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_3__.fetchPokemons)((offset = 1), (limit = 8));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ3FCO0FBQ2lDO0FBQ1Y7QUFDYztBQUNYO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0REFBVztBQUNwQztBQUNBLGlDQUFpQyxvQkFBb0IsRUFBRSxjQUFjLElBQUksYUFBYTtBQUN0RjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMERBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL3NyYy9hZGQtbmV3LWxpa2UuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2Rpc3BsYXktbGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2Rpc3BsYXktcG9rZW1vbi1saXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL3NyYy9nZXQtY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9wb2tlbW9uLXNvbGlkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL3Bva2Vtb24tY2xhc3NpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tc29saWQnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tY2xhc3NpYyc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1tYWluLWJnLWNvbG9yOiAjZmUwMDY1O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1jbGFzc2ljJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tc29saWQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2ViYWxsLWxvZ28ge1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWUge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZWI4ZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWZjZTg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5iaWctYmx1ZS1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWU7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjFhMWE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk2OTY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yWWVsbG93IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYjFhO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmNGJkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93LWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclllbGxvdztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckdyZWVuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFmZjJkO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdmZjk2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW4tY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yR3JlZW47XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JheS1ib3gge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiAyNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsLXJlZC1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZ3JlZW4ge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWNjOTg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bS1yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtcG9rZW1vbiB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYzVjO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYXktZGFyay1jaXJjbGUtaGVhcnQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQ6OmJlZm9yZSxcXHJcXG4ud2hpdGUtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjpiZWZvcmUsXFxyXFxuLnJlZC1oZWFydDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjphZnRlciB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC1jb21tZW50cyxcXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2JlYmViZTtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWNvbW1lbnRzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtID4gKiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEuNzVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyMzgsIDk2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDQwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tbnVtYmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzAsIDI0Nyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwaW5uZXItY2VudGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDY0MHB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWxpbmssXFxyXFxuLnBhZ2UtbGluazpob3ZlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QiwyREFBMkQ7RUFDM0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwyREFBNkQ7RUFDN0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsc0NBQXNDO0VBQ3RDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHdC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QWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tc29saWQnO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL3Bva2Vtb24tc29saWQudHRmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1jbGFzc2ljJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9wb2tlbW9uLWNsYXNzaWMudHRmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1tYWluLWJnLWNvbG9yOiAjZmUwMDY1O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1jbGFzc2ljJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tc29saWQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2ViYWxsLWxvZ28ge1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWUge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZWI4ZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWZjZTg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5iaWctYmx1ZS1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWU7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjFhMWE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk2OTY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yWWVsbG93IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYjFhO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmNGJkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93LWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclllbGxvdztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckdyZWVuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFmZjJkO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdmZjk2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW4tY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yR3JlZW47XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JheS1ib3gge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiAyNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsLXJlZC1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZ3JlZW4ge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWNjOTg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bS1yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtcG9rZW1vbiB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYzVjO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYXktZGFyay1jaXJjbGUtaGVhcnQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQ6OmJlZm9yZSxcXHJcXG4ud2hpdGUtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjpiZWZvcmUsXFxyXFxuLnJlZC1oZWFydDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjphZnRlciB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC1jb21tZW50cyxcXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2JlYmViZTtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWNvbW1lbnRzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtID4gKiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEuNzVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyMzgsIDk2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDQwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tbnVtYmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzAsIDI0Nyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwaW5uZXItY2VudGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDY0MHB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWxpbmssXFxyXFxuLnBhZ2UtbGluazpob3ZlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXdhaXQgKi9cclxuY29uc3QgYWRkTmV3TGlrZSA9IGFzeW5jIChpdGVtSWQpID0+IHtcclxuICBjb25zdCBwb2tlbW9uTGlrZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpdGVtSWR9X3Bva2Vtb25MaWtlc2ApO1xyXG4gIHBva2Vtb25MaWtlcy50ZXh0Q29udGVudCA9IHBhcnNlSW50KHBva2Vtb25MaWtlcy50ZXh0Q29udGVudCwgMTApICsgMTtcclxuICBjb25zdCBjb2xvckhlYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aXRlbUlkfV9jb2xvckhlYXJ0YCk7XHJcbiAgY29sb3JIZWFydC5jbGFzc0xpc3QucmVtb3ZlKCd3aGl0ZS1oZWFydCcpO1xyXG4gIGNvbG9ySGVhcnQuY2xhc3NMaXN0LmFkZCgncmVkLWhlYXJ0Jyk7XHJcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V1SmNRNDEwZmdvMkNiWVZ1cU84L2xpa2VzLycsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpdGVtSWQgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTmV3TGlrZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hd2FpdCAqL1xyXG5cclxuaW1wb3J0IHsgZGlzcGxheUxpa2VzIH0gZnJvbSAnLi9kaXNwbGF5LXBva2Vtb24tbGlzdC5qcyc7XHJcblxyXG5jb25zdCByZWNpZXZlZExpa2VzID0gYXN5bmMgKCkgPT4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V1SmNRNDEwZmdvMkNiWVZ1cU84L2xpa2VzLycsIHtcclxuICBtZXRob2Q6ICdHRVQnLFxyXG59KVxyXG4gIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgLnRoZW4oKGpzb24pID0+IGRpc3BsYXlMaWtlcyhqc29uKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNpZXZlZExpa2VzO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG5cclxuaW1wb3J0IGFkZE5ld0xpa2UgZnJvbSAnLi9hZGQtbmV3LWxpa2UuanMnO1xyXG5pbXBvcnQgcmVjaWV2ZWRMaWtlcyBmcm9tICcuL2Rpc3BsYXktbGlrZXMuanMnO1xyXG5cclxuY29uc3QgcG9rZW1vbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uQ29udGFpbmVyJyk7XHJcbmNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpO1xyXG5cclxuY29uc3QgZ2V0TnVtYmVyQWxsUG9rZW1vbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0TnVtYmVyQWxsUG9rZW1vbnMnKTtcclxuXHJcbmNvbnN0IG9mZnNldCA9IDE7XHJcbmNvbnN0IGxpbWl0ID0gODtcclxuXHJcbmxldCBwb2tlbW9uO1xyXG5cclxuY29uc3QgZmV0Y2hQb2tlbW9ucyA9IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP29mZnNldD0wJmxpbWl0PTE1MDAnKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjcmVhdGVQb2tlbW9uKGRhdGEpO1xyXG4gICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgfSkudGhlbigoKSA9PiBhZGRMaWtlc0xpc3RlbmVyKCkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5kZXhlcihwb2tlZGV4KSB7XHJcbiAgcG9rZWRleC5yZXN1bHRzLmZvckVhY2goKHBva2Vtb24sIGluZGV4KSA9PiB7XHJcbiAgICBwb2tlbW9uLmluZGV4ID0gaW5kZXggKyAxO1xyXG4gIH0pO1xyXG4gIHJldHVybiBwb2tlZGV4LnJlc3VsdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNldFBva2Vtb25Db3VudCh0b3RhbCkge1xyXG4gIGNvbnN0IGdldE51bWJlckFsbFBva2Vtb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldE51bWJlckFsbFBva2Vtb25zJyk7XHJcbiAgZ2V0TnVtYmVyQWxsUG9rZW1vbnMudGV4dENvbnRlbnQgPSB0b3RhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUG9rZW1vbihwb2tlZGV4KSB7XHJcbiAgbGV0IHBhZ2UgPSAxO1xyXG4gIGNvbnN0IGluZGV4ZXJQb2tlZGV4ID0gaW5kZXhlcihwb2tlZGV4KTtcclxuXHJcbiAgU2V0UG9rZW1vbkNvdW50KGluZGV4ZXJQb2tlZGV4Lmxlbmd0aCk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHBva2Vtb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgZW5kID0gcGFnZSAqIDMwO1xyXG4gICAgY29uc3Qgc3RhcnQgPSBlbmQgLSAzMDtcclxuICAgIGluZGV4ZXJQb2tlZGV4LmZpbHRlcigoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaSA+PSBzdGFydCAmJiBpIDwgZW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pLmZvckVhY2goKHBva2Vtb24pID0+IHtcclxuICAgICAgcG9rZW1vbkNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBkLWZsZXggYm9yZGVyLWJvdHRvbSBib3JkZXItNSBib3JkZXItZGFya1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlnLWJsdWUtY2lyY2xlIG1lLTMgbWItM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVkLWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWxsb3ctY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuLWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyYXktYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic21hbGwtcmVkLWNpcmNsZSBtLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1yZWQtY2lyY2xlIG0tMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktZ3JlZW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgaWQ9XCIke3Bva2Vtb24uaW5kZXh9UG9rZW1vbkltYWdlTWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXJlZC1jaXJjbGUgbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1lbnUtc2hhcnBcIiBjbGFzcz1cImZzLTFcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZS1wb2tlbW9uIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHMtM1wiPiR7cG9rZW1vbi5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlrZS1idG4gZ3JheS1kYXJrLWNpcmNsZS1oZWFydC1idXR0b24gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgZGF0YS1wb2tlbW9uLWlkPSR7cG9rZW1vbi5pbmRleH0gaWQ9XCIke3Bva2Vtb24uaW5kZXh9X2xpa2VCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiJHtwb2tlbW9uLmluZGV4fV9jb2xvckhlYXJ0XCIgY2xhc3M9XCJ3aGl0ZS1oZWFydCBib3JkZXItNVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXQtM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2tlbW9uLW51bWJlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBzLTIgcGUtM1wiPiMke3Bva2Vtb24uaW5kZXh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzLWJveCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBzLTNcIj48c3BhbiBjbGFzcz1cInBlLTJcIiBpZD1cIiR7cG9rZW1vbi5pbmRleH1fcG9rZW1vbkxpa2VzXCI+MDwvc3Bhbj5MaWtlczwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiQ29tbWVudHMtYnV0dG9uIG10LTNcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjY29tbWVudHNNb2RhbFwiPlxyXG4gICAgICAgICAgICAgIENvbW1lbnRzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21tZW50c01vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibW9kYWwtaGVhZGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgYm9yZGVyLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJpZy1ibHVlLWNpcmNsZSBtZS0zIG1iLTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWQtY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWxsb3ctY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmVlbi1jaXJjbGUgbWUtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWNsb3NlIGZzLTEgbWUtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JheS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLXJlZC1jaXJjbGUgbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLXJlZC1jaXJjbGUgbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LWdyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQtZmxleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zLWNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUG9rZW1vbkltYWdlQ29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzBkL2IxLzBjLzBkYjEwYzFkZDMyOGEyOTE3N2FiYmQ4ZDk5MmEzNzBmLmdpZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBpa2FjaHUtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBva2Vtb24taW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpdW0tcmVkLWNpcmNsZSBtLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1lbnUtc2hhcnBcIiBjbGFzcz1cImZzLTFcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0b3RhbC1jb21tZW50c1wiPkNvbW1lbnRzICgyKTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImFsbC1jb21tZW50c1wiPjwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYWRkLWNvbW1lbnQtaGVhZGluZ1wiPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiZm9ybVwiIGlkPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQ29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgY29uc3Qgc3ByaXRlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cG9rZW1vbi5pbmRleH1Qb2tlbW9uSW1hZ2VNYWluYCk7XHJcbiAgICAgIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBzcHJpdGUuY2xhc3NOYW1lID0gJ3Bva2Vtb24taW1hZ2UnO1xyXG4gICAgICBzcHJpdGUuYWx0ID0gJ3Bva2Vtb24taW1hZ2UnO1xyXG4gICAgICBzcHJpdGUuc3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8ke3Bva2Vtb24uaW5kZXh9LnBuZ2A7XHJcblxyXG4gICAgICBzcHJpdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ByaXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlY2lldmVkTGlrZXMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cycpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuICBkaXNwbGF5UGFnZShwYWdlKTtcclxuXHJcbiAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAocGFnZSA+IDEpIHtcclxuICAgICAgcGFnZSAtPSAxO1xyXG4gICAgICBkaXNwbGF5UGFnZShwYWdlKTtcclxuICAgICAgcmVjaWV2ZWRMaWtlcygpO1xyXG4gICAgICBhZGRMaWtlc0xpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAocGFnZSA8IGluZGV4ZXJQb2tlZGV4Lmxlbmd0aCAvIDMwKSB7XHJcbiAgICAgIHBhZ2UgKz0gMTtcclxuICAgICAgZGlzcGxheVBhZ2UocGFnZSk7XHJcbiAgICAgIHJlY2lldmVkTGlrZXMoKTtcclxuICAgICAgYWRkTGlrZXNMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TGlrZXMobGlrZXMpIHtcclxuICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICBjb25zdCBwb2tlbW9uTGlrZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtsaWtlLml0ZW1faWR9X3Bva2Vtb25MaWtlc2ApO1xyXG4gICAgaWYgKHBva2Vtb25MaWtlcykge1xyXG4gICAgICBwb2tlbW9uTGlrZXMudGV4dENvbnRlbnQgPSBsaWtlLmxpa2VzO1xyXG4gICAgICBjb25zdCBjb2xvckhlYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bGlrZS5pdGVtX2lkfV9jb2xvckhlYXJ0YCk7XHJcbiAgICAgIGNvbG9ySGVhcnQuY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUtaGVhcnQnKTtcclxuICAgICAgY29sb3JIZWFydC5jbGFzc0xpc3QuYWRkKCdyZWQtaGVhcnQnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlrZXNMaXN0ZW5lcihwYWdlKSB7XHJcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1idG4nKTtcclxuICBsaWtlQnV0dG9ucy5mb3JFYWNoKChsaWtlQnV0dG9uKSA9PiB7XHJcbiAgICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBhZGROZXdMaWtlKHBhcnNlSW50KGxpa2VCdXR0b24uZGF0YXNldC5wb2tlbW9uSWQsIDEwKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBmZXRjaFBva2Vtb25zLCBkaXNwbGF5TGlrZXMsIFNldFBva2Vtb25Db3VudCwgaW5kZXhlcixcclxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuY29uc3QgSUQgPSAnc09IMzlYV2E5Z01GVlBMWEhVMkcnO1xyXG5jb25zdCBVUkwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtJRH0vY29tbWVudHNgO1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XHJcbiAgY29uc3QgZmV0Y2hDb21tZW50cyA9IGAke1VSTH0/aXRlbV9pZD1pdGVtJHtpdGVtSWR9YDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoQ29tbWVudHMsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgfSk7XHJcbiAgY29uc3QgbGlzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gbGlzdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHBva2ViYWxsIGZyb20gJy4vYXNzZXRzL2ltZy9wb2tlYmFsbC1sb2dvLnBuZyc7XHJcbmltcG9ydCBnZXRDb21tZW50cyBmcm9tICcuL2dldC1jb21tZW50cy5qcyc7XHJcbmltcG9ydCB7IGZldGNoUG9rZW1vbnMgfSBmcm9tICcuL2Rpc3BsYXktcG9rZW1vbi1saXN0LmpzJztcclxuaW1wb3J0IHJlY2lldmVkTGlrZXMgZnJvbSAnLi9kaXNwbGF5LWxpa2VzLmpzJztcclxuXHJcbmNvbnN0IHBva2ViYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlYmFsbExvZ28nKTtcclxuY29uc3QgYWxsQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWNvbW1lbnRzJyk7XHJcbmNvbnN0IHNpbmdsZUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG5jb25zdCBnZXRBbGxDb21tZW50cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldENvbW1lbnRzKDEpO1xyXG4gIHJlc3BvbnNlLmZvckVhY2goKHJlc3ApID0+IHtcclxuICAgIHNpbmdsZUNvbW1lbnQuaW5uZXJIVE1MID0gYCR7cmVzcC5jcmVhdGlvbl9kYXRlfSAke3Jlc3AudXNlcm5hbWV9OiAke3Jlc3AuY29tbWVudH1gO1xyXG4gICAgLy8gYWxsQ29tbWVudHMuYXBwZW5kQ2hpbGQoc2luZ2xlQ29tbWVudCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5nZXRBbGxDb21tZW50cygpO1xyXG5cclxuY29uc3QgcG9rZW1vbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uQ29udGFpbmVyJyk7XHJcblxyXG5sZXQgb2Zmc2V0O1xyXG5sZXQgbGltaXQ7XHJcblxyXG4vLyBhZGQgaWNvbiB0byB0aGUgcGFnZVxyXG5jb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG5saW5rLnJlbCA9ICdpY29uJztcclxubGluay5ocmVmID0gcG9rZWJhbGw7XHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuaW1nLnNyYyA9IHBva2ViYWxsO1xyXG5pbWcuYWx0ID0gJ1Bva2ViYWxsJztcclxuaW1nLmNsYXNzTGlzdC5hZGQoJ3Bva2ViYWxsLWxvZ28nKTtcclxucG9rZWJhbGxMb2dvLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG5mZXRjaFBva2Vtb25zKChvZmZzZXQgPSAxKSwgKGxpbWl0ID0gOCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=