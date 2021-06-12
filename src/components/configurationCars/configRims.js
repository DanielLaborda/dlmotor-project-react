import React from "react";

export function ConfigRims({ className, rims_image, rims_model, rims_size, rims_material, rims_baseprice }){ 
    return (
        <div className={`${className}`} > 
            <img src={`data:image/png;base64,${rims_image}`}/>         
            <div className={`${className}__model-size`}>
                {rims_model} - {rims_size}
            </div>
            <div className={`${className}__material`}>
                {rims_material}
            </div>
            <div className={`${className}__price`}>
                $ {rims_baseprice}
            </div>
        </div>
    );
}