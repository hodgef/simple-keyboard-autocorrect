/*!
 * 
 *   simple-keyboard-autocorrect v2.0.3
 *   https://github.com/hodgef/simple-keyboard-autocorrect
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboardAutocorrect=e():t.SimpleKeyboardAutocorrect=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n);e.default=function t(){var e,r,n;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),n=function(t){t.registerModule("autocorrect",function(e){e.setDictionary=function(t){e.wordBank=i()(t)},e.get=function(t){return e.wordBank.get(t)},e.setDictionary(t.options.autocorrectDict),e.fn={},e.fn.handleButtonClicked=t.handleButtonClicked,t.handleButtonClicked=function(r){var n=t.options.autocorrectHotkey||"{space}",i="",o="";if(r===n){var a=t.getInput().split(" ");if(o=a[a.length-1],a&&(i=e.wordBank.get(o))&&r===n&&!t.options.disableAutocorrectSetInput){var u=i[0][1];a[a.length-1]=u,t.setInput(a.join(" ")),t.caretPosition=t.getInput().length,t.options.debug&&console.log("keyboard.caretPosition",t.caretPosition)}}"function"==typeof t.options.onAutocorrectPrediction&&o&&t.options.onAutocorrectPrediction(o,i),e.fn.handleButtonClicked(r)}})},(r="init")in(e=this)?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}},function(t,e,r){!function(){var e=function(t,e,r,n){var i={};t=t||[],i.gramSizeLower=r||2,i.gramSizeUpper=n||3,i.useLevenshtein="boolean"!=typeof e||e,i.exactSet={},i.matchDict={},i.items={};var o=function(t,e){if(null===t&&null===e)throw"Trying to compare two null values";if(null===t||null===e)return 0;var r=function(t,e){for(var r,n,i=[],o=0;o<=e.length;o++)for(var a=0;a<=t.length;a++)n=o&&a?t.charAt(a-1)===e.charAt(o-1)?r:Math.min(i[a],i[a-1],r)+1:o+a,r=i[a],i[a]=n;return i.pop()}(t=String(t),e=String(e));return t.length>e.length?1-r/t.length:1-r/e.length},a=/[^a-zA-Z0-9\u00C0-\u00FF, ]+/g,u=function(t,e){for(var r={},n=function(t,e){e=e||2;var r="-"+t.toLowerCase().replace(a,"")+"-",n=e-r.length,i=[];if(n>0)for(var o=0;o<n;++o)r+="-";for(o=0;o<r.length-e+1;++o)i.push(r.slice(o,o+e));return i}(t,e=e||2),i=0;i<n.length;++i)n[i]in r?r[n[i]]+=1:r[n[i]]=1;return r};i.get=function(t,e,r){void 0===r&&(r=.33);var n=this._get(t,r);return n||void 0===e?n:e},i._get=function(t,e){var r=this._normalizeStr(t),n=this.exactSet[r];if(n)return[[1,n]];for(var i=[],o=this.gramSizeUpper;o>=this.gramSizeLower;--o)if((i=this.__get(t,o,e))&&i.length>0)return i;return null},i.__get=function(t,e,r){var n,i,a,c,s=this._normalizeStr(t),f={},h=u(s,e),l=this.items[e],p=0;for(n in h)if(i=h[n],p+=Math.pow(i,2),n in this.matchDict)for(w=0;w<this.matchDict[n].length;++w)a=this.matchDict[n][w][0],c=this.matchDict[n][w][1],a in f?f[a]+=i*c:f[a]=i*c;if(function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(f))return null;var d,g=Math.sqrt(p),v=[];for(var m in f)d=f[m],v.push([d/(g*l[m][0]),l[m][1]]);var S=function(t,e){return t[0]<e[0]?1:t[0]>e[0]?-1:0};if(v.sort(S),this.useLevenshtein){for(var y=[],b=Math.min(50,v.length),w=0;w<b;++w)y.push([o(v[w][1],s),v[w][1]]);(v=y).sort(S)}y=[];return v.forEach(function(t){t[0]>=r&&y.push([t[0],this.exactSet[t[1]]])}.bind(this)),y},i.add=function(t){if(this._normalizeStr(t)in this.exactSet)return!1;for(var e=this.gramSizeLower;e<this.gramSizeUpper+1;++e)this._add(t,e)},i._add=function(t,e){var r=this._normalizeStr(t),n=this.items[e]||[],i=n.length;n.push(0);var o,a,c=u(r,e),s=0;for(o in c)a=c[o],s+=Math.pow(a,2),o in this.matchDict?this.matchDict[o].push([i,a]):this.matchDict[o]=[[i,a]];var f=Math.sqrt(s);n[i]=[f,r],this.items[e]=n,this.exactSet[r]=t},i._normalizeStr=function(t){if("[object String]"!==Object.prototype.toString.call(t))throw"Must use a string as argument to FuzzySet functions";return t.toLowerCase()},i.length=function(){var t,e=0;for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&(e+=1);return e},i.isEmpty=function(){for(var t in this.exactSet)if(this.exactSet.hasOwnProperty(t))return!1;return!0},i.values=function(){var t,e=[];for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&e.push(this.exactSet[t]);return e};for(var c=i.gramSizeLower;c<i.gramSizeUpper+1;++c)i.items[c]=[];for(c=0;c<t.length;++c)i.add(t[c]);return i};t.exports?(t.exports=e,this.FuzzySet=e):this.FuzzySet=e}()}])});