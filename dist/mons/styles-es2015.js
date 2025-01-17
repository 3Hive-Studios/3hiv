(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 10:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/owen/GitHub/0xmons/0xmons/src/styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

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

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

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

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n--black: rgb(0, 0, 0);\n--darkest-gray: rgb(7, 15, 37);\n--darker-gray: #1c2541ff;\n--dark-gray: #2b3b56ff;\n--gray: #6081a9ff;\n--dark-green: rgb(52, 107, 99);\n--med-green: rgb(102, 223, 205);\n--green: rgb(133, 207, 196);\n--solid-green: rgb(62, 150, 120);\n--light-green: rgb(209, 240, 240);\n--red: rgb(110, 56, 56);\n--gray-green: rgb(61, 88, 84);\n--pink: rgb(255, 77, 164);\n--light-pink: rgb(224, 159, 191);\n--dark-pink: rgb(211, 37, 121);\n\n/* new colors */\n--light-gray: rgb(194, 194, 194);\n}\n\nbody {\n  background-color: var(--black);\n  color: var(--light-gray);\n  font-family: \"Lucida Console\", \"Courier New\", Courier, Monaco, monospace;\n}\n\na {\n  color: var(--med-green);\n}\n\na:hover {\n  color: var(--pink);\n}\n\nbutton {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem 0.5rem;\n  font-family: Courier, monospace;\n  color: var(--light-gray);\n  background-color: var(--black);\n  font-size: 1.4rem;\n  font-weight: bold;\n  border: 2px solid var(--gray);\n  text-transform: uppercase;\n  border-radius: 2px;\n}\n\nbutton:hover {\n  background-color: var(--darker-gray);\n  color: white;\n  border: 2px solid var(--light-green);\n}\n\nhr {\n  color: none;\n  border: 1px solid var(--light-gray);\n  margin: 1rem 1rem;\n}\n\n/* Keep pixelation by default for images*/\n\nimg { \n  image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */\n  image-rendering: -moz-crisp-edges;          /* Firefox                        */\n  image-rendering: -o-crisp-edges;            /* Opera                          */ /* Chrome (and eventually Safari) */\n  image-rendering: pixelated;                 /* CSS3 */\n  -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */\n}\n\nbutton:disabled,\nbutton[disabled]{\n  background-color: var(black) !important;\n  color: var(--gray) !important;\n  cursor: not-allowed;\n  pointer-events: none;\n  border: 2px solid var(--dark-gray) !important;\n}\n\nselect {\n  border: 2px solid var(--gray);\n  background-color: var(--black);\n  color: var(--light-gray);\n  font-size: 1.3rem;\n  width: 80%;\n  max-width: 15rem;\n  padding: 0.1rem 0.1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\ninput, textarea {\n  background-color : var(--black) !important; \n  color: white !important;\n  outline: none;\n  border: 2px solid var(--gray);\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n}\n\n.container {\n  max-width: 60rem;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 1.1rem;\n}\n\n.cursed-text {\n  color: white;\n  font-size: 1.3rem;\n  font-weight: bold;\n  font-style: italic;\n  text-transform: uppercase;\n  text-shadow: -4px 4px var(--med-green), 3px -2px var(--pink);\n}\n\n.card {\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n  text-align: center;\n  background-color: var(--black);\n  border: 2px solid var(--light-gray);\n  font-size: 1.2rem;\n  padding: 0.5rem 0.5rem;\n}\n\n.card > div {\n  margin: 1rem 1rem;\n}\n\n.card-title {\n  font-size: 1.5rem;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  color: var(--green);\n  font-weight: bold;\n}\n\n.centered {\n  text-align: center;\n}\n\n.header {\n  font-size: 2.5rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.header > .cursed-text {\n  font-size: 4rem;\n}\n\n.bn-onboard-custom {\n  text-transform: unset;\n}\n\n.two-cols {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\n\n.xmon-ticker {\n  margin-left: 0.5rem;\n  font-weight: bold;\n}\n\n.xmon-ticker {\n  color: var(--med-green);\n}\n\n.nice-button {\n  margin: 0.5rem 0.5rem;\n  text-transform: none;\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 1rem;\n  color: white;\n  border: 3px solid var(--dark-gray);\n  border-radius: 4px;\n}\n\n.nice-button:hover {\n  border: 3px solid var(--gray);\n}\n\n@-webkit-keyframes blinker {\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.75;\n  }\n  75% {\n    opacity: 1;\n  }\n}\n\n@keyframes blinker {\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.75;\n  }\n  75% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes colorFlash {\n  25% {\n    box-shadow: -3px 3px var(--med-green);\n  }\n  50% {\n    box-shadow: -2px 3px var(--med-green), 1px -1px var(--pink);\n  }\n  75% {\n    box-shadow: -1px 2px var(--med-green), 3px -2px var(--pink);\n  }\n}\n\n@keyframes colorFlash {\n  25% {\n    box-shadow: -3px 3px var(--med-green);\n  }\n  50% {\n    box-shadow: -2px 3px var(--med-green), 1px -1px var(--pink);\n  }\n  75% {\n    box-shadow: -1px 2px var(--med-green), 3px -2px var(--pink);\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .two-cols {\n    display: block;\n  }\n  .form {\n    width: unset !important;\n  }\n}", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n--black: rgb(0, 0, 0);\n--darkest-gray: rgb(7, 15, 37);\n--darker-gray: #1c2541ff;\n--dark-gray: #2b3b56ff;\n--gray: #6081a9ff;\n--dark-green: rgb(52, 107, 99);\n--med-green: rgb(102, 223, 205);\n--green: rgb(133, 207, 196);\n--solid-green: rgb(62, 150, 120);\n--light-green: rgb(209, 240, 240);\n--red: rgb(110, 56, 56);\n--gray-green: rgb(61, 88, 84);\n--pink: rgb(255, 77, 164);\n--light-pink: rgb(224, 159, 191);\n--dark-pink: rgb(211, 37, 121);\n\n/* new colors */\n--light-gray: rgb(194, 194, 194);\n}\n\nbody {\n  background-color: var(--black);\n  color: var(--light-gray);\n  font-family: \"Lucida Console\", \"Courier New\", Courier, Monaco, monospace;\n}\n\na {\n  color: var(--med-green);\n}\na:hover {\n  color: var(--pink);\n}\n\nbutton {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem 0.5rem;\n  font-family: Courier, monospace;\n  color: var(--light-gray);\n  background-color: var(--black);\n  font-size: 1.4rem;\n  font-weight: bold;\n  border: 2px solid var(--gray);\n  text-transform: uppercase;\n  border-radius: 2px;\n}\n\nbutton:hover {\n  background-color: var(--darker-gray);\n  color: white;\n  border: 2px solid var(--light-green);\n}\n\nhr {\n  color: none;\n  border: 1px solid var(--light-gray);\n  margin: 1rem 1rem;\n}\n\n/* Keep pixelation by default for images*/\nimg { \n  image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */\n  image-rendering: -moz-crisp-edges;          /* Firefox                        */\n  image-rendering: -o-crisp-edges;            /* Opera                          */\n  image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */\n  image-rendering: pixelated;                 /* CSS3 */\n  -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */\n}\n\nbutton:disabled,\nbutton[disabled]{\n  background-color: var(black) !important;\n  color: var(--gray) !important;\n  cursor: not-allowed;\n  pointer-events: none;\n  border: 2px solid var(--dark-gray) !important;\n}\n\nselect {\n  border: 2px solid var(--gray);\n  background-color: var(--black);\n  color: var(--light-gray);\n  font-size: 1.3rem;\n  width: 80%;\n  max-width: 15rem;\n  padding: 0.1rem 0.1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\ninput, textarea {\n  background-color : var(--black) !important; \n  color: white !important;\n  outline: none;\n  border: 2px solid var(--gray);\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n}\n\n.container {\n  max-width: 60rem;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 1.1rem;\n}\n\n.cursed-text {\n  color: white;\n  font-size: 1.3rem;\n  font-weight: bold;\n  font-style: italic;\n  text-transform: uppercase;\n  text-shadow: -4px 4px var(--med-green), 3px -2px var(--pink);\n}\n\n.card {\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n  text-align: center;\n  background-color: var(--black);\n  border: 2px solid var(--light-gray);\n  font-size: 1.2rem;\n  padding: 0.5rem 0.5rem;\n}\n\n.card > div {\n  margin: 1rem 1rem;\n}\n\n\n.card-title {\n  font-size: 1.5rem;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  color: var(--green);\n  font-weight: bold;\n}\n\n.centered {\n  text-align: center;\n}\n.header {\n  font-size: 2.5rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.header > .cursed-text {\n  font-size: 4rem;\n}\n\n.bn-onboard-custom {\n  text-transform: unset;\n}\n\n.two-cols {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 1rem;\n}\n\n.xmon-ticker {\n  margin-left: 0.5rem;\n  font-weight: bold;\n}\n.xmon-ticker {\n  color: var(--med-green);\n}\n\n.nice-button {\n  margin: 0.5rem 0.5rem;\n  text-transform: none;\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 1rem;\n  color: white;\n  border: 3px solid var(--dark-gray);\n  border-radius: 4px;\n}\n.nice-button:hover {\n  border: 3px solid var(--gray);\n}\n\n@keyframes blinker {\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.75;\n  }\n  75% {\n    opacity: 1;\n  }\n}\n\n@keyframes colorFlash {\n  25% {\n    box-shadow: -3px 3px var(--med-green);\n  }\n  50% {\n    box-shadow: -2px 3px var(--med-green), 1px -1px var(--pink);\n  }\n  75% {\n    box-shadow: -1px 2px var(--med-green), 3px -2px var(--pink);\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .two-cols {\n    display: block;\n  }\n  .form {\n    width: unset !important;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[10,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map