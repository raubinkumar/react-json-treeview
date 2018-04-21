import * as React from 'react';
import {GetType, GetRenderer} from '../../lib/helper';

const renderElements = (data:any, index: any, handleSelect: Function)=>{
    let type = GetType(data);
    let Component = GetRenderer(type);
    return <li className = "json-tree-view-list-item" key = {index} onClick = {(e)=>handleClick(e, data)}>
        <Component json = {data} isParent = {type ==="Array" || type === "Object"} handleSelect = {handleSelect}/>
    </li>
}

let handleSelect: Function = undefined;

const handleClick = (e:any, data:any)=>{
    let ele = document.getElementsByClassName("json-tree-view-selected-element");
    if(ele.length > 0){
        ele[0].className = ele[0].className.replace(" json-tree-view-selected-element", '');
    }
    let target =  e.target;
    if(target.tagName === "SPAN"){
        target = target.parentElement;
    }
    if ( target.tagName === "LI" && target.className === "json-tree-view-list-item" ) {
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

export const ArrayNode = (data: any)=>{
    handleSelect = data.handleSelect;
    // display logic here
    if(data.isParent){
        return(
            <ul className = "json-tree-view-list" style = {{display: "block"}}>
                <li className = "json-tree-view-list-item" onClick = {(e)=>handleClick(e, data.json)}>[{data.json.length}]
                    <span className= "json-treeview-triangle-btn json-treeview-triangle-btn-right"></span>
                    <ul className = "json-tree-view-list" style = {{display: "none"}}>
                        {data.json.map((ele:any, index:any) =>{
                            return renderElements(ele, index, data.handleSelect);
                        })}
                    </ul>
                </li>
            </ul>
        )
    }
    else{
        return(
            <ul className = "json-tree-view-list" style = {{display: "none"}}>
                        {data.json.map((ele:any, index:any) =>{
                            return renderElements(ele, index, data.handleSelect);
                        })}
            </ul>
        )
    }
       
}