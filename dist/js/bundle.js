/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/bookReader.js":
/*!**********************************!*\
  !*** ./js/modules/bookReader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class bookReader {
    constructor(view, panel) {
        this.view = view;
        this.panel = panel;
        this.paragraph = view.querySelector('p');
        this.currentText = panel.querySelector('#current');
        this.progressBar = document.querySelector('.progress-bar');
        this._attachListeners();
    }

    updateBook() {
        this.paragraph.textContent = localStorage.getItem("book");
        this.createPage();
        this.updateCurrent();
    }

    createPage(page = 0) {
        if (page > 0) {
            const marginTop = parseInt(this.paragraph.style.marginTop) || 0;
            if (this.paragraph.offsetHeight > this.view.offsetHeight + -marginTop) {
                localStorage.current++;
            }
        } else if (page < 0) {
            if (+localStorage.current) {
                localStorage.current--;

            }
        }
        this.paragraph.style.marginTop = -(localStorage.current * this.view.offsetHeight) + 'px';
        this.updateCurrent();
    }

    updateCurrent() {
        this.currentText.textContent = 'Страница:' + ' ' + (+localStorage.current + 1);
    }

    _attachListeners() {
        this.panel.querySelector('#previous').addEventListener('click', () => {
        this.progressBar.style.width = Math.round
        (localStorage.current/(this.paragraph.offsetHeight / this.view.offsetHeight) * 100) + '%';
        this.createPage(-1);
        });
        document.addEventListener('keydown', (event) => {
            if (event.keyCode == '37') {
                this.createPage(-1);
                this.progressBar.style.width = Math.round
                (localStorage.current/(this.paragraph.offsetHeight / this.view.offsetHeight) * 100) + '%';
            }
        });
        this.panel.querySelector('#next').addEventListener('click', () => {
            this.progressBar.style.width = Math.round
            (localStorage.current/(this.paragraph.offsetHeight / this.view.offsetHeight) * 100) + '%';
            this.createPage(1);
        });
        document.addEventListener('keydown', (event) => {
            if (event.keyCode == '39') {
                this.progressBar.style.width = Math.round
                (localStorage.current/(this.paragraph.offsetHeight / this.view.offsetHeight) * 100) + '%';
                this.createPage(1);
            }
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookReader);



/***/ }),

/***/ "./js/modules/size.js":
/*!****************************!*\
  !*** ./js/modules/size.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fontSmall = document.querySelector('.font-small'),
      fontMedium = document.querySelector('.font-medium'),
      fontDefault = document.querySelector('.font-default'),
      fontLarge = document.querySelector('.font-large'),
      element = document.documentElement;

function changeFontSize(){
    fontSmall.addEventListener("click", () => {
        localStorage.removeItem('font');
    
        element.setAttribute('data-font', 'small');
        localStorage.setItem('font', 'small');
    });
    if (localStorage.getItem('font') == 'small') {
        element.setAttribute('data-font', 'small');
    }
    
    fontMedium.addEventListener("click", () => {
        localStorage.removeItem('font');
    
        element.setAttribute('data-font', 'medium');
        localStorage.setItem('font', 'medium');
    });
    if (localStorage.getItem('font') == 'medium') {
        element.setAttribute('data-font', 'medium');
    }
    fontDefault.addEventListener("click", () => {
        localStorage.removeItem('font');
        element.removeAttribute('data-font');
        localStorage.setItem('font', 'default');
    });
    if (localStorage.getItem('font') == null) {
        element.removeAttribute('data-font');
    }
    fontLarge.addEventListener("click", () => {
        localStorage.removeItem('font');
    
        element.setAttribute('data-font', 'large');
        localStorage.setItem('font', 'large');
    });
    if (localStorage.getItem('font') == 'large') {
        element.setAttribute('data-font', 'large');
     }
    }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeFontSize);

/***/ }),

/***/ "./js/modules/theme.js":
/*!*****************************!*\
  !*** ./js/modules/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const themeButton = document.getElementById("theme-button"),
      element = document.documentElement;

function changeTheme() {
    themeButton.addEventListener("click", () => {
        if (element.hasAttribute('data-theme')) {
            element.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        } else {
            element.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    if (localStorage.getItem('theme') !== null) {
        element.setAttribute('data-theme', 'dark');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTheme);

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_bookReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bookReader */ "./js/modules/bookReader.js");
/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/theme */ "./js/modules/theme.js");
/* harmony import */ var _modules_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/size */ "./js/modules/size.js");




window.addEventListener('DOMContentLoaded', () => {

const file = document.querySelector('#file'),
    panel = document.querySelector('.panel'),
    view = document.querySelector('#view');

file.addEventListener('change', function () {
    const file = this.files[0] || {};

    if (file.type !== "text/plain") {
        return;
    }
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'utf-8');

    fileReader.addEventListener('load', () => {
        try {
            localStorage.setItem("book", fileReader.result);

        } catch (err) {
            if (err.number === 22) {
                throw new Error('Local storage is full');
            }
        }

        localStorage.setItem("title", file.name);
        localStorage.setItem("current", 0);
        readerBook.updateBook();
           
    });
    fileReader.addEventListener('error', () => {
        console.log(fileReader.error);
    });
});
function readFile(object) {
    let file = object.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function() {
      try{
      view.querySelector('p').innerHTML = reader.result;
      }
      catch (err){
          if(err.number === 22){
              throw new Error('Local storage is full');
          }
      }
      localStorage.setItem("title", file.name);
    });
    reader.addEventListener('error', () => {
        console.log(reader.error);
    });
    reader.readAsText(file);
 }
 file.addEventListener('change', function () {
    localStorage.setItem("current", 0);
    readerBook.updateBook();
 readFile(file);
 });

(0,_modules_size__WEBPACK_IMPORTED_MODULE_2__.default)();

(0,_modules_theme__WEBPACK_IMPORTED_MODULE_1__.default)();

const readerBook = new _modules_bookReader__WEBPACK_IMPORTED_MODULE_0__.default(view, panel);
if (localStorage.getItem("book")){
    readerBook.updateBook();
}
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map