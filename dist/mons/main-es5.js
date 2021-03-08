(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/owen/GitHub/0xmons/0xmons-web/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2PZg":
    /*!*************************************!*\
      !*** ./src/assets/abi/ERC1155.json ***!
      \*************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, default */

    /***/
    function PZg(module) {
      module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_proxyRegistryAddress\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"_uri\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"WhitelistAdminAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"WhitelistAdminRemoved\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addWhitelistAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_owners\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contractURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maxSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initialSupply\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_uri\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"create\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"creators\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"isOperator\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isMinter\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isWhitelistAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"maxSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_quantity\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"mint\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"removeMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"removeWhitelistAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceWhitelistAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_newBaseMetadataURI\",\"type\":\"string\"}],\"name\":\"setBaseMetadataURI\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"_interfaceID\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenMaxSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    3:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "3jk2":
    /*!********************************************!*\
      !*** ./src/app/summon/summon.component.ts ***!
      \********************************************/

    /*! exports provided: SummonComponent */

    /***/
    function jk2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummonComponent", function () {
        return SummonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SummonComponent = /*#__PURE__*/function () {
        function SummonComponent(wallet, contract, constants, utils) {
          _classCallCheck(this, SummonComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.resetData();
        }

        _createClass(SummonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.wallet.connected) {
              this.loadData();
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this.loadData();
            });
            this.wallet.errorEvent.subscribe(function () {
              _this.resetData();
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.stakedXmon = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.maxStakeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.xmonBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.doomBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.doomFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.unlockBlock = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.baseDelay = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.currentDelay = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.resetFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.maxDelay = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.numMons = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.maxMons = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.canSummon = false;
            this.doomPerHour = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var multicallFns, multicallKeys, multicallValues, rawResult, multicallResults, currDoomBalance, pendingDoomBalance;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      multicallFns = {
                        "xmonBalance": {
                          target: this.constants.XMON_ADDRESS,
                          callData: this.contract.XMON.methods.balanceOf(this.wallet.userAddress).encodeABI()
                        },
                        "maxStakeAmount": {
                          target: this.constants.MON_STAKER_ADDRESS,
                          callData: this.contract.MON_STAKER.methods.maxStake().encodeABI()
                        },
                        "doomFee": {
                          target: this.constants.MON_STAKER_ADDRESS,
                          callData: this.contract.MON_STAKER.methods.doomFee(this.wallet.userAddress).encodeABI()
                        },
                        "doomBalance": {
                          target: this.constants.MON_STAKER_ADDRESS,
                          callData: this.contract.MON_STAKER.methods.doomBalances(this.wallet.userAddress).encodeABI()
                        },
                        "pendingDoomBalance": {
                          target: this.constants.MON_STAKER_ADDRESS,
                          callData: this.contract.MON_STAKER.methods.pendingDoom(this.wallet.userAddress).encodeABI()
                        },
                        "stakeRecords": {
                          target: this.constants.MON_STAKER_ADDRESS,
                          callData: this.contract.MON_STAKER.methods.stakeRecords(this.wallet.userAddress).encodeABI()
                        },
                        "numMons": {
                          target: this.constants.MON_STAKER_ADDRESS,
                          callData: this.contract.MON_STAKER.methods.numMons().encodeABI()
                        },
                        "maxMons": {
                          target: this.constants.MON_STAKER_ADDRESS,
                          callData: this.contract.MON_STAKER.methods.maxMons().encodeABI()
                        }
                      };
                      multicallKeys = Object.keys(multicallFns);
                      multicallValues = Object.values(multicallFns);
                      _context.next = 5;
                      return this.contract.MULTICALL.methods.aggregate(multicallValues).call();

                    case 5:
                      rawResult = _context.sent;
                      multicallResults = this.utils.zipObject(multicallKeys, rawResult["returnData"]);
                      this.blockNumber = rawResult["blockNumber"];
                      this.xmonBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["xmonBalance"])).div(this.constants.PRECISION);
                      this.maxStakeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["maxStakeAmount"])).div(this.constants.PRECISION);
                      this.doomFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["doomFee"])).div(this.constants.DOOM_SCALING);
                      currDoomBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["doomBalance"]));
                      pendingDoomBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["pendingDoomBalance"]));
                      this.doomBalance = currDoomBalance.plus(pendingDoomBalance).div(this.constants.DOOM_SCALING);
                      this.stakedXmon = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter({
                        "stakeRecord": {
                          "amount": "uint256",
                          "startBlock": "uint256"
                        }
                      }, multicallResults["stakeRecords"])["amount"]).div(this.constants.PRECISION);
                      this.numMons = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["numMons"]));
                      this.maxMons = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["maxMons"])); // Set variables based off onchain info

                      this.canSummon = this.doomBalance.gt(this.doomFee) && this.numMons < this.maxMons;
                      this.doomPerHour = this.stakedXmon.times(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(9)).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(2)).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(60)).times(this.constants.PRECISION).div(this.constants.DOOM_SCALING);

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "stake",
          value: function stake() {
            var _this2 = this;

            if (!this.stakeAmount) {
              this.stakeAmount = '0';
            }

            if (this.stakeAmount === '0') {
              alert("Must have stake greater than 0!");
              return;
            }

            var formattedStakeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.stakeAmount).times(this.constants.PRECISION).integerValue().toFixed();
            var maxStake = this.maxStakeAmount.times(this.constants.PRECISION).integerValue().toFixed();

            if (this.stakedXmon.times(this.constants.PRECISION).plus(formattedStakeAmount).gt(maxStake)) {
              alert("Staking more than max stake!");
              return;
            }

            var func = this.contract.MON_STAKER.methods.addStake(formattedStakeAmount);
            this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.MON_STAKER_ADDRESS, formattedStakeAmount, 200000, function () {}, function () {
              _this2.loadData();
            }, function () {});
          }
        }, {
          key: "removeStake",
          value: function removeStake() {
            var _this3 = this;

            var func = this.contract.MON_STAKER.methods.removeStake();
            this.wallet.sendTx(func, function () {}, function () {
              _this3.loadData();
            }, function () {});
          }
        }, {
          key: "claimMon",
          value: function claimMon() {
            var _this4 = this;

            var func = this.contract.MON_STAKER.methods.claimMon();
            this.wallet.sendTx(func, function () {}, function () {
              _this4.loadData();
            }, function () {});
          }
        }, {
          key: "fillForm",
          value: function fillForm(value) {
            this.stakeAmount = value.toString();
          }
        }]);

        return SummonComponent;
      }();

      SummonComponent.ɵfac = function SummonComponent_Factory(t) {
        return new (t || SummonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]));
      };

      SummonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SummonComponent,
        selectors: [["app-summon"]],
        decls: 102,
        vars: 10,
        consts: [[1, "container"], [1, "centered"], [1, "header"], [1, "cursed-text"], [1, "card"], [1, "xmon-ticker"], [1, "doom-ticker"], ["routerLink", "/collection"], ["href", "https://etherscan.io/address/0xD06337A401B468657dE2f9d3E390cE5b21C3c1C0"], [1, "two-cols"], [1, "stake-header"], [1, "xmon-squid"], [1, "card-text"], [1, "form-holder"], ["placeholder", "0.0000", "name", "stakeAmountInput", 1, "form", 3, "ngModel", "ngModelChange"], ["id", "add-btn", 3, "click"], ["id", "remove-btn", "title", "Removes all of your staked XMON", 3, "click"], [1, "doom-header"], [1, "summon-btn", 3, "disabled", "click"]],
        template: function SummonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "EVOKE");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " the ineffable");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Stake your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " tokens to earn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "DOOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Generate enough DOOM to summon a 0xmon NFT. Head over to your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Collection");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " to see all your 0xmons.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Note: DOOM is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "not");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " an ERC-20 token. It's just an internal point system used by the contract to track your progress.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Contract on Etherscan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "More 0xmons coming soon. DOOM you earn now will give you a bonus for series 2.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\uD83E\uDD91");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " STAKING ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Max stake:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Staking:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Available:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SummonComponent_Template_input_ngModelChange_67_listener($event) {
              return ctx.stakeAmount = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummonComponent_Template_button_click_68_listener() {
              return ctx.stake();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Add Stake");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummonComponent_Template_button_click_70_listener() {
              return ctx.removeStake();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Remove All Stake");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\uD83D\uDC80 GENERATING ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "DOOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Summon Cost:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "DOOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Balance:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "DOOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Rate:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "DOOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " / hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummonComponent_Template_button_click_100_listener() {
              return ctx.claimMon();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "SUMMON 0xmon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.numMons, "/", ctx.maxMons, " 0xmons summoned");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.maxStakeAmount.toFormat(), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.stakedXmon.toFormat(), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.xmonBalance.toFormat(), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.stakeAmount);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.doomFee, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.doomBalance.toFormat(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.doomPerHour, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.canSummon ? "disabled" : null);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
        styles: ["button[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0.5rem 0.5rem;\n}\n\n.two-cols[_ngcontent-%COMP%] {\n  -moz-column-gap: 0rem;\n       column-gap: 0rem;\n}\n\n.cost-header[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.stake-header[_ngcontent-%COMP%], .doom-header[_ngcontent-%COMP%], .delay-header[_ngcontent-%COMP%], .summon-header[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n.stake-header[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n\n.doom-header[_ngcontent-%COMP%] {\n  color: var(--pink);\n}\n\n.xmon-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: -3.75rem;\n  margin-top: -1rem;\n}\n\n.xmon-squid[_ngcontent-%COMP%] {\n  filter: sepia(1) saturate(2.5)  hue-rotate(90deg);\n}\n\n#add-btn[_ngcontent-%COMP%], #remove-btn[_ngcontent-%COMP%] {\n  color: var(--med-green);\n  background-color: var(--black);\n}\n\n#add-btn[_ngcontent-%COMP%]:hover{\n  color: white;\n  background-color: var(--dark-green);\n}\n\n#remove-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: var(--red);\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color : var(--black) !important; \n  color: white !important;\n  font-size: 1.2rem;\n  outline: none;\n  border: 2px solid var(--gray);\n  padding: 0.5rem 0.2rem;\n  width: 21rem;\n}\n\n.form-holder[_ngcontent-%COMP%] {\n  margin: 0.5rem 0.5rem !important;\n}\n\n.xmon-ticker[_ngcontent-%COMP%], .doom-ticker[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-weight: bold;\n}\n\n.xmon-ticker[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n\n.doom-ticker[_ngcontent-%COMP%] {\n  color: var(--pink);\n}\n\n.doom-btn[_ngcontent-%COMP%] {\n  margin-top: 3.2rem;\n  color: var(--pink);\n  background-color: var(--black);\n}\n\n.doom-btn[_ngcontent-%COMP%]:hover {\n  color: var(--dark-pink);\n  background-color: var(--dark-gray);\n}\n\n.card-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n}\n\n.summon-header[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.summontrue[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n\n.summonfalse[_ngcontent-%COMP%] {\n  color: var(--dark-pink);\n}\n\n.summon-btn[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  border: 2px solid var(--light-gray);\n}\n\n.summon-btn[_ngcontent-%COMP%]:not([disabled]) {\n  -webkit-animation: colorExpand 2s linear infinite;\n          animation: colorExpand 2s linear infinite;\n}\n\n@-webkit-keyframes colorExpand {\n  25% {\n    box-shadow: 3px 3px var(--med-green), -3px 3px var(--med-green), 3px -3px var(--med-green), -3px -3px var(--med-green);\n    color: var(--med-green);\n  }\n  \n  75% {\n    box-shadow: 3px 3px var(--pink), -3px 3px var(--pink), 3px -3px var(--pink), -3px -3px var(--pink);\n    color: var(--pink);\n  }\n}\n\n@keyframes colorExpand {\n  25% {\n    box-shadow: 3px 3px var(--med-green), -3px 3px var(--med-green), 3px -3px var(--med-green), -3px -3px var(--med-green);\n    color: var(--med-green);\n  }\n  \n  75% {\n    box-shadow: 3px 3px var(--pink), -3px 3px var(--pink), 3px -3px var(--pink), -3px -3px var(--pink);\n    color: var(--pink);\n  }\n}\n\n.summon-btn[_ngcontent-%COMP%]:not([disabled]):hover {\n  border: 2px solid white;\n}\n\n@media only screen and (max-width: 768px) {\n  .stake-header[_ngcontent-%COMP%]  {\n    padding-top: 1rem;\n  }\n  .doom-header[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbW9uL3N1bW1vbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFnQjtPQUFoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaURBQXlDO1VBQXpDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0lBQ0Usc0hBQXNIO0lBQ3RILHVCQUF1QjtFQUN6QjtFQUNBOztLQUVHO0VBQ0g7SUFDRSxrR0FBa0c7SUFDbEcsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBWkE7RUFDRTtJQUNFLHNIQUFzSDtJQUN0SCx1QkFBdUI7RUFDekI7RUFDQTs7S0FFRztFQUNIO0lBQ0Usa0dBQWtHO0lBQ2xHLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3VtbW9uL3N1bW1vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbTtcbn1cblxuLnR3by1jb2xzIHtcbiAgY29sdW1uLWdhcDogMHJlbTtcbn1cblxuLmNvc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5zdGFrZS1oZWFkZXIsIC5kb29tLWhlYWRlciwgLmRlbGF5LWhlYWRlciwgLnN1bW1vbi1oZWFkZXIge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnN0YWtlLWhlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS1tZWQtZ3JlZW4pO1xufVxuLmRvb20taGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xufVxuXG4ueG1vbi1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTMuNzVyZW07XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xufVxuXG4ueG1vbi1zcXVpZCB7XG4gIGZpbHRlcjogc2VwaWEoMSkgc2F0dXJhdGUoMi41KSAgaHVlLXJvdGF0ZSg5MGRlZyk7XG59XG5cbiNhZGQtYnRuLCAjcmVtb3ZlLWJ0biB7XG4gIGNvbG9yOiB2YXIoLS1tZWQtZ3JlZW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG4jYWRkLWJ0bjpob3ZlcntcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcbn1cbiNyZW1vdmUtYnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xufVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDsgXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheSk7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjJyZW07XG4gIHdpZHRoOiAyMXJlbTtcbn1cbi5mb3JtLWhvbGRlciB7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ueG1vbi10aWNrZXIsIC5kb29tLXRpY2tlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnhtb24tdGlja2VyIHtcbiAgY29sb3I6IHZhcigtLW1lZC1ncmVlbik7XG59XG4uZG9vbS10aWNrZXIge1xuICBjb2xvcjogdmFyKC0tcGluayk7XG59XG5cbi5kb29tLWJ0biB7XG4gIG1hcmdpbi10b3A6IDMuMnJlbTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG4uZG9vbS1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tZGFyay1waW5rKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4uc3VtbW9uLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uc3VtbW9udHJ1ZSB7XG4gIGNvbG9yOiB2YXIoLS1tZWQtZ3JlZW4pO1xufVxuXG4uc3VtbW9uZmFsc2Uge1xuICBjb2xvcjogdmFyKC0tZGFyay1waW5rKTtcbn1cblxuLnN1bW1vbi1idG4ge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcbn1cblxuLnN1bW1vbi1idG46bm90KFtkaXNhYmxlZF0pIHtcbiAgYW5pbWF0aW9uOiBjb2xvckV4cGFuZCAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgY29sb3JFeHBhbmQge1xuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggdmFyKC0tbWVkLWdyZWVuKSwgLTNweCAzcHggdmFyKC0tbWVkLWdyZWVuKSwgM3B4IC0zcHggdmFyKC0tbWVkLWdyZWVuKSwgLTNweCAtM3B4IHZhcigtLW1lZC1ncmVlbik7XG4gICAgY29sb3I6IHZhcigtLW1lZC1ncmVlbik7XG4gIH1cbiAgLyogNTAlIHtcbiAgICBib3gtc2hhZG93OiAtMnB4IDNweCB2YXIoLS1tZWQtZ3JlZW4pLCAxcHggLTFweCB2YXIoLS1waW5rKTtcbiAgfSAqL1xuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggdmFyKC0tcGluayksIC0zcHggM3B4IHZhcigtLXBpbmspLCAzcHggLTNweCB2YXIoLS1waW5rKSwgLTNweCAtM3B4IHZhcigtLXBpbmspO1xuICAgIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgfVxufVxuXG4uc3VtbW9uLWJ0bjpub3QoW2Rpc2FibGVkXSk6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3Rha2UtaGVhZGVyICB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cbiAgLmRvb20taGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SummonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-summon',
            templateUrl: './summon.component.html',
            styleUrls: ['./summon.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    4:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    5:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    6:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "6Bc2":
    /*!******************************************************!*\
      !*** ./src/app/multisender/multisender.component.ts ***!
      \******************************************************/

    /*! exports provided: MultisenderComponent */

    /***/
    function Bc2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultisenderComponent", function () {
        return MultisenderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! autosize */
      "GemG");
      /* harmony import */


      var autosize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var MultisenderComponent = /*#__PURE__*/function () {
        function MultisenderComponent(wallet, contract, constants, utils) {
          _classCallCheck(this, MultisenderComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.resetData();
        }

        _createClass(MultisenderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            // Auto-resize the textarea
            autosize__WEBPACK_IMPORTED_MODULE_3___default()(document.querySelector('textarea'));

            if (this.wallet.connected) {
              this.loadData();
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this5.loadData();
            });
            this.wallet.errorEvent.subscribe(function () {
              _this5.resetData();
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.ethFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.xmonBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.monBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.feeWaived = false;
            this.tokenType = 20;
            this.senderType = "address";
            this.tokenAddress = "";
            this.multisendLabel = "Multisend";
            this.tokenSymbol = "";
            this.tokenLogo = "";
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var multicallFns, result, minXmon, minXmonNFT;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      multicallFns = {
                        "ethFee": {
                          target: this.constants.MULTISENDER_ADDRESS,
                          callData: this.contract.MULTISENDER.methods.ethFee().encodeABI()
                        },
                        "xmonBalance": {
                          target: this.constants.XMON_ADDRESS,
                          callData: this.contract.XMON.methods.balanceOf(this.wallet.userAddress).encodeABI()
                        },
                        "monBalance": {
                          target: this.constants.MON_MINTER_ADDRESS,
                          callData: this.contract.MON_MINTER.methods.balanceOf(this.wallet.userAddress).encodeABI()
                        },
                        "minXmon": {
                          target: this.constants.MULTISENDER_ADDRESS,
                          callData: this.contract.MULTISENDER.methods.minXmon().encodeABI()
                        },
                        "minXmonNFT": {
                          target: this.constants.MULTISENDER_ADDRESS,
                          callData: this.contract.MULTISENDER.methods.minXmonNFT().encodeABI()
                        }
                      };
                      _context2.next = 3;
                      return this.utils.makeMulticall(multicallFns);

                    case 3:
                      result = _context2.sent;
                      _context2.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context2.next = 7;
                      return this.utils.decode("uint256", result["ethFee"]);

                    case 7:
                      _context2.t1 = _context2.sent;
                      this.rawFee = new _context2.t0(_context2.t1);
                      this.ethFee = this.rawFee.div(this.constants.PRECISION);
                      _context2.t2 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context2.next = 13;
                      return this.utils.decode("uint256", result["xmonBalance"]);

                    case 13:
                      _context2.t3 = _context2.sent;
                      this.xmonBalance = new _context2.t2(_context2.t3).div(this.constants.PRECISION);
                      _context2.t4 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context2.next = 18;
                      return this.utils.decode("uint256", result["monBalance"]);

                    case 18:
                      _context2.t5 = _context2.sent;
                      this.monBalance = new _context2.t4(_context2.t5);
                      _context2.t6 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context2.next = 23;
                      return this.utils.decode("uint256", result["minXmon"]);

                    case 23:
                      _context2.t7 = _context2.sent;
                      minXmon = new _context2.t6(_context2.t7);
                      _context2.t8 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context2.next = 28;
                      return this.utils.decode("uint256", result["minXmonNFT"]);

                    case 28:
                      _context2.t9 = _context2.sent;
                      minXmonNFT = new _context2.t8(_context2.t9);

                      if (this.xmonBalance.times(this.constants.PRECISION).gte(minXmon) || this.monBalance.gte(minXmonNFT)) {
                        this.feeWaived = true;
                      }

                    case 31:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "parseWithAddresses",
          value: function parseWithAddresses(decimals, data) {
            var splitData = data.split("\n");
            var addresses = [];
            var idsFor1155 = [];
            var amountsOrIds = [];
            var tokenAmt;

            var _iterator = _createForOfIteratorHelper(splitData),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var args = _step.value;

                if (args !== "") {
                  var parsedArgs = args.trim().split(",");
                  addresses.push(parsedArgs[0]);

                  switch (parseInt(this.tokenType)) {
                    case 20:
                      tokenAmt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[1]).times(Math.pow(10, decimals)).integerValue().toFixed();
                      amountsOrIds.push(tokenAmt);
                      continue;

                    case 721:
                      amountsOrIds.push(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[1]));
                      continue;

                    case 1155:
                      // First is ID, then amount
                      idsFor1155.push(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[1]));
                      tokenAmt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[2]);
                      amountsOrIds.push(tokenAmt);
                      continue;
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (parseInt(this.tokenType) === 1155) {
              return [addresses, idsFor1155, amountsOrIds];
            } else {
              return [addresses, amountsOrIds];
            }
          }
        }, {
          key: "parseWith721Ids",
          value: function parseWith721Ids(decimals, data) {
            var splitData = data.split("\n");
            var erc721Addresses = [];
            var erc721Ids = [];
            var idsFor1155 = [];
            var amountsOrIds = [];
            var tokenAmt;

            var _iterator2 = _createForOfIteratorHelper(splitData),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var args = _step2.value;
                var parsedArgs = args.split(",").map(function (s) {
                  return s.trim();
                });
                erc721Addresses.push(parsedArgs[0]);
                erc721Ids.push(parsedArgs[1]);

                switch (parseInt(this.tokenType)) {
                  case 20:
                    tokenAmt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[2]).times(Math.pow(10, decimals)).integerValue().toFixed();
                    amountsOrIds.push(tokenAmt);
                    continue;

                  case 721:
                    amountsOrIds.push(parsedArgs[2]);
                    continue;

                  case 1155:
                    // First is ID, then amount
                    idsFor1155.push(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[2]));
                    tokenAmt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[3]);
                    amountsOrIds.push(tokenAmt);
                    continue;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (parseInt(this.tokenType) === 1155) {
              return [erc721Addresses, erc721Ids, idsFor1155, amountsOrIds];
            } else {
              return [erc721Addresses, erc721Ids, amountsOrIds];
            }
          }
        }, {
          key: "getPlaceholder",
          value: function getPlaceholder() {
            if (this.senderType == "address") {
              if (this.tokenType == 1155) {
                return "Recipient Address, Token ID, Token Amount\
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 1, 10.5\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 2, 0.2\
      ";
              } else if (this.tokenType == 721) {
                return "Recipient Address, Token ID\
        \
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 1\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 2\
      ";
              } else if (this.tokenType == 20) {
                return "Recipient Address, Token Amount\
        \
        0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 10.5\
        0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 0.2\
        ";
              }
            } else if (this.senderType == "721") {
              if (this.tokenType == 1155) {
                return "Recipient ERC721 Address, Recipient Token ID, Sending Token ID, Token Amount\
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 1, 10.5\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 2, 0.2\
      ";
              } else if (this.tokenType == 721) {
                return "Recipient ERC721 Address, Recipient Token ID, Sending Token ID\
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 1\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 2\
      ";
              } else if (this.tokenType == 20) {
                return "Recipient ERC721 Address, Recipient Token ID, Token Amount\
        0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 10.5\
        0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 0.2\
        ";
              }
            }
          }
        }, {
          key: "multisend",
          value: function multisend(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var args, func, approveFunc, allowance, maxAllowance, numTokensToSend, _iterator3, _step3, a, isApproved, _isApproved;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      maxAllowance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(2).pow(256).minus(1).integerValue().toFixed();

                      if (this.senderType === "address") {
                        args = this.parseWithAddresses(18, data);
                      } else if (this.senderType === "721") {
                        args = this.parseWith721Ids(18, data);
                      }

                      if (!(parseInt(this.tokenType) === 20)) {
                        _context3.next = 26;
                        break;
                      }

                      numTokensToSend = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
                      _iterator3 = _createForOfIteratorHelper(args[1]);

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          a = _step3.value;
                          numTokensToSend = numTokensToSend.plus(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(a));
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }

                      numTokensToSend = numTokensToSend.times(this.constants.PRECISION);
                      _context3.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context3.next = 10;
                      return this.contract.ERC20(this.tokenAddress).methods.allowance(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();

                    case 10:
                      _context3.t1 = _context3.sent;
                      allowance = new _context3.t0(_context3.t1);

                      if (!allowance.lt(numTokensToSend)) {
                        _context3.next = 17;
                        break;
                      }

                      this.multisendLabel = "Approving...";
                      approveFunc = this.contract.ERC20(this.tokenAddress).methods.approve(this.constants.MULTISENDER_ADDRESS, maxAllowance);
                      _context3.next = 17;
                      return this.wallet.sendTx(approveFunc, function () {
                        _this6.multisendLabel = "Multisend";
                      }, function () {}, function () {});

                    case 17:
                      if (this.senderType == "address") {
                        func = this.contract.MULTISENDER.methods.send721Or20ToAddresses(args[0], args[1], this.tokenAddress);
                      }

                      if (this.senderType == "721") {
                        func = this.contract.MULTISENDER.methods.send721Or20To721Ids(args[0], args[1], args[2], this.tokenAddress);
                      }

                      if (this.feeWaived) {
                        _context3.next = 24;
                        break;
                      }

                      _context3.next = 22;
                      return this.wallet.sendTxWithValue(func, this.rawFee, function () {}, function () {}, function () {});

                    case 22:
                      _context3.next = 26;
                      break;

                    case 24:
                      _context3.next = 26;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 26:
                      if (!(parseInt(this.tokenType) === 721)) {
                        _context3.next = 44;
                        break;
                      }

                      _context3.next = 29;
                      return this.contract.ERC721(this.tokenAddress).methods.isApprovedForAll(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();

                    case 29:
                      isApproved = _context3.sent;

                      if (isApproved) {
                        _context3.next = 35;
                        break;
                      }

                      this.multisendLabel = "Approving...";
                      approveFunc = this.contract.ERC721(this.tokenAddress).methods.setApprovalForAll(this.constants.MULTISENDER_ADDRESS, true);
                      _context3.next = 35;
                      return this.wallet.sendTx(approveFunc, function () {
                        _this6.multisendLabel = "Multisend";
                      }, function () {}, function () {});

                    case 35:
                      if (this.senderType == "address") {
                        func = this.contract.MULTISENDER.methods.send721Or20ToAddresses(args[0], args[1], this.tokenAddress);
                      }

                      if (this.senderType == "721") {
                        func = this.contract.MULTISENDER.methods.send721Or20To721Ids(args[0], args[1], args[2], this.tokenAddress);
                      }

                      if (this.feeWaived) {
                        _context3.next = 42;
                        break;
                      }

                      _context3.next = 40;
                      return this.wallet.sendTxWithValue(func, this.rawFee, function () {}, function () {}, function () {});

                    case 40:
                      _context3.next = 44;
                      break;

                    case 42:
                      _context3.next = 44;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 44:
                      if (!(parseInt(this.tokenType) === 1155)) {
                        _context3.next = 62;
                        break;
                      }

                      _context3.next = 47;
                      return this.contract.ERC1155(this.tokenAddress).methods.isApprovedForAll(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();

                    case 47:
                      _isApproved = _context3.sent;

                      if (_isApproved) {
                        _context3.next = 53;
                        break;
                      }

                      this.multisendLabel = "Approving...";
                      approveFunc = this.contract.ERC1155(this.tokenAddress).methods.setApprovalForAll(this.constants.MULTISENDER_ADDRESS, true);
                      _context3.next = 53;
                      return this.wallet.sendTx(approveFunc, function () {
                        _this6.multisendLabel = "Multisend";
                      }, function () {}, function () {});

                    case 53:
                      if (this.senderType == "address") {
                        func = this.contract.MULTISENDER.methods.send1155ToAddresses(args[0], args[1], args[2], this.tokenAddress);
                      }

                      if (this.senderType == "721") {
                        func = this.contract.MULTISENDER.methods.send1155To721Ids(args[0], args[1], args[2], args[3], this.tokenAddress);
                      }

                      if (this.feeWaived) {
                        _context3.next = 60;
                        break;
                      }

                      _context3.next = 58;
                      return this.wallet.sendTxWithValue(func, this.rawFee, function () {}, function () {}, function () {});

                    case 58:
                      _context3.next = 62;
                      break;

                    case 60:
                      _context3.next = 62;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 62:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var tokenList, _iterator4, _step4, t, token;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      tokenList = __webpack_require__(
                      /*! ../../assets/tokens.json */
                      "y1uA");
                      tokenList = tokenList["tokens"];
                      _iterator4 = _createForOfIteratorHelper(tokenList);
                      _context4.prev = 3;

                      _iterator4.s();

                    case 5:
                      if ((_step4 = _iterator4.n()).done) {
                        _context4.next = 13;
                        break;
                      }

                      t = _step4.value;

                      if (!(t["address"].toLowerCase() == this.tokenAddress.toLowerCase())) {
                        _context4.next = 11;
                        break;
                      }

                      this.tokenSymbol = t["symbol"];
                      this.tokenLogo = t["logoURI"];
                      return _context4.abrupt("return");

                    case 11:
                      _context4.next = 5;
                      break;

                    case 13:
                      _context4.next = 18;
                      break;

                    case 15:
                      _context4.prev = 15;
                      _context4.t0 = _context4["catch"](3);

                      _iterator4.e(_context4.t0);

                    case 18:
                      _context4.prev = 18;

                      _iterator4.f();

                      return _context4.finish(18);

                    case 21:
                      token = this.contract.ERC20(this.tokenAddress);
                      _context4.next = 24;
                      return token.methods.symbol().call();

                    case 24:
                      this.tokenSymbol = _context4.sent;

                    case 25:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[3, 15, 18, 21]]);
            }));
          }
        }]);

        return MultisenderComponent;
      }();

      MultisenderComponent.ɵfac = function MultisenderComponent_Factory(t) {
        return new (t || MultisenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_5__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]));
      };

      MultisenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MultisenderComponent,
        selectors: [["app-multisender"]],
        decls: 68,
        vars: 11,
        consts: [[1, "container"], [1, "header", "cursed-text"], [1, "text-item"], [1, "xmon-ticker"], ["href", "https://etherscan.io/address/0xc653e1b3a971078812a72d11c45ad71e00f3ad1f"], ["routerLink", "sender/"], [1, "send-title"], [1, "erc-picker"], [3, "ngModel", "ngModelChange"], ["value", "20"], ["value", "721"], ["value", "1155"], [1, "to-title"], ["value", "address"], [1, "input-form"], ["type", "text", "placeholder", "0x3aada3e213abf8529606924d8d1c55cbdc70bf74", 3, "ngModel", "ngModelChange"], [1, "token"], [1, "token-logo", 3, "src"], [1, "check-btn", 3, "click"], [3, "placeholder"], ["senderData", ""], [1, "multisend-btn", 3, "click"]],
        template: function MultisenderComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Multisender");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Send ERC20, ERC721, or ERC1155 to a list of addresses, or a list of ERC721 IDs.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Current fee is: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Fee waived: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Contract on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Etherscan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "v1 of the sender/locker is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultisenderComponent_Template_select_ngModelChange_33_listener($event) {
              return ctx.tokenType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "ERC20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "ERC721");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "ERC1155");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "To");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultisenderComponent_Template_select_ngModelChange_43_listener($event) {
              return ctx.senderType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "List of addresses");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "List of ERC721 IDs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Token Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "(Decimals are assumed to be 18 for ERC20.)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultisenderComponent_Template_input_ngModelChange_53_listener($event) {
              return ctx.tokenAddress = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultisenderComponent_Template_button_click_58_listener() {
              return ctx.getToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Check Symbol");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Recipient Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "textarea", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultisenderComponent_Template_button_click_66_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64);

              return ctx.multisend(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.ethFee.toFormat(4), " ETH");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("XMON balance: ", ctx.xmonBalance.toFormat(8), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("0xmons balance: ", ctx.monBalance, " NFTs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.feeWaived);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tokenType);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.senderType);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tokenAddress);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.tokenLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.tokenSymbol, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.getPlaceholder());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.multisendLabel);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]],
        styles: [".header[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n\n.text-item[_ngcontent-%COMP%] {\n  line-height: 2rem;\n}\n\n.send-title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.send-title[_ngcontent-%COMP%], .to-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n  font-weight: bold;\n}\n\nselect[_ngcontent-%COMP%] {\n  border: 2px solid var(--gray);\n  background-color: var(--black);\n  color: var(--light-gray);\n  font-size: 1.3rem;\n  width: 80%;\n  max-width: 15rem;\n  padding: 0.1rem 0.1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  background-color : var(--black) !important; \n  color: white !important;\n  outline: none;\n  border: 2px solid var(--gray);\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 50rem;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 10rem;\n  width: 100%;\n}\n\n.input-form[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.token[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.token-logo[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: auto;\n}\n\n.multisend-btn[_ngcontent-%COMP%], .check-btn[_ngcontent-%COMP%] {\n  font-family: 'Courier New', Courier, monospace;\n}\n\n.multisend-btn[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlzZW5kZXIvbXVsdGlzZW5kZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tdWx0aXNlbmRlci9tdWx0aXNlbmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLnRleHQtaXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4uc2VuZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5zZW5kLXRpdGxlLCAudG8tdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogMTVyZW07XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmlucHV0LCB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDsgXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5KTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDEwcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlucHV0LWZvcm0ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4udG9rZW4ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udG9rZW4tbG9nbyB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tdWx0aXNlbmQtYnRuLCAuY2hlY2stYnRuIHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLm11bHRpc2VuZC1idG4ge1xuICBjb2xvcjogdmFyKC0tbWVkLWdyZWVuKTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MultisenderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-multisender',
            templateUrl: './multisender.component.html',
            styleUrls: ['./multisender.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_5__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6D4n":
    /*!******************************************!*\
      !*** ./src/app/claim/claim.component.ts ***!
      \******************************************/

    /*! exports provided: ClaimComponent */

    /***/
    function D4n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimComponent", function () {
        return ClaimComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ClaimComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClaimComponent_div_0_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.claim();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Claim XMON");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ClaimComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You are not eligible for the airdrop.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ClaimComponent = /*#__PURE__*/function () {
        function ClaimComponent(wallet, contract) {
          _classCallCheck(this, ClaimComponent);

          this.wallet = wallet;
          this.contract = contract;
        }

        _createClass(ClaimComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            if (this.wallet.connected) {
              this.loadData();
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this7.loadData();
            });
            this.wallet.errorEvent.subscribe(function () {
              _this7.hasMon = false;
            });
            this.hasMon = false;
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var numMons;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context5.next = 3;
                      return this.contract.OLD_0XMONS.methods.balanceOf(this.wallet.userAddress).call();

                    case 3:
                      _context5.t1 = _context5.sent;
                      numMons = new _context5.t0(_context5.t1);
                      this.hasMon = numMons.isGreaterThan(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0));

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "claim",
          value: function claim() {
            var func = this.contract.ClAIMER.methods.claim();
            this.wallet.sendTx(func, function () {}, function () {}, function () {});
          }
        }]);

        return ClaimComponent;
      }();

      ClaimComponent.ɵfac = function ClaimComponent_Factory(t) {
        return new (t || ClaimComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]));
      };

      ClaimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ClaimComponent,
        selectors: [["app-claim"]],
        decls: 2,
        vars: 2,
        consts: [["class", "centered claim-holder", 4, "ngIf"], ["class", "centered", 4, "ngIf"], [1, "centered", "claim-holder"], [3, "click"], [1, "centered"]],
        template: function ClaimComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ClaimComponent_div_0_Template, 3, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClaimComponent_div_1_Template, 2, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasMon);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hasMon);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".claim-holder[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\nbutton[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--med-green);\n  background-color: var(--dark-gray);\n  font-size: 1.2rem;\n  border: 1px solid black;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: var(--darker-gray);\n  color: var(--green);\n  border: 1px solid var(--light-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhaW0vY2xhaW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9jbGFpbS9jbGFpbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYWltLWhvbGRlciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLW1lZC1ncmVlbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1ncmF5KTtcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JlZW4pO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClaimComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-claim',
            templateUrl: './claim.component.html',
            styleUrls: ['./claim.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    7:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "7S5c":
    /*!**********************************!*\
      !*** ./src/app/utils.service.ts ***!
      \**********************************/

    /*! exports provided: UtilsService */

    /***/
    function S5c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
        return UtilsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contract.service */
      "aPik");
      /*
       Usage:
       - contract has a reference to the multicall address for the relevant network you're on
       - format your argument to makeMulticall as a list of objects:
       multicallFns = {}
        "call1":  {
          target: ADDRESS,
          callData: METHOD.encodeABI()
        }
      }
       - makeMulticall returns an object of function results with the same key that you provided in the argument
       - call decode with a string for the relevant type (e.g. "uint256") and the returned value to decode.
       - call decodeList with a list of strings if the returned value is a list.
       - refer to the web3 decodeParameter(s) documentation for more info
      */


      var UtilsService = /*#__PURE__*/function () {
        function UtilsService(wallet, contract) {
          _classCallCheck(this, UtilsService);

          this.wallet = wallet;
          this.contract = contract;
        } // https://github.com/Jacob-Friesen/obscurejs/blob/master/2018/zipObject.js


        _createClass(UtilsService, [{
          key: "zipObject",
          value: function zipObject(keys, values) {
            var obj = {}; // Assuming the lengths of keys always equals the length of values to simplify the example.

            keys.forEach(function (key, index) {
              obj[key] = values[index];
            });
            return obj;
          }
        }, {
          key: "makeMulticall",
          value: function makeMulticall(multicallFns) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var multicallKeys, multicallValues, rawResult, multicallResults;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      multicallKeys = Object.keys(multicallFns);
                      multicallValues = Object.values(multicallFns);
                      _context6.next = 4;
                      return this.contract.MULTICALL.methods.aggregate(multicallValues).call();

                    case 4:
                      rawResult = _context6.sent;
                      multicallResults = this.zipObject(multicallKeys, rawResult["returnData"]);
                      return _context6.abrupt("return", multicallResults);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "decode",
          value: function decode(type, arg) {
            return this.wallet.web3.eth.abi.decodeParameter(type, arg);
          }
        }, {
          key: "decodeList",
          value: function decodeList(typeList, arg) {
            return this.wallet.web3.eth.abi.decodeParameters(typeList, arg);
          }
        }, {
          key: "secondsToHms",
          value: function secondsToHms(d) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);
            var s = Math.floor(d % 3600 % 60);
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            return hDisplay + mDisplay + sDisplay;
          }
        }]);

        return UtilsService;
      }();

      UtilsService.ɵfac = function UtilsService_Factory(t) {
        return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"]));
      };

      UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UtilsService,
        factory: UtilsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UtilsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8s2F":
    /*!***************************************!*\
      !*** ./src/assets/abi/NFTSender.json ***!
      \***************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */

    /***/
    function s2F(module) {
      module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"erc20Cache\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"erc721Cache\",\"outputs\":[{\"internalType\":\"contract IERC721Enumerable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isCached\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"rewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"erc721Addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"erc20Address\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"name\":\"sendRewards\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"erc721Addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"erc20Address\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"name\":\"setRewards\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"erc721Address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"erc20Address\",\"type\":\"address\"}],\"name\":\"takeRewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 64,
        vars: 0,
        consts: [[1, "cursed-text", "header"], [1, "container"], [1, "centered"], [1, "text"], ["loading", "lazy", "src", "./assets/mon_1.gif", 1, "display-mon"], ["loading", "lazy", "src", "./assets/mon_2.gif", 1, "display-mon"], ["loading", "lazy", "src", "./assets/mon_3.gif", 1, "display-mon"], ["loading", "lazy", "src", "./assets/mon_4.gif", 1, "display-mon"], ["routerLink", "mon/0"], [1, "card", "text-card"], [1, "cursed-text"], [1, "no-font"], [1, "flex-center"], [1, "link-button"], ["routerLink", "/farm", "routerLinkActive", "active", "title", "Stake XMON-ETH LP tokens to farm XMON"], ["routerLink", "/summon", "routerLinkActive", "active", "title", "Stake XMON to summon 0xmons"], ["href", "https://opensea.io/assets/0xmons-xyz", "title", "Find 0xmons for sale on OpenSea"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEURAL NET GENERATED PIXEL MONSTERS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 0xmons is an experimental NFT project that combines generative pixel art with blockchain collectibles. Think MEME x Pokemon, but 30% more c\u033F\u0344\u0309\u0489\u0355\u0353\u0349\u031Du\u036A\u0369\u031B\u032E\u0316r\u030C\u0489\u033A\u035A\u0320\u0330\u0354\u0323s\u0313\u0369\u035C\u0325\u034D\u0330\u0324e\u0308\u033F\u036B\u0489\u034D\u034E\u035A\u0353\u0318\u033B\u0317d\u0364\u0312\u0304\u0309\u034F\u0349\u032A\u0323\u0331\u0324\u033A. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Every piece of artwork is generated by a Generative Adversarial Model (GAN). This makes each NFT completely unique, with the option to register the NFT data fully on-chain. You can view all 0xmons created so far, starting with #0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pixel art ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "dreamt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " from the mad nightmares of a GAN.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Procedurally ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "wrought");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " animations.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Names ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "divined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " from a Big Language Model.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Totally not-random bits ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "summoned");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " from the Ethereum blockchain.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "These are not the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "N");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FTs you have been looking for.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "These are not the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ts you have been looking for.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "These are not the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "NFT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "s you have been looking for.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "T\u0357\u0305\u0301\u0328\u0353\u032C\u0348\u0320\u0331\u031C\u034Eh\u0307\u0346\u035D\u0323\u0326\u0320\u032F\u035A\u0347e\u036F\u0308\u036D\u035C\u033B\u0348\u0333\u0331s\u0364\u0308\u0321\u0359\u034D\u0329e\u0352\u031A\u036C\u035F\u0345\u033B \u0311\u0346\u0300\u0365\u0338\u0353\u0345\u0333\u032A\u0324\u031F\u0349a\u0350\u034C\u0489\u0339\u0326\u0331\u033C\u033C\u0353\u0323\u0330r\u0304\u035D\u032B\u031Ce\u0369\u0304\u0360\u0329\u0317\u0349\u032C\u0320\u035A\u033B \u036E\u0300\u0357\u0341\u0319\u0359\u0320\u0355n\u0346\u0312\u030E\u0352\u0360\u0345\u0330\u033Ao\u0314\u0313\u034B\u0328\u032F\u032B\u033B\u0329t\u030A\u0358\u032E\u0316\u0353\u032E\u0325\u033A\u032D \u030C\u030A\u0489\u0325\u032E\u0316\u0330\u0319\u0353t\u030C\u0314\u0301\u0346\u0337\u0349\u032A\u035A\u031D\u033B\u031F\u0324h\u033D\u0314\u0337\u031C\u0329\u0349\u0320\u0323\u032Be\u0367\u0364\u034B\u0364\u0321\u0333\u033A\u031C \u0306\u0351\u0362\u032A\u031D\u0318\u0319\u032F\u031CN\u0310\u0352\u0350\u0337\u0323\u032AF\u036A\u030D\u0489\u0320\u033C\u0323\u0355\u0339\u0347T\u0350\u0307\u0368\u036D\u0341\u0317\u032B\u033A\u0355\u0330s\u0310\u036B\u0314\u0338\u0354\u035A\u031D \u0365\u034F\u0359\u0329\u0332\u0319y\u033E\u034B\u0363\u031B\u035A\u034E\u0332\u031E\u034D\u032B\u033B\u032Do\u034B\u0344\u0357\u0357\u0315\u0347\u0317\u0330\u0329\u031D\u032E\u0323u\u0305\u035C\u031E\u034E\u0320\u0339\u032D \u033E\u036B\u0350\u035C\u032F\u032C\u0348h\u0304\u0311\u0328\u0332\u034D\u0359\u032D\u032B\u0332\u0356\u033Ca\u030F\u0360\u0345\u032C\u0353\u0324v\u0303\u036A\u034C\u0363\u0315\u0333\u0333\u0331e\u0363\u030F\u0340\u0349\u0323\u0339\u035A\u0317\u031E \u034B\u0489\u0330\u032B\u031D\u031Cb\u030A\u035B\u0358\u0320\u0317\u0326e\u0363\u0305\u036D\u0489\u0333\u0319\u0348\u0333\u0323\u0354\u0359e\u0310\u0489\u031F\u0359n\u0368\u0314\u036C\u0340\u034D\u0317\u0354 \u0367\u0369\u0311\u0365\u0334\u0356\u032D\u0355\u0330l\u0309\u0308\u0321\u032B\u0331o\u030B\u030B\u030A\u0309\u0327\u0345\u0345\u031E\u0345\u0359o\u0309\u0350\u0311\u0358\u0356\u0348\u031E\u0349\u0333\u031Ck\u0352\u035F\u0325\u0324\u034E\u0355i\u0343\u0304\u0363\u031B\u034E\u034E\u0356\u0318\u0326n\u0344\u0327\u0354\u0318\u031E\u031F\u032E\u032E\u032Fg\u035B\u0366\u0338\u0333\u0349 \u0303\u0369\u0352\u0351\u0361\u0345\u032A\u0354f\u0301\u0357\u035E\u0355\u0347o\u0363\u0368\u0313\u030F\u031B\u0354\u0339\u0331\u0319\u033A\u032F\u0333\u033Ar\u0365\u030D\u0328\u0318\u0345.\u0305\u036C\u0343\u0342\u0334\u0356\u0359\u032A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "FARM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "SUMMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "PROCURE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: [".header[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n  font-size: 4rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  border: none;\n}\n\n.no-font[_ngcontent-%COMP%] {\n  font-family: unset;\n}\n\n.text-card[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n  font-size: 1rem;\n}\n\n.mon-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0.1rem 0.1rem;\n}\n\n.mon-img[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  margin: 0;\n}\n\n.centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text[_ngcontent-%COMP%] {\n line-height: 1.5;\n}\n\n.display-mon[_ngcontent-%COMP%] {\n  border: 1px solid var(--light-gray);\n  padding: 0.5rem 0.5rem;\n  margin: 0.75rem 0.75rem;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.link-button[_ngcontent-%COMP%] {\n  margin: 1rem 1rem;\n  width: 10rem;\n}\n\n.link-button[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: normal;\n  text-decoration: none;\n  font-size: 1.8rem;\n  color: white;\n  text-shadow: -1px 2px var(--med-green);\n}\n\n@media only screen and (max-width: 768px) {\n  .flex-center[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin: 0.1rem 0.1rem;\n  }\n  .header[_ngcontent-%COMP%] {\n    font-size: 3.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5uby1mb250IHtcbiAgZm9udC1mYW1pbHk6IHVuc2V0O1xufVxuXG4udGV4dC1jYXJkIHtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMC4xcmVtIDAuMXJlbTtcbn1cblxuLm1vbi1pbWcge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dCB7XG4gbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmRpc3BsYXktbW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gIG1hcmdpbjogMC43NXJlbSAwLjc1cmVtO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpbmstYnV0dG9uIHtcbiAgbWFyZ2luOiAxcmVtIDFyZW07XG4gIHdpZHRoOiAxMHJlbTtcbn1cblxuLmxpbmstYnV0dG9uID4gYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0xcHggMnB4IHZhcigtLW1lZC1ncmVlbik7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZsZXgtY2VudGVyID4gYnV0dG9uIHtcbiAgICBtYXJnaW46IDAuMXJlbSAwLjFyZW07XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAzLjdyZW07XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AAyo":
    /*!*************************************!*\
      !*** ./src/assets/abi/Rewards.json ***!
      \*************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, default */

    /***/
    function AAyo(module) {
      module.exports = JSON.parse("[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"RewardAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"RewardPaid\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Staked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdrawn\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"DURATION\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"earned\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"exit\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getReward\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_starttime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_duration\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_stakeToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_rewardToken\",\"type\":\"address\"}],\"name\":\"init\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"initialized\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"lastTimeRewardApplicable\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"lastUpdateTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"notifyRewardAmount\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"periodFinish\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rewardPerToken\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rewardPerTokenStored\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rewardRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rewardToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"rewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_rewardDistribution\",\"type\":\"address\"}],\"name\":\"setRewardDistribution\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"stake\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"stakeToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"starttime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userRewardPerTokenPaid\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BHlI":
    /*!*******************************************!*\
      !*** ./src/assets/abi/NFTAggregator.json ***!
      \*******************************************/

    /*! exports provided: 0, 1, default */

    /***/
    function BHlI(module) {
      module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"erc721Address\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getIds\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"erc721Address\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getURIs\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "IKM7":
    /*!**************************************!*\
      !*** ./src/app/constants.service.ts ***!
      \**************************************/

    /*! exports provided: ConstantsService */

    /***/
    function IKM7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstantsService", function () {
        return ConstantsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConstantsService = function ConstantsService() {
        _classCallCheck(this, ConstantsService);

        this.PRECISION = 1e18;
        this.DOOM_SCALING = 1e21;
        this.XMON_PER_DAY = 3.57142857143; // Mainnet address

        this.CLAIMER_ADDRESS = '0xe354AC0bB78a8013617fe0efA6099769749F027C';
        this.OLD_0XMONS_ADDRESS = '0xAf488234796CA27DBa8ECF17f803Ea1f4Ab33E15';
        this.S3_URL = 'https://d3h0sbhg72k3qr.cloudfront.net/';
        this.LOCAL_MON_DATA = "./assets/monData.json";
        this.IPFS_GATEWAY = "https://ipfs.io/ipfs/"; // // Rinkeby addresses (note you have to change chainId in web3Enabled)
        // XMON_ADDRESS = '0x8dc2f7D19217245b117aEBa0f1D050c9e85c7767';
        // MON_MINTER_ADDRESS = '0x9683D905cAa55743ac63c464C34053B0b219Cc8D';
        // MON_SPAWNER_ADDRESS = '0x39D327150ff6F7D59F6BB698895CbFAD2c4816C2';
        // MON_STAKER_ADDRESS = '0xFcd2Eafe7d92d11599EE4C01Ec8AE2017bb4d2ef';
        // MULTICALL_ADDRESS = '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821';
        // NFT_AGGREGATOR_ADDRESS = '0x03Cb9a56c5F7Ce6796562730E3D217B1F4Dd428b';
        // Mainnet addresses

        this.XMON_ADDRESS = '0x3aaDA3e213aBf8529606924d8D1c55CbDc70Bf74';
        this.MON_MINTER_ADDRESS = '0x0427743DF720801825a5c82e0582B1E915E0F750';
        this.MON_STAKER_ADDRESS = '0xD06337A401B468657dE2f9d3E390cE5b21C3c1C0';
        this.MON_SPAWNER_ADDRESS = '0x4fAD5ddC4E0186B932e27baa7d37D97457DFc868';
        this.MULTICALL_ADDRESS = '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441';
        this.NFT_AGGREGATOR_ADDRESS = '0xF83eEE39E723526605d784917b6e38ebCF0f0207';
        this.NFT_SENDER_ADDRESS = '0x006DD6C488E90180D7346DB5a026fd747Af3B218';
        this.LP_POOL_REWARDS_ADDRESS = '0xd4275E04dbe82526e4a17ac0FB8f509B6080A455';
        this.XMON_ETH_LP_TOKEN_ADDRESS = '0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9';
        this.MON_REGISTRY_ADDRESS = '0x2d824D66E1b7Ba0f73b5cAf75886abf812a13E67';
        this.MULTISENDER_ADDRESS = '0xC653e1b3a971078812a72D11c45AD71E00f3aD1f'; // Non-0xmons addresses

        this.WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
        this.WETH_DAI_LP_ADDRESS = '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11';
        this.DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f';
      };

      ConstantsService.ɵfac = function ConstantsService_Factory(t) {
        return new (t || ConstantsService)();
      };

      ConstantsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConstantsService,
        factory: ConstantsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConstantsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "KcTH":
    /*!************************************!*\
      !*** ./src/assets/abi/ERC721.json ***!
      \************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, default */

    /***/
    function KcTH(module) {
      module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"_contractURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"buyMonster\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"canMerge\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"genMergeLag\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalMons\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxMons\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id1\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"id2\",\"type\":\"uint256\"}],\"name\":\"mergeMonsters\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mergePrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mergeTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minStakeAmt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minStakeTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"gemId\",\"type\":\"uint256\"}],\"name\":\"mineMonster\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"monRecords\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"miner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"unlockBlock\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"parent1\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"parent2\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"gen\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"powerBits\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"series\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numTokens\",\"type\":\"uint256\"}],\"name\":\"moveTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nft\",\"outputs\":[{\"internalType\":\"contract INFTStaker\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"numMonsCreated\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"series\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"setBaseURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"b\",\"type\":\"bool\"}],\"name\":\"setCanMerge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"setContractURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"g\",\"type\":\"uint256\"}],\"name\":\"setGenMergeLag\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"}],\"name\":\"setMaxMons\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"p\",\"type\":\"uint256\"}],\"name\":\"setMergePrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"t\",\"type\":\"uint256\"}],\"name\":\"setMergeTime\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"a\",\"type\":\"uint256\"}],\"name\":\"setMinStakeAmt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"t\",\"type\":\"uint256\"}],\"name\":\"setMinStakeTime\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"nftAddress\",\"type\":\"address\"}],\"name\":\"setNFTAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"s\",\"type\":\"uint256\"}],\"name\":\"setSeries\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"setTokenAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"p\",\"type\":\"uint256\"}],\"name\":\"setTokenPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "NNjt":
    /*!****************************************************!*\
      !*** ./src/app/collection/collection.component.ts ***!
      \****************************************************/

    /*! exports provided: CollectionComponent */

    /***/
    function NNjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionComponent", function () {
        return CollectionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function CollectionComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading monsters... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CollectionComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var m_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/mon/", m_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("#", m_r2.id, " ", m_r2.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", m_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var CollectionComponent = /*#__PURE__*/function () {
        function CollectionComponent(wallet, contract, constants, utils) {
          _classCallCheck(this, CollectionComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.resetData();
        }

        _createClass(CollectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            if (this.wallet.connected) {
              this.loadData();
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this8.loadData();
            });
            this.wallet.errorEvent.subscribe(function () {
              _this8.resetData();
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.monList = [];
            this.loading = true;
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var multicallFns, results, monIdList, i, id, responseObj, obj;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(window["monList"] != undefined)) {
                        _context7.next = 5;
                        break;
                      }

                      this.monList = window["monList"];
                      this.loading = false;
                      _context7.next = 28;
                      break;

                    case 5:
                      multicallFns = {
                        "monIds": {
                          target: this.constants.NFT_AGGREGATOR_ADDRESS,
                          callData: this.contract.NFT_AGG.methods.getIds(this.constants.MON_MINTER_ADDRESS, this.wallet.userAddress).encodeABI()
                        }
                      };
                      _context7.next = 8;
                      return this.utils.makeMulticall(multicallFns);

                    case 8:
                      results = _context7.sent;
                      _context7.next = 11;
                      return this.utils.decode("uint256[]", results["monIds"]);

                    case 11:
                      monIdList = _context7.sent;
                      i = 0;

                    case 13:
                      if (!(i < monIdList.length)) {
                        _context7.next = 26;
                        break;
                      }

                      id = monIdList[i];
                      _context7.next = 17;
                      return this.loadLocalData(id);

                    case 17:
                      responseObj = _context7.sent;
                      obj = {};
                      obj["id"] = id;
                      obj["name"] = responseObj["name"];
                      obj["image"] = responseObj["image"];
                      this.monList.push(obj);

                    case 23:
                      i++;
                      _context7.next = 13;
                      break;

                    case 26:
                      // cache locally
                      window["monList"] = this.monList;
                      this.loading = false;

                    case 28:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "loadLocalData",
          value: function loadLocalData(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var response, fullResponseObj, responseObj, monData;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return fetch(this.constants.LOCAL_MON_DATA);

                    case 2:
                      response = _context8.sent;
                      _context8.next = 5;
                      return response.json();

                    case 5:
                      fullResponseObj = _context8.sent;
                      responseObj = fullResponseObj[parseInt(id)];
                      monData = {};
                      monData["name"] = responseObj["Name"];
                      monData["image"] = this.constants.IPFS_GATEWAY + responseObj["StaticHash"];
                      return _context8.abrupt("return", monData);

                    case 11:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return CollectionComponent;
      }();

      CollectionComponent.ɵfac = function CollectionComponent_Factory(t) {
        return new (t || CollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]));
      };

      CollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CollectionComponent,
        selectors: [["app-collection"]],
        decls: 19,
        vars: 2,
        consts: [[1, "container"], [1, "header", "centered"], [1, "cursed-text"], ["class", "centered", 4, "ngIf"], [1, "mon-item-holder"], ["class", "mon-item", 4, "ngFor", "ngForOf"], [1, "centered"], ["href", "https://etherscan.io/address/0x0427743DF720801825a5c82e0582B1E915E0F750"], ["href", "https://opensea.io/collection/0xmons-xyz/"], [1, "mon-item"], ["routerLinkActive", "active", 3, "routerLink"], [1, "thumbnail", 3, "src"]],
        template: function CollectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "AMASS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " your idols");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CollectionComponent_div_5_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CollectionComponent_div_7_Template, 5, 4, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ERC-721 contract on Etherscan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "View all 0xmons on OpenSea ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.monList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
        styles: [".mon-item-holder[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n.mon-item[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  text-align: center;\n  margin: 1.5rem 1.5rem;\n  padding: 0.5rem 0.5rem;\n  border: 3px solid var(--gray);\n}\n\n.mon-item[_ngcontent-%COMP%]:hover {\n  border: 3px solid var(--light-green);\n}\n\n.mon-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--med-green);\n}\n\n.mon-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  color: var(--pink);\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  width: 8rem;\n  height: auto;\n}\n\n@media only screen and (max-width: 1200px) {\n  .mon-item-holder[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .mon-item-holder[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media only screen and (max-width: 468px) {\n  .mon-item-holder[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBR0E7RUFDRTtJQUNFLGtDQUFrQztFQUNwQztBQUNGOztBQUNBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb24taXRlbS1ob2xkZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbn1cblxuLm1vbi1pdGVtIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMS41cmVtIDEuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZ3JheSk7XG59XG4ubW9uLWl0ZW06aG92ZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1saWdodC1ncmVlbik7XG59XG5cbi5tb24taXRlbSA+IGRpdiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLW1lZC1ncmVlbik7XG59XG5cbi5tb24taXRlbSA+IGRpdjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbn1cblxuLnRodW1ibmFpbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogYXV0bztcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAubW9uLWl0ZW0taG9sZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb24taXRlbS1ob2xkZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjhweCkge1xuICAubW9uLWl0ZW0taG9sZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-collection',
            templateUrl: './collection.component.html',
            styleUrls: ['./collection.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PgRK":
    /*!**********************************************!*\
      !*** ./src/app/monster/monster.component.ts ***!
      \**********************************************/

    /*! exports provided: MonsterComponent */

    /***/
    function PgRK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonsterComponent", function () {
        return MonsterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function MonsterComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u26A1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("onchain-icon ", ctx_r0.monData.superStatic, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/on-chain/", ctx_r0.monData.staticHash, "");
        }
      }

      function MonsterComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDD12");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/on-chain/", ctx_r1.monData.animHash, "");
        }
      }

      function MonsterComponent_div_54_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register Data On-chain");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "the blog post");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " if you don't understand what's happening below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Clicking Upload will encode the 0xmon's image and data into one payload transaction. You can choose to upload either the static version of the image or the animated version depending on your willingness to pay gas fees. Note that if this is your first time, there will be 3 transactions to accept.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "The first is to upload the data on-chain.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "The second is to approve the spending of XMON (to pay the registration fee).");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "The third is to encode the uploaded data from the first tx onto the registry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Clicking Upload will fire off all 3 transactions! You DO NOT have to manually do anything with Register unless you want to only do the first transaction, and then come back later to do the other two. In that case, please keep track of the transaction hash of the first transaction, and if it was static or animated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MonsterComponent_div_54_div_3_Template_select_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r4.uploadIsStatic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Animated");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonsterComponent_div_54_div_3_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r6.uploadData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "XMON");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MonsterComponent_div_54_div_3_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.enteredInTxHash = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MonsterComponent_div_54_div_3_Template_select_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.registerIsStatic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Animated");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonsterComponent_div_54_div_3_Template_button_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Note: This is will likely cost ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "a lot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " of gas. Uploads the entire encoded data onto the registry's storage. Read the blog post first to know what this does. Selecting Animated will likely just fail due to the absurd gas costs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MonsterComponent_div_54_div_3_Template_select_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.directIsStatic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Static");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Animated");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonsterComponent_div_54_div_3_Template_button_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.directUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Direct Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.uploadIsStatic);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Register fee: ", ctx_r3.registerFee, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.enteredInTxHash);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.registerIsStatic);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.directIsStatic);
        }
      }

      function MonsterComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonsterComponent_div_54_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.toggleShowRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Toggle On-chain Registration Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MonsterComponent_div_54_div_3_Template, 53, 5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.showRegister);
        }
      }

      var MonsterComponent = /*#__PURE__*/function () {
        function MonsterComponent(wallet, contract, constants, utils, activatedRoute, router) {
          _classCallCheck(this, MonsterComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.resetData();
        }

        _createClass(MonsterComponent, [{
          key: "resetData",
          value: function resetData() {
            this.monData = {};
            this.width = 14;
            this.minWidth = 1;
            this.maxWidth = 30;
            this.monId = "0";
            this.isOwner = false;
            this.enteredInTxHash = '';
            this.showRegister = true;
            this.superStatic = "";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.hidePrev = true;
            this.hideNext = true;
            this.loadLocalData();
            this.monId = this.activatedRoute.snapshot.paramMap.get('id');
            this.updatePrevNextIds();

            if (this.wallet.connected) {
              this.loadData();
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this9.loadData();
            });
            this.wallet.errorEvent.subscribe(function () {
              _this9.resetData();
            });
            this.activatedRoute.params.subscribe(function (routeParams) {
              _this9.monId = routeParams.id;

              _this9.updatePrevNextIds();

              _this9.loadLocalData();

              if (_this9.wallet.connected) {
                _this9.loadData();
              }
            });
          }
        }, {
          key: "updatePrevNextIds",
          value: function updatePrevNextIds() {
            this.prevId = parseInt(this.monId) - 1;
            this.nextId = parseInt(this.monId) + 1;
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var cachedResponse, multicallFns, result, monStruct, numMons, owner;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.updatePrevNextIds(); // Check if already stored

                      if (!(window["mon" + this.monId] !== undefined && window["mon" + this.monId]["staticHash"] !== undefined)) {
                        _context9.next = 7;
                        break;
                      }

                      cachedResponse = window["mon" + this.monId];
                      this.monData = Object.assign({}, cachedResponse);
                      this.isOwner = this.monData["isOwner"];
                      _context9.next = 40;
                      break;

                    case 7:
                      multicallFns = {
                        "monData": {
                          target: this.constants.MON_MINTER_ADDRESS,
                          callData: this.contract.MON_MINTER.methods.monRecords(this.monId).encodeABI()
                        },
                        "tokenURI": {
                          target: this.constants.MON_MINTER_ADDRESS,
                          callData: this.contract.MON_MINTER.methods.tokenURI(this.monId).encodeABI()
                        },
                        "numMons": {
                          target: this.constants.MON_MINTER_ADDRESS,
                          callData: this.contract.MON_MINTER.methods.totalSupply().encodeABI()
                        },
                        "staticHash": {
                          target: this.constants.MON_REGISTRY_ADDRESS,
                          callData: this.contract.MON_REGISTRY.methods.monDataWithStatic(this.monId).encodeABI()
                        },
                        "animHash": {
                          target: this.constants.MON_REGISTRY_ADDRESS,
                          callData: this.contract.MON_REGISTRY.methods.monDataWithAnimation(this.monId).encodeABI()
                        },
                        "owner": {
                          target: this.constants.MON_MINTER_ADDRESS,
                          callData: this.contract.MON_MINTER.methods.ownerOf(this.monId).encodeABI()
                        },
                        "registerFee": {
                          target: this.constants.MON_REGISTRY_ADDRESS,
                          callData: this.contract.MON_REGISTRY.methods.fee().encodeABI()
                        }
                      };
                      _context9.next = 10;
                      return this.utils.makeMulticall(multicallFns);

                    case 10:
                      result = _context9.sent;
                      monStruct = this.utils.decode({
                        "parentStruct": {
                          "summoner": "address",
                          "parent1Id": "uint256",
                          "parent2Id": "uint256",
                          "minterContract": "address",
                          "contractOrder": "uint256",
                          "gen": "uint256",
                          "bits": "uint256",
                          "exp": "uint256",
                          "rarity": "uint256"
                        }
                      }, result["monData"]);
                      _context9.next = 14;
                      return this.utils.decode("uint256", result["numMons"]);

                    case 14:
                      numMons = _context9.sent;
                      _context9.next = 17;
                      return this.utils.decode("address", result["owner"]);

                    case 17:
                      owner = _context9.sent;
                      this.isOwner = owner.toLowerCase() == this.wallet.userAddress;
                      this.monData["isOwner"] = owner.toLowerCase() == this.wallet.userAddress;
                      _context9.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context9.next = 23;
                      return this.utils.decode("uint256", result["registerFee"]);

                    case 23:
                      _context9.t1 = _context9.sent;
                      this.registerFee = new _context9.t0(_context9.t1).div(this.constants.PRECISION);
                      _context9.next = 27;
                      return this.utils.decode("bytes", result["staticHash"]);

                    case 27:
                      this.monData["staticHash"] = _context9.sent;

                      if (this.monData["staticHash"] != null) {
                        this.monData["isStaticUploaded"] = true; // If it's longer than a tx hash, we set it to be the mon id so we let the on-chain component handle it

                        if (this.monData["staticHash"].length > 66) {
                          this.monData["staticHash"] = this.monId;
                          this.monData["superStatic"] = "super";
                        }
                      } else {
                        this.monData["isStaticUploaded"] = false;
                      }

                      _context9.next = 31;
                      return this.utils.decode("bytes", result["animHash"]);

                    case 31:
                      this.monData["animHash"] = _context9.sent;

                      if (this.monData["animHash"] != null) {
                        this.monData["isAnimUploaded"] = true;
                      } else {
                        this.monData["isAnimUploaded"] = false;
                      }

                      if (this.monData["isStaticUploaded"] && this.monData["isAnimUploaded"]) {
                        this.showRegister = false;
                      } // These are from on-chain


                      this.monData["parent1Id"] = monStruct["parent1Id"];
                      this.monData["parent2Id"] = monStruct["parent2Id"];
                      this.monData["gen"] = monStruct["gen"];
                      this.monData["rarity"] = monStruct["rarity"];
                      this.monData["contractOrder"] = monStruct["contractOrder"]; // cache locally

                      window["mon" + this.monId] = Object.assign({}, this.monData);

                    case 40:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "loadLocalData",
          value: function loadLocalData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var response, fullResponseObj, responseObj;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return fetch(this.constants.LOCAL_MON_DATA);

                    case 2:
                      response = _context10.sent;
                      _context10.next = 5;
                      return response.json();

                    case 5:
                      fullResponseObj = _context10.sent;
                      responseObj = fullResponseObj[parseInt(this.monId)];
                      this.monData["name"] = responseObj["Name"];
                      this.monData["img"] = this.constants.IPFS_GATEWAY + responseObj["ImageHash"];
                      this.monData["epithets"] = responseObj["Epithets"];
                      this.monData["lore"] = responseObj["Description"];
                      this.staticURL = this.constants.IPFS_GATEWAY + responseObj["StaticHash"];
                      this.animURL = this.constants.IPFS_GATEWAY + responseObj["ImageHash"];
                      this.monData["rarity"] = responseObj["Series"];

                    case 14:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "uploadData",
          value: function uploadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this10 = this;

              var imageURL, response, imgBlob, reader;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!(this.uploadIsStatic == "static")) {
                        _context11.next = 4;
                        break;
                      }

                      imageURL = this.staticURL;
                      _context11.next = 9;
                      break;

                    case 4:
                      if (!(this.uploadIsStatic == "anim")) {
                        _context11.next = 8;
                        break;
                      }

                      imageURL = this.animURL;
                      _context11.next = 9;
                      break;

                    case 8:
                      return _context11.abrupt("return");

                    case 9:
                      _context11.next = 11;
                      return fetch(imageURL);

                    case 11:
                      response = _context11.sent;
                      _context11.next = 14;
                      return response.blob();

                    case 14:
                      imgBlob = _context11.sent;
                      reader = new FileReader();
                      reader.readAsDataURL(imgBlob);

                      reader.onloadend = function () {
                        var imageBinary = reader.result;
                        var truncationStart = imageBinary.indexOf('base64,');
                        imageBinary = imageBinary.substring(truncationStart + 7);

                        var data = _this10.wallet.web3.utils.fromAscii(_this10.monData["name"] + "|" + _this10.monData["epithets"] + "|" + _this10.monData["lore"] + "|" + imageBinary);

                        var func = _this10.contract.MON_REGISTRY.methods.uploadMon(data);

                        _this10.wallet.sendTx(func, function (hash) {
                          _this10.registerIsStatic = _this10.uploadIsStatic;
                          _this10.txHash = hash;

                          _this10.register();
                        }, function () {}, function () {});
                      };

                    case 18:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          } // Note this doesn't convert from ascii because it doesn't need it (txhash is already the right type for bytes)

        }, {
          key: "register",
          value: function register() {
            if (this.enteredInTxHash != "") {
              this.txHash = this.enteredInTxHash;
            }

            var isStatic;

            if (this.registerIsStatic == "static") {
              isStatic = true;
            } else if (this.registerIsStatic == "anim") {
              isStatic = false;
            } else {
              return;
            }

            var func = this.contract.MON_REGISTRY.methods.registerMon(this.monId, this.txHash, isStatic);
            var feeAmt = this.registerFee.times(this.constants.PRECISION);
            this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.MON_REGISTRY_ADDRESS, feeAmt, 200000, function () {}, function () {}, function () {});
          }
        }, {
          key: "directUpload",
          value: function directUpload() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this11 = this;

              var imageURL, isStatic, response, imgBlob, reader;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!(this.directIsStatic == "static")) {
                        _context12.next = 5;
                        break;
                      }

                      imageURL = this.staticURL;
                      isStatic = true;
                      _context12.next = 11;
                      break;

                    case 5:
                      if (!(this.directIsStatic == "anim")) {
                        _context12.next = 10;
                        break;
                      }

                      imageURL = this.animURL;
                      isStatic = false;
                      _context12.next = 11;
                      break;

                    case 10:
                      return _context12.abrupt("return");

                    case 11:
                      _context12.next = 13;
                      return fetch(imageURL);

                    case 13:
                      response = _context12.sent;
                      _context12.next = 16;
                      return response.blob();

                    case 16:
                      imgBlob = _context12.sent;
                      reader = new FileReader();
                      reader.readAsDataURL(imgBlob);

                      reader.onloadend = function () {
                        var imageBinary = reader.result;
                        var truncationStart = imageBinary.indexOf('base64,');
                        imageBinary = imageBinary.substring(truncationStart + 7);

                        var data = _this11.wallet.web3.utils.fromAscii(_this11.monData["name"] + "|" + _this11.monData["epithets"] + "|" + _this11.monData["lore"] + "|" + imageBinary);

                        var gasLimit = Math.min(Math.ceil(data.length / 4000 * 2000000), 2000000);
                        console.log(gasLimit, data.length, imageURL, _this11.staticURL);

                        var func = _this11.contract.MON_REGISTRY.methods.registerMon(_this11.monId, data, isStatic);

                        var feeAmt = _this11.registerFee.times(_this11.constants.PRECISION);

                        _this11.wallet.sendTxWithToken(func, _this11.contract.XMON, _this11.constants.MON_REGISTRY_ADDRESS, feeAmt, gasLimit, function () {}, function () {}, function () {
                          alert("Error: likely gas required exceeds block gas limit!");
                        });
                      };

                    case 20:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "toggleShowRegister",
          value: function toggleShowRegister() {
            this.showRegister = !this.showRegister;
          }
        }, {
          key: "updateWidth",
          value: function updateWidth(num) {
            this.width = this.width + num;
          }
        }, {
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            this.navigate(event);
          }
        }, {
          key: "navigate",
          value: function navigate(e) {
            if (e.key === "ArrowLeft") {
              this.router.navigate(["mon", this.prevId]);
            }

            if (e.key === "ArrowRight") {
              this.router.navigate(["mon", this.nextId]);
            }

            this.loadLocalData();
          }
        }]);

        return MonsterComponent;
      }();

      MonsterComponent.ɵfac = function MonsterComponent_Factory(t) {
        return new (t || MonsterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      MonsterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MonsterComponent,
        selectors: [["app-monster"]],
        hostBindings: function MonsterComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MonsterComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyboardEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
          }
        },
        decls: 55,
        vars: 17,
        consts: [[1, "container"], ["routerLink", "/collection"], [1, "mon-container"], [1, "mon-name"], [1, "mon-img", 3, "src"], ["title", "Decrease image size", 1, "zoom-btn", 3, "click"], ["title", "Increase image size", 1, "zoom-btn", 3, "click"], ["title", "This 0xmon's static image and data is encoded on-chain", 3, "class", 4, "ngIf"], ["class", "onchain-icon", "title", "This 0xmon's animated image and data is encoded on-chain", 4, "ngIf"], [1, "mon-data-card"], [1, "lore"], [1, "view-btn"], [3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -256 1850 1850", 1, "external-link-icon"], ["d", "M1438 819v320q0 119-84 203-85 85-204 85H318q-119 0-203-85-85-84-85-203V307q0-119 85-204 84-84 203-84h704q14 0 23 9t9 23v64q0 14-9 23t-23 9H318q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V819q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19q-26 0-45-19l-176-176-652 652q-10 10-23 10t-23-10L725 874q-10-10-10-23t10-23l652-652L1201 0q-19-19-19-45t19-45q19-19 45-19h512q26 0 45 19t19 45z", "fill", "currentColor"], [1, "view-btn", "open-sea"], ["title", "You can also use arrow keys to browse", 1, "view-btn", 3, "routerLink"], [4, "ngIf"], ["title", "This 0xmon's static image and data is encoded on-chain"], [3, "routerLink"], ["title", "This 0xmon's animated image and data is encoded on-chain", 1, "onchain-icon"], [1, "view-btn", 3, "click"], ["class", "register-portal", 4, "ngIf"], [1, "register-portal"], [1, "register-header"], ["href", "https://blog.0xmons.xyz/79081566310"], [3, "ngModel", "ngModelChange"], ["value", "static"], ["value", "anim"], [1, "register-fee"], [1, "xmon-ticker"], ["type", "text", "placeholder", "Transaction hash goes here", 3, "ngModel", "ngModelChange"], [1, "direct-upload"]],
        template: function MonsterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u25C4 Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonsterComponent_Template_button_click_10_listener() {
              return ctx.updateWidth(-2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonsterComponent_Template_button_click_12_listener() {
              return ctx.updateWidth(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MonsterComponent_span_14_Template, 3, 4, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MonsterComponent_span_15_Template, 3, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Epithets:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Series:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Order:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Lore:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Etherscan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "svg", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "OpenSea");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "svg", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u2190 Prev 0xmon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Next 0xmon \u2192");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, MonsterComponent_div_54_Template, 4, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("#", ctx.monId, " ", ctx.monData.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width, "rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.monData.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.monData.isStaticUploaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.monData.isAnimUploaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.monData.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.monData.epithets, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.monData.rarity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.monData.contractOrder, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.monData.lore);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://etherscan.io/token/0x0427743df720801825a5c82e0582b1e915e0f750?a=", ctx.monId, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://opensea.io/assets/0x0427743df720801825a5c82e0582b1e915e0f750/", ctx.monId, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/mon/", ctx.prevId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/mon/", ctx.nextId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOwner);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]],
        styles: [".mon-container[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  max-width: 40rem;\n  margin: auto;\n}\n\n.zoom-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  margin: 0.5rem 0.5rem;\n  border: 2px solid var(--light-gray);\n}\n\n.onchain-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin: 0.5rem 0.6rem;\n  padding: 0.35rem 0.5rem;\n  border: 2px solid var(--light-gray);\n}\n\n.super[_ngcontent-%COMP%] {\n  -webkit-animation: expandFlash 2s linear infinite;\n          animation: expandFlash 2s linear infinite;\n  filter: sepia(1) saturate(2.5)  hue-rotate(120deg);\n}\n\n@-webkit-keyframes expandFlash {\n  25% {\n    box-shadow: 1px 1px var(--med-green), -1px -1px var(--med-green), 1px -1px var(--med-green), -1px 1px var(--med-green);\n  }\n  75% {\n    box-shadow: none;\n  }\n}\n\n@keyframes expandFlash {\n  25% {\n    box-shadow: 1px 1px var(--med-green), -1px -1px var(--med-green), 1px -1px var(--med-green), -1px 1px var(--med-green);\n  }\n  75% {\n    box-shadow: none;\n  }\n}\n\n.onchain-icon[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.mon-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  text-shadow: 2px -2px var(--med-green), -2px 2px var(--pink);\n  margin-bottom: 1rem;\n}\n\n.mon-img[_ngcontent-%COMP%] {\n  width: 20rem;\n  height: auto;\n  padding: 1.5rem 1.5rem;\n  border: 2px solid white;\n}\n\n.mon-data-card[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.lore[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--light-gray);\n  font-style: italic;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 1rem;\n  text-transform: none;\n  margin-top: 1.5rem;\n  margin-right: 1.5rem;\n}\n\n.view-btn[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.open-sea[_ngcontent-%COMP%] {\n  color: rgb(0, 183, 255);\n}\n\n.external-link-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: auto;\n  margin-left: 0.5rem;\n}\n\n.register-portal[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.register-header[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: bold;\n  color: var(--med-green);\n  margin-bottom: 1rem;\n}\n\n.register-fee[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  background-color : var(--black) !important; \n  color: white !important;\n  font-size: 1.1rem;\n  outline: none;\n  border: 2px solid var(--gray);\n  padding-bottom: 0.5rem;\n  padding-top: 0.2rem;\n}\n\nselect[_ngcontent-%COMP%] {\n  border: 2px solid var(--gray);\n  background-color: var(--black);\n  padding: 0.1rem 0.1rem;\n  color: white !important;\n  font-size: 1.1rem;\n  margin-right: 1rem;\n}\n\n.xmon-ticker[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-weight: bold;\n}\n\n.xmon-ticker[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n\n.direct-upload[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uc3Rlci9tb25zdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaURBQXlDO1VBQXpDLHlDQUF5QztFQUN6QyxrREFBa0Q7QUFDcEQ7O0FBQ0E7RUFDRTtJQUNFLHNIQUFzSDtFQUN4SDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLHNIQUFzSDtFQUN4SDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0REFBNEQ7RUFDNUQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9uc3Rlci9tb25zdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBtYXgtd2lkdGg6IDQwcmVtO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi56b29tLWJ0biB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG4ub25jaGFpbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbjogMC41cmVtIDAuNnJlbTtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG4uc3VwZXIge1xuICBhbmltYXRpb246IGV4cGFuZEZsYXNoIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgZmlsdGVyOiBzZXBpYSgxKSBzYXR1cmF0ZSgyLjUpICBodWUtcm90YXRlKDEyMGRlZyk7XG59IFxuQGtleWZyYW1lcyBleHBhbmRGbGFzaCB7XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCB2YXIoLS1tZWQtZ3JlZW4pLCAtMXB4IC0xcHggdmFyKC0tbWVkLWdyZWVuKSwgMXB4IC0xcHggdmFyKC0tbWVkLWdyZWVuKSwgLTFweCAxcHggdmFyKC0tbWVkLWdyZWVuKTtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cblxuLm9uY2hhaW4taWNvbiA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tb24tbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDJweCAtMnB4IHZhcigtLW1lZC1ncmVlbiksIC0ycHggMnB4IHZhcigtLXBpbmspO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubW9uLWltZyB7XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm1vbi1kYXRhLWNhcmQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmxvcmUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udmlldy1idG4ge1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4udmlldy1idG4gPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ub3Blbi1zZWEge1xuICBjb2xvcjogcmdiKDAsIDE4MywgMjU1KTtcbn1cblxuLmV4dGVybmFsLWxpbmstaWNvbiB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5yZWdpc3Rlci1wb3J0YWwge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4ucmVnaXN0ZXItaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tbWVkLWdyZWVuKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnJlZ2lzdGVyLWZlZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tYmxhY2spICFpbXBvcnRhbnQ7IFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXkpO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBwYWRkaW5nOiAwLjFyZW0gMC4xcmVtO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLnhtb24tdGlja2VyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ueG1vbi10aWNrZXIge1xuICBjb2xvcjogdmFyKC0tbWVkLWdyZWVuKTtcbn1cblxuLmRpcmVjdC11cGxvYWQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MonsterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-monster',
            templateUrl: './monster.component.html',
            styleUrls: ['./monster.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, {
          handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:keydown', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "SCN6":
    /*!**********************************************!*\
      !*** ./src/app/credits/credits.component.ts ***!
      \**********************************************/

    /*! exports provided: CreditsComponent */

    /***/
    function SCN6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreditsComponent", function () {
        return CreditsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CreditsComponent = /*#__PURE__*/function () {
        function CreditsComponent() {
          _classCallCheck(this, CreditsComponent);
        }

        _createClass(CreditsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CreditsComponent;
      }();

      CreditsComponent.ɵfac = function CreditsComponent_Factory(t) {
        return new (t || CreditsComponent)();
      };

      CreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreditsComponent,
        selectors: [["app-credits"]],
        decls: 45,
        vars: 0,
        consts: [[1, "container"], [1, "centered"], [1, "header"], [1, "cursed-text"], [1, "card"], [1, "credits-list"], [1, "credit-item"], ["href", "https://twitter.com/boredGenius"], ["href", "https://twitter.com/NoaNabeshima"], ["href", "https://twitter.com/justalittlemarv"], ["href", "https://twitter.com/46Volt"], ["href", "https://twitter.com/alexgausman"], ["href", "https://twitter.com/EclipseumToken"], ["href", "https://opensea.io/assets/0xmon"]],
        template: function CreditsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "VENERATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " early contributors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This project would not be possible without the help of many people:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Zefram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", for technical advice and offering to be an initial multisig signer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Noa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ", for assistance running the language models to power the AI creativity behind the 0xmons lore. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Marv");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ", for coming up with the idea for generating novel, procedural animations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " ryujin, for early support from the earliest days, constant feedback, and alpha-alpha testing. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "volt46");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ", for awesome early marketing visuals. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Alex");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ", for agreeing to be an initial multisig signer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Taylor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ", for agreeing to be an initial multisig signer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " RJ, for being supportive. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " All the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "alpha 0xmons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " supporters and Rinkeby testers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "If I've forgotten you, reach out at hello at 0xmons, and I'll add you!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.credits-list[_ngcontent-%COMP%] {\n  color: var(--light-green);\n  text-align: left;\n}\n\n.credit-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n  margin-left: 3rem;\n}\n\n.credit-item[_ngcontent-%COMP%]::before {\n  content: '\uD83E\uDD91';\n  filter: sepia(1) saturate(2.5)  hue-rotate(90deg);\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlZGl0cy9jcmVkaXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpREFBaUQ7RUFDakQsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY3JlZGl0cy9jcmVkaXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNyZWRpdHMtbGlzdCB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jcmVkaXQtaXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xufVxuXG4uY3JlZGl0LWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfwn6aRJztcbiAgZmlsdGVyOiBzZXBpYSgxKSBzYXR1cmF0ZSgyLjUpICBodWUtcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-credits',
            templateUrl: './credits.component.html',
            styleUrls: ['./credits.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'mons';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TGkX":
    /*!****************************************!*\
      !*** ./src/app/menu/menu.component.ts ***!
      \****************************************/

    /*! exports provided: MenuComponent */

    /***/
    function TGkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function MenuComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.closeMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hello\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MenuComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.toggleShowMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83C\uDD87 CLOSE MENU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "COLLECTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SUMMON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LP FARM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "MULTISENDER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "BUNDLER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CREDITS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BLOG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent() {
          _classCallCheck(this, MenuComponent);
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.showMenu = false;
          }
        }, {
          key: "toggleShowMenu",
          value: function toggleShowMenu() {
            this.showMenu = !this.showMenu;
          }
        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.showMenu = false;
          }
        }]);

        return MenuComponent;
      }();

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)();
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        decls: 5,
        vars: 2,
        consts: [["class", "menu-click-handler", 3, "click", 4, "ngIf"], [1, "menu-holder"], [1, "menu-button", 3, "click"], ["class", "menu-list", 4, "ngIf"], [1, "menu-click-handler", 3, "click"], [1, "menu-list"], [1, "close-button", 3, "click"], [1, "menu-item"], ["routerLink", "/", "routerLinkActive", "active", "title", "Home page"], ["routerLink", "/collection", "routerLinkActive", "active", "title", "View your monsters"], ["routerLink", "/summon", "routerLinkActive", "active", "title", "Summon a new monster"], ["routerLink", "/farm", "routerLinkActive", "active", "title", "Farm XMON with XMON-ETH LP tokens"], ["routerLink", "/multisender", "title", "Send any type of token to anyone"], ["routerLink", "/bundler", "title", "Lock any type of token into any ERC721"], ["routerLink", "/credits", "routerLinkActive", "active", "title", "People who helped with this project"], ["href", "https://blog.0xmons.xyz"], ["id", "external-link-icon", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -256 1850 1850"], ["d", "M1438 819v320q0 119-84 203-85 85-204 85H318q-119 0-203-85-85-84-85-203V307q0-119 85-204 84-84 203-84h704q14 0 23 9t9 23v64q0 14-9 23t-23 9H318q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V819q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19q-26 0-45-19l-176-176-652 652q-10 10-23 10t-23-10L725 874q-10-10-10-23t10-23l652-652L1201 0q-19-19-19-45t19-45q19-19 45-19h512q26 0 45 19t19 45z", "fill", "currentColor"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_2_listener() {
              return ctx.toggleShowMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u2630 MENU ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_4_Template, 29, 0, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: [".menu-holder[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 2rem;\n  top: 1.75rem;\n}\n\n.menu-button[_ngcontent-%COMP%]:hover {\n  -webkit-animation: colorFlash 2s linear infinite;\n          animation: colorFlash 2s linear infinite;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  border: none;\n  -webkit-animation: none;\n          animation: none;\n}\n\n.menu-click-handler[_ngcontent-%COMP%] {\n  z-index: 98;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color:rgba(0, 0, 0, 0.5);\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  z-index: 99;\n  position: fixed;\n  left: 0rem;\n  top: 0rem;\n  width: 50%;\n  max-width: 20rem;\n  display: table;\n  border-collapse: collapse;\n}\n\n.menu-list[_ngcontent-%COMP%], .close-button[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  background-color: var(--black);\n}\n\n#external-link-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: auto;\n  margin-left: 0.5rem;\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  border: 2px solid var(--gray);\n}\n\n@media only screen and (max-width: 768px) {\n  .menu-holder[_ngcontent-%COMP%] {\n    position: unset;\n    right: unset;\n    top: unset;\n    display: block;\n    text-align: center;\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdEQUF3QztVQUF4Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQWU7VUFBZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAycmVtO1xuICB0b3A6IDEuNzVyZW07XG59XG5cbi5tZW51LWJ1dHRvbjpob3ZlciB7XG4gIGFuaW1hdGlvbjogY29sb3JGbGFzaCAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cblxuLm1lbnUtY2xpY2staGFuZGxlciB7XG4gIHotaW5kZXg6IDk4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubWVudS1saXN0IHtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMHJlbTtcbiAgdG9wOiAwcmVtO1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5tZW51LWxpc3QsIC5jbG9zZS1idXR0b24ge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbn0gXG5cbiNleHRlcm5hbC1saW5rLWljb24ge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG5cbi5tZW51LWl0ZW0ge1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXkpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tZW51LWhvbGRlciB7XG4gICAgcG9zaXRpb246IHVuc2V0O1xuICAgIHJpZ2h0OiB1bnNldDtcbiAgICB0b3A6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ulh2":
    /*!***************************************!*\
      !*** ./src/assets/abi/MonMinter.json ***!
      \***************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, default */

    /***/
    function Ulh2(module) {
      module.exports = JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"parent1Id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"parent2Id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"minterContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"contractOrder\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"gen\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bits\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"exp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rarity\",\"type\":\"uint256\"}],\"name\":\"mintMonster\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"ignoreZeros\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"parent1Id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"parent2Id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"minterContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"contractOrder\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"gen\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bits\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"exp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rarity\",\"type\":\"uint256\"}],\"name\":\"modifyMon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"monRecords\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"summoner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"parent1Id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"parent2Id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"minterContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"contractOrder\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"gen\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bits\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"exp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rarity\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numTokens\",\"type\":\"uint256\"}],\"name\":\"moveTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"rarityTable\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"setBaseURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setMinterRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"code\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"s\",\"type\":\"string\"}],\"name\":\"setRarityTitle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"setTokenURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "V72t":
    /*!********************************!*\
      !*** ./src/app/web3Enabled.ts ***!
      \********************************/

    /*! exports provided: Web3Enabled */

    /***/
    function V72t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Web3Enabled", function () {
        return Web3Enabled;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! web3 */
      "meUc");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var bnc_onboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bnc-onboard */
      "g80C");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);

      var Web3Enabled = /*#__PURE__*/function () {
        function Web3Enabled(web3) {
          _classCallCheck(this, Web3Enabled);

          this.web3 = web3;
          this.assistInstance = null;
          this.blocknativeAPIKey = 'c094a276-3a28-4a57-a468-d61efa51e73c';
          this.infuraKey = 'eb5ba991ba924ec5b80fd85423fd901f';
          this.portisKey = '046eaf6b-d838-45d0-b733-ef5ef749fb0f'; // (for rinkeby)
          // this.networkID = 4; 

          this.networkID = 1;
          this.state = {
            address: null
          };
        }

        _createClass(Web3Enabled, [{
          key: "connect",
          value: function connect(onConnected, onError, isStartupMode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this12 = this;

              var genericMobileWalletConfig, wallets, walletChecks, walletSelectConfig, bncAssistConfig, selectedWallet, previouslySelectedWallet, state, ready;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!this.assistInstance) {
                        genericMobileWalletConfig = {
                          name: 'Web3 wallet (e.g. MetaMask)',
                          mobile: true,
                          desktop: true,
                          preferred: true,
                          type: 'injected',
                          iconSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGlElEQVR4nO2aXYwUVRbHf6fqzvgBDE9k44C+CbtZ148VJMIAAgEZIovEYFSYgR0V1phFJcCAfMzwoQP7QbKbdXfVFULjB8lkdQeRcUFFHMAV3FEffCDGJ3QSJboPYFah6x4fqnuY6e6qaqp76DHWL7kPt0/dc//39rm3Tt0qSEhISEhISEj4kSJxGv28VavPfMlmHBpQriq3qCLpAXYPG8GGj1vlXFwnJk6j/59mkwursHG7LQu1QPM3X6LAmrhOYk2A69EAYB0mfvpXORa381IYvUTr1KELaORST4BRagHwOPqzpRq371L5Ar/r2lKcxIuAyoZ+lp+Uw0m8CMhMwIfPSe8m+sv7dZaFThG6P/iH3FwOcVluvF+7gZscqO9+Tl4HuKFJ60ToKtV36ASMbdIxCm0C04GaXkNe1Ks4yjIHUOVfpYrKE6nsBW5C+C3ov0H0ox1yZGyTZnX2VXRG4Q2BNe/vkJNRvp0gw7hf69Wu5V1jmedaalzrh37f4qMyfhHrXUu9a/kKw99KGGtBrlCeci1fux6zxy9mHahAvp5MGZbRfGz8AzoqyndgHjBhkb4ocC/QmU6z5L0X5LOsbeKizIwrsxGWAbMAT5Q7j6RkX1iHdYv1NlVagFvwY+m4Y9nYtVsOh7Wb0KhzRfgn4OIvtT+r0glwdNeFpTh+gY4yhmeAeqD96C65O8xvYARUWSYbC67D0r6DB38PMBaMst9YZhnLV8YyL2rwkxt0retxyFhuM5YrjWWIsUx14O0pC/XxsLbHUtJRrdxlLP8zlnrXozOroy/vvSCfuQ5LM7bbw3yGToBRRhqFai8/Soz2lm5jaZE0Pz28W14N62j6Ar2jStlslPPGskLSjJA0I1xlpVHSBrZMX6gzwnwcSknHlYYxrtJqlO6sjlze2SmnMraafGvOWIIM2TWuHrtmLdTfvP78hQ0lazvwYvG7vausQBGUtQdekj/2Mf1hxgJ1RNkGLAMOhvnp3CmngY3Axpn3aWASUuytOnAPmH1PsPNBzGngfSxbcTgMsH+PhD7vBEZANrQUdgrMpkyJxwAzAqhHqM+/VRcmcgm80i5NZRB2SfjVPVrrWhpQNgHVxbSJjIAfEnv3SA+wbf58FZS2YtoET0DOJjJ/vlYbj81AA1TsDCCIHhV2ew4b2tvlnPsdKTElTkDuLnpZmk0oq0rTOWDUAs1Vaf9sYM9e6Vl4Z3EhXPQSMNY/AxCYuLOjMmcAQTTN0zpr+58NFLuEgxOhnCzLWGqNhcE2eIAdr8iRjN7es4FCWWIhgpeAhtcHG3H1Fr0JFjOblSSu3mQCggzJEhhkEdA8U+dYZbnAOGBI3gUZfatmZJ5hLtRPibBk2wHpLOS3+NtgBSPg8Rn6JJY1brzmo1CeBq4pZCw6EarUSfCGaTpHPdYA5xDWuw7PA6Q9GgQ/57cw5Ym35J1C7ddPUwWuDvI/6CPAKMsVQNnQ8rb8ro9p26ZpKqq0oawGCk5AlO6LSYQqsg+4lrHGgvFI5dnOs8tYqFICD2aidA/6TbC3X5t/eHNFGud8xJuNKN2BEeBq/1tJbv2R/+j14a7Lg6uccBVcoTHX5jk0ZnT9N6S9ht0SY0fA0DQfrOvSzVsmSWuw+9IxHtsRpgIb/3Sr4jikzltEHBpFac2c/GwNbB8RAbE3weFpHKDl94f08pVTZXV4N/F59F3Z99QEfUKVtUAblrZqIOfV/OG/3BrwNysgnAryH7wEbP9bX269xvPLMEvz39/UwH+gHDx8TNa5HnNcy1uu5WzAG6GgcsooS4J8x14Cw71+1eaXDij3zhy4SHjouOwDAl+8PDvOzwAfPOGfAvepF0yAsoS9GOkX9rn1mnRead6/f2AjIYwovUHEXgLDvfxS49F8dG9lJiFKbxCxI2C45Uh2H+hbhllWfvSyXhdnEKUQNwJi7wG/mCuTLkbgQBM3cbuYJdDjWnj5Bq2LI3Agab9eJ2X0fp79rdglUHQeUGVJqbAaj66O6wbZ6ciFgfY+LxT78Bb2OHxWYGjHGK2de1J6voWWIRYEGrXEL7PKjvA5SuoboRXg1dE60vEn5UxU0+AIgBMoU42fg2+9+2M5h3/mHvubvEuF8dNkVDkReW2gwbId9XPwg6MVFVIzT0pPWZWWmTdH60h1aCTzjKCW7VFtQt+dHxqjW8TPwX9wiLBlyklZH3ld1AVd1+odojym/kdNQ8uibuA4K3DcCtsnfyKvVVpMQkJCQkJCQsKg5nt8QKjg0A9hNgAAAABJRU5ErkJggg==',
                          wallet: function wallet(helpers) {
                            var getProviderName = helpers.getProviderName,
                                createModernProviderInterface = helpers.createModernProviderInterface,
                                createLegacyProviderInterface = helpers.createLegacyProviderInterface;
                            var provider = window['ethereum'] || this.web3 && this.web3.currentProvider;
                            var result = {
                              provider: provider,
                              "interface": provider ? typeof provider.enable === 'function' ? createModernProviderInterface(provider) : createLegacyProviderInterface(provider) : null
                            };
                            return new Promise(function (resolve, reject) {
                              resolve(result);
                            });
                          }
                        };
                        wallets = [genericMobileWalletConfig, {
                          walletName: 'walletConnect',
                          infuraKey: this.infuraKey,
                          networkId: this.networkID,
                          preferred: true
                        }, {
                          walletName: "trust",
                          preferred: true,
                          rpcUrl: "https://mainnet.infura.io/v3/" + this.infuraKey
                        }, {
                          walletName: "portis",
                          apiKey: this.portisKey,
                          preferred: true,
                          label: 'Login with Email'
                        }];
                        walletChecks = [{
                          checkName: 'connect'
                        }, {
                          checkName: 'network'
                        }, {
                          checkName: 'balance',
                          minimumBalance: '0'
                        }];
                        walletSelectConfig = {
                          heading: 'Select a Wallet',
                          description: 'Please select a wallet to connect:',
                          wallets: wallets
                        };
                        bncAssistConfig = {
                          dappId: this.blocknativeAPIKey,
                          darkMode: true,
                          networkId: this.networkID,
                          subscriptions: {
                            wallet: function wallet(_wallet) {
                              if (_wallet.provider) {
                                _this12.web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(_wallet.provider);
                              } // store the selected wallet name to be retrieved next time the app loads


                              window.localStorage.setItem('selectedWallet', _wallet.name);
                            },
                            address: this.doNothing,
                            network: this.doNothing,
                            balance: this.doNothing
                          },
                          walletSelect: walletSelectConfig,
                          walletCheck: walletChecks
                        };
                        this.assistInstance = Object(bnc_onboard__WEBPACK_IMPORTED_MODULE_2__["default"])(bncAssistConfig);
                      } // Get user to select a wallet


                      if (!isStartupMode) {
                        _context13.next = 9;
                        break;
                      }

                      // Startup mode: connect to previously used wallet if available
                      // get the selectedWallet value from local storage
                      previouslySelectedWallet = window.localStorage.getItem('selectedWallet'); // call wallet select with that value if it exists

                      if (!(previouslySelectedWallet != null)) {
                        _context13.next = 7;
                        break;
                      }

                      _context13.next = 6;
                      return this.assistInstance.walletSelect(previouslySelectedWallet);

                    case 6:
                      selectedWallet = _context13.sent;

                    case 7:
                      _context13.next = 12;
                      break;

                    case 9:
                      _context13.next = 11;
                      return this.assistInstance.walletSelect();

                    case 11:
                      selectedWallet = _context13.sent;

                    case 12:
                      state = this.assistInstance.getState();

                      if (!(selectedWallet || state.address !== null // If user already logged in but want to switch account, and then dismissed window
                      )) {
                        _context13.next = 21;
                        break;
                      }

                      _context13.next = 16;
                      return this.assistInstance.walletCheck();

                    case 16:
                      ready = _context13.sent;
                      this.state = this.assistInstance.getState();

                      if (!ready) {
                        // Selected an option but then dismissed it
                        // Treat as no wallet
                        onError();
                      } else {
                        // Successfully connected
                        onConnected();
                      }

                      _context13.next = 23;
                      break;

                    case 21:
                      // User refuses to connect to wallet
                      // Update state
                      this.state = this.assistInstance.getState();
                      onError();

                    case 23:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "estimateGas",
          value: function estimateGas(func, val, _onError) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.t0 = Math;
                      _context14.next = 3;
                      return func.estimateGas({
                        from: this.state.address,
                        value: val
                      })["catch"](_onError);

                    case 3:
                      _context14.t1 = _context14.sent;
                      _context14.t2 = _context14.t1 * 1.2;
                      return _context14.abrupt("return", _context14.t0.floor.call(_context14.t0, _context14.t2));

                    case 6:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "sendTx",
          value: function sendTx(func, _onTxHash, _onReceipt, _onError) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var gasLimit;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.estimateGas(func, 0, _onError);

                    case 2:
                      gasLimit = _context15.sent;

                      if (isNaN(gasLimit)) {
                        _context15.next = 5;
                        break;
                      }

                      return _context15.abrupt("return", func.send({
                        from: this.state.address,
                        gas: gasLimit
                      }).on('transactionHash', function (hash) {
                        _onTxHash(hash);
                      }).on('error', function (e) {
                        if (!e.toString().contains('newBlockHeaders')) {
                          _onError(e);
                        }
                      }).on("receipt", function () {
                        _onReceipt();
                      }));

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "sendTxWithValue",
          value: function sendTxWithValue(func, val, _onTxHash, _onReceipt, _onError) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var gasLimit;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.estimateGas(func, val, _onError);

                    case 2:
                      gasLimit = _context16.sent;

                      if (isNaN(gasLimit)) {
                        _context16.next = 5;
                        break;
                      }

                      return _context16.abrupt("return", func.send({
                        from: this.state.address,
                        gas: gasLimit,
                        value: val
                      }).on('transactionHash', function (hash) {
                        _onTxHash(hash);
                      }).on('error', function (e) {
                        if (!e.toString().contains('newBlockHeaders')) {
                          _onError(e);
                        }
                      }).on("receipt", function () {
                        _onReceipt();
                      }));

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "sendTxWithNFT",
          value: function sendTxWithNFT(func, token, to, gasLimit, _onTxHash, _onReceipt, _onError) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this13 = this;

              var isApproved;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return token.methods.isApprovedForAll(this.state.address, to).call();

                    case 2:
                      isApproved = _context17.sent;

                      if (!isApproved) {
                        _context17.next = 7;
                        break;
                      }

                      func.send({
                        from: this.state.address,
                        gas: gasLimit
                      }).on('transactionHash', function (hash) {
                        _onTxHash(hash);
                      }).on('error', function (e) {
                        if (!e.toString().contains('newBlockHeaders')) {
                          _onError(e);
                        }
                      }).on("receipt", function () {
                        _onReceipt();
                      });
                      _context17.next = 8;
                      break;

                    case 7:
                      return _context17.abrupt("return", this.sendTx(token.methods.setApprovalForAll(to, true), function () {
                        func.send({
                          from: _this13.state.address,
                          gas: gasLimit
                        }).on('transactionHash', function (hash) {
                          _onTxHash(hash);
                        }).on('error', function (e) {
                          if (!e.toString().contains('newBlockHeaders')) {
                            _onError(e);
                          }
                        }).on("receipt", function () {
                          _onReceipt();
                        });
                      }, this.doNothing, _onError));

                    case 8:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "sendTxWithToken",
          value: function sendTxWithToken(func, token, to, amount, gasLimit, _onTxHash, _onReceipt, _onError) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this14 = this;

              var maxAllowance, state, allowance;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      maxAllowance = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(2).pow(256).minus(1).integerValue().toFixed();
                      state = this.state;
                      _context18.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a;
                      _context18.next = 5;
                      return token.methods.allowance(state.address, to).call();

                    case 5:
                      _context18.t1 = _context18.sent;
                      allowance = new _context18.t0(_context18.t1);

                      if (!allowance.gt(0)) {
                        _context18.next = 13;
                        break;
                      }

                      if (!allowance.gte(amount)) {
                        _context18.next = 10;
                        break;
                      }

                      return _context18.abrupt("return", this.sendTx(func, _onTxHash, _onReceipt, _onError));

                    case 10:
                      return _context18.abrupt("return", this.sendTx(token.methods.approve(to, 0), function () {
                        _this14.sendTx(token.methods.approve(to, maxAllowance), function () {
                          func.send({
                            from: _this14.state.address,
                            gas: gasLimit
                          }).on('transactionHash', function (hash) {
                            _onTxHash(hash);
                          }).on('error', function (e) {
                            if (!e.toString().contains('newBlockHeaders')) {
                              _onError(e);
                            }
                          }).on("receipt", function () {
                            _onReceipt();
                          });
                        }, _this14.doNothing, _onError);
                      }, this.doNothing, _onError));

                    case 13:
                      return _context18.abrupt("return", this.sendTx(token.methods.approve(to, maxAllowance), function () {
                        func.send({
                          from: _this14.state.address,
                          gas: gasLimit
                        }).on('transactionHash', function (hash) {
                          _onTxHash(hash);
                        }).on('error', function (e) {
                          if (!e.toString().contains('newBlockHeaders')) {
                            _onError(e);
                          }
                        }).on("receipt", function () {
                          _onReceipt();
                        });
                      }, this.doNothing, _onError));

                    case 14:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "doNothing",
          value: function doNothing() {}
        }]);

        return Web3Enabled;
      }();
      /***/

    },

    /***/
    "Wk4U":
    /*!*************************!*\
      !*** ./src/app/web3.ts ***!
      \*************************/

    /*! exports provided: WEB3 */

    /***/
    function Wk4U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WEB3", function () {
        return WEB3;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! web3 */
      "meUc");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);

      var WEB3 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('web3', {
        providedIn: 'root',
        factory: function factory() {
          try {
            var provider = 'ethereum' in window ? window['ethereum'] : web3__WEBPACK_IMPORTED_MODULE_1___default.a.givenProvider;
            return new web3__WEBPACK_IMPORTED_MODULE_1___default.a(provider);
          } catch (err) {
            throw new Error('Non-Ethereum browser detected. You should consider trying MetaMask!');
          }
        }
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _spawn_spawn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./spawn/spawn.component */
      "sbAl");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _claim_claim_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./claim/claim.component */
      "6D4n");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./menu/menu.component */
      "TGkX");
      /* harmony import */


      var _summon_summon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./summon/summon.component */
      "3jk2");
      /* harmony import */


      var _collection_collection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./collection/collection.component */
      "NNjt");
      /* harmony import */


      var _monster_monster_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./monster/monster.component */
      "PgRK");
      /* harmony import */


      var _farm_farm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./farm/farm.component */
      "cJ//");
      /* harmony import */


      var _credits_credits_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./credits/credits.component */
      "SCN6");
      /* harmony import */


      var _sender_sender_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./sender/sender.component */
      "znQw");
      /* harmony import */


      var _founder_founder_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./founder/founder.component */
      "ZWPW");
      /* harmony import */


      var _on_chain_on_chain_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./on-chain/on-chain.component */
      "fykK");
      /* harmony import */


      var _multisender_multisender_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./multisender/multisender.component */
      "6Bc2");
      /* harmony import */


      var _bundler_bundler_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./bundler/bundler.component */
      "p6oi");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _spawn_spawn_component__WEBPACK_IMPORTED_MODULE_7__["SpawnComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _claim_claim_component__WEBPACK_IMPORTED_MODULE_9__["ClaimComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _summon_summon_component__WEBPACK_IMPORTED_MODULE_11__["SummonComponent"], _collection_collection_component__WEBPACK_IMPORTED_MODULE_12__["CollectionComponent"], _monster_monster_component__WEBPACK_IMPORTED_MODULE_13__["MonsterComponent"], _farm_farm_component__WEBPACK_IMPORTED_MODULE_14__["FarmComponent"], _credits_credits_component__WEBPACK_IMPORTED_MODULE_15__["CreditsComponent"], _sender_sender_component__WEBPACK_IMPORTED_MODULE_16__["SenderComponent"], _founder_founder_component__WEBPACK_IMPORTED_MODULE_17__["FounderComponent"], _on_chain_on_chain_component__WEBPACK_IMPORTED_MODULE_18__["OnChainComponent"], _multisender_multisender_component__WEBPACK_IMPORTED_MODULE_19__["MultisenderComponent"], _bundler_bundler_component__WEBPACK_IMPORTED_MODULE_20__["BundlerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _spawn_spawn_component__WEBPACK_IMPORTED_MODULE_7__["SpawnComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _claim_claim_component__WEBPACK_IMPORTED_MODULE_9__["ClaimComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _summon_summon_component__WEBPACK_IMPORTED_MODULE_11__["SummonComponent"], _collection_collection_component__WEBPACK_IMPORTED_MODULE_12__["CollectionComponent"], _monster_monster_component__WEBPACK_IMPORTED_MODULE_13__["MonsterComponent"], _farm_farm_component__WEBPACK_IMPORTED_MODULE_14__["FarmComponent"], _credits_credits_component__WEBPACK_IMPORTED_MODULE_15__["CreditsComponent"], _sender_sender_component__WEBPACK_IMPORTED_MODULE_16__["SenderComponent"], _founder_founder_component__WEBPACK_IMPORTED_MODULE_17__["FounderComponent"], _on_chain_on_chain_component__WEBPACK_IMPORTED_MODULE_18__["OnChainComponent"], _multisender_multisender_component__WEBPACK_IMPORTED_MODULE_19__["MultisenderComponent"], _bundler_bundler_component__WEBPACK_IMPORTED_MODULE_20__["BundlerComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZWPW":
    /*!**********************************************!*\
      !*** ./src/app/founder/founder.component.ts ***!
      \**********************************************/

    /*! exports provided: FounderComponent */

    /***/
    function ZWPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FounderComponent", function () {
        return FounderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FounderComponent = /*#__PURE__*/function () {
        function FounderComponent() {
          _classCallCheck(this, FounderComponent);
        }

        _createClass(FounderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FounderComponent;
      }();

      FounderComponent.ɵfac = function FounderComponent_Factory(t) {
        return new (t || FounderComponent)();
      };

      FounderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FounderComponent,
        selectors: [["app-founder"]],
        decls: 23,
        vars: 0,
        consts: [[1, "container"], ["routerLink", "/sender"]],
        template: function FounderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi there, thanks for helping to be an early supporter of the program! In the future, experimental features and goodies will be placed here as well. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To claim your airdrop, head over to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "sender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " page and head down to Claim Rewards.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Input the 0xmons address: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "0x0427743DF720801825a5c82e0582B1E915E0F750");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Input the ID of the founder NFT you own. (1 for W\xF6kr, 2 for Vmew, 3 for Kali-Z\xFCi, and 4 for Zaphthrot).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Input the XMON address: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "0x3aada3e213abf8529606924d8d1c55cbdc70bf74");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Click Check Rewards to verify your token reward amount.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Click Claim Rewards to claim them.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kZXIvZm91bmRlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FounderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-founder',
            templateUrl: './founder.component.html',
            styleUrls: ['./founder.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "aPik":
    /*!*************************************!*\
      !*** ./src/app/contract.service.ts ***!
      \*************************************/

    /*! exports provided: ContractService */

    /***/
    function aPik(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContractService", function () {
        return ContractService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./wallet.service */
      "jiVP");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./constants.service */
      "IKM7");

      var ContractService = /*#__PURE__*/function () {
        function ContractService(wallet, constants) {
          _classCallCheck(this, ContractService);

          this.wallet = wallet;
          this.constants = constants;
          this.loadData();
        }

        _createClass(ContractService, [{
          key: "ERC20",
          value: function ERC20(address) {
            var abi = __webpack_require__(
            /*! ../assets/abi/ERC20.json */
            "tTNn");

            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "ERC721",
          value: function ERC721(address) {
            var abi = __webpack_require__(
            /*! ../assets/abi/ERC721.json */
            "KcTH");

            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "ERC1155",
          value: function ERC1155(address) {
            var abi = __webpack_require__(
            /*! ../assets/abi/ERC1155.json */
            "2PZg");

            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }));
          }
        }, {
          key: "ClAIMER",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/Claimer.json */
            "qVjW");

            var address = this.constants.CLAIMER_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "XMON",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/ERC20.json */
            "tTNn");

            var address = this.constants.XMON_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "MON_MINTER",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/MonMinter.json */
            "Ulh2");

            var address = this.constants.MON_MINTER_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "MON_STAKER",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/MonStaker2.json */
            "baaO");

            var address = this.constants.MON_STAKER_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "MON_SPAWNER",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/MonSpawner.json */
            "zpkQ");

            var address = this.constants.MON_SPAWNER_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "MULTICALL",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/Multicall.json */
            "iM0H");

            var address = this.constants.MULTICALL_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "NFT_AGG",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/NFTAggregator.json */
            "BHlI");

            var address = this.constants.NFT_AGGREGATOR_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "LP_POOL_REWARDS",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/Rewards.json */
            "AAyo");

            var address = this.constants.LP_POOL_REWARDS_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "XMON_ETH_LP",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/ERC20.json */
            "tTNn");

            var address = this.constants.XMON_ETH_LP_TOKEN_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "NFT_SENDER",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/NFTSender.json */
            "8s2F");

            var address = this.constants.NFT_SENDER_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "MON_REGISTRY",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/MonRegistry.json */
            "oG44");

            var address = this.constants.MON_REGISTRY_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "OLD_0XMONS",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/ERC721.json */
            "KcTH");

            var address = this.constants.OLD_0XMONS_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "WETH",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/ERC20.json */
            "tTNn");

            var address = this.constants.WETH_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "DAI",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/ERC20.json */
            "tTNn");

            var address = this.constants.DAI_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }, {
          key: "MULTISENDER",
          get: function get() {
            var abi = __webpack_require__(
            /*! ../assets/abi/Multisender.json */
            "lVFg");

            var address = this.constants.MULTISENDER_ADDRESS;
            return new this.wallet.web3.eth.Contract(abi, address);
          }
        }]);

        return ContractService;
      }();

      ContractService.ɵfac = function ContractService_Factory(t) {
        return new (t || ContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]));
      };

      ContractService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ContractService,
        factory: ContractService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContractService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "baaO":
    /*!****************************************!*\
      !*** ./src/assets/abi/MonStaker2.json ***!
      \****************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, default */

    /***/
    function baaO(module) {
      module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"xmonAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"monMinterAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"STAKER_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"addStake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"awardDoom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseDoomFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimMon\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"doomBalances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"doomFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"doomMultiplier\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"emergencyRemoveStake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxMons\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxStake\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"monMinter\",\"outputs\":[{\"internalType\":\"contract IMonMinter\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numTokens\",\"type\":\"uint256\"}],\"name\":\"moveTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"numMons\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"numSummons\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"pendingDoom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"prefixURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rarity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"removeStake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"f\",\"type\":\"uint256\"}],\"name\":\"setBaseDoomFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"setDoomBalances\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"}],\"name\":\"setDoomMultiplier\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"}],\"name\":\"setMaxMons\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"}],\"name\":\"setMaxStake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"prefix\",\"type\":\"string\"}],\"name\":\"setPrefixURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"r\",\"type\":\"uint256\"}],\"name\":\"setRarity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setStakerAdminRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"stakeRecords\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"startBlock\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"xmon\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "cJ//":
    /*!****************************************!*\
      !*** ./src/app/farm/farm.component.ts ***!
      \****************************************/

    /*! exports provided: FarmComponent */

    /***/
    function cJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FarmComponent", function () {
        return FarmComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FarmComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hypothetically, if you staked 1 LP token: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var FarmComponent = /*#__PURE__*/function () {
        function FarmComponent(wallet, contract, constants, utils) {
          _classCallCheck(this, FarmComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.resetData();
        }

        _createClass(FarmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            if (this.wallet.connected) {
              this.loadData();
              setInterval(function () {
                _this15.loadData();
              }, 60000);
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this15.loadData();

              setInterval(function () {
                _this15.loadData();
              }, 60000);
            });
            this.wallet.errorEvent.subscribe(function () {
              _this15.resetData();
            });
            this.countDown();
            setInterval(function () {
              _this15.countDown();
            }, 1000);
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.lpBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.stakedBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.farmedXMON = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.rewardsLPBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.endTime = 1611079200;
            this.poolProportion = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.dailyXMONYield = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.dailyXMONYieldDAI = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.stakedBalanceDAI = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.floatingYield = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.notStaking = false;
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var multicallFns, results, ethInXMONLP, xmonPriceInEth, ethPriceDAI, xmonPriceDAI, totalLPBalance, lpTokenPrice, floatingYield;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      multicallFns = {
                        "lpBalance": {
                          target: this.constants.XMON_ETH_LP_TOKEN_ADDRESS,
                          callData: this.contract.XMON_ETH_LP.methods.balanceOf(this.wallet.userAddress).encodeABI()
                        },
                        "stakedBalance": {
                          target: this.constants.LP_POOL_REWARDS_ADDRESS,
                          callData: this.contract.LP_POOL_REWARDS.methods.balanceOf(this.wallet.userAddress).encodeABI()
                        },
                        "farmedXMON": {
                          target: this.constants.LP_POOL_REWARDS_ADDRESS,
                          callData: this.contract.LP_POOL_REWARDS.methods.earned(this.wallet.userAddress).encodeABI()
                        },
                        "rewardsLPBalance": {
                          target: this.constants.XMON_ETH_LP_TOKEN_ADDRESS,
                          callData: this.contract.XMON_ETH_LP.methods.balanceOf(this.constants.LP_POOL_REWARDS_ADDRESS).encodeABI()
                        },
                        "endTime": {
                          target: this.constants.LP_POOL_REWARDS_ADDRESS,
                          callData: this.contract.LP_POOL_REWARDS.methods.periodFinish().encodeABI()
                        },
                        "ethInXMONLP": {
                          target: this.constants.WETH_ADDRESS,
                          callData: this.contract.WETH.methods.balanceOf(this.constants.XMON_ETH_LP_TOKEN_ADDRESS).encodeABI()
                        },
                        "XMONInXMONLP": {
                          target: this.constants.XMON_ADDRESS,
                          callData: this.contract.XMON.methods.balanceOf(this.constants.XMON_ETH_LP_TOKEN_ADDRESS).encodeABI()
                        },
                        "ethInETHDAILP": {
                          target: this.constants.WETH_ADDRESS,
                          callData: this.contract.WETH.methods.balanceOf(this.constants.WETH_DAI_LP_ADDRESS).encodeABI()
                        },
                        "daiInETHDAILP": {
                          target: this.constants.DAI_ADDRESS,
                          callData: this.contract.DAI.methods.balanceOf(this.constants.WETH_DAI_LP_ADDRESS).encodeABI()
                        },
                        "totalXMONLPBalance": {
                          target: this.constants.XMON_ETH_LP_TOKEN_ADDRESS,
                          callData: this.contract.XMON_ETH_LP.methods.totalSupply().encodeABI()
                        }
                      };
                      _context20.next = 3;
                      return this.utils.makeMulticall(multicallFns);

                    case 3:
                      results = _context20.sent;
                      this.lpBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["lpBalance"])).div(this.constants.PRECISION);
                      this.stakedBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["stakedBalance"])).div(this.constants.PRECISION);

                      if (this.stakedBalance.eq(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0))) {
                        this.notStaking = true;
                        this.stakedBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(1);
                      }

                      this.farmedXMON = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["farmedXMON"])).div(this.constants.PRECISION);
                      this.rewardsLPBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["rewardsLPBalance"])).div(this.constants.PRECISION);
                      this.endTime = this.utils.decode("uint256", results["endTime"]); // APY calculations

                      ethInXMONLP = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["ethInXMONLP"]));
                      xmonPriceInEth = ethInXMONLP.div(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["XMONInXMONLP"])));
                      ethPriceDAI = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["daiInETHDAILP"])).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["ethInETHDAILP"])));
                      xmonPriceDAI = xmonPriceInEth.times(ethPriceDAI);
                      totalLPBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.utils.decode("uint256", results["totalXMONLPBalance"]));
                      lpTokenPrice = ethInXMONLP.div(totalLPBalance).times(ethPriceDAI).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(2));
                      this.poolProportion = this.stakedBalance.div(this.rewardsLPBalance);
                      this.dailyXMONYield = this.poolProportion.times(this.constants.XMON_PER_DAY);
                      this.dailyXMONYieldDAI = this.dailyXMONYield.times(xmonPriceDAI);
                      this.stakedBalanceDAI = lpTokenPrice.times(this.stakedBalance);
                      floatingYield = this.dailyXMONYieldDAI.div(this.stakedBalanceDAI).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(100));
                      this.floatingYield = floatingYield;
                      this.stakedBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);

                    case 23:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "stake",
          value: function stake() {
            var _this16 = this;

            if (!this.stakeAmount) {
              this.stakeAmount = '0';
            }

            if (this.stakeAmount === '0') {
              alert("Must have stake greater than 0!");
              return;
            }

            var formattedStakeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.stakeAmount).times(this.constants.PRECISION).integerValue().toFixed();
            var func = this.contract.LP_POOL_REWARDS.methods.stake(formattedStakeAmount);
            this.wallet.sendTxWithToken(func, this.contract.XMON_ETH_LP, this.constants.LP_POOL_REWARDS_ADDRESS, formattedStakeAmount, 200000, function () {}, function () {
              _this16.loadData();
            }, function () {});
          }
        }, {
          key: "exit",
          value: function exit() {
            var _this17 = this;

            var func = this.contract.LP_POOL_REWARDS.methods.exit();
            this.wallet.sendTx(func, function () {}, function () {
              _this17.loadData();
            }, function () {});
          }
        }, {
          key: "claimRewards",
          value: function claimRewards() {
            var _this18 = this;

            var func = this.contract.LP_POOL_REWARDS.methods.getReward();
            this.wallet.sendTx(func, function () {}, function () {
              _this18.loadData();
            }, function () {});
          }
        }, {
          key: "fillForm",
          value: function fillForm(value) {
            this.stakeAmount = value.toString();
          }
        }, {
          key: "countDown",
          value: function countDown() {
            var countDownDate = new Date(this.endTime * 1000).getTime(); // Get today's date and time

            var now = new Date().getTime(); // Find the distance between now and the count down date

            var distance = countDownDate - now;

            if (distance >= 0) {
              // Time calculations for days, hours, minutes and seconds
              this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
              this.hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              this.minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
              this.seconds = Math.floor(distance % (1000 * 60) / 1000);
            }
          }
        }]);

        return FarmComponent;
      }();

      FarmComponent.ɵfac = function FarmComponent_Factory(t) {
        return new (t || FarmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]));
      };

      FarmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FarmComponent,
        selectors: [["app-farm"]],
        decls: 94,
        vars: 14,
        consts: [[1, "container"], [1, "centered"], [1, "header"], [1, "cursed-text"], [1, "card"], [1, "lp-ticker"], [1, "xmon-ticker"], ["href", "https://info.uniswap.org/pair/0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9"], ["href", "https://etherscan.io/address/0xd4275e04dbe82526e4a17ac0fb8f509b6080a455"], [1, "countdown"], [1, "two-cols"], [1, "card-header", "staking-header"], [1, "card-text"], [1, "clickable", 3, "click"], [1, "form-holder"], ["placeholder", "0.0000", "name", "stakeAmountInput", 1, "form", 3, "ngModel", "ngModelChange"], ["id", "add-btn", 3, "click"], ["id", "remove-btn", 3, "click"], [1, "card-header", "farming-header"], [1, "xmon-squid"], [1, "claim-btn", 3, "click"], [1, "cursed-text", "stats-header"], ["href", "https://uniswap.org/docs/v2/advanced-topics/understanding-returns/"], [1, "apy-stats"], [4, "ngIf"]],
        template: function FarmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "HARVEST");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \xE9lan vital");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Stake your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "XMON-ETH");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " LP tokens to earn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "You can get XMON-ETH LP tokens by providing liquidity on Uniswap ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Farming uses this SNX Rewards contract ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "The next distribution will start shortly afterwards, no need to unstake.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\uD83D\uDCA7 STAKING LP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_Template_div_click_38_listener() {
              return ctx.fillForm(ctx.stakedBalance);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_Template_div_click_40_listener() {
              return ctx.fillForm(ctx.lpBalance);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FarmComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.stakeAmount = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_Template_button_click_44_listener() {
              return ctx.stake();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Add Stake");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_Template_button_click_46_listener() {
              return ctx.exit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Remove All Stake");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\uD83E\uDD91");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " FARMING ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmComponent_Template_button_click_60_listener() {
              return ctx.claimRewards();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Claim XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Unstable Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " (Note these stats fluctuate according to the whims of The Mark'et. They are unstable, they do not factor in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "impermanent loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, ", and they are only meant as a rough guide. Taking them as dogma ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "will");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " lead to d\u036D\u0352\u0308\u0322\u0345\u0325\u034E\u033B\u0353\u0355\u0359e\u0364\u036C\u0314\u034C\u0335\u035A\u0354g\u0309\u0489\u0353\u031E\u0339\u0347\u0349\u0332e\u0346\u030B\u033D\u0336\u032B\u0356\u0326\u0349\u0326\u0353\u0347n\u033E\u0338\u033C\u0355\u0325\u0323\u033Be\u034B\u0346\u0351\u0315\u032C\u0356\u031Dr\u036F\u030E\u0311\u0350\u035F\u033C\u033A\u035A\u032Ca\u0307\u0303\u033D\u0340\u031C\u032F\u031Cc\u0352\u034C\u0308\u0304\u0341\u033A\u031F\u031C\u0316\u0347\u0320\u0330y\u030B\u0336\u0353\u0359\u031D) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, FarmComponent_div_75_Template, 2, 0, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "You are staking: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " worth of LP tokens.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "You are earning: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " per day.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Your floating returns per day is: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("Current farming round ends in ", ctx.days, " days ", ctx.hours, " hours ", ctx.minutes, " minutes ", ctx.seconds, " seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total staked: ", ctx.rewardsLPBalance.toFormat(5), " XMON-ETH LP tokens");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Staking: ", ctx.stakedBalance.toFormat(8), " XMON-ETH LP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Balance: ", ctx.lpBalance.toFormat(8), " XMON-ETH LP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.stakeAmount);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Farmed: ", ctx.farmedXMON, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notStaking);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("~", ctx.stakedBalanceDAI.toFormat(8), " DAI");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("~", ctx.dailyXMONYield.toFormat(8), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (~", ctx.dailyXMONYieldDAI.toFormat(8), " DAI)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.floatingYield, "%");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        styles: ["button[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0.5rem 0.5rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 0.5rem 0.5rem;\n}\n\n.two-cols[_ngcontent-%COMP%] {\n  -moz-column-gap: 0rem;\n       column-gap: 0rem;\n}\n\n.countdown[_ngcontent-%COMP%] {\n  color: var(--pink);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n\n.staking-header[_ngcontent-%COMP%] {\n  color: var(--light-gray);\n}\n\n.farming-header[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n\n.xmon-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: -3.75rem;\n  margin-top: -1rem;\n}\n\n#add-btn[_ngcontent-%COMP%], #remove-btn[_ngcontent-%COMP%] {\n  color: var(--med-green);\n  background-color: var(--black);\n}\n\n#add-btn[_ngcontent-%COMP%]:hover{\n  color: white;\n  background-color: var(--dark-green);\n}\n\n#remove-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: var(--red);\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color : var(--black) !important; \n  color: white !important;\n  font-size: 1.2rem;\n  outline: none;\n  border: 2px solid var(--gray);\n  padding: 0.5rem 0.2rem;\n  width: 21rem;\n}\n\n.form-holder[_ngcontent-%COMP%] {\n  margin: 0.5rem 0.5rem !important;\n}\n\n.xmon-ticker[_ngcontent-%COMP%], .doom-ticker[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-weight: bold;\n}\n\n.xmon-ticker[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n\n.card-text[_ngcontent-%COMP%] {\n  line-height: 2rem;\n}\n\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.clickable[_ngcontent-%COMP%]:hover {\n  color: var(--light-green);\n}\n\n.xmon-squid[_ngcontent-%COMP%] {\n  filter: sepia(1) saturate(2.5)  hue-rotate(90deg);\n}\n\n.claim-btn[_ngcontent-%COMP%] {\n  margin-top: 2.25rem;\n}\n\n.stats-header[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n\n.apy-stats[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.apy-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybS9mYXJtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFnQjtPQUFoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Zhcm0vZmFybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbTtcbn1cblxuLmNhcmQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbn1cblxuLnR3by1jb2xzIHtcbiAgY29sdW1uLWdhcDogMHJlbTtcbn1cblxuLmNvdW50ZG93biB7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnN0YWtpbmctaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuLmZhcm1pbmctaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLW1lZC1ncmVlbik7XG59XG5cbi54bW9uLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtMy43NXJlbTtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG59XG5cbiNhZGQtYnRuLCAjcmVtb3ZlLWJ0biB7XG4gIGNvbG9yOiB2YXIoLS1tZWQtZ3JlZW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG4jYWRkLWJ0bjpob3ZlcntcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcbn1cbiNyZW1vdmUtYnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xufVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1ibGFjaykgIWltcG9ydGFudDsgXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheSk7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjJyZW07XG4gIHdpZHRoOiAyMXJlbTtcbn1cbi5mb3JtLWhvbGRlciB7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ueG1vbi10aWNrZXIsIC5kb29tLXRpY2tlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnhtb24tdGlja2VyIHtcbiAgY29sb3I6IHZhcigtLW1lZC1ncmVlbik7XG59XG5cbi5jYXJkLXRleHQge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jbGlja2FibGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xufVxuXG4ueG1vbi1zcXVpZCB7XG4gIGZpbHRlcjogc2VwaWEoMSkgc2F0dXJhdGUoMi41KSAgaHVlLXJvdGF0ZSg5MGRlZyk7XG59XG5cbi5jbGFpbS1idG4ge1xuICBtYXJnaW4tdG9wOiAyLjI1cmVtO1xufVxuXG4uc3RhdHMtaGVhZGVyIHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4uYXB5LXN0YXRzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXB5LXN0YXRzID4gZGl2IHtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FarmComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-farm',
            templateUrl: './farm.component.html',
            styleUrls: ['./farm.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../menu/menu.component */
      "TGkX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.wallet.userAddress.substring(0, 14), " ");
        }
      }

      function HeaderComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \uD83C\uDFE6 CONNECT WALLET ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(wallet) {
          _classCallCheck(this, HeaderComponent);

          this.wallet = wallet;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "connectWallet",
          value: function connectWallet() {
            this.wallet.connect(function () {}, function () {}, false);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 8,
        vars: 2,
        consts: [[1, "logo-wrapper"], ["routerLink", "/", "routerLinkActive", "active"], ["src", "./assets/0xmons-logo-simple-med.png", "id", "logo"], [1, "wallet-holder"], ["type", "button", 1, "wallet-button", 3, "click"], [4, "ngIf"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() {
              return ctx.connectWallet();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallet.connected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.wallet.connected);
          }
        },
        directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["#logo[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 8rem;\n  height: auto;\n}\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.logo-anchor[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.wallet-holder[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2rem;\n  top: 1.75rem;\n}\n\n.wallet-button[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.wallet-button[_ngcontent-%COMP%]:hover {\n  -webkit-animation: colorFlash 2s linear infinite;\n          animation: colorFlash 2s linear infinite;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 0.5rem 0.5rem;\n  font-size: 1.2rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  background-color: var(--dark-gray);\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 768px) {\n  .wallet-holder[_ngcontent-%COMP%] {\n    position: unset;\n    right: unset;\n    top: unset;\n    display: block;\n    text-align: center;\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0RBQXdDO1VBQXhDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dvIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmxvZ28td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nby1hbmNob3Ige1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53YWxsZXQtaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnJlbTtcbiAgdG9wOiAxLjc1cmVtO1xufVxuLndhbGxldC1idXR0b24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi53YWxsZXQtYnV0dG9uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBjb2xvckZsYXNoIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLm5hdmJhciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5hdmJhciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG59XG4ubmF2YmFyIGE6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud2FsbGV0LWhvbGRlciB7XG4gICAgcG9zaXRpb246IHVuc2V0O1xuICAgIHJpZ2h0OiB1bnNldDtcbiAgICB0b3A6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 20,
        vars: 0,
        consts: [[1, "container"], [1, "footer"], [1, "footer-item"], ["href", "https://discord.gg/8qtbuKjKfG"], ["href", "https://etherscan.io/token/0x3aaDA3e213aBf8529606924d8D1c55CbDc70Bf74"], ["href", "https://github.com/0xmons"], ["href", "https://t.me/nft000"], ["href", "https://twitter.com/0xmons"], ["href", "https://info.uniswap.org/token/0x3aada3e213abf8529606924d8d1c55cbdc70bf74"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Discord");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Etherscan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "GitHub");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Telegram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Uniswap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".footer[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.footer-item[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZvb3Rlci1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fykK":
    /*!************************************************!*\
      !*** ./src/app/on-chain/on-chain.component.ts ***!
      \************************************************/

    /*! exports provided: OnChainComponent */

    /***/
    function fykK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnChainComponent", function () {
        return OnChainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var OnChainComponent = /*#__PURE__*/function () {
        function OnChainComponent(wallet, contract, constants, utils, activatedRoute, sanitizer) {
          _classCallCheck(this, OnChainComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.activatedRoute = activatedRoute;
          this.sanitizer = sanitizer;
          this.resetData();
        }

        _createClass(OnChainComponent, [{
          key: "resetData",
          value: function resetData() {
            this.monData = {};
            this.width = 14;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.txHash = this.activatedRoute.snapshot.paramMap.get('txHash');

            if (this.wallet.connected) {
              this.loadData();
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this19.loadData();
            });
            this.wallet.errorEvent.subscribe(function () {
              _this19.resetData();
            });
            this.activatedRoute.params.subscribe(function (routeParams) {
              _this19.txHash = routeParams.txHash;

              if (_this19.wallet.connected) {
                _this19.loadData();
              }
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var input, decodedInput, decodedArr, multicallFns, result;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      if (!(this.txHash.length < 20)) {
                        _context21.next = 12;
                        break;
                      }

                      multicallFns = {
                        "staticHash": {
                          target: this.constants.MON_REGISTRY_ADDRESS,
                          // Note "txHash" is actually mon ID, and we do a call to look up the actual data on-chain
                          callData: this.contract.MON_REGISTRY.methods.monDataWithStatic(this.txHash).encodeABI()
                        }
                      };
                      _context21.next = 4;
                      return this.utils.makeMulticall(multicallFns);

                    case 4:
                      result = _context21.sent;
                      _context21.next = 7;
                      return this.utils.decode("bytes", result["staticHash"]);

                    case 7:
                      input = _context21.sent;
                      decodedInput = this.wallet.web3.utils.toAscii(input);
                      decodedArr = decodedInput.split("|");
                      _context21.next = 17;
                      break;

                    case 12:
                      _context21.next = 14;
                      return this.getArgsByTxHash(this.txHash);

                    case 14:
                      input = _context21.sent;
                      decodedInput = this.wallet.web3.utils.toAscii(input);
                      decodedArr = decodedInput.substring(68).split("|");

                    case 17:
                      this.monData["name"] = decodedArr[0];
                      this.monData["epithets"] = decodedArr[1];
                      this.monData["lore"] = decodedArr[2];
                      _context21.next = 22;
                      return this.loadImg(decodedArr[3]);

                    case 22:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "getArgsByTxHash",
          value: function getArgsByTxHash(hash) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var tx;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.wallet.web3.eth.getTransaction(hash);

                    case 2:
                      tx = _context22.sent;
                      return _context22.abrupt("return", tx.input);

                    case 4:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "loadImg",
          value: function loadImg(str) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var decodedInput;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      decodedInput = this.sanitizer.bypassSecurityTrustUrl('data:image/gif;base64,' + str);
                      this.monData["base64Safe"] = decodedInput;

                    case 2:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "updateWidth",
          value: function updateWidth(num) {
            this.width = this.width + num;
          }
        }]);

        return OnChainComponent;
      }();

      OnChainComponent.ɵfac = function OnChainComponent_Factory(t) {
        return new (t || OnChainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]));
      };

      OnChainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OnChainComponent,
        selectors: [["app-on-chain"]],
        decls: 26,
        vars: 7,
        consts: [[1, "mon-container"], [1, "onchain-header"], [1, "mon-name"], [1, "mon-img", 3, "src"], ["title", "Decrease image size", 1, "zoom-btn", 3, "click"], ["title", "Increase image size", 1, "zoom-btn", 3, "click"], [1, "mon-data-card"], [1, "lore"]],
        template: function OnChainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ON-CHAIN ENCODED 0XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnChainComponent_Template_button_click_8_listener() {
              return ctx.updateWidth(-2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnChainComponent_Template_button_click_10_listener() {
              return ctx.updateWidth(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Epithets:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Lore:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.monData.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width, "rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.monData.base64Safe, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.monData.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.monData.epithets, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.monData.lore);
          }
        },
        styles: [".mon-container[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  max-width: 40rem;\n  margin: auto;\n}\n\n.zoom-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  margin: 0.5rem 0.5rem;\n  border: 2px solid var(--light-gray);\n}\n\n.onchain-icon[_ngcontent-%COMP%] {\n  margin: 0.5rem 0.6rem;\n  font-size: 1.5rem;\n}\n\n.onchain-icon[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.onchain-header[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--med-green);\n  font-weight: bold;\n  margin-bottom: 2rem;\n  text-align: center;\n}\n\n.mon-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  text-shadow: 2px -2px var(--med-green), -2px 2px var(--pink);\n  margin-bottom: 1rem;\n}\n\n.mon-img[_ngcontent-%COMP%] {\n  width: 20rem;\n  height: auto;\n  padding: 1.5rem 1.5rem;\n  border: 2px solid white;\n}\n\n.mon-data-card[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.lore[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--light-gray);\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tY2hhaW4vb24tY2hhaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDREQUE0RDtFQUM1RCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL29uLWNoYWluL29uLWNoYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBtYXgtd2lkdGg6IDQwcmVtO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi56b29tLWJ0biB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG4ub25jaGFpbi1pY29uIHtcbiAgbWFyZ2luOiAwLjVyZW0gMC42cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm9uY2hhaW4taWNvbiA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5vbmNoYWluLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHZhcigtLW1lZC1ncmVlbik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb24tbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDJweCAtMnB4IHZhcigtLW1lZC1ncmVlbiksIC0ycHggMnB4IHZhcigtLXBpbmspO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubW9uLWltZyB7XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm1vbi1kYXRhLWNhcmQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmxvcmUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnChainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-on-chain',
            templateUrl: './on-chain.component.html',
            styleUrls: ['./on-chain.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iM0H":
    /*!***************************************!*\
      !*** ./src/assets/abi/Multicall.json ***!
      \***************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */

    /***/
    function iM0H(module) {
      module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"components\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"callData\",\"type\":\"bytes\"}],\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"name\":\"difficulty\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"name\":\"coinbase\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "jiVP":
    /*!***********************************!*\
      !*** ./src/app/wallet.service.ts ***!
      \***********************************/

    /*! exports provided: WalletService */

    /***/
    function jiVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletService", function () {
        return WalletService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web3Enabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./web3Enabled */
      "V72t");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! web3 */
      "meUc");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./web3 */
      "Wk4U");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! util */
      "7tlc");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);

      var WalletService = /*#__PURE__*/function (_web3Enabled__WEBPACK) {
        _inherits(WalletService, _web3Enabled__WEBPACK);

        var _super2 = _createSuper(WalletService);

        function WalletService(web3) {
          var _this20;

          _classCallCheck(this, WalletService);

          _this20 = _super2.call(this, web3);
          _this20.web3 = web3;
          _this20.connectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this20.errorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          return _this20;
        }

        _createClass(WalletService, [{
          key: "connect",
          value: function connect(onConnected, onError, isStartupMode) {
            var _this21 = this;

            var _super = Object.create(null, {
              connect: {
                get: function get() {
                  return _get(_getPrototypeOf(WalletService.prototype), "connect", _this21);
                }
              }
            });

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this22 = this;

              var _onConnected, _onError;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _onConnected = function _onConnected() {
                        _this22.connectedEvent.emit();

                        onConnected();
                      };

                      _onError = function _onError() {
                        _this22.errorEvent.emit();

                        onError();
                      };

                      _context24.next = 4;
                      return _super.connect.call(this, _onConnected, _onError, isStartupMode);

                    case 4:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "userAddress",
          get: function get() {
            return this.state.address;
          }
        }, {
          key: "connected",
          get: function get() {
            return !Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.userAddress);
          }
        }]);

        return WalletService;
      }(_web3Enabled__WEBPACK_IMPORTED_MODULE_2__["Web3Enabled"]);

      WalletService.ɵfac = function WalletService_Factory(t) {
        return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web3__WEBPACK_IMPORTED_MODULE_4__["WEB3"]));
      };

      WalletService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: WalletService,
        factory: WalletService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WalletService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: web3__WEBPACK_IMPORTED_MODULE_3___default.a,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_web3__WEBPACK_IMPORTED_MODULE_4__["WEB3"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lVFg":
    /*!*****************************************!*\
      !*** ./src/assets/abi/Multisender.json ***!
      \*****************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, default */

    /***/
    function lVFg(module) {
      module.exports = JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"erc1155Rewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"erc20Rewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"erc721Rewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ethFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeReceiver\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minXmon\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minXmonNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"erc721Addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"erc721Ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"send1155To721Ids\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"userAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"send1155ToAddresses\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"erc721Addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"receiverIds\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amountsOrIds\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"send721Or20To721Ids\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"userAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amountsOrIds\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"send721Or20ToAddresses\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"erc721Addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"erc721Ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"set1155to721Ids\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"erc721Addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"receiverIds\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"set20To721Ids\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"erc721Addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"receiverIds\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"idsToSend\",\"type\":\"uint256[]\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"set721To721Ids\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"f\",\"type\":\"uint256\"}],\"name\":\"setEthFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setFeeReceiver\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"}],\"name\":\"setMinXmon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"}],\"name\":\"setMinXmonNFT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setXmon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setXmonNFT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"erc721Address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"holderId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"rewardAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"rewardId\",\"type\":\"uint256\"}],\"name\":\"take1155Rewards\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"erc721Address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"holderId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"rewardAddress\",\"type\":\"address\"}],\"name\":\"take20Rewards\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"erc721Address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"holderId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"rewardAddress\",\"type\":\"address\"}],\"name\":\"take721Rewards\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"xmon\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"xmonNFT\",\"outputs\":[{\"internalType\":\"contract IERC721\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "oG44":
    /*!*****************************************!*\
      !*** ./src/assets/abi/MonRegistry.json ***!
      \*****************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, default */

    /***/
    function oG44(module) {
      module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"erc721Add\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenAdd\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"oldHash\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"newHash\",\"type\":\"bytes\"}],\"name\":\"hashChanged\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"fee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"isLocked\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mon\",\"outputs\":[{\"internalType\":\"contract IERC721\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"monDataWithAnimation\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"monDataWithStatic\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numTokens\",\"type\":\"uint256\"}],\"name\":\"moveTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"txHash\",\"type\":\"bytes\"},{\"internalType\":\"bool\",\"name\":\"isStatic\",\"type\":\"bool\"}],\"name\":\"registerMon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"f\",\"type\":\"uint256\"}],\"name\":\"setFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"b\",\"type\":\"bool\"}],\"name\":\"setLock\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setMon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setXmonToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"s\",\"type\":\"bytes\"}],\"name\":\"uploadMon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"xmonToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "p6oi":
    /*!**********************************************!*\
      !*** ./src/app/bundler/bundler.component.ts ***!
      \**********************************************/

    /*! exports provided: BundlerComponent */

    /***/
    function p6oi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BundlerComponent", function () {
        return BundlerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! autosize */
      "GemG");
      /* harmony import */


      var autosize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BundlerComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ERC1155 ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BundlerComponent_div_69_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.rewardToken1155Id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.rewardToken1155Id);
        }
      }

      var BundlerComponent = /*#__PURE__*/function () {
        function BundlerComponent(wallet, contract, constants, utils) {
          _classCallCheck(this, BundlerComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.resetData();
        }

        _createClass(BundlerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            // Auto-resize the textarea
            autosize__WEBPACK_IMPORTED_MODULE_3___default()(document.querySelector('textarea'));

            if (this.wallet.connected) {}

            this.wallet.connectedEvent.subscribe(function () {});
            this.wallet.errorEvent.subscribe(function () {
              _this23.resetData();
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.senderType = "address";
            this.tokenAddress = "";
            this.lockLabel = "Bundle";
            this.tokenSymbol = "";
            this.tokenLogo = "";
          }
        }, {
          key: "parseWith721Ids",
          value: function parseWith721Ids(decimals, data) {
            var splitData = data.split("\n");
            var erc721Addresses = [];
            var erc721Ids = [];
            var idsFor1155 = [];
            var amountsOrIds = [];
            var tokenAmt;

            var _iterator5 = _createForOfIteratorHelper(splitData),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var args = _step5.value;
                var parsedArgs = args.split(",").map(function (s) {
                  return s.trim();
                });
                erc721Addresses.push(parsedArgs[0]);
                erc721Ids.push(parsedArgs[1]);

                switch (parseInt(this.tokenType)) {
                  case 20:
                    tokenAmt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[2]).times(Math.pow(10, decimals)).integerValue().toFixed();
                    amountsOrIds.push(tokenAmt);
                    continue;

                  case 721:
                    amountsOrIds.push(parsedArgs[2]);
                    continue;

                  case 1155:
                    // First is ID, then amount
                    idsFor1155.push(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[2]));
                    tokenAmt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(parsedArgs[3]);
                    amountsOrIds.push(tokenAmt);
                    continue;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            if (parseInt(this.tokenType) === 1155) {
              return [erc721Addresses, erc721Ids, idsFor1155, amountsOrIds];
            } else {
              return [erc721Addresses, erc721Ids, amountsOrIds];
            }
          }
        }, {
          key: "getPlaceholder",
          value: function getPlaceholder() {
            if (this.tokenType == 1155) {
              return "Recipient ERC721 Address, Recipient Token ID, Locking Token ID, Locked Amount\
    0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 1, 10.5\
    0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 2, 0.2\
    ";
            } else if (this.tokenType == 721) {
              return "Recipient ERC721 Address, Recipient Token ID, Locking Token ID\
    0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 1\
    0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 2\
    ";
            } else if (this.tokenType == 20) {
              return "Recipient ERC721 Address, Recipient Token ID, Locked Amount\
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 10.5\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 0.2\
      ";
            }
          }
        }, {
          key: "lock",
          value: function lock(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this24 = this;

              var args, func, approveFunc, allowance, maxAllowance, numTokensToSend, _iterator6, _step6, a, isApproved, _isApproved2;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      maxAllowance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(2).pow(256).minus(1).integerValue().toFixed();
                      args = this.parseWith721Ids(18, data);

                      if (!(parseInt(this.tokenType) === 20)) {
                        _context25.next = 20;
                        break;
                      }

                      numTokensToSend = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
                      _iterator6 = _createForOfIteratorHelper(args[1]);

                      try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                          a = _step6.value;
                          numTokensToSend = numTokensToSend.plus(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(a));
                        }
                      } catch (err) {
                        _iterator6.e(err);
                      } finally {
                        _iterator6.f();
                      }

                      numTokensToSend = numTokensToSend.times(this.constants.PRECISION);
                      _context25.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context25.next = 10;
                      return this.contract.ERC20(this.tokenAddress).methods.allowance(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();

                    case 10:
                      _context25.t1 = _context25.sent;
                      allowance = new _context25.t0(_context25.t1);

                      if (!allowance.lt(numTokensToSend)) {
                        _context25.next = 17;
                        break;
                      }

                      this.lockLabel = "Approving...";
                      approveFunc = this.contract.ERC20(this.tokenAddress).methods.approve(this.constants.MULTISENDER_ADDRESS, maxAllowance);
                      _context25.next = 17;
                      return this.wallet.sendTx(approveFunc, function () {
                        _this24.lockLabel = "Bundle";
                      }, function () {}, function () {});

                    case 17:
                      func = this.contract.MULTISENDER.methods.set20To721Ids(args[0], args[1], args[2], this.tokenAddress);
                      _context25.next = 20;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 20:
                      if (!(parseInt(this.tokenType) === 721)) {
                        _context25.next = 32;
                        break;
                      }

                      _context25.next = 23;
                      return this.contract.ERC721(this.tokenAddress).methods.isApprovedForAll(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();

                    case 23:
                      isApproved = _context25.sent;

                      if (isApproved) {
                        _context25.next = 29;
                        break;
                      }

                      this.lockLabel = "Approving...";
                      approveFunc = this.contract.ERC721(this.tokenAddress).methods.setApprovalForAll(this.constants.MULTISENDER_ADDRESS, true);
                      _context25.next = 29;
                      return this.wallet.sendTx(approveFunc, function () {
                        _this24.lockLabel = "Bundle";
                      }, function () {}, function () {});

                    case 29:
                      func = this.contract.MULTISENDER.methods.set721To721Ids(args[0], args[1], args[2], this.tokenAddress);
                      _context25.next = 32;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 32:
                      if (!(parseInt(this.tokenType) === 1155)) {
                        _context25.next = 44;
                        break;
                      }

                      _context25.next = 35;
                      return this.contract.ERC1155(this.tokenAddress).methods.isApprovedForAll(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();

                    case 35:
                      _isApproved2 = _context25.sent;

                      if (_isApproved2) {
                        _context25.next = 41;
                        break;
                      }

                      this.lockLabel = "Approving...";
                      approveFunc = this.contract.ERC1155(this.tokenAddress).methods.setApprovalForAll(this.constants.MULTISENDER_ADDRESS, true);
                      _context25.next = 41;
                      return this.wallet.sendTx(approveFunc, function () {
                        _this24.lockLabel = "Bundle";
                      }, function () {}, function () {});

                    case 41:
                      func = this.contract.MULTISENDER.methods.set1155to721Ids(args[0], args[1], args[2], args[3], this.tokenAddress);
                      _context25.next = 44;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 44:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "unlockRewards",
          value: function unlockRewards() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var func;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.t0 = parseInt(this.rewardTokenType);
                      _context26.next = _context26.t0 === 20 ? 3 : _context26.t0 === 721 ? 7 : _context26.t0 === 1155 ? 11 : 15;
                      break;

                    case 3:
                      func = this.contract.MULTISENDER.methods.take20Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress);
                      _context26.next = 6;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 6:
                      return _context26.abrupt("break", 15);

                    case 7:
                      func = this.contract.MULTISENDER.methods.take721Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress);
                      _context26.next = 10;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 10:
                      return _context26.abrupt("break", 15);

                    case 11:
                      func = this.contract.MULTISENDER.methods.take1155Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress, this.rewardToken1155Id);
                      _context26.next = 14;
                      return this.wallet.sendTx(func, function () {}, function () {}, function () {});

                    case 14:
                      return _context26.abrupt("break", 15);

                    case 15:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "getRewards",
          value: function getRewards() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var token, tokenSymbol, tokenAmt, id1, amt;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      token = this.contract.ERC20(this.rewardTokenAddress);
                      _context27.next = 3;
                      return token.methods.symbol().call();

                    case 3:
                      tokenSymbol = _context27.sent;
                      _context27.t0 = parseInt(this.rewardTokenType);
                      _context27.next = _context27.t0 === 20 ? 7 : _context27.t0 === 721 ? 14 : _context27.t0 === 1155 ? 19 : 24;
                      break;

                    case 7:
                      _context27.t1 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context27.next = 10;
                      return this.contract.MULTISENDER.methods.erc20Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress).call();

                    case 10:
                      _context27.t2 = _context27.sent;
                      tokenAmt = new _context27.t1(_context27.t2).div(this.constants.PRECISION);
                      this.rewardValues = tokenAmt + " " + tokenSymbol;
                      return _context27.abrupt("break", 24);

                    case 14:
                      _context27.next = 16;
                      return this.contract.MULTISENDER.methods.erc721Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress, 0).call();

                    case 16:
                      id1 = _context27.sent;
                      this.rewardValues = id1 + "..." + tokenSymbol;
                      return _context27.abrupt("break", 24);

                    case 19:
                      _context27.next = 21;
                      return this.contract.MULTISENDER.methods.erc1155Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress, this.rewardToken1155Id).call();

                    case 21:
                      amt = _context27.sent;
                      this.rewardValues = amt + " " + tokenSymbol;
                      return _context27.abrupt("break", 24);

                    case 24:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var tokenList, _iterator7, _step7, t, token;

              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      tokenList = __webpack_require__(
                      /*! ../../assets/tokens.json */
                      "y1uA");
                      tokenList = tokenList["tokens"];
                      _iterator7 = _createForOfIteratorHelper(tokenList);
                      _context28.prev = 3;

                      _iterator7.s();

                    case 5:
                      if ((_step7 = _iterator7.n()).done) {
                        _context28.next = 13;
                        break;
                      }

                      t = _step7.value;

                      if (!(t["address"].toLowerCase() == this.tokenAddress.toLowerCase())) {
                        _context28.next = 11;
                        break;
                      }

                      this.tokenSymbol = t["symbol"];
                      this.tokenLogo = t["logoURI"];
                      return _context28.abrupt("return");

                    case 11:
                      _context28.next = 5;
                      break;

                    case 13:
                      _context28.next = 18;
                      break;

                    case 15:
                      _context28.prev = 15;
                      _context28.t0 = _context28["catch"](3);

                      _iterator7.e(_context28.t0);

                    case 18:
                      _context28.prev = 18;

                      _iterator7.f();

                      return _context28.finish(18);

                    case 21:
                      token = this.contract.ERC20(this.tokenAddress);
                      _context28.next = 24;
                      return token.methods.symbol().call();

                    case 24:
                      this.tokenSymbol = _context28.sent;

                    case 25:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this, [[3, 15, 18, 21]]);
            }));
          }
        }]);

        return BundlerComponent;
      }();

      BundlerComponent.ɵfac = function BundlerComponent_Factory(t) {
        return new (t || BundlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_5__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]));
      };

      BundlerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BundlerComponent,
        selectors: [["app-bundler"]],
        decls: 79,
        vars: 12,
        consts: [[1, "container"], [1, "header", "cursed-text"], [1, "text-item"], ["href", "https://blog.0xmons.xyz/79122166310"], ["href", "https://etherscan.io/address/0xc653e1b3a971078812a72d11c45ad71e00f3ad1f"], [1, "send-title"], [1, "erc-picker"], [3, "ngModel", "ngModelChange"], ["value", "20"], ["value", "721"], ["value", "1155"], [1, "input-form"], [1, "to-title"], ["type", "text", "placeholder", "0x3aada3e213abf8529606924d8d1c55cbdc70bf74", 3, "ngModel", "ngModelChange"], [1, "token"], [1, "token-logo", 3, "src"], [1, "check-btn", 3, "click"], [3, "placeholder"], ["senderData", ""], [1, "lock-btn", 3, "click"], [1, "send-title", "unlock-header"], [1, "text-item", "to-title"], ["type", "text", "placeholder", "12", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "reward"], ["type", "text", "placeholder", "15", 3, "ngModel", "ngModelChange"]],
        template: function BundlerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bundler");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Lock ERC20, ERC721, or ERC1155 tokens into ERC721 tokens.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Read the blog post ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " to learn more about how to bundle your assets.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Contract on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Etherscan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Bundle Tokens");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BundlerComponent_Template_select_ngModelChange_19_listener($event) {
              return ctx.tokenType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "ERC20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "ERC721");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "ERC1155");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Token Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "(Decimals are assumed to be 18 for ERC20.)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BundlerComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.tokenAddress = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BundlerComponent_Template_button_click_36_listener() {
              return ctx.getToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Check Symbol");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Locking Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "textarea", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BundlerComponent_Template_button_click_44_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);

              return ctx.lock(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Unlock Tokens");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "ERC721 Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "(This is the address of the NFT that holds the locked tokens.)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BundlerComponent_Template_input_ngModelChange_53_listener($event) {
              return ctx.erc721Address = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BundlerComponent_Template_input_ngModelChange_56_listener($event) {
              return ctx.erc721Id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Reward Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BundlerComponent_Template_select_ngModelChange_61_listener($event) {
              return ctx.rewardTokenType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "ERC20");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "ERC721");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "ERC1155");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BundlerComponent_Template_input_ngModelChange_68_listener($event) {
              return ctx.rewardTokenAddress = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, BundlerComponent_div_69_Template, 4, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BundlerComponent_Template_button_click_73_listener() {
              return ctx.getRewards();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Check Rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BundlerComponent_Template_button_click_77_listener() {
              return ctx.unlockRewards();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Unlock Rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tokenType);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tokenAddress);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.tokenLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.tokenSymbol, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.getPlaceholder());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.lockLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.erc721Address);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.erc721Id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rewardTokenType);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rewardTokenAddress);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rewardTokenType === "1155");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.rewardValues);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
        styles: [".header[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n\n.text-item[_ngcontent-%COMP%] {\n  line-height: 2rem;\n}\n\n.send-title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.send-title[_ngcontent-%COMP%], .to-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n  font-weight: bold;\n}\n\n.unlock-header[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n}\n\nselect[_ngcontent-%COMP%] {\n  border: 2px solid var(--gray);\n  background-color: var(--black);\n  color: var(--light-gray);\n  font-size: 1.3rem;\n  width: 80%;\n  max-width: 15rem;\n  padding: 0.1rem 0.1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  background-color : var(--black) !important; \n  color: white !important;\n  outline: none;\n  border: 2px solid var(--gray);\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 50rem;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 10rem;\n  width: 100%;\n}\n\n.input-form[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.token[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.token-logo[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: auto;\n}\n\n.lock-btn[_ngcontent-%COMP%], .check-btn[_ngcontent-%COMP%] {\n  font-family: 'Courier New', Courier, monospace;\n}\n\n.lock-btn[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n\n.reward[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: white;\n  margin: 0.5rem 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVuZGxlci9idW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2J1bmRsZXIvYnVuZGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLnRleHQtaXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4uc2VuZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5zZW5kLXRpdGxlLCAudG8tdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51bmxvY2staGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgcGFkZGluZzogMC4xcmVtIDAuMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvciA6IHZhcigtLWJsYWNrKSAhaW1wb3J0YW50OyBcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXkpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMTByZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi50b2tlbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50b2tlbi1sb2dvIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmxvY2stYnRuLCAuY2hlY2stYnRuIHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmxvY2stYnRuIHtcbiAgY29sb3I6IHZhcigtLW1lZC1ncmVlbik7XG59XG5cbi5yZXdhcmQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BundlerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-bundler',
            templateUrl: './bundler.component.html',
            styleUrls: ['./bundler.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_5__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qVjW":
    /*!*************************************!*\
      !*** ./src/assets/abi/Claimer.json ***!
      \*************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */

    /***/
    function qVjW(module) {
      module.exports = JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"claim\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"gem\",\"outputs\":[{\"internalType\":\"contract IERC721Enumerable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"gemClaimed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mon\",\"outputs\":[{\"internalType\":\"contract IERC721Enumerable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"monClaimed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numTokens\",\"type\":\"uint256\"}],\"name\":\"moveTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"xmon\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]");
      /***/
    },

    /***/
    "sbAl":
    /*!******************************************!*\
      !*** ./src/app/spawn/spawn.component.ts ***!
      \******************************************/

    /*! exports provided: SpawnComponent */

    /***/
    function sbAl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpawnComponent", function () {
        return SpawnComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function SpawnComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SpawnComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Approx: ", ctx_r1.spawnDelayTime(ctx_r1.monLeft), " left");
        }
      }

      function SpawnComponent_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var n_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", n_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", n_r6.name, " ");
        }
      }

      function SpawnComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SpawnComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Approx: ", ctx_r4.spawnDelayTime(ctx_r4.monRight), " left");
        }
      }

      function SpawnComponent_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var n_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", n_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", n_r7.name, " ");
        }
      }

      var SpawnComponent = /*#__PURE__*/function () {
        function SpawnComponent(wallet, contract, constants, utils) {
          _classCallCheck(this, SpawnComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.resetData();
        }

        _createClass(SpawnComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            if (this.wallet.connected) {
              this.loadData();
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this25.loadData();
            });
            this.wallet.errorEvent.subscribe(function () {
              _this25.resetData();
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.blockNumber = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.monLeft = "";
            this.monRight = "";
            this.monList = [];
            this.monLookup = {};
            this.spawnFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.xmonBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.numMons = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            this.maxMons = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var multicallFns, multicallKeys, multicallValues, rawResult, multicallResults, monIdList, newCall, _iterator8, _step8, i, response, responseObj, _iterator9, _step9, _i, obj;

              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      multicallFns = {
                        "monIds": {
                          target: this.constants.NFT_AGGREGATOR_ADDRESS,
                          callData: this.contract.NFT_AGG.methods.getIds(this.constants.MON_MINTER_ADDRESS, this.wallet.userAddress).encodeABI()
                        },
                        "spawnFee": {
                          target: this.constants.MON_SPAWNER_ADDRESS,
                          callData: this.contract.MON_SPAWNER.methods.spawnFee.call().encodeABI()
                        },
                        "xmonBalance": {
                          target: this.constants.XMON_ADDRESS,
                          callData: this.contract.XMON.methods.balanceOf(this.wallet.userAddress).encodeABI()
                        },
                        "numMons": {
                          target: this.constants.MON_SPAWNER_ADDRESS,
                          callData: this.contract.MON_SPAWNER.methods.numMons.call().encodeABI()
                        },
                        "maxMons": {
                          target: this.constants.MON_SPAWNER_ADDRESS,
                          callData: this.contract.MON_SPAWNER.methods.maxMons.call().encodeABI()
                        }
                      };
                      multicallKeys = Object.keys(multicallFns);
                      multicallValues = Object.values(multicallFns);
                      _context29.next = 5;
                      return this.contract.MULTICALL.methods.aggregate(multicallValues).call();

                    case 5:
                      rawResult = _context29.sent;
                      this.blockNumber = rawResult["blockNumber"];
                      multicallResults = this.utils.zipObject(multicallKeys, rawResult["returnData"]);
                      this.spawnFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["spawnFee"])).div(this.constants.PRECISION);
                      this.xmonBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["xmonBalance"])).div(this.constants.PRECISION);
                      this.numMons = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["numMons"]));
                      this.maxMons = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["maxMons"])); // Get unlock blocks in second multicall

                      monIdList = this.wallet.web3.eth.abi.decodeParameter('uint256[]', multicallResults["monIds"]);
                      newCall = {};
                      _iterator8 = _createForOfIteratorHelper(monIdList);

                      try {
                        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                          i = _step8.value;
                          newCall[i.toString()] = {
                            target: this.constants.MON_SPAWNER_ADDRESS,
                            callData: this.contract.MON_SPAWNER.methods.monUnlock(i).encodeABI()
                          };
                        }
                      } catch (err) {
                        _iterator8.e(err);
                      } finally {
                        _iterator8.f();
                      }

                      multicallKeys = Object.keys(newCall);
                      multicallValues = Object.values(newCall);
                      _context29.next = 20;
                      return this.contract.MULTICALL.methods.aggregate(multicallValues).call();

                    case 20:
                      rawResult = _context29.sent;
                      multicallResults = this.utils.zipObject(multicallKeys, rawResult["returnData"]);
                      _context29.next = 24;
                      return fetch("./assets/monData.json");

                    case 24:
                      response = _context29.sent;
                      _context29.next = 27;
                      return response.json();

                    case 27:
                      responseObj = _context29.sent;
                      _iterator9 = _createForOfIteratorHelper(monIdList);

                      try {
                        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                          _i = _step9.value;
                          obj = {};
                          obj["id"] = _i;
                          obj["name"] = responseObj["1"]["name"] + _i;
                          obj["img"] = responseObj["1"]["img"];
                          obj["unlockBlock"] = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults[_i]));
                          this.monList.push(obj);
                          this.monLookup[_i] = obj;
                        }
                      } catch (err) {
                        _iterator9.e(err);
                      } finally {
                        _iterator9.f();
                      }

                    case 30:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "spawnNewMon",
          value: function spawnNewMon() {
            var _this26 = this;

            if (this.monLeft === this.monRight) {
              alert("You can't merge two of the same monster!");
              return;
            }

            if (this.getUnlockBlock(this.monLeft).gt(this.blockNumber)) {
              alert(this.getName(this.monLeft) + " is not yet ready for spawning!");
              return;
            }

            if (this.getUnlockBlock(this.monRight).gt(this.blockNumber)) {
              alert(this.getName(this.monRight) + " is not yet ready for spawning!");
              return;
            } else {
              var func = this.contract.MON_SPAWNER.methods.spawnNewMon(this.monLeft, this.monRight);
              this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.MON_SPAWNER_ADDRESS, this.spawnFee, 550000, function () {}, function () {
                _this26.loadData();
              }, function () {
                alert("Error: Likely because you already spawned with " + _this26.getName(_this26.monLeft) + " and " + _this26.getName(_this26.monRight));
              });
            }
          }
        }, {
          key: "getName",
          value: function getName(id) {
            if (id === "") {
              return "";
            }

            return this.monLookup[id]["name"];
          }
        }, {
          key: "getImg",
          value: function getImg(id) {
            if (id === "") {
              return "./assets/placeholder.png";
            }

            return this.monLookup[id]["img"];
          }
        }, {
          key: "getUnlockBlock",
          value: function getUnlockBlock(id) {
            if (id === "") {
              return new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
            }

            return this.monLookup[id]["unlockBlock"];
          }
        }, {
          key: "spawnAvailable",
          value: function spawnAvailable(id) {
            return this.getUnlockBlock(id).lt(this.blockNumber);
          }
        }, {
          key: "spawnDelayTime",
          value: function spawnDelayTime(id) {
            // Number of blocks left times 13 seconds per block
            var numSecondsLeft = this.getUnlockBlock(id).minus(this.blockNumber).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(13));
            return this.utils.secondsToHms(numSecondsLeft);
          }
        }]);

        return SpawnComponent;
      }();

      SpawnComponent.ɵfac = function SpawnComponent_Factory(t) {
        return new (t || SpawnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]));
      };

      SpawnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SpawnComponent,
        selectors: [["app-merge"]],
        decls: 72,
        vars: 25,
        consts: [[1, "container"], [1, "centered"], [1, "header"], [1, "cursed-text"], [1, "card"], [1, "two-cols"], [1, "card-title", "mon-1"], [1, "mon-name"], [1, "mon-img", 3, "src"], [4, "ngIf"], [1, "mon-select", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-title", "mon-2"], [1, "xmon-ticker"], [1, "spawn-button", 3, "click"], [3, "value"]],
        template: function SpawnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BEGET");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " new beings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "You can pair two 0xmons to spawn a new 0xmon. After spawning, you will need to wait a while before the parents can spawn again. Note that a 0xmon cannot spawn with itself, and you can only spawn each combination once. Later generations have longer wait times between spawns.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Current block: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Monster 1: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Available to spawn at block: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SpawnComponent_div_31_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SpawnComponent_div_32_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpawnComponent_Template_select_ngModelChange_33_listener($event) {
              return ctx.monLeft = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Select monster");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SpawnComponent_option_36_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Monster 2: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Available to spawn at block: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, SpawnComponent_div_48_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, SpawnComponent_div_49_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpawnComponent_Template_select_ngModelChange_50_listener($event) {
              return ctx.monRight = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Select monster");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, SpawnComponent_option_53_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Spawn fee: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Balance: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "XMON");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpawnComponent_Template_button_click_70_listener() {
              return ctx.spawnNewMon();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Spawn");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.blockNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.numMons, "/", ctx.maxMons, " 0xmons spawned");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getName(ctx.monLeft));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getImg(ctx.monLeft), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("unlock", ctx.spawnAvailable(ctx.monLeft), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getUnlockBlock(ctx.monLeft));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spawnAvailable(ctx.monLeft));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.spawnAvailable(ctx.monLeft));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.monLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.monList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getName(ctx.monRight));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getImg(ctx.monRight), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("unlock", ctx.spawnAvailable(ctx.monRight), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getUnlockBlock(ctx.monRight));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spawnAvailable(ctx.monRight));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.spawnAvailable(ctx.monRight));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.monRight);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.monList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.spawnFee);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.xmonBalance);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: [".mon-select[_ngcontent-%COMP%] {\n  border: 2px solid var(--gray);\n  background-color: var(--black);\n  color: var(--light-gray);\n  font-size: 1.3rem;\n  width: 80%;\n  max-width: 15rem;\n  padding: 0.1rem 0.1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mon-1[_ngcontent-%COMP%], .mon-2[_ngcontent-%COMP%] {\n  color: var(--light-gray);\n}\n.mon-name[_ngcontent-%COMP%] {\n  color: white;\n}\n.mon-img[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  border: solid 2px var(--light-gray);\n}\n.unlocktrue[_ngcontent-%COMP%] {\n  color: var(--med-green);\n}\n.unlockfalse[_ngcontent-%COMP%] {\n  color: var(--dark-pink);\n}\n.xmon-ticker[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-weight: bold;\n  color: var(--med-green);\n}\n.spawn-button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.spawn-button[_ngcontent-%COMP%]:hover {\n  -webkit-animation: colorFlash 2s linear infinite;\n          animation: colorFlash 2s linear infinite;\n}\nimg[_ngcontent-%COMP%] {\n  margin: 1rem 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bhd24vc3Bhd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdEQUF3QztVQUF4Qyx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NwYXduL3NwYXduLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogMTVyZW07XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubW9uLTEsIC5tb24tMiB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcbn1cbi5tb24tbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb24taW1nIHtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1saWdodC1ncmF5KTtcbn1cblxuLnVubG9ja3RydWUge1xuICBjb2xvcjogdmFyKC0tbWVkLWdyZWVuKTtcbn1cblxuLnVubG9ja2ZhbHNlIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcGluayk7XG59XG5cbi54bW9uLXRpY2tlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tbWVkLWdyZWVuKTtcbn1cblxuLnNwYXduLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uc3Bhd24tYnV0dG9uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBjb2xvckZsYXNoIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiAxcmVtIDFyZW07XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpawnComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-merge',
            templateUrl: './spawn.component.html',
            styleUrls: ['./spawn.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tTNn":
    /*!***********************************!*\
      !*** ./src/assets/abi/ERC20.json ***!
      \***********************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */

    /***/
    function tTNn(module) {
      module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]");
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _claim_claim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./claim/claim.component */
      "6D4n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _spawn_spawn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./spawn/spawn.component */
      "sbAl");
      /* harmony import */


      var _summon_summon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./summon/summon.component */
      "3jk2");
      /* harmony import */


      var _collection_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collection/collection.component */
      "NNjt");
      /* harmony import */


      var _monster_monster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./monster/monster.component */
      "PgRK");
      /* harmony import */


      var _farm_farm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./farm/farm.component */
      "cJ//");
      /* harmony import */


      var _credits_credits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./credits/credits.component */
      "SCN6");
      /* harmony import */


      var _sender_sender_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./sender/sender.component */
      "znQw");
      /* harmony import */


      var _founder_founder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./founder/founder.component */
      "ZWPW");
      /* harmony import */


      var _on_chain_on_chain_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./on-chain/on-chain.component */
      "fykK");
      /* harmony import */


      var _multisender_multisender_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./multisender/multisender.component */
      "6Bc2");
      /* harmony import */


      var _bundler_bundler_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./bundler/bundler.component */
      "p6oi");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full'
      }, {
        path: 'mon/:id',
        component: _monster_monster_component__WEBPACK_IMPORTED_MODULE_7__["MonsterComponent"]
      }, {
        path: 'on-chain/:txHash',
        component: _on_chain_on_chain_component__WEBPACK_IMPORTED_MODULE_12__["OnChainComponent"]
      }, {
        path: 'farm',
        component: _farm_farm_component__WEBPACK_IMPORTED_MODULE_8__["FarmComponent"]
      }, {
        path: 'summon',
        component: _summon_summon_component__WEBPACK_IMPORTED_MODULE_5__["SummonComponent"],
        pathMatch: 'full'
      }, {
        path: 'spawn',
        component: _spawn_spawn_component__WEBPACK_IMPORTED_MODULE_4__["SpawnComponent"],
        pathMatch: 'full'
      }, {
        path: 'claim',
        component: _claim_claim_component__WEBPACK_IMPORTED_MODULE_2__["ClaimComponent"],
        pathMatch: 'full'
      }, {
        path: 'collection',
        component: _collection_collection_component__WEBPACK_IMPORTED_MODULE_6__["CollectionComponent"],
        pathMatch: 'full'
      }, {
        path: 'credits',
        component: _credits_credits_component__WEBPACK_IMPORTED_MODULE_9__["CreditsComponent"],
        pathMatch: 'full'
      }, {
        path: 'multisender',
        component: _multisender_multisender_component__WEBPACK_IMPORTED_MODULE_13__["MultisenderComponent"]
      }, {
        path: 'sender',
        component: _sender_sender_component__WEBPACK_IMPORTED_MODULE_10__["SenderComponent"]
      }, {
        path: 'bundler',
        component: _bundler_bundler_component__WEBPACK_IMPORTED_MODULE_14__["BundlerComponent"]
      }, {
        path: 'founder',
        component: _founder_founder_component__WEBPACK_IMPORTED_MODULE_11__["FounderComponent"]
      }, // wildcard
      {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "y1uA":
    /*!********************************!*\
      !*** ./src/assets/tokens.json ***!
      \********************************/

    /*! exports provided: keywords, logoURI, name, timestamp, tokens, version, default */

    /***/
    function y1uA(module) {
      module.exports = JSON.parse("{\"keywords\":[\"zapper\",\"defi\"],\"logoURI\":\"https://zapper.fi/logo192.png\",\"name\":\"Zapper Token List\",\"timestamp\":\"2021-02-03T20:29:07.322Z\",\"tokens\":[{\"address\":\"0x111111111117dc0aa78b770fa6a738034120c302\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/1INCH-icon.png\",\"name\":\"1INCH Token\",\"symbol\":\"1INCH\"},{\"address\":\"0x6c3f90f043a72fa612cbac8115ee7e52bde6e490\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/3PoolCurve-icon.png\",\"name\":\"3Pool Curve\",\"symbol\":\"3PoolCurve\"},{\"address\":\"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/AAVE-icon.png\",\"name\":\"Aave\",\"symbol\":\"AAVE\"},{\"address\":\"0x94d863173ee77439e4292284ff13fad54b3ba182\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ADEL-icon.png\",\"name\":\"Akropolis Delphi\",\"symbol\":\"ADEL\"},{\"address\":\"0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/AKRO-icon.png\",\"name\":\"Akropolis\",\"symbol\":\"AKRO\"},{\"address\":\"0x00a8b738e453ffd858a7edf03bccfe20412f0eb0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ALBT-icon.png\",\"name\":\"AllianceBlock\",\"symbol\":\"ALBT\"},{\"address\":\"0x27702a26126e0b3702af63ee09ac4d1a084ef628\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ALEPH-icon.png\",\"name\":\"Aleph.im\",\"symbol\":\"ALEPH\"},{\"address\":\"0x8ba6dcc667d3ff64c1a2123ce72ff5f0199e5315\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ALEX-icon.png\",\"name\":\"Alex\",\"symbol\":\"ALEX\"},{\"address\":\"0xa1faa113cbe53436df28ff0aee54275c13b40975\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ALPHA-icon.png\",\"name\":\"AlphaToken\",\"symbol\":\"ALPHA\"},{\"address\":\"0xff20817765cb7f73d4bde2e66e067e58d11095c2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/AMP-icon.png\",\"name\":\"Amp\",\"symbol\":\"AMP\"},{\"address\":\"0xd46ba6d942050d489dbd938a2c909a5d5039a161\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/AMPL-icon.png\",\"name\":\"Ampleforth\",\"symbol\":\"AMPL\"},{\"address\":\"0xcd62b1c403fa761baadfc74c525ce2b51780b184\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ANJ-icon.png\",\"name\":\"Aragon Court\",\"symbol\":\"ANJ\"},{\"address\":\"0x8290333cef9e6d528dd5618fb97a76f268f3edd4\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ANKR-icon.png\",\"name\":\"Ankr\",\"symbol\":\"ANKR\"},{\"address\":\"0xa117000000f279d81a1d3cc75430faa017fa5a2e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ANT-icon.png\",\"name\":\"Aragon\",\"symbol\":\"ANT\"},{\"address\":\"0x0b38210ea11411557c13457d4da7dc6ea731b88a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/API3-icon.png\",\"name\":\"API3\",\"symbol\":\"API3\"},{\"address\":\"0x95a4492f028aa1fd432ea71146b433e7b4446611\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/APY-icon.png\",\"name\":\"APY Governance Token\",\"symbol\":\"APY\"},{\"address\":\"0x1f3f9d3068568f8040775be2e8c03c103c61f3af\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ARCH-icon.png\",\"name\":\"Archer DAO Governance Token\",\"symbol\":\"ARCH\"},{\"address\":\"0x1337def16f9b486faed0293eb623dc8395dfe46a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ARMOR-icon.png\",\"name\":\"Armor\",\"symbol\":\"ARMOR\"},{\"address\":\"0xfa2562da1bba7b954f26c74725df51fb62646313\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ASSY-icon.png\",\"name\":\"ASSY Index\",\"symbol\":\"ASSY\"},{\"address\":\"0x27054b13b1b798b345b591a4d22e6562d47ea75a\",\"chainId\":1,\"decimals\":4,\"logoURI\":\"https://zapper.fi/images/AST-icon.png\",\"name\":\"AirSwap\",\"symbol\":\"AST\"},{\"address\":\"0x18aaa7115705e8be94bffebde57af9bfc265b998\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/AUDIO-icon.png\",\"name\":\"Audius\",\"symbol\":\"AUDIO\"},{\"address\":\"0xf5d669627376ebd411e34b98f19c868c8aba5ada\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/AXS-icon.png\",\"name\":\"Axie Infinity Shard\",\"symbol\":\"AXS\"},{\"address\":\"0xc36824905dff2eaaee7ecc09fcc63abc0af5abc5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BAB-icon.png\",\"name\":\"BAB\",\"symbol\":\"BAB\"},{\"address\":\"0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BAC-icon.png\",\"name\":\"BAC\",\"symbol\":\"BAC\"},{\"address\":\"0x3472a5a71965499acd81997a54bba8d852c6e53d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BADGER-icon.png\",\"name\":\"Badger\",\"symbol\":\"BADGER\"},{\"address\":\"0xba100000625a3754423978a60c9317c58a424e3d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BAL-icon.png\",\"name\":\"Balancer\",\"symbol\":\"BAL\"},{\"address\":\"0xba11d00c5f74255f56a5e366f4f77f5a186d7f55\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BAND-icon.png\",\"name\":\"Band Protocol\",\"symbol\":\"BAND\"},{\"address\":\"0x374cb8c27130e2c9e04f44303f3c8351b9de61c1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BAO-icon.png\",\"name\":\"BaoToken\",\"symbol\":\"BAO\"},{\"address\":\"0xa7ed29b253d8b4e3109ce07c80fc570f81b63696\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BAS-icon.png\",\"name\":\"BAS\",\"symbol\":\"BAS\"},{\"address\":\"0x07150e919b4de5fd6a63de1f9384828396f25fdc\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/BASE-icon.png\",\"name\":\"Base Protocol\",\"symbol\":\"BASE\"},{\"address\":\"0x68a118ef45063051eac49c7e647ce5ace48a68a5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BASED-icon.png\",\"name\":\"Based Money\",\"symbol\":\"BASED\"},{\"address\":\"0x0d8775f648430679a709e98d2b0cb6250d2887ef\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BAT-icon.png\",\"name\":\"Basic Attention Token\",\"symbol\":\"BAT\"},{\"address\":\"0x9be89d2a4cd102d8fecc6bf9da793be995c22541\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/BBTC-icon.png\",\"name\":\"Binance Wrapped BTC\",\"symbol\":\"BBTC\"},{\"address\":\"0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BCDT-icon.png\",\"name\":\"BCdiploma-EvidenZ\",\"symbol\":\"BCDT\"},{\"address\":\"0xe4f726adc8e89c6a6017f01eada77865db22da14\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BCP-icon.png\",\"name\":\"PieDAO Balanced Crypto Pie\",\"symbol\":\"BCP\"},{\"address\":\"0x25e1474170c4c0aa64fa98123bdc8db49d7802fa\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BID-icon.png\",\"name\":\"Bidao\",\"symbol\":\"BID\"},{\"address\":\"0x70401dfd142a16dc7031c56e862fc88cb9537ce0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BIRD-icon.png\",\"name\":\"Bird.Money\",\"symbol\":\"BIRD\"},{\"address\":\"0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BNT-icon.png\",\"name\":\"Bancor Network Token\",\"symbol\":\"BNT\"},{\"address\":\"0x0391d2021f89dc339f60fff84546ea23e337750f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BOND-icon.png\",\"name\":\"BarnBridge\",\"symbol\":\"BOND\"},{\"address\":\"0xd2dda223b2617cb616c1580db421e4cfae6a8a85\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BONDLY-icon.png\",\"name\":\"Bondly Token\",\"symbol\":\"BONDLY\"},{\"address\":\"0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BOR-icon.png\",\"name\":\"BoringDAO\",\"symbol\":\"BOR\"},{\"address\":\"0x5beabaebb3146685dd74176f68a0721f91297d37\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BOT-icon.png\",\"name\":\"Bounce Token\",\"symbol\":\"BOT\"},{\"address\":\"0x003e0af2916e598fa5ea5cb2da4edfda9aed9fde\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BSD-icon.png\",\"name\":\"Basis Dollar\",\"symbol\":\"BSD\"},{\"address\":\"0xe7c9c188138f7d70945d420d75f8ca7d8ab9c700\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BSDS-icon.png\",\"name\":\"Basis Dollar Share\",\"symbol\":\"BSDS\"},{\"address\":\"0xb34ab2f65c6e4f764ffe740ab83f982021faed6d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BSG-icon.png\",\"name\":\"BSG\",\"symbol\":\"BSG\"},{\"address\":\"0xa9d232cc381715ae791417b624d7c4509d2c28db\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BSGS-icon.png\",\"name\":\"BSGS\",\"symbol\":\"BSGS\"},{\"address\":\"0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BTC++-icon.png\",\"name\":\"PieDAO BTC++\",\"symbol\":\"BTC++\"},{\"address\":\"0x7b123f53421b1bf8533339bfbdc7c98aa94163db\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BUIDL-icon.png\",\"name\":\"dfohub\",\"symbol\":\"BUIDL\"},{\"address\":\"0x6e36556b3ee5aa28def2a8ec3dae30ec2b208739\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BUILD-icon.png\",\"name\":\"BUILD Finance\",\"symbol\":\"BUILD\"},{\"address\":\"0x4fabb145d64652a948d72533023f6e7a623c7c53\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BUSD-icon.png\",\"name\":\"Binance USD\",\"symbol\":\"BUSD\"},{\"address\":\"0x3b3ac5386837dc563660fb6a0937dfaa5924333b\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BUSDCurve-icon.png\",\"name\":\"LP-bCurve\",\"symbol\":\"BUSDCurve\"},{\"address\":\"0x56d811088235f11c8920698a204a5010a788f4b3\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/BZRX-icon.png\",\"name\":\"bZx Protocol\",\"symbol\":\"BZRX\"},{\"address\":\"0x26e75307fc0c021472feb8f727839531f112f317\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/C20-icon.png\",\"name\":\"CRYPTO20\",\"symbol\":\"C20\"},{\"address\":\"0x43044f861ec040db59a7e324c40507addb673142\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CAP-icon.png\",\"name\":\"Cap\",\"symbol\":\"CAP\"},{\"address\":\"0x17ac188e09a7890a1844e5e65471fe8b0ccfadf3\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CC10-icon.png\",\"name\":\"Cryptocurrency Top 10 Tokens Index\",\"symbol\":\"CC10\"},{\"address\":\"0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d\",\"chainId\":1,\"decimals\":4,\"logoURI\":\"https://zapper.fi/images/CEL-icon.png\",\"name\":\"Celsius Network\",\"symbol\":\"CEL\"},{\"address\":\"0x4f9254c83eb525f9fcf346490bbb3ed28a81c667\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CELR-icon.png\",\"name\":\"Celer Network\",\"symbol\":\"CELR\"},{\"address\":\"0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CFi-icon.png\",\"name\":\"CyberFi Token\",\"symbol\":\"CFi\"},{\"address\":\"0x0000000000004946c0e9f43f4dee607b0ef1fa1c\",\"chainId\":1,\"decimals\":0,\"logoURI\":\"https://zapper.fi/images/CHI-icon.png\",\"name\":\"Chi Gastoken\",\"symbol\":\"CHI\"},{\"address\":\"0xba9d4199fab4f26efe3551d490e3821486f135ba\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/CHSB-icon.png\",\"name\":\"SwissBorg\",\"symbol\":\"CHSB\"},{\"address\":\"0x87b008e57f640d94ee44fd893f0323af933f9195\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/COIN-icon.png\",\"name\":\"Coin Artist\",\"symbol\":\"COIN\"},{\"address\":\"0xffffffff2ba8f66d4e51811c5190992176930278\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/COMBO-icon.png\",\"name\":\"Furucombo\",\"symbol\":\"COMBO\"},{\"address\":\"0xc00e94cb662c3520282e6f5717214004a7f26888\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/COMP-icon.png\",\"name\":\"Compound\",\"symbol\":\"COMP\"},{\"address\":\"0x62359ed7505efc61ff1d56fef82158ccaffa23d7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CORE-icon.png\",\"name\":\"cVault.finance\",\"symbol\":\"CORE\"},{\"address\":\"0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/COVER-icon.png\",\"name\":\"Cover Protocol Governance Token\",\"symbol\":\"COVER\"},{\"address\":\"0x5d8d9f5b96f4438195be9b99eee6118ed4304286\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/COVER[old]-icon.png\",\"name\":\"Cover Protocol old\",\"symbol\":\"COVER[old]\"},{\"address\":\"0x2ba592f78db6436527729929aaf6c908497cb200\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CREAM-icon.png\",\"name\":\"Cream\",\"symbol\":\"CREAM\"},{\"address\":\"0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CRETH2-icon.png\",\"name\":\"Cream ETH 2\",\"symbol\":\"CRETH2\"},{\"address\":\"0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/CRO-icon.png\",\"name\":\"Crypto.com Coin\",\"symbol\":\"CRO\"},{\"address\":\"0xd533a949740bb3306d119cc777fa900ba034cd52\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CRV-icon.png\",\"name\":\"Curve DAO Token\",\"symbol\":\"CRV\"},{\"address\":\"0x41e5560054824ea6b0732e656e3ad64e20e94e45\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/CVC-icon.png\",\"name\":\"Civic\",\"symbol\":\"CVC\"},{\"address\":\"0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CVP-icon.png\",\"name\":\"CVP\",\"symbol\":\"CVP\"},{\"address\":\"0x845838df265dcd2c412a1dc9e959c7d08537f8a2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/CompoundCurve-icon.png\",\"name\":\"LP-cCurve\",\"symbol\":\"CompoundCurve\"},{\"address\":\"0x6b175474e89094c44da98b954eedeac495271d0f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DAI-icon.png\",\"name\":\"Dai\",\"symbol\":\"DAI\"},{\"address\":\"0xd82bb924a1707950903e2c0a619824024e254cd1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DAOfi-icon.png\",\"name\":\"DAOfi\",\"symbol\":\"DAOfi\"},{\"address\":\"0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DDIM-icon.png\",\"name\":\"DuckDaoDime\",\"symbol\":\"DDIM\"},{\"address\":\"0x3a880652f47bfaa771908c07dd8673a787daed3a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DDX-icon.png\",\"name\":\"DerivaDAO\",\"symbol\":\"DDX\"},{\"address\":\"0x80ab141f324c3d6f2b18b030f1c4e95d4d658778\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEA-icon.png\",\"name\":\"DEA\",\"symbol\":\"DEA\"},{\"address\":\"0x9248c485b0b80f76da451f167a8db30f33c70907\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEBASE-icon.png\",\"name\":\"Debase\",\"symbol\":\"DEBASE\"},{\"address\":\"0x8d1ce361eb68e9e05573443c407d4a3bed23b033\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEFI++-icon.png\",\"name\":\"PieDAO DEFI++\",\"symbol\":\"DEFI++\"},{\"address\":\"0x78f225869c08d478c34e5f645d07a87d3fe8eb78\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEFI+L-icon.png\",\"name\":\"PieDAO DEFI Large Cap\",\"symbol\":\"DEFI+L\"},{\"address\":\"0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEFI+S-icon.png\",\"name\":\"PieDAO DEFI Small Cap\",\"symbol\":\"DEFI+S\"},{\"address\":\"0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEFI5-icon.png\",\"name\":\"DEFI Top 5 Tokens Index\",\"symbol\":\"DEFI5\"},{\"address\":\"0x88ef27e69108b2633f8e1c184cc37940a075cc02\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEGO-icon.png\",\"name\":\"dego.finance\",\"symbol\":\"DEGO\"},{\"address\":\"0x469e66e06fec34839e5eb1273ba85a119b8d702f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEGOV-icon.png\",\"name\":\"Degov\",\"symbol\":\"DEGOV\"},{\"address\":\"0x3b62f3820e0b035cc4ad602dece6d796bc325325\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEUS-icon.png\",\"name\":\"DEUS\",\"symbol\":\"DEUS\"},{\"address\":\"0x5caf454ba92e6f2c929df14667ee360ed9fd5b26\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEV-icon.png\",\"name\":\"Dev Protocol\",\"symbol\":\"DEV\"},{\"address\":\"0x26ce25148832c04f3d7f26f32478a9fe55197166\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DEXT-icon.png\",\"name\":\"DexTools\",\"symbol\":\"DEXT\"},{\"address\":\"0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DF-icon.png\",\"name\":\"dForce Token\",\"symbol\":\"DF\"},{\"address\":\"0x20c36f062a31865bed8a5b1e512d9a1a20aa333a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DFD-icon.png\",\"name\":\"DefiDollar DAO\",\"symbol\":\"DFD\"},{\"address\":\"0xee06a81a695750e71a662b51066f2c74cf4478a0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DG-icon.png\",\"name\":\"decentral.games\",\"symbol\":\"DG\"},{\"address\":\"0xc666081073e8dff8d3d1c2292a29ae1a2153ec09\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DGTX-icon.png\",\"name\":\"DigitexFutures\",\"symbol\":\"DGTX\"},{\"address\":\"0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/DGX-icon.png\",\"name\":\"Digix Gold\",\"symbol\":\"DGX\"},{\"address\":\"0xca1207647ff814039530d7d35df0e1dd2e91fa84\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DHT-icon.png\",\"name\":\"dHedge DAO Token\",\"symbol\":\"DHT\"},{\"address\":\"0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DIA-icon.png\",\"name\":\"DIA\",\"symbol\":\"DIA\"},{\"address\":\"0x798d1be841a82a273720ce31c822c61a67a601c3\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/DIGG-icon.png\",\"name\":\"Digg\",\"symbol\":\"DIGG\"},{\"address\":\"0xc719d010b63e5bbf2c0551872cd5316ed26acd83\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DIP-icon.png\",\"name\":\"Etherisc DIP Token\",\"symbol\":\"DIP\"},{\"address\":\"0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DLP-DUCK-icon.png\",\"name\":\"DLP Duck Token\",\"symbol\":\"DLP-DUCK\"},{\"address\":\"0xed91879919b71bb6905f23af0a68d231ecf87b14\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DMG-icon.png\",\"name\":\"DMM Governance\",\"symbol\":\"DMG\"},{\"address\":\"0x82b0e50478eeafde392d45d1259ed1071b6fda81\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DNA-icon.png\",\"name\":\"EncrypGen\",\"symbol\":\"DNA\"},{\"address\":\"0x0abdace70d3790235af448c88547603b945604ea\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DNT-icon.png\",\"name\":\"district0x\",\"symbol\":\"DNT\"},{\"address\":\"0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DODO-icon.png\",\"name\":\"DODO\",\"symbol\":\"DODO\"},{\"address\":\"0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DONUT-icon.png\",\"name\":\"Donut\",\"symbol\":\"DONUT\"},{\"address\":\"0x0a913bead80f321e7ac35285ee10d9d922659cb7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DOS-icon.png\",\"name\":\"DOS Network\",\"symbol\":\"DOS\"},{\"address\":\"0xad32a8e6220741182940c5abf610bde99e737b2d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DOUGH-icon.png\",\"name\":\"PieDAO DOUGH v2\",\"symbol\":\"DOUGH\"},{\"address\":\"0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DPI-icon.png\",\"name\":\"DeFiPulse Index\",\"symbol\":\"DPI\"},{\"address\":\"0xb78b3320493a4efaa1028130c5ba26f0b6085ef8\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DRACULA-DRC-icon.png\",\"name\":\"Dracula Token\",\"symbol\":\"DRACULA-DRC\"},{\"address\":\"0xa150db9b1fa65b44799d4dd949d922c0a33ee606\",\"chainId\":1,\"decimals\":0,\"logoURI\":\"https://zapper.fi/images/DRC-icon.png\",\"name\":\"Digital Reserve Currency\",\"symbol\":\"DRC\"},{\"address\":\"0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DSD-icon.png\",\"name\":\"Dynamic Set Dollar\",\"symbol\":\"DSD\"},{\"address\":\"0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DSLA-icon.png\",\"name\":\"DSLA Protocol\",\"symbol\":\"DSLA\"},{\"address\":\"0x92e187a03b6cd19cb6af293ba17f2745fd2357d5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DUCK-icon.png\",\"name\":\"Unit Protocol\",\"symbol\":\"DUCK\"},{\"address\":\"0x5bc25f649fc4e26069ddf4cf4010f9f706c23831\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DUSD-icon.png\",\"name\":\"DefiDollar\",\"symbol\":\"DUSD\"},{\"address\":\"0xa1d65e8fb6e87b60feccbc582f7f97804b725521\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/DXD-icon.png\",\"name\":\"DXDao\",\"symbol\":\"DXD\"},{\"address\":\"0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/ENG-icon.png\",\"name\":\"Enigma\",\"symbol\":\"ENG\"},{\"address\":\"0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ENJ-icon.png\",\"name\":\"Enjin Coin\",\"symbol\":\"ENJ\"},{\"address\":\"0x36f3fd68e7325a35eb768f1aedaae9ea0689d723\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ESD-icon.png\",\"name\":\"Empty Set Dollar\",\"symbol\":\"ESD\"},{\"address\":\"0x0000000000000000000000000000000000000000\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ETH-icon.png\",\"name\":\"Ethereum\",\"symbol\":\"ETH\"},{\"address\":\"0xeeeeeeeee2af8d0e1940679860398308e0ef24d6\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ETHV-icon.png\",\"name\":\"Ethverse\",\"symbol\":\"ETHV\"},{\"address\":\"0xdb25f211ab05b1c97d595516f45794528a807ad8\",\"chainId\":1,\"decimals\":2,\"logoURI\":\"https://zapper.fi/images/EURS-icon.png\",\"name\":\"STASIS EURO\",\"symbol\":\"EURS\"},{\"address\":\"0x178c820f862b14f316509ec36b13123da19a6054\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/EWTB-icon.png\",\"name\":\"Energy Web Token Bridged\",\"symbol\":\"EWTB\"},{\"address\":\"0x194ebd173f6cdace046c53eacce9b953f28411d1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/EursCurve-icon.png\",\"name\":\"Curve.fi EURS/sEUR\",\"symbol\":\"EursCurve\"},{\"address\":\"0xa0246c9032bc3a600820415ae600c6388619a14d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FARM-icon.png\",\"name\":\"Harvest Finance\",\"symbol\":\"FARM\"},{\"address\":\"0xaea46a60368a7bd060eec7df8cba43b7ef41ad85\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FET-icon.png\",\"name\":\"Fetch.ai\",\"symbol\":\"FET\"},{\"address\":\"0xe8e06a5613dc86d459bc8fb989e173bb8b256072\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FEY-icon.png\",\"name\":\"Feyorra\",\"symbol\":\"FEY\"},{\"address\":\"0x054f76beed60ab6dbeb23502178c52d6c5debe40\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FIN-icon.png\",\"name\":\"DeFiner\",\"symbol\":\"FIN\"},{\"address\":\"0xffed56a180f23fd32bc6a1d8d3c09c283ab594a8\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FL-icon.png\",\"name\":\"Freeliquid\",\"symbol\":\"FL\"},{\"address\":\"0xc6e64729931f60d2c8bc70a27d66d9e0c28d1bf9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FLOW-icon.png\",\"name\":\"Flow Protocol\",\"symbol\":\"FLOW\"},{\"address\":\"0xc770eefad204b5180df6a14ee197d99d808ee52d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FOX-icon.png\",\"name\":\"FOX Token\",\"symbol\":\"FOX\"},{\"address\":\"0xc626e0619ac79afea9281c8eb9b1a9f9d3fab532\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FR-icon.png\",\"name\":\"Freedom Reserve\",\"symbol\":\"FR\"},{\"address\":\"0x853d955acef822db058eb8505911ed77f175b99e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FRAX-icon.png\",\"name\":\"Frax\",\"symbol\":\"FRAX\"},{\"address\":\"0x4e15361fd6b4bb609fa63c81a2be19d873717870\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FTM-icon.png\",\"name\":\"Fantom\",\"symbol\":\"FTM\"},{\"address\":\"0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FTT-icon.png\",\"name\":\"FTX Token\",\"symbol\":\"FTT\"},{\"address\":\"0x419d0d8bdd9af5e606ae2232ed285aff190e711b\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/FUN-icon.png\",\"name\":\"FunFair\",\"symbol\":\"FUN\"},{\"address\":\"0x4a57e687b9126435a9b19e4a802113e266adebde\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FXC-icon.png\",\"name\":\"Flexacoin\",\"symbol\":\"FXC\"},{\"address\":\"0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/FXS-icon.png\",\"name\":\"Frax Share\",\"symbol\":\"FXS\"},{\"address\":\"0x15d4c048f83bd7e37d49ea4c83a07267ec4203da\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/GALA-icon.png\",\"name\":\"Gala\",\"symbol\":\"GALA\"},{\"address\":\"0x515d7e9d75e2b76db60f8a051cd890eba23286bc\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/GDAO-icon.png\",\"name\":\"Governor\",\"symbol\":\"GDAO\"},{\"address\":\"0x3f382dbd960e3a9bbceae22651e88158d2791550\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/GHST-icon.png\",\"name\":\"Aavegotchi GHST Token\",\"symbol\":\"GHST\"},{\"address\":\"0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/GLM-icon.png\",\"name\":\"Golem Network Token\",\"symbol\":\"GLM\"},{\"address\":\"0x6810e776880c02933d47db1b9fc05908e5386b96\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/GNO-icon.png\",\"name\":\"Gnosis\",\"symbol\":\"GNO\"},{\"address\":\"0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd\",\"chainId\":1,\"decimals\":12,\"logoURI\":\"https://zapper.fi/images/GRID-icon.png\",\"name\":\"Grid+\",\"symbol\":\"GRID\"},{\"address\":\"0x09e64c2b61a5f1690ee6fbed9baf5d6990f8dfd0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/GRO-icon.png\",\"name\":\"GROWTH DeFi\",\"symbol\":\"GRO\"},{\"address\":\"0xc944e90c64b2c07662a292be6244bdf05cda44a7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/GRT-icon.png\",\"name\":\"Graph Token\",\"symbol\":\"GRT\"},{\"address\":\"0x056fd409e1d7a124bd7017459dfea2f387b6d5cd\",\"chainId\":1,\"decimals\":2,\"logoURI\":\"https://zapper.fi/images/GUSD-icon.png\",\"name\":\"Gemini Dollar\",\"symbol\":\"GUSD\"},{\"address\":\"0xd2967f45c4f384deea880f807be904762a3dea07\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/GUSDCurve-icon.png\",\"name\":\"Curve.fi GUSD/3Crv\",\"symbol\":\"GUSDCurve\"},{\"address\":\"0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/GYSR-icon.png\",\"name\":\"Geyser\",\"symbol\":\"GYSR\"},{\"address\":\"0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/HAKKA-icon.png\",\"name\":\"Hakka Finance\",\"symbol\":\"HAKKA\"},{\"address\":\"0x0316eb71485b0ab14103307bf65a021042c6d380\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/HBTC-icon.png\",\"name\":\"Huobi BTC\",\"symbol\":\"HBTC\"},{\"address\":\"0x584bc13c7d411c00c01a62e8019472de68768430\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/HEGIC-icon.png\",\"name\":\"Hegic\",\"symbol\":\"HEGIC\"},{\"address\":\"0xeef9f339514298c6a857efcfc1a762af84438dee\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/HEZ-icon.png\",\"name\":\"Hermez Network Token\",\"symbol\":\"HEZ\"},{\"address\":\"0x3fa729b4548becbad4eab6ef18413470e6d5324c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/HH-icon.png\",\"name\":\"Holyheld\",\"symbol\":\"HH\"},{\"address\":\"0x39eae99e685906ff1c11a962a743440d0a1a6e09\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/HOLY-icon.png\",\"name\":\"Holyheld\",\"symbol\":\"HOLY\"},{\"address\":\"0xdf574c24545e5ffecb9a659c229253d4111d87e1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/HUSD-icon.png\",\"name\":\"HUSD\",\"symbol\":\"HUSD\"},{\"address\":\"0xb705268213d593b8fd88d3fdeff93aff5cbdcfae\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/IDEX-icon.png\",\"name\":\"IDEX\",\"symbol\":\"IDEX\"},{\"address\":\"0x875773784af8135ea0ef43b5a374aad105c5d39e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/IDLE-icon.png\",\"name\":\"Idle\",\"symbol\":\"IDLE\"},{\"address\":\"0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/IDXM-icon.png\",\"name\":\"IDEX Membership\",\"symbol\":\"IDXM\"},{\"address\":\"0xaf1250fa68d7decd34fd75de8742bc03b29bd58e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/IHF-icon.png\",\"name\":\"Invictus Hyperion Fund\",\"symbol\":\"IHF\"},{\"address\":\"0x0954906da0bf32d5479e25f46056d22f08464cab\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/INDEX-icon.png\",\"name\":\"Index Cooperative\",\"symbol\":\"INDEX\"},{\"address\":\"0xe28b3b32b6c345a34ff64674606124dd5aceca30\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/INJ-icon.png\",\"name\":\"Injective Token\",\"symbol\":\"INJ\"},{\"address\":\"0x8a9c67fee641579deba04928c4bc45f66e26343a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/JRT-icon.png\",\"name\":\"Jarvis Reward Token\",\"symbol\":\"JRT\"},{\"address\":\"0x85eee30c52b0b379b046fb0f85f4f3dc3009afec\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/KEEP-icon.png\",\"name\":\"Keep Network\",\"symbol\":\"KEEP\"},{\"address\":\"0xdd974d5c2e2928dea5f71b9825b8b646686bd200\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/KNC-icon.png\",\"name\":\"Kyber Network\",\"symbol\":\"KNC\"},{\"address\":\"0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/KP3R-icon.png\",\"name\":\"Keep3rV1\",\"symbol\":\"KP3R\"},{\"address\":\"0xbbff34e47e559ef680067a6b1c980639eeb64d24\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/L2-icon.png\",\"name\":\"Leverj Gluon\",\"symbol\":\"L2\"},{\"address\":\"0x5a98fcbea516cf06857215779fd812ca3bef1b32\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LDO-icon.png\",\"name\":\"Lido DAO Token\",\"symbol\":\"LDO\"},{\"address\":\"0x80fb784b7ed66730e8b1dbd9820afd29931aab03\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LEND-icon.png\",\"name\":\"Aave OLD\",\"symbol\":\"LEND\"},{\"address\":\"0xab37e1358b639fd877f015027bb62d3ddaa7557e\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/LIEN-icon.png\",\"name\":\"Lien\",\"symbol\":\"LIEN\"},{\"address\":\"0x3e9bc21c9b189c09df3ef1b824798658d5011937\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LINA-icon.png\",\"name\":\"Linear Token\",\"symbol\":\"LINA\"},{\"address\":\"0x514910771af9ca656af840dff83e8264ecf986ca\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LINK-icon.png\",\"name\":\"Chainlink\",\"symbol\":\"LINK\"},{\"address\":\"0x0e2ec54fc0b509f445631bf4b91ab8168230c752\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LINKUSD-icon.png\",\"name\":\"LINKUSD\",\"symbol\":\"LINKUSD\"},{\"address\":\"0x763fa6806e1acf68130d2d0f0df754c93cc546b2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LIT-icon.png\",\"name\":\"Lition\",\"symbol\":\"LIT\"},{\"address\":\"0x0000000000095413afc295d19edeb1ad7b71c952\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LON-icon.png\",\"name\":\"Tokenlon\",\"symbol\":\"LON\"},{\"address\":\"0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LOOM-icon.png\",\"name\":\"Loom Network\",\"symbol\":\"LOOM\"},{\"address\":\"0x58b6a8a3302369daec383334672404ee733ab239\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LPT-icon.png\",\"name\":\"Livepeer\",\"symbol\":\"LPT\"},{\"address\":\"0xbbbbca6a901c926f240b89eacb641d8aec7aeafd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LRC-icon.png\",\"name\":\"Loopring\",\"symbol\":\"LRC\"},{\"address\":\"0x3db6ba6ab6f95efed1a6e794cad492faaabf294d\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/LTO-icon.png\",\"name\":\"LTO Network\",\"symbol\":\"LTO\"},{\"address\":\"0xb1f66997a5760428d3a87d68b90bfe0ae64121cc\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LUA-icon.png\",\"name\":\"LuaToken\",\"symbol\":\"LUA\"},{\"address\":\"0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/LUNA-icon.png\",\"name\":\"Wrapped LUNA Token\",\"symbol\":\"LUNA\"},{\"address\":\"0xb4d930279552397bba2ee473229f89ec245bc365\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MAHA-icon.png\",\"name\":\"MahaDAO\",\"symbol\":\"MAHA\"},{\"address\":\"0x0f5d2fb29fb7d3cfee444a200298f468908cc942\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MANA-icon.png\",\"name\":\"Decentraland\",\"symbol\":\"MANA\"},{\"address\":\"0x67c597624b17b16fb77959217360b7cd18284253\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/MARK-icon.png\",\"name\":\"Benchmark\",\"symbol\":\"MARK\"},{\"address\":\"0x08d967bb0134f2d07f7cfb6e246680c53927dd30\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MATH-icon.png\",\"name\":\"MATH\",\"symbol\":\"MATH\"},{\"address\":\"0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MATIC-icon.png\",\"name\":\"Matic Network\",\"symbol\":\"MATIC\"},{\"address\":\"0x4e352cf164e64adcbad318c3a1e222e9eba4ce42\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MCB-icon.png\",\"name\":\"MCDex\",\"symbol\":\"MCB\"},{\"address\":\"0xd5525d397898e5502075ea5e830d8914f6f0affe\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/MEME-icon.png\",\"name\":\"Meme\",\"symbol\":\"MEME\"},{\"address\":\"0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/METRIC-icon.png\",\"name\":\"MetricExchange\",\"symbol\":\"METRIC\"},{\"address\":\"0x368b3a58b5f49392e5c9e4c998cb0bb966752e51\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MIC-icon.png\",\"name\":\"MIC\",\"symbol\":\"MIC\"},{\"address\":\"0x09a3ecafa817268f77be1283176b946c4ff2e608\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MIR-icon.png\",\"name\":\"Wrapped MIR Token\",\"symbol\":\"MIR\"},{\"address\":\"0x4b4d2e899658fb59b1d518b68fe836b100ee8958\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MIS-icon.png\",\"name\":\"MIS\",\"symbol\":\"MIS\"},{\"address\":\"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MKR-icon.png\",\"name\":\"Maker\",\"symbol\":\"MKR\"},{\"address\":\"0xec67005c4e498ec7f55e092bd1d35cbc47c91892\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MLN-icon.png\",\"name\":\"Melon\",\"symbol\":\"MLN\"},{\"address\":\"0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MOON-icon.png\",\"name\":\"MoonSwap\",\"symbol\":\"MOON\"},{\"address\":\"0x8888801af4d980682e47f1a9036e589479e835c5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MPH-icon.png\",\"name\":\"88mph.app\",\"symbol\":\"MPH\"},{\"address\":\"0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MTA-icon.png\",\"name\":\"Meta\",\"symbol\":\"MTA\"},{\"address\":\"0xf433089366899d83a9f26a773d59ec7ecf30355e\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/MTL-icon.png\",\"name\":\"Metal\",\"symbol\":\"MTL\"},{\"address\":\"0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MTLX-icon.png\",\"name\":\"Mettalex\",\"symbol\":\"MTLX\"},{\"address\":\"0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MUSE-icon.png\",\"name\":\"Muse\",\"symbol\":\"MUSE\"},{\"address\":\"0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MUST-icon.png\",\"name\":\"Must\",\"symbol\":\"MUST\"},{\"address\":\"0x45128cb743951121fb70cb570c0784492732778a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MWG-icon.png\",\"name\":\"METAWHALE GOLD\",\"symbol\":\"MWG\"},{\"address\":\"0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/MYST-icon.png\",\"name\":\"Mysterium\",\"symbol\":\"MYST\"},{\"address\":\"0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/Mars-icon.png\",\"name\":\"MarsToken\",\"symbol\":\"Mars\"},{\"address\":\"0x32c868f6318d6334b2250f323d914bc2239e4eee\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/N3RDz-icon.png\",\"name\":\"N3RD.FINANCE\",\"symbol\":\"N3RDz\"},{\"address\":\"0x86772b1409b61c639eaac9ba0acfbb6e238e5f83\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NDX-icon.png\",\"name\":\"Indexed\",\"symbol\":\"NDX\"},{\"address\":\"0xcc80c051057b774cd75067dc48f8987c4eb97a5e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NEC-icon.png\",\"name\":\"Nectar Token\",\"symbol\":\"NEC\"},{\"address\":\"0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NEXO-icon.png\",\"name\":\"NEXO\",\"symbol\":\"NEXO\"},{\"address\":\"0x87d73e916d7057945c9bcd8cdd94e42a6f47f776\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NFTX-icon.png\",\"name\":\"NFTX\",\"symbol\":\"NFTX\"},{\"address\":\"0x1776e1f26f98b1a5df9cd347953a26dd3cb46671\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NMR-icon.png\",\"name\":\"Numeraire\",\"symbol\":\"NMR\"},{\"address\":\"0xa8c8cfb141a3bb59fea1e2ea6b79b5ecbcd7b6ca\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NOIA-icon.png\",\"name\":\"NOIA Token\",\"symbol\":\"NOIA\"},{\"address\":\"0x1fc52f1abade452dd4674477d4711951700b3d27\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NOKU-icon.png\",\"name\":\"Noku\",\"symbol\":\"NOKU\"},{\"address\":\"0x6e9730ecffbed43fd876a264c982e254ef05a0de\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NORD-icon.png\",\"name\":\"Nord Token\",\"symbol\":\"NORD\"},{\"address\":\"0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/NXM-icon.png\",\"name\":\"Nexus Mutual\",\"symbol\":\"NXM\"},{\"address\":\"0x20945ca1df56d237fd40036d47e866c7dccd2114\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/Nsure-icon.png\",\"name\":\"Nsure Network Token\",\"symbol\":\"Nsure\"},{\"address\":\"0x967da4048cd07ab37855c090aaf366e4ce1b9f48\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OCEAN-icon.png\",\"name\":\"Ocean Protocol\",\"symbol\":\"OCEAN\"},{\"address\":\"0x7240ac91f01233baaf8b064248e80feaa5912ba3\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OCTO-icon.png\",\"name\":\"OctoFi\",\"symbol\":\"OCTO\"},{\"address\":\"0x8207c1ffc5b6804f6024322ccf34f29c3541ae26\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OGN-icon.png\",\"name\":\"Origin Protocol\",\"symbol\":\"OGN\"},{\"address\":\"0x2baecdf43734f22fd5c152db08e3c27233f0c7d2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OM-icon.png\",\"name\":\"MANTRA DAO\",\"symbol\":\"OM\"},{\"address\":\"0xd26114cd6ee289accf82350c8d8487fedb8a0c07\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OMG-icon.png\",\"name\":\"OMG Network\",\"symbol\":\"OMG\"},{\"address\":\"0xe0ad1806fd3e7edf6ff52fdb822432e847411033\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ONX-icon.png\",\"name\":\"OnX.finance\",\"symbol\":\"ONX\"},{\"address\":\"0x69e8b9528cabda89fe846c67675b5d73d463a916\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OPEN-icon.png\",\"name\":\"OPEN Governance Token\",\"symbol\":\"OPEN\"},{\"address\":\"0x888888888889c00c67689029d7856aac1065ec11\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OPIUM-icon.png\",\"name\":\"Opium Governance Token\",\"symbol\":\"OPIUM\"},{\"address\":\"0x4c11249814f11b9346808179cf06e71ac328c1b5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ORAI-icon.png\",\"name\":\"Oraichain Token\",\"symbol\":\"ORAI\"},{\"address\":\"0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/ORN-icon.png\",\"name\":\"Orion Protocol\",\"symbol\":\"ORN\"},{\"address\":\"0x2a8e1e676ec238d8a992307b495b45b3feaa5e86\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OUSD-icon.png\",\"name\":\"Origin Dollar\",\"symbol\":\"OUSD\"},{\"address\":\"0x2a7f709ee001069771ceb6d42e85035f7d18e736\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OWL-icon.png\",\"name\":\"OWL Token\",\"symbol\":\"OWL\"},{\"address\":\"0x4575f41308ec1483f3d399aa9a2826d74da13deb\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/OXT-icon.png\",\"name\":\"Orchid Protocol\",\"symbol\":\"OXT\"},{\"address\":\"0x8c8687fc965593dfb2f0b4eaefd55e9d8df348df\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PAID-icon.png\",\"name\":\"PAID Network\",\"symbol\":\"PAID\"},{\"address\":\"0xd56dac73a4d6766464b38ec6d91eb45ce7457c44\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PAN-icon.png\",\"name\":\"Panvala Pan\",\"symbol\":\"PAN\"},{\"address\":\"0x8e870d67f660d95d5be530380d0ec0bd388289e1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PAX-icon.png\",\"name\":\"Paxos Standard\",\"symbol\":\"PAX\"},{\"address\":\"0x45804880de22913dafe09f4980848ece6ecbaf78\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PAXG-icon.png\",\"name\":\"PAX Gold\",\"symbol\":\"PAXG\"},{\"address\":\"0xeca82185adce47f39c684352b0439f030f860318\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PERL-icon.png\",\"name\":\"Perlin\",\"symbol\":\"PERL\"},{\"address\":\"0xbc396689893d065f41bc2c6ecbee5e0085233447\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PERP-icon.png\",\"name\":\"Perpetual Protocol\",\"symbol\":\"PERP\"},{\"address\":\"0x6c5ba91642f10282b576d91922ae6448c9d52f4e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PHA-icon.png\",\"name\":\"Phala Network\",\"symbol\":\"PHA\"},{\"address\":\"0x429881672b9ae42b8eba0e26cd9c73711b891ca5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PICKLE-icon.png\",\"name\":\"Pickle Finance\",\"symbol\":\"PICKLE\"},{\"address\":\"0x26607ac599266b21d13c7acf7942c7701a8b699c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PIPT-icon.png\",\"name\":\"Power Index Pool Token\",\"symbol\":\"PIPT\"},{\"address\":\"0x72f020f8f3e8fd9382705723cd26380f8d0c66bb\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PLOT-icon.png\",\"name\":\"PLOT\",\"symbol\":\"PLOT\"},{\"address\":\"0xe3818504c1b32bf1557b16c238b2e01fd3149c17\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PLR-icon.png\",\"name\":\"Pillar\",\"symbol\":\"PLR\"},{\"address\":\"0xd8912c10681d8b21fd3742244f44658dba12264e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PLU-icon.png\",\"name\":\"Pluton\",\"symbol\":\"PLU\"},{\"address\":\"0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PNK-icon.png\",\"name\":\"Kleros\",\"symbol\":\"PNK\"},{\"address\":\"0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PNT-icon.png\",\"name\":\"pNetwork\",\"symbol\":\"PNT\"},{\"address\":\"0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/POLS-icon.png\",\"name\":\"PolkastarterToken\",\"symbol\":\"POLS\"},{\"address\":\"0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/POLY-icon.png\",\"name\":\"Polymath Network\",\"symbol\":\"POLY\"},{\"address\":\"0x57b946008913b82e4df85f501cbaed910e58d26c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/POND-icon.png\",\"name\":\"Marlin POND\",\"symbol\":\"POND\"},{\"address\":\"0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/PPT-icon.png\",\"name\":\"Populous\",\"symbol\":\"PPT\"},{\"address\":\"0xb9871cb10738eada636432e86fc0cb920dc3de24\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PRIA-icon.png\",\"name\":\"PRIA\",\"symbol\":\"PRIA\"},{\"address\":\"0x362bc847a3a9637d3af6624eec853618a43ed7d2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PRQ-icon.png\",\"name\":\"Parsiq Token\",\"symbol\":\"PRQ\"},{\"address\":\"0xd4cb461eace80708078450e465881599d2235f1a\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/PSI-icon.png\",\"name\":\"passive.income\",\"symbol\":\"PSI\"},{\"address\":\"0xc57d533c50bc22247d49a368880fb49a1caa39f7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PTF-icon.png\",\"name\":\"PowerTrade Fuel Token\",\"symbol\":\"PTF\"},{\"address\":\"0x9cea2ed9e47059260c97d697f82b8a14efa61ea5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PUNK-icon.png\",\"name\":\"Punk\",\"symbol\":\"PUNK\"},{\"address\":\"0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/PYLON-icon.png\",\"name\":\"Pylon Finance\",\"symbol\":\"PYLON\"},{\"address\":\"0x4a220e6096b25eadb88358cb44068a3248254675\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/QNT-icon.png\",\"name\":\"Quant\",\"symbol\":\"QNT\"},{\"address\":\"0x59d4ccc94a9c4c3d3b4ba2aa343a9bdf95145dd1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/QUSD-icon.png\",\"name\":\"QUSD Stablecoin\",\"symbol\":\"QUSD\"},{\"address\":\"0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RAMP-icon.png\",\"name\":\"RAMP DEFI\",\"symbol\":\"RAMP\"},{\"address\":\"0x93dfaf57d986b9ca77df9376c50878e013d9c7c8\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RARE-icon.png\",\"name\":\"RARE.UNIQUE\",\"symbol\":\"RARE\"},{\"address\":\"0xfca59cd816ab1ead66534d82bc21e7515ce441cf\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RARI-icon.png\",\"name\":\"Rarible\",\"symbol\":\"RARI\"},{\"address\":\"0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RCN-icon.png\",\"name\":\"Ripio Credit Network\",\"symbol\":\"RCN\"},{\"address\":\"0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RDN-icon.png\",\"name\":\"Raiden Network Token\",\"symbol\":\"RDN\"},{\"address\":\"0x408e41876cccdc0f92210600ef50372656052a38\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/REN-icon.png\",\"name\":\"Republic Protocol\",\"symbol\":\"REN\"},{\"address\":\"0x221657776846890989a759ba2973e427dff5c9bb\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/REP-icon.png\",\"name\":\"Augur\",\"symbol\":\"REP\"},{\"address\":\"0x8f8221afbb33998d8584a2b05749ba73c37a938a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/REQ-icon.png\",\"name\":\"Request\",\"symbol\":\"REQ\"},{\"address\":\"0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/RFI-icon.png\",\"name\":\"reflect.finance\",\"symbol\":\"RFI\"},{\"address\":\"0xa1d6df714f91debf4e0802a542e13067f31b8262\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RFOX-icon.png\",\"name\":\"RFOX\",\"symbol\":\"RFOX\"},{\"address\":\"0xaf9f549774ecedbd0966c52f250acc548d3f36e5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RFUEL-icon.png\",\"name\":\"Rio Fuel Token\",\"symbol\":\"RFUEL\"},{\"address\":\"0xd291e7a03283640fdc51b121ac401383a46cc623\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RGT-icon.png\",\"name\":\"Rari Governance Token\",\"symbol\":\"RGT\"},{\"address\":\"0x9469d013805bffb7d3debe5e7839237e535ec483\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RING-icon.png\",\"name\":\"Darwinia Network Native Token\",\"symbol\":\"RING\"},{\"address\":\"0x607f4c5bb672230e8672085532f7e901544a7375\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/RLC-icon.png\",\"name\":\"iExec RLC\",\"symbol\":\"RLC\"},{\"address\":\"0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RLY-icon.png\",\"name\":\"Rally\",\"symbol\":\"RLY\"},{\"address\":\"0xe17f017475a709de58e976081eb916081ff4c9d5\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/RMPL-icon.png\",\"name\":\"RMPL\",\"symbol\":\"RMPL\"},{\"address\":\"0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RNDR-icon.png\",\"name\":\"Render Token\",\"symbol\":\"RNDR\"},{\"address\":\"0xfa5047c9c78b8877af97bdcb85db743fd7313d4a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ROOK-icon.png\",\"name\":\"ROOK\",\"symbol\":\"ROOK\"},{\"address\":\"0xb4efd85c19999d84251304bda99e90b92300bd93\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RPL-icon.png\",\"name\":\"Rocket Pool\",\"symbol\":\"RPL\"},{\"address\":\"0x8762db106b2c2a0bccb3a80d1ed41273552616e8\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RSR-icon.png\",\"name\":\"Reserve Rights Token\",\"symbol\":\"RSR\"},{\"address\":\"0x196f4727526ea7fb1e17b2071b3d8eaa38486988\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RSV-icon.png\",\"name\":\"Reserve\",\"symbol\":\"RSV\"},{\"address\":\"0x3155ba85d5f96b2d030a4966af206230e46849cb\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/RUNE-icon.png\",\"name\":\"THORChain ETH.RUNE\",\"symbol\":\"RUNE\"},{\"address\":\"0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SAI-icon.png\",\"name\":\"Sai\",\"symbol\":\"SAI\"},{\"address\":\"0x6fa0952355607dfb2d399138b7fe10eb90f245e4\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SCT-icon.png\",\"name\":\"Clash Token\",\"symbol\":\"SCT\"},{\"address\":\"0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SDT-icon.png\",\"name\":\"Stake DAO Token\",\"symbol\":\"SDT\"},{\"address\":\"0xca3fe04c7ee111f0bbb02c328c699226acf9fd33\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SEEN-icon.png\",\"name\":\"seen.haus\",\"symbol\":\"SEEN\"},{\"address\":\"0x8a6aca71a218301c7081d4e96d64292d3b275ce0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SFG-icon.png\",\"name\":\"Stable Finance Governance Token\",\"symbol\":\"SFG\"},{\"address\":\"0xb753428af26e81097e7fd17f40c88aaa3e04902c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SFI-icon.png\",\"name\":\"Spice\",\"symbol\":\"SFI\"},{\"address\":\"0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/SHARE-icon.png\",\"name\":\"Seigniorage Shares\",\"symbol\":\"SHARE\"},{\"address\":\"0xe25b0bba01dc5630312b6a21927e578061a13f55\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SHIP-icon.png\",\"name\":\"ShipChain\",\"symbol\":\"SHIP\"},{\"address\":\"0xed0439eacf4c4965ae4613d77a5c2efe10e5f183\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SHROOM-icon.png\",\"name\":\"Shroom.Finance\",\"symbol\":\"SHROOM\"},{\"address\":\"0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SKL-icon.png\",\"name\":\"SKALE\",\"symbol\":\"SKL\"},{\"address\":\"0x37236cd05b34cc79d3715af2383e96dd7443dcf1\",\"chainId\":1,\"decimals\":0,\"logoURI\":\"https://zapper.fi/images/SLP-icon.png\",\"name\":\"Small Love Potion\",\"symbol\":\"SLP\"},{\"address\":\"0xfe9a29ab92522d14fc65880d817214261d8479ae\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SNOW-icon.png\",\"name\":\"Snowswap\",\"symbol\":\"SNOW\"},{\"address\":\"0x744d70fdbe2ba4cf95131626614a1763df805b9e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SNT-icon.png\",\"name\":\"Status\",\"symbol\":\"SNT\"},{\"address\":\"0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SNTVT-icon.png\",\"name\":\"Sentivate\",\"symbol\":\"SNTVT\"},{\"address\":\"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SNX-icon.png\",\"name\":\"Synthetix Network Token\",\"symbol\":\"SNX\"},{\"address\":\"0x23b608675a2b2fb1890d3abbd85c5775c51691d5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SOCKS-icon.png\",\"name\":\"Unisocks\",\"symbol\":\"SOCKS\"},{\"address\":\"0x476c5e26a75bd202a9683ffd34359c0cc15be0ff\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/SRM-icon.png\",\"name\":\"Serum\",\"symbol\":\"SRM\"},{\"address\":\"0xa7de087329bfcda5639247f96140f9dabe3deed1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/STA-icon.png\",\"name\":\"Statera\",\"symbol\":\"STA\"},{\"address\":\"0x0ae055097c6d159879521c384f1d2123d1f195e6\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/STAKE-icon.png\",\"name\":\"xDAI Stake\",\"symbol\":\"STAKE\"},{\"address\":\"0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/STORJ-icon.png\",\"name\":\"Storj\",\"symbol\":\"STORJ\"},{\"address\":\"0x990f341946a3fdb507ae7e52d17851b87168017c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/STRONG-icon.png\",\"name\":\"Strong\",\"symbol\":\"STRONG\"},{\"address\":\"0xea319e87cf06203dae107dd8e5672175e3ee976c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SURF-icon.png\",\"name\":\"SURF.Finance\",\"symbol\":\"SURF\"},{\"address\":\"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SUSHI-icon.png\",\"name\":\"Sushi\",\"symbol\":\"SUSHI\"},{\"address\":\"0xcc4304a31d09258b0029ea7fe63d032f52e44efe\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SWAP-icon.png\",\"name\":\"Trustswap\",\"symbol\":\"SWAP\"},{\"address\":\"0xb8baa0e4287890a5f79863ab62b7f175cecbd433\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SWRV-icon.png\",\"name\":\"Swerve\",\"symbol\":\"SWRV\"},{\"address\":\"0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SXP-icon.png\",\"name\":\"Swipe\",\"symbol\":\"SXP\"},{\"address\":\"0x1695936d6a953df699c38ca21c2140d497c08bd9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/SYN-icon.png\",\"name\":\"SynLev\",\"symbol\":\"SYN\"},{\"address\":\"0xaaaf91d9b90df800df4f55c205fd6989c977e73a\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/TKN-icon.png\",\"name\":\"Monolith\",\"symbol\":\"TKN\"},{\"address\":\"0x77777feddddffc19ff86db637967013e6c6a116c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/TORN-icon.png\",\"name\":\"TornadoCash\",\"symbol\":\"TORN\"},{\"address\":\"0x6f87d756daf0503d08eb8993686c7fc01dc44fb1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/TRADE-icon.png\",\"name\":\"Unitrade\",\"symbol\":\"TRADE\"},{\"address\":\"0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/TRB-icon.png\",\"name\":\"Tellor\",\"symbol\":\"TRB\"},{\"address\":\"0x4c19596f5aaff459fa38b0f7ed92f11ae6543784\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/TRU-icon.png\",\"name\":\"TrustToken\",\"symbol\":\"TRU\"},{\"address\":\"0x2c537e5624e4af88a7ae4060c022609376c8d0eb\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/TRYb-icon.png\",\"name\":\"BiLira\",\"symbol\":\"TRYb\"},{\"address\":\"0x4846239fdf4d4c1aeb26729fa064b0205aca90e1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/TSD-icon.png\",\"name\":\"True Seigniorage Dollar\",\"symbol\":\"TSD\"},{\"address\":\"0x0000000000085d4780b73119b644ae5ecd22b376\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/TUSD-icon.png\",\"name\":\"TrueUSD\",\"symbol\":\"TUSD\"},{\"address\":\"0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/TVK-icon.png\",\"name\":\"Terra Virtua Kolect\",\"symbol\":\"TVK\"},{\"address\":\"0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/UBT-icon.png\",\"name\":\"Unibright\",\"symbol\":\"UBT\"},{\"address\":\"0x12f649a9e821f90bb143089a6e56846945892ffb\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/UDOO-icon.png\",\"name\":\"Hyprr Howdoo\",\"symbol\":\"UDOO\"},{\"address\":\"0x0202be363b8a4820f3f4de7faf5224ff05943ab1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/UFT-icon.png\",\"name\":\"UniLend Finance Token\",\"symbol\":\"UFT\"},{\"address\":\"0x04fa0d235c4abf4bcf4787af4cf447de572ef828\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/UMA-icon.png\",\"name\":\"UMA\",\"symbol\":\"UMA\"},{\"address\":\"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/UNI-icon.png\",\"name\":\"Uniswap\",\"symbol\":\"UNI\"},{\"address\":\"0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/UNIFI-icon.png\",\"name\":\"UniFi\",\"symbol\":\"UNIFI\"},{\"address\":\"0x2f6081e3552b1c86ce4479b80062a1dda8ef23e3\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/USD-icon.png\",\"name\":\"Dollars\",\"symbol\":\"USD\"},{\"address\":\"0x9a48bd0ec040ea4f1d3147c025cd4076a2e71e3e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/USD++-icon.png\",\"name\":\"PieDAO USD++\",\"symbol\":\"USD++\"},{\"address\":\"0xf992558f2736efc034e744c5b2cc7d16694b70f1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/USD5-icon.png\",\"name\":\"S.finance DAI/USDC/USDT/TUSD/PAX\",\"symbol\":\"USD5\"},{\"address\":\"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/USDC-icon.png\",\"name\":\"USD Coin\",\"symbol\":\"USDC\"},{\"address\":\"0x1c0b9c1995ea61f8fb505e4d94aa32b0c024899e\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/USDG-icon.png\",\"name\":\"GATE USD\",\"symbol\":\"USDG\"},{\"address\":\"0x1c48f86ae57291f7686349f12601910bd8d470bb\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/USDK-icon.png\",\"name\":\"USDK\",\"symbol\":\"USDK\"},{\"address\":\"0x674c6ad92fd080e4004b2312b45f796a192d27a0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/USDN-icon.png\",\"name\":\"USDN\",\"symbol\":\"USDN\"},{\"address\":\"0xdac17f958d2ee523a2206206994597c13d831ec7\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/USDT-icon.png\",\"name\":\"Tether\",\"symbol\":\"USDT\"},{\"address\":\"0xeb269732ab75a6fd61ea60b06fe994cd32a83549\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/USDX-icon.png\",\"name\":\"USDx Stablecoin\",\"symbol\":\"USDX\"},{\"address\":\"0xa47c8bf37f92abed4a126bda807a7b7498661acd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/UST-icon.png\",\"name\":\"Wrapped UST Token\",\"symbol\":\"UST\"},{\"address\":\"0xdbdd6f355a37b94e6c7d32fef548e98a280b8df5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/UWL-icon.png\",\"name\":\"UniWhales.io\",\"symbol\":\"UWL\"},{\"address\":\"0x49e833337ece7afe375e44f4e3e8481029218e5c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/VALUE-icon.png\",\"name\":\"Value Liquidity\",\"symbol\":\"VALUE\"},{\"address\":\"0xb72b31907c1c95f3650b64b2469e08edacee5e8f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/VBZRX-icon.png\",\"name\":\"bZx Vesting Token\",\"symbol\":\"VBZRX\"},{\"address\":\"0x5af2be193a6abca9c8817001f45744777db30756\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/VGX-icon.png\",\"name\":\"Voyager Token\",\"symbol\":\"VGX\"},{\"address\":\"0xf406f7a9046793267bc276908778b29563323996\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/VISION-icon.png\",\"name\":\"Vision Token\",\"symbol\":\"VISION\"},{\"address\":\"0x98ad9b32dd10f8d8486927d846d4df8baf39abe2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/VLO-icon.png\",\"name\":\"VELO Token\",\"symbol\":\"VLO\"},{\"address\":\"0x12d102f06da35cc0111eb58017fd2cd28537d0e1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/VOX-icon.png\",\"name\":\"Vox.Finance\",\"symbol\":\"VOX\"},{\"address\":\"0x3a1c1d1c06be03cddc4d3332f7c20e1b37c97ce9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/VYBE-icon.png\",\"name\":\"Vybe\",\"symbol\":\"VYBE\"},{\"address\":\"0xb2279b6769cfba691416f00609b16244c0cf4b20\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/WAIF-icon.png\",\"name\":\"Waifu Token\",\"symbol\":\"WAIF\"},{\"address\":\"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/WBTC-icon.png\",\"name\":\"Wrapped Bitcoin\",\"symbol\":\"WBTC\"},{\"address\":\"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/WETH-icon.png\",\"name\":\"WETH\",\"symbol\":\"WETH\"},{\"address\":\"0x9355372396e3f6daf13359b7b607a3374cc638e0\",\"chainId\":1,\"decimals\":4,\"logoURI\":\"https://zapper.fi/images/WHALE-icon.png\",\"name\":\"WHALE\",\"symbol\":\"WHALE\"},{\"address\":\"0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/WHITE-icon.png\",\"name\":\"Whiteheart Token\",\"symbol\":\"WHITE\"},{\"address\":\"0x66a0f676479cee1d7373f3dc2e2952778bff5bd6\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/WISE-icon.png\",\"name\":\"Wise Token\",\"symbol\":\"WISE\"},{\"address\":\"0x4922a015c4407f87432b179bb209e125432e4a2a\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/XAUT-icon.png\",\"name\":\"Tether Gold\",\"symbol\":\"XAUT\"},{\"address\":\"0xee573a945b01b788b9287ce062a0cfc15be9fd86\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/XED-icon.png\",\"name\":\"Exeedme\",\"symbol\":\"XED\"},{\"address\":\"0xabe580e7ee158da464b51ee1a83ac0289622e6be\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/XFT-icon.png\",\"name\":\"Offshift\",\"symbol\":\"XFT\"},{\"address\":\"0x0f7f961648ae6db43c75663ac7e5414eb79b5704\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/XIO-icon.png\",\"name\":\"XIO\",\"symbol\":\"XIO\"},{\"address\":\"0x40fd72257597aa14c7231a7b1aaa29fce868f677\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/XOR-icon.png\",\"name\":\"Sora\",\"symbol\":\"XOR\"},{\"address\":\"0x0aacfbec6a24756c20d41914f2caba817c0d8521\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YAM-icon.png\",\"name\":\"YAM\",\"symbol\":\"YAM\"},{\"address\":\"0xb1dc9124c395c1e97773ab855d66e879f053a289\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YAX-icon.png\",\"name\":\"yAxis\",\"symbol\":\"YAX\"},{\"address\":\"0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YCurve-icon.png\",\"name\":\"LP-yCurve\",\"symbol\":\"YCurve\"},{\"address\":\"0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YETI-icon.png\",\"name\":\"Yearn Ecosystem Token Index\",\"symbol\":\"YETI\"},{\"address\":\"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YFI-icon.png\",\"name\":\"yearn.finance\",\"symbol\":\"YFI\"},{\"address\":\"0xa1d0e215a23d7030842fc67ce582a6afa3ccab83\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YFII-icon.png\",\"name\":\"DFI.money\",\"symbol\":\"YFII\"},{\"address\":\"0x28cb7e841ee97947a86b06fa4090c8451f64c0be\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YFL-icon.png\",\"name\":\"YF Link\",\"symbol\":\"YFL\"},{\"address\":\"0x45f24baeef268bb6d63aee5129015d69702bcdfa\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YFV-icon.png\",\"name\":\"YFValue\",\"symbol\":\"YFV\"},{\"address\":\"0xdcb01cc464238396e213a6fdd933e36796eaff9f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YLD-icon.png\",\"name\":\"Yield\",\"symbol\":\"YLD\"},{\"address\":\"0xf94b5c5651c888d928439ab6514b93944eee6f48\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YLD(YIELD-App)-icon.png\",\"name\":\"YIELD App\",\"symbol\":\"YLD(YIELD-App)\"},{\"address\":\"0x17525e4f4af59fbc29551bc4ece6ab60ed49ce31\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/YPIE-icon.png\",\"name\":\"Yearn Ecosystem Pie\",\"symbol\":\"YPIE\"},{\"address\":\"0x9d1233cc46795e94029fda81aaadc1455d510f15\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ZAI-icon.png\",\"name\":\"Zero Collateral Dai\",\"symbol\":\"ZAI\"},{\"address\":\"0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ZIL-icon.png\",\"name\":\"ZIL\",\"symbol\":\"ZIL\"},{\"address\":\"0xe4815ae53b124e7263f08dcdbbb757d41ed658c6\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ZKS-icon.png\",\"name\":\"Zks\",\"symbol\":\"ZKS\"},{\"address\":\"0xd8e3fb3b08eba982f2754988d70d57edc0055ae6\",\"chainId\":1,\"decimals\":9,\"logoURI\":\"https://zapper.fi/images/ZORA-icon.png\",\"name\":\"Zoracles\",\"symbol\":\"ZORA\"},{\"address\":\"0xe41d2489571d322189246dafa5ebde1f4699f498\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ZRX-icon.png\",\"name\":\"0x\",\"symbol\":\"ZRX\"},{\"address\":\"0xc75f15ada581219c95485c578e124df3985e4ce0\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ZZZ-icon.png\",\"name\":\"zzz.finance\",\"symbol\":\"ZZZ\"},{\"address\":\"0x93ed140172ff226dad1f7f3650489b8daa07ae7f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ZZZV2-icon.png\",\"name\":\"ZZZ V2\",\"symbol\":\"ZZZV2\"},{\"address\":\"0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/aDAI-icon.png\",\"name\":\"Aave DAI\",\"symbol\":\"aDAI\"},{\"address\":\"0x028171bca77440897b824ca71d1c56cac55b68a3\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/aDAI(v2)-icon.png\",\"name\":\"Aave interest bearing DAI\",\"symbol\":\"aDAI(v2)\"},{\"address\":\"0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/aLINK-icon.png\",\"name\":\"Aave LINK\",\"symbol\":\"aLINK\"},{\"address\":\"0x9ba00d6856a4edf4665bca2c2309936572473b7e\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/aUSDC-icon.png\",\"name\":\"Aave USDC\",\"symbol\":\"aUSDC\"},{\"address\":\"0xbcca60bb61934080951369a648fb03df4f96263c\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/aUSDC(v2)-icon.png\",\"name\":\"Aave interest bearing USDC\",\"symbol\":\"aUSDC(v2)\"},{\"address\":\"0x71fc860f7d3a592a4a98740e39db31d25db65ae8\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/aUSDT-icon.png\",\"name\":\"Aave USDT\",\"symbol\":\"aUSDT\"},{\"address\":\"0x3ed3b47dd13ec9a98b44e6204a523e766b225811\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/aUSDT(v2)-icon.png\",\"name\":\"Aave interest bearing USDT\",\"symbol\":\"aUSDT(v2)\"},{\"address\":\"0xe95a203b1a91a908f9b9ce46459d101078c2c3cb\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ankrETH-icon.png\",\"name\":\"Ankr ETH\",\"symbol\":\"ankrETH\"},{\"address\":\"0x1337def18c680af1f9f45cbcab6309562975b1dd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/arNXM-icon.png\",\"name\":\"Armor NXM\",\"symbol\":\"arNXM\"},{\"address\":\"0x5d3a536e4d6dbd6114cc1ead35777bab948e3643\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/cDAI-icon.png\",\"name\":\"cDAI\",\"symbol\":\"cDAI\"},{\"address\":\"0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/cETH-icon.png\",\"name\":\"cETH\",\"symbol\":\"cETH\"},{\"address\":\"0x39aa39c021dfbae8fac545936693ac917d5e7563\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/cUSDC-icon.png\",\"name\":\"cUSDC\",\"symbol\":\"cUSDC\"},{\"address\":\"0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/cUSDT-icon.png\",\"name\":\"cUSDT\",\"symbol\":\"cUSDT\"},{\"address\":\"0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/eRSDL-icon.png\",\"name\":\"UnFederalReserveToken\",\"symbol\":\"eRSDL\"},{\"address\":\"0x6468e79a80c0eab0f9a2b574c8d5bc374af59414\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/eXRD-icon.png\",\"name\":\"E-RADIX\",\"symbol\":\"eXRD\"},{\"address\":\"0xd6014ea05bde904448b743833ddf07c3c7837481\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/iBTC-icon.png\",\"name\":\"iBTC\",\"symbol\":\"iBTC\"},{\"address\":\"0xa9859874e1743a32409f75bb11549892138bba1e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/iETH-icon.png\",\"name\":\"iETH\",\"symbol\":\"iETH\"},{\"address\":\"0x67b66c99d3eb37fa76aa3ed1ff33e8e39f0b9c7a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ibETH-icon.png\",\"name\":\"Interest Bearing ETH\",\"symbol\":\"ibETH\"},{\"address\":\"0x30647a72dc82d7fbb1123ea74716ab8a317eac19\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/imUSD-icon.png\",\"name\":\"Interest bearing mUSD\",\"symbol\":\"imUSD\"},{\"address\":\"0xd36932143f6ebdedd872d5fb0651f4b72fd15a84\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mAAPL-icon.png\",\"name\":\"Wrapped Mirror AAPL Token\",\"symbol\":\"mAAPL\"},{\"address\":\"0x0cae9e4d663793c2a2a0b211c1cf4bbca2b9caa7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mAMZN-icon.png\",\"name\":\"Wrapped Mirror AMZN Token\",\"symbol\":\"mAMZN\"},{\"address\":\"0x56aa298a19c93c6801fdde870fa63ef75cc0af72\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mBABA-icon.png\",\"name\":\"Wrapped Mirror BABA Token\",\"symbol\":\"mBABA\"},{\"address\":\"0x59a921db27dd6d4d974745b7ffc5c33932653442\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mGOOGL-icon.png\",\"name\":\"Wrapped Mirror GOOGL Token\",\"symbol\":\"mGOOGL\"},{\"address\":\"0x1d350417d9787e000cc1b95d70e9536dcd91f373\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mIAU-icon.png\",\"name\":\"Wrapped Mirror IAU Token\",\"symbol\":\"mIAU\"},{\"address\":\"0x41bbedd7286daab5910a1f15d12cbda839852bd7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mMSFT-icon.png\",\"name\":\"Wrapped Mirror MSFT Token\",\"symbol\":\"mMSFT\"},{\"address\":\"0xc8d674114bac90148d11d3c1d33c61835a0f9dcd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mNFLX-icon.png\",\"name\":\"Wrapped Mirror NFLX Token\",\"symbol\":\"mNFLX\"},{\"address\":\"0x13b02c8de71680e71f0820c996e4be43c2f57d15\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mQQQ-icon.png\",\"name\":\"Wrapped Mirror QQQ Token\",\"symbol\":\"mQQQ\"},{\"address\":\"0x9d1555d8cb3c846bb4f7d5b1b1080872c3166676\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mSLV-icon.png\",\"name\":\"Wrapped Mirror SLV Token\",\"symbol\":\"mSLV\"},{\"address\":\"0x21ca39943e91d704678f5d00b6616650f066fd63\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mTSLA-icon.png\",\"name\":\"Wrapped Mirror TSLA Token\",\"symbol\":\"mTSLA\"},{\"address\":\"0xedb0414627e6f1e3f082de65cd4f9c693d78cca9\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mTWTR-icon.png\",\"name\":\"Wrapped Mirror TWTR Token\",\"symbol\":\"mTWTR\"},{\"address\":\"0xe2f2a5c287993345a840db3b0845fbc70f5935a5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mUSD-icon.png\",\"name\":\"mStable USD\",\"symbol\":\"mUSD\"},{\"address\":\"0x1aef73d49dedc4b1778d0706583995958dc862e6\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mUSDCurve-icon.png\",\"name\":\"Curve.fi MUSD/3Crv\",\"symbol\":\"mUSDCurve\"},{\"address\":\"0xf72fcd9dcf0190923fadd44811e240ef4533fc86\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/mVIXY-icon.png\",\"name\":\"Wrapped Mirror VIXY Token\",\"symbol\":\"mVIXY\"},{\"address\":\"0x8064d9ae6cdf087b1bcd5bdf3531bd5d8c537a68\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/oBTC-icon.png\",\"name\":\"BoringDAO BTC\",\"symbol\":\"oBTC\"},{\"address\":\"0x5228a22e72ccc52d415ecfd199f99d0665e7733b\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/pBTC-icon.png\",\"name\":\"pTokens BTC\",\"symbol\":\"pBTC\"},{\"address\":\"0xa8b12cc90abf65191532a12bb5394a714a46d358\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/pBTC35A-icon.png\",\"name\":\"POW BTC-35W/T\",\"symbol\":\"pBTC35A\"},{\"address\":\"0x47c0ad2ae6c0ed4bcf7bc5b380d7205e89436e84\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/rHEGIC-icon.png\",\"name\":\"HEGICTokenIOU\",\"symbol\":\"rHEGIC\"},{\"address\":\"0xad7ca17e23f13982796d27d1e6406366def6ee5f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/rHEGIC2-icon.png\",\"name\":\"HEGICTokenIOU Phase II\",\"symbol\":\"rHEGIC2\"},{\"address\":\"0x459086f2376525bdceba5bdda135e4e9d3fef5bf\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/renBCH-icon.png\",\"name\":\"renBCH\",\"symbol\":\"renBCH\"},{\"address\":\"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/renBTC-icon.png\",\"name\":\"renBTC\",\"symbol\":\"renBTC\"},{\"address\":\"0x49849c98ae39fff122806c06791fa73784fb3675\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/renBTCCurve-icon.png\",\"name\":\"LP renBTC Curve\",\"symbol\":\"renBTCCurve\"},{\"address\":\"0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/renFIL-icon.png\",\"name\":\"renFIL\",\"symbol\":\"renFIL\"},{\"address\":\"0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2\",\"chainId\":1,\"decimals\":8,\"logoURI\":\"https://zapper.fi/images/renZEC-icon.png\",\"name\":\"renZEC\",\"symbol\":\"renZEC\"},{\"address\":\"0x17628a557d1fc88d1c35989dcbac3f3e275e2d2b\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/sBTC-icon.png\",\"name\":\"sBTC\",\"symbol\":\"sBTC\"},{\"address\":\"0x075b1bb99792c9e1041ba13afef80c91a1e70fb3\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/sBTCCurve-icon.png\",\"name\":\"LP sBTC Curve\",\"symbol\":\"sBTCCurve\"},{\"address\":\"0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/sETH-icon.png\",\"name\":\"sETH\",\"symbol\":\"sETH\"},{\"address\":\"0xd71ecff9342a5ced620049e616c5035f1db98620\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/sEUR-icon.png\",\"name\":\"Synth sEUR\",\"symbol\":\"sEUR\"},{\"address\":\"0x57ab1ec28d129707052df4df418d58a2d46d5f51\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/sUSD-icon.png\",\"name\":\"sUSD\",\"symbol\":\"sUSD\"},{\"address\":\"0xc25a3a3b969415c80451098fa907ec722572917f\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/sUSDCurve-icon.png\",\"name\":\"LP-sCurve\",\"symbol\":\"sUSDCurve\"},{\"address\":\"0x261efcdd24cea98652b9700800a13dfbca4103ff\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/sXAU-icon.png\",\"name\":\"sXAU\",\"symbol\":\"sXAU\"},{\"address\":\"0xae7ab96520de3a18e5e111b5eaab095312d7fe84\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/stETH-icon.png\",\"name\":\"Liquid staked Ether 2.0\",\"symbol\":\"stETH\"},{\"address\":\"0x06325440d014e39736583c165c2963ba99faf14e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/stETHCurve-icon.png\",\"name\":\"Curve.fi ETH/stETH\",\"symbol\":\"stETHCurve\"},{\"address\":\"0x8daebade922df735c38c80c7ebd708af50815faa\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/tBTC-icon.png\",\"name\":\"tBTC\",\"symbol\":\"tBTC\"},{\"address\":\"0x64eda51d3ad40d56b9dfc5554e06f94e1dd786fd\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/tBTCCurve-icon.png\",\"name\":\"tBTC Curve\",\"symbol\":\"tBTCCurve\"},{\"address\":\"0x898bad2774eb97cf6b94605677f43b41871410b1\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/vETH2-icon.png\",\"name\":\"validator-Eth2\",\"symbol\":\"vETH2\"},{\"address\":\"0xe452e6ea2ddeb012e20db73bf5d3863a3ac8d77a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/wCELO-icon.png\",\"name\":\"Wrapped Celo\",\"symbol\":\"wCELO\"},{\"address\":\"0x4185cf99745b2a20727b37ee798193dd4a56cdfa\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/wCOINBASE-IOU-icon.png\",\"name\":\"DEUS Synthetic Coinbase IOU\",\"symbol\":\"wCOINBASE-IOU\"},{\"address\":\"0xa0afaa285ce85974c3c881256cb7f225e3a1178a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/wCRES-icon.png\",\"name\":\"Wrapped CRES\",\"symbol\":\"wCRES\"},{\"address\":\"0x0d438f3b5175bebc262bf23753c1e53d03432bde\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/wNXM-icon.png\",\"name\":\"Wrapped NXM\",\"symbol\":\"wNXM\"},{\"address\":\"0xacd43e627e64355f1861cec6d3a6688b31a6f952\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/yDAI-icon.png\",\"name\":\"yDAI\",\"symbol\":\"yDAI\"},{\"address\":\"0xe1237aa7f535b0cc33fd973d66cbf830354d16c7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/yETH-icon.png\",\"name\":\"yETH\",\"symbol\":\"yETH\"},{\"address\":\"0x173f8ee61c0fe712cae2a2fc8d5c0ccdda57e6da\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ySNOW-icon.png\",\"name\":\"SnowSwap ySNOW\",\"symbol\":\"ySNOW\"},{\"address\":\"0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/yTUSD-icon.png\",\"name\":\"yTUSD\",\"symbol\":\"yTUSD\"},{\"address\":\"0x5dbcf33d8c2e976c6b560249878e6f1491bca25c\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/yUSD-icon.png\",\"name\":\"yUSD\",\"symbol\":\"yUSD\"},{\"address\":\"0xb2fdd60ad80ca7ba89b9bab3b5336c2601c020b4\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/yUSD-OCT20-icon.png\",\"name\":\"yUSD Synthetic Token Expiring 1 October \",\"symbol\":\"yUSD-OCT20\"},{\"address\":\"0x81ab848898b5ffd3354dbbefb333d5d183eedcb5\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/yUSD-SEP20-icon.png\",\"name\":\"yUSD Synthetic Token Expiring 1 Septembe\",\"symbol\":\"yUSD-SEP20\"},{\"address\":\"0x597ad1e0c13bfe8025993d9e79c69e1c0233522e\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/yUSDC-icon.png\",\"name\":\"yUSDC\",\"symbol\":\"yUSDC\"},{\"address\":\"0x2f08119c6f07c006695e079aafc638b8789faf18\",\"chainId\":1,\"decimals\":6,\"logoURI\":\"https://zapper.fi/images/yUSDT-icon.png\",\"name\":\"yUSDT\",\"symbol\":\"yUSDT\"},{\"address\":\"0x2994529c0652d127b7842094103715ec5299bbed\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ybCRV-icon.png\",\"name\":\"ybCRV\",\"symbol\":\"ybCRV\"},{\"address\":\"0x078b728243b975d1a284666c30b30530a8c087fe\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/ycrvSNOW-icon.png\",\"name\":\"SnowSwap ycrvSNOW\",\"symbol\":\"ycrvSNOW\"},{\"address\":\"0x837010619aeb2ae24141605afc8f66577f6fb2e7\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/zHEGIC-icon.png\",\"name\":\"zHEGIC\",\"symbol\":\"zHEGIC\"},{\"address\":\"0xa8e7ad77c60ee6f30bac54e2e7c0617bd7b5a03e\",\"chainId\":1,\"decimals\":18,\"logoURI\":\"https://zapper.fi/images/zLOT-icon.png\",\"name\":\"zLOT\",\"symbol\":\"zLOT\"}],\"version\":{\"major\":9,\"minor\":25,\"patch\":0}}");
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "znQw":
    /*!********************************************!*\
      !*** ./src/app/sender/sender.component.ts ***!
      \********************************************/

    /*! exports provided: SenderComponent */

    /***/
    function znQw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SenderComponent", function () {
        return SenderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wallet.service */
      "jiVP");
      /* harmony import */


      var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contract.service */
      "aPik");
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../constants.service */
      "IKM7");
      /* harmony import */


      var _utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils.service */
      "7S5c");

      var SenderComponent = /*#__PURE__*/function () {
        function SenderComponent(wallet, contract, constants, utils) {
          _classCallCheck(this, SenderComponent);

          this.wallet = wallet;
          this.contract = contract;
          this.constants = constants;
          this.utils = utils;
          this.resetData();
        }

        _createClass(SenderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            if (this.wallet.connected) {
              this.loadData();
            }

            this.wallet.connectedEvent.subscribe(function () {
              _this27.loadData();
            });
            this.wallet.errorEvent.subscribe(function () {
              _this27.resetData();
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.rewardAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);
          }
        }, {
          key: "loadData",
          value: function loadData() {}
        }, {
          key: "parseData",
          value: function parseData(decimals, erc721Data) {
            var args = erc721Data.split("\n");
            var erc721s = [];
            var erc721IDs = [];
            var erc20Amounts = [];

            var _iterator10 = _createForOfIteratorHelper(args),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var triple = _step10.value;
                var t = triple.trim().split(",");
                erc721s.push(t[0]);
                var id = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(t[1]);
                erc721IDs.push(id);
                var tokenAmt = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(t[2]).times(Math.pow(10, decimals)).integerValue().toFixed();
                erc20Amounts.push(tokenAmt);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            return [erc721s, erc721IDs, erc20Amounts];
          }
        }, {
          key: "sendRewards",
          value: function sendRewards(erc20Address, decimals, erc721Data) {
            var args = this.parseData(decimals, erc721Data);
            var numTokensToSend = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);

            var _iterator11 = _createForOfIteratorHelper(args[2]),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var a = _step11.value;
                numTokensToSend = numTokensToSend.plus(a);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            var func = this.contract.NFT_SENDER.methods.sendRewards(args[0], args[1], erc20Address, args[2]);
            var gasLimit = 33000 * args[2].length + 50000;
            this.wallet.sendTxWithToken(func, this.contract.ERC20(erc20Address), this.constants.NFT_SENDER_ADDRESS, numTokensToSend, gasLimit, function () {}, function () {}, function () {});
          }
        }, {
          key: "setRewards",
          value: function setRewards(erc20Address, decimals, erc721Data) {
            var args = this.parseData(decimals, erc721Data);
            var numTokensToSend = new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(0);

            var _iterator12 = _createForOfIteratorHelper(args[2]),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var a = _step12.value;
                numTokensToSend = numTokensToSend.plus(a);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            var func = this.contract.NFT_SENDER.methods.setRewards(args[0], args[1], erc20Address, args[2]);
            var gasLimit = 12000 * args[2].length + 80000;
            this.wallet.sendTxWithToken(func, this.contract.ERC20(erc20Address), this.constants.NFT_SENDER_ADDRESS, numTokensToSend, gasLimit, function () {}, function () {}, function () {});
          }
        }, {
          key: "takeRewards",
          value: function takeRewards(erc721Address, tokenID, erc20Address) {
            var _this28 = this;

            var func = this.contract.NFT_SENDER.methods.takeRewards(erc721Address, tokenID, erc20Address);
            this.wallet.sendTx(func, function () {}, function () {
              _this28.loadData();
            }, function () {});
          }
        }, {
          key: "checkRewards",
          value: function checkRewards(erc721Address, tokenID, erc20Address) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a;
                      _context30.next = 3;
                      return this.contract.NFT_SENDER.methods.rewards(erc721Address, tokenID, erc20Address).call();

                    case 3:
                      _context30.t1 = _context30.sent;
                      this.rewardAmount = new _context30.t0(_context30.t1).div(this.constants.PRECISION);

                    case 5:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }]);

        return SenderComponent;
      }();

      SenderComponent.ɵfac = function SenderComponent_Factory(t) {
        return new (t || SenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]));
      };

      SenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SenderComponent,
        selectors: [["app-sender"]],
        decls: 106,
        vars: 1,
        consts: [[1, "container"], ["href", "https://etherscan.io/address/0x006DD6C488E90180D7346DB5a026fd747Af3B218"], [1, "sender"], [1, "header", "cursed-text"], [1, "sub-heading"], ["type", "text", "placeholder", "0x3aada3e213abf8529606924d8d1c55cbdc70bf74"], ["erc20", ""], ["type", "text", "value", "18", 1, "decimals"], ["decimals", ""], ["placeholder", "0x0427743DF720801825a5c82e0582B1E915E0F750, 0, 1,\n0x0427743DF720801825a5c82e0582B1E915E0F750, 1, 10,\n0xf3e778f839934fc819cfa1040aabacecba01e049, 3, 0.5,\n      "], ["erc721", ""], [3, "click"], [1, "setter"], ["erc20_2", ""], ["decimals_2", ""], ["erc721_2", ""], [1, "taker"], ["type", "text", "placeholder", "0x0427743DF720801825a5c82e0582B1E915E0F750"], ["erc721_3", ""], ["type", "text", "placeholder", "1"], ["erc721_id", ""], ["erc20_3", ""], [1, "reward"], [1, "claim-rewards", 3, "click"]],
        template: function SenderComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Two free ERC-20 senders for the NFT community. Only pay gas fees. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Etherscan");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " for contract. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Donations to pay for future deployments appreciated: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "xmon.eth");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Send Rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Immediately send ERC-20 tokens to holders of various ERC-721 tokens in three steps. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Input ERC-20 address.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Input list of ERC-721 addresses and token IDs.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Approve the contract to spend your tokens, and then send the transaction.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "ERC-20 Address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Decimals: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "ERC-721 Address, ID, and ERC-20 amount:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "textarea", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SenderComponent_Template_button_click_38_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);

              return ctx.sendRewards(_r0.value, _r1.value, _r2.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Send Tokens");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Set Rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Set ERC-20 tokens to holders of various ERC-721 tokens. Holders can then claim at their own leisure. Four steps: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Input ERC-20 address.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Input list of ERC-721 addresses and token IDs.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Approve the contract to spend your tokens, and then send the transaction.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Holders input the ERC-721 address and ERC-20 address below in Claim Rewards and send the transaction.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "ERC-20 Address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 5, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Decimals: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 7, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "ERC-721 Address, ID, and ERC-20 amount:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "textarea", 9, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SenderComponent_Template_button_click_68_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](66);

              return ctx.setRewards(_r3.value, _r4.value, _r5.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Set Tokens");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Claim Rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Claim ERC-20 rewards set to ERC-721 NFTs that you hold: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Input ERC-721 address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Input token ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Input ERC-20 address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Send the transaction to claim rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "ERC-721 Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "ERC-721 Token ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "ERC-20 Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 5, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SenderComponent_Template_button_click_102_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](88);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](93);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](98);

              return ctx.checkRewards(_r6.value, _r7.value, _r8.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Check Rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SenderComponent_Template_button_click_104_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](88);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](93);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](98);

              return ctx.takeRewards(_r6.value, _r7.value, _r8.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Claim Rewards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.rewardAmount.toFormat(8), " tokens ");
          }
        },
        styles: [".sender[_ngcontent-%COMP%], .setter[_ngcontent-%COMP%], .taker[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  margin-top: 3rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.sub-heading[_ngcontent-%COMP%] {\n  color: var(--light-green);\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.decimals[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\n.reward[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: white;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.claim-rewards[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  background-color : var(--black) !important; \n  color: white !important;\n  outline: none;\n  border: 2px solid var(--gray);\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 50rem;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 10rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color:var(--med-green);\n  font-weight: bold;\n  font-family: 'Courier New', Courier, monospace;\n}\n\n@media only screen and (max-width: 768px) {\n  .claim-rewards[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: unset;\n    margin-top: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZGVyL3NlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VuZGVyL3NlbmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbmRlciwgLnNldHRlciwgLnRha2VyIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnN1Yi1oZWFkaW5nIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZGVjaW1hbHMge1xuICB3aWR0aDogNXJlbTtcbn1cblxuLnJld2FyZCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY2xhaW0tcmV3YXJkcyB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tYmxhY2spICFpbXBvcnRhbnQ7IFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheSk7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMTByZW07XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOnZhcigtLW1lZC1ncmVlbik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jbGFpbS1yZXdhcmRzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SenderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-sender',
            templateUrl: './sender.component.html',
            styleUrls: ['./sender.component.css']
          }]
        }], function () {
          return [{
            type: _wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]
          }, {
            type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]
          }, {
            type: _constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]
          }, {
            type: _utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zpkQ":
    /*!****************************************!*\
      !*** ./src/assets/abi/MonSpawner.json ***!
      \****************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, default */

    /***/
    function zpkQ(module) {
      module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"xmonAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"monMinterAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"SPAWNER_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"extraDelay\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"hasSpawned\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initialDelay\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxMons\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"monMinter\",\"outputs\":[{\"internalType\":\"contract IMonMinter\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"monUnlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"numTokens\",\"type\":\"uint256\"}],\"name\":\"moveTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"numMons\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"prefixURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"setExtraDelay\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"d\",\"type\":\"uint256\"}],\"name\":\"setInitialDelay\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"m\",\"type\":\"uint256\"}],\"name\":\"setMaxMons\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"blockNum\",\"type\":\"uint256\"}],\"name\":\"setMonUnlock\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"prefix\",\"type\":\"string\"}],\"name\":\"setPrefixURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"f\",\"type\":\"uint256\"}],\"name\":\"setSpawnFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setSpawnerAdminRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"spawnFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"mon1Id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"mon2Id\",\"type\":\"uint256\"}],\"name\":\"spawnNewMon\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"updateNumMons\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"xmon\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map