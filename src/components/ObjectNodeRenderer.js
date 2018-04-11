"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const helper_1 = require("../../lib/helper");
let clickCounter = 0;
const renderContent = (data) => {
    let returnContent = [];
    for (var k in data.json) {
        let type = helper_1.GetType(data.json[k]);
        let Component = helper_1.GetRenderer(type);
        let symbol = type === "Object" || type === "Array" ? "+ " : "";
        let typeSymbol = ":";
        if (type === "Object") {
            typeSymbol = "{" + Object.keys(data.json[k]).length + "}";
        }
        if (type === "Array") {
            let length = data.json[k].length;
            typeSymbol = "[" + length + "]";
        }
        returnContent.push(React.createElement("li", { key: k, onClick: data.handleSelect({ k: data.json[k] }) },
            symbol,
            k,
            typeSymbol,
            React.createElement(Component, { json: data.json[k], handleSelect: data.handleSelect })));
    }
    return returnContent;
};
const handleClick = (e) => {
    let target = e.target;
    console.log(target.parentNode.firstChild);
    if (target.tagName === "LI") {
        for (var index = 0; index < target.children.length; index++) {
            let display = target.children[index].style.display;
            target.children[index].style.display = display === "none" ? "block" : "none";
        }
        e.stopPropagation();
    }
};
const render = (node) => {
    const braket = "{" + Object.keys(node.json).length + "}";
    if (node.isParent) {
        return (React.createElement("ul", { onClick: handleClick, style: { display: node.isParent ? "block" : "none" } },
            React.createElement("li", null,
                braket,
                React.createElement("ul", { style: { display: "none" } }, renderContent(node)))));
    }
    else {
        return (React.createElement("ul", { onClick: handleClick, style: { display: node.isParent ? "block" : "none" } }, renderContent(node)));
    }
};
exports.ObjectNode = (node) => {
    return (render(node));
};
