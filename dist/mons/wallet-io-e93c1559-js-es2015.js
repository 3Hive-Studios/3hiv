(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-io-e93c1559-js"],{

/***/ "BUl9":
/*!*****************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/wallet-io-e93c1559.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ "36aJ");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var walletIoIcon = "\n<svg  width=\"40\" height=\"40\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<!-- Generator: Sketch 61 (89581) - https://sketch.com -->\n<title>io</title>\n<desc>Created with Sketch.</desc>\n<defs>\n    <linearGradient x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"0%\" id=\"linearGradient-1\">\n        <stop stop-color=\"#1550FF\" offset=\"0%\"></stop>\n        <stop stop-color=\"#0D8DFF\" offset=\"100%\"></stop>\n    </linearGradient>\n</defs>\n<g id=\"io\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0.000000, 0.000000)\">\n    <g id=\"\u7F16\u7EC4\">\n        <rect id=\"\u77E9\u5F62\" fill=\"url(#linearGradient-1)\" x=\"0\" y=\"0\" width=\"1024\" height=\"1024\" rx=\"192\"></rect>\n        <g id=\"2\" transform=\"translate(142.000000, 354.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\">\n            <path d=\"M731.739038,157.885431 L653.658027,240.742988 C643.041073,252.009426 625.301078,252.535937 614.03464,241.918982 C612.84708,240.799883 611.75951,239.579221 610.784322,238.270905 L529.136156,128.731487 C521.006704,117.824991 521.881341,102.656017 531.210479,92.7561767 L609.29149,9.89862053 C619.908444,-1.36781768 637.648439,-1.89432843 648.914877,8.72262585 C650.102437,9.84172546 651.190007,11.0623873 652.165195,12.3707028 L733.813361,121.910121 C741.942813,132.816618 741.068176,147.985591 731.739038,157.885431 Z\" id=\"\u8DEF\u5F84\"></path>\n            <path d=\"M586.491167,312.367718 L508.410156,395.225274 C497.793202,406.491713 480.053207,407.018223 468.786769,396.401269 C467.599209,395.282169 466.511639,394.061508 465.536451,392.753192 L268.220049,128.032931 C260.090597,117.126435 260.965235,101.957461 270.294372,92.0576207 L348.375384,9.20006454 C358.992338,-2.06637367 376.732333,-2.59288442 387.998771,8.02406986 C389.18633,9.14316947 390.2739,10.3638313 391.249089,11.6721468 L588.56549,276.392408 C596.694942,287.298904 595.820305,302.467878 586.491167,312.367718 Z\" id=\"\u8DEF\u5F84\" opacity=\"0.75\"></path>\n            <path d=\"M586.345922,312.172858 L508.264911,395.030414 C497.647957,406.296852 479.907962,406.823363 468.641524,396.206409 C467.453965,395.087309 466.366395,393.866647 465.391206,392.558332 L369.686767,264.160976 L486.808283,139.874642 L588.420246,276.197548 C596.549698,287.104044 595.67506,302.273017 586.345922,312.172858 Z\" id=\"\u8DEF\u5F84\"></path>\n            <path d=\"M128.683329,11.9400119 L325.99973,276.660273 C334.129182,287.566769 333.254545,302.735743 323.925407,312.635583 L245.844396,395.493139 C235.227442,406.759578 217.487447,407.286088 206.221009,396.669134 C205.033449,395.550035 203.945879,394.329373 202.970691,393.021057 L5.65428933,128.300796 C-2.47516249,117.3943 -1.60052498,102.225326 7.72861266,92.3254858 L85.8096237,9.46792962 C96.426578,-1.79850858 114.166573,-2.32501933 125.433011,8.29193494 C126.620571,9.41103455 127.708141,10.6316964 128.683329,11.9400119 Z\" id=\"\u8DEF\u5F84\" opacity=\"0.5\"></path>\n            <path d=\"M224.568875,140.58034 L326.180837,276.903246 C334.310289,287.809742 333.435651,302.978716 324.106514,312.878556 L246.025503,395.736112 C235.408548,407.002551 217.668554,407.529061 206.402115,396.912107 C205.214556,395.793008 204.126986,394.572346 203.151797,393.26403 L107.447358,264.866675 L224.568875,140.58034 Z\" id=\"\u8DEF\u5F84\" opacity=\"0.5\"></path>\n        </g>\n    </g>\n</g>\n</svg>\n";

function walletIoWallet(options) {
  var preferred = options.preferred,
      label = options.label,
      svg = options.svg,
      rpcUrl = options.rpcUrl;
  return {
    name: label || 'wallet.io',
    svg: svg || walletIoIcon,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {
        var getProviderName, getAddress, getNetwork, getBalance, walletIoProvider, isWalleIoWallet, createProvider, provider, warned;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork, getBalance = helpers.getBalance;
                walletIoProvider = window.ethereum || window.web3 && window.web3.currentProvider;
                isWalleIoWallet = getProviderName(walletIoProvider) === 'wallet.io';

                if (!(isWalleIoWallet && rpcUrl)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return Promise.all(/*! import() | providerEngine-597c2212-js */[__webpack_require__.e("default~authereum~providerEngine-597c2212-js~walletconnect-web3-provider"), __webpack_require__.e("default~providerEngine-597c2212-js~walletconnect-web3-provider"), __webpack_require__.e("common"), __webpack_require__.e("providerEngine-597c2212-js")]).then(__webpack_require__.bind(null, /*! ./providerEngine-597c2212.js */ "J3L4"));

              case 6:
                createProvider = _context2.sent["default"];

              case 7:
                provider = createProvider ? createProvider({
                  rpcUrl: rpcUrl
                }) : null;
                warned = false;
                return _context2.abrupt("return", {
                  provider: walletIoProvider,
                  "interface": isWalleIoWallet ? {
                    address: {
                      get: function get() {
                        return getAddress(walletIoProvider);
                      }
                    },
                    network: {
                      get: function get() {
                        return getNetwork(walletIoProvider);
                      }
                    },
                    balance: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (provider) {
                                    _context.next = 3;
                                    break;
                                  }

                                  if (!warned) {
                                    console.warn('The wallet.io Wallet provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the wallet.io Wallet initialization object to get the balance.');
                                    warned = true;
                                  }

                                  return _context.abrupt("return", null);

                                case 3:
                                  _context.next = 5;
                                  return getAddress(walletIoProvider);

                                case 5:
                                  address = _context.sent;
                                  return _context.abrupt("return", getBalance(provider, address));

                                case 7:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    name: getProviderName(walletIoProvider)
                  } : null
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    link: 'http://wallet.io/',
    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__["m"],
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (walletIoWallet);

/***/ })

}]);
//# sourceMappingURL=wallet-io-e93c1559-js-es2015.js.map