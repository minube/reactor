var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _reactNative=require("react-native");var _common=require("../../common");var UNIT=_common.THEME.UNIT,SPACE=_common.THEME.SPACE;var _default=_reactNative.StyleSheet.create({container:(0,_objectSpread2.default)({},_common.LAYOUT.STYLE.ROW,{alignSelf:'flex-end',height:UNIT*4.4,marginBottom:SPACE.REGULAR}),label:{marginBottom:0},switch:{height:UNIT*2.8}});exports.default=_default;