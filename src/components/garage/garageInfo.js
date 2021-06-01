import React, { Component } from "react";

class GarageInfo extends Component{
    render(){
        const { className, garage_name, garage_description, garage_contact, garage_image } = this.props;
        
        return (
            <div className={className}>
                <div className={`${className}__content`}  style={{backgroundImage: (garage_image!=undefined)?`url(data:image/jpg;base64,${garage_image})`:''}}> 
                    <div className={`${className}__content__name`}>
                        {garage_name}
                    </div>
                    <div className={`${className}__content__description`}>
                        {garage_description}
                    </div>
                    <div className={`${className}__content__contact`}>
                        Contact: {garage_contact}
                    </div>
                </div>
            </div>
        );
    }
}
  export default GarageInfo;