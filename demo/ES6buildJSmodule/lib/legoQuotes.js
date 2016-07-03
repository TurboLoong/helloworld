(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["legoQuotes"] = factory(require("lodash"));
	else
		root["legoQuotes"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by TurboLoong on 2016/7/3.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var marked0$0 = [randomQuote].map(regeneratorRuntime.mark);
	
	var _lodash = __webpack_require__(1);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _emmet = __webpack_require__(2);
	
	var _emmet2 = _interopRequireDefault(_emmet);
	
	var _wyldstyle = __webpack_require__(5);
	
	var _wyldstyle2 = _interopRequireDefault(_wyldstyle);
	
	var _benny = __webpack_require__(6);
	
	var _benny2 = _interopRequireDefault(_benny);
	
	var _util = __webpack_require__(4);
	
	var emmet = new _emmet2["default"]();
	var wyldstyle = new _wyldstyle2["default"]();
	var benny = new _benny2["default"]();
	var characters = { emmet: emmet, wyldstyle: wyldstyle, benny: benny };
	
	function randomQuote() {
	    var chars, character;
	    return regeneratorRuntime.wrap(function randomQuote$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                chars = _lodash2["default"].values(characters);
	                character = chars[(0, _util.getRandom)(0, chars.length - 1)];
	                context$1$0.next = 4;
	                return '${character.name}: ${character.saySomething()}';
	
	            case 4:
	            case "end":
	                return context$1$0.stop();
	        }
	    }, marked0$0[0], this);
	}
	
	exports["default"] = {
	    characters: characters,
	    getRandomQuote: function getRandomQuote() {
	        return randomQuote().next().value;
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by TurboLoong on 2016/7/3.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _LegoCharaterJs = __webpack_require__(3);
	
	var _LegoCharaterJs2 = _interopRequireDefault(_LegoCharaterJs);
	
	var Emmet = (function (_LegoCharacter) {
	    _inherits(Emmet, _LegoCharacter);
	
	    function Emmet() {
	        _classCallCheck(this, Emmet);
	
	        _get(Object.getPrototypeOf(Emmet.prototype), "constructor", this).call(this, { actor: "Chris Pratt", character: "Emmet" });
	        this.sayings = ["Introducing the double-decker couch!", "So everyone can watch TV together and be buddies!", "We're going to crash into the sun!", "Hey, Abraham Lincoln, you bring your space chair right back!", "Overpriced coffee! Yes!"];
	    }
	
	    return Emmet;
	})(_LegoCharaterJs2["default"]);
	
	exports["default"] = Emmet;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _util = __webpack_require__(4);
	
	var LegoCharater = (function () {
	    function LegoCharater(_ref) {
	        var character = _ref.character;
	        var actor = _ref.actor;
	
	        _classCallCheck(this, LegoCharater);
	
	        this.actor = actor;
	        this.name = character;
	        this.sayings = ["I haven't been given any funny quotes yet."];
	    }
	
	    _createClass(LegoCharater, [{
	        key: "saySomething",
	        value: function saySomething() {
	            return this.sayings[(0, _util.getRandom)(0, this.sayings.length - 1)];
	        }
	    }]);
	
	    return LegoCharater;
	})();
	
	exports["default"] = LegoCharater;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by TurboLoong on 2016/7/3.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRandom = getRandom;
	
	function getRandom(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by TurboLoong on 2016/7/3.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _LegoCharaterJs = __webpack_require__(3);
	
	var _LegoCharaterJs2 = _interopRequireDefault(_LegoCharaterJs);
	
	var Benny = (function (_LegoCharacter) {
	    _inherits(Benny, _LegoCharacter);
	
	    function Benny() {
	        _classCallCheck(this, Benny);
	
	        _get(Object.getPrototypeOf(Benny.prototype), "constructor", this).call(this, { actor: "Elizabeth Banks", character: "Wyldstyle" });
	        this.sayings = ["Come with me if you want to not die.", "That is literally the dumbest thing I have ever seen.", "Today shall now be known as Freedom Friday... But on a Tuesday", "Found your pants, series is over!"];
	    }
	
	    return Benny;
	})(_LegoCharaterJs2["default"]);
	
	exports["default"] = Benny;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by TurboLoong on 2016/7/3.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _LegoCharaterJs = __webpack_require__(3);
	
	var _LegoCharaterJs2 = _interopRequireDefault(_LegoCharaterJs);
	
	var Benny = (function (_LegoCharacter) {
	    _inherits(Benny, _LegoCharacter);
	
	    function Benny() {
	        _classCallCheck(this, Benny);
	
	        _get(Object.getPrototypeOf(Benny.prototype), "constructor", this).call(this, { actor: "Charlie Day", character: "Benny" });
	        this.sayings = ["Spaceship", "Underwater spaceship", "You're really letting the oxygen out of my tank here!"];
	    }
	
	    return Benny;
	})(_LegoCharaterJs2["default"]);
	
	exports["default"] = Benny;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;