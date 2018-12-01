function updateURLParameter(t,l,r){var a=null,e="",i=t.split("?"),p=i[0],s=i[1],n="";if(s){var u=(f=s.split("#"))[0];(a=f[1])&&(s=u),i=s.split("&");for(var v=0;v<i.length;v++)i[v].split("=")[0]!=l&&(e+=n+i[v],n="&")}else{var f;u=(f=p.split("#"))[0];a=f[1],u&&(p=u)}return a&&(r+="#"+a),p+"?"+e+(n+""+l+"="+r)}
var getUrlParameter=function(r){var t,e,n=window.location.search.substring(1).split("&");for(e=0;e<n.length;e++)if((t=n[e].split("="))[0]===r)return void 0===t[1]||decodeURIComponent(t[1])};
//mask
var $jscomp={scope:{},findInternal:function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(a,b,c,d){if(b){for(c=$jscomp.global,a=a.split("."),d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={}),c=c[e]}a=a[a.length-1],d=c[a],b=b(d),b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}},$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,b){return $jscomp.findInternal(this,a,b).v}},"es6-impl","es3"),function(a,b,c){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(b||c)}(function(a){var b=function(b,c,d){var e={invalid:[],getCaret:function(){try{var a,c=0,d=b.get(0),f=document.selection,g=d.selectionStart;return f&&-1===navigator.appVersion.indexOf("MSIE 10")?(a=f.createRange(),a.moveStart("character",-e.val().length),c=a.text.length):(g||"0"===g)&&(c=g),c}catch(a){}},setCaret:function(a){try{if(b.is(":focus")){var c,d=b.get(0);d.setSelectionRange?d.setSelectionRange(a,a):(c=d.createTextRange(),c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select())}}catch(a){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which),b.data("mask-previus-value",b.val())}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",e.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){g===e.val()||b.data("changed")||b.trigger("change"),b.data("changed",!1)}).on("blur.mask",function(){g=e.val()}).on("focus.mask",function(b){!0===d.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!h.test(e.val())&&e.val("")})},getRegexMask:function(){for(var b,d,e,g,a=[],h=0;h<c.length;h++)(b=f.translation[c.charAt(h)])?(d=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,(b=b.recursive)?(a.push(c.charAt(h)),g={digit:c.charAt(h),pattern:d}):a.push(e||b?d+"?":d)):a.push(c.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return a=a.join(""),g&&(a=a.replace(new RegExp("("+g.digit+"(.*"+g.digit+")?)"),"($1)?").replace(new RegExp(g.digit,"g"),g.pattern)),new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";return 0<arguments.length?(b[c]()!==a&&b[c](a),c=b):c=b[c](),c},calculateCaretPosition:function(a,c){var d=c.length,e=b.data("mask-previus-value")||"",f=e.length;return 8===b.data("mask-keycode")&&e!==c?a-=c.slice(0,a).length-e.slice(0,a).length:e!==c&&(a=a>=f?d:a+(c.slice(0,a).length-e.slice(0,a).length)),a},behaviour:function(c){c=c||window.event,e.invalid=[];var d=b.data("mask-keycode");if(-1===a.inArray(d,f.byPassKeys)){var d=e.getMasked(),g=e.getCaret();return setTimeout(function(a,b){e.setCaret(e.calculateCaretPosition(a,b))},10,g,d),e.val(d),e.setCaret(g),e.callbacks(c)}},getMasked:function(a,b){var p,q,g=[],h=void 0===b?e.val():b+"",i=0,j=c.length,k=0,l=h.length,m=1,n="push",o=-1;d.reverse?(n="unshift",m=-1,p=0,i=j-1,k=l-1,q=function(){return-1<i&&-1<k}):(p=j-1,q=function(){return i<j&&k<l});for(var r;q();){var s=c.charAt(i),t=h.charAt(k),u=f.translation[s];u?(t.match(u.pattern)?(g[n](t),u.recursive&&(-1===o?o=i:i===p&&(i=o-m),p===o&&(i-=m)),i+=m):t===r?r=void 0:u.optional?(i+=m,k-=m):u.fallback?(g[n](u.fallback),i+=m,k-=m):e.invalid.push({p:k,v:t,e:u.pattern}),k+=m):(a||g[n](s),t===s?k+=m:r=s,i+=m)}return h=c.charAt(p),j!==l+1||f.translation[h]||g.push(h),g.join("")},callbacks:function(a){var f=e.val(),h=f!==g,i=[f,a,b,d],j=function(a,b,c){"function"==typeof d[a]&&b&&d[a].apply(this,c)};j("onChange",!0===h,i),j("onKeyPress",!0===h,i),j("onComplete",f.length===c.length,i),j("onInvalid",0<e.invalid.length,[f,a,b,e.invalid,d])}};b=a(b);var h,f=this,g=e.val();c="function"==typeof c?c(e.val(),void 0,b,d):c,f.mask=c,f.options=d,f.remove=function(){var a=e.getCaret();return e.destroyEvents(),e.val(f.getCleanVal()),e.setCaret(a),b},f.getCleanVal=function(){return e.getMasked(!0)},f.getMaskedVal=function(a){return e.getMasked(!1,a)},f.init=function(g){if(g=g||!1,d=d||{},f.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch,f.byPassKeys=a.jMaskGlobals.byPassKeys,f.translation=a.extend({},a.jMaskGlobals.translation,d.translation),f=a.extend(!0,{},f,d),h=e.getRegexMask(),g)e.events(),e.val(e.getMasked());else{d.placeholder&&b.attr("placeholder",d.placeholder),b.data("mask")&&b.attr("autocomplete","off"),g=0;for(var i=!0;g<c.length;g++){var j=f.translation[c.charAt(g)];if(j&&j.recursive){i=!1;break}}i&&b.attr("maxlength",c.length),e.destroyEvents(),e.events(),g=e.getCaret(),e.val(e.getMasked()),e.setCaret(g)}},f.init(!b.is("input"))};a.maskWatchers={};var c=function(){var c=a(this),e={},f=c.attr("data-mask");if(c.attr("data-mask-reverse")&&(e.reverse=!0),c.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0),"true"===c.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0),d(c,f,e))return c.data("mask",new b(this,f,e))},d=function(b,c,d){d=d||{};var e=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"==typeof c&&(c=c(b)),"object"!=typeof e||f(e.options)!==f(d)||e.mask!==c}catch(a){}},e=function(a){var c,b=document.createElement("div");return a="on"+a,c=a in b,c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]),c};a.fn.mask=function(c,e){e=e||{};var f=this.selector,g=a.jMaskGlobals,h=g.watchInterval,g=e.watchInputs||g.watchInputs,i=function(){if(d(this,c,e))return a(this).data("mask",new b(this,c,e))};return a(this).each(i),f&&""!==f&&g&&(clearInterval(a.maskWatchers[f]),a.maskWatchers[f]=setInterval(function(){a(document).find(f).each(i)},h)),this},a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)},a.fn.unmask=function(){return clearInterval(a.maskWatchers[this.selector]),delete a.maskWatchers[this.selector],this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})},a.fn.cleanVal=function(){return this.data("mask").getCleanVal()},a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements,(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(c)},e={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&e("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}},a.jMaskGlobals=a.jMaskGlobals||{},e=a.jMaskGlobals=a.extend(!0,{},e,a.jMaskGlobals),e.dataMask&&a.applyDataMask(),setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},e.watchInterval)},window.jQuery,window.Zepto);
!function(a){void 0==a.fn.inputmask&&(a.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:a.noop,onKeyDown:a.noop,showMaskOnHover:!0,numericInput:!1,radixPoint:".",definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-zА-яЁё]",cardinality:1},"*":{validator:"[A-Za-zА-яЁё0-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,16,17,18,20,27,33,34,35,36,37,38,39,40,46,91,93,108]},val:a.fn.val},a.fn.inputmask=function(b,c){function m(a){var b=document.createElement("input"),a="on"+a,c=a in b;return c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]),b=null,c}function n(b){var e=d.aliases[b];return!!e&&(e.alias&&n(e.alias),a.extend(!0,d,e),a.extend(!0,d,c),!0)}function o(){var b=!1,c=0;1==d.mask.length&&0==d.greedy&&(d.placeholder="");for(var e=a.map(d.mask.split(""),function(a,e){var f=[];if(a==d.escapeChar)b=!0;else if(a!=d.optionalmarker.start&&a!=d.optionalmarker.end||b){var g=d.definitions[a];if(g&&!b)for(var h=0;h<g.cardinality;h++)f.push(t(c+h));else f.push(a),b=!1;return c+=f.length,f}}),f=e.slice(),g=1;g<d.repeat&&d.greedy;g++)f=f.concat(e.slice());return f}function p(){var b=!1,c=!1,e=!1;return a.map(d.mask.split(""),function(a,f){var g=[];if(a==d.escapeChar)c=!0;else if(a!=d.optionalmarker.start||c){if(a!=d.optionalmarker.end||c){var h=d.definitions[a];if(h&&!c){for(var i=h.prevalidator,j=i?i.length:0,k=1;k<h.cardinality;k++){var l=j>=k?i[k-1]:[],m=l.validator,n=l.cardinality;g.push({fn:m?"string"==typeof m?new RegExp(m):new function(){this.test=m}:new RegExp("."),cardinality:n?n:1,optionality:b,newBlockMarker:1==b&&e,offset:0,casing:h.casing,def:a}),1==b&&(e=!1)}g.push({fn:h.validator?"string"==typeof h.validator?new RegExp(h.validator):new function(){this.test=h.validator}:new RegExp("."),cardinality:h.cardinality,optionality:b,newBlockMarker:e,offset:0,casing:h.casing,def:a})}else g.push({fn:null,cardinality:0,optionality:b,newBlockMarker:e,offset:0,casing:null,def:a}),c=!1;return e=!1,g}b=!1,e=!0}else b=!0,e=!0})}function q(a,b,c,e){if(a<0||a>=u())return!1;for(var f=s(a),g=b?1:0,h="",i=l[f].cardinality;i>g;i--)h+=y(c,f-(i-1));return b&&(h+=b),null!=l[f].fn&&l[f].fn.test(h,c,a,e,d)}function r(a){var b=s(a),c=l[b];return void 0!=c&&c.fn}function s(a){return a%l.length}function t(a){return d.placeholder.charAt(a%d.placeholder.length)}function u(){var a=k.length;return!d.greedy&&d.repeat>1&&(a+=k.length*(d.repeat-1)),a}function v(a,b){var c=u();if(b>=c)return c;for(var d=b;++d<c&&!r(d););return d}function w(a,b){var c=b;if(c<=0)return 0;for(;--c>0&&!r(c););return c}function x(a,b,c){var d=l[s(b)],e=c;if(void 0!=e)switch(d.casing){case"upper":e=c.toUpperCase();break;case"lower":e=c.toLowerCase()}a[b]=e}function y(a,b,c){return c&&(b=z(a,b)),a[b]}function z(a,b,c){var d;if(c)for(;b<0&&a.length<u();)for(d=k.length-1,b=k.length;void 0!==k[d];)a.unshift(k[d--]);else for(;void 0==a[b]&&a.length<u();)for(d=0;void 0!==k[d];)a.push(k[d++]);return b}function A(a,b,c){a._valueSet(b.join("")),void 0!=c&&(g?setTimeout(function(){I(a,c)},100):I(a,c))}function B(a,b,c){for(var d=b,e=u();d<c&&d<e;d++)x(a,d,y(k.slice(),d))}function C(a,b){var c=s(b);x(a,b,y(k,c))}function D(b,c,e,f){var g=a(b).data("inputmask").isRTL,h=F(b._valueGet(),g).split("");if(g){var i=u(),j=h.reverse();j.length=i;for(var m=0;m<i;m++){var n=s(i-(m+1));null==l[n].fn&&j[m]!=y(k,n)?(j.splice(m,0,y(k,n)),j.length=i):j[m]=j[m]||y(k,n)}h=j.reverse()}B(c,0,c.length),c.length=k.length;for(var w,o=-1,p=-1,i=u(),z=h.length,D=0==z?i:-1,m=0;m<z;m++)for(var E=p+1;E<i;E++){if(r(E)){var G=h[m];(w=q(E,G,c,!e))!==!1?(w!==!0&&(E=w.pos||E,G=w.c||G),x(c,E,G),o=p=E):(C(c,E),G==t(E)&&(p=E,D=E));break}if(C(c,E),o==p&&(o=E),p=E,h[m]==y(c,E))break}if(0==d.greedy)for(var H=F(c.join(""),g).split("");c.length!=H.length;)g?c.shift():c.pop();return e&&A(b,c),g?d.numericInput?a.inArray(d.radixPoint,c)!=-1&&f!==!0?a.inArray(d.radixPoint,c):v(c,i):v(c,D):v(c,o)}function E(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")}function F(a,b){return b?a.replace(new RegExp("^("+E(k.join(""))+")*"),""):a.replace(new RegExp("("+E(k.join(""))+")*$"),"")}function G(b,c){D(b,c,!1);var d=c.slice();if(a(b).data("inputmask").isRTL)for(var e=0;e<=d.length-1;e++){var f=s(e);if(!l[f].optionality)break;if(t(e)!=c[e]&&r(e))break;d.splice(0,1)}else for(var e=d.length-1;e>=0;e--){var f=s(e);if(!l[f].optionality)break;if(t(e)!=c[e]&&r(e))break;d.pop()}A(b,d)}function H(b,c){var d=b[0];if(!l||c!==!0&&b.hasClass("hasDatepicker"))return d._valueGet();var e=k.slice();return D(d,e),a.map(e,function(a,b){return r(b)&&a!=y(k.slice(),b)?a:null}).join("")}function I(a,b,c){var e=a.jquery&&a.length>0?a[0]:a;if("number"!=typeof b){var h=g?i:null,i=null;if(null==h){if(e.setSelectionRange)b=e.selectionStart,c=e.selectionEnd;else if(document.selection&&document.selection.createRange){var f=document.selection.createRange();b=0-f.duplicate().moveStart("character",-1e5),c=b+f.text.length}h={begin:b,end:c}}return h}if(c="number"==typeof c?c:b,0==d.insertMode&&b==c&&c++,e.setSelectionRange)e.setSelectionRange(b,c);else if(e.createTextRange){var f=e.createTextRange();f.collapse(!0),f.moveEnd("character",c),f.moveStart("character",b),f.select()}e.focus(),g&&c!=e.selectionEnd&&(i={begin:b,end:c})}function J(b){function L(a){for(var b=!0,c=a._valueGet(),d=c.length,e=0;e<d;e++)if(r(e)&&c.charAt(e)==t(e)){b=!1;break}return b}function M(b){var c=a._data(b).events;a.each(c,function(c,d){a(b).bind(c+".inputmask",function(a){if(this.readOnly||this.disabled)return a.stopPropagation(),a.stopImmediatePropagation(),a.preventDefault(),!1});for(var e=d[d.length-1],f=d.length-1;f>0;f--)d[f]=d[f-1];d[0]=e})}function N(b){var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(b,"value")),c&&c.get?b._valueGet||(b._valueGet=c.get,b._valueSet=c.set,Object.defineProperty(b,"value",{get:function(){var b=a(this),c=a(this).data("inputmask");return c&&c.autoUnmask?b.inputmask("unmaskedvalue"):this._valueGet()!=c._buffer.join("")?this._valueGet():""},set:function(b){this._valueSet(b),a(this).triggerHandler("setvalue.inputmask")}})):document.__lookupGetter__&&b.__lookupGetter__("value")?b._valueGet||(b._valueGet=b.__lookupGetter__("value"),b._valueSet=b.__lookupSetter__("value"),b.__defineGetter__("value",function(){var b=a(this),c=a(this).data("inputmask");return c&&c.autoUnmask?b.inputmask("unmaskedvalue"):this._valueGet()!=c._buffer.join("")?this._valueGet():""}),b.__defineSetter__("value",function(b){this._valueSet(b),a(this).triggerHandler("setvalue.inputmask")})):(b._valueGet||(b._valueGet=function(){return this.value},b._valueSet=function(a){this.value=a}),1!=a.fn.val.inputmaskpatch&&(a.fn.val=function(){if(0==arguments.length){var b=a(this);if(b.data("inputmask")){if(b.data("inputmask").autoUnmask)return b.inputmask("unmaskedvalue");var c=a.inputmask.val.apply(b);return c!=b.data("inputmask")._buffer.join("")?c:""}return a.inputmask.val.apply(b)}var d=arguments;return this.each(function(){var b=a(this),c=a.inputmask.val.apply(b,d);return b.data("inputmask")&&b.triggerHandler("setvalue.inputmask"),c})},a.extend(a.fn.val,{inputmaskpatch:!0})))}function O(a,b,c){for(;!r(a)&&a-1>=0;)a--;for(var d=a;d<b&&d<u();d++)if(r(d)){C(i,d);var e=v(i,d),f=y(i,e);if(f!=t(e)){if(e<u()&&q(d,f,i,!0)!==!1&&l[s(d)].def==l[s(e)].def)x(i,d,y(i,e)),C(i,e);else if(r(d))break}else if(void 0==c)break}else C(i,d);return void 0!=c&&x(i,H?b:w(i,b),c),i=F(i.join(""),H).split(""),0==i.length&&(i=k.slice()),a}function P(a,b,c,d){for(var e=a;e<=b&&e<u();e++)if(r(e)){var f=y(i,e);if(x(i,e,c),f!=t(e)){var g=v(i,e);if(!(g<u()))break;if(q(g,f,i,!0)!==!1&&l[s(e)].def==l[s(g)].def)c=f;else{if(r(g))break;c=f}}else if(d!==!0)break}else C(i,e);var h=i.length;return i=F(i.join(""),H).split(""),0==i.length&&(i=k.slice()),b-(h-i.length)}function Q(b){m=!1;var c=this,e=b.keyCode,g=I(c);if(d.numericInput){var h=c._valueGet(),l=h.indexOf(d.radixPoint);l!=-1&&(H=g.begin<=l||g.end<=l)}if(e==d.keyCode.BACKSPACE||e==d.keyCode.DELETE||f&&127==e){var o=u();if(0==g.begin&&g.end==o)i=k.slice(),A(c,i),I(c,D(c,i,!1));else if(g.end-g.begin>1||g.end-g.begin==1&&d.insertMode)B(i,g.begin,g.end),A(c,i,H?D(c,i,!1):g.begin);else{var q=g.begin-(e==d.keyCode.DELETE?0:1);q<p&&e==d.keyCode.DELETE&&(q=p),q>=p&&(d.numericInput&&d.greedy&&e==d.keyCode.DELETE&&i[q]==d.radixPoint&&(q=v(i,q),H=!1),H?(q=P(p,q,t(q),!0),q=d.numericInput&&d.greedy&&e==d.keyCode.BACKSPACE&&i[q+1]==d.radixPoint?q+1:v(i,q)):q=O(q,o),A(c,i,q))}return c._valueGet()==k.join("")&&a(c).trigger("cleared"),!1}if(e==d.keyCode.END||e==d.keyCode.PAGE_DOWN)return setTimeout(function(){var a=D(c,i,!1,!0);d.insertMode||a!=u()||b.shiftKey||a--,I(c,b.shiftKey?g.begin:a,a)},0),!1;if(e==d.keyCode.HOME||e==d.keyCode.PAGE_UP)return I(c,0,b.shiftKey?g.begin:0),!1;if(e==d.keyCode.ESCAPE)return c._valueSet(j),I(c,0,D(c,i)),!1;if(e==d.keyCode.INSERT)return d.insertMode=!d.insertMode,I(c,d.insertMode||g.begin!=u()?g.begin:g.begin-1),!1;if(b.ctrlKey&&88==e)setTimeout(function(){I(c,D(c,i,!0))},0);else if(!d.insertMode){if(e==d.keyCode.RIGHT){var r=g.begin==g.end?g.end+1:g.end;return r=r<u()?r:g.end,I(c,b.shiftKey?g.begin:r,b.shiftKey?r+1:r),!1}if(e==d.keyCode.LEFT){var r=g.begin-1;return r=r>0?r:0,I(c,r,b.shiftKey?g.end:r),!1}}d.onKeyDown.call(this,b,d),n=a.inArray(e,d.ignorables)!=-1}function R(b){if(m)return!1;m=!0;var c=this,e=a(c);b=b||window.event;var f=b.which||b.charCode||b.keyCode;if(d.numericInput&&f==d.radixPoint.charCodeAt(d.radixPoint.length-1)){var h=c._valueGet(),j=h.indexOf(d.radixPoint);I(c,v(i,j!=-1?j:u()))}if(b.ctrlKey||b.altKey||b.metaKey||n)return!0;if(f){e.trigger("input");var k=I(c),l=String.fromCharCode(f),o=u();if(B(i,k.begin,k.end),H){var s,r=d.numericInput?k.end:w(i,k.end);if((s=q(r==o||y(i,r)==d.radixPoint?w(i,r):r,l,i,!1))!==!1){s!==!0&&(r=s.pos||k,l=s.c||l);var C=p;if(1==d.insertMode){if(1==d.greedy)for(var D=i.slice();y(D,C,!0)!=t(C)&&C<=r;)C=C==o?o+1:v(i,C);if(!(C<=r&&(d.greedy||i.length<o)))return!1;if(i[p]!=t(p)&&i.length<o){var E=z(i,-1,H);0!=k.end&&(r+=E),o=i.length}O(C,d.numericInput?w(i,r):r,l)}else x(i,d.numericInput?w(i,r):r,l);A(c,i,d.numericInput&&0==r?v(i,r):r),setTimeout(function(){L(c)&&e.trigger("complete")},0)}else g&&A(c,i,k.begin)}else{var s,r=v(i,k.begin-1);if(z(i,r,H),(s=q(r,l,i,!1))!==!1){if(s!==!0&&(r=s.pos||r,l=s.c||l),1==d.insertMode){for(var F=u(),D=i.slice();y(D,F,!0)!=t(F)&&F>=r;)F=0==F?-1:w(i,F);if(!(F>=r))return!1;P(r,i.length,l)}else x(i,r,l);var G=v(i,r);A(c,i,G),setTimeout(function(){L(c)&&e.trigger("complete")},0)}else g&&A(c,i,k.begin)}return!1}}function S(b){var c=a(this),e=this,f=b.keyCode;d.onKeyUp.call(this,b,d),f==d.keyCode.TAB&&c.hasClass("focus.inputmask")&&0==e._valueGet().length&&(i=k.slice(),A(e,i),H||I(e,0),j=e._valueGet())}var c=a(b);if(c.is(":input")){d.greedy=d.greedy?d.greedy:0==d.repeat;var h=c.prop("maxLength");u()>h&&h>-1&&(h<k.length&&(k.length=h),0==d.greedy&&(d.repeat=Math.round(h/k.length))),c.prop("maxLength",2*u()),c.data("inputmask",{tests:l,_buffer:k,greedy:d.greedy,repeat:d.repeat,autoUnmask:d.autoUnmask,definitions:d.definitions,isRTL:!1}),N(b);var i=k.slice(),j=b._valueGet(),m=!1,n=!1,o=-1,p=v(i,-1),H=(w(i,u()),!1);if("rtl"==b.dir||d.numericInput){b.dir="ltr",c.css("text-align","right"),c.removeAttr("dir");var J=c.data("inputmask");J.isRTL=!0,c.data("inputmask",J),H=!0}c.unbind(".inputmask"),c.removeClass("focus.inputmask"),c.bind("mouseenter.inputmask",function(){var b=a(this),c=this;if(!b.hasClass("focus.inputmask")&&d.showMaskOnHover){var e=c._valueGet().length;e<i.length&&(0==e&&(i=k.slice()),A(c,i))}}).bind("blur.inputmask",function(){var b=a(this),c=this,e=c._valueGet();b.removeClass("focus.inputmask"),e!=j&&b.change(),d.clearMaskOnLostFocus&&(e==k.join("")?c._valueSet(""):G(c,i)),L(c)||(b.trigger("incomplete"),d.clearIncomplete&&(d.clearMaskOnLostFocus?c._valueSet(""):(i=k.slice(),A(c,i))))}).bind("focus.inputmask",function(){var b=a(this),c=this;if(!b.hasClass("focus.inputmask")&&!d.showMaskOnHover){var e=c._valueGet().length;e<i.length&&(0==e&&(i=k.slice()),I(c,D(c,i,!0)))}b.addClass("focus.inputmask"),j=c._valueGet()}).bind("mouseleave.inputmask",function(){var b=a(this),c=this;d.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||(c._valueGet()==k.join("")||""==c._valueGet()?c._valueSet(""):G(c,i)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=I(a);if(b.begin==b.end){var c=b.begin;o=D(a,i,!1),H?I(a,c>o&&(q(c,i[c],i,!0)!==!1||!r(c))?c:o):I(a,c<o&&(q(c,i[c],i,!0)!==!1||!r(c))?c:o)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){I(a,0,o)},0)}).bind("keydown.inputmask",Q).bind("keypress.inputmask",R).bind("keyup.inputmask",S).bind(e+".inputmask, dragdrop.inputmask, drop.inputmask",function(){var a=this;setTimeout(function(){I(a,D(a,i,!0))},0)}).bind("setvalue.inputmask",function(){var a=this;j=a._valueGet(),D(a,i,!0),a._valueGet()==k.join("")&&a._valueSet("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",d.onincomplete).bind("cleared.inputmask",d.oncleared),o=D(b,i,!0);var K;try{K=document.activeElement}catch(a){}K===b?(c.addClass("focus.inputmask"),I(b,o)):d.clearMaskOnLostFocus&&(b._valueGet()==k.join("")?b._valueSet(""):G(b,i)),M(b)}}var d=a.extend(!0,{},a.inputmask.defaults,c),e=m("paste")?"paste":"input",f=null!=navigator.userAgent.match(/iphone/i),g=null!=navigator.userAgent.match(/android.*mobile safari.*/i);if(g){var h=navigator.userAgent.match(/mobile safari.*/i),i=parseInt(new RegExp(/[0-9]+/).exec(h));g=i<=533}if("string"==typeof b)switch(b){case"mask":var k=o(),l=p();return this.each(function(){J(this)});case"unmaskedvalue":var l=this.data("inputmask").tests,k=this.data("inputmask")._buffer;return d.greedy=this.data("inputmask").greedy,d.repeat=this.data("inputmask").repeat,d.definitions=this.data("inputmask").definitions,H(this);case"remove":var l,k;return this.each(function(){var b=a(this),c=this;setTimeout(function(){if(b.data("inputmask")){l=b.data("inputmask").tests,k=b.data("inputmask")._buffer,d.greedy=b.data("inputmask").greedy,d.repeat=b.data("inputmask").repeat,d.definitions=b.data("inputmask").definitions,c._valueSet(H(b,!0)),b.removeData("inputmask"),b.unbind(".inputmask"),b.removeClass("focus.inputmask");var a;Object.getOwnPropertyDescriptor&&(a=Object.getOwnPropertyDescriptor(c,"value")),a&&a.get?c._valueGet&&Object.defineProperty(c,"value",{get:c._valueGet,set:c._valueSet}):document.__lookupGetter__&&c.__lookupGetter__("value")&&c._valueGet&&(c.__defineGetter__("value",c._valueGet),c.__defineSetter__("value",c._valueSet)),delete c._valueGet,delete c._valueSet}},0)});case"getemptymask":return this.data("inputmask")?this.data("inputmask")._buffer.join(""):"";case"hasMaskedValue":return!!this.data("inputmask")&&!this.data("inputmask").autoUnmask;default:n(b)||(d.mask=b);var k=o(),l=p();return this.each(function(){J(this)})}if("object"==typeof b){d=a.extend(!0,{},a.inputmask.defaults,b),n(d.alias);var k=o(),l=p();return this.each(function(){J(this)})}})}(jQuery);
!function(a){function f(b){return e?b.data("events"):a._data(b[0]).events}function g(a,b,c){var d=f(a),g=d[b];if(!e){var h=c?g.splice(g.delegateCount-1,1)[0]:g.pop();return void g.splice(c?0:g.delegateCount||0,0,h)}c?d.live.unshift(d.live.pop()):g.unshift(g.pop())}function h(b,c,d){var e=c.split(/\s+/);b.each(function(){for(var b=0;b<e.length;++b){var c=a.trim(e[b]).match(/[^\.]+/i)[0];g(a(this),c,d)}})}function i(b){a.fn[b+"First"]=function(){var c=a.makeArray(arguments),d=c.shift();return d&&(a.fn[b].apply(this,arguments),h(this,d)),this}}var b=a.fn.jquery.split("."),c=parseInt(b[0]),d=parseInt(b[1]),e=c<1||1==c&&d<7;i("bind"),i("one"),a.fn.delegateFirst=function(){var b=a.makeArray(arguments),c=b[1];return c&&(b.splice(0,2),a.fn.delegate.apply(this,arguments),h(this,c,!0)),this},a.fn.liveFirst=function(){var b=a.makeArray(arguments);return b.unshift(this.selector),a.fn.delegateFirst.apply(a(document),b),this},e||(a.fn.onFirst=function(b,c){var d=a(this),e="string"==typeof c;if(a.fn.on.apply(d,arguments),"object"==typeof b)for(type in b)b.hasOwnProperty(type)&&h(d,type,e);else"string"==typeof b&&h(d,b,e);return d})}(jQuery);
!function(a){a.masksLoad=function(b){var c;return a.ajax({url:b,async:!1,dataType:"json",success:function(a){c=a}}),c},a.masksSort=function(b,c,d,e){return b.sort(function(b,f){for(var g=0,h=0;g<b[e].length&&h<f[e].length;){var i=b[e].charAt(g),j=f[e].charAt(h);if(d.test(i))if(d.test(j)){if(a.inArray(i,c)!=-1&&a.inArray(j,c)==-1)return 1;if(a.inArray(i,c)==-1&&a.inArray(j,c)!=-1)return-1;if(a.inArray(i,c)==-1&&a.inArray(j,c)==-1&&i!=j)return i<j?-1:1;g++,h++}else h++;else g++}for(;g<b[e].length||h<f[e].length;)if(g<b[e].length&&!d.test(b[e].charAt(g)))g++;else if(h<f[e].length&&!d.test(f[e].charAt(h)))h++;else{if(g<b[e].length)return 1;if(h<f[e].length)return-1}return 0}),b},a.fn.inputmasks=function(b,c){var d=function(a,b){if("number"!=typeof a){if(this.setSelectionRange)a=this.selectionStart,b=this.selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}if(b="number"==typeof b?b:a,this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}},e=Object.keys||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)b[b.length]=c;return b};b=a.extend(!0,{onMaskChange:a.noop},b);var f={};for(var g in b.inputmask.definitions){var h=b.inputmask.definitions[g].validator;switch(typeof h){case"string":f[g]=new RegExp(h);break;case"object":"test"in b.definitions[g].validator&&(f[g]=h);break;case"function":f[g]={test:h}}}b.inputmask.definitions[b.replace]={validator:b.match.source,cardinality:1};var i=null!=navigator.userAgent.match(/iphone/i),j=!1,k=a.extend(!0,{},a.inputmask.defaults,b.inputmask).placeholder,l=a.extend(!0,{},a.inputmask.defaults,b.inputmask).insertMode,m=function(a){for(var c="",d=0;d<a.length;d++){var g=a.charAt(d);if(g==k)break;b.match.test(g)&&(c+=g)}for(var h in b.list){for(var i=b.list[h][b.listKey],j=!0,l=0,m=0;l<c.length&&m<i.length;){var n=i.charAt(m),o=c.charAt(l);if(b.match.test(n)||n in f){if(!(n in f&&f[n].test(o)||o==n)){j=!1;break}l++,m++}else m++}if(j&&l==c.length){var p=i.substr(m).search(b.match)==-1;i=i.replace(new RegExp([b.match.source].concat(e(f)).join("|"),"g"),b.replace);var q=i.substr(m).search(b.replace)==-1;return{mask:i,obj:b.list[h],determined:p,completed:q}}}return!1},n=function(a,c,d){if(!a)return 0;for(var e=0,f=0;e<d.begin;e++)a.charAt(e)==b.replace&&f++;for(var g=0;e<d.end;e++)a.charAt(e)==b.replace&&g++;for(e=0;e<c.length&&(f>0||c.charAt(e)!=b.replace);e++)c.charAt(e)==b.replace&&f--;for(f=e;e<c.length&&g>0;e++)c.charAt(e)==b.replace&&g--;return g=e,{begin:f,end:g}},o=function(){a(this).unbind("keypress.inputmask",t).unbind("input.inputmask",x).unbind("paste.inputmask",x).unbind("dragdrop.inputmask",x).unbind("drop.inputmask",x).unbind("keydown.inputmask",s).unbind("setvalue.inputmask",v).unbind("blur.inputmask",u)},p=function(){o.call(this),a(this).bindFirst("keypress.inputmask",t).bindFirst("input.inputmask",x).bindFirst("paste.inputmask",x).bindFirst("dragdrop.inputmask",x).bindFirst("drop.inputmask",x).bindFirst("keydown.inputmask",s).bindFirst("setvalue.inputmask",v).bind("blur.inputmask",u)},q=function(c,e){if(c&&(e||c.mask!=j.mask)){var f;e||(f=n(j.mask,c.mask,d.call(this))),e&&(this._valueSet?this._valueSet(e):this.value=e),a(this).inputmask(c.mask,a.extend(!0,b.inputmask,{insertMode:l})),e||d.call(this,f.begin,f.end)}return j=c,b.onMaskChange.call(this,c.obj,c.determined),!0},r=function(b,c,d){var e=m(c);return!(!e||e.obj!=j.obj||e.determined!=j.determined)||(e&&(o.call(this),d?(q.call(this,e),a(this).trigger(b)):(a(this).trigger(b),q.call(this,e)),p.call(this)),b.stopImmediatePropagation(),!1)},s=function(a){a=a||window.event;var c=a.which||a.charCode||a.keyCode;if(8==c||46==c||i&&127==c){var e=this._valueGet(),f=d.call(this);if(f.begin==f.end||!l&&f.begin==f.end-1){var g=f.begin;do{46!=c&&g--;var h=e.charAt(g);e=e.substring(0,g)+e.substring(g+1)}while(g>0&&g<e.length&&h!=k&&!b.match.test(h))}else{var j=e.substring(0,f.begin)+e.substring(f.end);j.search(b.match)==-1&&(e=j)}return r.call(this,a,e,!1)}return 45==c&&(l=!l),!0},t=function(a){if(void 0!=this.length){var b=this._valueGet();a=a||window.event;var c=a.which||a.charCode||a.keyCode,e=String.fromCharCode(c);return caretPos=d.call(this),b=b.substring(0,caretPos.begin)+e+b.substring(caretPos.end),r.call(this,a,b,!0)}},u=function(a){if(void 0!=this.length){var b=m(this._valueGet());return q.call(this,b),p.call(this),!0}},v=function(a){return w.call(this),a.stopImmediatePropagation(),!0},w=function(){var a;a=this._valueGet?this._valueGet():this.value;for(var b=m(a);!b&&a.length>0;)a=a.substr(0,a.length-1),b=m(a);q.call(this,b,a),p.call(this)},x=function(a){var b=this;return setTimeout(function(){w.call(b)},0),a.stopImmediatePropagation(),!0};switch(c){case"isCompleted":var y=m(this[0]._valueGet&&this[0]._valueGet()||this[0].value);return y&&y.completed;default:return this.each(function(){w.call(this)}),this}}}(jQuery);





/*----------------------------------------------
Заголовки font-size:52px;line-height:56px;


10 картинка может встать
никогда не использовать светлый первый экран
картинку можно выравнивать по верхнему краю
десяток картинок подставлять в первый экран
не использовать длинный призыв на кнопке
обязательно анимируй кнопку
все блоки первого экрана темные чтобы на них белым цветом было хорошо все видно
включить фонтавесоме
на мобиле нужно переделывать блоки картинка первая потом идет текст
первый экран на мобиле самый важный
на мобиле мелкий текст выравнивать по левому краю
не менять шрифты
90px отступы
где искать иконки



сделать в каждом блоке по градиенту




1) https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900
2) <script type="text/javascript">(function($) {"use strict";$(document).ready(function(){$('[data-tilda-sign]').remove();$("img").mousedown(function(){return false;});});})(jQuery);</script>
3) Выбери дизайн кнопок

-----------------------------------------------*/




(function($) {
    "use strict";
    $(document).ready(function(){


//---------------------------------------------------------------------------
//      Elements Fix
//---------------------------------------------------------------------------
//BTN replace ---------------------------------------------------------------
if($('.t391__btn').length){
    $('.t391 .t391__btn').each(function(){
        $(this).css({'opacity':1});
        var id = $(this).find('a').attr('href')
                
        $(this).find('a').remove()
        if(id.indexOf("#rec") >= 0){
            $(id).addClass('just_as_added_button')
            $(id).find('a').parentsUntil(id).addClass('uncss_us_plz')
            $(this).append($(id))
        }
        //$(id).remove();/**/
    })
}
//Months --------------------------------------------------------------------
window.monthses = ['январе','феврале','марте','апреле','мае','июне','июле','августе','сентябре','октябре','ноябре','декабре'];
var d = new Date(),
    n = d.getMonth();
$('del').each(function(){
    $(this).css({'opacity':'1'})
    var text = $(this).text();
    if(text=='$$$$$$'){
        $(this).text(monthses[n]);
    }
})
//Table Bottom --------------------------------------------------------------
if($('.block_table_bottom').length){
    console.log(2)
    var id = $('.block_table_bottom').attr('data-id')
    var src = $('.block_table_bottom').attr('data-src')
    $('#'+id).append('<div style="position:relative;"><div class="custom_table_bottom" style="background-image:url('+src+');"></div></div>')
}
//Field conversion  ---------------------------------------------------------

    function setSelectionRange(input, selectionStart, selectionEnd) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    }
    function setCaretToPos(input, pos) {
          setSelectionRange(input, pos, pos);
    }
    window.th_popup_input_changed = function(obj){
        if(!obj.hasClass('suc')){
            var parent = obj.closest('.t-input-group')
            var nextParent = parent.next()
            nextParent.addClass('activate')
            var target = nextParent.find('input')
            target.focus()
        }
        obj.addClass('suc')
    }
    //email-type check
    $('input[name="Email"]').on('input', function() {
        if($(this).attr('name')=='Email'){
            var val = $(this).val()
            if (val.indexOf(".ru") >= 0||val.indexOf(".net") >= 0||val.indexOf(".com") >= 0){
                th_popup_input_changed($(this))
            }
        }
    });
    //phone
    $( '.t-input-group_ph input:not(.code_add)' ).focus(function() {
        $(this).addClass('code_add')
        if($(this).val().length<6){
            $(this).val('+7(___)___-____')
            setCaretToPos($(this)[0], 3);
        }
    });
    var maskList = [{"mask":"+247-####","cc":"AC","name_en":"Ascension","desc_en":"","name_ru":"Остров Вознесения","desc_ru":""},{"mask":"+376-###-###","cc":"AD","name_en":"Andorra","desc_en":"","name_ru":"Андорра","desc_ru":""},{"mask":"+971-5#-###-####","cc":"AE","name_en":"United Arab Emirates","desc_en":"mobile","name_ru":"Объединенные Арабские Эмираты","desc_ru":"мобильные"},{"mask":"+971-#-###-####","cc":"AE","name_en":"United Arab Emirates","desc_en":"","name_ru":"Объединенные Арабские Эмираты","desc_ru":""},{"mask":"+93-##-###-####","cc":"AF","name_en":"Afghanistan","desc_en":"","name_ru":"Афганистан","desc_ru":""},{"mask":"+1(268)###-####","cc":"AG","name_en":"Antigua & Barbuda","desc_en":"","name_ru":"Антигуа и Барбуда","desc_ru":""},{"mask":"+1(264)###-####","cc":"AI","name_en":"Anguilla","desc_en":"","name_ru":"Ангилья","desc_ru":""},{"mask":"+355(###)###-###","cc":"AL","name_en":"Albania","desc_en":"","name_ru":"Албания","desc_ru":""},{"mask":"+374-##-###-###","cc":"AM","name_en":"Armenia","desc_en":"","name_ru":"Армения","desc_ru":""},{"mask":"+599-###-####","cc":"AN","name_en":"Caribbean Netherlands","desc_en":"","name_ru":"Карибские Нидерланды","desc_ru":""},{"mask":"+599-###-####","cc":"AN","name_en":"Netherlands Antilles","desc_en":"","name_ru":"Нидерландские Антильские острова","desc_ru":""},{"mask":"+599-9###-####","cc":"AN","name_en":"Netherlands Antilles","desc_en":"Curacao","name_ru":"Нидерландские Антильские острова","desc_ru":"Кюрасао"},{"mask":"+244(###)###-###","cc":"AO","name_en":"Angola","desc_en":"","name_ru":"Ангола","desc_ru":""},{"mask":"+672-1##-###","cc":"AQ","name_en":"Australian bases in Antarctica","desc_en":"","name_ru":"Австралийская антарктическая база","desc_ru":""},{"mask":"+54(###)###-####","cc":"AR","name_en":"Argentina","desc_en":"","name_ru":"Аргентина","desc_ru":""},{"mask":"+1(684)###-####","cc":"AS","name_en":"American Samoa","desc_en":"","name_ru":"Американское Самоа","desc_ru":""},{"mask":"+43(###)###-####","cc":"AT","name_en":"Austria","desc_en":"","name_ru":"Австрия","desc_ru":""},{"mask":"+61-#-####-####","cc":"AU","name_en":"Australia","desc_en":"","name_ru":"Австралия","desc_ru":""},{"mask":"+297-###-####","cc":"AW","name_en":"Aruba","desc_en":"","name_ru":"Аруба","desc_ru":""},{"mask":"+994-##-###-##-##","cc":"AZ","name_en":"Azerbaijan","desc_en":"","name_ru":"Азербайджан","desc_ru":""},{"mask":"+387-##-#####","cc":"BA","name_en":"Bosnia and Herzegovina","desc_en":"","name_ru":"Босния и Герцеговина","desc_ru":""},{"mask":"+387-##-####","cc":"BA","name_en":"Bosnia and Herzegovina","desc_en":"","name_ru":"Босния и Герцеговина","desc_ru":""},{"mask":"+1(246)###-####","cc":"BB","name_en":"Barbados","desc_en":"","name_ru":"Барбадос","desc_ru":""},{"mask":"+880-##-###-###","cc":"BD","name_en":"Bangladesh","desc_en":"","name_ru":"Бангладеш","desc_ru":""},{"mask":"+32(###)###-###","cc":"BE","name_en":"Belgium","desc_en":"","name_ru":"Бельгия","desc_ru":""},{"mask":"+226-##-##-####","cc":"BF","name_en":"Burkina Faso","desc_en":"","name_ru":"Буркина Фасо","desc_ru":""},{"mask":"+359(###)###-###","cc":"BG","name_en":"Bulgaria","desc_en":"","name_ru":"Болгария","desc_ru":""},{"mask":"+973-####-####","cc":"BH","name_en":"Bahrain","desc_en":"","name_ru":"Бахрейн","desc_ru":""},{"mask":"+257-##-##-####","cc":"BI","name_en":"Burundi","desc_en":"","name_ru":"Бурунди","desc_ru":""},{"mask":"+229-##-##-####","cc":"BJ","name_en":"Benin","desc_en":"","name_ru":"Бенин","desc_ru":""},{"mask":"+1(441)###-####","cc":"BM","name_en":"Bermuda","desc_en":"","name_ru":"Бермудские острова","desc_ru":""},{"mask":"+673-###-####","cc":"BN","name_en":"Brunei Darussalam","desc_en":"","name_ru":"Бруней-Даруссалам","desc_ru":""},{"mask":"+591-#-###-####","cc":"BO","name_en":"Bolivia","desc_en":"","name_ru":"Боливия","desc_ru":""},{"mask":"+55-##-####-####","cc":"BR","name_en":"Brazil","desc_en":"","name_ru":"Бразилия","desc_ru":""},{"mask":"+1(242)###-####","cc":"BS","name_en":"Bahamas","desc_en":"","name_ru":"Багамские Острова","desc_ru":""},{"mask":"+975-17-###-###","cc":"BT","name_en":"Bhutan","desc_en":"","name_ru":"Бутан","desc_ru":""},{"mask":"+975-#-###-###","cc":"BT","name_en":"Bhutan","desc_en":"","name_ru":"Бутан","desc_ru":""},{"mask":"+267-##-###-###","cc":"BW","name_en":"Botswana","desc_en":"","name_ru":"Ботсвана","desc_ru":""},{"mask":"+375(##)###-##-##","cc":"BY","name_en":"Belarus","desc_en":"","name_ru":"Беларусь (Белоруссия)","desc_ru":""},{"mask":"+501-###-####","cc":"BZ","name_en":"Belize","desc_en":"","name_ru":"Белиз","desc_ru":""},{"mask":"+243(###)###-###","cc":"CD","name_en":"Dem. Rep. Congo","desc_en":"","name_ru":"Дем. Респ. Конго (Киншаса)","desc_ru":""},{"mask":"+236-##-##-####","cc":"CF","name_en":"Central African Republic","desc_en":"","name_ru":"Центральноафриканская Республика","desc_ru":""},{"mask":"+242-##-###-####","cc":"CG","name_en":"Congo (Brazzaville)","desc_en":"","name_ru":"Конго (Браззавиль)","desc_ru":""},{"mask":"+41-##-###-####","cc":"CH","name_en":"Switzerland","desc_en":"","name_ru":"Швейцария","desc_ru":""},{"mask":"+225-##-###-###","cc":"CI","name_en":"Cote d’Ivoire (Ivory Coast)","desc_en":"","name_ru":"Кот-д’Ивуар","desc_ru":""},{"mask":"+682-##-###","cc":"CK","name_en":"Cook Islands","desc_en":"","name_ru":"Острова Кука","desc_ru":""},{"mask":"+56-#-####-####","cc":"CL","name_en":"Chile","desc_en":"","name_ru":"Чили","desc_ru":""},{"mask":"+237-####-####","cc":"CM","name_en":"Cameroon","desc_en":"","name_ru":"Камерун","desc_ru":""},{"mask":"+86(###)####-####","cc":"CN","name_en":"China (PRC)","desc_en":"","name_ru":"Китайская Н.Р.","desc_ru":""},{"mask":"+86(###)####-###","cc":"CN","name_en":"China (PRC)","desc_en":"","name_ru":"Китайская Н.Р.","desc_ru":""},{"mask":"+86-##-#####-#####","cc":"CN","name_en":"China (PRC)","desc_en":"","name_ru":"Китайская Н.Р.","desc_ru":""},{"mask":"+57(###)###-####","cc":"CO","name_en":"Colombia","desc_en":"","name_ru":"Колумбия","desc_ru":""},{"mask":"+506-####-####","cc":"CR","name_en":"Costa Rica","desc_en":"","name_ru":"Коста-Рика","desc_ru":""},{"mask":"+53-#-###-####","cc":"CU","name_en":"Cuba","desc_en":"","name_ru":"Куба","desc_ru":""},{"mask":"+238(###)##-##","cc":"CV","name_en":"Cape Verde","desc_en":"","name_ru":"Кабо-Верде","desc_ru":""},{"mask":"+599-###-####","cc":"CW","name_en":"Curacao","desc_en":"","name_ru":"Кюрасао","desc_ru":""},{"mask":"+357-##-###-###","cc":"CY","name_en":"Cyprus","desc_en":"","name_ru":"Кипр","desc_ru":""},{"mask":"+420(###)###-###","cc":"CZ","name_en":"Czech Republic","desc_en":"","name_ru":"Чехия","desc_ru":""},{"mask":"+49(####)###-####","cc":"DE","name_en":"Germany","desc_en":"","name_ru":"Германия","desc_ru":""},{"mask":"+49(###)###-####","cc":"DE","name_en":"Germany","desc_en":"","name_ru":"Германия","desc_ru":""},{"mask":"+49(###)##-####","cc":"DE","name_en":"Germany","desc_en":"","name_ru":"Германия","desc_ru":""},{"mask":"+49(###)##-###","cc":"DE","name_en":"Germany","desc_en":"","name_ru":"Германия","desc_ru":""},{"mask":"+49(###)##-##","cc":"DE","name_en":"Germany","desc_en":"","name_ru":"Германия","desc_ru":""},{"mask":"+49-###-###","cc":"DE","name_en":"Germany","desc_en":"","name_ru":"Германия","desc_ru":""},{"mask":"+253-##-##-##-##","cc":"DJ","name_en":"Djibouti","desc_en":"","name_ru":"Джибути","desc_ru":""},{"mask":"+45-##-##-##-##","cc":"DK","name_en":"Denmark","desc_en":"","name_ru":"Дания","desc_ru":""},{"mask":"+1(767)###-####","cc":"DM","name_en":"Dominica","desc_en":"","name_ru":"Доминика","desc_ru":""},{"mask":"+1(809)###-####","cc":"DO","name_en":"Dominican Republic","desc_en":"","name_ru":"Доминиканская Республика","desc_ru":""},{"mask":"+1(829)###-####","cc":"DO","name_en":"Dominican Republic","desc_en":"","name_ru":"Доминиканская Республика","desc_ru":""},{"mask":"+1(849)###-####","cc":"DO","name_en":"Dominican Republic","desc_en":"","name_ru":"Доминиканская Республика","desc_ru":""},{"mask":"+213-##-###-####","cc":"DZ","name_en":"Algeria","desc_en":"","name_ru":"Алжир","desc_ru":""},{"mask":"+593-##-###-####","cc":"EC","name_en":"Ecuador ","desc_en":"mobile","name_ru":"Эквадор ","desc_ru":"мобильные"},{"mask":"+593-#-###-####","cc":"EC","name_en":"Ecuador","desc_en":"","name_ru":"Эквадор","desc_ru":""},{"mask":"+372-####-####","cc":"EE","name_en":"Estonia ","desc_en":"mobile","name_ru":"Эстония ","desc_ru":"мобильные"},{"mask":"+372-###-####","cc":"EE","name_en":"Estonia","desc_en":"","name_ru":"Эстония","desc_ru":""},{"mask":"+20(###)###-####","cc":"EG","name_en":"Egypt","desc_en":"","name_ru":"Египет","desc_ru":""},{"mask":"+291-#-###-###","cc":"ER","name_en":"Eritrea","desc_en":"","name_ru":"Эритрея","desc_ru":""},{"mask":"+34(###)###-###","cc":"ES","name_en":"Spain","desc_en":"","name_ru":"Испания","desc_ru":""},{"mask":"+251-##-###-####","cc":"ET","name_en":"Ethiopia","desc_en":"","name_ru":"Эфиопия","desc_ru":""},{"mask":"+358(###)###-##-##","cc":"FI","name_en":"Finland","desc_en":"","name_ru":"Финляндия","desc_ru":""},{"mask":"+679-##-#####","cc":"FJ","name_en":"Fiji","desc_en":"","name_ru":"Фиджи","desc_ru":""},{"mask":"+500-#####","cc":"FK","name_en":"Falkland Islands","desc_en":"","name_ru":"Фолклендские острова","desc_ru":""},{"mask":"+691-###-####","cc":"FM","name_en":"F.S. Micronesia","desc_en":"","name_ru":"Ф.Ш. Микронезии","desc_ru":""},{"mask":"+298-###-###","cc":"FO","name_en":"Faroe Islands","desc_en":"","name_ru":"Фарерские острова","desc_ru":""},{"mask":"+262-#####-####","cc":"FR","name_en":"Mayotte","desc_en":"","name_ru":"Майотта","desc_ru":""},{"mask":"+33(###)###-###","cc":"FR","name_en":"France","desc_en":"","name_ru":"Франция","desc_ru":""},{"mask":"+508-##-####","cc":"FR","name_en":"St Pierre & Miquelon","desc_en":"","name_ru":"Сен-Пьер и Микелон","desc_ru":""},{"mask":"+590(###)###-###","cc":"FR","name_en":"Guadeloupe","desc_en":"","name_ru":"Гваделупа","desc_ru":""},{"mask":"+241-#-##-##-##","cc":"GA","name_en":"Gabon","desc_en":"","name_ru":"Габон","desc_ru":""},{"mask":"+1(473)###-####","cc":"GD","name_en":"Grenada","desc_en":"","name_ru":"Гренада","desc_ru":""},{"mask":"+995(###)###-###","cc":"GE","name_en":"Rep. of Georgia","desc_en":"","name_ru":"Грузия","desc_ru":""},{"mask":"+594-#####-####","cc":"GF","name_en":"Guiana (French)","desc_en":"","name_ru":"Фр. Гвиана","desc_ru":""},{"mask":"+233(###)###-###","cc":"GH","name_en":"Ghana","desc_en":"","name_ru":"Гана","desc_ru":""},{"mask":"+350-###-#####","cc":"GI","name_en":"Gibraltar","desc_en":"","name_ru":"Гибралтар","desc_ru":""},{"mask":"+299-##-##-##","cc":"GL","name_en":"Greenland","desc_en":"","name_ru":"Гренландия","desc_ru":""},{"mask":"+220(###)##-##","cc":"GM","name_en":"Gambia","desc_en":"","name_ru":"Гамбия","desc_ru":""},{"mask":"+224-##-###-###","cc":"GN","name_en":"Guinea","desc_en":"","name_ru":"Гвинея","desc_ru":""},{"mask":"+240-##-###-####","cc":"GQ","name_en":"Equatorial Guinea","desc_en":"","name_ru":"Экваториальная Гвинея","desc_ru":""},{"mask":"+30(###)###-####","cc":"GR","name_en":"Greece","desc_en":"","name_ru":"Греция","desc_ru":""},{"mask":"+502-#-###-####","cc":"GT","name_en":"Guatemala","desc_en":"","name_ru":"Гватемала","desc_ru":""},{"mask":"+1(671)###-####","cc":"GU","name_en":"Guam","desc_en":"","name_ru":"Гуам","desc_ru":""},{"mask":"+245-#-######","cc":"GW","name_en":"Guinea-Bissau","desc_en":"","name_ru":"Гвинея-Бисау","desc_ru":""},{"mask":"+592-###-####","cc":"GY","name_en":"Guyana","desc_en":"","name_ru":"Гайана","desc_ru":""},{"mask":"+852-####-####","cc":"HK","name_en":"Hong Kong","desc_en":"","name_ru":"Гонконг","desc_ru":""},{"mask":"+504-####-####","cc":"HN","name_en":"Honduras","desc_en":"","name_ru":"Гондурас","desc_ru":""},{"mask":"+385-##-###-###","cc":"HR","name_en":"Croatia","desc_en":"","name_ru":"Хорватия","desc_ru":""},{"mask":"+509-##-##-####","cc":"HT","name_en":"Haiti","desc_en":"","name_ru":"Гаити","desc_ru":""},{"mask":"+36(###)###-###","cc":"HU","name_en":"Hungary","desc_en":"","name_ru":"Венгрия","desc_ru":""},{"mask":"+62(8##)###-####","cc":"ID","name_en":"Indonesia ","desc_en":"mobile","name_ru":"Индонезия ","desc_ru":"мобильные"},{"mask":"+62-##-###-##","cc":"ID","name_en":"Indonesia","desc_en":"","name_ru":"Индонезия","desc_ru":""},{"mask":"+62-##-###-###","cc":"ID","name_en":"Indonesia","desc_en":"","name_ru":"Индонезия","desc_ru":""},{"mask":"+62-##-###-####","cc":"ID","name_en":"Indonesia","desc_en":"","name_ru":"Индонезия","desc_ru":""},{"mask":"+62(8##)###-###","cc":"ID","name_en":"Indonesia ","desc_en":"mobile","name_ru":"Индонезия ","desc_ru":"мобильные"},{"mask":"+62(8##)###-##-###","cc":"ID","name_en":"Indonesia ","desc_en":"mobile","name_ru":"Индонезия ","desc_ru":"мобильные"},{"mask":"+353(###)###-###","cc":"IE","name_en":"Ireland","desc_en":"","name_ru":"Ирландия","desc_ru":""},{"mask":"+972-5#-###-####","cc":"IL","name_en":"Israel ","desc_en":"mobile","name_ru":"Израиль ","desc_ru":"мобильные"},{"mask":"+972-#-###-####","cc":"IL","name_en":"Israel","desc_en":"","name_ru":"Израиль","desc_ru":""},{"mask":"+91(####)###-###","cc":"IN","name_en":"India","desc_en":"","name_ru":"Индия","desc_ru":""},{"mask":"+246-###-####","cc":"IO","name_en":"Diego Garcia","desc_en":"","name_ru":"Диего-Гарсия","desc_ru":""},{"mask":"+964(###)###-####","cc":"IQ","name_en":"Iraq","desc_en":"","name_ru":"Ирак","desc_ru":""},{"mask":"+98(###)###-####","cc":"IR","name_en":"Iran","desc_en":"","name_ru":"Иран","desc_ru":""},{"mask":"+354-###-####","cc":"IS","name_en":"Iceland","desc_en":"","name_ru":"Исландия","desc_ru":""},{"mask":"+39(###)####-###","cc":"IT","name_en":"Italy","desc_en":"","name_ru":"Италия","desc_ru":""},{"mask":"+1(876)###-####","cc":"JM","name_en":"Jamaica","desc_en":"","name_ru":"Ямайка","desc_ru":""},{"mask":"+962-#-####-####","cc":"JO","name_en":"Jordan","desc_en":"","name_ru":"Иордания","desc_ru":""},{"mask":"+81-##-####-####","cc":"JP","name_en":"Japan ","desc_en":"mobile","name_ru":"Япония ","desc_ru":"мобильные"},{"mask":"+81(###)###-###","cc":"JP","name_en":"Japan","desc_en":"","name_ru":"Япония","desc_ru":""},{"mask":"+254-###-######","cc":"KE","name_en":"Kenya","desc_en":"","name_ru":"Кения","desc_ru":""},{"mask":"+996(###)###-###","cc":"KG","name_en":"Kyrgyzstan","desc_en":"","name_ru":"Киргизия","desc_ru":""},{"mask":"+855-##-###-###","cc":"KH","name_en":"Cambodia","desc_en":"","name_ru":"Камбоджа","desc_ru":""},{"mask":"+686-##-###","cc":"KI","name_en":"Kiribati","desc_en":"","name_ru":"Кирибати","desc_ru":""},{"mask":"+269-##-#####","cc":"KM","name_en":"Comoros","desc_en":"","name_ru":"Коморы","desc_ru":""},{"mask":"+1(869)###-####","cc":"KN","name_en":"Saint Kitts & Nevis","desc_en":"","name_ru":"Сент-Китс и Невис","desc_ru":""},{"mask":"+850-191-###-####","cc":"KP","name_en":"DPR Korea (North) ","desc_en":"mobile","name_ru":"Корейская НДР ","desc_ru":"мобильные"},{"mask":"+850-##-###-###","cc":"KP","name_en":"DPR Korea (North)","desc_en":"","name_ru":"Корейская НДР","desc_ru":""},{"mask":"+850-###-####-###","cc":"KP","name_en":"DPR Korea (North)","desc_en":"","name_ru":"Корейская НДР","desc_ru":""},{"mask":"+850-###-###","cc":"KP","name_en":"DPR Korea (North)","desc_en":"","name_ru":"Корейская НДР","desc_ru":""},{"mask":"+850-####-####","cc":"KP","name_en":"DPR Korea (North)","desc_en":"","name_ru":"Корейская НДР","desc_ru":""},{"mask":"+850-####-#############","cc":"KP","name_en":"DPR Korea (North)","desc_en":"","name_ru":"Корейская НДР","desc_ru":""},{"mask":"+82-##-###-####","cc":"KR","name_en":"Korea (South)","desc_en":"","name_ru":"Респ. Корея","desc_ru":""},{"mask":"+965-####-####","cc":"KW","name_en":"Kuwait","desc_en":"","name_ru":"Кувейт","desc_ru":""},{"mask":"+1(345)###-####","cc":"KY","name_en":"Cayman Islands","desc_en":"","name_ru":"Каймановы острова","desc_ru":""},{"mask":"+7(6##)###-##-##","cc":"KZ","name_en":"Kazakhstan","desc_en":"","name_ru":"Казахстан","desc_ru":""},{"mask":"+7(7##)###-##-##","cc":"KZ","name_en":"Kazakhstan","desc_en":"","name_ru":"Казахстан","desc_ru":""},{"mask":"+856(20##)###-###","cc":"LA","name_en":"Laos ","desc_en":"mobile","name_ru":"Лаос ","desc_ru":"мобильные"},{"mask":"+856-##-###-###","cc":"LA","name_en":"Laos","desc_en":"","name_ru":"Лаос","desc_ru":""},{"mask":"+961-##-###-###","cc":"LB","name_en":"Lebanon ","desc_en":"mobile","name_ru":"Ливан ","desc_ru":"мобильные"},{"mask":"+961-#-###-###","cc":"LB","name_en":"Lebanon","desc_en":"","name_ru":"Ливан","desc_ru":""},{"mask":"+1(758)###-####","cc":"LC","name_en":"Saint Lucia","desc_en":"","name_ru":"Сент-Люсия","desc_ru":""},{"mask":"+423(###)###-####","cc":"LI","name_en":"Liechtenstein","desc_en":"","name_ru":"Лихтенштейн","desc_ru":""},{"mask":"+94-##-###-####","cc":"LK","name_en":"Sri Lanka","desc_en":"","name_ru":"Шри-Ланка","desc_ru":""},{"mask":"+231-##-###-###","cc":"LR","name_en":"Liberia","desc_en":"","name_ru":"Либерия","desc_ru":""},{"mask":"+266-#-###-####","cc":"LS","name_en":"Lesotho","desc_en":"","name_ru":"Лесото","desc_ru":""},{"mask":"+370(###)##-###","cc":"LT","name_en":"Lithuania","desc_en":"","name_ru":"Литва","desc_ru":""},{"mask":"+352(###)###-###","cc":"LU","name_en":"Luxembourg","desc_en":"","name_ru":"Люксембург","desc_ru":""},{"mask":"+371-##-###-###","cc":"LV","name_en":"Latvia","desc_en":"","name_ru":"Латвия","desc_ru":""},{"mask":"+218-##-###-###","cc":"LY","name_en":"Libya","desc_en":"","name_ru":"Ливия","desc_ru":""},{"mask":"+218-21-###-####","cc":"LY","name_en":"Libya","desc_en":"Tripoli","name_ru":"Ливия","desc_ru":"Триполи"},{"mask":"+212-##-####-###","cc":"MA","name_en":"Morocco","desc_en":"","name_ru":"Марокко","desc_ru":""},{"mask":"+377(###)###-###","cc":"MC","name_en":"Monaco","desc_en":"","name_ru":"Монако","desc_ru":""},{"mask":"+377-##-###-###","cc":"MC","name_en":"Monaco","desc_en":"","name_ru":"Монако","desc_ru":""},{"mask":"+373-####-####","cc":"MD","name_en":"Moldova","desc_en":"","name_ru":"Молдова","desc_ru":""},{"mask":"+382-##-###-###","cc":"ME","name_en":"Montenegro","desc_en":"","name_ru":"Черногория","desc_ru":""},{"mask":"+261-##-##-#####","cc":"MG","name_en":"Madagascar","desc_en":"","name_ru":"Мадагаскар","desc_ru":""},{"mask":"+692-###-####","cc":"MH","name_en":"Marshall Islands","desc_en":"","name_ru":"Маршалловы Острова","desc_ru":""},{"mask":"+389-##-###-###","cc":"MK","name_en":"Republic of Macedonia","desc_en":"","name_ru":"Респ. Македония","desc_ru":""},{"mask":"+223-##-##-####","cc":"ML","name_en":"Mali","desc_en":"","name_ru":"Мали","desc_ru":""},{"mask":"+95-##-###-###","cc":"MM","name_en":"Burma (Myanmar)","desc_en":"","name_ru":"Бирма (Мьянма)","desc_ru":""},{"mask":"+95-#-###-###","cc":"MM","name_en":"Burma (Myanmar)","desc_en":"","name_ru":"Бирма (Мьянма)","desc_ru":""},{"mask":"+95-###-###","cc":"MM","name_en":"Burma (Myanmar)","desc_en":"","name_ru":"Бирма (Мьянма)","desc_ru":""},{"mask":"+976-##-##-####","cc":"MN","name_en":"Mongolia","desc_en":"","name_ru":"Монголия","desc_ru":""},{"mask":"+853-####-####","cc":"MO","name_en":"Macau","desc_en":"","name_ru":"Макао","desc_ru":""},{"mask":"+1(670)###-####","cc":"MP","name_en":"Northern Mariana Islands","desc_en":"","name_ru":"Северные Марианские острова Сайпан","desc_ru":""},{"mask":"+596(###)##-##-##","cc":"MQ","name_en":"Martinique","desc_en":"","name_ru":"Мартиника","desc_ru":""},{"mask":"+222-##-##-####","cc":"MR","name_en":"Mauritania","desc_en":"","name_ru":"Мавритания","desc_ru":""},{"mask":"+1(664)###-####","cc":"MS","name_en":"Montserrat","desc_en":"","name_ru":"Монтсеррат","desc_ru":""},{"mask":"+356-####-####","cc":"MT","name_en":"Malta","desc_en":"","name_ru":"Мальта","desc_ru":""},{"mask":"+230-###-####","cc":"MU","name_en":"Mauritius","desc_en":"","name_ru":"Маврикий","desc_ru":""},{"mask":"+960-###-####","cc":"MV","name_en":"Maldives","desc_en":"","name_ru":"Мальдивские острова","desc_ru":""},{"mask":"+265-1-###-###","cc":"MW","name_en":"Malawi","desc_en":"Telecom Ltd","name_ru":"Малави","desc_ru":"Telecom Ltd"},{"mask":"+265-#-####-####","cc":"MW","name_en":"Malawi","desc_en":"","name_ru":"Малави","desc_ru":""},{"mask":"+52(###)###-####","cc":"MX","name_en":"Mexico","desc_en":"","name_ru":"Мексика","desc_ru":""},{"mask":"+52-##-##-####","cc":"MX","name_en":"Mexico","desc_en":"","name_ru":"Мексика","desc_ru":""},{"mask":"+60-##-###-####","cc":"MY","name_en":"Malaysia ","desc_en":"mobile","name_ru":"Малайзия ","desc_ru":"мобильные"},{"mask":"+60(###)###-###","cc":"MY","name_en":"Malaysia","desc_en":"","name_ru":"Малайзия","desc_ru":""},{"mask":"+60-##-###-###","cc":"MY","name_en":"Malaysia","desc_en":"","name_ru":"Малайзия","desc_ru":""},{"mask":"+60-#-###-###","cc":"MY","name_en":"Malaysia","desc_en":"","name_ru":"Малайзия","desc_ru":""},{"mask":"+258-##-###-###","cc":"MZ","name_en":"Mozambique","desc_en":"","name_ru":"Мозамбик","desc_ru":""},{"mask":"+264-##-###-####","cc":"NA","name_en":"Namibia","desc_en":"","name_ru":"Намибия","desc_ru":""},{"mask":"+687-##-####","cc":"NC","name_en":"New Caledonia","desc_en":"","name_ru":"Новая Каледония","desc_ru":""},{"mask":"+227-##-##-####","cc":"NE","name_en":"Niger","desc_en":"","name_ru":"Нигер","desc_ru":""},{"mask":"+672-3##-###","cc":"NF","name_en":"Norfolk Island","desc_en":"","name_ru":"Норфолк (остров)","desc_ru":""},{"mask":"+234(###)###-####","cc":"NG","name_en":"Nigeria","desc_en":"","name_ru":"Нигерия","desc_ru":""},{"mask":"+234-##-###-###","cc":"NG","name_en":"Nigeria","desc_en":"","name_ru":"Нигерия","desc_ru":""},{"mask":"+234-##-###-##","cc":"NG","name_en":"Nigeria","desc_en":"","name_ru":"Нигерия","desc_ru":""},{"mask":"+234(###)###-####","cc":"NG","name_en":"Nigeria ","desc_en":"mobile","name_ru":"Нигерия ","desc_ru":"мобильные"},{"mask":"+505-####-####","cc":"NI","name_en":"Nicaragua","desc_en":"","name_ru":"Никарагуа","desc_ru":""},{"mask":"+31-##-###-####","cc":"NL","name_en":"Netherlands","desc_en":"","name_ru":"Нидерланды","desc_ru":""},{"mask":"+47(###)##-###","cc":"NO","name_en":"Norway","desc_en":"","name_ru":"Норвегия","desc_ru":""},{"mask":"+977-##-###-###","cc":"NP","name_en":"Nepal","desc_en":"","name_ru":"Непал","desc_ru":""},{"mask":"+674-###-####","cc":"NR","name_en":"Nauru","desc_en":"","name_ru":"Науру","desc_ru":""},{"mask":"+683-####","cc":"NU","name_en":"Niue","desc_en":"","name_ru":"Ниуэ","desc_ru":""},{"mask":"+64(###)###-###","cc":"NZ","name_en":"New Zealand","desc_en":"","name_ru":"Новая Зеландия","desc_ru":""},{"mask":"+64-##-###-###","cc":"NZ","name_en":"New Zealand","desc_en":"","name_ru":"Новая Зеландия","desc_ru":""},{"mask":"+64(###)###-####","cc":"NZ","name_en":"New Zealand","desc_en":"","name_ru":"Новая Зеландия","desc_ru":""},{"mask":"+968-##-###-###","cc":"OM","name_en":"Oman","desc_en":"","name_ru":"Оман","desc_ru":""},{"mask":"+507-###-####","cc":"PA","name_en":"Panama","desc_en":"","name_ru":"Панама","desc_ru":""},{"mask":"+51(###)###-###","cc":"PE","name_en":"Peru","desc_en":"","name_ru":"Перу","desc_ru":""},{"mask":"+689-##-##-##","cc":"PF","name_en":"French Polynesia","desc_en":"","name_ru":"Французская Полинезия (Таити)","desc_ru":""},{"mask":"+675(###)##-###","cc":"PG","name_en":"Papua New Guinea","desc_en":"","name_ru":"Папуа-Новая Гвинея","desc_ru":""},{"mask":"+63(###)###-####","cc":"PH","name_en":"Philippines","desc_en":"","name_ru":"Филиппины","desc_ru":""},{"mask":"+92(###)###-####","cc":"PK","name_en":"Pakistan","desc_en":"","name_ru":"Пакистан","desc_ru":""},{"mask":"+48(###)###-###","cc":"PL","name_en":"Poland","desc_en":"","name_ru":"Польша","desc_ru":""},{"mask":"+970-##-###-####","cc":"PS","name_en":"Palestine","desc_en":"","name_ru":"Палестина","desc_ru":""},{"mask":"+351-##-###-####","cc":"PT","name_en":"Portugal","desc_en":"","name_ru":"Португалия","desc_ru":""},{"mask":"+680-###-####","cc":"PW","name_en":"Palau","desc_en":"","name_ru":"Палау","desc_ru":""},{"mask":"+595(###)###-###","cc":"PY","name_en":"Paraguay","desc_en":"","name_ru":"Парагвай","desc_ru":""},{"mask":"+974-####-####","cc":"QA","name_en":"Qatar","desc_en":"","name_ru":"Катар","desc_ru":""},{"mask":"+262-#####-####","cc":"RE","name_en":"Reunion","desc_en":"","name_ru":"Реюньон","desc_ru":""},{"mask":"+40-##-###-####","cc":"RO","name_en":"Romania","desc_en":"","name_ru":"Румыния","desc_ru":""},{"mask":"+381-##-###-####","cc":"RS","name_en":"Serbia","desc_en":"","name_ru":"Сербия","desc_ru":""},{"mask":"+7(###)###-##-##","cc":"RU","name_en":"Russia","desc_en":"","name_ru":"Россия","desc_ru":""},{"mask":"+250(###)###-###","cc":"RW","name_en":"Rwanda","desc_en":"","name_ru":"Руанда","desc_ru":""},{"mask":"+966-5-####-####","cc":"SA","name_en":"Saudi Arabia ","desc_en":"mobile","name_ru":"Саудовская Аравия ","desc_ru":"мобильные"},{"mask":"+966-#-###-####","cc":"SA","name_en":"Saudi Arabia","desc_en":"","name_ru":"Саудовская Аравия","desc_ru":""},{"mask":"+677-###-####","cc":"SB","name_en":"Solomon Islands ","desc_en":"mobile","name_ru":"Соломоновы Острова ","desc_ru":"мобильные"},{"mask":"+677-#####","cc":"SB","name_en":"Solomon Islands","desc_en":"","name_ru":"Соломоновы Острова","desc_ru":""},{"mask":"+248-#-###-###","cc":"SC","name_en":"Seychelles","desc_en":"","name_ru":"Сейшелы","desc_ru":""},{"mask":"+249-##-###-####","cc":"SD","name_en":"Sudan","desc_en":"","name_ru":"Судан","desc_ru":""},{"mask":"+46-##-###-####","cc":"SE","name_en":"Sweden","desc_en":"","name_ru":"Швеция","desc_ru":""},{"mask":"+65-####-####","cc":"SG","name_en":"Singapore","desc_en":"","name_ru":"Сингапур","desc_ru":""},{"mask":"+290-####","cc":"SH","name_en":"Saint Helena","desc_en":"","name_ru":"Остров Святой Елены","desc_ru":""},{"mask":"+290-####","cc":"SH","name_en":"Tristan da Cunha","desc_en":"","name_ru":"Тристан-да-Кунья","desc_ru":""},{"mask":"+386-##-###-###","cc":"SI","name_en":"Slovenia","desc_en":"","name_ru":"Словения","desc_ru":""},{"mask":"+421(###)###-###","cc":"SK","name_en":"Slovakia","desc_en":"","name_ru":"Словакия","desc_ru":""},{"mask":"+232-##-######","cc":"SL","name_en":"Sierra Leone","desc_en":"","name_ru":"Сьерра-Леоне","desc_ru":""},{"mask":"+378-####-######","cc":"SM","name_en":"San Marino","desc_en":"","name_ru":"Сан-Марино","desc_ru":""},{"mask":"+221-##-###-####","cc":"SN","name_en":"Senegal","desc_en":"","name_ru":"Сенегал","desc_ru":""},{"mask":"+252-##-###-###","cc":"SO","name_en":"Somalia","desc_en":"","name_ru":"Сомали","desc_ru":""},{"mask":"+252-#-###-###","cc":"SO","name_en":"Somalia","desc_en":"","name_ru":"Сомали","desc_ru":""},{"mask":"+252-#-###-###","cc":"SO","name_en":"Somalia ","desc_en":"mobile","name_ru":"Сомали ","desc_ru":"мобильные"},{"mask":"+597-###-####","cc":"SR","name_en":"Suriname ","desc_en":"mobile","name_ru":"Суринам ","desc_ru":"мобильные"},{"mask":"+597-###-###","cc":"SR","name_en":"Suriname","desc_en":"","name_ru":"Суринам","desc_ru":""},{"mask":"+211-##-###-####","cc":"SS","name_en":"South Sudan","desc_en":"","name_ru":"Южный Судан","desc_ru":""},{"mask":"+239-##-#####","cc":"ST","name_en":"Sao Tome and Principe","desc_en":"","name_ru":"Сан-Томе и Принсипи","desc_ru":""},{"mask":"+503-##-##-####","cc":"SV","name_en":"El Salvador","desc_en":"","name_ru":"Сальвадор","desc_ru":""},{"mask":"+1(721)###-####","cc":"SX","name_en":"Sint Maarten","desc_en":"","name_ru":"Синт-Маартен","desc_ru":""},{"mask":"+963-##-####-###","cc":"SY","name_en":"Syrian Arab Republic","desc_en":"","name_ru":"Сирийская арабская республика","desc_ru":""},{"mask":"+268-##-##-####","cc":"SZ","name_en":"Swaziland","desc_en":"","name_ru":"Свазиленд","desc_ru":""},{"mask":"+1(649)###-####","cc":"TC","name_en":"Turks & Caicos","desc_en":"","name_ru":"Тёркс и Кайкос","desc_ru":""},{"mask":"+235-##-##-##-##","cc":"TD","name_en":"Chad","desc_en":"","name_ru":"Чад","desc_ru":""},{"mask":"+228-##-###-###","cc":"TG","name_en":"Togo","desc_en":"","name_ru":"Того","desc_ru":""},{"mask":"+66-##-###-####","cc":"TH","name_en":"Thailand ","desc_en":"mobile","name_ru":"Таиланд ","desc_ru":"мобильные"},{"mask":"+66-##-###-###","cc":"TH","name_en":"Thailand","desc_en":"","name_ru":"Таиланд","desc_ru":""},{"mask":"+992-##-###-####","cc":"TJ","name_en":"Tajikistan","desc_en":"","name_ru":"Таджикистан","desc_ru":""},{"mask":"+690-####","cc":"TK","name_en":"Tokelau","desc_en":"","name_ru":"Токелау","desc_ru":""},{"mask":"+670-###-####","cc":"TL","name_en":"East Timor","desc_en":"","name_ru":"Восточный Тимор","desc_ru":""},{"mask":"+670-77#-#####","cc":"TL","name_en":"East Timor","desc_en":"Timor Telecom","name_ru":"Восточный Тимор","desc_ru":"Timor Telecom"},{"mask":"+670-78#-#####","cc":"TL","name_en":"East Timor","desc_en":"Timor Telecom","name_ru":"Восточный Тимор","desc_ru":"Timor Telecom"},{"mask":"+993-#-###-####","cc":"TM","name_en":"Turkmenistan","desc_en":"","name_ru":"Туркменистан","desc_ru":""},{"mask":"+216-##-###-###","cc":"TN","name_en":"Tunisia","desc_en":"","name_ru":"Тунис","desc_ru":""},{"mask":"+676-#####","cc":"TO","name_en":"Tonga","desc_en":"","name_ru":"Тонга","desc_ru":""},{"mask":"+90(###)###-####","cc":"TR","name_en":"Turkey","desc_en":"","name_ru":"Турция","desc_ru":""},{"mask":"+1(868)###-####","cc":"TT","name_en":"Trinidad & Tobago","desc_en":"","name_ru":"Тринидад и Тобаго","desc_ru":""},{"mask":"+688-90####","cc":"TV","name_en":"Tuvalu ","desc_en":"mobile","name_ru":"Тувалу ","desc_ru":"мобильные"},{"mask":"+688-2####","cc":"TV","name_en":"Tuvalu","desc_en":"","name_ru":"Тувалу","desc_ru":""},{"mask":"+886-#-####-####","cc":"TW","name_en":"Taiwan","desc_en":"","name_ru":"Тайвань","desc_ru":""},{"mask":"+886-####-####","cc":"TW","name_en":"Taiwan","desc_en":"","name_ru":"Тайвань","desc_ru":""},{"mask":"+255-##-###-####","cc":"TZ","name_en":"Tanzania","desc_en":"","name_ru":"Танзания","desc_ru":""},{"mask":"+380(##)###-##-##","cc":"UA","name_en":"Ukraine","desc_en":"","name_ru":"Украина","desc_ru":""},{"mask":"+256(###)###-###","cc":"UG","name_en":"Uganda","desc_en":"","name_ru":"Уганда","desc_ru":""},{"mask":"+44-##-####-####","cc":"UK","name_en":"United Kingdom","desc_en":"","name_ru":"Великобритания","desc_ru":""},{"mask":"+598-#-###-##-##","cc":"UY","name_en":"Uruguay","desc_en":"","name_ru":"Уругвай","desc_ru":""},{"mask":"+998-##-###-####","cc":"UZ","name_en":"Uzbekistan","desc_en":"","name_ru":"Узбекистан","desc_ru":""},{"mask":"+39-6-698-#####","cc":"VA","name_en":"Vatican City","desc_en":"","name_ru":"Ватикан","desc_ru":""},{"mask":"+1(784)###-####","cc":"VC","name_en":"Saint Vincent & the Grenadines","desc_en":"","name_ru":"Сент-Винсент и Гренадины","desc_ru":""},{"mask":"+58(###)###-####","cc":"VE","name_en":"Venezuela","desc_en":"","name_ru":"Венесуэла","desc_ru":""},{"mask":"+1(284)###-####","cc":"VG","name_en":"British Virgin Islands","desc_en":"","name_ru":"Британские Виргинские острова","desc_ru":""},{"mask":"+1(340)###-####","cc":"VI","name_en":"US Virgin Islands","desc_en":"","name_ru":"Американские Виргинские острова","desc_ru":""},{"mask":"+84-##-####-###","cc":"VN","name_en":"Vietnam","desc_en":"","name_ru":"Вьетнам","desc_ru":""},{"mask":"+84(###)####-###","cc":"VN","name_en":"Vietnam","desc_en":"","name_ru":"Вьетнам","desc_ru":""},{"mask":"+678-##-#####","cc":"VU","name_en":"Vanuatu ","desc_en":"mobile","name_ru":"Вануату ","desc_ru":"мобильные"},{"mask":"+678-#####","cc":"VU","name_en":"Vanuatu","desc_en":"","name_ru":"Вануату","desc_ru":""},{"mask":"+681-##-####","cc":"WF","name_en":"Wallis and Futuna","desc_en":"","name_ru":"Уоллис и Футуна","desc_ru":""},{"mask":"+685-##-####","cc":"WS","name_en":"Samoa","desc_en":"","name_ru":"Самоа","desc_ru":""},{"mask":"+967-###-###-###","cc":"YE","name_en":"Yemen ","desc_en":"mobile","name_ru":"Йемен ","desc_ru":"мобильные"},{"mask":"+967-#-###-###","cc":"YE","name_en":"Yemen","desc_en":"","name_ru":"Йемен","desc_ru":""},{"mask":"+967-##-###-###","cc":"YE","name_en":"Yemen","desc_en":"","name_ru":"Йемен","desc_ru":""},{"mask":"+27-##-###-####","cc":"ZA","name_en":"South Africa","desc_en":"","name_ru":"Южно-Африканская Респ.","desc_ru":""},{"mask":"+260-##-###-####","cc":"ZM","name_en":"Zambia","desc_en":"","name_ru":"Замбия","desc_ru":""},{"mask":"+263-#-######","cc":"ZW","name_en":"Zimbabwe","desc_en":"","name_ru":"Зимбабве","desc_ru":""},{"mask":"+1(###)###-####","cc":["US","CA"],"name_en":"USA and Canada","desc_en":"","name_ru":"США и Канада","desc_ru":""}];
    window.maskOpts = { 
            inputmask: { 
                definitions: { 
                '#': { 
                    validator: "[0-9]", 
                    cardinality: 1 
                    } 
                }, 
                oncomplete: function($val){
                    $($val['target']).parent().parent().parent().parent().parent().parent().find('button[type="submit"]').click()
                },
                clearIncomplete: true, 
                showMaskOnHover: false, 
                autoUnmask: true 
            },

            match: /[0-9]/, 
            replace: '#', 
            list: maskList, 
            listKey: "mask", 
    }; 

    $('.t-input-group_ph input').inputmasks(maskOpts);

//Quizzz --------------------------------------------------------------------
window.isCurrentCuestionOneSelect = 0;
window.disableDoubleClick = 1;
window.thisIsTheEnd = 0;
window.htmlComment = $('.t862__wrapper .t-input-group_tx .t-text').html()
window.notchanged = 1;
$('.t862__wrapper .t-input-group_tx').remove();

$(window).on( "quiz_start", function( event, param1, param2 ) {
    setProgressToWidth('0%');
    createPath();
    setTimeout(function() {
        setProgressToWidth(100/(getAllQuestion()+1)*getCurrentquestion()+'%');
    }, 100);
    setTimeout(function() {
        setCurrentQuestionActive();
    }, 400);
});
$(window).on( "quiz_next_or_prev", function( event, param1, param2 ) {
    setTimeout(function() {
        setProgressToWidth(100/(getAllQuestion()+1)*getCurrentquestion()+'%');
    }, 1);
    setTimeout(function() {
        setCurrentQuestionActive()
    }, 300);
});
$(window).on( "quiz_selected", function( event, param1, param2 ) {
    setTimeout(function() {
        if(isCurrentCuestionOneSelect){
            if($('.t862__quiz .t862__btn_result').is(":visible")){
                console.log('result')
                $('.t862__quiz .t862__btn_result').click();
            } else {
                console.log('btn')
                $('.t862__quiz .t862__btn_next').click();
            }
            
            
            
            setCurrentQuestionActive()
            setProgressToWidth(100/(getAllQuestion()+1)*getCurrentquestion()+'%');
            $('.t862__wrapper').addClass('marked')
        }
    }, 600);
});
$(window).on( "quiz_close", function( event, param1, param2 ) {
  //alert( 'close');
});


$('[href="#popup:stepform"]').on('click',function(){
    $('.t862__progress').css({'max-width':'0px'})
    $(window).trigger( "quiz_start", [ "Custom", "Event" ] );
})
$('.t862__btn-wrapper button').on('click',function(){
    $(window).trigger( "quiz_next_or_prev", [ "Custom", "Event" ] );
})
$('.t862__quiz .t-input-block label').on('click',function(){
    var obj = $( this )
    setTimeout(function() {
        //console.log($( this ).find( 'input[type="radio"]' ).is(':checked'))
        if(disableDoubleClick && obj.find( 'input[type="radio"]' ).is(':checked')){
            $(window).trigger( "quiz_selected", [ "Custom", "Event" ] );
            disableDoubleClick = 0;
            setTimeout(function() {
                disableDoubleClick = 1;
            }, 1);
        }

    }, 1);
})
$('.t-popup__close').on('click',function(){
    $(window).trigger( "quiz_close", [ "Custom", "Event" ] );
})
$('.t862 .t-popup').on('click', function(e) {
  if (e.target !== this)
    return;
    $(window).trigger( "quiz_close", [ "Custom", "Event" ] );
});


$('.t-img-select__container').each(function(){
    var numChild = $(this).find('.t-img-select__control').length;
    $(this).addClass('num-child-'+numChild)
})

function createPath(){
    if(!$('.t862__wrapper').hasClass('created')){
        //create comment
        $('.t862__capture-form').prepend('<div class="cust_descr_holder"></div>')
        $('.cust_descr_holder').prepend(htmlComment)
        $('.cust_descr_holder ')

        for (var i = 0; i < getAllQuestion(); i++) {
            $('.t862__progressbar').append('<div class="custom_quiz_num" attr-num="'+(i+1)+'" style="left:'+((100/(getAllQuestion()+1)*i)+(100/(getAllQuestion()+1)))+'%;">'+(i+1)+'</div>')
            //console.log(i)
        };
        $('.t862__progressbar').append('<div class="custom_quiz_present"><svg viewBox="0 0 512 512" ><g><g><path d="M32,271.692v192c0,17.664,14.368,32,32,32h160v-224H32z"/></g></g><g><g><path d="M480,143.692H378.752c7.264-4.96,13.504-9.888,17.856-14.304c25.824-25.952,25.824-68.192,0-94.144c-25.088-25.28-68.8-25.216-93.856,0c-13.888,13.92-50.688,70.592-45.6,108.448h-2.304c5.056-37.856-31.744-94.528-45.6-108.448c-25.088-25.216-68.8-25.216-93.856,0C89.6,61.196,89.6,103.436,115.36,129.388c4.384,4.416,10.624,9.344,17.888,14.304H32c-17.632,0-32,14.368-32,32v48c0,8.832,7.168,16,16,16h208v-64h64v64h208c8.832,0,16-7.168,16-16v-48C512,158.06,497.664,143.692,480,143.692z M222.112,142.636c0,0-1.344,1.056-5.92,1.056c-22.112,0-64.32-22.976-78.112-36.864c-13.408-13.504-13.408-35.52,0-49.024c6.496-6.528,15.104-10.112,24.256-10.112c9.12,0,17.728,3.584,24.224,10.112C208.128,79.5,229.568,134.924,222.112,142.636z M295.776,143.692c-4.544,0-5.888-1.024-5.888-1.056c-7.456-7.712,13.984-63.136,35.552-84.832c12.896-13.024,35.456-13.088,48.48,0c13.44,13.504,13.44,35.52,0,49.024C360.128,120.716,317.92,143.692,295.776,143.692z"/></g></g><g><g><path d="M288,271.692v224h160c17.664,0,32-14.336,32-32v-192H288z"/></g></g></svg></div>')
        $('.t862__progressbar').append('<style>.t862__progress,.custom_quiz_num.active,.custom_quiz_present.active,.custom_quiz_num.inactive {background-color: '+$('.t862__btn_next').css( "background-color" )+';} </style>')

        if($('.t862 input[name="bonus"]').length){
            $('.t862__wrapper').addClass('doubleColumn')
            $('.t862__capture-form').before('<div class="quiz_bonus"><img src="'+$('.t862 input[name="bonus"]').val()+'"></div>')
        }
    }
    $('.t862__wrapper').addClass('created')
}
function getCurrentquestion(){
    


    var val = $('.t862__quiz-description-counter').text()
    val = val.split('/')
    val = Number(val[0])
    //image on select
    isCurrentCuestionOneSelect = ($('.t-input-group:nth-child('+val+') .t-img-select__container input[type="radio"]').length?1:0);
    //text on select
    if(!isCurrentCuestionOneSelect){
        isCurrentCuestionOneSelect = ($('.t-input-group:nth-child('+val+') .t-radio__wrapper input[type="radio"]').length?1:0);
    }
    //is result
    thisIsTheEnd = ($('.t862 .t-popup [type="submit"]').is(":visible")?1:0);
    if(thisIsTheEnd){
        //count result
        var regExp = /\[(.*?)\]/g;
        var matches = regExp.exec(htmlComment);
        var with_brackets = matches[0];
        var without_brackets = matches[1];
        var nums = without_brackets.split('-');
        var seedCount = 0;
        $('.t-input-group input:checked').each(function(){
            var lengther = $(this).val().length;
            seedCount = seedCount+lengther;
            console.log(seedCount)
        })
        Math.seed = seedCount+1;
        Math.seededRandom = function(max, min) {
            max = max || 1;
            min = min || 0;
            Math.seed = (Math.seed * 9301 + 49297) % 233280;
            var rnd = Math.seed / 233280.0;
            return min + rnd * (max - min);
        }
        var finalNum = Math.round(Math.seededRandom(Number(nums[0]),Number(nums[1])));
        if(notchanged){
            notchanged = 0;
            var replaced = $('.cust_descr_holder').html().replace(/\[.*?\]/g,'<b class="changed">'+finalNum+'</b>');
            $('.cust_descr_holder').html(replaced);
        } else {
            $('.cust_descr_holder b.changed').text(finalNum);
        }

        
        //htmlComment.replace(/-1o9-2202/g,'The ALL new string')
        $('.custom_quiz_present').addClass('active')
        $('.t862__progress').addClass('finished')
        $('.t862__progressbar').addClass('finished')
        $('.t862__wrapper').addClass('finished')
    } else {
        $('.t862__progress').removeClass('finished')
        $('.t862__progressbar').removeClass('finished')
        $('.custom_quiz_present').removeClass('active')
        $('.custom_quiz_present').removeClass('finished')
        $('.t862__wrapper').removeClass('finished')
    }
    return val;
}
function setCurrentQuestionActive(){
    var val = getCurrentquestion()
    $('.custom_quiz_num').removeClass('active').removeClass('inactive')
    $('.custom_quiz_num[attr-num="'+val+'"]').addClass('active')
    $('.custom_quiz_num[attr-num="'+val+'"]').prevAll().addClass('inactive')
}
function getAllQuestion(){
    var val = $('.t862__quiz-description-counter').text()
    val = val.split('/')
    return Number(val[1]);
}
function setProgressToWidth(num){
    $('.t862__progress').css({'max-width':num})
}
$(window).keypress(function(e) {
  if (e.keyCode == 109) {
  }
});


//---------------------------------------------------------------------------
//      END Elements Fix
//---------------------------------------------------------------------------



        window.helpelems = [
            {
                'id':'75902352',
                'nick':'m_trans',
                'excl':'menu',
            },
            {
                'id':'76079766',
                'nick':'m_transwlinks',
                'excl':'menu',
            },      
            {
                'id':'76174711',
                'nick':'m_darklogo',
                'excl':'menu',
            },     
            {
                'id':'76503310',
                'nick':'m_fulldark',
                'excl':'menu',
            }, 
            {
                'id':'74213439',
                'nick':'o_black',
                'excl':'main',
            },
            {
                'id':'75965182',
                'nick':'c_whitemac',
            },
            {
                'id':'75965614',
                'nick':'c_bluecta',
                'excl':'forms',
            },
            {
                'id':'75965921',
                'nick':'f_simple',
                'excl':'podval',
            },

        ];
        var addbuttontxt = 'Чтобы добавить кнопку вставь в конце страницы блок "BF 101 Копка" из раздела кнопки и формы. Стилизуй новую кнопку, как тебе надо. Поставь ссылку у кнопки этого блока, чтобы она содержала ID блока с кнопкой в конце страницы (например #rec75968948). Сохрани. Теперь этот блок будет всегда забирать стилизованную кнопку себе, а пустой нижний блок будет удаляться ^^';
        var fullimgtext = 'Поставь SEO: альт-текст для второго изображения "full", чтобы оно отоброжалось во всю ширину';
        window.achiver = [
            /*Обложки*/
            {
                'id':'#rec76006954',
                'name':'Обложка CR12',
                'note':'700px высота блока~Удалить вторую кнопку',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            },
            {
                'id':'#rec74213439',
                'name':'Обложка CR12',
                'note':'700px высота блока~Удалить вторую кнопку~Эффект печатной машинки: блок T-635',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            },
            {
                'id':'#rec75968948',
                'name':'Обложка CR33',
                'note':'700px высота блока~Удалить вторую кнопку~Цвет фильтра 30% черный~'+addbuttontxt,
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            },         
            {
                'id':'#rec74213711',
                'name':'Обложка CR32N',
                'note':'700px высота блока <br>2) Отступ слева 1 колонка<br>3) Отступ слева у второй колонки — без отступа<br>4) Подзаголовок 20px<br>5) Убрать поле с именем <br>6) Изменить цвет кнопки',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            },  

            {
                'id':'#rec76068402',
                'name':'Обложка CR33',
                'note':'700px высота блока~Удалить вторую кнопку~Цвет фильтра вначале #0068f5 90%, цвет фильтра вконце #6200f5 60%~'+addbuttontxt+'~Черно-белая картинка',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            }, 
            {
                'id':'#rec76070305',
                'name':'Обложка CR16',
                'note':'700px высота блока~Удалить вторую кнопку~Описание шрифт 18px',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            },
            {
                'id':'#rec74213550',
                'name':'Обложка CR23',
                'note':'800px высота блока~Картинка черно-белая с каким-то простым узором~Цвет вначале фильтра #005bd5 90%, цвет вконце фильра #ff2b2b 90%~Текст в заголовке в одну строчку',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            },            
            {
                'id':'#rec74213744',
                'name':'Обложка CR23',
                'note':'Удалить поле с именем~Используй меню-шапку без ссылок~Темный фон, передающий атмосферу ниши~Радиус скругления кнопки 3px~Используй простой фон без деталей или в видео, или в фоне. Не используй сложный детализированный фон и там и там, а то получится каша по дизайну~Поставь галочку "Оставлять подсказку видимой при клике на поле" в настройках~Не активируй маску на телефоне',
                'dsgn':'m_transwlinks',
            },  
            {
                'id':'#rec76147298',
                'name':'Обложка CR33',
                'note':fullimgtext+'~700px высота блока~Удалить вторую кнопку~Ширина блока 5 колонок без отступа, ширина второго блока 7 колонок без отступа~'+addbuttontxt+'~Черно-белая картинка~Вертикальное выравание картинки "по центру"',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            }, 
            {
                'id':'#rec76190430',
                'name':'Обложка CR33',
                'note':fullimgtext+'~700px высота блока~Удалить вторую кнопку~Ширина блока 5 колонок без отступа, ширина второго блока 7 колонок без отступа~'+addbuttontxt+'~Вертикальное выравание картинки "по центру"',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            }, 
            {
                'id':'#rec76242639',
                'name':'Обложка CR33',
                'note':'700px высота блока~Удалить вторую кнопку~Abkmnh темный, чтобы билет был ярким~'+addbuttontxt+'~Вертикальное выравание картинки "по низу"',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            }, 
            {
                'id':'#rec76415351',
                'name':'Обложка CR33',
                'note':fullimgtext+'~700px высота блока~Удалить вторую кнопку~Ширина блока 5 колонок 1 колонка отступа, ширина второго блока 5 колонок 1 колонка отступа~'+addbuttontxt+'~Вертикальное выравание картинки "по центру"',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            }, 
            {
                'id':'#rec76471876',
                'name':'Обложка CR33',
                'note':'700px высота блока~Удалить вторую кнопку~Ширина блока 5 колонок отступ 1 колонка, ширина второго блока 6 колонок без отступа~'+addbuttontxt+'Вертикальное выравание картинки "по низу"~Разблюрить фон в Photoshop~Разместить код в html блоке внизу страницы, чтобы появился стол: <br><br>&lt;div class=&quot;block_table_bottom&quot; data-id=&quot;rec76471876&quot; data-src=&quot;https://static.tildacdn.com/tild6439-6232-4937-b362-61336383931/table.jpg&quot;&gt;&lt;/div&gt; <br><br>"data-id" — id блока<br>"data-src" — ссылка на картинку стола. Картинку нужно разместить на своем сайте и скрыть ее, предварительно скопировав на нее ссылку. Картинку стола можно скачать прямо с этого сайта',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            },
            {
                'id':'#rec76479125',
                'name':'Обложка CR33',
                'note':fullimgtext+'~700px высота блока~Удалить вторую кнопку~Ширина блока 5 колонок без отступа, ширина второго блока 7 колонок без отступа~'+addbuttontxt+'~Вертикальное выравание картинки "по центру"',
                'dsgn':'m_trans,c_whitemac,c_bluecta,f_simple',
            },
            {
                'id':'#rec76493290',
                'name':'Обложка CR33',
                'note':fullimgtext+'~700px высота блока~Удалить вторую кнопку~Ширина блока 5 колонок без отступа, ширина второго блока 7 колонок без отступа~'+addbuttontxt+'~Вертикальное выравание картинки "по низу"',
                'dsgn':'m_darklogo,c_whitemac,c_bluecta,f_simple',
            },
            {
                'id':'#rec76495936',
                'name':'Обложка CR33',
                'note':fullimgtext+'~700px высота блока~Удалить вторую кнопку~Ширина блока 5 колонок без отступа, ширина второго блока 7 колонок без отступа~'+addbuttontxt+'~Вертикальное выравание картинки "по низу"~Чтобы вствить код для мессенджеров смотри урок в обучающей платформе',
                'dsgn':'m_fulldark,c_whitemac,c_bluecta,f_simple',
            },
            /*About*/
            {
                'id':'#rec74214902',
                'name':'Обложка AB604',
                'note':'Фон #f2f2f2 цвет текста #111111',
                'dsgn':'m_trans,o_black,c_bluecta,f_simple',
            },

        ];
        window.achiver2 = [
            ['#rec74214703','О проекте: AB102'],
            ['#rec74214707','О проекте: AB103'],
            ['#rec74214712','О проекте: AB104'],
            ['#rec74214727','О проекте: AB105'],
            ['#rec74214764','О проекте: AB201'],
            ['#rec74214780','О проекте: AB301'],
            ['#rec74214843','О проекте: AB401'],
            ['#rec74214843','О проекте: AB401'],
            ['#rec74214881','О проекте: AB501'],
            ['#rec74214885','О проекте: AB601'],
            ['#rec74214887','О проекте: AB602'],
            ['#rec74214902','О проекте: AB604'],
            ['#rec74214907','О проекте: AB605'],
            ['#rec74214939','О проекте: AB607'],
            ['#rec74214944','О проекте: AB701'],
            ['#rec74214980','О проекте: AB902'],

            ['#rec74215393','Заголовок: TL02'],
            ['#rec74215402','Заголовок: TL02A'],   
            ['#rec74215407','Заголовок: TL02B'],
            ['#rec74215428','Заголовок: TL03'],  
            ['#rec74215495','Заголовок: TL04'],
            ['#rec74215489','Заголовок: TL03A'],  
            ['#rec77216988','Заголовок: TL02'],
            ['#rec74215505','Заголовок: TL05'],  

            ['#rec74215724','Текст: TX01'],
            ['#rec74215739','Текст: TX02'],   
            ['#rec74215830','Текст: TX13'],   
            ['#rec74215872','Текст: TX16N'],   
            ['#rec74215883','Текст: TX16N2'],   
            ['#rec74215887','Текст: TX17N'],   
            ['#rec74215895','Текст: TX18N'],   
            ['#rec74215904','Текст: TX19'],   
            ['#rec74215908','Текст: TX20'],   
            ['#rec74215928','Текст: TX21'],   
            ['#rec74215951','Текст: TX22'], 

            ['#rec74260801','Услуги: SV101'],   
            ['#rec74260903','Услуги: SV102'],   
            ['#rec74260933','Услуги: SV201'],   
            ['#rec74260950','Услуги: SV202'],  
            ['#rec74260964','Услуги: SV203'],   
            ['#rec74260980','Услуги: SV302'],   
            ['#rec74260988','Услуги: SV303'],   
            ['#rec74261078','Услуги: SV304'],  
            ['#rec74261079','Услуги: SV305'],   
            ['#rec74261085','Услуги: SV306'],   
            ['#rec74261103','Услуги: SV402'],   
            ['#rec74261166','Услуги: SV405'],  
            ['#rec74261223','Услуги: SV501'], 

            ['#rec74217955','Галлерея: GL01'],   
            ['#rec74217961','Галлерея: GL02'],   
            ['#rec74217967','Галлерея: GL03'],   
            ['#rec74218008','Галлерея: GL04'],   
            ['#rec74218047','Галлерея: GL05'],   
            ['#rec74218412','Галлерея: GL09'],   
            ['#rec74218489','Галлерея: GL12'],   
            ['#rec74218509','Галлерея: GL13'],   
            ['#rec74218540','Галлерея: GL14'],   
            ['#rec74218545','Галлерея: GL15'],   
            ['#rec74218583','Галлерея: GL16'],   
            ['#rec74218608','Галлерея: GL19'],   
            ['#rec74218636','Галлерея: GL20'], 

            ['#rec74219835','Прямая речь: QT04'],   
            ['#rec74220015','Прямая речь: QT19'],  

            ['#rec74220322','Преимущества: FR101'],   
            ['#rec74220333','Преимущества: FR102'],   
            ['#rec74220337','Преимущества: FR103'],   
            ['#rec74220340','Преимущества: FR201'],   
            ['#rec74220343','Преимущества: FR202'],   
            ['#rec74220368','Преимущества: FR204'],     
            ['#rec74220374','Преимущества: FR205'],   
            ['#rec74220380','Преимущества: FR206'],   
            ['#rec74220383','Преимущества: FR207'],   
            ['#rec74220402','Преимущества: FR301'],   
            ['#rec74220406','Преимущества: FR302'],   
            ['#rec74220415','Преимущества: FR303'],    
            ['#rec74220424','Преимущества: FR401'],   
            ['#rec74220469','Преимущества: FR404'], 

            ['#rec74221469','Колонки: CL02'],   
            ['#rec74221501','Колонки: CL06'], 
            ['#rec74221516','Колонки: CL07'], 
            ['#rec74221582','Колонки: CL16'],   
            ['#rec74221519','Колонки: CL10'], 
            ['#rec74221655','Колонки: CL20N'], 
            ['#rec74221675','Колонки: CL22'],   
            ['#rec74221698','Колонки: CL23'], 
            ['#rec74221755','Колонки: CL24'], 
            ['#rec75965182','Колонки: CL25'],   
            ['#rec74221812','Колонки: CL26'], 
            ['#rec74221817','Колонки: CL27'], 
            ['#rec74221833','Колонки: CL46'],   
            ['#rec74221942','Колонки: CL47'], 
            ['#rec74221952','Колонки: CL48'], 

            ['#rec74225936','Плитка и ссылка: TE110'],   
            ['#rec74225939','Плитка и ссылка: TE200'], 
            ['#rec74225961','Плитка и ссылка: TE210'], 
            ['#rec74225964','Плитка и ссылка: TE215'], 
            ['#rec74225978','Плитка и ссылка: TE220'], 
            ['#rec74225983','Плитка и ссылка: TE225'],   
            ['#rec74226025','Плитка и ссылка: TE600'], 
            ['#rec74226031','Плитка и ссылка: TE700'], 

            ['#rec74226759','Подвал: FT101'], 
            ['#rec75965921','Подвал: FT102'], 
            ['#rec74226797','Подвал: FT201'], 
            ['#rec74226865','Подвал: FT203'], 
            ['#rec74226819','Подвал: FT202'], 
            ['#rec74226870','Подвал: FT204'], 
            ['#rec74226873','Подвал: FT301'], 
            ['#rec74226880','Подвал: FT302'], 
            ['#rec74226883','Подвал: FT303'], 
            ['#rec74226889','Подвал: FT304'], 
            ['#rec74226922','Подвал: FT401'], 
            ['#rec74226937','Подвал: FT501'], 

            ['#rec74228837','Видео: VD11'], 

            ['#rec74229835','Форма и кнопка: BF303'], 
            ['#rec77217933','Форма и кнопка: BF303'], 
            ['#rec74229828','Форма и кнопка: BF302'], 
            ['#rec75965614','Форма и кнопка: BF301'], 
            ['#rec74230021','Форма и кнопка: BF403'], 
            ['#rec74229970','Форма и кнопка: BF311N'], 

            ['#rec74233458','Команда: TM101'], 
            ['#rec74233458','Команда: TM102'],
            ['#rec74233478','Команда: TM103'],
            ['#rec74233491','Команда: TM201'],
            ['#rec74233495','Команда: TM301'],
            ['#rec74233517','Команда: TM402'],
            ['#rec74233542','Команда: TM601'],
            ['#rec74233576','Команда: TM603'],

            ['#rec74233716','Отзывы: TS102N'],
            ['#rec74233721','Отзывы: TS103N'],
            ['#rec74233728','Отзывы: TS201'],
            ['#rec74233733','Отзывы: TS202'],
            ['#rec74233754','Отзывы: TS203'],
            ['#rec74233774','Отзывы: TS204'],
            ['#rec74233777','Отзывы: TS205'],
            ['#rec74233785','Отзывы: TS205'],
            ['#rec74233836','Отзывы: TS206N'],
            ['#rec74233851','Отзывы: TS301N'],
            ['#rec74233840','Отзывы: TS207'],

            ['#rec74251353','Расписание: TB101'],
            ['#rec74251358','Расписание: TB102'],
            ['#rec74251465','Расписание: TB104'],
            ['#rec74251469','Расписание: TB201'],
            ['#rec74251484','Расписание: TB301'],
            ['#rec74251507','Расписание: TB302'],

            ['#rec74251616','Этапы: HW102'],
            ['#rec74251624','Этапы: HW103'],
            ['#rec74251631','Этапы: HW201'],
            ['#rec74251636','Этапы: HW202'],
            ['#rec74251645','Этапы: HW301'],
            ['#rec74251649','Этапы: HW302'],
            ['#rec74251655','Этапы: HW303'],
            ['#rec74251660','Этапы: HW401'],
            ['#rec74251671','Этапы: HW402'],
            ['#rec74251677','Этапы: HW403'],
            ['#rec74251685','Этапы: HW404'],

            ['#rec74251942','Контакты: CN101'],
            ['#rec74252041','Контакты: CN109'],
            ['#rec74251952','Контакты: CN102'],
            ['#rec74251957','Контакты: CN103'],
            ['#rec74251963','Контакты: CN104'],
            ['#rec74251968','Контакты: CN105'],
            ['#rec74252001','Контакты: CN106'],
            ['#rec74252008','Контакты: CN107'],
            ['#rec74252035','Контакты: CN108'],
            ['#rec74252047','Контакты: CN201'],
            ['#rec74252054','Контакты: CN301'],
            ['#rec74252108','Контакты: CN302'],
            ['#rec74252135','Контакты: CN401'],
            ['#rec74252142','Контакты: CN402'],
            ['#rec74252168','Контакты: CN403'],
            ['#rec74252173','Контакты: CN501N'],

            ['#rec74261996','Тарифы: PL100'],
            ['#rec74262026','Тарифы: PL102'],
            ['#rec74262052','Тарифы: PL105'],
            ['#rec74262073','Тарифы: PL110'],
            ['#rec74262124','Тарифы: PL115'],
            ['#rec74262163','Тарифы: PL120'],
            ['#rec74262227','Тарифы: PL125'],
            ['#rec74262235','Тарифы: PL200'],
            ['#rec74262240','Тарифы: PL205'],
            ['#rec74262258','Тарифы: PL210'],
            ['#rec74262288','Тарифы: PL215'],
            ['#rec74262317','Тарифы: PL300'],
            ['#rec74262326','Тарифы: PL305'],
            ['#rec74262360','Тарифы: PL310'],

            ['#rec74262554','Партнеры: PR101'],
            ['#rec74262559','Партнеры: PR102'],
            ['#rec74262562','Партнеры: PR201N'],
            ['#rec74262567','Партнеры: PR301'],
            ['#rec74262592','Партнеры: PR401'],
            ['#rec74262570','Партнеры: PR302'],













        ];

            



    //change url 


    //update help block
    function update_help_blocks(){
        var helpers = getUrlParameter('preview');
        if(helpers){
            helpers = helpers.split(',')
            $.each( helpers, function( key, value ) {
                $('[data-helper="'+value+'"]').addClass('activehelper')
            });
        }
    }
    function update_target_hypeblock(){
        var target = getUrlParameter('target');
        if($('#'+target).length){
            set_target_preview($('#'+target));
        }
    }
    function set_target_preview(obj){
        obj.addClass('view')
        $('.t-popup').each(function(){
            $(this).closest('.r.t-rec').addClass('view')
        })
        obj.find('.preview').addClass('on')
        obj.find('.customcontrol').addClass('view')
        obj.find('.preview').find('i').removeClass('fa-eye')
        obj.find('.preview').find('i').addClass('fa-times')
        $('.r.t-rec:not(.view):not(.helpblock):not(.just_as_added_button)').addClass('hide_plz')
        window.history.replaceState('', '', updateURLParameter(window.location.href, "preview", obj.find('.customcontrol').attr('data-helpers')));
        window.history.replaceState('', '', updateURLParameter(window.location.href, "target", obj.attr('id')));
        update_help_blocks();
    }
    function fix_position_of_elements(){
        $('.customcontrol').each(function(){
            $(this).css({'top':$(this).parent().offset().top+20})
        })
    }




        $.each( helpelems, function( key, value ) {
            var $this = $('[id*="'+value['id']+'"]')//
            if(window.location.pathname.substring(1).indexOf(value['excl']) >= 0){
                //...
            } else if(!window.location.pathname.substring(1)&&value['excl']=='main') {
                //...
            } else {
                $this.addClass('helpblock').attr('data-helper',value['nick'])
            }
            
        });
        $.each( achiver, function( key, value ) {
            var $this = $(value['id'])
            var note = value['note'].replace(/~/g, "</li><li>");
            (!$this.hasClass('helpblock')?$this.addClass('hypeblock'):'');
            $this.prepend('<div class="customcontrol" data-helpers="'+value['dsgn']+'"><div class="cc_but note tooltiper"><div class="th_out"><div class="th_in"><i class="fas fa-sticky-note"></i></div></div><div class="cc_noter">Название блока: '+value['name']+'<br><ol><li>'+note+'</li></ol></div></div><div class="cc_but preview"><div class="th_out"><div class="th_in"><i class="fas fa-eye"></i></div></div></div></div>')
        });
        //console.log('dasdasd');
        $.each( achiver2, function( key, value ) {

            var $this = $(value[0])
            console.log($this);
            (!$this.hasClass('helpblock')?$this.addClass('hypeblock'):'');
            $this.prepend('<div class="customcontrol"><div class="cc_but note tooltiper"><div class="th_out"><div class="th_in"><i class="fas fa-sticky-note"></i></div></div><div class="cc_noter">Название блока: '+value[1]+'<br><ol><li></li></ol></div></div><div class="cc_but preview"><div class="th_out"><div class="th_in"><i class="fas fa-eye"></i></div></div></div></div>')
            /**/
        });


        //tooltips
        $('.tooltiper').on('click',function(){
            if($(this).hasClass('on')){
                $(this).removeClass('on')
                $(this).closest('.r.t-rec').removeClass('view')
            } else {
                $(this).addClass('on')
                $(this).closest('.customcontrol').addClass('view')
            }
            fix_position_of_elements();
        }).find('.cc_noter').click(function(e) {
          return false;
        });

        //hide
        window.scrolltoper = 0;
        $('.cc_but.preview').on('click',function(){
            var helpers = $(this).closest('.customcontrol').attr('data-helpers')
            //helpers = helpers.split(',')
            //console.log(helpers)
            if($(this).hasClass('on')){
                $(this).find('i').removeClass('fa-times')
                $(this).find('i').addClass('fa-eye')
                $(this).removeClass('on')
                $(this).closest('.customcontrol').removeClass('view')
                $(this).closest('.r.t-rec').removeClass('view')
                $('.r.t-rec:not(.view)').removeClass('hide_plz')
                $('.activehelper').removeClass('activehelper')
                window.history.replaceState('', '', updateURLParameter(window.location.href, "preview", ''));
                window.history.replaceState('', '', updateURLParameter(window.location.href, "target", ''));
                setTimeout(function() {
                    document.body.scrollTop = document.documentElement.scrollTop = scrolltoper;
                }, 1);
                
            } else {
                scrolltoper = $(document).scrollTop();
                set_target_preview($(this).closest('.hypeblock'));
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
            fix_position_of_elements();
        })

        


        update_help_blocks();
        update_target_hypeblock();
        fix_position_of_elements();












    });
})(jQuery);



