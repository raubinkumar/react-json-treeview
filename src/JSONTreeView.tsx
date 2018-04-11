import * as React from 'react';
import {GetType, GetRenderer} from '../lib/helper'


export interface JSONTreeViewInterface{
    json?: any,
    onClick?: Function
}

class JSONTreeView extends React.Component<JSONTreeViewInterface, any>{
    constructor(props:JSONTreeViewInterface) {
        super(props);
      }

      renderContent = (data:any)=>{
        
        let type = GetType(data);
        
        let Component = GetRenderer(type);
        return <Component json = {data} isParent = {true}/>;
      }
      render(){
        return(
            <div>
                {this.renderContent(this.props.json)}
            </div>
        )
      }
}

export default JSONTreeView;