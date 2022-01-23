"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! hero.jpg */ "./src/hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-size: 62.5%;\r\n  color: #444;\r\n}\r\n\r\nbody {\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.home,\r\n.menu,\r\n.contact {\r\n  border: 1px solid;\r\n  padding: 1rem;\r\n  border-radius: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  width: 120rem;\r\n}\r\n\r\nheader {\r\n  height: 100vh;\r\n  position: relative;\r\n\r\n  background-image: linear-gradient(\r\n      rgba(34, 34, 34, 0.6),\r\n      rgba(34, 34, 34, 0.6)\r\n    ),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  color: #fff;\r\n}\r\n.text-container {\r\n  width: 120rem;\r\n  position: absolute;\r\n  /* In relation to Parent size*/\r\n  left: 50%;\r\n  top: 50%;\r\n\r\n  /* In relation to Element size*/\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.text-inner {\r\n  width: 50%;\r\n}\r\n\r\nnav {\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 5rem;\r\n  margin-top: 3rem;\r\n  padding-top: 3.2rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 5.2rem;\r\n  margin-bottom: 3.2rem;\r\n  line-height: 1;\r\n}\r\n\r\n.nav-p {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.btn:link,\r\n.btn:visited {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  background-color: #ffa8a8;\r\n  color: #333;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  padding: 1.6rem 3.2rem;\r\n  border-radius: 9px;\r\n}\r\n\r\n/* menu.js */\r\n.meal-container {\r\n  max-width: 80rem;\r\n  display: grid;\r\n  gap: 9.6rem;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  margin: 6rem auto 0 auto;\r\n  padding: 0 3.2rem;\r\n}\r\n\r\n.meal {\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.3);\r\n  border-radius: 11px;\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-content {\r\n  padding: 1.2rem 4.8rem 4.8rem 4.8rem;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.tag {\r\n  display: inline-block; /* for padding */\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n  border-radius: 10rem;\r\n  color: #222;\r\n  background-color: #ffa8a8;\r\n  font-weight: 600;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.meal-img {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.meal-title-1 {\r\n  font-size: 2.4rem;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.meal-atts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n.meal-att {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n/* contact.js */\r\n/* Set the size of the div element that contains the map */\r\n.map {\r\n  height: 25rem;\r\n  /* The height is 400 pixels */\r\n  width: 45rem;\r\n  /* The width is the width of the web page */\r\n}\r\n\r\n.contact-container {\r\n  max-width: 80rem;\r\n  display: grid;\r\n  gap: 9.6rem;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  margin: 6rem auto 0 auto;\r\n  padding: 1.6rem 3.2rem;\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.3);\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  border-radius: 11px;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.address-col,\r\n.logo,\r\n.about {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n.address-content,\r\n.logo-atts,\r\n.about-atts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\na,\r\na:hover,\r\na:visited,\r\na:active {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.location {\r\n  margin-top: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.map-title {\r\n  margin-bottom: 1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;EAChC,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;;EAElB;;;;2CAIe;EACf,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,SAAS;EACT,QAAQ;;EAER,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,WAAW;EACX,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,qCAAqC;EACrC,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,8CAA8C;EAC9C,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;AACtC;AACA;EACE,qBAAqB,EAAE,gBAAgB;EACvC,sBAAsB;EACtB,iBAAiB;EACjB,yBAAyB;EACzB,oBAAoB;EACpB,WAAW;EACX,yBAAyB;EACzB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA,eAAe;AACf,0DAA0D;AAC1D;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,qCAAqC;EACrC,wBAAwB;EACxB,sBAAsB;EACtB,8CAA8C;EAC9C,oCAAoC;EACpC,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;;;;EAIE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Rubik\", sans-serif;\r\n  font-size: 62.5%;\r\n  color: #444;\r\n}\r\n\r\nbody {\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.home,\r\n.menu,\r\n.contact {\r\n  border: 1px solid;\r\n  padding: 1rem;\r\n  border-radius: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  width: 120rem;\r\n}\r\n\r\nheader {\r\n  height: 100vh;\r\n  position: relative;\r\n\r\n  background-image: linear-gradient(\r\n      rgba(34, 34, 34, 0.6),\r\n      rgba(34, 34, 34, 0.6)\r\n    ),\r\n    url(hero.jpg);\r\n  background-size: cover;\r\n  color: #fff;\r\n}\r\n.text-container {\r\n  width: 120rem;\r\n  position: absolute;\r\n  /* In relation to Parent size*/\r\n  left: 50%;\r\n  top: 50%;\r\n\r\n  /* In relation to Element size*/\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.text-inner {\r\n  width: 50%;\r\n}\r\n\r\nnav {\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 5rem;\r\n  margin-top: 3rem;\r\n  padding-top: 3.2rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 5.2rem;\r\n  margin-bottom: 3.2rem;\r\n  line-height: 1;\r\n}\r\n\r\n.nav-p {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.btn:link,\r\n.btn:visited {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  background-color: #ffa8a8;\r\n  color: #333;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  padding: 1.6rem 3.2rem;\r\n  border-radius: 9px;\r\n}\r\n\r\n/* menu.js */\r\n.meal-container {\r\n  max-width: 80rem;\r\n  display: grid;\r\n  gap: 9.6rem;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  margin: 6rem auto 0 auto;\r\n  padding: 0 3.2rem;\r\n}\r\n\r\n.meal {\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.3);\r\n  border-radius: 11px;\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-content {\r\n  padding: 1.2rem 4.8rem 4.8rem 4.8rem;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.tag {\r\n  display: inline-block; /* for padding */\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n  border-radius: 10rem;\r\n  color: #222;\r\n  background-color: #ffa8a8;\r\n  font-weight: 600;\r\n  margin-bottom: 3.2rem;\r\n}\r\n\r\n.meal-img {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.meal-title-1 {\r\n  font-size: 2.4rem;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.meal-atts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n.meal-att {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n/* contact.js */\r\n/* Set the size of the div element that contains the map */\r\n.map {\r\n  height: 25rem;\r\n  /* The height is 400 pixels */\r\n  width: 45rem;\r\n  /* The width is the width of the web page */\r\n}\r\n\r\n.contact-container {\r\n  max-width: 80rem;\r\n  display: grid;\r\n  gap: 9.6rem;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  margin: 6rem auto 0 auto;\r\n  padding: 1.6rem 3.2rem;\r\n  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.3);\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  border-radius: 11px;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.address-col,\r\n.logo,\r\n.about {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n.address-content,\r\n.logo-atts,\r\n.about-atts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\na,\r\na:hover,\r\na:visited,\r\na:active {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.location {\r\n  margin-top: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.map-title {\r\n  margin-bottom: 1rem;\r\n}\r\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactCreator() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  nav.classList.add("container");
  const home = document.createElement("div");
  home.textContent = "HOME";
  home.classList.add("home");
  const menu = document.createElement("div");
  menu.textContent = "MENU";
  menu.classList.add("menu");
  const contact = document.createElement("div");
  contact.textContent = "CONTACT";
  contact.classList.add("contact");
  ////
  const contactUs = document.createElement("div");
  contactUs.classList.add("contact-container");
  ////
  const address = document.createElement("div");
  address.classList.add("address-col");
  const addTitle = document.createElement("p");
  addTitle.textContent = "Contact us";
  addTitle.classList.add("address-heading");
  const addContent = document.createElement("address");
  addContent.classList.add("address-content");
  const addP1 = document.createElement("p");
  addP1.textContent = "Ankuva AVM Bilkent";
  const addP2 = document.createElement("p");
  const addTel = document.createElement("a");
  addTel.href = "tel:+90 999 99";
  addTel.textContent = "+90 999 99";
  const addMail = document.createElement("a");
  addMail.href = "mailto:hello@turkishpizza.com";
  addMail.textContent = "hello@turkishpizza.com";
  const br = document.createElement("br");

  //
  ///
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Company";
  const logoAtts = document.createElement("ul");
  logoAtts.classList.add("logo-atts");
  const logoAtt1 = document.createElement("li");
  logoAtt1.classList.add("logo-att");
  const logoAtt1a = document.createElement("a");
  logoAtt1a.textContent = "About TurkishPizza";
  logoAtt1a.href = "#";
  const logoAtt2 = document.createElement("li");
  logoAtt2.classList.add("logo-att");
  const logoAtt2a = document.createElement("a");
  logoAtt2a.textContent = "For Business";
  logoAtt2a.href = "#";
  const logoAtt3 = document.createElement("li");
  logoAtt3.classList.add("logo-att");
  const logoAtt3a = document.createElement("a");
  logoAtt3a.textContent = "Careers";
  logoAtt3a.href = "#";
  ///

  //
  const about = document.createElement("div");
  about.classList.add("about");
  about.textContent = "Resources";
  const aboutAtts = document.createElement("ul");
  aboutAtts.classList.add("about-atts");
  const aboutAtt1 = document.createElement("li");
  aboutAtt1.classList.add("about-att");
  const aboutAtt1a = document.createElement("a");
  aboutAtt1a.textContent = "Recipe directory";
  aboutAtt1a.href = "#";
  const aboutAtt2 = document.createElement("li");
  aboutAtt2.classList.add("about-att");
  const aboutAtt2a = document.createElement("a");
  aboutAtt2a.textContent = "Help center";
  aboutAtt2a.href = "#";
  const aboutAtt3 = document.createElement("li");
  aboutAtt3.classList.add("about-att");
  const aboutAtt3a = document.createElement("a");
  aboutAtt3a.textContent = "Privacy & terms";
  aboutAtt3a.href = "#";

  //
  const location = document.createElement("div");
  location.classList.add("location");
  const mapTitle = document.createElement("h3");
  mapTitle.classList.add("map-title");
  mapTitle.textContent = "Location";
  const map = document.createElement("iframe");
  map.classList.add("map");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.3934222116999!2d32.75566618499477!3d39.88378616142569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34772821cf99b%3A0xef4fb0ff2bd9b733!2sBilkent%20York%20Street%20Food%20Company!5e0!3m2!1str!2str!4v1642891210404!5m2!1str!2str";
  ////
  content.append(header);
  header.append(nav);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  //
  header.append(contactUs);
  contactUs.append(address);
  contactUs.append(logo);
  contactUs.append(about);
  //
  logo.append(logoAtts);
  logoAtts.append(logoAtt1);
  logoAtts.append(logoAtt2);
  logoAtts.append(logoAtt3);
  logoAtt1.append(logoAtt1a);
  logoAtt2.append(logoAtt2a);
  logoAtt3.append(logoAtt3a);
  //
  address.append(addTitle);
  address.append(addContent);
  addContent.append(addP1);
  addContent.append(addP2);
  addP2.append(addTel);
  addP2.append(br);
  addP2.append(addMail);
  //
  about.append(aboutAtts);
  aboutAtts.append(aboutAtt1);
  aboutAtt1.append(aboutAtt1a);
  aboutAtts.append(aboutAtt2);
  aboutAtt2.append(aboutAtt2a);
  aboutAtts.append(aboutAtt3);
  aboutAtt3.append(aboutAtt3a);

  header.append(location);
  location.append(mapTitle);
  location.append(map);

  contact.style.backgroundColor = "#ffa8a8";
  contact.style.color = "#333";
  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactCreator);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homeCreator() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  nav.classList.add("container");
  const home = document.createElement("div");
  home.textContent = "HOME";
  home.classList.add("home");
  const menu = document.createElement("div");
  menu.textContent = "MENU";
  menu.classList.add("menu");
  const contact = document.createElement("div");
  contact.textContent = "CONTACT";
  contact.classList.add("contact");

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-container");
  const textInner = document.createElement("div");
  textInner.classList.add("text-inner");

  const navHeader = document.createElement("h1");
  navHeader.textContent = "Lahmacun & Pide Turkish Pizza";

  const navP = document.createElement("p");
  navP.classList.add("nav-p");
  navP.textContent = "Flavor from wood fire. It's oven-baked goodness. ";

  const navLink = document.createElement("a");
  navLink.href = "#";
  navLink.classList.add("btn");
  navLink.textContent = "Start eating";
  ///
  content.append(header);
  header.append(nav);
  header.append(textDiv);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  textDiv.append(textInner);
  textInner.append(navHeader);
  textInner.append(navP);
  textInner.append(navLink);
  //
  content.remove();

  home.style.backgroundColor = "#ffa8a8";
  home.style.color = "#333";
  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeCreator);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");

//////



//////

document.body.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());

document.body.addEventListener("click", function (e) {
  const content = document.getElementById("content");
  if (
    e.target.classList.contains("home") &&
    !document.body.querySelector(".text-container")
  ) {
    console.log("homee");
    content.remove();
    document.body.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
    e.target.style.backgroundColor = "red";
  } else if (
    e.target.classList.contains("menu") &&
    !document.body.querySelector(".meal-container")
  ) {
    content.remove();
    console.log("13123");
    document.body.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    e.target.style.backgroundColor = "red";
  } else if (e.target.classList.contains("contact")) {
    content.remove();
    document.body.append((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
    e.target.style.backgroundColor = "red";
  }
});


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lahmacun_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lahmacun.jpg */ "./src/lahmacun.jpg");
/* harmony import */ var _pide_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pide.jpg */ "./src/pide.jpg");



function menuCreator() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  nav.classList.add("container");
  const home = document.createElement("div");
  home.textContent = "HOME";
  home.classList.add("home");
  const menu = document.createElement("div");
  menu.textContent = "MENU";
  menu.classList.add("menu");
  const contact = document.createElement("div");
  contact.textContent = "CONTACT";
  contact.classList.add("contact");
  ////
  const mealContainer = document.createElement("div");
  mealContainer.classList.add("meal-container");
  const meal = document.createElement("div");
  meal.classList.add("meal");
  const lahmacun = document.createElement("img");
  lahmacun.classList.add("meal-img");
  lahmacun.src = _lahmacun_jpg__WEBPACK_IMPORTED_MODULE_0__;
  lahmacun.alt = "lahmacun image";
  const mealContent = document.createElement("div");
  mealContent.classList.add("meal-content");
  const mealTitle = document.createElement("p");
  mealTitle.classList.add("meal-title-1");
  mealTitle.textContent = "Lahmacun";
  const mealTag = document.createElement("span");
  mealTag.classList.add("tag");
  mealTag.textContent = "Price: 3$";
  const mealAtts = document.createElement("ul");
  mealAtts.classList.add("meal-atts");
  const mealAtt1 = document.createElement("li");
  mealAtt1.classList.add("meal-att");
  mealAtt1.textContent = "Flat Bread";
  const mealAtt2 = document.createElement("li");
  mealAtt2.classList.add("meal-att");
  mealAtt2.textContent = "Minced Meat";
  const mealAtt3 = document.createElement("li");
  mealAtt3.classList.add("meal-att");
  mealAtt3.textContent = "Minced Vegetables";
  //////
  const meal2 = document.createElement("div");
  meal2.classList.add("meal");
  const pide = document.createElement("img");
  pide.classList.add("meal-img");
  pide.src = _pide_jpg__WEBPACK_IMPORTED_MODULE_1__;
  pide.alt = "pide image";
  const mealContent2 = document.createElement("div");
  mealContent2.classList.add("meal-content");
  const mealTitle2 = document.createElement("p");
  mealTitle2.classList.add("meal-title-1");
  mealTitle2.textContent = "Pide";
  const mealTag2 = document.createElement("span");
  mealTag2.classList.add("tag");
  mealTag2.textContent = "Price: 5$";
  const mealAtts2 = document.createElement("ul");
  mealAtts2.classList.add("meal-atts");
  const mealAtt12 = document.createElement("li");
  mealAtt12.classList.add("meal-att");
  mealAtt12.textContent = "Flat Bread";
  const mealAtt22 = document.createElement("li");
  mealAtt22.classList.add("meal-att");
  mealAtt22.textContent = "Beef Cubes";
  const mealAtt32 = document.createElement("li");
  mealAtt32.classList.add("meal-att");
  mealAtt32.textContent = "Green Peppers & Tomato";

  ///
  content.append(header);
  header.append(nav);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  header.append(mealContainer);
  mealContainer.append(meal);
  meal.append(lahmacun);
  meal.append(mealContent);
  mealContent.append(mealTitle);
  mealContent.append(mealTag);
  mealContent.append(mealAtts);
  mealAtts.append(mealAtt1);
  mealAtts.append(mealAtt2);
  mealAtts.append(mealAtt3);
  ///
  mealContainer.append(meal2);
  meal2.append(pide);
  meal2.append(mealContent2);
  mealContent2.append(mealTitle2);
  mealContent2.append(mealTag2);
  mealContent2.append(mealAtts2);
  mealAtts2.append(mealAtt12);
  mealAtts2.append(mealAtt22);
  mealAtts2.append(mealAtt32);

  menu.style.backgroundColor = "#ffa8a8";
  menu.style.color = "#333";
  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuCreator);


/***/ }),

/***/ "./src/hero.jpg":
/*!**********************!*\
  !*** ./src/hero.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero.jpg";

/***/ }),

/***/ "./src/lahmacun.jpg":
/*!**************************!*\
  !*** ./src/lahmacun.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lahmacun.jpg";

/***/ }),

/***/ "./src/pide.jpg":
/*!**********************!*\
  !*** ./src/pide.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pide.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNJOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREs7QUFDaEM7QUFDaUM7QUFDQTtBQUNNO0FBQ3ZDO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFXO0FBQ3BDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQVc7QUFDcEM7QUFDQSxJQUFJO0FBQ0o7QUFDQSx5QkFBeUIsb0RBQWM7QUFDdkM7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN3QztBQUNSO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQ0FBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0NBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaGVyby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUsXFxyXFxuLm1lbnUsXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMjByZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHJnYmEoMzQsIDM0LCAzNCwgMC42KSxcXHJcXG4gICAgICByZ2JhKDM0LCAzNCwgMzQsIDAuNilcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLnRleHQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMjByZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAvKiBJbiByZWxhdGlvbiB0byBQYXJlbnQgc2l6ZSovXFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG5cXHJcXG4gIC8qIEluIHJlbGF0aW9uIHRvIEVsZW1lbnQgc2l6ZSovXFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtaW5uZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiA1LjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5idG46bGluayxcXHJcXG4uYnRuOnZpc2l0ZWQge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi8qIG1lbnUuanMgKi9cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA4MHJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDkuNnJlbTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBtYXJnaW46IDZyZW0gYXV0byAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwge1xcclxcbiAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDEuMnJlbSA0LjhyZW0gNC44cmVtIDQuOHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuLnRhZyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGZvciBwYWRkaW5nICovXFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxuICBjb2xvcjogIzIyMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUtMSB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYXR0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYXR0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0LmpzICovXFxyXFxuLyogU2V0IHRoZSBzaXplIG9mIHRoZSBkaXYgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBtYXAgKi9cXHJcXG4ubWFwIHtcXHJcXG4gIGhlaWdodDogMjVyZW07XFxyXFxuICAvKiBUaGUgaGVpZ2h0IGlzIDQwMCBwaXhlbHMgKi9cXHJcXG4gIHdpZHRoOiA0NXJlbTtcXHJcXG4gIC8qIFRoZSB3aWR0aCBpcyB0aGUgd2lkdGggb2YgdGhlIHdlYiBwYWdlICovXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogOS42cmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIG1hcmdpbjogNnJlbSBhdXRvIDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1jb2wsXFxyXFxuLmxvZ28sXFxyXFxuLmFib3V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG4uYWRkcmVzcy1jb250ZW50LFxcclxcbi5sb2dvLWF0dHMsXFxyXFxuLmFib3V0LWF0dHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbmEsXFxyXFxuYTpob3ZlcixcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFwLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCOzs7OzJDQUllO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFFBQVE7O0VBRVIsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxxQkFBcUIsRUFBRSxnQkFBZ0I7RUFDdkMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxlQUFlO0FBQ2YsMERBQTBEO0FBQzFEO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsOENBQThDO0VBQzlDLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBOzs7O0VBSUUsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpazp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUsXFxyXFxuLm1lbnUsXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMjByZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHJnYmEoMzQsIDM0LCAzNCwgMC42KSxcXHJcXG4gICAgICByZ2JhKDM0LCAzNCwgMzQsIDAuNilcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKGhlcm8uanBnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLnRleHQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMjByZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAvKiBJbiByZWxhdGlvbiB0byBQYXJlbnQgc2l6ZSovXFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG5cXHJcXG4gIC8qIEluIHJlbGF0aW9uIHRvIEVsZW1lbnQgc2l6ZSovXFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtaW5uZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiA1LjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5idG46bGluayxcXHJcXG4uYnRuOnZpc2l0ZWQge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi8qIG1lbnUuanMgKi9cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA4MHJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDkuNnJlbTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBtYXJnaW46IDZyZW0gYXV0byAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwge1xcclxcbiAgYm94LXNoYWRvdzogMCAyLjRyZW0gNC44cmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDEuMnJlbSA0LjhyZW0gNC44cmVtIDQuOHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuLnRhZyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGZvciBwYWRkaW5nICovXFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxuICBjb2xvcjogIzIyMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE4YTg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUtMSB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYXR0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYXR0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0LmpzICovXFxyXFxuLyogU2V0IHRoZSBzaXplIG9mIHRoZSBkaXYgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBtYXAgKi9cXHJcXG4ubWFwIHtcXHJcXG4gIGhlaWdodDogMjVyZW07XFxyXFxuICAvKiBUaGUgaGVpZ2h0IGlzIDQwMCBwaXhlbHMgKi9cXHJcXG4gIHdpZHRoOiA0NXJlbTtcXHJcXG4gIC8qIFRoZSB3aWR0aCBpcyB0aGUgd2lkdGggb2YgdGhlIHdlYiBwYWdlICovXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogOS42cmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIG1hcmdpbjogNnJlbSBhdXRvIDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1jb2wsXFxyXFxuLmxvZ28sXFxyXFxuLmFib3V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG4uYWRkcmVzcy1jb250ZW50LFxcclxcbi5sb2dvLWF0dHMsXFxyXFxuLmFib3V0LWF0dHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbmEsXFxyXFxuYTpob3ZlcixcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFwLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjb250YWN0Q3JlYXRvcigpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG4gIC8vLy9cclxuICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3RVcy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XHJcbiAgLy8vL1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3MtY29sXCIpO1xyXG4gIGNvbnN0IGFkZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWRkVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjtcclxuICBhZGRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzcy1oZWFkaW5nXCIpO1xyXG4gIGNvbnN0IGFkZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYWRkcmVzc1wiKTtcclxuICBhZGRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzLWNvbnRlbnRcIik7XHJcbiAgY29uc3QgYWRkUDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhZGRQMS50ZXh0Q29udGVudCA9IFwiQW5rdXZhIEFWTSBCaWxrZW50XCI7XHJcbiAgY29uc3QgYWRkUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBhZGRUZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhZGRUZWwuaHJlZiA9IFwidGVsOis5MCA5OTkgOTlcIjtcclxuICBhZGRUZWwudGV4dENvbnRlbnQgPSBcIis5MCA5OTkgOTlcIjtcclxuICBjb25zdCBhZGRNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYWRkTWFpbC5ocmVmID0gXCJtYWlsdG86aGVsbG9AdHVya2lzaHBpenphLmNvbVwiO1xyXG4gIGFkZE1haWwudGV4dENvbnRlbnQgPSBcImhlbGxvQHR1cmtpc2hwaXp6YS5jb21cIjtcclxuICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuXHJcbiAgLy9cclxuICAvLy9cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkNvbXBhbnlcIjtcclxuICBjb25zdCBsb2dvQXR0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBsb2dvQXR0cy5jbGFzc0xpc3QuYWRkKFwibG9nby1hdHRzXCIpO1xyXG4gIGNvbnN0IGxvZ29BdHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGxvZ29BdHQxLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWF0dFwiKTtcclxuICBjb25zdCBsb2dvQXR0MWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBsb2dvQXR0MWEudGV4dENvbnRlbnQgPSBcIkFib3V0IFR1cmtpc2hQaXp6YVwiO1xyXG4gIGxvZ29BdHQxYS5ocmVmID0gXCIjXCI7XHJcbiAgY29uc3QgbG9nb0F0dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbG9nb0F0dDIuY2xhc3NMaXN0LmFkZChcImxvZ28tYXR0XCIpO1xyXG4gIGNvbnN0IGxvZ29BdHQyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGxvZ29BdHQyYS50ZXh0Q29udGVudCA9IFwiRm9yIEJ1c2luZXNzXCI7XHJcbiAgbG9nb0F0dDJhLmhyZWYgPSBcIiNcIjtcclxuICBjb25zdCBsb2dvQXR0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBsb2dvQXR0My5jbGFzc0xpc3QuYWRkKFwibG9nby1hdHRcIik7XHJcbiAgY29uc3QgbG9nb0F0dDNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgbG9nb0F0dDNhLnRleHRDb250ZW50ID0gXCJDYXJlZXJzXCI7XHJcbiAgbG9nb0F0dDNhLmhyZWYgPSBcIiNcIjtcclxuICAvLy9cclxuXHJcbiAgLy9cclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xyXG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJSZXNvdXJjZXNcIjtcclxuICBjb25zdCBhYm91dEF0dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgYWJvdXRBdHRzLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1hdHRzXCIpO1xyXG4gIGNvbnN0IGFib3V0QXR0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBhYm91dEF0dDEuY2xhc3NMaXN0LmFkZChcImFib3V0LWF0dFwiKTtcclxuICBjb25zdCBhYm91dEF0dDFhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYWJvdXRBdHQxYS50ZXh0Q29udGVudCA9IFwiUmVjaXBlIGRpcmVjdG9yeVwiO1xyXG4gIGFib3V0QXR0MWEuaHJlZiA9IFwiI1wiO1xyXG4gIGNvbnN0IGFib3V0QXR0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBhYm91dEF0dDIuY2xhc3NMaXN0LmFkZChcImFib3V0LWF0dFwiKTtcclxuICBjb25zdCBhYm91dEF0dDJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYWJvdXRBdHQyYS50ZXh0Q29udGVudCA9IFwiSGVscCBjZW50ZXJcIjtcclxuICBhYm91dEF0dDJhLmhyZWYgPSBcIiNcIjtcclxuICBjb25zdCBhYm91dEF0dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgYWJvdXRBdHQzLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1hdHRcIik7XHJcbiAgY29uc3QgYWJvdXRBdHQzYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGFib3V0QXR0M2EudGV4dENvbnRlbnQgPSBcIlByaXZhY3kgJiB0ZXJtc1wiO1xyXG4gIGFib3V0QXR0M2EuaHJlZiA9IFwiI1wiO1xyXG5cclxuICAvL1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XHJcbiAgY29uc3QgbWFwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgbWFwVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1hcC10aXRsZVwiKTtcclxuICBtYXBUaXRsZS50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcclxuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gIG1hcC5jbGFzc0xpc3QuYWRkKFwibWFwXCIpO1xyXG4gIG1hcC5zcmMgPVxyXG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3NjUuMzkzNDIyMjExNjk5OSEyZDMyLjc1NTY2NjE4NDk5NDc3ITNkMzkuODgzNzg2MTYxNDI1NjkhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDE0ZDM0NzcyODIxY2Y5OWIlM0EweGVmNGZiMGZmMmJkOWI3MzMhMnNCaWxrZW50JTIwWW9yayUyMFN0cmVldCUyMEZvb2QlMjBDb21wYW55ITVlMCEzbTIhMXN0ciEyc3RyITR2MTY0Mjg5MTIxMDQwNCE1bTIhMXN0ciEyc3RyXCI7XHJcbiAgLy8vL1xyXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XHJcbiAgaGVhZGVyLmFwcGVuZChuYXYpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChob21lKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gIC8vXHJcbiAgaGVhZGVyLmFwcGVuZChjb250YWN0VXMpO1xyXG4gIGNvbnRhY3RVcy5hcHBlbmQoYWRkcmVzcyk7XHJcbiAgY29udGFjdFVzLmFwcGVuZChsb2dvKTtcclxuICBjb250YWN0VXMuYXBwZW5kKGFib3V0KTtcclxuICAvL1xyXG4gIGxvZ28uYXBwZW5kKGxvZ29BdHRzKTtcclxuICBsb2dvQXR0cy5hcHBlbmQobG9nb0F0dDEpO1xyXG4gIGxvZ29BdHRzLmFwcGVuZChsb2dvQXR0Mik7XHJcbiAgbG9nb0F0dHMuYXBwZW5kKGxvZ29BdHQzKTtcclxuICBsb2dvQXR0MS5hcHBlbmQobG9nb0F0dDFhKTtcclxuICBsb2dvQXR0Mi5hcHBlbmQobG9nb0F0dDJhKTtcclxuICBsb2dvQXR0My5hcHBlbmQobG9nb0F0dDNhKTtcclxuICAvL1xyXG4gIGFkZHJlc3MuYXBwZW5kKGFkZFRpdGxlKTtcclxuICBhZGRyZXNzLmFwcGVuZChhZGRDb250ZW50KTtcclxuICBhZGRDb250ZW50LmFwcGVuZChhZGRQMSk7XHJcbiAgYWRkQ29udGVudC5hcHBlbmQoYWRkUDIpO1xyXG4gIGFkZFAyLmFwcGVuZChhZGRUZWwpO1xyXG4gIGFkZFAyLmFwcGVuZChicik7XHJcbiAgYWRkUDIuYXBwZW5kKGFkZE1haWwpO1xyXG4gIC8vXHJcbiAgYWJvdXQuYXBwZW5kKGFib3V0QXR0cyk7XHJcbiAgYWJvdXRBdHRzLmFwcGVuZChhYm91dEF0dDEpO1xyXG4gIGFib3V0QXR0MS5hcHBlbmQoYWJvdXRBdHQxYSk7XHJcbiAgYWJvdXRBdHRzLmFwcGVuZChhYm91dEF0dDIpO1xyXG4gIGFib3V0QXR0Mi5hcHBlbmQoYWJvdXRBdHQyYSk7XHJcbiAgYWJvdXRBdHRzLmFwcGVuZChhYm91dEF0dDMpO1xyXG4gIGFib3V0QXR0My5hcHBlbmQoYWJvdXRBdHQzYSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQobG9jYXRpb24pO1xyXG4gIGxvY2F0aW9uLmFwcGVuZChtYXBUaXRsZSk7XHJcbiAgbG9jYXRpb24uYXBwZW5kKG1hcCk7XHJcblxyXG4gIGNvbnRhY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZhOGE4XCI7XHJcbiAgY29udGFjdC5zdHlsZS5jb2xvciA9IFwiIzMzM1wiO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Q3JlYXRvcjtcclxuIiwiZnVuY3Rpb24gaG9tZUNyZWF0b3IoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBuYXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lLnRleHRDb250ZW50ID0gXCJIT01FXCI7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51LnRleHRDb250ZW50ID0gXCJNRU5VXCI7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgdGV4dElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0SW5uZXIuY2xhc3NMaXN0LmFkZChcInRleHQtaW5uZXJcIik7XHJcblxyXG4gIGNvbnN0IG5hdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBuYXZIZWFkZXIudGV4dENvbnRlbnQgPSBcIkxhaG1hY3VuICYgUGlkZSBUdXJraXNoIFBpenphXCI7XHJcblxyXG4gIGNvbnN0IG5hdlAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBuYXZQLmNsYXNzTGlzdC5hZGQoXCJuYXYtcFwiKTtcclxuICBuYXZQLnRleHRDb250ZW50ID0gXCJGbGF2b3IgZnJvbSB3b29kIGZpcmUuIEl0J3Mgb3Zlbi1iYWtlZCBnb29kbmVzcy4gXCI7XHJcblxyXG4gIGNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBuYXZMaW5rLmhyZWYgPSBcIiNcIjtcclxuICBuYXZMaW5rLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgbmF2TGluay50ZXh0Q29udGVudCA9IFwiU3RhcnQgZWF0aW5nXCI7XHJcbiAgLy8vXHJcbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcclxuICBoZWFkZXIuYXBwZW5kKG5hdik7XHJcbiAgaGVhZGVyLmFwcGVuZCh0ZXh0RGl2KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuICB0ZXh0RGl2LmFwcGVuZCh0ZXh0SW5uZXIpO1xyXG4gIHRleHRJbm5lci5hcHBlbmQobmF2SGVhZGVyKTtcclxuICB0ZXh0SW5uZXIuYXBwZW5kKG5hdlApO1xyXG4gIHRleHRJbm5lci5hcHBlbmQobmF2TGluayk7XHJcbiAgLy9cclxuICBjb250ZW50LnJlbW92ZSgpO1xyXG5cclxuICBob21lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmYThhOFwiO1xyXG4gIGhvbWUuc3R5bGUuY29sb3IgPSBcIiMzMzNcIjtcclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZUNyZWF0b3I7XHJcbiIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuLy8vLy8vXHJcbmltcG9ydCBob21lQ3JlYXRvciBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBtZW51Q3JlYXRvciBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBjb250YWN0Q3JlYXRvciBmcm9tIFwiLi9jb250YWN0XCI7XHJcbi8vLy8vL1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaG9tZUNyZWF0b3IoKSk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgaWYgKFxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG9tZVwiKSAmJlxyXG4gICAgIWRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi50ZXh0LWNvbnRhaW5lclwiKVxyXG4gICkge1xyXG4gICAgY29uc29sZS5sb2coXCJob21lZVwiKTtcclxuICAgIGNvbnRlbnQucmVtb3ZlKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChob21lQ3JlYXRvcigpKTtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVcIikgJiZcclxuICAgICFkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIubWVhbC1jb250YWluZXJcIilcclxuICApIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIjEzMTIzXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWVudUNyZWF0b3IoKSk7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29udGFjdFwiKSkge1xyXG4gICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhY3RDcmVhdG9yKCkpO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgbGFobWFjdW5JbWcgZnJvbSBcIi4vbGFobWFjdW4uanBnXCI7XHJcbmltcG9ydCBwaWRlSW1nIGZyb20gXCIuL3BpZGUuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBtZW51Q3JlYXRvcigpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG4gIC8vLy9cclxuICBjb25zdCBtZWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBtZWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWFsLmNsYXNzTGlzdC5hZGQoXCJtZWFsXCIpO1xyXG4gIGNvbnN0IGxhaG1hY3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBsYWhtYWN1bi5jbGFzc0xpc3QuYWRkKFwibWVhbC1pbWdcIik7XHJcbiAgbGFobWFjdW4uc3JjID0gbGFobWFjdW5JbWc7XHJcbiAgbGFobWFjdW4uYWx0ID0gXCJsYWhtYWN1biBpbWFnZVwiO1xyXG4gIGNvbnN0IG1lYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVhbC1jb250ZW50XCIpO1xyXG4gIGNvbnN0IG1lYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG1lYWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVhbC10aXRsZS0xXCIpO1xyXG4gIG1lYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiTGFobWFjdW5cIjtcclxuICBjb25zdCBtZWFsVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgbWVhbFRhZy5jbGFzc0xpc3QuYWRkKFwidGFnXCIpO1xyXG4gIG1lYWxUYWcudGV4dENvbnRlbnQgPSBcIlByaWNlOiAzJFwiO1xyXG4gIGNvbnN0IG1lYWxBdHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIG1lYWxBdHRzLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dHNcIik7XHJcbiAgY29uc3QgbWVhbEF0dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDEuY2xhc3NMaXN0LmFkZChcIm1lYWwtYXR0XCIpO1xyXG4gIG1lYWxBdHQxLnRleHRDb250ZW50ID0gXCJGbGF0IEJyZWFkXCI7XHJcbiAgY29uc3QgbWVhbEF0dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDIuY2xhc3NMaXN0LmFkZChcIm1lYWwtYXR0XCIpO1xyXG4gIG1lYWxBdHQyLnRleHRDb250ZW50ID0gXCJNaW5jZWQgTWVhdFwiO1xyXG4gIGNvbnN0IG1lYWxBdHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIG1lYWxBdHQzLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dFwiKTtcclxuICBtZWFsQXR0My50ZXh0Q29udGVudCA9IFwiTWluY2VkIFZlZ2V0YWJsZXNcIjtcclxuICAvLy8vLy9cclxuICBjb25zdCBtZWFsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVhbDIuY2xhc3NMaXN0LmFkZChcIm1lYWxcIik7XHJcbiAgY29uc3QgcGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGlkZS5jbGFzc0xpc3QuYWRkKFwibWVhbC1pbWdcIik7XHJcbiAgcGlkZS5zcmMgPSBwaWRlSW1nO1xyXG4gIHBpZGUuYWx0ID0gXCJwaWRlIGltYWdlXCI7XHJcbiAgY29uc3QgbWVhbENvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWFsQ29udGVudDIuY2xhc3NMaXN0LmFkZChcIm1lYWwtY29udGVudFwiKTtcclxuICBjb25zdCBtZWFsVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgbWVhbFRpdGxlMi5jbGFzc0xpc3QuYWRkKFwibWVhbC10aXRsZS0xXCIpO1xyXG4gIG1lYWxUaXRsZTIudGV4dENvbnRlbnQgPSBcIlBpZGVcIjtcclxuICBjb25zdCBtZWFsVGFnMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIG1lYWxUYWcyLmNsYXNzTGlzdC5hZGQoXCJ0YWdcIik7XHJcbiAgbWVhbFRhZzIudGV4dENvbnRlbnQgPSBcIlByaWNlOiA1JFwiO1xyXG4gIGNvbnN0IG1lYWxBdHRzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBtZWFsQXR0czIuY2xhc3NMaXN0LmFkZChcIm1lYWwtYXR0c1wiKTtcclxuICBjb25zdCBtZWFsQXR0MTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDEyLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dFwiKTtcclxuICBtZWFsQXR0MTIudGV4dENvbnRlbnQgPSBcIkZsYXQgQnJlYWRcIjtcclxuICBjb25zdCBtZWFsQXR0MjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDIyLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dFwiKTtcclxuICBtZWFsQXR0MjIudGV4dENvbnRlbnQgPSBcIkJlZWYgQ3ViZXNcIjtcclxuICBjb25zdCBtZWFsQXR0MzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDMyLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dFwiKTtcclxuICBtZWFsQXR0MzIudGV4dENvbnRlbnQgPSBcIkdyZWVuIFBlcHBlcnMgJiBUb21hdG9cIjtcclxuXHJcbiAgLy8vXHJcbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcclxuICBoZWFkZXIuYXBwZW5kKG5hdik7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgaGVhZGVyLmFwcGVuZChtZWFsQ29udGFpbmVyKTtcclxuICBtZWFsQ29udGFpbmVyLmFwcGVuZChtZWFsKTtcclxuICBtZWFsLmFwcGVuZChsYWhtYWN1bik7XHJcbiAgbWVhbC5hcHBlbmQobWVhbENvbnRlbnQpO1xyXG4gIG1lYWxDb250ZW50LmFwcGVuZChtZWFsVGl0bGUpO1xyXG4gIG1lYWxDb250ZW50LmFwcGVuZChtZWFsVGFnKTtcclxuICBtZWFsQ29udGVudC5hcHBlbmQobWVhbEF0dHMpO1xyXG4gIG1lYWxBdHRzLmFwcGVuZChtZWFsQXR0MSk7XHJcbiAgbWVhbEF0dHMuYXBwZW5kKG1lYWxBdHQyKTtcclxuICBtZWFsQXR0cy5hcHBlbmQobWVhbEF0dDMpO1xyXG4gIC8vL1xyXG4gIG1lYWxDb250YWluZXIuYXBwZW5kKG1lYWwyKTtcclxuICBtZWFsMi5hcHBlbmQocGlkZSk7XHJcbiAgbWVhbDIuYXBwZW5kKG1lYWxDb250ZW50Mik7XHJcbiAgbWVhbENvbnRlbnQyLmFwcGVuZChtZWFsVGl0bGUyKTtcclxuICBtZWFsQ29udGVudDIuYXBwZW5kKG1lYWxUYWcyKTtcclxuICBtZWFsQ29udGVudDIuYXBwZW5kKG1lYWxBdHRzMik7XHJcbiAgbWVhbEF0dHMyLmFwcGVuZChtZWFsQXR0MTIpO1xyXG4gIG1lYWxBdHRzMi5hcHBlbmQobWVhbEF0dDIyKTtcclxuICBtZWFsQXR0czIuYXBwZW5kKG1lYWxBdHQzMik7XHJcblxyXG4gIG1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZhOGE4XCI7XHJcbiAgbWVudS5zdHlsZS5jb2xvciA9IFwiIzMzM1wiO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51Q3JlYXRvcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9