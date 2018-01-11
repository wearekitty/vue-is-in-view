(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueIsInView"] = factory();
	else
		root["VueIsInView"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IsInView = {};

var Watcher = function () {
  function Watcher() {
    _classCallCheck(this, Watcher);

    this.elementsToWatch = [];
    this.windowHeight = 0;

    window.addEventListener('scroll', this.update.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
    this.update();
  }

  _createClass(Watcher, [{
    key: 'update',
    value: function update() {
      var _this = this;

      this.elementsToWatch.forEach(function (elementBinding) {
        var element = elementBinding.element,
            settings = elementBinding.settings;

        var rect = element.getBoundingClientRect();

        var elementHeight = rect.height;
        var elementTopPosition = rect.top;
        var elementBottomPosition = elementTopPosition + elementHeight;

        if (settings.showIfPartial) {
          if (elementTopPosition >= 0 && elementTopPosition <= _this.windowHeight || elementBottomPosition >= 0 && elementBottomPosition <= _this.windowHeight) {
            if (typeof settings.callback === 'function') settings.callback(element);
            element.classList.add('is-partially-in-view');
            element.classList.add('has-been-partially-in-view');
          } else {
            if (!element.classList.contains('is-partially-in-view')) return;
            element.classList.remove('is-partially-in-view');
          }
        }

        if (elementBottomPosition <= _this.windowHeight && elementTopPosition <= _this.windowHeight && elementBottomPosition >= 0 && elementTopPosition >= 0) {
          if (element.classList.contains('is-in-view')) return;
          if (typeof settings.callback === 'function') settings.callback(element);
          element.classList.add('is-in-view');
          element.classList.add('has-been-fully-in-view');
        } else {
          if (!element.classList.contains('is-in-view')) return;
          element.classList.remove('is-in-view');
        }
      });
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.windowHeight = window.innerHeight;
      this.update();
    }
  }, {
    key: 'addElement',
    value: function addElement(element) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.elementsToWatch.push({
        element: element,
        settings: settings
      });
    }
  }]);

  return Watcher;
}();

var watcher = new Watcher();

IsInView.install = function (Vue) {
  Vue.directive('is-in-view', {
    bind: function bind(el, binding) {
      var value = binding.value;

      watcher.addElement(el, value);

      Vue.nextTick(function () {
        watcher.update();
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (IsInView);

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-is-in-view.js.map