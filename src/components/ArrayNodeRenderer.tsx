import * as React from 'react';
import {GetType, GetRenderer} from '../../lib/helper';

const renderElements = (data:any)=>{
    let type = GetType(data);
    let Component = GetRenderer(type);
    return <li><Component json = {data} isParent = {type ==="Array" || type === "Object"}/></li>
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

export const ArrayNode = (data: any)=>{
    // display logic here
    return(
        <ul onClick = {handleClick} style = {{display: data.isParent ? "block": "none"}}>
            {data.json.map((ele:any) =>{
                return renderElements(ele);
            })}
        </ul>
    )
}