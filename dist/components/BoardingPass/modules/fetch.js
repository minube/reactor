var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _common=require("../../../common");var IS_PRODUCTION=_common.ENV.IS_PRODUCTION;var DEFAULT_METHOD='GET';var ENDPOINT=IS_PRODUCTION?'mapi.minube.com':'staging.mapi.minube.com';var FORM_METHODS=['POST'];var HEADER_JSON={'Content-Type':'application/json; charset=UTF-8','X-Requested-With':'XMLHttpRequest'};var HEADER_FORM={'Content-Type':'application/json; charset=UTF-8'};if(typeof global.self==='undefined')global.self=global;var _callee2=function _callee2(_ref){var _ref$endpoint,endpoint,headers,_ref$method,method,_ref$secure,secure,service,props;return _regenerator.default.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_ref$endpoint=_ref.endpoint,endpoint=_ref$endpoint===void 0?ENDPOINT:_ref$endpoint,headers=_ref.headers,_ref$method=_ref.method,method=_ref$method===void 0?DEFAULT_METHOD:_ref$method,_ref$secure=_ref.secure,secure=_ref$secure===void 0?false:_ref$secure,service=_ref.service,props=(0,_objectWithoutProperties2.default)(_ref,["endpoint","headers","method","secure","service"]);return _context2.abrupt("return",new Promise(function(resolve,reject){fetch((secure?'https':'http')+"://"+endpoint+"/"+service,(0,_objectSpread2.default)({headers:(0,_objectSpread2.default)({},FORM_METHODS.includes(method)?HEADER_FORM:HEADER_JSON,headers),method:method},props)).then(function _callee(response){var json;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator.default.awrap(response.json());case 2:json=_context.sent;if(response.status>=400)reject({code:response.status,message:json.message});else resolve(json);case 4:case"end":return _context.stop();}}});}).catch(function(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref2$message=_ref2.message,message=_ref2$message===void 0?'ERROR_CONNECTION':_ref2$message,response=_ref2.response;reject({code:response?response.status:500,message:message});});}));case 2:case"end":return _context2.stop();}}});};exports.default=_callee2;