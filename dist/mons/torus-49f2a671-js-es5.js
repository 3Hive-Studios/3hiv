(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["torus-49f2a671-js"], {
    /***/
    "TOIH":
    /*!*************************************************************!*\
      !*** ./node_modules/bnc-onboard/dist/esm/torus-49f2a671.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function TOIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! regenerator-runtime/runtime */
      "ls82");
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _onboard_c11b1ecb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./onboard-c11b1ecb.js */
      "CA1r");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! bnc-sdk */
      "/TMw");
      /* harmony import */


      var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! bowser */
      "M39V");
      /* harmony import */


      var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      var torusIcon = "<svg width=\"257\" height=\"277\" viewBox=\"0 0 257 277\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"153.889\" height=\"82.0741\" fill=\"#0364FF\" />\n<rect x=\"71.8135\" width=\"82.0741\" height=\"277\" fill=\"#0364FF\" />\n<path d=\"M215.443 82.0741C238.107 82.0741 256.48 63.7012 256.48 41.037C256.48 18.3729 238.107 0 215.443 \n0C192.779 0 174.406 18.3729 174.406 41.037C174.406 63.7012 192.779 82.0741 215.443 82.0741Z\" fill=\"#0364FF\" />\n</svg>";

      function torus(options) {
        var networkId = options.networkId,
            preferred = options.preferred,
            label = options.label,
            iconSrc = options.iconSrc,
            svg = options.svg,
            buttonPosition = options.buttonPosition,
            modalZIndex = options.modalZIndex,
            apiKey = options.apiKey,
            buildEnv = options.buildEnv,
            enableLogging = options.enableLogging,
            enabledVerifiers = options.enabledVerifiers,
            loginConfig = options.loginConfig,
            showTorusButton = options.showTorusButton,
            integrity = options.integrity,
            whiteLabel = options.whiteLabel,
            loginMethod = options.loginMethod;
        return {
          name: label || 'Torus',
          svg: svg || torusIcon,
          iconSrc: iconSrc,
          wallet: function () {
            var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _yield$import, Torus, instance, provider;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return Promise.all(
                      /*! import() | toruslabs-torus-embed */
                      [__webpack_require__.e("common"), __webpack_require__.e("toruslabs-torus-embed")]).then(__webpack_require__.t.bind(null,
                      /*! @toruslabs/torus-embed */
                      "vGOQ", 7));

                    case 2:
                      _yield$import = _context3.sent;
                      Torus = _yield$import["default"];
                      instance = new Torus({
                        buttonPosition: buttonPosition,
                        modalZIndex: modalZIndex,
                        apiKey: apiKey
                      });
                      _context3.next = 7;
                      return instance.init({
                        buildEnv: buildEnv,
                        enableLogging: enableLogging,
                        network: {
                          host: Object(_onboard_c11b1ecb_js__WEBPACK_IMPORTED_MODULE_1__["n"])(networkId),
                          chainId: networkId,
                          networkName: "".concat(Object(_onboard_c11b1ecb_js__WEBPACK_IMPORTED_MODULE_1__["n"])(networkId), " Network") // default: Main Ethereum Network

                        },
                        showTorusButton: showTorusButton,
                        enabledVerifiers: enabledVerifiers,
                        loginConfig: loginConfig,
                        integrity: integrity,
                        whiteLabel: whiteLabel
                      });

                    case 7:
                      provider = instance.provider;
                      return _context3.abrupt("return", {
                        provider: provider,
                        instance: instance,
                        "interface": {
                          name: 'Torus',
                          connect: function () {
                            var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                              var result;
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return instance.login({
                                        verifier: loginMethod
                                      });

                                    case 2:
                                      result = _context.sent;
                                      return _context.abrupt("return", {
                                        message: result[0]
                                      });

                                    case 4:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            function connect() {
                              return _connect.apply(this, arguments);
                            }

                            return connect;
                          }(),
                          disconnect: function disconnect() {
                            return instance.cleanUp();
                          },
                          address: {
                            get: function get() {
                              return Promise.resolve(instance.web3.eth.accounts[0]);
                            }
                          },
                          network: {
                            get: function get() {
                              return Promise.resolve(Number(instance.web3.version.network));
                            }
                          },
                          balance: {
                            get: function get() {
                              return new Promise( /*#__PURE__*/function () {
                                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
                                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                    while (1) {
                                      switch (_context2.prev = _context2.next) {
                                        case 0:
                                          instance.web3.eth.getBalance(instance.web3.eth.accounts[0], function (err, data) {
                                            if (err) {
                                              reject("Error while checking Balance: ".concat(err));
                                            } else {
                                              resolve(data.toString(10));
                                            }
                                          });

                                        case 1:
                                        case "end":
                                          return _context2.stop();
                                      }
                                    }
                                  }, _callee2);
                                }));

                                return function (_x, _x2) {
                                  return _ref.apply(this, arguments);
                                };
                              }());
                            }
                          },
                          dashboard: function dashboard() {
                            return instance.showWallet('home');
                          }
                        }
                      });

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            function wallet() {
              return _wallet.apply(this, arguments);
            }

            return wallet;
          }(),
          type: 'sdk',
          desktop: true,
          mobile: true,
          preferred: preferred
        };
      }
      /* harmony default export */


      __webpack_exports__["default"] = torus;
      /***/
    }
  }]);
})();
//# sourceMappingURL=torus-49f2a671-js-es5.js.map