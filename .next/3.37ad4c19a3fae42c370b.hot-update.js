webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_sass_styles_scss__ = __webpack_require__("./assets/sass/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_sass_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_sass_styles_scss__);
var _jsxFileName = '/Users/mc/Projects/pm2-web-admin/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









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
      this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default()('http://localhost:9000/', { path: '/foo/bar' });
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["j" /* Container */],
        { fluid: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_reactstrap__["n" /* Navbar */],
          { color: 'faded', light: true, expand: 'md', __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["o" /* NavbarBrand */],
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            },
            'PM2 Web Admin'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["p" /* NavbarToggler */], { onClick: this.toggle, __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["i" /* Collapse */],
            { isOpen: this.state.isOpen, navbar: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_reactstrap__["k" /* Nav */],
              { className: 'ml-auto', navbar: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["l" /* NavItem */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_reactstrap__["m" /* NavLink */],
                  { href: 'https://github.com/yahoohung/pm2-web-admin', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    }
                  },
                  'Github'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_reactstrap__["q" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          },
          this.state.processes.map(function (thisProcess) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_reactstrap__["h" /* Col */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["c" /* Card */],
                { key: thisProcess.pid, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_reactstrap__["d" /* CardBody */],
                  { className: 'd-flex align-items-center', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 104
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 105
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { color: 'primary', outline: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 106
                        }
                      },
                      'Notifications ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Badge,
                        { color: 'secondary', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 107
                          }
                        },
                        '4'
                      )
                    ),
                    thisProcess.monit.cpu
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["g" /* CardTitle */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 112
                        }
                      },
                      thisProcess.name
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["e" /* CardSubtitle */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113
                        }
                      },
                      thisProcess.pm2_env.pm_cwd
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["f" /* CardText */], {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                      }
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ml-auto', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 116
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["b" /* ButtonGroup */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 117
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Button */],
                        { color: 'danger', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118
                          }
                        },
                        'Stop'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Button */],
                        { color: 'warning', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 119
                          }
                        },
                        'Reload'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["a" /* Button */],
                        { color: 'info', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 120
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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return HomePage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

HomePage.defaultProps = {
  processes: [] };
var _default = HomePage;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePage, 'HomePage', '/Users/mc/Projects/pm2-web-admin/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/mc/Projects/pm2-web-admin/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.37ad4c19a3fae42c370b.hot-update.js.map