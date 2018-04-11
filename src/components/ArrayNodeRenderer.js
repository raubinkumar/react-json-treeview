"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const helper_1 = require("../../lib/helper");
const renderElements = (data, index, handleSelect) => {
    let type = helper_1.GetType(data);
    let Component = helper_1.GetRenderer(type);
    return React.createElement("li", { key: index, onClick: handleSelect(data) },
        React.createElement(Component, { json: data, isParent: type === "Array" || type === "Object", handleSelect: handleSelect }));
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
exports.ArrayNode = (data) => {
    return (React.createElement("ul", { onClick: handleClick, style: { display: data.isParent ? "block" : "none" } }, data.json.map((ele, index) => {
        return renderElements(ele, index, data.handleSelect);
    })));
};
