Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _default=function _default(){var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return Object.keys(props).map(function(key){return encodeURIComponent(key)+"="+encodeURIComponent(props[key]);}).join('&');};exports.default=_default;