import * as React from 'react';
import {GetType, GetRenderer} from '../../lib/helper';

let clickCounter = 0;

const renderContent = (data: any)=>{
    let returnContent = [];

    for(var k in data.json){
        debugger;        
        let type = GetType(data.json[k]);
        let Component = GetRenderer(type);
        let symbol = type === "Object" || type === "Array" ? "+ " : "";

        let typeSymbol = ":";
        if(type === "Object"){
            typeSymbol = "{"+ Object.keys(data.json[k]).length +"}";
        }
        if(type === "Array"){
            let length = data.json[k].length;
            typeSymbol = "[" + length + "]";
        }

        returnContent.push(
                <li key={k}>{symbol}{k}{typeSymbol}
                    <Component json = {data.json[k]}/>
                </li>
        )
    }
    return returnContent;
}

const handleClick = (e:any)=>{
    let target =  e.target;
    console.log(target.parentNode.firstChild);
    if ( target.tagName === "LI") {
        for(var index = 0; index < target.children.length; index++){
            let display = target.children[index].style.display;
            target.children[index].style.display = display === "none" ? "block" : "none";
        }
        e.stopPropagation();
        // target.children.forEach((ele:any) => {
        //     console.log(ele.style)
        // });
      }
}

const render =(node:any)=>{

    const braket = "{" + Object.keys(node.json).length + "}"
    if(node.isParent){
        return(
            <ul onClick = {handleClick} style = {{display: node.isParent ? "block": "none"}}>
                <li>{braket}
                    <ul style = {{display: "none"}}>
                        {...renderContent(node)}
                    </ul>
                </li>
            </ul>
        )
    }
    else{
        return(
            <ul onClick = {handleClick} style = {{display: node.isParent ? "block": "none"}}>
                {...renderContent(node)}
            </ul>
        )
    }
}

export const ObjectNode = (node:any)=>{
    return(
        render(node)
    )
} 