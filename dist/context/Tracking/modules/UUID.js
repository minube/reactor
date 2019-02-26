Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var DEFAULT_UUID='00000000-0000-4000-8000-000000000000';var KEYS_MAP=[0xf6,0x51c,0xd7a];var LENGTH_MAP=[8,11,12];var removeTrailingZeros=function removeTrailingZeros(int){var out=int;var n=out/10;while(Math.floor(n)===n){out=n;n/=10;}return out;};var lengthOfHex=function lengthOfHex(input){var acc=input;var length;for(length=1;acc>16;length+=1){acc/=16;}return length;};var generateParts=function generateParts(input,key,maxHexLength){if(maxHexLength==null||maxHexLength>14)return generateParts(input,key,14);var str=input.trim();var length=str.length;var acc=1;var charIndex=1;var count=1;while(count<length||lengthOfHex(acc)<maxHexLength){count+=1;if(str.charAt(charIndex)==='')charIndex=0;acc*=(str.charCodeAt(charIndex)+charIndex*length)*key;acc=removeTrailingZeros(acc);while(lengthOfHex(acc)>maxHexLength){acc=Math.floor(acc/10);}charIndex+=1;}return acc.toString(16);};var _default=function _default(){var input=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var str=input.toString();if(str.length===0)return DEFAULT_UUID;var parts=KEYS_MAP.map(function(hex,i){return generateParts(str,hex,LENGTH_MAP[i]);});var preparedParts=[parts[0],parts[1].substr(0,4),"4"+parts[1].substr(4,3),(parseInt(parts[1][7],16)&0x3|0x8).toString(16)+parts[1].substr(8,3),parts[2]].join('-');return preparedParts.toUpperCase();};exports.default=_default;