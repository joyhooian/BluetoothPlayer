(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/main.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));




var _alarms = _interopRequireDefault(__webpack_require__(/*! ./pages/alarms/alarms.vue */ 11));


var _load = _interopRequireDefault(__webpack_require__(/*! ./pages/load/load.vue */ 18));


var _setting = _interopRequireDefault(__webpack_require__(/*! ./pages/setting/setting.vue */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var links = function links() {__webpack_require__.e(/*! require.ensure | pages/links/links */ "pages/links/links").then((function () {return resolve(__webpack_require__(/*! ./pages/links/links.vue */ 53));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.component('links', links);_vue.default.component('alarms', _alarms.default);_vue.default.component('load', _load.default);
_vue.default.component('setting', _setting.default);var cuCustom = function cuCustom() {__webpack_require__.e(/*! require.ensure | colorui/components/cu-custom */ "colorui/components/cu-custom").then((function () {return resolve(__webpack_require__(/*! ./colorui/components/cu-custom.vue */ 60));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};


_vue.default.component('cu-custom', cuCustom);

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/App.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 6);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 8);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!*************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 7);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  globalData: {
    devices: [],
    primaryServiceUUID: '',
    readUUID: '',
    writeUUID: '',
    tempFile: [],
    musicInfo: [],
    alarmsInfo: [],
    timeAfterInfo: {
      volume: 0,
      relayStatus: false,
      secAfter: 0 },

    curMusic: 0,
    innerAudioContext: null,
    isPlaying: false,
    isMuted: false,
    isSingle: false,
    isAll: false,
    isPlayWhenBoot: false,
    isTimingCancel: false,
    alarmShow: {
      isSetTime: false,
      isTimeAfter: false } },


  onLaunch: function onLaunch() {
    wx.setKeepScreenOn({
      keepScreenOn: true });

    // AT指令打包
    _vue.default.prototype.MessageToArrayBuffer = function (msg) {
      var message = msg;
      message += '\r\n';
      var arr = new Array();
      for (var cnt = 0; cnt < message.length; cnt++) {
        arr.push(message.substr(cnt, 1).charCodeAt());
      }
      var u8Array = new Uint8Array(arr);
      return u8Array.buffer;
    };
    // AT指令解析
    _vue.default.prototype.ArrayBufferToMessage = function (buffer) {
      var uint8 = new Uint8Array(buffer);
      var stringArray = new Array(uint8.length);
      uint8.forEach(function (item) {
        stringArray.push(String.fromCharCode(item));
      });
      return stringArray.join('');
    };
    this.globalData.innerAudioContext = wx.createInnerAudioContext();
    uni.getSystemInfo({
      success: function success(e) {










        _vue.default.prototype.StatusBar = e.statusBarHeight;
        var custom = wx.getMenuButtonBoundingClientRect();
        _vue.default.prototype.Custom = custom;
        _vue.default.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;







        _vue.default.prototype.SafeArea = e.safeArea;
      } });

    _vue.default.prototype.ColorList = [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42' },

    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d' },

    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08' },

    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f' },

    {
      title: '森绿',
      name: 'green',
      color: '#39b54a' },

    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4' },

    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff' },

    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6' },

    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0' },

    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997' },

    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f' },

    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3' },

    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa' },

    {
      title: '墨黑',
      name: 'black',
      color: '#333333' },

    {
      title: '雅白',
      name: 'white',
      color: '#ffffff' }];



  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 8 */
/*!*********************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 9);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 10 */,
/* 11 */
/*!****************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/alarms/alarms.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alarms.vue?vue&type=template&id=641a1f86&name=alarms& */ 12);
/* harmony import */ var _alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alarms.vue?vue&type=script&lang=js& */ 14);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _alarms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alarms.vue?vue&type=style&index=0&lang=css& */ 16);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__["render"],
  _alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/alarms/alarms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/*!***********************************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/alarms/alarms.vue?vue&type=template&id=641a1f86&name=alarms& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./alarms.vue?vue&type=template&id=641a1f86&name=alarms& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_template_id_641a1f86_name_alarms___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/alarms/alarms.vue?vue&type=template&id=641a1f86&name=alarms& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!*****************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/alarms/alarms.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./alarms.vue?vue&type=script&lang=js& */ 15);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/alarms/alarms.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _self;var _default =
{
  name: "alarms",
  data: function data() {
    return {
      devices: [], //设备列表
      primaryServiceUUID: '', //主服务UUID
      readUUID: '', //监听UUID
      writeUUID: '', //写入UUID
      uploadLoading: false,
      CustomBar: this.CustomBar,
      alarmsInfo: [],
      alarmShow: {},
      timeAfterInfo: {},
      weekdaysString: [
      { index: 0, string: '周一' },
      { index: 1, string: '周二' },
      { index: 2, string: '周三' },
      { index: 3, string: '周四' },
      { index: 4, string: '周五' },
      { index: 5, string: '周六' },
      { index: 6, string: '周日' }] };


  },
  methods: {
    Navigate: function Navigate(e) {
      //如果是添加时间设定则跳转到时间设定页面
      if (e.currentTarget.id === 'set-time') {
        uni.navigateTo({
          url: '/pages/alarms/set-time' });

      }
      //否则跳转到时间间隔设置页面
      else if (e.currentTarget.id === 'time-after') {
          uni.navigateTo({
            url: '/pages/alarms/time-after' });

        }
    },
    //上传时间设定
    uploadData: function uploadData() {var _this = this;
      //防止重复点击
      if (!this.uploadLoading) {
        this.uploadLoading = true;
        console.log(this.alarmShow);
        //如果是重复时间设置
        if (this.alarmShow.isSetTime) {
          console.log("上传时间设定");
          var alarmsMessage = new Array();
          //遍历每个生效的设置组
          this.alarmsInfo.forEach(function (alarm, index) {
            if (alarm.isUsing) {
              var numArr = new Array();
              numArr.push(0x7E);
              numArr.push(0x09 + alarm.weekdays.length);
              numArr.push(0x13);
              numArr.push(index + 1);
              numArr.push(Number(alarm.startTime.substr(0, 2)));
              numArr.push(Number(alarm.startTime.substr(3, 2)));
              numArr.push(Number(alarm.stopTime.substr(0, 2)));
              numArr.push(Number(alarm.stopTime.substr(3, 2)));
              numArr.push(alarm.volume);
              numArr.push(alarm.relayStatus ? 0x01 : 0x00);
              alarm.weekdays.forEach(function (weekday) {
                numArr.push(weekday + 1);
              });
              numArr.push(0xEF);
              var u8Arr = new Uint8Array(numArr);
              alarmsMessage.push(u8Arr.buffer);
            }
          });
          //如果没有时间设置组生效则提醒
          if (alarmsMessage.length == 0)
          {
            wx.showToast({
              title: "请启用要设置的任务!",
              icon: "none" });

            this.uploadLoading = false;
          } else if (this.primaryServiceUUID != '' && this.writeUUID != '') {
            console.log("发送消息至: Service " + this.primaryServiceUUID + " Write " + this.writeUUID);
            //遍历命令数组并间隔发送
            alarmsMessage.forEach(function (msg, index) {
              setTimeout(function () {
                wx.writeBLECharacteristicValue({
                  deviceId: _this.devices[0].deviceId,
                  serviceId: _this.primaryServiceUUID,
                  characteristicId: _this.writeUUID,
                  value: msg,
                  success: function success(res) {
                    console.log("发送成功");
                    console.log(msg);
                  },
                  fail: function fail(res) {
                    console.log("发送失败");
                  } });

              }, 200 * index);
            });
            setTimeout(function () {
              var u8Arr = new Uint8Array([0x7E, 0x02, 0x55, 0xEF]);
              wx.writeBLECharacteristicValue({
                deviceId: _this.devices[0].deviceId,
                serviceId: _this.primaryServiceUUID,
                characteristicId: _this.writeUUID,
                value: u8Arr.buffer,
                success: function success(res) {
                  console.log("发送成功");
                  console.log(u8Arr.buffer);
                },
                fail: function fail(res) {
                  console.log('发送失败');
                },
                complete: function complete() {
                  _this.uploadLoading = false;
                } });

            }, 200 * alarmsMessage.length);
          } else {
            console.log(alarmsMessage);
            wx.showToast({
              title: '请连接设备！',
              icon: 'none' });

            this.uploadLoading = false;
          }
        }
        //如果是时间间隔设定
        else if (this.alarmShow.isTimeAfter) {
            console.log("上传间隔时间");
            var numArr = new Array();
            // 时间间隔分包发送指令
            numArr.push(0x7E);
            numArr.push(0x06);
            numArr.push(0x18);
            numArr.push((this.timeAfterInfo.secAfter & 0xFF00) >> 8);
            numArr.push(this.timeAfterInfo.secAfter & 0x00FF);
            numArr.push(this.timeAfterInfo.volume);
            numArr.push(this.timeAfterInfo.relayStatus ? 0x01 : 0x00);
            numArr.push(0xEF);
            var u8Arr = new Uint8Array(numArr);
            wx.writeBLECharacteristicValue({
              deviceId: this.devices[0].deviceId,
              serviceId: this.primaryServiceUUID,
              characteristicId: this.writeUUID,
              value: u8Arr.buffer,
              success: function success(res) {
                console.log("发送成功");
                console.log(u8Arr.buffer);
              },
              fail: function fail(res) {
                console.log("发送失败");
              } });

          }
      }
    },
    ChagngUsing: function ChagngUsing(e) {
      this.alarmsInfo[e.currentTarget.id].isUsing = e.detail.value;
    },
    Edit: function Edit(e) {
      uni.navigateTo({
        url: '/pages/alarms/set-time?index=' + e.currentTarget.id });

    } },

  beforeCreate: function beforeCreate() {
    console.log("进入定时页面");
  },
  created: function created() {
    _self = this;
    _self.alarmsInfo = getApp().globalData.alarmsInfo;
    _self.devices = getApp().globalData.devices;
    _self.primaryServiceUUID = getApp().globalData.primaryServiceUUID;
    _self.readUUID = getApp().globalData.readUUID;
    _self.writeUUID = getApp().globalData.writeUUID;
    _self.alarmShow = getApp().globalData.alarmShow;
    _self.timeAfterInfo = getApp().globalData.timeAfterInfo;
  },
  mounted: function mounted() {

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */
/*!*************************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/alarms/alarms.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./alarms.vue?vue&type=style&index=0&lang=css& */ 17);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_alarms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/alarms/alarms.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 18 */
/*!************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/load/load.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.vue?vue&type=template&id=0ca8f4c6&name=load& */ 19);
/* harmony import */ var _load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.vue?vue&type=script&lang=js& */ 21);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _load_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.vue?vue&type=style&index=0&lang=css& */ 23);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__["render"],
  _load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/load/load.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/*!*****************************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/load/load.vue?vue&type=template&id=0ca8f4c6&name=load& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./load.vue?vue&type=template&id=0ca8f4c6&name=load& */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_template_id_0ca8f4c6_name_load___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/load/load.vue?vue&type=template&id=0ca8f4c6&name=load& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.musicInfo, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var g0 = item.name.length > 12 ? item.name.substr(0, 12) : null
    return {
      $orig: $orig,
      g0: g0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 21 */
/*!*************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/load/load.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./load.vue?vue&type=script&lang=js& */ 22);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/load/load.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _self;var _default =
{
  name: "load",
  data: function data() {
    return {
      devices: [], //设备列表
      primaryServiceUUID: '', //主服务UUID
      readUUID: '', //通知UUID
      writeUUID: '', //写入UUID
      currentVolume: 100,
      isShowVolume: false,
      loading: true,
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      tempFile: [],
      musicInfo: [],
      innerAudioContext: null,
      curMusic: null,
      isMultiSelect: false,
      isSelectedAll: false,
      musicSelected: [],
      playModeIndex: 0,
      playMode: ['cuIcon-musicfill', 'cuIcon-refresh', 'cuIcon-order'],
      isPlaying: false,
      remain: 0,
      remainSec: 0,
      remainMin: 0,
      remainHour: 0,
      remainString: '',
      ready4Play: false };

  },
  computed: {
    playDisabled: function playDisabled() {
      return _self.musicInfo.length == 0 ? true : false;
    } },

  methods: {
    // 改变音量
    ChangeVolume: function ChangeVolume(e) {
      if (_self.innerAudioContext.volume != null) {
        _self.innerAudioContext.volume = e.detail.value / 100;
      }
    },
    // 显示音量滑块
    ShowVolume: function ShowVolume() {
      _self.isShowVolume = true;
    },
    // 隐藏音量滑块
    HideVolume: function HideVolume() {
      _self.isShowVolume = false;
    },
    // 进入多选页面
    MultiSelectStart: function MultiSelectStart() {
      _self.isMultiSelect = true;
    },
    // 全选
    SelectAll: function SelectAll() {
      _self.musicInfo.forEach(function (music, index) {
        music.isSelect = true;
      });
      _self.isSelectedAll = true;
    },
    // 全不选
    SelectNothing: function SelectNothing() {
      _self.musicInfo.forEach(function (music, index) {
        music.isSelect = false;
      });
      _self.isSelectedAll = false;
    },
    // 取消并退出全选页面
    MultiSelectCancel: function MultiSelectCancel() {
      _self.isMultiSelect = false;
      _self.SelectNothing();
    },
    // 删除页面
    deleteMusic: function deleteMusic() {
      var index = 0;
      for (;;) {
        if (_self.musicInfo[index].isSelect) {
          _self.musicInfo.splice(index, 1);
        } else {
          index++;
        }
        if (_self.musicInfo[index] == null) {
          break;
        }
      }
      if (_self.musicInfo.length == 0) {
        _self.isMultiSelect = false;
      }
    },
    // 点击音乐列表时选择音乐
    MusicSelect: function MusicSelect(e) {
      if (_self.isMultiSelect) {
        _self.musicInfo[e.currentTarget.id].isSelect = !_self.musicInfo[e.currentTarget.id].isSelect;
      } else {
        _self.curMusic = e.currentTarget.id;
        getApp().globalData.curMusic = e.currentTarget.id;
        if (_self.isPlaying) {
          _self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path;
        }
        _self.clearRemain();
      }
    },
    // 上一首音乐
    LastMusic: function LastMusic() {
      var musicCnt = _self.musicInfo.length;
      _self.curMusic--;
      getApp().globalData.curMusic--;
      if (_self.curMusic < 0) {
        _self.curMusic = musicCnt - 1;
        getApp().globalData.curMusic = musicCnt - 1;
      }
      if (_self.isPlaying) {
        _self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path;
        _self.clearRemain();
      }
    },
    // 下一首音乐
    NextMusic: function NextMusic() {
      var musicCnt = _self.musicInfo.length;
      _self.curMusic++;
      getApp().globalData.curMusic++;
      if (_self.curMusic >= musicCnt) {
        _self.curMusic;
        getApp().globalData.curMusic = 0;
      }
      if (_self.isPlaying) {
        _self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path;
        _self.clearRemain();
      }
    },
    // 改变播放模式
    ChangePlayMode: function ChangePlayMode() {
      _self.playModeIndex++;
      if (_self.playModeIndex >= 3) {
        _self.playModeIndex = 0;
      }
      switch (_self.playModeIndex) {
        case 0:
          wx.showToast({
            title: '单次播放模式',
            icon: "none" });

          break;
        case 1:
          wx.showToast({
            title: '单曲循环模式',
            icon: "none" });

          break;
        case 2:
          wx.showToast({
            title: '全部循环模式',
            icon: "none" });}


    },
    // 播放和暂停
    PlayPause: function PlayPause() {var _this = this;
      if (_self.musicInfo[_self.curMusic] != null)
      {
        //设置播放状态全局flag
        _self.isPlaying = !_self.isPlaying;
        getApp().globalData.isPlaying = _self.isPlaying;
        //播放行为
        if (_self.isPlaying) {
          if (this.devices.length != 0) {
            setTimeout(function () {
              wx.offBLECharacteristicValueChange();
              wx.notifyBLECharacteristicValueChange({
                deviceId: _this.devices[0].deviceId,
                serviceId: _this.primaryServiceUUID,
                characteristicId: _this.readUUID,
                state: false });

            }, 2000);
            wx.notifyBLECharacteristicValueChange({
              deviceId: this.devices[0].deviceId,
              serviceId: this.primaryServiceUUID,
              characteristicId: this.readUUID,
              state: true,
              success: function success(res) {
                wx.showToast({
                  title: "打开监听Notify成功",
                  icon: "none" });

              },
              fail: function fail(res) {
                wx.showToast({
                  title: "打开监听Nofity失败",
                  icon: 'none' });

              } });

            wx.onBLECharacteristicValueChange(function (res) {
              var u8Arr = new Uint8Array(res.value);
              var testArr = [0x7E, 0x03, 0x62, 0x00, 0xEF];
              console.log("收到监听数据");
              console.log(u8Arr);
              for (var cnt1 = 0; cnt1 < u8Arr.length; cnt1++) {
                for (var cnt2 = 0; cnt2 < 5; cnt2++) {
                  if (u8Arr[cnt1 + cnt2] == testArr[cnt2]) {
                    if (cnt2 == 4) {
                      _self.innerAudioContext.stop();
                      _self.isPlaying = false;
                      getApp().globalData.isPlaying = false;
                      wx.setKeepScreenOn({
                        keepScreenOn: false });

                      _self.clearRemain();
                      wx.showToast({
                        title: "更换失败",
                        icon: "none" });

                    }
                  } else {
                    break;
                  }
                }
              }
            });
            setTimeout(function () {
              var numArr = new Array();
              numArr.push(0x7E);
              numArr.push(0x02);
              numArr.push(0x33);
              numArr.push(0xEF);
              var u8Arr = new Uint8Array(numArr);
              wx.writeBLECharacteristicValue({
                deviceId: _this.devices[0].deviceId,
                serviceId: _this.primaryServiceUUID,
                characteristicId: _this.writeUUID,
                value: u8Arr.buffer,
                success: function success() {
                  console.log("发送成功");
                  console.log(u8Arr.buffer);
                },
                fail: function fail() {
                  console.log("发送失败");
                } });

            }, 100);
          }
          // 设置音乐文件地址
          _self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path;
          // 打开自动播放
          _self.innerAudioContext.autoplay = true;
          // 音乐文件可以播放回调函数
          _self.innerAudioContext.onCanplay(function () {
            _self.innerAudioContext.duration;
            // 设置延时以读取歌曲的时间长度
            setTimeout(function () {
              _self.musicInfo[_self.curMusic].duration = _self.innerAudioContext.duration;
              _self.culculateRemain();
            }, 10);
          });
          // 播放音乐
          setTimeout(function () {
            _self.innerAudioContext.play();
            wx.setKeepScreenOn({
              keepScreenOn: true });

          }, 500);
          // 音乐播放自然停止回调函数
          _self.innerAudioContext.onEnded(function () {
            // 清空剩余时间
            _self.clearRemain();
            // 如果是单曲模式
            if (_self.playModeIndex == 0)
            {
              _self.isPlaying = false;
              getApp().globalData.isPlaying = false;
              wx.setKeepScreenOn({
                keepScreenOn: false });

              var numArr = new Array();
              numArr.push(0x7E);
              numArr.push(0x02);
              numArr.push(0x34);
              numArr.push(0xEF);
              var u8Arr = new Uint8Array(numArr);
              setTimeout(function () {
                wx.writeBLECharacteristicValue({
                  deviceId: _this.devices[0].deviceId,
                  serviceId: _this.primaryServiceUUID,
                  characteristicId: _this.writeUUID,
                  value: u8Arr.buffer,
                  success: function success() {
                    console.log("发送成功");
                    console.log(u8Arr.buffer);
                  },
                  fail: function fail() {
                    console.log("发送失败");
                  } });

              }, 1000);
            }
            // 如果是单曲循环模式
            else if (_self.playModeIndex == 1) {
                _self.innerAudioContext.play();
              }
              // 如果是列表循环模式
              else {
                  _self.curMusic++;
                  if (_self.curMusic > _self.musicInfo.length) {
                    _self.curMusic = 0;
                  }
                  _self.innerAudioContext.src = _self.musicInfo[_self.curMusic].path;
                  _self.innerAudioContext.play();

                }
          });
          // 更新剩余播放时长
          _self.innerAudioContext.onTimeUpdate(function () {
            _self.culculateRemain();
          });
        } else {
          _self.clearRemain();
          _self.innerAudioContext.stop();
          var numArr = new Array();
          numArr.push(0x7E);
          numArr.push(0x02);
          numArr.push(0x34);
          numArr.push(0xEF);
          var u8Arr = new Uint8Array(numArr);
          wx.writeBLECharacteristicValue({
            deviceId: this.devices[0].deviceId,
            serviceId: this.primaryServiceUUID,
            characteristicId: this.writeUUID,
            value: u8Arr.buffer,
            success: function success() {
              console.log("发送成功");
              console.log(u8Arr.buffer);
            },
            fail: function fail() {
              console.log("发送失败");
            } });

        }
      } else {
        wx.showToast({
          title: "请先导入音乐",
          icon: "none" });

      }
    },
    // 计算歌曲的剩余播放时间
    culculateRemain: function culculateRemain() {
      _self.remain = parseInt(_self.innerAudioContext.duration - _self.innerAudioContext.currentTime);
      _self.remainSec = _self.remain % 60;
      _self.remainMin = parseInt(_self.remain / 60);
      _self.remainHour = parseInt(_self.remain / 3600);
      _self.formatTime();
    },
    // 清除歌曲的剩余播放时间
    clearRemain: function clearRemain() {
      _self.remain = 0;
      _self.remainSec = 0;
      _self.remainMin = 0;
      _self.remainHour = 0;
      _self.formatTime();
    },
    // 格式化时间显示
    formatTime: function formatTime() {
      _self.remainString = '';
      if (_self.remainHour < 10)
      {
        _self.remainString += '0';
      }
      _self.remainString += _self.remainHour.toString() + ':';
      if (_self.remainMin < 10)
      {
        _self.remainString += '0';
      }
      _self.remainString += _self.remainMin.toString() + ':';
      if (_self.remainSec < 10)
      {
        _self.remainString += '0';
      }
      _self.remainString += _self.remainSec.toString();
    },
    // 导入微信聊天中的音乐文件
    importMusic: function importMusic() {
      wx.chooseMessageFile({
        //最大选择的文件数量
        count: 10,
        type: 'file',
        //文件格式筛选
        extension: ['mp3', 'wma', 'flac', 'aac'],
        success: function success(res) {
          res.tempFiles.forEach(function (file) {
            _self.musicInfo.push({
              name: file.name,
              duration: null,
              path: file.path,
              isSelect: false,
              currentTime: 0 });

          });
        } });

    } },

  beforeCreate: function beforeCreate() {
    console.log("进入播放页面");
  },
  created: function created() {
    _self = this;
    _self.tempFile = getApp().globalData.tempFile;
    _self.musicInfo = getApp().globalData.musicInfo;
    _self.innerAudioContext = getApp().globalData.innerAudioContext;
    _self.curMusic = getApp().globalData.curMusic;
    _self.isPlaying = getApp().globalData.isPlaying;
    this.devices = getApp().globalData.devices;
    this.primaryServiceUUID = getApp().globalData.primaryServiceUUID;
    this.readUUID = getApp().globalData.readUUID;
    this.writeUUID = getApp().globalData.writeUUID;
  },
  mounted: function mounted() {var _this2 = this;
    if (this.devices.length != 0) {
      wx.notifyBLECharacteristicValueChange({
        deviceId: this.devices[0].deviceId,
        serviceId: this.primaryServiceUUID,
        characteristicId: this.readUUID,
        state: true,
        success: function success(res) {
          wx.showToast({
            title: "打开监听Notify成功",
            icon: "none" });

        },
        fail: function fail(res) {
          wx.showToast({
            title: "打开监听Nofity失败",
            icon: 'none' });

        } });

      wx.onBLECharacteristicValueChange(function (res) {
        wx.offBLECharacteristicValueChange();
        var u8Arr = new Uint8Array(res.value);
        console.log(u8Arr);
        var testArr = [0x7E, 0x02, 0x33, 0xEF];
        for (var cnt1 = 0; cnt1 < u8Arr.length; cnt1++) {
          for (var cnt2 = 0; cnt2 < 4; cnt2++) {
            if (u8Arr[cnt1 + cnt2] == testArr[cnt2]) {
              if (cnt2 == 3) {
                _this2.ready4Play = true;
                wx.notifyBLECharacteristicValueChange({
                  deviceId: _this2.devices[0].deviceId,
                  serviceId: _this2.primaryServiceUUID,
                  characteristicId: _this2.readUUID,
                  state: false });

              }
            } else {
              break;
            }
          }
        }
      });
      var numArr = new Array();
      numArr.push(0x7E);
      numArr.push(0x02);
      numArr.push(0x32);
      numArr.push(0xEF);
      var u8Arr = new Uint8Array(numArr);
      setTimeout(function () {
        wx.writeBLECharacteristicValue({
          deviceId: _this2.devices[0].deviceId,
          serviceId: _this2.primaryServiceUUID,
          characteristicId: _this2.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("发送成功");
            console.log(u8Arr.buffer);
          },
          fail: function fail() {
            console.log("发送失败");
            console.log(u8Arr.buffer);
          } });

      }, 100);
    } else {
      this.ready4Play = true;
    }
  } };exports.default = _default;

/***/ }),
/* 23 */
/*!*********************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/load/load.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./load.vue?vue&type=style&index=0&lang=css& */ 24);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_load_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/load/load.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 25 */
/*!******************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/setting/setting.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=9543fcb0&name=setting& */ 26);
/* harmony import */ var _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js& */ 28);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _setting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.vue?vue&type=style&index=0&lang=css& */ 30);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/setting/setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 26 */
/*!**************************************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/setting/setting.vue?vue&type=template&id=9543fcb0&name=setting& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./setting.vue?vue&type=template&id=9543fcb0&name=setting& */ 27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_template_id_9543fcb0_name_setting___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 27 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/setting/setting.vue?vue&type=template&id=9543fcb0&name=setting& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 28 */
/*!*******************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/setting/setting.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./setting.vue?vue&type=script&lang=js& */ 29);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/setting/setting.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  name: "setting",
  data: function data() {
    return {
      devices: [], //设备列表
      primaryServiceUUID: '', //主服务UUID
      readUUID: '', //通知UUID
      writeUUID: '', //写入UUID
      isSettingLight: false,
      isDownloading: false,
      isSelected: null,
      fileList: [], //文件列表
      lightMode: 'MODE01',
      valueListen: '', //监听的数据
      isMuted: false,
      isSingle: false,
      isAll: false,
      isPlayWhenBoot: false,
      isTimingCancel: false };

  },
  methods: {
    //灯模式返回
    LightBack: function LightBack() {
      this.isSettingLight = false;
    },
    //选择灯模式方法
    ChangeLightMode: function ChangeLightMode(e) {
      this.lightMode = e.detail.value;
      console.log(this.lightMode);
    },
    //下载文件
    DownLoadData: function DownLoadData() {var _this = this;
      console.log("下载文件");
      uni.showToast({
        title: '请稍后...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      if (!this.isDownloading && this.devices.length != 0) {
        this.isDownloading = true;
        wx.notifyBLECharacteristicValueChange({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.readUUID,
          state: true,
          success: function success(res) {
            uni.showToast({
              title: "打开监听Notify成功",
              icon: "none" });

          },
          fail: function fail(res) {
            uni.showToast({
              title: "打开监听Nofity失败",
              icon: 'none' });

          } });

        wx.onBLECharacteristicValueChange(function (res) {
          wx.offBLECharacteristicValueChange();
          var u8Arr = new Uint8Array(res.value);
          console.log(u8Arr);
          var testArr = [0x7E, 0x04, 0x20];
          for (var cnt1 = 0; cnt1 < u8Arr.length; cnt1++) {
            for (var cnt2 = 0; cnt2 < 3; cnt2++) {
              if (u8Arr[cnt1 + cnt2] == testArr[cnt2]) {
                if (cnt2 == 2) {
                  _this.fileList = [];
                  var fileNum = u8Arr[cnt1 + cnt2 + 1] << 8 | u8Arr[cnt1 + cnt2 + 2];
                  for (var cnt = 1; cnt <= fileNum; cnt++) {
                    _this.fileList.push(cnt);
                  }
                  uni.showToast({
                    title: "成功读取" + fileNum + "个文件",
                    icon: "none" });

                }
              } else {
                break;
              }
            }
          }
          setTimeout(function () {
            if (_this.fileList.length == 0) {
              uni.showToast({
                title: "读取失败, 请再试一次",
                icon: "none" });

            }
          }, 100);
          console.log('特征值 ' + res.characteristicId + '已更新, ' + '现在是' + _this.valueListen);
        });
        setTimeout(function () {
          var numArr = new Array();
          numArr.push(0x7E);
          numArr.push(0x02);
          numArr.push(0x19);
          numArr.push(0xEF);
          var u8Arr = new Uint8Array(numArr);
          //写特征值
          wx.writeBLECharacteristicValue({
            deviceId: _this.devices[0].deviceId,
            serviceId: _this.primaryServiceUUID,
            characteristicId: _this.writeUUID,
            value: u8Arr.buffer,
            success: function success(res) {
              console.log("发送成功");
              console.log(u8Arr.buffer);
              uni.showToast({
                title: "发送成功",
                icon: "none" });

            },
            fail: function fail() {
              console.log("发送失败");
              uni.showToast({
                title: "发送失败",
                icon: "none" });

            } });

        }, 100);
        setTimeout(function () {
          _this.isDownloading = false;
          wx.notifyBLECharacteristicValueChange({
            deviceId: _this.devices[0].deviceId,
            serviceId: _this.primaryServiceUUID,
            characteristicId: _this.readUUID,
            state: false });

          wx.offBLECharacteristicValueChange();
        }, 500);
      }
    },
    //打开灯模式二级菜单
    LightMode: function LightMode() {
      console.log("灯模式");
      this.isSettingLight = true;
    },
    //下发灯模式信息
    UploadLightMode: function UploadLightMode() {
      console.log("更新灯模式");
      uni.showToast({
        title: '请稍后...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      this.isSettingLight = false;
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x03);
        numArr.push(0x17);
        numArr.push(Number(this.lightMode.substr(5, 1)));
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("发送数据成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "更新灯模式成功",
              icon: "none" });

          },
          fail: function fail(res) {
            console.log("发送数据失败");
            uni.showToast({
              title: "更新灯模式失败",
              icon: "none" });

          } });

      }
    },
    //到点循环或取消到点循环
    Mute: function Mute() {var _this2 = this;
      //如果处于到点循环模式就取消到点循环, 下发取消到点循环指令
      uni.showToast({
        title: '到点循环...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      if (this.isMuted) {
        console.log("取消到点循环");
        if (this.devices.length) {
          var numArr = new Array();
          numArr.push(0x7E);
          numArr.push(0x03);
          numArr.push(0x15);
          numArr.push(0x00);
          numArr.push(0xEF);
          var u8Arr = new Uint8Array(numArr);
          wx.writeBLECharacteristicValue({
            deviceId: this.devices[0].deviceId,
            serviceId: this.primaryServiceUUID,
            characteristicId: this.writeUUID,
            value: u8Arr.buffer,
            success: function success(res) {
              console.log("发送数据成功");
              console.log(u8Arr.buffer);
              _this2.isMuted = false;
              getApp().globalData.isMuted = _this2.isMuted;
              uni.showToast({
                title: "到点循环成功",
                icon: "none" });

            },
            fail: function fail(res) {
              console.log("发送数据失败");
              uni.showToast({
                title: "到点循环失败",
                icon: "none" });

            } });

        }
      } else {//下发到点循环指令
        console.log("到点循环");
        if (this.devices.length) {
          var _numArr = new Array();
          _numArr.push(0x7E);
          _numArr.push(0x03);
          _numArr.push(0x15);
          _numArr.push(0x01);
          _numArr.push(0xEF);
          var _u8Arr = new Uint8Array(_numArr);
          wx.writeBLECharacteristicValue({
            deviceId: this.devices[0].deviceId,
            serviceId: this.primaryServiceUUID,
            characteristicId: this.writeUUID,
            value: _u8Arr.buffer,
            success: function success(res) {
              console.log("发送数据成功");
              console.log(_u8Arr.buffer);
              _this2.isMuted = true;
              getApp().globalData.isMuted = _this2.isMuted;
              uni.showToast({
                title: "到点循环成功",
                icon: "none" });

              _this2.isMuted = true;
              getApp().globalData.isMuted = _this2.isMuted;
            },
            fail: function fail(res) {
              console.log("发送数据失败");
              uni.showToast({
                title: "到点循环失败",
                icon: "none" });

            } });

        }
      }
    },
    //下发单曲指令
    Single: function Single() {var _this3 = this;
      console.log("单曲");
      uni.showToast({
        title: '单曲',
        icon: 'loading',
        duration: 1000,
        mask: true });

      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x21);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("发送数据成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "设置单曲播放成功",
              icon: "none" });

            _this3.isSingle = true;
            _this3.isAll = false;
            getApp().globalData.isSingle = _this3.isSingle;
            getApp().globalData.isAll = _this3.isAll;
          },
          fail: function fail(res) {
            console.log("发送数据失败");
            uni.showToast({
              title: "设置单曲播放失败",
              icon: "none" });

          } });

      }
    },
    //下发循环指令
    All: function All() {var _this4 = this;
      uni.showToast({
        title: '循环...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log("循环");
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x16);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        // var message = "AT+ALL"
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("发送数据成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "设置循环播放成功",
              icon: "none" });

            _this4.isSingle = false;
            _this4.isAll = true;
            getApp().globalData.isSingle = _this4.isSingle;
            getApp().globalData.isAll = _this4.isAll;
          },
          fail: function fail(res) {
            console.log("发送数据失败");
            uni.showToast({
              title: "设置循坏播放失败",
              icon: "none" });

          } });

      }
    },
    //下发删除指令
    Delete: function Delete() {var _this5 = this;
      console.log("删除");
      uni.showToast({
        title: '删除...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      if (this.devices.length && this.isSelected) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x03);
        numArr.push(0x14);
        numArr.push(this.isSelected);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("发送数据成功");
            console.log(u8Arr.buffer);
            _this5.fileList.splice(_this5.isSelected - 1, 1);
            _this5.isSelected = null;
            uni.hideToast();
            uni.showToast({
              title: "删除文件成功",
              icon: "none" });

          },
          fail: function fail(res) {
            console.log("发送数据失败 " + res.errMsg);
            uni.showToast({
              title: "删除文件失败",
              icon: "none" });

          } });

      } else {
        console.log("未选择");
      }
    },
    //选中文件单选框方法
    Select: function Select(e) {
      this.isSelected = parseInt(e.currentTarget.id) + 1;
      console.log("文件" + this.isSelected + "被选中");
    },
    //试听方法
    Play: function Play(e) {
      uni.showToast({
        title: '试听...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x04);
        numArr.push(0x41);
        numArr.push((parseInt(e.currentTarget.id) + 1 & 0xFF00) >> 8);
        numArr.push(parseInt(e.currentTarget.id) + 1 & 0x00FF);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("成功发送试听命令");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "成功发送试听命令",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("发送试听命令失败");
            uni.showToast({
              title: "发送试听命令失败",
              icon: 'none' });

          } });

      }
    },
    //上电播放方法
    PlayWhenBoot: function PlayWhenBoot() {var _this6 = this;
      uni.showToast({
        title: '上电播放...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log("上电播放");
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x22);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("上电播放发送成功");
            console.log(u8Arr.buffer);
            _this6.isPlayWhenBoot = true;
            getApp().globalData.isPlayWhenBoot = _this6.isPlayWhenBoot;
            uni.showToast({
              title: "上电播放发送成功",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("上电播放发送失败");
            uni.showToast({
              title: "上电播放发送失败",
              icon: 'none' });

          } });

      }
    },
    //开关机方法
    ShutdownBoot: function ShutdownBoot() {
      uni.showToast({
        title: '开关机...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log('开关机');
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x82);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("开关机成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "开关机成功",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("开关机失败");
            uni.showToast({
              title: "开关机失败",
              icon: 'none' });

          } });

      }
    },
    //取消定时方法
    TimingCancel: function TimingCancel() {var _this7 = this;
      uni.showToast({
        title: '定时...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log('定时');
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x84);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("定时成功");
            console.log(u8Arr.buffer);
            _this7.isTimingCancel = true;
            getApp().globalData.isTimingCancel = true;
            uni.showToast({
              title: "定时成功",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("定时失败");
            uni.showToast({
              title: "定时失败",
              icon: 'none' });

          } });

      }
    },
    //上一首方法
    Last: function Last() {
      uni.showToast({
        title: '上一首...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log("上一首");
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x85);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("上一首发送成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "上一首发送成功",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("上一首发送失败");
            uni.showToast({
              title: "上一首发送失败",
              icon: 'none' });

          } });

      }
    },
    //下一首方法
    Next: function Next() {
      uni.showToast({
        title: '下一首...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log("下一首");
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x86);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("下一首发送成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "下一首发送成功",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("下一首发送失败");
            uni.showToast({
              title: "下一首发送失败",
              icon: 'none' });

          } });

      }
    },
    //停止方法
    Stop: function Stop() {
      uni.showToast({
        title: '停止...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log("停止");
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x83);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("停止发送成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "停止发送成功",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("停止发送失败");
            uni.showToast({
              title: "停止发送失败",
              icon: 'none' });

          } });

      }
    },
    //音量加方法
    VolumeIncrease: function VolumeIncrease() {
      uni.showToast({
        title: '音量加...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log("音量加");
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x80);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("音量加发送成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "音量加发送成功",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("音量加发送失败");
            uni.showToast({
              title: "音量加发送失败",
              icon: 'none' });

          } });

      }
    },
    //音量减方法
    VolumeDecrease: function VolumeDecrease() {
      uni.showToast({
        title: '音量减...',
        icon: 'loading',
        duration: 1000,
        mask: true });

      console.log("音量减");
      if (this.devices.length) {
        var numArr = new Array();
        numArr.push(0x7E);
        numArr.push(0x02);
        numArr.push(0x81);
        numArr.push(0xEF);
        var u8Arr = new Uint8Array(numArr);
        wx.writeBLECharacteristicValue({
          deviceId: this.devices[0].deviceId,
          serviceId: this.primaryServiceUUID,
          characteristicId: this.writeUUID,
          value: u8Arr.buffer,
          success: function success(res) {
            console.log("音量减发送成功");
            console.log(u8Arr.buffer);
            uni.showToast({
              title: "音量减发送成功",
              icon: 'none' });

          },
          fail: function fail(res) {
            console.log("音量减发送失败");
            uni.showToast({
              title: "音量减发送失败",
              icon: 'none' });

          } });

      }
    } },

  beforeCreate: function beforeCreate() {
    console.log("进入设置页面");
  },
  created: function created() {
    this.devices = getApp().globalData.devices;
    this.primaryServiceUUID = getApp().globalData.primaryServiceUUID;
    this.readUUID = getApp().globalData.readUUID;
    this.writeUUID = getApp().globalData.writeUUID;
    this.isMuted = getApp().globalData.isMuted;
    this.isSingle = getApp().globalData.isSingle;
    this.isAll = getApp().globalData.isAll;
    this.isTimingCancel = getApp().globalData.isTimingCancel;
    this.isPlayWhenBoot = getApp().globalData.isPlayWhenBoot;
    //在页面创建时打开BLE Notify监听
  },
  mounted: function mounted() {

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 30 */
/*!***************************************************************************************************************!*\
  !*** D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/setting/setting.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./setting.vue?vue&type=style&index=0&lang=css& */ 31);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_setting_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Joyhoo/Documents/Projects/BluetoothPlayer/pages/setting/setting.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map