import * as React from 'react';
export const SimpleNode = (node:any)=>{
    if(node.isParent){
        return(
            <ul>
                <li onClick={node.handleSelect(node.json)}>
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