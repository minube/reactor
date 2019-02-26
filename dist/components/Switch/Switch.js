var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _propTypes=require("prop-types");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _common=require("../../common");var _InputLabel=_interopRequireDefault(require("../Input/InputLabel"));var _Switch=_interopRequireDefault(require("./Switch.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Switch/Switch.js";var COLOR=_common.THEME.COLOR;var Switch=function Switch(_ref){var color=_ref.color,label=_ref.label,onChange=_ref.onChange,inherit=(0,_objectWithoutProperties2.default)(_ref,["color","label","onChange"]);return _react.default.createElement(_reactNative.View,{style:[_Switch.default.container,inherit.style],__source:{fileName:_jsxFileName,lineNumber:14}},_react.default.createElement(_reactNative.Switch,(0,_extends2.default)({},inherit,{activeThumbColor:COLOR.WHITE,activeTrackColor:color||COLOR.PRIMARY,onValueChange:onChange,style:_Switch.default.switch,trackColor:COLOR.BASE,thumbColor:COLOR.WHITE,value:inherit.value||false,__source:{fileName:_jsxFileName,lineNumber:15}})),label&&_react.default.createElement(_InputLabel.default,{style:_Switch.default.label,__source:{fileName:_jsxFileName,lineNumber:26}},label));};Switch.propTypes={color:_propTypes.string,label:_propTypes.string,onChange:_propTypes.func};Switch.defaultProps={color:undefined,label:undefined,onChange:undefined};var _default=Switch;exports.default=_default;