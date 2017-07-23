require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);


var _this = this;

// Start nuxt.js
var start = function () {
  var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
    var _this2 = this;

    var config, nuxt;
    return __WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Import and Set Nuxt.js options
            config = __webpack_require__(0);

            config.dev = !(app.env === 'production');
            // Instanciate nuxt.js
            _context3.next = 4;
            return new __WEBPACK_IMPORTED_MODULE_2_nuxt___default.a(config);

          case 4:
            nuxt = _context3.sent;

            if (!config.dev) {
              _context3.next = 15;
              break;
            }

            _context3.prev = 6;
            _context3.next = 9;
            return nuxt.build();

          case 9:
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3['catch'](6);

            console.error(_context3.t0); // eslint-disable-line no-console
            process.exit(1);

          case 15:

            app.use(function () {
              var _ref3 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
                var deviceAgent;
                return __WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log("ttttt======", ctx);
                        deviceAgent = ctx.req.headers['user-agent'];

                        deviceAgent = deviceAgent.toLowerCase();
                        //console.log('[User-Agent]: ' + deviceAgent);

                        if (!deviceAgent.match(/(iphone|ipod|ipad|android)/)) {
                          _context2.next = 7;
                          break;
                        }

                        ctx.redirect("http://baidu.com");
                        _context2.next = 10;
                        break;

                      case 7:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        _context2.next = 10;
                        return nuxt.render(ctx.req, ctx.res);

                      case 10:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this2);
              }));

              return function (_x3, _x4) {
                return _ref3.apply(this, arguments);
              };
            }()
            // ctx.status = 200 // koa defaults to 404 when it sees that status is unset
            //   await nuxt.render(ctx.req, ctx.res)
            );

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 18:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[6, 11]]);
  }));

  return function start() {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;
var router = __webpack_require__(3)();

// router.all("/",async (ctx,next) => {
//   let deviceAgent = ctx.req.headers['user-agent'];
//   deviceAgent = deviceAgent.toLowerCase();
//   if (deviceAgent.match(/(iphone|ipod|ipad|android)/)) {
//     ctx.redirect("http://baidu.com")
//   } else {
//     ctx.redirect("/test")
//   }
// })
router.get("/api", function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_zhongzhiheng_works_koa_template_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("ctx======", ctx);
            return _context.abrupt('return', ctx.response.body = { a: 11 });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.use(router.routes());

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map