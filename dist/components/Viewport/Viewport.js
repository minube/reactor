var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _propTypes=require("prop-types");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _common=require("../../common");var _Motion=_interopRequireDefault(require("../Motion"));var _Viewport=_interopRequireDefault(require("./Viewport.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Viewport/Viewport.js";var MOTION=_common.THEME.MOTION;var IS_NATIVE=_common.ENV.IS_NATIVE;var Viewport=function(_PureComponent){(0,_inherits2.default)(Viewport,_PureComponent);function Viewport(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Viewport);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Viewport)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={height:IS_NATIVE?_common.LAYOUT.VIEWPORT.H:'100vh',width:IS_NATIVE?_common.LAYOUT.VIEWPORT.W:'100vw'};_this._onScroll=function(_ref){var y=_ref.nativeEvent.contentOffset.y;var _assertThisInitialize=(0,_assertThisInitialized2.default)(_this),onScroll=_assertThisInitialize.props.onScroll;onScroll({y:y});};return _this;}(0,_createClass2.default)(Viewport,[{key:"render",value:function render(){var _onScroll=this._onScroll,_this$props=this.props,backward=_this$props.backward,children=_this$props.children,onScroll=_this$props.onScroll,scroll=_this$props.scroll,styleContent=_this$props.styleContent,visible=_this$props.visible,inherit=(0,_objectWithoutProperties2.default)(_this$props,["backward","children","onScroll","scroll","styleContent","visible"]),_this$state=this.state,height=_this$state.height,width=_this$state.width;return _react.default.createElement(_Motion.default,{duration:MOTION.DURATION,style:[_Viewport.default.container,{height:height,width:width},inherit.style],timeline:backward&&visible?[{property:'translateX',value:-64}]:[{property:'translateX',value:visible?0:width}],__source:{fileName:_jsxFileName,lineNumber:53}},_react.default.createElement(_reactNative.SafeAreaView,{style:_Viewport.default.safeArea,__source:{fileName:_jsxFileName,lineNumber:60}},(0,_react.createElement)(scroll?_reactNative.ScrollView:_reactNative.View,(0,_objectSpread2.default)({},scroll&&onScroll?{onScroll:_onScroll,scrollEventThrottle:32}:{},{style:[_Viewport.default.content,styleContent]}),children)));}}]);return Viewport;}(_react.PureComponent);Viewport.propTypes={backward:_propTypes.bool,children:_propTypes.node,onScroll:_propTypes.func,scroll:_propTypes.bool,styleContent:(0,_propTypes.oneOfType)([_propTypes.array,_propTypes.number,_propTypes.object]),visible:_propTypes.bool};Viewport.defaultProps={backward:false,children:undefined,onScroll:undefined,scroll:true,styleContent:[],visible:true};var _default=Viewport;exports.default=_default;