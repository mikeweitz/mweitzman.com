webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header/styled-elements.js":
/*!**********************************************!*\
  !*** ./components/header/styled-elements.js ***!
  \**********************************************/
/*! exports provided: Heading, Group, Title, LinkStyles, StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkStyles", function() { return LinkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var _styled;




var fonts = _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].fonts,
    colors = _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].colors;
var Heading = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('header', (_styled = {
  background: 'url(/static/images/txture.png) #222'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "background", 'url(/static/images/dark_stripes.png) #222'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "position", 'relative'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "padding", '2em 0'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "width", '100%'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "minHeight", '100px'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "color", '#ddd'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "borderBottom", '1px solid #ccc'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "boxShadow", '0 4px 8px rgba(0,0,0,0.3)'), _styled));
var Group = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('hgroup', {
  textShadow: '1px 1px 0 #000',
  // @include transition(all, 0.5s);
  ':hover': {
    textShadow: '0 0 4px #555'
  }
});
var Title = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('h1', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fonts.heading, {
  fontSize: _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].fontSize.display
}));
var LinkStyles = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["withStyle"])(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["A"], {
  ':hover': {
    textDecoration: 'none'
  },
  ':focus': {
    textDecoration: 'none'
  }
});
var StyledLink = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('span', {
  padding: '0',
  marginRight: '25px',
  position: 'relative',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none'
  },
  ':focus': {
    textDecoration: 'none'
  },
  ':after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: '0',
    left: '0',
    backgroundColor: 'currentColor',
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: 'all 0.25s ease-in-out'
  },
  ':hover:after': {
    visibility: 'visible',
    transform: 'scaleX(1)'
  }
});

/***/ })

})
//# sourceMappingURL=index.js.609ed6cdac57f0eaf28d.hot-update.js.map