var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _reactNative=require("react-native");var _default={getItem:function getItem(key){var store;return _regenerator.default.async(function getItem$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator.default.awrap(_reactNative.AsyncStorage.getItem(key));case 2:store=_context.sent;_context.prev=3;return _context.abrupt("return",JSON.parse(store));case 7:_context.prev=7;_context.t0=_context["catch"](3);return _context.abrupt("return",store);case 10:case"end":return _context.stop();}}},null,null,[[3,7]]);},setItem:function setItem(key,value){return _regenerator.default.async(function setItem$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _regenerator.default.awrap(_reactNative.AsyncStorage.setItem(key,JSON.stringify(value)));case 2:case"end":return _context2.stop();}}});}};exports.default=_default;