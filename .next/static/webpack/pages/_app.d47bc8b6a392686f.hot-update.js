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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\nvar PostCard = function(param) {\n    var post = param.post;\n    var node = post.node;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"bg-white shadow-2xl text-center rounded-2xl p-5 lg:mr-10 mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden h-2/5 rounded-2xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"w-full h-full object-cover\",\n                    src: node.featuredPhoto.url,\n                    alt: node.title\n                }, void 0, false, {\n                    fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold pt-4 pb-8 \",\n                children: node.title\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center gap-2 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-full w-8\",\n                                src: node.author.photo.url,\n                                alt: node.author.name\n                            }, void 0, false, {\n                                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500\",\n                                children: node.author.name\n                            }, void 0, false, {\n                                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCalendarAlt, {\n                                className: \"text-pink-500\"\n                            }, void 0, false, {\n                                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: new Date(node.createdAt).toLocaleString(\"en-us\", {\n                                    month: \"short\",\n                                    day: \"2-digit\",\n                                    year: \"numeric\"\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-700 mt-5\",\n                children: node.excerpt\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {}, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-700 rounded-full px-5 py-4 hover:-translate-y-0.5 transition-all ease-in-out duration-150 cursor-pointer mx-auto font-bold mt-5 text-white\",\n                children: \"Continue Reading\"\n            }, void 0, false, {\n                fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/oussama/Desktop/duh-blog/components/PostCard.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, _this);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFFa0I7QUFNNUMsSUFBTUUsUUFBUSxHQUFHLGdCQUFxQjtRQUFsQkMsSUFBSSxTQUFKQSxJQUFJO0lBQ3ZCLElBQU0sSUFBTSxHQUFLQSxJQUFJLENBQWJDLElBQUk7SUFDWixxQkFDQyw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOzswQkFDbEYsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxtQ0FBbUM7MEJBQ2pELDRFQUFDRSxLQUFHO29CQUNIRixTQUFTLEVBQUMsNEJBQTRCO29CQUN0Q0csR0FBRyxFQUFFTCxJQUFJLENBQUNNLGFBQWEsQ0FBQ0MsR0FBRztvQkFDM0JDLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxLQUFLOzs7Ozt5QkFDZDs7Ozs7cUJBQ0c7MEJBQ04sOERBQUNDLElBQUU7Z0JBQUNSLFNBQVMsRUFBQywrQkFBK0I7MEJBQUVGLElBQUksQ0FBQ1MsS0FBSzs7Ozs7cUJBQU07MEJBRS9ELDhEQUFDTixLQUFHO2dCQUFDRCxTQUFTLEVBQUMseUNBQXlDOztrQ0FDdkQsOERBQUNDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyx1REFBdUQ7OzBDQUNyRSw4REFBQ0UsS0FBRztnQ0FBQ0YsU0FBUyxFQUFDLGtCQUFtQjtnQ0FBQ0csR0FBRyxFQUFFTCxJQUFJLENBQUNXLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDTCxHQUFHO2dDQUFHQyxHQUFHLEVBQUVSLElBQUksQ0FBQ1csTUFBTSxDQUFDRSxJQUFJOzs7OztxQ0FBSTswQ0FDekYsOERBQUNDLE1BQUk7Z0NBQUNaLFNBQVMsRUFBQyxlQUFlOzBDQUFFRixJQUFJLENBQUNXLE1BQU0sQ0FBQ0UsSUFBSTs7Ozs7cUNBQVE7Ozs7Ozs2QkFDcEQ7a0NBRU4sOERBQUNWLEtBQUc7d0JBQUNELFNBQVMsRUFBQyx3Q0FBd0M7OzBDQUN0RCw4REFBQ0wseURBQWE7Z0NBQUNLLFNBQVMsRUFBQyxlQUFlOzs7OztxQ0FBRzswQ0FDM0MsOERBQUNZLE1BQUk7MENBQ0gsSUFBSUMsSUFBSSxDQUFDZixJQUFJLENBQUNnQixTQUFTLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQ0FDakRDLEtBQUssRUFBRSxPQUFPO29DQUNkQyxHQUFHLEVBQUUsU0FBUztvQ0FDZEMsSUFBSSxFQUFFLFNBQVM7aUNBQ2YsQ0FBQzs7Ozs7cUNBQ0k7Ozs7Ozs2QkFDRjs7Ozs7O3FCQUNEOzBCQUVOLDhEQUFDQyxHQUFDO2dCQUFDbkIsU0FBUyxFQUFDLG9CQUFxQjswQkFBRUYsSUFBSSxDQUFDc0IsT0FBTzs7Ozs7cUJBQUs7MEJBQ2xELDhEQUFDQyxJQUFJOzs7O3FCQUFROzBCQUNoQiw4REFBQ0MsUUFBTTtnQkFBQ3RCLFNBQVMsRUFBQyxvSkFBb0o7MEJBQUMsa0JBRXZLOzs7OztxQkFBUzs7Ozs7O2FBQ0EsQ0FDVDtDQUNGO0FBdENLSixLQUFBQSxRQUFRO0FBd0NkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC50c3g/NDA1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uL3R5cGluZ3MnO1xuaW1wb3J0IHtGYUNhbGVuZGFyQWx0fSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmludGVyZmFjZSBQcm9wcyB7XG5cdHBvc3Q6IFBvc3Q7XG5cdGtleT86IHN0cmluZztcbn1cblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH06IFByb3BzKSA9PiB7XG5cdGNvbnN0IHsgbm9kZSB9ID0gcG9zdDtcblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctMnhsIHRleHQtY2VudGVyIHJvdW5kZWQtMnhsIHAtNSBsZzptci0xMCBtYi0xMFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gaC0yLzUgcm91bmRlZC0yeGxcIj5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcblx0XHRcdFx0XHRzcmM9e25vZGUuZmVhdHVyZWRQaG90by51cmx9XG5cdFx0XHRcdFx0YWx0PXtub2RlLnRpdGxlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHB0LTQgcGItOCBcIj57bm9kZS50aXRsZX08L2gxPlxuXHRcdFx0ey8qIEFVVEhPUiAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXJcIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsICB3LTgnIHNyYz17bm9kZS5hdXRob3IucGhvdG8udXJsIH0gYWx0PXtub2RlLmF1dGhvci5uYW1lfSAvPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57bm9kZS5hdXRob3IubmFtZX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7LyogQ1JFQVRFRCBBVCAqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuXHRcdFx0XHRcdDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT1cInRleHQtcGluay01MDBcIiAvPlxuXHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0e25ldyBEYXRlKG5vZGUuY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7XG5cdFx0XHRcdFx0XHRcdG1vbnRoOiAnc2hvcnQnLFxuXHRcdFx0XHRcdFx0XHRkYXk6ICcyLWRpZ2l0Jyxcblx0XHRcdFx0XHRcdFx0eWVhcjogJ251bWVyaWMnLFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwICBtdC01XCI+e25vZGUuZXhjZXJwdH08L3A+XG4gICAgICA8TGluaz48L0xpbms+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXBpbmstNzAwIHJvdW5kZWQtZnVsbCBweC01IHB5LTQgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0xNTAgY3Vyc29yLXBvaW50ZXIgbXgtYXV0byBmb250LWJvbGQgbXQtNSB0ZXh0LXdoaXRlXCI+XG5cdFx0XHRcdENvbnRpbnVlIFJlYWRpbmdcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvYXJ0aWNsZT5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmFDYWxlbmRhckFsdCIsIlBvc3RDYXJkIiwicG9zdCIsIm5vZGUiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW1nIiwic3JjIiwiZmVhdHVyZWRQaG90byIsInVybCIsImFsdCIsInRpdGxlIiwiaDEiLCJhdXRob3IiLCJwaG90byIsIm5hbWUiLCJzcGFuIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwicCIsImV4Y2VycHQiLCJMaW5rIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostCard.tsx\n"));

/***/ })

});