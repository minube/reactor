var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _presets=_interopRequireDefault(require("./presets"));var _default=function _default(preset,visible){var _ref=_presets.default[preset.toUpperCase()]||_presets.default.POP,IN=_ref.IN,OUT=_ref.OUT;return visible?IN:OUT;};exports.default=_default;