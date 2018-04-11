import * as React from 'react';
import {GetType, GetRenderer} from '../lib/helper'


export interface JSONTreeViewInterface{
    json?: any,
    handleSelect?: Function
}

class JSONTreeView extends React.Component<JSONTreeViewInterface, any>{
    constructor(props:JSONTreeViewInterface) {
        super(props);
      }
     
      handleSelectedData = (selectedData: any)=>{
          console.log(selectedData);
          if(this.props.handleSelect){
            this.props.handleSelect(selectedData)
          }
      }

      renderContent = (data:any)=>{
        
        let type = GetType(data);
        
        let Component = GetRenderer(type);
        return <Component json = {data} isParent = {true} handleSelect = {this.handleSelectedData}/>;
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