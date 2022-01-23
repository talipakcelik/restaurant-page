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
    content.remove();
    document.body.append((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
    e.target.style.backgroundColor = "red";
  } else if (
    e.target.classList.contains("menu") &&
    !document.body.querySelector(".meal-container")
  ) {
    content.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNJOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREs7QUFDaEM7QUFDaUM7QUFDQTtBQUNNO0FBQ3ZDO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVztBQUNwQztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVztBQUNwQztBQUNBLElBQUk7QUFDSjtBQUNBLHlCQUF5QixvREFBYztBQUN2QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QndDO0FBQ1I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBDQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQ0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJoZXJvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSxcXHJcXG4ubWVudSxcXHJcXG4uY29udGFjdCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgcmdiYSgzNCwgMzQsIDM0LCAwLjYpLFxcclxcbiAgICAgIHJnYmEoMzQsIDM0LCAzNCwgMC42KVxcclxcbiAgICApLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEyMHJlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC8qIEluIHJlbGF0aW9uIHRvIFBhcmVudCBzaXplKi9cXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcblxcclxcbiAgLyogSW4gcmVsYXRpb24gdG8gRWxlbWVudCBzaXplKi9cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1pbm5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDUuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpsaW5rLFxcclxcbi5idG46dmlzaXRlZCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYThhODtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudS5qcyAqL1xcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogOS42cmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIG1hcmdpbjogNnJlbSBhdXRvIDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMS4ycmVtIDQuOHJlbSA0LjhyZW0gNC44cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG4udGFnIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogZm9yIHBhZGRpbmcgKi9cXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gIGNvbG9yOiAjMjIyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYThhODtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZS0xIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1hdHRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1hdHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QuanMgKi9cXHJcXG4vKiBTZXQgdGhlIHNpemUgb2YgdGhlIGRpdiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcCAqL1xcclxcbi5tYXAge1xcclxcbiAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gIC8qIFRoZSBoZWlnaHQgaXMgNDAwIHBpeGVscyAqL1xcclxcbiAgd2lkdGg6IDQ1cmVtO1xcclxcbiAgLyogVGhlIHdpZHRoIGlzIHRoZSB3aWR0aCBvZiB0aGUgd2ViIHBhZ2UgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiA5LjZyZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgbWFyZ2luOiA2cmVtIGF1dG8gMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzLWNvbCxcXHJcXG4ubG9nbyxcXHJcXG4uYWJvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcbi5hZGRyZXNzLWNvbnRlbnQsXFxyXFxuLmxvZ28tYXR0cyxcXHJcXG4uYWJvdXQtYXR0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuYSxcXHJcXG5hOmhvdmVyLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXAtdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEI7Ozs7MkNBSWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsUUFBUTs7RUFFUiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLHFCQUFxQixFQUFFLGdCQUFnQjtFQUN2QyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7QUFDZiwwREFBMEQ7QUFDMUQ7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7RUFDOUMsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7Ozs7RUFJRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSxcXHJcXG4ubWVudSxcXHJcXG4uY29udGFjdCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgcmdiYSgzNCwgMzQsIDM0LCAwLjYpLFxcclxcbiAgICAgIHJnYmEoMzQsIDM0LCAzNCwgMC42KVxcclxcbiAgICApLFxcclxcbiAgICB1cmwoaGVyby5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEyMHJlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC8qIEluIHJlbGF0aW9uIHRvIFBhcmVudCBzaXplKi9cXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcblxcclxcbiAgLyogSW4gcmVsYXRpb24gdG8gRWxlbWVudCBzaXplKi9cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1pbm5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDUuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpsaW5rLFxcclxcbi5idG46dmlzaXRlZCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYThhODtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudS5qcyAqL1xcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogOS42cmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIG1hcmdpbjogNnJlbSBhdXRvIDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMy4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICBib3gtc2hhZG93OiAwIDIuNHJlbSA0LjhyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMS4ycmVtIDQuOHJlbSA0LjhyZW0gNC44cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG4udGFnIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogZm9yIHBhZGRpbmcgKi9cXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gIGNvbG9yOiAjMjIyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYThhODtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZS0xIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1hdHRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1hdHQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QuanMgKi9cXHJcXG4vKiBTZXQgdGhlIHNpemUgb2YgdGhlIGRpdiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcCAqL1xcclxcbi5tYXAge1xcclxcbiAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gIC8qIFRoZSBoZWlnaHQgaXMgNDAwIHBpeGVscyAqL1xcclxcbiAgd2lkdGg6IDQ1cmVtO1xcclxcbiAgLyogVGhlIHdpZHRoIGlzIHRoZSB3aWR0aCBvZiB0aGUgd2ViIHBhZ2UgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiA5LjZyZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgbWFyZ2luOiA2cmVtIGF1dG8gMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMi40cmVtIDQuOHJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzLWNvbCxcXHJcXG4ubG9nbyxcXHJcXG4uYWJvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcbi5hZGRyZXNzLWNvbnRlbnQsXFxyXFxuLmxvZ28tYXR0cyxcXHJcXG4uYWJvdXQtYXR0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuYSxcXHJcXG5hOmhvdmVyLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXAtdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNvbnRhY3RDcmVhdG9yKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xyXG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcbiAgLy8vL1xyXG4gIGNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdFVzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcclxuICAvLy8vXHJcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzcy1jb2xcIik7XHJcbiAgY29uc3QgYWRkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhZGRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiO1xyXG4gIGFkZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzLWhlYWRpbmdcIik7XHJcbiAgY29uc3QgYWRkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhZGRyZXNzXCIpO1xyXG4gIGFkZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImFkZHJlc3MtY29udGVudFwiKTtcclxuICBjb25zdCBhZGRQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFkZFAxLnRleHRDb250ZW50ID0gXCJBbmt1dmEgQVZNIEJpbGtlbnRcIjtcclxuICBjb25zdCBhZGRQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGFkZFRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGFkZFRlbC5ocmVmID0gXCJ0ZWw6KzkwIDk5OSA5OVwiO1xyXG4gIGFkZFRlbC50ZXh0Q29udGVudCA9IFwiKzkwIDk5OSA5OVwiO1xyXG4gIGNvbnN0IGFkZE1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhZGRNYWlsLmhyZWYgPSBcIm1haWx0bzpoZWxsb0B0dXJraXNocGl6emEuY29tXCI7XHJcbiAgYWRkTWFpbC50ZXh0Q29udGVudCA9IFwiaGVsbG9AdHVya2lzaHBpenphLmNvbVwiO1xyXG4gIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xyXG5cclxuICAvL1xyXG4gIC8vL1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiQ29tcGFueVwiO1xyXG4gIGNvbnN0IGxvZ29BdHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGxvZ29BdHRzLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWF0dHNcIik7XHJcbiAgY29uc3QgbG9nb0F0dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbG9nb0F0dDEuY2xhc3NMaXN0LmFkZChcImxvZ28tYXR0XCIpO1xyXG4gIGNvbnN0IGxvZ29BdHQxYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGxvZ29BdHQxYS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVHVya2lzaFBpenphXCI7XHJcbiAgbG9nb0F0dDFhLmhyZWYgPSBcIiNcIjtcclxuICBjb25zdCBsb2dvQXR0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBsb2dvQXR0Mi5jbGFzc0xpc3QuYWRkKFwibG9nby1hdHRcIik7XHJcbiAgY29uc3QgbG9nb0F0dDJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgbG9nb0F0dDJhLnRleHRDb250ZW50ID0gXCJGb3IgQnVzaW5lc3NcIjtcclxuICBsb2dvQXR0MmEuaHJlZiA9IFwiI1wiO1xyXG4gIGNvbnN0IGxvZ29BdHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGxvZ29BdHQzLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWF0dFwiKTtcclxuICBjb25zdCBsb2dvQXR0M2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBsb2dvQXR0M2EudGV4dENvbnRlbnQgPSBcIkNhcmVlcnNcIjtcclxuICBsb2dvQXR0M2EuaHJlZiA9IFwiI1wiO1xyXG4gIC8vL1xyXG5cclxuICAvL1xyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XHJcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIlJlc291cmNlc1wiO1xyXG4gIGNvbnN0IGFib3V0QXR0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBhYm91dEF0dHMuY2xhc3NMaXN0LmFkZChcImFib3V0LWF0dHNcIik7XHJcbiAgY29uc3QgYWJvdXRBdHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGFib3V0QXR0MS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtYXR0XCIpO1xyXG4gIGNvbnN0IGFib3V0QXR0MWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhYm91dEF0dDFhLnRleHRDb250ZW50ID0gXCJSZWNpcGUgZGlyZWN0b3J5XCI7XHJcbiAgYWJvdXRBdHQxYS5ocmVmID0gXCIjXCI7XHJcbiAgY29uc3QgYWJvdXRBdHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGFib3V0QXR0Mi5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtYXR0XCIpO1xyXG4gIGNvbnN0IGFib3V0QXR0MmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhYm91dEF0dDJhLnRleHRDb250ZW50ID0gXCJIZWxwIGNlbnRlclwiO1xyXG4gIGFib3V0QXR0MmEuaHJlZiA9IFwiI1wiO1xyXG4gIGNvbnN0IGFib3V0QXR0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBhYm91dEF0dDMuY2xhc3NMaXN0LmFkZChcImFib3V0LWF0dFwiKTtcclxuICBjb25zdCBhYm91dEF0dDNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYWJvdXRBdHQzYS50ZXh0Q29udGVudCA9IFwiUHJpdmFjeSAmIHRlcm1zXCI7XHJcbiAgYWJvdXRBdHQzYS5ocmVmID0gXCIjXCI7XHJcblxyXG4gIC8vXHJcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcclxuICBjb25zdCBtYXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBtYXBUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFwLXRpdGxlXCIpO1xyXG4gIG1hcFRpdGxlLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgbWFwLmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XHJcbiAgbWFwLnNyYyA9XHJcbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDc2NS4zOTM0MjIyMTE2OTk5ITJkMzIuNzU1NjY2MTg0OTk0NzchM2QzOS44ODM3ODYxNjE0MjU2OSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTRkMzQ3NzI4MjFjZjk5YiUzQTB4ZWY0ZmIwZmYyYmQ5YjczMyEyc0JpbGtlbnQlMjBZb3JrJTIwU3RyZWV0JTIwRm9vZCUyMENvbXBhbnkhNWUwITNtMiExc3RyITJzdHIhNHYxNjQyODkxMjEwNDA0ITVtMiExc3RyITJzdHJcIjtcclxuICAvLy8vXHJcbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcclxuICBoZWFkZXIuYXBwZW5kKG5hdik7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgLy9cclxuICBoZWFkZXIuYXBwZW5kKGNvbnRhY3RVcyk7XHJcbiAgY29udGFjdFVzLmFwcGVuZChhZGRyZXNzKTtcclxuICBjb250YWN0VXMuYXBwZW5kKGxvZ28pO1xyXG4gIGNvbnRhY3RVcy5hcHBlbmQoYWJvdXQpO1xyXG4gIC8vXHJcbiAgbG9nby5hcHBlbmQobG9nb0F0dHMpO1xyXG4gIGxvZ29BdHRzLmFwcGVuZChsb2dvQXR0MSk7XHJcbiAgbG9nb0F0dHMuYXBwZW5kKGxvZ29BdHQyKTtcclxuICBsb2dvQXR0cy5hcHBlbmQobG9nb0F0dDMpO1xyXG4gIGxvZ29BdHQxLmFwcGVuZChsb2dvQXR0MWEpO1xyXG4gIGxvZ29BdHQyLmFwcGVuZChsb2dvQXR0MmEpO1xyXG4gIGxvZ29BdHQzLmFwcGVuZChsb2dvQXR0M2EpO1xyXG4gIC8vXHJcbiAgYWRkcmVzcy5hcHBlbmQoYWRkVGl0bGUpO1xyXG4gIGFkZHJlc3MuYXBwZW5kKGFkZENvbnRlbnQpO1xyXG4gIGFkZENvbnRlbnQuYXBwZW5kKGFkZFAxKTtcclxuICBhZGRDb250ZW50LmFwcGVuZChhZGRQMik7XHJcbiAgYWRkUDIuYXBwZW5kKGFkZFRlbCk7XHJcbiAgYWRkUDIuYXBwZW5kKGJyKTtcclxuICBhZGRQMi5hcHBlbmQoYWRkTWFpbCk7XHJcbiAgLy9cclxuICBhYm91dC5hcHBlbmQoYWJvdXRBdHRzKTtcclxuICBhYm91dEF0dHMuYXBwZW5kKGFib3V0QXR0MSk7XHJcbiAgYWJvdXRBdHQxLmFwcGVuZChhYm91dEF0dDFhKTtcclxuICBhYm91dEF0dHMuYXBwZW5kKGFib3V0QXR0Mik7XHJcbiAgYWJvdXRBdHQyLmFwcGVuZChhYm91dEF0dDJhKTtcclxuICBhYm91dEF0dHMuYXBwZW5kKGFib3V0QXR0Myk7XHJcbiAgYWJvdXRBdHQzLmFwcGVuZChhYm91dEF0dDNhKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChsb2NhdGlvbik7XHJcbiAgbG9jYXRpb24uYXBwZW5kKG1hcFRpdGxlKTtcclxuICBsb2NhdGlvbi5hcHBlbmQobWFwKTtcclxuXHJcbiAgY29udGFjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmE4YThcIjtcclxuICBjb250YWN0LnN0eWxlLmNvbG9yID0gXCIjMzMzXCI7XHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDcmVhdG9yO1xyXG4iLCJmdW5jdGlvbiBob21lQ3JlYXRvcigpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5cclxuICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lclwiKTtcclxuICBjb25zdCB0ZXh0SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRleHRJbm5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC1pbm5lclwiKTtcclxuXHJcbiAgY29uc3QgbmF2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIG5hdkhlYWRlci50ZXh0Q29udGVudCA9IFwiTGFobWFjdW4gJiBQaWRlIFR1cmtpc2ggUGl6emFcIjtcclxuXHJcbiAgY29uc3QgbmF2UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG5hdlAuY2xhc3NMaXN0LmFkZChcIm5hdi1wXCIpO1xyXG4gIG5hdlAudGV4dENvbnRlbnQgPSBcIkZsYXZvciBmcm9tIHdvb2QgZmlyZS4gSXQncyBvdmVuLWJha2VkIGdvb2RuZXNzLiBcIjtcclxuXHJcbiAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIG5hdkxpbmsuaHJlZiA9IFwiI1wiO1xyXG4gIG5hdkxpbmsuY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcclxuICBuYXZMaW5rLnRleHRDb250ZW50ID0gXCJTdGFydCBlYXRpbmdcIjtcclxuICAvLy9cclxuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xyXG4gIGhlYWRlci5hcHBlbmQobmF2KTtcclxuICBoZWFkZXIuYXBwZW5kKHRleHREaXYpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChob21lKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gIHRleHREaXYuYXBwZW5kKHRleHRJbm5lcik7XHJcbiAgdGV4dElubmVyLmFwcGVuZChuYXZIZWFkZXIpO1xyXG4gIHRleHRJbm5lci5hcHBlbmQobmF2UCk7XHJcbiAgdGV4dElubmVyLmFwcGVuZChuYXZMaW5rKTtcclxuICAvL1xyXG4gIGNvbnRlbnQucmVtb3ZlKCk7XHJcblxyXG4gIGhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZhOGE4XCI7XHJcbiAgaG9tZS5zdHlsZS5jb2xvciA9IFwiIzMzM1wiO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lQ3JlYXRvcjtcclxuIiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG4vLy8vLy9cclxuaW1wb3J0IGhvbWVDcmVhdG9yIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IG1lbnVDcmVhdG9yIGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGNvbnRhY3RDcmVhdG9yIGZyb20gXCIuL2NvbnRhY3RcIjtcclxuLy8vLy8vXHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChob21lQ3JlYXRvcigpKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBpZiAoXHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJob21lXCIpICYmXHJcbiAgICAhZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnRleHQtY29udGFpbmVyXCIpXHJcbiAgKSB7XHJcbiAgICBjb250ZW50LnJlbW92ZSgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaG9tZUNyZWF0b3IoKSk7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51XCIpICYmXHJcbiAgICAhZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLm1lYWwtY29udGFpbmVyXCIpXHJcbiAgKSB7XHJcbiAgICBjb250ZW50LnJlbW92ZSgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWVudUNyZWF0b3IoKSk7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29udGFjdFwiKSkge1xyXG4gICAgY29udGVudC5yZW1vdmUoKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRhY3RDcmVhdG9yKCkpO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgbGFobWFjdW5JbWcgZnJvbSBcIi4vbGFobWFjdW4uanBnXCI7XHJcbmltcG9ydCBwaWRlSW1nIGZyb20gXCIuL3BpZGUuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBtZW51Q3JlYXRvcigpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG4gIC8vLy9cclxuICBjb25zdCBtZWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBtZWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWFsLmNsYXNzTGlzdC5hZGQoXCJtZWFsXCIpO1xyXG4gIGNvbnN0IGxhaG1hY3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBsYWhtYWN1bi5jbGFzc0xpc3QuYWRkKFwibWVhbC1pbWdcIik7XHJcbiAgbGFobWFjdW4uc3JjID0gbGFobWFjdW5JbWc7XHJcbiAgbGFobWFjdW4uYWx0ID0gXCJsYWhtYWN1biBpbWFnZVwiO1xyXG4gIGNvbnN0IG1lYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVhbC1jb250ZW50XCIpO1xyXG4gIGNvbnN0IG1lYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG1lYWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVhbC10aXRsZS0xXCIpO1xyXG4gIG1lYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiTGFobWFjdW5cIjtcclxuICBjb25zdCBtZWFsVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgbWVhbFRhZy5jbGFzc0xpc3QuYWRkKFwidGFnXCIpO1xyXG4gIG1lYWxUYWcudGV4dENvbnRlbnQgPSBcIlByaWNlOiAzJFwiO1xyXG4gIGNvbnN0IG1lYWxBdHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIG1lYWxBdHRzLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dHNcIik7XHJcbiAgY29uc3QgbWVhbEF0dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDEuY2xhc3NMaXN0LmFkZChcIm1lYWwtYXR0XCIpO1xyXG4gIG1lYWxBdHQxLnRleHRDb250ZW50ID0gXCJGbGF0IEJyZWFkXCI7XHJcbiAgY29uc3QgbWVhbEF0dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDIuY2xhc3NMaXN0LmFkZChcIm1lYWwtYXR0XCIpO1xyXG4gIG1lYWxBdHQyLnRleHRDb250ZW50ID0gXCJNaW5jZWQgTWVhdFwiO1xyXG4gIGNvbnN0IG1lYWxBdHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIG1lYWxBdHQzLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dFwiKTtcclxuICBtZWFsQXR0My50ZXh0Q29udGVudCA9IFwiTWluY2VkIFZlZ2V0YWJsZXNcIjtcclxuICAvLy8vLy9cclxuICBjb25zdCBtZWFsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVhbDIuY2xhc3NMaXN0LmFkZChcIm1lYWxcIik7XHJcbiAgY29uc3QgcGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGlkZS5jbGFzc0xpc3QuYWRkKFwibWVhbC1pbWdcIik7XHJcbiAgcGlkZS5zcmMgPSBwaWRlSW1nO1xyXG4gIHBpZGUuYWx0ID0gXCJwaWRlIGltYWdlXCI7XHJcbiAgY29uc3QgbWVhbENvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWFsQ29udGVudDIuY2xhc3NMaXN0LmFkZChcIm1lYWwtY29udGVudFwiKTtcclxuICBjb25zdCBtZWFsVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgbWVhbFRpdGxlMi5jbGFzc0xpc3QuYWRkKFwibWVhbC10aXRsZS0xXCIpO1xyXG4gIG1lYWxUaXRsZTIudGV4dENvbnRlbnQgPSBcIlBpZGVcIjtcclxuICBjb25zdCBtZWFsVGFnMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIG1lYWxUYWcyLmNsYXNzTGlzdC5hZGQoXCJ0YWdcIik7XHJcbiAgbWVhbFRhZzIudGV4dENvbnRlbnQgPSBcIlByaWNlOiA1JFwiO1xyXG4gIGNvbnN0IG1lYWxBdHRzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBtZWFsQXR0czIuY2xhc3NMaXN0LmFkZChcIm1lYWwtYXR0c1wiKTtcclxuICBjb25zdCBtZWFsQXR0MTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDEyLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dFwiKTtcclxuICBtZWFsQXR0MTIudGV4dENvbnRlbnQgPSBcIkZsYXQgQnJlYWRcIjtcclxuICBjb25zdCBtZWFsQXR0MjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDIyLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dFwiKTtcclxuICBtZWFsQXR0MjIudGV4dENvbnRlbnQgPSBcIkJlZWYgQ3ViZXNcIjtcclxuICBjb25zdCBtZWFsQXR0MzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVhbEF0dDMyLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWF0dFwiKTtcclxuICBtZWFsQXR0MzIudGV4dENvbnRlbnQgPSBcIkdyZWVuIFBlcHBlcnMgJiBUb21hdG9cIjtcclxuXHJcbiAgLy8vXHJcbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcclxuICBoZWFkZXIuYXBwZW5kKG5hdik7XHJcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbiAgaGVhZGVyLmFwcGVuZChtZWFsQ29udGFpbmVyKTtcclxuICBtZWFsQ29udGFpbmVyLmFwcGVuZChtZWFsKTtcclxuICBtZWFsLmFwcGVuZChsYWhtYWN1bik7XHJcbiAgbWVhbC5hcHBlbmQobWVhbENvbnRlbnQpO1xyXG4gIG1lYWxDb250ZW50LmFwcGVuZChtZWFsVGl0bGUpO1xyXG4gIG1lYWxDb250ZW50LmFwcGVuZChtZWFsVGFnKTtcclxuICBtZWFsQ29udGVudC5hcHBlbmQobWVhbEF0dHMpO1xyXG4gIG1lYWxBdHRzLmFwcGVuZChtZWFsQXR0MSk7XHJcbiAgbWVhbEF0dHMuYXBwZW5kKG1lYWxBdHQyKTtcclxuICBtZWFsQXR0cy5hcHBlbmQobWVhbEF0dDMpO1xyXG4gIC8vL1xyXG4gIG1lYWxDb250YWluZXIuYXBwZW5kKG1lYWwyKTtcclxuICBtZWFsMi5hcHBlbmQocGlkZSk7XHJcbiAgbWVhbDIuYXBwZW5kKG1lYWxDb250ZW50Mik7XHJcbiAgbWVhbENvbnRlbnQyLmFwcGVuZChtZWFsVGl0bGUyKTtcclxuICBtZWFsQ29udGVudDIuYXBwZW5kKG1lYWxUYWcyKTtcclxuICBtZWFsQ29udGVudDIuYXBwZW5kKG1lYWxBdHRzMik7XHJcbiAgbWVhbEF0dHMyLmFwcGVuZChtZWFsQXR0MTIpO1xyXG4gIG1lYWxBdHRzMi5hcHBlbmQobWVhbEF0dDIyKTtcclxuICBtZWFsQXR0czIuYXBwZW5kKG1lYWxBdHQzMik7XHJcblxyXG4gIG1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZhOGE4XCI7XHJcbiAgbWVudS5zdHlsZS5jb2xvciA9IFwiIzMzM1wiO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51Q3JlYXRvcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9