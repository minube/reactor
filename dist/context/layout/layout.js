var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _reactNative=require("react-native");var _modules=require("./modules");var Layout=function(){function Layout(){(0,_classCallCheck2.default)(this,Layout);if(!Layout.instance){var _Dimensions$get=_reactNative.Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;Layout.instance=this;this.height=height||640;this.width=width||360;this.style=(0,_modules.renderStyle)(width);}return Layout.instance;}(0,_createClass2.default)(Layout,[{key:"calc",value:function calc(size,userAgent){var height=this.height,width=this.width;if(!size&&!userAgent){var _Dimensions$get2=_reactNative.Dimensions.get('window');height=_Dimensions$get2.height;width=_Dimensions$get2.width;}else if(size){height=size.height;width=size.width;}else if(userAgent){var _userAgentScreenSize=(0,_modules.userAgentScreenSize)(userAgent);height=_userAgentScreenSize.height;width=_userAgentScreenSize.width;}this.height=height;this.width=width;this.style=(0,_modules.renderStyle)(width);}},{key:"CARD",get:function get(){return this.style.CARD;}},{key:"TEXT",get:function get(){return this.style.TEXT;}},{key:"STYLE",get:function get(){return _modules.style;}},{key:"VIEWPORT",get:function get(){var H=this.height,W=this.width;var PORTRAIT=H>W;return(0,_objectSpread2.default)({H:H,W:W,PORTRAIT:PORTRAIT,LANDSCAPE:W>H,IPHONEX:PORTRAIT&&H===812&&_reactNative.Platform.OS==='ios'&&!_reactNative.Platform.isPad&&!_reactNative.Platform.isTVOS},(0,_modules.screenType)(W));}}]);return Layout;}();var _default=new Layout();exports.default=_default;