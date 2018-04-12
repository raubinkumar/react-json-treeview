import * as React from 'react';
import {GetType, GetRenderer} from '../../lib/helper';

let clickCounter = 0;

const renderContent = (data: any)=>{
    let returnContent = [];

    for(var k in data.json){
        let type = GetType(data.json[k]);
        let Component = GetRenderer(type);
        let arrow = type === "Object" || type === "Array" ? <span className= "json-treeview-triangle-btn json-treeview-triangle-btn-right"></span> : "";

        let typeSymbol = ":";
        if(type === "Object"){
            typeSymbol = "{"+ Object.keys(data.json[k]).length +"}";
        }
        if(type === "Array"){
            let length = data.json[k].length;
            typeSymbol = "[" + length + "]";
        }
        let servingData:any = {};
        servingData[k] = data.json[k];
        returnContent.push(
                <li key={k} onClick = {(e)=>handleClick(e,servingData)}>{arrow}{k}{typeSymbol}
                    <Component json = {data.json[k]} handleSelect = {data.handleSelect}/>
                </li>
        )
    }
    return returnContent;
}

let handleSelect: Function = undefined;

const handleClick = (e:any, data: any)=>{
    let ele = document.getElementsByClassName("json-tree-view-selected-element");
    if(ele.length > 0){
        ele[0].className = ele[0].className.replace(" json-tree-view-selected-element", '');
    }

    let target =  e.target;
    if(target.tagName === "SPAN"){
        target = target.parentElement;
    }
    if ( target.tagName === "LI") {
        for(var index = 0; index < target.children.length; index++){
            if(target.children[index].tagName ==="SPAN"){
                let className = target.children[index].className;
                let newClass = className.includes("-right") ? className.replace('right','down') : className.replace('down','right')
                target.children[index].className = newClass;
            }
            else{
                let display = target.children[index].style.display;
                target.children[index].style.display = display === "none" ? "block" : "none";
            }
        }
        target.className = target.className + " json-tree-view-selected-element";
        handleSelect(data);
        e.stopPropagation();
      }
}

const render =(node:any)=>{

    const braket = "{" + Object.keys(node.json).length + "}"
    if(node.isParent){
        return(
            <ul style = {{display: node.isParent ? "block": "none"}}>
                <li onClick = {(e)=>handleClick(e, node.json)}>
                    <span className= "json-treeview-triangle-btn json-treeview-triangle-btn-right"></span>
                        {braket}
                    <ul style = {{display: "none"}}>
                        {...renderContent(node)}
                    </ul>
                </li>
            </ul>
        )
    }
    else{
        return(
            <ul style = {{display: node.isParent ? "block": "none"}}>
                {...renderContent(node)}
            </ul>
        )
    }
}

export const ObjectNode = (node:any)=>{
    handleSelect = node.handleSelect;
    return(
        render(node)
    )
} 