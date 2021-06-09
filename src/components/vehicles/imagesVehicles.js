import React, { Component } from "react";

export default class ImagesVehicles extends Component{ 
    render(){
        const { className, vehicleimage_image, vehicleimage_id} = this.props;
        return (
            <div className={`${className}`} >
                <img id={vehicleimage_id} src={`data:image/jpg;base64,${vehicleimage_image}`} />
            </div>
        );
    }
}