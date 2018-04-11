"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RendererContainer_1 = require("./RendererContainer");
exports.GetType = (obj) => {
    if (obj === null) {
        return "null";
    }
    else if (obj === undefined) {
        return "undefined";
    }
    else if (obj.constructor === String) {
        return "String";
    }
    else if (obj.constructor === Array) {
        return "Array";
    }
    else if (obj.constructor === Object) {
        return "Object";
    }
    else if (obj.constructor === Number) {
        return "Number";
    }
    else {
        return "don't know";
    }
};
exports.GetRenderer = (type) => {
    switch (type) {
        case "String":
        case "Number":
            return RendererContainer_1.default.get("SimpleNode");
        case "Object":
            return RendererContainer_1.default.get("ObjectNode");
        case "Array":
            return RendererContainer_1.default.get("ArrayNode");
        default:
            return undefined;
    }
};
