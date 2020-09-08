webpackHotUpdate_N_E("pages/web-app",{

/***/ "./pages/web-app.js":
/*!**************************!*\
  !*** ./pages/web-app.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_project_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project-layout */ \"./components/project-layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sonny.keobounphanh/Documents/sonnykbp.github.io/pages/web-app.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar WebProjects = [{\n  'title': 'WHISK',\n  'description': 'A baking-recipe sharing platform.',\n  'tools': 'RUBY ON RAILS, jQUERY, BOOTSTRAP',\n  'img': '/Whisk.png',\n  'link': 'https://whisk-baking.herokuapp.com/',\n  'code_src': 'https://github.com/sonnykbp/project2'\n}, {\n  'title': 'FETCH!',\n  'description': 'A pet-finder app where pet-owners and pet-sitters find each other.',\n  'tools': 'RUBY ON RAILS, ANGULAR JS, jQUERY, BOOTSTRAP',\n  'img': '/Fetch.png',\n  'link': 'https://sonnykbp.github.io/project-3/#/',\n  'code_src': 'https://github.com/sonnykbp/project-3'\n}, {\n  'title': 'CODE PERFECT',\n  'description': 'A drag and drop, responsive email template building tool.',\n  'tools': 'ASP.NET, jQUERY, BOOTSTRAP',\n  'img': '/code-perfect.png',\n  'link': 'https://www.codeperfect.com/'\n}, {\n  'title': 'PRODUCT FASTLANE',\n  'description': 'A product information management system.',\n  'tools': 'ASP.NET, jQUERY, BOOTSTRAP, SASS/SCSS, BABEL',\n  'img': '/product-fastlane.png',\n  'link': 'https://www.pharossuite.com/product-fastlane-detail/'\n}, {\n  'title': 'PHAROS CRM',\n  'description': 'A customer relationship management tool.',\n  'tools': 'ASP.NET, ANGULAR 2, jQUERY, SASS/SCSS',\n  'img': '/pharos-crm.png',\n  'link': 'https://www.pharossuite.com/pharos-crm-detail'\n}, {\n  'title': 'COVID-19 EMPLOYEE HEALTH SCREENING TOOLKIT',\n  'description': 'An employee health screening solution (health tracking with mobile app, configurable SMS and HIPAA settings, dynamic reporting dashboard).',\n  'tools': 'RUBY ON RAILS 5, REACT 16, REDUX, SASS/SCSS',\n  'img': '/gc-c19.png',\n  'link': 'https://www.gocanvas.com/toolkits/employee-health-screening'\n}, {\n  'title': 'GOCANVAS APP BUILDER',\n  'description': 'A drag-and-drop form builder for the GoCanvas mobile app. A customization tool that offers a variety of field types (text, number, GPS, signature, image capture) and smart fields that pre-populate with customer’s uploaded data.',\n  'tools': 'RUBY ON RAILS 5, ANGULAR, JQUERY',\n  'img': '/gc-c19.png',\n  'link': 'https://www.gocanvas.com/toolkits/employee-health-screening'\n}];\n\nvar WebPage = function WebPage() {\n  return __jsx(_components_project_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    workType: 'WEB APPLICATION',\n    projectData: WebProjects,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  });\n};\n\n_c = WebPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"WebPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2ViLWFwcC5qcz9hODQ5Il0sIm5hbWVzIjpbIldlYlByb2plY3RzIiwiV2ViUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDaEI7QUFDSSxXQUFTLE9BRGI7QUFFSSxpQkFBZSxtQ0FGbkI7QUFHSSxXQUFTLGtDQUhiO0FBSUksU0FBTyxZQUpYO0FBS0ksVUFBUSxxQ0FMWjtBQU1JLGNBQVk7QUFOaEIsQ0FEZ0IsRUFTaEI7QUFDSSxXQUFTLFFBRGI7QUFFSSxpQkFBZSxvRUFGbkI7QUFHSSxXQUFTLDhDQUhiO0FBSUksU0FBTyxZQUpYO0FBS0ksVUFBUSx5Q0FMWjtBQU1JLGNBQVk7QUFOaEIsQ0FUZ0IsRUFpQmhCO0FBQ0ksV0FBUyxjQURiO0FBRUksaUJBQWUsMkRBRm5CO0FBR0ksV0FBUyw0QkFIYjtBQUlJLFNBQU8sbUJBSlg7QUFLSSxVQUFRO0FBTFosQ0FqQmdCLEVBd0JoQjtBQUNJLFdBQVMsa0JBRGI7QUFFSSxpQkFBZSwwQ0FGbkI7QUFHSSxXQUFTLDhDQUhiO0FBSUksU0FBTyx1QkFKWDtBQUtJLFVBQVE7QUFMWixDQXhCZ0IsRUErQmQ7QUFDRSxXQUFTLFlBRFg7QUFFRSxpQkFBZSwwQ0FGakI7QUFHRSxXQUFTLHVDQUhYO0FBSUUsU0FBTyxpQkFKVDtBQUtFLFVBQVE7QUFMVixDQS9CYyxFQXNDZDtBQUNFLFdBQVMsNENBRFg7QUFFRSxpQkFBZSw0SUFGakI7QUFHRSxXQUFTLDZDQUhYO0FBSUUsU0FBTyxhQUpUO0FBS0UsVUFBUTtBQUxWLENBdENjLEVBNkNkO0FBQ0UsV0FBUyxzQkFEWDtBQUVFLGlCQUFlLHFPQUZqQjtBQUdFLFdBQVMsa0NBSFg7QUFJRSxTQUFPLGFBSlQ7QUFLRSxVQUFRO0FBTFYsQ0E3Q2MsQ0FBcEI7O0FBcURBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEIsU0FDQSxNQUFDLGtFQUFEO0FBQWUsWUFBUSxFQUFFLGlCQUF6QjtBQUE0QyxlQUFXLEVBQUVELFdBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQTtBQUdILENBSkQ7O0tBQU1DLE87QUFNU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy93ZWItYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LWxheW91dCdcblxuY29uc3QgV2ViUHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICAndGl0bGUnOiAnV0hJU0snLCBcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgYmFraW5nLXJlY2lwZSBzaGFyaW5nIHBsYXRmb3JtLicsIFxuICAgICAgICAndG9vbHMnOiAnUlVCWSBPTiBSQUlMUywgalFVRVJZLCBCT09UU1RSQVAnLFxuICAgICAgICAnaW1nJzogJy9XaGlzay5wbmcnLFxuICAgICAgICAnbGluayc6ICdodHRwczovL3doaXNrLWJha2luZy5oZXJva3VhcHAuY29tLycsXG4gICAgICAgICdjb2RlX3NyYyc6ICdodHRwczovL2dpdGh1Yi5jb20vc29ubnlrYnAvcHJvamVjdDInLFxuICAgIH0sXG4gICAge1xuICAgICAgICAndGl0bGUnOiAnRkVUQ0ghJywgXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBIHBldC1maW5kZXIgYXBwIHdoZXJlIHBldC1vd25lcnMgYW5kIHBldC1zaXR0ZXJzIGZpbmQgZWFjaCBvdGhlci4nLCBcbiAgICAgICAgJ3Rvb2xzJzogJ1JVQlkgT04gUkFJTFMsIEFOR1VMQVIgSlMsIGpRVUVSWSwgQk9PVFNUUkFQJyxcbiAgICAgICAgJ2ltZyc6ICcvRmV0Y2gucG5nJyxcbiAgICAgICAgJ2xpbmsnOiAnaHR0cHM6Ly9zb25ueWticC5naXRodWIuaW8vcHJvamVjdC0zLyMvJyxcbiAgICAgICAgJ2NvZGVfc3JjJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zb25ueWticC9wcm9qZWN0LTMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAndGl0bGUnOiAnQ09ERSBQRVJGRUNUJywgXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBIGRyYWcgYW5kIGRyb3AsIHJlc3BvbnNpdmUgZW1haWwgdGVtcGxhdGUgYnVpbGRpbmcgdG9vbC4nLCBcbiAgICAgICAgJ3Rvb2xzJzogJ0FTUC5ORVQsIGpRVUVSWSwgQk9PVFNUUkFQJyxcbiAgICAgICAgJ2ltZyc6ICcvY29kZS1wZXJmZWN0LnBuZycsXG4gICAgICAgICdsaW5rJzogJ2h0dHBzOi8vd3d3LmNvZGVwZXJmZWN0LmNvbS8nLFxuICAgIH0sIFxuICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1BST0RVQ1QgRkFTVExBTkUnLCBcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgcHJvZHVjdCBpbmZvcm1hdGlvbiBtYW5hZ2VtZW50IHN5c3RlbS4nLCBcbiAgICAgICAgJ3Rvb2xzJzogJ0FTUC5ORVQsIGpRVUVSWSwgQk9PVFNUUkFQLCBTQVNTL1NDU1MsIEJBQkVMJyxcbiAgICAgICAgJ2ltZyc6ICcvcHJvZHVjdC1mYXN0bGFuZS5wbmcnLFxuICAgICAgICAnbGluayc6ICdodHRwczovL3d3dy5waGFyb3NzdWl0ZS5jb20vcHJvZHVjdC1mYXN0bGFuZS1kZXRhaWwvJyxcbiAgICB9LCAgICAgICAgICBcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1BIQVJPUyBDUk0nLCBcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgdG9vbC4nLCBcbiAgICAgICAgJ3Rvb2xzJzogJ0FTUC5ORVQsIEFOR1VMQVIgMiwgalFVRVJZLCBTQVNTL1NDU1MnLFxuICAgICAgICAnaW1nJzogJy9waGFyb3MtY3JtLnBuZycsXG4gICAgICAgICdsaW5rJzogJ2h0dHBzOi8vd3d3LnBoYXJvc3N1aXRlLmNvbS9waGFyb3MtY3JtLWRldGFpbCcsXG4gICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0NPVklELTE5IEVNUExPWUVFIEhFQUxUSCBTQ1JFRU5JTkcgVE9PTEtJVCcsIFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQW4gZW1wbG95ZWUgaGVhbHRoIHNjcmVlbmluZyBzb2x1dGlvbiAoaGVhbHRoIHRyYWNraW5nIHdpdGggbW9iaWxlIGFwcCwgY29uZmlndXJhYmxlIFNNUyBhbmQgSElQQUEgc2V0dGluZ3MsIGR5bmFtaWMgcmVwb3J0aW5nIGRhc2hib2FyZCkuJywgXG4gICAgICAgICd0b29scyc6ICdSVUJZIE9OIFJBSUxTIDUsIFJFQUNUIDE2LCBSRURVWCwgU0FTUy9TQ1NTJyxcbiAgICAgICAgJ2ltZyc6ICcvZ2MtYzE5LnBuZycsXG4gICAgICAgICdsaW5rJzogJ2h0dHBzOi8vd3d3LmdvY2FudmFzLmNvbS90b29sa2l0cy9lbXBsb3llZS1oZWFsdGgtc2NyZWVuaW5nJyxcbiAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR09DQU5WQVMgQVBQIEJVSUxERVInLCBcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgZHJhZy1hbmQtZHJvcCBmb3JtIGJ1aWxkZXIgZm9yIHRoZSBHb0NhbnZhcyBtb2JpbGUgYXBwLiBBIGN1c3RvbWl6YXRpb24gdG9vbCB0aGF0IG9mZmVycyBhIHZhcmlldHkgb2YgZmllbGQgdHlwZXMgKHRleHQsIG51bWJlciwgR1BTLCBzaWduYXR1cmUsIGltYWdlIGNhcHR1cmUpIGFuZCBzbWFydCBmaWVsZHMgdGhhdCBwcmUtcG9wdWxhdGUgd2l0aCBjdXN0b21lcuKAmXMgdXBsb2FkZWQgZGF0YS4nLCBcbiAgICAgICAgJ3Rvb2xzJzogJ1JVQlkgT04gUkFJTFMgNSwgQU5HVUxBUiwgSlFVRVJZJyxcbiAgICAgICAgJ2ltZyc6ICcvZ2MtYzE5LnBuZycsXG4gICAgICAgICdsaW5rJzogJ2h0dHBzOi8vd3d3LmdvY2FudmFzLmNvbS90b29sa2l0cy9lbXBsb3llZS1oZWFsdGgtc2NyZWVuaW5nJyxcbiAgICB9LCAgICAgICAgICBcbl1cbmNvbnN0IFdlYlBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8UHJvamVjdExheW91dCB3b3JrVHlwZT17J1dFQiBBUFBMSUNBVElPTid9IHByb2plY3REYXRhPXtXZWJQcm9qZWN0c30gLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYlBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/web-app.js\n");

/***/ })

})