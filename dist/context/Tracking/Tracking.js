var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.ProviderTracking=exports.ConsumerTracking=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _propTypes=require("prop-types");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _environment=_interopRequireDefault(require("../../common/environment"));var _shape=_interopRequireDefault(require("../../common/shape"));var _modules=require("./modules");var _package=_interopRequireDefault(require("../../package.json"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/context/Tracking/Tracking.js";var IS_WEB=_environment.default.IS_WEB,IS_SERVER=_environment.default.IS_SERVER;var _createContext=(0,_react.createContext)('reactor:tracking'),Provider=_createContext.Provider,ConsumerTracking=_createContext.Consumer;exports.ConsumerTracking=ConsumerTracking;var STORE_EVENTS=_package.default.name+":events";var MINUBE_USER_ID='mn_user_id';var AMPLITUDE_DATA='mn_amplitude_data';var eventId=1;var ProviderTracking=function(_PureComponent){(0,_inherits2.default)(ProviderTracking,_PureComponent);function ProviderTracking(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,ProviderTracking);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(ProviderTracking)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={fingerprint:undefined,session:undefined};_this._signup=function _callee(){var _assertThisInitialize,_syncEvents,_assertThisInitialize2,session,cookie,fingerprint,_ref,deviceId,sessionId,userId;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_assertThisInitialize=(0,_assertThisInitialized2.default)(_this),_syncEvents=_assertThisInitialize._syncEvents,_assertThisInitialize2=_assertThisInitialize.props.session,session=_assertThisInitialize2===void 0?{}:_assertThisInitialize2;cookie=(0,_modules.getCookie)('reactor:request');if(IS_SERVER){_context.next=23;break;}_context.next=5;return _regenerator.default.awrap(new _modules.Fingerprint());case 5:fingerprint=_context.sent;if(!IS_WEB){_context.next=21;break;}_context.next=9;return _regenerator.default.awrap(_modules.AsyncStore.getItem(AMPLITUDE_DATA));case 9:_context.t0=_context.sent;if(_context.t0){_context.next=12;break;}_context.t0={};case 12:_ref=_context.t0;deviceId=_ref.deviceId;sessionId=_ref.sessionId;_context.next=17;return _regenerator.default.awrap(_modules.AsyncStore.getItem(MINUBE_USER_ID));case 17:userId=_context.sent;if(deviceId)session.device_id=deviceId;if(sessionId)session.session_id=sessionId;if(userId)session.user_id=userId;case 21:_context.next=23;return _regenerator.default.awrap((0,_modules.fetch)((0,_objectSpread2.default)({},fingerprint,session,{userProperties:cookie?JSON.parse(cookie):cookie}),'session'));case 23:_this.setState({isConnected:true,fingerprint:fingerprint,session:(0,_objectSpread2.default)({},session,{session_id:new Date().getTime()})});if(!IS_SERVER){_syncEvents();_reactNative.NetInfo.addEventListener('connectionChange',_syncEvents);}case 25:case"end":return _context.stop();}}});};_this._syncEvents=function _callee2(){var _assertThisInitialize3,state,events,isConnected;return _regenerator.default.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_assertThisInitialize3=(0,_assertThisInitialized2.default)(_this),state=_assertThisInitialize3.state;_context2.next=3;return _regenerator.default.awrap(_modules.AsyncStore.getItem(STORE_EVENTS));case 3:_context2.t0=_context2.sent;if(_context2.t0){_context2.next=6;break;}_context2.t0=[];case 6:events=_context2.t0;_context2.next=9;return _regenerator.default.awrap(_reactNative.NetInfo.isConnected.fetch());case 9:isConnected=_context2.sent;if(!(isConnected&&events.length>0)){_context2.next=15;break;}_context2.next=13;return _regenerator.default.awrap((0,_modules.fetch)(events));case 13:_context2.next=15;return _regenerator.default.awrap(_modules.AsyncStore.setItem(STORE_EVENTS,[]));case 15:if(isConnected!==state.isConnected)_this.setState({isConnected:isConnected});case 16:case"end":return _context2.stop();}}});};_this._storeEvent=function _callee3(event){var events;return _regenerator.default.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _regenerator.default.awrap(_modules.AsyncStore.getItem(STORE_EVENTS));case 2:_context3.t0=_context3.sent;if(_context3.t0){_context3.next=5;break;}_context3.t0=[];case 5:events=_context3.t0;_context3.next=8;return _regenerator.default.awrap(_modules.AsyncStore.setItem(STORE_EVENTS,[].concat((0,_toConsumableArray2.default)(events),[event])));case 8:case"end":return _context3.stop();}}});};_this.logEvent=function(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},type=_ref2.type,props=(0,_objectWithoutProperties2.default)(_ref2,["type"]);if(IS_SERVER)return;var _assertThisInitialize4=(0,_assertThisInitialized2.default)(_this),_storeEvent=_assertThisInitialize4._storeEvent,_assertThisInitialize5=_assertThisInitialize4.state,isConnected=_assertThisInitialize5.isConnected,fingerprint=_assertThisInitialize5.fingerprint,session=_assertThisInitialize5.session;var event=(0,_objectSpread2.default)({},fingerprint,session,{event_id:eventId,event_properties:props,event_type:type,sequence_number:eventId});eventId+=1;if(isConnected)(0,_modules.fetch)(event);else _storeEvent(event);};return _this;}(0,_createClass2.default)(ProviderTracking,[{key:"componentWillMount",value:function componentWillMount(){var _signup,signup;return _regenerator.default.async(function componentWillMount$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_signup=this._signup,signup=this.props.signup;if(signup)_signup();case 2:case"end":return _context4.stop();}}},null,this);}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(_ref3){var signup=_ref3.signup;var _signup=this._signup,props=this.props;if(signup===true&&signup!==props.signup)_signup();}},{key:"render",value:function render(){var logEvent=this.logEvent,children=this.props.children,_this$state=this.state,state=_this$state===void 0?{}:_this$state;return _react.default.createElement(Provider,{value:(0,_objectSpread2.default)({logEvent:logEvent},state),__source:{fileName:_jsxFileName,lineNumber:128}},children);}}]);return ProviderTracking;}(_react.PureComponent);exports.ProviderTracking=ProviderTracking;ProviderTracking.propTypes={children:_propTypes.node,session:(0,_propTypes.shape)(_shape.default.SESSION),signup:_propTypes.bool};ProviderTracking.defaultProps={children:undefined,session:undefined,signup:true};