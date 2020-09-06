module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sonny.keobounphanh/Documents/sonnykbp.github.io/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst HomePage = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 9\n    }\n  }, \"    \", __jsx(\"header\", {\n    class: \"navbar-fixed-top\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 18\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    class: \"dash\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 11\n    }\n  }, \"\\u2014\\u2014\\u2014\\u2014\\u2014\"), __jsx(\"a\", {\n    href: \"#\",\n    id: \"home-nav\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 72\n    }\n  }, \"SONNY KEOBOUNPHANH\")), __jsx(\"h1\", {\n    class: \"name-mobile\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    id: \"home-nav\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 31\n    }\n  }, \"SONNY KEOBOUNPHANH\")), __jsx(\"nav\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    class: \"nav_bar\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"#about\",\n    id: \"about-nav\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, \"ABOUT\")), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"#work\",\n    id: \"work-nav\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"WORK\")), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"#contact\",\n    id: \"contact-nav\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, \"CONTACT\")))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDdEIsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVM7QUFBUSxTQUFLLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFNLFNBQUssRUFBQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBQUosRUFBaUU7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLE1BQUUsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQWpFLENBRlcsRUFJWDtBQUFJLFNBQUssRUFBQyxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0I7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLE1BQUUsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQXhCLENBSlcsRUFPWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxRQUFSO0FBQWlCLE1BQUUsRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUosQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxPQUFSO0FBQWdCLE1BQUUsRUFBQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUosQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFHLFFBQUksRUFBQyxVQUFSO0FBQW1CLE1BQUUsRUFBQyxhQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUosQ0FIRixDQURGLENBREYsQ0FQVyxDQUFULENBQVA7QUFrQkEsQ0FuQkQ7O0FBcUJlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG5cdHJldHVybiA8ZGl2PiAgICA8aGVhZGVyIGNsYXNzPVwibmF2YmFyLWZpeGVkLXRvcFwiPlxuXG4gICAgICA8aDE+PHNwYW4gY2xhc3M9XCJkYXNoXCI+Jm1kYXNoOyZtZGFzaDsmbWRhc2g7Jm1kYXNoOyZtZGFzaDs8L3NwYW4+PGEgaHJlZj1cIiNcIiBpZD1cImhvbWUtbmF2XCI+U09OTlkgS0VPQk9VTlBIQU5IPC9hPjwvaDE+XG5cbiAgICAgIDxoMSBjbGFzcz1cIm5hbWUtbW9iaWxlXCI+PGEgaHJlZj1cIiNcIiBpZD1cImhvbWUtbmF2XCI+U09OTlkgS0VPQk9VTlBIQU5IPC9hPjwvaDE+XG5cblxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdl9iYXJcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNhYm91dFwiIGlkPVwiYWJvdXQtbmF2XCI+QUJPVVQ8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3dvcmtcIiBpZD1cIndvcmstbmF2XCI+V09SSzwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjY29udGFjdFwiIGlkPVwiY29udGFjdC1uYXZcIj5DT05UQUNUPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgIDwvaGVhZGVyPjwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });