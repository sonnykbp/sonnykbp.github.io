webpackHotUpdate_N_E("pages/design",{

/***/ "./components/project-layout.js":
/*!**************************************!*\
  !*** ./components/project-layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sonny.keobounphanh/Documents/sonnykbp.github.io/components/project-layout.js\";\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar ProjectLayout = function ProjectLayout(_ref) {\n  var workType = _ref.workType,\n      projectData = _ref.projectData;\n  var CTA = !workType.includes(\"WEB\") ? 'Watch Video' : workType == 'WEB DESIGN' ? 'Visit Site' : 'Launch';\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }), __jsx(\"section\", {\n    className: \"jsx-4238963942\" + \" \" + \"breadcrumbs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"li\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/design\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 34\n    }\n  }, \"Web Design\")), \"  \\xA0\\xA0/\\xA0\\xA0  \"), __jsx(\"li\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/web-app\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 35\n    }\n  }, \"Web Application\")), \"    \\xA0\\xA0/\\xA0\\xA0  \"), __jsx(\"li\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/motion\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 34\n    }\n  }, \"Motion Graphics\")), \" \"))), __jsx(\"section\", {\n    className: \"jsx-4238963942\" + \" \" + \"sections\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"jsx-4238963942\" + \" \" + \"dash\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \"\\u2014\\u2014\\u2014\\u2014\\u2014\"), \" \", workType), __jsx(\"hr\", {\n    className: \"jsx-4238963942\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), projectData.map(function (_ref2) {\n    var title = _ref2.title,\n        description = _ref2.description,\n        tools = _ref2.tools,\n        img = _ref2.img,\n        link = _ref2.link;\n    return __jsx(\"div\", {\n      key: Math.random(),\n      className: \"jsx-4238963942\" + \" \" + \"wrapper\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"jsx-4238963942\" + \" \" + \"project-img\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: img,\n      alt: title,\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      className: \"jsx-4238963942\" + \" \" + \"project-description\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    }, __jsx(\"h5\", {\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }\n    }, title), __jsx(\"p\", {\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }\n    }, description), __jsx(\"br\", {\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }), __jsx(\"p\", {\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }\n    }, __jsx(\"em\", {\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 20\n      }\n    }, \"(\", tools, \")\")), __jsx(\"br\", {\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      href: link,\n      target: \"_blank\",\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }\n    }, CTA), code_src ? __jsx(\"a\", {\n      href: code_src,\n      target: \"_blank\",\n      className: \"jsx-4238963942\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 33\n      }\n    }, \"Source Code\") : '')));\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"4238963942\",\n    __self: _this\n  }, \".project-description.jsx-4238963942 div.jsx-4238963942{margin-top:30px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb25ueS5rZW9ib3VucGhhbmgvRG9jdW1lbnRzL3Nvbm55a2JwLmdpdGh1Yi5pby9jb21wb25lbnRzL3Byb2plY3QtbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDZ0IsQUFHeUIsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9zb25ueS5rZW9ib3VucGhhbmgvRG9jdW1lbnRzL3Nvbm55a2JwLmdpdGh1Yi5pby9jb21wb25lbnRzL3Byb2plY3QtbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcblxuY29uc3QgUHJvamVjdExheW91dCA9ICh7d29ya1R5cGUsIHByb2plY3REYXRhfSkgPT4ge1xuICAgIGNvbnN0IENUQSA9ICF3b3JrVHlwZS5pbmNsdWRlcyhcIldFQlwiKSA/ICdXYXRjaCBWaWRlbycgOiB3b3JrVHlwZSA9PSAnV0VCIERFU0lHTicgPyAnVmlzaXQgU2l0ZScgOiAnTGF1bmNoJ1xuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYnNcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZGVzaWduXCI+PGE+V2ViIERlc2lnbjwvYT48L0xpbms+ICAmbmJzcDsmbmJzcDsvJm5ic3A7Jm5ic3A7ICA8L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi93ZWItYXBwXCI+PGE+V2ViIEFwcGxpY2F0aW9uPC9hPjwvTGluaz4gICAgJm5ic3A7Jm5ic3A7LyZuYnNwOyZuYnNwOyAgPC9saT5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvbW90aW9uXCI+PGE+TW90aW9uIEdyYXBoaWNzPC9hPjwvTGluaz4gPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbnNcIj5cbiAgICAgIDxoMj48c3BhbiBjbGFzc05hbWU9XCJkYXNoXCI+Jm1kYXNoOyZtZGFzaDsmbWRhc2g7Jm1kYXNoOyZtZGFzaDs8L3NwYW4+IHt3b3JrVHlwZX08L2gyPlxuICAgICAgPGhyLz5cbiAgICAgICAge3Byb2plY3REYXRhLm1hcCgoe3RpdGxlLCBkZXNjcmlwdGlvbiwgdG9vbHMsIGltZywgbGlua30pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWltZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aDU+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxwPjxlbT4oe3Rvb2xzfSk8L2VtPjwvcD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPntDVEF9PC9hPlxuICAgICAgICAgICAgICAgICAgICB7Y29kZV9zcmMgPyA8YSBocmVmPXtjb2RlX3NyY30gdGFyZ2V0PVwiX2JsYW5rXCI+U291cmNlIENvZGU8L2E+IDogJyd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgICAgICAgIFxuICAgICAgICB9KX1cblxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiBkaXYge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGF5b3V0Il19 */\\n/*@ sourceURL=/Users/sonny.keobounphanh/Documents/sonnykbp.github.io/components/project-layout.js */\"));\n};\n\n_c = ProjectLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LWxheW91dC5qcz8wMWRkIl0sIm5hbWVzIjpbIlByb2plY3RMYXlvdXQiLCJ3b3JrVHlwZSIsInByb2plY3REYXRhIiwiQ1RBIiwiaW5jbHVkZXMiLCJtYXAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidG9vbHMiLCJpbWciLCJsaW5rIiwiTWF0aCIsInJhbmRvbSIsImNvZGVfc3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUE2QjtBQUFBLE1BQTNCQyxRQUEyQixRQUEzQkEsUUFBMkI7QUFBQSxNQUFqQkMsV0FBaUIsUUFBakJBLFdBQWlCO0FBQy9DLE1BQU1DLEdBQUcsR0FBRyxDQUFDRixRQUFRLENBQUNHLFFBQVQsQ0FBa0IsS0FBbEIsQ0FBRCxHQUE0QixhQUE1QixHQUE0Q0gsUUFBUSxJQUFJLFlBQVosR0FBMkIsWUFBM0IsR0FBMEMsUUFBbEc7QUFDQSxTQUNBLG1FQUNBLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUE7QUFBQSx3Q0FBbUIsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBckIsQ0FBSiwwQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdEIsQ0FBSiw0QkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBckIsQ0FBSixNQUhGLENBREYsQ0FGQSxFQVVBO0FBQUEsd0NBQW1CLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFBLHdDQUFnQixNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUFKLE9BQXVFQSxRQUF2RSxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHS0MsV0FBVyxDQUFDRyxHQUFaLENBQWdCLGlCQUE0QztBQUFBLFFBQTFDQyxLQUEwQyxTQUExQ0EsS0FBMEM7QUFBQSxRQUFuQ0MsV0FBbUMsU0FBbkNBLFdBQW1DO0FBQUEsUUFBdEJDLEtBQXNCLFNBQXRCQSxLQUFzQjtBQUFBLFFBQWZDLEdBQWUsU0FBZkEsR0FBZTtBQUFBLFFBQVZDLElBQVUsU0FBVkEsSUFBVTtBQUN6RCxXQUNBO0FBQ0ksU0FBRyxFQUFFQyxJQUFJLENBQUNDLE1BQUwsRUFEVDtBQUFBLDBDQUVjLFNBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdJO0FBQUEsMENBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBSyxTQUFHLEVBQUVILEdBQVY7QUFBZSxTQUFHLEVBQUVILEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLENBSEosRUFPSTtBQUFBLDBDQUFlLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsS0FBTCxDQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlDLFdBQUosQ0FGQSxFQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQU1DLEtBQU4sTUFBSCxDQUpBLEVBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEEsRUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLFVBQUksRUFBRUUsSUFBVDtBQUFlLFlBQU0sRUFBQyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NQLEdBQWhDLENBREosRUFFS1UsUUFBUSxHQUFHO0FBQUcsVUFBSSxFQUFFQSxRQUFUO0FBQW1CLFlBQU0sRUFBQyxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUgsR0FBd0QsRUFGckUsQ0FOQSxDQVBKLENBREE7QUFxQkgsR0F0QkEsQ0FITCxDQVZBO0FBQUE7QUFBQTtBQUFBLG81RkFEQTtBQThDSCxDQWhERDs7S0FBTWIsYTtBQWlEU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QtbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcblxuY29uc3QgUHJvamVjdExheW91dCA9ICh7d29ya1R5cGUsIHByb2plY3REYXRhfSkgPT4ge1xuICAgIGNvbnN0IENUQSA9ICF3b3JrVHlwZS5pbmNsdWRlcyhcIldFQlwiKSA/ICdXYXRjaCBWaWRlbycgOiB3b3JrVHlwZSA9PSAnV0VCIERFU0lHTicgPyAnVmlzaXQgU2l0ZScgOiAnTGF1bmNoJ1xuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYnNcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZGVzaWduXCI+PGE+V2ViIERlc2lnbjwvYT48L0xpbms+ICAmbmJzcDsmbmJzcDsvJm5ic3A7Jm5ic3A7ICA8L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi93ZWItYXBwXCI+PGE+V2ViIEFwcGxpY2F0aW9uPC9hPjwvTGluaz4gICAgJm5ic3A7Jm5ic3A7LyZuYnNwOyZuYnNwOyAgPC9saT5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvbW90aW9uXCI+PGE+TW90aW9uIEdyYXBoaWNzPC9hPjwvTGluaz4gPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbnNcIj5cbiAgICAgIDxoMj48c3BhbiBjbGFzc05hbWU9XCJkYXNoXCI+Jm1kYXNoOyZtZGFzaDsmbWRhc2g7Jm1kYXNoOyZtZGFzaDs8L3NwYW4+IHt3b3JrVHlwZX08L2gyPlxuICAgICAgPGhyLz5cbiAgICAgICAge3Byb2plY3REYXRhLm1hcCgoe3RpdGxlLCBkZXNjcmlwdGlvbiwgdG9vbHMsIGltZywgbGlua30pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWltZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aDU+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxwPjxlbT4oe3Rvb2xzfSk8L2VtPjwvcD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPntDVEF9PC9hPlxuICAgICAgICAgICAgICAgICAgICB7Y29kZV9zcmMgPyA8YSBocmVmPXtjb2RlX3NyY30gdGFyZ2V0PVwiX2JsYW5rXCI+U291cmNlIENvZGU8L2E+IDogJyd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgICAgICAgIFxuICAgICAgICB9KX1cblxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiBkaXYge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/project-layout.js\n");

/***/ })

})