/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/01-Slide/index.js":
/*!*******************************!*\
  !*** ./src/01-Slide/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {} = wp.blockEditor;

const {
  PanelBody,
  TextControl,
  IconButton,
  Toolbar
} = wp.components;
registerBlockType("divisiononeblocks/slide", {
  title: __("Slide D1", "divisiononeblocks"),
  description: __("Slide Block", "divisiononeblocks"),
  category: "divisiononeblocks",
  icon: "slides",
  keywords: [__("Slide", "divisiononeblocks"), __("Carousel", "divisiononeblocks"), __("Division One Blocks", "divisiononeblocks")],
  attributes: {
    title: {
      type: "string",
      default: "Slide Title"
    },
    content: {
      type: "string",
      default: "Slide Content"
    },
    image: {
      type: "string",
      default: "https://picsum.photos/1920/1080?image=0"
    }
  },
  edit: props => {
    const {
      attributes: {
        title,
        content,
        image
      },
      setAttributes
    } = props;
    const onChangeTitle = newTitle => {
      setAttributes({
        title: newTitle
      });
    };
    const onChangeContent = newContent => {
      setAttributes({
        content: newContent
      });
    };
    const onChangeImage = newImage => {
      setAttributes({
        image: newImage
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slide__image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slide__content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "h2",
      value: title,
      onChange: onChangeTitle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "p",
      value: content,
      onChange: onChangeContent
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Slide Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Image URL",
      value: image,
      onChange: onChangeImage
    }))));
  },
  save: props => {
    const {
      attributes: {
        title,
        content,
        image
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slide__image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slide__content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "h2",
      value: title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "p",
      value: content
    })));
  }
});

/***/ }),

/***/ "./src/02-Slider/index.js":
/*!********************************!*\
  !*** ./src/02-Slider/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './slide'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  dispatch,
  select,
  getBlock
} = wp.data;
const {
  RichText,
  InspectorControls,
  BlockControls,
  InnerBlocks
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  IconButton,
  Toolbar
} = wp.components;
const {
  useEffect,
  useState
} = wp.element;

registerBlockType("divisiononeblocks/slider", {
  title: __("Slider D1", "divisiononeblocks"),
  description: __("Slider Block", "divisiononeblocks"),
  category: "divisiononeblocks",
  icon: "slides",
  keywords: [__("Slider", "divisiononeblocks"), __("Carousel", "divisiononeblocks"), __("Division One Blocks", "divisiononeblocks")],
  attributes: {
    autoplay: {
      type: "boolean",
      default: true
    },
    autoplaySpeed: {
      type: "number",
      default: 5000
    },
    dots: {
      type: "boolean",
      default: true
    },
    arrows: {
      type: "boolean",
      default: true
    },
    fade: {
      type: "boolean",
      default: false
    },
    infinite: {
      type: "boolean",
      default: true
    },
    speed: {
      type: "number",
      default: 500
    }
  },
  supports: {
    align: ["wide", "full"]
  },
  edit: props => {
    const {
      attributes: {
        autoplay,
        autoplaySpeed,
        dots,
        arrows,
        fade,
        infinite,
        speed
      },
      setAttributes
    } = props;
    const parentBlock = select("core/editor").getBlocksByClientId(props.clientId)[0];
    const childBlocks = parentBlock.innerBlocks;
    const [childBlocksState, setChildBlocksState] = useState(childBlocks);
    const [indexOfCurrentSlide, setIndexOfCurrentSlide] = useState(0);
    useEffect(() => {
      console.log(childBlocksState);
    }, [childBlocksState]);
    useEffect(() => {
      console.log(indexOfCurrentSlide);
      dispatch("core/block-editor").selectBlock(childBlocksState[indexOfCurrentSlide].clientId);
    }, [indexOfCurrentSlide]);
    const onChangeSlides = newSlides => {
      setAttributes({
        slides: newSlides
      });
    };
    const onChangeAutoplay = newAutoplay => {
      setAttributes({
        autoplay: newAutoplay
      });
    };
    const onChangeAutoplaySpeed = newAutoplaySpeed => {
      setAttributes({
        autoplaySpeed: newAutoplaySpeed
      });
    };
    const onChangeDots = newDots => {
      setAttributes({
        dots: newDots
      });
    };
    const onChangeArrows = newArrows => {
      setAttributes({
        arrows: newArrows
      });
    };
    const onChangeFade = newFade => {
      setAttributes({
        fade: newFade
      });
    };
    const onChangeInfinite = newInfinite => {
      setAttributes({
        infinite: newInfinite
      });
    };
    const onChangeSpeed = newSpeed => {
      setAttributes({
        speed: newSpeed
      });
    };
    const TEMPLATE = [["divisiononeblocks/slide", {
      className: "active"
    }]];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Slider Settings", "divisiononeblocks")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __("Autoplay", "divisiononeblocks"),
      value: autoplay,
      onChange: onChangeAutoplay
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __("Autoplay Speed", "divisiononeblocks"),
      value: autoplaySpeed,
      onChange: onChangeAutoplaySpeed
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __("Dots", "divisiononeblocks"),
      value: dots,
      onChange: onChangeDots
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __("Arrows", "divisiononeblocks"),
      value: arrows,
      onChange: onChangeArrows
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __("Fade", "divisiononeblocks"),
      value: fade,
      onChange: onChangeFade
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __("Infinite", "divisiononeblocks"),
      value: infinite,
      onChange: onChangeInfinite
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __("Speed", "divisiononeblocks"),
      value: speed,
      onChange: onChangeSpeed
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      className: "components-toolbar__control",
      label: __("Preview", "divisiononeblocks"),
      icon: "controls-play"
      //   onClick={open}
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      className: "components-toolbar__control",
      label: __("Add Slide", "divisiononeblocks"),
      icon: "insert",
      onClick: () => {
        //dispatch slide block inside this block
        dispatch("core/block-editor").insertBlock(wp.blocks.createBlock("divisiononeblocks/slide"), childBlocksState.length, props.clientId);
        //update slides state
        setChildBlocksState(select("core/editor").getBlocksByClientId(props.clientId)[0].innerBlocks);
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      className: "components-toolbar__control",
      label: __("Remove Current Slide", "divisiononeblocks"),
      icon: "remove"
      //   onClick={open}
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      className: "components-toolbar__control",
      label: __("Last Slide", "divisiononeblocks"),
      icon: "arrow-left-alt2",
      onClick: () => {
        if (indexOfCurrentSlide - 1 < 0) {
          setIndexOfCurrentSlide(childBlocksState.length - 1);
        } else {
          setIndexOfCurrentSlide(indexOfCurrentSlide - 1);
        }
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      className: "components-toolbar__control",
      label: __("Next Slide", "divisiononeblocks"),
      icon: "arrow-right-alt2",
      onClick: () => {
        if (indexOfCurrentSlide + 1 > childBlocksState.length - 1) {
          setIndexOfCurrentSlide(0);
        } else {
          setIndexOfCurrentSlide(indexOfCurrentSlide + 1);
        }
      },
      disabled: childBlocksState.length <= 1 ? true : false
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: TEMPLATE
    })));
  },
  save: props => {
    const {
      attributes: {
        slides,
        autoplay,
        autoplaySpeed,
        dots,
        arrows,
        fade,
        infinite,
        speed
      }
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, {
      className: "d1-active"
    }));
  }
});

// Path: src/02-Slider/style.scss

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _01_Slide_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./01-Slide/index.js */ "./src/01-Slide/index.js");
/* harmony import */ var _02_Slider_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./02-Slider/index.js */ "./src/02-Slider/index.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */





/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdivisiononeblocks"] = self["webpackChunkdivisiononeblocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map