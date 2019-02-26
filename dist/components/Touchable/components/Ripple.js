var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _propTypes=require("prop-types");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _common=require("../../../common");var _Ripple=_interopRequireDefault(require("./Ripple.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Touchable/components/Ripple.js";var COLOR=_common.THEME.COLOR;var DEFAULTS={OPACITY:0.3,RADIUS:10};var Ripple=function Ripple(_ref){var color=_ref.color,progress=_ref.progress,range=_ref.range,x=_ref.x,y=_ref.y;return _react.default.createElement(_reactNative.Animated.View,{style:[_Ripple.default.ripple,{top:y-DEFAULTS.RADIUS,left:x-DEFAULTS.RADIUS,backgroundColor:color,transform:[{scale:progress.interpolate({inputRange:[0,1],outputRange:[0.5/DEFAULTS.RADIUS,range/DEFAULTS.RADIUS]})}],opacity:progress.interpolate({inputRange:[0,1],outputRange:[DEFAULTS.OPACITY,0]})}],__source:{fileName:_jsxFileName,lineNumber:17}});};Ripple.propTypes={color:_propTypes.string,progress:(0,_propTypes.shape)({}),x:_propTypes.number,y:_propTypes.number,range:_propTypes.number};Ripple.defaultProps={color:COLOR.BASE,progress:new _reactNative.Animated.Value(0),x:0,y:0,range:0};var _default=Ripple;exports.default=_default;