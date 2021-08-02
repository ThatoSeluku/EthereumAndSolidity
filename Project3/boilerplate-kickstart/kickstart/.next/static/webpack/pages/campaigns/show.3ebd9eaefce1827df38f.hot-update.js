self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\Thato\\Desktop\\2021\\Programming\\EthereumAndSolidity\\Project3\\boilerplate-kickstart\\kickstart\\pages\\campaigns\\show.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var CampaignShow = /*#__PURE__*/function (_Component) {
  (0,C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(CampaignShow, _Component);

  var _super = _createSuper(CampaignShow);

  function CampaignShow() {
    (0,C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, CampaignShow);

    return _super.apply(this, arguments);
  }

  (0,C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          balance = _this$props.balance,
          manager = _this$props.manager,
          minimumContribution = _this$props.minimumContribution,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount;
      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to donate money',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution(wei)',
        description: 'You must contribute at least 100 wei in order to become a contributor'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have donated to this campaign'
      }, {
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.utils.fromwei(balance, 'ether'),
        meta: ''
      }];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 12
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: "Campaign Show"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 1
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 1
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {
        var campaign, summary;
        return C_Users_Thato_Desktop_2021_Programming_EthereumAndSolidity_Project3_boilerplate_kickstart_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2ViMyIsInJlbmRlckNhcmRzIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7OztrQ0FjTztBQUFBLHdCQU9ULEtBQUtDLEtBUEk7QUFBQSxVQUViQyxPQUZhLGVBRWJBLE9BRmE7QUFBQSxVQUdiQyxPQUhhLGVBR2JBLE9BSGE7QUFBQSxVQUliQyxtQkFKYSxlQUliQSxtQkFKYTtBQUFBLFVBS2JDLGFBTGEsZUFLYkEsYUFMYTtBQUFBLFVBTWJDLGNBTmEsZUFNYkEsY0FOYTtBQVNiLFVBQU1DLEtBQUssR0FBRyxDQUNkO0FBQ0FDLGNBQU0sRUFBRUwsT0FEUjtBQUVBTSxZQUFJLEVBQUUsb0JBRk47QUFHQUMsbUJBQVcsRUFBRSwyRUFIYjtBQUlBQyxhQUFLLEVBQUU7QUFBQ0Msc0JBQVksRUFBRTtBQUFmO0FBSlAsT0FEYyxFQU9kO0FBQ0lKLGNBQU0sRUFBRUosbUJBRFo7QUFFSUssWUFBSSxFQUFFLDJCQUZWO0FBR0lDLG1CQUFXLEVBQUU7QUFIakIsT0FQYyxFQVlkO0FBQ0FGLGNBQU0sRUFBRUgsYUFEUjtBQUVBSSxZQUFJLEVBQUUsb0JBRk47QUFHQUMsbUJBQVcsRUFBRTtBQUhiLE9BWmMsRUFrQmQ7QUFDQUYsY0FBTSxFQUFFRixjQURSO0FBRUFHLFlBQUksRUFBRSxxQkFGTjtBQUdBQyxtQkFBVyxFQUFFO0FBSGIsT0FsQmMsRUF1QmQ7QUFDSUYsY0FBTSxFQUFFSyxrRUFBQSxDQUFtQlgsT0FBbkIsRUFBNEIsT0FBNUIsQ0FEWjtBQUVJTyxZQUFJLEVBQUM7QUFGVCxPQXZCYyxDQUFkO0FBNkJJLDBCQUFPLDhEQUFDLDBEQUFEO0FBQVksYUFBSyxFQUFFRjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDs7OzZCQUVXO0FBQ0osMEJBQ1IsOERBQUMsdURBQUQ7QUFBQSxnQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxFQUVDLEtBQUtPLFdBQUwsRUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUTtBQU1IOzs7O3diQTdEMkJiLEs7Ozs7OztBQUN6QmMsd0IsR0FBV0MsNERBQVEsQ0FBQ2YsS0FBSyxDQUFDZ0IsS0FBTixDQUFZQyxPQUFiLEM7O3VCQUNKSCxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFOzs7QUFBaEJDLHVCO2lEQUVDO0FBQ0ZsQixxQ0FBbUIsRUFBQ2tCLE9BQU8sQ0FBQyxDQUFELENBRHpCO0FBRUZwQix5QkFBTyxFQUFFb0IsT0FBTyxDQUFDLENBQUQsQ0FGZDtBQUdGakIsK0JBQWEsRUFBRWlCLE9BQU8sQ0FBQyxDQUFELENBSHBCO0FBSUZoQixnQ0FBYyxFQUFFZ0IsT0FBTyxDQUFDLENBQUQsQ0FKckI7QUFLRm5CLHlCQUFPLEVBQUVtQixPQUFPLENBQUMsQ0FBRDtBQUxkLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBTG9CQyw0Qzs7QUFpRTNCLCtEQUFldkIsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy4zZWJkOWVhZWZjZTE4MjdkZjM4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nOyBcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcblxyXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbmNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcblxyXG4gcmV0dXJue1xyXG4gICAgIG1pbmltdW1Db250cmlidXRpb246c3VtbWFyeVswXSxcclxuICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXHJcbiAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxyXG59OyBcclxufVxyXG4gICBcclxucmVuZGVyQ2FyZHMoKXtcclxuY29uc3Qge1xyXG5iYWxhbmNlLFxyXG5tYW5hZ2VyLCBcclxubWluaW11bUNvbnRyaWJ1dGlvbixcclxucmVxdWVzdHNDb3VudCxcclxuYXBwcm92ZXJzQ291bnRcclxufSA9IHRoaXMucHJvcHM7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxue1xyXG5oZWFkZXI6IG1hbmFnZXIsXHJcbm1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLCBcclxuZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gZG9uYXRlIG1vbmV5Jyxcclxuc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cclxufSxcclxue1xyXG4gICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uKHdlaSknLCBcclxuICAgIGRlc2NyaXB0aW9uOiAnWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCAxMDAgd2VpIGluIG9yZGVyIHRvIGJlY29tZSBhIGNvbnRyaWJ1dG9yJ1xyXG59LCBcclxue1xyXG5oZWFkZXI6IHJlcXVlc3RzQ291bnQsXHJcbm1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxyXG5kZXNjcmlwdGlvbjogJ0EgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMnXHJcblxyXG59LFxyXG57XHJcbmhlYWRlcjogYXBwcm92ZXJzQ291bnQsIFxyXG5tZXRhOiAnTnVtYmVyIG9mIEFwcHJvdmVycycsXHJcbmRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ24nXHJcbn0sXHJcbntcclxuICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9td2VpKGJhbGFuY2UsICdldGhlcicpLFxyXG4gICAgbWV0YTonJyBcclxufVxyXG5cclxuICAgIF07XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfS8+O1xyXG59XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG48TGF5b3V0PlxyXG48aDM+Q2FtcGFpZ24gU2hvdzwvaDM+XHJcbnt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7Il0sInNvdXJjZVJvb3QiOiIifQ==