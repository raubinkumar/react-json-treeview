"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const helper_1 = require("../lib/helper");
class JSONTreeView extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectedData = (selectedData) => {
            debugger;
            if (this.props.handleSelect) {
                this.props.handleSelect(selectedData);
            }
        };
        this.renderContent = (data) => {
            let type = helper_1.GetType(data);
            let Component = helper_1.GetRenderer(type);
            return React.createElement(Component, { json: data, isParent: true, handleSelect: this.handleSelectedData });
        };
    }
    render() {
        return (React.createElement("div", null, this.renderContent(this.props.json)));
    }
}
exports.default = JSONTreeView;
