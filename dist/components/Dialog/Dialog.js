var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _propTypes=require("prop-types");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _common=require("../../common");var _Button=_interopRequireDefault(require("../Button"));var _Motion=_interopRequireDefault(require("../Motion"));var _Text=_interopRequireDefault(require("../Text"));var _Dialog=_interopRequireDefault(require("./Dialog.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Dialog/Dialog.js";var IS_NATIVE=_common.ENV.IS_NATIVE;var COLOR=_common.THEME.COLOR,MOTION=_common.THEME.MOTION;var Dialog=function(_PureComponent){(0,_inherits2.default)(Dialog,_PureComponent);function Dialog(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Dialog);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Dialog)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={scroll:false};_this._onScroll=function(){_this.setState({scroll:true});};return _this;}(0,_createClass2.default)(Dialog,[{key:"render",value:function render(){var _onScroll=this._onScroll,_this$props=this.props,background=_this$props.background,children=_this$props.children,highlight=_this$props.highlight,reverse=_this$props.reverse,onClose=_this$props.onClose,style=_this$props.style,styleContainer=_this$props.styleContainer,title=_this$props.title,visible=_this$props.visible,scroll=this.state.scroll;var _LAYOUT$VIEWPORT=_common.LAYOUT.VIEWPORT,H=_LAYOUT$VIEWPORT.H,PORTRAIT=_LAYOUT$VIEWPORT.PORTRAIT;var translateY=0;if(!visible)translateY=reverse?-H:H;return _react.default.createElement(_Motion.default,{delay:visible?0:MOTION.DURATION,pointerEvents:(background||IS_NATIVE)&&visible?'auto':'none',style:_Dialog.default.container,timeline:[{property:'opacity',value:visible?1:0}],__source:{fileName:_jsxFileName,lineNumber:64}},_react.default.createElement(_reactNative.SafeAreaView,{style:[_Dialog.default.safeArea,background&&_Dialog.default.background,styleContainer],__source:{fileName:_jsxFileName,lineNumber:70}},_react.default.createElement(_reactNative.KeyboardAvoidingView,{behavior:IS_NATIVE?'position':undefined,style:[{maxHeight:PORTRAIT?'100%':'90%',minWidth:PORTRAIT?320:'33%',maxWidth:PORTRAIT?'100%':'66%',position:'absolute'},{backgroundColor:COLOR.TRANSPARENT}],__source:{fileName:_jsxFileName,lineNumber:71}},_react.default.createElement(_Motion.default,{delay:visible?MOTION.DURATION:0,duration:MOTION.DURATION,pointerEvents:"auto",type:"timing",timeline:[{property:'translateY',value:translateY}],__source:{fileName:_jsxFileName,lineNumber:83}},_react.default.createElement(_reactNative.View,{style:[_Dialog.default.frame,style],__source:{fileName:_jsxFileName,lineNumber:90}},_react.default.createElement(_reactNative.View,{style:_Dialog.default.header,__source:{fileName:_jsxFileName,lineNumber:91}},title&&_react.default.createElement(_Text.default,{color:highlight?COLOR.WHITE:undefined,headline:true,level:6,numberOfLines:1,style:_Dialog.default.title,__source:{fileName:_jsxFileName,lineNumber:93}},title),onClose&&_react.default.createElement(_Button.default,{contained:false,color:highlight?undefined:COLOR.TEXT,icon:highlight?'closeContrast':'close',onPress:onClose,rounded:true,__source:{fileName:_jsxFileName,lineNumber:103}})),_react.default.createElement(_reactNative.ScrollView,{onScroll:title?_onScroll:undefined,style:[_Dialog.default.children,scroll&&_Dialog.default.scroll],__source:{fileName:_jsxFileName,lineNumber:111}},children))))));}}]);return Dialog;}(_react.PureComponent);exports.default=Dialog;Dialog.propTypes={background:_propTypes.bool,children:_propTypes.node,highlight:_propTypes.bool,onClose:_propTypes.func,reverse:_propTypes.bool,style:(0,_propTypes.oneOfType)([_propTypes.array,_propTypes.number,_propTypes.object]),styleContainer:(0,_propTypes.oneOfType)([_propTypes.array,_propTypes.number,_propTypes.object]),title:_propTypes.string,visible:_propTypes.bool};Dialog.defaultProps={background:true,children:undefined,highlight:undefined,onClose:undefined,reverse:false,style:[],styleContainer:[],title:undefined,visible:false};