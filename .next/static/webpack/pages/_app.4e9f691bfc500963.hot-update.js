"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar PostCard = function(param) {\n    var post = param.post;\n    var node = post.node;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"bg-white shadow-2xl rounded-2xl p-5 lg:mr-10 mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden h-2/5 rounded-2xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"w-full h-full object-cover\",\n                    src: node.featuredPhoto.url,\n                    alt: node.title\n                }, void 0, false, {\n                    fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold pt-4 pb-8\",\n                children: node.title\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, _this);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF5QjtBQU96QixJQUFNQyxRQUFRLEdBQUcsZ0JBQWtCO1FBQWhCQyxJQUFJLFNBQUpBLElBQUk7SUFDckIsSUFBTSxJQUFLLEdBQUtBLElBQUksQ0FBYkMsSUFBSTtJQUNYLHFCQUNBLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBQyxvREFBb0Q7OzBCQUN0RSw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLG1DQUFtQzswQkFDakQsNEVBQUNFLEtBQUc7b0JBQ0hGLFNBQVMsRUFBQyw0QkFBNEI7b0JBQ3RDRyxHQUFHLEVBQUVMLElBQUksQ0FBQ00sYUFBYSxDQUFDQyxHQUFHO29CQUMzQkMsR0FBRyxFQUFFUixJQUFJLENBQUNTLEtBQUs7Ozs7O3lCQUNkOzs7OztxQkFDRzswQkFDTiw4REFBQ0MsSUFBRTtnQkFBQ1IsU0FBUyxFQUFDLDhCQUE4QjswQkFBRUYsSUFBSSxDQUFDUyxLQUFLOzs7OztxQkFBTTs7Ozs7O2FBRXJELENBQ1Q7Q0FDRjtBQWZLWCxLQUFBQSxRQUFRO0FBaUJkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdENhcmQudHN4PzQwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL3R5cGluZ3MnXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0OlBvc3RcbiAga2V5PzpzdHJpbmdcbn1cblxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9OlByb3BzKSA9PiB7XG4gIGNvbnN0IHtub2RlIH0gPSBwb3N0XG4gIHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LTJ4bCByb3VuZGVkLTJ4bCBwLTUgbGc6bXItMTAgbWItMTBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGgtMi81IHJvdW5kZWQtMnhsXCI+XG5cdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG5cdFx0XHRcdFx0c3JjPXtub2RlLmZlYXR1cmVkUGhvdG8udXJsfVxuXHRcdFx0XHRcdGFsdD17bm9kZS50aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBwdC00IHBiLThcIj57bm9kZS50aXRsZX08L2gxPlxuICAgICAgey8qICAqL31cblx0XHQ8L2FydGljbGU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwiUG9zdENhcmQiLCJwb3N0Iiwibm9kZSIsImFydGljbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJmZWF0dXJlZFBob3RvIiwidXJsIiwiYWx0IiwidGl0bGUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.tsx\n"));

/***/ })

});