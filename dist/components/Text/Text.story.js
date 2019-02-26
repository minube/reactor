var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _react2=require("@storybook/react");var _react3=require("@storybook/addon-knobs/react");var _common=require("../../common");var _Text=_interopRequireDefault(require("./Text"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Text/Text.story.js";var LOREM="Lorem Ipsum is simply dummy text of the printing and typesetting industry.";var LIPSUM="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";var style={backgroundColor:'rgba(0,255,0,0.25)',padding:10};(0,_react2.storiesOf)('✅ Text',module).add('default',function(){return _react.default.createElement(_Text.default,{__source:{fileName:_jsxFileName,lineNumber:17}},LIPSUM);}).add('headline (0)',function(){return _react.default.createElement(_Text.default,{headline:true,level:0,__source:{fileName:_jsxFileName,lineNumber:20}},LOREM);}).add('headline (1)',function(){return _react.default.createElement(_Text.default,{headline:true,level:1,__source:{fileName:_jsxFileName,lineNumber:23}},LOREM);}).add('headline (2)',function(){return _react.default.createElement(_Text.default,{headline:true,level:2,__source:{fileName:_jsxFileName,lineNumber:26}},LOREM);}).add('headline (3)',function(){return _react.default.createElement(_Text.default,{headline:true,level:3,__source:{fileName:_jsxFileName,lineNumber:29}},LOREM);}).add('headline (4)',function(){return _react.default.createElement(_Text.default,{headline:true,level:4,__source:{fileName:_jsxFileName,lineNumber:32}},LOREM);}).add('headline (5)',function(){return _react.default.createElement(_Text.default,{headline:true,level:5,__source:{fileName:_jsxFileName,lineNumber:35}},LOREM);}).add('headline (6)',function(){return _react.default.createElement(_Text.default,{headline:true,level:6,__source:{fileName:_jsxFileName,lineNumber:38}},LOREM);}).add('subtitle (1)',function(){return _react.default.createElement(_Text.default,{subtitle:true,level:1,__source:{fileName:_jsxFileName,lineNumber:41}},LIPSUM);}).add('subtitle (2)',function(){return _react.default.createElement(_Text.default,{subtitle:true,level:2,__source:{fileName:_jsxFileName,lineNumber:44}},LIPSUM);}).add('subtitle (3)',function(){return _react.default.createElement(_Text.default,{subtitle:true,level:3,__source:{fileName:_jsxFileName,lineNumber:47}},LIPSUM);}).add('body (1)',function(){return _react.default.createElement(_Text.default,{body:true,level:1,__source:{fileName:_jsxFileName,lineNumber:50}},LIPSUM);}).add('body (2)',function(){return _react.default.createElement(_Text.default,{body:true,level:2,__source:{fileName:_jsxFileName,lineNumber:53}},LIPSUM);}).add('body (3)',function(){return _react.default.createElement(_Text.default,{body:true,level:3,__source:{fileName:_jsxFileName,lineNumber:56}},LIPSUM);}).add('caption (1)',function(){return _react.default.createElement(_Text.default,{body:true,caption:true,level:1,__source:{fileName:_jsxFileName,lineNumber:59}},LIPSUM);}).add('caption (2)',function(){return _react.default.createElement(_Text.default,{body:true,caption:true,level:2,__source:{fileName:_jsxFileName,lineNumber:62}},LIPSUM);}).add('lighten',function(){return _react.default.createElement(_Text.default,{lighten:true,__source:{fileName:_jsxFileName,lineNumber:65}},LIPSUM);}).add('color',function(){return _react.default.createElement(_Text.default,{color:_common.THEME.COLOR.ERROR,__source:{fileName:_jsxFileName,lineNumber:68}},LIPSUM);}).add('numberOfLines',function(){return _react.default.createElement(_Text.default,{numberOfLines:1,__source:{fileName:_jsxFileName,lineNumber:71}},LIPSUM);}).add('style',function(){return _react.default.createElement(_Text.default,{style:style,__source:{fileName:_jsxFileName,lineNumber:74}},"Customized Text");}).add('🏀 Playground',function(){return _react.default.createElement(_Text.default,{headline:(0,_react3.boolean)('headline',false),subtitle:(0,_react3.boolean)('subtitle',false),body:(0,_react3.boolean)('body',true),caption:(0,_react3.boolean)('caption',false),level:(0,_react3.number)('level',1),lighten:(0,_react3.boolean)('lighten',false),color:(0,_react3.color)('color',_common.THEME.COLOR.TEXT),numberOfLines:(0,_react3.number)('numberOfLines',1),__source:{fileName:_jsxFileName,lineNumber:77}},(0,_react3.text)('content',LOREM));});