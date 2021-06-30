
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var regExp = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(regExp, arguments[i]);
                }
            }
        }
    }
    return result;
}

var lang = window.navigator.languages ?
    window.navigator.languages[0] :
    (window.navigator.language || window.navigator.userLanguage);

window.i18nResource = i18n_zh_CN

var _i18n = function (s, ...args) {
    if(!window.i18nResource){
        return s
    }
    let m = window.i18nResource[s]
    if (m) {
        console.log("i18n:", s, m)
        if(args && args.length>0)
            return m.format(args)
        return m
    } else {
        console.log("i18n miss:", s, m)
        return s
    }
};
var __ = _i18n
window.__ = _i18n;
console.log("__i18n.init");

(function() {
    'use strict';

    // Define frontend.i18n module
    angular.module('frontend._i18n', []);

}());
