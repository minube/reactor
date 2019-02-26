var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _propTypes=require("prop-types");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Text=_interopRequireDefault(require("../../Text"));var _Touchable=_interopRequireDefault(require("../../Touchable"));var _Calendar=_interopRequireWildcard(require("../Calendar.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Calendar/components/Week.js";var onPress=function onPress(_ref){var day=_ref.day,tsDay=_ref.tsDay,tsStart=_ref.tsStart,tsEnd=_ref.tsEnd,onSelect=_ref.onSelect,range=_ref.range,value=_ref.value;if(!range)onSelect(day);else if(tsDay<tsStart)onSelect([day,value[0]]);else if(!tsStart||tsEnd>tsStart)onSelect([day]);else if(tsDay>tsStart)onSelect([value[0],day]);};var Week=function Week(_ref2){var firstDate=_ref2.firstDate,inherit=(0,_objectWithoutProperties2.default)(_ref2,["firstDate"]);var availableDates=inherit.availableDates,captions=inherit.captions,disabledDates=inherit.disabledDates,disabledPast=inherit.disabledPast,month=inherit.month,today=inherit.today,value=inherit.value;var tsToday=today.getTime();var tsStart;var tsEnd;var tsAvailableDates;var tsCaptionsDates;var tsDisabledDates;if(availableDates)tsAvailableDates=availableDates.map(function(d){return d.getTime();});else if(captions)tsCaptionsDates=captions.map(function(_ref3){var date=_ref3.date;return date.getTime();});else if(disabledDates)tsDisabledDates=disabledDates.map(function(d){return d.getTime();});if(value){var _ref4=Array.isArray(value)?value:[value],_ref5=(0,_slicedToArray2.default)(_ref4,2),start=_ref5[0],end=_ref5[1];tsStart=start.getTime();tsEnd=end?end.getTime():tsStart;}var days=[];for(var i=0;i<7;i+=1){days.push(new Date(firstDate.getFullYear(),firstDate.getMonth(),firstDate.getDate()+i));}return _react.default.createElement(_reactNative.View,{style:_Calendar.default.row,__source:{fileName:_jsxFileName,lineNumber:47}},days.map(function(day){var tsDay=day.getTime();var isToday=tsDay===tsToday;var isSelected=tsDay>=tsStart&&tsDay<=tsEnd;var isDisabled=false;var caption;if(disabledPast)isDisabled=tsDay<tsToday;if(!isDisabled){if(tsAvailableDates)isDisabled=!tsAvailableDates.includes(tsDay);else if(tsDisabledDates)isDisabled=tsDisabledDates.includes(tsDay);if(tsCaptionsDates&&tsCaptionsDates.includes(tsDay)){var item=captions[tsCaptionsDates.indexOf(tsDay)];caption=item.value;}}var stylesDay=[isToday&&_Calendar.default.today,!isDisabled&&isSelected&&_Calendar.default.highlight];return _react.default.createElement(_Touchable.default,{containerBorderRadius:_Calendar.BOX_HEIGHT,key:day.toString(),onPress:!isDisabled?function(){return onPress((0,_objectSpread2.default)({day:day,tsDay:tsDay,tsStart:tsStart,tsEnd:tsEnd},inherit));}:undefined,style:[_Calendar.default.box,_Calendar.default.day,!isDisabled&&isSelected&&_Calendar.default.selected,!isDisabled&&isSelected&&tsDay===tsStart&&_Calendar.default.selectedStart,!isDisabled&&isSelected&&tsDay===tsEnd&&_Calendar.default.selectedEnd],__source:{fileName:_jsxFileName,lineNumber:73}},_react.default.createElement(_Text.default,{level:3,style:[].concat(stylesDay,[isToday&&_Calendar.default.textBold,!isDisabled&&isSelected&&_Calendar.default.textBold,(day.getMonth()!==month||isDisabled)&&_Calendar.default.disabled]),__source:{fileName:_jsxFileName,lineNumber:90}},day.getDate()),caption&&_react.default.createElement(_Text.default,{caption:true,style:[].concat(stylesDay,[_Calendar.default.caption]),__source:{fileName:_jsxFileName,lineNumber:102}},caption));}));};Week.propTypes={firstDate:(0,_propTypes.shape)(),onSelect:_propTypes.func};Week.defaultProps={firstDate:undefined,onSelect:function onSelect(){}};var _default=Week;exports.default=_default;