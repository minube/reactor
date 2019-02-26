var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _reactNative=require("react-native");var BLACK='#000000';var FAMILY=_reactNative.Platform.OS==='web'?'"Open Sans", sans-serif':undefined;var FAMILY_SECONDARY=_reactNative.Platform.OS==='web'?'Montserrat, sans-serif':undefined;var UNIT=10;var WEIGHT={REGULAR:'400',SEMIBOLD:'600',BOLD:'700'};var _default={BORDER_RADIUS:UNIT*0.3,COLOR:{BACKGROUND:'#F5F5F6',BASE:'#cdd2d4',PRIMARY:'#10c0bc',SECONDARY:'#a66ecc',TEXT:'#4a4a4a',TEXT_LIGHTEN:'#707070',ALERT:'#FBB049',ERROR:'#d33c44',SUCCESS:'#84BD4B',WARNING:'#FDCD48',DISABLED:'#f4f4f4',TRANSPARENT:'transparent',BLACK:BLACK,WHITE:'#ffffff'},ELEVATION:{SMALL:(0,_objectSpread2.default)({shadowColor:BLACK,shadowOffset:{height:1,width:0},shadowOpacity:0.20,shadowRadius:2},_reactNative.Platform.select({android:{elevation:2}})),REGULAR:(0,_objectSpread2.default)({shadowColor:BLACK,shadowOffset:{height:2,width:0},shadowOpacity:0.20,shadowRadius:8},_reactNative.Platform.select({android:{elevation:8}})),LARGE:(0,_objectSpread2.default)({shadowColor:BLACK,shadowOffset:{height:4,width:0},shadowOpacity:0.30,shadowRadius:24},_reactNative.Platform.select({android:{elevation:24}}))},FONT:{FAMILY:FAMILY,FAMILY_SECONDARY:FAMILY_SECONDARY,DEFAULT:{fontFamily:FAMILY,fontWeight:WEIGHT.REGULAR},HEADLINE:{fontFamily:FAMILY_SECONDARY,fontWeight:WEIGHT.BOLD},SUBTITLE:{fontFamily:FAMILY,fontWeight:WEIGHT.SEMIBOLD},CAPTION:{},BUTTON:{fontFamily:FAMILY_SECONDARY,fontWeight:WEIGHT.SEMIBOLD},INPUT:{fontFamily:FAMILY,fontWeight:WEIGHT.REGULAR},WEIGHT:WEIGHT},MOTION:{DURATION:225,EASE:'cubic-bezier(0.4, 0.0, 0.2, 1)',EASE_IOS:'',EASE_ANDROID:''},OFFSET:UNIT*1.6,UNIT:UNIT,SPACE:{XS:UNIT*0.8,S:UNIT*1.2,MEDIUM:UNIT*1.6,REGULAR:UNIT*2,L:UNIT*2.8,XL:UNIT*3.2,XXL:UNIT*60}};exports.default=_default;