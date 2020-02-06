import React, {Component} from 'react';
export default class Skill extends Component{
    render(){
        let item = this.props.item;
        return(
            <li>
                <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                </span><em>{item.skillname}</em>
           
             </li>
        );
    }
}