var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _common=require("../../common");var _Image=_interopRequireDefault(require("./Image"));var Loading=_common.ENV.IS_SERVER?require('./Image.server').default:_Image.default;var _default=Loading;exports.default=_default;