import React, { Component } from "react";

export default class ConfigurationColors extends Component{ 
    
    render(){
        const { className, colors_color, colors_name, colors_price} = this.props;
        return (
            <div className={`${className}`} >
                <div className={`${className}__color`}>
                    <img src={`data:image/png;base64,${colors_color}`} />
                </div>
                <div className={`${className}__name`}>
                    {colors_name}
                </div>
                <div className={`${className}__price`}>
                    $ {colors_price}
                </div>
                
            </div>
        );
    }
}