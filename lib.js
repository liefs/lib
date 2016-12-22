"use strict";
function isUndefined(thing) {
    return (thing === undefined);
}
exports.isUndefined = isUndefined;
function isDefined(thing) {
    return !(thing === undefined);
}
exports.isDefined = isDefined;
function asString(it) {
    if (it['italics'] !== undefined)
        return it;
    return undefined;
}
exports.asString = asString;
function asNumber(it) {
    if (it['toFixed'] !== undefined)
        return it;
    return undefined;
}
exports.asNumber = asNumber;
function asArray(it) {
    if (it.concat !== undefined)
        return it;
    return undefined;
}
exports.asArray = asArray;
function asObject(it) {
    if (isDefined(it) && !(asString(it) || asArray(it) || asNumber(it)))
        return it;
    return undefined;
}
exports.asObject = asObject;
function isIn(obj, key) { return (key in obj); }
exports.isIn = isIn;
function el(id) { return document.getElementById(id); }
exports.el = el;
