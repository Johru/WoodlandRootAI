"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/AI/new",{

/***/ "./pages/AI/new.tsx":
/*!**************************!*\
  !*** ./pages/AI/new.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateNewAI; }\n/* harmony export */ });\n/* harmony import */ var C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _contexts_SidebarContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/SidebarContext */ \"./contexts/SidebarContext.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\johru\\\\programming\\\\woodlandai\\\\pages\\\\AI\\\\new.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\nfunction CreateNewAI() {\n  _s();\n\n  var _useSidebar = (0,_contexts_SidebarContext__WEBPACK_IMPORTED_MODULE_4__.useSidebar)(),\n      toggleSidebar = _useSidebar.toggleSidebar;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    toggleSidebar('AISidebar');\n  }, [toggleSidebar]);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    faction: 'cats',\n    leader: 'defaultLeader',\n    placeholder_boolean: false,\n    placeholder_number1: 0,\n    placeholder_number2: 0,\n    user_id: 1\n  }),\n      formData = _useState2[0],\n      setFormData = _useState2[1];\n\n  var handleChange = function handleChange(event) {\n    var target = event.target;\n    var value = target.type === 'checkbox' ? target.checked : target.value;\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, target.name, value)));\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = (0,C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {\n      var response, serverError;\n      return C_Users_johru_programming_woodlandai_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('https://app.tabidoo.cloud/api/v2/apps/woodlandai/tables/ai_profiles/data', {\n                fields: _objectSpread(_objectSpread({}, formData), {}, {\n                  placeholder_number1: Number(formData.placeholder_number1),\n                  placeholder_number2: Number(formData.placeholder_number2)\n                })\n              }, {\n                headers: {\n                  Authorization: \"Bearer \".concat(\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDYzN2IwNy01NDNhLTRjMTYtYmNiMS1hMjU1MTU1MGM5YTYiLCJ1bmlxdWVfbmFtZSI6ImpvaHJ1emFAZ21haWwuY29tIiwicHVycG9zZSI6IkFQSVRva2VuIiwiYXBpVG9rZW5JZCI6ImU3OGMyMzJkLWNkMjgtNDY4NC1hYmM4LTYwOTAxM2YwMzc0MSIsIm5iZiI6MTY4NTk2MTkwOSwiZXhwIjo0ODQxNjM1NTA5LCJpYXQiOjE2ODU5NjE5MDl9.bKRjdGyHQ7wMK4hlBJeGN4iWpNhcJgE0V0A1T7WxEq0\")\n                }\n              });\n\n            case 4:\n              response = _context.sent;\n              setError('');\n              console.log(response.data);\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n\n              if (axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].isAxiosError(_context.t0)) {\n                serverError = _context.t0;\n\n                if (serverError && serverError.response) {\n                  if (typeof serverError.response.data === 'object' && serverError.response.data !== null) {\n                    console.error(serverError.response.data);\n                    setError(serverError.response.data.message || 'Unknown server error');\n                  } else {\n                    setError('Unknown server error');\n                  }\n                }\n              } else if (_context.t0 instanceof Error) {\n                console.error(_context.t0.message);\n                setError(_context.t0.message);\n              } else {\n                console.error(_context.t0);\n                setError('An unknown error occurred');\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n      children: \" New bot \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"formbox\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"label\", {\n          htmlFor: \"faction\",\n          children: \"Faction\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"select\", {\n          name: \"faction\",\n          value: formData.faction,\n          onChange: handleChange,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n            value: \"cats\",\n            children: \"Cats\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n            value: \"birds\",\n            children: \"Birds\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"label\", {\n          htmlFor: \"placeholder_boolean\",\n          children: \"Placeholder_boolean\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n          type: \"checkbox\",\n          name: \"placeholder_boolean\",\n          checked: formData.placeholder_boolean,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"label\", {\n          htmlFor: \"placeholder_number1\",\n          children: \"Placeholder_number1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n          type: \"number\",\n          name: \"placeholder_number1\",\n          value: formData.placeholder_number1,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"label\", {\n          htmlFor: \"placeholder_number2\",\n          children: \"Placeholder_number2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n          type: \"number\",\n          name: \"placeholder_number2\",\n          value: formData.placeholder_number2,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"label\", {\n          htmlFor: \"leader\",\n          children: \"Leader\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"leader\",\n          value: formData.leader,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CreateNewAI, \"yHUagC0fJMpfAHfWA2AlUmO6Isk=\", false, function () {\n  return [_contexts_SidebarContext__WEBPACK_IMPORTED_MODULE_4__.useSidebar];\n});\n\n_c = CreateNewAI;\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateNewAI\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFIbEI7VUFJRSxRQUFRLEVBQUVLO1FBSlo7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQXBCRixlQTJCRTtVQUFPLE9BQU8sRUFBQyxxQkFBZjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQTNCRixlQTRCRTtVQUNFLElBQUksRUFBQyxRQURQO1VBRUUsSUFBSSxFQUFDLHFCQUZQO1VBR0UsS0FBSyxFQUFFRixRQUFRLENBQUNGLG1CQUhsQjtVQUlFLFFBQVEsRUFBRUk7UUFKWjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBNUJGLGVBbUNFO1VBQU8sT0FBTyxFQUFDLFFBQWY7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFuQ0YsZUFvQ0U7VUFDRSxJQUFJLEVBQUMsTUFEUDtVQUVFLElBQUksRUFBQyxRQUZQO1VBR0UsS0FBSyxFQUFFRixRQUFRLENBQUNMLE1BSGxCO1VBSUUsUUFBUSxFQUFFTztRQUpaO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFwQ0YsZUEwQ0U7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQTFDRixlQTJDRTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQTNDRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRkYsZUFrREU7TUFBQSxVQUFJVjtJQUFKO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFsREY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFzREQ7O0dBekl1QkY7VUFDSUQ7OztLQURKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BSS9uZXcudHN4PzZjYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2lkZWJhciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1NpZGViYXJDb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZU5ld0FJKCkge1xyXG4gIGNvbnN0IHsgdG9nZ2xlU2lkZWJhciB9ID0gdXNlU2lkZWJhcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdG9nZ2xlU2lkZWJhcignQUlTaWRlYmFyJyk7XHJcbiAgfSwgW3RvZ2dsZVNpZGViYXJdKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgaW50ZXJmYWNlIEZvcm1EYXRhIHtcclxuICAgIGZhY3Rpb246IHN0cmluZztcclxuICAgIGxlYWRlcjogc3RyaW5nO1xyXG4gICAgcGxhY2Vob2xkZXJfYm9vbGVhbjogYm9vbGVhbjtcclxuICAgIHBsYWNlaG9sZGVyX251bWJlcjE6IG51bWJlcjtcclxuICAgIHBsYWNlaG9sZGVyX251bWJlcjI6IG51bWJlcjtcclxuICAgIHVzZXJfaWQ6IG51bWJlcjtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcclxuICAgIGZhY3Rpb246ICdjYXRzJyxcclxuICAgIGxlYWRlcjogJ2RlZmF1bHRMZWFkZXInLFxyXG4gICAgcGxhY2Vob2xkZXJfYm9vbGVhbjogZmFsc2UsXHJcbiAgICBwbGFjZWhvbGRlcl9udW1iZXIxOiAwLFxyXG4gICAgcGxhY2Vob2xkZXJfbnVtYmVyMjogMCxcclxuICAgIHVzZXJfaWQ6IDEsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcclxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFt0YXJnZXQubmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICdodHRwczovL2FwcC50YWJpZG9vLmNsb3VkL2FwaS92Mi9hcHBzL3dvb2RsYW5kYWkvdGFibGVzL2FpX3Byb2ZpbGVzL2RhdGEnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJfbnVtYmVyMTogTnVtYmVyKGZvcm1EYXRhLnBsYWNlaG9sZGVyX251bWJlcjEpLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcl9udW1iZXIyOiBOdW1iZXIoZm9ybURhdGEucGxhY2Vob2xkZXJfbnVtYmVyMiksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREJfSldUfWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgc2V0RXJyb3IoJycpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XHJcbiAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmVyRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG4gICAgICAgIGlmIChzZXJ2ZXJFcnJvciAmJiBzZXJ2ZXJFcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2Ygc2VydmVyRXJyb3IucmVzcG9uc2UuZGF0YSA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgICAgICAgc2VydmVyRXJyb3IucmVzcG9uc2UuZGF0YSAhPT0gbnVsbFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc2VydmVyRXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldEVycm9yKFxyXG4gICAgICAgICAgICAgIChzZXJ2ZXJFcnJvci5yZXNwb25zZS5kYXRhIGFzIHsgbWVzc2FnZT86IHN0cmluZyB9KS5tZXNzYWdlIHx8XHJcbiAgICAgICAgICAgICAgICAnVW5rbm93biBzZXJ2ZXIgZXJyb3InXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignVW5rbm93biBzZXJ2ZXIgZXJyb3InKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgc2V0RXJyb3IoJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT4gTmV3IGJvdCA8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1ib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmFjdGlvblwiPkZhY3Rpb248L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBuYW1lPVwiZmFjdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5mYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2F0c1wiPkNhdHM8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJpcmRzXCI+QmlyZHM8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGxhY2Vob2xkZXJfYm9vbGVhblwiPlBsYWNlaG9sZGVyX2Jvb2xlYW48L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwbGFjZWhvbGRlcl9ib29sZWFuXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEucGxhY2Vob2xkZXJfYm9vbGVhbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwbGFjZWhvbGRlcl9udW1iZXIxXCI+UGxhY2Vob2xkZXJfbnVtYmVyMTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwbGFjZWhvbGRlcl9udW1iZXIxXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBsYWNlaG9sZGVyX251bWJlcjF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGxhY2Vob2xkZXJfbnVtYmVyMlwiPlBsYWNlaG9sZGVyX251bWJlcjI8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGxhY2Vob2xkZXJfbnVtYmVyMlwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wbGFjZWhvbGRlcl9udW1iZXIyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxlYWRlclwiPkxlYWRlcjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGVhZGVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmxlYWRlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8cD57ZXJyb3J9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlU2lkZWJhciIsIkNyZWF0ZU5ld0FJIiwidG9nZ2xlU2lkZWJhciIsImVycm9yIiwic2V0RXJyb3IiLCJmYWN0aW9uIiwibGVhZGVyIiwicGxhY2Vob2xkZXJfYm9vbGVhbiIsInBsYWNlaG9sZGVyX251bWJlcjEiLCJwbGFjZWhvbGRlcl9udW1iZXIyIiwidXNlcl9pZCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImNoZWNrZWQiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZmllbGRzIiwiTnVtYmVyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfREJfSldUIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImlzQXhpb3NFcnJvciIsInNlcnZlckVycm9yIiwibWVzc2FnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/AI/new.tsx\n"));

/***/ })

});