/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/authentification/connexion",{

/***/ "./pages/authentification/connexion.js":
/*!*********************************************!*\
  !*** ./pages/authentification/connexion.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Connect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_header_back_to_home_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header/back_to_home_header */ \"./components/header/back_to_home_header.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/prince/Formation Perso/a-recruit/a-recruit-app/pages/authentification/connexion.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Connect() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      user_email = _useState[0],\n      setUserEmail = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      user_password = _useState2[0],\n      setUserpassword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      alert = _useState3[0],\n      setAlert = _useState3[1];\n\n  var connexion = function connexion(e) {\n    e.preventDefault();\n\n    if (!user_email || !user_password) {\n      setAlert(\" Veuillez remplir tous les champs pour vous inscrire\");\n    } else {\n      axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3080/connexion', {\n        user_email: user_email,\n        user_password: user_password\n      }).then(function (reponse) {\n        //console.log(reponse)\n        if (reponse.st) window.location.href = \"../interface/recruteur\";\n      });\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Connection a-recruit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"login_signin_background center orientationV\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"blure2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_back_to_home_header__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"login-root\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box-root flex-flex flex-direction--column style1\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"box-root flex-flex flex-direction--column \",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"formbg-outer\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"formbg\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"formbg-inner padding-horizontal--48\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                      className: \"color-p padding-bottom--15\",\n                      children: \"Connexion\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 61,\n                      columnNumber: 41\n                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"alert\",\n                      children: alert && alert\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 62,\n                      columnNumber: 41\n                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                      id: \"stripe-login\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"field padding-bottom--24\",\n                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                          \"for\": \"email\",\n                          className: \"color-p\",\n                          children: \"Email\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 65,\n                          columnNumber: 49\n                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                          type: \"email\",\n                          name: \"email\",\n                          onChange: function onChange(e) {\n                            setUserEmail(e.target.value);\n                          }\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 66,\n                          columnNumber: 49\n                        }, this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 64,\n                        columnNumber: 45\n                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"field padding-bottom--24\",\n                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                          className: \"grid--50-50\",\n                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            \"for\": \"password\",\n                            className: \"color-p\",\n                            children: \"Mot de passe\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 70,\n                            columnNumber: 53\n                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"reset-pass\",\n                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                              href: \"#\",\n                              children: \"Mot de passe oubli\\xE9 ?\"\n                            }, void 0, false, {\n                              fileName: _jsxFileName,\n                              lineNumber: 72,\n                              columnNumber: 57\n                            }, this)\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 71,\n                            columnNumber: 53\n                          }, this)]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 69,\n                          columnNumber: 49\n                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                          type: \"password\",\n                          name: \"password\",\n                          onChange: function onChange(e) {\n                            setUserpassword(e.target.value);\n                          }\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 75,\n                          columnNumber: 49\n                        }, this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 68,\n                        columnNumber: 45\n                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"field field-checkbox padding-bottom--24 flex-flex align-center\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                          \"for\": \"checkbox\",\n                          className: \"color-p\",\n                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            name: \"checkbox\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 79,\n                            columnNumber: 57\n                          }, this), \" Rester connecter\"]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 78,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 77,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"field padding-bottom--24\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                          type: \"submit\",\n                          name: \"submit\",\n                          value: \"Continuer\",\n                          onClick: function onClick(e) {\n                            connexion(e);\n                          }\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 83,\n                          columnNumber: 49\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 82,\n                        columnNumber: 45\n                      }, this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 63,\n                      columnNumber: 41\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 60,\n                    columnNumber: 37\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 33\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"footer-link padding-top--24\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\"Pas encore de compte chez nous ?\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                      href: \"/authentification/inscription\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \" S'inscrire\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 90,\n                        columnNumber: 118\n                      }, this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 90,\n                      columnNumber: 75\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 90,\n                    columnNumber: 37\n                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"listing padding-top--24 padding-bottom--24 flex-flex center-center\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/inscription\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                          children: \" \\xA9 A recruite\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 92,\n                          columnNumber: 69\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 92,\n                        columnNumber: 43\n                      }, this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 92,\n                      columnNumber: 37\n                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/inscription\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                          children: \" Contacte\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 93,\n                          columnNumber: 69\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 93,\n                        columnNumber: 43\n                      }, this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 93,\n                      columnNumber: 37\n                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/inscription\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                          children: \" Politique de confidentialit\\xE9\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 94,\n                          columnNumber: 69\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 94,\n                        columnNumber: 43\n                      }, this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 94,\n                      columnNumber: 37\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 91,\n                    columnNumber: 37\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 33\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Connect, \"HIBtQ35JyjXEZOl6kffLPdRxBgk=\");\n\n_c = Connect;\n\nvar _c;\n\n$RefreshReg$(_c, \"Connect\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aGVudGlmaWNhdGlvbi9jb25uZXhpb24uanM/NGE5YyJdLCJuYW1lcyI6WyJDb25uZWN0IiwidXNlU3RhdGUiLCJ1c2VyX2VtYWlsIiwic2V0VXNlckVtYWlsIiwidXNlcl9wYXNzd29yZCIsInNldFVzZXJwYXNzd29yZCIsImFsZXJ0Iiwic2V0QWxlcnQiLCJjb25uZXhpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJBeGlvcyIsInRoZW4iLCJyZXBvbnNlIiwic3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBRUVDLCtDQUFRLENBQUMsS0FBRCxDQUZWO0FBQUEsTUFFdkJDLFVBRnVCO0FBQUEsTUFFWkMsWUFGWTs7QUFBQSxtQkFHUUYsK0NBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHdkJHLGFBSHVCO0FBQUEsTUFHVEMsZUFIUzs7QUFBQSxtQkFJUEosK0NBQVEsQ0FBQyxLQUFELENBSkQ7QUFBQSxNQUl2QkssS0FKdUI7QUFBQSxNQUlqQkMsUUFKaUI7O0FBTTlCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBSztBQUNuQkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUcsQ0FBQ1IsVUFBRCxJQUFlLENBQUNFLGFBQW5CLEVBQWlDO0FBRTdCRyxjQUFRLENBQUMsc0RBQUQsQ0FBUjtBQUNILEtBSEQsTUFHSztBQUVGSSx1REFBQSxDQUFXLGlDQUFYLEVBQTZDO0FBRXhDVCxrQkFBVSxFQUFDQSxVQUY2QjtBQUd4Q0UscUJBQWEsRUFBQ0E7QUFIMEIsT0FBN0MsRUFLSVEsSUFMSixDQUtTLFVBQUNDLE9BQUQsRUFBVztBQUNmO0FBQ0EsWUFBR0EsT0FBTyxDQUFD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QUFBQSwwQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQSxrQkFESjtBQWtFSDs7R0FoR3VCVCxPOztLQUFBQSxPIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aGVudGlmaWNhdGlvbi9jb25uZXhpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlci9iYWNrX3RvX2hvbWVfaGVhZGVyJ1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbm5lY3QoKSB7XG5cbiAgICBjb25zdCBbdXNlcl9lbWFpbCxzZXRVc2VyRW1haWxdPXVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlcl9wYXNzd29yZCxzZXRVc2VycGFzc3dvcmRdPXVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbYWxlcnQsc2V0QWxlcnRdPXVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNvbm5leGlvbiA9IChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYoIXVzZXJfZW1haWwgfHwgIXVzZXJfcGFzc3dvcmQpe1xuXG4gICAgICAgICAgICBzZXRBbGVydChcIiBWZXVpbGxleiByZW1wbGlyIHRvdXMgbGVzIGNoYW1wcyBwb3VyIHZvdXMgaW5zY3JpcmVcIilcbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDgwL2Nvbm5leGlvbicse1xuXG4gICAgICAgICAgICAgICAgdXNlcl9lbWFpbDp1c2VyX2VtYWlsLFxuICAgICAgICAgICAgICAgIHVzZXJfcGFzc3dvcmQ6dXNlcl9wYXNzd29yZFxuXG4gICAgICAgICAgICB9KS50aGVuKChyZXBvbnNlKT0+e1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb25zZSlcbiAgICAgICAgICAgICAgICBpZihyZXBvbnNlLnN0KVxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIuLi9pbnRlcmZhY2UvcmVjcnV0ZXVyXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICBcblxuICAgICAgICBcbiAgICB9XG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNvbm5lY3Rpb24gYS1yZWNydWl0PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibG9naW5fc2lnbmluX2JhY2tncm91bmQgY2VudGVyIG9yaWVudGF0aW9uVlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1cmUyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlci8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1yb290XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXJvb3QgZmxleC1mbGV4IGZsZXgtZGlyZWN0aW9uLS1jb2x1bW4gc3R5bGUxXCIgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtcm9vdCBmbGV4LWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYmctb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWJnLWlubmVyIHBhZGRpbmctaG9yaXpvbnRhbC0tNDhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sb3ItcCBwYWRkaW5nLWJvdHRvbS0tMTVcIj5Db25uZXhpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj57YWxlcnQgJiYgYWxlcnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzdHJpcGUtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBwYWRkaW5nLWJvdHRvbS0tMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImNvbG9yLXBcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9eyhlKT0+e3NldFVzZXJFbWFpbChlLnRhcmdldC52YWx1ZSl9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIHBhZGRpbmctYm90dG9tLS0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLS01MC01MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbG9yLXBcIj5Nb3QgZGUgcGFzc2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZXQtcGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk1vdCBkZSBwYXNzZSBvdWJsacOpID88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpPT57c2V0VXNlcnBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGZpZWxkLWNoZWNrYm94IHBhZGRpbmctYm90dG9tLS0yNCBmbGV4LWZsZXggYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY29sb3ItcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrYm94XCIvPiBSZXN0ZXIgY29ubmVjdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIHBhZGRpbmctYm90dG9tLS0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJDb250aW51ZXJcIiBvbkNsaWNrPXsoZSk9Pntjb25uZXhpb24oZSl9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgcGFkZGluZy10b3AtLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYXMgZW5jb3JlIGRlIGNvbXB0ZSBjaGV6IG5vdXMgPzxMaW5rIGhyZWY9XCIvYXV0aGVudGlmaWNhdGlvbi9pbnNjcmlwdGlvblwiPjxhPiBTJ2luc2NyaXJlPC9hPjwvTGluaz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmcgcGFkZGluZy10b3AtLTI0IHBhZGRpbmctYm90dG9tLS0yNCBmbGV4LWZsZXggY2VudGVyLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PExpbmsgaHJlZj1cIi9pbnNjcmlwdGlvblwiPjxhPiDCqSBBIHJlY3J1aXRlPC9hPjwvTGluaz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48TGluayBocmVmPVwiL2luc2NyaXB0aW9uXCI+PGE+IENvbnRhY3RlPC9hPjwvTGluaz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48TGluayBocmVmPVwiL2luc2NyaXB0aW9uXCI+PGE+IFBvbGl0aXF1ZSBkZSBjb25maWRlbnRpYWxpdMOpPC9hPjwvTGluaz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/authentification/connexion.js\n");

/***/ })

});