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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\nvar PostCard = function(param) {\n    var post = param.post;\n    var node = post.node;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"bg-white shadow-2xl text-center rounded-2xl p-5 lg:mr-10 mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden h-2/5 rounded-2xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"w-full h-full object-cover\",\n                    src: node.featuredPhoto.url,\n                    alt: node.title\n                }, void 0, false, {\n                    fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold pt-4 pb-8 \",\n                children: node.title\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center gap-2 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-full w-8\",\n                                src: node.author.photo.url,\n                                alt: node.author.name\n                            }, void 0, false, {\n                                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500\",\n                                children: node.author.name\n                            }, void 0, false, {\n                                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCalendarAlt, {\n                                className: \"text-pink-500\"\n                            }, void 0, false, {\n                                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: new Date(node.createdAt).toLocaleString(\"en-us\", {\n                                    month: \"short\",\n                                    day: \"2-digit\",\n                                    year: \"numeric\"\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-700 mt-5\",\n                children: node.excerpt\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                href: node.slug,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-pink-700 rounded-full px-5 py-4 hover:-translate-y-0.5 transition-all ease-in-out duration-150 cursor-pointer mx-auto font-bold mt-5 text-white\",\n                    children: \"Continue Reading\"\n                }, void 0, false, {\n                    fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, _this);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFFa0I7QUFNNUMsSUFBTUUsUUFBUSxHQUFHLGdCQUFxQjtRQUFsQkMsSUFBSSxTQUFKQSxJQUFJO0lBQ3ZCLElBQU0sSUFBTSxHQUFLQSxJQUFJLENBQWJDLElBQUk7SUFDWixxQkFDQyw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOzswQkFDbEYsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxtQ0FBbUM7MEJBQ2pELDRFQUFDRSxLQUFHO29CQUNIRixTQUFTLEVBQUMsNEJBQTRCO29CQUN0Q0csR0FBRyxFQUFFTCxJQUFJLENBQUNNLGFBQWEsQ0FBQ0MsR0FBRztvQkFDM0JDLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxLQUFLOzs7Ozt5QkFDZDs7Ozs7cUJBQ0c7MEJBQ04sOERBQUNDLElBQUU7Z0JBQUNSLFNBQVMsRUFBQywrQkFBK0I7MEJBQUVGLElBQUksQ0FBQ1MsS0FBSzs7Ozs7cUJBQU07MEJBRS9ELDhEQUFDTixLQUFHO2dCQUFDRCxTQUFTLEVBQUMseUNBQXlDOztrQ0FDdkQsOERBQUNDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyx1REFBdUQ7OzBDQUNyRSw4REFBQ0UsS0FBRztnQ0FBQ0YsU0FBUyxFQUFDLGtCQUFtQjtnQ0FBQ0csR0FBRyxFQUFFTCxJQUFJLENBQUNXLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDTCxHQUFHO2dDQUFHQyxHQUFHLEVBQUVSLElBQUksQ0FBQ1csTUFBTSxDQUFDRSxJQUFJOzs7OztxQ0FBSTswQ0FDekYsOERBQUNDLE1BQUk7Z0NBQUNaLFNBQVMsRUFBQyxlQUFlOzBDQUFFRixJQUFJLENBQUNXLE1BQU0sQ0FBQ0UsSUFBSTs7Ozs7cUNBQVE7Ozs7Ozs2QkFDcEQ7a0NBRU4sOERBQUNWLEtBQUc7d0JBQUNELFNBQVMsRUFBQyx3Q0FBd0M7OzBDQUN0RCw4REFBQ0wseURBQWE7Z0NBQUNLLFNBQVMsRUFBQyxlQUFlOzs7OztxQ0FBRzswQ0FDM0MsOERBQUNZLE1BQUk7MENBQ0gsSUFBSUMsSUFBSSxDQUFDZixJQUFJLENBQUNnQixTQUFTLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQ0FDakRDLEtBQUssRUFBRSxPQUFPO29DQUNkQyxHQUFHLEVBQUUsU0FBUztvQ0FDZEMsSUFBSSxFQUFFLFNBQVM7aUNBQ2YsQ0FBQzs7Ozs7cUNBQ0k7Ozs7Ozs2QkFDRjs7Ozs7O3FCQUNEOzBCQUVOLDhEQUFDQyxHQUFDO2dCQUFDbkIsU0FBUyxFQUFDLG9CQUFxQjswQkFBRUYsSUFBSSxDQUFDc0IsT0FBTzs7Ozs7cUJBQUs7MEJBQ2xELDhEQUFDQyxJQUFJO2dCQUFDQyxJQUFJLEVBQUV4QixJQUFJLENBQUN5QixJQUFJOzBCQUNqQiw0RUFBQ0MsUUFBTTtvQkFBQ3hCLFNBQVMsRUFBQyxvSkFBb0o7OEJBQUMsa0JBRXZLOzs7Ozt5QkFBUzs7Ozs7cUJBQ047Ozs7OzthQUNELENBQ1Q7Q0FDRjtBQXZDS0osS0FBQUEsUUFBUTtBQXlDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdENhcmQudHN4PzQwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi90eXBpbmdzJztcbmltcG9ydCB7RmFDYWxlbmRhckFsdH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRwb3N0OiBQb3N0O1xuXHRrZXk/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9OiBQcm9wcykgPT4ge1xuXHRjb25zdCB7IG5vZGUgfSA9IHBvc3Q7XG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LTJ4bCB0ZXh0LWNlbnRlciByb3VuZGVkLTJ4bCBwLTUgbGc6bXItMTAgbWItMTBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGgtMi81IHJvdW5kZWQtMnhsXCI+XG5cdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG5cdFx0XHRcdFx0c3JjPXtub2RlLmZlYXR1cmVkUGhvdG8udXJsfVxuXHRcdFx0XHRcdGFsdD17bm9kZS50aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBwdC00IHBiLTggXCI+e25vZGUudGl0bGV9PC9oMT5cblx0XHRcdHsvKiBBVVRIT1IgKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCAgdy04JyBzcmM9e25vZGUuYXV0aG9yLnBob3RvLnVybCB9IGFsdD17bm9kZS5hdXRob3IubmFtZX0gLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e25vZGUuYXV0aG9yLm5hbWV9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ey8qIENSRUFURUQgQVQgKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cblx0XHRcdFx0XHQ8RmFDYWxlbmRhckFsdCBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwXCIgLz5cblx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdHtuZXcgRGF0ZShub2RlLmNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge1xuXHRcdFx0XHRcdFx0XHRtb250aDogJ3Nob3J0Jyxcblx0XHRcdFx0XHRcdFx0ZGF5OiAnMi1kaWdpdCcsXG5cdFx0XHRcdFx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCAgbXQtNVwiPntub2RlLmV4Y2VycHR9PC9wPlxuICAgICAgPExpbmsgaHJlZj17bm9kZS5zbHVnfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXBpbmstNzAwIHJvdW5kZWQtZnVsbCBweC01IHB5LTQgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0xNTAgY3Vyc29yLXBvaW50ZXIgbXgtYXV0byBmb250LWJvbGQgbXQtNSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBDb250aW51ZSBSZWFkaW5nXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0xpbms+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGYUNhbGVuZGFyQWx0IiwiUG9zdENhcmQiLCJwb3N0Iiwibm9kZSIsImFydGljbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJmZWF0dXJlZFBob3RvIiwidXJsIiwiYWx0IiwidGl0bGUiLCJoMSIsImF1dGhvciIsInBob3RvIiwibmFtZSIsInNwYW4iLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsImRheSIsInllYXIiLCJwIiwiZXhjZXJwdCIsIkxpbmsiLCJocmVmIiwic2x1ZyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostCard.tsx\n"));

/***/ })

});