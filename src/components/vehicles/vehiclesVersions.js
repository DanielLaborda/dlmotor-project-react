import React, { Component } from "react";

class VehiclesVersions extends Component{ 
    render(){
        const { className, name, urlImage, base_price, list } = this.props;
        return (
            <div className={`${className}__card`} >
                <div className={`${className}__card__image`}>
                    <img src={urlImage} />
                </div>
                <div className={`${className}__card__title`}>
                    {name}
                </div>
                <div className={`${className}__card__list`}>
                    <ul>
                    {
                        list.map(item => {
                            return <li key={item}>{item}</li>
                        })
                    }
                    </ul>
                </div>
                <div className='vehicles__base_price'>
                    {base_price}
                </div>
            </div>
        );
    }
}

export default VehiclesVersions;