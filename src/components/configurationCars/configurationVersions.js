import React, { Component } from "react";

class ConfigurationVersions extends Component{ 

    render(){
        const { className, versionsvehicles_name, versionsvehicles_image, versionsvehicles_baseprice, versionsvehicles_components } = this.props;
        return (
            <div className={`${className}`} >
                <div className={`${className}__image`}>
                    <img src={`data:image/jpg;base64,${versionsvehicles_image}`} />
                </div>
                <div className={`${className}__content`}>
                    <div className={`${className}__title`}>
                        {versionsvehicles_name}
                    </div>
                    <div className={`${className}__list`}>
                        <ul>
                        {
                            versionsvehicles_components.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                        </ul>
                    </div>
                    <div className={`${className}__price`}>
                        $ {versionsvehicles_baseprice}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ConfigurationVersions;