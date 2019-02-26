var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _propTypes=require("prop-types");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _common=require("../../common");var _Button=_interopRequireDefault(require("../Button"));var _Text=_interopRequireDefault(require("../Text"));var _Slider=_interopRequireDefault(require("./Slider.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Slider/Slider.js";var IS_WEB=_common.ENV.IS_WEB;var UNIT=_common.THEME.UNIT;var NEXT='next';var MOMENTUM_INTERVAL=40;var timeout;var Slider=function(_Component){(0,_inherits2.default)(Slider,_Component);function Slider(props){var _this;(0,_classCallCheck2.default)(this,Slider);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Slider).call(this,props));_this._onPressButton=function(type){var _assertThisInitialize=(0,_assertThisInitialized2.default)(_this),_updateScroll=_assertThisInitialize._updateScroll,_assertThisInitialize2=_assertThisInitialize.props,itemMargin=_assertThisInitialize2.itemMargin,_assertThisInitialize3=_assertThisInitialize2.itemWidth,itemWidth=_assertThisInitialize3===void 0?_common.LAYOUT.CARD.SLIDER:_assertThisInitialize3,steps=_assertThisInitialize2.steps,x=_assertThisInitialize.state.x;var width=(itemWidth+itemMargin)*steps;_updateScroll(type===NEXT?x+width:x-width);};_this._onScroll=function(_ref){var x=_ref.nativeEvent.contentOffset.x;var _assertThisInitialize4=(0,_assertThisInitialized2.default)(_this),_updateScroll=_assertThisInitialize4._updateScroll,_assertThisInitialize5=_assertThisInitialize4.props,itemMargin=_assertThisInitialize5.itemMargin,_assertThisInitialize6=_assertThisInitialize5.itemWidth,itemWidth=_assertThisInitialize6===void 0?_common.LAYOUT.CARD.SLIDER:_assertThisInitialize6;var width=itemWidth+itemMargin;if(!Number.isInteger(x/width)){clearTimeout(timeout);timeout=setTimeout(function(){return _updateScroll(Math.round(x/width)*width);},MOMENTUM_INTERVAL*2);}};_this._updateScroll=function(x){_this.scrollview.scrollTo({x:x});_this.setState({x:x});};_this.state={x:0};return _this;}(0,_createClass2.default)(Slider,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(){this.setState({x:0});}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(_ref2){var _ref2$dataSource=_ref2.dataSource,dataSource=_ref2$dataSource===void 0?[]:_ref2$dataSource;var props=this.props;return JSON.stringify(dataSource)!==JSON.stringify(props.dataSource);}},{key:"render",value:function render(){var _this2=this;var _onPressButton=this._onPressButton,_onScroll=this._onScroll,_this$props=this.props,caption=_this$props.caption,dataSource=_this$props.dataSource,Item=_this$props.item,marginRight=_this$props.itemMargin,momentum=_this$props.momentum,navigation=_this$props.navigation,title=_this$props.title,inherit=(0,_objectWithoutProperties2.default)(_this$props,["caption","dataSource","item","itemMargin","momentum","navigation","title"]);return _react.default.createElement(_reactNative.View,{style:_Slider.default.container,__source:{fileName:_jsxFileName,lineNumber:93}},(title||caption)&&_react.default.createElement(_reactNative.View,{style:_Slider.default.header,__source:{fileName:_jsxFileName,lineNumber:96}},title&&_react.default.createElement(_Text.default,{bold:true,large:true,style:_Slider.default.title,__source:{fileName:_jsxFileName,lineNumber:98}},title),caption&&_react.default.createElement(_Text.default,{small:true,style:_Slider.default.caption,__source:{fileName:_jsxFileName,lineNumber:102}},caption)),navigation&&_react.default.createElement(_reactNative.View,{style:[_Slider.default.navigation,_Slider.default.previous],__source:{fileName:_jsxFileName,lineNumber:108}},_react.default.createElement(_Button.default,{icon:"left",onPress:_onPressButton,small:true,__source:{fileName:_jsxFileName,lineNumber:109}})),navigation&&_react.default.createElement(_reactNative.View,{style:[_Slider.default.navigation,_Slider.default.next],__source:{fileName:_jsxFileName,lineNumber:113}},_react.default.createElement(_Button.default,{icon:"right",onPress:function onPress(){return _onPressButton(NEXT);},small:true,__source:{fileName:_jsxFileName,lineNumber:114}})),_react.default.createElement(_reactNative.ScrollView,{contentContainerStyle:inherit.style,horizontal:true,onScroll:momentum?_onScroll:undefined,ref:function ref(scrollview){return _this2.scrollview=scrollview;},scrollEventThrottle:MOMENTUM_INTERVAL,__source:{fileName:_jsxFileName,lineNumber:117}},dataSource.map(function(data,index){return _react.default.createElement(_reactNative.View,{key:index,style:{marginRight:marginRight},__source:{fileName:_jsxFileName,lineNumber:125}},_react.default.createElement(Item,{data:data,__source:{fileName:_jsxFileName,lineNumber:125}}));})));}}]);return Slider;}(_react.Component);Slider.propTypes={caption:_propTypes.string,dataSource:(0,_propTypes.arrayOf)((0,_propTypes.shape)({})),item:_propTypes.func,itemMargin:_propTypes.number,itemWidth:_propTypes.number,momentum:_propTypes.bool,navigation:_propTypes.bool,steps:_propTypes.number,title:_propTypes.string};Slider.defaultProps={caption:undefined,dataSource:[],item:function item(){},itemMargin:UNIT,itemWidth:undefined,momentum:IS_WEB,navigation:IS_WEB,steps:1,title:undefined};var _default=Slider;exports.default=_default;