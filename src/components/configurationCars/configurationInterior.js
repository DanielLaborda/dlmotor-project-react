import React from "react";

export function ConfigurationInterior ({ className, interior_name, interior_components, interior_image, interior_basePrice}){ 
    return (
        <div className={`${className}`} >  
            <div className={`${className}__imageInterior`}>
                <img src={`data:image/jpg;base64,${interior_image}`} />
            </div>

            <div className={`${className}__title`}>
                {interior_name}
            </div>
            <div className={`${className}__complements`}>
                <ul>
                    {interior_components.map((complement, index) => {
                        return <li key={index}>{complement}</li>
                    })}
                </ul>  
            </div>
            <div className={`${className}__price`}>
                $ {interior_basePrice}
            </div>
            
        </div>
    );
}