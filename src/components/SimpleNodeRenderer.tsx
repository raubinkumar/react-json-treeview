import * as React from 'react';

const handleClick = (e:any, data:any)=>{
    let ele = document.getElementsByClassName("json-tree-view-selected-element");
    if(ele.length > 0){
        ele[0].className = ele[0].className.replace(" json-tree-view-selected-element", '');
    }
    e.target.className = e.target.className + " json-tree-view-selected-element";
    data.handleSelect(data.json);
}

export const SimpleNode = (node:any)=>{
    if(node.isParent){
        return(
            <ul className = "json-tree-view-list">
                <li className = "json-tree-view-list-item" onClick={(e)=>handleClick(e,node)}>
                    {node.json}
                </li>
            </ul>
        )
    }
    else{
        return(
            node.json
        )
    }
} 