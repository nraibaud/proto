!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.proto=t():r.proto=t()}(this,function(){return function(r){function t(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return r[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=r,t.c=e,t.p="",t(0)}([function(r){"use strict";function t(){var r=arguments;if(1==r.length)var f={init:i},s=r[0];else var f=r[0],s=r[1];var y={};-1!==[Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError].indexOf(f)&&(f=e(f,y));var v="function"==typeof f;s[c]=v?f[c]:f;var d=new s(f);y.name=d.name;var m=o(d.name,function(){var r=new l;if(d[p]){var e=d[p].apply(r,arguments);return e===t[u]?a:e!==a?e:r}return r});d.constructor=m,!d[p]&&v&&(d[p]=function(){f.apply(this,arguments)});var l=function(){};l[c]=d;for(var g in d)n(m,d,g);for(var g in f)Object.hasOwnProperty.call(f,g)&&m[g]===a&&n(m,f,g);return m.parent=f,m[c]=d,m}function e(r,t){function e(){var e=new r(arguments[0]);return e.name=t.name,this.message=e.message,Object.defineProperty?Object.defineProperty(this,"stack",{get:function(){return e.stack}}):this.stack=e.stack,this}var n=function(){};return n.prototype=r.prototype,e.prototype=new n,e}function n(r,t,e){try{var n=Object.getOwnPropertyDescriptor(t,e);n.get!==a||n.get!==a&&Object.defineProperty!==a?Object.defineProperty(r,e,n):r[e]=t[e]}catch(o){}}function o(r,t){return r!==a?new Function("fn","return function "+r+"(){ return fn.apply(this,arguments)}")(t):t}{var a,i=function(){},c="prototype",u="undefined",p="init";({}).hasOwnProperty}t[u]={},r.exports=t}])});
//# sourceMappingURL=proto.umd.js.map