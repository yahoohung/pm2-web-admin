module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/sass/styles.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_styles_scss__ = __webpack_require__("./assets/sass/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_sass_styles_scss__);

var _jsxFileName = '/Users/mc/Projects/open-source/pm2-web-admin/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var isServer = process.browser || true;

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.handleProcesses = function (processes) {
      console.log(processes);
      _this.setState({
        processes: processes
      });
    };

    _this.toggle = _this.toggle.bind(_this);

    _this.state = {
      isOpen: false,
      processes: []
    };

    return _this;
  }

  _createClass(HomePage, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    // fetch old messages data from the server
    // static async getInitialProps({ req }) {
    //   const response = await fetch('http://localhost:3000/pm2')
    //   const processes = await response.json()
    //   return { processes }
    // }

  }, {
    key: 'componentDidMount',


    // init state with the prefetched processes

    // connect to WS server and listen event
    value: function componentDidMount() {

      this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default()('http://localhost:9000/', {
        path: '/foo/bar',
        query: 'auth_token=' + this.props.token
      });

      this.socket.emit('pm2 start', 'yo');

      this.socket.on('error', function (err) {
        console.log('socket error', err);
      });

      this.socket.on('pm2', this.handleProcesses);
    }

    // close socket connection

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.socket.off('pm2', this.handleProcesses);
      this.socket.close();
    }

    // add processes from server to the state

  }, {
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Container"],
        { fluid: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Navbar"],
          { color: 'faded', light: true, expand: 'md', __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavbarBrand"],
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            },
            'PM2 Web Admin'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavbarToggler"], { onClick: this.toggle, __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Collapse"],
            { isOpen: this.state.isOpen, navbar: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Nav"],
              { className: 'ml-auto', navbar: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavItem"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4_reactstrap__["NavLink"],
                  { href: 'https://github.com/yahoohung/pm2-web-admin', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 113
                    }
                  },
                  'Github'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Row"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          },
          this.state.processes.map(function (thisProcess) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Col"],
              { xs: '12', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Card"],
                { key: thisProcess.pid, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4_reactstrap__["CardBody"],
                  { className: 'd-flex align-items-center', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'd-flex align-items-end flex-column', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'div',
                      { className: 'btn', color: 'primary', outline: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 124
                        }
                      },
                      'CPU ',
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Badge"],
                        { color: 'secondary', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 125
                          }
                        },
                        thisProcess.monit.cpu,
                        '%'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'div',
                      { className: 'btn', color: 'primary', outline: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 127
                        }
                      },
                      'RAM ',
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Badge"],
                        { color: 'secondary', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 128
                          }
                        },
                        Math.ceil(thisProcess.monit.memory / 1000 / 1000),
                        'M'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_reactstrap__["CardTitle"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 132
                        }
                      },
                      thisProcess.name
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_reactstrap__["CardSubtitle"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 133
                        }
                      },
                      thisProcess.pm2_env.pm_cwd
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_reactstrap__["CardText"], {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                      }
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'ml-auto', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 136
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_reactstrap__["ButtonGroup"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 137
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Button"],
                        { color: 'danger', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 138
                          }
                        },
                        'Stop'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Button"],
                        { color: 'warning', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 139
                          }
                        },
                        'Reload'
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Button"],
                        { color: 'info', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 140
                          }
                        },
                        'Restart'
                      )
                    )
                  )
                )
              )
            );
          })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req = _ref.req;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', req ? { token: req.auth.token } : { token: window.token });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return HomePage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

HomePage.defaultProps = {
  processes: [] };


/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "socket.io-client":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map