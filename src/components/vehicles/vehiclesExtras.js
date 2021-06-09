import React, { Component } from "react";

export default class VehiclesExtras extends Component{ 
    
    render(){
        const { className, extra} = this.props;
        return (
            <div className={`${className}__card`} >
                {extra}
            </div>
        );
    }
}