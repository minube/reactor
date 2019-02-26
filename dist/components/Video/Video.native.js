var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _propTypes=require("prop-types");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _modules=require("./modules");var _Video=_interopRequireDefault(require("./Video.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Video/Video.native.js";var Video=function Video(_ref){var onLoad=_ref.onLoad,height=_ref.height,width=_ref.width,inherit=(0,_objectWithoutProperties2.default)(_ref,["onLoad","height","width"]);var dimensions={height:height,width:width,maxHeight:height,maxWidth:width};return _react.default.createElement(_reactNative.View,{style:[_Video.default.container,dimensions,inherit.style],__source:{fileName:_jsxFileName,lineNumber:18}},_react.default.createElement(_reactNative.WebView,{allowsInlineMediaPlayback:true,mediaPlaybackRequiresUserAction:false,scalesPageToFit:false,scrollEnabled:false,onLoadStart:onLoad,source:{html:(0,_modules.htmlVideo)((0,_objectSpread2.default)({height:height,width:width},inherit))},style:[_Video.default.webView,dimensions],__source:{fileName:_jsxFileName,lineNumber:19}}));};Video.propTypes={autoPlay:_propTypes.bool,controls:_propTypes.bool,height:_propTypes.number,onLoad:_propTypes.func,preload:_propTypes.bool,source:_propTypes.string.isRequired,width:_propTypes.number};Video.defaultProps={autoPlay:false,controls:false,height:180,onLoad:function onLoad(){},preload:false,width:320};var _default=Video;exports.default=_default;