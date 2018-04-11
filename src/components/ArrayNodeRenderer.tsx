import * as React from 'react';
import {GetType, GetRenderer} from '../../lib/helper';

const renderElements = (data:any, index: any, handleSelect: Function)=>{
    let type = GetType(data);
    let Component = GetRenderer(type);
    return <li key = {index} onClick = {(e)=>handleClick(e, data)}><Component json = {data} isParent = {type ==="Array" || type === "Object"} handleSelect = {handleSelect}/></li>
}

let handleSelect: Function = undefined;

const handleClick = (e:any, data:any)=>{
    let target =  e.target;
    if ( target.tagName === "LI") {
        for(var index = 0; index < target.children.length; index++){
            let display = target.children[index].style.display;
            target.children[index].style.display = display === "none" ? "block" : "none";
        }
        handleSelect(data);
        e.stopPropagation();
      }
}

export const ArrayNode = (data: any)=>{
    handleSelect = data.handleSelect;
    // display logic here
    if(data.isParent){
        return(
            <ul style = {{display: data.isParent ? "block": "none"}}>
                <li onClick = {(e)=>handleClick(e, data.json)}>[{data.json.length}]
                    <ul style = {{display: "none"}}>
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
            <ul style = {{display: "none"}}>
                        {data.json.map((ele:any, index:any) =>{
                            return renderElements(ele, index, data.handleSelect);
                        })}
            </ul>
        )
    }
       
}