var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _react2=require("@storybook/react");var _addonActions=require("@storybook/addon-actions");var _react3=require("@storybook/addon-knobs/react");var _Image=_interopRequireDefault(require("./Image"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Image/Image.story.js";var IMAGE_PLACEHOLDER='https://picsum.photos/320/200/?random';var IMAGE_AKAMAI='https://imgs-akamai.mnstatic.com//tools//genericimages//fc5b42a5baceed399c3bb913406693fd3d4d64ef8bb69457697c90cb71b2c4dd.jpg';var DEFAULT_STYLE={width:320,height:240};var CUSTOM_STYLE={borderRadius:64,height:128,width:128};var SOURCE={uri:IMAGE_PLACEHOLDER};(0,_react2.storiesOf)('✅ Image',module).add('default',function(){return _react.default.createElement(_Image.default,{source:SOURCE,style:DEFAULT_STYLE,__source:{fileName:_jsxFileName,lineNumber:20}});}).add('without source',function(){return _react.default.createElement(_Image.default,{style:DEFAULT_STYLE,__source:{fileName:_jsxFileName,lineNumber:23}});}).add('small activity',function(){return _react.default.createElement(_Image.default,{size:"small",style:DEFAULT_STYLE,__source:{fileName:_jsxFileName,lineNumber:26}});}).add('resizeMode',function(){return _react.default.createElement(_Image.default,{resizeMode:"cover",source:SOURCE,style:DEFAULT_STYLE,__source:{fileName:_jsxFileName,lineNumber:29}});}).add('responsive',function(){return _react.default.createElement(_Image.default,{responsive:true,source:{uri:IMAGE_AKAMAI},style:DEFAULT_STYLE,__source:{fileName:_jsxFileName,lineNumber:32}});}).add('ratio',function(){return _react.default.createElement(_Image.default,{ratio:10,responsive:true,source:{uri:IMAGE_AKAMAI},style:DEFAULT_STYLE,__source:{fileName:_jsxFileName,lineNumber:35}});}).add('⚡ onLoad',function(){return _react.default.createElement(_Image.default,{onLoad:(0,_addonActions.action)('Image.onLoad()'),source:SOURCE,style:DEFAULT_STYLE,__source:{fileName:_jsxFileName,lineNumber:38}});}).add('style',function(){return _react.default.createElement(_Image.default,{source:SOURCE,style:CUSTOM_STYLE,__source:{fileName:_jsxFileName,lineNumber:41}});}).add('🏀 Playground',function(){return _react.default.createElement(_Image.default,{small:(0,_react3.boolean)('small',false),ratio:(0,_react3.number)('ratio',false),responsive:(0,_react3.boolean)('responsive',false),onLoad:(0,_addonActions.action)('Button.onLoad()'),source:(0,_react3.object)('source',SOURCE,'image-source'),style:(0,_react3.object)('style',DEFAULT_STYLE,'image-style'),__source:{fileName:_jsxFileName,lineNumber:47}});});