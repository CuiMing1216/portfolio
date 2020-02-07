import React, {Component} from 'react';
export default class Work extends Component{
    render(){
        let item = this.props.item;
        return(
            <div className="row item">
                <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                    {item.specialization}
                    <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                    <p>
                        {item.Achievements1}
                        <br/>                          
                        {item.Achievements2}
                        <br/>
                        {item.Achievements3}
                        <br/>
                        {item.Achievements4}
                    </p>
                </div>

            </div>
        )
    }
}